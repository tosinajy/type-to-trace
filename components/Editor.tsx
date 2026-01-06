"use client";

import { useState } from "react";
import Controls from "./Controls";
import Preview from "./Preview";

export default function Editor() {
  const [name, setName] = useState("Jordan Hayes");
  const [textTop, setTextTop] = useState(120);

  return (
    <section className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
      <Controls name={name} onNameChange={setName} />
      <Preview name={name} textTop={textTop} onTextTopChange={setTextTop} />
    </section>
  );
}
