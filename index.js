v//Tabular form:
 
import { useEffect, useState } from "react";
import "./tableFormStyle.css"
 
interface FormRow {
    firstname: string;
    lastname: string;
    city: string;
    email: string;
}
 
const TableForm = ()=>{
 
    const [formData, setFormData] = useState<FormRow[]>([{firstname: "", lastname: "", city: "", email:""}]);
 
    const handleAddRow = ()=>{
        let formDataLocal = [...formData, {firstname: "", lastname: "", city: "", email:""}];
        // console.log("Form-data-local: ", formDataLocal);
        setFormData(formDataLocal);
        // console.log("after-form-data: ");
    }
 
    const handleDeleteRow = ()=>{
        let formDataLocal = [...formData];
        formDataLocal.pop();
        // console.log("Form-data-local: ", formDataLocal);
        setFormData(formDataLocal);
        // console.log("after-form-data: ");
    }
 
    const handleInput = (event: any, index: number, inputName: string)=>{
        // console.log("Event: ", event, "index: ", index, "inputName: ",inputName);
        if(event.target){
            let formDataLocal = [...formData];
            if(inputName === "firstname" || inputName === "lastname" || inputName === "city" || inputName === "email"){
                formDataLocal[index][inputName] = event.target.value;
            }
            setFormData(formDataLocal);
        }
    }
 
 
    const handleOnSubmit = (event: any)=>{
        event.preventDefault();
        console.log("Form-data-on-submit: ", formData);
    }
 
    return(
        <>
            {
                formData.length > 1 && <button onClick={handleDeleteRow}>{"-"}</button>
            }
            <form onSubmit={handleOnSubmit}>
                <table>
                    <thead>
                        <tr>
                            <td>firstname</td>
                            <td>lastname</td>
                            <td>city</td>
                            <td>email</td>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                formData.map((data, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td><input onChange={(event)=>{handleInput(event, index, "firstname")}} value={formData[index].firstname} placeholder="firstname"/></td>
                                            <td><input onChange={(event)=>{handleInput(event, index, "lastname")}} value={data.lastname} placeholder="lastname"/></td>
                                            <td><input onChange={(event)=>{handleInput(event, index, "city")}} value={data.city} placeholder="city"/></td>
                                            <td><input onChange={(event)=>{handleInput(event, index, "email")}} value={data.email} placeholder="email"/></td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleAddRow}>{"+"}</button>
        </>
    )
}
 
export default TableForm;