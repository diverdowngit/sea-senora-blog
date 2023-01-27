import React from 'react';
import BlogCard from '../../../Home/components/LatestBlog/components/BlogCard/BlogCard';
import { API_URL } from '../../../../../../utils/constants';
import  styles from'./BlogList.module.css';
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../../../../../../posts.json"

export default function BlogList(props) {

  const excerptList = postlist.map(post => {
    return post.content.split(" ").slice(0, 20).join(" ") + "..."
})
return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
      <h1>Blogs</h1>
      <div className={styles.blogList}>
        {postlist.length && 
            postlist.map((post, i) => {
                return (
                    <div key={i} className={styles.wrapper}>
                         <div className={styles.blogList}>
                            {post.thumbnail && <img className={styles.imagefeaturedPostImage}width={100} src={post.thumbnail} alt=""/> }
                            <h1 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h1>
                        
                        </div>
                        <hr/>
                        <Markdown source={excerptList[i]} escapeHtml={false} />
                        <h2>{post.descpipti}</h2>
                        <small>Published on {post.date} by {post.author}</small>
                       
                        <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                    </div>
                )
            })
        }
    </div>
    </div></div>
)
}











  // return (
  //   <div className="featuredPostsContainer">
  //       <BlogCard>
  //           <div className="featuredPostsHeader">
  //               <span>Recetas Destacadas</span>
  //           </div>
  //       </BlogCard>
  //       <br></br>
  //       <div className="featuredPosts">
  //           {AllPosts.length &&
  //               AllPosts.map((post, i) => {
  //                   if (post.featured.trim() === 'true') {
  //                       return (
  //                           <BlogCard key={i} className="postCard">
  //                               <div className="featuredPostImageWrapper">
  //                                   {post.image && <img className="imagefeaturedPostImage" src={post.image.trim()} alt={post.title} />}
  //                               </div>
  //                               <div className="postBriefing" style={{ textAlign: "center" }}>
  //                                   <span>{post.type}</span>
  //                                   <h1><a href={`/post/${post.id}`} className="links">{post.title}</a></h1>
  //                                    <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2> 
  //                                   <span>Publicado el {post.date} por {post.author}</span>
  //                                   {/* <small>Publicado el {post.date} por {post.author}</small> */}
  //                                   {/* <hr /> */}
  //                                   <Markdown source={AllPosts [i]} escapeHtml={false} /> 
  //                                   <div className="postLink"><a href={`/post/${post.id}`}>Leer más</a></div>
  //                                    <small><Link className="links" to={`/post/${post.id}`}>Leer Más</Link></small> 
  //                                   <hr></hr>
  //                               </div>
  //                           </BlogCard>
  //                       )
  //                   } else {
  //                       return null
  //                   }

  //               })
  //           }
  //       </div>
  //       </div>
  //   );














  // const [blogList, setBlogList] = React.useState([]);
  // const [visible, setVisible] = React.useState(3);
  //  const [bloglength, setBloglength] = React.useState();

  // React.useEffect(() => {
  //   getBlogItems()
  // }, []);

  // async function getBlogItems() { 
  //   try {
  //     const response = await fetch(`${API_URL}/post`);
  //     const data = await response.json();
  //     setBlogList(data.blogs);
  //     setBloglength(data.blogs.length);
  //     // console.log(data.blogs.length);
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // }
//   const excerptList = postlist.map(post => {
//     return post.content.split(" ").slice(0, 20).join(" ") + "..."
// })

//   const loadMoreItems = () => {
//     setVisible((preValue) => preValue + 3);
//     const buttonvisibility = document.getElementById("hidebutton");
//     console.log(visible);
//     if (visible+3 >= bloglength){
//       buttonvisibility.style.visibility="hidden";
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <h1>Blogs</h1>
//         {postlist.length && 
//                 postlist.map((post, i) => {
//                     return (
//                           <div key={i} className={styles.blogList}>
//                              <div className={styles.featuredPostImageWrapper}>
//                                 {post.thumbnail && <img className="thumbnail" width={80} src={post.thumbnail} alt=""/> }
//                                 <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
//                             </div>
//                             <small>Published on {post.date} by {post.author}</small>
//                             <hr/>
//                             <Markdown source={excerptList[i]} escapeHtml={false} />
//                             <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
//                         </div>
//                     )
//                 })
//             }
//         </div>
 
//         {/* <div className={styles.blogList}>
//           {blogList.slice(0,visible).map(({ title, short_desc, image, author, _id }) => (
//             <BlogCard id={_id} title={title} short_desc={short_desc} img={image.secure_url} authorName={author.name} />
//           ))}
//         </div> */}
//         <div className={styles.loadMore}> <h1>Under Construction Check Back Soon</h1>
//           {/* <button onClick={loadMoreItems}  id="hidebutton">Load More</button> */}
//         </div>
//       </div>
    
//   );
 //}