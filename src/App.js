import { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    FirstName : '',
    LastName : '',
    email : ''
    });
//  initial value in the useeffect an empty obj.


// console.log(setName)

const handleChange = (e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setInputs({...inputs, [name]: value})

  // here we have make two variables for targeting the value and name attribute. and setter function to spread the object and set the attribute a dinamic value using bracket notation.
  // this is for onchange event

}

// const LastNamehandleChange = (e)=>{
//   setInputs(inputs =>({...inputs, LastName : e.target.value}))
// }

// const emailhandleChange = (e)=>{
//   setInputs(inputs =>({...inputs, email : e.target.value}))
// }

 const submitHandler = (e)=>{
   e.preventDefault()
  //  it will defend the default behaviour of reloading the page.
   setInputs({FirstName:'',LastName:'',email:''})
  // alert('submited!!');
 }
  return (<>  
     <form onSubmit={submitHandler}>
     <h1>Registration Form</h1>
    <div className="container">
      {/* <h1>helo bachooo</h1> */}
      <input value={inputs.FirstName} onChange={handleChange}
    // extracted the values using . operator from the object set by the setter funxction 
      name='FirstName'
       type="text" placeholder='First Name' />
      <input value={inputs.LastName} onChange={handleChange}
      name='LastName' 
       type="text" placeholder='Last Name' />
      <input value={inputs.email} onChange={handleChange}
       name='email'
       type="email" placeholder='Email' />
     <button type='submit'>Register</button>
    </div>
    </form>
    </>
  );
}

export default App;
