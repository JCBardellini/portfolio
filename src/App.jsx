import "./App.css";
import Theme from "./Components/Theme";
import MainContent from "./Components/MainContent";

import OutsideLinks from "./Components/Links";

function App() {
  return (
    <>
      <div id="pageContainer">
        <Theme />
        <MainContent />
        <OutsideLinks />
      </div>
    </>
  );
}

export default App;
