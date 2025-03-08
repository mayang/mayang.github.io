// Any combination of these
// import { I18nPlugin, RenderPlugin, HtmlBasePlugin } from "@11ty/eleventy";

import pluginNavigation from "@11ty/eleventy-navigation";


export default function (eleventyConfig) {
  // …
  // eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy({
    "./public/": "/"
  });

  eleventyConfig.addBundle("css", {
    toFileDirectory: "dist",
  });

  // eleventyConfig.addPlugin(pluginNavigation);

  // eleventyConfig.setServerOptions({
  //   watch: ['_site/**/*.css'],
  // });
  // eleventyConfig.addWatchTarget('./theme/**/*.{css,js}');

  // const cssTemplate = fs.readFileSync(path.resolve('theme/css/', 'bundle.liquid'), 'utf-8');
  // const jsTemplate = fs.readFileSync(path.resolve('theme/js/', 'bundle.njk'), 'utf-8');

  // eleventyConfig.addTemplate('css-bundle.liquid', cssTemplate);
  // eleventyConfig.addTemplate('js-bundle.njk', jsTemplate);

  // for personal styles instead of tailwind
  // eleventyConfig.addPassthroughCopy("./src/styles/");
  // eleventyConfig.addWatchTarget("./src/styles/");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
      // layouts: "_includes/layouts"
    },
  };
};