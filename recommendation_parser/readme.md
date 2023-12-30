# Linkedin Recommendation Parser

## Description

The purpose of this script is to parse the recommendations from linkedin
and convert them into yaml file that can be used by the website.

## Usage

### Download the recommendations

1. Goto www.linkedin.com/in/{{YourProfile}}/details/recommendations
2. Save the page as html file in this directory

### Install Dependencies

```bash
pip3 install -r requirements.txt
```

### Run the script

```bash
python3 parse.py
```

### Output

The script will generate yaml files in the `out` directory. You can copy the
files to the `src/content/recommendations` directory of the website.

Limitations:

- The script will not parse the company name of the recommender
- The script will not parse the job title of the recommender
