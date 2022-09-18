TW.IDE.Widgets.infotableinspector = function () {

	this.widgetIconUrl = function () {
		return '../Common/extensions/InfotableInspectorWiget/ui/infotableinspector/default_widget_icon.ide.png';
	};

	this.widgetProperties = function () {
		return {
			'name': 'InfotableInspector',
			'description': '',
			'category': ['Common'],
			'properties': {
				'Data': {
					'description': 'Infotable to inspect',
					'isBindingTarget': true,
					'isEditable': false,
					'baseType': 'INFOTABLE',
					'warnIfNotBoundAsTarget': true
				},
				'RowCount': {
					'description': 'Returns the row count of the given infotable',
					'isBindingSource': true,
					'isEditable': false,
					'baseType': 'INTEGER'
				},
				'IsEmpty': {
					'description': 'Returns true if row count is zero',
					'isBindingSource': true,
					'isEditable': false,
					'baseType': 'BOOLEAN'
				},
				'HasRows': {
					'description': 'Returns true if row count is greater 0',
					'isBindingSource': true,
					'isEditable': false,
					'baseType': 'BOOLEAN'
				}
			}
		}
	};

	this.widgetServices = function () {
		return {
			'ClearSelectedRows': { 'warnIfNotBound': false },
			'SelectAllRows': { 'warnIfNotBound': false }
		};
	};

	this.afterSetProperty = function (name, value) {
		var thisWidget = this;
		var refreshHtml = false;
		switch (name) {
			case "DisplayName":
				refreshHtml = true;
				break;
			default:
				break;
		}
		return refreshHtml;
	};

	this.validate = function () {
		var result = [];

		if (!this.isPropertyBoundAsTarget('Data')) {
			var bound = false;

			if (!bound)
				result.push({ severity: 'warning', message: "data has to be bound" });
		}
		return result;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return '<div class="widget-content widget-infotableinspector">' +
			'<span class="infotableinspector-property">' + this.properties.DisplayName + " - invisible @ runtime" + '</span>' +
			'</div>';
	};

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()
		// get a reference to the value element
		valueElem = this.jqElement.find('.infotableinspector-property');
	};

};