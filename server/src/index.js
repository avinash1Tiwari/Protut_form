const express = require('express')
const cors = require('cors')
const {ServerConfig} = require('./config')

const app = express()

const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')

app.use(cors());

app.use(bodyParser.json())

app.listen(ServerConfig.PORT,(req,res) => {
    console.log(`Successfully started the server at : ${ServerConfig.PORT}`)
})


const dbConnect = require('./config/database')

dbConnect()


app.use('/api',userRoutes)
// // jOvW76QAvZmrpAxc













// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// // Your route
// app.post('/api/registerdeveloper', (req, res) => {
//     // Your logic here
//     res.send('Developer registered successfully');
// });

// app.listen(3001, () => {
//     console.log('Server running on port 3001');
// });