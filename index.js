const mongoose=require('mongoose');
const initData=require('./data.js');
const Listing=require('../models/listing.js');


main().then(()=>{
    console.log('connected to db');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust');
}

const initDB=async()=>{  //function to initialize the database with sample data
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log('Database initialized with sample data');
};
initDB();