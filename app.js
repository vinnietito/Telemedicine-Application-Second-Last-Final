const express = require(`express`);
const db = require(`./database`)
const cookieParser = require(`cookie-parser`);
const { isAuthenticated } = require(`./middlewares/auth`);
const { isAuthenticateddoctor } = require(`./middlewares/authdoctor`)
const router = require(`./routes/pages`)

const app = express();
const port = process.env.PORT || 3500

app.get(``, (req, res)=>{
    res.render(`index`)
})

app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(`/`, require(`./routes/pages`))
app.use(`/auth`, require(`./routes/auth`))


app.set(`view engine`, `hbs`)

app.use(express.static(`public`))
app.use(express.static(`public/images`))
app.listen(port,()=>{
    console.log(`listening on ${port}`);
    
})