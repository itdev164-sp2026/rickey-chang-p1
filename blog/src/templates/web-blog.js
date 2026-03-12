import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
    const { title, body } = data.contentfulWebBlog;

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
} 

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulWebBlog(slug: { eq: $slug }) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`