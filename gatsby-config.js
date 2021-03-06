
module.exports = {
  siteMetadata: {
    title: `Living Life`,
    author: {
      name: `Paul Applegate`,
      summary: `who lives and works in Ohio building useful things.`,
    },
    description: ` Follow my daily hijinks here. There may also be a serious subject like cancer now and then. Fuck cancer.`,
    siteUrl: `https://gatsbystarterblogbeta59977.gatsbyjs.io/`,
    social: {
      twitter: `papplegate`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
      printRejected: false,
      develop: false,
      ignore: ["fontawesome-svg-core/"],
      },
      },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              withAvif: true,
              withWebp: true,
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
     {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
         trackingId: `UA-147090349-10`,
       },
     },
    //{
      //resolve: `gatsby-plugin-feed`,
      //options: {
        //query: `
          //{
            //site {
              //siteMetadata {
                //title
                //description
                //siteUrl
                //site_url: siteUrl
              //}
            //}
          //}
        //`,
        //feeds: [
          //{
            //serialize: ({ query: { site, allMarkdownRemark } }) => {
              //return allMarkdownRemark.nodes.map(node => {
                //return Object.assign({}, node.frontmatter, {
                  //description: node.excerpt,
                  //date: node.frontmatter.date,
                  //url: site.siteMetadata.siteUrl + node.fields.slug,
                  //guid: site.siteMetadata.siteUrl + node.fields.slug,
                  //custom_elements: [{ "content:encoded": node.html }],
                //})
              //})
            //},
            //query: `
              //{
                //allMarkdownRemark(
                  //sort: { order: DESC, fields: [frontmatter___date] },
                //) {
                  //nodes {
                    //excerpt
                    //html
                    //fields {
                      //slug
                    //}
                    //frontmatter {
                      //title
                      //date
                    //}
                  //}
                //}
              //}
            //`,
            //output: "/rss.xml",
          //},
        //],
      //},
    //},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Living Life`,
        short_name: `PA-Life`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
  ],
}
