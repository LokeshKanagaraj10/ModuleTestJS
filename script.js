

const forms = document.getElementById("forms")

const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const playimage = document.getElementById("image3")
const couponcode = document.getElementById("couponcode")

//disabling the click on images 

let clickedimg1 = false;
let clickedimg2 = false;
let clickedimg3 = false;
let clickedimg4 = false;

let formstatus = false;
image1.addEventListener("click", function(){
    if(clickedimg1 === false){
    forms.style.display = "block" 
    clickedimg1 = true;
    }
});




document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    if(name != '' && email != '' && username !=''){
        alert("Registration Successful!")
        formstatus = true;

    }else{
        alert("Please enter Valid details")
    }
});
const details = document.getElementById("details")
    image2.addEventListener("click",function(){  
    if((clickedimg1 === true && clickedimg2 === false )&& (formstatus===true)){

    forms.style.display = "none";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    details.innerHTML = `<h3>Registration Details</h3><p>Name : ${name} </p><p>Username : ${username}</p>`
    details.style.color = "black"
    
        clickedimg2 = true;
    
}
});


const dice = document.getElementById("dice")
    playimage.addEventListener("click", function(){
    if(clickedimg2 === true && clickedimg3 === false){       
        details.style.display ="none";
        dice.style.display = "block";
    
        clickedimg3 = true;
    
}
    
})

let count = 0;
let attempt = 1;
let score = document.getElementById("score")
let totalscore = document.getElementById("totalscore")
let sum = 0;
const coupon = document.getElementById("image4")
const congrats = document.getElementById("congratsimage")
let rounds = document.getElementById("rounds")

function displayScore(){
    coupon.addEventListener("click" , function(){
        if(clickedimg3 === true && clickedimg4 === false){
               
            let couponNumber = "";
            let letters = "abcdefghijklmnopqrstuvwxyz" 
            for(let i=0; i<=12; i++){
                let newletter = Math.floor(Math.random() * 26 +1)
                couponNumber += letters.charAt(newletter)
            }
            couponcode.innerText = `Your Coupon Code : ${couponNumber}`
            couponcode.style.backgroundColor = "black"
            couponcode.style.color = "white" 
            congrats.style.display = "block"
            
                clickedimg4 = true;
        }
        })
}



dice.addEventListener("click",function(){       
    if(attempt<=2){
        count++;
        if(count<=3 ){
            const random = Math.floor(Math.random() * 6 +1) 
            sum += random
            rounds.innerText = `Round : ${count}`
            score.innerText = `Score : ${random}`;
            totalscore.innerText = `Total Score : ${sum}`
            if(count>=3 && sum>10){
                displayScore()
            }
        }
    
        else{
            if(sum<=10 && attempt == 1){
                alert("Try again after scoring more than 10")
                count = 0;
                sum = 0;
                attempt++;
            }
            else if(sum<=10 && attempt >=2){
                alert("Bad Luck")
            }
        }
    }
});



 





