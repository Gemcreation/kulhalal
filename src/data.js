export const ingredients = [
  {
    id: "E120",
    name: "Carmine (E120)",
    alternateNames: ["Natural Red 4", "Cochineal"],
    status: "Haram",
    source: "Crushed female cochineal insects",
    description: "Widely used as a red food coloring. Islamic scholars consider insect-based colorants haram."
  },
  {
    id: "E322",
    name: "Lecithin (E322)",
    alternateNames: ["Soy Lecithin", "Sunflower Lecithin"],
    status: "Halal",
    source: "Plant-based (Soy/Sunflower)",
    description: "A natural emulsifier primarily derived from soybean or sunflower oil. Plant-sourced lecithin is universally accepted as halal."
  },
  {
    id: "E441",
    name: "Gelatin (E441)",
    alternateNames: ["Gelatine"],
    status: "Doubtful",
    source: "Animal protein derivative",
    description: "Status depends on the animal source and slaughter method. Often porcine or from non-halal bovine sources. Look for specific halal certification."
  },
  {
    id: "E330",
    name: "Citric Acid (E330)",
    alternateNames: ["Citric Acid"],
    status: "Halal",
    source: "Organic acid",
    description: "Found naturally in citrus fruits. Commercially produced through fermentation using molasses or starch. Considered halal."
  },
  {
    id: "E471",
    name: "Mono-diglycerides (E471)",
    alternateNames: ["Mono- and diglycerides of fatty acids"],
    status: "Doubtful",
    source: "Fatty acid esters",
    description: "Can be derived from either vegetable oils or animal fats. Without specific origin labeling, the halal status cannot be verified."
  },
  {
    id: "E904",
    name: "Confectioner's Glaze (E904)",
    alternateNames: ["Shellac"],
    status: "Haram",
    source: "Shellac",
    description: "A resin secreted by the female lac bug. Used to give food a shiny finish. Most contemporary halal authorities classify it as prohibited."
  }
];

export const mockProductResults = {
  "KH-99281": {
    id: "KH-99281",
    name: "Artisan Dark Hazelnut Cluster",
    overallStatus: "HALAL - PERMISSIBLE",
    scanTime: "2 minutes ago",
    ingredients: [
      { name: "Plant-based Oil", source: "Sustainably sourced Palm", status: "HALAL" },
      { name: "Vegetable Glycerin", source: "Soy-based derivation", status: "HALAL" },
      { name: "Soy Lecithin (E322)", source: "Processing: Standard refinement", status: "MUSHBOOH" },
      { name: "Organic Cocoa Butter", source: "Naturally derived from cacao beans", status: "HALAL" }
    ],
    reasoning: {
      citation: "\"He has only forbidden to you dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah.\"",
      source: "Al-Baqarah 2:173",
      explanation: "The Glycerin in this product is strictly plant-derived, avoiding the 'Mashbooh' status often associated with animal-fat based additives.\n\nOur Scholars' Council confirms that modern chemical transformations (Istihalah) in vegetable-based emulsifiers maintain purity (Taharah)."
    },
    precautionaryNote: "While the ingredients are permissible, this facility also processes gelatin-based products. Users with strict 'Taqwa' preferences should exercise personal judgment."
  }
};
