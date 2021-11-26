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
              url: "https://api.graph.cool/simple/v1/cj7q0q0q0q0q0101x0x0x0x0",
          }
        },
      ],
};
