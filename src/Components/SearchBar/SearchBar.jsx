import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      navigate(`/search/${input}`);
      setInput("");
      return;
    }

    navigate("/");
  };

  return (
    <form action="submit" onSubmit={handleSubmit} className="nav-bar__form">
      <input
        type="text"
        placeholder="Buscar productos, marcas y mas..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default SearchBar;
