/*! SearchPanes Foundation styling 3.0.1 for DataTables
 * Copyright (c) SpryMedia Ltd - https://datatables.net/license/plus
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-zf', 'datatables.net-searchpanes'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net-zf')(root);

				if (! root.DataTable.SearchPanes) {
					require('datatables.net-searchpanes')(root);
				}

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net-zf');

			if (! window.DataTable.SearchPanes) {
				require('datatables.net-searchpanes');
			}

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';

var util = DataTable.util;

util.object.assignDeep(DataTable.SearchPane.classes, {
    buttonGroup: 'secondary button-group',
    disabledButton: 'disabled',
    narrow: 'dtsp-narrow',
    narrowButton: 'dtsp-narrowButton',
    narrowSearch: 'dtsp-narrowSearch',
    paneButton: 'secondary button',
    pill: 'badge secondary',
    search: 'search',
    searchLabelCont: 'searchCont',
    show: 'col',
    table: 'unstriped'
});
util.object.assignDeep(DataTable.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll button secondary',
    collapseAll: 'dtsp-collapseAll button secondary',
    disabledButton: 'disabled',
    panes: 'panes dtsp-panesContainer',
    search: DataTable.SearchPane.classes.search,
    showAll: 'dtsp-showAll button secondary',
    title: 'dtsp-title'
});


return DataTable;
}));
