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
    <div className="ceo-f">
      <div className="naslov-f">
        <div className="rectangle-f"></div>
        <div className="tekst_naslov-f">ČESTO POSTAVLJANA PITANJA</div>
      </div>
      <div className="wrapper-f">
        <div className="accordion-f">
          {dataF.map((item, i) => (
            <div className="item-f">
              <div className="title-f" onClick={() => toggle(i)}>
                <h2 style={{ color: selected === i ? "#00ffa3" : "#FFFFFF" }}>
                  {item.questionF}
                </h2>
                <span className="span-f">{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answerF}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const dataF = [
  {
    questionF: "Question 1",
    answerF:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus pariatur officia voluptate, iste itaque laboriosam facilis officiis velit enim quam odit suscipit dignissimos et molestiae autem dolores numquam impedit!",
  },
  {
    questionF: "Question 2",
    answerF:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus pariatur officia voluptate, iste itaque laboriosam facilis officiis velit enim quam odit suscipit dignissimos et molestiae autem dolores numquam impedit!",
  },
  {
    questionF: "Question 3",
    answerF:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus pariatur officia voluptate, iste itaque laboriosam facilis officiis velit enim quam odit suscipit dignissimos et molestiae autem dolores numquam impedit!",
  },
  {
    questionF: "Question 4",
    answerF:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus pariatur officia voluptate, iste itaque laboriosam facilis officiis velit enim quam odit suscipit dignissimos et molestiae autem dolores numquam impedit!",
  },
];

export default Faq;
