const toggeAccordion = (active) => {

    const accordionData = document.querySelectorAll('.accordion-data')
    const arrow = document.querySelectorAll('.arrow-icon')
    const headers = document.querySelectorAll('.accordion-header')

    const currentAccordionData = active.nextElementSibling
    const currentArrow = active.querySelector('.arrow-icon')

    const isClosed = currentAccordionData.style.maxHeight

    accordionData.forEach((data)=> {
        data.style.maxHeight = '0px'
        data.classList.add('opacity-0')
    })

    arrow.forEach((arr)=>{
        arr.classList.remove('rotate-180')
    })

    headers.forEach((header) => {
        header.classList.replace('bg-gray-400','bg-gray-300')
    })


    
    
    if(isClosed === '0px'){
        currentAccordionData.style.maxHeight = currentAccordionData.scrollHeight+'px'
        currentAccordionData.classList.remove('opacity-0')
        currentArrow.classList.add('rotate-180')
        active.classList.replace('bg-gray-300','bg-gray-400')
    }
    else{
        currentAccordionData.style.maxHeight = '0px'
        currentAccordionData.classList.add('opacity-0')
        currentArrow.classList.remove('rotate-180')
        active.classList.replace('bg-gray-400','bg-gray-300')
    }
    
}