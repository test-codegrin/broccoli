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
    richContent: {
      quickAnswer:
        "Orbitto International is a fruit powder exporter and supplier based in Morbi, Gujarat, India. The company produces spray-dried and dehydrated fruit powders    including mango, banana, strawberry, beetroot-blend, and tropical fruit varieties    for beverage brands, bakeries, nutraceutical companies, importers, and private label buyers across global markets.",
      overview: [
        "Orbitto's fruit powders are produced through controlled spray-drying and dehydration processes that remove moisture from fresh fruit pulp while preserving natural color, flavor, and nutritional value. The result is a fine, free-flowing powder that is easier to store, transport, and dose than fresh or frozen fruit, giving manufacturers consistent quality across large production runs.",
        "Because the powders are shelf-stable and concentrated, they let food and beverage brands add real fruit character    taste, aroma, and natural color    without the cold-chain logistics that fresh fruit requires. This makes them well suited for export shipments to international buyers who need ingredients that travel well and hold their quality over months of storage.",
      ],
      productTypes: [
        "Mango Powder",
        "Banana Powder",
        "Strawberry Powder",
        "Pineapple Powder",
        "Pomegranate Powder",
        "Mixed Berry Powder",
        "Amla (Indian Gooseberry) Powder",
        "Watermelon Powder",
      ],
      productTypesNote:
        "Buyers can also request custom fruit powder blends, particle-size adjustments, and trial batches for specific formulations.",
      applications: [
        {
          title: "Beverages & Smoothie Mixes",
          text: "Used in instant drink mixes, flavored water, smoothie bases, and functional beverages where natural fruit flavor and color are required without handling fresh fruit.",
        },
        {
          title: "Bakery & Confectionery",
          text: "Blended into cake mixes, fillings, glazes, and confectionery for natural fruit flavoring, coloring, and aroma in finished baked goods and sweets.",
        },
        {
          title: "Dairy & Desserts",
          text: "Incorporated into yogurt, ice cream, milkshakes, and dessert formulations to deliver consistent fruit flavor profiles across production batches.",
        },
        {
          title: "Nutraceuticals & Functional Foods",
          text: "Used as a natural ingredient base in supplements, functional snack bars, and wellness formulations that highlight fruit-derived nutrition.",
        },
        {
          title: "Snacks & Breakfast Products",
          text: "Added to cereals, granola, energy bars, and snack coatings to introduce fruit flavor and natural color without liquid ingredients.",
        },
      ],
      buyers: [
        "Beverage and functional drink brands",
        "Bakery and confectionery manufacturers",
        "Dairy and dessert producers",
        "Nutraceutical and supplement companies",
        "Importers and ingredient distributors",
        "Private label and contract manufacturing brands",
      ],
      bulkSupply:
        "Orbitto supplies fruit powder in bulk export formats, including multi-layer pouches, drums, and bag-in-box packaging suited for ocean and air freight. Order volumes can be scaled from trial quantities for product development to container-level shipments for established buyers, with packaging adjusted to each market's import and handling requirements.",
      privateLabel:
        "International brands can work with Orbitto on private label fruit powder programs, including custom blend development, branded packaging, and formulation support for specific end-use applications. Contract and third-party manufacturing scopes are discussed individually based on the buyer's product specifications and order volumes.",
      qualityDocs:
        "Each fruit powder batch is processed under hygienic, quality-checked conditions at Orbitto's Gujarat facility. Buyers can request batch-level documentation, certificates of analysis, product specification sheets, and export paperwork to support import compliance and internal quality reviews.",
      moqSamples:
        "Buyers can contact Orbitto International to discuss minimum order quantities, request product samples, and receive detailed specifications before placing a bulk order. The team supports first-time importers as well as established buyers looking to add fruit powders to an existing ingredient program.",
    },
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
    richContent: {
      quickAnswer:
        "Orbitto International is a vegetable powder exporter and supplier from Morbi, Gujarat, India, producing dehydrated vegetable powders    including onion, garlic, tomato, beetroot, spinach, and moringa leaf    for soup, sauce, seasoning, and ready-meal manufacturers worldwide.",
      overview: [
        "Orbitto's vegetable powders are made by dehydrating fresh vegetables to remove moisture while retaining their natural flavor, color, and nutrient profile. The dehydration process produces a stable, concentrated powder that is easy to measure, blend, and store    a practical alternative to fresh or frozen vegetables for manufacturers running continuous production lines.",
        "These powders help standardize flavor across batches, extend shelf life, and reduce dependency on seasonal vegetable supply. For export buyers, the lightweight, shelf-stable format also reduces shipping costs and storage complexity compared with fresh produce.",
      ],
      productTypes: [
        "Onion Powder",
        "Garlic Powder",
        "Tomato Powder",
        "Beetroot Powder",
        "Spinach Powder",
        "Carrot Powder",
        "Potato Powder",
        "Drumstick (Moringa Leaf) Powder",
      ],
      productTypesNote:
        "Custom particle sizes, blends, and trial batches can be discussed for specific manufacturing requirements.",
      applications: [
        {
          title: "Soups & Sauces",
          text: "Used as a base or flavor-enhancing ingredient in instant soups, pasta sauces, gravies, and ready-to-cook meal kits.",
        },
        {
          title: "Seasoning & Spice Blends",
          text: "Blended into seasoning mixes, marinades, and rubs where consistent vegetable flavor and color are required without fresh prep.",
        },
        {
          title: "Ready Meals & Instant Foods",
          text: "Incorporated into instant noodles, dehydrated meal kits, and packaged convenience foods for shelf-stable vegetable content.",
        },
        {
          title: "Snacks & Savory Coatings",
          text: "Used in snack seasoning, dips, and coatings to add vegetable flavor profiles to chips, crackers, and namkeen products.",
        },
        {
          title: "Health & Functional Foods",
          text: "Added to health-focused formulations and functional food products that highlight vegetable-derived nutrition and natural ingredients.",
        },
      ],
      buyers: [
        "Soup and sauce manufacturers",
        "Seasoning and spice blend producers",
        "Ready-meal and instant food brands",
        "Snack food companies",
        "Health and functional food brands",
        "Importers, wholesalers, and ingredient distributors",
      ],
      bulkSupply:
        "Vegetable powders are available in bulk export packaging    including multi-layer pouches, drums, and bag-in-box formats    suited for long-distance shipping and extended storage. Orbitto can scale order volumes from sample and trial quantities to container-level bulk supply based on buyer requirements.",
      privateLabel:
        "Orbitto supports private label and contract manufacturing discussions for vegetable powders, including custom blends, branded packaging, and formulation guidance for specific recipes or finished product categories. Buyers can share their requirements to scope a private label program suited to their market.",
      qualityDocs:
        "Vegetable powders are processed under hygienic, quality-monitored conditions at Orbitto's Gujarat facility. Buyers can request specification sheets, certificates of analysis, batch documentation, and export paperwork needed for import clearance and internal quality checks.",
      moqSamples:
        "International buyers can contact Orbitto International to discuss minimum order quantities, request samples for trial formulations, and receive detailed product specifications before confirming a bulk order.",
    },
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
    richContent: {
      quickAnswer:
        "Orbitto International is a honey exporter and pure honey supplier based in Morbi, Gujarat, India, supplying natural honey for retail packing, food and beverage brands, wellness companies, and wholesale distribution to international markets.",
      overview: [
        "Orbitto sources and processes natural honey for export, focusing on consistent quality suited to both retail packaging and bulk industrial use. The honey is handled and packed to preserve its natural taste and properties, giving buyers an ingredient that performs reliably whether it is used as a finished retail product or as a raw material in further manufacturing.",
        "For international buyers, honey sourced from India offers an alternative supply route that can support diversification of sourcing regions, seasonal availability planning, and competitive landed costs depending on the destination market and order volume.",
      ],
      productTypes: [
        "Raw & Natural Honey",
        "Filtered Honey for Retail Packs",
        "Bulk Drum Honey for Industrial Use",
        "Honey for Private Label Retail Brands",
        "Honey Blends for Beverage & Food Applications",
      ],
      productTypesNote:
        "Buyers can discuss specific honey types, packaging formats, and blend requirements based on their target market and end use.",
      applications: [
        {
          title: "Retail & Food Brand Packaging",
          text: "Supplied in bulk for repacking into branded retail honey jars and squeeze bottles for supermarket and specialty food channels.",
        },
        {
          title: "Bakery & Confectionery",
          text: "Used as a natural sweetener and flavor ingredient in baked goods, granola bars, confectionery, and dessert formulations.",
        },
        {
          title: "Beverages & Tea Blends",
          text: "Incorporated into honey-based drinks, flavored teas, and functional beverage formulations that use honey as a natural sweetening base.",
        },
        {
          title: "Nutraceuticals & Wellness Products",
          text: "Used in wellness formulations, immunity products, and functional food blends that position honey as a natural, recognizable ingredient.",
        },
        {
          title: "Foodservice & HORECA Supply",
          text: "Supplied in bulk formats to hotels, restaurants, cafes, and catering operations that use honey as a regular kitchen ingredient.",
        },
      ],
      buyers: [
        "Retail food and grocery brands",
        "Bakery and confectionery manufacturers",
        "Beverage and tea companies",
        "Wellness and nutraceutical brands",
        "Foodservice and HORECA distributors",
        "Importers and wholesale honey distributors",
      ],
      bulkSupply:
        "Honey is supplied in export-ready bulk formats, including drums and food-grade containers suited for international shipping. Orbitto can coordinate order volumes from smaller trial shipments to larger wholesale quantities based on the buyer's market needs and repacking plans.",
      privateLabel:
        "Orbitto can discuss private label honey programs for retail and food brands, including bulk supply for in-market repacking, branded jar and bottle programs, and custom blend requirements. Buyers are encouraged to share their packaging format and volume needs to scope a suitable arrangement.",
      qualityDocs:
        "Honey batches are handled under quality-monitored conditions at Orbitto's facility in Gujarat. Buyers can request product specification sheets, batch documentation, and export paperwork to support import compliance and quality verification in their home market.",
      moqSamples:
        "Buyers can contact Orbitto International to ask about minimum order quantities, request honey samples for evaluation, and get product specifications before committing to a bulk purchase or private label program.",
    },
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
    richContent: {
      quickAnswer:
        "Orbitto International is a spice exporter and Indian spice supplier based in Morbi, Gujarat, India, supplying whole and ground spices    including turmeric, cumin, coriander, and chilli    to food manufacturers, seasoning blend producers, and foodservice distributors worldwide.",
      overview: [
        "India's diverse growing regions and long-established spice trade give Orbitto access to a wide range of whole and ground spices for export. The company processes and packs these spices under quality-controlled conditions, helping buyers source consistent flavor, color, and aroma profiles for use in manufacturing or further blending.",
        "Whether a buyer needs a single spice in bulk or support building a custom blend, Orbitto's sourcing network in Gujarat allows for flexible order planning around seasonal availability, helping international food brands maintain a steady supply of Indian spices for their production needs.",
      ],
      productTypes: [
        "Turmeric (Whole & Ground)",
        "Cumin Seeds & Powder",
        "Coriander Seeds & Powder",
        "Red Chilli (Whole & Powder)",
        "Fenugreek Seeds",
        "Fennel Seeds",
        "Mustard Seeds",
        "Custom Spice Blends",
      ],
      productTypesNote:
        "Orbitto can also discuss custom spice blend formulation for buyers developing proprietary seasoning products.",
      applications: [
        {
          title: "Seasoning & Spice Blends",
          text: "Supplied as base ingredients for seasoning mixes, rubs, and proprietary spice blends used across food manufacturing categories.",
        },
        {
          title: "Sauces, Marinades & Condiments",
          text: "Used to flavor sauces, marinades, pastes, and condiments where authentic Indian spice profiles are required.",
        },
        {
          title: "Snacks & Namkeen Manufacturing",
          text: "Incorporated into snack seasonings, namkeen, and savory coatings that rely on consistent spice flavor and color.",
        },
        {
          title: "Foodservice & HORECA Supply",
          text: "Supplied in bulk to restaurants, catering companies, and foodservice distributors that use Indian spices as kitchen staples.",
        },
        {
          title: "Functional & Nutraceutical Formulations",
          text: "Used in formulations that highlight spice-derived compounds for functional food, wellness, and supplement applications.",
        },
      ],
      buyers: [
        "Spice blend and seasoning manufacturers",
        "Sauce, condiment, and marinade brands",
        "Snack and namkeen producers",
        "Foodservice and HORECA distributors",
        "Importers and wholesale spice distributors",
        "Private label food brands",
      ],
      bulkSupply:
        "Spices are supplied in export-ready bulk packaging, including bags, drums, and bulk cartons suited for international freight. Orbitto can plan order volumes around seasonal harvest cycles and buyer demand, from smaller trial orders to larger wholesale shipments.",
      privateLabel:
        "Orbitto can discuss private label and contract manufacturing arrangements for spice products, including custom blend development, packaging formats, and branding support for buyers building their own seasoning or spice product lines.",
      qualityDocs:
        "Spices are processed and packed under quality-monitored conditions at Orbitto's Gujarat facility. Buyers can request specification sheets, batch documentation, certificates of analysis, and export paperwork required for import clearance in their destination market.",
      moqSamples:
        "International buyers can contact Orbitto International to discuss minimum order quantities, request spice samples for evaluation, and receive product specifications ahead of placing a bulk or private label order.",
    },
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
    richContent: {
      quickAnswer:
        "Orbitto International is a herbal powder exporter and Ayurvedic ingredient supplier based in Morbi, Gujarat, India, producing wellness-focused herbal powders    including moringa, amla, ashwagandha, and tulsi    for nutraceutical, functional beverage, and wellness brands worldwide.",
      overview: [
        "Orbitto's herbal powders are produced from herbs and botanicals associated with traditional Indian wellness practices, processed under controlled conditions to preserve their natural properties for use in modern formulations. This makes them suitable for brands building products around natural, recognizable, and traditionally used ingredients.",
        "As global demand grows for plant-based and wellness-oriented ingredients, Orbitto's herbal powder range gives international buyers access to Ayurvedic and botanical ingredients sourced and processed in India, supported by export documentation and bulk supply arrangements suited to nutraceutical and functional product manufacturing.",
      ],
      productTypes: [
        "Moringa Leaf Powder",
        "Amla (Indian Gooseberry) Powder",
        "Ashwagandha Powder",
        "Tulsi (Holy Basil) Powder",
        "Neem Powder",
        "Brahmi Powder",
        "Wheatgrass Powder",
        "Spirulina Powder",
      ],
      productTypesNote:
        "Buyers can also request custom herbal blend formulations and trial batches for new product development.",
      applications: [
        {
          title: "Nutraceuticals & Dietary Supplements",
          text: "Used as active or supporting ingredients in capsules, tablets, powders, and supplement blends positioned around natural wellness benefits.",
        },
        {
          title: "Functional Beverages & Health Drinks",
          text: "Incorporated into health drinks, herbal teas, and functional beverage formulations that highlight botanical ingredients.",
        },
        {
          title: "Wellness & Ayurvedic Formulations",
          text: "Used in wellness products and Ayurvedic-style formulations that draw on traditional Indian herbal ingredient profiles.",
        },
        {
          title: "Functional Foods & Snack Fortification",
          text: "Added to functional snacks, bars, and fortified food products to introduce herbal ingredient claims and nutrition positioning.",
        },
        {
          title: "Cosmetic & Personal Care Ingredients",
          text: "Supplied as raw material inputs for personal care and cosmetic formulations that use botanical and herbal powder ingredients.",
        },
      ],
      buyers: [
        "Nutraceutical and supplement brands",
        "Functional beverage and health drink companies",
        "Wellness and Ayurvedic product brands",
        "Cosmetic and personal care manufacturers",
        "Importers and ingredient distributors",
        "Private label wellness brands",
      ],
      bulkSupply:
        "Herbal powders are supplied in export-ready bulk packaging suited for international shipping and extended storage, including pouches, drums, and bulk cartons. Orbitto can scale supply from trial and sample quantities to larger bulk orders depending on the buyer's formulation and production stage.",
      privateLabel:
        "Orbitto can discuss private label and contract manufacturing options for herbal powders, including custom blend development, packaging formats, and support for brands building wellness or nutraceutical product lines around botanical ingredients.",
      qualityDocs:
        "Herbal powders are processed under quality-monitored, hygienic conditions at Orbitto's Gujarat facility. Buyers can request specification sheets, batch documentation, certificates of analysis, and export paperwork to support import compliance and product quality reviews.",
      moqSamples:
        "Buyers can contact Orbitto International to discuss minimum order quantities, request herbal powder samples for formulation trials, and receive detailed specifications before confirming a bulk supply or private label arrangement.",
    },
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
