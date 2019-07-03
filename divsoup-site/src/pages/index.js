import React from 'react';
import { Link } from 'gatsby';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        {/* <h1>Div Soup Blog</h1>
        <p>This is my personal personal blog.</p>
        <Link to="/about">Learn about me &rarr;</Link> */}

        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
