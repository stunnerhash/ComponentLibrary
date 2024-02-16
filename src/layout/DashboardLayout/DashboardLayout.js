import { useState } from "react";
import Grid from "../../components/Grid";

const ageTemplate = (args) => {
  return (<div> {args.value} </div>)
}
const defaultDataSource = [
  {name:"Utkarsh", age:40, address:{houseNo:'1', street:''}},
  {name:"Kumar", age:30, address:{houseNo:'2', street:'sikandra road'}},
  {name:"Rhian", age:20, address:{houseNo:'3', street:''}},
  {name:"Venice", age:10, address:{houseNo:'4', street:'' }},
  {name:"Yash", age:40, address:{houseNo:'4', street:'gb'}},
  {name:"Chawla", age:30, address:{houseNo:'3', street:'road'}},
  {name:"Kapil", age:20, address:{houseNo:'2', street:''}},
]
let bigDataSource = [];
for(let i = 0;i<10000;i++){
  bigDataSource.push(...defaultDataSource.map(item=>({...item, child:defaultDataSource})));
}
const defaultColumns = [
  {field:'name',text:'Name', width:'20px', },
  {field:'age', text:'Age', width:'50px',name: 'age', template: ageTemplate},
  {field:'address.houseNo', text:'House No', width:'100px', },
  {field:'address.street', text:'Street', width:'50px', },
  {field:'name',text:'Name', width:'50px', },
  {field:'age', text:'Age', width:'50px', template:()=>{}},
  {field:'address.houseNo', text:'House No', width:'100px', template:()=>{}},
  {field:'address.street', text:'Street', width:'100px', template:()=>{}},
]

const Dashboard = () => {
  const [dataSource] = useState([...bigDataSource]);
  const [filters, setFilters] = useState({name:['Utkarsh', 'Yash']});
  
  return ( 
    <>
      <div className="">
        <Grid
          dataSource={dataSource}
          columns={defaultColumns}
          filters = {filters}
          showPaginationRow={true}
          childGrid={{
            field:'child',
            columns:defaultColumns,
            filters: filters,
            scrollHeight: '200px'
          }}
        />
      </div>
      <button 
        onClick={()=> setFilters(prev=>{ return {...prev, name:['Utkarsh','Kumar']}; }) }
      >Filter: Utkarsh or Kumar</button>

      <button onClick={()=> setFilters({})} >Clear filters</button>
    </>
  );
}

export default Dashboard;