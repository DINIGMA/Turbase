const buttonBrone = document.querySelector("#brone");
console.log(buttonBrone);


buttonBrone.onclick = () => {
    document.querySelector('.pop-up-brone').style.display = 'block';
}

document.querySelector('.pop-up-brone span').onclick = () =>{
    document.querySelector('.pop-up-brone').style.display = 'none';
}