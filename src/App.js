import Layout from "./component/Layout";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  const appHeight = () => {
    let vhBorderBottom = 1;

    if (window.innerWidth > 500) vhBorderBottom = 1.5;
    if (window.innerWidth > 650) vhBorderBottom = 1.8;
    if (window.innerWidth > 800) vhBorderBottom = 2;
    if (window.innerWidth > 1000) vhBorderBottom = 2.5;
    if (window.innerWidth > 1200) vhBorderBottom = 3;
    if (window.innerWidth > 1400) vhBorderBottom = 3.5;

    const heightInVh =
      100 * (ref.current.offsetHeight / window.innerHeight) + vhBorderBottom;
    return heightInVh;
  };

  return (
    <div ref={ref} className='App'>
      <Layout appHeight={appHeight} />
    </div>
  );
}

export default App;
