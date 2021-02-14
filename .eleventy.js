module.exports = function(eleventyConfig) {

	// Default output folder: _site

	// Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy("images");

	// Copy `css/` to `_site/css/`
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    // possible template formats
    templateFormats: ["njk","html", "liquid", "md"],

    // choose Nunjucks as the template language
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};