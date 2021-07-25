export function initMap(longitude, latitude) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHQyMzIiLCJhIjoiY2tyZ25uMDkwMGplZjMxcW52cDE2cWdwNiJ9.HeMXLmXiY6yRspOcPs8AxQ";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [longitude, latitude],
    zoom: 16,
  });

  new mapboxgl.Marker({
    color: "#00c7c7",
  })
    .setLngLat([longitude, latitude])
    .addTo(map);

  const nav = new mapboxgl.NavigationControl();

  map.addControl(nav, "top-left");
}
