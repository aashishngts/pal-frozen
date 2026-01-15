import peasBg from "../assets/palfresh/peas/bg.jpeg";
import peasPack from "../assets/palfresh/peas/pack.png";
import peasBowl from "../assets/palfresh/peas/bowl.png";

import mixVegBg from "../assets/palfresh/mixveg/bg.jpeg";
import mixVegPack from "../assets/palfresh/mixveg/pack.png";
import mixVegBowl from "../assets/palfresh/mixveg/bowl.png";

import cornBg from "../assets/palfresh/sweetcorn/bg.png";
import cornPack from "../assets/palfresh/sweetcorn/pack.png";
import cornBowl from "../assets/palfresh/sweetcorn/bowl.png";

import soyaBg from "../assets/palfresh/soyachaap/bg.png";
import soyaPack from "../assets/palfresh/soyachaap/pack.png";
import soyaBowl from "../assets/palfresh/soyachaap/bowl.png";

export const palfreshProducts = [
  // green peas
  {
    slug: "green-peas",
    subtitle: "FROZEN GREEN",
    title: "PEAS",

    themeColor: "#6BAA1F",

    images: {
      bg: peasBg,
      pack: peasPack,
      bowl: peasBowl,
    },

    introTitle: "Perfect Green Peas, Anytime Fresh.",
    introText:
      "Frozen green peas available online here are outstanding food with higher fiber and protein levels. These are lush green in color and are selected from the cleaned and purified lot of peas. The frozen peas are very simple to store, allowing you to use them in your dishes throughout the year. These green peas are offered in packet packing, wherein 1 kg is the standard value. These have a good content of sodium and potassium in them.",

    story: [
      "Harvesting – Fresh peas from farms",
      "Cleaning – Washed and sorted",
      "Blanching – Locks freshness",
      "Freezing – IQF freezing",
    ],

    offer: "Ideal for curries, pulao, soups and healthy meals.",
    otherProducts: ["Mix Veg", "Sweet Corn", "Broccoli"],
  },

  // mix veg
  {
    slug: "mix-veg",
    subtitle: "FROZEN MIX",
    title: "VEG",
    themeColor: "#6E7F4A",

    images: {
      bg: mixVegBg,
      pack: mixVegPack,
      bowl: mixVegBowl,
    },

    introTitle: "Your Daily Nutrition in Mix Veg.",
    introText: "A nutritious blend of farm-fresh vegetables, frozen instantly.",

    story: [
      "Harvesting – Fresh vegetables",
      "Cleaning – Sorted and washed",
      "Blanching – Preserves nutrients",
      "Freezing – Advanced freezing",
    ],

    offer: "Perfect for daily cooking, pulao and stir-fries.",
    otherProducts: ["Green Peas", "Sweet Corn", "Soya Chaap"],
  },

  // sweet corn
  {
    slug: "sweet-corn",
    subtitle: "FROZEN SWEET",
    title: "CORN",
    themeColor: "#E68613",

    images: {
      bg: cornBg,
      pack: cornPack,
      bowl: cornBowl,
    },

    introTitle: "Sweet Corn, Sweetness You’ll Love.",
    introText:
      "Our Frozen Sweet Corn is processed under hygienic conditions to retain its natural sweetness.",

    story: [
      "Harvesting – Fresh corns harvested from farms",
      "Cleaning – Carefully cleaned and sorted well",
      "Blanching – Quick blanching to lock freshness",
      "Freezing – Rapid freezing at optimal temperature",
    ],

    offer:
      "Pal Frozen Foods brings you premium frozen sweet corn, perfect for salads, soups, curries, pulao, fried rice and snacks.",

    otherProducts: ["Frozen Green Peas", "Frozen Mix Veg", "Frozen Broccoli"],
  },

  // soya chaap
  {
    slug: "soya-chaap",
    subtitle: "FROZEN SOYA",
    title: "CHAAP",
    themeColor: "#C62828",

    images: {
      bg: soyaBg,
      pack: soyaPack,
      bowl: soyaBowl,
    },

    introTitle: "Protein-Packed, Flavor-Filled Soya Chaap.",
    introText:
      "We offer a premium quality frozen soya chaap packed with high protein content.",

    story: [
      "Harvesting – High-quality soya sourced from trusted suppliers",
      "Cleaning – Carefully processed and prepared",
      "Blanching – Ensures texture and taste retention",
      "Freezing – Advanced freezing technology to lock freshness",
    ],

    offer:
      "Pal Frozen Foods brings you premium frozen Soya Chaap perfect for grills, curries and starters.",

    otherProducts: ["Frozen Green Peas", "Frozen Sweet Corn", "Frozen Mix Veg"],
  },
];
