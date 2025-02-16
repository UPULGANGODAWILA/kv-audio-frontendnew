import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function AdminItemsPage() {
  const [items, setItems] = useState(sampleArra);
  const [itemsLoaded, setItemsLoaded] = useState(false);

  useEffect(() => {if (!itemsLoaded) {
    
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/Products", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  }, [itemsLoaded]);

  const handleDelete = (key) => {
    if(window.confirm("Are you sure you want to delete this item?"))
    setItems(items.filter((item) => item.key !== key));
  };

  return (
    <div className="w-full h-full p-4 relative flex items-center flex-col">



  {!itemsLoaded && <div className="border-4 my-4 border-b-green-500 rounded-full animate-spin bg-0 w-[100px] h-[100px] "></div> }
      <h1 className="text-2xl font-bold mb-4">Admin Items</h1>
      {itemsLoaded && <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Key</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Dimensions</th>
              <th className="p-3 border">Availability</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.key} className="border-b hover:bg-gray-50">
                <td className="p-3 border">{product.key}</td>
                <td className="p-3 border">{product.name}</td>
                <td className="p-3 border">${product.price.toFixed(2)}</td>
                <td className="p-3 border">{product.category}</td>
                <td className="p-3 border">{product.dimensions}</td>
                <td className="p-3 border">{product.availability ? "Yes" : "No"}</td>
                <td className="p-3 border flex gap-3 justify-center">
                  <Link
                    to={`/admin/items/edit/${product.key}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit size={20} />
                  </Link>
                  <button
                    onClick={() => handleDelete(product.key)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
      <Link to="/admin/items/add" className="fixed bottom-6 right-6">
        <FaPlusCircle className="text-[70px] text-green-500 hover:text-green-700" />
      </Link>
    </div>
  );
}