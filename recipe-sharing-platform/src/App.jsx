import data from "./data.json";
import HomePage from "./components/HomePage";

export default function App() {
  const myData = data.map((dataObj) => {
    return <HomePage key={dataObj.id} {...dataObj} />;
  });

  return <div>{myData}</div>;
}
