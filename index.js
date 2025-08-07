var express = require("express");
var app = express();
var port = 4000
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cookieParser());
require('./Connection/conn');

const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');

app.use('/auth',AuthRoutes);
app.use('/api',VideoRoutes);

app.listen(port,() => {console.log("our backend start")})