import React from "react";
import PostList from "../../../../components/postlist";

import { API_URL } from "../../../../utils/constants";
import Layout from "../../components/Layout/Layout";
import Hero from "../Home/components/Hero/Hero";
import BlogList from "./components/BlogList/BlogList";

export default function BlogView(props) {
  //  const [blogList, setBlogList] = React.useState([]);

  //   React.useEffect(() => {
  //    getBlogItems()
  //   }, []);

  //   async function getBlogItems() {
  //     try {
  //       const response = await fetch(`${API_URL}/blogs`);
  //       const data = await response.json();
  //     setBlogList(data.blogs);
  //     } catch (error) {
  //       console.log({ error });
  //    }
  //   }
  return (
    <Layout>
      <Hero img="/img/train.jpg" centerText="Sv Sea Senora, " subheading="We Write Travel Blogs On The Most Stunning Locations On Earth." location="Glenfinnan Viaduct, Glenfinnan, United Kingdom"/>
      <PostList />
      {/* <BlogList  /> */}
    </Layout>
  );
}
