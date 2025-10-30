"use client";

import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const teamMembers = [
  { name: "Alice Johnson", role: "CEO & Founder", image: "https://i.pravatar.cc/150?img=1", initials: "AJ" },
  { name: "Bob Smith", role: "CTO", image: "https://i.pravatar.cc/150?img=2", initials: "BS" },
  { name: "Carol White", role: "Lead Developer", image: "https://i.pravatar.cc/150?img=3", initials: "CW" },
  { name: "David Brown", role: "Designer", image: "https://i.pravatar.cc/150?img=4", initials: "DB" },
];

const features = [
  {
    title: "Lightning Fast",
    description: "Built with Next.js 16 and Turbopack for blazing fast development and production builds.",
    icon: "⚡"
  },
  {
    title: "Type Safe",
    description: "Full TypeScript support ensures your code is robust and maintainable.",
    icon: "🛡️"
  },
  {
    title: "Beautiful UI",
    description: "Powered by Tailwind CSS 4 and shadcn/ui for stunning, accessible components.",
    icon: "🎨"
  },
  {
    title: "Developer Experience",
    description: "Hot reload, great debugging tools, and excellent documentation.",
    icon: "💻"
  },
  {
    title: "Production Ready",
    description: "Optimized for performance with built-in SEO and best practices.",
    icon: "🚀"
  }
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Features
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the powerful features that make this starter template the perfect choice for your next project.
            </p>
          </div>

          {/* Features Carousel */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">What We Offer</h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 h-full">
                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 h-full hover:border-green-400/50 transition-all">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-green-400">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-green-500/20 hover:bg-green-500/10 hover:border-green-400" />
              <CarouselNext className="border-green-500/20 hover:bg-green-500/10 hover:border-green-400" />
            </Carousel>
          </div>

          {/* Team Section with Avatars */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg hover:border-green-400/50 transition-all"
                >
                  <Avatar className="size-24 mb-4 ring-2 ring-green-400/50">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-br from-green-400 to-emerald-500 text-black font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
