import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>Div Soup Blog</h1>
    <p>This is my personal personal blog.</p>
    <Link to="/about">Learn about me &rarr;</Link>
  </Layout>
);
