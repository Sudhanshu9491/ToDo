var paras = document.querySelectorAll(".newLists");
paras.forEach(function(para) {
    para.addEventListener("click", function() {
        console.log("clicked");
        var body=document.querySelector("body");
        body.style.backgroundColor="red";
    });
});