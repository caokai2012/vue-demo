/* 通过node 来创建服务器的数据的处理 */
let http = require('http');
const userList = [
    {username:'user',password:'123456',role:'1'},
    {username:'user1',password:'123456',role:'2'},
    {username:'user2',password:'123456',role:'2'},
];
let server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8' });
    let allData = '';
    req.on('data',(chunk)=>{
        allData += chunk;
    });
    req.on('end',()=>{
        let data = JSON.parse(allData);
        for ( item of userList){
            if(item.username === data.username && data.password === '123456'){
                res.end(`{"role":${item.role},"suc":"succes"}`);
            }
        }
        res.end('fail');
    });
});

server.listen(3000,()=>{
   console.log('监听3000端口成功!');
});



