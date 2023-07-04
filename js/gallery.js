

const list = document.querySelector('.gallery__list');
      items = document.querySelectorAll('.gallery__item')
      listItems = document.querySelectorAll('.button-gallery')

function filter() {
  list.addEventListener('click', event=>{
    const targetID = event.target.dataset.id;
    const target = event.target;
    
    if(target.classList.contains('button-gallery')){
        listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')
    }


    switch(targetID){
        case 'all':
            getItems('gallery__item')
            break
        case 'zone':
            getItems(targetID)
            break
        case 'scenery':
            getItems(targetID)
            break
    }
  })
}
filter()


function getItems(className){
    items.forEach(item=>{
        if(item.classList.contains(className)){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
}

document.querySelectorAll('.gallery__content img').forEach(img => {
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src');
    }
});

document.querySelector('.pop-up span').onclick = () =>{
    document.querySelector('.pop-up').style.display = 'none';
}