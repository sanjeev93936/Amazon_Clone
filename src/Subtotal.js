import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider"
import { getBasketTotal } from './reducer';
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const history =useNavigate();
  const [{ basket }, dispatch] = useStateValue(); 
  return (
   
    <div className='subtotal'>
      <CurrencyFormat 
       
       renderText={value => (<div>
        <p >
          subtotal({basket.length} items):<strong>{value}</strong>
        </p>
        <small className="subtotal__gift">
                    <input type="checkbox" />
                    This order contains a gift.
                    </small>

       </div>)}

       datatype='2'
       value={getBasketTotal(basket)} 
       displayType={'text'} 
       thousandSeparator={true} 
       prefix={'₹'} 
        />
      <button onClick={e => history('/payment')}>Proceed to check out</button>
    </div>
  )
}

export default Subtotal
