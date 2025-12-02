"use client";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type LetterPattern = number[][];
type LetterPatterns = {
  [key: string]: LetterPattern;
};
const letterPatterns:LetterPatterns = {
  // Existing letters
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  V: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
  ],
  T: [
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
  ],
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  Q: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1],
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  I: [
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
  ],
  C: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 1, 1],
  ],
  O: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  S: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  H: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  P: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  
  // New letters added for your words
  M: [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  R: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  N: [
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  B: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],

  // Space character
  " ": [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

// Blinking cursor component
function PixelCursor() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="grid grid-cols-1 gap-0 ml-2"
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.1 }}
    >
      {[...Array(5)].map((_, i) => (
        <div key={i} className="size-2 bg-[#333] dark:bg-white" />
      ))}
    </motion.div>
  );
}

// Component to render a single pixel letter
const PixelLetter = ({
  letter,
  isVisible = true,
}: {
  letter: string;
  isVisible: boolean;
}) => {
  const pattern = letterPatterns[letter.toUpperCase() as string];

  if (!pattern) return null;

  return (
    <div className="grid grid-cols-4 gap-0">
      {pattern.map((row, rowIndex) =>
        row.map((pixel, pixelIndex) => (
          <motion.div
            key={`${rowIndex}-${pixelIndex}`}
            className={`size-2 ${
              pixel && isVisible ? "bg-[#333] dark:bg-white" : "bg-transparent"
            }`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: pixel && isVisible ? 1 : 0,
              opacity: pixel && isVisible ? 1 : 0,
            }}
            transition={{
              delay: (rowIndex * 4 + pixelIndex) * 0.02,
              duration: 0.3,
              ease: "easeOut",
            }}
          />
        ))
      )}
    </div>
  );
};

// Typing direction enum
enum TypingDirection {
  Forward = 1,
  Backward = -1,
}

// Main pixel typing component
interface PixelTypingTextProps {
  text: string;
  delay?: number;
  repeat?: boolean;
  cursor?: ReactNode;
  className?: string;
  grow?: boolean;
  waitTime?: number;
  onComplete?: () => void;
  hideCursorOnComplete?: boolean;
}

function PixelTypingText({
  text,
  delay = 500,
  repeat = true,
  cursor = <PixelCursor />,
  className = "",
  grow = false,
  waitTime = 1000,
  onComplete,
  hideCursorOnComplete = false,
}: PixelTypingTextProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<TypingDirection>(
    TypingDirection.Forward
  );
  const [myInterval, setMyInterval] = useState<NodeJS.Timeout>(
    {} as NodeJS.Timeout
  );
  const [isComplete, setIsComplete] = useState(false);

  const letters = useMemo(() => text.split(""), [text]);
  const total = letters.length;

  // Main typing effect
  useEffect(() => {
    const startTyping = () => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + direction;

        if (direction === TypingDirection.Forward && newIndex >= total) {
          clearInterval(myInterval);
          return total;
        } else if (direction === TypingDirection.Backward && newIndex <= 0) {
          clearInterval(myInterval);
          return 0;
        }

        return newIndex;
      });
    };
    const newInterval = setInterval(startTyping, delay);
    setMyInterval(newInterval);
    return () => clearInterval(myInterval);
  }, [total, direction, delay]);

  // Handle repeat cycles
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index >= total && repeat) {
      timeout = setTimeout(() => {
        setDirection(TypingDirection.Backward);
      }, waitTime);
    }

    if (index <= 0 && repeat && direction === TypingDirection.Backward) {
      timeout = setTimeout(() => {
        setDirection(TypingDirection.Forward);
      }, waitTime);
    }

    return () => clearTimeout(timeout);
  }, [index, total, repeat, waitTime, direction]);

  // Handle completion
  useEffect(() => {
    if (index === total && !repeat) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [index, total, repeat, onComplete]);

  const showCursor = cursor && (!hideCursorOnComplete || !isComplete);

  return (
    <div className={`relative ${className}`}>
      {!grow && (
        <div className="invisible flex gap-4">
          {letters.map((letter, i) => (
            <PixelLetter key={i} letter={letter} isVisible={true} />
          ))}
        </div>
      )}

      <div className={grow ? "" : "absolute inset-0 h-full w-full"}>
        <div className="flex gap-4 items-center">
          {letters.map((letter, letterIndex) => (
            <PixelLetter
              key={letterIndex}
              letter={letter}
              isVisible={letterIndex < index}
            />
          ))}

          {showCursor && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {cursor}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}

// Demo component with multiple words
export default function PixelTypingDemo() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["BUILD", "SHIP", "LEARN", "REPEAT"];
   const [showText, setShowText] = useState(false);
  // Start after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleComplete = () => {
    setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
  };

  return (
    <div className="flex  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    {showText && (
        <PixelTypingText
          key={currentWordIndex}
          text={words[currentWordIndex]}
          delay={300}
          cursor={false}
          repeat={false}
          waitTime={1000}
          onComplete={handleComplete}
          className="font-mono"
        />
      )}
    </div>
  );
}
