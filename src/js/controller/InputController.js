import StockController from '../controller/StockController.js';
import {singleRecord, noResults} from '../view/ResultView.js';
function InputController(model)
{
    const form = document.querySelector('#search');
    let data="sy";


    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const timeSlot=e.target.querySelector("input[type=radio]:checked").value;
        const symbol=e.target.querySelector("input[type=text]").value;
        if(!timeSlot ||!symbol)
        {
            e.target.querySelector("input[type=radio]:checked").classList.add('is-invalid');
            e.target.querySelector("input[type=text]").classList.add('is-invalid');
        }else
        {
            e.target.querySelector
            e.target.querySelectorAll("input[type=radio]").forEach(x => x.classList.add('is-valid'));
            e.target.querySelector("input[type=text]").classList.add('is-valid');
    
            data ={
                symbol : symbol,
                timeSlot : timeSlot
            }

            const searchResults=model.search(data);


            const controller = new StockController(searchResults, singleRecord, noResults);
            controller;

            
        }   
    
        })

  
    



    console.log(data);
    // form.addEventListener('submit', (e)=>{
    // e.preventDefault();
    // const timeSlot=e.target.querySelector("input[type=radio]:checked").value;
    // const symbol=e.target.querySelector("input[type=text]").value;
    // if(!timeSlot ||!symbol)
    // {
    //     e.target.querySelector("input[type=radio]:checked").classList.add('is-invalid');
    //     e.target.querySelector("input[type=text]").classList.add('is-invalid');
    // }else
    // {
    //     e.target.querySelector("input[type=radio]:checked").classList.add('is-valid');
    //     e.target.querySelector("input[type=text]").classList.add('is-valid');

    //     data ={
    //         symbol : symbol,
    //         timeSlot : timeSlot
    //     }
    //     return data;
    // }   

    // })



}

export default InputController;