import { useState } from "react";
import Card from "./Card";
import "./styles/Board.css";

function Board() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/images/csharp.svg", status: "" },
      { id: 2, img: "/images/cpp.svg", status: "" },
      { id: 3, img: "/images/clang.svg", status: "" },
      { id: 4, img: "/images/css3.svg", status: "" },
      { id: 5, img: "/images/html5.svg", status: "" },
      { id: 6, img: "/images/java.svg", status: "" },
      { id: 7, img: "/images/javascript.svg", status: "" },
      { id: 8, img: "/images/kotlin.svg", status: "" },
      { id: 9, img: "/images/python.svg", status: "" },
      { id: 10, img: "/images/ruby.svg", status: "" },
      { id: 11, img: "/images/swift.svg", status: "" },
      { id: 12, img: "/images/typescript.svg", status: "" },

      // duplicates below

      { id: 1, img: "/images/csharp.svg", status: "" },
      { id: 2, img: "/images/cpp.svg", status: "" },
      { id: 3, img: "/images/clang.svg", status: "" },
      { id: 4, img: "/images/css3.svg", status: "" },
      { id: 5, img: "/images/html5.svg", status: "" },
      { id: 6, img: "/images/java.svg", status: "" },
      { id: 7, img: "/images/javascript.svg", status: "" },
      { id: 8, img: "/images/kotlin.svg", status: "" },
      { id: 9, img: "/images/python.svg", status: "" },
      { id: 10, img: "/images/ruby.svg", status: "" },
      { id: 11, img: "/images/swift.svg", status: "" },
      { id: 12, img: "/images/typescript.svg", status: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [previous, setPrevious] = useState(-1);

  function checkMatches(current) {
    if (items[current].id == items[previous].id) {
      items[current].status = "correct";
      items[previous].status = "correct";
      setItems([...items]);
      setPrevious(-1);
    } else {
      items[current].status = "wrong";
      items[previous].status = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].status = "";
        items[previous].status = "";
        setItems([...items]);
        setPrevious(-1);
      }, 1000);
    }
  }

  function handleOnClick(id) {
    if (previous === -1) {
      items[id].status = "active";
      setItems([...items]);
      setPrevious(id);
    } else {
      checkMatches(id);
    }
  }

  return (
    <div className="board">
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          id={index}
          handleOnClick={handleOnClick}
        />
      ))}
    </div>
  );
}

export default Board;
