module.exports = {
  siteMetadata: {
    title: 'Drupal Recipes',
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
  ],
}
