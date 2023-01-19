import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmailBody from "./Components/EmailBody/EmailBody.js";
import Inbox from "./Pages/Inbox.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbox />} index />
        <Route path="/inbox/:id" element={<EmailBody/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
