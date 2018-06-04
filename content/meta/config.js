const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Sunny - Personal blog of Sunil Nirmal", // <title>
  shortSiteTitle: "Personal blog of Sunil Nirmal", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://sunilnirmal.dev",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Sunil Nirmal",
  authorTwitterAccount: "sunilmemphis2",
  // info
  infoTitle: "Sunil Nirmal",
  infoTitleNote: "personal blog",
  menuTitle: "personalBlog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.dark,
  manifestThemeColor: colors.dark,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "sunilnirmalkumar@gmail.com",
  // social
  authorSocialLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/in/sunilnirmal" },
    { name: "github", url: "https://github.com/sunilnirmal" },
    { name: "twitter", url: "https://twitter.com/sunilmemphis2" }
  ]
};
