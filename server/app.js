const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose =require('mongoose');
const schema = require('./schema/schema');
const app = express();
const cors=require('cors');

mongoose.connect('mongodb://localhost:27017/graql',{useNewUrlParser : true, useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })
.then(()=>{
    console.log(`connection to database established`)
}).catch(err=>{
    console.log(`db error ${err.message}`);
    process.exit(-1)
})
app.use(cors())

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});