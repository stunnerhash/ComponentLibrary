export const convertJsonToAoa = (data, columns, childGrid) =>{
  let aoa = [];
  const recursiveConvertToAoa = (data, columns, childGrid, deapth = 0) =>{
    const columnsText = [], columnsFields = [];
    const deapthArray = Array.from({length:deapth}, ()=>'');
    columns.forEach(item=>{
      columnsText.push(item.text);
      columnsFields.push(item.field);
    })
    aoa.push([...deapthArray, ...columnsText]);
    data.forEach(dataItem=>{
      const newRow = columnsFields.map(field=>dataItem[field])
      aoa.push([...deapthArray, ...newRow]);
      const childData = dataItem?.[childGrid?.field];
      if(childData){
        recursiveConvertToAoa(childData, childGrid.columns, childGrid.childGrid, deapth + 1)
        aoa.push([])
      }
    })
  }
  recursiveConvertToAoa(data, columns, childGrid);
  return aoa
}