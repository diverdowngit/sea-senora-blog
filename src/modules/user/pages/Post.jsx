import React from "react"
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"
import Layout from "../components/Layout/Layout"
import postlist from "../../../posts.json"
// import "./pages.css"

const Post = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "Sin título"
            fetchedPost.type = post.type ? post.type : "Sin tipo"
            fetchedPost.image = post.image ? post.image : "Sin imagen"
            fetchedPost.date = post.date ? post.date : "Sin fecha de publicación"
            fetchedPost.author = post.author ? post.author : "Sin autor"
            fetchedPost.content = post.content ? post.content : "Sin contenido"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        
            
            <Layout>
                <div className="selectedPost" >
                    <span>{fetchedPost.type}</span>
                    <h1>{fetchedPost.title}</h1>
                    {/* <span>Publicado el {fetchedPost.date} por {fetchedPost.author}</span> */}
                    <small>Publicado el {fetchedPost.date} por {fetchedPost.author}</small>
                   
                    
                    <Markdown className="selectedPostText" source={fetchedPost.content} escapeHtml={false} />
                </div>
            </Layout>
       

    )
}

export default Post