import React, { useState } from "react";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AccordionSection, Container, Wrap, DropDown, Component } from "./styles";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00ffb9", size: "24px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <Component key={index}>
                <Wrap onClick={() => toggle(index)}>
                  <h1>{item.title}</h1>
                  <span>
                    {clicked === index ? (
                      <RiArrowDropUpLine size="48px" />
                    ) : (
                      <RiArrowDropDownLine size="48px" />
                    )}
                  </span>
                </Wrap>
                {clicked === index ? (
                  <DropDown>
                    <p>{item.text}</p>
                  </DropDown>
                ) : null}
              </Component>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
