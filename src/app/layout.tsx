import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Center - Pet Daycare Management Software",
  description:
    "A flexible system designed for the unique needs of your pet daycare.  Streamline operations, enhance client relationships,  and deliver exceptional pet care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-sm text-zinc-900 bg-[#E5E8EC] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
