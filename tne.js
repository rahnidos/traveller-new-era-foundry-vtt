import {tne} from "./module/config.js";
import TNEItemSheet from "./module/sheets/TNEItemSheet.js";
import TNEiCharacterSheet from "./module/sheets/TNEiCharacterSheet.js";

async function preloadHandlebarsTemplates() {
  const templatePaths = [
    "systems/tne/templates/partials/attributes-stat-block.hbs",
    "systems/tne/templates/partials/weapon-card.hbs",
  ];
  return loadTemplates(templatePaths);
}

Hooks.once("init", function () {
  console.log('TNE Initializing');

  CONFIG.tne=tne;

  Items.unregisterSheet("core",ItemSheet);
  Items.registerSheet("tne",TNEItemSheet,{makeDefault:true});

  Actors.unregisterSheet("core",ActorSheet);
  Actors.registerSheet("tne",TNEiCharacterSheet,{makeDefault:true});

  preloadHandlebarsTemplates();
})
