import s from "./style.module.css";
 import { ReactComponent as SearchIcon} from "./ic-search.svg"; 
 import { ReactComponent as CloseIcon} from "./ic-close-input.svg"; 
import { useState } from "react";
import { CreatePostButton } from "../CreatePostButton/CreatePostButton";


 function Search({handleFormSubmit, onInput}) {

const changeInputRequest=(e)=>{
    onInput(e.target.value);
};

    return(

        <form className={s.search} onSubmit ={handleFormSubmit} >
         {/* onSubmit = {handleInput}> */}
              <input className={s.searchInput} placeholder='Поиск' onInput={changeInputRequest}></input>
              <button className={s.searchBtn}> <SearchIcon/>
              {/* <img src={CloseIcon} alt='' className={s.searchPic}/> */}
            {false && <CloseIcon/>}

            </button>
       
            </form>
            
            )
    
//     const handleInput = (e) => {
//         console.log(e.target.value, "fghj");
//       onInput(e.target.value);
//     };
//     return (
//      <form className="search" onSubmit={propsOnSubmit}>
//           <input type="text" className='search__input' placeholder='Поиск' onInput={handleInput}/>
//           <button className='search__btn'>
//               <SearchIcon/>
//               {false && <CloseIcon/>}
//           </button>
//      </form>
//     )
   }
  
  export default Search;