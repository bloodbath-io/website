const DATOCMS_READ_TOKEN = 'd2f0b3ae3e3a269411fbc829232383'

module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: "Bloodbath",
            short_name: "Bloodbath",
            start_url: "/",
            icon: "src/images/icon.png",
          },
        },
        {
          resolve: `gatsby-plugin-intl`,
          options: {
            path: `${__dirname}/src/intl`,
            languages: [`en`, `fr`],
            defaultLanguage: `en`,
            redirect: false,
          },
        },
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            trackingIds: [
              "G-S3ND8VFBEX"
            ],
          },
        },
        {
          resolve: `gatsby-plugin-hotjar`,
          options: {
            includeInDevelopment: false,
            id: 2453694,
            sv: 6,
          },
        },
        {
          resolve: 'gatsby-plugin-load-script',
          options: {
            src: '/scripts/crisp.js'
          }
        }
    ]
}
