export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does group buying work?',
    answer: 'Five AI-matched buyers express interest in the same project. GharDhundo takes that group to the developer as a single negotiating block — developer gets five confirmed bookings at once, so they grant a bulk discount. You save ₹7–10L. You each choose your own flat independently.',
  },
  {
    id: 'faq-2',
    question: 'Is every project MahaRERA verified?',
    answer: 'Yes. Every project on GharDhundo is scraped from the official MahaRERA portal and cross-verified for active registration, valid completion date, and no litigation flags. We refresh the data every 48 hours.',
  },
  {
    id: 'faq-3',
    question: 'What happens if the group does not fill to 5?',
    answer: 'Groups expire after 21 days if fewer than 5 seats are filled. You pay nothing until the group is complete and you sign a booking agreement. If your group expires you are automatically offered the next matching group or a different project.',
  },
  {
    id: 'faq-4',
    question: 'Do I pay anything before booking?',
    answer: 'No upfront payment of any kind. You join a group, the group forms, GharDhundo negotiates with the developer, and only then does the normal developer booking process begin — directly between you and the developer.',
  },
  {
    id: 'faq-5',
    question: 'How is Priya AI different from a broker?',
    answer: "A broker earns 2% of the deal value — on a ₹90L flat that's ₹1.8L, paid by you through inflated prices. Priya AI earns 1.25% paid by the developer from the group discount savings. You pay zero brokerage and still save ₹7–10L net.",
  },
  {
    id: 'faq-6',
    question: 'Can I choose my own specific flat or floor?',
    answer: 'Yes. Group buying only means you and four others book in the same project — not the same flat. You each independently select your unit, floor, and facing directly with the developer during the booking stage.',
  },
  {
    id: 'faq-7',
    question: 'Is GharDhundo a developer or a platform?',
    answer: 'GharDhundo is a technology platform. We do not own or develop any property. We connect AI-matched buyers into negotiating groups and facilitate the interaction with developers. Think of us as the technology layer between you and the developer.',
  },
]
