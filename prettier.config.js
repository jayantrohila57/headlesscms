/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: false,
  tabWidth: 2,
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: true,
  singleQuote: true,
  bracketSameLine: false,
  printWidth: 100,
  endOfLine: 'lf',
  quoteProps: 'as-needed',
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
