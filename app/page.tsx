"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

const mockContent = {
  features: {
    title: "Features",
    description: "Discover powerful features that make your development faster and more efficient.",
    items: [
      "Next.js 16 with App Router",
      "TypeScript for type safety",
      "Tailwind CSS 4 for styling",
      "Turbopack for faster builds",
      "shadcn/ui components"
    ]
  },
  pricing: {
    title: "Pricing",
    description: "Choose the perfect plan for your needs.",
    items: [
      "Free tier: $0/month - Perfect for getting started",
      "Pro: $29/month - For professional developers",
      "Team: $99/month - Collaborate with your team",
      "Enterprise: Custom pricing - For large organizations"
    ]
  },
  about: {
    title: "About",
    description: "Learn more about this starter template.",
    items: [
      "Built with modern web technologies",
      "Fully customizable and extensible",
      "Production-ready setup",
      "Best practices included",
      "Regular updates and maintenance"
    ]
  }
};

type ContentKey = keyof typeof mockContent;

export default function Home() {
  const [selectedContent, setSelectedContent] = useState<ContentKey>("features");
  const content = mockContent[selectedContent];

  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Next.js Starter Template
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore different sections using the buttons below
          </p>

          <ButtonGroup className="mt-4">
            <Button
              variant={selectedContent === "features" ? "default" : "outline"}
              onClick={() => setSelectedContent("features")}
            >
              Features
            </Button>
            <Button
              variant={selectedContent === "pricing" ? "default" : "outline"}
              onClick={() => setSelectedContent("pricing")}
            >
              Pricing
            </Button>
            <Button
              variant={selectedContent === "about" ? "default" : "outline"}
              onClick={() => setSelectedContent("about")}
            >
              About
            </Button>
          </ButtonGroup>

          <div className="mt-8 w-full max-w-md p-6 rounded-lg border border-border bg-card shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-3 text-foreground">{content.title}</h2>
            <p className="text-muted-foreground mb-4">{content.description}</p>
            <ul className="space-y-2">
              {content.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
    </>
  );
}
