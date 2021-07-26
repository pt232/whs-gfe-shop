import { initMap } from "./map.js";

const stores = [
  {
    id: 1,
    city: "London",
    address: "180-182 Regent Street, London, W1B 5BT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.",
    phone: "0123-456-789",
    website: "www.yourwebsite-london.com",
    email: "support@yourwebsite-london.com",
    openings:
      "Monday-Friday: 9am to 6pm Saturday: 10am to 6pm Sunday: 10am to 2pm",
    longitude: -0.13768,
    latitude: 51.51006,
  },
  {
    id: 2,
    city: "New York",
    address: "109 Columbus Circle, New York, NY 10023",
    description:
      "Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non sodales nisl.",
    phone: "0149-152-531",
    website: "www.yourwebsite-ny.com",
    email: "support@yourwebsite-ny.com",
    openings:
      "Monday-Friday: 8am to 5pm Saturday: 11am to 7pm Sunday: 10am to 2pm",
    longitude: -73.981529,
    latitude: 40.768318,
  },
  {
    id: 3,
    city: "Paris",
    address: "2133 Rue Saint-Honoré, 75001 Paris",
    description:
      "Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncus eleifend. Curabitur laoreet nisl eget rutruml auctor. Vestibulum ante ipsum primis in faucibus orcip luctus et ultrices posuere cubilia curae cras.",
    phone: "0159-412-419",
    website: "www.yourwebsite-paris.com",
    email: "support@yourwebsite-paris.com",
    openings:
      "Monday-Friday: 7am to 5pm Saturday: 8am to 5pm Sunday: 10am to 4pm",
    longitude: 2.33465,
    latitude: 48.863621,
  },
];

const buttons = document.querySelectorAll("[data-button]");
const locationInformation = document.querySelector("#locationInformation");
const map = document.querySelector("#map");
let currentStoreId = 1;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStoreId = updateLocationInformation(
      currentStoreId,
      btn.dataset.storeId,
      stores
    );
  });
});

updateLocationInformation(currentStoreId, 1, stores);
initMap(stores[0].longitude, stores[0].latitude);

function updateLocationInformation(currentStoreId, storeId, stores) {
  if (currentStoreId == storeId) return currentStoreId;

  const location = stores.find((store) => store.id == storeId);

  map.innerHTML = "";
  initMap(location.longitude, location.latitude);

  const locationHtml = `
    <h3 class="title">${location.city}</h3>
    <h5 class="subtitle">${location.address}</h5>
    <p class="text">${location.description}</p>
    <ul class="location-information__list">
        <li class="location-information__item">
            <i class="fas fa-map-marker-alt"></i>
            <p>${location.address}</p>
        </li>
            <li class="location-information__item">
            <i class="fas fa-phone-alt"></i>
            <p>${location.phone}</p>
        </li>
        <li class="location-information__item">
        <i class="fas fa-link"></i>
            <p>
                <a href="https://www.yourwebsite.com">${location.website}</a>
            </p>
        </li>
        <li class="location-information__item">
            <i class="far fa-envelope"></i>
            <p><a href="mailto:info@w-hs.de">${location.email}</a></p>
        </li>
        <li class="location-information__item">
            <i class="far fa-clock"></i>
            <p>${location.openings}</p>
        </li>
    </ul>
    <ul class="location-information__socials">
        <li class="location-information__social">
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fab fa-facebook-f"></i>
            </a>
        </li>
        <li class="location-information__social">
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fab fa-twitter"></i>
            </a>
        </li>
        <li class="location-information__social">
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fab fa-instagram"></i>
            </a>
        </li>
        <li class="location-information__social">
            <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fab fa-pinterest"></i>
            </a>
        </li>
    </ul>
  `;

  locationInformation.innerHTML = "";
  locationInformation.insertAdjacentHTML("beforeend", locationHtml);

  return storeId;
}
