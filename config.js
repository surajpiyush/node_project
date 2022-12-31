const mysql=require('mysql')
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'piyush9648@',
    database:'mydata'
})
con.connect((err)=>{
    if(err){
        console.log('error')
    }
    else{
        console.log('connected')
    }
})
module.exports=con;