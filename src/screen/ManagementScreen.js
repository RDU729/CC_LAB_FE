import { useEffect, useState } from "react";
import { endpoints, fetchData } from "../service/HttpService";
const ManagementScreen = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(endpoints.management);
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
      {menuData ? <p>{menuData.total}</p> : <p>Loading ...</p>}{" "}
    </div>
  );
};

export default ManagementScreen;
