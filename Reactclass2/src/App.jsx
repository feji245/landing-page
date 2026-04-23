//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import { useState } from 'react';
//import './App.css'
//import Greeting from './Welcome';

//function App() {
  //return (
    //<div>
      //<h1>Hello React</h1>
      //<p>This is JSX</p>
    //</div>
  //);
//}

//export default App;

//import Greeting from './Welcome';

//function App() {
  //return (
    //<div>
      //<Greeting name="oge" />
      //<Greeting name="john"/>
    //</div>
  //);
//}

//import { useState } from "react";

//function App() {
  //const [count, setCount] = useState(0);

  //return (
    //<div>
      //<h3>Count: {count}</h3>
      //<button onClick={() => setCount(count + 4)}>Increase</button>
     // <button onClick={() => setCount(count - 3)}>Decrease</button>
    //</div>
  //);
//}

//export default App;



//import ProductCard from "./ProductCard"

//function App() {
  

  //return (
    //<div>
    //<ProductCard name="Laptop" price="250000"/>
    //<ProductCard name="headphone" price="50000"/>
    //<ProductCard name="Keyboard" price="10000"/>
    //</div>
  //);
//}


//export default App;

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";

function App() {
  return(
    <div>
    <Header/>

    <div style={{ display: "flex"}}>
      <ProfileCard
      name="fejiro"
      age="19"
      country="Nigeria"
      image="c:\Users\Oghenefejiro Edemu\Downloads\portrait 1.jpg"
      />
      <ProfileCard
      name="john bo"
      age="28"
      country="china"
      image="c:\Users\Oghenefejiro Edemu\Downloads\portrait 2.jpg"
      />

      <ProfileCard 
      name="walter do"
      age="38"
      country="America"
      image="https://media.istockphoto.com/id/184876509/photo/portrait-of-a-young-brazilian-man-outdoors.jpg?s=612x612&w=is&k=20&c=FtwRRNES6gqWiRfRrB0Z-8Hyn4J_J5lRuW6RWf1u4SA="
      />
      </div>


      <Counter />
      </div>
  );
}

export default App;
