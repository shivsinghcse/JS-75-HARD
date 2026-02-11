const openMenubar = () => {
    const menubarBtnEle = document.getElementById('menubar-btn').firstElementChild
    const asideEle = document.getElementById('aside')
    const sectionEle = document.getElementById('section')

    const isOpen = asideEle.style.width === '280px' ? true : false

    if(isOpen){
        asideEle.style.width = '0px'
        menubarBtnEle.classList.replace('ri-close-large-line', 'ri-menu-line')
        document.body.style.overflow = 'auto'
    }else{
        asideEle.style.width = '280px'
        menubarBtnEle.classList.replace('ri-menu-line', 'ri-close-large-line')
        document.body.style.overflow = 'hidden'
    }
    
}