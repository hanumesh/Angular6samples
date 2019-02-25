let ex = require("express");
let webServer = ex();
let cors = require("cors")


webServer.use(ex.static("app3"));


webServer.use(cors());

webServer.listen(3000);

//enable CORS;

// create restful services for books (GET, POST, PUT, DELETE)
let books = [
  { id: 1, title: "T1", author: "Hanumesh", price: 350, status : ""},
  { id: 2, title: "T2", author: "Hanumesh", price: 350, status : "" },
  { id: 3, title: "T3", author: "Hanumesh", price: 350, status : "" },
  { id: 4, title: "T4", author: "Hanumesh", price: 350, status : "" },
  { id: 5, title: "T5", author: "Hanumesh", price: 350, status : "" }
];
webServer.get("/books", function(request, response) {
    setTimeout(() =>{
        response.json(books); // JSON serilaization
    }, 1000
    );
 
});

webServer.post("/books", function(request, response) {});

webServer.put("/books", function(request, response) {});

webServer.delete("/books", function(request, response) {
  request.delete(books.id);
});
