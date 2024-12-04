def generate_hex_colors
  colors = []
  (0..255).each do |r| # Loop for red channel
    (0..255).each do |g| # Loop for green channel
      (0..255).each do |b| # Loop for blue channel
        # Convert RGB to Hex
        hex_color = format("#%02x%02x%02x", r, g, b)
        colors << hex_color
      end
    end
  end
  colors
end

start_time = Time.now.to_i
puts "Start: #{start_time}"

# Generate all colors
all_colors = generate_hex_colors

# Example: Display the number of colors
puts "Generated #{all_colors.length} hex colors."
# Uncomment the line below to print all colors (Warning: It's a huge list!)
# puts all_colors

end_time = Time.now.to_i
puts "End: #{end_time}"

total_time = end_time - start_time
puts "Total time: #{total_time}"
