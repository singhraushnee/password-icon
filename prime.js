let c=document.getElementById('close')
let p=document.getElementById('password')


let showpass=function (){
    if(p.type=="password")
    {
        p.type="text"
        c.src="open.jpg"
    }
    else
    {
        p.type="password"
        c.src="close.jpg"
    }
}
c.onclick=showpass
