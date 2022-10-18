import React from "react";
import { useState } from "react";
import "./faq.css";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="ceo">
      <div className="naslov">
        <div className="rectangle"></div>
        <div className="tekst_naslov">ČESTO POSTAVLJANA PITANJA</div>
      </div>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2 style={{ color: selected === i ? "#00ffa3" : "#FFFFFF" }}>
                  {item.question}
                </h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus pariatur officia voluptate, iste itaque laboriosam facilis officiis velit enim quam odit suscipit dignissimos et molestiae autem dolores numquam impedit!",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus pariatur officia voluptate, iste itaque laboriosam facilis officiis velit enim quam odit suscipit dignissimos et molestiae autem dolores numquam impedit!",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus pariatur officia voluptate, iste itaque laboriosam facilis officiis velit enim quam odit suscipit dignissimos et molestiae autem dolores numquam impedit!",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus pariatur officia voluptate, iste itaque laboriosam facilis officiis velit enim quam odit suscipit dignissimos et molestiae autem dolores numquam impedit!",
  },
];

export default Faq;
