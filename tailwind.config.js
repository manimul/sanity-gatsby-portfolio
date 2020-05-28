module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
     
    ]
  },

  theme: {
    colors:{
      brand: {
        accent: '#34A285',
        default: '#01070A',
        lighter: '#343749',
        dark: '#0E0E11', 
      },
      blue: {
        accent: '#ED9700',
        default: '#0D588A',
        lighter: '#343749',
        dark: '#0E0E11', 
      },
      white: {
         default: '#ffffff'
      }
    },
  
    fontFamily: {
      barlow: ["barlow", "sans-serif"]
    },
    
 
    extend: {
    },
  },
  variants: {},
  plugins: [],
}
