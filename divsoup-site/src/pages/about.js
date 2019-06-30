import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>Hello my name is Luis</p>
    <Link to="/">&larr; back home</Link>
  </Layout>
);
