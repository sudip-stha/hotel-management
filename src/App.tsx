import "./styles/style.scss";
import Aside from "./components/Aside";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="page">
      <Aside />
      <Main />
    </div>
  );
}

export default App;
