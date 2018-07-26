let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.classList.add('big');

btn.addEventListener('click', function(){
    let item = document.createElement("button");
    item.classList.add('item-box');
    item.innerText = input.value;
    document.body.appendChild(item);
    
    item.addEventListener('click', function(){
        document.body.removeChild(item);
    })

    input.value = "";
})