let data;
function fetchData(cb){
    setTimeout(
        ()=>{
            data={sid:1001,sName:"Sushama"};
            cb();
        },  
        2000)
    

    }
   function display(){
       console.log(data);
       console.log("End");
   }
   console.log("start")
   fetchData(display);
   