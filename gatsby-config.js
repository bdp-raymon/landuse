const path = require("path")

module.exports = {
  /* Your site config here */
  pathPrefix: 'landuse',
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
}
