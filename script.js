const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var photo=img.getAttribute("data")

// var elem= document.querySelector(".elemcontainer");
// var fixed= document.querySelector("#img")
// var image=elem.addEventListener("mouseenter",function(){
// fixed.style.display="block";
// })

// var image=elem.addEventListener("mouseleave",function(){
// fixed.style.display="none";
// })



var elemcontainer = document.querySelector("#elemcontainer");
var fixed = document.querySelector("#img");
elemcontainer.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
})

elemcontainer.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
})


var elems = document.querySelectorAll(".elem")
var fixed = document.querySelector("#img");
elems.forEach(function(e){

    e.addEventListener("mouseenter",function () {
        var image = e.getAttribute('data-image')
        fixed.style.backgroundImage = `url(${image})`
    
    })


})