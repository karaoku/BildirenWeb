import Link from 'next/link'
import Image from 'next/image'

function Post() {
  return (
    <div className="flex flex-col space-y-5">
      <div>
        <h1 className="text-3xl text-gray-200">Cumhurbaşkanı Erdoğan, G20 kapsamında, ABD Başkanı Biden ile Roma'da bir araya geldi.</h1>
      </div>
      <div>
        <Image
          src={
            'https://admin.aa.com.tr/uploads/userFiles/7fc6ad83-e801-4dd2-b1c1-974abd5a6af0/2021%2FEkim2%2F20211031_2_50674690_70196014.jpg'
          }
          width="1000"
          height="500"
          objectFit="cover"
        />
      </div>
      <div>
        <p className="text-base text-gray-200">Cumhurbaşkanı Erdoğan'ın, ABD Başkanı Biden ile yaptığı görüşme, yaklaşık 1 saat 10 dakika sürdü. Pozitif bir atmosferde gerçekleşen görüşmede, ikili ilişkiler ve bölgesel konular ele alındı. Görüşmede iki lider, Türkiye-ABD ilişkilerini daha da güçlendirmek ve geliştirmek için müşterek irade beyanında bulundu. Bu doğrultuda ortak bir mekanizma kurulması konusunda mutabık kaldı.</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <Link href="/secki">
          <a className="text-xl hover:title-hover text-gray-400">
            Detaya Git →
          </a>
        </Link>
        <div className="flex flex-row space-x-4 items-center">
          <Link href="/secki">
            <a className="text-base hover:title-hover text-gray-400">
              Bürokrasi
            </a>
          </Link>
          <p className="text-sm text-gray-400">
            3 saat önce
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post
