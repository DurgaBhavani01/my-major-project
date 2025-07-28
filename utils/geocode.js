// utils/geocodeLocation.js
const axios = require("axios");

module.exports = async function geocodeLocation(location) {
  const response = await axios.get("https://nominatim.openstreetmap.org/search", {
    params: {
      q: location,
      format: "json",
      limit: 1,
    },
    headers: {
      "User-Agent": "WanderlustApp/1.0 (gurugubellibhavani232@gmail.com)",
    },
  });

  const data = response.data;
  if (!data || data.length === 0) return null;

  return {
    lat: data[0].lat,
    lng: data[0].lon,
  };
};

