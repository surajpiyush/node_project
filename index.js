// const express = require("express");
// const con = require("./config");
// const app = express();
// app.use(express.json())
// app.get("/", (req, res) => {
//   con.query("select * from post", (err, result) => {
//     if (err) {
//       res.send("error");
//     } else {
//       res.send(result);
//     }
//   });
// });



// app.post("/",(req,resp)=>{
//     const data=req.body;
//     con.query("INSERT INTO post SET?",data,(error,results,fields)=>{
//       if(error) throw error;
//       resp.send(results)
//     })
//   });
  


// app.put("/:ID",(req,res)=>{
//   const data=[req.body.NAME,req.body.CITY,req.body.EMAIL,req.params.ID]
//   con.query('update crud set NAME=?,CITY=?,EMAIL=? where ID=?',data,(err,result,fields)=>{
//     if(err) throw err;
//     res.send(result)
//   })
// })

// app.delete('/:ID',(req,res)=>{
//   con.query("delete from crud where ID="+req.params.ID,(err,result)=>{
//     if(err) throw err;
//     res.send(result)
//   })
// })


// app.listen(3000);




const express=require('express');
const multer=require('multer')
const con=require('./config');
const app=express();
app.get('/',(req,res)=>{
  con.query('select * from post',(err,result)=>{
    if(err) throw err;
    res.send(result)
    
  })
})



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
   
    cb(null, file.fieldname + '-' + Date.now()+".jpg")
  }
})

const upload = multer({ storage: storage }).array('user_pic',3);

app.post('/',upload,(req,res)=>{
  res.send('file uploaded')
})

app.listen(3000)