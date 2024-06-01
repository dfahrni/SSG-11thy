// .eleventy.js
module.exports = function(eleventyConfig) {
    // Copy the `css/styles.css` file directly to the output
    eleventyConfig.addPassthroughCopy({ "css/styles.css": "styles.css" });

    // Ignoriere den `#Doku` Ordner
    eleventyConfig.ignores.add("#Doku");
    eleventyConfig.ignores.add("README.md");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
