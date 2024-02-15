const contextSelectors = (state) => {
  return {
    data: () => ({
      isOpen: state.isOpen,
      message: state.message,
      success: state.success,
    }),
    isOpen: ()=> state.isOpen, // not needed
    message: ()=> state.message, // not needed
    success: () => state.success // not needed
  };
}
 
export default contextSelectors;