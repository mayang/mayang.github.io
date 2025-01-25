// Any combination of these
// import { I18nPlugin, RenderPlugin, HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // …
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  // for personal styles instead of tailwind
  // eleventyConfig.addPassthroughCopy("./src/styles/");
  // eleventyConfig.addWatchTarget("./src/styles/");

  return {
    dir: {
      input: "src",
      // includes: "_includes",
      // data: "_data",
      // output: "_site",
    },
  };
};