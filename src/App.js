import { Route } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
// Route is a component

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;

// we want to handle different paths on our page and
// load different components for that paths
