let baseUrl = "http://localhost:8080/";
let management_base = "http://localhost:8090/";

export const endpoints = {
  foods: baseUrl + "foods",
  tables: baseUrl + "tables",
  add_order: baseUrl + "add-order",
  close_order: baseUrl + "close-order",
  remove_food: baseUrl + "remove-food",
  add_food: baseUrl + "add-food",
  view_order: baseUrl + "view-order",
  management: management_base,
};

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error data:", error);
    throw error;
  }
};

export const postData = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return data;
};
