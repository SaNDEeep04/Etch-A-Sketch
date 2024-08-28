const container=document.querySelector(".container");
let createGrid=(num)=>{
    for(let i=0;i<num;i++){
        const column=document.createElement("div");

        for(let j=0;j<num;j++){
        const cell=document.createElement("div");
        cell.style="border:1px solid black;height:50px;width:50px;background-color:white";
        cell.addEventListener("mouseover",()=>{
            cell.style="border:1px solid black;height:50px;width:50px;background-color:black";

        })
        column.appendChild(cell);
    }
    container.append(column);
        
    }


}
createGrid(16);
    
    






