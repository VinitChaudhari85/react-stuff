import React from "react";
import { useState } from "react";
import { CONTENT_DATA } from "./data";
import { CARD_DATA } from "./data";
import Button from "./Button"

function Examples() {
  const [selected, setSelected] = useState();

  let tabContent = null;

  if (!selected) {
    tabContent = <p>Please select a topic.</p>;
  } else {
    tabContent = (
      <>
        <h2 className="text-lg p-2">{selected.title}</h2>
        <div className="p-2">{selected.content}</div>
        <pre>
          <code className="p-2">{selected.code}</code>
        </pre>
      </>
    );
  }

  return (
    <>
      <div className="flex gap-2 items-center text-purple-300 mx-auto w-4xl">
        <div className="flex gap-2 items-center text-purple-300 mx-auto w-4xl">
          {CARD_DATA.map((card) => (
            <Button
              key={card.title}
              name={card.title}
              onClick={() =>
                setSelected(CONTENT_DATA[card.title.toLowerCase()])
              }
              isActive={selected === CONTENT_DATA[card.title.toLowerCase()]}
            />
          ))}
        </div>
      </div>
      <div className="items-center bg-purple-900 w-4xl mx-auto p-6 rounded text-white shadow-2xl">
        {tabContent}
      </div>
    </>
  );
}
export default Examples;