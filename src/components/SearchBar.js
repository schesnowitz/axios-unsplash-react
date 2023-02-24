function SearchBar({onSubmit}) {

  function handleClick() {
    onSubmit('cars')
  };

  return (
  <div>
  <input />
  <button onClick={handleClick} >Click</button>
  </div>
  )
};

export default SearchBar;