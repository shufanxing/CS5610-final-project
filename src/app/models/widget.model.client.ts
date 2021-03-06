export class Widget {
  _id: String;
  name: String;
  placeholder: String;
  description: String;
  width: String;
  height: String;
  rows: Number;
  class: String;
  icon: String;
  deletable: Boolean;
  formatted: Boolean;
  widgetType: String;
  rid: String;
  size: String;
  text: String;
  url: String;
  position: Number;



  constructor(_id: String, type: String, rid: String, size: String, text: String, width: String, url: String, position: Number) {
    this._id = _id;
    this.widgetType = type;
    this.rid = rid;
    this.size = size;
    this.url = url;
    this.text = text;
    this.width = width;
    this.position = position;

  }
}

