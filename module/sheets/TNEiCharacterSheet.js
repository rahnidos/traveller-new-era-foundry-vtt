export default class TNEiCharacterSheet extends ActorSheet {
  static get defaultOptions(){
    return mergeObject(super.defaultOptions, {
      width: 600,
      template:"systems/tne/templates/sheets/iCharacter-sheet.hbs",
      classes:["tne","sheet","iCharacter"]
    });
  }

  getData() {
    const data = super.getData();
    data.config=CONFIG.tne;
    data.weapons=data.items.filter(function(item){ return item.type=="weapon"})
    return data
  }
}
