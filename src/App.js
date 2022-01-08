import Header from "./compo/Header";
import "./App.css";
import PunkList from "./compo/PunkList";
import Main from "./compo/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <PunkList />
    </div>
  );
}

export default App;
