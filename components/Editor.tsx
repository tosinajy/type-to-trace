"use client";

import { useState } from "react";
import Controls from "./Controls";
import Preview from "./Preview";

export default function Editor() {
  const [name, setName] = useState("Jordan Hayes");
  const [textTop, setTextTop] = useState(120);
  const [font, setFont] = useState<"print" | "dotted" | "cursive">("print");

  return (
    <section className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
      <Controls
        name={name}
        onNameChange={setName}
        font={font}
        onFontChange={(value) => setFont(value as "print" | "dotted" | "cursive")}
      />
      <Preview
        name={name}
        textTop={textTop}
        onTextTopChange={setTextTop}
        font={font}
      />
    </section>
  );
}
