//https://sequelize.org/master/manual/model-basics.html#model-definition
// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  model: "product_tag",
  foreignKey: "product_id",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  model: "product_tag",
  foreignKey: "tag_id",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
