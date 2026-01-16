import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WrapperSessionProvider from "./SessionWrapper/WrapperSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PayNearby Distributor Rajnagar | AEPS Retailer ID & Services",
  description:
    "Official PayNearby Distributor in Rajnagar, Bihar. Get AEPS Retailer ID, Aadhaar Banking, Money Transfer, Recharge, Bill Payments, Insurance & Loan Services.",
  keywords: [
    "PayNearby Rajnagar",
    "PayNearby Distributor Rajnagar",
    "AEPS Rajnagar",
    "Money Transfer Rajnagar",
    "Aadhaar Banking Rajnagar",
    "Recharge Rajnagar",
    "Bill Payment Rajnagar",
    "PayNearby Retailer ID",
    "Digital Banking Rajnagar",
  ],
  authors: [{ name: "PayNearby Rajnagar" }],
  creator: "PayNearby Rajnagar",
  publisher: "PayNearby Rajnagar",
  metadataBase: new URL("https://paynearby-distributor-rajnagar.vercel.app/"),
  alternates: {
    canonical: "https://paynearby-distributor-rajnagar.vercel.app/",
  },
  openGraph: {
    title: "PayNearby Distributor Rajnagar | AEPS Retailer ID & Services",
    description:
      "Join PayNearby Rajnagar distributor network. Provide Aadhaar Banking, Money Transfer, Recharge & Insurance services. Apply for Retailer ID today!",
    url: "https://paynearby-distributor-rajnagar.vercel.app/",
    siteName: "PayNearby Rajnagar",
    images: [
      {
        url: "https://paynearby-distributor-rajnagar.vercel.app/logo-navbar.png",
        width: 1200,
        height: 630,
        alt: "PayNearby Distributor Rajnagar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayNearby Distributor Rajnagar | AEPS Retailer ID",
    description:
      "Get AEPS Retailer ID in Rajnagar with PayNearby. Easy Aadhaar Banking, Money Transfer, Bill Payment & Insurance services.",
    images: ["https://paynearby-distributor-rajnagar.vercel.app//og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NVTS6L8T');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVTS6L8T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <WrapperSessionProvider>{children}</WrapperSessionProvider>
      </body>
    </html>
  );
}
