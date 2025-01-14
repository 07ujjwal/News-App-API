const seedWriterDetail = require("./writer-detail-seeds");
const seedSubscription = require("./subscription-seeds");
const seedSubCategory = require("./sub-category-seeds");
const seedNews = require("./news-seeds");
const seedCategories = require("./category-seeds");
const seedBlogs = require("./blog-seeds");
//const seedAdmin = require("./admin-seeds");
//const seedMostViews = require("./most-views-seeds");
//const seedReviews = require("./reviews-seeds");
const seedSettings = require("./settings-seeds");
//const seedTrending = require("./trending-seeds");
const seedusers = require("./users-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedWriterDetail();
  console.log("\n----- WRITER DETAILS SEEDED -----\n");

  await seedSubscription();
  console.log("\n----- SUBSCRIPTIONS SEEDED -----\n");

  await seedSubCategory();
  console.log("\n----- SUB CATEGORIES SEEDED -----\n");

  await seedNews();
  console.log("\n----- NEWS ARTICLES SEEDED -----\n");

  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedBlogs();
  console.log("\n----- BLOGS SEEDED -----\n");

  await seedSettings();
  console.log("\n----- SETTINGS SEEDED -----\n");



  process.exit(0);
};

seedAll();
