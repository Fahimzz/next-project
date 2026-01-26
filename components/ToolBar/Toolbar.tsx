"use client";

import Button from "./button";

export default function Toolbar() {
  return (
    <div>
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
