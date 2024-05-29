// .eleventy.js
module.exports = function(eleventyConfig) {
    // Copy the `css/styles.css` file directly to the output
    eleventyConfig.addPassthroughCopy({ "css/styles.css": "styles.css" });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
