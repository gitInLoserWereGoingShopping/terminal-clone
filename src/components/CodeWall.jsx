import React from "react";
import {
  kindlyRequestNewHexString,
  shuffleArray,
  glitchString,
} from "../utils";
import "./CodeWall.css";

const HackerCodeWall = () => {
  const [shake, setShake] = React.useState(false);
  const [colorTemp, setColorTemp] = React.useState(50); // Initial color temperature
  const [bounceProbability, setBounceProbability] = React.useState(0.3); // Initial bounce probability
  const [glitchProbability, setGlitchProbability] = React.useState(0.1); // Initial glitch probability
  const [hexStrings, setHexStrings] = React.useState(
    shuffleArray(
      new Array(100).fill(null).map((_, idx) => kindlyRequestNewHexString())
    )
  );

  console.log({
    bounceProbability,
    glitchProbability,
  });

  React.useEffect(() => {
    const animationId = requestAnimationFrame(function animate() {
      setHexStrings((prevHexStrings) => {
        const newHexStrings = [...prevHexStrings];
        let glitchOccurred = false;
        // Apply glitches and individual effects
        for (let i = 0; i < newHexStrings.length; i++) {
          if (Math.random() < glitchProbability) {
            // Use glitchProbability here
            newHexStrings[i] = glitchString(newHexStrings[i]);
            glitchOccurred = true;
          }
        }
        if (glitchOccurred) {
          setShake(true);
          setTimeout(() => setShake(false), 100);
        }
        return shuffleArray(newHexStrings);
      });
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [bounceProbability, glitchProbability]);

  const handleColorTempChange = (event) => {
    setColorTemp(parseInt(event.target.value, 10));
  };

  const handleGetBouncyClick = () => {
    setBounceProbability(1); // Set bounce probability to 100%
  };

  const handleGetGlitchyClick = () => {
    setGlitchProbability(1); // Set glitch probability to 100%
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={colorTemp}
        onChange={handleColorTempChange}
      />
      <button onClick={handleGetBouncyClick}>Get Bouncy!</button>
      <button onClick={handleGetGlitchyClick}>Get Glitchy!</button>{" "}
      {/* Add "Get Glitchy!" button */}
      <div className={`hackerCodeWall ${shake ? "shake" : ""}`}>
        {hexStrings.map((hexString, idx) => (
          <div
            key={hexString + idx}
            style={{
              color: `hsl(${Math.random() * 360}, 100%, ${colorTemp}%)`,
              transform: `translate(${Math.random() * 10 - 5}px, ${
                Math.random() * 10 - 5
              }px)`,
              animation: `${Math.random() * 2 + 1}s scatter infinite linear, ${
                Math.random() < 0.2
                  ? `${Math.random() * 5 + 2}s swirl infinite linear`
                  : "none"
              }, ${
                Math.random() < bounceProbability
                  ? `${Math.random() * 3 + 1}s bounce infinite ease-in-out`
                  : "none"
              }`, // Use bounceProbability here
              opacity: Math.random() < 0.1 ? 0 : 0.8,
            }}
          >
            {hexString}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackerCodeWall;
