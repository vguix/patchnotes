// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Warcry Patchlogs',
  tagline: 'We make games to make you better.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://vguix.github.io', // your GitHub Pages URL
  baseUrl: '/patchnotes/',        // repo name for GitHub Pages

  organizationName: 'vguix',
  projectName: 'patchnotes',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,  // no docs
        pages: false, // no extra pages
        blog: {
          path: 'changelog',        // folder for your Markdown posts
          routeBasePath: '/',       // blog is served at root
          showReadingTime: true,
          blogTitle: 'Patch Notes',
          blogDescription: 'Latest updates and changes for VTUI and TFO.',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Warcry Engine',
      logo: {
        alt: 'Warcry Logo',
        src: 'img/favicon.ico',
      },
      items: [
        { to: '/', label: 'Patch Notes', position: 'left' },
        {
          href: 'https://github.com/vguix/patchnotes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} War Section LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
