"use client";

import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const leadership = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    image: "https://i.pravatar.cc/150?img=5",
    initials: "SC",
    bio: "15+ years in tech leadership"
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    image: "https://i.pravatar.cc/150?img=6",
    initials: "MR",
    bio: "Former Senior Engineer at Meta"
  },
  {
    name: "Emily Watson",
    role: "Head of Design",
    image: "https://i.pravatar.cc/150?img=7",
    initials: "EW",
    bio: "Award-winning UI/UX designer"
  },
  {
    name: "James Park",
    role: "VP of Engineering",
    image: "https://i.pravatar.cc/150?img=8",
    initials: "JP",
    bio: "PhD in Computer Science"
  },
];

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Team Members", value: "50+" },
  { label: "Projects Delivered", value: "200+" },
  { label: "Countries", value: "15+" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We are a team of passionate developers and designers building the next generation of web applications.
              Our mission is to create tools that empower developers to build faster and better.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Leadership Section with Dropdown Menus */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {leadership.map((person, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg hover:border-green-400/50 transition-all"
                >
                  <Avatar className="size-24 mb-4 ring-2 ring-green-400/50">
                    <AvatarImage src={person.image} alt={person.name} />
                    <AvatarFallback className="bg-gradient-to-br from-green-400 to-emerald-500 text-black font-bold">
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold text-white text-center">{person.name}</h3>
                  <p className="text-sm text-green-400 mb-2 text-center">{person.role}</p>
                  <p className="text-xs text-gray-400 mb-4 text-center">{person.bio}</p>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-500/20 hover:bg-green-500/10 hover:border-green-400 text-gray-300"
                      >
                        Contact
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black border-green-500/20">
                      <DropdownMenuLabel className="text-green-400">Contact Options</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-green-500/20" />
                      <DropdownMenuItem className="text-gray-300 hover:text-green-400 hover:bg-green-500/10 cursor-pointer">
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-300 hover:text-green-400 hover:bg-green-500/10 cursor-pointer">
                        Schedule Meeting
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-300 hover:text-green-400 hover:bg-green-500/10 cursor-pointer">
                        View LinkedIn
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-400">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-8">
              To empower developers worldwide with cutting-edge tools and frameworks that make building
              modern web applications faster, easier, and more enjoyable. We believe in open source,
              community collaboration, and continuous innovation.
            </p>
            <Button className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
