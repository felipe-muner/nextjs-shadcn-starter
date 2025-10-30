"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-500/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-400/10 to-green-500/10" />

        {/* Animated gradient orbs */}
        <div className="absolute -top-24 -left-24 size-48 rounded-full bg-gradient-to-br from-green-400/40 to-emerald-500/40 blur-3xl animate-pulse" />
        <div className="absolute -top-24 -right-24 size-48 rounded-full bg-gradient-to-br from-emerald-400/40 to-green-500/40 blur-3xl animate-pulse [animation-delay:1s]" />

        <div className="relative flex h-16 w-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex w-full max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/50 transition-transform group-hover:scale-110">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
              <span className="relative text-lg font-bold text-black">N</span>
            </div>
            <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              NextJS Starter
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/features"
              className="relative text-gray-400 transition-colors hover:text-green-400 group"
            >
              Features
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-green-400 to-emerald-400 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/pricing"
              className="relative text-gray-400 transition-colors hover:text-green-400 group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-green-400 to-emerald-400 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="relative text-gray-400 transition-colors hover:text-green-400 group"
            >
              About
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-green-400 to-emerald-400 transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/docs"
              className="relative text-gray-400 transition-colors hover:text-green-400 group"
            >
              Docs
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-green-400 to-emerald-400 transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* CTA Buttons & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex text-gray-300 hover:text-green-400 hover:bg-green-500/10"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="hidden md:inline-flex relative overflow-hidden bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 transition-opacity hover:opacity-100" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-green-400 hover:bg-green-500/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-green-500/20 w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-green-400">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/features"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-green-400 transition-colors py-2 px-4 rounded-md hover:bg-green-500/10"
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-green-400 transition-colors py-2 px-4 rounded-md hover:bg-green-500/10"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-green-400 transition-colors py-2 px-4 rounded-md hover:bg-green-500/10"
                  >
                    About
                  </Link>
                  <Link
                    href="/docs"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-green-400 transition-colors py-2 px-4 rounded-md hover:bg-green-500/10"
                  >
                    Docs
                  </Link>
                  <div className="pt-4 border-t border-green-500/20 space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-300 hover:text-green-400 hover:bg-green-500/10"
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
