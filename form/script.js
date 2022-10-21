const img = document.getElementById('image_input');
const service = document.getElementById('service');
const ernings = document.getElementById('earnings');
const website = document.getElementById('website');
const category = document.getElementById('category');


var btn = document.getElementById('submit');


btn.addEventListener("click", function(){
    var b = document.createElement("#id11");
    b.style.height ="100px";
    b.style.width = "100%";
    b.style.backgroundColor = "red";
    b.appendChild(service);
    
    //document.write(service.value);
})

console.log("hello world");