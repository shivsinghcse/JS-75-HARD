const toggleModal = () => {
    const modal = document.querySelector('#modal')
    const isModalHidden = modal.classList.contains('hidden')
    
    if(isModalHidden){
        modal.classList.toggle('hidden')
        document.body.style.overflow = 'hidden'
    }else{
        modal.classList.toggle('hidden')
        document.body.style.overflow = 'auto'
    }
}