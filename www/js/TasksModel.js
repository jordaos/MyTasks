function getTasks(){
  this.items = angular.fromJson(localStorage.getItem('taskList'));


  this.save = function () {
    var lista = angular.toJson(this.items);
    localStorage.setItem('taskList', lista);
  }

  this.add = function (item) {
    this.items.push(item);
  }

  this.remove = function (item){
    var pos = this.items.indexOf(item);
    this.items.splice(pos, 1);
  };
}
