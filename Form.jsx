import React, {useState} from 'react';
import"./Form.css";
const Form=()=> {
    const [name, setName] = useState("");
    const handleName=(e)=>{
        console.log(e.target);
        setName(e.target.value);
    };

  const[email, setEmail] = useState("");
  const handleemail=(e)=>{
      setEmail(e.target.value);
  };

  const[password, setPassword] = useState("");
  const handlepassword=(e)=>{
      setPassword(e.target.value);
  };
  const handleSubmit=(e)=>{
      e.preventDefault();
      // console.log(name,email,password);
      // setName("");
      // setEmail("");
      // setPassword("");
      console.log(inputs);
  }
  const [inputs,setInputs] = useState({name:"",email:"",password:""});

const handleChange=(e)=>{
    console.log(e.target.name);
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
};
    return (
    <section>

        <form onSubmit={handleSubmit}>
           <input
               name="name"
               onChange={handleChange} value={inputs.name} type="text" placeholder="Name"/>
            <input
                name="email"
                    onChange={handleChange} value={inputs.email} type="email" placeholder="Email"/>
            <input
                name="password"
                onChange={handleChange} value={inputs.password} type="password" placeholder="Password"/>
            <button type="submit">Submit</button>
        </form>

    </section>
);
};
export default Form;