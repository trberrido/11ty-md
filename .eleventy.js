module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addGlobalData("layout", "layout.html");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "html"],
    markdownTemplateEngine: "html"
  };

};