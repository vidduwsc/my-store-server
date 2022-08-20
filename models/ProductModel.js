const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    enum: ["iphone", "ipad", "mac", "apple-watch", "am-thanh", "phu-kien"],
    require: true,
  },
  image: {
    type: Buffer,
  },
});

module.exports = mongoose.model("products", ProductSchema);
