# rickey-chang-p1

## Project 1

### Description

- Re-doing Activities 1 through 4 but making my own blog website instead of following the instructions in each activity. I will be calling it Web Development Blog.

### Featured List

- Activity 1
  - Creating the website using Gatsby JS and GraphQL.
  - Creating pages about.js and contact.js

- Activity 2
  - Setting up a Contentful account and connecting to the website (npm install --save gatsby-source-contentful).
  - Setting up the content model as Web Blog with:
    - Title
    - Category
    - Slug
    - Hero Image
    - Description
    - Body
    - Author
    - Publish Date
    - Tags
  - Creating 3 contents:
    - HTML
    - CSS
    - JavaScript
  - Setting up Space ID and Access Token.
  - Generated pages for each post.

- Activity 3
  - Created a new file (.env.development) and add variables:
    - SPACE_ID
    - ACCESS_TOKEN
  - Added Markdown Support (npm install gatsby-transformer-remark)
  - Updated index.js to display image and excerpt
  - Updated web-bog.js to display the body
  - Added media in Contentful:
    - HTML.png
    - CSS.png
    - JS.png
    - HTML Template
    - CSS Template
    - JAvaScript Template

- Activity 4
  - Added Styled Components by running:
    - npm install --save gatsby-plugin-styled-components
    - npm install --save styled-components
    - npm install --save babel-plugin-styled-components
  - Imported styled components to header.js and layout.js
  - Created a theme file for the components:
    - src>components>themes>Gray>gray.js, index.js
  - Changed website colors:
    - --color-text: #6e87a3;
    - --color-primary: #6e87a3;
    - --color-contrast: #ffffff;
    - --color-code-bg: #ffffff;

## All GraphQL Queries:

    - In about.js and contact.js:
    query MyQuery {
        site {
            siteMetadata {
                contact {
                    name
                    company
                    address
                }
            }
        }
    }

    - In gatsby-node.js:
    allContentfulWebBlog {
          edges {
            node {
              slug
            }
          }
        }

    - In web-blog.js:
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

    // Changed to see the description instead of body from Contentful
    - In index.js:
    allContentfulWebBlog {
      edges {
        node {
          id
          title
          slug
          description {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 300
            )
          }
        }
      }
    }
