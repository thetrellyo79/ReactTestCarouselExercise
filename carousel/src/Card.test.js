import React from "react";
import { getByTestId, fireEvent, render } from "@testing-library/react";
import Card from "./Card";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("matches snapshot", function() {
    const {asFragment} = render (<Card />);
    expect(asFragment()).toMatchSnapshot();
  });




it("the arrow is gone", function() {
    const { getByTestId } = render(<Carousel photos={TEST_IMAGES}
      title="images for testing"/>)
      
    fireEvent.click(getByTestId("left-arrow"));

    // style={{display : "none"}}
})