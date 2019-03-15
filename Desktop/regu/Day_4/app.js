const express =require('express')
const app = express()
const port = 8080;
const path= require('path')
const bodyParser = require('body-parser')
console.log(__dirname)
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routes
app.get('/',(req,res)=> {
    res.send("hello express")
});

app.get('/json',(req,res)=> {
    res.json({msg : "home"})
});

/*app.get('/:id',(req,res)=> {
    console.log(req.params.id)
    const user = req.params.id
    res.send(`hello user ${user}`)
    //res.json({msg : "home"})
});*/

app.get('/array',(req,res)=> {
    res.render('home')
});

const friends = ["a","b","c"]
app.get('/home',(req,res)=> {
    res.render('array',{friends : friends})
});

//add array start
app.get('/addArray',(req,res)=> {
    res.render('addArray',{friends : friends})
});

// app.get('/addForm',(req,res)=> {
//     res.render('addArray',{friends : friends})
// });

app.post('/addForm',(req,res)=> {
    console.log(req.body.t1)
    friends.push(req.body.t1)
    res.redirect('/home')
});
//add array end
app.listen(port,()=> console.log(`app is listen at ${port}`))