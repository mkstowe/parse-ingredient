"use strict";
var ghpages = require('gh-pages');
ghpages.publish('demo', function (err) {
    if (err) {
        console.log('Failed to publish');
    }
});
const replace = require('@rollup/plugin-replace');
module.exports = {
    rollup(config, options) {
        config.output.name = 'parseIngredient';
        config.output.exports = 'default';
        config.output.globals = { 'numeric-quantity': 'numericQuantity' };
        config.plugins = config.plugins.map(p => p.name === 'replace'
            ? replace({
                'process.env.NODE_ENV': JSON.stringify(options.env),
                preventAssignment: true,
            })
            : p);
        return config;
    },
};
