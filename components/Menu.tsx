"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function FullscreenMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const [open, setOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    // GSAP TIMELINE (paused by default)
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .set(menuRef.current, { display: "block" })
      .fromTo(
        menuRef.current,
        { clipPath: "circle(0% at 100% 0%)" },
        {
          clipPath: "circle(150% at 50% 50%)",
          duration: 1,
          ease: "power4.inOut",
        }
      )
      .fromTo(
        itemsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.5,
          ease: "power4.out",
        },
        "-=0.4"
      );

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!tl.current) return;

    if (open) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [open]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/web/about" },
    { label: "Brand", href: "/web/brand-philosophy" },
    { label: "How-it-works", href: "/web/how-it-works" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed top-0 left-0 z-50 w-full px-20 flex items-center justify-between  py-5 mix-blend-difference">
        <span className="text-white font-semibold tracking-widest">
          SMARTASURE
        </span>

        <button
          onClick={() => setOpen((p) => !p)}
          className="text-white uppercase tracking-widest text-sm"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      {/* FULLSCREEN MENU */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 hidden bg-gradient-to-br from-blue-700 to-[#000000] text-white"
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="space-y-10 text-5xl md:text-7xl font-light">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:opacity-60 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
