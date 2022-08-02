const input = document.querySelector("#input");
console.log(input);
const btn = document.querySelector("#btn")
console.log(btn);
const ToDoList = document.querySelector(".ToDoList")
console.log(ToDoList)

btn.addEventListener("click",function(){
    let teg = document.createElement("div");
    teg.classList.add("blok");
    if(input.value != ''){
        teg.innerHTML="<p>"+input.value+"</p><div class = 'inner-blok'><button >Y</button><button>X</button></div>"
        console.log(teg);
        ToDoList.append(teg)
    }
    else{
        let blur = document.querySelector("main")
        blur.classList.add("blur")
        let info = document.createElement("div")
        info.classList.add("info")
        info.innerHTML="<p>Введите задачу</p><button id = 'btn-blur'>ок</button>"
        document.body.append(info)

        let btn_blur = document.querySelector("#btn-blur")
        console.log(btn_blur)
        btn_blur.addEventListener("click",function(){
        blur.classList.remove("blur")
        info.innerHTML=''
        info.classList.remove("info")
})
    }
   
})

