const container=document.querySelector(".container");
let cell;
let num=1;
let column;
for(let i=0;i<16;i++){
    column=document.createElement("div")
    
    for(let j=0;j<16;j++){
        cell=document.createElement("div")
        cell.innerHTML=` <button onClick="handleClickChange()">
                            Click Button ${num++}
                        </button>`
        column.appendChild(cell)
        column.style="display: flex"
        container.appendChild(column);
        if(j%2==0){
            cell.style="border: 1px solid black;height: 50px;width: 50px; color:black;    background-color: antiquewhite;"
        }
        else{
            cell.style="border: 1px solid black;height: 50px;width: 50px; color:red;     background-color: antiquewhite;"
        }
        
        
    }
}

function handleClickChange(){
    cell.style="color:white;     background-color: black;"
}