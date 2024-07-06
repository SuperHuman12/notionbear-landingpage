import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'BoringSites',
  description: 'Turn your Notion docs quickly into a beautiful SaaS, Apps, Marketplaces, Blogs, Helpdesks – no code required.',
  openGraph: {
    images: [
        {
            url: "https://dazzling-cat.netlify.app/BoringSites_socialshare.png",
            width: 1200,
            height: 630,
            alt: "Create a Marketplace with Notion",
        },
    ],
},
twitter: {
    card: "summary_large_image",
    images: [
        {
            url: "https://dazzling-cat.netlify.app/BoringSites_socialshare.png",
            alt: "Create a Marketplace with Notion",
        },
    ],
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          
          <Banner />
        </div>
      </body>
    </html>
  )
}
