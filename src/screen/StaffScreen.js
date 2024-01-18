import { useEffect, useState } from "react";
import { endpoints, fetchData, postData } from "../service/HttpService";

const StaffScreen = () => {
  const [argument, setArgument] = useState("");
  const [table, setTable] = useState("");
  const [product, setProduct] = useState("");
  const [order, setOrder] = useState("");

  const handleCreateOrder = async () => {
    try {
      const postDataResult = await postData(endpoints.add_order, {
        table_id: table,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleAddProductToOrder = async () => {
    try {
      const postDataResult = await postData(endpoints.add_order, {
        table_id: table,
        product_id: product,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleCloseOrder = async () => {
    try {
      const postDataResult = await postData(endpoints.add_order, {
        order_id: order,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <br></br>
      <label>
        Create new order:
        <input
          type="text"
          value={argument}
          onChange={(e) => setTable(e.target.value)}
        />
      </label>
      <button onClick={handleCreateOrder}>Send</button>

      <br></br>
      <br></br>
      <br></br>
      <label>
        Add product to order:
        <input
          type="text"
          value={argument}
          onChange={(e) => setProduct(e.target.value)}
        />
      </label>
      <button onClick={handleAddProductToOrder}>Send</button>

      <br></br>
      <br></br>
      <br></br>
      <label>
        Close order:
        <input
          type="text"
          value={argument}
          onChange={(e) => setOrder(e.target.value)}
        />
      </label>
      <button onClick={handleCloseOrder}>Send</button>

      {/* {result && (
        <div>
          <h4>Result:</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

export default StaffScreen;
