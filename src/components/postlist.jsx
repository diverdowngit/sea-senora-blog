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
            <div className={styles.grid}>
            
            <div className={styles.card }>
            {AllPosts.length && 
                AllPosts.map((post, i) => {
                    return (
                        <div key={i} className={styles.card}>
                             <div className={styles.card_img }>
                                {post.thumbnail && <img className={styles.card_img}  src={post.thumbnail} alt={post.thumbnail}/> }</div>
                                <div className={styles.card_body}>
                                <h2 className={styles.card_title } href={`/post/${post.id}`} >
                                {post.title}
                                </h2>
                                <div>
                                <p>{post.intro}</p>
                                </div>
                                <a className={styles.author_link} >Published on {post.date}</a>
                               <div>
                                <a className={styles.read_more}> <Link style={{ textDecoration: "none" }} to={`/post/${post.id}`}>Read more</Link></a>
                                </div>
                            </div>
                        
                        
                         
                            <div>
                          
                            </div>
                          
                         
                        </div>
                        
                    )
                })
            }
        </div>
        </div>
         </div> 
        
        
        
        
        
        
        
        
        ) 
}

export default PostList
{/* <div className={styles.blogList}>
{blogList.slice(0,visible).map(({ title, short_desc, image, author, _id }) => (
  <BlogCard id={_id} title={title} short_desc={short_desc} img={image.secure_url} authorName={author.name} />
))}
</div>
<div className={styles.loadMore}> <h1>Under Construction Check Back Soon</h1>
<button onClick={loadMoreItems}  id="hidebutton">Load More</button> */}