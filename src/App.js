import { useState } from 'react';
import Form from './components/Form';
import Response from './components/Response';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Form setValue={setValue} value={value} />
      <Response value={value} />
    </div>
  );
}

export default App;
