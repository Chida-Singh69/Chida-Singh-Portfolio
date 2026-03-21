import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = ({ mode = 'overworld' }) => {
  const minecraftIcons = [
    'minecraft_apple.png',
    'minecraft_diamond.png',
    'minecraft_emerald.png',
    'minecraft_gold_block.png',
    'minecraft_iron_block.png',
    'minecraft_obsidian.png',
    'minecraft_dirt.png',
    'minecraft_grass_block.png',
    'minecraft_stone.png',
    'minecraft_oak_log.png',
    'minecraft_oak_planks.png',
    'minecraft_crafting_table.png',
    'minecraft_furnace.png',
    'minecraft_chest.png',
    'minecraft_beacon.png',
    'minecraft_ender_chest.png',
    'minecraft_enchanting_table.png',
    'minecraft_bookshelf.png',
    'minecraft_redstone_block.png',
    'minecraft_lapis_block.png',
    'minecraft_torch.png',
    'minecraft_redstone_torch.png',
    'minecraft_lantern.png',
    'minecraft_amethyst_block.png',
    'minecraft_deepslate.png',
    'minecraft_copper_block.png',
    'minecraft_diamond_sword.png',
    'minecraft_diamond_pickaxe.png',
    'minecraft_golden_apple.png',
    'minecraft_ender_eye.png',
    'minecraft_nether_star.png',
    'minecraft_bedrock.png',
    'minecraft_sand.png',
    'minecraft_gravel.png',
    'minecraft_oak_leaves.png',
    'minecraft_cobweb.png',
    'minecraft_mossy_cobblestone.png',
    'minecraft_ice.png',
    'minecraft_snow_block.png',
    'minecraft_cactus.png',
    'minecraft_clay.png',
    'minecraft_netherrack.png',
    'minecraft_soul_sand.png',
    'minecraft_glowstone.png',
    'minecraft_end_stone.png',
    'minecraft_anvil.png',
    'minecraft_oak_door.png',
    'minecraft_iron_door.png',
    'minecraft_trapdoor.png',
    'minecraft_ladder.png',
    'minecraft_rail.png',
    'minecraft_powered_rail.png',
    'minecraft_spruce_log.png',
    'minecraft_birch_log.png',
    'minecraft_jungle_log.png',
    'minecraft_dark_oak_log.png',
    'minecraft_acacia_log.png',
    'minecraft_pumpkin.png',
    'minecraft_carved_pumpkin.png',
    'minecraft_jack_o_lantern.png',
    'minecraft_melon.png',
    'minecraft_hay_block.png',
    'minecraft_iron_bars.png',
    'minecraft_quartz_block.png',
    'minecraft_purpur_block.png',
    'minecraft_end_rod.png',
    'minecraft_dragon_egg.png',
    'minecraft_shulker_box.png',
    'minecraft_prismarine.png',
    'minecraft_sea_lantern.png',
    'minecraft_magma_block.png',
    'minecraft_bell.png',
    'minecraft_amethyst_cluster.png',
    'minecraft_cake.png',
    'minecraft_repeater.png',
    'minecraft_comparator.png',
    'minecraft_hopper.png',
    'minecraft_dropper.png',
    'minecraft_dispenser.png',
    'minecraft_observer.png',
    'minecraft_note_block.png',
    'minecraft_jukebox.png',
    'minecraft_baked_potato.png',
    'minecraft_brewing_stand.png',
    'minecraft_dark_oak_door.png',
    'minecraft_diamond_block.png',
    'minecraft_end_portal_frame.png',
    'minecraft_fire_coral_block.png',
    'minecraft_flower_pot.png',
    'minecraft_gilded_blackstone.png',
    'minecraft_grindstone.png',
    'minecraft_iron_ore.png',
    'minecraft_lodestone.png',
    'minecraft_moss_block.png',
    'minecraft_mud_bricks.png',
    'minecraft_netherite_block.png',
    'minecraft_nether_brick.png',
    'minecraft_podzol.png',
    'minecraft_polished_blackstone.png',
    'minecraft_prismarine_bricks.png',
    'minecraft_raw_copper_block.png',
    'minecraft_raw_gold_block.png',
    'minecraft_raw_iron_block.png',
    'minecraft_redstone_ore.png',
    'minecraft_scaffolding.png',
    'minecraft_shroomlight.png',
    'minecraft_smithing_table.png',
    'minecraft_smoker.png',
    'minecraft_spawner.png',
    'minecraft_stone_bricks.png',
    'minecraft_teal_tuff_lore_bricks.png',
    'minecraft_tinted_glass.png',
    'minecraft_tuff.png',
    'minecraft_chiseled_stone_bricks.png',
    'minecraft_crossbow.png',
    'minecraft_enchanted_book.png',
    'minecraft_iron_pickaxe.png',
    'minecraft_trident.png',
    'minecraft_armor_stand.png',
    'minecraft_item_frame.png',
    'minecraft_painting.png',
    'minecraft_barrel.png',
    'minecraft_blast_furnace.png',
    'minecraft_cartography_table.png',
    'minecraft_lectern.png',
    'minecraft_wet_sponge.png',
    'minecraft_dripstone_block.png',
    'minecraft_deepslate_bricks.png',
    'minecraft_polished_deepslate.png',
  ];

  const contactIcons = {
    email: 'minecraft_writable_book.png',
    linkedin: 'minecraft_lapis_lazuli.png',
    github: 'minecraft_coal_block.png',
  };

  const [currentIcon, setCurrentIcon] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    generateNewIcon();
  }, []);

  const generateNewIcon = () => {
    const randomIcon = minecraftIcons[Math.floor(Math.random() * minecraftIcons.length)];
    const cleanName = randomIcon.replace('minecraft_', '').replace('.png', '').replace(/_/g, ' ');
    setCurrentIcon(randomIcon);
    setCorrectAnswer(cleanName);
    setGuess('');
    setMessage('');
    setShowMessage(false);
  };

  const handleGuess = () => {
    if (guess.toLowerCase().trim() === correctAnswer.toLowerCase()) {
      setMessage('Nerdddd, now go touch grass');
      setShowMessage(true);
    } else {
      setMessage(`Nope! The answer was: ${correctAnswer}`);
      setShowMessage(true);
    }
  };

  const handleNewIcon = () => {
    generateNewIcon();
  };

  return (
    <div className={`minecraft-contact ${mode}`}>
      <div className="transmission-beacon">
        <div className="beacon-container">
          {/* Guessing Game */}
          <div className="beacon-left">
            <h2 className="beacon-title">ICON GUESS</h2>
            <div className="game-section">
              <div className="icon-display">
                {currentIcon && (
                  <img 
                    src={`/assets/${currentIcon}`} 
                    alt="Minecraft Icon" 
                    className="game-icon"
                  />
                )}
              </div>
              <div className="guess-input-wrapper">
                <input 
                  type="text" 
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleGuess()}
                  placeholder="What is it?"
                  className="guess-input"
                />
                <button onClick={handleGuess} className="guess-button">
                  GUESS
                </button>
              </div>
              {showMessage && (
                <div className={`guess-message ${message.includes('Nerdddd') ? 'correct' : 'incorrect'}`}>
                  {message}
                </div>
              )}
              <button onClick={handleNewIcon} className="new-icon-button">
                NEW ICON
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="beacon-right">
            <h2 className="beacon-title">CONTACT INFO</h2>
            <div className="contact-entries">
              <a href="mailto:singh.chida2004@gmail.com" className="log-entry">
                <img src={`/assets/${contactIcons.email}`} alt="Email" className="entry-icon" />
                <div className="entry-content">
                  <span className="log-label">EMAIL:</span>
                  <span className="log-value">singh.chida2004@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/chidananda-singh/" target="_blank" rel="noopener noreferrer" className="log-entry">
                <img src={`/assets/${contactIcons.linkedin}`} alt="LinkedIn" className="entry-icon" />
                <div className="entry-content">
                  <span className="log-label">LINKEDIN:</span>
                  <span className="log-value">linkedin.com/in/chidananda-singh</span>
                </div>
              </a>

              <a href="https://github.com/Chida-singh" target="_blank" rel="noopener noreferrer" className="log-entry">
                <img src={`/assets/${contactIcons.github}`} alt="GitHub" className="entry-icon" />
                <div className="entry-content">
                  <span className="log-label">GITHUB:</span>
                  <span className="log-value">github.com/chida-singh</span>
                </div>
              </a>

              <a href="https://github.com/Chida-Singh69" target="_blank" rel="noopener noreferrer" className="log-entry">
                <img src={`/assets/${contactIcons.github}`} alt="GitHub" className="entry-icon" />
                <div className="entry-content">
                  <span className="log-label">GITHUB (ALT cause free copilot):</span>
                  <span className="log-value">github.com/chida-singh69</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
