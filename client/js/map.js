function initMap() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHQyMzIiLCJhIjoiY2tyZ25uMDkwMGplZjMxcW52cDE2cWdwNiJ9.HeMXLmXiY6yRspOcPs8AxQ";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-0.14032, 51.51328],
    zoom: 16,
  });

  new mapboxgl.Marker({
    color: "#00c7c7",
  })
    .setLngLat([-0.14032, 51.51328])
    .addTo(map);

  const nav = new mapboxgl.NavigationControl();

  map.addControl(nav, "top-left");
}

initMap();
