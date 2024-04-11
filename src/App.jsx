import { useState } from 'react';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const inputIsValid = duration >= 1;

  function handleInputChange(event) {
    switch (event.target.name) {
      case ("initialInvestment"):
        setInitialInvestment(parseInt(event.target.value));
        break;

      case ("annualInvestment"):
        setAnnualInvestment(parseInt(event.target.value));
        break;

      case ("expectedReturn"):
        setExpectedReturn(parseInt(event.target.value));
        break;

      case ("duration"):
        setDuration(parseInt(event.target.value));
        break;
    }
  }

  const userInput = {
    "initialInvestment": initialInvestment,
    "annualInvestment": annualInvestment,
    "expectedReturn": expectedReturn,
    "duration": duration,
  }

  return (
    <main>
      <UserInput onInputChange={handleInputChange}/>
      {!inputIsValid && <p className='center'>Please enter a duration greater than 0</p>}
      {inputIsValid && <Result userInput={userInput}/>}
    </main>
  )
}

export default App
