

import { faImages } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { server } from "../../server";
import { convertToBase64 } from "../../Helpers/B64";

function AddFood() {
  const [foodImage, setFoodImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");

  const handleFileInputChange =async (e) => {
    try {
      const file = e.target.files[0];
    const base64 = await convertToBase64(file)
    console.log(base64)
    setFoodImage({...foodImage, FoodImage: base64});
    } catch (error) {
      console.log("fie input err : "+error)
    }
    
  };

  const handleSubmit = (e) => {
    console.log(server);
    e.preventDefault();
    // const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newForm = new FormData();


    newForm.append("file", foodImage.FoodImage);
    newForm.append("name", name);
    newForm.append("title", title)
    newForm.append("category", category);
    newForm.append("description", description);
    newForm.append("quantity", quantity);
    newForm.append("price", price);

    console.log(newForm)

    axios.post(`${server}/admin/add-product`, newForm,).then((res) => {
      console.log("send");
      console.log(res);
    });
  };
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="bg-paleSilver w-96 p-6 rounded-lg shadow-lg">
        <h1 className="text-gray-900 text-center font-semibold block text-3xl">
          <FontAwesomeIcon className="inline-block mr-2" icon={faPlus} />
          Add Food
        </h1>
        <hr />
        <form action="" className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative mt-3">
            <label htmlFor="name" className="text-base block mb-3">
              Name
            </label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Food Name"
              required
              className="w-full bg-white text-base border px-2 py-2 focus:outline-none focus:ring-1 hover: bg-transparent border-chineseBlack"
            />
          </div>
          <div className="relative mt-3">
            <label htmlFor="title" className="text-base block mb-3">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the Title"
              required
              className="w-full bg-white text-base border px-2 py-2 focus:outline-none focus:ring-1 hover: bg-transparent border-chineseBlack"
            />
          </div>
          <div className="relative mt-3">
            <label htmlFor="category" className="text-base block mb-3">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Category"
              required
              className="w-full bg-white text-base border px-2 py-2 focus:outline-none focus:ring-1 hover: bg-transparent border-chineseBlack"
            />
          </div>
          <div className="relative mt-3">
            <label htmlFor="description" className="text-base block mb-3">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter food description"
              required
              className="w-full bg-white text-base border px-2 py-2 focus:outline-none focus:ring-1 hover: bg-transparent border-chineseBlack"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col">
              <label htmlFor="quantity" className="mb-1">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter the quantity to be added"
                required
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="mb-1">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter the price"
                required
                className="border rounded-md p-2 w-full"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <div className="mt-3 flex items-center">
              <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                {foodImage ? (
                  <img
                    // src={URL.createObjectURL(foodImage)}
                    src={foodImage.FoodImage}
                    alt="Food-Img"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <FontAwesomeIcon className="h-8 w-8" icon={faImages} />
                )}
              </span>
              <label
                htmlFor="file-input"
                className="ml-3 flex items-center justify-center px-3 py-3 border-paleOrange bg-opacity-150 rounded-md transition duration-300 ease-in-out shadow-sm text-sm font-medium text-white bg-inchWorm hover:text-gray-400 cursor-pointer"
              >
                <span>Upload File</span>
                <input
                  type="file"
                  name="FoodImage"
                  id="file-input"
                  accept=".jpg,.jpeg,.png"
                  className="sr-only"
                  onChange={handleFileInputChange}
                />
              </label>
            </div>
          </div>
          <hr className="mt-2" />
          <div className=" flex mt-5 items-center justify-center">
            <button className="bg-seaGreen rounded-lg px-5 py-3  w-1/2 font-medium hover:bg-green-400">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFood;

