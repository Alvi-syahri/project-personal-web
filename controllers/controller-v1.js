const {Sequelize,QueryTypes} = require("sequelize")
const config = require("../config/config.json")

const sequelize = new Sequelize(config.development)

let blogs = [
//     {
//     title: "pasar coding",
//     content: 'content',
//     image: "/img/gambar.jpg",
//     author: "Alvi",
//     postedAt : new Date('Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)'),
// },
//     {
//     title: "pasar coding",
//     content: 'content',
//     image: "/img/gambar.jpg",
//     author: "Alvi",
//     postedAt : new Date('Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)'),
// } 

];

 async function renderBlog(req,res){
    const blogs = await sequelize.query(`SELECT * FROM public."Blogs" ORDER BY "createdAt" DESC`,{
        type : QueryTypes.SELECT,
    })
    // console.log(blogs)
    res.render('blog-list',{blogs:blogs})
}

 async function renderBlogDetail(req,res){
        const id = req.params.id

        const query = `SELECT * FROM "Blogs" WHERE id = ${id}`

        const blogYangDipilih = await sequelize.query(query,{
            type: QueryTypes.SELECT,
        })
        // console.log('hasil',blogYangDipilih[0])
        res.render('blog-detail',{blog:blogYangDipilih[0]})
}

async function createBlog (req,res){
    const {title,content}=req.body
    let image = "https://picsum.photos/200/150"

    let query=`
    INSERT INTO "Blogs"(title, image, content)
	VALUES ('${title}','${image}','${content}');
    `

    const blogs = await sequelize.query(query,{
        type : QueryTypes.INSERT,
    })
    
    // blogs.push(newBlog)

    res.redirect('/blog')
}

async function renderBlogEdit(req,res){
    const id = req.params.id
    const query = `SELECT * FROM "Blogs" WHERE id = ${id}`

    const blogYangDipilih = await sequelize.query(query,{
            type: QueryTypes.SELECT,
    })

    res.render('blog-edit',{blog: blogYangDipilih[0]})
}

async function updateBlog( req,res){
    const id = req.params.id
    const {title,content}=req.body

    const query = `UPDATE "Blogs"
	SET title='${title}', content='${content}'
	WHERE id = ${id}`

    const updateResult = await sequelize.query(query,{
        type: QueryTypes.UPDATE,
    })

    // let image = "https://picsum.photos/200/150"

    // let updateBlog = {
    //         title: title,
    //         content: content,
    //         image: image,
    //         author: "Alvi",
    //         postedAt : new Date(),
    // }
    // blogs[id]=updateBlog
    res.redirect('/blog')
}

async function deletBlog (req,res){
        const id = req.params.id
        const query= `DELETE FROM "Blogs" WHERE id=${id}`
        const deletResult= await sequelize.query(query,{
            type:QueryTypes.DELETE,
        })

        res.redirect('/blog')
}


module.exports = {
    renderBlog,
    renderBlogDetail,
    createBlog,
    deletBlog,
    updateBlog,
    renderBlogEdit
}