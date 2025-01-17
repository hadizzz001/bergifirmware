import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <link rel="pingback" href="https://murphysolicitors.co.uk/xmlrpc.php" />
  <title>Bergi Law Firm</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        'img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }'
    }}
  />
  {/* All in One SEO 4.7.5.1 - aioseo.com */}
  <meta
    name="description"
    content="Solicitors Bergi Law Firm team of Lebanon solicitors offer the best legal support. Request free consultation from our  solicitors."
  />
  <meta
    name="robots"
    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <link rel="canonical" href="index.html" />
  <meta name="generator" content="All in One SEO (AIOSEO) 4.7.5.1" />
  <meta property="og:locale" content="en_US" />
  <meta
    property="og:site_name"
    content="Bergi Law Firm"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Bergi Law Firm"
  />
  <meta
    property="og:description"
    content=": Solicitors Bergi Law Firm team of Lebanon solicitors offer the best legal support. Request free consultation from our  solicitors."
  />
  <meta property="og:url" content="https://murphysolicitors.co.uk/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Bergi Law Firm"
  />
  <meta
    name="twitter:description"
    content=": Solicitors Bergi Law Firm team of Lebanon solicitors offer the best legal support. Request free consultation from our  solicitors."
  />
  {/* All in One SEO */}
  <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
  <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="S G Murphy Solicitors » Feed"
    href="feed/index.html"
  />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="S G Murphy Solicitors » Comments Feed"
    href="comments/feed/index.html"
  />
  {/* This site uses the Google Analytics by MonsterInsights plugin v9.2.4 - Using Analytics tracking - https://www.monsterinsights.com/ */}
  {/* / Google Analytics by MonsterInsights */}
  <style
    id="wp-emoji-styles-inline-css"
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\n\timg.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n"
    }}
  />
  <link
    rel="stylesheet"
    id="wp-block-library-css"
    href="wp-includes/css/dist/block-library/style.min.css@ver=6.7.1.css"
    type="text/css"
    media="all"
  />
  <style
    id="classic-theme-styles-inline-css"
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n/*! This file is auto-generated */\n.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}\n"
    }}
  />
  <style
    id="global-styles-inline-css"
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}\n:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}\n"
    }}
  />
  <link
    rel="stylesheet"
    id="contact-form-7-css"
    href="wp-content/plugins/contact-form-7/includes/css/styles.css@ver=6.0.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="gdlr-core-google-font-css"
    href="https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMerriweather%3A300%2C300italic%2Cregular%2Citalic%2C700%2C700italic%2C900%2C900italic&subset=devanagari%2Clatin%2Clatin-ext%2Ccyrillic%2Ccyrillic-ext%2Cvietnamese&ver=6.7.1"
    type="text/css"
    media="all"
  />
 
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet"/>

  <link
    rel="stylesheet"
    id="elegant-font-css"
    href="wp-content/plugins/goodlayers-core/plugins/elegant/elegant-font.css@ver=6.7.1.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="gdlr-core-plugin-css"
    href="wp-content/plugins/goodlayers-core/plugins/style.css@ver=1730647862.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="gdlr-core-page-builder-css"
    href="wp-content/plugins/goodlayers-core/include/css/page-builder.css@ver=6.7.1.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="newsletter-css"
    href="wp-content/plugins/newsletter/style.css@ver=8.6.2.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="attorna-style-core-css"
    href="wp-content/themes/attorna/css/style-core.css@ver=6.7.1.css"
    type="text/css"
    media="all"
  />
  <link
    rel="stylesheet"
    id="attorna-custom-style-css"
    href="wp-content/uploads/attorna-style-custom.css@1699161622&ver=6.7.1.css"
    type="text/css"
    media="all"
  />
  {/*[if lt IE 9]>

<![endif]*/}
  <link rel="https://api.w.org/" href="wp-json/index.html" />
  <link
    rel="alternate"
    title="JSON"
    type="application/json"
    href="wp-json/wp/v2/pages/2039"
  />
  <link
    rel="EditURI"
    type="application/rsd+xml"
    title="RSD"
    href="https://murphysolicitors.co.uk/xmlrpc.php?rsd"
  />
  <link rel="shortlink" href="index.html" />
  <link
    rel="alternate"
    title="oEmbed (JSON)"
    type="application/json+oembed"
    href="wp-json/oembed/1.0/embed@url=https%253A%252F%252Fmurphysolicitors.co.uk%252F"
  />
  <link
    rel="alternate"
    title="oEmbed (XML)"
    type="text/xml+oembed"
    href="wp-json/oembed/1.0/embed@url=https%253A%252F%252Fmurphysolicitors.co.uk%252F&format=xml"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@media only screen and (max-width: 999px){#gdlr-core-wrapper-1.gdlr-core-pbf-wrapper {} #gdlr-core-wrapper-1.gdlr-core-pbf-wrapper {margin-top: -50px !important;} }@media only screen and (max-width: 767px){#gdlr-core-wrapper-1.gdlr-core-pbf-wrapper {} #gdlr-core-wrapper-1.gdlr-core-pbf-wrapper {} }#gdlr-core-column-1:hover .gdlr-core-pbf-column-content-margin, #gdlr-core-column-1:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-wrap, #gdlr-core-column-1:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-frame{ border-color: #ffffff !important; }@media only screen and (max-width: 999px){#gdlr-core-column-1 .gdlr-core-pbf-column-content-margin{padding: 40px 30px 10px 20px !important;}}@media only screen and (max-width: 999px){#gdlr-core-column-1 .gdlr-core-pbf-column-content-margin{margin-right: 0px !important;margin-left: 0px !important;}}@media only screen and (max-width: 767px){#gdlr-core-column-1 .gdlr-core-pbf-column-content-margin{}}@media only screen and (max-width: 767px){#gdlr-core-column-1 .gdlr-core-pbf-column-content-margin{margin: 0px 0px 0px 0px !important;}}#gdlr-core-column-2:hover .gdlr-core-pbf-column-content-margin, #gdlr-core-column-2:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-wrap, #gdlr-core-column-2:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-frame{ border-color: #ffffff !important; }@media only screen and (max-width: 767px){#gdlr-core-wrapper-2.gdlr-core-pbf-wrapper {padding-top: 80px !important;padding-bottom: 60px !important;} }@media only screen and (max-width: 999px){#gdlr-core-wrapper-3.gdlr-core-pbf-wrapper {padding: 120px 50px 120px 50px !important;} #gdlr-core-wrapper-3.gdlr-core-pbf-wrapper {} }@media only screen and (max-width: 767px){#gdlr-core-wrapper-3.gdlr-core-pbf-wrapper {padding: 80px 0px 80px 0px !important;} }@media only screen and (max-width: 767px){#gdlr-core-column-3 .gdlr-core-pbf-column-content-margin{padding-bottom: 10px !important;}}#gdlr-core-column-4:hover .gdlr-core-pbf-column-content-margin, #gdlr-core-column-4:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-wrap, #gdlr-core-column-4:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-frame{ border-color: #ffffff !important; }@media only screen and (max-width: 999px){#gdlr-core-column-4 .gdlr-core-pbf-column-content-margin{padding-right: 0px !important;padding-left: 0px !important;}}@media only screen and (max-width: 999px){#gdlr-core-wrapper-4.gdlr-core-pbf-wrapper {padding-bottom: 20px !important;} #gdlr-core-wrapper-4.gdlr-core-pbf-wrapper {margin-top: 20px !important;} }@media only screen and (max-width: 767px){#gdlr-core-wrapper-4.gdlr-core-pbf-wrapper {padding-bottom: 20px !important;} #gdlr-core-wrapper-4.gdlr-core-pbf-wrapper {margin-top: 20px !important;} }#gdlr-core-column-5:hover .gdlr-core-pbf-column-content-margin, #gdlr-core-column-5:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-wrap, #gdlr-core-column-5:hover .gdlr-core-pbf-column-content-margin .gdlr-core-pbf-background-frame{ border-color: #ffffff !important; }@media only screen and (max-width: 767px){#gdlr-core-column-5 .gdlr-core-pbf-column-content-margin{padding-top: 60px !important;padding-bottom: 0px !important;}}@media only screen and (max-width: 999px){#gdlr-core-wrapper-5.gdlr-core-pbf-wrapper {padding-right: 60px !important;padding-left: 60px !important;} }@media only screen and (max-width: 767px){#gdlr-core-wrapper-5.gdlr-core-pbf-wrapper {padding: 80px 0px 80px 0px !important;} }@media only screen and (max-width: 767px){#gdlr-core-wrapper-6.gdlr-core-pbf-wrapper {padding-top: 80px !important;padding-bottom: 60px !important;} }@media only screen and (max-width: 999px){#gdlr-core-wrapper-7.gdlr-core-pbf-wrapper {padding-top: 80px !important;padding-bottom: 45px !important;} }@media only screen and (max-width: 767px){#gdlr-core-wrapper-7.gdlr-core-pbf-wrapper {padding-top: 80px !important;} }"
    }}
  />
  <meta name="generator" content="Site Kit by Google 1.140.0" />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        ".recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}"
    }}
  />
  <meta
    name="generator"
    content="Powered by Slider Revolution 6.7.18 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface."
  />
  <link
    rel="icon"
    href="wp-content/uploads/2022/02/cropped-android-chrome-512x512-1-32x32.png"
    sizes="32x32"
  />
  <link
    rel="icon"
    href="wp-content/uploads/2022/02/cropped-android-chrome-512x512-1-192x192.png"
    sizes="192x192"
  />
  <link
    rel="apple-touch-icon"
    href="wp-content/uploads/2022/02/cropped-android-chrome-512x512-1-180x180.png"
  />
  <meta
    name="msapplication-TileImage"
    content="https://murphysolicitors.co.uk/wp-content/uploads/2022/02/cropped-android-chrome-512x512-1-270x270.png"
  />
  <style
    id="wpforms-css-vars-root"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t\t:root {\n\t\t\t\t\t--wpforms-field-border-radius: 3px;\n--wpforms-field-border-style: solid;\n--wpforms-field-border-size: 1px;\n--wpforms-field-background-color: #ffffff;\n--wpforms-field-border-color: rgba( 0, 0, 0, 0.25 );\n--wpforms-field-border-color-spare: rgba( 0, 0, 0, 0.25 );\n--wpforms-field-text-color: rgba( 0, 0, 0, 0.7 );\n--wpforms-field-menu-color: #ffffff;\n--wpforms-label-color: rgba( 0, 0, 0, 0.85 );\n--wpforms-label-sublabel-color: rgba( 0, 0, 0, 0.55 );\n--wpforms-label-error-color: #d63637;\n--wpforms-button-border-radius: 3px;\n--wpforms-button-border-style: none;\n--wpforms-button-border-size: 1px;\n--wpforms-button-background-color: #066aab;\n--wpforms-button-border-color: #066aab;\n--wpforms-button-text-color: #ffffff;\n--wpforms-page-break-color: #066aab;\n--wpforms-background-image: none;\n--wpforms-background-position: center center;\n--wpforms-background-repeat: no-repeat;\n--wpforms-background-size: cover;\n--wpforms-background-width: 100px;\n--wpforms-background-height: 100px;\n--wpforms-background-color: rgba( 0, 0, 0, 0 );\n--wpforms-background-url: none;\n--wpforms-container-padding: 0px;\n--wpforms-container-border-style: none;\n--wpforms-container-border-width: 1px;\n--wpforms-container-border-color: #000000;\n--wpforms-container-border-radius: 3px;\n--wpforms-field-size-input-height: 43px;\n--wpforms-field-size-input-spacing: 15px;\n--wpforms-field-size-font-size: 16px;\n--wpforms-field-size-line-height: 19px;\n--wpforms-field-size-padding-h: 14px;\n--wpforms-field-size-checkbox-size: 16px;\n--wpforms-field-size-sublabel-spacing: 5px;\n--wpforms-field-size-icon-size: 1;\n--wpforms-label-size-font-size: 16px;\n--wpforms-label-size-line-height: 19px;\n--wpforms-label-size-sublabel-font-size: 14px;\n--wpforms-label-size-sublabel-line-height: 17px;\n--wpforms-button-size-font-size: 17px;\n--wpforms-button-size-height: 41px;\n--wpforms-button-size-padding-h: 15px;\n--wpforms-button-size-margin-top: 10px;\n--wpforms-container-shadow-size-box-shadow: none;\n\n\t\t\t\t}\n\t\t\t"
    }}
  />
</>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
