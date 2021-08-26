let data;
function fetchData(){
    setTimeout(
        ()=>{
            data={sid:1001,sName:"Sushama"};
        },
        2000)
    

    }
   function display(){
       console.log(data);
       console.log("End");
   }
   console.log("start")
   fetchData();
   display();