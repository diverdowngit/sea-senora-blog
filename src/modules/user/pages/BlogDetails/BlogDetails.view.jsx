import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"

import postlist from "../../../../posts.json"

import Layout from "../../components/Layout/Layout";
// import BlogBody from "./components/BlogBody/BlogBody";
// import BlogHeader from "./components/BlogHeader/BlogHeader";

export default function BlogDetailsView(props) {
  const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            fetchedPost.description = post.description ? post.description : "No description given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        <Layout>
            <div className="post">
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <hr/>
                <Markdown source={fetchedPost.content} escapeHtml={false} />
            </div>
        </Layout>
    )
}

