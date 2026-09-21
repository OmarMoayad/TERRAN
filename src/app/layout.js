import { Cairo } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

const siteUrl = process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined;

export const metadata = {
  title: "TERRAN | إكسسوارات رجالية",
  description:
    "اكتشف بكجات TERRAN من الإكسسوارات الرجالية المختارة بعناية، بتصميم أنيق وتفاصيل تليق بإطلالتك.",
  keywords: "TERRAN, إكسسوارات رجالية, بكجات, أناقة, فخامة",
  metadataBase: siteUrl,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title: "TERRAN | إكسسوارات رجالية",
    description:
      "اكتشف بكجات TERRAN من الإكسسوارات الرجالية المختارة بعناية، بتصميم أنيق وتفاصيل تليق بإطلالتك.",
    locale: "ar_AR",
    type: "website",
    images: siteUrl
      ? [
          {
            url: "/images/hero.png",
            alt: "إكسسوارات رجالية من TERRAN",
          },
        ]
      : undefined,
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className} style={{ scrollBehavior: "smooth" }}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
