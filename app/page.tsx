"use client";

import { useEffect, useMemo, useState } from "react";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Users from "@/components/Users";
import AppUse from "@/components/AppUse";
import Features from "@/components/Features";
import Userguide from "@/components/Userguide";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { defaultHomepageContent } from "@/lib/default-homepage-content";
import type { HomepageContent } from "@/lib/content-schema";

export default function Home() {
  const [content, setContent] = useState<HomepageContent>(
    defaultHomepageContent,
  );

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/content", { cache: "no-store" });
        if (!response.ok) return;
        const data = (await response.json()) as HomepageContent;
        setContent(data);
      } catch {
        // Fallback remains defaultHomepageContent.
      }
    };

    load();
  }, []);

  const filteredNavItems = useMemo(() => {
    return content.nav.items.filter((item) => content.visibility[item.section]);
  }, [content]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {content.visibility.nav && (
        <Nav
          data={{ ...content.nav, items: filteredNavItems }}
          brandByline={content.brandByline}
        />
      )}
      {content.visibility.hero && <Hero data={content.hero} />}
      {content.visibility.users && <Users data={content.users} />}
      {content.visibility.features && <Features data={content.features} />}
      {content.visibility.appUse && <AppUse data={content.appUse} />}
      {content.visibility.userguide && <Userguide data={content.userguide} />}
      {content.visibility.testimonials && (
        <Testimonials data={content.testimonials} />
      )}
      {content.visibility.pricing && <Pricing data={content.pricing} />}
      {content.visibility.cta && <Cta data={content.cta} />}
      {content.visibility.footer && (
        <Footer data={content.footer} brandByline={content.brandByline} />
      )}
    </div>
  );
}
