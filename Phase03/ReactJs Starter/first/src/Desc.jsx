const Desc = ({ onAction, children }) => {
  //JS
  return (
    <>
    {/* //HTML */}
      {children}
      <button onClick={onAction}>Click Me</button>
    </>
  );
};

export default Desc;
