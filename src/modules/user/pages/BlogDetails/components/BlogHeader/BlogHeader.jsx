import React from "react";

import styles from "./BlogHeader.module.css";

export default function BlogHeader({
  title = "Happy Reading",
  location,
  image = "https://cdn.pixabay.com/photo/2019/10/29/09/20/summer-4586497_1280.jpg",
}) {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.pageHero}>
        <img src={image} alt="blog-header-bg" />
        <div className={styles.blogMetaContainer}>
          <h1>{title}</h1>
          <h2>{location}</h2>
        </div>
      </div>
    </div>
  );
}
