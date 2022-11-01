app.directive('customFileFunction', function () {
  return {
    restrict: 'A',
    // scope: {
    //   name: '='
    // },
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customFileFunction);
      element.on('change', onChangeHandler);
      element.on('$destroy', function() {
        element.off();
      });
    }
  };
});
