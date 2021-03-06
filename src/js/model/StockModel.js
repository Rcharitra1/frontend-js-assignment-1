import ApiKey from '../keys.js';
function StockModel()
{
    this.apiBaseUrl = 'https://www.alphavantage.co/query?';
    this.init = function ()
    {
        const result = this.query(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BA&interval=5min&apikey=${ApiKey}`)
        return result;
    }


    this.search = async function (data)
    {
        const {timeSlot, symbol}={...data};
        let url =new URL(this.apiBaseUrl)
        const params = new URLSearchParams();
        params.set('function', 'TIME_SERIES_INTRADAY');
        params.set('symbol', symbol)
        params.set('interval', timeSlot)
        params.set('apikey', ApiKey);
        url = url + params;

        const req = await fetch(url);
        let res = await req.json();
       
        console.log(Object.keys(res))

        // console.log(error);
        let objArray = [];
        if(Object.keys(res).includes("Error Message") || Object.keys(res).includes("Note") || Object.keys(res).length===0){
            
            console.log(Object.values(res));
            
            if(Object.keys(res).includes("Note"))
            {
                let tooManyApiCalls = {

                    error: Object.values(res)

                }

                objArray.push(tooManyApiCalls);
                res = null;
            }
            res = null;
        }
        
        
        if(res !==null)
        {
            const timeSeries = res[`Time Series (${timeSlot})`];
            const metaData = res['Meta Data'];
    
            const stockDataDaily = Object.values(timeSeries);
            const stockDataGeneral =Object.values(metaData);

            const timeArray=Object.keys(timeSeries);



    
            
        
            
    
            const FirstObjFromAPI =
            {
                symbol : stockDataGeneral[1],
                open : parseFloat(stockDataDaily[0]['1. open']),
                close: parseFloat(stockDataDaily[0]['4. close']),
                difference:'',
                display:'',
                time: timeArray[0].split(" ")[1]
               
                
                
            } 
            
            FirstObjFromAPI.difference = FirstObjFromAPI.close - FirstObjFromAPI.open;
            FirstObjFromAPI.display = (FirstObjFromAPI.difference >=0? 'bg-success': 'bg-danger')

            
            
    
            let size = stockDataDaily.length;
            size--;
            const LastObjFromAPI =
            {
                symbol : stockDataGeneral[1],
                open : parseFloat(stockDataDaily[size]['1. open']),
                close: parseFloat(stockDataDaily[size]['4. close']),
                difference: '',
                display:'',
                time: timeArray[size].split(" ")[1]
            } 
    
            LastObjFromAPI.difference = LastObjFromAPI.close - LastObjFromAPI.open;
            LastObjFromAPI.display = (LastObjFromAPI.difference>=0 ? 'bg-success':'bg-danger')
    
            
            objArray.push(FirstObjFromAPI);
            objArray.push(LastObjFromAPI);
            
        }

        return objArray;
    

    }

   
    this.query = async function (url)
    {
        const req = await fetch(url);
        const res = await req.json();
        console.log(res);

        let data = {...res};

        const metaData = data['Meta Data'];

        const timeSeries = data['Time Series (5min)']
        const timeSeriesArray = Object.values(timeSeries);
        const timeArray =Object.keys(timeSeries);

        console.log(timeArray[0])
        console.log(timeArray[99])

        console.log(timeSeriesArray[0])
        console.log(timeSeriesArray[99]);
        console.log(timeArray[2]);

        
        return res;
    };
    return this;
}

export default StockModel;