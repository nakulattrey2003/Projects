const bts = document.querySelectorAll('.button');
const body = document.querySelector('body');

bts.forEach(function(i){
    // console.log(i);
    i.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id  === 'greenyellow')
        {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id  === 'red')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id  === 'blue')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id  === 'orange')
        {
            body.style.backgroundColor = e.target.id;
        }
    });
});