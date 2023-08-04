import Layout from "./component/Layout";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  const appHeight = () => {
    let vhBorderBottom = 2.45;

    if (window.innerWidth > 1200) vhBorderBottom = 3;
    if (window.innerWidth > 1600) vhBorderBottom = 4;

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
