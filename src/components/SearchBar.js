import "./SearchBar.css"; 
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    onSubmit(searchTerm);
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="search-bar-form">
      <label>Enter a search term.</label>
        <input 
        value={searchTerm} 
        onChange={handleChange} 
        className="search-bar"
        />
      </form>
    </div>
  );
}

export default SearchBar;
