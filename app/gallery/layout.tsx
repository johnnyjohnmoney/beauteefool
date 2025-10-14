import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Beauteefool Beauty Salon",
  description: "Explore our portfolio of stunning beauty transformations. View our work in hair styling, nail care, makeup artistry, spa treatments, and our luxurious salon interior.",
  keywords: ["beauty salon gallery", "hair styling portfolio", "makeup examples", "nail art", "spa treatments", "salon photos"],
  openGraph: {
    title: "Gallery | Beauteefool Beauty Salon",
    description: "Explore our portfolio of stunning beauty transformations",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Beauteefool Beauty Salon Gallery",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
