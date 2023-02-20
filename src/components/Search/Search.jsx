import s from "./style.module.css";
import { ReactComponent as SearchIcon } from "./ic-search.svg";
import { ReactComponent as CloseIcon } from "./ic-close-input.svg";
import { useState } from "react";
import { CreatePostButton } from "../CreatePostButton/CreatePostButton";


function Search({ handleFormSubmit, onInput }) {

    const changeInputRequest = (e) => {
        onInput(e.target.value);
    };
    return (

        <form className={s.search} onSubmit={handleFormSubmit} >
            <input className={s.searchInput} placeholder='Поиск' onInput={changeInputRequest}></input>
            <button className={s.searchBtn}> <SearchIcon />
                {false && <CloseIcon />}
            </button>
        </form>
    )
}

export default Search;