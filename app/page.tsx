"use client";

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Users from "@/components/Users";
import Features from "@/components/Features";
import Userguide from "@/components/Userguide";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Users />
      <Features />
      <Userguide />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
}
