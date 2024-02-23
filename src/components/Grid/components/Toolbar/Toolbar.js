const Toolbar = ({inject, className='toolbar-container'}) =>{
  return (
    <div className={className}>
      {inject.map((ToolbarItem, index)=><ToolbarItem key={index}/>)}
    </div>
  )
}
export default Toolbar;