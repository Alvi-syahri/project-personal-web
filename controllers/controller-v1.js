let blogs = [
    {
    title: "pasar coding",
    content: 'content',
    image: "/img/gambar.jpg",
    author: "Alvi",
    postedAt : new Date('Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)'),
},
    {
    title: "pasar coding",
    content: 'content',
    image: "/img/gambar.jpg",
    author: "Alvi",
    postedAt : new Date('Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)'),
} 

];


function renderBlog(req,res){
    res.render('blog-list',{blogs:blogs})
}

function renderBlogDate(req,res){
        const id = req.params.id
        const blogYangDipilih = blogs[id]
        res.render('blog-detail',{blog:blogYangDipilih})
}

function createBlog (req,res){
    const {title,content}=req.body
    let image = "https://picsum.photos/200/150"

    let newBlog = {
            title: title,
            content: content,
            image: image,
            author: "Alvi",
            postedAt : new Date(),
    }
    blogs.push(newBlog)

    res.redirect('/blog')
}

function renderBlogEdit(req,res){
    const id = req.params.id
    const blogYangDipilih = blogs[id]

    res.render('blog-edit',{blog: blogYangDipilih,index:id})
}

function updateBlog( req,res){
    const id = req.params.id
    const {title,content}=req.body

    let image = "https://picsum.photos/200/150"

    let updateBlog = {
            title: title,
            content: content,
            image: image,
            author: "Alvi",
            postedAt : new Date(),
    }
    blogs[id]=updateBlog
    res.redirect('/blog')
}

function deletBlog (req,res){
        const id = req.params.id
        const blogYangDipilih = blogs[id]
        
        blogs.splice(id,1)

        res.redirect('/blog')
}


module.exports = {
    renderBlog,
    renderBlogDate,
    createBlog,
    deletBlog,
    updateBlog,
    renderBlogEdit
}