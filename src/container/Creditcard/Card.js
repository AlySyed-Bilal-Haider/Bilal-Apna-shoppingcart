import React,{useState} from 'react';
import Cards from 'react-credit-cards';
import '../../App.css';
import "react-credit-cards/es/styles-compiled.css";
function CreditCard() {
const [number, setNumber] = useState('');
const [name, setName] = useState('');
const [expiry, setExpiry] = useState('');
const [cvc, setCvc]= useState('');
const [focus, setFocus] = useState('');            
  return (
    <div>
        <Cards
 number={number}
  name={name}
  xpiry={expiry}
  cvc={cvc}
  focused= {focus}/><br/>
 <form style={{ color:'black' }}>
  <input className="m-2 rounded border-0" type='tel' name='number' placeholder='Card Number' value={number} onChange={(e)=>setNumber(e.target.value)}
   onFocus={(e)=>setFocus(e.target.name)}/>
    <input type='text' className="m-2 rounded border-0"  name='name' placeholder='Card name' value={name} onChange={(e)=>setName(e.target.value)}
   onFocus={(e)=>setFocus(e.target.name)}/><br/>
    <input type='text' className="m-2 rounded border-0" name='expiry' placeholder='Card Experiy date' value={expiry} onChange={(e)=>setExpiry(e.target.value)}
   onFocus={(e)=>setFocus(e.target.name)}/>
    <input type='tel' className="m-2 rounded border-0" name='cvc' placeholder='Card Number' value={cvc} onChange={(e)=>setCvc(e.target.value)}
   onFocus={(e)=>setFocus(e.target.name)}/><br/>
   </form>
    </div>
  )
}

export default CreditCard