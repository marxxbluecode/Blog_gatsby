module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My personnal Blog",
  },
  plugins: ["gatsby-plugin-styled-components",
            "gatsby-plugin-react-helmet",
          {
            resolve: "gatsby-source-graphql",
            options: {
              typeName: "datablog",
              fieldName: "datablog",
              url: "https://api-us-west-2.graphcms.com/v2/ckwgzdgd50o6501xn84yxdlos/master",
          }
        },
      ],
};
