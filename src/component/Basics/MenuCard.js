import React from 'react'

import { FaGithub,FaTwitterSquare,FaLinkedin, FaInstagramSquare } from "react-icons/fa";
const MenuCard = ({ menuData }) => {
    //console.log(menuData);
    return (
        <>
        
        <section className="main-card--cointainer">
        {menuData.map((curElem) => {

        const{ id, name, category, image, description } = curElem;

            return (
               <>
               
            
                <div className="card-container" key={id}>
                <div className="card">
                <div className="card-body">
                <div className=" card-circle subtle">

                <ul>
                <li className="icons"> 
                <a href="#"> <FaTwitterSquare color='CMYK' size='3rem'/></a>
                </li>

                <li className="github">
                <a href="#"> <FaGithub color='black' size='3rem' /></a></li>

                <li >
                
                <a href="#">  <FaLinkedin color='#0e76a8' size='3rem' /></a></li>
                <li>
                
                <a href="#">   <FaInstagramSquare color='#8a3ab9' size='3rem' /></a></li>
                 </ul>

                      </div>
                
                
                <h2 className="card-title"> {name} </h2>
                <span className="card-description subtle" >
                {description}
                     </span>
                <div className="card-read"><i>Review</i></div>
                </div>
                <span>
            <img src={image} 
            alt="images" 
            className="card-media"/> 
            </span>
               
               </div>
            </div>  
            </> 

       );
        })} 
        </section>   
        </>
    );
};
export default MenuCard;
