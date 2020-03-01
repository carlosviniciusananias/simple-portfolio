import React, { Component } from "react";

export default class Search extends Component {
    render() {
        return (
            <div className="search-section">
                <div className="search">
                    <div className="logo">
                        <img src="http://placehold.it/227x48" alt="" />
                    </div>
                    <div className="form-search">
                        <form className="form-search">
                            <input type="text" className="form-control" placeholder="Search" />
                            <button className="btn btn-sucess" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}