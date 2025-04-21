"use client";
import React, { useEffect, useReducer, useState } from "react";

const productData = {
  title: "",
  id: "",
  category: "",
  price: "",
  description: "",
  image: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TITLE":
      return { ...state, title: action.payload };
    case "ID":
      return { ...state, id: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "DESCRIPTION":
      return { ...state, description: action.payload };
    case "IMAGE":
      return { ...state, image: action.payload };

    default:
      break;
  }
};

const AddProduct = () => {
  const [state, dispatch] = useReducer(reducer, productData);
  const [imagePreview, setImagePreview] = useState("");

  const handleImage = (e) => {
    // check for file
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.match("image.*")) {
      alert("Please select an image file");
      return;
    }

    // image preview
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    // convert image to URL
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch({ type: "IMAGE", payload: reader.result });
    };
    reader.readAsDataURL(file);
  };
  //   cleanup function for image
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div>
      <div className="max-w-3xl mx-auto min-h-screen p-4 lg:p-8 xl:p-12">
        <p className="font-bold text-xl py-4">Add New Product:</p>
        <form class="max-w-3xl mx-auto">
          <label
            for="product-title"
            class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Title:
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              value={state.title}
              onChange={(e) =>
                dispatch({ type: "TITLE", payload: e.target.value })
              }
              type="text"
              id="product-title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <label
            for="product-id"
            class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product ID:
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
            <input
              value={state.id}
              onChange={(e) =>
                dispatch({ type: "ID", payload: e.target.value })
              }
              type="number"
              id="product-id"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <label
            for="product-price"
            class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Price:
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
            <input
              value={state.price}
              onChange={(e) =>
                dispatch({ type: "PRICE", payload: e.target.value })
              }
              type="number"
              id="product-price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <label
            for="product-category"
            class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Category:
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
            <input
              value={state.category}
              onChange={(e) =>
                dispatch({ type: "CATEGORY", payload: e.target.value })
              }
              type="text"
              id="product-category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <label
            for="product-description"
            class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Description:
          </label>
          <textarea
            value={state.description}
            onChange={(e) =>
              dispatch({ type: "DESCRIPTION", payload: e.target.value })
            }
            id="product-description"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Describe your product..."
          ></textarea>

          <div class="flex items-center justify-center w-full my-4">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="product image"
                className="w-full h-full object-contain p-8 "
              />
            ) : (
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={handleImage}
                />
              </label>
            )}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              fetch("https://fakestoreapi.com/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(state),
              })
                .then((response) => response.json())
                .then((data) => console.log(data));
            }}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          >
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
