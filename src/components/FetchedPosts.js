import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Post from './Post'
import { getPosts } from '../redux/actions'
import Loader from './Loader'

function FetchedPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    function onClickHandle() {
        dispatch(getPosts())
    }

    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return (
            <>
                <p className="text-center">Еще нет постов</p>
                <button className='btn btn-primary' onClick={onClickHandle}>Загрузить</button>
            </>
        )
    }

    return posts.map(post => <Post  post={post} key={post.id}/>)
}

export default FetchedPosts