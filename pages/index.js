import React, { useState, useEffect } from 'react'
import Post from '../components/post'
import firebase from "../firebase/clientApp"

function HomePage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let posts_arr = []
        firebase.firestore().collection("posts").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                posts_arr.push(doc.data());
            })
            setPosts(posts_arr)
        })
    }, [])

    return (
        <div className="flex flex-col space-y-12">
            {
                posts?.map((post) => {
                    return(
                        <Post post={post} />
                    )
                })
            }
        </div>
    )
}

export default HomePage