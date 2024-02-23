import { useRef, useState } from "react";
import Grid from "../../components/Grid";
import Toolbar, { Download, Search } from "../../components/Grid/components/Toolbar";
import Pagination, { PageLimit, PaginationRow } from "../../components/Grid/components/Pagination";

const ageTemplate = (args) => {
  return (<div> {args.value} </div>)
}
const defaultDataSource = [
  {name:"Utkarsh", age:40, address:{houseNo:'1', street:''}, child:[{name:"utkarsh"}]},
  {name:"Kumar", age:30, address:{houseNo:'2', street:'sikandra road'}, child:[{name:"rajan"}]},
  {name:"Rhian", age:20, address:{houseNo:'3', street:''}, child:[{name:"pardeep"}]},
  {name:"Venice", age:10, address:{houseNo:'4', street:'' }},
  {name:"Yash", age:40, address:{houseNo:'4', street:'koi bhi'}},
  {name:"Chawla", age:30, address:{houseNo:'3', street:'🔴💡'}},
  {name:"Kapil", age:20, address:{houseNo:'2', street:''}},
]
let bigDataSource = [];
for(let i = 0;i<30;i++){
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

const ExcelExport = (gridRef) => () =>(<button onClick={()=> gridRef.current.excelExport({showChild:false, columns: defaultColumns})}> Excel export </button> )
const Dashboard = () => {
  const [dataSource] = useState([...bigDataSource]);
  const [filters, setFilters] = useState();
  const [searchQuery] = useState({field:'name'});
  const gridRef = useRef();
  
  const ApplyFilters = () =>( <button onClick={()=> setFilters(prev=>({...prev, name:['Utkarsh','Kumar']})) }> Filter: Utkarsh or Kumar </button> )
  const ClearFilters = () =>( <button onClick={()=> setFilters({})} >Clear filters</button> )
  const GridSelector = () =>( 
    <button onClick={()=> {
      console.log(gridRef.current)
      console.log(gridRef.current.selector.selectedRowsData())
    }}>grid selector</button> 
  )

  return (
    <>
      <div className="">
        <Grid
          dataSource={dataSource}
          columns={defaultColumns}
          filters = {filters}
          searchQuery={searchQuery}
          childGrid={{
            field: 'child',
            columns: defaultColumns,
            scrollHeight: '200px',
          }}
          showCheckbox={true}
          pageLimit={10}
          toolbar={<Toolbar className='toolbar-container' inject={[ExcelExport(gridRef),GridSelector, ApplyFilters, ClearFilters, Download(), Search()]}/>}
          pagination={<Pagination inject={[PageLimit(),PaginationRow()]}/>}
          ref={gridRef}
        />
      </div>
    </>
  );
}


export default Dashboard;

// reset selected, child does not go away on sorting