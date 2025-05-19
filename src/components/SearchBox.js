import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="flex items-center justify-center pa2">
            <input
                className="pa3 ba b--green bg-white w-100 tc"
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
                style={{ maxWidth: "400px" }} // Optional
            />
        </div>
    );
};

export default SearchBox;
