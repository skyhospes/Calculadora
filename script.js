const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")

buttons.forEach((item) => {
  item.onclick = () => {
    if(item.id == "clear"){
      display.innerText="";
    }else if(item.id == "backspace"){
      let string = display.innerText.toString()
      display.innerText = string.substr(0, string.length-1)
    }else if(display.innerText != "" && item.id == "equal"){
      display.innerText = eval(display.innerText)
    }else if(display.innerText == "" && item.id == "equal"){
      display.innerText="Null"
      setTimeout(() => (display.innerText = ""), 2000)
    }else{
      display.innerText+=item.id
    }
  }
})

function mode() {
  document.getElementById("light").classList.toggle("light")
  document.getElementById("icon").classList.toggle("fa-moon")
}

document.getElementById("btnMode").onclick = function(){
  mode()
}