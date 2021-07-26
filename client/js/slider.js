const slider = document.querySelector("#imageSlider");
const sliderArrowLeft = document.querySelector("#sliderArrowLeft");
const sliderArrowRight = document.querySelector("#sliderArrowRight");
let sliderItemIndex = 0;

sliderArrowLeft.addEventListener("click", slideLeft);
sliderArrowRight.addEventListener("click", slideRight);

initImageSlider();

export function initImageSlider() {
  const sliderItems = [...slider.getElementsByTagName("li")];

  sliderItems.forEach((item, index) => {
    if (index !== 0) item.classList.add("slider__item--hide");
  });
}

function slideLeft() {
  const sliderItems = [...slider.getElementsByTagName("li")];

  if (sliderItemIndex > 0) sliderItemIndex--;
  else sliderItemIndex = sliderItems.length - 1;

  changeSliderItemState(sliderItems);
}

function slideRight() {
  const sliderItems = [...slider.getElementsByTagName("li")];

  if (sliderItemIndex < sliderItems.length - 1) sliderItemIndex++;
  else sliderItemIndex = 0;

  changeSliderItemState(sliderItems);
}

function changeSliderItemState(sliderItems) {
  sliderItems.forEach((item, index) => {
    if (sliderItemIndex === index) item.classList.remove("slider__item--hide");
    else item.classList.add("slider__item--hide");
  });
}
