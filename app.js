const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=8080;
const Listing=require('./models/listing.js');
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use( express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,'public')));

main().then(()=>{
    console.log('connected to db');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust');
}

// app.get('/listings',async (req,res)=>{
//     let sampleListing=new Listing({
//         title: 'Beautiful Beach House',
//         description: 'A lovely beach house with stunning ocean views.',
//         price:1200,
//         location: 'Malibu, CA',
//         country: 'USA',
//     });
//     await sampleListing.save();
//     console.log('sample was saved');
//     res.send('scuccesfull');
// })

//index route to show all listings
app.get('/listings',async(req,res)=>{
    const allListings = await Listing.find({});
       res.render("listings/index.ejs",{ allListings });
 
});

//new route to show form to create new listing
app.get('/listings/new',(req,res)=>{
    res.render('listings/new.ejs');
})

//show route to show details of one listing
app.get('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render('listings/show.ejs',{listing});
});

//create route to add new listing to db
app.post('/listings',async(req,res)=>{
    // let{title,description,price,location,country}=req.body; to avoid this we can write in this way and make 
    //changes in new.ejs also
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');
});

//edit route to show form to edit a listing
app.get('/listings/:id/edit',async(req,res)=>{
   let {id}=req.params;
    const listing=await Listing.findById(id); 
    res.render('listings/edit.ejs',{listing});
});

//update route to update a listing in db
app.put('/listings/:id',async(req,res)=>{
    let {id}=req.params;    
    await Listing.findByIdAndUpdate(id,{...req.body.listing}); //destructuring to avoid writing all fields
    res.redirect('/listings');
});

//delete route to delete a listing from db
app.delete('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect('/listings');
});

//root route
app.get('/',(req,res)=>{
    res.send('root route');
})


app.listen(port,()=>{
    console.log(`Server is runnning on port ${port}`);
})