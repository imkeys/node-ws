const WebSocket = require('ws');
const wss = new WebSocket.Server({
  port: 9090
}); // 服务器端口
console.log('服务已启动 http://localhost:9090')

wss.on('connection', ws => {
  console.log('server: receive connection.');
  ws.on('message', message => {
    console.log('server: received:', message);
  });
  // 处理异常
  ws.on('error', error => {
    console.log(error)
  });
  // 处理关闭
  ws.on('close', closed => {
    console.log(closed)
  })
  //  主动发送信息
  ws.send(ws);
  // var index=0
  // setInterval(()=>{
  //   ws.send(`testMessage${++index}`)
  // },2000)
});
