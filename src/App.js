import React, { Children } from "react";
import Button from "./components/Button";
import { GoBell, GoDeviceCameraVideo, GoFlame } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button success>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button primary>
          <GoFlame />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDeviceCameraVideo />
          Close
        </Button>
      </div>
      <div>
        <Button danger>Something!</Button>
      </div>
      <div>
        <Button secondary outline rounded>
          Next
        </Button>
      </div>
      <div>
        <Button rounded success>
          Previous
        </Button>
      </div>
      <div>
        <Button outline>Test</Button>
      </div>
    </div>
  );
}

export default App;
