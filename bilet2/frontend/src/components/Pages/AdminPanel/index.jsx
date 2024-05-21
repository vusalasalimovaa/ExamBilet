import React,{useState,useEffect} from 'react'
import "./tailwind.css"
import axios from "axios"
import { useGetAllProductQuery } from '../../../services/products'
import { useDispatch } from 'react-redux'
import { deleteMenu } from '../../../redux/AdminSlice'

const Admin = () => {

  const [data, setData] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("api/menu").then((res) => {
      setData(res.data)
      console.log(data)
    })
  }, [])

  // const {data:adminData} = useGetAllProductQuery()
  // console.log(adminData)
  
  return (
    <div>
      <>
  {/* component */}
  <div className="text-gray-900 bg-gray-200">
    <div className="p-4 flex">
      <h1 className="text-3xl">Users</h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Title</th>
            <th className="text-left p-3 px-5">Description</th>
            <th className="text-left p-3 px-5">Price</th>
            <th className="text-left p-3 px-5">Delete</th>
            <th className="text-left p-3 px-5">Edit</th>
            <th />
          </tr>
          

          {data && data.map((el) => {
            return (
              <tr  className="border-b">
                <td className="p-3 px-5">{el.title}</td>
                <td className="p-3 px-5">{el.description}</td>
                <td className="p-3 px-5">{el.price}</td>
                <td className="p-3 px-5">
                <button onClick={() =>dispatch(deleteMenu(el))}
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
                </td>
                <td className="p-3 px-5">
                <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
                </td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
  </div>
</>

    </div>
  )
}

export default Admin