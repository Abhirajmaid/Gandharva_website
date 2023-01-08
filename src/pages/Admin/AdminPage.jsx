import React, {  useEffect, useState } from "react";
import Gradient from "../../components/Gradient/Gradient";
import "./stylepage.css";
import axios from 'axios';
import { CSVLink} from "react-csv";

function Userdata(){
    
    const [records, setRecords] = useState([]);
    // const [ViewEdit, SetEditShow] = useState(false)
    // const handleEditShow = () => { SetEditShow(true) }
    useEffect(() =>{
        
        axios.get("http://localhost:4080/adminpage").then((data)=>{
            var record = data.data;
            setRecords(record);
            console.log(record);
            
        })
        // axios.get("http://localhost:4080/exportdata");
        // axios.all([data,excel]).then(

        // )
        

    }, []);
       
              
    return (
                <>
                    <div className="page_container">
                        <Gradient
                            style={{
                                backgroundImage:
                                    "linear-gradient(to bottom, rgba(255, 0, 13, 1), rgba(255, 0, 0, 0))",
                            }}
                        />
                        
                            
                        <div className="App">
                           <table className="table table-striped table-hover" border="1"> 
                            <tr>
        
        <td >Name</td>
        <td >College</td>
        <td >Number</td>
        <td >Email</td>
        <td >Date</td>
        <td >Evenr Name</td>
        <td >Transaction ID</td>
        <td >Transactrion SS</td>
    </tr>
                                        {
                                            records.map((user)=>
                                            <tr>
                                                <td>{user.clgname}</td>
                                                <td>{user.email}</td>
                                                <td>{user.event}</td>
                                                <td>{user.name}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.date}</td>
                                                <td>{user.transid}</td>
                                                <td>{user.transss}</td>
                                            </tr>
                                           
                                            )
                                        }
                                        
                                    
        
                              
                            </table>
        
        
        
        
                        </div>
                    </div>
                    <CSVLink data={records} onClick={() => {}} style={{marginLeft:"1000px"}}>Export Data</CSVLink>
                </>
            );
}





  export default Userdata;
