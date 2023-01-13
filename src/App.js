import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "wrtyys",
      label: "Can I use react on a project",
      content: "You can use react on any project",
    },
    {
      id: "jkshdfujhbv",
      label: "Can I use css on a project",
      content: "You can use css on any project",
    },
    {
      id: "qwetyuhc",
      label: "Can I use Javascript on a project",
      content: "You can use Javascript on any project",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
