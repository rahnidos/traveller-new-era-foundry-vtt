export default class TNEItemSheet extends ItemSheet {

  static get defaultOptions(){
    return mergeObject(super.defaultOptions, {
      width: 530,
      height: 540,
      classes: ["tne","sheet","item"]
    })
  }

  get template() {
    return `systems/tne/templates/sheets/${this.item.data.type}-sheet.html`;
  }

  getData() {
    const data = super.getData();
    data.config=CONFIG.tne;
    return data;
  }
}
