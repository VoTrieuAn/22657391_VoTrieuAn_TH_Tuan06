import Count from "./components/Count";
import InputText from "./components/InputText";

function App() {
  console.log("re render lại");
  return (
    <>
      <div className="h-[100vh]">
        <div className="flex h-full flex-col justify-center gap-4">
          <InputText />
          <Count />
        </div>
      </div>
    </>
  );
}

export default App;
