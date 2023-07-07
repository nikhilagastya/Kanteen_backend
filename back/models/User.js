const mongoose = require("mongoose");
const schema= mongoose.Schema;

const user_schema = new schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  phno: {
    type: String,
    required: true,
  },
    email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  }
  
});
module.exports=mongoose.model("user",user_schema)