import Copyright from "../../../components/InspirationGenerator/Copyright";
import FancyText from "../../../components/InspirationGenerator/FancyText";
import InspirationGenerator from "../../../components/InspirationGenerator/InspirationGenerator";
import Item from "../../../components/Item/item";

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
export default function Home() {
   const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <div>
    Home Lab Page
    <Item name="Laptop" isPacked={true} />
    <Item name="Book" isPacked={false} />
    <ul>{listItems}</ul>

    <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
  </div>;
}
