module.exports = {
  title: ' ',
  description: 'fugapedia.js — это модуль для Node.js приложений, позволяющий легко взаимодействовать с API Фугапедии',
  locales: { '/': { lang: 'ru-RU' } },
  lang: 'ru-RU',
  theme: 'yuu',
  themeConfig: {
     nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/fugapediajs/fugapedia.js',
      },
    ],
    yuu: {
      colorThemes: [],
      disableThemeIgnore: true,
      labels: {
        darkTheme: 'Тёмная тема',
      }
		},
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
};
