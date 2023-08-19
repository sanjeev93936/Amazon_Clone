import React from "react";
import { useEffect } from "react";
import './App.css';
import Login from './Login';

import {
   BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase';
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51NaNBCSBt6epGL28zkfEzy1b0bV4HmTt8Sf4kNstP0QrfXffAyRCRGcktlkQypn4evZVZbirOYnDoss7aF5euIOl00sHXO51aQ"
);

function App() {
   const [{user},dispatch]=useStateValue();

  useEffect(() => {
   const unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        });
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    }
    );
    return ()=>{unsubscribe();
    }
  }, [])
  
console.log(user);

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/checkout" element={ 
      <Checkout/>} 
      />
     <Route path="/payment" element={    
       <Elements stripe={promise }>
        <Payment />
      </Elements>
       }/>
          <Route path="/orders" element={ 
      <Orders/>} 
      />
      <Route path="/" element={ 
            <Home/>} />
      <Route path="/login" element= {
           <Login/>
       }/>
    <Route path="/" element= { 
         <Home/>
      }/>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
