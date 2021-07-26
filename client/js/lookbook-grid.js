const lookbookGrid = document.querySelector("#lookbookGrid");
const sortOptions = document.querySelectorAll(".look-book__option");
const sortLatest = document.querySelector("#sortLatest");
const sortPriceLth = document.querySelector("#sortPriceLth");
const sortPriceHtl = document.querySelector("#sortPriceHtl");
let currentPage = 1;
let currentFilter = "latest";

sortLatest.addEventListener("click", () => {
  displayCurrentFilter(0, "latest");
  createLookbookGrid(currentPage, currentFilter);
});

sortPriceLth.addEventListener("click", () => {
  displayCurrentFilter(1, "plth");
  createLookbookGrid(currentPage, currentFilter);
});

sortPriceHtl.addEventListener("click", () => {
  displayCurrentFilter(2, "phtl");
  createLookbookGrid(currentPage, currentFilter);
});

createLookbookGrid(currentPage, currentFilter);

async function createLookbookGrid(page, sortBy) {
  const data = await fetchLookbooks(page, sortBy);

  if (data.success) {
    const { data: lookbooks } = data;
    let lookbookItemsHtml = "";

    lookbooks.forEach((lookbook) => {
      lookbookItemsHtml += getLookboookItem(lookbook);
    });

    clearLookbookGrid();
    adjustGridRows(lookbooks.length);
    createPageSystem(data.pageCount);

    lookbookGrid.insertAdjacentHTML("afterbegin", lookbookItemsHtml);
  } else {
    adjustGridRows(0);
    productGrid.innerText = data.error;
  }
}

function getLookboookItem(lookbook) {
  return `
    <div class="look-item">
        <img src="${lookbook.image}" alt="Lookbook" />
        <div class="look-item__details">
        <h6 class="look-item__title">${lookbook.name}</h6>
        <p class="text">${lookbook.description}</p>
        <p class="look-item__cost text">
            Total cost including shorts, shoes and accessories is
            <span>&euro;${lookbook.price}</span>
        </p>
        </div>
    </div>
    `;
}

function clearLookbookGrid() {
  const lookbookItems = document.querySelectorAll(".look-item");
  const pageWrapper = document.querySelectorAll(".look-book__pages");

  for (let i = 0; i < lookbookItems.length; i++) {
    lookbookItems[i].parentNode.removeChild(lookbookItems[i]);
  }

  for (let i = 0; i < pageWrapper.length; i++) {
    pageWrapper[i].parentNode.removeChild(pageWrapper[i]);
  }
}

function adjustGridRows(productCountOnPage) {
  lookbookGrid.className = "look-book__grid";
  if (productCountOnPage === 0) {
    lookbookGrid.classList.add("look-book__grid--no");
  } else if (productCountOnPage === 1) {
    lookbookGrid.classList.add("look-book__grid--one");
  } else if (productCountOnPage <= 3) {
    lookbookGrid.classList.add("look-book__grid--three");
  }
}

function createPageSystem(pageCount) {
  const pageWrapper = document.createElement("div");

  for (let i = 0; i < pageCount; i++) {
    const pageSelector = document.createElement("div");
    const pageNumber = document.createTextNode(i + 1);

    pageWrapper.classList.add("look-book__pages");
    pageSelector.classList.add("look-book__page");
    if (i === currentPage - 1)
      pageSelector.classList.add("look-book__page--selected");

    pageSelector.appendChild(pageNumber);
    pageWrapper.appendChild(pageSelector);

    pageSelector.addEventListener("click", () => {
      currentPage = i + 1;
      createLookbookGrid(currentPage, currentFilter);
    });
  }

  lookbookGrid.appendChild(pageWrapper);
}

async function fetchLookbooks(page, sortBy) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/lookbook?page=${page}&sort=${sortBy}`
    );
    return await res.json();
  } catch (error) {
    throw new Error();
  }
}

function displayCurrentFilter(index, filter) {
  currentPage = 1;
  currentFilter = filter;
  for (let i = 0; i < sortOptions.length; i++) {
    if (i === index)
      sortOptions[i].classList.add("look-book__option--seclected");
    else sortOptions[i].classList.remove("look-book__option--seclected");
  }
}
