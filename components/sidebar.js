import Link from 'next/link'
import Image from 'next/image'

function Sidebar() {
  return (
    <div className="main-container space-y-12">
      <div className="space-y-3">
        <h2 className="text-2xl text-gray-400 ">Önemli İçerikler</h2>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <Link href="/secki">
              <a>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
                  }
                  width="300"
                  height="100"
                  objectFit="cover"
                />
              </a>
            </Link>
            <Link href="/secki">
              <a className="text-lg hover:title-hover">
                Paris İklim Anlaşması'na ilişkin kanun teklifi, TBMM Genel
                Kurulu'nda kabul edildi.
              </a>
            </Link>
            <div className="flex flex-row space-x-4">
              <span className="text-xs text-gray-400">21 saat önce</span>
              <div className="flex flex-row space-x-2">
                <Link href="/secki">
                  <a className="text-xs text-gray-400 hover:title-hover">İş</a>
                </Link>
                <Link href="/secki">
                  <a className="text-xs text-gray-400 hover:title-hover">
                    Teknoloji
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="/secki">
              <a>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
                  }
                  width="300"
                  height="100"
                  objectFit="cover"
                />
              </a>
            </Link>
            <Link href="/secki">
              <a className="text-lg hover:title-hover">
                Paris İklim Anlaşması'na ilişkin kanun teklifi, TBMM Genel
                Kurulu'nda kabul edildi.
              </a>
            </Link>
            <div className="flex flex-row space-x-4">
              <span className="text-xs text-gray-400">21 saat önce</span>
              <div className="flex flex-row space-x-2">
                <Link href="/secki">
                  <a className="text-xs text-gray-400 hover:title-hover">İş</a>
                </Link>
                <Link href="/secki">
                  <a className="text-xs text-gray-400 hover:title-hover">
                    Teknoloji
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bileşen */}
      <div className="space-y-3">
        <h2 className="text-2xl text-gray-400">Popüler İçerikler</h2>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <Link href="/secki">
              <a className="hover:title-hover">
                Eski Facebook çalışanı Frances Haugen, Facebook'u ifşaladı.
              </a>
            </Link>
            <div className="flex flex-row space-x-4">
              <span className="text-xs text-gray-400">21 saat önce</span>
              <div className="flex flex-row space-x-2">
                <Link href="/secki">
                  <a className="text-xs text-gray-400 hover:title-hover">İş</a>
                </Link>
                <Link href="/secki">
                  <a className="text-xs text-gray-400 hover:title-hover">
                    Teknoloji
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="/secki">
              <a className="hover:title-hover">
                Eski Facebook çalışanı Frances Haugen, Facebook'u ifşaladı.
              </a>
            </Link>
            <div className="flex flex-row space-x-4">
              <span className="text-xs text-gray-400">21 saat önce</span>
              <div className="flex flex-row space-x-2">
                <Link href="/secki">
                  <a className="text-xs text-gray-400 hover:title-hover">İş</a>
                </Link>
                <Link href="/secki">
                  <a className="text-xs text-gray-400 hover:title-hover">
                    Teknoloji
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bileşen */}
    </div>
  )
}

export default Sidebar
