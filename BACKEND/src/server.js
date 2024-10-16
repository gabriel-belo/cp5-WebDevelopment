//Arquivo principal do backend em node

const express= require('express');
const app = express();
const routes= require('./routes');


app.use(express.json());
app.use(routes);

app.get('/', (req, res)=>{
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})