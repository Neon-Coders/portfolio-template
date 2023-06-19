import Footer from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { footerConfig } from "@/config/footer";
import { navConfig } from "@/config/nav";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Ibrahim Raimi", "Frontend Engineer"],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`container max-w-5xl flex flex-col min-h-screen antialiased ${inter.className}`}
      >
        <header className="top-0 z-40">
          <div className="border-b border-b-slate-200">
            <MainNav items={navConfig.mainLink} />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer items={footerConfig.mainLink} />
      </body>
    </html>
  );
}
