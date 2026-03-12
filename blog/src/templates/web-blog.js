import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
    const { title } = data.contentfulWebBlog;

    return (
        <Layout>
            <h1>{title}</h1>
        </Layout>
    )
} 

export default BlogPost;

export const pageQuery = graphql`
    
        query blogPostQuery($slug: String!) {
            contentfulWebBlog(slug: { eq: $slug }) {
                title
                slug
            }
    }
`