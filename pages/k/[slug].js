import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Post from '../../components/post'
import firebase from "../../firebase/clientApp"

const Kategori = () => {
    const router = useRouter()
    const slug = router.query.slug || []

    const [category, setCategory] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        firebase.firestore().collection("categories").where('categoryUrl', '==', slug).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setCategory(doc.data());
            })
        })
    })

    let posts_arr = []
    firebase.firestore().collection("posts").where('categoryID', '==', 1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            posts_arr.push(doc.data());
        })
        setPosts(posts_arr)
    })


    return (
        <div className="flex flex-col space-y-12">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-4xl text-green-600">{category.categoryTitle}</h1>
                <p className="text-xl text-gray-400">kategorisine ait içerikler</p>
            </div>
            {
                posts?.map((post) => {
                    return (
                        <Post post={post} />
                    )
                })
            }
        </div>
    )
}

export default Kategori