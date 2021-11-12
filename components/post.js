import Link from 'next/link'
import Image from 'next/image'

function Post({post}) {
  return (
    <div className="flex flex-col space-y-5">
      <div>
        <h1 className="text-3xl text-gray-200">
          <Link href={`/i/` + post.postUrl}>
            <a>{post.postTitle}</a>
          </Link>
        </h1>
      </div>
      <div>
        <Link href={`/i/` + post.postUrl}>
          <a className="hover:opacity-75 duration-500">
            <Image
              src={post.postThumbnail}
              width="1000"
              height="500"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className="text-base text-gray-200">{post.postText}</div>
      <div className="flex flex-row justify-between items-center">
        <Link href="/secki">
          <a className="text-xl hover:title-hover text-gray-400">
            Detaya Git →
          </a>
        </Link>
        <div className="flex flex-row space-x-4 items-center">
          <Link href="/k/burokrasi">
            <a className="text-base hover:title-hover text-gray-400 border-b border-green-600">
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
