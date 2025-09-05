import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 'adsv',
      label: 'Can I user React on a Project',
      content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
    },
    {
      id: 'adsf',
      label: 'Can I user JS on a Project',
      content: 'You can use JS on any project you want.You can use JS on any project you want.You can use JS on any project you want.You can use JS on any project you want.'
    },
    {
      id: 'sabdadsv',
      label: 'Can I user CSS on a Project',
      content: 'You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want.You can use CSS on any project you want.'
    },
  ]; 

  return <Accordion items={items} />;
}

export default App;
