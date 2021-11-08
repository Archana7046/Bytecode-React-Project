import React from "react";

const Navbar = ({ filterItem, menuList, category }) => {
    return (
        <>
        
        <h1 className="heading">
        {" "}
        Welcome to Bytecode{" "}
         </h1>
         <h1 className="members">
        {" "}
       Members{" "}
         </h1>
          <nav className="navbar">
        <div className="btn-group">
              {menuList.map((curElem) => {
                  return(
                    <button 
        className="btn-group__item" 
        onClick={() => filterItem(curElem)}>
        {curElem}
        </button>
          );
        })}
      </div>
     </nav>  
        </>
    );
};

export default Navbar;