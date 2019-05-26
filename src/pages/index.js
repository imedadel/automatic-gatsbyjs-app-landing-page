import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "@fortawesome/fontawesome-free/css/all.min.css"

import configs from "../../site-config"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={configs.app_keywords} />

    <div
      className="imageWrapper"
      style={{
        backgroundImage: `linear-gradient(${configs.cover_overlay_color_rgba},${
          configs.cover_overlay_color_rgba
        }),url(${data.headerImage.childImageSharp.fluid.src})`,
      }}
    >
      <div className="headerBackground">
        <div className="container">
          <header>
            <div className="logo">
              <div className="appIconShadow">
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="shape">
                      <path
                        id="shape"
                        d="M6181.23,233.709v-1.792c0-.5-0.02-1-0.02-1.523a24.257,24.257,0,0,0-.28-3.3,11.207,11.207,0,0,0-1.04-3.132,10.683,10.683,0,0,0-1.95-2.679,10.384,10.384,0,0,0-2.68-1.943,10.806,10.806,0,0,0-3.13-1.038,19.588,19.588,0,0,0-3.3-.285c-0.5-.017-1-0.017-1.52-0.017h-22.39c-0.51,0-1.01.017-1.53,0.017a24.041,24.041,0,0,0-3.3.285,11.009,11.009,0,0,0-3.13,1.038,10.491,10.491,0,0,0-4.62,4.622,10.893,10.893,0,0,0-1.04,3.132,19.2,19.2,0,0,0-.28,3.3c-0.02.5-.02,1-0.02,1.523v22.392c0,0.5.02,1,.02,1.524a24.257,24.257,0,0,0,.28,3.3,10.9,10.9,0,0,0,1.04,3.132,10.491,10.491,0,0,0,4.62,4.622,11.04,11.04,0,0,0,3.13,1.038,19.891,19.891,0,0,0,3.3.285c0.51,0.017,1.01.017,1.53,0.017h22.39c0.5,0,1-.017,1.52-0.017a24.221,24.221,0,0,0,3.3-.285,10.836,10.836,0,0,0,3.13-1.038,10.408,10.408,0,0,0,2.68-1.943,10.683,10.683,0,0,0,1.95-2.679,11.217,11.217,0,0,0,1.04-3.132,20.257,20.257,0,0,0,.28-3.3c0.02-.5.02-1,0.02-1.524v-20.6h0Z"
                        transform="translate(-6131 -218)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Img
                  fluid={data.headerIcon.childImageSharp.fluid}
                  className="headerIcon"
                />
              </div>
              <p className="headerName">{configs.app_name}</p>
            </div>
            <nav>
              <ul>
                {configs.presskit_download_link && (
                  <li>
                    <a href={configs.presskit_download_link}>Press Kit</a>
                  </li>
                )}
              </ul>
            </nav>
          </header>
          <div
            className="iphonePreview"
            style={{
              backgroundImage: `url(${
                configs.device_color === "black"
                  ? data.iphonePreviewBlack.childImageSharp.fluid.src
                  : configs.device_color === "blue"
                  ? data.iphonePreviewBlue.childImageSharp.fluid.src
                  : configs.device_color === "coral"
                  ? data.iphonePreviewCoral.childImageSharp.fluid.src
                  : configs.device_color === "white"
                  ? data.iphonePreviewWhite.childImageSharp.fluid.src
                  : data.iphonePreviewYellow.childImageSharp.fluid.src
              })`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 0 0"
              style={{ position: "absolute" }}
            >
              <clipPath
                id="screenMask"
                clipPathUnits="objectBoundingBox"
                transform="scale(.00257 .00119)"
              >
                <path
                  d="M6490.24,1234.36H6216.28c-2.57,0-10.55-.07-12.07-0.07a87.524,87.524,0,0,1-12-1.03,40.051,40.051,0,0,1-11.4-3.79,38.315,38.315,0,0,1-16.82-16.84,39.948,39.948,0,0,1-3.78-11.42,72.257,72.257,0,0,1-1.04-12.02c-0.06-1.83-.06-5.56-0.06-5.56V452.125h0s0.06-11.391.06-12.086a87.9,87.9,0,0,1,1.04-12.025,39.843,39.843,0,0,1,3.78-11.413,38.283,38.283,0,0,1,16.82-16.847,39.762,39.762,0,0,1,11.4-3.785,71.909,71.909,0,0,1,12-1.037c16.99-.567,36.32-0.061,34.51-0.061,5.02,0,6.5,3.439,6.63,6.962a35.611,35.611,0,0,0,1.2,8.156,21.326,21.326,0,0,0,19.18,15.592c2.28,0.192,6.78.355,6.78,0.355H6433.7s4.5-.059,6.79-0.251a21.348,21.348,0,0,0,19.18-15.591,35.582,35.582,0,0,0,1.19-8.154c0.13-3.523,1.61-6.962,6.64-6.962-1.81,0,17.52-.5,34.5.061a71.923,71.923,0,0,1,12.01,1.038,39.832,39.832,0,0,1,11.4,3.784,38.283,38.283,0,0,1,16.82,16.844,40.153,40.153,0,0,1,3.78,11.413,87.844,87.844,0,0,1,1.03,12.023c0,0.695.06,12.084,0.06,12.084h0V1183.64s0,3.72-.06,5.55a72.366,72.366,0,0,1-1.03,12.03,40.2,40.2,0,0,1-3.78,11.41,38.315,38.315,0,0,1-16.82,16.84,40.155,40.155,0,0,1-11.4,3.79,87.669,87.669,0,0,1-12.01,1.03c-1.52,0-9.5.07-12.07,0.07"
                  transform="translate(-6159.12 -394.656)"
                />
              </clipPath>
            </svg>
            {configs.video_or_screenshot === "video" && (
              <div className="videoContainer">
                <video
                  className="screenvideo"
                  autoPlay="autoplay"
                  controls="controls"
                >
                  <source
                    src={data.videoScreen.publicURL}
                    type={`video/${
                      data.videoScreen.extension === "mov"
                        ? `mp4`
                        : data.videoScreen.extension
                    }`}
                  />
                </video>
              </div>
            )}

            {configs.video_or_screenshot === "screenshot" && (
              <Img
                fluid={data.iphoneScreen.childImageSharp.fluid}
                className="iphoneScreen"
              />
            )}
          </div>
          <div className="appInfo">
            <div className="appIconShadow">
              <svg width="0" height="0">
                <defs>
                  <clipPath id="shape120">
                    <path
                      id="shape"
                      d="M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z"
                      transform="translate(-6701 -458)"
                      filter="url(#f1)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Img
                fluid={data.appIconLarge.childImageSharp.fluid}
                className="appIconLarge"
              />
            </div>
            <div className="appNamePriceContainer">
              <h1 className="appName">{configs.app_name}</h1>
              <h2 className="appPrice">{configs.app_price}</h2>
            </div>
            <div className="appDescriptionContainer">
              <p className="appDescription">{configs.app_description}</p>
            </div>
            <div className="downloadButtonsContainer">
              {configs.playstore_link && (
                <a className="playStoreLink" href={configs.playstore_link}>
                  <Img
                    fixed={data.playStore.childImageSharp.fixed}
                    className="playStore"
                  />
                </a>
              )}
              {configs.appstore_link && (
                <a className="appStoreLink" href={configs.appstore_link}>
                  <Img
                    fixed={data.appStore.childImageSharp.fixed}
                    className="appStore"
                  />
                </a>
              )}
            </div>
          </div>
          <div className="features">
            {configs.features.map(feature => {
              if (feature.title) {
                return (
                  <div className="feature">
                    <div>
                      <span className="fa-stack fa-1x">
                        <i className="iconBack fas fa-circle fa-stack-2x" />
                        <i
                          className={`iconTop fas fa-${
                            feature.fontawesome_icon_name
                          } fa-stack-1x`}
                        />
                      </span>
                    </div>
                    <div className="featureText">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>
          <footer>
            <p className="footerText">
              Made by{" "}
              {configs.your_link ? (
                <a href={configs.your_link}>{configs.your_name}</a>
              ) : (
                `${configs.your_name}`
              )}
              {configs.your_city && ` in ${configs.your_city}`}
            </p>
            <div className="footerIcons">
              {configs.facebook_username && (
                <a
                  href={`https://facebook.com/${configs.facebook_username}`}
                  aria-label="Facebook"
                >
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fab fa-facebook fa-stack-1x" />
                  </span>
                </a>
              )}

              {configs.linkedin_username && (
                <a
                  href={`https://www.linkedin.com/in/${configs.linkedin_username}`}
                  aria-label="LinkedIn"
                >
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fab fa-linkedin fa-stack-1x" />
                  </span>
                </a>
              )}

              {configs.twitter_username && (
                <a
                  href={`https://twitter.com/${configs.twitter_username}`}
                  aria-label="Twitter"
                >
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fab fa-twitter fa-stack-1x" />
                  </span>
                </a>
              )}

              {configs.github_username && (
                <a
                  href={`https://github.com/${configs.github_username}`}
                  aria-label="GitHub"
                >
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fab fa-github fa-stack-1x" />
                  </span>
                </a>
              )}

              {configs.email_address && (
                <a href={`mailto:${configs.email_address}`} aria-label="Email">
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fas fa-envelope fa-stack-1x" />
                  </span>
                </a>
              )}
            </div>
          </footer>
          {/*TODO: Add App Store API */}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    headerIcon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    appStore: file(relativePath: { eq: "appstore.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    playStore: file(relativePath: { eq: "playstore.png" }) {
      childImageSharp {
        fixed(height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    iphoneScreen: file(relativePath: { glob: "screenshot/*.{png,jpg}" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    videoScreen: file(
      extension: { ne: "txt" }
      relativePath: { glob: "videos/*" }
    ) {
      publicURL
      extension
    }
    appIconLarge: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerImage: file(relativePath: { eq: "headerimage.png" }) {
      childImageSharp {
        fluid(maxHeight: 714) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewBlack: file(relativePath: { eq: "black.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewBlue: file(relativePath: { eq: "blue.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewCoral: file(relativePath: { eq: "coral.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewWhite: file(relativePath: { eq: "white.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewYellow: file(relativePath: { eq: "yellow.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
