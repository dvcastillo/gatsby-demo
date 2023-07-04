import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Heyo, I created this site using Gatsby!</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage;