import { useState } from "react";
import Grid from "../../components/Grid";
// import * as XLSX from 'xlsx';

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

// const JSONToExcelConverter = ({ jsonData }) => {
//   const flattenData = (data) => {
//     let flattenObj = {}
//     const flattenObject = (obj, prefix = '') => {
//       for (let key in obj) {
//         const propName = key; // const propName = prefix ? `${prefix}.${key}` : key;
//         if(obj[key] && (typeof obj[key] === "object"))
//           flattenObject(obj[key], propName);
//         else flattenObj[propName] = obj[key]; 
//       }
//       return flattenObj;
//     };
//     const flattenedData = data.map(item=>{
//       flattenObj ={};
//       return flattenObject(item)
//     });
//     return flattenedData;
//   };

//   const spreadChild = (data, field = '') =>{
//     if(!field) return data;
//     const copyData = JSON.parse(JSON.stringify(data));
//     let newData = [];
//     copyData.forEach(item=>{
//       const copyChild = JSON.parse(JSON.stringify(item?.[field]));
//       const child = copyChild.map((item,index)=>({sno:index, ...item}))
//       delete item[field];
//       newData.push(item);
//       newData.push(...child);
//     })
//     console.log(newData);
//     return newData
//   }
//   const convertToExcel = () => {
//     // Flatten the JSON data
//     const dataWithChildren = spreadChild(jsonData, 'child')
//     const flattenedData = flattenData(dataWithChildren);
//     const ws = XLSX.utils.json_to_sheet(flattenedData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//     saveExcelFile(excelBuffer, 'output.xlsx');
//   };

//   const saveExcelFile = (buffer, fileName) => {
//     const data = new Blob([buffer], { type: 'application/octet-stream' });
//     const url = window.URL.createObjectURL(data);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', fileName);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <button onClick={convertToExcel}>Convert to Excel</button>
//     </div>
//   );
// };
const Dashboard = () => {
  const [dataSource] = useState([...bigDataSource]);
  const [filters, setFilters] = useState();
  const [searchQuery, setSearchQuery] = useState();
  return ( 
    <>
      <div className="">
        <Grid
          dataSource={dataSource}
          columns={defaultColumns}
          filters = {filters}
          showPaginationRow={true}
          searchQuery={searchQuery}
          childGrid={{
            field: 'child',
            columns: defaultColumns,
            // filters: filters,
            scrollHeight: '200px',
          }}
        />
      </div>
      <input id="search" onChange={(e)=>setSearchQuery(({field:'name', query:e.target.value}))}/>
      <button onClick={()=> setFilters(prev=>{ return {...prev, name:['Utkarsh','Kumar']}; }) } >Filter: Utkarsh or Kumar</button>
      <button onClick={()=> setFilters({})} >Clear filters</button>
      {/* <JSONToExcelConverter
        jsonData={bigDataSource}
      /> */}
    </>
  );
}

export default Dashboard;