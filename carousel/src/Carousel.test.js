import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import '@testing-library/jest-dom';


it("works when you click on the right arrow", function() {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
});

it("clicking the left arrow will move you to the first image", function() {
  const { getByText, getByTestId } = render(<Carousel photos={TEST_IMAGES}
    title="images for testing"/>);
  const small = getByTestId("image-count");

  fireEvent.click(getByTestId("left-arrow"));

  expect(small.textContent).toBe("Image 2 of 3.");
  expect(small.textContent).not.toBe("1");
});


