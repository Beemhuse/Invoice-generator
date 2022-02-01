import './App.css';
import React, {useState, useEffect} from 'react';

const App = () => {
const [data, setData] = useState('')
const [data2, setData2] = useState('')
const [result, setResult] = useState()
const [divide, setDivide] =useState()
const [tax, myDivision] = useState()

const quantity=(quantity)=>{
setData(quantity.target.value)
}

const rate =(rate)=>{
  setData2(rate.target.value)

}
useEffect(() => {
  let subTotalFormatted=parseFloat(data*data2).toFixed(2); //"12.13"
  setResult(subTotalFormatted)
  console.log(subTotalFormatted)

},[data,data2])

const Tax =(divide)=>{
  setDivide(divide.target.value)
}

useEffect(() =>{
let myTax=parseFloat(result/100*divide).toFixed(2);
let myNewTax=result-myTax
myDivision(myNewTax)
console.log(myNewTax)
}, [result, divide])



  return (
    <body>
    <div className="myLogo">
<h4>+ Add Your Logo</h4>
</div>
<section className="section1">
<div className="invoice">Invoice</div>

<div className="myInvoice">
<input type="text" placeholder="1"/>
<div className="hashTag">#</div>
</div>  

</section>

<section className="section2">
<div className="myText">
<input type="text" placeholder=" Who is this invoice from?" className="inputField" />
<h4 className="bill">Bill To:</h4>
<input type="text" placeholder='Who is this invioce to?
(required)' className="textField"/>
</div>
</section>

<section className='section3'>
  <p className='date'>Date</p>
  <input type="text" className='inputDate'/>

  <p className="payment">Payment Terms</p>
  <input type="text" className='inputPayment'/>

<p className='due'>Due Date</p>
  <input type="text" className='inputDue'/>

  <p className='po'>PO Number</p>
  <input type="text" className='inputPo'/>

</section>
<section className="section3">
  <div className="box"></div>
  <p className="item">Item</p>
  <input type="text" placeholder="Description of service or product"  className="Description"/>

<p className="quantity">{data}Quantity</p>
<input className="inputQuantity" placeholder="1" onChange={quantity}/>
<p className="rate" >{data2}Rate</p>
<input className="rateInput" onChange={rate}/>
<p className="amount">Amount</p>
<p className="inputAmount" >${result}</p>

  <button className="lineItem">+ Line Item</button>
  </section>

<section className="section4">
<p className="notes">Notes</p>
<p className="subTotal">Subtotal</p>
<p className="inputSubtotal">${result}</p>

  <input type="text"  placeholder='Notes - any relevant information not already covered' className="notes2"/>
<p className="tax">Tax{divide}</p>
<input type="text" placeholder="0%        " className="inputTax" onChange={Tax}/>

  <p className="terms">Terms</p>
  <p className="total">Total</p>
  <p className="inputTotal">${tax}</p>
  <input type="text" className="terms2" placeholder="Terms and conditions - late fees, payment methods, delivery
schedule" />
<p className="amountP">Amount Paid</p>
<input type="text" placeholder="   %0" className="inputPaid"/>

<p className="balance"> Balance Due</p>
<p className="inputBalance">$0.00</p>


</section>


<section className="section5">
  <button className="sendInvoice">Send Invoice</button>
</section>
    </body>
      );
}
 
export default App;