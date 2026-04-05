import type { HomepageContent } from "@/lib/content-schema";

export const defaultHomepageContent: HomepageContent = {
  version: "1.0.0",
  updatedAt: "2026-03-23T00:00:00.000Z",
  brandByline: "by Akaal Creation",
  visibility: {
    nav: true,
    hero: true,
    users: false,
    appUse: true,
    features: true,
    userguide: true,
    testimonials: true,
    pricing: true,
    cta: true,
    footer: true,
  },
  nav: {
    brandPrefix: "Akaal",
    brandHighlight: "Creation",
    items: [
      { label: "Features", href: "#features", section: "features" },
      { label: "How it Works", href: "#how-it-works", section: "userguide" },
      { label: "Testimonials", href: "#testimonials", section: "testimonials" },
      { label: "Pricing", href: "#pricing", section: "pricing" },
    ],
    storeButtons: [
      {
        href: "#",
        icon: "apple",
        iconAlt: "Apple",
        preLabel: "Download on the",
        label: "App Store",
      },
      {
        href: "#",
        icon: "google",
        iconAlt: "Google Play",
        preLabel: "GET IT ON",
        label: "Google Play",
      },
    ],
  },
  hero: {
    headlinePrefix: "The most authentic",
    headlineHighlight: "Nagma Riyaz companion",
    description:
      "Practice and innovate with 500+ authentic Nagma/Lehra composed across 15+ taals and 100+ raags in our app. Thoughtfully crafted for tabla players, pakhawaj artists, Kathak dancers, percussionists, and rhythm enthusiasts.",
      image: {
      src: "/hero/hero_full.png",
      alt: "Akaal Creation App Interface",
    },
    storeButtons: [
      {
        href: "#",
        icon: "apple",
        iconAlt: "Apple",
        preLabel: "Download on the",
        label: "App Store",
      },
      {
        href: "#",
        icon: "google",
        iconAlt: "Google Play",
        preLabel: "Get it on",
        label: "Google Play",
      },
    ],
  },
  users: {
    title: "Who is it For",
    description:
      "Designed for passionate musicians across Indian classical traditions",
    cards: [
      {
        title: "Tabla & Pakhwaj Players",
        description:
          "Master rhythm patterns and taal structures with authentic accompaniment",
        image: {
          src: "/tabla-player-performing-indian-classical-drums-per.jpg",
          alt: "Tabla and Pakhwaj Players",
        },
      },
      {
        title: "Kathak Dancers",
        description: "Synchronize movement with traditional rhythm",
        image: {
          src: "/kathak-dancer-performing-indian-classical-dance.jpg",
          alt: "Kathak Dancers",
        },
      },
      {
        title: "Percussion Instrumentalists & Drummers",
        description: "Expand percussive vocabulary with precision",
        image: {
          src: "/percussion-drummer-playing-drums-indian-classical.jpg",
          alt: "Percussion Instrumentalists",
        },
      },
      {
        title: "String Instrumentalists",
        description: "Perfect for Harmonium, Sarangi, Sitar & more",
        image: {
          src: "/sarangi-player-string-instrument-indian-classical-.jpg",
          alt: "String Instrumentalists",
        },
      },
      {
        title: "Vocalists & Raga Explorers",
        description: "Master vocal techniques and raag nuances",
        image: {
          src: "/indian-classical-singer-vocalist-performing-raag-m.jpg",
          alt: "Vocalists",
        },
      },
    ],
  },
  appUse: {
    title: "Precision Tools for Perfect Riyaz",
    tabs: [
      {
        icon: "home",
        label: "Home",
        image: {
          src: "/appuse/app_use_1.png",
          alt: "Nagma Player main screen with pitch, tempo, and practice controls",
        },
      },
      {
        icon: "barChart3",
        label: "STATISTICS",
        image: {
          src: "/appuse/app_use_2.png",
          alt: "Nagma Player statistics with streaks, goals, and weekly report",
        },
      },
      {
        icon: "mic",
        label: "RECORD",
        image: {
          src: "/appuse/app_use_3.png",
          alt: "Nagma Player recording and loop library",
        },
      },
    ],
  },
  features: {
    eyebrow: "Nagma Player",
    title: "Powerful Features",
    description:
      "Thoughtfully designed tools for serious classical practice and riyaaz.",
    cards: [
      {
        icon: "gauge",
        title: "BPM Range",
        description:
          "Precision tempo settings across an extensive range (30-500 BPM) for metronomic control over rhythmic mastery.",
      },
      {
        icon: "waves",
        title: "Vocal Nagma",
        description:
          "Integrates nuanced vocal accompaniment to deliver an immersive, authentic classical performance.",
      },
      {
        icon: "sparkles",
        title: "Specially Composed Nagmas",
        description:
          "Curated compositions tailored specifically to enhance taal alignment and facilitate seamless practice flows.",
      },
      {
        icon: "library",
        title: "Vast Library of Raags",
        description:
          "Access an unparalleled collection of raags, encompassing diverse emotional landscapes and moods.",
      },
      {
        icon: "clock",
        title: "Raag Samay Chakra",
        description:
          "Align your practice with traditional timing: play raags at their intended prahars as guided by the Samay Chakra.",
      },
      {
        icon: "sliders",
        title: "In-built Tuner",
        description:
          "High-precision instrumentation for flawless tuning, ensuring your instrument achieves optimal tonal pitch and harmony.",
      },
      {
        icon: "mic",
        title: "Real Sound, Real Feel",
        description:
          "Authentic, high-fidelity acoustic performance, professionally mastered in a dedicated studio environment.",
      },
      {
        icon: "barChart",
        title: "Track Your Progress",
        description:
          "Comprehensive analytics dashboard to monitor personal development and benchmark your practice against peer performance data.",
      },
    ],
  },
  userguide: {
    title: "Grind Your Skills to Perfection",
    description:
      "Discover how musicians like you are transforming their practice",
    cards: [
      {
        icon: "headphones",
        title: "Never Practice Alone Again",
        description:
          "Experience the joy of real accompaniment anytime at tip of your finger. Record and compose your own nagmas, explore what others have uploaded, and be part of a creative community.",
        image: "/musician-with-headphones-practicing-classical-musi.jpg",
        alt: "Musician practicing with headphones",
      },
      {
        icon: "music2",
        title: "Experience the Wide Possibilities of Raags",
        description:
          "Access hundreds of nagmas, composed accordingly to the structure of taals. Build confidence in learning new compositions with precision-tuned accompaniment designed by masters.",
        image: "/indian-classical-musician-studying-music-notation-.jpg",
        alt: "Musician learning raags",
      },
      {
        icon: "barchart3",
        title: "Track Your Musical Growth",
        description:
          "Build daily practice streaks, monitor your progress, and celebrate milestones in your musical journey. Visual insights help you stay motivated and understand your improvement over time.",
        image: "/musician-recording-and-tracking-progress-analytics.jpg",
        alt: "Tracking musical progress",
      },
      {
        icon: "music",
        title: "Built for Your Instrument",
        description:
          "Specialised accompaniments for different instruments and playing styles. Find precisely what your instrument needs from tabla to harmonium, sarangi to sitar, and everything else.",
        image: "/classical-indian-instruments-tabla-harmonium-saran.jpg",
        alt: "Classical instruments",
      },
    ],
  },
  testimonials: {
    title: "Loved & Trusted by Gurus",
    description: "Listen what legends say about Nagma Player",
    items: [
      {
        name: "Pandit Arun Kumar",
        role: "Sarangi Maestro",
        quote:
          "Nagma Player brings authenticity to digital accompaniment like nothing I've experienced before.",
        stars: 5,
      },
      {
        name: "Tabla Expert Ritika",
        role: "International Percussionist",
        quote:
          "The precision and musical accuracy are exceptional. My students love practicing with it.",
        stars: 5,
      },
      {
        name: "Smita Devi",
        role: "Kathak Dancer & Musician",
        quote:
          "Finally, a tool that truly understands classical music. Highly recommended for any serious artist.",
        stars: 5,
      },
    ],
  },
  pricing: {
    title: "Simple Pricing",
    description: "Choose what works for your musical journey",
    plans: [
      {
        name: "Free",
        subtitle: "Perfect to get started",
        features: [
          "1 Instrument Only",
          "1 Taal",
          "2 Raags Available",
          "Mobile Practice",
        ],
        ctaLabel: "Start Now",
        highlight: false,
      },
      {
        name: "Premium",
        subtitle: "Premium subscription",
        headline: "Unlock Unlimited Access",
        price: "₹499",
        period: "/year",
        compareAtPrice: "₹1299",
        priceLeadIn: "at just",
        features: [
          "500+ All Nagmas",
          "100+ All Raags & Taals",
          "Recording & Saves",
          "BPM Range 30-500",
          "Community Sharing",
          "Daily Practice Goals",
        ],
        whatsappPayment: {
          href: "https://wa.me/919226752779?text=Hi%2C%20I%27d%20like%20to%20pay%20for%20Nagma%20Player%20Premium%20%28%E2%82%B9499%2Fyear%29.",
          label: "Pay via WhatsApp",
        },
        ctaLabel: "Pay via WhatsApp",
        highlight: true,
      },
    ],
  },
  cta: {
    title: "Ready to Transform Your Practice?",
    description:
      "Join thousands of musicians elevating their classical artistry with Nagma Player Premium",
    storeButtons: [
      {
        href: "#",
        icon: "apple",
        iconAlt: "Apple",
        preLabel: "Download on the",
        label: "App Store",
      },
      {
        href: "#",
        icon: "google",
        iconAlt: "Google Play",
        preLabel: "Get it on",
        label: "Google Play",
      },
    ],
    trustText: "Free to start • No ads • Cancel anytime",
  },
  footer: {
    brandPrefix: "Akaal",
    brandHighlight: "Creation",
    tagline: "Your perfect Riyaz companion",
    social: [
      {
        icon: "instagram",
        href: "https://www.instagram.com/nagmaplayer?igsh=ZHc3amg5NGw4eWc=&utm_source=ig_contact_invite",
        label: "Akaal Creation on Instagram",
      },
      {
        icon: "youtube",
        href: "https://youtube.com/@nagmaplayer?si=MYOBf_hGQGCn8hwC",
        label: "Akaal Creation on YouTube",
      },
      {
        icon: "whatsapp",
        href: "https://wa.me/919226752779",
        label: "Contact Akaal Creation on WhatsApp",
      },
    ],
    sections: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/#features" },
          { label: "Pricing", href: "/#pricing" },
          { label: "Download", href: "/#cta" },
        ],
      },
      {
        title: "Company",
        links: [
          {
            label: "akaalcreation.support@gmail.com",
            href: "mailto:akaalcreation.support@gmail.com",
          },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          {
            label: "Support",
            href: "mailto:akaalcreation.support@gmail.com?subject=Akaal%20Creation%20Support",
          },
        ],
      },
    ],
    copyright: "© 2026 Akaal Creation. All rights reserved.",
  },
};
