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
    quote: "I'd been searching for 8 months on my own. Priya AI matched me to Lodha Belmondo in 6 minutes. The group formed in 3 days and we got ₹8.2L off the base price — no broker involved at all.",
    name: 'Ritesh Kulkarni',
    locality: 'Wakad, Pune',
    savingLakhs: 8.2,
  },
  {
    id: 't2',
    quote: "Zero brokerage actually means zero — I saved the ₹1.5L I would have paid a broker and got an additional group discount on top. The AI shortlist was eerily accurate for my budget and location.",
    name: 'Sneha Deshmukh',
    locality: 'Baner, Pune',
    savingLakhs: 9.6,
  },
  {
    id: 't3',
    quote: "Skeptical at first — sounds too good. But the MahaRERA verification and the transparent group progress made me comfortable. We are five complete strangers who bought in the same tower and saved together.",
    name: 'Amit Joshi',
    locality: 'Kharadi, Pune',
    savingLakhs: 7.8,
  },
]
