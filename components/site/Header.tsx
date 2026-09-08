"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { Logo } from "@/components/site/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  // The panel is tied to the route it was opened on, so navigating closes it
  // without an effect that syncs state after the fact.
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const open = menu.open && menu.path === pathname;
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hold the page still behind the open panel and let Escape close it.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu({ open: false, path: pathname });
        toggleRef.current?.focus();
      }
    };

    // The panel is hidden at desktop widths, so close it if the viewport grows
    // while it is open. Otherwise the page would stay locked behind nothing.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setMenu({ open: false, path: pathname });
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, pathname]);

  const isActive = useCallback(
    (href: string) => pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        compact || open
          ? "border-b border-line bg-canvas/85 backdrop-blur-xl supports-[backdrop-filter]:bg-canvas/75"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-300",
            compact || open ? "h-14 sm:h-16" : "h-16 sm:h-20",
          )}
        >
          <Link href="/" aria-label="TrueFleet home" className="rounded-sm">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-200",
                  isActive(link.href)
                    ? "text-ink"
                    : "text-graphite hover:text-ink",
                )}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-0.5 h-px bg-signal"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" className="hidden sm:inline-flex">
              Join TrueFleet
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenu({ open: !open, path: pathname })}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <X className="size-5" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="size-5" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-canvas lg:hidden"
      >
        <div className="container-page flex h-[calc(100dvh-3.5rem)] flex-col justify-between overflow-y-auto pt-8 pb-10">
          <nav aria-label="Primary mobile">
            <ul className="space-y-1">
              {primaryNav.map((link) => (
                <li key={link.href} className="border-b border-line last:border-0">
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="block py-4 font-display text-[1.65rem] font-semibold tracking-[-0.025em] text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-4">
            <ButtonLink href="/contact" size="lg" className="w-full">
              Join TrueFleet
            </ButtonLink>
            <ButtonLink href="/partners" size="lg" variant="secondary" className="w-full">
              Partner with TrueFleet
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
