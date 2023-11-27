const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginTOC = require("eleventy-plugin-nesting-toc");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  // Copy these static files to _site folder
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPlugin(pluginTOC, { tags: ["h1", "h2", "h3"] });

  const md = markdownIt({ html: true, linkify: true, typographer: true });
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
    return `<img loading="lazy" src="/assets/images/${filename}" alt="${alt}" />`;
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
