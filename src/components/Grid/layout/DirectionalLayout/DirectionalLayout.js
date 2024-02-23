export const LeftLayout = ({content, children}) => {
  return ( 
    <>
      {children}
    </>
  );
}
export const RightLayout = ({content, children}) => {
  return (
    <>
      {children}
    </>
  );
}
export const BottomLayout = ({content, children}) => {
  return ( 
    <>
      {children}
      {content}
    </>
  );
}
export const TopLayout = ({content, children}) => {
  return ( 
    <>
      {content}
      {children}
    </>
  );
}

export const DirectionalLayout = ({direction = "bottom", content, children}) =>{
  const Layout = (
    (direction === "top" && TopLayout) ||
    (direction === "bottom" && BottomLayout) ||
    (direction === "right" && RightLayout) ||
    (direction === "left" && LeftLayout) 
  );
  return(
    <Layout content={content}>
      {children}
    </Layout>
  )
}

