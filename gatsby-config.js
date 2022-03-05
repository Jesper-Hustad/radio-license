module.exports = {
    siteMetadata: {
        siteUrl: `https://www.radiolisens.no`,
    },
    plugins: [
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
              /**
               * @property {boolean} [resetCSS=true]
               * if false, this plugin will not use `<CSSReset />
               */
              resetCSS: true,
              /**
               * @property {boolean} [isUsingColorMode=true]
               * if false, this plugin will not use <ColorModeProvider />
               */
              isUsingColorMode: true,
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Radio Lisens`,
              short_name: `RadioLisens`,
              start_url: `/`,
              background_color: `#38BA84`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon: `src/images/icon.png`, // This path is relative to the root of the site.
              cache_busting_mode: 'none',
            },
          },
          {
            resolve: `gatsby-plugin-offline`,
            options: {
              workboxConfig: {
                 globPatterns: ['*.html','**src/images/icon.png*']
              }
           }
          },
    ]
}