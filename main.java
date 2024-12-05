import java.util.ArrayList;
import java.util.List;

public class main {

    public static List<String> generateHexColors() {
        List<String> colors = new ArrayList<>(256 * 256 * 256); // Preallocate for performance
        for (int r = 0; r < 256; r++) { // Loop for red channel
            for (int g = 0; g < 256; g++) { // Loop for green channel
                for (int b = 0; b < 256; b++) { // Loop for blue channel
                    // Convert RGB to Hex
                    String hexColor = String.format("#%02x%02x%02x", r, g, b);
                    colors.add(hexColor);
                }
            }
        }
        return colors;
    }

    public static void main(String[] args) {
        long startTime = System.currentTimeMillis()/1000;
        System.out.println("Start: " + startTime);

        // Generate all colors
        List<String> allColors = generateHexColors();

        // Example: Display the number of colors
        System.out.println("Generated " + allColors.size() + " hex colors.");
        // Uncomment the line below to print all colors (Warning: It's a huge list!)
        // System.out.println(allColors);

        long endTime = System.currentTimeMillis()/1000;
        System.out.println("End: " + endTime);

        long totalTime = endTime - startTime;
        System.out.println("Total time: " + totalTime + "s");
    }
}
