/** @type {import('next').NextConfig} */

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    localeExtension: 'yaml',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  },
}
