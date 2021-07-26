import { initImageSlider } from "./slider.js";

const productHeroTitle = document.querySelector("#productHeroTitle");
const imageSlider = document.querySelector("#imageSlider");
const productTitle = document.querySelector("#productTitle");
const productStars = document.querySelector("#productStars");
const productReviews = document.querySelector("#productReviews");
const productPrice = document.querySelector("#productPrice");
const productAvailability = document.querySelector("#productAvailability");
const productCode = document.querySelector("#productCode");
const productDescriptionMiddle = document.querySelector(
  "#productDescriptionMiddle"
);
const productProperties = document.querySelector("#productProperties");
const tabContent = document.querySelector("#tabContent");
const tabDescriptionTitle = document.querySelector("#tabDescriptionTitle");

fetchProductData();

async function fetchProductData() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/product/${productId}`
    );
    const data = await res.json();

    if (!data.success) {
      window.location.href = "index.html";
    } else {
      passData(data.data);
    }
  } catch (error) {
    window.location.href = "index.html";
  }
}

function passData(data) {
  const images = data.image.all;

  fillImageSlider(images);
  fillProductInformation(data);
  fillTabsDescription(data.description.long);
}

function fillImageSlider(images) {
  let sliderItemHtml = "";

  images.forEach((img) => {
    sliderItemHtml += `
        <li class="slider__item">
            <img src="${img}" alt="Product" />
        </li>
    `;
  });

  imageSlider.insertAdjacentHTML("afterbegin", sliderItemHtml);
  initImageSlider();
}

function fillProductInformation(data) {
  productHeroTitle.innerText = data.name;
  productTitle.innerText = data.name;
  productReviews.innerText = data.reviews.count + " Review(s)";
  productPrice.innerText = data.price.current;
  productAvailability.innerText = data.availability
    ? "In Stock"
    : "Out of Stock";
  productCode.innerText = data.productCode;
  fillStars(data.reviews.average);
  fillDescription(data.description);
}

function fillStars(reviewAverage) {
  for (let i = 0; i < 5; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add("fas", "fa-star", "star");

    if (i < reviewAverage) starIcon.classList.add("star--filled");

    productStars.appendChild(starIcon);
  }
}

function fillDescription(description) {
  const { properties } = description;
  let propertyElementHtml = "";

  productDescriptionMiddle.innerText = description.middle;

  properties.forEach((property) => {
    propertyElementHtml += `
        <li>${property}</li>     
    `;
  });

  productProperties.insertAdjacentHTML("afterbegin", propertyElementHtml);
}

function fillTabsDescription(longDescription) {
  let { paragraphs } = longDescription;
  let paragraphHtml = "";

  tabDescriptionTitle.innerText = longDescription.title;

  paragraphs.forEach((paragraph) => {
    paragraphHtml += `<p class="text">${paragraph}</p>`;
  });

  tabContent.insertAdjacentHTML("beforeend", paragraphHtml);
}
