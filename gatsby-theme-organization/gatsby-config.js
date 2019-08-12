const path = require('path')

module.exports = ({ contentPath = 'data' }) => ({
  //module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Project'
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('postcss-import')],
        // ../../
        includePaths: ['node_modules', 'src'],
        precision: 8
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: path.resolve(__dirname, 'src'),
          // ../
          bootstrap: path.resolve(__dirname, './node_modules/bootstrap')
        },
        extensions: []
      }
    }
  ]
  //}
})
