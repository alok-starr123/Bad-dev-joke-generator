'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 text-white
    flex items-center justify-center px-4">

      <div className="max-w-xl w-full text-center space-y-6 z-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Dev Joke<br />Generator</h1>

        <motion.div
        key={currentJoke.question} initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}

         className="bg-white/10 backdrop-blur-md p-6 rounded-3x1 shadow-xl min-h-[120px]
         space-y-2 text-lg text-white border border-white/20">
          <p
          className="text-xl">{currentJoke.question}</p>
          <p
          className="font-semibold">{currentJoke.answer}</p>
        </motion.div>

      
        <button 
        onClick={() => getRandomJoke()}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all
        duration-200 active:scale-95 hover:brightness-110 hover:scale-105">
          
          Crack Me Up
        </button>

        <button
        onClick={copyJoke}
        className="bg-white/10 p-2 text-xl rounded-lg shadow-md hover:bg-white/20 transition-all duration-200
        active:scale-95 hover:scale-105">

          📋
        </button>
      </div>
    </main>

    <footer className="text-center py-4 text-sm text-gray-400">
      Built with☕& bad jokes by
      <span className="font-medium">Alok SIngh</span>
    </footer>
    </div>
  );
};