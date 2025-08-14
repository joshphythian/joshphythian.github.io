import sys
# import PIL
from PIL import Image

def combine_side_by_side(img1_path, img2_path, output_path):
    # Open both images
    img1 = Image.open(img1_path).convert("RGBA")
    img2 = Image.open(img2_path).convert("RGBA")

    # Resize img2 to match img1 height
    img2_resized = img2.resize((img1.height, img1.height), Image.Resampling.LANCZOS)

    # Create combined canvas
    combined_width = img1.width + img2_resized.width
    combined_height = max(img1.height, img2_resized.height)
    combined_img = Image.new("RGBA", (combined_width, combined_height), (0, 0, 0, 0))

    # Paste both
    combined_img.paste(img1, (0, 0))
    combined_img.paste(img2_resized, (img1.width, 0))

    # Save
    combined_img.save(output_path, format="PNG")
    print(f"✅ Combined image saved to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python combine.py <image1> <image2> <output>")
        sys.exit(1)

    combine_side_by_side(sys.argv[1], sys.argv[2], sys.argv[3])