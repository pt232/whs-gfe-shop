const productGrid = document.querySelector("#productGrid");
const sortOptions = document.querySelectorAll(".products__option");
const sortOffers = document.querySelector("#sortOffers");
const sortPriceLth = document.querySelector("#sortPriceLth");
const sortPriceHtl = document.querySelector("#sortPriceHtl");
let currentPage = 1;
let currentFilter = "offers";

sortOffers.addEventListener("click", () => {
  displayCurrentFilter(0, "offers");
  createProductGrid(currentPage, currentFilter);
});

sortPriceLth.addEventListener("click", () => {
  displayCurrentFilter(1, "plth");
  createProductGrid(currentPage, currentFilter);
});

sortPriceHtl.addEventListener("click", () => {
  displayCurrentFilter(2, "phtl");
  createProductGrid(currentPage, currentFilter);
});

createProductGrid(currentPage, currentFilter);

async function createProductGrid(page, sortBy) {
  const data = await fetchProducts(page, sortBy);

  if (data.success) {
    const { data: products } = data;
    let productItemsHtml = "";

    products.forEach((product, index) => {
      productItemsHtml += getProductItem(product, index);
    });

    productGrid.innerHTML = "";
    adjustGridRows(products.length);
    createPageSystem(data.pageCount);

    productGrid.insertAdjacentHTML("afterbegin", productItemsHtml);
  } else {
    adjustGridRows(0);
    productGrid.innerText = data.error;
  }
}

function getProductItem(product, index) {
  return `
    <a href="product-view.html?productId=${product.id}" class="product-item ${
    index == 2 || index == 3 ? "product-item--big" : ""
  }">
        <img src="${product.image.all[0]}" alt="Lookbook" />
        <div class="product-item__thumbnails">
        <img
            src="${product.image.thumbnails[0]}"
            alt="Image Thumbnail"
            class="product-item__thumbnail"
        />
        <img
            src="${product.image.thumbnails[1]}"
            alt="Image Thumbnail"
            class="product-item__thumbnail"
        />
        </div>
        ${
          !product.price.offer
            ? '<p class="product-item__price"><span class="product-item__current">' +
              product.price.current.toFixed(2) +
              "</span></p>"
            : '<p class="product-item__price"><span class="product-item__last">' +
              product.price.last.toFixed(2) +
              "</span><span class='product-item__current'>" +
              product.price.current.toFixed(2) +
              "</span></p>"
        }
        <div class="product-item__details">
        <h6 class="product-item__title">
            ${product.name} <sup>&euro;</sup>${product.price.current}
        </h6>
        <p class="text">
            ${product.description.short}
        </p>
        </div>
    </a>
    `;
}

function adjustGridRows(productCountOnPage) {
  productGrid.className = "products__grid";
  if (productCountOnPage === 0) {
    productGrid.classList.add("products__grid--no");
  } else if (productCountOnPage < 4) {
    productGrid.classList.add("products__grid--second");
  }
}

function createPageSystem(pageCount) {
  const pageWrapper = document.createElement("div");

  for (let i = 0; i < pageCount; i++) {
    const pageSelector = document.createElement("div");
    const pageNumber = document.createTextNode(i + 1);

    pageWrapper.classList.add("products__pages");
    pageSelector.classList.add("products__page");
    if (i === currentPage - 1)
      pageSelector.classList.add("products__page--selected");

    pageSelector.appendChild(pageNumber);
    pageWrapper.appendChild(pageSelector);

    pageSelector.addEventListener("click", () => {
      currentPage = i + 1;
      createProductGrid(currentPage, currentFilter);
      window.location.href = "#products";
    });
  }

  productGrid.appendChild(pageWrapper);
}

function displayCurrentFilter(index, filter) {
  currentPage = 1;
  currentFilter = filter;
  for (let i = 0; i < sortOptions.length; i++) {
    if (i === index)
      sortOptions[i].classList.add("products__option--seclected");
    else sortOptions[i].classList.remove("products__option--seclected");
  }
}

async function fetchProducts(page, sortBy) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/product?page=${page}&sort=${sortBy}`
    );
    return await res.json();
  } catch (error) {
    throw new Error();
  }
}
