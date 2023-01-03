const form = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading.....';
    messageTwo.textContent = ' ';

    fetch(`http://localhost:8000/weather?address=${location}&limit=1`).then((response)=>{
        response.json().then((res)=>{
            if(res.error){
                messageOne.textContent = `Error - ${res.error}`;
            }
            else{
                messageOne.textContent = location;
                messageTwo.textContent = res.message;
            }
        })
    })
})