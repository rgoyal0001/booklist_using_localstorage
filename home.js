
document.getElementById("add").addEventListener("click",myFunction)
let data=JSON.parse(localStorage.getItem("book_list")) || []
function myFunction(){
  let  bookName=document.querySelector("#bookName").value;
   let authorName=document.querySelector("#authorName").value;
   let bookDesc=document.querySelector("#bookDesc").value;
   let date=document.querySelector("#date").value;
   let select=document.querySelector("#select").value;
   let price=document.querySelector("#price").value
let obj={
       BookName:bookName,
       AuthorName:authorName,
       BookDesc:bookDesc,
       Date:date,
       Select:select,
       Price:price
    }
    console.log(obj)
    data.push(obj)
     localStorage.setItem("book_list",JSON.stringify(data))
}