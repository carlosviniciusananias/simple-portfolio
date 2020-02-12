import React from "react";

import './search-style.css';

const Search = () => {
    return (
        <div className="search-section">
            <div>
                <a href="/"><img src="http://placehold.it/134x50/000/fff" alt="" /></a>
            </div>
            <form className="form-search">
                <input type="text" className="form-control" placeholder="Search" />
                <button className="btn btn-sucess" type="submit">Search</button>
            </form>
        </div>
    );
};

export default Search;