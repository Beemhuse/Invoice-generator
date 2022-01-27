import './App.css';
import React from 'react'

const App = () => {
  return (
    <body>
    <div className="myLogo">
<h4>+ Add Your Logo</h4>
</div>

<div className="invoice">Invoice</div>

<div className="myInvoice">
<input type="text" placeholder="1" />
<div className="hashTag">#</div>
</div>

<div className="">
<input type="text" placeholder=" Who is this invoice from?" className="inputField" />
<h4>Bill To:</h4>
<input type="text" placeholder='Who is this invioce to?
(required)' />
</div>



    </body>
      );
}
 
export default App;