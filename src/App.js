import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 to-purple-500 flex items-center justify-center">
      <div className="text-white text-center p-10 rounded-xl shadow-lg bg-white/10 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-4">Emotion Player 🎵</h1>
        <p className="text-lg">계절 테마에 따라 감성 음악을 즐겨보세요</p>
      </div>
    </div>
  );
}

export default App;