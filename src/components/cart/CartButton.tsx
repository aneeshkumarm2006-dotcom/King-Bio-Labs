"use client";

import { ShoppingBag } from "lucide-react";

import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

/**
 * Cart trigger button with a live item-count badge.
 * Drop this into the Navbar (Phase 1). It opens the global <CartDrawer />.
 */
export function CartButton({ className }: { className?: string }) {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
      className={cn(
        "relative flex size-10 items-center justify-center rounded-none border border-transparent text-brand-navy transition-colors hover:border-brand-navy hover:bg-brand-light",
        className
      )}
    >
      <ShoppingBag className="size-5" aria-hidden="true" />
      {itemCount > 0 && (
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full bg-brand-blue px-1 text-[11px] font-bold leading-5 text-white tabular-nums"
        >
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
}

export default CartButton;
