const express= require ("express")
const app= express();
const path= require ("path");
app.use(express.static(path.resolve(__dirname, "./public")));


app.listen(process.env.PORT||3000, function() {
    console.log("Corriendo en http://localhost:3000")
  });
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
  }); 
  
  app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath)
})

app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPath)
})

app.post("/login", (req, res) => {
    res.send("Llegó el formulario de login");
})

app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
})

app.post("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
})


app.get("/shopping.html", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/full.html");
    res.sendFile(htmlPath)
})

app.post("/shopping.html", (req, res) => {
    console.log("Llegó el formulario completo");
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
})

app.get("/search.html", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/search.html");
    res.sendFile(htmlPath)
})
app.post("/search", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
})
