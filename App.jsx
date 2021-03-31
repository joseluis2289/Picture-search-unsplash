import { useState } from "react";
import Results from "./components/Results";

const { default: Search } = require("./components/Search");

function App() {
  const [photos, setPhotos] = useState([]);

  return (
    <div className="App">
      <Search setPhotos={setPhotos} />
      <Results photos={photos} />
    </div>
  );
}

export default App;
