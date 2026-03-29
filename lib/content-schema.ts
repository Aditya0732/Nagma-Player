import { z } from "zod";

const storeButtonSchema = z.object({
  href: z.string().min(1),
  icon: z.enum(["apple", "google"]),
  iconAlt: z.string().min(1),
  preLabel: z.string().min(1),
  label: z.string().min(1),
});

const visibilitySchema = z.object({
  nav: z.boolean(),
  hero: z.boolean(),
  users: z.boolean(),
  appUse: z.boolean(),
  features: z.boolean(),
  userguide: z.boolean(),
  testimonials: z.boolean(),
  pricing: z.boolean(),
  cta: z.boolean(),
  footer: z.boolean(),
});

export const homepageContentSchema = z.object({
  version: z.string().min(1),
  updatedAt: z.string().min(1),
  visibility: visibilitySchema,
  /** Shown under the product name in the nav and footer (e.g. “by Akaal Creation”). */
  brandByline: z.string().min(1),
  nav: z.object({
    brandPrefix: z.string().min(1),
    brandHighlight: z.string().min(1),
    items: z.array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
        section: z.enum(["features", "userguide", "testimonials", "pricing"]),
      })
    ),
    storeButtons: z.array(storeButtonSchema).min(2),
  }),
  hero: z.object({
    headlinePrefix: z.string().min(1),
    headlineHighlight: z.string().min(1),
    description: z.string().min(1),
    image: z.object({
      src: z.string().min(1),
      alt: z.string().min(1),
    }),
    storeButtons: z.array(storeButtonSchema).min(2),
  }),
  users: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cards: z.array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        image: z.object({
          src: z.string().min(1),
          alt: z.string().min(1),
        }),
      })
    ),
  }),
  appUse: z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    tabs: z
      .array(
        z.object({
          icon: z.enum(["home", "barChart3", "mic"]),
          label: z.string().min(1),
          image: z.object({
            src: z.string().min(1),
            alt: z.string().min(1),
          }),
        })
      )
      .length(3),
  }),
  features: z.object({
    eyebrow: z.string().optional(),
    title: z.string().min(1),
    description: z.string().min(1),
    cards: z.array(
      z.object({
        icon: z.enum([
          "gauge",
          "waves",
          "sparkles",
          "library",
          "clock",
          "sliders",
          "mic",
          "barChart",
        ]),
        title: z.string().min(1),
        description: z.string().min(1),
      })
    ),
  }),
  userguide: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cards: z.array(
      z.object({
        icon: z.enum(["headphones", "music2", "barchart3", "music"]),
        title: z.string().min(1),
        description: z.string().min(1),
        image: z.string().min(1),
        alt: z.string().min(1),
      })
    ),
  }),
  testimonials: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    items: z.array(
      z.object({
        name: z.string().min(1),
        role: z.string().min(1),
        quote: z.string().min(1),
        stars: z.number().int().min(1).max(5),
      })
    ),
  }),
  pricing: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    plans: z
      .array(
        z.object({
          name: z.string().min(1),
          subtitle: z.string().min(1),
          badge: z.string().optional(),
          badgeTone: z.enum(["brand", "dark"]).optional(),
          headline: z.string().optional(),
          price: z.string().optional(),
          period: z.string().optional(),
          compareAtPrice: z.string().optional(),
          priceLeadIn: z.string().optional(),
          billingPeriodLabel: z.string().optional(),
          features: z.array(z.string().min(1)).min(1),
          detailedFeatures: z
            .array(
              z.object({
                title: z.string().min(1),
                description: z.string().min(1),
                icon: z.enum(["library", "progress", "compose"]),
              })
            )
            .optional(),
          whatsappPayment: z
            .object({
              href: z.string().min(1),
              label: z.string().min(1),
            })
            .optional(),
          ctaLabel: z.string().min(1),
          highlight: z.boolean(),
        })
      )
      .min(1),
  }),
  cta: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    storeButtons: z.array(storeButtonSchema).min(2),
    trustText: z.string().min(1),
  }),
  footer: z.object({
    brandPrefix: z.string().min(1),
    brandHighlight: z.string().min(1),
    tagline: z.string().min(1),
    social: z.array(
      z.object({
        icon: z.enum(["instagram", "youtube", "whatsapp"]),
        href: z.string().min(1),
        label: z.string().min(1),
      })
    ),
    sections: z.array(
      z.object({
        title: z.string().min(1),
        links: z.array(
          z.object({
            label: z.string().min(1),
            href: z.string().min(1),
          })
        ),
      })
    ),
    copyright: z.string().min(1),
  }),
});

export type HomepageContent = z.infer<typeof homepageContentSchema>;
