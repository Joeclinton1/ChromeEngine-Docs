const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
    title: 'ChromeEngine Documentation',
    tagline: 'Learn how to use and extend Scratch\'s most powerful 3D game engine',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/ChromeEngine-Docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Joeclinton1', // Replace with your GitHub username
    projectName: 'ChromeEngine-Docs', // Replace with your GitHub project name
    clientModules: [require.resolve('./src/plugins/scratchblocks.js')],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/your-github-username/your-repo-name/edit/main/docs/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/your-github-username/your-repo-name/edit/main/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'ChromeEngine',
            logo: {
                alt: 'ChromeEngine Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'tutorials/Platformer Tutorial/Intro',
                    position: 'left',
                    label: 'Tutorials',
                },
                {
                    type: 'doc',
                    docId: 'user_docs/Intro',
                    position: 'left',
                    label: 'User Docs',
                },
                {
                    type: 'doc',
                    docId: 'system_docs/Intro',
                    position: 'left',
                    label: 'System Docs',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/Joeclinton1/ChromeEngine-Docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorials',
                            to: '/docs/tutorials/Platformer%20Tutorial/Intro',
                        },
                        {
                            label: 'User Docs',
                            to: '/docs/user_docs/Intro',
                        },
                        {
                            label: 'System Docs',
                            to: '/docs/system_docs/Intro',
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Scratch',
                            href: 'https://scratch.mit.edu/users/Chrome_Cat/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Joeclinton1/ChromeEngine-Docs',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} ChromeEngine`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
};
