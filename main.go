package main

import (
	"fmt"
	"time"
)

func generateHexColors() []string {
	colors := make([]string, 0, 256*256*256) // Preallocate memory for performance
	for r := 0; r < 256; r++ {              // Loop for red channel
		for g := 0; g < 256; g++ {          // Loop for green channel
			for b := 0; b < 256; b++ {      // Loop for blue channel
				// Convert RGB to Hex
				hexColor := fmt.Sprintf("#%02x%02x%02x", r, g, b)
				colors = append(colors, hexColor)
			}
		}
	}
	return colors
}

func main() {
	startTime := time.Now()
	fmt.Printf("Start: %v\n", startTime)

	// Generate all colors
	allColors := generateHexColors()

	// Example: Display the number of colors
	fmt.Printf("Generated %d hex colors.\n", len(allColors))
	// Uncomment the line below to print all colors (Warning: It's a huge list!)
	// fmt.Println(allColors)

	endTime := time.Now()
	fmt.Printf("End: %v\n", endTime)

	totalTime := endTime.Sub(startTime)
	fmt.Printf("Total time: %v\n", totalTime)
}
