const { createConfig } = require('@edx/frontend-build');

const config = createConfig('webpack-dev');

config.module.rules[0].exclude = /node_modules\/(?!(query-string|split-on-first|strict-uri-encode|tinymce-language-selector|@edx))/;

module.exports = config;
