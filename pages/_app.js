import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
      <div className="main-style">
        <Header />
        <main className="main-container flex">
          <div className="w-1/4 py-10 pr-10 border-r border-gray-900">
            <Sidebar />
          </div>
          <div className="w-3/4 py-10 pl-10">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    )
}


export default MyApp