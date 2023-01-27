import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import styles from  "./postlist.module.css"
import BlogCard from "../modules/user/pages/Home/components/LatestBlog/components/BlogCard/BlogCard"

const PostList = (props) => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <h1>Blogs</h1>
            <div className={styles.postcard}>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <BlogCard key={i} className="post-card">
                             <div className={styles.imagecontainer}>
                                {post.thumbnail && <img className={styles.thumbnail}  src={post.thumbnail} alt={post.thumbnail}/> }</div>
                                <div>
                                <h2><Link className={styles.posttitle} to={`/post/${post.id}`}>{post.title}</Link></h2>
                            </div><a>{post.intro}</a><div></div>
                            <small>Published on {post.date}</small>
                           
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <div>
                           <Link className={styles.readmore} to={`/post/${post.id}`}>Read more</Link>
                            </div>
                            <hr/>
                        </BlogCard>
                    )
                })
            }
        </div>
        </div> </div> )
}

export default PostList
{/* <div className={styles.blogList}>
{blogList.slice(0,visible).map(({ title, short_desc, image, author, _id }) => (
  <BlogCard id={_id} title={title} short_desc={short_desc} img={image.secure_url} authorName={author.name} />
))}
</div>
<div className={styles.loadMore}> <h1>Under Construction Check Back Soon</h1>
<button onClick={loadMoreItems}  id="hidebutton">Load More</button> */}