const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "products",
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("cart", CartSchema);
