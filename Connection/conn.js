const mongoose = require("mongoose");

// youtube-Backend

mongoose
   .connect('mongodb://localhost:27017/youtube-Backend')
   .then(() => console.log('DB connection successful')).catch(err => {
    console.log(err)
   });

