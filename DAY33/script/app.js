
const setData = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const key = form.key.value.trim();
    const value = form.value.value.trim();

    localStorage.setItem(key, value);
    e.target.reset()
}

const getData = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const key = form.key.value.trim();
    const result = document.getElementById('result');
    const value = localStorage.getItem(key);
    
    result.textContent = value ? `${key} : ${value}` : `No value exist for key : ${key}`;

    value ? ` ${result.classList.add('bg-green-300')} ${result.classList.remove('bg-red-300')}` : `${result.classList.remove('bg-green-300')} ${result.classList.add('bg-red-300')}`
    result.classList.remove('hidden');
    e.target.reset()
    
}


const getAllData = () => {
    const keys = Object.keys(localStorage);
    const result = document.getElementById('all-data');
    
    for(let key of keys){
        result.innerHTML += `<li class="bg-green-200 text-zinc-700 py-1 px-4 rounded font-medium list-none w-full">${key} : ${localStorage.getItem(key)}</li>`
    }
}

const deleteData = (e) => {
    e.preventDefault();
    
    const form = e.target.elements;
    const key = form.key.value.trim();
    const result = document.getElementById('delete-result');
    const value = localStorage.getItem(key);
    
    if(value){
        localStorage.removeItem(key);
    }

    result.textContent = value ? `Data delete` : `No value exist for key : ${key}`;

    value ? ` ${result.classList.add('bg-green-300')} ${result.classList.remove('bg-red-300')}` : `${result.classList.remove('bg-green-300')} ${result.classList.add('bg-red-300')}`
    result.classList.remove('hidden');
    e.target.reset()
    
}

const clearData = () => {
    const result = document.getElementById('clear-result');
    result.classList.remove('hidden')
    localStorage.clear();
}