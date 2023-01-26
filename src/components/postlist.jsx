import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import "./postlist.css"


const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="postlist">
            <h1 className="title">Blogs</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={500} src={post.thumbnail} alt={post.thumbnail}/> }
                                <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            </div>
                            <small>Published on {post.date} by {post.author}</small>
                           
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList