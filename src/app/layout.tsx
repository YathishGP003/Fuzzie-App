import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'
import { DM_Sans } from 'next/font/google'
import "./globals.css";

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fuzzie.',
  description: 'Automate Your Work With Fuzzie.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
    <html lang="en">
      <body
        className={font.className}
      > 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
