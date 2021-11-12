import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import firebase from "../../firebase/clientApp"


const İcerik = () => {
    const router = useRouter()
    const slug = router.query.slug || []

    const [post, setPost] = useState(false)
    
    firebase.firestore().collection("posts").where('postUrl', '==', slug).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            setPost(doc.data())
        });
    })


    return (
        <div className="flex flex-col space-y-5">
            <div className="flex flex-row justify-between items-center">
                <Link href="/k/burokrasi">
                    <a className="text-xl hover:title-hover text-gray-400 border-b border-green-600">
                        Bürokrasi
                    </a>
                </Link>
                <div className="flex flex-row space-x-4 items-center">
                    <Link href="/y/utku-kocaoglu">
                        <a className="text-base hover:title-hover text-gray-400 border-b border-green-600">
                            Utku Kocaoğlu
                        </a>
                    </Link>
                    <p className="text-sm text-gray-400">
                        3 saat önce
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-gray-200">
                    {post?.postTitle}
                </h1>
            </div>
            <div>
                <Image
                    src={post?.postThumbnail ? post?.postThumbnail : "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"}
                    width="1000"
                    height="500"
                    objectFit="cover"
                />
            </div>
            <div className="space-y-5 text-lg text-gray-200">{post?.postText}</div>
        </div>
    )

}

export default İcerik