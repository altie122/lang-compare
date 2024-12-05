use std::time::Instant;

fn generate_hex_colors() -> Vec<String> {
    let mut colors = Vec::new();
    for r in 0..256 { // Loop for red channel
        for g in 0..256 { // Loop for green channel
            for b in 0..256 { // Loop for blue channel
                // Convert RGB to Hex
                let hex_color = format!("#{:02x}{:02x}{:02x}", r, g, b);
                colors.push(hex_color);
            }
        }
    }
    colors
}

fn main() {
    let start_time = Instant::now();
    println!("Start: {:?}", start_time);

    // Generate all colors
    let all_colors = generate_hex_colors();

    // Example: Display the number of colors
    println!("Generated {} hex colors.", all_colors.len());
    // Uncomment the line below to print all colors (Warning: It's a huge list!)
    // println!("{:?}", all_colors);

    let elapsed_time = start_time.elapsed();
    println!("End: {:?}", Instant::now());
    println!("Total time: {:.2?}", elapsed_time);
}
