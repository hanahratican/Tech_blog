const User = require("./User");
const Post = require("./Blog");
const Comment = require("./Comment");

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Comment, Blog };
