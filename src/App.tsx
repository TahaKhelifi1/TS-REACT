// src/App.tsx
import React from 'react';
import Greeting from './greeting';
import Counter from './Counter';

// App component rendering Greeting and Counter components
const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="John Doe" />
      <Counter />
    </div>
  );
};

export default App;

