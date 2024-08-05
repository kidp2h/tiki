import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Header, Footer } from '@/components/shared';
import { Sidebar } from '@/components/home';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tiki - Mua hàng giá tốt, hàng chuẩn, ship nhanh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.png' />
      <body className={inter.className}>
        <Header />
        <main>
          <div className='w-full flex justify-center'>
            <div className='mt-3 flex w-[90%] h-full justify-center'>
              <Sidebar />

              <div className='w-4/6 ml-5'>
                {children}

                <Footer />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
