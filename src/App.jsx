import { BrowserRouter, Route, Routes } from "react-router-dom";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./screens/Home";
import Tasks from "./screens/Tasks";
import NewTask from "./screens/NewTask";
import About from "./screens/About";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tasks" element={<Tasks />} />
        <Route exact path="/newtask" element={<NewTask />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
