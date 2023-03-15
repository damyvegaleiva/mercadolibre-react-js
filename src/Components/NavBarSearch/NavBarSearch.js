import { useState } from "react";
import { useNavigate } from "react-router-dom";


const NavBarSearch = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/category/${input}`)
      setInput('')
      return
    }
    navigate('/')
  }

  return (
    <div className="nav-bar-search">
      <form onSubmit={handleSubmit}>
        <input type="search" value={input} placeholder="Buscar productos, marcas y mas..." onChange={(e) => setInput(e.target.value)} />
        <button type="submit">🔍</button>
      </form>
    </div>
  );
}

export default NavBarSearch;