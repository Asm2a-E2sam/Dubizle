function backToTop() {
    if(window.scrollY>1000){
        // console.log(window.scrollY);
        document.getElementById("back_to_top").style.display="block";
    }else{
        document.getElementById("back_to_top").style.display="none";
    }
}


// document.getElementsByClassName("Fashion")[0].addEventListener("mouseover", function(){
//     document.getElementsByClassName("sub")[0].innerHTML=" "
//     document.getElementsByClassName("sub")[0].innerHTML="<div>All in Fashion & Beauty</div><div>Women’s Clothing</div><div>Men’s Clothing</div><div>Women’s Accessories - Cosmetics - Personal Care</div><div>Men’s Accessories - Personal Care</div> "
// })
// document.getElementsByClassName("Pets")[0].addEventListener("mouseenter", function(){
//     document.getElementsByClassName("sub")[0].innerHTML=" "
//     document.getElementsByClassName("sub")[0].innerHTML="<div>All in Fashion & Beauty</div><div>Women’s Clothing</div><div>Men’s Clothing</div><div>Women’s Accessories - Cosmetics - Personal Care</div><div>Men’s Accessories - Personal Care</div> "
// })

// document.getElementsByClassName("more")[0].addEventListener("mouseenter", function(){
//     document.getElementsByClassName("drop").style.display="block"
//     // document.getElementsByClassName("drop")[0].style.display="none";
// }
// )