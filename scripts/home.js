function backToTop() {
    if(window.scrollY>1000){
        // console.log(window.scrollY);
        document.getElementById("back_to_top").style.display="block";
    }else{
        document.getElementById("back_to_top").style.display="none";
    }
}

function opneSingleProduct(){
    location.href ="./SingleProduct.html"
}
