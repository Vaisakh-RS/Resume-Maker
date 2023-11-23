import { useState } from "react"
import { PDFViewer } from '@react-pdf/renderer'
import {ResumeLayout} from "../components/ResumeLayout"
import "../styles/pdf.css"

export default function PersonalDetailsForm()
{

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        linkedin:'',
        github:''
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
                LinkedIn:<input type="text" id="linkedin" name="linkedin" required onChange={handleChange}/>
                Github:<input type="text" id="github" name="github" required onChange={handleChange}/>
                <button type="submit" id="submitButton">Add</button> 
                <button>Clear</button>
            </form>

            <PDFViewer className="pdf">
                <ResumeLayout className="pdf" 
                name={formData.name}
                email={formData.email}
                linkedin={formData.linkedin}
                github={formData.github}
                />
            </PDFViewer>
           
        </div>
      
    );
}