import Navigation from '@/components/Navigation/Navigation'
import Cursor from '@/components/cursor'
import CustomCursor from '@/components/cursor'
import FollowerContainer from '@/components/cursor'
import CursorProvider from '@/components/cursor'
import { Layout } from '@/components/dom/Layout'
import '@/global.css'

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        <Layout>
          <CustomCursor />
          <Navigation />
          {children}
        </Layout>
      </body>
    </html>
  )
}
