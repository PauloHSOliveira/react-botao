import React from 'react';
import { FiUser } from 'react-icons/fi';
import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Button
        background="#f00"
        color="#000"
        iconStart={<FiUser size={16} />}
        iconEnd={<FiUser size={16} />}
      >
        Botão teste
      </Button>
    </>
  );
}

export default App;
