import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Arrows from "./components/Arrows";
import PlusMinus from "./components/PlusMinus";

function App() {
  return (
    <div className="min-h-screen">
      <div className="h-15-vh">
        <Header />
      </div>
      <div className="bg-slate-200 h-85-vh relative">
        <div className="h-full">
          <Navbar />
          <div className="absolute right-0 top-0 p-5 flex gap-5">
            <CTA text="Fijar" />
            <CTA text="Borrar" />
          </div>
        </div>
        <div className="absolute right-0 bottom-0 p-5 flex gap-5">
          <PlusMinus />
          <Arrows />
        </div>
      </div>
    </div>
  );
}

export default App;
