import Image from 'next/image'

function Logo( {...props} ) {
    return (
        <Image src="/logo_beyaz.png" {...props} />
    )
}

export default Logo