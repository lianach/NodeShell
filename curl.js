const done=require("./bash")
module.exports=(url)=>{
const request=require('request');
request(url,function(err,res,body){
  if(err) done.func('Error!')
  else done.func(body);
});
}
