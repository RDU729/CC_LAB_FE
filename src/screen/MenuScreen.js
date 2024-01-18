import { useEffect, useState } from "react";
import { endpoints, fetchData } from "../service/HttpService";

const MenuScreen = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(endpoints.foods);
        console.log(data);
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      <h2>Menu Screen</h2>
      {menuData ? (
        <ul>
          {menuData.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading menu...</p>
      )}{" "}
    </div>
  );
};

export default MenuScreen;
