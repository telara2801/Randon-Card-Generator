const cartasPinta=["♥","♦","♣","♠",];
const cartasLetras=["A","j","Q","K"]


//const saludos="hola mundo";

//alert('You successfully linked your JavaScript file!');
//console.log("hola tulio")

function cardNumber() {
    return (Math.floor(Math.random()*13))+1
 }

function cardPica() {
	return Math.floor(Math.random()*4);
  }

function cardLetter() {
    return Math.floor(Math.random()*5)
}  



window.onload= function() {
    let cartaNumero=cardNumber()
    let cartaPica=cardPica();
    let cartaLetra=cardLetter();

        let arrayCardToShow=cartasPinta[cartaPica];
       

        //let cartaFinal=arrayCardToShow.join('');
            document.getElementById("card").innerHTML=arrayCardToShow;        
            document.getElementById("number").innerHTML=cartaNumero; 
            document.getElementById("cardFooter").innerHTML=arrayCardToShow;
            //document.querySelector("#imgfooter").innerHTML=arrayCardToShow; esta funciona igual
             
    if (cartasPinta[cartaPica]=="♥" || cartasPinta[cartaPica]=="♦" )  {
            const dStyle = document.querySelector("#number");
            dStyle.style.color = "#D93600";
            const dStyle1 = document.querySelector("#card");
             dStyle1.style.color = "#D93600";
             const dStyle2 = document.querySelector("#cardFooter");
            dStyle2.style.color = "#D93600";
            //dStyle.style.backgroundColor = "#D93600";
    }

      
    if(cartaNumero===1)  {
        const dStyle = document.querySelector("#number");
            dStyle.innerHTML = "A";
    }else if(cartaNumero===11)  {
        const dStyle = document.querySelector("#number");
            dStyle.innerHTML = "J";
    }else if(cartaNumero===12)  {
        const dStyle = document.querySelector("#number");
            dStyle.innerHTML = "Q";
    }else if(cartaNumero===13)  {
        const dStyle = document.querySelector("#number");
            dStyle.innerHTML = "K";
    }
} 