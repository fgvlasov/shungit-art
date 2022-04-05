import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}