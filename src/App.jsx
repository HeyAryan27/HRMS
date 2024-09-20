import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import './index.css'
function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Navbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
