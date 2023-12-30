"""
This script parses the html file from LinkedIn recommendations and creates a yaml file for each recommendation.
The yaml file contains the following fields:
- name
- headline
- recommendation
- date
- image
- url
- slug
- company (empty) to be filled manually
- title (empty) to be filled manually
"""

import yaml
from datetime import datetime

from bs4 import BeautifulSoup
import os


def find_recommendation_file():
    for file in os.listdir("."):
        if file.endswith(".html") and file.startswith("Recommendations"):
            return file


def parse_recommendation_from_li(li_el):
    recommendation = {}

    link_els = li_el.find_all("a")
    if link_els is None or len(link_els) < 2:
        return None

    img_el = link_els[0].find("img")
    if img_el is None:
        return None

    name_el = link_els[1].find("div", {"class": "hoverable-link-text"}).find("span")
    if name_el is None:
        return None

    headline_el = link_els[1].select("a > span:nth-child(2) > span:nth-child(1)")[0]
    if headline_el is None:
        return None

    date_el = link_els[1].select("a > span:nth-child(3) > span")[0]
    if date_el is None:
        return None

    date_str = " ".join(date_el.get_text().split(",")[:2])
    # parse date from this format December 4  2023
    date = None
    try:
        date = datetime.strptime(date_str, "%B %d %Y")
    except ValueError:
        return None

    r_recommendation_el = li_el.find("ul", {"class": "pvs-list"}).find("ul", {"class": "pvs-list"})
    if r_recommendation_el is None:
        return None

    recommendation["image"] = img_el.attrs["src"]
    recommendation["url"] = link_els[1].attrs["href"]
    recommendation["name"] = name_el.get_text().strip()
    recommendation["headline"] = headline_el.get_text().strip()
    recommendation["recommendation"] = r_recommendation_el.get_text().strip()
    recommendation["date"] = date.strftime("%Y-%m-%d")
    recommendation["slug"] = recommendation["name"].lower().replace(" ", "_")

    return recommendation


def parse_recommendations(file):
    html = file.read()
    recommendations = []

    soup = BeautifulSoup(html, "html.parser")
    r_list_el = soup.find("ul", {"class": "pvs-list"})

    for r_li_el in r_list_el.find_all("li"):
        recommendation = parse_recommendation_from_li(r_li_el)
        if recommendation is not None:
            recommendations.append(recommendation)

    return recommendations


def save_recommendations(recommendations):
    os.makedirs("out", exist_ok=True)
    for recommendation in recommendations:
        # move image to out folder
        with open(recommendation["image"], "rb") as f:
            img = f.read()
            with open("out/" + recommendation["slug"] + ".jpg", "wb") as fe:
                fe.write(img)

        # save yaml file
        with open("out/" + recommendation["slug"] + ".yaml", "w") as f:
            recommendation["image"] = "./" + recommendation["slug"] + ".jpg"
            recommendation["company"] = "---"
            recommendation["title"] = "---"
            yaml.dump(recommendation, f)


if __name__ == "__main__":
    with open(find_recommendation_file(), "r") as f:
        save_recommendations(parse_recommendations(f))
