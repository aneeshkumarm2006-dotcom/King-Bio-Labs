export type ProductDosage = {
  label: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  rating: number;
  reviewCount: number;
  bestSelling?: boolean;
  hasVariants?: boolean;
  /** Dosage/size variants — present when `hasVariants` is true. First entry matches `price`. */
  dosages?: ProductDosage[];
  image?: string;
  description?: string;
};

export const CATEGORIES = [
  { id: "01", slug: "glp-metabolic", name: "GLP & Metabolic Peptides" },
  { id: "02", slug: "growth-hormone-igf", name: "Growth Hormone & IGF Peptides" },
  { id: "03", slug: "recovery-tissue", name: "Recovery & Tissue Research" },
  { id: "04", slug: "longevity-cellular", name: "Longevity & Cellular Research" },
  { id: "05", slug: "skin-pigmentation", name: "Skin, Pigmentation & Anti-Aging" },
  { id: "06", slug: "cognitive-neuropeptide", name: "Cognitive, Neuropeptide & Sleep Research" },
  { id: "07", slug: "research-compounds", name: "Research Compounds & Blends" },
] as const;

export const PRODUCTS: Product[] = [
  // Category 1 — GLP & Metabolic Peptides
  {
    slug: "semaglutide-10mg",
    image: "/products/semaglutide.jpeg",
    name: "Semaglutide 10MG",
    category: "GLP & Metabolic Peptides",
    categorySlug: "glp-metabolic",
    price: 399.98,
    rating: 4.9,
    reviewCount: 312,
    bestSelling: true,
  },
  {
    slug: "tirzepatide-10mg",
    image: "/products/tirzepatide.jpeg",
    name: "Tirzepatide 10MG",
    category: "GLP & Metabolic Peptides",
    categorySlug: "glp-metabolic",
    price: 399.98,
    rating: 4.9,
    reviewCount: 287,
    bestSelling: true,
  },
  {
    slug: "retatrutide-10mg",
    image: "/products/retatrutide.jpeg",
    name: "Retatrutide 10MG",
    category: "GLP & Metabolic Peptides",
    categorySlug: "glp-metabolic",
    price: 449.98,
    rating: 4.9,
    reviewCount: 201,
  },

  // Category 2 — Growth Hormone & IGF Peptides
  {
    slug: "tesamorelin-20mg",
    image: "/products/tesamorelin.jpeg",
    name: "Tesamorelin 20MG",
    category: "Growth Hormone & IGF Peptides",
    categorySlug: "growth-hormone-igf",
    price: 159.98,
    rating: 4.9,
    reviewCount: 256,
    bestSelling: true,
  },
  {
    slug: "cjc1295-ipamorelin-blend",
    image: "/products/cjc1295-ipa.jpeg",
    name: "CJC-1295 No DAC + Ipamorelin 10MG Blend",
    category: "Growth Hormone & IGF Peptides",
    categorySlug: "growth-hormone-igf",
    price: 109.98,
    rating: 4.9,
    reviewCount: 318,
    bestSelling: true,
  },
  {
    slug: "cjc1295-no-dac-10mg",
    image: "/products/cjc1295.jpeg",
    name: "CJC-1295 No DAC 10MG",
    category: "Growth Hormone & IGF Peptides",
    categorySlug: "growth-hormone-igf",
    price: 89.98,
    rating: 4.8,
    reviewCount: 164,
  },
  {
    slug: "ipamorelin-5mg",
    image: "/products/ipamorelin.jpeg",
    name: "Ipamorelin 5MG",
    category: "Growth Hormone & IGF Peptides",
    categorySlug: "growth-hormone-igf",
    price: 69.98,
    rating: 4.8,
    reviewCount: 178,
  },
  {
    slug: "sermorelin-acetate-9mg",
    image: "/products/sermorelin.jpeg",
    name: "Sermorelin Acetate 9MG",
    category: "Growth Hormone & IGF Peptides",
    categorySlug: "growth-hormone-igf",
    price: 99.98,
    rating: 4.8,
    reviewCount: 140,
  },
  {
    slug: "igf-1-lr3",
    image: "/products/igf1-lr3.jpeg",
    name: "IGF-1 LR3",
    category: "Growth Hormone & IGF Peptides",
    categorySlug: "growth-hormone-igf",
    price: 49.98,
    rating: 4.9,
    reviewCount: 231,
    hasVariants: true,
    dosages: [
      { label: "0.1MG", price: 49.98 },
      { label: "1MG", price: 89.98 },
    ],
  },

  // Category 3 — Recovery & Tissue Research
  {
    slug: "bpc-157",
    image: "/products/bpc157-5mg.jpeg",
    name: "BPC-157",
    category: "Recovery & Tissue Research",
    categorySlug: "recovery-tissue",
    price: 59.98,
    rating: 4.9,
    reviewCount: 387,
    bestSelling: true,
    hasVariants: true,
    dosages: [
      { label: "5MG", price: 59.98 },
      { label: "10MG", price: 99.98 },
    ],
  },
  {
    slug: "bpc157-tb500-blend",
    image: "/products/bpc157-tb500.jpeg",
    name: "BPC-157 + TB-500 Blend 15MG",
    category: "Recovery & Tissue Research",
    categorySlug: "recovery-tissue",
    price: 159.98,
    rating: 4.9,
    reviewCount: 402,
    bestSelling: true,
  },
  {
    slug: "tb-500-5mg",
    image: "/products/tb500.jpeg",
    name: "Thymosin Beta-4 (TB-500) 5MG",
    category: "Recovery & Tissue Research",
    categorySlug: "recovery-tissue",
    price: 109.98,
    rating: 4.8,
    reviewCount: 176,
  },
  {
    slug: "aod-9604-5mg",
    image: "/products/aod9604.jpeg",
    name: "AOD-9604 5MG",
    category: "Recovery & Tissue Research",
    categorySlug: "recovery-tissue",
    price: 79.98,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    slug: "ss-31",
    image: "/products/ss31.jpeg",
    name: "SS-31",
    category: "Recovery & Tissue Research",
    categorySlug: "recovery-tissue",
    price: 129.98,
    rating: 4.9,
    reviewCount: 73,
    hasVariants: true,
    dosages: [
      { label: "10MG", price: 129.98 },
      { label: "50MG", price: 299.98 },
    ],
  },
  {
    slug: "ghk-cu",
    image: "/products/ghk-cu.jpeg",
    name: "GHK-Cu",
    category: "Recovery & Tissue Research",
    categorySlug: "recovery-tissue",
    price: 79.98,
    rating: 4.8,
    reviewCount: 213,
    hasVariants: true,
    dosages: [
      { label: "50MG", price: 79.98 },
      { label: "100MG", price: 129.98 },
    ],
  },

  // Category 4 — Longevity & Cellular Research
  {
    slug: "foxo4-dri-10mg",
    image: "/products/foxo4-dri.jpeg",
    name: "FOXO4-DRI 10MG",
    category: "Longevity & Cellular Research",
    categorySlug: "longevity-cellular",
    price: 299.98,
    rating: 4.9,
    reviewCount: 52,
  },
  {
    slug: "glutathione",
    image: "/products/glutathione.jpeg",
    name: "Glutathione",
    category: "Longevity & Cellular Research",
    categorySlug: "longevity-cellular",
    price: 119.98,
    rating: 4.8,
    reviewCount: 189,
    hasVariants: true,
    dosages: [
      { label: "600MG", price: 119.98 },
      { label: "1500MG", price: 199.98 },
    ],
  },

  // Category 5 — Skin, Pigmentation & Anti-Aging
  {
    slug: "melanotan-2-10mg",
    image: "/products/melanotan2.jpeg",
    name: "Melanotan 2 10MG",
    category: "Skin, Pigmentation & Anti-Aging",
    categorySlug: "skin-pigmentation",
    price: 89.98,
    rating: 4.9,
    reviewCount: 287,
    bestSelling: true,
  },
  {
    slug: "melanotan-1-10mg",
    image: "/products/melanotan1.jpeg",
    name: "Melanotan 1 10MG",
    category: "Skin, Pigmentation & Anti-Aging",
    categorySlug: "skin-pigmentation",
    price: 109.98,
    rating: 4.8,
    reviewCount: 142,
  },
  {
    slug: "pt-141-10mg",
    image: "/products/pt141.jpeg",
    name: "PT-141 (Bremelanotide) 10MG",
    category: "Skin, Pigmentation & Anti-Aging",
    categorySlug: "skin-pigmentation",
    price: 89.98,
    rating: 4.9,
    reviewCount: 318,
    bestSelling: true,
  },
  {
    slug: "glow-70-blend",
    image: "/products/glow-blend.jpeg",
    name: "GLOW 70 Blend",
    category: "Skin, Pigmentation & Anti-Aging",
    categorySlug: "skin-pigmentation",
    price: 199.98,
    rating: 4.9,
    reviewCount: 234,
    bestSelling: true,
  },
  {
    slug: "kisspeptin-10",
    image: "/products/kisspeptin.jpeg",
    name: "KissPeptin-10 10MG",
    category: "Skin, Pigmentation & Anti-Aging",
    categorySlug: "skin-pigmentation",
    price: 119.98,
    rating: 4.8,
    reviewCount: 103,
  },

  // Category 6 — Cognitive, Neuropeptide & Sleep Research
  {
    slug: "semax-10mg",
    image: "/products/semax.jpeg",
    name: "Semax 10MG",
    category: "Cognitive, Neuropeptide & Sleep Research",
    categorySlug: "cognitive-neuropeptide",
    price: 89.98,
    rating: 4.9,
    reviewCount: 221,
    bestSelling: true,
  },
  {
    slug: "selank-10mg",
    image: "/products/selank.jpeg",
    name: "Selank 10MG",
    category: "Cognitive, Neuropeptide & Sleep Research",
    categorySlug: "cognitive-neuropeptide",
    price: 93.98,
    rating: 4.9,
    reviewCount: 198,
    bestSelling: true,
  },

  // Category 7 — Research Compounds & Blends
  {
    slug: "hcg-10000iu",
    image: "/products/hcg.jpeg",
    name: "HCG 10000 IU",
    category: "Research Compounds & Blends",
    categorySlug: "research-compounds",
    price: 199.98,
    rating: 4.8,
    reviewCount: 156,
  },
  {
    slug: "vitamin-b12-10ml",
    image: "/products/vitamin-b12-new.jpeg",
    name: "Vitamin B12 10ML",
    category: "Research Compounds & Blends",
    categorySlug: "research-compounds",
    price: 59.98,
    rating: 4.8,
    reviewCount: 201,
  },
  {
    slug: "reconstitution-water",
    image: "/products/bac-water-30ml.jpeg",
    name: "Reconstitution Water",
    category: "Research Compounds & Blends",
    categorySlug: "research-compounds",
    price: 19.98,
    rating: 4.9,
    reviewCount: 512,
    hasVariants: true,
    dosages: [
      { label: "3ML", price: 19.98 },
      { label: "10ML", price: 29.98 },
      { label: "30ML", price: 49.98 },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== slug
  ).slice(0, limit);
}

export function getProductDescription(product: Product): string {
  if (product.description) return product.description;
  return `${product.name} is a research-grade compound in our ${product.category} line. Every batch is independently third-party tested to 99%+ purity and ships with a lot-specific Certificate of Analysis matched to the number on your vial. Supplied strictly for in-vitro laboratory research.`;
}
