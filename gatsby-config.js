

module.exports = {
  siteMetadata: {
    title: 'Їдемо на',
    author: 'Pavlo Tyshchenko'
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RootQuery',
        fieldName: 'questionnaires',
        url: 'https://good-company-server.herokuapp.com/graphql'
      }
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ]
}
