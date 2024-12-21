// src/Greeting.tsx
import React from 'react';

// Define the type for the props
interface GreetingProps {
  name: string;
}

// Functional component that accepts the name prop
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
