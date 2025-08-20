import Header from "./components/Header/Header";

import JourneyData from "./components/Journey/Journey";
import Journey from "./components/Journey/Joutney";

export default function () {
  let MyElement = JourneyData.map((ele) => {
    return (
      <Journey
        key={ele.id}
        // title={ele.title}
        // img={ele.img}
        // date={ele.date}
        // country={ele.country}              => this is Reglur way
        // description={ele.description}
        // view={ele.view}
        // object={ele}                     => Use THe Object
        {...ele} // => use spreed Js
      />
    );
  });

  return (
    <>
      <Header />
      {MyElement}
    </>
  );
}
