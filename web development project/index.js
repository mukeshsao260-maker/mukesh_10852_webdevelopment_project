let text = document.querySelector("#para");
let para=text.innerHTML;
text.innerHTML="";
let i=0;
let str="";
setTimeout(()=>{
    let typing =setInterval(()=>{
    str+=para[i];
    i++;
    text.innerHTML=str;
    if(i==para.length){
        clearInterval(typing);
    }
    },50);
    
},1000);
const input = document.getElementById("oprations");
const buttons = document.querySelectorAll(".div1");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        }
        else if (value === "C") {
            input.value = "";
        }
        else {
            input.value += value;
        }
    });
});
