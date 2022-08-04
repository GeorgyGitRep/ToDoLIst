const input = document.querySelector("#input");

const btn = document.querySelector("#btn")

const ToDoList = document.querySelector(".ToDoList")

const ToDoComplited=document.querySelector(".ToDoComplited")

btn.addEventListener("click",function(){     
    if(input.value != ''){
        const newToDo ={
            text:input.value,
            complited:false
        }    
        ToDoData.push(newToDo)    
        render()     
    }
    else{
        let blur = document.querySelector("main")
        blur.classList.add("blur")
        let info = document.createElement("div")
        info.classList.add("info")
        info.innerHTML="<p>Введите задачу</p><button id = 'btn-blur'>ок</button>"
        document.body.append(info)
        let btn_blur = document.querySelector("#btn-blur")
        btn_blur.addEventListener("click",function(){
        blur.classList.remove("blur")
        info.innerHTML=''
        info.classList.remove("info")
})
    }
    
})
window.addEventListener("DOMContentLoaded",function(){
    let m = localStorage.getItem("arr")
    ToDoData.push.apply(ToDoData,JSON.parse(m))
    render()
})
const ToDoData = []
const render = function(){
    
    ToDoList.innerHTML=''
    ToDoComplited.innerHTML=''
    ToDoData.forEach(function(item,i){
        let teg = document.createElement("div");
        teg.classList.add("blok");
        teg.innerHTML="<p>"+item.text+"</p><div class = 'inner-blok'><button class='yes'>Y</button><button class ='delete'>X</button></div>"
        
        if(item.complited === false){
        ToDoList.append(teg)
    }

    else{
        ToDoComplited.append(teg)
    }
    teg.querySelector(".yes").addEventListener("click",function(){ item.complited=!item.complited ;render() })
    teg.querySelector(".delete").addEventListener("click",function(){ ToDoData.splice(i,1);localStorage.arr=JSON.stringify(ToDoData);render() })
    localStorage.arr=JSON.stringify(ToDoData)
    })
    input.value = ''
}
