var allData=JSON.parse(localStorage.getItem("book_list"))
display(allData)
console.log(allData)
var addData=JSON.parse(localStorage.getItem("buy-list")) || []
var bookmark=JSON.parse(localStorage.getItem("bookmark-list")) || []

document.querySelector("#sortInput").addEventListener("change",function(){
    console.log("hello")
    var sort =document.querySelector("#sortInput").value;
    // console.log(sort)
    allData.sort(function(a,b){
        console.log(allData)
        if(sort=="lowtohigh"){
            return a.price-b.price
        }
        return b.price-a.price
    })
    display(allData)
})





function display(allData){
    allData.forEach((element,i )=> {
        var row=document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerText=element.BookName;
    
        var td2=document.createElement("td")
        td2.innerText=element.AuthorName;
        var td3=document.createElement("td")
        td3.innerText=element.BookDesc;
        var td4=document.createElement("td")
        td4.innerText=element.Date;
        var td5=document.createElement("td")
        td5.innerText=element.Select;
        var td6=document.createElement("td")
        td6.innerText=element.Price;
        var td7=document.createElement("td")
        td7.innerText="Buy";
        td7.addEventListener("click",function(){
            console.log("1")
            allData.splice(i,1)
            localStorage.setItem("buy-list",JSON.stringify(addData))
    
            
        })
        var td8=document.createElement("td")
        td8.innerText="Bookmark";
        td8.addEventListener("click",function(){
            allData.splice(i,1)
            localStorage.setItem("bookmark-list",JSON.stringify(bookmark))
            
        })
       
        row.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("#tableBody").append(row)
    });
}