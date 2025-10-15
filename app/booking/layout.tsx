import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Beauteefool Beauty Salon",
  description: "Book your beauty appointment online. Choose from hair styling, nails, makeup, spa, and facial treatments. Easy online booking with instant confirmation.",
  keywords: "beauty salon booking, online appointment, hair salon booking, spa appointment, makeup booking, nail salon booking",
  openGraph: {
    title: "Book Your Beauty Appointment | Beauteefool",
    description: "Easy online booking for all your beauty needs. Select services, choose your time, and get instant confirmation.",
    type: "website",
  },
};

export default function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
