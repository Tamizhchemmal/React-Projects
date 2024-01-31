import "./App.css";

const Lists = [
  {
    id: 1,
    item: "Book",
    quantity: 3,
    packed: true,
  },
  {
    id: 2,
    item: "Glass",
    quantity: 2,
    packed: false,
  },
  {
    id: 3,
    item: "Sandal",
    quantity: 4,
    packed: true,
  },
  {
    id: 4,
    item: "Sunscreen",
    quantity: 1,
    packed: false,
  },
];
export default function App() {
  return (
    <>
      <Header />
      <Form />
      <Planlist />
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

function Form() {
  return (
    <>
      <form>
        <div className="listInput">
          <h2>Hey Add items here, so that you wont Forget 😉</h2>
          <select className="itemcount">
            {Array.from({ length: 10 }, (a, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input placeholder="Items"></input>
          <button>Add</button>
        </div>
      </form>
    </>
  );
}

function Planlist() {
  return (
    <>
      <div className="listsection">
        {Lists.map((list) => (
          <li>
            <span className={list.packed ? "selected" : ""}>
              {list.quantity} {list.item}
            </span>
            <button>❌</button>
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
