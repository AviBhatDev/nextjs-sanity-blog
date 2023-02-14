import '../../styles/globals.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto bg-[#FFF5CF] pb-10 xl:pb-24">
            <Header />
            <Banner />
            {children}
            <Footer />
      </body>
    </html>
  )
}
