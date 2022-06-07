const { Schema } = require("mongoose");

module.exports = new Schema({
  technitian: {
    type: String,
    required: true,
  },
  hotel: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  solution: {
    type: String,
  },
  rmaId: {
    type: String,
    required: true,
  },
  isUnderWarranty: {
    type: Boolean,
    required: true,
  },
  purchaseDate: {
    type: Date,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending reception", "Received", "In process", "Sent"],
    default: "Pending reception",
  },
  createdDate: {
    type: Date,
    required: true,
  },
  received: {
    type: Date,
  },
  process: {
    type: Date,
  },
  sent: {
    type: Date,
  },
});
