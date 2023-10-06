import { useState, useEffect } from "react";
import "./Carousel.css";
import Card from "./Card";
import { getByDisplayValue } from "@testing-library/react";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;
  const [hideArrow, setHideArrow] = useState(false);

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }


//
  useEffect(() => {
    if(currCardIdx === 3){
        setHideArrow(true);
      } else {
        setHideArrow(false);
      }
    }, [currCardIdx])
  

// 



  function goBack() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i data-testid = "left-arrow"
          className= {`bi bi-arrow-left-circle ${hideArrow ? "invisible" : " "} `}
          onClick={goBack}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i data-testid = "right-arrow"
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
