import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
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
                        
                    )
                })
            }
        </div> </div> </div>
    )
}

export default PostList