import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UseClevr — AI Business Intelligence",
  description:
    "UseClevr transforms CSV and Excel files into verified KPIs, charts, trends and AI executive insights in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
