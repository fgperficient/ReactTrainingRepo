import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [values, setvalues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const handleChange = (inputIdentifier, value) => {
    setvalues(prevValues => {
      return { ...prevValues, [inputIdentifier]: value };
    });
  };

  const isValid =
    values.duration > 0 &&
    values.annualInvestment >= 0 &&
    values.initialInvestment >= 0 &&
    values.expectedReturn >= 0;
  return (
    <>
      <Header />
      <UserInput values={values} onChange={handleChange} />
      {isValid && <p>Please enter valid data</p>}
      {isValid && <Results values={values} />}
    </>
  );
}

export default App;
