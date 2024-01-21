function toggleParagraph(){
const hiddenClass = document.getElementById("toggleParagraph");
hiddenClass.classList.toggle('hidden')
document.getElementById("about_btn").innerHTML = "Read More";
if(hiddenClass.classList != "hidden"){
 document.getElementById("about_btn").innerHTML = "Read Less"
}
}



document.addEventListener("click",function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".model-img").src = src;
        const myModel = new bootstrap.Modal(document.getElementById('gallery-model'));
        myModel.show();
    }else if(e.target.classList.contains("nav-link")){
        console.log("I am here!!")
    }
})