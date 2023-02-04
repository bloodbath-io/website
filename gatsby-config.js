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
        }
    ]
}
