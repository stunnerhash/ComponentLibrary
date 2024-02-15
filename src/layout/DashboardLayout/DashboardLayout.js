import { useState } from "react";
import Grid from "../../components/Grid";

const Dashboard = () => {
  const [dataSource] = useState([
    {name:"Utkarsh", age:40, address:{houseNo:'1', street:''}},
    {name:"Kumar", age:30, address:{houseNo:'2', street:'sikandra road'}},
    {name:"Rhian", age:20, address:{houseNo:'3', street:''}},
    {name:"Venice", age:10, address:{houseNo:'4', street:'' }},
    {name:"Utkarsh", age:40, address:{houseNo:'4', street:''}},
    {name:"Kumar", age:30, address:{houseNo:'3', street:'sikandra road'}},
    {name:"Rhian", age:20, address:{houseNo:'2', street:''}},
    {name:"Venice", age:10, address:{houseNo:'1', street:'' }},
  ]);
  const [filters, setFilters] = useState({});
  const ageTemplate = (args) => {
    return (<div> {args.value} </div>)
  }
  return ( 
    <>
      <div className="table-container">
        <Grid 
          dataSource={dataSource}
          columns={[
            {field:'name',text:'Name', width:'20px', },
            {field:'age', text:'Age', width:'50px',name: 'age', template: ageTemplate},
            {field:'address.houseNo', text:'House No', width:'100px', },
            {field:'address.street', text:'Street', width:'50px', },
            {field:'name',text:'Name', width:'50px', },
            {field:'age', text:'Age', width:'50px', template:()=>{}},
            {field:'address.houseNo', text:'House No', width:'100px', template:()=>{}},
            {field:'address.street', text:'Street', width:'100px', template:()=>{}},
          ]}
          filters = {filters}
          pageLimit={4}
        />
      </div>
      <button 
        onClick={()=>
          setFilters(prev=>{
            return {...prev, name:['Utkarsh','Kumar']};
          })
        }
      >Click me</button>
    </>
  );
}

export default Dashboard;