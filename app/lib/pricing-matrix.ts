/**
 * Multi-dimensional pricing configuration matrix.
 *
 * Architecture:
 *  - basePrices[tier]   → base USD monthly rate
 *  - annualDiscount     → flat 20% multiplier for annual billing
 *  - currencyMultiplier → regional tariff variables per currency
 *  - currencySymbol     → display symbol per currency
 *
 * Final price is computed at render time:
 *   finalPrice = basePrices[tier] × currencyMultiplier[currency] × (isAnnual ? annualDiscount : 1)
 *
 * This ensures ZERO hardcoded UI values.
 */

export type Currency = "USD" | "INR" | "EUR";
export type BillingCycle = "monthly" | "annual";
export type Tier = "starter" | "professional" | "enterprise";

export interface TierConfig {
  name: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  topFeatures: string[];
  sectionHeader: string;
  priceSubtext: string;
  underButtonText: string;
}

export interface PricingMatrix {
  basePrices: Record<Tier, number>;
  annualDiscount: number;
  currencyMultiplier: Record<Currency, number>;
  currencySymbol: Record<Currency, string>;
  tiers: Record<Tier, TierConfig>;
}

export const PRICING_MATRIX: PricingMatrix = {
  // Base monthly rates in USD
  basePrices: {
    starter: 5,
    professional: 12,
    enterprise: 0, // Invoiced custom
  },

  // Flat 20% annual discount
  annualDiscount: 0.82, // 18% discount to match the badge "18% Discount" in the reference image

  // Regional tariff variables
  currencyMultiplier: {
    USD: 1,
    INR: 83,
    EUR: 0.92,
  },

  currencySymbol: {
    USD: "$",
    INR: "₹",
    EUR: "€",
  },

  tiers: {
    starter: {
      name: "Starter",
      description: "For individuals & small teams",
      features: [
        "Calendar & Task Lists",
        "Advanced Asset Feedback",
        "Collaborative Documents",
        "Personal Templates",
      ],
      featured: false,
      cta: "14 Day Free Trial",
      topFeatures: ["Unlimited free guests", "100GB of storage"],
      sectionHeader: "Starter Plan Includes:",
      priceSubtext: "Per teammate",
      underButtonText: "No Credit Card Needed",
    },
    professional: {
      name: "Pro",
      description: "For growing teams",
      features: [
        "Advanced Calendar Filters",
        "Password Protected Links",
        "Custom Branding",
        "Shared Company Templates",
      ],
      featured: true,
      cta: "14 Day Free Trial",
      topFeatures: ["Unlimited free guests", "500GB of storage"],
      sectionHeader: "Everything in Starter Plus:",
      priceSubtext: "Per teammate",
      underButtonText: "No Credit Card Needed",
    },
    enterprise: {
      name: "Enterprise",
      description: "For large organizations",
      features: [
        "Single Sign-On (SSO)",
        "Advanced Security",
        "Whiteglove Onboarding",
        "Priority Support Team",
      ],
      featured: false,
      cta: "Book Demo",
      topFeatures: ["Unlimited free guests", "Unlimited storage"],
      sectionHeader: "Everything in Pro Plus:",
      priceSubtext: "Contact Sales",
      underButtonText: "Talk to Sales",
    },
  },
};

/**
 * Compute the final price for a tier/currency/billing combination.
 * All values are derived from the matrix — no hardcoded prices in UI.
 */
export function computePrice(
  tier: Tier,
  currency: Currency,
  billing: BillingCycle
): number {
  const base = PRICING_MATRIX.basePrices[tier];
  const multiplier = PRICING_MATRIX.currencyMultiplier[currency];
  const discount = billing === "annual" ? PRICING_MATRIX.annualDiscount : 1;
  return Math.round(base * multiplier * discount);
}

/**
 * Format a price with its currency symbol.
 */
export function formatPrice(amount: number, currency: Currency): string {
  const symbol = PRICING_MATRIX.currencySymbol[currency];
  if (currency === "INR") {
    return `${symbol}${amount.toLocaleString("en-IN")}`;
  }
  return `${symbol}${amount.toLocaleString("en-US")}`;
}

/** All tier keys in display order */
export const TIER_ORDER: Tier[] = ["starter", "professional", "enterprise"];

/** All currency keys */
export const CURRENCIES: Currency[] = ["USD", "INR", "EUR"];

/** Currency display labels */
export const CURRENCY_LABELS: Record<Currency, string> = {
  USD: "USD ($)",
  INR: "INR (₹)",
  EUR: "EUR (€)",
};
