const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Copy these static files to _site folder
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  const md = markdownIt({ html: true, linkify: true });
  md.use(markdownItAnchor, {
    level: [1, 2],
    permalink: markdownItAnchor.permalink.headerLink({
      safariReaderFix: true,
      class: "header-anchor",
    }),
  });
  eleventyConfig.setLibrary("md", md);

  // asset_img shortcode
  eleventyConfig.addLiquidShortcode("asset_img", (filename, alt) => {
    return `<img class="my-4" src="/assets/images/${filename}" alt="${alt}" />`;
  });

  // newtab_link shortcode
  eleventyConfig.addLiquidShortcode("newtab_link", (href, text) => {
    return `<a href="${href}" target="_blank">${text}</a>`;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
