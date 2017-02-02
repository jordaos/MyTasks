app.controller('TasksCtrl', function ($scope, Tasks, $stateParams, $location) {
  var tasks = Tasks;

  $scope.list = tasks.items;

  $scope.showFinished = true;

  /* Home */
  $scope.onClickCheck = function (item) {
    item.finished = !(item.finished);
    tasks.save();
  };

  $scope.onHideItem = function (item) {
    return item.finished && !$scope.showFinished;
  };

  $scope.onItemDelete = function (item) {
    tasks.remove(item);
    tasks.save();
  };

  $scope.go = function (path) {
    $location.path(path);
  };

  /* LIST ATRIBUTES*/
  $scope.data = {
    showDelete: false
  };
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.list.splice(fromIndex, 1);
    $scope.list.splice(toIndex, 0, item);
    tasks.save();
  };

  /* Adicionar */

  $scope.onItemAdd = function (item) {
    tasks.add(angular.copy(item));
    tasks.save();
    item.titulo = '';
    item.descricao = '';
    $location.path('/tab/home');
  };

  /* Editar */
  var index = $stateParams.taskIndex;
  $scope.item = $scope.list[index];

  $scope.onItemEdit = function (item) {
    $scope.item = item;
    tasks.save();
    $location.path('/tab/home');
  }
});
