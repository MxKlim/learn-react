import { useState } from 'react';
import Button from './components/Button';
import Logo from './components/Logo';
import LogoImg from './components/LogoImg';
import Form from './components/Form';

function App() {
  const [control, setControls] = useState(true);


  function controlDisabled() {
    setControls(() => !control)
  }
 
  return (
    <section>
      <Button 
        control={control}
        handleClick={controlDisabled}
      >
        Button 1
      </Button>
      <Button 
        control={!control}
        handleClick={controlDisabled}
      >
        Button 2
      </Button>
      <Logo/>
      <LogoImg />
      <Form />
    </section>
  )
}

export default App