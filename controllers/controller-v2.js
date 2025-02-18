const {Sequelize, where} = require("sequelize")
const config = require("../config/config.json")
// const {Blog, sequelize} = require("../models")
const {Blog}= require("../models")
// const { updateBlog } = require("./controller-v1")

const sequelize = new Sequelize(config.development)

async function renderBlog(req,res) {
    const blogs = await Blog.findAll({
        order:[
            ["createdAt","DESC"]
        ]
    })

    console.log("hadil fecth data dari controler v2", blogs)
    res.render("blog-list",{blogs:blogs})
}

async function renderBlogDetail(req,res){
    const id = req.params.id

    const blogYangDipilih = await Blog.findOne({
        where:{
            id:id,
        },
    })
    if(blogYangDipilih===null){
        res.render("page-404")
    }else{
        console.log('v2 blog detail :', blogYangDipilih)

        res.render('blog-detail',{blog:blogYangDipilih,nama:"alvi",umur:"25"})
    }
    }

    async function deletBlog(req,res) {
        const {id}= req.params

        const deletResult = await Blog.destroy({
            where:{
                id:id,
            },
        })
        console.log("result delet:",deletResult)
        res.redirect("/blog")
    }

   
    async function createBlog(req,res) {
        const {title,content}=req.body
        let image = "https://picsum.photos/200/150"

        const newBlog = await Blog.create({
            title,   //sama aja seperti title:title
            content,
            image,
        })
        // console.log("result delet:",resultSubmit)
        res.redirect("/blog")
    }

    async function renderBlogEdit(req,res){
        const id = req.params.id
    
        const blogYangDipilih = await Blog.findOne({
            where:{
                id:id,
            },
        })
        if(blogYangDipilih===null){
            res.render("page-404")
        }else{
            console.log('v2 blog detail :', blogYangDipilih)
    
            res.render('blog-detail',{blog:blogYangDipilih})
        }
    }

    async function updateBlog(req,res){
        const id = req.params.id
        const {title,content}=req.body

        const updateResult = await Blog.update(
            {
                title,
                content,
                updatedAt: sequelize.fn("NOW"),
            },
            {
                where:{
                    id,
                }
            }
    )
    res.redirect("/blog")
    }

module.exports={renderBlog,renderBlogDetail,renderBlogEdit,deletBlog,createBlog,updateBlog}