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
      "Orbitto International exports spray-dried and dehydrated fruit powders from Morbi, Gujarat, India for global importers, food brands, and distributors. Available in bulk supply, private label, and contract manufacturing arrangements.",
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
      "Orbitto International exports dehydrated and spray-dried vegetable powders from Morbi, Gujarat, India for importers, food manufacturers, and private label brands worldwide.",
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
      "Orbitto International exports pure natural honey from Gujarat, India for global food brands, importers, private label companies, and wholesale distributors.",
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
      "Orbitto International exports premium Indian spices from Gujarat, India for global importers, food manufacturers, seasoning blend producers, and private label brands.",
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
      "Orbitto International exports cold-processed herbal powders from Gujarat, India for nutraceutical brands, wellness companies, and private label ingredient buyers worldwide.",
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
