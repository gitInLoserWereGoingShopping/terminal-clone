export function kindlyRequestNewHexString() {
  // Generate a random hex string (for passwords, keys, etc.)
  let hexString = Math.random().toString(16).substring(2, 15);
  return hexString;
}

export function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function glitchString(str) {
  // Randomly replace characters with "glitch" characters
  const glitchChars = "!@#$%^&*()_+~`|}🐇{[]:;?><,./-=";
  let glitchedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (Math.random() < 0.05) {
      // 5% chance of glitching a character
      glitchedStr +=
        glitchChars[Math.floor(Math.random() * glitchChars.length)];
    } else {
      glitchedStr += str[i];
    }
  }
  return glitchedStr;
}
