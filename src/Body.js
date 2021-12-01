import React, {useEffect, useState} from 'react';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function Body() {

    const[items, setItems] = useState([]); 

    function getMeals(){

    }

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(response => {
            console.log(response.data);
            setItems(response.data.meals);

        }).catch(error => {
            console.log(error);

        })

    }, []);

    const itemsList = items.map((obj)=> {
        return(
            <div className="row col-md-3" style={{borderRadius:'10px'}}>
                <p style={{fontWeight: 'bold',margin:'10px 0px 0px 25px',alignItems: 'center'}}>{obj.strMeal}</p>
                <img src={obj.strMealThumb} className='img-fluid' style={{marginLeft:'35px',borderRadius:'10px', height:'300px',width:'300px'}} />
                <p style={{ textDecorationLine: 'underline', fontWeight:'bold', fontSize:'12px'}}>Id- {obj.idMeal}</p>
            </div>
        );
        
    })



    return (
        <div>
            <div className='row'>
                {itemsList}
            </div>
        </div>
    );
}

export default Body;