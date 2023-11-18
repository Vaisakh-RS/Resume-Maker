import { useState } from "react"

export default function PersonalDetailsForm()
{

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        number:''
    });

    const [submittedData,setSubmittedData]=useState(null);

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmittedData(formData);
    };


    return(
        <div>
            <form onSubmit={handleSubmit}>
                Name:<input type="text" id="name" name="name" required onChange={handleChange}/>
                Email:<input type="email" id="email" name="email" required onChange={handleChange} />
                Phone:<input type="number" id="number" name="number" required onChange={handleChange}/>
                <button type="submit" id="submitButton">Add</button> 
                <button>Clear</button>
            </form>

            {submittedData && (
                <div>
                <h2>Submitted Data</h2>
                <p>Name: {submittedData.name}</p>
                </div>
            )}
        </div>
      
    );
};