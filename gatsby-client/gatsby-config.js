module.exports = {
  siteMetadata: {
    title: 'Nicole Dawn Design',
    baseUrl: 'http://nicoledawn.design/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://nicoledawn.design/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
  ],
}
