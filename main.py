import time
def generate_hex_colors():
    colors = []
    for r in range(256):  # Loop for red channel
        for g in range(256):  # Loop for green channel
            for b in range(256):  # Loop for blue channel
                # Convert RGB to Hex
                hex_color = f"#{r:02x}{g:02x}{b:02x}"
                colors.append(hex_color)
    return colors

start_time = int(time.time())
print(f"Start: {start_time}")
# Generate all colors
all_colors = generate_hex_colors()

# Example: Display the number of colors
print(f"Generated {len(all_colors)} hex colors.")
# Uncomment the line below to print all colors (Warning: It's a huge list!)
# print(all_colors)
end_time = int(time.time())
print(f"End: {end_time}")

total_time = end_time - start_time
print(f"total time: {total_time}")