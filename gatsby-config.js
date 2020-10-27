const path = require("path")

module.exports = {
  /* Your site config here */
  pathPrefix: 'landuse',
  plugins: [
    `gatsby-plugin-postcss`,
    // {
    //   resolve: "gatsby-plugin-root-import",
    //   options: {
    //     src: path.join(__dirname, "src"),
    //     components: path.join(__dirname, "src/components"),
    //     maps: path.join(__dirname, "src/maps"),
    //     fixtures: path.join(__dirname, "src/fixtures"),
    //     pages: path.join(__dirname, "src/pages"),
    //   },
    // },
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
