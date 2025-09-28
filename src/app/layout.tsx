import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import next/script
import "./globals.css";
import { cn } from "@/lib/utils";
import { ServicesProvider } from "@/components/ServiceProvider";
import { getServices } from "@/lib/sanityData";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Default/fallback metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Orange Soft Wash',
    default: 'Your Company - Default Title',
  },
  description: 'Default site description',
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {

  const services = await getServices();

  return (
    <html lang="en">
      <head>
        {/*
          The <head> tag in layout.tsx is for static head elements
          or elements managed by Next.js's metadata object.
          For scripts like GA, next/script placed in the body or
          just before </body> is generally preferred for performance,
          but placing gtag.js loader early can be beneficial for accuracy.
          The `strategy` prop handles how and when it loads.
        */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>

      <body className={cn(" bg-background min-h-screen font-sans antialiased", inter.variable)}>

        <ServicesProvider services={services}>

          <div className="">
            {/* <ModalMenu/>

            <PageHeader /> */}
            {children}

          </div>
        </ServicesProvider>
      </body>
    </html>
  );
}
