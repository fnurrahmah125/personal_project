import TitleSection from "../title/TitleSection";
import ResultDropdown from "./ResultDropdown";
import ResultCard from "./ResultCard";

function ResultSection() {
  return (
    <div className="result-container">
      <div className="result-book">
        <div className="result-book-title">
          <TitleSection text="list of books" />
          <ResultDropdown />
        </div>

        <div className="result-book-cards">
          <ResultCard
            title="Negeri 5 Menara"
            author="Ahmad Fuadi"
            year="2009"
            dataType="finished"
          ></ResultCard>
          <ResultCard
            title="The Hunger Games"
            author="Suzanne Collins"
            year="2008"
            dataType="unfinished"
          ></ResultCard>
        </div>
      </div>
    </div>
  );
}

export default ResultSection;
