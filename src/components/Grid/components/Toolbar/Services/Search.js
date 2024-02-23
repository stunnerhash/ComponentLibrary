import { useGridContext } from "../../../context/grid";

const props ={

}

const SearchWithConfig = () =>{
  const {GridContextAction} = useGridContext()
  const handleSearch = (e)=>{
    const { value } = e.target;
    GridContextAction.search({query: value})
  }
  return (
    <span>
      <input id="search" onChange={handleSearch}/>
      <label htmlFor="search">Search</label>
    </span>
  )
}
export default function Search(args=props){
  return SearchWithConfig.bind(this, {...props, ...args})
};