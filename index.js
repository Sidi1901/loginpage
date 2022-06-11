const express= require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,resp)=>{
    resp.render('index',{tittle: "login page"});
})

app.listen(4500);