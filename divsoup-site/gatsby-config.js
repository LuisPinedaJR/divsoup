module.exports = {
  siteMetadata: {
    title: 'Div Soup Blog',
    description:
      'A coders blog that includesm tutorials on React, Gatsby, etc.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
  ],
};
