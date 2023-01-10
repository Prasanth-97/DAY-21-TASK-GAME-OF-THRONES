
let buttons = document.getElementsByClassName("btn");
let books = document.getElementById("books");

getbooks = () => {
   fetch("https://anapioficeandfire.com/api/books")
   .then(res => res.json())
   .then(data => {
             books.innerHTML = ``; 
           for(let i=0 ; i < data.length ; i++){
             books.innerHTML += `
            <div class="bookdata">
               <p>Book${i+1}</p>
               <h3>${data[i].name}</h3>
               <p>Author : ${data[i].authors[0]}</p>
                <p>No of pages : ${data[i].numberOfPages}</p>
                <p>publisher : ${data[i].publisher}</p>
                <p>URL :<a href="${data[i].url}">go to book${i+1}</a></p>               
            </div> `
           }       
   });
}