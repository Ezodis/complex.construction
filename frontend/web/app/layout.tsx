import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complex Construction - Professional Construction Services by Eliseo",
  description: "Quality construction services for residential and commercial projects. Foundations, remodeling, concrete work, and more by Eliseo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
