import React from "react";
import bg from "./assets/bg.svg";

const App = () => {
  return (
    <div
      className="App p-1 flex flex-col items-center justify-center animate-bg-fade-in"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        weight: "100vw",
        overflow: "auto",
      }}
    >
      <div className="bg-white w-2/6 px-16 py-8 shadow-xl rounded-xl flex flex-col items-center justify-center">
        <h1 class="text-3xl">Hello</h1>
      </div>
    </div>
  );
};

export default App;
