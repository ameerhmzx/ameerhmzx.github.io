import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel";
import AutoHeight from "embla-carousel-auto-height";

export function initEmbla(
  root: HTMLElement,
  prevButton: HTMLButtonElement,
  nextButton: HTMLButtonElement,
) {
  const emblaApi = EmblaCarousel(root, undefined, [AutoHeight()]);

  const removeControlButtonClickHandlers = addControlButtonClickHandler(
    emblaApi,
    prevButton,
    nextButton,
  );

  emblaApi.on("destroy", removeControlButtonClickHandlers);
}

function addControlButtonClickHandler(
  emblaApi: EmblaCarouselType,
  prevButton: HTMLButtonElement,
  nextButton: HTMLButtonElement,
) {
  prevButton.addEventListener("click", () => emblaApi.scrollPrev(), false);
  nextButton.addEventListener("click", () => emblaApi.scrollNext(), false);

  const removeToggleControlButtonActive = addToggleControlButtonActive(
    emblaApi,
    prevButton,
    nextButton,
  );

  return () => {
    removeToggleControlButtonActive();
    prevButton.removeEventListener("click", () => emblaApi.scrollPrev(), false);
    nextButton.removeEventListener("click", () => emblaApi.scrollNext(), false);
  };
}

const addToggleControlButtonActive = (
  emblaApi: EmblaCarouselType,
  prevButton: HTMLElement,
  nextButton: HTMLElement,
): (() => void) => {
  const toggleControlButtonState = (): void => {
    if (emblaApi.canScrollPrev()) prevButton.removeAttribute("disabled");
    else prevButton.setAttribute("disabled", "disabled");

    if (emblaApi.canScrollNext()) nextButton.removeAttribute("disabled");
    else nextButton.setAttribute("disabled", "disabled");
  };

  emblaApi
    .on("select", toggleControlButtonState)
    .on("init", toggleControlButtonState)
    .on("reInit", toggleControlButtonState);

  return (): void => {
    prevButton.removeAttribute("disabled");
    nextButton.removeAttribute("disabled");
  };
};
