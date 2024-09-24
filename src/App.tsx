import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";
import TOC from "./Labs/TOC";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element= {<Navigate to="TOC"/>} />
          <Route path="/TOC" element={<TOC/>}/>
          <Route path="/Labs/*" element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
