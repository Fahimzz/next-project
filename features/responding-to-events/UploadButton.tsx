import DemoButton from "./DemoButton";

export default function UploadButton() {
  return <DemoButton onClick={() => alert("Uploading!")}>Upload Image</DemoButton>;
}
