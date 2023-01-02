import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateCard(list) {
  return (
    <Entry
      key={list.id}
      emoji={list.emoji}
      name={list.name}
      meaning={list.meaning}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}
