const nav = document.querySelector('.mobile-nav');
    const navBtn = document.querySelector('.menu');
    const closeBtn = document.querySelector(".close")
    const link = document.querySelector(".mobile-nav__list")
    
    navBtn.onclick = ()=>{
        nav.classList.toggle('open')
    }
    
    closeBtn.onclick = () => {
        nav.classList.toggle('open')
    }

    link.onclick = () => {
      console.log(1)
      nav.classList.toggle('open')
    }