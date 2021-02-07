export class Reasignable {
  value: any = null;
  type = null;
  min = null;
  max = null;
  message = null;

  constructor(value, type, options: any = {}) {
    this.value = value;
    this.type = type;
    this.min = options.min;
    this.max = options.max;
    this.message = options.message;
  }

}

