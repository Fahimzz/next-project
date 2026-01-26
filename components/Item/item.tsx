interface ItemProps {
  name: string;
  isPacked: boolean;
}

export default function Item({ name, isPacked }: ItemProps) {
    if (isPacked) {
    return <li className="item item--packed">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}