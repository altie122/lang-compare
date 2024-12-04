
// Function to generate all hex colors
function generateHexColors() {
  const colors = [];
  for (let r = 0; r <= 255; r++) {
    for (let g = 0; g <= 255; g++) {
      for (let b = 0; b <= 255; b++) {
        // Convert RGB to Hex
        const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        colors.push(hexColor);
      }
    }
  }
  return colors;
}

const start_time = Math.floor(Date.now() / 1000)
console.log(`Start: ${start_time}`)

// Generate all colors
const allColors = generateHexColors();

// Example: Display the number of colors
console.log(`Generated ${allColors.length} hex colors.`);
// console.log(allColors); // Warning: This will print a massive array!
const end_time = Math.floor(Date.now() / 1000)
console.log(`End: ${end_time}`)

const total_time = end_time - start_time
console.log(`Total Time: ${total_time}`)