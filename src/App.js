import SearchBar from './components/SearchBar'


function App() {

  function handleSubmit(term) {
    console.log('search with', term)
  }


  return <div><SearchBar onSubmit={handleSubmit} /></div>
};  

export default App;