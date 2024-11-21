import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Janessa Tran - Fullstack Developer Portfolio",
  description: "Explore my portfolio showcasing skills in web development, and projects built with Next.js and React.",
  keywords:[
    "next.js",
    "react",
    "javascript",
    "fullstack"
  ],
  openGraph:{
    siteName:"Portfolio | Janessa Tran",
    type:"website",
    locale:"en_US",
    title:"Janessa Tran - Fullstack Developer Portfolio",
    description:"Explore my portfolio showcasing skills in web development, and projects built with Next.js and React.",
    images: [
      {
        url: "/image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview of Janessa Tran",
      },
    ],
  },
  robots:{
    index:true,
    follow:true,
    "max-image-preview":"large",
    "max-snippet": -1,
    "max-video-preview":-1,
    googleBot:"index, follow"
  },
  applicationName:"Portfolio | Janessa Tran",
};
export const viewport = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Janessa Bao Tran | Portfolio",
    "jobTitle":"Fullstack Developer",
    "sameAs": [
      "www.linkedin.com/in/janessa-tran-b01301171"
    ]
  };
  return (
    <html lang="en">
      <body>
        <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        </Head>
        <main>{children}</main>
        <footer><Footer /></footer>
      </body>
      
    </html>
  );
}
