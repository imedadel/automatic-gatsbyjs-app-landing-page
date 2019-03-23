const path = require("path")

module.exports = {
  appstore_link          : "https://imedadel.me",
  playstore_link         : "https://imedadel.me",
  presskit_download_link : null,
  video_or_screenshot    : "screenshot",                                       // "screenshot" or "video"
  app_name               : "AGALP",
  app_price              : "Free",
  app_description        : "Write a short tagline for your app.",
  app_keywords           : ["automatic", "gatsbyjs", "app", "landing page"],
  enable_smart_app_banner: true,
  your_name              : "Imed Adel",
  your_link              : "https://imedadel.me",
  your_city              : "Sousse",
  email_address          : "hello@imedadel.me",
  facebook_username      : null,
  instagram_username     : "ed_adel",
  twitter_username       : "Imed_Adel",
  github_username        : "ImedAdel",
  youtube_username       : null,
  features               : [
    {
      title: "GitHub Pages Jekyll Theme",
      description:
        "Designed for GitHub Pages. Fork. Edit _config.yml. Upload screenshot/video. Push to gh-pages branch. Voilá!",
      fontawesome_icon_name: "magic",
    },
    {
      title: "iPhone Device Preview",
      description:
        "Preview your app in the context of an iPhone device. Five different device colors included.",
      fontawesome_icon_name: "mobile",
    },
    {
      title: "Video Support",
      description:
        "Preview app video on the iPhone device simply by placing your video files in the videos folder.",
      fontawesome_icon_name: "play-circle",
    },
    {
      title: "Automatic Icon and Metadata",
      description:
        "Enter iOS app ID in the _config.yml file to automatically fetch app icon, price and App Store Link.",
      fontawesome_icon_name: "sync",
    },
    {
      title: "Easy to Tweak",
      description:
        "Tweak accent color, images, icons and transparency via the _config.yml file. No HTML/CSS needed.",
      fontawesome_icon_name: "adjust",
    },
    {
      title: "Feature List",
      description:
        "Add features (like this one) to your site via the _config.yml file. No HTML/CSS needed.",
      fontawesome_icon_name: "star",
    },
    {
      title: "Smart App Banner",
      description: "Display a smart app banner on iOS devices.",
      fontawesome_icon_name: "arrow-alt-circle-down",
    },
    {
      title: "Social Links",
      description:
        "Easily add social media accounts and contact info in the footer via the _config.yml file. No HTML/CSS needed.",
      fontawesome_icon_name: "link",
    },
    {
      title: "FontAwesome Support",
      description:
        "Pick custom Font Awesome icons for the feature list via the _config.yml file. No HTML/CSS needed.",
      fontawesome_icon_name: "info-circle",
    },
  ],
  topbar_color                  : "#000000",
  topbar_transparency           : 0.1,
  header_background             : "rgba(0, 0, 0, 0.1)",
  topbar_title_color            : "#ffffff",
  cover_overlay_color_rgba      : "rgba(54, 59, 61, 0.8)",
  cover_overlay_transparency    : 0.8,
  device_color                  : "black",
  body_background_color         : "ffffff",
  primary_text_color            : "#000",
  content_width                 : "1170px",
  font                          : `"Helvetica Neue", sans-serif`,
  link_color                    : "#1d63ea",
  app_title_color               : "#ffffff",
  app_price_color               : "#ffffff",
  app_description_color         : "#ffffff",
  feature_title_color           : "#000000",
  feature_text_color            : "#666666",
  feature_icons_foreground_color: "#1d63ea",
  feature_icons_background_color: "#e6e6e6",
  social_icons_foreground_color : "#666666",
  social_icons_background_color : "#e6e6e6",
  footer_text_color             : "#666666",
  pathPrefix                    : null,
  logo                          : path.resolve(__dirname, "src/images/icon.png"),
  social                        : {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
}
