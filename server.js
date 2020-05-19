const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express:server,
    autoescape:false,
    noCache:true
})

server.get("/", function(req, res) {
    const data = {
        avatar_url:"https://avatars3.githubusercontent.com/u/61937000?s=460&u=64424e8b9ce89874d2955751e7bfd7fe484086fe&v=4",
        name:"Leonardo Gottardi",
        role:"Cursando Ciência da Computação",
        links: [
            {name:"Github", url:"https://github.com/leogottardi"},
            {name:"Twitter", url:"https://twitter.com/nizvk"},
            {name:"Facebook", url:"https://www.facebook.com/gottardileo"}
        ]
    }
    return res.render("about", {about: data})
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio",{ items: videos })
})

server.get("/video", function(req,res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if(!video) {
        return res.send("Video not found")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function() {
    console.log("server is running")
})

