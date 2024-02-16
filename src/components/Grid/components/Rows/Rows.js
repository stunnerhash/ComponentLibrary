import Columns from "../Columns/Columns";
const Rows = ({data}) => {
  return ( 
    <tbody>
      {data?.map((item, index)=>
        <Columns
          key={index}
          data={item}
        />
      )}
    </tbody>
  );
}
 
export default Rows;