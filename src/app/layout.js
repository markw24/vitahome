import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Vita Home',
  description: 'Supplementing traditional professional recommendations and aiding those who are simply looking to research for themselves',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
