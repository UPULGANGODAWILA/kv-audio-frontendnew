const sampleArra = [
    {
      "key": "P001",
      "name": "Wireless Mouse",
      "price": 25.99,
      "category": "Electronics",
      "dimensions": "10cm x 6cm x 4cm",
      "description": "Ergonomic wireless mouse with adjustable DPI.",
      "availability": true,
      "image": [
        "https://example.com/images/wireless-mouse.jpg"
      ]
    },
    {
      "key": "P002",
      "name": "Mechanical Keyboard",
      "price": 79.99,
      "category": "Electronics",
      "dimensions": "44cm x 14cm x 4cm",
      "description": "RGB mechanical keyboard with blue switches.",
      "availability": true,
      "image": [
        "https://example.com/images/mechanical-keyboard.jpg"
      ]
    },
    {
      "key": "P003",
      "name": "Office Chair",
      "price": 199.99,
      "category": "Furniture",
      "dimensions": "120cm x 60cm x 60cm",
      "description": "Ergonomic office chair with lumbar support.",
      "availability": false,
      "image": [
        "https://example.com/images/office-chair.jpg"
      ]
    },
    {
      "key": "P004",
      "name": "USB-C Hub",
      "price": 39.99,
      "category": "Accessories",
      "dimensions": "8cm x 4cm x 1cm",
      "description": "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.",
      "availability": true,
      "image": [
        "https://example.com/images/usb-c-hub.jpg"
      ]
    },
    {
      "key": "P005",
      "name": "Gaming Monitor",
      "price": 349.99,
      "category": "Electronics",
      "dimensions": "60cm x 40cm x 10cm",
      "description": "27-inch 144Hz gaming monitor with 1ms response time.",
      "availability": true,
      "image": [
        "https://example.com/images/gaming-monitor.jpg"
      ]
    }
  ]
  
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function AdminItemsPage() {
  const [items,setItems]=useState(sampleArra)
    return (
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <th>Key </th>
                    <th>Name </th>
                    <th>Price </th>
                    <th>Category </th>
                    <th>Dimensions </th>
                    <th>Availability </th>
                  
                </thead>
                <tbody>
                  <tr>
                    {
                      items.map((product)=>{
                        return(
                          <tr key={product.key}>
                            <td>{product.key}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.dimensions}</td>
                            <td>{product.availability}</td>
                          </tr>
                        )
                      })
                    }
                  </tr>
               </tbody>
            </table>
            
          
           <Link to="/admin/items/add" className="fixed bottom-6 right-6">
           <FaPlusCircle className="text-[70px] absolute right-2 bottom-2 hover:text-red-600" />
        </Link> 

        </div>
        
    )
}