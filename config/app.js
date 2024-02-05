const pluginSettings = {
   htmlmin: {
      collapseWhitespace: true
   },

   webpack: {
      mode: "production"
   },

   imagemin: {
      verbose: true
   },

   fonter: {
      formats: ["ttf", "woff", "eot", "svg"]
   }
}

export { pluginSettings };