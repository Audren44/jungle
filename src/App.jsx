// import  SoundContextProvider from "./context/SoundContext";
import { Outlet } from "react-router-dom";



function App() {

  return (
    <>
      {/* <SoundContextProvider> */}
      <Outlet />
      {/* </SoundContextProvider> */}
    </>
  );
}

export default App
