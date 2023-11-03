import { useState } from "react";

import "./Faraway.css";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function Main() {
  const [list, setList] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    setList((prevList) => [...prevList, newItem]);

    setQuantity(1);
    setDescription("");
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleDelete = (id) => {
    const fileteredList = list.filter((item) => item.id !== id);
    setList(fileteredList);
  };

  const handleToggle = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClear = () => {
    setList([]);
  };

  return (
    <div>
      <Header />
      <Form
        handleSubmit={handleSubmit}
        description={description}
        handleDescription={handleDescription}
        handleQuantity={handleQuantity}
        quantity={quantity}
        list={list}
      />
      <PackingList
        handleSubmit={handleSubmit}
        list={list}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        handleClear={handleClear}
      />
      <Stats list={list} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>🌳 Far Way 💼</h1>
    </div>
  );
}

function Form({
  handleSubmit,
  handleQuantity,
  quantity,
  description,
  handleDescription,
}) {
  return (
    <form className="menu" onSubmit={handleSubmit}>
      <p>What do you need 🥰 for your trip? </p>
      <select
        name="itenNum"
        id="itemNum"
        className="selectOption"
        value={quantity}
        onChange={handleQuantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="itemName"
        id="itemName"
        className="inputItem"
        value={description}
        onChange={handleDescription}
      />
      <div>
        <button className="btnAdd">Add</button>
      </div>
    </form>
  );
}

function PackingList({ list, handleDelete, handleToggle, handleClear }) {
  const [sort, setSort] = useState("input");

  let sortItems;

  if (sort === "input") sortItems = list;

  if (sort === "description")
    sortItems = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortItems = list
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="container">
      <ul className="parkingList">
        <div className="parkingList-items">
          {sortItems.map((item) => (
            <Item
              quantity={item.quantity}
              description={item.description}
              key={item.id}
              id={item.id}
              packed={item.packed}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))}
        </div>

        <div className="actions">
          <select
            className="sortOptions"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="input">Sort by Input</option>
            <option value="description">Sort by Description</option>
            <option value="packed">Sort by Packed</option>
          </select>
          <button className="btn-clear" onClick={handleClear}>
            Clear List
          </button>
        </div>
      </ul>
    </div>
  );
}

function Item({
  quantity,
  description,
  id,
  packed,
  handleDelete,
  handleToggle,
}) {
  return (
    <div className="itemContainer">
      <li className={packed ? "packed" : ""}>
        <input
          type="checkbox"
          value={packed}
          name="checkSelect"
          onChange={() => handleToggle(id)}
        />
        <span>{quantity}</span>
        <p>{description}</p>
        <span className="btn-delete" onClick={() => handleDelete(id)}>
          x
        </span>
      </li>
    </div>
  );
}

function Stats({ list }) {
  if (!list.length) {
    return (
      <>
        <p className="stats">Start adding some items to your packing list</p>
      </>
    );
  }

  const count = list.length;
  const countToggle = list.filter((item) => item.packed).length;
  const percent = Math.floor((countToggle / count) * 100);

  return (
    <>
      {percent === 100 ? (
        <p className="stats">You have alread packed all items</p>
      ) : (
        <p className="stats">
          You have {count} items on your list, and you already packed{" "}
          {countToggle} ({percent}%){" "}
        </p>
      )}
    </>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>Copyright ©️ {new Date().getFullYear()} U-3 Technologies Inc.</p>
    </div>
  );
}

export default Main;
