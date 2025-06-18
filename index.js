import express from "express";
import mongoose from "mongoose";
import path from "path";
import multer from "multer";
import File from "./model/file.js";

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/fileUploads").then(() => console.log("✅ MongoDB Connected"))


const storage =multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null,"./uploads");
    },
    filename: function(req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
})


const upload = multer({storage});

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use("/uploads", express.static("uploads")); // iski wjh se upload hua rhega wo frontend pr dekh skte h..!
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    return res.render("homepage");
});
  


app.post("/upload", upload.single("myfile"), async (req, res) => {
  const fileData = new File({
    originalName: req.file.originalname,
    storedName: req.file.filename,
    path: req.file.path,
    size: req.file.size
  });



  await fileData.save();
  return res.redirect(`/success/${fileData._id}`);
});



app.get("/success/:id", async (req, res) => {
  const file = await File.findById(req.params.id);
  return res.render("success", { file });
});

app.get("/files", async (req, res) => {
  const files = await File.find().sort({ uploadDate: -1 });
  res.render("fileList", { files });
});


app.get("/download/:id", async (req, res) => {
  const file = await File.findById(req.params.id);
  if (!file) return res.status(404).send("File not found");
  res.download(file.path, file.originalName);
});




app.listen(PORT,()=>{console.log("SERVER STARTED ON PORT 8000")});