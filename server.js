const express = require('express');
//connect to database
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json());


//use api routes
app.use('/api', apiRoutes);

//get all candidates

//get a single candidate

//create a candidate

//update a candidates party

//delete a candidate

//get parties table

//get table by 1 single party

//delete party by id

//deafault response for anyother request (not found)
app.use((req,res) =>{
    res.status(404).end();
});

//start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`);
    });
});