import { useState, useEffect } from "react"
import { FirstForm, SecondForm } from './components'
import 'react-toastify/dist/ReactToastify.css';
import { NotifyConteiner, error } from "./components/notify/notify";


const App = () => {
  let [currentStepIndex, setCurrentStepIndex] = useState(0)
  const steps = [<FirstForm next={next} notify={error}/>, <SecondForm/>]
  
  function next() {
      setCurrentStepIndex(() => currentStepIndex = 1)
  }

  useEffect(() => {
  }, [setCurrentStepIndex])

  return (
    <>
      <div className='container'>
        <div className='container__form'>
          <span>Step {currentStepIndex + 1} of {steps.length}</span>
          <h1>Create Account</h1>
          {steps[currentStepIndex]}
        </div>
      </div>
      <NotifyConteiner/>
    </>
  ) 
}

export default App
