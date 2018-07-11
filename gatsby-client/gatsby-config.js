module.exports = {
  siteMetadata: {
    title: 'Drupal Recipes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://drupal-server.localhost',
        apiBase: 'jsonapi',
      },
    },
  ],
}
