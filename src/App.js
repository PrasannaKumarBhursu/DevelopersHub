import { DeveloperHub } from "./components/index";

import "./App.css";

function App() {
  return (
    <div className="app-outer-container">
      <div className="app-inner-container">
        <h1 className="app-name">
          Developers <span className="app-name-span">HUB</span>
        </h1>
        <DeveloperHub />
      </div>
    </div>
  );
}

export default App;
