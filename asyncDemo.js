function asyncDemo()
{
    for(var count=0;count<10;count++)
    {   setTimeout(
         ()=>{console.log(count)},
         2000);
       
    }
}
asyncDemo()