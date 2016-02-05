(function(angular) {
  'use strict';
function EditableFieldController($scope, $element, $attrs) {
  var ctrl = this;
  this.editMode = false;

  this.handleModeChange = function() {
    if (ctrl.editMode) {
      ctrl.onUpdate({value: ctrl.fieldValue});
      ctrl.fieldValueCopy = ctrl.fieldValue;
    }
    ctrl.editMode = !ctrl.editMode;
  };

  this.reset = function() {
    ctrl.fieldValue = ctrl.fieldValueCopy;
  };

  this.$onInit = function() {
    // Make a copy of the initial value to be able to reset it later
    this.fieldValueCopy = this.fieldValue;

    // Set a default fieldType
    if (!this.fieldType) {
      this.fieldType = 'text';
    }
  };
}

angular.module('heroApp').component('editableField', {
  templateUrl: 'editableField.html',
  controller: EditableFieldController,
  bindings: {
    fieldValue: '<',
    fieldType: '@?',
    onUpdate: '&'
  }
});
})(window.angular);