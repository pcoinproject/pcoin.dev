/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pcoin",
  tagline: "A decentralized currency for everyone",
  url: "https://pcoin.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pcoinproject",
  deploymentBranch: "gh-pages",
  projectName: "pcoin.dev",
  trailingSlash: false,
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: "warn",
      content: "Due to client request, this project has been canceled.",
      backgroundColor: "#f72441",
      textColor: "black",
      isCloseable: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/vsDark"),
      darkTheme: require("prism-react-renderer/themes/vsDark"),
    },
    navbar: {
      hideOnScroll: true,
      title: "Pcoin",
      logo: {
        alt: "Pcoin Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "download",
          activeBasePath: "download",
          label: "Download",
          position: "left",
        },
        {
          href: "https://github.com/pcoinproject",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Blockchain",
          items: [
            {
              label: "Testnet Faucet",
              to: "https://faucet.pcoin.dev/",
            },
            {
              label: "Visualizer",
              to: "https://visualizer.pcoin.dev/",
            },
            {
              label: "Pcoin Web Wallet",
              to: "https://web.pcoin.dev/",
            },
          ],
        },
        {
          title: "Explorers",
          items: [
            {
              label: "Mainnet 1",
              to: "https://mainnet.pcoin.dev/",
            },
            {
              label: "Mainnet 2",
              to: "https://explorer.pcoin.dev/",
            },
            {
              label: "Testnet",
              to: "https://testnet.pcoin.dev/",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Docs",
              to: "docs",
            },
            {
              label: "FAQ",
              to: "docs/help/faq",
            },
            {
              label: "Releases",
              to: "https://github.com/pcoinproject/pcoin/releases",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/pcoinproject",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pcoin. All rights reserved.`,
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/pcoinproject/pcoin.dev/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/pcoinproject/pcoin.dev/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleAnalytics: {
          trackingID: "xxx",
          anonymizeIP: true,
        },
      },
    ],
  ],
}

module.exports = config
