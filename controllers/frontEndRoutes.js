const express = require('express');
const router = express.Router();
const {User,Blog} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll({
        include:[User]
    }).then(data=>{
        const hbsData = data.map(proj=>proj.toJSON())
        res.render("homepage",{
            blogs:hbsData,
            logged_in:req.session.logged_in
        })
    })
})

router.get("/blog/:id",(req,res)=>{
    Blog.findByPk(req.params.id).then(blogData=>{
        const hbsData = blogData.toJSON();
        hbsData.logged_in=req.session.logged_in
        res.render("singleBlog",hbsData)
    })
})

router.get("/login",(req,res)=>{
    if(req.session.logged_in){
        res.redirect("/profile")
    }
    res.render("login",{logged_in:false})
})

router.get("/profile",(req,res)=>{
    if(!req.session.logged_in) {
        res.redirect("/login")
    }
    User.findByPk(req.session.user_id,{
        include:[Blog]
    }).then(userData=>{
        const hbsData = userData.toJSON();
        console.log(hbsData)
        hbsData.logged_in=true;
        res.render("Blog",hbsData)
    })
})

module.exports = router;