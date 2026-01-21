import { useState } from "react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    { title: "What is React?", content: "React is a JavaScript library for building UIs." },
    { title: "What is Tailwind?", content: "Tailwind is a utility-first CSS framework." },
    { title: "What is an Accordion?", content: "An accordion shows and hides content when clicked." },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      {data.map((item, index) => (
        <div key={index} className="border rounded-lg">
          
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 font-medium text-left"
          >
            {item.title}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>

          {/* Content */}
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
