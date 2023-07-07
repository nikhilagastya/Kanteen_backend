const mongoose = require("mongoose");
const url =
  "mongodb+srv://KMITKanteen:qwerty123@cluster0.hqm6ixw.mongodb.net/kanteen?retryWrites=true&w=majority";

const mongo = async () => {
  await mongoose.connect(url, async (err, req) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
      let food_data = await mongoose.connection.db.collection("food");
      food_data.find({}).toArray(async (err, data) => {
        let cat_data = await mongoose.connection.db.collection("foodCats");
        cat_data.find({}).toArray((err, catsData) => {
          if (!err) {
            global.foods = data;
            global.catData = catsData;
            // console.log(data);
          }
        });
      });
    }
  });
};

module.exports = mongo;
