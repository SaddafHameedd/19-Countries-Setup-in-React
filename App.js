import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";

function App() {
  return (
    <>
      <Header />
      <main>
      <div className="search-filter-container">
        <SearchBar />
        <SelectMenu />
      </div>
      <CountriesList/>
      </main>
    </>
  )
}

export default App;
