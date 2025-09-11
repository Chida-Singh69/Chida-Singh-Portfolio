@echo off
REM Create directories
mkdir public\assets 2>nul

REM Copy essential Minecraft assets to the public folder
copy src\assets\minecraft_grass_block.png public\assets\ 
copy src\assets\minecraft_crafting_table.png public\assets\
copy src\assets\minecraft_experience_bottle.png public\assets\
copy src\assets\minecraft_enchanted_book.png public\assets\
copy src\assets\minecraft_written_book.png public\assets\
copy src\assets\minecraft_compass.png public\assets\
copy src\assets\minecraft_player_head.png public\assets\
copy src\assets\minecraft_chest.png public\assets\
copy src\assets\minecraft_map.png public\assets\
copy src\assets\minecraft_diamond.png public\assets\

echo Files copied successfully!
