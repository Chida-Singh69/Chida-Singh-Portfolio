#!/bin/bash

# Create directories
mkdir -p public/assets

# Copy essential Minecraft assets to the public folder
cp -r src/assets/minecraft_grass_block.png public/assets/
cp -r src/assets/minecraft_crafting_table.png public/assets/
cp -r src/assets/minecraft_experience_bottle.png public/assets/
cp -r src/assets/minecraft_enchanted_book.png public/assets/
cp -r src/assets/minecraft_written_book.png public/assets/
cp -r src/assets/minecraft_compass.png public/assets/
cp -r src/assets/minecraft_player_head.png public/assets/
cp -r src/assets/minecraft_chest.png public/assets/
cp -r src/assets/minecraft_map.png public/assets/
cp -r src/assets/minecraft_diamond.png public/assets/

echo "Files copied successfully!"
