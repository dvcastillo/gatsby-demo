import * as React from 'react';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Bose, in his natural habitat - a puppy park"
        src="../images/bose.jpg"
      />
    </Layout>
  )
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;