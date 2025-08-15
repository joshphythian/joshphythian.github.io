# get_color.py
from PIL import Image
import sys

if len(sys.argv) != 4:
    print("Usage: python get_color.py <image_path> <x> <y>")
    sys.exit(1)

img_path = sys.argv[1]
x = int(sys.argv[2])
y = int(sys.argv[3])

# Load and convert to RGB
img = Image.open(img_path).convert("RGB")

# Get pixel color
r, g, b = img.getpixel((x, y))
hex_color = "#{:02x}{:02x}{:02x}".format(r, g, b)

print(f"Pixel at ({x},{y}): RGB({r}, {g}, {b})  HEX {hex_color}")