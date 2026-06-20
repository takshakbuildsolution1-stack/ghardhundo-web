export interface Testimonial {
  id: string
  quote: string
  name: string
  locality: string
  savingLakhs: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "I&apos;d been searching for 8 months on my own. Priya AI matched me to the right project in 6 minutes. Got a price I couldn&apos;t have negotiated alone — no broker involved at all.",
    name: 'Ritesh Kulkarni',
    locality: 'Wakad, Pune',
    savingLakhs: 8.2,
  },
  {
    id: 't2',
    quote: "Zero brokerage actually means zero — I saved the ₹1.5L I would have paid a broker, plus GharDhundo&apos;s advisors got me an even better deal on the base price. The AI shortlist was eerily accurate.",
    name: 'Sneha Deshmukh',
    locality: 'Baner, Pune',
    savingLakhs: 9.6,
  },
  {
    id: 't3',
    quote: "Skeptical at first. But the MahaRERA verification and a real advisor who actually called me made the difference. Best home-buying experience I&apos;ve had — and I&apos;ve tried twice before.",
    name: 'Amit Joshi',
    locality: 'Kharadi, Pune',
    savingLakhs: 7.8,
  },
]
