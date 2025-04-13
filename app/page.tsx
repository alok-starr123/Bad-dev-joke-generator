'use client';
import React, { useState } from 'react';

  
  const jokes = [
    {
    question: "Why do progrramers prefer dark mode?",
    answer: "-Because light attracts bugs🐞!"
    },
    {
      question:"Why do Java developers wear glasses?",
      answer: "-Because they don't C👁️"
    },
    {
      question: "Why did the developer quit his job?",
      answer: "-Because he didn't get arrays (a raise)🤣."
    },
    {
      question: "How many programmer's does it take to change a light blub💡?",
      answer: "-None that's a hardware problem🤣"
    },
    {
      question: "Why did the Python🐍 developer go broke?",
      answer: "-Because he couldn't tuple his income"
    },
    {
      question: "Why did Git break up with Github💔?",
      answer: "-Because it needed more space"
    },
    {
      question: "How does a coffee-loving dev debug?",
      answer: "-With Java"
    },
    {
      question: "Why did the developer go broke?",
      answer: "-Because he used up all his cache."
    },
    {
      question: "How do you comfort a JavaScript bug?",
      answer: "-You console it."
    },
  ];
export default function Home() {
  const [currentJoke, setCurrentJoke] = useState(jokes[0])
  
const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length)
  setCurrentJoke(jokes[randomIndex])
}
const copyJoke = async () => {
  const fullJoke = `$
  {currentJoke.question} $
  {currentJoke.answer}`
  await
  navigator.clipboard.writeText(fullJoke)
  alert(`Joke copied to clipboard!`)
}

  return (
    <div>
    <main className="min-h-screen bg-yellow-100 flex items-center justify-center relative overflow-hidden">
      <span className="absolute top-6 left-8 text-3xl">🧑🏻‍💻</span>
      <span className="absolute top-6 right-8 text-3xl">🧠</span>
      <span className="absolute bottom-6 left-10 text-3xl">😊</span>
      <span className="absolute bottom-6 right-10 text-3xl">🐞</span>
      <span className="absolute top-1/3 right-6 text-3xl">☕</span>
      <span className="absolute top-1/3 left-6 text-3xl">🛠️</span>
      <span className="absolute bottom-1/3 right-10 text-3xl">🤣</span>
      <span className="absolute bottom-1/3 left-10 text-3xl">❤️</span>
      
      <div className="max-w-xl w-full text-center space-y-6 z-10">
        <h1 className="text-4xl font-bold text-gray-900">Dev Joke<br />Generator</h1>

        <div className="bg-white p-6 rounded-3xl shadow-md min-h-[120px]
        space-y-2 text-lg text-gray-800">
          <p>{currentJoke.question}</p>
          <p
          className="font-semibold">{currentJoke.answer}</p>
        </div>

      
        <button 
        onClick={() => getRandomJoke()}
        className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold
        hover:bg-gray-800 transition-all">
          
          Crack Me Up
        </button>

        <button
        onClick={copyJoke}
        className="bg-gray-200 text-gray-800 px-4 py-2 text-sm rounded-full hover:bg-gray-300 transition-all">

          Copy Joke
        </button>
      </div>
    </main>

    <footer className="text-center py-4 text-sm text-gray-500">
      Built with☕& bad jokes by
      <span className="font-medium">Alok SIngh</span>
    </footer>
    </div>
  );
};