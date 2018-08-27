module.exports = {
  siteMetadata: {
    title: 'Nicole Dawn Design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://nicoledawn.design/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rock+Salt`,
          `Pacifico`,
          `Raleway\:400`
        ]
      }
    }
  ],
}
