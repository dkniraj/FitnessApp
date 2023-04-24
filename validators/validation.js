const mongoose = require("mongoose");

const isValidName = function (value) {
  if (
    typeof value === "string" &&
    value.trim().length > 0 &&
    /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/.test(value)
  )
    return true;
  return false;
};

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0;
  };

  const isValidObjectId = function (objectId) {
    return mongoose.isValidObjectId(objectId);
  };

  module.exports = {isValidName, isValidRequestBody, isValidObjectId}
  