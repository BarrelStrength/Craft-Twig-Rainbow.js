# Craft-Twig Syntax Highlighting for Rainbow.js

This project extends [Rainbow.js](http://craig.is/making/rainbows/) and adds support for Craft-Twig syntax highlighting.  This project is in its early stages and a work in progress.

To use, setup rainbow.js following the instructions on their website.  Include the craft-twig.js file after the rainbow.js file.  And use the artisan.css theme.  You can use other themes as well, but artisan.css may account for a few small details that are more specific to the Craft-Twig use case.

To output syntax highlighted code on your Craft site, we use the [Doxter plugin](https://github.com/selvinortiz/craft.doxter) as it allows for fenced code blocks (```twig) and the ability to add a template for your code blocks output to match the format rainbow.js requires.