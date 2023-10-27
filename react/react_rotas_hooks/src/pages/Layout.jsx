import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import './Layout.css'

const Layout = () => {

  const navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }

  const [id, setId] = useState(56);

  /*const goParam = () => {
    setId(23);
    navigate(`param/${id}`);
  
        <div className="Param#2">
          <button onClick={goParam}>Param#2</button>
        </div>
  }*/

  return (
    <div className="layout">

      <aside className="menu">
        <div className="About">
          <button onClick={goHome}>Home</button> {/*Exemplo com chamada à uma função */}
        </div>
        <div className="Blogs">
          <button onClick={() => { navigate("blogs") }}>Blogs</button>
        </div>
        <div className="Contato">
          <button onClick={() => { navigate("contact") }}>Contato</button>
        </div>

        <div className="Param#1">
          <button onClick={() => { navigate(`param/${id}`) }}>Param#1</button>
        </div>
      </aside>
      <div className="conteudo">
        <Outlet />
      </div>
    </div>



  )
};

export default Layout;