const mongoose = require("mongoose");
const Chat=require("./models/chat.js");
main()
.then(() => {
    console.log("Connection Succussful:");
})
.catch((err) => {
    console.log("Error accurrs");
})
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allchats=[
    {
        from:"Satyam",
        to:"Vikash",
        msg:"Hello brother what are doing right now ",
        created_at: new Date(),
    },
 {
    from:"Priya",
    to:"Neha",
    msg:"Send me your exam worksheet bro ",
    created_at : new Date(),
   },
   {
    from:"Soni",
    to:"Abhi",
    msg:"I love you abhi",
    created_at:new Date(),
   },
];

    
Chat.insertMany(allchats);