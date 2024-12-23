import { Button } from "./input";

function App() {
  return (
    <>
      <div className="h-screen bf-blue-500">

        <br /><br /><br /><br />
        <Input type="text" placeholder={"Username"}></Input>
        <Button disabled={false}> Sign Up</Button>
        
      </div>
    </>
  );
}

export default App;
