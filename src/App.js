import logo from "./logo.svg";
import "./App.css";
import TopBarComponent from "./components/TopBarComponent";
import React, { useState } from "react";
import MenuScreen from "./screen/MenuScreen";
import ManagementScreen from "./screen/ManagementScreen";
import StaffScreen from "./screen/StaffScreen";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  return (
    <div>
      <TopBarComponent />
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
