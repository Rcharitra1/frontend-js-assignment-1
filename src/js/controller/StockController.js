import ejs from 'ejs';
function StockController(searchResults, resultsView, noResultView, maxLimit)
{

    
    
    this.searchResults = searchResults.then(res=> {
        let search = [...res];
        this.displayInput(search);

    });
    this.resultsView = resultsView;
    this.noResultView = noResultView;
    this.maxLimit = maxLimit;
    this.container = document.querySelector(".results");


     
    




    this.displayInput=function (search) 
    {
        this.removeChildElements();
        
        if(search.length===0)
        {
    
            const elem = ejs.render(this.noResultView);
            this.container.insertAdjacentHTML('afterbegin', elem);
        }
        else if(search.length==1)
        {
            
            let tooManyApiCalls = search[0];

            console.log(tooManyApiCalls)
            const elem = ejs.render(this.maxLimit, {tooManyApiCalls : tooManyApiCalls});
            this.container.insertAdjacentHTML('afterbegin', elem);
        }
        else
        {
            let searchArray =[...search];

            searchArray.forEach(record => {
                const elem = ejs.render(resultsView, {record: record});
                this.container.insertAdjacentHTML('afterbegin',elem);
            })

        }
    }

    

    this.removeChildElements = function () 
    {
        this.container.querySelectorAll('.col-6').forEach(item =>{
            this.container.removeChild(item);
        })

        this.container.querySelectorAll('.alert')
        .forEach(item=>{
            this.container.removeChild(item);
        })
    }
}

export default StockController;