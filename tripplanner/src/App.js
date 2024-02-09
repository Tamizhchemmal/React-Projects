import { useState } from "react";
import "./App.css";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function handleItems(item) {
    setItemList((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItemList((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      <Form handleItems={handleItems} />
      <Planlist itemList={itemList} handleDelete={handleDelete} />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <div className="planner">
        <h2>😎Trip Planner🏖️</h2>
      </div>
    </>
  );
}

function Form({ handleItems }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlesubmit(e) {
    e.preventDefault();

    if (!item) return;
    var addItem = { item, quantity, packed: false, id: Date.now() };
    handleItems(addItem);
    setItem("");
    setQuantity(1);
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="listInput">
          <h2>Hey Add items here, so that you wont Forget 😉</h2>
          <select
            className="itemcount"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 10 }, (a, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            placeholder="Items"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          ></input>
          <button>Add</button>
        </div>
      </form>
    </>
  );
}

function Planlist({ itemList, handleDelete }) {
  return (
    <>
      <div className="listsection">
        {itemList.map((list) => (
          <li key={list.id}>
            <span className={list.packed ? "selected" : ""}>
              {list.quantity} {list.item}
            </span>
            <button className="btn-dlt" onClick={() => handleDelete(list.id)}>
              ❌
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="footersection">
        <h2>Hi, You have nothing in the list so far 😒 Add Items now 😎🏖️</h2>
      </footer>
    </>
  );
}
