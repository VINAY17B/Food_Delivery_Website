import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu = ({category,setCategory}) => {
  return (
  
      <div className='explore-menu' id='explore-menu'>
        <h1> Explore Our Menu</h1>
        <p className='explore-menu-text'> Choose from a diverese menu featuring a delectable array of dishes</p>
       <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{ // map function to map the array list of menu items and for image it is  // item is object where menu_image is a proeperty where imported image is added  //
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className='explore-menu-list-item'>
                          <img className ={category===item.menu_name?"active":""}src={item.menu_image} alt=""/> 
                          <p>{item.menu_name} </p>
                    </div>
                )
            })}
            </div>   
            <hr/>       
      </div>
   
  )
}

export default ExploreMenu
