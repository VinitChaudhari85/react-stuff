import React from "react";
import { CARD_OBJECTS } from "./data";

function Card(props){
  return(
    <div className="text-white w-44 rounded-2xl flex flex-col justify-center items-center gap-2">
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

function App() {
  return (
    <div className="page min-h-screen min-w-screen bg-purple-950 flex flex-col items-center gap-5 pt-7">
      <h1 className="text-4xl text-purple-300">Some Title</h1>
      
      <p className="text-purple-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

      <div className="box bg-gray-900 text-white flex flex-col justify-center items-center rounded-2xl pt-3">
        <h2>Some Heading</h2>
        <div className="box2 grid grid-cols-4 gap-4 p-5">
          {/* <Card 
            image={CARD_OBJECTS[0].image}
            title={CARD_OBJECTS[0].title}
            content={CARD_OBJECTS[0].content}
          />
          <Card 
            image={CARD_OBJECTS[1].image}
            title={CARD_OBJECTS[1].title}
            content={CARD_OBJECTS[1].content}
          />
          <Card 
            image={CARD_OBJECTS[2].image}
            title={CARD_OBJECTS[2].title}
            content={CARD_OBJECTS[2].content}
          />
          <Card 
            image={CARD_OBJECTS[3].image}
            title={CARD_OBJECTS[3].title}
            content={CARD_OBJECTS[3].content}
          /> */}
          {CARD_OBJECTS.map((card,index)=>(
            <Card key={index} image={card.image} title={card.title} content={card.content}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
