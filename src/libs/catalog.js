import { humanizeSlug } from "@/libs/seo";

export const normalizeCategorySlug = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

const productCategoryContent = {
  "fruit-powder": {
    label: "Fruit Powder",
    description:
      "Export-quality fruit powders from Orbitto International, Gujarat, India. Spray-dried and dehydrated fruit powders for beverages, bakery, nutraceuticals, private label brands, and bulk ingredient sourcing worldwide.",
    keywords: [
      "fruit powder exporter India",
      "fruit powder supplier India",
      "spray dried fruit powder exporter",
      "fruit powder manufacturer Gujarat",
      "bulk fruit powder supplier India",
      "fruit powder for beverage manufacturing",
      "fruit powder private label India",
      "dehydrated fruit powder exporter",
    ],
    entityText:
      "Orbitto International is a fruit powder exporter and supplier from India, shipping spray-dried and dehydrated fruit powders from Morbi, Gujarat. As a bulk fruit powder supplier in India, Orbitto serves beverage brands, food manufacturers, nutraceutical companies, importers, distributors, and private label buyers worldwide.",
  },
  "vegetable-powder": {
    label: "Vegetable Powder",
    description:
      "Export-grade vegetable powders from Orbitto International, Gujarat, India. Dehydrated vegetable powders for soups, seasonings, ready meals, health foods, and industrial food manufacturing globally.",
    keywords: [
      "vegetable powder exporter India",
      "vegetable powder supplier India",
      "dehydrated vegetable powder exporter",
      "vegetable powder manufacturer Gujarat",
      "bulk vegetable powder India",
      "vegetable powder for food manufacturing",
      "vegetable powder private label India",
      "freeze dried vegetable powder India",
    ],
    entityText:
      "Orbitto International is a vegetable powder exporter and supplier from India, producing dehydrated vegetable powders in Gujarat for soups, seasonings, and ready meals. As a bulk vegetable powder supplier in India, Orbitto serves food manufacturers, importers, private label companies, and distributors worldwide.",
  },
  honey: {
    label: "Honey",
    description:
      "Export-quality pure honey from Orbitto International, Gujarat, India. Natural honey for food brands, retail packing, private label projects, and wholesale distribution globally.",
    keywords: [
      "honey exporter India",
      "pure honey supplier India",
      "raw honey exporter Gujarat",
      "bulk honey supplier India",
      "natural honey exporter India",
      "honey private label India",
      "honey for food brands India",
      "wholesale honey exporter India",
    ],
    entityText:
      "Orbitto International is a honey exporter and pure honey supplier from India, shipping natural honey from Gujarat for food brands and wholesale distributors. As a bulk honey supplier in India, Orbitto serves importers, private label companies, food manufacturers, and retail packaging companies worldwide.",
  },
  spices: {
    label: "Spices",
    description:
      "Premium export spices from Orbitto International, Gujarat, India. Whole and ground spices for seasoning blends, sauces, ready meals, foodservice supply, and wholesale export worldwide.",
    keywords: [
      "spice exporter India",
      "spice supplier Gujarat India",
      "Indian spice exporter",
      "bulk spice supplier India",
      "spice manufacturer Gujarat",
      "wholesale spice exporter India",
      "spice for food manufacturing India",
      "premium spice exporter India",
    ],
    entityText:
      "Orbitto International is a spice exporter from India and Indian spice supplier based in Gujarat. As a wholesale spice exporter from India, Orbitto supplies whole and ground spices to food manufacturers, seasoning blend producers, importers, and private label brands worldwide.",
  },
  "herbal-powder": {
    label: "Herbal Powder",
    description:
      "Export-quality herbal powders from Orbitto International, Gujarat, India. Cold-processed herbal powders for wellness products, nutraceuticals, functional beverages, and international ingredient supply.",
    keywords: [
      "herbal powder exporter India",
      "herbal powder supplier India",
      "herbal powder manufacturer Gujarat",
      "bulk herbal powder India",
      "herbal powder for nutraceuticals India",
      "ayurvedic herbal powder exporter",
      "herbal powder private label India",
      "wellness ingredient supplier India",
    ],
    entityText:
      "Orbitto International is a herbal powder exporter and Ayurvedic herbal powder supplier from India, producing wellness ingredients in Gujarat. As a bulk herbal powder supplier in India, Orbitto serves nutraceutical brands, functional beverage manufacturers, wellness companies, and private label ingredient buyers worldwide.",
  },
  fruit: {
    label: "Fruit",
    description:
      "Fresh and processed fruit ingredients from Orbitto International for export-oriented food, beverage, and industrial ingredient requirements globally.",
    keywords: ["fruit ingredient exporter India", "fruit supplier India"],
    entityText:
      "Orbitto International supplies fruit ingredients from Gujarat, India for global food and beverage buyers.",
  },
  vegetable: {
    label: "Vegetable",
    description:
      "Vegetable ingredients from Orbitto International for export-oriented food manufacturing, health-focused products, and wholesale supply globally.",
    keywords: ["vegetable ingredient exporter India", "vegetable supplier India"],
    entityText:
      "Orbitto International supplies vegetable ingredients from Gujarat, India for global food manufacturers and health product brands.",
  },
};

export const indexedProductCategorySlugs = [
  "fruit-powder",
  "vegetable-powder",
  "honey",
  "spices",
  "herbal-powder",
];

export const getCategoryContent = (categorySlug = "") => {
  const normalizedSlug = normalizeCategorySlug(categorySlug);
  const fallbackLabel = humanizeSlug(normalizedSlug);
  const presetContent = productCategoryContent[normalizedSlug];

  if (presetContent) {
    return {
      slug: normalizedSlug,
      keywords: [],
      entityText: `Orbitto International exports ${fallbackLabel.toLowerCase()} ingredients from Gujarat, India for global buyers.`,
      ...presetContent,
    };
  }

  return {
    slug: normalizedSlug,
    label: fallbackLabel || "Product Category",
    description: `Explore ${fallbackLabel.toLowerCase()} from Orbitto International for export-focused sourcing, bulk supply, and private label ingredient needs.`,
    keywords: [`${fallbackLabel.toLowerCase()} exporter India`, `${fallbackLabel.toLowerCase()} supplier India`],
    entityText: `Orbitto International exports ${fallbackLabel.toLowerCase()} from Gujarat, India for global buyers, importers, and food brands.`,
  };
};

export const buildProductCategoryPath = (categorySlug) => {
  const normalizedSlug = normalizeCategorySlug(categorySlug);

  if (!normalizedSlug) {
    return "/products";
  }

  return `/products/category/${normalizedSlug}`;
};

export const buildProductSearchPath = (searchValue) => {
  const normalizedValue = String(searchValue || "").trim();

  if (!normalizedValue) {
    return "/products";
  }

  const params = new URLSearchParams({
    search: normalizedValue,
  });

  return `/products?${params.toString()}`;
};
