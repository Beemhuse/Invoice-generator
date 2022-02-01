import React, {useState}  from 'react';




function Quantity() {
    const [data, setData] = useState();
    const [name, setName] = useState("");
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value);
        let result = value; 
        setData(result)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        console.log(name, value)
    }
    return (
      <div>
          <p className="quantity">{data}Quantity</p>
          <form onSubmit={handleSubmit}>
            <input className="inputQuantity" placeholder=""  name="firstValue" onChange={handleChange}/>
            <input className="inputQuantity" placeholder=""  name="secondValue" onChange={handleChange}/>
            <input type="submit" value="submit"/>
          </form>
      

<form>
<label>Enter your name:
  <input
    type="text" 
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
</label>
</form>
</div>
)

    


  }

export default Quantity;

