const container=document.querySelector(".container");
const parent=document.querySelector(".parent");
containerArea=450*450;
// initalCellHeight=Math.floor(Math.sqrt(containerArea)/16);
let createGrid=(num)=>{
    for(let i=0;i<num;i++){
        initalCellHeight=Math.floor(Math.sqrt(containerArea)/num);
        
        const column=document.createElement("div");

        for(let j=0;j<num;j++){
        const cell=document.createElement("div");
        cell.style.border="1px solid black";
        cell.style.backgroundColor="white";
        cell.style.height=initalCellHeight.toString()+"px";
        cell.style.width=initalCellHeight.toString()+"px";
        cell.addEventListener("mouseover",()=>{
            cell.style.border="1px solid black";
            cell.style.backgroundColor="black";
            cell.style.height=initalCellHeight.toString()+"px";
            cell.style.width=initalCellHeight.toString()+"px";

        })
        column.style.maxWidth=initalCellHeight+"px";
        column.style.maxHeight="450 px";
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
createGrid(16);
    
    






