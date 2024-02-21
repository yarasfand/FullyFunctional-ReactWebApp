import "./App.css";
import LayoutFixedNav from "./Components/HomePage/homePageBody/LayoutFixedNav";
import RoutToPage from "./DefLinks/RoutToPage";

function App() {
  return (
    <div>
      <div>
        <LayoutFixedNav>
          <RoutToPage />
        </LayoutFixedNav>
      </div>
    </div>
  );
}

export default App;
