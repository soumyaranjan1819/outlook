import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./Pages/Inbox.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbox />} index />
        <Route path="/inbox/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
