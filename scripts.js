const container=document.querySelector(".container");
const parent=document.querySelector(".parent");
let createGrid=(num)=>{
    for(let i=0;i<num;i++){
        const column=document.createElement("div");

        for(let j=0;j<num;j++){
        const cell=document.createElement("div");
        cell.style="border:1px solid black;height:25px;width:25px;background-color:white;flex-shrink:1;flex-grow:1";
        cell.addEventListener("mouseover",()=>{
            cell.style="border:1px solid black;height:25px;width:25px;background-color:black;flex-shrink:1;flex-grow:1";

        })
        column.appendChild(cell);
    }
    container.append(column);
        
    }



}
const reset=document.createElement("button");
reset.textContent="Reset"
reset.addEventListener("click",()=>{
    container.innerHTML="";
    userNumber=prompt("Enter Grid size","16");
    createGrid(parseInt(userNumber));
    
})
parent.appendChild(reset);
createGrid(17);
    
    






