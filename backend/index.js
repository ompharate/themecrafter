import app from "./config/server.js";
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) =>{
  res.send("server is running!");
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});