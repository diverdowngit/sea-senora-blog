import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
<<<<<<< HEAD
import AllPosts from "../posts.json"
import styles from  "./postlist.module.css"
import BlogCard from "../modules/user/pages/Home/components/LatestBlog/components/BlogCard/BlogCard"

const PostList = (props) => {
    // const excerptList = postlist.map(post => {
    //     return post.content.split(" ").slice(0, 20).join(" ") + "..."
    // })
    return ( 
        <div className={styles.container}>
            <div className={styles.blogtitle}>
            <h1>Blogs</h1>
            </div>
            <div className={styles.cardsgridrow}>
            
            <div>
            {AllPosts.length && 
                AllPosts.map((post, i) => {
                    return (
                        <div key={i} className={styles.card } >
                             <div className={styles.cardtop}>
                                {post.thumbnail && <img className={styles.card_img}  src={post.thumbnail} alt={post.thumbnail}/> }</div>
                                <div >
                                <div className={styles.cardinfo} href={`/post/${post.id}`} >
                                <h2 >{post.title}</h2>
                                <span className={styles.date} >Published on {post.date}</span>
                                
                                    <span className={styles.excerpt}href={`/post/${post.id}`}> {post.intro}</span>
                                </div>
                                <div class="cardbottom flexrow">
        </div>
        <div className={styles.readmore}>
                                <a href={`/post/${post.id}`}style={{ textDecoration: "none" }} >Read more</a>
                            </div>
                        
                            </div>
                         
                            <div>
                          
                            </div>
                          
                         
                        </div>
                        
=======
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
>>>>>>> parent of 8920834 (trying netlifly)
                    )
                })
            }
        </div>
<<<<<<< HEAD
        </div>
         </div> 
        
        
        
        
        
        
        
        
        ) 
=======
    )
>>>>>>> parent of 8920834 (trying netlifly)
}

export default PostList