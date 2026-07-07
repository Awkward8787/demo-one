import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Welcome Home - Elevation Church",
  "description": "Find the right experience for you at Elevation Church. Grow in your faith, connect with others, and discover your calling – whether online or in person.",
  "openGraph": {
    "title": "Welcome Home - Elevation Church",
    "description": "Find the right experience for you at Elevation Church. Grow in your faith, connect with others, and discover your calling – whether online or in person.",
    "type": "website",
    "siteName": "Elevation Church",
    "url": "https://elevationchurch.org",
    "images": [
      "https://content.elevationchurch.org/images/ec_q1_header_2026.jpeg?width=1200&height=630"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Welcome Home - Elevation Church",
    "description": "Find the right experience for you at Elevation Church. Grow in your faith, connect with others, and discover your calling – whether online or in person.",
    "images": [
      "https://content.elevationchurch.org/images/ec_q1_header_2026.jpeg?width=1200&height=630"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/f4b122827fda.ico",
        "type": "image/x-icon"
      },
      {
        "url": "/assets/cloned/images/c28804558855.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/a54121f6f087.png",
        "type": "image/png",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/images/19df7d0e8026.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "url": "/assets/cloned/images/dd7940b9285a.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/7b59b16e0288.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="h-[272.2rem] block overflow-x-hidden overflow-y-auto text-foreground [font-family:'DM_Sans',_'DM_Sans_Fallback'] text-base font-normal not-italic leading-6 tracking-[0.15px] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background max-md:h-[6895.5px] md:max-lg:h-[6046.1px] 2xl:h-[4708.7px]" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
