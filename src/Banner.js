import { Segment } from "semantic-ui-react";
import React from "react";

const Banner = ({ image, title }) => {
  const bg = image ? image : "https://source.unsplash.com/600x600/?envelopes";
  return (
    <Segment
      style={{
        minHeight: "50vh",
        backgroundImage: `url('${bg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#000",
        filter: "grayscale(0.9) hue-rotate(226deg) brightness(1.15)",
        padding: "0"
      }}
      inverted
    >
      <div
        style={{
          minHeight: "50vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#FFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: "4rem",
          lineHeight: "5rem",
          flexShrink: "1",
          filter: "dropShadow(16px 16px 10px rgba(0, 0, 0, 0.9))"
        }}
      >
        {title}
      </div>
    </Segment>
  );
};
export default Banner;
