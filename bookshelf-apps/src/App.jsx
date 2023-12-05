// Import CSS
import "./styles/main.scss";

// Import all components
import GridContainer from "./components/container/GridContainer";
import HeaderSection from "./components/header/HeaderSection";
import AddSection from "./components/add/AddSection";
import SearchSection from "./components/search/SearchSection";
import ResultSection from "./components/result/ResultSection";
import FooterSection from "./components/footer/FooterSection";

function App() {
  return (
    <>
      <HeaderSection></HeaderSection>

      <GridContainer>
        <AddSection></AddSection>
        <SearchSection></SearchSection>
      </GridContainer>

      <ResultSection></ResultSection>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
