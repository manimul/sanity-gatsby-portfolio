const tailwind = require('tailwindcss')


module.exports = () => ({
  plugins: [
    require('postcss-import'),
    tailwind('../tailwind.config.js'),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
})
