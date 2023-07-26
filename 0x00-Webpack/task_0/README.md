# WEBPACK CONCEPT

At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

More about JavaScript modules and webpack modules [here](https://webpack.js.org/concepts/modules).

Since version 4.0.0, webpack does not require a configuration file to bundle your project. Nevertheless, it is [incredibly configurable](https://webpack.js.org/configuration) to better fit your needs.

To get started you only need to understand its Core Concepts:

[Entry](https://webpack.js.org/concepts/entry-points/)
[Output](https://webpack.js.org/concepts/output/)
[Loaders](https://webpack.js.org/concepts/loaders/)
[Plugins](https://webpack.js.org/concepts/plugins/)
[configuration](https://webpack.js.org/concepts/configuration/).
[Modules](https://webpack.js.org/concepts/modules/).
[Module resolution](https://webpack.js.org/concepts/module-resolution/).
[Module federation](https://webpack.js.org/concepts/module-federation/).
[Dependency graph](https://webpack.js.org/concepts/dependency-graph/).
Mode
Browser Compatibility

This document is intended to give a high-level overview of these concepts, while providing links to detailed concept-specific use cases.

For a better understanding of the ideas behind module bundlers and how they work under the hood, consult these resources:

[Manually Bundling an Application](https://www.youtube.com/watch?v=UNMkLHzofQI)
[Live Coding a Simple Module Bundler](https://www.youtube.com/watch?v=Gc9-7PBqOC8)
[Detailed Explanation of a Simple Module Bundler](https://github.com/ronami/minipack)

## Entry

An entry point indicates which module webpack should use to begin building out its internal [dependency graph](https://webpack.js.org/concepts/dependency-graph/). Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

By default its value is ./src/index.js, but you can specify a different (or multiple) entry points by setting an [entry property in the webpack configuration](https://webpack.js.org/configuration/entry-context/#entry). For example:

webpack.config.js

module.exports = {
  entry: './path/to/my/entry/file.js',
};

Tips about [entry points section](https://webpack.js.org/concepts/entry-points)

## Output

The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

You can configure this part of the process by specifying an output field in your configuration:

webpack.config.js

const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};

In the example above, we use the output.filename and the output.path properties to tell webpack the name of our bundle and where we want it to be emitted to. In case you're wondering about the path module being imported at the top, it is a core [Node.js module](https://nodejs.org/api/modules.html) that gets used to manipulate file paths.

### Tip

The output property has [many more configurable features](https://webpack.js.org/configuration/output). If you want to learn about the concepts behind it, you can [read more in the output section](https://webpack.js.org/concepts/output).

## Loaders

Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid [modules](https://webpack.js.org/concepts/modules) that can be consumed by your application and added to the dependency graph.

### Warning

One of webpack's specific features is the ability to import any type of module, e.g. .css files, which may not be supported by other bundlers or task runners. We feel this extension of the language is warranted as it allows developers to build a more accurate dependency graph.

At a high level, loaders have two properties in your webpack configuration:

1. The test property identifies which file or files should be transformed.
2. The use property indicates which loader should be used to do the transforming.

webpack.config.js

const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
The configuration above has defined a rules property for a single module with two required properties: test and use. This tells webpack's compiler the following:

"Hey webpack compiler, when you come across a path that resolves to a '.txt' file inside of a require()/import statement, use the raw-loader to transform it before you add it to the bundle."

### Warning

It is important to remember that when defining rules in your webpack config, you are defining them under module.rules and not rules. For your benefit, webpack will warn you if this is done incorrectly.

### Warning

Keep in mind that when using regex to match files, you may not quote it. i.e /\.txt$/ is not the same as '/\.txt$/' or "/\.txt$/". The former instructs webpack to match any file that ends with .txt and the latter instructs webpack to match a single file with an absolute path '.txt'; this is likely not your intention.

You can check further customization when including loaders in the [loaders section](https://webpack.js.org/concepts/loaders).

## Plugins

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

Tip
Check out the [plugin interface](https://webpack.js.org/api/plugins) and how to use it to extend webpack's capabilities.

In order to use a plugin, you need to require() it and add it to the plugins array. Most plugins are customizable through options. Since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it by calling it with the new operator.

webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
In the example above, the html-webpack-plugin generates an HTML file for your application and automatically injects all your generated bundles into this file.

Tip
There are many plugins that webpack provides out of the box! Check out the [list of plugins](https://webpack.js.org/plugins).

Using plugins in your webpack configuration is straightforward. However, there are many use cases that are worth further exploration. [Learn more about them here](https://webpack.js.org/concepts/plugins).

## Mode

By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.

module.exports = {
  mode: 'production',
};
Learn more about the [mode configuration here](https://webpack.js.org/configuration/mode) and what optimizations take place on each value.

## Browser Compatibility

Webpack supports all browsers that are [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below are not supported). Webpack needs Promise for [import()](https://webpack.js.org/guides/code-splitting/#dynamic-imports) and [require.ensure()](https://webpack.js.org/guides/code-splitting/#dynamic-imports). If you want to support older browsers, you will need to load a polyfill before using these expressions.
