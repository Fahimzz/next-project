import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

export default function Toolbar() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
