const express = require("express");
const router = express.Router();
const Order = require("../models/orders");
const All_order =require( "../models/All_order");

// router.post("/OrderData", async (req, res) => {
//   let data = req.body.order_data;
//   await data.splice(0, 0, { Order_date: req.body.order_date });

//   let id = await Order.findOne({ email: req.body.email });
//   console.log(id);
//   if (id === null) {
//     try {
        
//         await All_order.create({
//             email: req.body.email,
//             order_data: [data],
//           }).then(() => {
//             res.json({ sucess_all: true });
//           });


//       await Order.create({
//         email: req.body.email,
//         order_data: [data],
//       }).then(() => {
//         res.json({ sucess: true });
//       });
//     } catch (err) {
//       console.log(err.message);
//       res.send("Server Error");
//     }
//   } else {
//     try {

//         await All_order.create({
//             email: req.body.email,
//             order_data: [data],
//           }).then(() => {
//             res.json({ sucess: true });
//           });

//       await Order.findOneAndUpdate(
//         { email: req.body.email },
//         { $push: { order_data: data } }
//       ).then(() => {
//         res.json({ sucess: true });
//       });
//     } catch (err) {
//       res.send("Server Error");
//     }
//   }
// });

router.post("/OrderData", async (req, res) => {
    let data = req.body.order_data;
    
  
 
      try {
  
        await Order.create({
          email: req.body.email,
          order_data: data,
        }).then(() => {
          res.json({ sucess: true });
        });
      } catch (err) {
        console.log(err.message);
        res.send("Server Error");
      }
    });

router.get("/get_all_orders", async (req, res) => {
  try {
    let orderdata = await Order.find({});
    res.json({ data: orderdata, success: true });
  } catch (err) {
    res.json({ success: false });
  }
});

router.post("/delete_order/:orderId", async (req, res) => {
    const orderId = req.params.orderId;
  
    try {
      // Delete the order from the Order model
      await Order.findOneAndDelete({ _id: orderId });
  
      // If you have a corresponding entry in the All_order model, you can delete it as well
      // Example: await All_order.findOneAndDelete({ _id: orderId });
  
      res.json({ success: true, message: "Order deleted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
})

module.exports = router;
