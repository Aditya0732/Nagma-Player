import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { HomepageContent } from "@/lib/content-schema";

type PricingData = HomepageContent["pricing"];
type Plan = PricingData["plans"][number];

function PremiumWatermark() {
  return (
    <svg
      className="pointer-events-none absolute -bottom-2 -right-2 h-28 w-28 text-primary/20 sm:h-32 sm:w-32"
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
    >
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="60" cy="60" r="28" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function PremiumPlanCard({ plan }: { plan: Plan }) {
  const leadIn = plan.priceLeadIn ?? "at just";

  return (
    <Card className="flex h-full w-full min-h-0 flex-col gap-0 overflow-hidden border border-primary/20 bg-linear-to-b from-primary/10 via-white to-white py-0 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.1)] ring-1 ring-primary/8 transition-shadow duration-300 hover:shadow-[0_8px_28px_-14px_rgba(15,23,42,0.12)]">
      <CardContent className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {plan.name}
          </p>
          {plan.headline && (
            <h3 className="mt-1.5 text-base font-bold tracking-tight text-foreground sm:text-lg">
              {plan.headline}
            </h3>
          )}
        </div>

        <ul className="mb-4 min-h-0 flex-1 space-y-1.5">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + i * 0.03 }}
              className="flex items-start gap-2 text-sm leading-snug text-foreground"
            >
              <CheckCircle2
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                aria-hidden
              />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {plan.price && (
          <div className="relative shrink-0 overflow-hidden rounded-xl border border-sky-200/50 bg-linear-to-b from-sky-50/85 via-white to-white px-3 py-3.5 text-center shadow-inner sm:px-4 sm:py-4">
            <PremiumWatermark />
            <p className="relative z-1 text-sm leading-relaxed text-foreground sm:text-base">
              {plan.compareAtPrice && (
                <>
                  <span className="font-medium">Worth </span>
                  <span className="font-semibold text-black line-through decoration-red-600">
                    {plan.compareAtPrice}
                  </span>
                  <span className="font-medium"> </span>
                </>
              )}
              <span className="font-medium">{leadIn} </span>
              <span className="text-2xl font-black tracking-tight text-black sm:text-3xl">
                {plan.price}
              </span>
              {plan.period && (
                <span className="font-medium text-foreground">
                  {plan.period.startsWith("/")
                    ? ` ${plan.period}`
                    : ` for ${plan.period}`}
                </span>
              )}
            </p>
          </div>
        )}

        {/* {plan.whatsappPayment && (
          <motion.a
            href={plan.whatsappPayment.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] text-sm font-semibold text-white shadow-sm ring-1 ring-black/10 transition-[filter] hover:brightness-105 sm:h-11"
          >
            <WhatsAppGlyph className="h-4 w-4 shrink-0" />
            {plan.whatsappPayment.label}
          </motion.a>
        )} */}
      </CardContent>
    </Card>
  );
}

const Pricing = ({ data }: { data: PricingData }) => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/features/features_background.png)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-white/52"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:mb-4 md:text-5xl">
            {data.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {data.description}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2 md:gap-6 md:items-stretch">
          {data.plans.map((plan, planIndex) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: planIndex * 0.08 }}
              whileHover={plan.highlight ? undefined : { y: -3 }}
              className="relative flex h-full min-h-0"
            >
              {plan.highlight ? (
                <PremiumPlanCard plan={plan} />
              ) : (
                <Card className="flex h-full w-full min-h-0 flex-col gap-0 border border-border/50 bg-white/95 py-0 shadow-[0_6px_24px_-10px_rgba(15,23,42,0.08)] ring-1 ring-black/5 transition-shadow duration-300 hover:bg-white hover:shadow-[0_8px_28px_-12px_rgba(15,23,42,0.1)]">
                  <CardContent className="flex flex-1 flex-col p-5 sm:p-5">
                    <div>
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">
                        {plan.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {plan.subtitle}
                      </p>
                      {plan.price && (
                        <div className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
                          {plan.price}{" "}
                          {plan.period && (
                            <span className="text-base font-semibold text-primary/90 sm:text-lg">
                              {plan.period}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <ul className="mt-4 min-h-0 flex-1 space-y-2 border-t border-border/40 pt-4">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.04 }}
                          className="flex items-start gap-2.5 text-sm leading-snug text-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      variant="secondary"
                      className={cn(
                        "mt-auto h-10 w-full shrink-0 rounded-lg text-sm font-semibold sm:h-11",
                        "bg-muted! text-foreground! hover:bg-muted/85!",
                      )}
                    >
                      {plan.ctaLabel}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
