class  NotValidAge extends Error{
    constructor(args)
    {
        super(args);
        this.name="NotValidAge";
    }
}
function checkAge()
{
    let age=17;
    if(age>=18)
    {
        console.log("valid for voting");
    }
    else{
        throw new NotValidAge ("age is <18");
    }
}
checkAge()
