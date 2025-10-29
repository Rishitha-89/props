import React from "react";
import Media from "./Media";

const Props = () => {
  return (
    <div>
      <Media
        name="John"
        age="32 years"
        email="john@gmail.com"
        numb={123456789}
        location="xyz"
      />
      <Media
        name="Lily"
        age="20 years"
        email="lily@gmail.com"
        numb={234567199}
        location="abc"
      />
    </div>
  );
};

export default Props;
