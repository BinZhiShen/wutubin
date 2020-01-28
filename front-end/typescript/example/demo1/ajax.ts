// interface Config {
//   type:string;
//   url:string;
//   data?:string;
//   dataType:string;
// }

// function ajax(config:Config){
//   let xhr = new XMLHttpRequest();
//   xhr.open(config.type,config.url,true)
//   xhr.send(config.data)

//   xhr.onreadystatechange = function(){
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(xhr.responseText)
//     }
//   }
// }
// let obj = {
//   type:'get',
//   url:'http://a.itying.com/api/productlist',
//   data: '',
//   dataType: 'json'
// }
// ajax(obj)


