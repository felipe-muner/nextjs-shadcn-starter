"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const docSections = [
  {
    category: "Getting Started",
    icon: "🚀",
    items: [
      { title: "Installation", description: "Learn how to install and set up the project", content: "Run 'pnpm create next-app@latest' to get started with this template." },
      { title: "Configuration", description: "Configure your project settings", content: "Update your tailwind.config.ts and next.config.ts files to customize the setup." },
      { title: "Quick Start Guide", description: "Build your first page in minutes", content: "Create a new page in the app directory and start building with our components." },
    ]
  },
  {
    category: "Components",
    icon: "🧩",
    items: [
      { title: "Button", description: "Learn about button variants and usage", content: "Use the Button component with variants like 'default', 'outline', 'ghost' for different styles." },
      { title: "Dialog", description: "Create modal dialogs and popups", content: "Dialog components are perfect for forms, confirmations, and important messages." },
      { title: "Table", description: "Display data in structured tables", content: "Use Table components with TanStack React Table for powerful data management." },
    ]
  },
  {
    category: "Advanced",
    icon: "⚙️",
    items: [
      { title: "State Management", description: "Managing application state", content: "Use React hooks like useState and useContext for state management." },
      { title: "API Routes", description: "Building backend endpoints", content: "Create API routes in the app/api directory for server-side logic." },
      { title: "Deployment", description: "Deploy to production", content: "Deploy your app to Vercel, Netlify, or any hosting platform with ease." },
    ]
  },
];

export default function DocsPage() {
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; content: string } | null>(null);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Everything you need to know to build amazing applications with our starter template.
            </p>
          </div>

          {/* Quick Links Dropdown */}
          <div className="flex justify-center mb-12">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50">
                  Quick Navigation
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-green-500/20 w-56">
                <DropdownMenuLabel className="text-green-400">Jump to Section</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-green-500/20" />
                {docSections.map((section, idx) => (
                  <DropdownMenuItem
                    key={idx}
                    className="text-gray-300 hover:text-green-400 hover:bg-green-500/10 cursor-pointer"
                  >
                    {section.icon} {section.category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Documentation Sections */}
          <div className="max-w-6xl mx-auto space-y-12">
            {docSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="size-12 bg-gradient-to-br from-green-400 to-emerald-500">
                    <AvatarFallback className="text-2xl">{section.icon}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-3xl font-bold text-green-400">{section.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg hover:border-green-400/50 transition-all"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedDoc(item)}
                            className="border-green-500/20 hover:bg-green-500/10 hover:border-green-400 text-gray-300"
                          >
                            Read More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-black border-green-500/20">
                          <DialogHeader>
                            <DialogTitle className="text-green-400">{item.title}</DialogTitle>
                            <DialogDescription className="text-gray-400">
                              {item.description}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <p className="text-gray-300">{item.content}</p>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              className="border-green-500/20 hover:bg-green-500/10 hover:border-green-400 text-gray-300"
                            >
                              Copy Code
                            </Button>
                            <Button className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold">
                              Try It Out
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-20 text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Need More Help?</h3>
              <p className="text-gray-300 mb-6">
                Cannot find what you are looking for? Join our community or contact support.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-green-500/20 hover:bg-green-500/10 hover:border-green-400 text-gray-300"
                >
                  Join Discord
                </Button>
                <Button className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
