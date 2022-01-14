const buttonOne = document.getElementsByClassName("buttonOne");
const destination1 = document.getElementsByClassName("destination1");
const destination2 = document.getElementsByClassName("destination2");
const destination3 = document.getElementsByClassName("destination3");
const destination4 = document.getElementsByClassName("destination4");
const destination5 = document.getElementsByClassName("destination5");
const mainList = document.getElementsByClassName("mainList")

console.log(mainList)
console.log(destination1[0]);

//Make the destination box disapear..................


buttonOne[0].addEventListener("click", function (e) {
    mainList[0].classList.toggle("hide")

    //Changes the innertext on Button when disapearing destination box..........
    if (buttonOne[0].innerText == "Hide Destinations") {
        buttonOne[0].innerText = "Show Destinations";
        

    } else if (buttonOne[0].innerText == "Show Destinations") {
        buttonOne[0].innerText = "Hide Destinations"
    } else if (buttonOne[0].innerText.includes("You selected")) {
        buttonOne[0].innerText = "Hide Destinations";
        buttonOne[0].classList.remove("longButton");
        mainList[0].classList.remove("hide");
        buttonOne[0].classList.add("stylingShortButton");

    }

});

//select destination and transform the button
const eventHandler = (A)=>{
    A[0].addEventListener("click", (e) => {
   
        buttonOne[0].innerText = `You selected ${A[0].innerText}.`
    
        buttonOne[0].classList.add("longButton")
    })
}
eventHandler(destination1)
eventHandler(destination2)
eventHandler(destination3)
eventHandler(destination4)
eventHandler(destination5)

