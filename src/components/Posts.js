import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux'

function Posts() {
    const posts = useSelector(state => state.posts.posts)


    if (!posts.length) {
        return <p className="text-center">Еще нет постов</p>
    }
    
    return posts.map(post => <Post  post={post} key={post.id}/>)
}

export default Posts