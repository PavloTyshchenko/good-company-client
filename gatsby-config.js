const proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'Їдемо на',
    author: 'Pavlo Tyshchenko'
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RootQueryType',
        fieldName: 'questionnaires',
        url: 'https://good-company-server.herokuapp.com/graphql'
      }
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ]
}
