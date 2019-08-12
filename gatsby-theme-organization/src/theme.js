const colors = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./css/_colors.scss')

export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    gray: ['#efefef', '#ddd', '#333', '#111'],
    background: '#fff',
    primary: 'rebeccapurple',
    ...colors
  },
  sizes: {
    default: '100vw',
    max: '540px'
  },
  styles: {}
}

export default theme
