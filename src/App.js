import React from "react";

import withGrayScale from "./components/withGrayScale";
import awesomeImage from "./components/awesomeImage";


const GrayScaleImage = withGrayScale(awesomeImage, { value: 0.9 });

export default function App() {
  return (
    <div className="App">
      <GrayScaleImage URL="https://thuthuatnhanh.com/wp-content/uploads/2020/03/hinh-ve-de-thuong-cute.jpg"></GrayScaleImage>
    </div>
  );
}
