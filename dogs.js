class Dog {
  constructor(name, pottyTrained){
    this._name = name;
  }
  get name(){
  return this._name;
  }
}

class Bailey extends Dog{
  super(name, pottyTrained);
}
