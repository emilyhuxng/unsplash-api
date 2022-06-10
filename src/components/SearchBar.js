import React, { useContext, useState } from 'react'
import QueryContext from '../store/query-context';
import classes from "./SearchBar.module.css"

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const queryCtx = useContext(QueryContext);

  const changeHandler = (event) => {
    setSearch(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    queryCtx.onUpdateQuery(search);
    queryCtx.onUpdateColor("");
    setSearch("");
  }

  return (
    <form onSubmit={submitHandler}>
        <input className={classes["search-bar"]} type="text" placeholder="Search something! E.g. apple" value={search} onChange={changeHandler} required/>
    </form>
  )
}

export default SearchBar