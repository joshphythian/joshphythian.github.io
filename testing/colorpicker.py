from PIL import Image

# 1) Load your image
img = Image.open("/Users/joshp/Desktop/FUN_STUFF/CS_Projects/ThayerLabWebsite/wesleyan_university_shield.png")

# 2) (Optional) ensure it’s in RGB mode
img = img.convert("RGB")

# 3) Pick a pixel coordinate
x, y = 200, 200
x, y = 19, 15

# 4) Get its color as an (R, G, B) tuple
color = img.getpixel((x, y))
print(f"Pixel at ({x},{y}) has color {color}")