import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo'

function Footer() {
  return (
    <div className="py-12 border-t border-gray-900 bg-black">
      <div className="main-container flex justify-between">
        <div className>
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="flex-1 items-center"><Logo width="120" height="35" /></a>
            </Link>
            <p className="text-lg text-gray-200">
              Bildiren, önemli haberler ve bilgilerle sizi daha akıllı, daha hızlı hale getirir.
            </p>
            <p className="text-sm text-gray-200">
              Tüm Hakkı Saklıdır © Emper Medya, 2021
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl text-gray-400 ">Hakkında</h2>
          <div className="flex flex-col space-y-2">
            <Link href="/secki">
              <a className="text-base hover:title-hover">
                Bildiren Hakkında
              </a>
            </Link>
            <Link href="/secki">
              <a className="text-base hover:title-hover">
                Reklam & Sponsorluk
              </a>
            </Link>
            <Link href="/secki">
              <a className="text-base hover:title-hover">
                İstatistikler
              </a>
            </Link>
            <Link href="/secki">
              <a className="text-base hover:title-hover">
                Kariyer
              </a>
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl text-gray-400 ">Üretimler</h2>
          <div className="flex flex-col space-y-2">
            <Link href="/secki">
              <a className="text-base hover:title-hover">
                Bildiren Günlük
              </a>
            </Link>
            <Link href="/secki">
              <a className="text-base hover:title-hover">
                Bildiren Podcast
              </a>
            </Link>
            <Link href="/secki">
              <a className="text-base hover:title-hover">
                Bildiren Posta
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
