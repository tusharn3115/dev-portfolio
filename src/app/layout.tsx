import type { Metadata } from "next";
import "./globals.css";
import LenisWrapper from "../../LenisWrapper";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">
        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  );
}
