import React, { useState } from "react";
import data from "../data/drinks.json";
import Item from "./Item";

const Explorer = () => {
  const [items, setItem] = useState(data);
  const [iValue,setIValue] = useState([])
  const searchItem = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    const a = items.cocktails.filter((item,index) => {
        if(item.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())){
            setIValue(<Item itemName= {item.name} picture={item.image}/>)
        }
    });
    return a;
  };
  
  return (
    <div>
      <form onSubmit={searchItem}>
        <input
          type="text"
          name="search"
         
        ></input>
        <input type="submit" value="Search" />
      </form>
      {iValue}
    </div>
  );
};

export default Explorer;
