import DemoButton from "./DemoButton";

type PlayButtonProps = {
  movieName: string;
};

export default function PlayButton({ movieName }: PlayButtonProps) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <DemoButton onClick={handlePlayClick}>Play "{movieName}"</DemoButton>;
}
