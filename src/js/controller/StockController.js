import ejs from 'ejs';
function StockController(searchResults, resultsView, noResultView)
{

    
    
    this.searchResults = searchResults.then(res=> {
        let search = [...res];
        console.log(search);
        this.displayInput(search);

    });
    this.resultsView = resultsView;
    this.noResultView = noResultView;
    this.container = document.querySelector(".results");


     
    




    this.displayInput=function (search) 
    {
        this.removeChildElements();
        if(search.length == 0)
        {
            const elem = ejs.render(this.noResultView);
            this.document.insertAdjacentHTML('afterbegin', elem)
        }else
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
        this.container.querySelectorAll('.card').forEach(item =>{
            this.container.removeChild(item);
        })
    }
}

export default StockController;