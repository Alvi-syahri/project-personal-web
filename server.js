const express = require('express')
const app = express()
const port = 3000
const hbs = require('hbs')
const path= require('path')
const { title } = require('process')
const methodOverride = require('method-override')

// const {updateBlog}=require('./controllers/controller-v1')
const{renderBlog,renderBlogDetail,renderBlogEdit,deletBlog,createBlog,updateBlog}=require('./controllers/controller-v2')
const {formatDateToWIB}= require('./utils/time')

app.set('view engine','hbs')
app.set("views",path.join(__dirname,"./views"));
app.use(express.static('asset'))
app.use(methodOverride('_method'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("asset"))

hbs.registerPartials(__dirname + "/views/partials",function (err){})
hbs.registerHelper('equal',function(a, b){
    return a === b;
})

hbs.registerHelper('formatDateToWIB', formatDateToWIB)


// home
app.get('/', (req, res) => {
    res.render('index')
})

// blog
app.get('/blog', renderBlog )

// render create-blog
app.get('/blog-create', (req, res) => {
    res.render('blog-create')
})

// submit create new blog
app.post('/blog-create',createBlog)

// render edit-blog
app.get('/blog-edit/:id',renderBlogEdit)

// submit edit blog
app.patch('/blog-update/:id',updateBlog)


// delet existing
app.delete('/blog/:id',deletBlog)

// blog detail
app.get('/blog/:id',renderBlogDetail)

// testimonials
app.get('/testimonials', (req, res) => {
    res.render('testimonials')
})

// contact
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get("*",(req,res)=>{
    res.render('page-404')
})

app.listen(port, () => {
    console.log(`${port}`)
})









//   request params
// app.get('/blogss/:id', (req, res) => {
//     const id = req.params.id;
//     res.send(`ini halaman nya ${id}`)
//   })

//   request query
// app.get('/blogs', (req, res) => {
//     // kurang tepat penulisan seperti ini

//     // const title = req.query.title
//     // const author = req.query.author
//     // const year = req.query.year

//     // ini lebih tepat dan simple

//     const{title,author,year}=req.query
//     res.send(`ini halaman ${title} dengan author ${author} tahun ${year}`);
// })

