"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, itemCount, subtotal, isOpen, setOpen, removeItem, setQuantity } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md"
        aria-describedby={undefined}
      >
        <SheetHeader className="gap-0 border-border p-0">
          <div className="flex items-center gap-2.5 border-b border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue">
            <span aria-hidden="true" className="size-1.5 shrink-0 bg-brand-navy" />
            Wick Peptides / Cart
          </div>
          <div className="flex items-center justify-between gap-2 px-5 py-4">
            <SheetTitle className="flex items-center gap-2.5 font-display text-xl font-bold text-brand-navy">
              <ShoppingBag className="size-5 text-brand-blue" aria-hidden="true" />
              Your Cart
            </SheetTitle>
            {itemCount > 0 && (
              <span className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </span>
            )}
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 border-t border-border px-6 text-center">
            <div className="flex size-16 items-center justify-center border border-border bg-surface-2">
              <ShoppingBag
                className="size-7 text-brand-navy/60"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-brand-navy">Nothing in your cart yet</p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Add a few research compounds to begin.
              </p>
            </div>
            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="/shop"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-none bg-brand-navy px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-blue"
                />
              }
            >
              Explore the Catalog
            </SheetClose>
          </div>
        ) : (
          <>
            {/* Scrollable item list */}
            <ul className="flex-1 overflow-y-auto border-t border-border">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 border-b border-border px-5 py-5">
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={() => setOpen(false)}
                    className="relative size-20 shrink-0 overflow-hidden border border-border bg-surface-2"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Link
                          href={`/product/${item.slug}`}
                          onClick={() => setOpen(false)}
                          className="line-clamp-2 font-display text-sm font-semibold leading-snug text-brand-navy transition-colors hover:text-brand-blue"
                        >
                          {item.name}
                        </Link>
                        {item.dosageLabel && (
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                            {item.dosageLabel}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="-mr-1 -mt-1 flex size-8 shrink-0 items-center justify-center rounded-none text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      {/* Quantity stepper */}
                      <div className="inline-flex items-center border border-border">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(item.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="flex size-8 items-center justify-center rounded-none text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-9 border-x border-border text-center font-mono text-sm font-semibold tabular-nums text-brand-navy">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(item.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="flex size-8 items-center justify-center rounded-none text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>

                      <p className="font-display text-base font-bold tabular-nums text-brand-navy">
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <SheetFooter className="gap-4 border-border p-5">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Subtotal
                </span>
                <span className="font-display text-xl font-bold tabular-nums text-brand-navy">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Shipping &amp; taxes are calculated at checkout.
              </p>
              <button
                type="button"
                onClick={() => {
                  // Frontend-only clone — no real payment processing.
                  window.alert(
                    "This is a demo storefront — checkout isn't available."
                  );
                }}
                className={cn(
                  "flex h-12 w-full items-center justify-center rounded-none bg-brand-navy px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-blue"
                )}
              >
                Checkout
              </button>
              <SheetClose
                render={
                  <button
                    type="button"
                    className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-brand-navy"
                  />
                }
              >
                Keep shopping
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
