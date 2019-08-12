const fs = require('fs')

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data'

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

// Define the "Setting" type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Setting implements Node @dontInfer {
      url: String!
      organization: String!
      title: String!
      iconName: String!
      logoName: String!
    }
  `)
}

// query for events and create pages
exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/',
    component: require.resolve('./src/templates/index.js')
  })
}

// Add data to "Setting" node
exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest },
  { url, organization, title, iconName, logoName }
) => {
  const settingNode = {
    id: createNodeId('theme-settings'),
    url: url || '/',
    organization: organization || 'Organization',
    title: title || 'The best organization out there!',
    iconName: iconName || 'icon.svg',
    logoName: logoName || 'logo.svg',
    parent: null,
    children: [],
    internal: {
      type: 'Setting',
      contentDigest: createContentDigest({
        url,
        organization,
        title,
        iconName,
        logoName
      })
    }
  }
  createNode(settingNode)
}
