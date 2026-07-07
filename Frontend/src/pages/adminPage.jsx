import { Routes, Route, Link } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { MdShoppingCart } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";



export default function AdminPage() {
  return (
    <div className="w-full h-full max-h-full bg-accent text-secondary flex">
      <div className="w-75 h-full bg-accent text-secondary">

        <div className="w-full h-25 bg-accent text-primary flex items-center px-4 ml-2 mt-2">
          <img src="/logo_.png" alt="Logo" className="h-37.5 w-35.5"/>
          <h1>Admin</h1>
          </div>

          <div className="w-full h-100 text-[18px] bg-accent text-primary flex flex-col px-4 ml-2 mt-2">
            <Link to="/admin/users" className="w-full flex items-center h-12.5 gap-3 mb-2"><LuUsers /> Users</Link>
            <Link to="/admin/orders" className="w-full flex items-center h-12.5 gap-3 mb-2"><MdShoppingCart />Orders</Link>
            <Link to="/admin/products" className="w-full flex items-center h-12.5 gap-3 mb-2"><FaBoxOpen />Products</Link>
            <Link to="/admin/reviews" className="w-full flex items-center h-12.5 gap-3 mb-2"><MdOutlineRateReview />Reviews</Link>
            

          </div>

      </div>

          <div className="w-[calc(100%-300px)] h-full max-h-full bg-primary .overflow-y-scroll border-4 rounded-3xl overflow-y-scroll text-secondary text-2xl">
            <Routes path="/">
              <Route path="/users" element={<div>Users</div>} />
              <Route path="/orders" element={<div>Orders</div>} />
              <Route path="/products" element={<div>Products</div>} />
              <Route path="/reviews" element={<div>Reviews</div>} />
            </Routes>

      </div>

      
    </div>
  );
}
