const datacounter=document.querySelectorAll(".counter")
datacounter.forEach(c=>{
    update(c);
})
function update(elem){
    const target=elem.getAttribute('dtarget');
    let count=1;
    const inc=200;
    setInterval(()=>{
        if(count+inc<target){
            count+=inc;
            elem.innerHTML=count;
        }
        else{
            elem.innerHTML=target;
        }

    },1)
}
