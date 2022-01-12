import logo from './logo.svg';
import './App.css';
import Card from './components/Cards/Card.js';
import Yandex from './components/Yandex/Yandex.js';

function App() {

  const cardsData = [
    {
      title: "Card title",
      imgSrc: logo,
      url: "#",
      urlTitle: "Go somewhere"
    },
    {
      title: "Special title treatment",
      url: "#",
      urlTitle: "Go anywhere"
    }
  ]

  //к сожалению, bootstrap слегка мешает дизайну яндекса, поэтому, пускайте return по очереди.
/*   return (
    <>
      <link rel="stylesheet" href="bootstrap.min.css"></link>
      <Card {...cardsData[0]} >
        <p>Some quick example text to build on the card title and make up the bulk of the card's content</p>
      </Card>

      <Card {...cardsData[1]} >
        <p>With supporting text below as a natural lead-in to additional content.</p>
      </Card>

      <Card {...cardsData[1]} />
    </>
  ); */

  return (
    <Yandex />
  )

}

export default App;
