import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../Helpers/datehelper";

function OrderComponent() {
  const [count, setCount] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${server}/admin/orders`);
      console.log(response.data)

      const orderCount = response.data.length;
      setCount(orderCount);

      setOrderList(response.data);
      setItems(response.data.items)
    } catch (error) {
      console.log("order fetch error :" + error);
    }
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-full">
      <div className="flex flex-row space-x-3">
        <h1>All Orders</h1>
        <h1 className="font-medium text-seaGreen">{count}</h1>
      </div>
      <div className="mt-3">
        <table className="table text-chineseBlack text-left border-collapse p-3 w-full ">
          <thead className="text-center space-x-3  bg-blue-gray-50 p-4 text-left">
            <th className="border-b border-blue-gray-100 ">ID</th>
            <th className="border-b border-blue-gray-100 mr-20 bg-black ml-11 ">Customer</th>
            <th className="border-b border-blue-gray-100 ">Email</th>
            <th className="border-b border-blue-gray-100 ">Payment ID</th>
            <th className="border-b border-blue-gray-100 ">items</th>
            <th className="border-b border-blue-gray-100 ">Total</th>
            <th className="border-b border-blue-gray-100 text-right ">Time</th>
          </thead>
          <tbody className="">
            {orderList.length > 0 ? ( 
              orderList.map((order) => (

                <tr className="text-center text-red-400 border-b border-gray-200 mt-3" key={order.id}>
                  <td>{order._id}</td>
                  <td>{order.userName}</td>
                  <td className="mr-5">{order.email}</td>
                  <td>{order.paymentId}</td>
                  <td>
                    {order.items.map((item) => (
                      <div key={item.id}>{item.quantity} X {item.name}</div>
                    ))}
                  </td>
                  <td>{order.totalAmount}</td>
                  <td className="text-left">{formatDate(order.createdAt)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="p-4 border-b border-blue-gray-50 text-center"
                >
                  <FontAwesomeIcon icon={faSpinner} className="h-6 w-7" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderComponent;
