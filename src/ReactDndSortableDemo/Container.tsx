import React, { useState, useCallback } from "react";
import { Card } from "./Card";
import update from "immutability-helper";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library",
    },
    {
      id: 2,
      text: "Make it generic enough",
    },
    {
      id: 3,
      text: "Write README",
    },
    {
      id: 4,
      text: "Create some examples",
    },
    {
      id: 5,
      text:
        "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    },
    {
      id: 6,
      text: "???",
    },
    {
      id: 7,
      text: "PROFIT",
    },
  ]);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  const renderCard = (card: { id: number; text: string }, index: number) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: 800,
          padding: 20,
          marginTop: 50,
          backgroundColor: "#fff",
        }}
      >
        {cards.map((card, i) => renderCard(card, i))}
      </div>
    </DndProvider>
  );
};
