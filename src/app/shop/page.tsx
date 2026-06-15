import type { Metadata } from "next";

import { ShopCatalog } from "@/components/shop/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop All Compounds",
  description:
    "Browse the complete King Bio Labs catalog of research-grade compounds. Third-party tested with a lot-specific COA on every batch.",
};

export default function ShopPage() {
  return (
    <main className="flex-1">
      <ShopCatalog />
    </main>
  );
}
