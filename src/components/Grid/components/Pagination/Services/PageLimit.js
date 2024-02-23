import { useGridContext } from "../../../context/grid";

const props ={
  dropdownItems:[10,20,50,100,200,500],
}

const PageLimitWithConfig= ({dropdownItems, className="page-limit"})=>{
  const {GridContextSelector,GridContextAction} = useGridContext()
  const pageLimit = GridContextSelector.get('pageLimit');

  const handleSelect = (e) =>{
    const pageLimit = +e.target.value;
    GridContextAction.set({pageLimit});
  }
  return (
    <select className={className} onChange={handleSelect} value={pageLimit}>
      {dropdownItems.map((item, index)=><option key={index} value={item}>{item}</option>)}
    </select>
  )
}

export default function PageLimit(args=props){
  return PageLimitWithConfig.bind(this, {...props, ...args})
};