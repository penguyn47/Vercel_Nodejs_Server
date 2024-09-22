const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {

    res.json({
        message: "Server hosted successfully",
        subject: "Web application development",
        students: [
            {id:"22120181", name:"Nguyễn Duy Lâm"},
            {id:"22120183", name:"Nguyễn Đặng Minh Lân"},
            {id:"22120186", name:"Huỳnh Tấn Lộc"},
        ]
    });
})

app.listen(port, ()=>{
    console.log(`Server hosted on port ${port}`);
})