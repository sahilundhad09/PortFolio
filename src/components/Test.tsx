import { useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Tailwind CSS is working!</h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-white text-purple-600 rounded-full hover:bg-purple-100 transition-colors"
      >
        Increment
      </button>
    </div>
  );
};

export default Test;