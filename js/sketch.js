
function setup(){
    card1 = select(".card1");
    card2 = select(".card2");
    card3 = select(".card3");
    intro = select(".intro");
    register = select(".register")
    card1.style("display","block");
//    intro.style("display","none");
//    register.style("display","block");
    passIp = select("#pass");
    eye1 = select(".show")
    eye2 = select(".hide")
    eye1.style("display","none");
    eye1.style("display","none");


}
function draw(){
    if(passIp.value().length>0){
            eye1.style("display","block");
                


    }else{
            passIp.attribute("type","password")
            eye2.style("display","none");
            eye1.style("display","none");


    }
}

function showTwo(){
    card1.style("display","none");
card2.style("display","block");
    console.log("slow");

}
function showThree(){
    card1.style("display","none");
    card2.style("display","none");
    card3.style("display","block");
} 

function showRegister(){
    document.getElementById("pagal").style = "display : none"
    register.style("display","block");

}

function showPass(){
    passIp.attribute("type","text")
    eye1.style("display","none");
    eye2.style("display","block");

}

function hidePass(){
    passIp.attribute("type","password")
    eye2.style("display","none");
    eye1.style("display","block");

}