import React ,{useState} from "react";
import ButtonComponent from "./ButtonComponent";
import MenuScreen from "../screen/MenuScreen";
import StaffScreen from "../screen/StaffScreen";
import ManagementScreen from "../screen/ManagementScreen";

const TopBarComponent = () => {
  const [activeScreen, setActiveScreen] = useState("d");

  const handleButtonClick = (screen) => {
    setActiveScreen(screen);
  };


const styles = `
    .topbar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
    }

    .button-container {
      display: flex;
      gap: 10px;
    }

    .button-container button {
      padding: 10px 20px;
      font-size: 16px;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="topbar">
        <h1>Restaurant</h1>
        <div className="button-container">
          <ButtonComponent
            label="MenuScreen"
            onClick={() => handleButtonClick("MenuScreen")}
          />
          <ButtonComponent
            label="ManagementScreen"
            onClick={() => handleButtonClick("ManagementScreen")}
          />
          <ButtonComponent
            label="StaffScreen"
            onClick={() => handleButtonClick("StaffScreen")}
          />
        </div>
        <div>
          {activeScreen === "MenuScreen" && <MenuScreen />}
          {activeScreen === "ManagementScreen" && <ManagementScreen />}
          {activeScreen === "StaffScreen" && <StaffScreen />}
        </div>
      </div>
    </div>
  );
};

export default TopBarComponent;
