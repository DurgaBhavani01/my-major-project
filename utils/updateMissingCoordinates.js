const Listing = require("../models/listing");
const axios = require("axios");
const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/wanderlust"; // or your connection string

mongoose.connect(dbUrl)
  .then(() => {
    console.log("✅ Connected to DB");
    updateCoordinates();
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
  });

async function updateCoordinates() {
  const listings = await Listing.find({});

  for (const listing of listings) {
    if (!listing.geometry || !listing.geometry.coordinates.length) {
      const location = listing.location;
      try {
        const response = await axios.get("https://nominatim.openstreetmap.org/search", {
          params: {
            q: location,
            format: "json",
            limit: 1,
          },
          headers: {
            "User-Agent": "WanderlustApp/1.0 (your_email@example.com)",
          },
        });

        const data = response.data;
        if (data.length > 0) {
          listing.geometry = {
            type: "Point",
            coordinates: [parseFloat(data[0].lon), parseFloat(data[0].lat)],
          };
          await listing.save();
          console.log(`✅ Updated: ${listing.title}`);
        } else {
          console.log(`⚠️ Not found: ${listing.title}`);
        }

        // Respect Nominatim’s 1 request/second policy
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (err) {
        console.error(`❌ Error updating ${listing.title}:`, err.message);
      }
    }
  }

  console.log("🎉 Finished updating all listings.");
}

