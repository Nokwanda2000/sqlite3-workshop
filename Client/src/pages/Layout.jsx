import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>


      <nav>
        <ul>
          <li>
            <Link to="/">Getuser</Link>
          </li>
          <li>
            <Link to="/addbook">Addbook</Link>
          </li>
         
        </ul>
      </nav>
     
      <Outlet />
    </>
  )
};

export default Layout;