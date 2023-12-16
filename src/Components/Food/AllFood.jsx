import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../server";

function AllFood() {
  const [foodList, setFoodList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get(`${server}/admin/get-all-products`);
      console.log(response.data);
      const totalCount = response.data.length;
      setCount(totalCount);

      setFoodList(response.data); // Assuming the response contains an array of food items
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">
        {" "}
        All Foods ({count})
      </strong>
      <div className="  border-gray-300 rounded-sm mt-3">
        <table className="w-full text-gray-700 border-collapse p-3 text-left table">
          <thead className="p-3 text-left">
            <tr>
              <th  className="border-b border-blue-gray-100 bg-blue-gray-50  p-4">
                ID
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                NAME
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                TITLE
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                CATEGORY
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                DESCRIPTION
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                FOOD IMAGE
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                PRICE
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                QUANTITY
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {foodList.length > 0 ? (
              foodList.map((food) => (
                <tr key={food.id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    {food._id}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {food.name}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {food.title}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {food.category}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {food.description}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <img
                      className="w-12 h-12"
                      src={food.file}
                      alt={food.title}
                    />
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {food.price}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {food.quantity}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 text-white">
                    <button className="bg-blue-400 p-2 rounded-md w-20 hover:bg-blue-500 transition duration-300 ease-in-out">Edit</button>
                    <button className="bg-red-400 m-1 p-2 rounded-md w-20  hover:bg-red-500 transition duration-300 ease-in-out">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="p-4 border-b border-blue-gray-50 text-center"
                >
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* {foodList.length > 0 ? (
        ) : (
            <p>Loading...</p>
        )} 
                <ul>
                    {foodList.map((food) => (
                        <div>
                            
                            <li key={food.id}>{food.name}</li>
                            <li key={food.id}>{food.price}</li>
                        </div>
                        // Assuming 'name' is one of the properties of each food item
                    ))}
                </ul> */}
    </div>
  );
}

export default AllFood;
