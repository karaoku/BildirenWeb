import Link from 'next/link'
import Logo from './logo';

function Header() {
    return (
        <header className="sticky top-0 z-50 py-6 border-b border-gray-900 background-blur bg-black bg-opacity-50">
            <div className="main-container flex justify-between items-center">
                <Link href="/">
                    <a className="items-center"><Logo width="120" height="35"/></a>
                </Link>
                <nav className="space-x-6 text-xl to-gray-900">
                    <Link href="/secki">
                        <a className="hover:title-hover">Seçki</a>
                    </Link>
                    <Link href="/hikaye">
                        <a className="hover:title-hover">Hikaye</a>
                    </Link>
                    <Link href="/ozut">
                        <a className="hover:title-hover">Özüt</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header