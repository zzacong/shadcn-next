/** @type {import("prettier").Config} */
const config = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
}

module.exports = config
