(function (require, global) {
require = (function (cache, modules, cx) {
return function (r) {
if (!modules[r]) throw new Error(r + ' is not a module');
return cache[r] ? cache[r].exports : ((cache[r] = {
exports: {}
}, cache[r].exports = modules[r].call(cx, require, cache[r], cache[r].exports)));
};
})({}, {
0: function (require, module, exports) {
var DataTable, SimplyBind, currentID, escHTML, extend, extend1 = function (child, parent) {
for (var key in parent) {
if (hasProp.call(parent, key)) child[key] = parent[key];
}
function ctor() {
this.constructor = child;
}
ctor.prototype = parent.prototype;
child.prototype = new ctor();
child.__super__ = parent.prototype;
return child;
}, hasProp = ({}).hasOwnProperty;
SimplyBind = require(1);
extend = require(2);
escHTML = require(3);
var markup;
markup = {
tableOuterwrap: function (arg) {
var ID, baseClass, cellsHavePadding, hasMobile, minWidth;
(ID = arg.ID, baseClass = arg.baseClass, minWidth = arg.minWidth, hasMobile = arg.hasMobile, cellsHavePadding = arg.cellsHavePadding);
return "<div id='" + baseClass + "-" + ID + "' class='" + baseClass + "-outerwrap {{loading}} {{noResults}} {{hasError}} " + (minWidth ? '_hasMinWidth' : '') + " " + (hasMobile ? '{{mobileVersion}}' : '') + " " + (cellsHavePadding ? '_cellsHavePadding' : '') + " '></div>";
},
table: function (arg) {
var alignment, baseClass;
(baseClass = arg.baseClass, alignment = arg.alignment);
return "<div class='" + baseClass + " alignment---" + alignment + " sortDirection---{{sortDirection}}'> <div class='" + baseClass + "-heading'> <div class='" + baseClass + "-heading-row'></div> </div> <div class='" + baseClass + "-body'></div> </div>";
},
loading: function (arg) {
var baseClass;
baseClass = arg.baseClass;
return "<div class='" + baseClass + "-loading {{isVisible}}'> <div class='" + baseClass + "-loading-innerwrap'> <div class='" + baseClass + "-loading-icon'></div> <div class='" + baseClass + "-loading-text'>Loading</div> </div> </div>";
},
noResults: function (arg) {
var baseClass, itemPluralLabel, itemSingleLabel, ref, ref1;
(baseClass = arg.baseClass, itemSingleLabel = (ref = arg.itemSingleLabel) != null ? ref : 'Item', itemPluralLabel = (ref1 = arg.itemPluralLabel) != null ? ref1 : itemSingleLabel + 's');
return "<div class='" + baseClass + "-noResults {{isVisible}}'> <div class='" + baseClass + "-noResults-innerwrap'> <div class='" + baseClass + "-noResults-icon'></div> <div class='" + baseClass + "-noResults-text'> <div class='" + baseClass + "-noResults-text-title'>No " + itemSingleLabel + "s to Display</div> <div class='" + baseClass + "-noResults-text-subtitle'>There are no matching " + itemPluralLabel + " for the search query you've typed.</div> </div> </div> </div>";
},
error: function (arg) {
var baseClass;
baseClass = arg.baseClass;
return "<div class='" + baseClass + "-error {{isVisible}}'> <div class='" + baseClass + "-error-innerwrap'> <div class='" + baseClass + "-error-icon'></div> <div class='" + baseClass + "-error-text'> <div class='" + baseClass + "-error-text-title'>A Fatal Error has Occured</div> <div class='" + baseClass + "-error-text-subtitle'>Report the following to the admin:<br />\"{{errorMessage}}\"</div> </div> </div> </div>";
},
pageStatus: function (arg) {
var baseClass, showPageStatus;
(baseClass = arg.baseClass, showPageStatus = arg.showPageStatus);
return "<div class='" + baseClass + "-pageStatus " + (showPageStatus ? 'is_visible' : '') + "'> Showing {{rowRange}} of {{totalRows}} </div>";
},
pagination: function (arg) {
var baseClass;
baseClass = arg.baseClass;
return "<div class='" + baseClass + "-pagination {{hasExtra}} {{isVisible}}'> <div class='" + baseClass + "-pagination-item _paginationItem _back'> <div class='" + baseClass + "-pagination-item-text'></div> </div> <div class='" + baseClass + "-pagination-itemswrap _paginationItems'></div> <div class='" + baseClass + "-pagination-item _paginationItem _extraIndicator'> <div class='" + baseClass + "-pagination-item-text'></div> <select class='" + baseClass + "-pagination-item-select'></select> </div> <div class='" + baseClass + "-pagination-item _paginationItem _next'> <div class='" + baseClass + "-pagination-item-text'></div> </div> </div>";
},
paginationItem: function (arg) {
var baseClass, value;
(baseClass = arg.baseClass, value = arg.value);
return "<div class='" + baseClass + "-pagination-item _paginationItem'> <div class='" + baseClass + "-pagination-item-text'>" + value + "</div> </div>";
},
headingCell: function (arg) {
var baseClass, extraClasses, icon, label, ref, ref1, ref2, slug, style;
(baseClass = arg.baseClass, extraClasses = (ref = arg.extraClasses) != null ? ref : '', slug = arg.slug, icon = (ref1 = arg.icon) != null ? ref1 : '', label = arg.label, style = (ref2 = arg.style) != null ? ref2 : '');
return "<div class='" + baseClass + "-heading-row-cell " + extraClasses + " __" + slug + "' data-slug='" + slug + "' data-icon='" + icon + "' " + style + "> <div class='" + baseClass + "-heading-row-cell-text'>" + label + "</div> </div>";
},
row: function (arg) {
var baseClass, cells, drilldown, ref, rowID;
(baseClass = arg.baseClass, rowID = arg.rowID, cells = arg.cells, drilldown = (ref = arg.drilldown) != null ? ref : '');
return "<div class='" + baseClass + "-body-row _tableRow {{drilldownState}}' data-row-id='" + rowID + "'> <div class='" + baseClass + "-body-row-expandDrilldown _expandDrilldown'> <div class='" + baseClass + "-body-row-expandDrilldown-icon'></div> </div> " + cells + " <div class='" + baseClass + "-body-row-drilldown _tableRowDrilldown'> " + drilldown + " </div> </div>";
},
rowCell: function (arg) {
var baseClass, column, extraClasses, label, ref, ref1, slug, style, value;
(baseClass = arg.baseClass, extraClasses = (ref = arg.extraClasses) != null ? ref : '', label = arg.label, column = arg.column, slug = arg.slug, value = arg.value, style = (ref1 = arg.style) != null ? ref1 : '');
return "<div class='" + baseClass + "-body-row-cell __" + slug + " " + extraClasses + "' data-slug='" + slug + "' data-column='" + column + "' " + style + "> <div class='" + baseClass + "-body-row-cell-innerwrap' title='" + label + "'>" + value + "</div> </div>";
},
searchField: function (arg) {
var baseClass, search;
(baseClass = arg.baseClass, search = arg.search);
return "<div class='" + baseClass + "-search " + (((search != null ? search.length : void 0)) ? 'is_visible' : '') + "'> <select class='" + baseClass + "-search-select'></select> <input class='" + baseClass + "-search-input' /> <div class='" + baseClass + "-search-selectTrigger'></div> </div>";
},
ipDetails: function (arg) {
var baseClass, extra, ipAddress, ref;
(baseClass = arg.baseClass, ipAddress = arg.ipAddress, extra = (ref = arg.extra) != null ? ref : '');
return "<div class='" + baseClass + "-ipDetails _ipDetails' data-ip='" + ipAddress + "'> <div class='" + baseClass + "-ipDetails-trigger _ipDetails-trigger'></div> <div class='" + baseClass + "-ipDetails-content'>Loading IP Details</div> </div> " + extra;
},
ipDetailsItem: function (arg) {
var baseClass, label, value;
(baseClass = arg.baseClass, label = arg.label, value = arg.value);
return "<div class='" + baseClass + "-ipDetails-content-item'> <div class='" + baseClass + "-ipDetails-content-item-label'>" + label + ": </div> <div class='" + baseClass + "-ipDetails-content-item-value'>" + value + "</div> </div>";
},
fields: function (arg) {
var baseClass, fields;
(baseClass = arg.baseClass, fields = arg.fields);
return "<div class='" + baseClass + "-fieldGroup'>" + fields + "</div>";
},
fieldsItem: function (arg) {
var baseClass, label, value;
(baseClass = arg.baseClass, label = arg.label, value = arg.value);
return "<div class='" + baseClass + "-fieldGroup-item'> <div class='" + baseClass + "-fieldGroup-item-label'>" + label + ": </div> <div class='" + baseClass + "-fieldGroup-item-value'>" + (escHTML(value)) + "</div> </div>";
},
button: function (arg) {
var action, baseClass, icon, isMulti, ref;
(baseClass = arg.baseClass, action = arg.action, icon = (ref = arg.icon) != null ? ref : '', isMulti = arg.isMulti);
return "<div class='" + baseClass + "-button _actionButton " + (isMulti ? '_isMulti' : '') + "' data-action='" + action + "'> <div class='" + baseClass + "-button-icon'>" + icon + "</div> </div>";
},
actions: function (arg) {
var actions, baseClass;
(baseClass = arg.baseClass, actions = arg.actions);
return "<div class='" + baseClass + "-actions'> <div class='" + baseClass + "-actions-popup'>" + actions + "</div> </div>";
},
actionsOverlay: function () {
return "<div class='" + DataTable.defaults.baseClass + "-actions-overlay'></div>";
},
actionsItem: function (arg) {
var action, baseClass, customIconStyle, icon, label, ref;
(baseClass = arg.baseClass, action = arg.action, icon = arg.icon, label = arg.label, customIconStyle = (ref = arg.customIconStyle) != null ? ref : '');
return "<div class='" + baseClass + "-actions-popup-item _actionButton _subActionButton' data-action='" + action + "' style='" + customIconStyle + "'> <div class='" + baseClass + "-actions-popup-item-icon'>" + icon + "</div> <div class='" + baseClass + "-actions-popup-item-text'>" + label + "</div> </div>";
}
};
;
var defaults;
defaults = {
'perPage': 20,
'pageCountMax': 10,
'minWidth': 0,
'mobileWidth': 736,
'cellsHavePadding': false,
'hasMobile': true,
'loadOnInit': true,
'columns': [],
'search': [],
'percentage': {},
'baseClass': 'DataTable',
'showPageStatus': true,
'sortBy': '',
'alignment': 'left',
'actions': false,
'ipDataFetcher': function (ipAddress) {
return new Promise(function (resolve) {
return $.get("http://ipinfo.io/" + ipAddress, resolve, 'JSON');
});
}
};
;
var helpers;
helpers = {};
helpers.compareValues = function (valueA, valueB) {
switch (false) {
case typeof valueA !== typeof valueB:
return valueA === valueB;
case typeof valueA !== 'string':
return valueA === '' + valueB;
case typeof valueA !== 'number':
return valueA === parseFloat(valueB);
}
};
helpers.toggleActionsPopup = function (actionsPopup$) {
var isOpen, overlay$;
isOpen = actionsPopup$.data('isOpen');
if (isOpen) {
actionsPopup$.data('overlay').remove();
actionsPopup$.removeClass('is_visible');
} else {
actionsPopup$.data('overlay', overlay$ = $(markup.actionsOverlay()));
actionsPopup$.addClass('is_visible');
overlay$.appendTo(document.body).one('click', function () {
return helpers.toggleActionsPopup(actionsPopup$);
});
}
return actionsPopup$.data('isOpen', !isOpen);
};
helpers.getBreakdownTotal = function (breakdown, breakdownKeys) {
switch (false) {
case breakdownKeys.length !== 0:
return 0;
default:
return breakdownKeys.map(function (breakdownItem) {
return breakdown[breakdownItem];
}).reduce(function (a, b) {
return a + b;
});
}
};
helpers.normalizeColumns = function (columns) {
var column, i, j, label, len, len1, output, ref;
if (!Array.isArray(columns)) {
output = columns;
} else {
output = {};
if (typeof columns[0] === 'string') {
for ((i = 0, len = columns.length); i < len; i++) {
label = columns[i];
output[label] = {
label: label
};
}
} else if ((ref = columns[0]) != null ? ref.label : void 0) {
for ((j = 0, len1 = columns.length); j < len1; j++) {
column = columns[j];
output[column.label] = column;
}
}
}
for (label in output) {
column = output[label];
if (column.label == null) {
column.label = label;
}
if (column.slug == null) {
column.slug = column.label.toLowerCase().replace(/\W/g, '_');
}
if (column.type == null) {
column.type = 'text';
}
}
return output;
};
helpers.getBreakdownBarWidth = function (row, largest) {
return (row.breakdownBarTotal / largest) * (100 - 18);
};
helpers.genHeaderCellStyle = function (column) {
var styleString;
styleString = '';
if (column.width) {
styleString += "max-width: " + column.width + ";";
}
if (column.grow >= 0) {
styleString += "flex-grow: " + column.grow + ";";
}
if (styleString) {
return "style='" + styleString + "'";
} else {
return '';
}
};
helpers.genCellStyle = function (column) {
var color, styleString;
styleString = '';
if (column.width) {
styleString += "max-width: " + column.width + ";";
}
if (column.color) {
color = this.colorMapping(column.color, column.colorType);
styleString += "color: " + color + ";";
}
if (column.customStyle) {
styleString += column.customStyle;
}
if (column.grow >= 0) {
styleString += "flex-grow: " + column.grow + ";";
}
if (styleString) {
return "style='" + styleString + "'";
} else {
return '';
}
};
helpers.genCellClassname = function (column) {
var classString;
classString = '';
if (column.sortable) {
classString += ' _isSortable {{currentSort}}';
}
if (column.noLabel) {
classString += ' _noLabel';
}
if (column.isLink) {
classString += ' _isLink';
}
if (column.noEllipsis) {
classString += ' _noEllipsis';
}
if (column.showOverflow) {
classString += ' _showOverflow';
}
if (column.color) {
classString += ' _hasColor';
}
if (column.type === 'button' || column.type === 'actions') {
classString += ' _isButton';
column.alwaysCenter = true;
}
if (column.type === 'breakdownBar') {
classString += ' _isBreakdownBar';
}
if (column.type === 'ipDetails') {
classString += ' _isIpDetails';
}
if (column.type === 'fields') {
classString += ' _isFields';
}
if (column.alwaysCenter) {
classString += ' _alwaysCenter';
}
return classString;
};
helpers.colorMapping = function (value, colorType) {
if (colorType == null) {
colorType = 'name';
}
switch (colorType) {
case 'browser':
switch (false) {
case !value.includes('Firefox'):
return this.colorMapping('orange');
case !value.includes('Chrome'):
return this.colorMapping('green');
case !value.includes('Safari'):
return this.colorMapping('blue');
case !value.includes('Mobile Safari'):
return this.colorMapping('blue');
case !value.includes('IE'):
return this.colorMapping('lightblue');
case !value.includes('Edge'):
return this.colorMapping('lightblue');
case !value.includes('Opera'):
return this.colorMapping('red');
case !value.includes('Android'):
return this.colorMapping('lightgreen');
default:
return 'unknown';
}
break;
case 'platform':
switch (value) {
case 'Mac OS X':
return this.colorMapping('black');
case 'Windows':
return this.colorMapping('lightblue');
case 'Windows Phone':
return this.colorMapping('purple');
case 'Linux':
return this.colorMapping('darkyellow');
case 'iOS':
return this.colorMapping('black');
case 'Android':
return this.colorMapping("lightgreen");
default:
return 'unknown';
}
break;
case 'satisfaction':
switch (value) {
case 'Excellent':
return this.colorMapping('green');
case 'Normal':
return this.colorMapping('yellow');
case 'Poor':
return this.colorMapping('red');
default:
return 'unknown';
}
break;
case 'name':
switch (value) {
case 'orange':
return '#ee6f0e';
case 'green':
return '#00ad09';
case 'blue':
return '#4788f3';
case 'yellow':
return '#eab71e';
case 'red':
return '#cc4820';
case 'black':
return '#181818';
case 'purple':
return '#a020ba';
case 'lightblue':
return '#0cb3ee';
case 'lightgreen':
return '#78c257';
case 'darkyellow':
return '#e8ac01';
}
break;
default:
return value;
}
};
helpers.iconMapping = function (value, iconType) {
switch (iconType) {
case 'browser':
switch (false) {
case !value.includes('Firefox'):
return '#';
case !value.includes('Chrome'):
return '%';
case !value.includes('Safari'):
return '$';
case !value.includes('Mobile Safari'):
return '$';
case !value.includes('IE'):
return '&';
case !value.includes('Edge'):
return '&';
case !value.includes('Opera'):
return '"';
case !value.includes('Android'):
return '&#039;';
default:
return '4';
}
break;
case 'device':
switch (value) {
case 'Desktop':
return '!';
case 'Tablet':
return '7';
case 'Mobile':
return '6';
default:
return '4';
}
break;
case 'platform':
switch (value) {
case 'Mac OS X':
return '*';
case 'Windows':
return ')';
case 'Windows Phone':
return ')';
case 'Linux':
return '+';
case 'iOS':
return '*';
case 'Android':
return "&#039;";
default:
return '4';
}
break;
case 'satisfaction':
switch (value) {
case 'Excellent':
return '[';
case 'Normal':
return '@';
case 'Poor':
return '?';
default:
return '4';
}
break;
default:
return '4';
}
};
;
DataTable = (function (superClass) {
extend1(DataTable, superClass);
function DataTable(container, options) {
this.container = container;
if (options == null) {
options = {};
}
this.options = extend.clone.deepOnly('columns')(DataTable.defaults, options);
this.state = {
'loading': false,
'noResults': false,
'error': false
};
this.ID = ++currentID;
this.tableID = "\#" + this.options.baseClass + "-" + this.ID;
this.visibleRows = [];
this.availableRows = [];
this.allRows = [];
this.largestBreakdownTotal = 0;
this.searchCriteria = '';
this.searchParam = '';
this.sortBy = this.options.sortBy ? this.options.sortBy : '';
this.sortDirection = -1;
this.currentPage = 1;
this.els = {};
this.els.tableOuterwrap = $(markup.tableOuterwrap(extend({
ID: this.ID
}, this.options)));
this.els.table = $(markup.table(this.options)).appendTo(this.els.tableOuterwrap);
this.els.tableHeading = this.els.table.children().first().children();
this.els.tableBody = this.els.table.children().last();
this.els.noResultsMessage = $(markup.noResults(this.options)).appendTo(this.els.tableOuterwrap);
this.els.loadingMessage = $(markup.loading(this.options)).appendTo(this.els.tableOuterwrap);
this.els.errorMessage = $(markup.error(this.options)).appendTo(this.els.tableOuterwrap);
this.els.pageStatus = $(markup.pageStatus(this.options)).appendTo(this.els.tableOuterwrap);
this.els.pagination = $(markup.pagination(this.options)).appendTo(this.els.tableOuterwrap);
this.els.paginationItems = this.els.pagination.children('._paginationItems');
this.els.paginationExtra = this.els.pagination.children('._extraIndicator');
this.els.paginationExtraSelect = this.els.paginationExtra.children('select');
this.els.paginationExtraText = this.els.paginationExtraSelect.prev();
this.els.searchField = $(markup.searchField(this.options)).insertBefore(this.els.table);
this.els.searchParam = this.els.searchField.children('select');
this.els.searchCriteria = this.els.searchField.children('input');
this.els.globalStyles = $('<style />').prependTo(this.els.tableOuterwrap);
this.els.tableHeading.append(this.generateHeadingColumns());
this.els.tableOuterwrap.appendTo(this.container);
this.els.table.data('DataTable', this);
if (this.options.minWidth) {
this.els.table[0].style.minWidth = this.options.minWidth + "px";
}
Promise.bind(this).then(this.attachEvents).then(this.attachBindings).then(function () {
if (this.options.loadOnInit) {
return this.loadData();
}
});
return this;
}
return DataTable;
})(require(7));
DataTable.prototype.fetchData = function () {
this.state.loading = true;
return Promise.resolve().then((function (_this) {
return function () {
return _this.options.data.call(_this);
};
})(this)).then((function (_this) {
return function (data) {
_this.state.loading = _this.state.error = false;
return data;
};
})(this))["catch"]((function (_this) {
return function (err) {
return _this.state.error = err;
};
})(this));
};
DataTable.prototype.setData = function (data) {
if (Array.isArray(data)) {
return this.allRows = data;
}
};
DataTable.prototype.appendData = function (data) {
var ref;
return (ref = this.allRows).push.apply(ref, data);
};
DataTable.prototype.loadData = function () {
var i, len, ref, row;
if (this.allRows.length) {
ref = this.allRows;
for ((i = 0, len = ref.length); i < len; i++) {
row = ref[i];
this.unprocessRow(row);
}
}
return this.fetchData().then((function (_this) {
return function (data) {
return _this.setData(data);
};
})(this));
};
DataTable.prototype.refresh = function () {
this.availableRows = this.availableRows;
return this.currentPage = this.currentPage;
};
DataTable.prototype.markupArgs = function (argsObject) {
if (argsObject == null) {
argsObject = {};
}
argsObject.baseClass = this.options.baseClass;
return argsObject;
};
DataTable.prototype.calcPageCount = function (rows) {
this.pageCountReal = Math.ceil(rows.length / this.options.perPage);
return this.pageCount = this.pageCountReal > this.options.pageCountMax ? this.options.pageCountMax : this.pageCountReal;
};
DataTable.prototype.calcPercentageString = function (columnValue, columnName, row) {
var columnA, columnB, formula, mathOperator, percent, percentageValue;
formula = this.options.percentage[columnName];
columnA = formula[0];
columnB = formula[2];
mathOperator = formula[1];
percentageValue = (function () {
switch (mathOperator) {
case '*':
return row[columnA] * row[columnB];
case '/':
return row[columnA] / row[columnB];
case '+':
return row[columnA] + row[columnB];
case '-':
return row[columnA] - row[columnB];
}
})();
if (percentageValue === 2e308) {
percentageValue = 0;
}
percent = convertToPercent(percentageValue);
return columnValue + " (" + percent + ")";
};
DataTable.prototype.sortRows = function (rows, targetColumn) {
var customSort, rawValue;
if (targetColumn == null) {
targetColumn = this.options.sortBy;
}
switch (false) {
case targetColumn !== '+':
return rows;
case targetColumn !== '-':
return rows != null ? rows.slice().reverse() : void 0;
case !this.options.columns[targetColumn]:
customSort = this.options.columns[targetColumn].sortFn;
rawValue = this.options.columns[targetColumn].rawValueFormatter;
return rows.slice().sort(customSort || (function (_this) {
return function (a, b) {
var aValue, bValue;
aValue = rawValue ? rawValue(a[targetColumn]) : a[targetColumn];
bValue = rawValue ? rawValue(b[targetColumn]) : b[targetColumn];
switch (false) {
case !(aValue > bValue):
return _this.sortDirection;
case !(aValue < bValue):
return _this.sortDirection * -1;
default:
return 0;
}
};
})(this));
default:
return rows;
}
};
DataTable.prototype.setVisiblePage = function (targetPage) {
var i, len, row, rowsToHide, rowsToReveal, slice;
targetPage--;
slice = {
'start': targetPage * this.options.perPage,
'end': (targetPage * this.options.perPage) + this.options.perPage
};
rowsToReveal = this.availableRows.slice(slice.start, slice.end);
rowsToHide = this.visibleRows.slice();
for ((i = 0, len = rowsToHide.length); i < len; i++) {
row = rowsToHide[i];
row.visible = false;
}
this.visibleRows.length = 0;
return this.visibleRows.push.apply(this.visibleRows, rowsToReveal);
};
DataTable.prototype.setPageIndicator = function (targetPage) {
var matchedPageEl$, pageItems$;
if (targetPage === '...') {
targetPage = 1;
}
targetPage = targetPage > this.options.pageCountMax ? this.options.pageCountMax : targetPage - 1;
pageItems$ = this.els.pagination.find('._paginationItem').slice(1, -1);
matchedPageEl$ = pageItems$.eq(targetPage);
matchedPageEl$.addClass('current');
return pageItems$.not(matchedPageEl$).removeClass('current');
};
;
DataTable.prototype.generateHeadingColumns = function () {
var column, label;
this.options.columns = helpers.normalizeColumns(this.options.columns);
if ((function () {
var ref, results;
ref = this.options.columns;
results = [];
for (label in ref) {
column = ref[label];
results.push(column.type === 'breakdownBar');
}
return results;
}).call(this)) {
this.hasBreakdownBar = true;
}
return Object.keys(this.options.columns).map((function (_this) {
return function (label) {
column = _this.options.columns[label];
_this.els.globalStyles[0].innerHTML += "{{" + column.slug + "}}\n";
return markup.headingCell(_this.markupArgs({
'slug': column.slug,
'icon': column.icon,
'label': column.label,
'style': helpers.genHeaderCellStyle(column),
'extraClasses': helpers.genCellClassname(column)
}));
};
})(this)).join('');
};
DataTable.prototype.updateColumns = function (updatedColumns) {
updatedColumns = helpers.normalizeColumns(updatedColumns);
extend.deep(this.options.columns, updatedColumns);
return this.currentPage = this.currentPage;
};
;
DataTable.prototype.processRow = function (row) {
var ref;
if (row.processed) {
return row;
} else {
this.generateRow(row);
SimplyBind('visible', {
updateEvenIfSame: true
}).of(row).to((function (_this) {
return function (isVisible, prevValue) {
if (!isVisible) {
return row.el.detach();
} else {
row.el.appendTo(_this.els.tableBody);
if (_this.hasBreakdownBar && !row.updatedBreakdownWidth && isVisible !== prevValue) {
return row.breakdownBarWidth = helpers.getBreakdownBarWidth(row, _this.largestBreakdownTotal);
}
}
};
})(this));
if (this.hasBreakdownBar && ((ref = row.breakdownBarEl) != null ? ref.length : void 0)) {
SimplyBind('largestBreakdownTotal').of(this).to('updatedBreakdownWidth').of(row).transform(function () {
if (row.visible) {
return true;
} else {
return false;
}
}).and.to('breakdownBarWidth').of(row).transform((function (_this) {
return function () {
return helpers.getBreakdownBarWidth(row, _this.largestBreakdownTotal);
};
})(this)).chainTo('width').of(row.breakdownBarEl[0].style).transform(function (width) {
return width + '%';
}).and.to((function (_this) {
return function () {
var drilldownEl, i, index, len, ref1, ref2, width;
ref1 = row.drilldownEls;
for ((index = i = 0, len = ref1.length); i < len; index = ++i) {
drilldownEl = ref1[index];
width = helpers.getBreakdownBarWidth(row.drilldown[index], row.drilldown.largestBreakdownTotal);
if ((ref2 = $(drilldownEl).children('.is_breakdown_bar').children().children()[0]) != null) {
ref2.style.width = width + '%';
}
}
};
})(this)).condition(function () {
return row.drilldown;
}).conditionAll(function () {
return row.visible;
});
}
row.processed = true;
return row;
}
};
DataTable.prototype.unprocessRow = function (row) {
if (row.processed) {
SimplyBind.unBindAll(row, true);
if (this.hasBreakdownBar && row.breakdownBarEl[0]) {
SimplyBind.unBindAll(row.breakdownBarEl[0].style);
}
row.el.remove();
delete row.el;
delete row.drilldownEls;
delete row.visible;
delete row.breakdownBarEl;
return delete row.processed;
}
};
DataTable.prototype.reRenderRow = function (row) {
return this.generateRow(row);
};
DataTable.prototype.generateRow = function (row) {
var newRowEl, prevRowEl;
prevRowEl = row.el;
newRowEl = row.el = $(this.generateRowMarkup(row)).data('row', row);
if (prevRowEl) {
prevRowEl.replaceWith(newRowEl);
}
if (row.drilldown) {
row.expandButton = row.el.children().first();
}
if (row.drilldown) {
row.drilldownEls = row.el.children('._tableRowDrilldown').children();
}
if (this.hasBreakdownBar) {
row.breakdownBarEl = row.el.children('.isBreakdownBar').children().children();
}
if (!prevRowEl) {
row.visible = false;
}
if (row.drilldown) {
if (this.hasBreakdownBar) {
row.drilldown.largestBreakdownTotal = Math.max.apply(Math, row.drilldown.map(function (subRow) {
return subRow.breakdownBarTotal;
}));
}
SimplyBind('drilldownOpen').of(row).to('className.drilldownState').of(row.el).transform(function (drilldownOpen) {
if (drilldownOpen) {
return 'hasDrilldown drilldownIsOpen';
} else {
return 'hasDrilldown';
}
});
SimplyBind('visible').of(row).once.to(function () {
return SimplyBind(function () {
if (!row.drilldownOpen) {
return setTimeout(function () {
var buttonHeight, rowHeight;
rowHeight = row.el.height();
buttonHeight = row.expandButton.height();
return row.expandButton[0].style.top = (rowHeight / 2 - buttonHeight / 2) + "px";
});
}
}).updateOn('event:resize', {
throttle: 300
}).of(window);
}).condition(function (visible) {
return visible;
});
}
return row;
};
DataTable.prototype.generateRowMarkup = function (row, parentRow) {
var isSub;
isSub = !!parentRow;
return markup.row(this.markupArgs({
'rowID': isSub ? parentRow[this.options.uniqueID] : row[this.options.uniqueID],
'drilldown': isSub ? '' : row.drilldown ? (function (_this) {
return function () {
var drilldownMarkups, drilldownRow, i, len, ref;
drilldownMarkups = '';
ref = row.drilldown;
for ((i = 0, len = ref.length); i < len; i++) {
drilldownRow = ref[i];
drilldownMarkups += _this.generateRowMarkup(drilldownRow, row);
}
return drilldownMarkups;
};
})(this)() : void 0,
'cells': (function (_this) {
return function () {
var cellValue, column, columnName, ref, rowCells;
rowCells = '';
ref = _this.options.columns;
for (columnName in ref) {
column = ref[columnName];
cellValue = row[columnName];
if (_this.options.percentage[columnName]) {
cellValue = _this.calcPercentageString(cellValue, columnName, row);
}
rowCells += markup.rowCell(_this.markupArgs({
'label': typeof cellValue === 'string' ? cellValue : '',
'column': columnName,
'slug': column.slug,
'extraClasses': helpers.genCellClassname(column),
'style': helpers.genCellStyle(column),
'value': (function () {
switch (false) {
case column.type !== 'fields':
return _this.generateInlineFields(cellValue, row, column);
case column.type !== 'ipDetails':
return _this.generateIpDetails(cellValue, row, column);
case column.type !== 'breakdownBar':
return _this.generateBreakdownBar(cellValue, row, column);
case column.type !== 'button':
return _this.generateButton(column.action || cellValue, column.buttonIcon || column.icon);
case column.type !== 'actions':
return _this.generateActions(column, row, column);
case !column.isLink:
return "<a href='" + cellValue + "' target='_blank'>" + cellValue + "</a>";
default:
if (column.formatter) {
return column.formatter(cellValue, row, column);
} else {
return cellValue;
}
}
})()
}));
}
return rowCells;
};
})(this)()
}));
};
;
DataTable.prototype.generateBreakdownBar = function (breakdown, rowObj, columnEntity) {
var breakdownKeys, total;
breakdownKeys = this.legend || Object.keys(breakdown);
rowObj.breakdownBarTotal = total = this.getBreakdownTotal(breakdown, breakdownKeys);
if (!total) {
return 'N/A';
}
return markup.breakdownBar(this.markupArgs({
'total': total,
'totalFormatted': columnEntity.valueFormat ? columnEntity.valueFormat(total) : total,
'bars': (function () {
var bars, i, key, len, value;
bars = '';
for ((i = 0, len = breakdownKeys.length); i < len; i++) {
key = breakdownKeys[i];
value = breakdown[key];
bars += markup.block_table_body_row_cell_breakdown_bar.replace('{{width}}', (value / total) * 100);
}
return bars;
})(),
'hoverBox': (function () {
return markup.block_table_body_row_cell_breakdown_hoverbox.replace('{{rows}}', function () {
var rows;
rows = '';
breakdownKeys.forEach(function (key, index) {
return rows += markup.block_table_body_row_cell_breakdown_hoverbox_row.replace('{{color}}', customColors(index)).replace('{{key}}', key).replace('{{value}}', columnEntity.valueFormat ? columnEntity.valueFormat(breakdown[key]) : breakdown[key]);
});
return rows;
});
})()
}));
};
DataTable.prototype.generateInlineFields = function (dataFields) {
return markup.fields(this.markupArgs({
'fields': (function (_this) {
return function () {
var label, output, value;
if (typeof dataFields !== 'object') {
return '';
}
output = (function () {
var results;
results = [];
for (label in dataFields) {
value = dataFields[label];
results.push(markup.fieldsItem(this.markupArgs({
label: label,
value: value
})));
}
return results;
}).call(_this);
return output.join('');
};
})(this)()
}));
};
DataTable.prototype.generateButton = function (action, icon, isMulti) {
return markup.button(this.markupArgs({
action: action,
icon: icon,
isMulti: isMulti
}));
};
DataTable.prototype.generateActions = function (column) {
var actionsMarkup, buttonMarkup;
if (column.actions == null) {
column.actions = 'multiActions';
}
buttonMarkup = this.generateButton(column.actions, column.buttonIcon || column.icon, true);
actionsMarkup = markup.actions(this.markupArgs({
'actions': (function (_this) {
return function () {
var action, output;
if (!_this.options.actions) {
return '';
}
output = (function () {
var i, len, ref, results;
ref = this.options.actions;
results = [];
for ((i = 0, len = ref.length); i < len; i++) {
action = ref[i];
results.push(markup.actionsItem(this.markupArgs(action)));
}
return results;
}).call(_this);
return output.join('');
};
})(this)()
}));
return buttonMarkup + actionsMarkup;
};
DataTable.prototype.generateIpDetails = function (ipAddress, row, column) {
return markup.ipDetails(this.markupArgs({
ipAddress: ipAddress,
extra: typeof column.extraMarkup === "function" ? column.extraMarkup(ipAddress, row) : void 0
}));
};
;
;
DataTable.prototype.attachEvents = function () {
this.els.pagination.on('click', '._paginationItem', (function (_this) {
return function (event) {
var $this, isBack, isExtra, isNext, pageNumber;
$this = $(event.currentTarget);
isBack = $this.hasClass('_back');
isNext = $this.hasClass('_next');
isExtra = $this.hasClass('_extraIndicator');
if (isBack) {
if (_this.currentPage !== 1) {
return _this.currentPage--;
}
} else if (isNext) {
if (_this.currentPage !== _this.pageCountReal) {
return _this.currentPage++;
}
} else if (!isExtra) {
pageNumber = parseFloat($this.children().html());
return _this.currentPage = pageNumber;
}
};
})(this));
this.els.tableHeading.on('click', '._isSortable', (function (_this) {
return function (event) {
return _this.sortBy = event.currentTarget.children[0].textContent;
};
})(this));
this.els.tableBody.on('click', '._actionButton', (function (_this) {
return function (event) {
var action, button$, dataItem, itemID, itemIndex, itemRow$;
button$ = $(event.currentTarget);
if (button$.hasClass('_isMulti')) {
return helpers.toggleActionsPopup(button$.next().children());
} else {
itemRow$ = button$.closest('._tableRow');
action = button$.data('action');
itemID = itemRow$.data('row-id');
itemIndex = itemRow$.data('index');
dataItem = itemID ? _this.allRows.find(function (row) {
return helpers.compareValues(row[_this.options.uniqueID], itemID);
}) : void 0;
if (dataItem == null) {
dataItem = itemID;
}
if (button$.hasClass('_subActionButton')) {
helpers.toggleActionsPopup(button$.parent());
}
return _this.els.table.trigger("action." + action, dataItem);
}
};
})(this));
this.els.tableBody.on('click', '._expandDrilldown', (function (_this) {
return function (event) {
var button$, itemRow;
button$ = $(event.currentTarget);
itemRow = button$.parent().data('row');
return itemRow.drilldownOpen = !itemRow.drilldownOpen;
};
})(this));
this.els.tableBody.on('mouseover', '._ipDetails-trigger', (function (_this) {
return function (event) {
var content$, country$, ipAddress, isLoaded, trigger$, wrapper$;
trigger$ = $(event.currentTarget);
wrapper$ = trigger$.parent();
content$ = trigger$.next();
country$ = content$.next();
ipAddress = wrapper$.data('ip');
isLoaded = trigger$.hasClass('_isReady');
if (!isLoaded) {
return _this.options.ipDataFetcher(ipAddress).then(function (ipDetails) {
var label, output, value;
if (!ipDetails) {
return;
}
output = (function () {
var results;
results = [];
for (label in ipDetails) {
value = ipDetails[label];
results.push(markup.ipDetailsItem(this.markupArgs({
label: label,
value: value
})));
}
return results;
}).call(_this);
content$.html(output.join(''));
return wrapper$.addClass('_isReady');
});
}
};
})(this));
return Promise.resolve();
};
;
DataTable.prototype.attachBindings = function () {
var column, fn, l, ref;
SimplyBind.settings.trackArrayChildren = false;
SimplyBind('noResults').of(this.state).to('className.isVisible').of(this.els.noResultsMessage).transform((function (_this) {
return function (noResults) {
if (noResults && !_this.state.loading) {
return 'is_visible';
} else {
return '';
}
};
})(this)).and.to('className.noResults').of(this.els.tableOuterwrap).transform((function (_this) {
return function (noResults) {
if (noResults && !_this.state.loading) {
return '_noResults';
} else {
return '';
}
};
})(this));
SimplyBind('loading').of(this.state).to('className.isVisible').of(this.els.loadingMessage).transform(function (loading) {
if (loading) {
return 'is_visible';
} else {
return '';
}
}).and.to('className.loading').of(this.els.tableOuterwrap).transform((function (_this) {
return function (loading) {
if (loading) {
return '_loading';
} else {
return '';
}
};
})(this)).and.to((function (_this) {
return function (loading) {
if (loading) {
return _this.state.noResults = false;
} else {
return _this.state.noResults = !_this.visibleRows.length;
}
};
})(this));
SimplyBind('error').of(this.state).to('textContent.errorMessage').of(this.els.errorMessage).and.to('className.isVisible').of(this.els.errorMessage).transform(function (hasError) {
if (hasError) {
return 'is_visible';
} else {
return '';
}
}).and.to('className.hasError').of(this.els.tableOuterwrap).transform(function (hasError) {
if (hasError) {
return '_error';
} else {
return '';
}
}).and.to(function (err) {
if (err) {
return console.error(err);
}
});
if (this.options.hasMobile) {
this.windowWidth = window.innerWidth;
SimplyBind('event:resize').of(window).to((function (_this) {
return function () {
return _this.windowWidth = window.innerWidth;
};
})(this));
SimplyBind('windowWidth').of(this).to('className.mobileVersion').of(this.els.tableOuterwrap).transform((function (_this) {
return function (windowWidth) {
if (windowWidth <= _this.options.mobileWidth) {
return '_mobileVersion';
} else {
return '';
}
};
})(this));
}
ref = this.options.columns;
fn = (function (_this) {
return function (column) {
return SimplyBind('hidden').of(column).to("innerHTML." + column.slug).of(_this.els.globalStyles).transform(function (isHidden) {
if (isHidden) {
return _this.tableID + " .__" + column.slug + " {display:none}";
} else {
return '';
}
});
};
})(this);
for (l in ref) {
column = ref[l];
fn(column);
}
SimplyBind('array:visibleRows').of(this).to((function (_this) {
return function (rows, prevRows) {
var err, i, j, len, len1, row;
if (prevRows != null ? prevRows.length : void 0) {
for ((i = 0, len = prevRows.length); i < len; i++) {
row = prevRows[i];
row.visible = false;
}
}
try {
for ((j = 0, len1 = rows.length); j < len1; j++) {
row = rows[j];
_this.processRow(row);
row.visible = true;
}
} catch (error) {
err = error;
_this.state.error = err;
}
return _this.state.noResults = !rows.length;
};
})(this)).and.to((function (_this) {
return function (rows) {
var i, largestBreakdownTotal, len, row;
if (!_this.hasBreakdownBar) {
return;
}
for ((i = 0, len = rows.length); i < len; i++) {
row = rows[i];
if (row.breakdownBarTotal > largestBreakdownTotal || (typeof largestBreakdownTotal === "undefined" || largestBreakdownTotal === null)) {
largestBreakdownTotal = row.breakdownBarTotal;
}
}
return _this.largestBreakdownTotal = largestBreakdownTotal || 0;
};
})(this)).and.to('textContent.rowRange').of(this.els.pageStatus).transform((function (_this) {
return function (rows) {
return (_this.availableRows.indexOf(rows[0]) + 1) + "-" + (_this.availableRows.indexOf(rows.slice(-1)[0]) + 1);
};
})(this));
SimplyBind('array:allRows').of(this).to((function (_this) {
return function (rows) {
_this.searchCriteria = '';
_this.currentPage = 1;
_this.state.noResults = !rows.length;
if (_this.sortBy === _this.options.sortBy) {
_this.sortBy = '';
return _this.sortBy = _this.options.sortBy;
} else {
return _this.sortBy = '';
}
};
})(this));
SimplyBind('availableRows', {
updateOnBind: false,
updateEvenIfSame: true
}).of(this).to((function (_this) {
return function (rows) {
return _this.calcPageCount(rows);
};
})(this)).and.to('textContent.totalRows').of(this.els.pageStatus).transform(function (rows) {
return rows.length;
});
SimplyBind('pageCount').of(this).to('innerHTML').of(this.els.paginationItems).transform((function (_this) {
return function (count) {
var i, paginationItems, ref1, value;
paginationItems = '';
for ((value = i = 1, ref1 = count); 1 <= ref1 ? i <= ref1 : i >= ref1; value = 1 <= ref1 ? ++i : --i) {
if (value !== 0) {
paginationItems += markup.paginationItem(_this.markupArgs({
value: value
}));
}
}
return paginationItems;
};
})(this)).and.to('className.isVisible').of(this.els.pagination).transform(function (count) {
if (count > 1) {
return 'is_visible';
} else {
return '';
}
});
SimplyBind('pageCountReal').of(this).to('innerHTML').of(this.els.paginationExtraSelect).transform((function (_this) {
return function (realCount) {
var i, index, options, ref1, ref2;
if (realCount <= _this.options.pageCountMax) {
return '';
} else {
options = '<option>...</option>';
for ((index = i = ref1 = _this.options.pageCountMax + 1, ref2 = realCount); ref1 <= ref2 ? i <= ref2 : i >= ref2; index = ref1 <= ref2 ? ++i : --i) {
options += "<option>" + index + "</option>";
}
return options;
}
};
})(this)).and.to('className.hasExtra').of(this.els.pagination).transform((function (_this) {
return function (realCount) {
if (realCount > _this.options.pageCountMax) {
return 'has_extra';
} else {
return '';
}
};
})(this));
SimplyBind('value', {
updateOnBind: false
}).of(this.els.paginationExtraSelect).to('innerHTML').of(this.els.paginationExtraText).and.to('currentPage').of(this);
SimplyBind('currentPage', {
updateEvenIfSame: true
}).of(this).transformSelf((function (_this) {
return function (currentPage) {
currentPage = currentPage === '...' ? 1 : parseFloat(currentPage);
if (currentPage > _this.pageCountReal) {
return _this.pageCountReal;
} else {
return currentPage;
}
};
})(this)).to('value').of(this.els.paginationExtraSelect).transform((function (_this) {
return function (currentPage) {
if (currentPage > _this.options.pageCountMax) {
return currentPage;
} else {
return '...';
}
};
})(this)).and.to((function (_this) {
return function (currentPage) {
_this.setVisiblePage(currentPage);
return _this.setPageIndicator(currentPage);
};
})(this));
if (this.options.search.length) {
this.searchParam = this.options.search[0];
SimplyBind('search').of(this.options).to('innerHTML').of(this.els.searchParam).transform(function (options) {
return options.map(function (option) {
return "<option>" + option + "</option>";
}).join('');
});
SimplyBind('value').of(this.els.searchParam).to('searchParam').of(this).pipe('attr:placeholder').of(this.els.searchCriteria).transform(function (option) {
return "Filter by " + option;
});
}
SimplyBind('value').of(this.els.searchCriteria).to('searchCriteria', {
updateEvenIfSame: true
}).of(this).bothWays().chainTo((function (_this) {
return function (searchCriteria) {
var ref1, rowsToMakeAvailable, targetColumn;
rowsToMakeAvailable = _this.allRows;
targetColumn = _this.options.columns[_this.searchParam];
if (searchCriteria && (targetColumn || (((ref1 = _this.allRows[0]) != null ? ref1[_this.searchParam] : void 0) != null))) {
rowsToMakeAvailable = rowsToMakeAvailable.filter(function (row) {
var rowValue;
rowValue = ((targetColumn != null ? targetColumn.rawValueFormatter : void 0)) ? targetColumn.rawValueFormatter(row[_this.searchParam]) : row[_this.searchParam];
return rowValue != null ? rowValue.toString().toLowerCase().includes(searchCriteria.toLowerCase()) : void 0;
});
}
if (_this.options.rowFilter) {
rowsToMakeAvailable = rowsToMakeAvailable.filter(function (row) {
var name, ref2, rowClone;
rowClone = extend.clone(row);
ref2 = _this.options.columns;
for (name in ref2) {
column = ref2[name];
if (column.rawValueFormatter) {
rowClone[name] = column.rawValueFormatter(rowClone[name]);
}
}
return _this.options.rowFilter(rowClone);
});
}
_this.availableRows = rowsToMakeAvailable;
return _this.currentPage = 1;
};
})(this));
SimplyBind('sortBy', {
updateEvenIfSame: true,
updateOnBind: false
}, true).of(this).to((function (_this) {
return function (currentSort, prevSort) {
var targetColumn;
if (currentSort || prevSort) {
if (currentSort === prevSort && prevSort) {
_this.sortDirection *= -1;
} else {
_this.sortDirection = -1;
}
targetColumn = currentSort ? currentSort : null;
_this.availableRows = _this.sortRows(_this.availableRows, targetColumn);
return _this.currentPage = 1;
}
};
})(this));
if (this.els.tableHeading.children('._isSortable').length) {
SimplyBind('sortBy', {
updateOnBind: true
}).of(this).to('multi:className.currentSort').of(this.els.tableHeading.children('._isSortable')).transform(function (current, prev, el) {
if (current === el.children[0].textContent) {
return '_currentSort';
} else {
return '';
}
});
}
SimplyBind('sortDirection').of(this).to('className.sortDirection').of(this.els.table).transform(function (sortDirection) {
if (sortDirection === -1) {
return 'desc';
} else {
return 'asc';
}
});
return Promise.resolve();
};
;
DataTable.prototype.sortBy = function (column) {};
;
currentID = 0;
DataTable.version = "2.9.5";
DataTable.helpers = helpers;
DataTable.markup = markup;
DataTable.defaults = defaults;
module.exports = DataTable;
return module.exports;
},
1: function (require, module, exports) {
var arrayMutatorMethods, boundInstances, currentID, defaultOptions, dummyPropertyDescriptor, placeholder, settings;
currentID = 0;
arrayMutatorMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort'];
dummyPropertyDescriptor = {};
boundInstances = {};
placeholder = ['{{', '}}'];
settings = Object.create({
silent: false
}, {
placeholder: {
get: function () {
return placeholder;
},
set: function (newPlaceholder) {
if (checkIf.isArray(newPlaceholder) && newPlaceholder.length === 2) {
placeholder = newPlaceholder;
setPholderRegEx();
}
}
}
});
defaultOptions = {
delay: false,
throttle: false,
simpleSelector: false,
promiseTransforms: false,
dispatchEvents: false,
sendArrayCopies: false,
updateEvenIfSame: false,
updateOnBind: true
};
var defineProperty, genID, genObj, genProxiedInterface, genSelfUpdater, getDescriptor, setValueNoop;
defineProperty = Object.defineProperty;
getDescriptor = Object.getOwnPropertyDescriptor;
var cachedEvent, changeEvent;
cachedEvent = null;
changeEvent = function () {
var event;
if (!cachedEvent) {
event = cachedEvent = document.createEvent('Event');
event.initEvent('change', true, false);
event._sb = true;
}
return cachedEvent;
};
;
var requiresDomDescriptorFix;
requiresDomDescriptorFix = (!(('className' in Element.prototype))) || !getDescriptor(Element.prototype, 'className').get;
;
var windowPropsToIgnore;
windowPropsToIgnore = ['innerWidth', 'innerHeight', 'outerWidth', 'outerHeight', 'scrollX', 'scrollY', 'pageXOffset', 'pageYOffset', 'screenX', 'screenY', 'screenLeft', 'screenTop'];
;
setValueNoop = function (v, publisher) {
return this.updateAllSubs(publisher || this);
};
genID = function () {
return '' + (++currentID);
};
genObj = function () {
return Object.create(null);
};
genProxiedInterface = function (isSub, completeCallback) {
return function (subject, customOptions, saveOptions) {
return SimplyBind(subject, customOptions, saveOptions, isSub, completeCallback);
};
};
genSelfUpdater = function (binding, fetchValue) {
return binding.selfUpdater || (binding.selfUpdater = new Binding(function () {
if (fetchValue) {
return binding.setValue(binding.fetchDirectValue(), binding, true);
} else {
return binding.updateAllSubs(binding);
}
}, 'Func', {}));
};
var checkIf, targetIncludes;
targetIncludes = function (target, item) {
return target && target.indexOf(item) !== -1;
};
checkIf = {
isDefined: function (subject) {
return subject !== void 0;
},
isArray: function (subject) {
return subject instanceof Array;
},
isObject: function (subject) {
return typeof subject === 'object' && subject;
},
isString: function (subject) {
return typeof subject === 'string';
},
isNumber: function (subject) {
return typeof subject === 'number';
},
isFunction: function (subject) {
return typeof subject === 'function';
},
isBindingInterface: function (subject) {
return subject instanceof BindingInterface;
},
isBinding: function (subject) {
return subject instanceof Binding;
},
isIterable: function (subject) {
return checkIf.isObject(subject) && checkIf.isNumber(subject.length);
},
isDom: function (subject) {
return subject.nodeName && subject.nodeType === 1;
},
isDomInput: function (subject) {
var nodeName;
nodeName = subject.nodeName;
return nodeName === 'INPUT' || nodeName === 'TEXTAREA' || nodeName === 'SELECT';
},
isDomRadio: function (subject) {
return subject.type === 'radio';
},
isDomCheckbox: function (subject) {
return subject.type === 'checkbox';
},
isElCollection: function (subject) {
return (subject instanceof NodeList) || (subject instanceof HTMLCollection) || (window.jQuery && subject instanceof jQuery);
},
domElsAreSame: function (iterable) {
var itemsWithSameType, type;
type = iterable[0].type;
itemsWithSameType = [].filter.call(iterable, function (item) {
return item.type === type;
});
return itemsWithSameType.length === iterable.length;
},
isDomNode: function (subject) {
return checkIf.isDom(subject) || subject === window || subject === document;
}
};
;
var convertToLive, convertToReg, fetchDescriptor;
fetchDescriptor = function (object, property, isProto) {
var descriptor, objectProto;
descriptor = getDescriptor(object, property);
if (descriptor) {
if (isProto) {
descriptor.configurable = true;
}
return descriptor;
} else if (objectProto = Object.getPrototypeOf(object)) {
return fetchDescriptor(objectProto, property, true);
}
};
convertToLive = function (bindingInstance, object, onlyArrayMethods) {
var _, context, getterValue, origFn, propertyDescriptor, proxyFn, shouldIndicateUpdateIsFromSelf, shouldWriteLiveProp, slice, typeIsArray;
_ = bindingInstance;
if (!_.origDescriptor) {
_.origDescriptor = fetchDescriptor(object, _.property);
}
if (onlyArrayMethods) {
arrayMutatorMethods.forEach(function (method) {
return defineProperty(object, method, {
configurable: true,
value: function () {
var result;
result = Array.prototype[method].apply(object, arguments);
_.updateAllSubs(_);
return result;
}
});
});
} else {
if (_.type === 'Proxy') {
origFn = _.origFn = _.value;
context = object;
_.value = {
result: null,
args: null
};
if (checkIf.isFunction(origFn)) {
slice = [].slice;
getterValue = proxyFn = function () {
var args, result;
args = slice.call(arguments);
_.value.args = args = _.selfTransform ? _.selfTransform(args) : args;
_.value.result = result = origFn.apply(context, args);
_.updateAllSubs(_);
return result;
};
defineProperty(object, _.property, {
configurable: _.isLiveProp = true,
get: function () {
return getterValue;
},
set: function (newValue) {
if (!checkIf.isFunction(newValue)) {
getterValue = newValue;
} else if (newValue !== origFn) {
if (newValue !== proxyFn) {
origFn = _.origFn = newValue;
}
if (getterValue !== proxyFn) {
getterValue = proxyFn;
}
}
}
});
}
} else if (!targetIncludes(_.type, 'DOM') && !(_.object === window && targetIncludes(windowPropsToIgnore, _.property))) {
propertyDescriptor = _.origDescriptor || dummyPropertyDescriptor;
if (propertyDescriptor.get) {
_.origGetter = propertyDescriptor.get.bind(object);
}
if (propertyDescriptor.set) {
_.origSetter = propertyDescriptor.set.bind(object);
}
shouldWriteLiveProp = propertyDescriptor.configurable;
shouldWriteLiveProp = shouldWriteLiveProp && object.constructor !== CSSStyleDeclaration;
var shouldWriteLiveProp;
if (requiresDomDescriptorFix && _.isDom && (_.property in object.cloneNode(false))) {
_.origDescriptor = shouldWriteLiveProp = false;
_.isLiveProp = true;
_.origGetter = function () {
return _.object[_.property];
};
_.origSetter = function (newValue) {
return _.object[_.property] = newValue;
};
}
;
if (shouldWriteLiveProp) {
typeIsArray = _.type === 'Array';
shouldIndicateUpdateIsFromSelf = !_.origSetter && !typeIsArray;
defineProperty(object, _.property, {
configurable: _.isLiveProp = true,
enumerable: propertyDescriptor.enumerable,
get: _.origGetter || (function () {
return _.value;
}),
set: function (newValue) {
_.setValue(newValue, _, shouldIndicateUpdateIsFromSelf);
}
});
if (typeIsArray) {
convertToLive(_, object[_.property], true);
}
}
}
}
};
convertToReg = function (bindingInstance, object, onlyArrayMethods) {
var _, i, len, method, newDescriptor, results;
if (onlyArrayMethods) {
results = [];
for ((i = 0, len = arrayMutatorMethods.length); i < len; i++) {
method = arrayMutatorMethods[i];
results.push(delete object[method]);
}
return results;
} else {
_ = bindingInstance;
newDescriptor = _.origDescriptor;
if (!(newDescriptor.set || newDescriptor.get)) {
newDescriptor.value = _.origFn || _.value;
}
return defineProperty(object, _.property, newDescriptor);
}
};
;
var cloneObject, extendState;
cloneObject = function (object) {
var clone, key;
clone = genObj();
for (key in object) {
clone[key] = object[key];
}
return clone;
};
extendState = function (base, stateToInherit) {
var i, key, len, stateMapping;
stateMapping = Object.keys(stateToInherit);
for ((i = 0, len = stateMapping.length); i < len; i++) {
key = stateMapping[i];
base[key] = stateToInherit[key];
}
};
;
var cache;
cache = {
get: function (object, isFunction, selector, isMultiChoice) {
var sampleItem;
if (isFunction) {
return boundInstances[object._sb_ID];
} else {
if (isMultiChoice && object[0]._sb_map) {
sampleItem = boundInstances[object[0]._sb_map[selector]];
if (sampleItem.groupBinding) {
return sampleItem.groupBinding;
}
}
if (object._sb_map && object._sb_map[selector]) {
return boundInstances[object._sb_map[selector]];
}
}
},
set: function (B, isFunction) {
var propsMap, selector;
if (isFunction) {
defineProperty(B.object, '_sb_ID', {
'configurable': true,
'value': B.ID
});
} else {
selector = B.selector;
if (B.object._sb_map) {
B.object._sb_map[selector] = B.ID;
} else {
propsMap = {};
propsMap[selector] = B.ID;
defineProperty(B.object, '_sb_map', {
'configurable': true,
'value': propsMap
});
}
}
}
};
;
var addToNodeStore, applyPlaceholders, escapeRegEx, pholderRegEx, pholderRegExSplit, scanTextNodesPlaceholders, setPholderRegEx, textContent;
escapeRegEx = /[.*+?^${}()|[\]\\]/g;
pholderRegEx = pholderRegExSplit = null;
setPholderRegEx = function () {
var end, middle, start;
start = settings.placeholder[0].replace(escapeRegEx, '\\$&');
end = settings.placeholder[1].replace(escapeRegEx, '\\$&');
middle = "[^" + end + "]+";
pholderRegEx = new RegExp(start + "(" + middle + ")" + end, 'g');
pholderRegExSplit = new RegExp("" + start + middle + end, 'g');
};
setPholderRegEx();
applyPlaceholders = function (contexts, values, indexMap) {
var contextPart, i, index, len, output;
output = '';
for ((index = i = 0, len = contexts.length); i < len; index = ++i) {
contextPart = contexts[index];
output += contextPart;
if (indexMap[index]) {
output += values[indexMap[index]];
}
}
return output;
};
textContent = 'textContent';
addToNodeStore = function (nodeStore, node, targetPlaceholder) {
if (nodeStore[targetPlaceholder] == null) {
nodeStore[targetPlaceholder] = [];
}
nodeStore[targetPlaceholder].push(node);
};
scanTextNodesPlaceholders = function (element, nodeStore) {
var childNodes, i, index, j, len, len1, newFragment, newNode, node, textPiece, textPieces;
childNodes = Array.prototype.slice.call(element.childNodes);
for ((i = 0, len = childNodes.length); i < len; i++) {
node = childNodes[i];
if (node.nodeType !== 3) {
scanTextNodesPlaceholders(node, nodeStore);
} else if (node[textContent].match(pholderRegExSplit)) {
textPieces = node[textContent].split(pholderRegEx);
if (textPieces.length === 3 && textPieces[0] + textPieces[2] === '') {
addToNodeStore(nodeStore, node, textPieces[1]);
} else {
newFragment = document.createDocumentFragment();
for ((index = j = 0, len1 = textPieces.length); j < len1; index = ++j) {
textPiece = textPieces[index];
newNode = newFragment.appendChild(document.createTextNode(textPiece));
if (index % 2) {
addToNodeStore(nodeStore, newNode, textPiece);
}
}
node.parentNode.replaceChild(newFragment, node);
}
}
}
};
;
var getErrSource, throwError, throwErrorBadArg, throwWarning;
throwError = function (errorName) {
throw new Error('SimplyBind: ' + (errors[errorName] || errorName));
};
throwWarning = function (warningName, depth) {
var errSource, warn;
if (!settings.silent) {
errSource = getErrSource(depth);
warn = errors[warningName];
warn += "\n\n" + errSource;
console.warn('SimplyBind: ' + warn);
}
};
throwErrorBadArg = function (arg) {
throwError("Invalid argument/s (" + arg + ")", true);
};
getErrSource = function (depth) {
return ((new Error()).stack || '').split('\n').slice(depth + 3).join('\n');
};
;
;
var errors;
errors = {
invalidParamName: "SimplyBind() and .to() only accept a function, an array, a bound object, a string, or a number.",
fnOnly: "Only functions are allowed for .transform/.condition/All()",
badEventArg: "Invalid argument number in .ofEvent()",
emptyList: "Empty collection provided",
onlyOneDOMElement: "You can only pass a single DOM element to a binding",
mixedElList: "'checked' of Mixed list of element cannot be bound"
};
;
;
var SimplyBind;
SimplyBind = function (subject, options, saveOptions, isSub, completeCallback) {
var interfaceToReturn, newInterface;
if ((!subject && subject !== 0) || (!checkIf.isString(subject) && !checkIf.isNumber(subject) && !checkIf.isFunction(subject) && !(subject instanceof Array))) {
if (!checkIf.isBindingInterface(subject)) {
throwError('invalidParamName');
}
}
if (checkIf.isObject(subject) && !(subject instanceof Array)) {
interfaceToReturn = completeCallback ? completeCallback(subject) : subject.selfClone();
} else {
newInterface = new BindingInterface(options);
newInterface.saveOptions = saveOptions;
newInterface.isSub = isSub;
newInterface.completeCallback = completeCallback;
if (checkIf.isFunction(subject)) {
interfaceToReturn = newInterface.setObject(subject, true);
} else {
interfaceToReturn = newInterface.setProperty(subject);
}
}
return interfaceToReturn;
};
SimplyBind.version = "1.15.8";
SimplyBind.settings = settings;
SimplyBind.defaultOptions = defaultOptions;
SimplyBind.unBindAll = function (object, bothWays) {
var boundID, prop, propMap;
if (object && (checkIf.isObject(object) || checkIf.isFunction(object))) {
var object;
if (checkIf.isIterable(object) && !object._sb_ID && object[0] && (checkIf.isDom(object[0]))) {
object = object[0];
}
;
propMap = object._sb_map;
if (object._sb_ID) {
boundInstances[object._sb_ID].removeAllSubs(bothWays);
}
if (propMap) {
for (prop in propMap) {
boundID = propMap[prop];
boundInstances[boundID].removeAllSubs(bothWays);
}
}
}
};
;
;
var Binding;
Binding = function (object, type, state) {
var parentBinding, parentProperty, subjectValue;
extendState(this, state);
this.optionsDefault = this.saveOptions ? this.options : defaultOptions;
this.type = type;
this.object = object;
this.ID = genID();
this.subs = [];
this.subsMeta = genObj();
this.pubsMap = genObj();
this.attachedEvents = [];
if (this.type === 'Proxy') {
this.setValue = setValueNoop;
}
if (this.isMultiChoice) {
this.choices = genObj();
this.object.forEach((function (_this) {
return function (choiceEl) {
var choiceBinding;
choiceBinding = _this.choices[choiceEl.value] = SimplyBind('checked').of(choiceEl)._;
choiceBinding.addSub(_this);
choiceBinding.subsMeta[_this.ID].transformFn = function () {
return choiceBinding;
};
choiceBinding.groupBinding = _this;
};
})(this));
}
if (!(this.type === 'Event' || (this.type === 'Func' && this.isSub))) {
if (this.type === 'Pholder') {
parentProperty = this.descriptor && !targetIncludes(this.descriptor, 'multi') ? this.descriptor + ":" + this.property : this.property;
parentBinding = this.parentBinding = SimplyBind(parentProperty).of(object)._;
parentBinding.scanForPholders();
this.value = parentBinding.pholderValues[this.pholder];
if (parentBinding.textNodes) {
this.textNodes = parentBinding.textNodes[this.pholder];
}
} else {
this.value = subjectValue = this.fetchDirectValue();
if (this.type === 'ObjectProp' && !checkIf.isDefined(subjectValue) && !getDescriptor(this.object, this.property)) {
this.object[this.property] = subjectValue;
}
convertToLive(this, this.object);
}
}
this.attachEvents();
return boundInstances[this.ID] = this;
};
var eventUpdateHandler;
Binding.prototype = {
addSub: function (sub, options, updateOnce, updateEvenIfSame) {
var alreadyHadSub, j, len, metaData, ref, subItem;
if (sub.isMulti) {
ref = sub.bindings;
for ((j = 0, len = ref.length); j < len; j++) {
subItem = ref[j];
this.addSub(subItem, options, updateOnce, updateEvenIfSame);
}
} else {
if (metaData = this.subsMeta[sub.ID]) {
alreadyHadSub = true;
} else {
sub.pubsMap[this.ID] = this;
this.subs.unshift(sub);
metaData = this.subsMeta[sub.ID] = genObj();
metaData.updateOnce = updateOnce;
metaData.opts = cloneObject(options);
if (updateEvenIfSame || this.type === 'Event' || this.type === 'Proxy' || this.type === 'Array') {
metaData.opts.updateEvenIfSame = true;
}
metaData.valueRef = sub.type === 'Func' ? 'valuePassed' : 'value';
}
}
return alreadyHadSub;
},
removeSub: function (sub, bothWays) {
var j, len, ref, subItem;
if (sub.isMulti) {
ref = sub.bindings;
for ((j = 0, len = ref.length); j < len; j++) {
subItem = ref[j];
this.removeSub(subItem, bothWays);
}
} else {
if (this.subsMeta[sub.ID]) {
this.subs.splice(this.subs.indexOf(sub), 1);
delete this.subsMeta[sub.ID];
delete sub.pubsMap[this.ID];
}
if (bothWays) {
sub.removeSub(this);
delete this.pubsMap[sub.ID];
}
}
if (this.subs.length === 0 && Object.keys(this.pubsMap).length === 0) {
this.destroy();
}
},
removeAllSubs: function (bothWays) {
var j, len, ref, sub;
ref = this.subs.slice();
for ((j = 0, len = ref.length); j < len; j++) {
sub = ref[j];
this.removeSub(sub, bothWays);
}
},
destroy: function () {
var event, j, len, ref;
delete boundInstances[this.ID];
this.removePollInterval();
if (this.type === 'Event') {
ref = this.attachedEvents;
for ((j = 0, len = ref.length); j < len; j++) {
event = ref[j];
this.unRegisterEvent(event);
}
} else if (this.type === 'Func') {
delete this.object._sb_ID;
}
if (this.isLiveProp && this.origDescriptor) {
convertToReg(this, this.object);
}
if (this.type === 'Array') {
convertToReg(this, this.value, true);
}
if (this.object._sb_map) {
delete this.object._sb_map[this.selector];
if (Object.keys(this.object._sb_map).length === 0) {
delete this.object._sb_map;
}
}
},
fetchDirectValue: function () {
var choiceEl, choiceName, ref, results, type;
type = this.type;
switch (false) {
case type !== 'Func':
return this.object();
case type !== 'DOMAttr':
return this.object.getAttribute(this.property) || '';
case !this.isMultiChoice:
results = [];
ref = this.choices;
for (choiceName in ref) {
choiceEl = ref[choiceName];
if (choiceEl.object.checked) {
if (type === 'DOMRadio') {
return choiceName;
} else {
results.push(choiceName);
}
}
}
return results;
default:
return this.object[this.property];
}
},
setValue: function (newValue, publisher, fromSelf, fromChangeEvent) {
var choiceBinding, choiceName, entireValue, index, j, k, len, len1, n, newChoiceValue, newChoices, newValueArray, overwritePrevious, parent, prevCursror, prevValue, ref, ref1, ref2, targetChoiceBinding, textNode, value;
publisher || (publisher = this);
if (this.selfTransform) {
newValue = this.selfTransform(newValue);
}
if (!fromSelf) {
switch (this.type) {
case 'ObjectProp':
if (!this.isLiveProp) {
if (newValue !== this.value) {
this.object[this.property] = newValue;
}
} else if (this.isDomInput) {
if (!fromChangeEvent) {
this.origSetter(newValue);
if (settings.dispatchEvents) {
this.object.dispatchEvent(changeEvent());
}
} else if (newValue !== this.origGetter()) {
prevCursror = this.object.selectionStart;
this.origSetter(newValue);
if (prevCursror) {
this.object.setSelectionRange(prevCursror, prevCursror);
}
}
} else if (this.origSetter) {
this.origSetter(newValue);
}
break;
case 'Pholder':
parent = this.parentBinding;
parent.pholderValues[this.pholder] = newValue;
entireValue = applyPlaceholders(parent.pholderContexts, parent.pholderValues, parent.pholderIndexMap);
if (this.textNodes && newValue !== this.value) {
ref = this.textNodes;
for ((j = 0, len = ref.length); j < len; j++) {
textNode = ref[j];
textNode[textContent] = newValue;
}
}
if (this.property !== textContent) {
parent.setValue(entireValue, publisher);
}
break;
case 'Array':
if (newValue !== this.value) {
if (!checkIf.isArray(newValue)) {
newValue = Array.prototype.concat(newValue);
}
convertToReg(this, this.value, true);
convertToLive(this, newValue = newValue.slice(), true);
if (this.origSetter) {
this.origSetter(newValue);
}
}
break;
case 'Func':
prevValue = this.valuePassed;
this.valuePassed = newValue;
newValue = this.object(newValue, prevValue);
break;
case 'Event':
this.isEmitter = true;
this.emitEvent(newValue);
this.isEmitter = false;
break;
case 'DOMRadio':
if (this.isMultiChoice) {
targetChoiceBinding = checkIf.isBinding(newValue) ? newValue : this.choices[newValue];
if (targetChoiceBinding) {
newValue = targetChoiceBinding.object.value;
ref1 = this.choices;
for (n in ref1) {
choiceBinding = ref1[n];
choiceBinding.setValue(choiceBinding.ID === targetChoiceBinding.ID, publisher);
}
} else {
newValue = this.value;
}
} else {
newValue = !!newValue;
if (newValue === this.value) {
return;
}
if (this.object.checked !== newValue) {
this.object.checked = newValue;
}
if (newValue && settings.dispatchEvents) {
this.object.dispatchEvent(changeEvent());
}
}
break;
case 'DOMCheckbox':
if (this.isMultiChoice) {
overwritePrevious = !checkIf.isBinding(newValue);
newChoices = [].concat(newValue);
for ((index = k = 0, len1 = newChoices.length); k < len1; index = ++k) {
value = newChoices[index];
newChoices[index] = checkIf.isBinding(value) ? value : this.choices[value];
}
newValueArray = [];
ref2 = this.choices;
for (choiceName in ref2) {
choiceBinding = ref2[choiceName];
if (overwritePrevious) {
newChoiceValue = targetIncludes(newChoices, choiceBinding);
} else {
newChoiceValue = choiceBinding.value;
}
choiceBinding.setValue(newChoiceValue, publisher);
if (newChoiceValue) {
newValueArray.push(choiceName);
}
}
newValue = newValueArray;
} else {
newValue = !!newValue;
if (newValue === this.value) {
return;
}
if (this.object.checked !== newValue) {
this.object.checked = newValue;
if (settings.dispatchEvents) {
this.object.dispatchEvent(changeEvent());
}
}
}
break;
case 'DOMAttr':
this.object.setAttribute(this.property, newValue);
}
}
this.value = newValue;
this.updateAllSubs(publisher);
},
updateAllSubs: function (publisher) {
var arr, i;
if (i = (arr = this.subs).length) {
while (i--) {
this.updateSub(arr[i], publisher);
}
}
},
updateSub: function (sub, publisher, isDelayedUpdate) {
var currentTime, meta, newValue, subValue, timePassed, transform;
if ((publisher === sub) || (publisher !== this && publisher.subsMeta[sub.ID])) {
return;
}
meta = this.subsMeta[sub.ID];
if (meta.disallowList && meta.disallowList[publisher.ID]) {
return;
}
if (meta.opts.throttle) {
currentTime = +(new Date());
timePassed = currentTime - meta.lastUpdate;
if (timePassed < meta.opts.throttle) {
clearTimeout(meta.updateTimer);
return meta.updateTimer = setTimeout((function (_this) {
return function () {
if (_this.subsMeta[sub.ID]) {
return _this.updateSub(sub, publisher);
}
};
})(this), meta.opts.throttle - timePassed);
} else {
meta.lastUpdate = currentTime;
}
} else if (meta.opts.delay && !isDelayedUpdate) {
return setTimeout((function (_this) {
return function () {
if (_this.subsMeta[sub.ID]) {
return _this.updateSub(sub, publisher, true);
}
};
})(this), meta.opts.delay);
}
newValue = this.type === 'Array' && meta.opts.sendArrayCopies ? this.value.slice() : this.value;
subValue = sub[meta.valueRef];
newValue = ((transform = meta.transformFn)) ? transform(newValue, subValue, sub.object) : newValue;
if (newValue === subValue && !meta.opts.updateEvenIfSame || meta.conditionFn && !meta.conditionFn(newValue, subValue, sub.object)) {
return;
}
if (meta.opts.promiseTransforms && newValue && checkIf.isFunction(newValue.then)) {
newValue.then(function (newValue) {
sub.setValue(newValue, publisher);
});
} else {
sub.setValue(newValue, publisher);
}
if (meta.updateOnce) {
this.removeSub(sub);
}
},
addModifierFn: function (target, subInterfaces, subjectFn, updateOnBind) {
var base, j, len, subInterface, subMetaData, subscriber;
if (!checkIf.isFunction(subjectFn)) {
return throwWarning('fnOnly', 2);
} else {
for ((j = 0, len = subInterfaces.length); j < len; j++) {
subInterface = subInterfaces[j];
subscriber = subInterface._ || subInterface;
if (subscriber.isMulti) {
this.addModifierFn(target, subscriber.bindings, subjectFn, updateOnBind);
} else {
subMetaData = this.subsMeta[subscriber.ID];
subMetaData[target] = subjectFn;
updateOnBind = updateOnBind && !subMetaData.updateOnce;
if (this.pubsMap[subscriber.ID]) {
(base = subscriber.subsMeta[this.ID])[target] || (base[target] = subjectFn);
}
if ((updateOnBind || this.type === 'Func') && target === 'transformFn') {
this.updateSub(subscriber, this);
}
}
}
return true;
}
},
setSelfTransform: function (transformFn, updateOnBind) {
this.selfTransform = transformFn;
if (updateOnBind) {
this.setValue(this.value);
}
},
addDisallowRule: function (targetSub, targetDisallow) {
var base, disallowList;
disallowList = (base = this.subsMeta[targetSub.ID]).disallowList != null ? base.disallowList : base.disallowList = genObj();
disallowList[targetDisallow.ID] = 1;
},
scanForPholders: function () {
var index;
if (!this.pholderValues) {
this.pholderValues = genObj();
this.pholderIndexMap = genObj();
this.pholderContexts = [];
if (checkIf.isString(this.value)) {
this.pholderContexts = this.value.split(pholderRegExSplit);
index = 0;
this.value = this.value.replace(pholderRegEx, (function (_this) {
return function (e, pholder) {
_this.pholderIndexMap[index++] = pholder;
return _this.pholderValues[pholder] = pholder;
};
})(this));
}
if (this.isDom && this.property === textContent) {
scanTextNodesPlaceholders(this.object, this.textNodes = genObj());
}
}
},
addPollInterval: function (time) {
if (this.type !== 'Event') {
this.removePollInterval();
return this.pollInterval = setInterval((function (_this) {
return function () {
var polledValue;
polledValue = _this.fetchDirectValue();
return _this.setValue(polledValue, _this, true);
};
})(this), time);
}
},
removePollInterval: function () {
clearInterval(this.pollInterval);
return this.pollInterval = null;
},
addUpdateListener: function (eventName, targetProperty) {
this.object.addEventListener(eventName, (function (_this) {
return function (event) {
var shouldRedefineValue;
if (!event._sb) {
shouldRedefineValue = _this.selfTransform && _this.isDomInput;
_this.setValue(_this.object[targetProperty], null, !shouldRedefineValue, true);
}
};
})(this), false);
},
attachEvents: function () {
if (this.eventName) {
this.registerEvent(this.eventName);
} else if (this.isDomInput) {
this.addUpdateListener('input', 'value');
this.addUpdateListener('change', 'value');
} else if (!this.isMultiChoice && (this.type === 'DOMRadio' || this.type === 'DOMCheckbox')) {
this.addUpdateListener('change', 'checked');
}
},
registerEvent: function (eventName) {
this.attachedEvents.push(eventName);
if (!this.eventHandler) {
this.eventHandler = eventUpdateHandler.bind(this);
}
this.object[this.eventMethods.listen](eventName, this.eventHandler);
},
unRegisterEvent: function (eventName) {
this.attachedEvents.splice(this.attachedEvents.indexOf(eventName), 1);
this.object[this.eventMethods.remove](eventName, this.eventHandler);
},
emitEvent: function (extraData) {
var eventObject;
eventObject = this.eventName;
if (this.eventMethods.emit === 'dispatchEvent') {
if (!this.eventObject) {
this.eventObject = document.createEvent('Event');
this.eventObject.initEvent(this.eventName, true, true);
}
this.eventObject.bindingData = extraData;
eventObject = this.eventObject;
}
this.object[this.eventMethods.emit](eventObject, extraData);
}
};
eventUpdateHandler = function () {
if (!this.isEmitter) {
this.setValue(arguments[this.property], null, true);
}
};
;
;
var BindingInterface;
BindingInterface = function (options, inheritedState) {
var key;
if (inheritedState) {
extendState(this, inheritedState);
this.stage = 1;
} else {
this.stage = 0;
this.subs = [];
this.optionsPassed = options || (options = {});
this.options = {};
for (key in defaultOptions) {
this.options[key] = options[key] != null ? options[key] : defaultOptions[key];
}
}
return this;
};
var BindingInterfacePrivate;
BindingInterfacePrivate = {
selfClone: function () {
return new BindingInterface(null, this);
},
defineMainProps: function (binding) {
this._ = binding;
return Object.defineProperties(this, {
'value': {
get: function () {
return binding.value;
}
},
'original': {
get: function () {
return binding.objects || binding.object;
}
},
'subscribers': {
get: function () {
return binding.subs.slice().map(function (sub) {
return sub.object;
});
}
}
});
},
createBinding: function (subject, newObjectType, bindingInterface, isFunction) {
var cachedBinding, newBinding;
this.object = subject;
cachedBinding = cache.get(subject, isFunction, this.selector, this.isMultiChoice);
if (cachedBinding) {
return this.patchCachedBinding(cachedBinding);
} else {
newBinding = new Binding(subject, newObjectType, bindingInterface);
cache.set(newBinding, isFunction);
return newBinding;
}
},
patchCachedBinding: function (cachedBinding) {
var key, option, ref, ref1, value;
if (cachedBinding.type === 'ObjectProp' && !((this.property in this.object))) {
convertToLive(cachedBinding, this.object);
}
if (this.saveOptions) {
ref = this.optionsPassed;
for (option in ref) {
value = ref[option];
cachedBinding.optionsDefault[option] = value;
}
}
ref1 = cachedBinding.optionsDefault;
for (key in ref1) {
value = ref1[key];
this.options[key] = checkIf.isDefined(this.optionsPassed[key]) ? this.optionsPassed[key] : value;
}
return cachedBinding;
},
setProperty: function (subject) {
var split;
if (checkIf.isNumber(subject)) {
subject = subject.toString();
}
this.selector = this.property = subject;
if (!this.options.simpleSelector) {
if (targetIncludes(subject, ':')) {
split = subject.split(':');
this.descriptor = split.slice(0, -1).join(':');
this.property = split[split.length - 1];
}
if (targetIncludes(subject, '.')) {
split = this.property.split('.');
this.property = split[0];
this.pholder = split.slice(1).join('.');
}
if (targetIncludes(this.descriptor, 'event')) {
if (targetIncludes(subject, '#')) {
split = this.property.split('#');
this.eventName = split[0];
this.property = split[1];
} else {
this.eventName = this.property;
this.property = 0;
}
if (isNaN(parseInt(this.property))) {
throwWarning('badEventArg', 1);
}
}
}
return this;
},
setObject: function (subject, isFunction) {
var newObjectType;
this.stage = 1;
var isDomCheckbox, isDomRadio, isIterable, sampleItem, subject;
isIterable = subject !== window && checkIf.isIterable(subject) && !subject.nodeType;
sampleItem = isIterable ? subject[0] : subject;
if (!sampleItem) {
if (isIterable && checkIf.isElCollection(subject)) {
throwError('emptyList');
}
} else if (this.isDom = checkIf.isDom(sampleItem)) {
if (this.property === 'checked') {
isDomRadio = sampleItem && checkIf.isDomRadio(sampleItem);
isDomCheckbox = !isDomRadio && sampleItem && checkIf.isDomCheckbox(sampleItem);
} else if (this.property === 'value') {
this.isDomInput = checkIf.isDomInput(sampleItem);
}
if (isIterable && !targetIncludes(this.descriptor, 'multi')) {
if (subject.length === 1) {
subject = subject[0];
} else {
if ((isDomRadio || isDomCheckbox) && !checkIf.domElsAreSame(subject)) {
return throwWarning('mixedElList', 3);
} else {
if (isDomRadio || isDomCheckbox) {
this.isMultiChoice = true;
subject = [].slice.call(subject);
} else {
subject = subject[0];
throwWarning('onlyOneDOMElement', 3);
}
}
}
}
}
;
switch (false) {
case !isFunction:
newObjectType = 'Func';
break;
case !this.pholder:
newObjectType = 'Pholder';
break;
case !(targetIncludes(this.descriptor, 'array') && checkIf.isArray(subject[this.property])):
newObjectType = 'Array';
break;
case !targetIncludes(this.descriptor, 'event'):
newObjectType = 'Event';
this.eventMethods = {
listen: this.optionsPassed.listenMethod,
remove: this.optionsPassed.removeMethod,
emit: this.optionsPassed.emitMethod
};
if (!subject[this.eventMethods.listen]) {
this.eventMethods.listen = checkIf.isDomNode(subject) ? 'addEventListener' : 'on';
}
if (!subject[this.eventMethods.remove]) {
this.eventMethods.remove = checkIf.isDomNode(subject) ? 'removeEventListener' : 'removeListener';
}
if (!subject[this.eventMethods.emit]) {
this.eventMethods.emit = checkIf.isDomNode(subject) ? 'dispatchEvent' : 'emit';
}
;
break;
case !targetIncludes(this.descriptor, 'func'):
newObjectType = 'Proxy';
break;
case !isDomRadio:
newObjectType = 'DOMRadio';
break;
case !isDomCheckbox:
newObjectType = 'DOMCheckbox';
break;
case !targetIncludes(this.descriptor, 'attr'):
newObjectType = 'DOMAttr';
break;
default:
newObjectType = 'ObjectProp';
}
if (targetIncludes(this.descriptor, 'multi')) {
if (!subject.length) {
throwError('emptyList');
}
this.defineMainProps(new GroupBinding(this, subject, newObjectType));
} else {
this.defineMainProps(this.createBinding(subject, newObjectType, this, isFunction));
}
if (targetIncludes(this._.type, 'Event') || targetIncludes(this._.type, 'Proxy')) {
this.options.updateOnBind = false;
} else if (targetIncludes(this._.type, 'Func')) {
this.options.updateOnBind = true;
}
if (this.completeCallback) {
return this.completeCallback(this);
} else {
return this;
}
},
addToPublisher: function (publisherInterface) {
var alreadyHadSub, binding, i, len, ref;
publisherInterface.stage = 2;
publisherInterface.subs.push(this);
alreadyHadSub = publisherInterface._.addSub(this._, publisherInterface.options, publisherInterface.updateOnce);
if (publisherInterface.updateOnce) {
delete publisherInterface.updateOnce;
} else if (publisherInterface.options.updateOnBind && !alreadyHadSub) {
if (this._.isMulti) {
ref = this._.bindings;
for ((i = 0, len = ref.length); i < len; i++) {
binding = ref[i];
publisherInterface._.updateSub(binding, publisherInterface._);
}
} else {
publisherInterface._.updateSub(this._, publisherInterface._);
}
}
}
};
;
var METHOD_bothWays, METHOD_chainTo, METHOD_condition, METHOD_conditionAll, METHOD_of, METHOD_pollEvery, METHOD_set, METHOD_setOption, METHOD_stopPolling, METHOD_transform, METHOD_transformAll, METHOD_transformSelf, METHOD_unBind;
BindingInterface.prototype = Object.create(BindingInterfacePrivate, {
of: {
get: function () {
if (!this.stage) {
return METHOD_of;
}
}
},
set: {
get: function () {
if (this.stage) {
return METHOD_set;
}
}
},
chainTo: {
get: function () {
if (this.stage === 2) {
return METHOD_chainTo;
}
}
},
transformSelf: {
get: function () {
if (this.stage === 1) {
return METHOD_transformSelf;
}
}
},
transform: {
get: function () {
if (this.stage === 2) {
return METHOD_transform;
}
}
},
transformAll: {
get: function () {
if (this.stage === 2) {
return METHOD_transformAll;
}
}
},
condition: {
get: function () {
if (this.stage === 2) {
return METHOD_condition;
}
}
},
conditionAll: {
get: function () {
if (this.stage === 2) {
return METHOD_conditionAll;
}
}
},
bothWays: {
get: function () {
if (this.stage === 2) {
return METHOD_bothWays;
}
}
},
unBind: {
get: function () {
if (this.stage === 2) {
return METHOD_unBind;
}
}
},
pollEvery: {
get: function () {
if (this.stage) {
return METHOD_pollEvery;
}
}
},
stopPolling: {
get: function () {
if (this.stage) {
return METHOD_stopPolling;
}
}
},
setOption: {
get: function () {
if (this.stage === 2) {
return METHOD_setOption;
}
}
},
disallowFrom: {
get: function () {
var thisInterface;
if (this.stage === 2 && (thisInterface = this)) {
return genProxiedInterface(false, function (disallowInterface) {
var subInterface;
subInterface = thisInterface.subs[thisInterface.subs.length - 1];
thisInterface._.addDisallowRule(subInterface._, disallowInterface._);
return thisInterface;
});
}
}
},
updateOn: {
get: function () {
var thisInterface;
if (this.stage && (thisInterface = this)) {
return genProxiedInterface(false, function (subInterface) {
if (subInterface._ !== thisInterface._) {
thisInterface._.pubsMap[subInterface._.ID] = subInterface._;
subInterface._.addSub(genSelfUpdater(thisInterface._, true), subInterface.options, false, true);
}
return thisInterface;
});
}
}
},
removeUpdater: {
get: function () {
var selfUpdater, thisInterface;
if (this.stage && (thisInterface = this) && (selfUpdater = this._.selfUpdater)) {
return genProxiedInterface(false, function (subInterface) {
if (subInterface._.subsMeta[selfUpdater.ID]) {
delete thisInterface._.pubsMap[subInterface._.ID];
subInterface._.removeSub(selfUpdater);
}
});
}
}
},
to: {
get: function () {
var thisInterface;
if (this.stage === 1 && (thisInterface = this)) {
return genProxiedInterface(true, function (subInterface) {
if (subInterface._ !== thisInterface._) {
subInterface.addToPublisher(thisInterface);
}
return thisInterface;
});
}
}
},
and: {
get: function () {
var cloneBinding, cloneInterface;
cloneInterface = this.selfClone();
if (this.stage === 2) {
return cloneInterface;
} else if (this.stage === 1) {
if (!cloneInterface._.isMulti) {
cloneBinding = cloneInterface._;
cloneInterface._ = cloneInterface._ = new GroupBinding(cloneInterface);
cloneInterface._.addBinding(cloneBinding);
}
return genProxiedInterface(false, function (siblingInterface) {
cloneInterface._.addBinding(siblingInterface._);
return cloneInterface;
});
}
}
},
once: {
get: function () {
var interfaceToReturn;
if (this.stage === 1) {
interfaceToReturn = this.selfClone();
interfaceToReturn.updateOnce = true;
return interfaceToReturn;
}
}
},
update: {
get: function () {
return this.set;
}
},
twoWay: {
get: function () {
return this.bothWays;
}
},
pipe: {
get: function () {
return this.chainTo;
}
}
});
METHOD_of = function (object) {
if (!(checkIf.isObject(object) || checkIf.isFunction(object))) {
throwErrorBadArg(object);
}
if (checkIf.isBindingInterface(object)) {
object = object.object;
}
this.stage = 1;
return this.setObject(object);
};
METHOD_chainTo = function (subject, specificOptions, saveOptions) {
return SimplyBind(this.subs[this.subs.length - 1]).to(subject, specificOptions, saveOptions);
};
METHOD_set = function (newValue) {
this._.setValue(newValue);
return this;
};
METHOD_transformSelf = function (transformFn) {
if (!checkIf.isFunction(transformFn)) {
throwWarning('fnOnly', 1);
} else {
this._.setSelfTransform(transformFn, this.options.updateOnBind);
}
return this;
};
METHOD_transform = function (transformFn) {
this._.addModifierFn('transformFn', this.subs.slice(-1), transformFn, this.options.updateOnBind);
return this;
};
METHOD_transformAll = function (transformFn) {
this._.addModifierFn('transformFn', this.subs, transformFn, this.options.updateOnBind);
return this;
};
METHOD_condition = function (conditionFn) {
this._.addModifierFn('conditionFn', this.subs.slice(-1), conditionFn);
return this;
};
METHOD_conditionAll = function (conditionFn) {
this._.addModifierFn('conditionFn', this.subs, conditionFn);
return this;
};
METHOD_bothWays = function (altTransform) {
var binding, bindings, i, len, originCondition, originTransform, sub, subBinding, transformToUse;
sub = this.subs[this.subs.length - 1];
subBinding = sub._;
bindings = this._.isMulti ? this._.bindings : [this._];
subBinding.addSub(this._, sub.options);
for ((i = 0, len = bindings.length); i < len; i++) {
binding = bindings[i];
originTransform = binding.subsMeta[subBinding.ID].transformFn;
originCondition = binding.subsMeta[subBinding.ID].conditionFn;
if (originTransform || altTransform) {
transformToUse = checkIf.isFunction(altTransform) ? altTransform : originTransform;
if (transformToUse && altTransform !== false) {
subBinding.subsMeta[this._.ID].transformFn = transformToUse;
}
}
if (originCondition) {
subBinding.subsMeta[this._.ID].conditionFn = originCondition;
}
}
return this;
};
METHOD_unBind = function (bothWays) {
var i, len, ref, sub;
ref = this.subs;
for ((i = 0, len = ref.length); i < len; i++) {
sub = ref[i];
this._.removeSub(sub._, bothWays);
}
return this;
};
METHOD_pollEvery = function (time) {
this._.addPollInterval(time);
return this;
};
METHOD_stopPolling = function () {
this._.removePollInterval();
return this;
};
METHOD_setOption = function (optionName, newValue) {
this._.subsMeta[this.subs[this.subs.length - 1]._.ID].opts[optionName] = newValue;
return this;
};
;
;
var GroupBinding, proto;
GroupBinding = function (bindingInterface, objects, objectType) {
var bindings, i, len, object;
bindingInterface.selector = bindingInterface.selector.slice(6);
extendState(this, this["interface"] = bindingInterface);
this.isMulti = true;
this.bindings = bindings = [];
if (objects) {
for ((i = 0, len = objects.length); i < len; i++) {
object = objects[i];
this.addBinding(object, objectType);
}
}
return Object.defineProperties(this, {
'type': {
get: function () {
return bindings.map(function (binding) {
return binding.type;
});
}
},
'value': {
get: function () {
return bindings.map(function (binding) {
return binding.value;
});
}
}
});
};
proto = GroupBinding.prototype = Object.create(BindingInterfacePrivate);
Object.keys(Binding.prototype).forEach(function (methodName) {
return proto[methodName] = function (a, b, c, d) {
var binding, i, len, ref;
ref = this.bindings;
for ((i = 0, len = ref.length); i < len; i++) {
binding = ref[i];
if (methodName === 'updateSub') {
b = binding;
}
binding[methodName](a, b, c, d);
}
};
});
proto.addBinding = function (object, objectType) {
this.bindings.push(!objectType ? object : this.createBinding(object, objectType, this["interface"]));
};
;
module.exports = SimplyBind;
return module.exports;
},
2: function (require, module, exports) {
var exports, extend, modifiers, newBuilder, normalizeKeys;
extend = require(18);
normalizeKeys = function (keys) {
var i, key, len, output;
if (keys) {
output = {};
if (typeof keys !== 'object') {
output[keys] = true;
} else {
if (!Array.isArray(keys)) {
keys = Object.keys(keys);
}
for ((i = 0, len = keys.length); i < len; i++) {
key = keys[i];
output[key] = true;
}
}
return output;
}
};
newBuilder = function (isBase) {
var builder;
builder = function (target) {
var theTarget;
var $_len = arguments.length, $_i = -1, sources = new Array($_len);
while (++$_i < $_len) sources[$_i] = arguments[$_i];
if (builder.options.target) {
theTarget = builder.options.target;
} else {
theTarget = target;
sources.shift();
}
return extend(builder.options, theTarget, sources);
};
if (isBase) {
builder.isBase = true;
}
builder.options = {};
Object.defineProperties(builder, modifiers);
return builder;
};
modifiers = {
'deep': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
_.options.deep = true;
return _;
}
},
'own': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
_.options.own = true;
return _;
}
},
'allowNull': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
_.options.allowNull = true;
return _;
}
},
'nullDeletes': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
_.options.nullDeletes = true;
return _;
}
},
'concat': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
_.options.concat = true;
return _;
}
},
'clone': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
_.options.target = {};
return _;
}
},
'notDeep': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
return function (keys) {
_.options.notDeep = normalizeKeys(keys);
return _;
};
}
},
'deepOnly': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
return function (keys) {
_.options.deepOnly = normalizeKeys(keys);
return _;
};
}
},
'keys': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
return function (keys) {
_.options.keys = normalizeKeys(keys);
return _;
};
}
},
'notKeys': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
return function (keys) {
_.options.notKeys = normalizeKeys(keys);
return _;
};
}
},
'transform': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
return function (transform) {
if (typeof transform === 'function') {
_.options.globalTransform = transform;
} else if (transform && typeof transform === 'object') {
_.options.transforms = transform;
}
return _;
};
}
},
'filter': {
get: function () {
var _;
_ = this.isBase ? newBuilder() : this;
return function (filter) {
if (typeof filter === 'function') {
_.options.globalFilter = filter;
} else if (filter && typeof filter === 'object') {
_.options.filters = filter;
}
return _;
};
}
}
};
module.exports = exports = newBuilder(true);
exports.version = "1.7.3";
return module.exports;
},
3: function (require, module, exports) {
'use strict';
var matchHtmlRegExp = /["'&<>]/;
module.exports = escapeHtml;
function escapeHtml(string) {
var str = '' + string;
var match = matchHtmlRegExp.exec(str);
if (!match) {
return str;
}
var escape;
var html = '';
var index = 0;
var lastIndex = 0;
for (index = match.index; index < str.length; index++) {
switch (str.charCodeAt(index)) {
case 34:
escape = '&quot;';
break;
case 38:
escape = '&amp;';
break;
case 39:
escape = '&#39;';
break;
case 60:
escape = '&lt;';
break;
case 62:
escape = '&gt;';
break;
default:
continue;
}
if (lastIndex !== index) {
html += str.substring(lastIndex, index);
}
lastIndex = index + 1;
html += escape;
}
return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
return module.exports;
},
7: function (require, module, exports) {
function EventLite() {
if (!(this instanceof EventLite)) return new EventLite();
}
(function (EventLite) {
if ("undefined" !== typeof module) module.exports = EventLite;
var LISTENERS = "listeners";
var methods = {
on: on,
once: once,
off: off,
emit: emit
};
mixin(EventLite.prototype);
EventLite.mixin = mixin;
function mixin(target) {
for (var key in methods) {
target[key] = methods[key];
}
return target;
}
function on(type, func) {
getListeners(this, type).push(func);
return this;
}
function once(type, func) {
var that = this;
wrap.originalListener = func;
getListeners(that, type).push(wrap);
return that;
function wrap() {
off.call(that, type, wrap);
func.apply(this, arguments);
}
}
function off(type, func) {
var that = this;
var listners;
if (!arguments.length) {
delete that[LISTENERS];
} else if (!func) {
listners = that[LISTENERS];
if (listners) {
delete listners[type];
if (!Object.keys(listners).length) return off.call(that);
}
} else {
listners = getListeners(that, type, true);
if (listners) {
listners = listners.filter(ne);
if (!listners.length) return off.call(that, type);
that[LISTENERS][type] = listners;
}
}
return that;
function ne(test) {
return test !== func && test.originalListener !== func;
}
}
function emit(type, value) {
var that = this;
var listeners = getListeners(that, type, true);
if (!listeners) return false;
var arglen = arguments.length;
if (arglen === 1) {
listeners.forEach(zeroarg);
} else if (arglen === 2) {
listeners.forEach(onearg);
} else {
var args = Array.prototype.slice.call(arguments, 1);
listeners.forEach(moreargs);
}
return !!listeners.length;
function zeroarg(func) {
func.call(that);
}
function onearg(func) {
func.call(that, value);
}
function moreargs(func) {
func.apply(that, args);
}
}
function getListeners(that, type, readonly) {
if (readonly && !that[LISTENERS]) return;
var listeners = that[LISTENERS] || (that[LISTENERS] = {});
return listeners[type] || (listeners[type] = []);
}
})(EventLite);
return module.exports;
},
18: function (require, module, exports) {
var extend, isArray, isObject, shouldDeepExtend;
isArray = function (target) {
return Array.isArray(target);
};
isObject = function (target) {
return target && Object.prototype.toString.call(target) === '[object Object]' || isArray(target);
};
shouldDeepExtend = function (options, target, parentKey) {
if (options.deep) {
if (options.notDeep) {
return !options.notDeep[target];
} else {
return true;
}
} else if (options.deepOnly) {
return options.deepOnly[target] || parentKey && shouldDeepExtend(options, parentKey);
}
};
module.exports = extend = function (options, target, sources, parentKey) {
var i, key, len, source, sourceValue, subTarget, targetValue;
if (!target || typeof target !== 'object' && typeof target !== 'function') {
target = {};
}
for ((i = 0, len = sources.length); i < len; i++) {
source = sources[i];
if (source != null) {
for (key in source) {
sourceValue = source[key];
targetValue = target[key];
if (sourceValue === target || sourceValue === void 0 || (sourceValue === null && !options.allowNull && !options.nullDeletes) || (options.keys && !options.keys[key]) || (options.notKeys && options.notKeys[key]) || (options.own && !source.hasOwnProperty(key)) || (options.globalFilter && !options.globalFilter(sourceValue, key, source)) || (options.filters && options.filters[key] && !options.filters[key](sourceValue, key, source))) {
continue;
}
if (sourceValue === null && options.nullDeletes) {
delete target[key];
continue;
}
if (options.globalTransform) {
sourceValue = options.globalTransform(sourceValue, key, source);
}
if (options.transforms && options.transforms[key]) {
sourceValue = options.transforms[key](sourceValue, key, source);
}
switch (false) {
case !(options.concat && isArray(sourceValue) && isArray(targetValue)):
target[key] = targetValue.concat(sourceValue);
break;
case !(shouldDeepExtend(options, key, parentKey) && isObject(sourceValue)):
subTarget = isObject(targetValue) ? targetValue : isArray(sourceValue) ? [] : {};
target[key] = extend(options, subTarget, [sourceValue], key);
break;
default:
target[key] = sourceValue;
}
}
}
}
return target;
};
return module.exports;
}
}, this);
if (typeof define === 'function' && define.umd) {
define(function () {
return require(0);
});
} else if (typeof module === 'object' && module.exports) {
module.exports = require(0);
} else {
return this['DataTable'] = require(0);
}
}).call(this, null, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : this);


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSIsInBhcnRzL21hcmt1cC5jb2ZmZWUiLCJwYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCJwYXJ0cy9oZWxwZXJzLmNvZmZlZSIsInBhcnRzL21ldGhvZHMvX2luZGV4LmNvZmZlZSIsInBhcnRzL21ldGhvZHMvZ2VuZXJhbC5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL2NvbHVtbi5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL3Jvdy5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL3NwZWNpYWxDZWxscy5jb2ZmZWUiLCJwYXJ0cy9hdHRhY2hFdmVudHMuY29mZmVlIiwicGFydHMvYXR0YWNoQmluZGluZ3MuY29mZmVlIiwicGFydHMvdXNlckFjdGlvbk1ldGhvZHMuY29mZmVlIiwiLi4vLi4vcGFja2FnZS5qc29uIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvX2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL19pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jaGFuZ2VFdmVudC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9yZXF1aXJlc0RvbURlc2NyaXB0b3JGaXguY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvd2luZG93UHJvcHNUb0lnbm9yZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jaGVja3MuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvZGVzY3JpcHRvci1tb2QuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvd2Via2l0RG9tRGVzY3JpcHRvckZpeC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jbG9uaW5nLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL2NhY2hlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL3BsYWNlaG9sZGVycy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9lcnJvcnMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2Vycm9yc0FuZFdhcm5pbmdzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvU2ltcGx5QmluZC9faW5kZXguY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9TaW1wbHlCaW5kL21ldGhvZHMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3BhY2thZ2UuanNvbiIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvU2ltcGx5QmluZC9tZXRob2RzLnVuQmluZEFsbC1wYXJzZURPTU9iamVjdC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL0JpbmRpbmcvX2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZy9wcm90b3R5cGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nL3Byb3RvdHlwZS5zZXRWYWx1ZS1PYmplY3RQcm9wLURPTVZhbHVlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZy9wcm90b3R5cGUuc2V0VmFsdWUtRE9NVHlwZXMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nSW50ZXJmYWNlL2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHJpdmF0ZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL0JpbmRpbmdJbnRlcmZhY2UvcHJvdG90eXBlLXByaXZhdGUuc2V0T2JqZWN0LXBhcnNlRE9NT2JqZWN0LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHJpdmF0ZS5zZXRPYmplY3QtZGVmaW5lRXZlbnRNZXRob2RzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHVibGljLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvR3JvdXBCaW5kaW5nL19pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3BhY2thZ2UuanNvbiIsIm5vZGVfbW9kdWxlcy9lc2NhcGUtaHRtbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudC1saXRlL2V2ZW50LWxpdGUuanMiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9leHRlbmQuY29mZmVlIl0sIm5hbWVzIjpbIkRhdGFUYWJsZSIsImV4dGVuZCIsImVzY0hUTUwiLCJtYXJrdXAiLCJ0YWJsZU91dGVyd3JhcCIsImFyZyIsIklEIiwiYmFzZUNsYXNzIiwibWluV2lkdGgiLCJoYXNNb2JpbGUiLCJjZWxsc0hhdmVQYWRkaW5nIiwidGFibGUiLCJhbGlnbm1lbnQiLCJsb2FkaW5nIiwibm9SZXN1bHRzIiwiaXRlbVNpbmdsZUxhYmVsIiwiaXRlbVBsdXJhbExhYmVsIiwiZXJyb3IiLCJwYWdlU3RhdHVzIiwic2hvd1BhZ2VTdGF0dXMiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbkl0ZW0iLCJ2YWx1ZSIsImhlYWRpbmdDZWxsIiwiZXh0cmFDbGFzc2VzIiwic2x1ZyIsImljb24iLCJsYWJlbCIsInN0eWxlIiwicm93Iiwicm93SUQiLCJjZWxscyIsImRyaWxsZG93biIsInJvd0NlbGwiLCJjb2x1bW4iLCJzZWFyY2hGaWVsZCIsInNlYXJjaCIsImxlbmd0aCIsImlwRGV0YWlscyIsImlwQWRkcmVzcyIsImV4dHJhIiwiaXBEZXRhaWxzSXRlbSIsImZpZWxkcyIsImZpZWxkc0l0ZW0iLCJidXR0b24iLCJhY3Rpb24iLCJpc011bHRpIiwiYWN0aW9ucyIsImFjdGlvbnNPdmVybGF5IiwiZGVmYXVsdHMiLCJhY3Rpb25zSXRlbSIsImN1c3RvbUljb25TdHlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiJCIsImdldCIsImhlbHBlcnMiLCJjb21wYXJlVmFsdWVzIiwidmFsdWVBIiwidmFsdWVCIiwicGFyc2VGbG9hdCIsInRvZ2dsZUFjdGlvbnNQb3B1cCIsImFjdGlvbnNQb3B1cCQiLCJpc09wZW4iLCJkYXRhIiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJvdmVybGF5JCIsImFkZENsYXNzIiwiYXBwZW5kVG8iLCJkb2N1bWVudCIsImJvZHkiLCJvbmUiLCJnZXRCcmVha2Rvd25Ub3RhbCIsImJyZWFrZG93biIsImJyZWFrZG93bktleXMiLCJtYXAiLCJicmVha2Rvd25JdGVtIiwicmVkdWNlIiwiYSIsImIiLCJub3JtYWxpemVDb2x1bW5zIiwiY29sdW1ucyIsIkFycmF5IiwiaXNBcnJheSIsIm91dHB1dCIsImkiLCJyZWYiLCJqIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidHlwZSIsImdldEJyZWFrZG93bkJhcldpZHRoIiwibGFyZ2VzdCIsImJyZWFrZG93bkJhclRvdGFsIiwiZ2VuSGVhZGVyQ2VsbFN0eWxlIiwic3R5bGVTdHJpbmciLCJ3aWR0aCIsImdyb3ciLCJnZW5DZWxsU3R5bGUiLCJjb2xvciIsImNvbG9yTWFwcGluZyIsImNvbG9yVHlwZSIsImN1c3RvbVN0eWxlIiwiZ2VuQ2VsbENsYXNzbmFtZSIsImNsYXNzU3RyaW5nIiwic29ydGFibGUiLCJub0xhYmVsIiwiaXNMaW5rIiwibm9FbGxpcHNpcyIsInNob3dPdmVyZmxvdyIsImFsd2F5c0NlbnRlciIsImluY2x1ZGVzIiwiaWNvbk1hcHBpbmciLCJpY29uVHlwZSIsImNvbnRhaW5lciIsIm9wdGlvbnMiLCJjbG9uZSIsImRlZXBPbmx5Iiwic3RhdGUiLCJjdXJyZW50SUQiLCJ0YWJsZUlEIiwidmlzaWJsZVJvd3MiLCJhdmFpbGFibGVSb3dzIiwiYWxsUm93cyIsImxhcmdlc3RCcmVha2Rvd25Ub3RhbCIsInNlYXJjaENyaXRlcmlhIiwic2VhcmNoUGFyYW0iLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwiY3VycmVudFBhZ2UiLCJlbHMiLCJ0YWJsZUhlYWRpbmciLCJjaGlsZHJlbiIsImZpcnN0IiwidGFibGVCb2R5IiwibGFzdCIsIm5vUmVzdWx0c01lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInBhZ2luYXRpb25JdGVtcyIsInBhZ2luYXRpb25FeHRyYSIsInBhZ2luYXRpb25FeHRyYVNlbGVjdCIsInBhZ2luYXRpb25FeHRyYVRleHQiLCJwcmV2IiwiaW5zZXJ0QmVmb3JlIiwiZ2xvYmFsU3R5bGVzIiwicHJlcGVuZFRvIiwiYXBwZW5kIiwiZ2VuZXJhdGVIZWFkaW5nQ29sdW1ucyIsImJpbmQiLCJ0aGVuIiwiYXR0YWNoRXZlbnRzIiwiYXR0YWNoQmluZGluZ3MiLCJsb2FkT25Jbml0IiwibG9hZERhdGEiLCJwcm90b3R5cGUiLCJmZXRjaERhdGEiLCJfdGhpcyIsImNhbGwiLCJlcnIiLCJzZXREYXRhIiwiYXBwZW5kRGF0YSIsInB1c2giLCJhcHBseSIsInVucHJvY2Vzc1JvdyIsInJlZnJlc2giLCJtYXJrdXBBcmdzIiwiYXJnc09iamVjdCIsImNhbGNQYWdlQ291bnQiLCJyb3dzIiwicGFnZUNvdW50UmVhbCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSIsInBhZ2VDb3VudCIsInBhZ2VDb3VudE1heCIsImNhbGNQZXJjZW50YWdlU3RyaW5nIiwiY29sdW1uVmFsdWUiLCJjb2x1bW5OYW1lIiwiY29sdW1uQSIsInBlcmNlbnRhZ2UiLCJmb3JtdWxhIiwiY29sdW1uQiIsIm1hdGhPcGVyYXRvciIsInBlcmNlbnRhZ2VWYWx1ZSIsInBlcmNlbnQiLCJjb252ZXJ0VG9QZXJjZW50Iiwic29ydFJvd3MiLCJ0YXJnZXRDb2x1bW4iLCJjdXN0b21Tb3J0Iiwic2xpY2UiLCJyZXZlcnNlIiwic29ydEZuIiwicmF3VmFsdWUiLCJyYXdWYWx1ZUZvcm1hdHRlciIsInNvcnQiLCJhVmFsdWUiLCJiVmFsdWUiLCJzZXRWaXNpYmxlUGFnZSIsInRhcmdldFBhZ2UiLCJyb3dzVG9SZXZlYWwiLCJyb3dzVG9IaWRlIiwidmlzaWJsZSIsInNldFBhZ2VJbmRpY2F0b3IiLCJtYXRjaGVkUGFnZUVsJCIsInBhZ2VJdGVtcyQiLCJmaW5kIiwiZXEiLCJub3QiLCJoYXNCcmVha2Rvd25CYXIiLCJPYmplY3QiLCJrZXlzIiwiaW5uZXJIVE1MIiwiam9pbiIsInVwZGF0ZUNvbHVtbnMiLCJ1cGRhdGVkQ29sdW1ucyIsImRlZXAiLCJwcm9jZXNzUm93IiwicHJvY2Vzc2VkIiwiZ2VuZXJhdGVSb3ciLCJTaW1wbHlCaW5kIiwidXBkYXRlRXZlbklmU2FtZSIsIm9mIiwidG8iLCJpc1Zpc2libGUiLCJwcmV2VmFsdWUiLCJlbCIsImRldGFjaCIsInVwZGF0ZWRCcmVha2Rvd25XaWR0aCIsImJyZWFrZG93bkJhcldpZHRoIiwidHJhbnNmb3JtIiwiYW5kIiwiY2hhaW5UbyIsImJyZWFrZG93bkJhckVsIiwiZHJpbGxkb3duRWwiLCJpbmRleCIsImNvbmRpdGlvbiIsImNvbmRpdGlvbkFsbCIsInVuQmluZEFsbCIsImRyaWxsZG93bkVscyIsInJlUmVuZGVyUm93IiwibmV3Um93RWwiLCJnZW5lcmF0ZVJvd01hcmt1cCIsInByZXZSb3dFbCIsInJlcGxhY2VXaXRoIiwiZXhwYW5kQnV0dG9uIiwibWF4Iiwic3ViUm93IiwiZHJpbGxkb3duT3BlbiIsIm9uY2UiLCJzZXRUaW1lb3V0IiwiYnV0dG9uSGVpZ2h0IiwiaGVpZ2h0IiwidG9wIiwicm93SGVpZ2h0IiwidXBkYXRlT24iLCJ0aHJvdHRsZSIsIndpbmRvdyIsInBhcmVudFJvdyIsImlzU3ViIiwidW5pcXVlSUQiLCJkcmlsbGRvd25NYXJrdXBzIiwiZHJpbGxkb3duUm93IiwiY2VsbFZhbHVlIiwicm93Q2VsbHMiLCJnZW5lcmF0ZUlubGluZUZpZWxkcyIsImdlbmVyYXRlSXBEZXRhaWxzIiwiZ2VuZXJhdGVCcmVha2Rvd25CYXIiLCJnZW5lcmF0ZUJ1dHRvbiIsImJ1dHRvbkljb24iLCJnZW5lcmF0ZUFjdGlvbnMiLCJmb3JtYXR0ZXIiLCJyb3dPYmoiLCJjb2x1bW5FbnRpdHkiLCJsZWdlbmQiLCJ0b3RhbCIsImJyZWFrZG93bkJhciIsInZhbHVlRm9ybWF0IiwiYmFycyIsImtleSIsImJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2JhciIsImJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2hvdmVyYm94IiwiZm9yRWFjaCIsImJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2hvdmVyYm94X3JvdyIsImN1c3RvbUNvbG9ycyIsImRhdGFGaWVsZHMiLCJyZXN1bHRzIiwiYWN0aW9uc01hcmt1cCIsImJ1dHRvbk1hcmt1cCIsImV4dHJhTWFya3VwIiwib24iLCJldmVudCIsIiR0aGlzIiwiY3VycmVudFRhcmdldCIsImlzQmFjayIsImhhc0NsYXNzIiwiaXNOZXh0IiwiaXNFeHRyYSIsInBhZ2VOdW1iZXIiLCJodG1sIiwidGV4dENvbnRlbnQiLCJidXR0b24kIiwibmV4dCIsIml0ZW1Sb3ckIiwiY2xvc2VzdCIsIml0ZW1JRCIsIml0ZW1JbmRleCIsImRhdGFJdGVtIiwicGFyZW50IiwidHJpZ2dlciIsIml0ZW1Sb3ciLCJjb250ZW50JCIsIndyYXBwZXIkIiwidHJpZ2dlciQiLCJjb3VudHJ5JCIsImlzTG9hZGVkIiwiaXBEYXRhRmV0Y2hlciIsInNldHRpbmdzIiwidHJhY2tBcnJheUNoaWxkcmVuIiwiaGFzRXJyb3IiLCJjb25zb2xlIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwibW9iaWxlV2lkdGgiLCJpc0hpZGRlbiIsImwiLCJwcmV2Um93cyIsImluZGV4T2YiLCJ1cGRhdGVPbkJpbmQiLCJjb3VudCIsInJlYWxDb3VudCIsInRyYW5zZm9ybVNlbGYiLCJvcHRpb24iLCJwaXBlIiwiYm90aFdheXMiLCJyZWYxIiwicm93c1RvTWFrZUF2YWlsYWJsZSIsImZpbHRlciIsInJvd1ZhbHVlIiwidG9TdHJpbmciLCJyb3dGaWx0ZXIiLCJuYW1lIiwicmVmMiIsInJvd0Nsb25lIiwiY3VycmVudFNvcnQiLCJwcmV2U29ydCIsImN1cnJlbnQiLCJ2ZXJzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5TXV0YXRvck1ldGhvZHMiLCJkdW1teVByb3BlcnR5RGVzY3JpcHRvciIsImJvdW5kSW5zdGFuY2VzIiwicGxhY2Vob2xkZXIiLCJjcmVhdGUiLCJzaWxlbnQiLCJzZXQiLCJuZXdQbGFjZWhvbGRlciIsImNoZWNrSWYiLCJzZXRQaG9sZGVyUmVnRXgiLCJkZWZhdWx0T3B0aW9ucyIsImRlbGF5Iiwic2ltcGxlU2VsZWN0b3IiLCJwcm9taXNlVHJhbnNmb3JtcyIsImRpc3BhdGNoRXZlbnRzIiwic2VuZEFycmF5Q29waWVzIiwiZGVmaW5lUHJvcGVydHkiLCJnZXREZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY2FjaGVkRXZlbnQiLCJjaGFuZ2VFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiX3NiIiwicmVxdWlyZXNEb21EZXNjcmlwdG9yRml4IiwiRWxlbWVudCIsIndpbmRvd1Byb3BzVG9JZ25vcmUiLCJzZXRWYWx1ZU5vb3AiLCJ2IiwicHVibGlzaGVyIiwidXBkYXRlQWxsU3VicyIsImdlbklEIiwiZ2VuT2JqIiwiZ2VuUHJveGllZEludGVyZmFjZSIsImNvbXBsZXRlQ2FsbGJhY2siLCJzdWJqZWN0IiwiY3VzdG9tT3B0aW9ucyIsInNhdmVPcHRpb25zIiwiZ2VuU2VsZlVwZGF0ZXIiLCJiaW5kaW5nIiwiZmV0Y2hWYWx1ZSIsInNlbGZVcGRhdGVyIiwiQmluZGluZyIsInNldFZhbHVlIiwiZmV0Y2hEaXJlY3RWYWx1ZSIsInRhcmdldCIsIml0ZW0iLCJpc0RlZmluZWQiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0Z1bmN0aW9uIiwiaXNCaW5kaW5nSW50ZXJmYWNlIiwiQmluZGluZ0ludGVyZmFjZSIsImlzQmluZGluZyIsImlzSXRlcmFibGUiLCJpc0RvbSIsIm5vZGVOYW1lIiwibm9kZVR5cGUiLCJpc0RvbUlucHV0IiwiaXNEb21SYWRpbyIsImlzRG9tQ2hlY2tib3giLCJpc0VsQ29sbGVjdGlvbiIsIk5vZGVMaXN0IiwiSFRNTENvbGxlY3Rpb24iLCJqUXVlcnkiLCJkb21FbHNBcmVTYW1lIiwiaXRlcmFibGUiLCJpdGVtc1dpdGhTYW1lVHlwZSIsImlzRG9tTm9kZSIsImNvbnZlcnRUb0xpdmUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImlzUHJvdG8iLCJkZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwib2JqZWN0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImZldGNoRGVzY3JpcHRvciIsImJpbmRpbmdJbnN0YW5jZSIsIm9ubHlBcnJheU1ldGhvZHMiLCJfIiwib3JpZ0Rlc2NyaXB0b3IiLCJtZXRob2QiLCJyZXN1bHQiLCJhcmd1bWVudHMiLCJvcmlnRm4iLCJjb250ZXh0IiwiYXJncyIsImdldHRlclZhbHVlIiwicHJveHlGbiIsInNlbGZUcmFuc2Zvcm0iLCJpc0xpdmVQcm9wIiwibmV3VmFsdWUiLCJ0YXJnZXRJbmNsdWRlcyIsInByb3BlcnR5RGVzY3JpcHRvciIsIm9yaWdHZXR0ZXIiLCJvcmlnU2V0dGVyIiwic2hvdWxkV3JpdGVMaXZlUHJvcCIsImNvbnN0cnVjdG9yIiwiQ1NTU3R5bGVEZWNsYXJhdGlvbiIsImNsb25lTm9kZSIsInR5cGVJc0FycmF5Iiwic2hvdWxkSW5kaWNhdGVVcGRhdGVJc0Zyb21TZWxmIiwiZW51bWVyYWJsZSIsImNvbnZlcnRUb1JlZyIsIm5ld0Rlc2NyaXB0b3IiLCJjbG9uZU9iamVjdCIsImV4dGVuZFN0YXRlIiwiYmFzZSIsInN0YXRlVG9Jbmhlcml0IiwiY2FjaGUiLCJzZWxlY3RvciIsImlzTXVsdGlDaG9pY2UiLCJzYW1wbGVJdGVtIiwiX3NiX0lEIiwiX3NiX21hcCIsImdyb3VwQmluZGluZyIsIkIiLCJwcm9wc01hcCIsImFkZFRvTm9kZVN0b3JlIiwicGhvbGRlclJlZ0V4IiwicGhvbGRlclJlZ0V4U3BsaXQiLCJlbmQiLCJlc2NhcGVSZWdFeCIsIm1pZGRsZSIsIlJlZ0V4cCIsInN0YXJ0IiwiYXBwbHlQbGFjZWhvbGRlcnMiLCJjb250ZXh0cyIsInZhbHVlcyIsImluZGV4TWFwIiwiY29udGV4dFBhcnQiLCJub2RlU3RvcmUiLCJub2RlIiwidGFyZ2V0UGxhY2Vob2xkZXIiLCJzY2FuVGV4dE5vZGVzUGxhY2Vob2xkZXJzIiwiZWxlbWVudCIsImNoaWxkTm9kZXMiLCJtYXRjaCIsInRleHRQaWVjZXMiLCJzcGxpdCIsIm5ld0ZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm5ld05vZGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwidGV4dFBpZWNlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImdldEVyclNvdXJjZSIsImVycm9yTmFtZSIsIkVycm9yIiwiZXJyb3JzIiwidGhyb3dXYXJuaW5nIiwid2FybmluZ05hbWUiLCJkZXB0aCIsImVyclNvdXJjZSIsIndhcm4iLCJ0aHJvd0Vycm9yQmFkQXJnIiwidGhyb3dFcnJvciIsInN0YWNrIiwiaW52YWxpZFBhcmFtTmFtZSIsImZuT25seSIsImJhZEV2ZW50QXJnIiwiZW1wdHlMaXN0Iiwib25seU9uZURPTUVsZW1lbnQiLCJtaXhlZEVsTGlzdCIsImludGVyZmFjZVRvUmV0dXJuIiwic2VsZkNsb25lIiwibmV3SW50ZXJmYWNlIiwic2V0T2JqZWN0Iiwic2V0UHJvcGVydHkiLCJib3VuZElEIiwicHJvcE1hcCIsInJlbW92ZUFsbFN1YnMiLCJwcm9wIiwicGFyZW50QmluZGluZyIsIm9wdGlvbnNEZWZhdWx0Iiwic3VicyIsInN1YnNNZXRhIiwicHVic01hcCIsImF0dGFjaGVkRXZlbnRzIiwiY2hvaWNlcyIsImNob2ljZUVsIiwiY2hvaWNlQmluZGluZyIsImFkZFN1YiIsInRyYW5zZm9ybUZuIiwicGFyZW50UHJvcGVydHkiLCJzY2FuRm9yUGhvbGRlcnMiLCJwaG9sZGVyVmFsdWVzIiwicGhvbGRlciIsInRleHROb2RlcyIsInN1YmplY3RWYWx1ZSIsImV2ZW50VXBkYXRlSGFuZGxlciIsInN1YiIsInVwZGF0ZU9uY2UiLCJhbHJlYWR5SGFkU3ViIiwic3ViSXRlbSIsIm1ldGFEYXRhIiwidW5zaGlmdCIsIm9wdHMiLCJ2YWx1ZVJlZiIsInJlbW92ZVN1YiIsInNwbGljZSIsImRlc3Ryb3kiLCJyZW1vdmVQb2xsSW50ZXJ2YWwiLCJ1blJlZ2lzdGVyRXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJmcm9tU2VsZiIsImZyb21DaGFuZ2VFdmVudCIsImNob2ljZU5hbWUiLCJlbnRpcmVWYWx1ZSIsImsiLCJsZW4iLCJsZW4xIiwibiIsIm5ld0Nob2ljZVZhbHVlIiwibmV3Q2hvaWNlcyIsIm5ld1ZhbHVlQXJyYXkiLCJvdmVyd3JpdGVQcmV2aW91cyIsInByZXZDdXJzcm9yIiwidGFyZ2V0Q2hvaWNlQmluZGluZyIsInRleHROb2RlIiwiZGlzcGF0Y2hFdmVudCIsImNvbmNhdCIsInZhbHVlUGFzc2VkIiwiaXNFbWl0dGVyIiwiZW1pdEV2ZW50IiwiY2hlY2tlZCIsInNldEF0dHJpYnV0ZSIsImFyciIsInVwZGF0ZVN1YiIsImlzRGVsYXllZFVwZGF0ZSIsImN1cnJlbnRUaW1lIiwibWV0YSIsInN1YlZhbHVlIiwidGltZVBhc3NlZCIsImRpc2FsbG93TGlzdCIsIkRhdGUiLCJsYXN0VXBkYXRlIiwiY2xlYXJUaW1lb3V0IiwidXBkYXRlVGltZXIiLCJjb25kaXRpb25GbiIsImFkZE1vZGlmaWVyRm4iLCJzdWJJbnRlcmZhY2VzIiwic3ViamVjdEZuIiwic3ViSW50ZXJmYWNlIiwic3ViTWV0YURhdGEiLCJzdWJzY3JpYmVyIiwiYmluZGluZ3MiLCJzZXRTZWxmVHJhbnNmb3JtIiwiYWRkRGlzYWxsb3dSdWxlIiwidGFyZ2V0U3ViIiwidGFyZ2V0RGlzYWxsb3ciLCJwaG9sZGVySW5kZXhNYXAiLCJwaG9sZGVyQ29udGV4dHMiLCJlIiwiYWRkUG9sbEludGVydmFsIiwidGltZSIsInBvbGxJbnRlcnZhbCIsInNldEludGVydmFsIiwicG9sbGVkVmFsdWUiLCJjbGVhckludGVydmFsIiwiYWRkVXBkYXRlTGlzdGVuZXIiLCJldmVudE5hbWUiLCJ0YXJnZXRQcm9wZXJ0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG91bGRSZWRlZmluZVZhbHVlIiwicmVnaXN0ZXJFdmVudCIsImV2ZW50SGFuZGxlciIsImV2ZW50TWV0aG9kcyIsImxpc3RlbiIsImV4dHJhRGF0YSIsImV2ZW50T2JqZWN0IiwiZW1pdCIsImJpbmRpbmdEYXRhIiwiaW5oZXJpdGVkU3RhdGUiLCJzdGFnZSIsIm9wdGlvbnNQYXNzZWQiLCJCaW5kaW5nSW50ZXJmYWNlUHJpdmF0ZSIsImRlZmluZU1haW5Qcm9wcyIsImRlZmluZVByb3BlcnRpZXMiLCJvYmplY3RzIiwiY3JlYXRlQmluZGluZyIsIm5ld09iamVjdFR5cGUiLCJiaW5kaW5nSW50ZXJmYWNlIiwiY2FjaGVkQmluZGluZyIsInBhdGNoQ2FjaGVkQmluZGluZyIsIm5ld0JpbmRpbmciLCJpc05hTiIsInBhcnNlSW50IiwibGlzdGVuTWV0aG9kIiwicmVtb3ZlTWV0aG9kIiwiZW1pdE1ldGhvZCIsIkdyb3VwQmluZGluZyIsImFkZFRvUHVibGlzaGVyIiwicHVibGlzaGVySW50ZXJmYWNlIiwiTUVUSE9EX2JvdGhXYXlzIiwiTUVUSE9EX29mIiwiTUVUSE9EX3NldCIsIk1FVEhPRF9jaGFpblRvIiwiTUVUSE9EX3RyYW5zZm9ybVNlbGYiLCJNRVRIT0RfdHJhbnNmb3JtIiwidHJhbnNmb3JtQWxsIiwiTUVUSE9EX3RyYW5zZm9ybUFsbCIsIk1FVEhPRF9jb25kaXRpb24iLCJNRVRIT0RfY29uZGl0aW9uQWxsIiwidW5CaW5kIiwiTUVUSE9EX3VuQmluZCIsInBvbGxFdmVyeSIsIk1FVEhPRF9wb2xsRXZlcnkiLCJzdG9wUG9sbGluZyIsIk1FVEhPRF9zdG9wUG9sbGluZyIsInNldE9wdGlvbiIsIk1FVEhPRF9zZXRPcHRpb24iLCJkaXNhbGxvd0Zyb20iLCJ0aGlzSW50ZXJmYWNlIiwiZGlzYWxsb3dJbnRlcmZhY2UiLCJyZW1vdmVVcGRhdGVyIiwiY2xvbmVCaW5kaW5nIiwiY2xvbmVJbnRlcmZhY2UiLCJhZGRCaW5kaW5nIiwic2libGluZ0ludGVyZmFjZSIsInVwZGF0ZSIsInR3b1dheSIsInNwZWNpZmljT3B0aW9ucyIsImFsdFRyYW5zZm9ybSIsInN1YkJpbmRpbmciLCJvcmlnaW5UcmFuc2Zvcm0iLCJvcmlnaW5Db25kaXRpb24iLCJ0cmFuc2Zvcm1Ub1VzZSIsIm9wdGlvbk5hbWUiLCJvYmplY3RUeXBlIiwicHJvdG8iLCJtZXRob2ROYW1lIiwiYyIsImQiLCJub3JtYWxpemVLZXlzIiwibmV3QnVpbGRlciIsImlzQmFzZSIsImJ1aWxkZXIiLCJ0aGVUYXJnZXQiLCIkX2kiLCJzb3VyY2VzIiwic2hpZnQiLCJtb2RpZmllcnMiLCJvd24iLCJhbGxvd051bGwiLCJudWxsRGVsZXRlcyIsIm5vdERlZXAiLCJub3RLZXlzIiwiZ2xvYmFsVHJhbnNmb3JtIiwidHJhbnNmb3JtcyIsImdsb2JhbEZpbHRlciIsImZpbHRlcnMiLCJtYXRjaEh0bWxSZWdFeHAiLCJlc2NhcGVIdG1sIiwic3RyaW5nIiwic3RyIiwiZXhlYyIsImVzY2FwZSIsImxhc3RJbmRleCIsImNoYXJDb2RlQXQiLCJzdWJzdHJpbmciLCJFdmVudExpdGUiLCJMSVNURU5FUlMiLCJtZXRob2RzIiwib2ZmIiwibWl4aW4iLCJmdW5jIiwiZ2V0TGlzdGVuZXJzIiwidGhhdCIsIndyYXAiLCJvcmlnaW5hbExpc3RlbmVyIiwibGlzdG5lcnMiLCJuZSIsInRlc3QiLCJsaXN0ZW5lcnMiLCJhcmdsZW4iLCJ6ZXJvYXJnIiwib25lYXJnIiwibW9yZWFyZ3MiLCJyZWFkb25seSIsInNob3VsZERlZXBFeHRlbmQiLCJwYXJlbnRLZXkiLCJzb3VyY2UiLCJzb3VyY2VWYWx1ZSIsInRhcmdldFZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJzdWJUYXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQUE7Ozs7Ozs7Ozs7OzthQUlhO0FBSGJDLFNBS1M7QUFKVEMsVUFNVTtBQUxWLEFDSEFDO1NBQ0NDO2dCQUFnQixVQUFDQyxLQUFEO0FBQTJEQztBQUF6REEsY0FBSUMsMkJBQVdDLHlCQUFVQywyQkFBV0M7T0FBcUIsY0FDL0RILFlBQVUsTUFBR0QsS0FBRyxjQUFXQyxZQUFVLHVEQUM5QyxDQUFJQyxXQUFjLGlCQUFvQixNQUFHLE1BQ3pDLENBQUlDLFlBQWUsc0JBQXlCLE1BQUcsTUFDL0MsQ0FBSUMsbUJBQXNCLHNCQUF5QixNQUFHOztBQUl6REMsT0FBTyxVQUFDTixLQUFEO0FBQTJCTztBQUF6QkwsNEJBQVdLO09BQWMsaUJB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bUIsUUFBUTJrQixnQkFBZ0JtQyxhQUFhMWMsS0FBS3ljOztBQUN6RCxJQUFHN21CLFFBQVE0a0IsY0FBZTVrQixRQUFRNGtCLFdBQVd4YSxNQUE3QztBQUNDMGMsY0FBYzltQixRQUFRNGtCLFdBQVd4YSxLQUFLMGMsYUFBYTFjLEtBQUt5Yzs7QUFFekQ7T0FDTTdtQixRQUFRNGMsVUFBVzVlLFFBQVE4b0IsZ0JBQWlCOW9CLFFBQVErb0I7QUFDeER2VixPQUFPcEgsT0FBTzJjLFlBQVluSyxPQUFPa0s7O0tBRm5DLEVBSU1ILGlCQUFpQjNtQixTQUFTb0ssS0FBS3djLGNBQWVqVixTQUFTbVY7QUFDM0RHLFlBQWV0VixTQUFTb1YsZUFBa0JBLGNBQW9CL29CLFFBQVE4b0IsZUFBa0IsS0FBUTtBQUNoR3RWLE9BQU9wSCxPQUFPdlIsT0FBT21ILFNBQVNpbkIsV0FBVyxDQUFDSCxjQUFjMWM7OztBQUd4RG9ILE9BQU9wSCxPQUFPMGM7Ozs7O0FBR2xCLE9BQU90ViIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJTaW1wbHlCaW5kID0gaW1wb3J0ICdAZGFuaWVsa2FsZW4vc2ltcGx5YmluZCdcbmV4dGVuZCA9IGltcG9ydCAnc21hcnQtZXh0ZW5kJ1xuZXNjSFRNTCA9IGltcG9ydCAnZXNjYXBlLWh0bWwnXG5pbXBvcnQgJy4vcGFydHMvbWFya3VwJ1xuaW1wb3J0ICcuL3BhcnRzL2RlZmF1bHRzJ1xuaW1wb3J0ICcuL3BhcnRzL2hlbHBlcnMnXG5cbmNsYXNzIERhdGFUYWJsZSBleHRlbmRzIHJlcXVpcmUoJ2V2ZW50LWxpdGUnKVxuXHRjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIG9wdGlvbnM9e30pLT5cblx0XHRAb3B0aW9ucyA9IGV4dGVuZC5jbG9uZS5kZWVwT25seSgnY29sdW1ucycpKERhdGFUYWJsZS5kZWZhdWx0cywgb3B0aW9ucylcblx0XHRAc3RhdGUgPSAnbG9hZGluZyc6ZmFsc2UsICdub1Jlc3VsdHMnOmZhbHNlLCAnZXJyb3InOmZhbHNlXG5cdFx0QElEID0gKytjdXJyZW50SURcblx0XHRAdGFibGVJRCA9IFwiXFwjI3tAb3B0aW9ucy5iYXNlQ2xhc3N9LSN7QElEfVwiXG5cdFx0QHZpc2libGVSb3dzID0gW11cblx0XHRAYXZhaWxhYmxlUm93cyA9IFtdXG5cdFx0QGFsbFJvd3MgPSBbXVxuXHRcdEBsYXJnZXN0QnJlYWtkb3duVG90YWwgPSAwXG5cdFx0QHNlYXJjaENyaXRlcmlhID0gJydcblx0XHRAc2VhcmNoUGFyYW0gPSAnJ1xuXHRcdEBzb3J0QnkgPSBpZiBAb3B0aW9ucy5zb3J0QnkgdGhlbiBAb3B0aW9ucy5zb3J0QnkgZWxzZSAnJ1xuXHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblxuXHRcdCMgPT09PSBNYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0QGVscyA9IHt9XG5cdFx0QGVscy50YWJsZU91dGVyd3JhcCA9ICQobWFya3VwLnRhYmxlT3V0ZXJ3cmFwIGV4dGVuZCh7QElEfSwgQG9wdGlvbnMpKVxuXHRcdEBlbHMudGFibGUgPSAkKG1hcmt1cC50YWJsZShAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy50YWJsZUhlYWRpbmcgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkuZmlyc3QoKS5jaGlsZHJlbigpXG5cdFx0QGVscy50YWJsZUJvZHkgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkubGFzdCgpXG5cdFx0QGVscy5ub1Jlc3VsdHNNZXNzYWdlID0gJChtYXJrdXAubm9SZXN1bHRzKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLmxvYWRpbmdNZXNzYWdlID0gJChtYXJrdXAubG9hZGluZyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5lcnJvck1lc3NhZ2UgPSAkKG1hcmt1cC5lcnJvcihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdlU3RhdHVzID0gJChtYXJrdXAucGFnZVN0YXR1cyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdpbmF0aW9uID0gJChtYXJrdXAucGFnaW5hdGlvbihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdpbmF0aW9uSXRlbXMgPSBAZWxzLnBhZ2luYXRpb24uY2hpbGRyZW4oJy5fcGFnaW5hdGlvbkl0ZW1zJylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYSA9IEBlbHMucGFnaW5hdGlvbi5jaGlsZHJlbignLl9leHRyYUluZGljYXRvcicpXG5cdFx0QGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QgPSBAZWxzLnBhZ2luYXRpb25FeHRyYS5jaGlsZHJlbignc2VsZWN0Jylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQgPSBAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdC5wcmV2KClcblx0XHRAZWxzLnNlYXJjaEZpZWxkID0gJChtYXJrdXAuc2VhcmNoRmllbGQoQG9wdGlvbnMpKS5pbnNlcnRCZWZvcmUoQGVscy50YWJsZSlcblx0XHRAZWxzLnNlYXJjaFBhcmFtID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignc2VsZWN0Jylcblx0XHRAZWxzLnNlYXJjaENyaXRlcmlhID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignaW5wdXQnKVxuXHRcdEBlbHMuZ2xvYmFsU3R5bGVzID0gJCgnPHN0eWxlIC8+JykucHJlcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cblx0XHRAZWxzLnRhYmxlSGVhZGluZy5hcHBlbmQoQGdlbmVyYXRlSGVhZGluZ0NvbHVtbnMoKSlcblxuXHRcdEBlbHMudGFibGVPdXRlcndyYXAuYXBwZW5kVG8gQGNvbnRhaW5lclxuXHRcdEBlbHMudGFibGUuZGF0YSAnRGF0YVRhYmxlJywgQFxuXHRcdEBlbHMudGFibGVbMF0uc3R5bGUubWluV2lkdGggPSBcIiN7QG9wdGlvbnMubWluV2lkdGh9cHhcIiBpZiBAb3B0aW9ucy5taW5XaWR0aFxuXG5cblx0XHQjID09PT0gRXZlbnRzICYgQmluZGluZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0UHJvbWlzZS5iaW5kKEApXG5cdFx0XHQudGhlbihAYXR0YWNoRXZlbnRzKVxuXHRcdFx0LnRoZW4oQGF0dGFjaEJpbmRpbmdzKVxuXHRcdFx0LnRoZW4gKCktPiBpZiBAb3B0aW9ucy5sb2FkT25Jbml0IHRoZW4gQGxvYWREYXRhKClcblxuXHRcdHJldHVybiBAXG5cblxuXG5EYXRhVGFibGU6OmZldGNoRGF0YSA9ICgpLT5cblx0QHN0YXRlLmxvYWRpbmcgPSB0cnVlXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cdFx0LnRoZW4gKCk9PiBAb3B0aW9ucy5kYXRhLmNhbGwoQClcblx0XHQudGhlbiAoZGF0YSk9PlxuXHRcdFx0QHN0YXRlLmxvYWRpbmcgPSBAc3RhdGUuZXJyb3IgPSBmYWxzZVxuXHRcdFx0cmV0dXJuIGRhdGFcblx0XHQuY2F0Y2ggKGVycik9PlxuXHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cbkRhdGFUYWJsZTo6c2V0RGF0YSA9IChkYXRhKS0+XG5cdEBhbGxSb3dzID0gZGF0YSBpZiBBcnJheS5pc0FycmF5KGRhdGEpXG5cbkRhdGFUYWJsZTo6YXBwZW5kRGF0YSA9IChkYXRhKS0+XG5cdEBhbGxSb3dzLnB1c2goZGF0YS4uLilcblxuRGF0YVRhYmxlOjpsb2FkRGF0YSA9ICgpLT5cblx0QHVucHJvY2Vzc1Jvdyhyb3cpIGZvciByb3cgaW4gQGFsbFJvd3MgaWYgQGFsbFJvd3MubGVuZ3RoXG5cdEBmZXRjaERhdGEoKS50aGVuIChkYXRhKT0+IEBzZXREYXRhKGRhdGEpXG5cbkRhdGFUYWJsZTo6cmVmcmVzaCA9ICgpLT5cblx0QGF2YWlsYWJsZVJvd3MgPSBAYXZhaWxhYmxlUm93c1xuXHRAY3VycmVudFBhZ2UgPSBAY3VycmVudFBhZ2VcblxuRGF0YVRhYmxlOjptYXJrdXBBcmdzID0gKGFyZ3NPYmplY3Q9e30pLT5cblx0YXJnc09iamVjdC5iYXNlQ2xhc3MgPSBAb3B0aW9ucy5iYXNlQ2xhc3Ncblx0cmV0dXJuIGFyZ3NPYmplY3RcblxuXG5cblxuaW1wb3J0ICcuL3BhcnRzL21ldGhvZHMnXG5pbXBvcnQgJy4vcGFydHMvYXR0YWNoRXZlbnRzJ1xuaW1wb3J0ICcuL3BhcnRzL2F0dGFjaEJpbmRpbmdzJ1xuaW1wb3J0ICcuL3BhcnRzL3VzZXJBY3Rpb25NZXRob2RzJ1xuXG5jdXJyZW50SUQgPSAwXG5EYXRhVGFibGUudmVyc2lvbiA9IGltcG9ydCAnLi4vLi4vcGFja2FnZS5qc29uICQgdmVyc2lvbidcbkRhdGFUYWJsZS5oZWxwZXJzID0gaGVscGVyc1xuRGF0YVRhYmxlLm1hcmt1cCA9IG1hcmt1cFxuRGF0YVRhYmxlLmRlZmF1bHRzID0gZGVmYXVsdHNcbm1vZHVsZS5leHBvcnRzID0gRGF0YVRhYmxlXG5cblxuXG5cbiIsIm1hcmt1cCA9XG5cdHRhYmxlT3V0ZXJ3cmFwOiAoe0lELCBiYXNlQ2xhc3MsIG1pbldpZHRoLCBoYXNNb2JpbGUsIGNlbGxzSGF2ZVBhZGRpbmd9KS0+IFwiXG5cdFx0PGRpdiBpZD0nI3tiYXNlQ2xhc3N9LSN7SUR9JyBjbGFzcz0nI3tiYXNlQ2xhc3N9LW91dGVyd3JhcCB7e2xvYWRpbmd9fSB7e25vUmVzdWx0c319IHt7aGFzRXJyb3J9fVxuXHRcdFx0I3tpZiBtaW5XaWR0aCB0aGVuICdfaGFzTWluV2lkdGgnIGVsc2UgJyd9XG5cdFx0XHQje2lmIGhhc01vYmlsZSB0aGVuICd7e21vYmlsZVZlcnNpb259fScgZWxzZSAnJ31cblx0XHRcdCN7aWYgY2VsbHNIYXZlUGFkZGluZyB0aGVuICdfY2VsbHNIYXZlUGFkZGluZycgZWxzZSAnJ31cblx0XHQnPjwvZGl2PlxuXHRcIlxuXG5cdHRhYmxlOiAoe2Jhc2VDbGFzcywgYWxpZ25tZW50fSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfSBhbGlnbm1lbnQtLS0je2FsaWdubWVudH0gc29ydERpcmVjdGlvbi0tLXt7c29ydERpcmVjdGlvbn19Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmctcm93Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHknPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0bG9hZGluZzogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmcge3tpc1Zpc2libGV9fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pbm5lcndyYXAnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pY29uJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctdGV4dCc+TG9hZGluZzwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRub1Jlc3VsdHM6ICh7YmFzZUNsYXNzLCBpdGVtU2luZ2xlTGFiZWw9J0l0ZW0nLCBpdGVtUGx1cmFsTGFiZWw9aXRlbVNpbmdsZUxhYmVsKydzJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzIHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy1pbm5lcndyYXAnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLWljb24nPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtdGV4dC10aXRsZSc+Tm8gI3tpdGVtU2luZ2xlTGFiZWx9cyB0byBEaXNwbGF5PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy10ZXh0LXN1YnRpdGxlJz5UaGVyZSBhcmUgbm8gbWF0Y2hpbmcgI3tpdGVtUGx1cmFsTGFiZWx9IGZvciB0aGUgc2VhcmNoIHF1ZXJ5IHlvdSd2ZSB0eXBlZC48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdGVycm9yOiAoe2Jhc2VDbGFzc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3Ige3tpc1Zpc2libGV9fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItaW5uZXJ3cmFwJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWljb24nPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQtdGl0bGUnPkEgRmF0YWwgRXJyb3IgaGFzIE9jY3VyZWQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC1zdWJ0aXRsZSc+UmVwb3J0IHRoZSBmb2xsb3dpbmcgdG8gdGhlIGFkbWluOjxiciAvPlxcXCJ7e2Vycm9yTWVzc2FnZX19XFxcIjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cGFnZVN0YXR1czogKHtiYXNlQ2xhc3MsIHNob3dQYWdlU3RhdHVzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdlU3RhdHVzICN7aWYgc2hvd1BhZ2VTdGF0dXMgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ30nPlxuXHRcdFx0U2hvd2luZyB7e3Jvd1JhbmdlfX0gb2Yge3t0b3RhbFJvd3N9fVxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cGFnaW5hdGlvbjogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24ge3toYXNFeHRyYX19IHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX2JhY2snPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW1zd3JhcCBfcGFnaW5hdGlvbkl0ZW1zJz48L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX2V4dHJhSW5kaWNhdG9yJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdFx0PHNlbGVjdCBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS1zZWxlY3QnPjwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfbmV4dCc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdHBhZ2luYXRpb25JdGVtOiAoe2Jhc2VDbGFzcywgdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblxuXHRoZWFkaW5nQ2VsbDogKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgc2x1ZywgaWNvbj0nJywgbGFiZWwsIHN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsICN7ZXh0cmFDbGFzc2VzfSBfXyN7c2x1Z30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1pY29uPScje2ljb259JyAje3N0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsLXRleHQnPiN7bGFiZWx9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRyb3c6ICh7YmFzZUNsYXNzLCByb3dJRCwgY2VsbHMsIGRyaWxsZG93bj0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3cgX3RhYmxlUm93IHt7ZHJpbGxkb3duU3RhdGV9fScgZGF0YS1yb3ctaWQ9JyN7cm93SUR9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24gX2V4cGFuZERyaWxsZG93bic+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24taWNvbic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0I3tjZWxsc31cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWRyaWxsZG93biBfdGFibGVSb3dEcmlsbGRvd24nPlxuXHRcdFx0XHQje2RyaWxsZG93bn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXHRyb3dDZWxsOiAoe2Jhc2VDbGFzcywgZXh0cmFDbGFzc2VzPScnLCBsYWJlbCwgY29sdW1uLCBzbHVnLCB2YWx1ZSwgc3R5bGU9Jyd9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWNlbGwgX18je3NsdWd9ICN7ZXh0cmFDbGFzc2VzfScgZGF0YS1zbHVnPScje3NsdWd9JyBkYXRhLWNvbHVtbj0nI3tjb2x1bW59JyAje3N0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsLWlubmVyd3JhcCcgdGl0bGU9JyN7bGFiZWx9Jz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblxuXG5cblx0c2VhcmNoRmllbGQ6ICh7YmFzZUNsYXNzLCBzZWFyY2h9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaCAje2lmIHNlYXJjaD8ubGVuZ3RoIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0Jz48L3NlbGVjdD5cblx0XHRcdDxpbnB1dCBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaC1pbnB1dCcgLz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0VHJpZ2dlcic+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRpcERldGFpbHM6ICh7YmFzZUNsYXNzLCBpcEFkZHJlc3MsIGV4dHJhPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMgX2lwRGV0YWlscycgZGF0YS1pcD0nI3tpcEFkZHJlc3N9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtdHJpZ2dlciBfaXBEZXRhaWxzLXRyaWdnZXInPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50Jz5Mb2FkaW5nIElQIERldGFpbHM8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQje2V4dHJhfVxuXHRcIlxuXG5cdGlwRGV0YWlsc0l0ZW06ICh7YmFzZUNsYXNzLCBsYWJlbCwgdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50LWl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50LWl0ZW0tbGFiZWwnPiN7bGFiZWx9OiA8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLXZhbHVlJz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0ZmllbGRzOiAoe2Jhc2VDbGFzcywgZmllbGRzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwJz4je2ZpZWxkc308L2Rpdj5cblx0XCJcblxuXHRmaWVsZHNJdGVtOiAoe2Jhc2VDbGFzcywgbGFiZWwsdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cC1pdGVtLWxhYmVsJz4je2xhYmVsfTogPC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cC1pdGVtLXZhbHVlJz4je2VzY0hUTUwgdmFsdWV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRidXR0b246ICh7YmFzZUNsYXNzLCBhY3Rpb24sIGljb249JycsIGlzTXVsdGl9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbiBfYWN0aW9uQnV0dG9uICN7aWYgaXNNdWx0aSB0aGVuICdfaXNNdWx0aScgZWxzZSAnJ30nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbi1pY29uJz4je2ljb259PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRhY3Rpb25zOiAoe2Jhc2VDbGFzcywgYWN0aW9uc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucyc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cCc+I3thY3Rpb25zfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cdGFjdGlvbnNPdmVybGF5OiAoKS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tEYXRhVGFibGUuZGVmYXVsdHMuYmFzZUNsYXNzfS1hY3Rpb25zLW92ZXJsYXknPjwvZGl2PlxuXHRcIlxuXG5cdGFjdGlvbnNJdGVtOiAoe2Jhc2VDbGFzcywgYWN0aW9uLCBpY29uLCBsYWJlbCwgY3VzdG9tSWNvblN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0gX2FjdGlvbkJ1dHRvbiBfc3ViQWN0aW9uQnV0dG9uJyBkYXRhLWFjdGlvbj0nI3thY3Rpb259JyBzdHlsZT0nI3tjdXN0b21JY29uU3R5bGV9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAtaXRlbS10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG4iLCJkZWZhdWx0cyA9IFxuXHQncGVyUGFnZSc6IDIwXG5cdCdwYWdlQ291bnRNYXgnOiAxMFxuXHQnbWluV2lkdGgnOiAwXG5cdCdtb2JpbGVXaWR0aCc6IDczNlxuXHQnY2VsbHNIYXZlUGFkZGluZyc6IGZhbHNlXG5cdCdoYXNNb2JpbGUnOiB0cnVlXG5cdCdsb2FkT25Jbml0JzogdHJ1ZVxuXHQnY29sdW1ucyc6IFtdXG5cdCdzZWFyY2gnOiBbXVxuXHQncGVyY2VudGFnZSc6IHt9XG5cdCdiYXNlQ2xhc3MnOiAnRGF0YVRhYmxlJ1xuXHQnc2hvd1BhZ2VTdGF0dXMnOiB0cnVlXG5cdCdzb3J0QnknOiAnJ1xuXHQnYWxpZ25tZW50JzogJ2xlZnQnXG5cdCdhY3Rpb25zJzogZmFsc2Vcblx0J2lwRGF0YUZldGNoZXInOiAoaXBBZGRyZXNzKS0+IG5ldyBQcm9taXNlIChyZXNvbHZlKS0+ICQuZ2V0IFwiaHR0cDovL2lwaW5mby5pby8je2lwQWRkcmVzc31cIiwgcmVzb2x2ZSwgJ0pTT04nXG4iLCJoZWxwZXJzID0ge31cblxuXG5oZWxwZXJzLmNvbXBhcmVWYWx1ZXMgPSAodmFsdWVBLCB2YWx1ZUIpLT4gc3dpdGNoXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyB0eXBlb2YgdmFsdWVCXG5cdFx0dmFsdWVBIGlzIHZhbHVlQlxuXHRcblx0d2hlbiB0eXBlb2YgdmFsdWVBIGlzICdzdHJpbmcnXG5cdFx0dmFsdWVBIGlzICcnK3ZhbHVlQlxuXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnbnVtYmVyJ1xuXHRcdHZhbHVlQSBpcyBwYXJzZUZsb2F0KHZhbHVlQilcblxuXG5oZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCA9IChhY3Rpb25zUG9wdXAkKS0+XG5cdGlzT3BlbiA9IGFjdGlvbnNQb3B1cCQuZGF0YSAnaXNPcGVuJ1xuXG5cdGlmIGlzT3BlblxuXHRcdGFjdGlvbnNQb3B1cCQuZGF0YSgnb3ZlcmxheScpLnJlbW92ZSgpXG5cdFx0YWN0aW9uc1BvcHVwJC5yZW1vdmVDbGFzcyAnaXNfdmlzaWJsZSdcblx0ZWxzZVxuXHRcdGFjdGlvbnNQb3B1cCQuZGF0YSAnb3ZlcmxheScsIG92ZXJsYXkkID0gJChtYXJrdXAuYWN0aW9uc092ZXJsYXkoKSlcblx0XHRhY3Rpb25zUG9wdXAkLmFkZENsYXNzICdpc192aXNpYmxlJ1xuXHRcdG92ZXJsYXkkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpLm9uZSAnY2xpY2snLCAoKS0+IGhlbHBlcnMudG9nZ2xlQWN0aW9uc1BvcHVwKGFjdGlvbnNQb3B1cCQpXG5cblx0YWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nLCAhaXNPcGVuXG5cblxuaGVscGVycy5nZXRCcmVha2Rvd25Ub3RhbCA9IChicmVha2Rvd24sIGJyZWFrZG93bktleXMpLT4gc3dpdGNoXG5cdHdoZW4gYnJlYWtkb3duS2V5cy5sZW5ndGggaXMgMCB0aGVuIDBcblx0ZWxzZVxuXHRcdGJyZWFrZG93bktleXNcblx0XHRcdC5tYXAgKGJyZWFrZG93bkl0ZW0pLT4gYnJlYWtkb3duW2JyZWFrZG93bkl0ZW1dXG5cdFx0XHQucmVkdWNlIChhLGIpLT4gYStiXG5cblxuXG5oZWxwZXJzLm5vcm1hbGl6ZUNvbHVtbnMgPSAoY29sdW1ucyktPlxuXHRpZiBub3QgQXJyYXkuaXNBcnJheShjb2x1bW5zKVxuXHRcdG91dHB1dCA9IGNvbHVtbnNcblx0ZWxzZVxuXHRcdG91dHB1dCA9IHt9XG5cdFx0aWYgdHlwZW9mIGNvbHVtbnNbMF0gaXMgJ3N0cmluZydcblx0XHRcdG91dHB1dFtsYWJlbF0gPSB7bGFiZWx9IGZvciBsYWJlbCBpbiBjb2x1bW5zXG5cdFx0XG5cdFx0ZWxzZSBpZiBjb2x1bW5zWzBdPy5sYWJlbFxuXHRcdFx0b3V0cHV0W2NvbHVtbi5sYWJlbF0gPSBjb2x1bW4gZm9yIGNvbHVtbiBpbiBjb2x1bW5zXG5cblxuXHRmb3IgbGFiZWwsY29sdW1uIG9mIG91dHB1dFxuXHRcdGNvbHVtbi5sYWJlbCA/PSBsYWJlbFxuXHRcdGNvbHVtbi5zbHVnID89IGNvbHVtbi5sYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UgL1xcVy9nLCAnXydcblx0XHRjb2x1bW4udHlwZSA/PSAndGV4dCdcblxuXHRyZXR1cm4gb3V0cHV0IFxuXG5cbmhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGggPSAocm93LCBsYXJnZXN0KS0+XG5cdChyb3cuYnJlYWtkb3duQmFyVG90YWwgLyBsYXJnZXN0KSAqICgxMDAgLSAxOClcblxuXG5oZWxwZXJzLmdlbkhlYWRlckNlbGxTdHlsZSA9IChjb2x1bW4pLT5cblx0c3R5bGVTdHJpbmcgPSAnJ1xuXG5cdGlmIGNvbHVtbi53aWR0aFxuXHRcdHN0eWxlU3RyaW5nICs9IFwibWF4LXdpZHRoOiAje2NvbHVtbi53aWR0aH07XCJcblx0XG5cdGlmIGNvbHVtbi5ncm93ID49IDBcblx0XHRzdHlsZVN0cmluZyArPSBcImZsZXgtZ3JvdzogI3tjb2x1bW4uZ3Jvd307XCJcblxuXHRyZXR1cm4gaWYgc3R5bGVTdHJpbmcgdGhlbiBcInN0eWxlPScje3N0eWxlU3RyaW5nfSdcIiBlbHNlICcnXG5cblxuXG5oZWxwZXJzLmdlbkNlbGxTdHlsZSA9IChjb2x1bW4pLT5cblx0c3R5bGVTdHJpbmcgPSAnJ1xuXG5cdGlmIGNvbHVtbi53aWR0aFxuXHRcdHN0eWxlU3RyaW5nICs9IFwibWF4LXdpZHRoOiAje2NvbHVtbi53aWR0aH07XCJcblxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjb2xvciA9IEBjb2xvck1hcHBpbmcoY29sdW1uLmNvbG9yLCBjb2x1bW4uY29sb3JUeXBlKVxuXHRcdHN0eWxlU3RyaW5nICs9IFwiY29sb3I6ICN7Y29sb3J9O1wiXG5cblx0aWYgY29sdW1uLmN1c3RvbVN0eWxlXG5cdFx0c3R5bGVTdHJpbmcgKz0gY29sdW1uLmN1c3RvbVN0eWxlXG5cdFxuXHRpZiBjb2x1bW4uZ3JvdyA+PSAwXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJmbGV4LWdyb3c6ICN7Y29sdW1uLmdyb3d9O1wiXG5cblx0cmV0dXJuIGlmIHN0eWxlU3RyaW5nIHRoZW4gXCJzdHlsZT0nI3tzdHlsZVN0cmluZ30nXCIgZWxzZSAnJ1xuXG5cblxuXG5oZWxwZXJzLmdlbkNlbGxDbGFzc25hbWUgPSAoY29sdW1uKS0+XG5cdGNsYXNzU3RyaW5nID0gJydcblx0XG5cdGlmIGNvbHVtbi5zb3J0YWJsZVxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzU29ydGFibGUge3tjdXJyZW50U29ydH19J1xuXHRcblx0aWYgY29sdW1uLm5vTGFiZWxcblx0XHRjbGFzc1N0cmluZyArPSAnIF9ub0xhYmVsJ1xuXHRcblx0aWYgY29sdW1uLmlzTGlua1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzTGluaydcblx0XG5cdGlmIGNvbHVtbi5ub0VsbGlwc2lzXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9FbGxpcHNpcydcblx0XG5cdGlmIGNvbHVtbi5zaG93T3ZlcmZsb3dcblx0XHRjbGFzc1N0cmluZyArPSAnIF9zaG93T3ZlcmZsb3cnXG5cdFxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjbGFzc1N0cmluZyArPSAnIF9oYXNDb2xvcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdidXR0b24nIG9yIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnV0dG9uJ1xuXHRcdGNvbHVtbi5hbHdheXNDZW50ZXIgPSB0cnVlXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnJlYWtkb3duQmFyJ1xuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0lwRGV0YWlscydcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNGaWVsZHMnXG5cdFxuXHRpZiBjb2x1bW4uYWx3YXlzQ2VudGVyXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfYWx3YXlzQ2VudGVyJ1xuXG5cdHJldHVybiBjbGFzc1N0cmluZ1xuXG5cblxuXG5cblxuXG5oZWxwZXJzLmNvbG9yTWFwcGluZyA9ICh2YWx1ZSwgY29sb3JUeXBlPSduYW1lJyktPiBzd2l0Y2ggY29sb3JUeXBlXG5cdHdoZW4gJ2Jyb3dzZXInIHRoZW4gc3dpdGNoXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiBAY29sb3JNYXBwaW5nKCdvcmFuZ2UnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiBAY29sb3JNYXBwaW5nKCdncmVlbicpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnU2FmYXJpJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gQGNvbG9yTWFwcGluZygnYmx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnSUUnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdFZGdlJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Ymx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnT3BlcmEnIHRoZW4gQGNvbG9yTWFwcGluZygncmVkJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Z3JlZW4nKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cdFxuXHRcblx0d2hlbiAncGxhdGZvcm0nIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnTWFjIE9TIFgnIHRoZW4gQGNvbG9yTWFwcGluZygnYmxhY2snKVxuXHRcdHdoZW4gJ1dpbmRvd3MnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuICdXaW5kb3dzIFBob25lJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3B1cnBsZScpXG5cdFx0d2hlbiAnTGludXgnIHRoZW4gQGNvbG9yTWFwcGluZygnZGFya3llbGxvdycpXG5cdFx0d2hlbiAnaU9TJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsYWNrJylcblx0XHR3aGVuICdBbmRyb2lkJyB0aGVuIEBjb2xvck1hcHBpbmcoXCJsaWdodGdyZWVuXCIpXG5cdFx0ZWxzZSAndW5rbm93bidcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbicgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdFeGNlbGxlbnQnIHRoZW4gQGNvbG9yTWFwcGluZygnZ3JlZW4nKVxuXHRcdHdoZW4gJ05vcm1hbCcgdGhlbiBAY29sb3JNYXBwaW5nKCd5ZWxsb3cnKVxuXHRcdHdoZW4gJ1Bvb3InIHRoZW4gQGNvbG9yTWFwcGluZygncmVkJylcblx0XHRlbHNlICd1bmtub3duJ1xuXG5cdFxuXHR3aGVuICduYW1lJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ29yYW5nZScgdGhlbiAnI2VlNmYwZSdcblx0XHR3aGVuICdncmVlbicgdGhlbiAnIzAwYWQwOSdcblx0XHR3aGVuICdibHVlJyB0aGVuICcjNDc4OGYzJ1xuXHRcdHdoZW4gJ3llbGxvdycgdGhlbiAnI2VhYjcxZSdcblx0XHR3aGVuICdyZWQnIHRoZW4gJyNjYzQ4MjAnXG5cdFx0d2hlbiAnYmxhY2snIHRoZW4gJyMxODE4MTgnXG5cdFx0d2hlbiAncHVycGxlJyB0aGVuICcjYTAyMGJhJ1xuXHRcdHdoZW4gJ2xpZ2h0Ymx1ZScgdGhlbiAnIzBjYjNlZSdcblx0XHR3aGVuICdsaWdodGdyZWVuJyB0aGVuICcjNzhjMjU3J1xuXHRcdHdoZW4gJ2Rhcmt5ZWxsb3cnIHRoZW4gJyNlOGFjMDEnXG5cblx0ZWxzZSB2YWx1ZVxuXG5cblxuXG5cblxuaGVscGVycy5pY29uTWFwcGluZyA9ICh2YWx1ZSwgaWNvblR5cGUpLT4gc3dpdGNoIGljb25UeXBlXG5cdHdoZW4gJ2Jyb3dzZXInXG5cdFx0c3dpdGNoXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdGaXJlZm94JyB0aGVuICcjJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQ2hyb21lJyB0aGVuICclJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnU2FmYXJpJyB0aGVuICckJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnTW9iaWxlIFNhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0lFJyB0aGVuICcmJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRWRnZScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ09wZXJhJyB0aGVuICdcIidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0FuZHJvaWQnIHRoZW4gJyYjMDM5Oydcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdkZXZpY2UnXG5cdFx0c3dpdGNoIHZhbHVlXG5cdFx0XHR3aGVuICdEZXNrdG9wJyB0aGVuICchJ1xuXHRcdFx0d2hlbiAnVGFibGV0JyB0aGVuICc3J1xuXHRcdFx0d2hlbiAnTW9iaWxlJyB0aGVuICc2J1xuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3BsYXRmb3JtJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnTWFjIE9TIFgnIHRoZW4gJyonXG5cdFx0XHR3aGVuICdXaW5kb3dzJyB0aGVuICcpJ1xuXHRcdFx0d2hlbiAnV2luZG93cyBQaG9uZScgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ0xpbnV4JyB0aGVuICcrJ1xuXHRcdFx0d2hlbiAnaU9TJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnQW5kcm9pZCcgdGhlbiBcIiYjMDM5O1wiXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnc2F0aXNmYWN0aW9uJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRXhjZWxsZW50JyB0aGVuICdbJ1xuXHRcdFx0d2hlbiAnTm9ybWFsJyB0aGVuICdAJ1xuXHRcdFx0d2hlbiAnUG9vcicgdGhlbiAnPydcblx0XHRcdGVsc2UgJzQnXG5cblx0ZWxzZSAnNCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICdnZW5lcmFsLmNvZmZlZSdcbmltcG9ydCAnY29sdW1uLmNvZmZlZSdcbmltcG9ydCAncm93LmNvZmZlZSdcbmltcG9ydCAnc3BlY2lhbENlbGxzLmNvZmZlZSciLCJEYXRhVGFibGU6OmNhbGNQYWdlQ291bnQgPSAocm93cyktPlxuXHRAcGFnZUNvdW50UmVhbCA9IE1hdGguY2VpbCByb3dzLmxlbmd0aC9Ab3B0aW9ucy5wZXJQYWdlXG5cdEBwYWdlQ291bnQgPSBpZiBAcGFnZUNvdW50UmVhbCA+IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuIEBvcHRpb25zLnBhZ2VDb3VudE1heCBlbHNlIEBwYWdlQ291bnRSZWFsXG5cblxuXG5cblxuRGF0YVRhYmxlOjpjYWxjUGVyY2VudGFnZVN0cmluZyA9IChjb2x1bW5WYWx1ZSwgY29sdW1uTmFtZSwgcm93KS0+XG5cdGZvcm11bGEgPSBAb3B0aW9ucy5wZXJjZW50YWdlW2NvbHVtbk5hbWVdXG5cdGNvbHVtbkEgPSBmb3JtdWxhWzBdXG5cdGNvbHVtbkIgPSBmb3JtdWxhWzJdXG5cdG1hdGhPcGVyYXRvciA9IGZvcm11bGFbMV1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSBzd2l0Y2ggbWF0aE9wZXJhdG9yXG5cdFx0d2hlbiAnKicgdGhlbiByb3dbY29sdW1uQV0gKiByb3dbY29sdW1uQl1cblx0XHR3aGVuICcvJyB0aGVuIHJvd1tjb2x1bW5BXSAvIHJvd1tjb2x1bW5CXVxuXHRcdHdoZW4gJysnIHRoZW4gcm93W2NvbHVtbkFdICsgcm93W2NvbHVtbkJdXG5cdFx0d2hlbiAnLScgdGhlbiByb3dbY29sdW1uQV0gLSByb3dbY29sdW1uQl1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSAwIGlmIHBlcmNlbnRhZ2VWYWx1ZSBpcyBJbmZpbml0eVxuXHRwZXJjZW50ID0gY29udmVydFRvUGVyY2VudChwZXJjZW50YWdlVmFsdWUpXG5cdHJldHVybiBcIiN7Y29sdW1uVmFsdWV9ICgje3BlcmNlbnR9KVwiXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OnNvcnRSb3dzID0gKHJvd3MsIHRhcmdldENvbHVtbj1Ab3B0aW9ucy5zb3J0QnkpLT4gc3dpdGNoXG5cdHdoZW4gdGFyZ2V0Q29sdW1uIGlzICcrJyB0aGVuIHJvd3Ncblx0d2hlbiB0YXJnZXRDb2x1bW4gaXMgJy0nIHRoZW4gcm93cz8uc2xpY2UoKS5yZXZlcnNlKClcblx0d2hlbiBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl1cblx0XHRjdXN0b21Tb3J0ID0gQG9wdGlvbnMuY29sdW1uc1t0YXJnZXRDb2x1bW5dLnNvcnRGblxuXHRcdHJhd1ZhbHVlID0gQG9wdGlvbnMuY29sdW1uc1t0YXJnZXRDb2x1bW5dLnJhd1ZhbHVlRm9ybWF0dGVyXG5cdFx0XG5cdFx0cm93cy5zbGljZSgpLnNvcnQgY3VzdG9tU29ydCBvciAoYSxiKT0+XG5cdFx0XHRhVmFsdWUgPSBpZiByYXdWYWx1ZSB0aGVuIHJhd1ZhbHVlKGFbdGFyZ2V0Q29sdW1uXSkgZWxzZSBhW3RhcmdldENvbHVtbl1cblx0XHRcdGJWYWx1ZSA9IGlmIHJhd1ZhbHVlIHRoZW4gcmF3VmFsdWUoYlt0YXJnZXRDb2x1bW5dKSBlbHNlIGJbdGFyZ2V0Q29sdW1uXVxuXHRcdFx0c3dpdGNoXG5cdFx0XHRcdHdoZW4gYVZhbHVlID4gYlZhbHVlIHRoZW4gQHNvcnREaXJlY3Rpb25cblx0XHRcdFx0d2hlbiBhVmFsdWUgPCBiVmFsdWUgdGhlbiBAc29ydERpcmVjdGlvbiAqIC0xXG5cdFx0XHRcdGVsc2UgMFxuXG5cdGVsc2Ugcm93c1xuXHRcblxuXG5EYXRhVGFibGU6OnNldFZpc2libGVQYWdlID0gKHRhcmdldFBhZ2UpLT5cblx0dGFyZ2V0UGFnZS0tICMgRGVjIGJ5IDEgZm9yIGFycmF5LWluZGV4IHN0eWxlXG5cdHNsaWNlID1cblx0XHQnc3RhcnQnOiB0YXJnZXRQYWdlKkBvcHRpb25zLnBlclBhZ2Vcblx0XHQnZW5kJzogKHRhcmdldFBhZ2UqQG9wdGlvbnMucGVyUGFnZSkrQG9wdGlvbnMucGVyUGFnZVxuXHRcblx0cm93c1RvUmV2ZWFsID0gQGF2YWlsYWJsZVJvd3Nbc2xpY2Uuc3RhcnQgLi4uIHNsaWNlLmVuZF1cblx0cm93c1RvSGlkZSA9IEB2aXNpYmxlUm93cy5zbGljZSgpXG5cblx0cm93LnZpc2libGUgPSBmYWxzZSBmb3Igcm93IGluIHJvd3NUb0hpZGVcblx0QHZpc2libGVSb3dzLmxlbmd0aCA9IDBcblx0QHZpc2libGVSb3dzLnB1c2guYXBwbHkgQHZpc2libGVSb3dzLCByb3dzVG9SZXZlYWxcblxuXG5cblxuRGF0YVRhYmxlOjpzZXRQYWdlSW5kaWNhdG9yID0gKHRhcmdldFBhZ2UpLT5cblx0dGFyZ2V0UGFnZSA9IDEgaWYgdGFyZ2V0UGFnZSBpcyAnLi4uJ1xuXHR0YXJnZXRQYWdlID0gaWYgdGFyZ2V0UGFnZSA+IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuIEBvcHRpb25zLnBhZ2VDb3VudE1heCBlbHNlIHRhcmdldFBhZ2UtMSAjIDAtYmFzZWQgaW5kZXggc28gd2Ugc3VidHJhY3QgMVxuXHRwYWdlSXRlbXMkID0gQGVscy5wYWdpbmF0aW9uLmZpbmQoJy5fcGFnaW5hdGlvbkl0ZW0nKS5zbGljZSgxLC0xKVxuXHRtYXRjaGVkUGFnZUVsJCA9IHBhZ2VJdGVtcyQuZXEgdGFyZ2V0UGFnZVxuXHRcblx0bWF0Y2hlZFBhZ2VFbCQuYWRkQ2xhc3MgJ2N1cnJlbnQnXG5cdHBhZ2VJdGVtcyQubm90KG1hdGNoZWRQYWdlRWwkKS5yZW1vdmVDbGFzcyAnY3VycmVudCdcdFxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIkRhdGFUYWJsZTo6Z2VuZXJhdGVIZWFkaW5nQ29sdW1ucyA9ICgpLT5cblx0QG9wdGlvbnMuY29sdW1ucyA9IGhlbHBlcnMubm9ybWFsaXplQ29sdW1ucyhAb3B0aW9ucy5jb2x1bW5zKVxuXHRAaGFzQnJlYWtkb3duQmFyID0gdHJ1ZSBpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJyBmb3IgbGFiZWwsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnNcblxuXHRPYmplY3Qua2V5cyhAb3B0aW9ucy5jb2x1bW5zKVxuXHRcdC5tYXAgKGxhYmVsKT0+XG5cdFx0XHRjb2x1bW4gPSBAb3B0aW9ucy5jb2x1bW5zW2xhYmVsXVxuXHRcdFx0QGVscy5nbG9iYWxTdHlsZXNbMF0uaW5uZXJIVE1MICs9IFwie3sje2NvbHVtbi5zbHVnfX19XFxuXCJcblxuXHRcdFx0bWFya3VwLmhlYWRpbmdDZWxsIEBtYXJrdXBBcmdzXG5cdFx0XHRcdCdzbHVnJzogY29sdW1uLnNsdWdcblx0XHRcdFx0J2ljb24nOiBjb2x1bW4uaWNvblxuXHRcdFx0XHQnbGFiZWwnOiBjb2x1bW4ubGFiZWxcblx0XHRcdFx0J3N0eWxlJzogaGVscGVycy5nZW5IZWFkZXJDZWxsU3R5bGUoY29sdW1uKVxuXHRcdFx0XHQnZXh0cmFDbGFzc2VzJzogaGVscGVycy5nZW5DZWxsQ2xhc3NuYW1lKGNvbHVtbilcblx0XHQuam9pbignJylcblxuXG5cblxuXG5EYXRhVGFibGU6OnVwZGF0ZUNvbHVtbnMgPSAodXBkYXRlZENvbHVtbnMpLT5cblx0dXBkYXRlZENvbHVtbnMgPSBoZWxwZXJzLm5vcm1hbGl6ZUNvbHVtbnModXBkYXRlZENvbHVtbnMpXG5cdGV4dGVuZC5kZWVwKEBvcHRpb25zLmNvbHVtbnMsIHVwZGF0ZWRDb2x1bW5zKVxuXHRAY3VycmVudFBhZ2UgPSBAY3VycmVudFBhZ2VcblxuXG5cblxuXG5cblxuXG5cbiIsIkRhdGFUYWJsZTo6cHJvY2Vzc1JvdyA9IChyb3cpLT4gaWYgcm93LnByb2Nlc3NlZCB0aGVuIHJvdyBlbHNlXG5cdEBnZW5lcmF0ZVJvdyhyb3cpXG5cblx0U2ltcGx5QmluZCgndmlzaWJsZScsIHVwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSkub2Yocm93KVxuXHRcdC50byAoaXNWaXNpYmxlLCBwcmV2VmFsdWUpPT5cblx0XHRcdGlmIG5vdCBpc1Zpc2libGUgXG5cdFx0XHRcdHJvdy5lbC5kZXRhY2goKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyb3cuZWwuYXBwZW5kVG8gQGVscy50YWJsZUJvZHlcblxuXHRcdFx0XHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCBub3Qgcm93LnVwZGF0ZWRCcmVha2Rvd25XaWR0aCBhbmQgaXNWaXNpYmxlIGlzbnQgcHJldlZhbHVlXG5cdFx0XHRcdFx0cm93LmJyZWFrZG93bkJhcldpZHRoID0gaGVscGVycy5nZXRCcmVha2Rvd25CYXJXaWR0aChyb3csIEBsYXJnZXN0QnJlYWtkb3duVG90YWwpXG5cdFx0XHRcdFxuXG5cdGlmIEBoYXNCcmVha2Rvd25CYXIgYW5kIHJvdy5icmVha2Rvd25CYXJFbD8ubGVuZ3RoXG5cdFx0U2ltcGx5QmluZCgnbGFyZ2VzdEJyZWFrZG93blRvdGFsJykub2YoQClcblx0XHRcdC50bygndXBkYXRlZEJyZWFrZG93bldpZHRoJykub2Yocm93KVxuXHRcdFx0XHQudHJhbnNmb3JtICgpLT4gaWYgcm93LnZpc2libGUgdGhlbiB0cnVlIGVsc2UgZmFsc2Vcblx0XHRcdC5hbmQudG8oJ2JyZWFrZG93bkJhcldpZHRoJykub2Yocm93KVxuXHRcdFx0XHQudHJhbnNmb3JtICgpPT4gaGVscGVycy5nZXRCcmVha2Rvd25CYXJXaWR0aChyb3csIEBsYXJnZXN0QnJlYWtkb3duVG90YWwpXG5cblx0XHRcdFx0LmNoYWluVG8oJ3dpZHRoJykub2Yocm93LmJyZWFrZG93bkJhckVsWzBdLnN0eWxlKVxuXHRcdFx0XHRcdC50cmFuc2Zvcm0gKHdpZHRoKS0+IHdpZHRoKyclJ1xuXG5cdFx0XHRcdC5hbmQudG8gKCk9PlxuXHRcdFx0XHRcdGZvciBkcmlsbGRvd25FbCxpbmRleCBpbiByb3cuZHJpbGxkb3duRWxzXG5cdFx0XHRcdFx0XHR3aWR0aCA9IGhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LmRyaWxsZG93bltpbmRleF0sIHJvdy5kcmlsbGRvd24ubGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXHRcdFx0XHRcdFx0JChkcmlsbGRvd25FbCkuY2hpbGRyZW4oJy5pc19icmVha2Rvd25fYmFyJykuY2hpbGRyZW4oKS5jaGlsZHJlbigpWzBdPy5zdHlsZS53aWR0aCA9IHdpZHRoKyclJ1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHQuY29uZGl0aW9uICgpLT4gcm93LmRyaWxsZG93blxuXHRcdFx0XHRcdFxuXHRcdFx0LmNvbmRpdGlvbkFsbCAoKS0+IHJvdy52aXNpYmxlXG5cblx0cm93LnByb2Nlc3NlZCA9IHRydWVcblx0cmV0dXJuIHJvd1xuXG5cblxuXG5cbkRhdGFUYWJsZTo6dW5wcm9jZXNzUm93ID0gKHJvdyktPiBpZiByb3cucHJvY2Vzc2VkXG5cdFNpbXBseUJpbmQudW5CaW5kQWxsKHJvdywgdHJ1ZSlcblx0XG5cdGlmIEBoYXNCcmVha2Rvd25CYXIgYW5kIHJvdy5icmVha2Rvd25CYXJFbFswXVxuXHRcdFNpbXBseUJpbmQudW5CaW5kQWxsKHJvdy5icmVha2Rvd25CYXJFbFswXS5zdHlsZSlcblxuXHRyb3cuZWwucmVtb3ZlKClcblx0ZGVsZXRlIHJvdy5lbFxuXHRkZWxldGUgcm93LmRyaWxsZG93bkVsc1xuXHRkZWxldGUgcm93LnZpc2libGVcblx0ZGVsZXRlIHJvdy5icmVha2Rvd25CYXJFbFxuXHRkZWxldGUgcm93LnByb2Nlc3NlZFxuXG5cblxuRGF0YVRhYmxlOjpyZVJlbmRlclJvdyA9IChyb3cpLT5cblx0QGdlbmVyYXRlUm93KHJvdylcblxuXG5cbkRhdGFUYWJsZTo6Z2VuZXJhdGVSb3cgPSAocm93KS0+XG5cdHByZXZSb3dFbCA9IHJvdy5lbFxuXHRuZXdSb3dFbCA9IHJvdy5lbCA9ICQoQGdlbmVyYXRlUm93TWFya3VwKHJvdykpLmRhdGEoJ3JvdycsIHJvdylcblx0cHJldlJvd0VsLnJlcGxhY2VXaXRoKG5ld1Jvd0VsKSBpZiBwcmV2Um93RWxcblx0XG5cdHJvdy5leHBhbmRCdXR0b24gPSByb3cuZWwuY2hpbGRyZW4oKS5maXJzdCgpIGlmIHJvdy5kcmlsbGRvd25cblx0cm93LmRyaWxsZG93bkVscyA9IHJvdy5lbC5jaGlsZHJlbignLl90YWJsZVJvd0RyaWxsZG93bicpLmNoaWxkcmVuKCkgaWYgcm93LmRyaWxsZG93blxuXHRyb3cuYnJlYWtkb3duQmFyRWwgPSByb3cuZWwuY2hpbGRyZW4oJy5pc0JyZWFrZG93bkJhcicpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKSBpZiBAaGFzQnJlYWtkb3duQmFyXG5cdHJvdy52aXNpYmxlID0gZmFsc2UgdW5sZXNzIHByZXZSb3dFbFxuXHRcblx0aWYgcm93LmRyaWxsZG93blxuXHRcdGlmIEBoYXNCcmVha2Rvd25CYXJcblx0XHRcdHJvdy5kcmlsbGRvd24ubGFyZ2VzdEJyZWFrZG93blRvdGFsID0gTWF0aC5tYXggcm93LmRyaWxsZG93bi5tYXAoKHN1YlJvdyktPiBzdWJSb3cuYnJlYWtkb3duQmFyVG90YWwpLi4uXG5cblx0XHRTaW1wbHlCaW5kKCdkcmlsbGRvd25PcGVuJykub2Yocm93KVxuXHRcdFx0LnRvKCdjbGFzc05hbWUuZHJpbGxkb3duU3RhdGUnKS5vZihyb3cuZWwpXG5cdFx0XHRcdC50cmFuc2Zvcm0gKGRyaWxsZG93bk9wZW4pLT4gaWYgZHJpbGxkb3duT3BlbiB0aGVuICdoYXNEcmlsbGRvd24gZHJpbGxkb3duSXNPcGVuJyBlbHNlICdoYXNEcmlsbGRvd24nXG5cblx0XHRTaW1wbHlCaW5kKCd2aXNpYmxlJykub2Yocm93KVxuXHRcdFx0Lm9uY2UudG8gKCktPlxuXHRcdFx0XHRTaW1wbHlCaW5kICgpLT5cblx0XHRcdFx0XHRpZiBub3Qgcm93LmRyaWxsZG93bk9wZW4gdGhlbiBzZXRUaW1lb3V0ICgpLT5cblx0XHRcdFx0XHRcdHJvd0hlaWdodCA9IHJvdy5lbC5oZWlnaHQoKVxuXHRcdFx0XHRcdFx0YnV0dG9uSGVpZ2h0ID0gcm93LmV4cGFuZEJ1dHRvbi5oZWlnaHQoKVxuXHRcdFx0XHRcdFx0cm93LmV4cGFuZEJ1dHRvblswXS5zdHlsZS50b3AgPSBcIiN7cm93SGVpZ2h0LzIgLSBidXR0b25IZWlnaHQvMn1weFwiXG5cblx0XHRcdFx0LnVwZGF0ZU9uKCdldmVudDpyZXNpemUnLCB0aHJvdHRsZTozMDApLm9mKHdpbmRvdylcblx0XHRcdC5jb25kaXRpb24gKHZpc2libGUpLT4gdmlzaWJsZVxuXG5cdHJldHVybiByb3dcblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlUm93TWFya3VwID0gKHJvdywgcGFyZW50Um93KS0+XG5cdGlzU3ViID0gISFwYXJlbnRSb3dcblx0XG5cdG1hcmt1cC5yb3cgQG1hcmt1cEFyZ3Ncblx0XHQncm93SUQnOiBpZiBpc1N1YiB0aGVuIHBhcmVudFJvd1tAb3B0aW9ucy51bmlxdWVJRF0gZWxzZSByb3dbQG9wdGlvbnMudW5pcXVlSURdXG5cdFx0J2RyaWxsZG93bic6IGlmIGlzU3ViIHRoZW4gJycgZWxzZSBpZiByb3cuZHJpbGxkb3duIHRoZW4gZG8gKCk9PlxuXHRcdFx0ZHJpbGxkb3duTWFya3VwcyA9ICcnXG5cdFx0XHRkcmlsbGRvd25NYXJrdXBzICs9IEBnZW5lcmF0ZVJvd01hcmt1cChkcmlsbGRvd25Sb3csIHJvdykgZm9yIGRyaWxsZG93blJvdyBpbiByb3cuZHJpbGxkb3duXG5cdFx0XHRyZXR1cm4gZHJpbGxkb3duTWFya3Vwc1xuXHRcdFxuXHRcdCdjZWxscyc6IGRvICgpPT5cblx0XHRcdHJvd0NlbGxzID0gJydcblx0XHRcdFxuXHRcdFx0Zm9yIGNvbHVtbk5hbWUsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnNcblx0XHRcdFx0Y2VsbFZhbHVlID0gcm93W2NvbHVtbk5hbWVdXG5cblx0XHRcdFx0aWYgQG9wdGlvbnMucGVyY2VudGFnZVtjb2x1bW5OYW1lXVxuXHRcdFx0XHRcdGNlbGxWYWx1ZSA9IEBjYWxjUGVyY2VudGFnZVN0cmluZyhjZWxsVmFsdWUsIGNvbHVtbk5hbWUsIHJvdylcblxuXG5cdFx0XHRcdHJvd0NlbGxzICs9IG1hcmt1cC5yb3dDZWxsIEBtYXJrdXBBcmdzXG5cdFx0XHRcdFx0J2xhYmVsJzogaWYgdHlwZW9mIGNlbGxWYWx1ZSBpcyAnc3RyaW5nJyB0aGVuIGNlbGxWYWx1ZSBlbHNlICcnXG5cdFx0XHRcdFx0J2NvbHVtbic6IGNvbHVtbk5hbWVcblx0XHRcdFx0XHQnc2x1Zyc6IGNvbHVtbi5zbHVnXG5cdFx0XHRcdFx0J2V4dHJhQ2xhc3Nlcyc6IGhlbHBlcnMuZ2VuQ2VsbENsYXNzbmFtZShjb2x1bW4pXG5cdFx0XHRcdFx0J3N0eWxlJzogaGVscGVycy5nZW5DZWxsU3R5bGUoY29sdW1uKVxuXHRcdFx0XHRcdCd2YWx1ZSc6IGRvICgpPT4gc3dpdGNoXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnIFx0XHR0aGVuIEBnZW5lcmF0ZUlubGluZUZpZWxkcyhjZWxsVmFsdWUsIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnaXBEZXRhaWxzJyBcdHRoZW4gQGdlbmVyYXRlSXBEZXRhaWxzKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdicmVha2Rvd25CYXInIFx0dGhlbiBAZ2VuZXJhdGVCcmVha2Rvd25CYXIoY2VsbFZhbHVlLCByb3csIGNvbHVtbilcblx0XHRcdFx0XHRcdHdoZW4gY29sdW1uLnR5cGUgaXMgJ2J1dHRvbicgXHRcdHRoZW4gQGdlbmVyYXRlQnV0dG9uKChjb2x1bW4uYWN0aW9uIG9yIGNlbGxWYWx1ZSksIChjb2x1bW4uYnV0dG9uSWNvbiBvciBjb2x1bW4uaWNvbikpXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJyBcdFx0dGhlbiBAZ2VuZXJhdGVBY3Rpb25zKGNvbHVtbiwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi5pc0xpbmsgXHRcdFx0XHRcdHRoZW4gXCI8YSBocmVmPScje2NlbGxWYWx1ZX0nIHRhcmdldD0nX2JsYW5rJz4je2NlbGxWYWx1ZX08L2E+XCJcblx0XHRcdFx0XHRcdGVsc2UgKGlmIGNvbHVtbi5mb3JtYXR0ZXIgdGhlbiBjb2x1bW4uZm9ybWF0dGVyKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pIGVsc2UgY2VsbFZhbHVlKVxuXHRcdFx0XHRcdFxuXHRcdFx0cmV0dXJuIHJvd0NlbGxzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJEYXRhVGFibGU6OmdlbmVyYXRlQnJlYWtkb3duQmFyID0gKGJyZWFrZG93biwgcm93T2JqLCBjb2x1bW5FbnRpdHkpLT5cblx0YnJlYWtkb3duS2V5cyA9IEBsZWdlbmQgb3IgT2JqZWN0LmtleXMoYnJlYWtkb3duKVxuXHRyb3dPYmouYnJlYWtkb3duQmFyVG90YWwgPSB0b3RhbCA9IEBnZXRCcmVha2Rvd25Ub3RhbChicmVha2Rvd24sIGJyZWFrZG93bktleXMpXG5cdFxuXHRyZXR1cm4gJ04vQScgdW5sZXNzIHRvdGFsXG5cdFxuXHRtYXJrdXAuYnJlYWtkb3duQmFyIEBtYXJrdXBBcmdzXG5cdFx0J3RvdGFsJzogdG90YWxcblx0XHQndG90YWxGb3JtYXR0ZWQnOiBpZiBjb2x1bW5FbnRpdHkudmFsdWVGb3JtYXQgdGhlbiBjb2x1bW5FbnRpdHkudmFsdWVGb3JtYXQodG90YWwpIGVsc2UgdG90YWxcblx0XHQnYmFycyc6IGRvICgpLT5cblx0XHRcdGJhcnMgPSAnJ1xuXHRcdFx0Zm9yIGtleSBpbiBicmVha2Rvd25LZXlzXG5cdFx0XHRcdHZhbHVlID0gYnJlYWtkb3duW2tleV1cblx0XHRcdFx0YmFycyArPSBtYXJrdXAuYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25fYmFyLnJlcGxhY2UgJ3t7d2lkdGh9fScsICh2YWx1ZS90b3RhbCkqMTAwXG5cdFx0XHRyZXR1cm4gYmFyc1xuXG5cdFx0J2hvdmVyQm94JzogZG8gKCktPlxuXHRcdFx0bWFya3VwLmJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2hvdmVyYm94XG5cdFx0XHRcdC5yZXBsYWNlICd7e3Jvd3N9fScsICgpLT5cblx0XHRcdFx0XHRyb3dzID0gJydcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRicmVha2Rvd25LZXlzLmZvckVhY2ggKGtleSwgaW5kZXgpLT5cblx0XHRcdFx0XHRcdHJvd3MgKz0gbWFya3VwLmJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2hvdmVyYm94X3Jvd1xuXHRcdFx0XHRcdFx0XHQucmVwbGFjZSAne3tjb2xvcn19JywgY3VzdG9tQ29sb3JzKGluZGV4KVxuXHRcdFx0XHRcdFx0XHQucmVwbGFjZSAne3trZXl9fScsIGtleVxuXHRcdFx0XHRcdFx0XHQucmVwbGFjZSAne3t2YWx1ZX19JywgaWYgY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0IHRoZW4gY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0KGJyZWFrZG93bltrZXldKSBlbHNlIGJyZWFrZG93bltrZXldXG5cblx0XHRcdFx0XHRyZXR1cm4gcm93c1xuXG5cblxuXG5cbkRhdGFUYWJsZTo6Z2VuZXJhdGVJbmxpbmVGaWVsZHMgPSAoZGF0YUZpZWxkcyktPlxuXHRtYXJrdXAuZmllbGRzIEBtYXJrdXBBcmdzICdmaWVsZHMnOiBkbyAoKT0+XG5cdFx0cmV0dXJuICcnIHVubGVzcyB0eXBlb2YgZGF0YUZpZWxkcyBpcyAnb2JqZWN0J1xuXHRcdFxuXHRcdG91dHB1dCA9IGZvciBsYWJlbCx2YWx1ZSBvZiBkYXRhRmllbGRzXG5cdFx0XHRtYXJrdXAuZmllbGRzSXRlbSBAbWFya3VwQXJncyB7bGFiZWwsdmFsdWV9XG5cblxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJylcblxuXG5cblxuXG5cbkRhdGFUYWJsZTo6Z2VuZXJhdGVCdXR0b24gPSAoYWN0aW9uLCBpY29uLCBpc011bHRpKS0+XG5cdG1hcmt1cC5idXR0b24oQG1hcmt1cEFyZ3Mge2FjdGlvbiwgaWNvbiwgaXNNdWx0aX0pXG5cblxuXG5cblxuRGF0YVRhYmxlOjpnZW5lcmF0ZUFjdGlvbnMgPSAoY29sdW1uKS0+XG5cdGNvbHVtbi5hY3Rpb25zID89ICdtdWx0aUFjdGlvbnMnXG5cdGJ1dHRvbk1hcmt1cCA9IEBnZW5lcmF0ZUJ1dHRvbihjb2x1bW4uYWN0aW9ucywgKGNvbHVtbi5idXR0b25JY29uIG9yIGNvbHVtbi5pY29uKSwgdHJ1ZSlcblx0YWN0aW9uc01hcmt1cCA9IG1hcmt1cC5hY3Rpb25zIEBtYXJrdXBBcmdzICdhY3Rpb25zJzogZG8gKCk9PlxuXHRcdHJldHVybiAnJyB1bmxlc3MgQG9wdGlvbnMuYWN0aW9uc1xuXHRcdFxuXHRcdG91dHB1dCA9IGZvciBhY3Rpb24gaW4gQG9wdGlvbnMuYWN0aW9uc1xuXHRcdFx0bWFya3VwLmFjdGlvbnNJdGVtKEBtYXJrdXBBcmdzIGFjdGlvbilcblxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJylcblxuXHRyZXR1cm4gYnV0dG9uTWFya3VwK2FjdGlvbnNNYXJrdXBcblxuXG5cblxuXG5cbkRhdGFUYWJsZTo6Z2VuZXJhdGVJcERldGFpbHMgPSAoaXBBZGRyZXNzLCByb3csIGNvbHVtbiktPlxuXHRtYXJrdXAuaXBEZXRhaWxzIEBtYXJrdXBBcmdzIHtpcEFkZHJlc3MsIGV4dHJhOmNvbHVtbi5leHRyYU1hcmt1cD8oaXBBZGRyZXNzLCByb3cpfSAjIGRhdGEgYXR0cmlidXRlXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJEYXRhVGFibGU6OmF0dGFjaEV2ZW50cyA9ICgpLT5cblx0IyA9PT09IFBhZ2luYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMucGFnaW5hdGlvbi5vbiAnY2xpY2snLCAnLl9wYWdpbmF0aW9uSXRlbScsIChldmVudCk9PlxuXHRcdCR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGlzQmFjayA9ICR0aGlzLmhhc0NsYXNzKCdfYmFjaycpXG5cdFx0aXNOZXh0ID0gJHRoaXMuaGFzQ2xhc3MoJ19uZXh0Jylcblx0XHRpc0V4dHJhID0gJHRoaXMuaGFzQ2xhc3MoJ19leHRyYUluZGljYXRvcicpXG5cblx0XHRpZiBpc0JhY2tcblx0XHRcdEBjdXJyZW50UGFnZS0tIHVubGVzcyBAY3VycmVudFBhZ2UgaXMgMVxuXHRcdFxuXHRcdGVsc2UgaWYgaXNOZXh0XG5cdFx0XHRAY3VycmVudFBhZ2UrKyB1bmxlc3MgQGN1cnJlbnRQYWdlIGlzIEBwYWdlQ291bnRSZWFsXG5cdFx0XG5cdFx0IyBlbHNlIGlmIG5vdCBpc0V4dHJhIGFuZCBub3QgaXNXcmFwcGVyXG5cdFx0ZWxzZSBpZiBub3QgaXNFeHRyYVxuXHRcdFx0cGFnZU51bWJlciA9IHBhcnNlRmxvYXQgJHRoaXMuY2hpbGRyZW4oKS5odG1sKClcblx0XHRcdEBjdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXJcblxuXG5cblxuXHQjID09PT0gU29ydGluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUhlYWRpbmcub24gJ2NsaWNrJywgJy5faXNTb3J0YWJsZScsIChldmVudCk9PlxuXHRcdEBzb3J0QnkgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzBdLnRleHRDb250ZW50XG5cblxuXG5cdCMgPT09PSBBY3Rpb24gYnV0dG9uIGV2ZW50IGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ2NsaWNrJywgJy5fYWN0aW9uQnV0dG9uJywgKGV2ZW50KT0+XG5cdFx0YnV0dG9uJCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpZiBidXR0b24kLmhhc0NsYXNzKCdfaXNNdWx0aScpXG5cdFx0XHRoZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLm5leHQoKS5jaGlsZHJlbigpXG5cdFx0XG5cdFx0ZWxzZVxuXHRcdFx0aXRlbVJvdyQgPSBidXR0b24kLmNsb3Nlc3QoJy5fdGFibGVSb3cnKVxuXHRcdFx0YWN0aW9uID0gYnV0dG9uJC5kYXRhKCdhY3Rpb24nKVxuXHRcdFx0aXRlbUlEID0gaXRlbVJvdyQuZGF0YSgncm93LWlkJylcblx0XHRcdGl0ZW1JbmRleCA9IGl0ZW1Sb3ckLmRhdGEoJ2luZGV4Jylcblx0XHRcdGRhdGFJdGVtID0gaWYgaXRlbUlEIHRoZW4gQGFsbFJvd3MuZmluZCAocm93KT0+IGhlbHBlcnMuY29tcGFyZVZhbHVlcyhyb3dbQG9wdGlvbnMudW5pcXVlSURdLCBpdGVtSUQpXG5cdFx0XHRkYXRhSXRlbSA/PSBpdGVtSURcblxuXHRcdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX3N1YkFjdGlvbkJ1dHRvbicpXG5cdFx0XHRcdGhlbHBlcnMudG9nZ2xlQWN0aW9uc1BvcHVwIGJ1dHRvbiQucGFyZW50KClcblxuXHRcdFx0QGVscy50YWJsZS50cmlnZ2VyIFwiYWN0aW9uLiN7YWN0aW9ufVwiLCBkYXRhSXRlbVxuXG5cblxuXG5cblxuXHQjID09PT0gUm93IGV4cGFuc2lvbiBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdjbGljaycsICcuX2V4cGFuZERyaWxsZG93bicsIChldmVudCk9PlxuXHRcdGJ1dHRvbiQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aXRlbVJvdyA9IGJ1dHRvbiQucGFyZW50KCkuZGF0YSgncm93Jylcblx0XHRcblx0XHRpdGVtUm93LmRyaWxsZG93bk9wZW4gPSAhaXRlbVJvdy5kcmlsbGRvd25PcGVuXG5cblxuXG5cblxuXG5cblx0IyA9PT09IElQIERldGFpbHMgbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnbW91c2VvdmVyJywgJy5faXBEZXRhaWxzLXRyaWdnZXInLCAoZXZlbnQpPT5cblx0XHR0cmlnZ2VyJCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHR3cmFwcGVyJCA9IHRyaWdnZXIkLnBhcmVudCgpXG5cdFx0Y29udGVudCQgPSB0cmlnZ2VyJC5uZXh0KClcblx0XHRjb3VudHJ5JCA9IGNvbnRlbnQkLm5leHQoKVxuXHRcdGlwQWRkcmVzcyA9IHdyYXBwZXIkLmRhdGEgJ2lwJ1xuXHRcdGlzTG9hZGVkID0gdHJpZ2dlciQuaGFzQ2xhc3MgJ19pc1JlYWR5J1xuXG5cblx0XHR1bmxlc3MgaXNMb2FkZWRcdFx0XHRcblx0XHRcdEBvcHRpb25zLmlwRGF0YUZldGNoZXIoaXBBZGRyZXNzKS50aGVuIChpcERldGFpbHMpPT5cblx0XHRcdFx0cmV0dXJuIHVubGVzcyBpcERldGFpbHNcblx0XHRcdFx0XG5cdFx0XHRcdG91dHB1dCA9IGZvciBsYWJlbCx2YWx1ZSBvZiBpcERldGFpbHMgXG5cdFx0XHRcdFx0bWFya3VwLmlwRGV0YWlsc0l0ZW0oQG1hcmt1cEFyZ3Mge2xhYmVsLHZhbHVlfSlcblxuXHRcdFx0XHRjb250ZW50JC5odG1sIG91dHB1dC5qb2luKCcnKVxuXHRcdFx0XHR3cmFwcGVyJC5hZGRDbGFzcyAnX2lzUmVhZHknXG5cblxuXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cblxuIiwiRGF0YVRhYmxlOjphdHRhY2hCaW5kaW5ncyA9ICgpLT5cblx0U2ltcGx5QmluZC5zZXR0aW5ncy50cmFja0FycmF5Q2hpbGRyZW4gPSBmYWxzZVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTdGF0ZVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnbm9SZXN1bHRzJykub2YoQHN0YXRlKVxuXHRcdC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMubm9SZXN1bHRzTWVzc2FnZSkudHJhbnNmb3JtIChub1Jlc3VsdHMpPT4gaWYgbm9SZXN1bHRzIGFuZCBub3QgQHN0YXRlLmxvYWRpbmcgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5ub1Jlc3VsdHMnKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKG5vUmVzdWx0cyk9PiBpZiBub1Jlc3VsdHMgYW5kIG5vdCBAc3RhdGUubG9hZGluZyB0aGVuICdfbm9SZXN1bHRzJyBlbHNlICcnXG5cdFxuXHRTaW1wbHlCaW5kKCdsb2FkaW5nJykub2YoQHN0YXRlKVxuXHRcdC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMubG9hZGluZ01lc3NhZ2UpLnRyYW5zZm9ybSAobG9hZGluZyktPiBpZiBsb2FkaW5nIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUubG9hZGluZycpLm9mKEBlbHMudGFibGVPdXRlcndyYXApLnRyYW5zZm9ybSAobG9hZGluZyk9PiBpZiBsb2FkaW5nIHRoZW4gJ19sb2FkaW5nJyBlbHNlICcnXG5cdFx0LmFuZC50byAobG9hZGluZyk9PlxuXHRcdFx0aWYgbG9hZGluZ1xuXHRcdFx0XHRAc3RhdGUubm9SZXN1bHRzID0gZmFsc2Vcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9ICFAdmlzaWJsZVJvd3MubGVuZ3RoXG5cblx0U2ltcGx5QmluZCgnZXJyb3InKS5vZihAc3RhdGUpXG5cdFx0LnRvKCd0ZXh0Q29udGVudC5lcnJvck1lc3NhZ2UnKS5vZihAZWxzLmVycm9yTWVzc2FnZSlcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaXNWaXNpYmxlJykub2YoQGVscy5lcnJvck1lc3NhZ2UpLnRyYW5zZm9ybSAoaGFzRXJyb3IpLT4gaWYgaGFzRXJyb3IgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5oYXNFcnJvcicpLm9mKEBlbHMudGFibGVPdXRlcndyYXApLnRyYW5zZm9ybSAoaGFzRXJyb3IpLT4gaWYgaGFzRXJyb3IgdGhlbiAnX2Vycm9yJyBlbHNlICcnXG5cdFx0LmFuZC50byAoZXJyKS0+IGNvbnNvbGUuZXJyb3IoZXJyKSBpZiBlcnJcblx0XG5cblx0aWYgQG9wdGlvbnMuaGFzTW9iaWxlXG5cdFx0QHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcblx0XHRTaW1wbHlCaW5kKCdldmVudDpyZXNpemUnKS5vZih3aW5kb3cpXG5cdFx0XHQudG8gKCk9PiBAd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0U2ltcGx5QmluZCgnd2luZG93V2lkdGgnKS5vZihAKVxuXHRcdFx0LnRvKCdjbGFzc05hbWUubW9iaWxlVmVyc2lvbicpLm9mKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0XHRcdC50cmFuc2Zvcm0gKHdpbmRvd1dpZHRoKT0+IGlmIHdpbmRvd1dpZHRoIDw9IEBvcHRpb25zLm1vYmlsZVdpZHRoIHRoZW4gJ19tb2JpbGVWZXJzaW9uJyBlbHNlICcnXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBDb2x1bW4gdmlzaWJpbGl0eVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0Zm9yIGwsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnMgdGhlbiBkbyAoY29sdW1uKT0+XG5cdFx0U2ltcGx5QmluZCgnaGlkZGVuJykub2YoY29sdW1uKVxuXHRcdFx0LnRvKFwiaW5uZXJIVE1MLiN7Y29sdW1uLnNsdWd9XCIpLm9mKEBlbHMuZ2xvYmFsU3R5bGVzKVxuXHRcdFx0XHQudHJhbnNmb3JtIChpc0hpZGRlbik9PiBpZiBpc0hpZGRlbiB0aGVuIFwiI3tAdGFibGVJRH0gLl9fI3tjb2x1bW4uc2x1Z30ge2Rpc3BsYXk6bm9uZX1cIiBlbHNlICcnXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgUm93cyBhcnJheSByZW5kZXJpbmcvcHJvY2Vzc2luZ1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnYXJyYXk6dmlzaWJsZVJvd3MnKS5vZihAKVxuXHRcdC50byAocm93cywgcHJldlJvd3MpPT5cblx0XHRcdGlmIHByZXZSb3dzPy5sZW5ndGhcblx0XHRcdFx0Zm9yIHJvdyBpbiBwcmV2Um93c1xuXHRcdFx0XHRcdHJvdy52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFxuXHRcdFx0dHJ5XG5cdFx0XHRcdGZvciByb3cgaW4gcm93c1xuXHRcdFx0XHRcdEBwcm9jZXNzUm93KHJvdylcblx0XHRcdFx0XHRyb3cudmlzaWJsZSA9IHRydWVcblx0XHRcdGNhdGNoIGVyclxuXHRcdFx0XHRAc3RhdGUuZXJyb3IgPSBlcnJcblx0XHRcdFxuXHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9ICFyb3dzLmxlbmd0aFxuXHRcdFxuXHRcdC5hbmQudG8gKHJvd3MpPT5cblx0XHRcdHJldHVybiBpZiBub3QgQGhhc0JyZWFrZG93bkJhclxuXHRcdFx0Zm9yIHJvdyBpbiByb3dzXG5cdFx0XHRcdGlmIHJvdy5icmVha2Rvd25CYXJUb3RhbCA+IGxhcmdlc3RCcmVha2Rvd25Ub3RhbCBvciBub3QgbGFyZ2VzdEJyZWFrZG93blRvdGFsP1xuXHRcdFx0XHRcdGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IHJvdy5icmVha2Rvd25CYXJUb3RhbFxuXG5cdFx0XHRAbGFyZ2VzdEJyZWFrZG93blRvdGFsID0gbGFyZ2VzdEJyZWFrZG93blRvdGFsIG9yIDBcblxuXHRcdC5hbmQudG8oJ3RleHRDb250ZW50LnJvd1JhbmdlJykub2YoQGVscy5wYWdlU3RhdHVzKVxuXHRcdFx0LnRyYW5zZm9ybSAocm93cyk9PiBcIiN7QGF2YWlsYWJsZVJvd3MuaW5kZXhPZihyb3dzWzBdKSsxfS0je0BhdmFpbGFibGVSb3dzLmluZGV4T2Yocm93cy5zbGljZSgtMSlbMF0pKzF9XCJcblxuXG5cdFNpbXBseUJpbmQoJ2FycmF5OmFsbFJvd3MnKS5vZihAKS50byAocm93cyk9PlxuXHRcdEBzZWFyY2hDcml0ZXJpYSA9ICcnXG5cdFx0QGN1cnJlbnRQYWdlID0gMVxuXHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhcm93cy5sZW5ndGhcblx0XHRpZiBAc29ydEJ5IGlzIEBvcHRpb25zLnNvcnRCeVxuXHRcdFx0QHNvcnRCeSA9ICcnXG5cdFx0XHRAc29ydEJ5ID0gQG9wdGlvbnMuc29ydEJ5XG5cdFx0ZWxzZVxuXHRcdFx0QHNvcnRCeSA9ICcnXG5cblxuXG5cdFNpbXBseUJpbmQoJ2F2YWlsYWJsZVJvd3MnLCB7dXBkYXRlT25CaW5kOmZhbHNlLCB1cGRhdGVFdmVuSWZTYW1lOnRydWV9KS5vZihAKVxuXHRcdC50byAocm93cyk9PiBAY2FsY1BhZ2VDb3VudChyb3dzKVxuXHRcdC5hbmQudG8oJ3RleHRDb250ZW50LnRvdGFsUm93cycpLm9mKEBlbHMucGFnZVN0YXR1cykudHJhbnNmb3JtIChyb3dzKS0+IHJvd3MubGVuZ3RoXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFBhZ2luYXRpb25cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ3BhZ2VDb3VudCcpLm9mKEApXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25JdGVtcykgIyBSZW5kZXIgcGFnaW5hdGlvblxuXHRcdFx0LnRyYW5zZm9ybSAoY291bnQpPT5cblx0XHRcdFx0cGFnaW5hdGlvbkl0ZW1zID0gJydcblx0XHRcdFx0Zm9yIHZhbHVlIGluIFsxLi5jb3VudF1cblx0XHRcdFx0XHRwYWdpbmF0aW9uSXRlbXMgKz0gbWFya3VwLnBhZ2luYXRpb25JdGVtKEBtYXJrdXBBcmdzIHt2YWx1ZX0pIHVubGVzcyB2YWx1ZSBpcyAwXG5cblx0XHRcdFx0cmV0dXJuIHBhZ2luYXRpb25JdGVtc1xuXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMucGFnaW5hdGlvbikudHJhbnNmb3JtIChjb3VudCktPiBpZiBjb3VudCA+IDEgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcblxuXHRTaW1wbHlCaW5kKCdwYWdlQ291bnRSZWFsJykub2YoQClcblx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdFx0LnRyYW5zZm9ybSAocmVhbENvdW50KT0+XG5cdFx0XHRcdGlmIHJlYWxDb3VudCA8PSBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiAnJ1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0b3B0aW9ucyA9ICc8b3B0aW9uPi4uLjwvb3B0aW9uPidcblx0XHRcdFx0XHRvcHRpb25zICs9IFwiPG9wdGlvbj4je2luZGV4fTwvb3B0aW9uPlwiIGZvciBpbmRleCBpbiBbKEBvcHRpb25zLnBhZ2VDb3VudE1heCsxKS4ucmVhbENvdW50XVxuXHRcdFx0XHRcdHJldHVybiBvcHRpb25zXG5cdFx0XG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmhhc0V4dHJhJykub2YoQGVscy5wYWdpbmF0aW9uKS50cmFuc2Zvcm0gKHJlYWxDb3VudCk9PiBpZiByZWFsQ291bnQgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiAnaGFzX2V4dHJhJyBlbHNlICcnXG5cblxuXG5cdCMgPT09PSBFeHRyYSBJbmRpY2F0b3IvUGFnZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ3ZhbHVlJywgdXBkYXRlT25CaW5kOmZhbHNlKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhVGV4dClcblx0XHQuYW5kLnRvKCdjdXJyZW50UGFnZScpLm9mKEApXG5cblxuXG5cblx0IyA9PT09IEN1cnJlbnQgUGFnZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0U2ltcGx5QmluZCgnY3VycmVudFBhZ2UnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKEApXG5cdFx0LnRyYW5zZm9ybVNlbGYgKGN1cnJlbnRQYWdlKT0+XG5cdFx0XHRjdXJyZW50UGFnZSA9IGlmIGN1cnJlbnRQYWdlIGlzICcuLi4nIHRoZW4gMSBlbHNlIHBhcnNlRmxvYXQoY3VycmVudFBhZ2UpXG5cdFx0XHRyZXR1cm4gaWYgY3VycmVudFBhZ2UgPiBAcGFnZUNvdW50UmVhbCB0aGVuIEBwYWdlQ291bnRSZWFsIGVsc2UgY3VycmVudFBhZ2Vcblx0XHRcblx0XHQudG8oJ3ZhbHVlJykub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0XHQudHJhbnNmb3JtIChjdXJyZW50UGFnZSk9PiBpZiBjdXJyZW50UGFnZSA+IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuIGN1cnJlbnRQYWdlIGVsc2UgJy4uLidcblx0XHRcblx0XHQuYW5kLnRvIChjdXJyZW50UGFnZSk9PlxuXHRcdFx0QHNldFZpc2libGVQYWdlKGN1cnJlbnRQYWdlKVxuXHRcdFx0QHNldFBhZ2VJbmRpY2F0b3IoY3VycmVudFBhZ2UpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTZWFyY2ggRmllbGRcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFxuXHQjID09PT0gU2VhcmNoIEZpZWxkIHZhbHVlL21hcmt1cCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0aWYgQG9wdGlvbnMuc2VhcmNoLmxlbmd0aFxuXHRcdEBzZWFyY2hQYXJhbSA9IEBvcHRpb25zLnNlYXJjaFswXVxuXG5cdFx0U2ltcGx5QmluZCgnc2VhcmNoJykub2YoQG9wdGlvbnMpXG5cdFx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMuc2VhcmNoUGFyYW0pXG5cdFx0XHRcdC50cmFuc2Zvcm0gKG9wdGlvbnMpLT4gb3B0aW9ucy5tYXAoKG9wdGlvbiktPlwiPG9wdGlvbj4je29wdGlvbn08L29wdGlvbj5cIikuam9pbignJylcblxuXHRcdFNpbXBseUJpbmQoJ3ZhbHVlJykub2YoQGVscy5zZWFyY2hQYXJhbSlcblx0XHRcdC50bygnc2VhcmNoUGFyYW0nKS5vZihAKVxuXHRcdFx0XHQucGlwZSgnYXR0cjpwbGFjZWhvbGRlcicpLm9mKEBlbHMuc2VhcmNoQ3JpdGVyaWEpXG5cdFx0XHRcdFx0LnRyYW5zZm9ybSAob3B0aW9uKS0+IFwiRmlsdGVyIGJ5ICN7b3B0aW9ufVwiXG5cblxuXG5cdCMgPT09PSBUYWJsZSByZXN1bHRzIGZpbHRlciAmIGF2YWlhYmxlIHJvd3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ3ZhbHVlJykub2YoQGVscy5zZWFyY2hDcml0ZXJpYSkgIyBTZWFyY2gvRmlsdGVyXG5cdFx0LnRvKCdzZWFyY2hDcml0ZXJpYScsIHVwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSkub2YoQCkuYm90aFdheXMoKVxuXHRcdFx0LmNoYWluVG8gKHNlYXJjaENyaXRlcmlhKT0+XG5cdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSBAYWxsUm93c1xuXHRcdFx0XHR0YXJnZXRDb2x1bW4gPSBAb3B0aW9ucy5jb2x1bW5zW0BzZWFyY2hQYXJhbV1cblxuXHRcdFx0XHRpZiBzZWFyY2hDcml0ZXJpYSBhbmQgKHRhcmdldENvbHVtbiBvciBAYWxsUm93c1swXT9bQHNlYXJjaFBhcmFtXT8pXG5cdFx0XHRcdFx0cm93c1RvTWFrZUF2YWlsYWJsZSA9IHJvd3NUb01ha2VBdmFpbGFibGUuZmlsdGVyIChyb3cpPT5cblx0XHRcdFx0XHRcdHJvd1ZhbHVlID0gaWYgdGFyZ2V0Q29sdW1uPy5yYXdWYWx1ZUZvcm1hdHRlciB0aGVuIHRhcmdldENvbHVtbi5yYXdWYWx1ZUZvcm1hdHRlcihyb3dbQHNlYXJjaFBhcmFtXSkgZWxzZSByb3dbQHNlYXJjaFBhcmFtXVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJvd1ZhbHVlPy50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMgc2VhcmNoQ3JpdGVyaWEudG9Mb3dlckNhc2UoKVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnJvd0ZpbHRlclxuXHRcdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSByb3dzVG9NYWtlQXZhaWxhYmxlLmZpbHRlciAocm93KT0+XG5cdFx0XHRcdFx0XHRyb3dDbG9uZSA9IGV4dGVuZC5jbG9uZShyb3cpXG5cdFx0XHRcdFx0XHRyb3dDbG9uZVtuYW1lXSA9IGNvbHVtbi5yYXdWYWx1ZUZvcm1hdHRlcihyb3dDbG9uZVtuYW1lXSkgZm9yIG5hbWUsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnMgd2hlbiBjb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXJcblx0XHRcdFx0XHRcdHJldHVybiBAb3B0aW9ucy5yb3dGaWx0ZXIocm93Q2xvbmUpXG5cdFx0XHRcdFxuXHRcdFx0XHRAYXZhaWxhYmxlUm93cyA9IHJvd3NUb01ha2VBdmFpbGFibGVcblx0XHRcdFx0QGN1cnJlbnRQYWdlID0gMVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTb3J0aW5nXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdzb3J0QnknLCB7dXBkYXRlRXZlbklmU2FtZTp0cnVlLCB1cGRhdGVPbkJpbmQ6ZmFsc2V9LCB0cnVlKS5vZihAKVxuXHRcdC50byAoY3VycmVudFNvcnQsIHByZXZTb3J0KT0+IGlmIGN1cnJlbnRTb3J0IG9yIHByZXZTb3J0XG5cdFx0XHRpZiBjdXJyZW50U29ydCBpcyBwcmV2U29ydCBhbmQgcHJldlNvcnRcblx0XHRcdFx0QHNvcnREaXJlY3Rpb24gKj0gLTFcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHNvcnREaXJlY3Rpb24gPSAtMVxuXG5cdFx0XHR0YXJnZXRDb2x1bW4gPSBpZiBjdXJyZW50U29ydCB0aGVuIGN1cnJlbnRTb3J0IGVsc2UgbnVsbFxuXHRcdFx0QGF2YWlsYWJsZVJvd3MgPSBAc29ydFJvd3MoQGF2YWlsYWJsZVJvd3MsIHRhcmdldENvbHVtbilcblx0XHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXHRcblx0aWYgQGVscy50YWJsZUhlYWRpbmcuY2hpbGRyZW4oJy5faXNTb3J0YWJsZScpLmxlbmd0aFxuXHRcdFNpbXBseUJpbmQoJ3NvcnRCeScsIHVwZGF0ZU9uQmluZDp0cnVlKS5vZihAKVxuXHRcdFx0LnRvKCdtdWx0aTpjbGFzc05hbWUuY3VycmVudFNvcnQnKS5vZihAZWxzLnRhYmxlSGVhZGluZy5jaGlsZHJlbignLl9pc1NvcnRhYmxlJykpXG5cdFx0XHRcdC50cmFuc2Zvcm0gKGN1cnJlbnQsIHByZXYsIGVsKS0+IGlmIGN1cnJlbnQgaXMgZWwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgdGhlbiAnX2N1cnJlbnRTb3J0JyBlbHNlICcnXG5cblxuXG5cblx0U2ltcGx5QmluZCgnc29ydERpcmVjdGlvbicpLm9mKEApXG5cdFx0LnRvKCdjbGFzc05hbWUuc29ydERpcmVjdGlvbicpLm9mKEBlbHMudGFibGUpXG5cdFx0XHQudHJhbnNmb3JtIChzb3J0RGlyZWN0aW9uKS0+IGlmIHNvcnREaXJlY3Rpb24gaXMgLTEgdGhlbiAnZGVzYycgZWxzZSAnYXNjJ1xuXG5cblxuXG5cblx0UHJvbWlzZS5yZXNvbHZlKClcblxuIiwiRGF0YVRhYmxlOjpzb3J0QnkgPSAoY29sdW1uKS0+Iiwie1xuICBcIm5hbWVcIjogXCJAZGFuaWVsa2FsZW4vZGF0YV90YWJsZVwiLFxuICBcInZlcnNpb25cIjogXCIyLjkuNVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGlueSBsaWJyYXJ5IGZvciBkaXNwbGF5aW5nIGRhdGFiYXNlLWZldGNoZWQgZGF0YSBpbiBhbiBIVE1MIHRhYmxlIHdpdGggZnJvbnQtZW5kIHBhZ2luYXRpb25cIixcbiAgXCJtYWluXCI6IFwiZGlzdC9qcy9kYXRhX3RhYmxlLmpzXCIsXG4gIFwiYnJvd3NlclwiOiB7XG4gICAgXCIuL2RlYnVnXCI6IFwiZGlzdC9qcy9kYXRhX3RhYmxlLmRlYnVnLmpzXCIsXG4gICAgXCIuL2Rpc3QvanMvZGF0YV90YWJsZS5qc1wiOiBcInNyYy9jb2ZmZWUvaW5kZXguY29mZmVlXCJcbiAgfSxcbiAgXCJicm93c2VyaWZ5XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcInNpbXBseWltcG9ydC9jb21wYXRcIlxuICAgIF1cbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGRhbmllbGthbGVuL3Nhc3MtYmFzZVwiOiBcIl4xLjUuMlwiLFxuICAgIFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRcIjogXCJeMS4xNS44XCIsXG4gICAgXCJibHVlYmlyZFwiOiBcIl4zLjUuMFwiLFxuICAgIFwiZXNjYXBlLWh0bWxcIjogXCJeMS4wLjNcIixcbiAgICBcImV2ZW50LWxpdGVcIjogXCJeMC4xLjFcIixcbiAgICBcInNtYXJ0LWV4dGVuZFwiOiBcIl4xLjcuM1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImNoYWxrXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJjb2ZmZWUtc2NyaXB0XCI6IFwiXjEuMTIuNlwiLFxuICAgIFwiZnMtamV0cGFja1wiOiBcIl4xLjEuMFwiLFxuICAgIFwibm9kZS1zYXNzXCI6IFwiXjQuNS4zXCIsXG4gICAgXCJwcm9taXNlLWJyZWFrXCI6IFwiXjAuMS4xXCIsXG4gICAgXCJzYXNzLW1vZHVsZS1pbXBvcnRlclwiOiBcImdpdGh1YjpkYW5pZWxrYWxlbi9zYXNzLW1vZHVsZS1pbXBvcnRlclwiLFxuICAgIFwic2ltcGx5aW1wb3J0XCI6IFwiXjQuMC4wLXQ3XCIsXG4gICAgXCJzaW1wbHl3YXRjaFwiOiBcIl4zLjAuMC1sNVwiXG4gIH0sXG4gIFwic2Fzc0Zuc1wiOiBcIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2Fzcy1iYXNlL2NvbXBpbGVyLWZucy5qc1wiLFxuICBcInNhc3NJbXBvcnRlclwiOiBcIm5vZGVfbW9kdWxlcy9zYXNzLW1vZHVsZS1pbXBvcnRlci9saWIvaW5kZXguanNcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInBvc3R2ZXJzaW9uXCI6IFwibnBtIHJ1biBidWlsZCAmJiBnaXQgYWRkIC4gJiYgZ2l0IGNvbW1pdCAtYSAtbSAnW0J1aWxkXSdcIixcbiAgICBcInBvc3RwdWJsaXNoXCI6IFwiZ2l0IHB1c2hcIixcbiAgICBcImJ1aWxkXCI6IFwiY2FrZSBpbnN0YWxsOmJ1aWxkOyBjYWtlIC1kIGJ1aWxkICYmIGNha2UgYnVpbGQgJiYgY3AgLXIgYnVpbGQvKiBkaXN0L1wiLFxuICAgIFwiY29tcGlsZVwiOiBcImNha2UgLWQgYnVpbGRcIixcbiAgICBcIndhdGNoXCI6IFwiY2FrZSBpbnN0YWxsOyBjYWtlIC1kIHdhdGNoXCIsXG4gICAgXCJ3YXRjaDpqc1wiOiBcInNpbXBseXdhdGNoICdzcmMvY29mZmVlLyouY29mZmVlJyAtZSAnY29mZmVlJyAteCAnbnBtIHJ1biBjb21waWxlOmpzOmRlYnVnIC1zJ1wiLFxuICAgIFwid2F0Y2g6c2Fzc1wiOiBcImZvbnRzRGlyPWRpc3QvZm9udHMgc2ltcGx5d2F0Y2ggJ3NyYy9zYXNzLyouc2FzcycgLWUgJ3Nhc3MnIC14ICducG0gcnVuIGNvbXBpbGU6c2FzczpkZWJ1ZyAtcydcIixcbiAgICBcInRha2FuYVwiOiBcImZvbnRzRGlyPWRpc3QvZm9udHMgdGFrYW5hIC1mICQocHdkKS8kbnBtX3BhY2thZ2Vfc2Fzc0ZucyAkKHB3ZCkvc3JjL3Nhc3NcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9kYXRhX3RhYmxlLmdpdFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IFwiRGFuaWVsIEthbGVuXCIsXG4gIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL2RhdGFfdGFibGUvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9kYXRhX3RhYmxlI3JlYWRtZVwiXG59XG4iLCJjdXJyZW50SUQgPSAwXG5hcnJheU11dGF0b3JNZXRob2RzID0gWydwdXNoJywncG9wJywnc2hpZnQnLCd1bnNoaWZ0Jywnc3BsaWNlJywncmV2ZXJzZScsJ3NvcnQnXVxuZHVtbXlQcm9wZXJ0eURlc2NyaXB0b3IgPSB7fVxuYm91bmRJbnN0YW5jZXMgPSB7fVxucGxhY2Vob2xkZXIgPSBbJ3t7JywgJ319J11cbnNldHRpbmdzID0gT2JqZWN0LmNyZWF0ZVxuXHRzaWxlbnQ6XHRcdFx0XHRcdGZhbHNlXG4sXG5cdHBsYWNlaG9sZGVyOlxuXHRcdGdldDogKCktPiBwbGFjZWhvbGRlclxuXHRcdHNldDogKG5ld1BsYWNlaG9sZGVyKS0+IGlmIGNoZWNrSWYuaXNBcnJheShuZXdQbGFjZWhvbGRlcikgYW5kIG5ld1BsYWNlaG9sZGVyLmxlbmd0aCBpcyAyXG5cdFx0XHRwbGFjZWhvbGRlciA9IG5ld1BsYWNlaG9sZGVyXG5cdFx0XHRzZXRQaG9sZGVyUmVnRXgoKVxuXHRcdFx0cmV0dXJuXG5cblxuZGVmYXVsdE9wdGlvbnMgPSBcblx0ZGVsYXk6XHRcdFx0XHRcdGZhbHNlXG5cdHRocm90dGxlOlx0XHRcdFx0ZmFsc2Vcblx0c2ltcGxlU2VsZWN0b3I6XHRcdFx0ZmFsc2Vcblx0cHJvbWlzZVRyYW5zZm9ybXM6XHRcdGZhbHNlXG5cdGRpc3BhdGNoRXZlbnRzOlx0XHRcdGZhbHNlXG5cdHNlbmRBcnJheUNvcGllczpcdFx0ZmFsc2Vcblx0dXBkYXRlRXZlbklmU2FtZTpcdFx0ZmFsc2Vcblx0dXBkYXRlT25CaW5kOlx0XHRcdHRydWVcblxuXG5pbXBvcnQgJy4vbWlzYydcbmltcG9ydCAnLi9TaW1wbHlCaW5kJ1xuaW1wb3J0ICcuL0JpbmRpbmcnXG5pbXBvcnQgJy4vQmluZGluZ0ludGVyZmFjZSdcbmltcG9ydCAnLi9Hcm91cEJpbmRpbmcnXG5cbm1vZHVsZS5leHBvcnRzID0gU2ltcGx5QmluZCIsImltcG9ydCAnLi9oZWxwZXJzJ1xuaW1wb3J0ICcuL2Vycm9yc0FuZFdhcm5pbmdzJ1xuIiwiZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbmdldERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG5cbmltcG9ydCAnLi9jaGFuZ2VFdmVudCdcbmltcG9ydCAnLi9yZXF1aXJlc0RvbURlc2NyaXB0b3JGaXgnXG5pbXBvcnQgJy4vd2luZG93UHJvcHNUb0lnbm9yZSdcblxuXG5zZXRWYWx1ZU5vb3AgPSAodiwgcHVibGlzaGVyKS0+IEB1cGRhdGVBbGxTdWJzKHB1Ymxpc2hlciBvciBAKVxuXG5nZW5JRCA9ICgpLT4gJycrKCsrY3VycmVudElEKVxuXG5nZW5PYmogPSAoKS0+IE9iamVjdC5jcmVhdGUobnVsbClcblxuZ2VuUHJveGllZEludGVyZmFjZSA9IChpc1N1YiwgY29tcGxldGVDYWxsYmFjayktPiAoc3ViamVjdCwgY3VzdG9tT3B0aW9ucywgc2F2ZU9wdGlvbnMpLT5cblx0U2ltcGx5QmluZChzdWJqZWN0LCBjdXN0b21PcHRpb25zLCBzYXZlT3B0aW9ucywgaXNTdWIsIGNvbXBsZXRlQ2FsbGJhY2spXG5cbmdlblNlbGZVcGRhdGVyID0gKGJpbmRpbmcsIGZldGNoVmFsdWUpLT5cblx0YmluZGluZy5zZWxmVXBkYXRlciBvclxuXHRiaW5kaW5nLnNlbGZVcGRhdGVyID0gbmV3IEJpbmRpbmcgKCktPlxuXHRcdGlmIGZldGNoVmFsdWUgdGhlbiBiaW5kaW5nLnNldFZhbHVlKGJpbmRpbmcuZmV0Y2hEaXJlY3RWYWx1ZSgpLCBiaW5kaW5nLCB0cnVlKSBlbHNlIGJpbmRpbmcudXBkYXRlQWxsU3VicyhiaW5kaW5nKVxuXHQsICdGdW5jJywge31cblxuXG4jID09PT0gQ2hlY2tzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2NoZWNrcydcblxuXG4jID09PT0gRGVzY3JpcHRvciBNb2RpZmljYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgJy4vZGVzY3JpcHRvci1tb2QnXG5cblxuIyA9PT09IE9iamVjdCBjbG9uaW5nID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2Nsb25pbmcnXG5cblxuIyA9PT09IEJpbmRpbmcgQ2FjaGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgJy4vY2FjaGUnXG5cblxuIyA9PT09IFBsYWNlaG9sZGVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi9wbGFjZWhvbGRlcnMnXG5cblxuIyA9PT09IEVycm9ycyArIFdhcm5pbmdzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2Vycm9ycydcblxuXG5cblxuXG5cblxuIiwiY2FjaGVkRXZlbnQgPSBudWxsXG5cbmNoYW5nZUV2ZW50ID0gKCktPlxuXHRpZiBub3QgY2FjaGVkRXZlbnRcblx0XHRldmVudCA9IGNhY2hlZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jylcblx0XHRldmVudC5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIGZhbHNlKVxuXHRcdGV2ZW50Ll9zYiA9IHRydWVcblxuXHRyZXR1cm4gY2FjaGVkRXZlbnQiLCJyZXF1aXJlc0RvbURlc2NyaXB0b3JGaXggPSAoJ2NsYXNzTmFtZScgbm90IG9mIEVsZW1lbnQ6Oikgb3Igbm90IGdldERlc2NyaXB0b3IoRWxlbWVudDo6LCAnY2xhc3NOYW1lJykuZ2V0Iiwid2luZG93UHJvcHNUb0lnbm9yZSA9IFtcblx0J2lubmVyV2lkdGgnXG5cdCdpbm5lckhlaWdodCdcblx0J291dGVyV2lkdGgnXG5cdCdvdXRlckhlaWdodCdcblx0J3Njcm9sbFgnXG5cdCdzY3JvbGxZJ1xuXHQncGFnZVhPZmZzZXQnXG5cdCdwYWdlWU9mZnNldCdcblx0J3NjcmVlblgnXG5cdCdzY3JlZW5ZJ1xuXHQnc2NyZWVuTGVmdCdcblx0J3NjcmVlblRvcCdcbl0iLCJ0YXJnZXRJbmNsdWRlcyA9ICh0YXJnZXQsIGl0ZW0pLT4gdGFyZ2V0IGFuZCB0YXJnZXQuaW5kZXhPZihpdGVtKSBpc250IC0xXG5cbmNoZWNrSWYgPVxuXHRpc0RlZmluZWQ6IChzdWJqZWN0KS0+IHN1YmplY3QgaXNudCB1bmRlZmluZWRcblx0XG5cdGlzQXJyYXk6IChzdWJqZWN0KS0+IHN1YmplY3QgaW5zdGFuY2VvZiBBcnJheVxuXHRcblx0aXNPYmplY3Q6IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdvYmplY3QnIGFuZCBzdWJqZWN0ICMgMm5kIGNoZWNrIGlzIHRvIHRlc3QgYWdhaW5zdCAnbnVsbCcgdmFsdWVzXG5cblx0aXNTdHJpbmc6IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdzdHJpbmcnXG5cdFxuXHRpc051bWJlcjogKHN1YmplY3QpLT4gdHlwZW9mIHN1YmplY3QgaXMgJ251bWJlcidcblx0XG5cdGlzRnVuY3Rpb246IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdmdW5jdGlvbidcblxuXHRpc0JpbmRpbmdJbnRlcmZhY2U6IChzdWJqZWN0KS0+IHN1YmplY3QgaW5zdGFuY2VvZiBCaW5kaW5nSW50ZXJmYWNlXG5cdFxuXHRpc0JpbmRpbmc6IChzdWJqZWN0KS0+IHN1YmplY3QgaW5zdGFuY2VvZiBCaW5kaW5nXG5cblx0aXNJdGVyYWJsZTogKHN1YmplY3QpLT4gY2hlY2tJZi5pc09iamVjdChzdWJqZWN0KSBhbmQgY2hlY2tJZi5pc051bWJlcihzdWJqZWN0Lmxlbmd0aClcblxuXHRpc0RvbTogKHN1YmplY3QpLT4gc3ViamVjdC5ub2RlTmFtZSBhbmQgc3ViamVjdC5ub2RlVHlwZSBpcyAxXG5cblx0aXNEb21JbnB1dDogKHN1YmplY3QpLT5cblx0XHRub2RlTmFtZSA9IHN1YmplY3Qubm9kZU5hbWVcblx0XHRyZXR1cm4gbm9kZU5hbWUgaXMgJ0lOUFVUJyBvciBub2RlTmFtZSBpcyAnVEVYVEFSRUEnIG9yIG5vZGVOYW1lIGlzICdTRUxFQ1QnXG5cblx0aXNEb21SYWRpbzogKHN1YmplY3QpLT4gc3ViamVjdC50eXBlIGlzICdyYWRpbydcblxuXHRpc0RvbUNoZWNrYm94OiAoc3ViamVjdCktPiBzdWJqZWN0LnR5cGUgaXMgJ2NoZWNrYm94J1xuXG5cdGlzRWxDb2xsZWN0aW9uOiAoc3ViamVjdCktPiAoc3ViamVjdCBpbnN0YW5jZW9mIE5vZGVMaXN0KSBvciAoc3ViamVjdCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSBvciAod2luZG93LmpRdWVyeSBhbmQgc3ViamVjdCBpbnN0YW5jZW9mIGpRdWVyeSlcblxuXHRkb21FbHNBcmVTYW1lOiAoaXRlcmFibGUpLT5cblx0XHR0eXBlID0gaXRlcmFibGVbMF0udHlwZVxuXHRcdGl0ZW1zV2l0aFNhbWVUeXBlID0gW10uZmlsdGVyLmNhbGwgaXRlcmFibGUsIChpdGVtKS0+IGl0ZW0udHlwZSBpcyB0eXBlXG5cblx0XHRyZXR1cm4gaXRlbXNXaXRoU2FtZVR5cGUubGVuZ3RoIGlzIGl0ZXJhYmxlLmxlbmd0aFxuXG5cdGlzRG9tTm9kZTogKHN1YmplY3QpLT4gY2hlY2tJZi5pc0RvbShzdWJqZWN0KSBvciBzdWJqZWN0IGlzIHdpbmRvdyBvciBzdWJqZWN0IGlzIGRvY3VtZW50IiwiZmV0Y2hEZXNjcmlwdG9yID0gKG9iamVjdCwgcHJvcGVydHksIGlzUHJvdG8pLT5cblx0ZGVzY3JpcHRvciA9IGdldERlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSlcblx0aWYgZGVzY3JpcHRvclxuXHRcdGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZSBpZiBpc1Byb3RvXG5cdFx0cmV0dXJuIGRlc2NyaXB0b3Jcblx0XG5cdGVsc2UgaWYgb2JqZWN0UHJvdG89T2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdClcblx0XHRyZXR1cm4gZmV0Y2hEZXNjcmlwdG9yKG9iamVjdFByb3RvLCBwcm9wZXJ0eSwgdHJ1ZSlcblxuXG5jb252ZXJ0VG9MaXZlID0gKGJpbmRpbmdJbnN0YW5jZSwgb2JqZWN0LCBvbmx5QXJyYXlNZXRob2RzKS0+XG5cdF8gPSBiaW5kaW5nSW5zdGFuY2Vcblx0Xy5vcmlnRGVzY3JpcHRvciA9IGZldGNoRGVzY3JpcHRvcihvYmplY3QsIF8ucHJvcGVydHkpIGlmIG5vdCBfLm9yaWdEZXNjcmlwdG9yXG5cblx0aWYgb25seUFycmF5TWV0aG9kc1xuXHRcdGFycmF5TXV0YXRvck1ldGhvZHMuZm9yRWFjaCAobWV0aG9kKS0+ICMgVXNpbmcgZm9yRWFjaCBiZWNhdXNlIHdlIG5lZWQgYSBjbG9zdXJlIGhlcmVcblx0XHRcdGRlZmluZVByb3BlcnR5IG9iamVjdCwgbWV0aG9kLCBcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdHZhbHVlOiAoKS0+XG5cdFx0XHRcdFx0cmVzdWx0ID0gQXJyYXk6OlttZXRob2RdLmFwcGx5IG9iamVjdCwgYXJndW1lbnRzXG5cdFx0XHRcdFx0Xy51cGRhdGVBbGxTdWJzKF8pXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdFxuXG5cdGVsc2Vcblx0XHRpZiBfLnR5cGUgaXMgJ1Byb3h5J1xuXHRcdFx0b3JpZ0ZuID0gXy5vcmlnRm4gPSBfLnZhbHVlXG5cdFx0XHRjb250ZXh0ID0gb2JqZWN0XG5cdFx0XHRfLnZhbHVlID0gcmVzdWx0Om51bGwsIGFyZ3M6bnVsbFxuXG5cdFx0XHRpZiBjaGVja0lmLmlzRnVuY3Rpb24ob3JpZ0ZuKVxuXHRcdFx0XHRzbGljZSA9IFtdLnNsaWNlXG5cdFx0XHRcdGdldHRlclZhbHVlID0gcHJveHlGbiA9ICgpLT4gXG5cdFx0XHRcdFx0YXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKVxuXHRcdFx0XHRcdF8udmFsdWUuYXJncyA9IGFyZ3MgPSBpZiBfLnNlbGZUcmFuc2Zvcm0gdGhlbiBfLnNlbGZUcmFuc2Zvcm0oYXJncykgZWxzZSBhcmdzXG5cdFx0XHRcdFx0Xy52YWx1ZS5yZXN1bHQgPSByZXN1bHQgPSBvcmlnRm4uYXBwbHkoY29udGV4dCwgYXJncylcblx0XHRcdFx0XHRfLnVwZGF0ZUFsbFN1YnMoXylcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0XG5cdFx0XHRcdFxuXHRcdFx0XHRkZWZpbmVQcm9wZXJ0eSBvYmplY3QsIF8ucHJvcGVydHksIFxuXHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogXy5pc0xpdmVQcm9wID0gdHJ1ZVxuXHRcdFx0XHRcdGdldDogKCktPiBnZXR0ZXJWYWx1ZVxuXHRcdFx0XHRcdHNldDogKG5ld1ZhbHVlKS0+XG5cdFx0XHRcdFx0XHRpZiBub3QgY2hlY2tJZi5pc0Z1bmN0aW9uKG5ld1ZhbHVlKVxuXHRcdFx0XHRcdFx0XHRnZXR0ZXJWYWx1ZSA9IG5ld1ZhbHVlXG5cblx0XHRcdFx0XHRcdGVsc2UgaWYgbmV3VmFsdWUgaXNudCBvcmlnRm5cblx0XHRcdFx0XHRcdFx0b3JpZ0ZuID0gXy5vcmlnRm4gPSBuZXdWYWx1ZVx0aWYgbmV3VmFsdWUgaXNudCBwcm94eUZuXG5cdFx0XHRcdFx0XHRcdGdldHRlclZhbHVlID0gcHJveHlGblx0XHRcdGlmIGdldHRlclZhbHVlIGlzbnQgcHJveHlGblxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyZXR1cm5cblxuXHRcdFx0XG5cblx0XHRlbHNlIGlmIG5vdCB0YXJnZXRJbmNsdWRlcyhfLnR5cGUsICdET00nKSBhbmQgbm90IChfLm9iamVjdCBpcyB3aW5kb3cgYW5kIHRhcmdldEluY2x1ZGVzKHdpbmRvd1Byb3BzVG9JZ25vcmUsIF8ucHJvcGVydHkpKVxuXHRcdFxuXHRcdFx0IyAnT2JqZWN0UHJvcCcgb3IgJ0FycmF5JyB0eXBlIGJpbmRpbmdzXG5cdFx0XHRwcm9wZXJ0eURlc2NyaXB0b3IgPSBfLm9yaWdEZXNjcmlwdG9yIG9yIGR1bW15UHJvcGVydHlEZXNjcmlwdG9yXG5cdFx0XHRfLm9yaWdHZXR0ZXIgPSBwcm9wZXJ0eURlc2NyaXB0b3IuZ2V0LmJpbmQob2JqZWN0KSBpZiBwcm9wZXJ0eURlc2NyaXB0b3IuZ2V0XG5cdFx0XHRfLm9yaWdTZXR0ZXIgPSBwcm9wZXJ0eURlc2NyaXB0b3Iuc2V0LmJpbmQob2JqZWN0KSBpZiBwcm9wZXJ0eURlc2NyaXB0b3Iuc2V0XG5cdFx0XHRzaG91bGRXcml0ZUxpdmVQcm9wID0gcHJvcGVydHlEZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZVxuXG5cdFx0XHRzaG91bGRXcml0ZUxpdmVQcm9wID0gc2hvdWxkV3JpdGVMaXZlUHJvcCBhbmQgb2JqZWN0LmNvbnN0cnVjdG9yIGlzbnQgQ1NTU3R5bGVEZWNsYXJhdGlvblxuXHRcdFx0aW1wb3J0ICcuL3dlYmtpdERvbURlc2NyaXB0b3JGaXgnXG5cdFx0XHRcblx0XHRcdGlmIHNob3VsZFdyaXRlTGl2ZVByb3Bcblx0XHRcdFx0dHlwZUlzQXJyYXkgPSBfLnR5cGUgaXMgJ0FycmF5J1xuXHRcdFx0XHRzaG91bGRJbmRpY2F0ZVVwZGF0ZUlzRnJvbVNlbGYgPSBub3QgXy5vcmlnU2V0dGVyIGFuZCBub3QgdHlwZUlzQXJyYXlcblx0XHRcdFx0XG5cdFx0XHRcdGRlZmluZVByb3BlcnR5IG9iamVjdCwgXy5wcm9wZXJ0eSxcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IF8uaXNMaXZlUHJvcCA9IHRydWVcblx0XHRcdFx0XHRlbnVtZXJhYmxlOiBwcm9wZXJ0eURlc2NyaXB0b3IuZW51bWVyYWJsZVxuXHRcdFx0XHRcdGdldDogXy5vcmlnR2V0dGVyIG9yICgpLT4gXy52YWx1ZVxuXHRcdFx0XHRcdHNldDogKG5ld1ZhbHVlKS0+IF8uc2V0VmFsdWUobmV3VmFsdWUsIF8sIHNob3VsZEluZGljYXRlVXBkYXRlSXNGcm9tU2VsZik7IHJldHVyblxuXG5cdFx0XHRcblx0XHRcdFx0aWYgdHlwZUlzQXJyYXlcblx0XHRcdFx0XHRjb252ZXJ0VG9MaXZlKF8sIG9iamVjdFtfLnByb3BlcnR5XSwgdHJ1ZSlcblxuXHRyZXR1cm5cblxuXG5cblxuXG5jb252ZXJ0VG9SZWcgPSAoYmluZGluZ0luc3RhbmNlLCBvYmplY3QsIG9ubHlBcnJheU1ldGhvZHMpLT5cblx0aWYgb25seUFycmF5TWV0aG9kc1xuXHRcdGRlbGV0ZSBvYmplY3RbbWV0aG9kXSBmb3IgbWV0aG9kIGluIGFycmF5TXV0YXRvck1ldGhvZHNcblx0ZWxzZVxuXHRcdF8gPSBiaW5kaW5nSW5zdGFuY2Vcblx0XHRuZXdEZXNjcmlwdG9yID0gXy5vcmlnRGVzY3JpcHRvclxuXHRcdG5ld0Rlc2NyaXB0b3IudmFsdWUgPSAoXy5vcmlnRm4gb3IgXy52YWx1ZSkgdW5sZXNzIG5ld0Rlc2NyaXB0b3Iuc2V0IG9yIG5ld0Rlc2NyaXB0b3IuZ2V0XG5cdFx0ZGVmaW5lUHJvcGVydHkgb2JqZWN0LCBfLnByb3BlcnR5LCBuZXdEZXNjcmlwdG9yXG5cblxuXG4iLCIjIyMqXG4gKiBUaGVyZSBpcyBhIGJ1ZyBpbiB3ZWJraXQvYmxpbmsgZW5naW5lcyBpbiB3aGljaCBuYXRpdmUgYXR0cmlidXRlcy9wcm9wZXJ0aWVzIFxuICogb2YgRE9NIGVsZW1lbnRzIGFyZSBub3QgZXhwb3NlZCBvbiB0aGUgZWxlbWVudCdzIHByb3RvdHlwZSBhbmQgaW5zdGVhZCBpc1xuICogZXhwb3NlZCBkaXJlY3RseSBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZTsgd2hlbiBsb29raW5nIHVwIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yXG4gKiBvZiB0aGUgZWxlbWVudCBhIGRhdGEgZGVzY3JpcHRvciBpcyByZXR1cm5lZCBpbnN0ZWFkIG9mIGFuIGFjY2Vzc29yIGRlc2NyaXB0b3JcbiAqIChpLmUuIGRlc2NyaXB0b3Igd2l0aCBnZXR0ZXIvc2V0dGVyKSB3aGljaCBtZWFucyB3ZSBhcmUgbm90IGFibGUgdG8gZGVmaW5lIG91clxuICogb3duIHByb3h5IGdldHRlci9zZXR0ZXJzLiBUaGlzIHdhcyBmaXhlZCBvbmx5IGluIEFwcmlsIDIwMTUgaW4gQ2hyb21lIHY0MyBhbmRcbiAqIFNhZmFyaSB2MTAuIEFsdGhvdWdoIHdlIHdvbid0IGJlIGFibGUgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gdGhlIG9iamVjdHMgZ2V0XG4gKiB0aGVpciB2YWx1ZXMgc2V0LCB3ZSB3b3VsZCBhdCBsZWFzdCBwcm92aWRlIHdvcmtpbmcgZnVuY3Rpb25hbGl0eSBsYWNraW5nIHVwZGF0ZVxuICogbGlzdGVuZXJzLiBTaW5jZSB2MS4xNC4wIEhUTUxJbnB1dEVsZW1lbnQ6OnZhbHVlIGJpbmRpbmdzIGludm9rZSB0aGUgb3JpZ2luYWxcbiAqIGdldHRlciBhbmQgc2V0dGVyIG1ldGhvZHMgaW4gQmluZGluZzo6c2V0VmFsdWUoKSwgYW5kIHNpbmNlIHdlIHdhbnQgdG8gYXZvaWRcbiAqIGluY3JlYXNpbmcgdGhlIGFtb3VudCBvZiBsb2dpYyBwcmVzZW50IGluIEJpbmRpbmc6OnNldFZhbHVlKCkgZm9yIHBlcmZvcm1hbmNlXG4gKiByZWFzb25zLCB3ZSBwYXRjaCB0aG9zZSBzZXR0ZXJzIGhlcmUuIFdlIGNsb25lIHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgY2hlY2sgZm9yXG4gKiB0aGUgZXhpc3RlbmNlIG9mIHRoZSB0YXJnZXQgcHJvcGVydHkgLSBpZiBpdCBleGlzdHMgdGhlbiBpdCBpbmRpY2F0ZXMgdGhlIHRhcmdldFxuICogcHJvcGVydHkgaXMgYSBuYXRpdmUgcHJvcGVydHkgKHNpbmNlIG9ubHkgbmF0aXZlIHByb3BlcnRpZXMgYXJlIGNvcGllZCBvdmVyIGluXG4gKiBFbGVtZW50OjpjbG9uZU5vZGUpLiBUaGlzIHBhdGNoaW5nIGlzIG9ubHkgZm9yIG5hdGl2ZSBwcm9wZXJ0aWVzLlxuICpcbiAqIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00OTczOVxuICogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc1Mjk3XG4gKiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00MzM5NFxuICogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDMxNDkyXG4gKiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMzE3NVxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNS8wNC9ET00tYXR0cmlidXRlcy1ub3ctb24tdGhlLXByb3RvdHlwZS1jaGFpblxuIyMjXG5cbmlmIHJlcXVpcmVzRG9tRGVzY3JpcHRvckZpeCBhbmQgXy5pc0RvbSBhbmQgXy5wcm9wZXJ0eSBvZiBvYmplY3QuY2xvbmVOb2RlKGZhbHNlKVxuXHRfLm9yaWdEZXNjcmlwdG9yID0gc2hvdWxkV3JpdGVMaXZlUHJvcCA9IGZhbHNlXG5cdF8uaXNMaXZlUHJvcCA9IHRydWVcblx0Xy5vcmlnR2V0dGVyID0gKCktPiBfLm9iamVjdFtfLnByb3BlcnR5XVxuXHRfLm9yaWdTZXR0ZXIgPSAobmV3VmFsdWUpLT4gXy5vYmplY3RbXy5wcm9wZXJ0eV0gPSBuZXdWYWx1ZSIsImNsb25lT2JqZWN0ID0gKG9iamVjdCktPlxuXHRjbG9uZSA9IGdlbk9iaigpXG5cdGNsb25lW2tleV0gPSBvYmplY3Rba2V5XSBmb3Iga2V5IG9mIG9iamVjdFxuXHRyZXR1cm4gY2xvbmVcblxuZXh0ZW5kU3RhdGUgPSAoYmFzZSwgc3RhdGVUb0luaGVyaXQpLT5cblx0c3RhdGVNYXBwaW5nID0gT2JqZWN0LmtleXMoc3RhdGVUb0luaGVyaXQpXG5cdGJhc2Vba2V5XSA9IHN0YXRlVG9Jbmhlcml0W2tleV0gZm9yIGtleSBpbiBzdGF0ZU1hcHBpbmdcblx0cmV0dXJuXG4iLCJjYWNoZSA9XHRcblx0Z2V0OiAob2JqZWN0LCBpc0Z1bmN0aW9uLCBzZWxlY3RvciwgaXNNdWx0aUNob2ljZSktPlxuXHRcdGlmIGlzRnVuY3Rpb25cblx0XHRcdHJldHVybiBib3VuZEluc3RhbmNlc1tvYmplY3QuX3NiX0lEXVxuXHRcdGVsc2Vcblx0XHRcdGlmIGlzTXVsdGlDaG9pY2UgYW5kIG9iamVjdFswXS5fc2JfbWFwXG5cdFx0XHRcdHNhbXBsZUl0ZW0gPSBib3VuZEluc3RhbmNlc1sgb2JqZWN0WzBdLl9zYl9tYXBbc2VsZWN0b3JdIF1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBzYW1wbGVJdGVtLmdyb3VwQmluZGluZyBpZiBzYW1wbGVJdGVtLmdyb3VwQmluZGluZ1xuXG5cdFx0XHRpZiBvYmplY3QuX3NiX21hcCBhbmQgb2JqZWN0Ll9zYl9tYXBbc2VsZWN0b3JdXG5cdFx0XHRcdHJldHVybiBib3VuZEluc3RhbmNlc1sgb2JqZWN0Ll9zYl9tYXBbc2VsZWN0b3JdIF1cblxuXG5cdHNldDogKEIsIGlzRnVuY3Rpb24pLT4gIyBCID09PT0gQmluZGluZyBPYmplY3Rcblx0XHRpZiBpc0Z1bmN0aW9uXG5cdFx0XHRkZWZpbmVQcm9wZXJ0eSBCLm9iamVjdCwgJ19zYl9JRCcsIHsnY29uZmlndXJhYmxlJzp0cnVlLCAndmFsdWUnOkIuSUR9XG5cblx0XHRlbHNlXG5cdFx0XHRzZWxlY3RvciA9IEIuc2VsZWN0b3JcblxuXHRcdFx0aWYgQi5vYmplY3QuX3NiX21hcFxuXHRcdFx0XHRCLm9iamVjdC5fc2JfbWFwW3NlbGVjdG9yXSA9IEIuSURcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHNNYXAgPSB7fVxuXHRcdFx0XHRwcm9wc01hcFtzZWxlY3Rvcl0gPSBCLklEXG5cdFx0XHRcdFxuXHRcdFx0XHRkZWZpbmVQcm9wZXJ0eSBCLm9iamVjdCwgJ19zYl9tYXAnLCB7J2NvbmZpZ3VyYWJsZSc6dHJ1ZSwgJ3ZhbHVlJzpwcm9wc01hcH1cblx0XHRyZXR1cm4iLCJlc2NhcGVSZWdFeCA9IC9bLiorP14ke30oKXxbXFxdXFxcXF0vZ1xucGhvbGRlclJlZ0V4ID0gcGhvbGRlclJlZ0V4U3BsaXQgPSBudWxsXG5cbnNldFBob2xkZXJSZWdFeCA9ICgpLT5cblx0c3RhcnQgPSBzZXR0aW5ncy5wbGFjZWhvbGRlclswXS5yZXBsYWNlKGVzY2FwZVJlZ0V4LCAnXFxcXCQmJylcblx0ZW5kID0gc2V0dGluZ3MucGxhY2Vob2xkZXJbMV0ucmVwbGFjZShlc2NhcGVSZWdFeCwgJ1xcXFwkJicpXG5cdG1pZGRsZSA9IFwiW14je2VuZH1dK1wiXG5cdHBob2xkZXJSZWdFeCA9IG5ldyBSZWdFeHAoXCIje3N0YXJ0fSgje21pZGRsZX0pI3tlbmR9XCIsICdnJylcblx0cGhvbGRlclJlZ0V4U3BsaXQgPSBuZXcgUmVnRXhwKFwiI3tzdGFydH0je21pZGRsZX0je2VuZH1cIiwgJ2cnKVxuXHRyZXR1cm5cblxuc2V0UGhvbGRlclJlZ0V4KCkgIyBDcmVhdGUgdGhlIHJlZ0V4IG9uIGluaXRcblxuXG5cbmFwcGx5UGxhY2Vob2xkZXJzID0gKGNvbnRleHRzLCB2YWx1ZXMsIGluZGV4TWFwKS0+XG5cdG91dHB1dCA9ICcnXG5cdGZvciBjb250ZXh0UGFydCxpbmRleCBpbiBjb250ZXh0c1xuXHRcdG91dHB1dCArPSBjb250ZXh0UGFydFxuXHRcdG91dHB1dCArPSB2YWx1ZXNbaW5kZXhNYXBbaW5kZXhdXSBpZiBpbmRleE1hcFtpbmRleF1cblx0XG5cdHJldHVybiBvdXRwdXRcblxuXG50ZXh0Q29udGVudCA9ICd0ZXh0Q29udGVudCdcblxuYWRkVG9Ob2RlU3RvcmUgPSAobm9kZVN0b3JlLCBub2RlLCB0YXJnZXRQbGFjZWhvbGRlciktPlxuXHRub2RlU3RvcmVbdGFyZ2V0UGxhY2Vob2xkZXJdID89IFtdXG5cdG5vZGVTdG9yZVt0YXJnZXRQbGFjZWhvbGRlcl0ucHVzaChub2RlKVxuXHRyZXR1cm5cblxuXG5zY2FuVGV4dE5vZGVzUGxhY2Vob2xkZXJzID0gKGVsZW1lbnQsIG5vZGVTdG9yZSktPlxuXHRjaGlsZE5vZGVzID0gQXJyYXk6OnNsaWNlLmNhbGwoZWxlbWVudC5jaGlsZE5vZGVzKVxuXHRmb3Igbm9kZSBpbiBjaGlsZE5vZGVzXG5cdFx0aWYgbm9kZS5ub2RlVHlwZSBpc250IDMgXG5cdFx0XHRzY2FuVGV4dE5vZGVzUGxhY2Vob2xkZXJzKG5vZGUsIG5vZGVTdG9yZSlcblx0XHRcblx0XHRlbHNlIGlmIG5vZGVbdGV4dENvbnRlbnRdLm1hdGNoKHBob2xkZXJSZWdFeFNwbGl0KVxuXHRcdFx0dGV4dFBpZWNlcyA9IG5vZGVbdGV4dENvbnRlbnRdLnNwbGl0KHBob2xkZXJSZWdFeClcblxuXHRcdFx0aWYgdGV4dFBpZWNlcy5sZW5ndGggaXMgMyBhbmQgdGV4dFBpZWNlc1swXSt0ZXh0UGllY2VzWzJdIGlzICcnICMgVGhlIGVudGlyZSB0ZXh0Tm9kZSBpcyBqdXN0IHRoZSBwbGFjZWhvbGRlclxuXHRcdFx0XHRhZGRUb05vZGVTdG9yZShub2RlU3RvcmUsIG5vZGUsIHRleHRQaWVjZXNbMV0pXG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5ld0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cblx0XHRcdFx0Zm9yIHRleHRQaWVjZSxpbmRleCBpbiB0ZXh0UGllY2VzXG5cdFx0XHRcdFx0bmV3Tm9kZSA9IG5ld0ZyYWdtZW50LmFwcGVuZENoaWxkIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRQaWVjZSlcblx0XHRcdFx0XHRpZiBpbmRleCAlIDIgIyBpcyBhbiBvZGQgaW5kZXgsIGluZGljYXRpbmcgdGhhdCBiZWZvcmUgdGhpcyB0ZXh0IHBpZWNlIHNob3VsZCBjb21lIGEgcGxhY2Vob2xkZXIgbm9kZVxuXHRcdFx0XHRcdFx0YWRkVG9Ob2RlU3RvcmUobm9kZVN0b3JlLCBuZXdOb2RlLCB0ZXh0UGllY2UpXG5cblx0XHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdGcmFnbWVudCwgbm9kZSlcblxuXHRyZXR1cm5cblxuXG5cbiIsInRocm93RXJyb3IgPSAoZXJyb3JOYW1lKS0+XG5cdHRocm93IG5ldyBFcnJvciAnU2ltcGx5QmluZDogJysoZXJyb3JzW2Vycm9yTmFtZV0gb3IgZXJyb3JOYW1lKVxuXG50aHJvd1dhcm5pbmcgPSAod2FybmluZ05hbWUsIGRlcHRoKS0+IHVubGVzcyBzZXR0aW5ncy5zaWxlbnRcblx0ZXJyU291cmNlID0gZ2V0RXJyU291cmNlKGRlcHRoKVxuXHR3YXJuID0gZXJyb3JzW3dhcm5pbmdOYW1lXVxuXHR3YXJuICs9IFwiXFxuXFxuXCIrZXJyU291cmNlXG5cdGNvbnNvbGUud2FybignU2ltcGx5QmluZDogJyt3YXJuKVxuXHRyZXR1cm5cblxudGhyb3dFcnJvckJhZEFyZyA9IChhcmcpLT5cblx0dGhyb3dFcnJvciBcIkludmFsaWQgYXJndW1lbnQvcyAoI3thcmd9KVwiLCB0cnVlXG5cdHJldHVyblxuXG5nZXRFcnJTb3VyY2UgPSAoZGVwdGgpLT5cblx0KChuZXcgRXJyb3IpLnN0YWNrIG9yICcnKVxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQuc2xpY2UoZGVwdGgrMylcblx0XHQuam9pbignXFxuJylcblxuXG4iLCJlcnJvcnMgPSBcblx0aW52YWxpZFBhcmFtTmFtZTogXCJTaW1wbHlCaW5kKCkgYW5kIC50bygpIG9ubHkgYWNjZXB0IGEgZnVuY3Rpb24sIGFuIGFycmF5LCBhIGJvdW5kIG9iamVjdCwgYSBzdHJpbmcsIG9yIGEgbnVtYmVyLlwiXG5cdGZuT25seTogXCJPbmx5IGZ1bmN0aW9ucyBhcmUgYWxsb3dlZCBmb3IgLnRyYW5zZm9ybS8uY29uZGl0aW9uL0FsbCgpXCJcblx0YmFkRXZlbnRBcmc6IFwiSW52YWxpZCBhcmd1bWVudCBudW1iZXIgaW4gLm9mRXZlbnQoKVwiXG5cdGVtcHR5TGlzdDogXCJFbXB0eSBjb2xsZWN0aW9uIHByb3ZpZGVkXCJcblx0XG5cdG9ubHlPbmVET01FbGVtZW50OiBcIllvdSBjYW4gb25seSBwYXNzIGEgc2luZ2xlIERPTSBlbGVtZW50IHRvIGEgYmluZGluZ1wiXG5cdG1peGVkRWxMaXN0OiBcIidjaGVja2VkJyBvZiBNaXhlZCBsaXN0IG9mIGVsZW1lbnQgY2Fubm90IGJlIGJvdW5kXCJcbiIsIlNpbXBseUJpbmQgPSAoc3ViamVjdCwgb3B0aW9ucywgc2F2ZU9wdGlvbnMsIGlzU3ViLCBjb21wbGV0ZUNhbGxiYWNrKS0+XG5cdGlmICghc3ViamVjdCBhbmQgc3ViamVjdCBpc250IDApIG9yICghY2hlY2tJZi5pc1N0cmluZyhzdWJqZWN0KSBhbmQgIWNoZWNrSWYuaXNOdW1iZXIoc3ViamVjdCkgYW5kICFjaGVja0lmLmlzRnVuY3Rpb24oc3ViamVjdCkgYW5kIHN1YmplY3Qgbm90IGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0dGhyb3dFcnJvcignaW52YWxpZFBhcmFtTmFtZScpIHVubGVzcyBjaGVja0lmLmlzQmluZGluZ0ludGVyZmFjZShzdWJqZWN0KVxuXG5cdGlmIGNoZWNrSWYuaXNPYmplY3Qoc3ViamVjdCkgYW5kIHN1YmplY3Qgbm90IGluc3RhbmNlb2YgQXJyYXkgIyBJbmRpY2F0ZXMgaXQncyBhIEJpbmRpbmcgaW5zdGFuY2Ugb2JqZWN0IGR1ZSB0byB0aGUgYWJvdmUgY2hlY2tcblx0XHRpbnRlcmZhY2VUb1JldHVybiA9IGlmIGNvbXBsZXRlQ2FsbGJhY2sgdGhlbiBjb21wbGV0ZUNhbGxiYWNrKHN1YmplY3QpIGVsc2Ugc3ViamVjdC5zZWxmQ2xvbmUoKVxuXHRcblx0ZWxzZVxuXHRcdG5ld0ludGVyZmFjZSA9IG5ldyBCaW5kaW5nSW50ZXJmYWNlKG9wdGlvbnMpXG5cdFx0bmV3SW50ZXJmYWNlLnNhdmVPcHRpb25zID0gc2F2ZU9wdGlvbnNcblx0XHRuZXdJbnRlcmZhY2UuaXNTdWIgPSBpc1N1YlxuXHRcdG5ld0ludGVyZmFjZS5jb21wbGV0ZUNhbGxiYWNrID0gY29tcGxldGVDYWxsYmFja1xuXG5cdFx0aWYgY2hlY2tJZi5pc0Z1bmN0aW9uKHN1YmplY3QpXG5cdFx0XHRpbnRlcmZhY2VUb1JldHVybiA9IG5ld0ludGVyZmFjZS5zZXRPYmplY3Qoc3ViamVjdCwgdHJ1ZSlcblx0XHRlbHNlXG5cdFx0XHRpbnRlcmZhY2VUb1JldHVybiA9IG5ld0ludGVyZmFjZS5zZXRQcm9wZXJ0eShzdWJqZWN0KVxuXG5cdHJldHVybiBpbnRlcmZhY2VUb1JldHVyblxuXG5cblxuXG5pbXBvcnQgJy4vbWV0aG9kcyciLCJTaW1wbHlCaW5kLnZlcnNpb24gPSBpbXBvcnQgJy4uLy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nXG5TaW1wbHlCaW5kLnNldHRpbmdzID0gc2V0dGluZ3NcblNpbXBseUJpbmQuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uc1xuXG5cblxuU2ltcGx5QmluZC51bkJpbmRBbGwgPSAob2JqZWN0LCBib3RoV2F5cyktPlxuXHRpZiBvYmplY3QgYW5kIChjaGVja0lmLmlzT2JqZWN0KG9iamVjdCkgb3IgY2hlY2tJZi5pc0Z1bmN0aW9uKG9iamVjdCkpXG5cdFx0aW1wb3J0ICcuL21ldGhvZHMudW5CaW5kQWxsLXBhcnNlRE9NT2JqZWN0LmNvZmZlZSdcblx0XHRwcm9wTWFwID0gb2JqZWN0Ll9zYl9tYXBcdFx0XG5cblx0XHRpZiBvYmplY3QuX3NiX0lEXG5cdFx0XHRib3VuZEluc3RhbmNlc1tvYmplY3QuX3NiX0lEXS5yZW1vdmVBbGxTdWJzKGJvdGhXYXlzKVxuXHRcdFxuXHRcdGlmIHByb3BNYXBcblx0XHRcdGJvdW5kSW5zdGFuY2VzW2JvdW5kSURdLnJlbW92ZUFsbFN1YnMoYm90aFdheXMpIGZvciBwcm9wLCBib3VuZElEIG9mIHByb3BNYXBcblxuXHRyZXR1cm5cblxuIiwie1xuICBcIl9hcmdzXCI6IFtcbiAgICBbXG4gICAgICBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kQDEuMTUuOFwiLFxuICAgICAgXCIvVXNlcnMvZGFuaWVsa2FsZW4vc2FuZGJveC9kYXRhX3RhYmxlXCJcbiAgICBdXG4gIF0sXG4gIFwiX2Zyb21cIjogXCJAZGFuaWVsa2FsZW4vc2ltcGx5YmluZEAxLjE1LjhcIixcbiAgXCJfaWRcIjogXCJAZGFuaWVsa2FsZW4vc2ltcGx5YmluZEAxLjE1LjhcIixcbiAgXCJfaW5CdW5kbGVcIjogZmFsc2UsXG4gIFwiX2ludGVncml0eVwiOiBcInNoYTUxMi1ya2wrd0hiYkNvUG8yQTNWTkRBdDV1eVZYK2xCSG9lTlpmREFvSVZOc2xSRVVBRjlaS2tQNnNZcDl5cUZMTlkzam1yOGwreXlNcU1Hc3hxQlpHejU4dz09XCIsXG4gIFwiX2xvY2F0aW9uXCI6IFwiL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCIsXG4gIFwiX3BoYW50b21DaGlsZHJlblwiOiB7fSxcbiAgXCJfcmVxdWVzdGVkXCI6IHtcbiAgICBcInR5cGVcIjogXCJ2ZXJzaW9uXCIsXG4gICAgXCJyZWdpc3RyeVwiOiB0cnVlLFxuICAgIFwicmF3XCI6IFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRAMS4xNS44XCIsXG4gICAgXCJuYW1lXCI6IFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRcIixcbiAgICBcImVzY2FwZWROYW1lXCI6IFwiQGRhbmllbGthbGVuJTJmc2ltcGx5YmluZFwiLFxuICAgIFwic2NvcGVcIjogXCJAZGFuaWVsa2FsZW5cIixcbiAgICBcInJhd1NwZWNcIjogXCIxLjE1LjhcIixcbiAgICBcInNhdmVTcGVjXCI6IG51bGwsXG4gICAgXCJmZXRjaFNwZWNcIjogXCIxLjE1LjhcIlxuICB9LFxuICBcIl9yZXF1aXJlZEJ5XCI6IFtcbiAgICBcIi9cIlxuICBdLFxuICBcIl9yZXNvbHZlZFwiOiBcImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kLy0vc2ltcGx5YmluZC0xLjE1LjgudGd6XCIsXG4gIFwiX3NwZWNcIjogXCIxLjE1LjhcIixcbiAgXCJfd2hlcmVcIjogXCIvVXNlcnMvZGFuaWVsa2FsZW4vc2FuZGJveC9kYXRhX3RhYmxlXCIsXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJkYW5pZWxrYWxlblwiXG4gIH0sXG4gIFwiYnJvd3NlclwiOiB7XG4gICAgXCIuL2Rpc3Qvc2ltcGx5YmluZC5ub2RlLmRlYnVnLmpzXCI6IFwic3JjL2luZGV4LmNvZmZlZVwiLFxuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3Qvc2ltcGx5YmluZC5kZWJ1Zy5qc1wiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9pc3N1ZXNcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7fSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZ2ljYWxseSBzaW1wbGUsIGZyYW1ld29yay1sZXNzIG9uZS13YXkvdHdvLXdheSBkYXRhIGJpbmRpbmcgZm9yIGZyb250ZW5kL2JhY2tlbmQgaW4gfjVrYi5cIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy41LjBcIixcbiAgICBcImNvZmZlZS1zY3JpcHRcIjogXCJeMS4xMi42XCIsXG4gICAgXCJmcy1qZXRwYWNrXCI6IFwiXjAuMTMuMVwiLFxuICAgIFwicHJvbWlzZS1icmVha1wiOiBcIl4wLjEuMVwiLFxuICAgIFwic2VtdmVyXCI6IFwiXjUuMy4wXCIsXG4gICAgXCJzaW1wbHlpbXBvcnRcIjogXCJeNC4wLjAtczRcIixcbiAgICBcInNpbXBseXdhdGNoXCI6IFwiXjMuMC4wLWwyXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zaW1wbHliaW5kI3JlYWRtZVwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImJpbmRcIixcbiAgICBcImJpbmRpbmdcIixcbiAgICBcImRvbS1iaW5kaW5nXCIsXG4gICAgXCJvbmUtd2F5XCIsXG4gICAgXCJ0d28td2F5XCJcbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwibWFpblwiOiBcImRpc3Qvc2ltcGx5YmluZC5ub2RlLmRlYnVnLmpzXCIsXG4gIFwibmFtZVwiOiBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL3NpbXBseWJpbmQuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJlbmNobWFya3NcIjogXCJjYWtlIGluc3RhbGw6YmVuY2g7IG5wbSBydW4gYmVuY2htYXJrczpidWlsZCAmJiBucG0gcnVuIGJlbmNobWFya3M6c2VydmVcIixcbiAgICBcImJlbmNobWFya3M6YnVpbGRcIjogXCJiZW5jaG1hcmtzIGJ1aWxkIC1zIGJlbmNobWFya3Mvc3JjIC1kIGJlbmNobWFya3MvZGVzdFwiLFxuICAgIFwiYmVuY2htYXJrczpydW5cIjogXCJiZW5jaG1hcmtzIHJ1biAtZCBiZW5jaG1hcmtzL2Rlc3RcIixcbiAgICBcImJlbmNobWFya3M6c2VydmVcIjogXCJiZW5jaG1hcmtzIHNlcnZlIC1kIGJlbmNobWFya3MvZGVzdFwiLFxuICAgIFwiYmVuY2htYXJrczp1cGRhdGVcIjogXCJjYWtlIGluc3RhbGw6YmVuY2g7IGNha2UgdXBkYXRlU0JCZW5jaDsgbnBtIHJ1biBiZW5jaG1hcmtzOmJ1aWxkXCIsXG4gICAgXCJidWlsZFwiOiBcImNha2UgLWQgYnVpbGQgJiYgY2FrZSBidWlsZCAmJiBjYWtlIG1lYXN1cmUgJiYgY3AgLXIgYnVpbGQvKiBkaXN0L1wiLFxuICAgIFwiY292ZXJhZ2VcIjogXCJjYWtlIGluc3RhbGw6Y292ZXJhZ2U7IG5wbSBydW4gY292ZXJhZ2U6cnVuICYmIG5wbSBydW4gY292ZXJhZ2U6YmFkZ2VcIixcbiAgICBcImNvdmVyYWdlOmJhZGdlXCI6IFwiYmFkZ2UtZ2VuIC1kIC4vLmNvbmZpZy9iYWRnZXMvY292ZXJhZ2VcIixcbiAgICBcImNvdmVyYWdlOnJ1blwiOiBcImlzdGFuYnVsIGNvdmVyIC0tZGlyIGNvdmVyYWdlL25vZGUgbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gLXUgdGRkIC1iIHRlc3QvdGVzdEhlbHBlcnMuanMgdGVzdC90ZXN0LmpzXCIsXG4gICAgXCJwb3N0cHVibGlzaFwiOiBcImdpdCBwdXNoXCIsXG4gICAgXCJwb3N0dmVyc2lvblwiOiBcIm5wbSBydW4gYnVpbGQgJiYgbnBtIHJ1biBiZW5jaG1hcmtzOnVwZGF0ZSAmJiBnaXQgYWRkIC4gJiYgZ2l0IGNvbW1pdCAtYSAtbSAnW0J1aWxkXSdcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwibnBtIHJ1biB0ZXN0XCIsXG4gICAgXCJ0ZXN0XCI6IFwibnBtIHJ1biB0ZXN0Om5vZGUgLXMgJiYgbnBtIHJ1biB0ZXN0OmJyb3dzZXIgLXMgJiYgbnBtIHJ1biB0ZXN0Om1pbmlmaWVkIC1zXCIsXG4gICAgXCJ0ZXN0OmJyb3dzZXJcIjogXCJjYWtlIGluc3RhbGw6a2FybWE7IGthcm1hIHN0YXJ0IC0tc2luZ2xlLXJ1biAtLWJyb3dzZXJzIEVsZWN0cm9uIC5jb25maWcva2FybWEuY29uZi5jb2ZmZWVcIixcbiAgICBcInRlc3Q6YnJvd3Nlcjpsb2NhbFwiOiBcImNha2UgaW5zdGFsbDp0ZXN0OyBvcGVuIHRlc3QvdGVzdHJ1bm5lci5odG1sXCIsXG4gICAgXCJ0ZXN0Omthcm1hXCI6IFwiY2FrZSBpbnN0YWxsOmthcm1hOyBrYXJtYSBzdGFydCAuY29uZmlnL2thcm1hLmNvbmYuY29mZmVlXCIsXG4gICAgXCJ0ZXN0Om1pbmlmaWVkXCI6IFwibWluaWZpZWQ9MSBucG0gcnVuIHRlc3Q6YnJvd3NlciAtcyB8fCB0cnVlXCIsXG4gICAgXCJ0ZXN0Om5vZGVcIjogXCJjYWtlIGluc3RhbGw6dGVzdDsgbW9jaGEgLXUgdGRkIC0tY29tcGlsZXJzIGNvZmZlZTpjb2ZmZWUtcmVnaXN0ZXIgdGVzdC9ub2RlLmNvZmZlZVwiLFxuICAgIFwidGVzdDpzYXVjZVwiOiBcImNha2UgaW5zdGFsbDprYXJtYTsgc2F1Y2U9MSBrYXJtYSBzdGFydCAuY29uZmlnL2thcm1hLmNvbmYuY29mZmVlXCIsXG4gICAgXCJ3YXRjaFwiOiBcImNha2UgLWQgd2F0Y2hcIlxuICB9LFxuICBcInNpbXBseWltcG9ydFwiOiB7XG4gICAgXCJmaW5hbFRyYW5zZm9ybVwiOiBbXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc3VwZXJcIixcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1yZW5hbWVcIixcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1zaW1wbGVcIlxuICAgIF1cbiAgfSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4xNS44XCJcbn1cbiIsIiMjIypcbiAqIENvbmRpdGlvbmFsIENoZWNrczpcbiAqXG4gKiAxKSBNYWtlIHN1cmUgdGhlIHN1YmplY3Qgb2JqZWN0IGlzIGl0ZXJhYmxlIChhbmQgdGh1cyBhIHBvc3NpYmxlIGNhbmRpZGF0ZSBmb3IgYmVpbmcgYW4gZWxlbWVudCBjb2xsZWN0aW9uKVxuICogMikgTWFrZSBzdXJlIHRoZSBzdWJqZWN0IG9iamVjdCBpc24ndCBhbiBhcnJheSBiaW5kaW5nIChzaW5jZSBlbGVtZW50IGNvbGxlY3Rpb24gb2JqZWN0cyBkb24ndCBnZXQgZGlyZWN0bHkgYm91bmQpXG4gKiAzKSBNYWtlIHN1cmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24gaXMgYSB2YWxpZCBvYmplY3QgKGkuZS4gaXNuJ3QgdW5kZWZpbmVkIGFuZCBpc24ndCBudWxsKVxuICogNCkgTWFrZSBzdXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIGEgRE9NIG9iamVjdFxuIyMjXG5pZiBjaGVja0lmLmlzSXRlcmFibGUob2JqZWN0KSBhbmQgbm90IG9iamVjdC5fc2JfSUQgYW5kIG9iamVjdFswXSBhbmQgKGNoZWNrSWYuaXNEb20ob2JqZWN0WzBdKSlcblx0b2JqZWN0ID0gb2JqZWN0WzBdIiwiQmluZGluZyA9IChvYmplY3QsIHR5cGUsIHN0YXRlKS0+XG5cdGV4dGVuZFN0YXRlKEAsIHN0YXRlKVxuXHRAb3B0aW9uc0RlZmF1bHQgPSBpZiBAc2F2ZU9wdGlvbnMgdGhlbiBAb3B0aW9ucyBlbHNlIGRlZmF1bHRPcHRpb25zXG5cdEB0eXBlID0gdHlwZVx0XHRcdFx0XHRcdFx0IyBPYmplY3RQcm9wIHwgQXJyYXkgfCBGdW5jIHwgUHJveHkgfCBFdmVudCB8IFBob2xkZXIgfCBET01BdHRyIHwgRE9NQ2hlY2tib3ggfCBET01SYWRpb1xuXHRAb2JqZWN0ID0gb2JqZWN0IFx0XHRcdFx0XHRcdCMgVGhlIHN1YmplY3Qgb2JqZWN0IG9mIHRoaXMgYmluZGluZywgaS5lLiBmdW5jdGlvbiwgYXJyYXksIHt9LCBET00gZWwsIGV0Yy5cblx0QElEID0gZ2VuSUQoKSBcdFx0XHRcdFx0XHRcdCMgQXNzaWduZWQgb25seSBhZnRlciBwYXNzaW5nIGEgdmFsaWQgb2JqZWN0IHRvIC5vZigpXG5cdEBzdWJzID0gW11cdFx0XHRcdFx0XHRcdFx0IyBTdWJzY3JpYmVycyBhcnJheSBsaXN0aW5nIGFsbCBvZiB0aGUgb2JqZWN0cyB0aGF0IHdpbGwgYmUgdXBkYXRlZCB1cG9uIHZhbHVlIHVwZGF0ZVxuXHRAc3Vic01ldGEgPSBnZW5PYmooKVx0XHRcdFx0XHQjIE1hcCBzdWJzY3JpYmVycycgSUQgdG8gdGhlaXIgbWV0YWRhdGEgKGkuZS4gb3B0aW9ucywgdHJhbnNmb3JtLCBjb25kaXRpb24sIG9uZS10aW1lLWJpbmRpbmcsIGV0Yy4pXG5cdEBwdWJzTWFwID0gZ2VuT2JqKClcdFx0XHRcdFx0XHQjIE1hcCBwdWJsaXNoZXJzIChiaW5kaW5ncyB0aGF0IHVwZGF0ZSB0aGlzIGJpbmRpbmcpIGJ5IHRoZWlyIElEXG5cdEBhdHRhY2hlZEV2ZW50cyA9IFtdXHRcdFx0XHRcdCMgQXJyYXkgbGlzdGluZyBhbGwgb2YgdGhlIGV2ZW50cyBjdXJyZW50bHkgbGlzdGVuZWQgb24gQG9iamVjdFxuXHRAc2V0VmFsdWUgPSBzZXRWYWx1ZU5vb3AgaWYgQHR5cGUgaXMgJ1Byb3h5J1xuXG5cdCMgPT09PSBQcm9wZXJ0aWVzIGRlY2xhcmVkIGxhdGVyIG9yIGluaGVyaXRlZCBmcm9tIGJpbmRpbmcgaW50ZXJmYWNlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIEBvcHRpb25zID0gb3B0aW9uc1xuXHQjIEB2YWx1ZSA9IHVuZGVmaW5lZCBcdFx0XHRcdFx0IyBXaWxsIHJlcHJlc2VudCB0aGUgYWN0dWFsIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGJpbmRpbmcvb2JqZWN0XG5cdCMgQHByb3BlcnR5ID0gcHJvcGVydHlcdFx0XHRcdFx0IyBUaGUgcHJvcGVydHkgbmFtZSBvciBhcnJheSBpbmRleCBvciBldmVudCBjYWxsYmFjayBhcmd1bWVudFxuXHQjIEBzZWxlY3RvciA9IHNlbGVjdG9yXHRcdFx0XHRcdCMgVGhlIHByb3BlcnR5IG5hbWUgb3IgYXJyYXkgaW5kZXggb3IgZXZlbnQgY2FsbGJhY2sgYXJndW1lbnRcblx0IyBAb3JpZ0ZuID0gRnVuY3Rpb25cdFx0XHRcdFx0IyBUaGUgb3JpZ2luYWwgcHJveGllZCBmdW5jdGlvbiBwYXNzZWQgdG8gUHJveHkgYmluZGluZ3Ncblx0IyBAY3VzdG9tRXZlbnRNZXRob2QgPSB7fVx0XHRcdFx0IyBOYW1lcyBvZiB0aGUgZXZlbnQgZW1pdHRlci90cmlnZ2VyIG1ldGhvZHMgKGlmIGFwcGxpY2FibGUpXG5cdCMgQHBob2xkZXJDb250ZXh0cyA9IHt9XHRcdFx0XHRcdCMgUGxhY2Vob2xkZXIgc3Vycm91bmRpbmdzIChvcmlnaW5hbCBiaW5kaW5nIHZhbHVlIHNwbGl0IGJ5IHRoZSBwbGFjZWhvbGRlciByZWdFeClcblx0IyBAcGhvbGRlckluZGV4TWFwID0ge31cdFx0XHRcdFx0IyBQbGFjZWhvbGRlciBvY2N1cmVuY2UgbWFwcGluZywgaS5lLiB0aGUgcGxhY2Vob2xkZXIgbmFtZSBmb3IgZWFjaCBwbGFjZWhvbGRlciBvY2N1cmVuY2Vcblx0IyBAcGxhY2Vob2xkZXIgPSBcIlwiXHRcdFx0XHRcdFx0IyBUaGUgbGFzdCBzcGVjaWZpZWQgcGxhY2Vob2xkZXIgdG8gYmluZCB0aGUgdmFsdWUgdG9cblx0IyBAZGVzY3JpcHRvciA9IFtdXHRcdFx0XHRcdFx0IyBEZXNjcmliZXMgdGhlIHR5cGUgb2YgcHJvcGVydHksIGkuZS4gJ2F0dHI6ZGF0YS1uYW1lJyB0byBpbmRpY2F0ZSBhIERPTUF0dHIgdHlwZSBiaW5kaW5nXG5cdCMgQGlzTGl2ZVByb3AgPSBCb29sZWFuXHRcdFx0XHRcdCMgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBPYmplY3QvT2JqZWN0J3MgcHJvcGV0eSBoYXZlIGJlZW4gbW9kaWZpZWQgdG8gYmUgYSBsaXZlIHByb3BlcnR5XG5cdCMgQGlzRG9tID0gQm9vbGVhblx0XHRcdFx0XHRcdCMgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBiaW5kaW5nJ3Mgb2JqZWN0IGlzIGEgRE9NIG9iamVjdFxuXHQjIEBwb2xsSW50ZXJ2YWwgPSBJRFx0XHRcdFx0XHQjIFRoZSBpbnRlcnZhbCBJRCBvZiB0aGUgdGltZXIgdGhhdCBtYW51YWxseSBwb2xscyB0aGUgb2JqZWN0J3MgdmFsdWUgYXQgYSBzZXQgaW50ZXJ2YWxcblx0IyBAYXJyYXlCaW5kaW5nID0gQmluZGluZ1x0XHRcdFx0IyBSZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBhcnJheSBiaW5kaW5nIChpZiBleGlzdHMpIGZvciBhbiBpbmRleC1vZi1hcnJheSBiaW5kaW5nIChpLmUuIFNpbXBseUJpbmQoYXJyYXkpKVxuXHQjIEBldmVudE5hbWUgPSBcIlwiXHRcdFx0XHRcdFx0IyBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdGhpcyBiaW5kaW5nIGlzIGxpc3RlbmluZyB0byAoZm9yIEV2ZW50IHR5cGUgYmluZGluZ3MpXG5cdCMgQGlzRW1pdHRlciA9IEJvb2xlYW4gXHRcdFx0XHRcdCMgVHJhY2tlciB0byBsZXQgdXMga25vdyB3ZSBzaG91bGRuJ3QgaGFuZGxlIHRoZSBldmVudCB1cGRhdGUgd2UgcmVjZWl2ZWQgYXMgaXQgaXMgdGhlIGV2ZW50IHRoaXMgYmluZGluZyBqdXN0IGVtaXR0ZWRcblx0IyBAZXZlbnRIYW5kbGVyID0gRnVuY3Rpb24gXHRcdFx0XHQjIFRoZSBjYWxsYmFjayB0aGF0IGdldHMgdHJpZ2dlcmVkIHVwb24gYW4gZXZlbnQgZW1pdHRhbmNlIChmb3IgRXZlbiB0eXBlIGJpbmRpbmdzKVxuXHQjIEBldmVudE9iamVjdCA9IEV2ZW50IFx0XHRcdFx0XHQjIFRoZSBkaXNwYXRjaGVkIGV2ZW50IG9iamVjdCAoZm9yIEV2ZW50IHR5cGUgYmluZGluZ3MpXG5cdCMgQHNlbGZUcmFuc2Zvcm0gPSBGdW5jdGlvbiBcdFx0XHQjIFRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gdGhhdCBuZXcgdmFsdWVzIGJlaW5nIHNldCB0byB0aGlzIGJpbmRpbmcgYXJlIGJlaW5nIHBhc3NlZCB0aHJvdWdoIGR1cmluZyBAc2V0VmFsdWUgKGlmIGFwcGxpY2FibGUpXG5cdCMgQHNlbGZVcGRhdGVyID0gRnVuY3Rpb24gXHRcdFx0XHQjIEEgRnVuYy10eXBlIEJpbmRpbmcgd2hpY2ggaW52b2tlcyBAc2V0VmFsdWUoQGZldGNoRGlyZWN0VmFsdWUoKSkgdXBvbiBjaGFuZ2UuIENyZWF0ZWQgaW4gQGNvbnZlcnRUb0xpdmUoKSBmb3IgQXJyYXkgYmluZGluZ3MgJiBpbiBpbnRlcmZhY2UudXBkYXRlT24oKVxuXHQjIEBpc0FzeW5jID0gQm9vbGVhblx0XHRcdFx0XHQjIEluZGljYXRlcyBpZiB0aGlzIGlzIGFuIGFzeW5jIGJpbmRpbmcgKGN1cnJlbnRseSBvbmx5IHVzZWQgZm9yIEV2ZW50IGJpbmRpbmdzKVxuXHQjIyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIyMjXG5cblx0aWYgQGlzTXVsdGlDaG9pY2UgIyBUcnVlIGlmIEBvYmplY3QgaXMgYSByYWRpby9jaGVja2JveCBjb2xsZWN0aW9uXG5cdFx0QGNob2ljZXMgPSBnZW5PYmooKVxuXHRcdFxuXHRcdEBvYmplY3QuZm9yRWFjaCAoY2hvaWNlRWwpPT5cblx0XHRcdGNob2ljZUJpbmRpbmcgPSBAY2hvaWNlc1tjaG9pY2VFbC52YWx1ZV0gPSBTaW1wbHlCaW5kKCdjaGVja2VkJykub2YoY2hvaWNlRWwpLl9cblx0XHRcdGNob2ljZUJpbmRpbmcuYWRkU3ViKEApXG5cdFx0XHRjaG9pY2VCaW5kaW5nLnN1YnNNZXRhW0BJRF0udHJhbnNmb3JtRm4gPSAoKS0+IGNob2ljZUJpbmRpbmdcblx0XHRcdGNob2ljZUJpbmRpbmcuZ3JvdXBCaW5kaW5nID0gQFxuXHRcdFx0cmV0dXJuXG5cdFxuXG5cdHVubGVzcyBAdHlwZSBpcyAnRXZlbnQnIG9yIChAdHlwZSBpcyAnRnVuYycgYW5kIEBpc1N1YikgIyB0aGUgc2Vjb25kIGNvbmRpdGlvbiB3aWxsIHByZXZlbnQgZnVuY3Rpb24gc3Vic2NyaWJlcnMgZnJvbSBiZWluZyBpbnZva2VkIG9uIHRoaXMgYmluZGluZyBjcmVhdGlvblxuXHRcdGlmIEB0eXBlIGlzICdQaG9sZGVyJ1xuXHRcdFx0cGFyZW50UHJvcGVydHkgPSBpZiBAZGVzY3JpcHRvciBhbmQgbm90IHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnbXVsdGknKSB0aGVuIFwiI3tAZGVzY3JpcHRvcn06I3tAcHJvcGVydHl9XCIgZWxzZSBAcHJvcGVydHlcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRwYXJlbnRCaW5kaW5nID0gQHBhcmVudEJpbmRpbmcgPSBTaW1wbHlCaW5kKHBhcmVudFByb3BlcnR5KS5vZihvYmplY3QpLl9cblx0XHRcdHBhcmVudEJpbmRpbmcuc2NhbkZvclBob2xkZXJzKClcblx0XHRcdEB2YWx1ZSA9IHBhcmVudEJpbmRpbmcucGhvbGRlclZhbHVlc1tAcGhvbGRlcl1cblx0XHRcblx0XHRcdEB0ZXh0Tm9kZXMgPSBwYXJlbnRCaW5kaW5nLnRleHROb2Rlc1tAcGhvbGRlcl0gaWYgcGFyZW50QmluZGluZy50ZXh0Tm9kZXNcblx0XHRcblxuXHRcdGVsc2Vcblx0XHRcdEB2YWx1ZSA9IHN1YmplY3RWYWx1ZSA9IEBmZXRjaERpcmVjdFZhbHVlKClcblx0XHRcblx0XHRcdGlmIEB0eXBlIGlzICdPYmplY3RQcm9wJyBhbmQgbm90IGNoZWNrSWYuaXNEZWZpbmVkKHN1YmplY3RWYWx1ZSkgYW5kIG5vdCBnZXREZXNjcmlwdG9yKEBvYmplY3QsIEBwcm9wZXJ0eSlcblx0XHRcdFx0QG9iamVjdFtAcHJvcGVydHldID0gc3ViamVjdFZhbHVlICMgRGVmaW5lIHRoZSBwcm9wIG9uIHRoZSBvYmplY3QgaWYgaXQgbm9uLWV4aXN0ZW50XG5cblx0XHRcdGNvbnZlcnRUb0xpdmUoQCwgQG9iamVjdClcblxuXG5cdEBhdHRhY2hFdmVudHMoKVxuXHRyZXR1cm4gYm91bmRJbnN0YW5jZXNbQElEXSA9IEBcblxuXG5cblxuXG5pbXBvcnQgJy4vcHJvdG90eXBlJ1xuIiwiQmluZGluZzo6ID1cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU3Vic2NyaWJlciBNYW5hZ2VtZW50XG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRhZGRTdWI6IChzdWIsIG9wdGlvbnMsIHVwZGF0ZU9uY2UsIHVwZGF0ZUV2ZW5JZlNhbWUpLT5cblx0XHRpZiBzdWIuaXNNdWx0aVxuXHRcdFx0QGFkZFN1YihzdWJJdGVtLCBvcHRpb25zLCB1cGRhdGVPbmNlLCB1cGRhdGVFdmVuSWZTYW1lKSBmb3Igc3ViSXRlbSBpbiBzdWIuYmluZGluZ3Ncblx0XHRlbHNlXG5cdFx0XHRpZiBtZXRhRGF0YT1Ac3Vic01ldGFbc3ViLklEXVxuXHRcdFx0XHRhbHJlYWR5SGFkU3ViID0gdHJ1ZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzdWIucHVic01hcFtASURdID0gQFxuXHRcdFx0XHRAc3Vicy51bnNoaWZ0KHN1Yilcblx0XHRcdFx0XG5cdFx0XHRcdG1ldGFEYXRhID0gQHN1YnNNZXRhW3N1Yi5JRF0gPSBnZW5PYmooKVxuXHRcdFx0XHRtZXRhRGF0YS51cGRhdGVPbmNlID0gdXBkYXRlT25jZVxuXHRcdFx0XHRtZXRhRGF0YS5vcHRzID0gY2xvbmVPYmplY3Qob3B0aW9ucylcblx0XHRcdFx0bWV0YURhdGEub3B0cy51cGRhdGVFdmVuSWZTYW1lID0gdHJ1ZSBpZiB1cGRhdGVFdmVuSWZTYW1lIG9yIEB0eXBlIGlzICdFdmVudCcgb3IgQHR5cGUgaXMgJ1Byb3h5JyBvciBAdHlwZSBpcyAnQXJyYXknXG5cdFx0XHRcdG1ldGFEYXRhLnZhbHVlUmVmID0gaWYgc3ViLnR5cGUgaXMgJ0Z1bmMnIHRoZW4gJ3ZhbHVlUGFzc2VkJyBlbHNlICd2YWx1ZSdcblx0XHRcdFxuXHRcdHJldHVybiBhbHJlYWR5SGFkU3ViXG5cblxuXG5cdHJlbW92ZVN1YjogKHN1YiwgYm90aFdheXMpLT5cblx0XHRpZiBzdWIuaXNNdWx0aVxuXHRcdFx0QHJlbW92ZVN1YihzdWJJdGVtLCBib3RoV2F5cykgZm9yIHN1Ykl0ZW0gaW4gc3ViLmJpbmRpbmdzXG5cdFx0ZWxzZVxuXHRcdFx0aWYgQHN1YnNNZXRhW3N1Yi5JRF1cblx0XHRcdFx0QHN1YnMuc3BsaWNlKEBzdWJzLmluZGV4T2Yoc3ViKSwgMSlcblx0XHRcdFx0ZGVsZXRlIEBzdWJzTWV0YVtzdWIuSURdXG5cdFx0XHRcdGRlbGV0ZSBzdWIucHVic01hcFtASURdXG5cblx0XHRcdGlmIGJvdGhXYXlzXG5cdFx0XHRcdHN1Yi5yZW1vdmVTdWIoQClcblx0XHRcdFx0ZGVsZXRlIEBwdWJzTWFwW3N1Yi5JRF1cblxuXHRcdGlmIEBzdWJzLmxlbmd0aCBpcyAwIGFuZCBPYmplY3Qua2V5cyhAcHVic01hcCkubGVuZ3RoIGlzIDBcblx0XHRcdEBkZXN0cm95KCkgIyBTaW5jZSBpdCdzIG5vIGxvbmdlciBhIHN1YnNjcmliZXIgb3IgaGFzIGFueSBzdWJzY3JpYmVyc1xuXHRcblx0XHRyZXR1cm5cblxuXHRcblxuXHRyZW1vdmVBbGxTdWJzOiAoYm90aFdheXMpLT5cblx0XHRAcmVtb3ZlU3ViKHN1YiwgYm90aFdheXMpIGZvciBzdWIgaW4gQHN1YnMuc2xpY2UoKVxuXHRcdHJldHVyblxuXG5cblxuXG5cdGRlc3Ryb3k6ICgpLT4gIyBSZXNldHMgb2JqZWN0IHRvIGluaXRpYWwgc3RhdGUgKHByZS1iaW5kaW5nIHN0YXRlKVxuXHRcdGRlbGV0ZSBib3VuZEluc3RhbmNlc1tASURdXG5cdFx0QHJlbW92ZVBvbGxJbnRlcnZhbCgpXG5cdFx0XG5cdFx0aWYgQHR5cGUgaXMgJ0V2ZW50J1xuXHRcdFx0QHVuUmVnaXN0ZXJFdmVudChldmVudCkgZm9yIGV2ZW50IGluIEBhdHRhY2hlZEV2ZW50c1xuXHRcdFxuXHRcdGVsc2UgaWYgQHR5cGUgaXMgJ0Z1bmMnXG5cdFx0XHRkZWxldGUgQG9iamVjdC5fc2JfSURcblxuXHRcdCMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblx0XHRjb252ZXJ0VG9SZWcoQCwgQG9iamVjdCkgaWYgQGlzTGl2ZVByb3AgYW5kIEBvcmlnRGVzY3JpcHRvclxuXHRcdGNvbnZlcnRUb1JlZyhALCBAdmFsdWUsIHRydWUpIGlmIEB0eXBlIGlzICdBcnJheSdcblx0XHRcblx0XHRpZiBAb2JqZWN0Ll9zYl9tYXBcblx0XHRcdGRlbGV0ZSBAb2JqZWN0Ll9zYl9tYXBbQHNlbGVjdG9yXVxuXHRcdFx0ZGVsZXRlIEBvYmplY3QuX3NiX21hcCBpZiBPYmplY3Qua2V5cyhAb2JqZWN0Ll9zYl9tYXApLmxlbmd0aCBpcyAwXG5cblxuXHRcdHJldHVyblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBWYWx1ZSBzZXQvZ2V0XG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRmZXRjaERpcmVjdFZhbHVlOiAoKS0+XG5cdFx0dHlwZSA9IEB0eXBlXG5cdFx0c3dpdGNoXG5cdFx0XHR3aGVuIHR5cGUgaXMgJ0Z1bmMnIHRoZW4gQG9iamVjdCgpXG5cdFx0XHRcblx0XHRcdHdoZW4gdHlwZSBpcyAnRE9NQXR0cicgdGhlbiBAb2JqZWN0LmdldEF0dHJpYnV0ZShAcHJvcGVydHkpIG9yICcnXG5cblx0XHRcdHdoZW4gQGlzTXVsdGlDaG9pY2Vcblx0XHRcdFx0cmVzdWx0cyA9IFtdXG5cdFx0XHRcdGZvciBjaG9pY2VOYW1lLGNob2ljZUVsIG9mIEBjaG9pY2VzXG5cdFx0XHRcdFx0aWYgY2hvaWNlRWwub2JqZWN0LmNoZWNrZWRcblx0XHRcdFx0XHRcdGlmIHR5cGUgaXMgJ0RPTVJhZGlvJ1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2hvaWNlTmFtZVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2ggY2hvaWNlTmFtZVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHRzXG5cdFx0XG5cdFx0XHRlbHNlIEBvYmplY3RbQHByb3BlcnR5XVxuXHRcblxuXG5cblx0c2V0VmFsdWU6IChuZXdWYWx1ZSwgcHVibGlzaGVyLCBmcm9tU2VsZiwgZnJvbUNoYW5nZUV2ZW50KS0+ICMgZnJvbVNlbGY9PT10cnVlIHdoZW4gY2FsbGVkIGZyb20gZXZlbnRVcGRhdGVIYW5kbGVyIG9yIHByb3BlcnR5IGRlc2NyaXB0b3Igc2V0dGVyICh1bmxlc3MgaXQncyBhbiBBcnJheSBiaW5kaW5nKVxuXHRcdHB1Ymxpc2hlciB8fD0gQFxuXHRcdG5ld1ZhbHVlID0gQHNlbGZUcmFuc2Zvcm0obmV3VmFsdWUpIGlmIEBzZWxmVHJhbnNmb3JtXG5cdFx0XG5cdFx0dW5sZXNzIGZyb21TZWxmIHRoZW4gc3dpdGNoIEB0eXBlXG5cdFx0XHR3aGVuICdPYmplY3RQcm9wJ1xuXHRcdFx0XHRpZiBub3QgQGlzTGl2ZVByb3Bcblx0XHRcdFx0XHRAb2JqZWN0W0Bwcm9wZXJ0eV0gPSBuZXdWYWx1ZSBpZiBuZXdWYWx1ZSBpc250IEB2YWx1ZVxuXHRcdFx0XHRpbXBvcnRJbmxpbmUgJy4vcHJvdG90eXBlLnNldFZhbHVlLU9iamVjdFByb3AtRE9NVmFsdWUnXG5cdFx0XHRcdGVsc2UgaWYgQG9yaWdTZXR0ZXJcblx0XHRcdFx0XHRAb3JpZ1NldHRlcihuZXdWYWx1ZSlcblxuXG5cdFx0XHR3aGVuICdQaG9sZGVyJ1xuXHRcdFx0XHRwYXJlbnQgPSBAcGFyZW50QmluZGluZ1xuXHRcdFx0XHRwYXJlbnQucGhvbGRlclZhbHVlc1tAcGhvbGRlcl0gPSBuZXdWYWx1ZVxuXHRcdFx0XHRlbnRpcmVWYWx1ZSA9IGFwcGx5UGxhY2Vob2xkZXJzKHBhcmVudC5waG9sZGVyQ29udGV4dHMsIHBhcmVudC5waG9sZGVyVmFsdWVzLCBwYXJlbnQucGhvbGRlckluZGV4TWFwKVxuXG5cdFx0XHRcdGlmIEB0ZXh0Tm9kZXMgYW5kIG5ld1ZhbHVlIGlzbnQgQHZhbHVlXG5cdFx0XHRcdFx0Zm9yIHRleHROb2RlIGluIEB0ZXh0Tm9kZXNcblx0XHRcdFx0XHRcdHRleHROb2RlW3RleHRDb250ZW50XSA9IG5ld1ZhbHVlXG5cdFx0XHRcdFxuXHRcdFx0XHRwYXJlbnQuc2V0VmFsdWUoZW50aXJlVmFsdWUsIHB1Ymxpc2hlcikgdW5sZXNzIEBwcm9wZXJ0eSBpcyB0ZXh0Q29udGVudFxuXHRcdFx0XHRcblxuXG5cdFx0XHR3aGVuICdBcnJheSdcblx0XHRcdFx0aWYgbmV3VmFsdWUgaXNudCBAdmFsdWVcblx0XHRcdFx0XHRuZXdWYWx1ZSA9IEFycmF5Ojpjb25jYXQobmV3VmFsdWUpIGlmIG5vdCBjaGVja0lmLmlzQXJyYXkobmV3VmFsdWUpXG5cdFx0XHRcdFx0Y29udmVydFRvUmVnKEAsIEB2YWx1ZSwgdHJ1ZSlcblx0XHRcdFx0XHRjb252ZXJ0VG9MaXZlKEAsIG5ld1ZhbHVlPW5ld1ZhbHVlLnNsaWNlKCksIHRydWUpXG5cdFx0XHRcdFx0QG9yaWdTZXR0ZXIobmV3VmFsdWUpIGlmIEBvcmlnU2V0dGVyICMgV2lsbCB1cGRhdGUgYW55IG90aGVyIHByZXZpb3VzIG5vbi1BcnJheSBiaW5kaW5ncyB0byB0aGUgc2FtZSBvYmplY3QgcHJvcGVydHlcblxuXG5cdFx0XHR3aGVuICdGdW5jJ1xuXHRcdFx0XHRwcmV2VmFsdWUgPSBAdmFsdWVQYXNzZWRcblx0XHRcdFx0QHZhbHVlUGFzc2VkID0gbmV3VmFsdWVcblx0XHRcdFx0bmV3VmFsdWUgPSBAb2JqZWN0KG5ld1ZhbHVlLCBwcmV2VmFsdWUpXG5cblx0XHRcdHdoZW4gJ0V2ZW50J1xuXHRcdFx0XHRAaXNFbWl0dGVyID0gdHJ1ZVxuXHRcdFx0XHRAZW1pdEV2ZW50KG5ld1ZhbHVlKVxuXHRcdFx0XHRAaXNFbWl0dGVyID0gZmFsc2Vcblx0XHRcblx0XHRcdGltcG9ydElubGluZSAnLi9wcm90b3R5cGUuc2V0VmFsdWUtRE9NVHlwZXMnXG5cdFx0XG5cdFx0QHZhbHVlID0gbmV3VmFsdWVcblx0XHRAdXBkYXRlQWxsU3VicyhwdWJsaXNoZXIpXG5cblx0XHRyZXR1cm5cblxuXG5cblxuXG5cdHVwZGF0ZUFsbFN1YnM6IChwdWJsaXNoZXIpLT4gaWYgaT0oYXJyPUBzdWJzKS5sZW5ndGggIyBVZ2x5IHNob3J0Y3V0IGZvciBpbmRleCBkZWZpbml0aW9uIGluIG9yZGVyIHRvIGxpbWl0IGxvZ2ljIHJlcGl0aWlvblxuXHRcdEB1cGRhdGVTdWIoYXJyW2ldLCBwdWJsaXNoZXIpIHdoaWxlIGktLVxuXHRcdHJldHVyblxuXG5cblxuXHRcdFx0XG5cblx0dXBkYXRlU3ViOiAoc3ViLCBwdWJsaXNoZXIsIGlzRGVsYXllZFVwZGF0ZSktPlxuXHRcdHJldHVybiBpZiAocHVibGlzaGVyIGlzIHN1Yikgb3IgKHB1Ymxpc2hlciBpc250IEAgYW5kIHB1Ymxpc2hlci5zdWJzTWV0YVtzdWIuSURdKSAjIGluZGljYXRlcyB0aGlzIGlzIGFuIGluZmluaXRlIGxvb3Bcblx0XHRtZXRhID0gQHN1YnNNZXRhW3N1Yi5JRF1cblxuXHRcdGlmIG1ldGEuZGlzYWxsb3dMaXN0IGFuZCBtZXRhLmRpc2FsbG93TGlzdFtwdWJsaXNoZXIuSURdXG5cdFx0XHRyZXR1cm5cblxuXHRcdGlmIG1ldGEub3B0cy50aHJvdHRsZVxuXHRcdFx0Y3VycmVudFRpbWUgPSArKG5ldyBEYXRlKVxuXHRcdFx0dGltZVBhc3NlZCA9IGN1cnJlbnRUaW1lIC0gbWV0YS5sYXN0VXBkYXRlXG5cdFx0XHRcblx0XHRcdGlmIHRpbWVQYXNzZWQgPCBtZXRhLm9wdHMudGhyb3R0bGVcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KG1ldGEudXBkYXRlVGltZXIpXG5cdFx0XHRcdHJldHVybiBtZXRhLnVwZGF0ZVRpbWVyID1cblx0XHRcdFx0XHRzZXRUaW1lb3V0ICgpPT5cblx0XHRcdFx0XHRcdEB1cGRhdGVTdWIoc3ViLCBwdWJsaXNoZXIpIGlmIEBzdWJzTWV0YVtzdWIuSURdXG5cdFx0XHRcdFx0LCBtZXRhLm9wdHMudGhyb3R0bGUtdGltZVBhc3NlZFxuXHRcdFx0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG1ldGEubGFzdFVwZGF0ZSA9IGN1cnJlbnRUaW1lXG5cblx0XHRlbHNlIGlmIG1ldGEub3B0cy5kZWxheSBhbmQgbm90IGlzRGVsYXllZFVwZGF0ZVxuXHRcdFx0cmV0dXJuIHNldFRpbWVvdXQgKCk9PlxuXHRcdFx0XHRAdXBkYXRlU3ViKHN1YiwgcHVibGlzaGVyLCB0cnVlKSBpZiBAc3Vic01ldGFbc3ViLklEXVxuXHRcdFx0LCBtZXRhLm9wdHMuZGVsYXlcblxuXG5cdFx0bmV3VmFsdWUgPSBpZiBAdHlwZSBpcyAnQXJyYXknIGFuZCBtZXRhLm9wdHMuc2VuZEFycmF5Q29waWVzIHRoZW4gQHZhbHVlLnNsaWNlKCkgZWxzZSBAdmFsdWVcblx0XHRzdWJWYWx1ZSA9IHN1YlttZXRhLnZhbHVlUmVmXVxuXHRcdG5ld1ZhbHVlID0gaWYgdHJhbnNmb3JtPW1ldGEudHJhbnNmb3JtRm4gdGhlbiB0cmFuc2Zvcm0obmV3VmFsdWUsIHN1YlZhbHVlLCBzdWIub2JqZWN0KSBlbHNlIG5ld1ZhbHVlXG5cblx0XHRyZXR1cm4gaWYgbmV3VmFsdWUgaXMgc3ViVmFsdWUgYW5kIG5vdCBtZXRhLm9wdHMudXBkYXRlRXZlbklmU2FtZSBvclxuXHRcdFx0bWV0YS5jb25kaXRpb25GbiBhbmQgbm90IG1ldGEuY29uZGl0aW9uRm4obmV3VmFsdWUsIHN1YlZhbHVlLCBzdWIub2JqZWN0KVxuXG5cdFx0IyBXaHkgZG8gd2UgbmVlZCB0aGUgJ3Byb21pc2VUcmFuc2Zvcm1zJyBvcHRpb24gd2hlbiB3ZSBjYW4ganVzdCBjaGVjayBmb3IgdGhlIGV4aXN0YW5jZSBvZiAudGhlbiBtZXRob2Q/XG5cdFx0IyBCZWNhdXNlIHRlc3RzIHNob3cgdGhhdCB3aGVuIHNlYXJjaGluZyBmb3IgdGhlIC50aGVuIHByb3Agb24gdGhlIG9iamVjdCByZXN1bHRzIGluIGEgcGVyZm9ybWFuY2Ugc2xvd2Rvd24gb2YgdXAgdG8gMzAlIVxuXHRcdCMgQ2hlY2tpbmcgaWYgdGhlIHByb21pc2VUcmFuc2Zvcm1zIG9wdGlvbiBpcyBlbmFibGVkIGZpcnN0IGVsaW1pbmF0ZXMgdW5uZWNlc3NhcnkgbG9va3VwcyAmIHNsb3dkb3ducy5cblx0XHRpZiBtZXRhLm9wdHMucHJvbWlzZVRyYW5zZm9ybXMgYW5kIG5ld1ZhbHVlIGFuZCBjaGVja0lmLmlzRnVuY3Rpb24obmV3VmFsdWUudGhlbilcblx0XHRcdG5ld1ZhbHVlLnRoZW4gKG5ld1ZhbHVlKS0+IHN1Yi5zZXRWYWx1ZShuZXdWYWx1ZSwgcHVibGlzaGVyKTsgcmV0dXJuXG5cdFx0ZWxzZVxuXHRcdFx0c3ViLnNldFZhbHVlKG5ld1ZhbHVlLCBwdWJsaXNoZXIpXG5cblx0XHRAcmVtb3ZlU3ViKHN1YikgaWYgbWV0YS51cGRhdGVPbmNlXG5cdFx0cmV0dXJuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgVHJhbnNmb3JtcyAmIENvbmRpdGlvbnNcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0YWRkTW9kaWZpZXJGbjogKHRhcmdldCwgc3ViSW50ZXJmYWNlcywgc3ViamVjdEZuLCB1cGRhdGVPbkJpbmQpLT5cblx0XHRpZiBub3QgY2hlY2tJZi5pc0Z1bmN0aW9uKHN1YmplY3RGbilcblx0XHRcdHRocm93V2FybmluZygnZm5Pbmx5JywyKVxuXG5cdFx0ZWxzZVxuXHRcdFx0Zm9yIHN1YkludGVyZmFjZSBpbiBzdWJJbnRlcmZhY2VzXG5cdFx0XHRcdHN1YnNjcmliZXIgPSBzdWJJbnRlcmZhY2UuXyBvciBzdWJJbnRlcmZhY2UgIyBTZWNvbmQgaXMgY2hvc2VuIHdoZW4gdGhlIHBhc3NlZCBzdWJzY3JpYmVyIGludGVyZmFjZXMgbXVsdGktYmluZGluZyAoaXMgYSByZWN1cnNpdmUgY2FsbCBvZiB0aGlzIG1ldGhvZClcblxuXHRcdFx0XHRpZiBzdWJzY3JpYmVyLmlzTXVsdGlcblx0XHRcdFx0XHRAYWRkTW9kaWZpZXJGbih0YXJnZXQsIHN1YnNjcmliZXIuYmluZGluZ3MsIHN1YmplY3RGbiwgdXBkYXRlT25CaW5kKVxuXHRcdFx0XHRcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN1Yk1ldGFEYXRhID0gQHN1YnNNZXRhW3N1YnNjcmliZXIuSURdXG5cdFx0XHRcdFx0c3ViTWV0YURhdGFbdGFyZ2V0XSA9IHN1YmplY3RGblxuXHRcdFx0XHRcdHVwZGF0ZU9uQmluZCA9IHVwZGF0ZU9uQmluZCBhbmQgbm90IHN1Yk1ldGFEYXRhLnVwZGF0ZU9uY2VcblxuXHRcdFx0XHRcdGlmIEBwdWJzTWFwW3N1YnNjcmliZXIuSURdXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVyLnN1YnNNZXRhW0BJRF1bdGFyZ2V0XSB8fD0gc3ViamVjdEZuICMgV2lsbCBub3QgcmVwbGFjZSBleGlzdGluZyBtb2RpZmllciBmdW5jdGlvbiBpZiBleGlzdHNcblxuXHRcdFx0XHRcdEB1cGRhdGVTdWIoc3Vic2NyaWJlciwgQCkgaWYgKHVwZGF0ZU9uQmluZCBvciBAdHlwZSBpcyAnRnVuYycpIGFuZCB0YXJnZXQgaXMgJ3RyYW5zZm9ybUZuJ1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXG5cblxuXHRzZXRTZWxmVHJhbnNmb3JtOiAodHJhbnNmb3JtRm4sIHVwZGF0ZU9uQmluZCktPlxuXHRcdEBzZWxmVHJhbnNmb3JtID0gdHJhbnNmb3JtRm5cblx0XHRAc2V0VmFsdWUoQHZhbHVlKSBpZiB1cGRhdGVPbkJpbmRcblx0XHRyZXR1cm5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBBbGxvdy9EaXNhbGxvdyBydWxlc1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0YWRkRGlzYWxsb3dSdWxlOiAodGFyZ2V0U3ViLCB0YXJnZXREaXNhbGxvdyktPlxuXHRcdGRpc2FsbG93TGlzdCA9IEBzdWJzTWV0YVt0YXJnZXRTdWIuSURdLmRpc2FsbG93TGlzdCA/PSBnZW5PYmooKVxuXHRcdGRpc2FsbG93TGlzdFt0YXJnZXREaXNhbGxvdy5JRF0gPSAxXG5cdFx0cmV0dXJuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgUGxhY2Vob2xkZXJzXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRzY2FuRm9yUGhvbGRlcnM6ICgpLT4gdW5sZXNzIEBwaG9sZGVyVmFsdWVzXG5cdFx0QHBob2xkZXJWYWx1ZXMgPSBnZW5PYmooKVxuXHRcdEBwaG9sZGVySW5kZXhNYXAgPSBnZW5PYmooKVxuXHRcdEBwaG9sZGVyQ29udGV4dHMgPSBbXVxuXG5cdFx0aWYgY2hlY2tJZi5pc1N0cmluZyhAdmFsdWUpXG5cdFx0XHRAcGhvbGRlckNvbnRleHRzID0gQHZhbHVlLnNwbGl0IHBob2xkZXJSZWdFeFNwbGl0XG5cdFx0XHRcblx0XHRcdGluZGV4ID0gMFxuXHRcdFx0QHZhbHVlID0gQHZhbHVlLnJlcGxhY2UgcGhvbGRlclJlZ0V4LCAoZSwgcGhvbGRlcik9PlxuXHRcdFx0XHRAcGhvbGRlckluZGV4TWFwW2luZGV4KytdID0gcGhvbGRlclxuXHRcdFx0XHRAcGhvbGRlclZhbHVlc1twaG9sZGVyXSA9IHBob2xkZXJcblx0XHRcblx0XHRzY2FuVGV4dE5vZGVzUGxhY2Vob2xkZXJzKEBvYmplY3QsIEB0ZXh0Tm9kZXM9Z2VuT2JqKCkpIGlmIEBpc0RvbSBhbmQgQHByb3BlcnR5IGlzIHRleHRDb250ZW50XG5cdFx0cmV0dXJuXG5cdFxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFBvbGxpbmdcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGFkZFBvbGxJbnRlcnZhbDogKHRpbWUpLT4gaWYgQHR5cGUgaXNudCAnRXZlbnQnXG5cdFx0QHJlbW92ZVBvbGxJbnRlcnZhbCgpXG5cdFx0XG5cdFx0QHBvbGxJbnRlcnZhbCA9IHNldEludGVydmFsICgpPT5cblx0XHRcdHBvbGxlZFZhbHVlID0gQGZldGNoRGlyZWN0VmFsdWUoKVxuXG5cdFx0XHRAc2V0VmFsdWUgcG9sbGVkVmFsdWUsIEAsIHRydWVcblx0XHQsIHRpbWVcblxuXG5cdHJlbW92ZVBvbGxJbnRlcnZhbDogKCktPlxuXHRcdGNsZWFySW50ZXJ2YWwoQHBvbGxJbnRlcnZhbClcblx0XHRAcG9sbEludGVydmFsID0gbnVsbFxuXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIEV2ZW50c1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0XG5cdGFkZFVwZGF0ZUxpc3RlbmVyOiAoZXZlbnROYW1lLCB0YXJnZXRQcm9wZXJ0eSktPlxuXHRcdEBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lciBldmVudE5hbWUsIChldmVudCk9PlxuXHRcdFx0dW5sZXNzIGV2ZW50Ll9zYlxuXHRcdFx0XHRzaG91bGRSZWRlZmluZVZhbHVlID0gQHNlbGZUcmFuc2Zvcm0gYW5kIEBpc0RvbUlucHV0XG5cdFx0XHRcdEBzZXRWYWx1ZShAb2JqZWN0W3RhcmdldFByb3BlcnR5XSwgbnVsbCwgIXNob3VsZFJlZGVmaW5lVmFsdWUsIHRydWUpXG5cblx0XHRcdHJldHVyblxuXHRcdFxuXHRcdCwgZmFsc2Vcblx0XHRyZXR1cm5cblx0XG5cblx0YXR0YWNoRXZlbnRzOiAoKS0+XG5cdFx0aWYgQGV2ZW50TmFtZVxuXHRcdFx0QHJlZ2lzdGVyRXZlbnQoQGV2ZW50TmFtZSlcblx0XHRcblx0XHRlbHNlIGlmIEBpc0RvbUlucHV0XG5cdFx0XHRAYWRkVXBkYXRlTGlzdGVuZXIoJ2lucHV0JywgJ3ZhbHVlJylcblx0XHRcdEBhZGRVcGRhdGVMaXN0ZW5lcignY2hhbmdlJywgJ3ZhbHVlJylcblxuXHRcdGVsc2UgaWYgbm90IEBpc011bHRpQ2hvaWNlIGFuZCAoQHR5cGUgaXMgJ0RPTVJhZGlvJyBvciBAdHlwZSBpcyAnRE9NQ2hlY2tib3gnKVxuXHRcdFx0QGFkZFVwZGF0ZUxpc3RlbmVyKCdjaGFuZ2UnLCAnY2hlY2tlZCcpXG5cblx0XHRyZXR1cm5cblx0XG5cblxuXHRyZWdpc3RlckV2ZW50OiAoZXZlbnROYW1lKS0+XG5cdFx0QGF0dGFjaGVkRXZlbnRzLnB1c2goZXZlbnROYW1lKVxuXHRcdEBldmVudEhhbmRsZXIgPSBldmVudFVwZGF0ZUhhbmRsZXIuYmluZChAKSB1bmxlc3MgQGV2ZW50SGFuZGxlclxuXHRcdFxuXHRcdEBvYmplY3RbQGV2ZW50TWV0aG9kcy5saXN0ZW5dKGV2ZW50TmFtZSwgQGV2ZW50SGFuZGxlcilcblx0XHRyZXR1cm5cblxuXG5cblx0dW5SZWdpc3RlckV2ZW50OiAoZXZlbnROYW1lKS0+XG5cdFx0QGF0dGFjaGVkRXZlbnRzLnNwbGljZSBAYXR0YWNoZWRFdmVudHMuaW5kZXhPZihldmVudE5hbWUpLCAxXG5cblx0XHRAb2JqZWN0W0BldmVudE1ldGhvZHMucmVtb3ZlXShldmVudE5hbWUsIEBldmVudEhhbmRsZXIpXG5cdFx0cmV0dXJuXG5cblxuXG5cdGVtaXRFdmVudDogKGV4dHJhRGF0YSktPlxuXHRcdGV2ZW50T2JqZWN0ID0gQGV2ZW50TmFtZVxuXHRcdFxuXHRcdGlmIEBldmVudE1ldGhvZHMuZW1pdCBpcyAnZGlzcGF0Y2hFdmVudCdcblx0XHRcdHVubGVzcyBAZXZlbnRPYmplY3Rcblx0XHRcdFx0QGV2ZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jylcblx0XHRcdFx0QGV2ZW50T2JqZWN0LmluaXRFdmVudChAZXZlbnROYW1lLCB0cnVlLCB0cnVlKVxuXG5cdFx0XHRAZXZlbnRPYmplY3QuYmluZGluZ0RhdGEgPSBleHRyYURhdGFcblx0XHRcdGV2ZW50T2JqZWN0ID0gQGV2ZW50T2JqZWN0XG5cblx0XHRAb2JqZWN0W0BldmVudE1ldGhvZHMuZW1pdF0oZXZlbnRPYmplY3QsIGV4dHJhRGF0YSlcblx0XHRyZXR1cm5cblxuXG5cblxuZXZlbnRVcGRhdGVIYW5kbGVyID0gKCktPiB1bmxlc3MgQGlzRW1pdHRlclxuXHRAc2V0VmFsdWUoYXJndW1lbnRzW0Bwcm9wZXJ0eV0sIG51bGwsIHRydWUpXG5cdHJldHVyblxuXG5cblxuXG5cbiIsImVsc2UgaWYgQGlzRG9tSW5wdXRcblx0aWYgbm90IGZyb21DaGFuZ2VFdmVudFxuXHRcdEBvcmlnU2V0dGVyKG5ld1ZhbHVlKVxuXHRcdEBvYmplY3QuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCgpKSBpZiBzZXR0aW5ncy5kaXNwYXRjaEV2ZW50c1xuXHRcblx0ZWxzZSBpZiBuZXdWYWx1ZSBpc250IEBvcmlnR2V0dGVyKCkgIyBJTVBMSUNJVDogYW5kIGZyb21DaGFuZ2VFdmVudFxuXHRcdHByZXZDdXJzcm9yID0gQG9iamVjdC5zZWxlY3Rpb25TdGFydFxuXHRcdEBvcmlnU2V0dGVyKG5ld1ZhbHVlKVxuXHRcdEBvYmplY3Quc2V0U2VsZWN0aW9uUmFuZ2UocHJldkN1cnNyb3IsIHByZXZDdXJzcm9yKSBpZiBwcmV2Q3Vyc3JvciIsIndoZW4gJ0RPTVJhZGlvJ1xuXHRpZiBAaXNNdWx0aUNob2ljZSAjIFRoZSBuZXdWYWx1ZSB2YXIgd2lsbCBob2xkIHRoZSByYWRpbyBmaWVsZCBiaW5kaW5nIGFzIGl0cyB2YWx1ZSBpZiB0aGUgdXBkYXRlIGlzIGNvbWluZyBmcm9tIHRoZSByYWRpbyBmaWVsZCdzIGNoYW5nZSBldmVudFxuXHRcdHRhcmdldENob2ljZUJpbmRpbmcgPSBpZiBjaGVja0lmLmlzQmluZGluZyhuZXdWYWx1ZSkgdGhlbiBuZXdWYWx1ZSBlbHNlIEBjaG9pY2VzW25ld1ZhbHVlXVxuXG5cdFx0aWYgdGFyZ2V0Q2hvaWNlQmluZGluZ1xuXHRcdFx0bmV3VmFsdWUgPSB0YXJnZXRDaG9pY2VCaW5kaW5nLm9iamVjdC52YWx1ZVxuXHRcdFxuXHRcdFx0Zm9yIG4sY2hvaWNlQmluZGluZyBvZiBAY2hvaWNlc1xuXHRcdFx0XHRjaG9pY2VCaW5kaW5nLnNldFZhbHVlKGNob2ljZUJpbmRpbmcuSUQgaXMgdGFyZ2V0Q2hvaWNlQmluZGluZy5JRCwgcHVibGlzaGVyKVxuXHRcdGVsc2Vcblx0XHRcdG5ld1ZhbHVlID0gQHZhbHVlICMgU2V0IHRvIHByZXYgdmFsdWVcblx0XG5cdGVsc2Vcblx0XHRuZXdWYWx1ZSA9ICEhbmV3VmFsdWUgIyBDb252ZXJ0IHRvIEJvb2xlYW5cblx0XHRyZXR1cm4gaWYgbmV3VmFsdWUgaXMgQHZhbHVlXG5cdFx0QG9iamVjdC5jaGVja2VkID0gbmV3VmFsdWUgdW5sZXNzIEBvYmplY3QuY2hlY2tlZCBpcyBuZXdWYWx1ZVxuXHRcdEBvYmplY3QuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCgpKSBpZiBuZXdWYWx1ZSBhbmQgc2V0dGluZ3MuZGlzcGF0Y2hFdmVudHMgIyBPbmx5IGVtaXQgaWYgdGhlIHZhbHVlIGlzIHRydWUgKGluIG9yZGVyIHRvIGNvbmZvcm0gdG8gd2ViIHN0YW5kYXJkcylcblxuXG53aGVuICdET01DaGVja2JveCdcblx0aWYgQGlzTXVsdGlDaG9pY2UgIyBUaGUgbmV3VmFsdWUgdmFyIHdpbGwgaG9sZCB0aGUgY2hlY2tib3ggZmllbGQgYmluZGluZyBhcyBpdHMgdmFsdWUgaWYgdGhlIHVwZGF0ZSBpcyBjb21pbmcgZnJvbSB0aGUgY2hlY2tib3ggZmllbGQncyBjaGFuZ2UgZXZlbnRcblx0XHRvdmVyd3JpdGVQcmV2aW91cyA9IG5vdCBjaGVja0lmLmlzQmluZGluZyhuZXdWYWx1ZSkgIyBNZWFucyB0aGF0IGEgbmV3IGFycmF5IHdhcyBzdXBwbGllZFxuXHRcdG5ld0Nob2ljZXMgPSBbXS5jb25jYXQobmV3VmFsdWUpICMgVGhpcyAqbm9ybWFsaXplcyogdGhlIG5ldyB2YWx1ZSBpbnRvIGFuIGFycmF5XG5cdFx0XG5cdFx0Zm9yIHZhbHVlLGluZGV4IGluIG5ld0Nob2ljZXNcblx0XHRcdG5ld0Nob2ljZXNbaW5kZXhdID0gaWYgY2hlY2tJZi5pc0JpbmRpbmcodmFsdWUpIHRoZW4gdmFsdWUgZWxzZSBAY2hvaWNlc1t2YWx1ZV1cblx0XHRcblx0XHRuZXdWYWx1ZUFycmF5ID0gW11cblx0XHRmb3IgY2hvaWNlTmFtZSxjaG9pY2VCaW5kaW5nIG9mIEBjaG9pY2VzXG5cdFx0XHRpZiBvdmVyd3JpdGVQcmV2aW91c1xuXHRcdFx0XHRuZXdDaG9pY2VWYWx1ZSA9IHRhcmdldEluY2x1ZGVzKG5ld0Nob2ljZXMsIGNob2ljZUJpbmRpbmcpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5ld0Nob2ljZVZhbHVlID0gY2hvaWNlQmluZGluZy52YWx1ZVxuXHRcdFx0XG5cdFx0XHRjaG9pY2VCaW5kaW5nLnNldFZhbHVlKG5ld0Nob2ljZVZhbHVlLCBwdWJsaXNoZXIpXG5cdFx0XHRuZXdWYWx1ZUFycmF5LnB1c2goY2hvaWNlTmFtZSkgaWYgbmV3Q2hvaWNlVmFsdWVcblxuXHRcdG5ld1ZhbHVlID0gbmV3VmFsdWVBcnJheVxuXG5cblx0ZWxzZVxuXHRcdG5ld1ZhbHVlID0gISFuZXdWYWx1ZSAjIENvbnZlcnQgdG8gQm9vbGVhblxuXHRcdHJldHVybiBpZiBuZXdWYWx1ZSBpcyBAdmFsdWVcblx0XHR1bmxlc3MgQG9iamVjdC5jaGVja2VkIGlzIG5ld1ZhbHVlXG5cdFx0XHRAb2JqZWN0LmNoZWNrZWQgPSBuZXdWYWx1ZVxuXHRcdFx0QG9iamVjdC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KCkpIGlmIHNldHRpbmdzLmRpc3BhdGNoRXZlbnRzXG5cblxuXG53aGVuICdET01BdHRyJ1xuXHRAb2JqZWN0LnNldEF0dHJpYnV0ZShAcHJvcGVydHksIG5ld1ZhbHVlKVxuIiwiIyMjKlxuICogU3RhZ2UgZGVmaW5pdGlvbnM6XG4gKiBcbiAqIDA6IFNlbGVjdGlvbjpcdFx0XHRHb3Qgc2VsZWN0b3IsIGF3YWl0aW5nIG9iamVjdC5cbiAqIDE6IEluZGljYXRpb246XHRcdFx0R290IG9iamVjdCwgYXdhaXRpbmcgcHJveGllZCBwcm9wZXJ0eSAvIGZ1bmN0aW9uIC8gQmluZGluZy1vYmplY3QuXG4gKiAyOiBCaW5kaW5nIENvbXBsZXRlOlx0XHRDb21wbGV0ZSwgYXdhaXRpbmcgYWRkaXRpb25hbCAob3B0aW9uYWwpIGJpbmRpbmdzL211dGF0aW9ucy5cbiMjI1xuQmluZGluZ0ludGVyZmFjZSA9IChvcHRpb25zLCBpbmhlcml0ZWRTdGF0ZSktPlxuXHRpZiBpbmhlcml0ZWRTdGF0ZVxuXHRcdGV4dGVuZFN0YXRlKEAsIGluaGVyaXRlZFN0YXRlKVxuXHRcdEBzdGFnZSA9IDFcblx0ZWxzZVxuXHRcdEBzdGFnZSA9IDBcblx0XHRAc3VicyA9IFtdXG5cdFx0QG9wdGlvbnNQYXNzZWQgPSBvcHRpb25zIHx8PSB7fVxuXHRcdEBvcHRpb25zID0ge31cblx0XHRmb3Iga2V5IG9mIGRlZmF1bHRPcHRpb25zXG5cdFx0XHRAb3B0aW9uc1trZXldID0gaWYgb3B0aW9uc1trZXldPyB0aGVuIG9wdGlvbnNba2V5XSBlbHNlIGRlZmF1bHRPcHRpb25zW2tleV1cblx0XG5cdHJldHVybiBAXHRcdFx0XG5cdFxuXG5cblxuaW1wb3J0ICcuL3Byb3RvdHlwZS1wcml2YXRlJ1xuaW1wb3J0ICcuL3Byb3RvdHlwZS1wdWJsaWMnIiwiQmluZGluZ0ludGVyZmFjZVByaXZhdGUgPVxuXHRzZWxmQ2xvbmU6ICgpLT4gbmV3IEJpbmRpbmdJbnRlcmZhY2UobnVsbCwgQClcblx0XG5cdGRlZmluZU1haW5Qcm9wczogKGJpbmRpbmcpLT5cblx0XHRAXyA9IGJpbmRpbmdcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyBALFxuXHRcdFx0J3ZhbHVlJzpcdFx0Z2V0OiAoKS0+IGJpbmRpbmcudmFsdWVcblx0XHRcdCdvcmlnaW5hbCc6XHRcdGdldDogKCktPiBiaW5kaW5nLm9iamVjdHMgb3IgYmluZGluZy5vYmplY3Rcblx0XHRcdCdzdWJzY3JpYmVycyc6XHRnZXQ6ICgpLT4gYmluZGluZy5zdWJzLnNsaWNlKCkubWFwIChzdWIpLT4gc3ViLm9iamVjdFxuXG5cblxuXG5cdGNyZWF0ZUJpbmRpbmc6IChzdWJqZWN0LCBuZXdPYmplY3RUeXBlLCBiaW5kaW5nSW50ZXJmYWNlLCBpc0Z1bmN0aW9uKS0+XG5cdFx0QG9iamVjdCA9IHN1YmplY3Rcblx0XHRjYWNoZWRCaW5kaW5nID0gY2FjaGUuZ2V0KHN1YmplY3QsIGlzRnVuY3Rpb24sIEBzZWxlY3RvciwgQGlzTXVsdGlDaG9pY2UpXG5cdFx0XG5cdFx0aWYgY2FjaGVkQmluZGluZyAjIEV4aXQgZWFybHkgYnkgcmV0dXJuaW5nIHRoZSBzdWJqZWN0IGZyb20gY2FjaGUgaWYgaXMgYWxyZWFkeSBpbiB0aGVyZVxuXHRcdFx0cmV0dXJuIEBwYXRjaENhY2hlZEJpbmRpbmcoY2FjaGVkQmluZGluZylcblxuXHRcdGVsc2Vcblx0XHRcdG5ld0JpbmRpbmcgPSBuZXcgQmluZGluZyhzdWJqZWN0LCBuZXdPYmplY3RUeXBlLCBiaW5kaW5nSW50ZXJmYWNlKVxuXHRcdFx0Y2FjaGUuc2V0KG5ld0JpbmRpbmcsIGlzRnVuY3Rpb24pXG5cdFx0XHRyZXR1cm4gbmV3QmluZGluZ1xuXG5cblxuXHRwYXRjaENhY2hlZEJpbmRpbmc6IChjYWNoZWRCaW5kaW5nKS0+XG5cdFx0aWYgY2FjaGVkQmluZGluZy50eXBlIGlzICdPYmplY3RQcm9wJyBhbmQgQHByb3BlcnR5IG5vdCBvZiBAb2JqZWN0ICMgVGhpcyBwcm9wZXJ0eSB3YXMgbWFudWFsbHkgZGVsZXRlZCBhbmQgbmVlZHMgaXRzIHByb3AgdG8gYmUgcmUtZGVmaW5lZCBhcyBhIGxpdmUgb25lXG5cdFx0XHRjb252ZXJ0VG9MaXZlKGNhY2hlZEJpbmRpbmcsIEBvYmplY3QpXG5cblx0XHRpZiBAc2F2ZU9wdGlvbnNcblx0XHRcdGNhY2hlZEJpbmRpbmcub3B0aW9uc0RlZmF1bHRbb3B0aW9uXSA9IHZhbHVlIGZvciBvcHRpb24sdmFsdWUgb2YgQG9wdGlvbnNQYXNzZWRcblxuXHRcdGZvciBrZXksdmFsdWUgb2YgY2FjaGVkQmluZGluZy5vcHRpb25zRGVmYXVsdFxuXHRcdFx0QG9wdGlvbnNba2V5XSA9IGlmIGNoZWNrSWYuaXNEZWZpbmVkKEBvcHRpb25zUGFzc2VkW2tleV0pIHRoZW4gQG9wdGlvbnNQYXNzZWRba2V5XSBlbHNlIHZhbHVlXG5cdFx0XG5cdFx0cmV0dXJuIGNhY2hlZEJpbmRpbmdcblxuXG5cblx0c2V0UHJvcGVydHk6IChzdWJqZWN0KS0+XG5cdFx0c3ViamVjdCA9IHN1YmplY3QudG9TdHJpbmcoKSBpZiBjaGVja0lmLmlzTnVtYmVyKHN1YmplY3QpXG5cdFx0QHNlbGVjdG9yID0gQHByb3BlcnR5ID0gc3ViamVjdFxuXG5cdFx0XG5cdFx0dW5sZXNzIEBvcHRpb25zLnNpbXBsZVNlbGVjdG9yXG5cdFx0XHRpZiB0YXJnZXRJbmNsdWRlcyhzdWJqZWN0LCAnOicpXG5cdFx0XHRcdHNwbGl0ID0gc3ViamVjdC5zcGxpdCgnOicpXG5cdFx0XHRcdEBkZXNjcmlwdG9yID0gc3BsaXQuc2xpY2UoMCwgLTEpLmpvaW4oJzonKVxuXHRcdFx0XHRAcHJvcGVydHkgPSBzcGxpdFtzcGxpdC5sZW5ndGgtMV1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiB0YXJnZXRJbmNsdWRlcyhzdWJqZWN0LCAnLicpICMgUGxhY2Vob2xkZXIgZXh0cmFjdGlvblxuXHRcdFx0XHRzcGxpdCA9IEBwcm9wZXJ0eS5zcGxpdCgnLicpICMgV2UgdXNlICdAcHJvcGVydHknIGluc3RlYWQgb2YgJ3N1YmplY3QnIGJlY2F1c2UgaXQgbWF5IGhhdmUgYmVlbiBtb2RpZmllZCBieSB0aGUgcHJldmlvdXMgJzonIGRlc2NyaXB0b3IgY2hlY2tcblx0XHRcdFx0QHByb3BlcnR5ID0gc3BsaXRbMF1cdFx0XHRcdFxuXHRcdFx0XHRAcGhvbGRlciA9IHNwbGl0LnNsaWNlKDEpLmpvaW4oJy4nKVxuXG5cblxuXHRcdFx0aWYgdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdldmVudCcpXG5cdFx0XHRcdGlmIHRhcmdldEluY2x1ZGVzKHN1YmplY3QsICcjJylcblx0XHRcdFx0XHRzcGxpdCA9IEBwcm9wZXJ0eS5zcGxpdCgnIycpXG5cdFx0XHRcdFx0QGV2ZW50TmFtZSA9IHNwbGl0WzBdXG5cdFx0XHRcdFx0QHByb3BlcnR5ID0gc3BsaXRbMV1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdEBldmVudE5hbWUgPSBAcHJvcGVydHlcblx0XHRcdFx0XHRAcHJvcGVydHkgPSAwXG5cblx0XHRcdFx0dGhyb3dXYXJuaW5nKCdiYWRFdmVudEFyZycsMSkgaWYgaXNOYU4gcGFyc2VJbnQoQHByb3BlcnR5KVxuXG5cdFx0cmV0dXJuIEBcblxuXG5cblx0c2V0T2JqZWN0OiAoc3ViamVjdCwgaXNGdW5jdGlvbiktPlxuXHRcdEBzdGFnZSA9IDFcblx0XHRpbXBvcnQgJy4vcHJvdG90eXBlLXByaXZhdGUuc2V0T2JqZWN0LXBhcnNlRE9NT2JqZWN0J1xuXHRcdFxuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiBpc0Z1bmN0aW9uXG5cdFx0XHRcdG5ld09iamVjdFR5cGUgPSAnRnVuYydcblx0XHRcdFxuXHRcdFx0d2hlbiBAcGhvbGRlclxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ1Bob2xkZXInXG5cdFx0XHRcblx0XHRcdHdoZW4gdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdhcnJheScpIGFuZCBjaGVja0lmLmlzQXJyYXkoc3ViamVjdFtAcHJvcGVydHldKVxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0FycmF5J1xuXHRcdFx0XG5cdFx0XHR3aGVuIHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnZXZlbnQnKVxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0V2ZW50J1xuXHRcdFx0XHRpbXBvcnQgJy4vcHJvdG90eXBlLXByaXZhdGUuc2V0T2JqZWN0LWRlZmluZUV2ZW50TWV0aG9kcydcblxuXHRcdFx0d2hlbiB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ2Z1bmMnKVxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ1Byb3h5J1xuXHRcdFx0XG5cdFx0XHR3aGVuIGlzRG9tUmFkaW8gXG5cdFx0XHRcdG5ld09iamVjdFR5cGUgPSAnRE9NUmFkaW8nXG5cblx0XHRcdHdoZW4gaXNEb21DaGVja2JveCBcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdET01DaGVja2JveCdcblxuXHRcdFx0d2hlbiB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ2F0dHInKVxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0RPTUF0dHInXG5cblx0XHRcdGVsc2Vcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdPYmplY3RQcm9wJ1xuXHRcdFxuXG5cdFx0aWYgdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdtdWx0aScpXG5cdFx0XHR0aHJvd0Vycm9yKCdlbXB0eUxpc3QnKSBpZiBub3Qgc3ViamVjdC5sZW5ndGhcblx0XHRcdEBkZWZpbmVNYWluUHJvcHMgbmV3IEdyb3VwQmluZGluZyhALCBzdWJqZWN0LCBuZXdPYmplY3RUeXBlKVxuXHRcdGVsc2Vcblx0XHRcdEBkZWZpbmVNYWluUHJvcHMgQGNyZWF0ZUJpbmRpbmcoc3ViamVjdCwgbmV3T2JqZWN0VHlwZSwgQCwgaXNGdW5jdGlvbilcblxuXG5cdFx0aWYgdGFyZ2V0SW5jbHVkZXMoQF8udHlwZSwgJ0V2ZW50Jykgb3IgdGFyZ2V0SW5jbHVkZXMoQF8udHlwZSwgJ1Byb3h5Jylcblx0XHRcdEBvcHRpb25zLnVwZGF0ZU9uQmluZCA9IGZhbHNlXG5cdFx0ZWxzZSBpZiB0YXJnZXRJbmNsdWRlcyhAXy50eXBlLCAnRnVuYycpXG5cdFx0XHRAb3B0aW9ucy51cGRhdGVPbkJpbmQgPSB0cnVlXG5cblxuXHRcdGlmIEBjb21wbGV0ZUNhbGxiYWNrXG5cdFx0XHRyZXR1cm4gQGNvbXBsZXRlQ2FsbGJhY2soQClcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gQFxuXG5cblxuXG5cdGFkZFRvUHVibGlzaGVyOiAocHVibGlzaGVySW50ZXJmYWNlKS0+XG5cdFx0cHVibGlzaGVySW50ZXJmYWNlLnN0YWdlID0gMlxuXHRcdHB1Ymxpc2hlckludGVyZmFjZS5zdWJzLnB1c2goQClcblx0XHRhbHJlYWR5SGFkU3ViID0gcHVibGlzaGVySW50ZXJmYWNlLl8uYWRkU3ViKEBfLCBwdWJsaXNoZXJJbnRlcmZhY2Uub3B0aW9ucywgcHVibGlzaGVySW50ZXJmYWNlLnVwZGF0ZU9uY2UpXG5cblx0XHRpZiBwdWJsaXNoZXJJbnRlcmZhY2UudXBkYXRlT25jZVxuXHRcdFx0ZGVsZXRlIHB1Ymxpc2hlckludGVyZmFjZS51cGRhdGVPbmNlXG5cdFx0XG5cdFx0ZWxzZSBpZiBwdWJsaXNoZXJJbnRlcmZhY2Uub3B0aW9ucy51cGRhdGVPbkJpbmQgYW5kIG5vdCBhbHJlYWR5SGFkU3ViXG5cdFx0XHRpZiBAXy5pc011bHRpXG5cdFx0XHRcdHB1Ymxpc2hlckludGVyZmFjZS5fLnVwZGF0ZVN1YihiaW5kaW5nLCBwdWJsaXNoZXJJbnRlcmZhY2UuXykgZm9yIGJpbmRpbmcgaW4gQF8uYmluZGluZ3Ncblx0XHRcdGVsc2Vcblx0XHRcdFx0cHVibGlzaGVySW50ZXJmYWNlLl8udXBkYXRlU3ViKEBfLCBwdWJsaXNoZXJJbnRlcmZhY2UuXylcblxuXHRcdHJldHVyblxuXG5cblxuXG5cbiIsImlzSXRlcmFibGUgPSBzdWJqZWN0IGlzbnQgd2luZG93IGFuZCBjaGVja0lmLmlzSXRlcmFibGUoc3ViamVjdCkgYW5kIG5vdCBzdWJqZWN0Lm5vZGVUeXBlXG5zYW1wbGVJdGVtID0gaWYgaXNJdGVyYWJsZSB0aGVuIHN1YmplY3RbMF0gZWxzZSBzdWJqZWN0XG5cbmlmIG5vdCBzYW1wbGVJdGVtXG5cdHRocm93RXJyb3IoJ2VtcHR5TGlzdCcpIGlmIGlzSXRlcmFibGUgYW5kIGNoZWNrSWYuaXNFbENvbGxlY3Rpb24oc3ViamVjdClcblxuZWxzZSBpZiBAaXNEb20gPSBjaGVja0lmLmlzRG9tKHNhbXBsZUl0ZW0pXG5cblx0aWYgQHByb3BlcnR5IGlzICdjaGVja2VkJ1xuXHRcdGlzRG9tUmFkaW8gPSBzYW1wbGVJdGVtIGFuZCBjaGVja0lmLmlzRG9tUmFkaW8oc2FtcGxlSXRlbSlcblx0XHRpc0RvbUNoZWNrYm94ID0gbm90IGlzRG9tUmFkaW8gYW5kIHNhbXBsZUl0ZW0gYW5kIGNoZWNrSWYuaXNEb21DaGVja2JveChzYW1wbGVJdGVtKVxuXHRcblx0ZWxzZSBpZiBAcHJvcGVydHkgaXMgJ3ZhbHVlJ1xuXHRcdEBpc0RvbUlucHV0ID0gY2hlY2tJZi5pc0RvbUlucHV0KHNhbXBsZUl0ZW0pXG5cdFxuXG5cdGlmIGlzSXRlcmFibGUgYW5kIG5vdCB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ211bHRpJylcblx0XHRpZiBzdWJqZWN0Lmxlbmd0aCBpcyAxXG5cdFx0XHRzdWJqZWN0ID0gc3ViamVjdFswXVxuXG5cdFx0ZWxzZVxuXHRcdFx0aWYgKGlzRG9tUmFkaW8gb3IgaXNEb21DaGVja2JveCkgYW5kIG5vdCBjaGVja0lmLmRvbUVsc0FyZVNhbWUoc3ViamVjdClcblx0XHRcdFx0cmV0dXJuIHRocm93V2FybmluZygnbWl4ZWRFbExpc3QnLDMpXHRcdFx0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIGlzRG9tUmFkaW8gb3IgaXNEb21DaGVja2JveFxuXHRcdFx0XHRcdEBpc011bHRpQ2hvaWNlID0gdHJ1ZVxuXHRcdFx0XHRcdHN1YmplY3QgPSBbXS5zbGljZS5jYWxsKHN1YmplY3QpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdWJqZWN0ID0gc3ViamVjdFswXVxuXHRcdFx0XHRcdHRocm93V2FybmluZygnb25seU9uZURPTUVsZW1lbnQnLDMpXG5cblxuXG5cbiIsIkBldmVudE1ldGhvZHMgPSBsaXN0ZW46QG9wdGlvbnNQYXNzZWQubGlzdGVuTWV0aG9kLCByZW1vdmU6QG9wdGlvbnNQYXNzZWQucmVtb3ZlTWV0aG9kLCBlbWl0OkBvcHRpb25zUGFzc2VkLmVtaXRNZXRob2RcblxuXG5cbmlmIG5vdCBzdWJqZWN0W0BldmVudE1ldGhvZHMubGlzdGVuXVxuXHRAZXZlbnRNZXRob2RzLmxpc3RlbiA9IGlmIGNoZWNrSWYuaXNEb21Ob2RlKHN1YmplY3QpIHRoZW4gJ2FkZEV2ZW50TGlzdGVuZXInIGVsc2UgJ29uJ1xuXG5pZiBub3Qgc3ViamVjdFtAZXZlbnRNZXRob2RzLnJlbW92ZV1cblx0QGV2ZW50TWV0aG9kcy5yZW1vdmUgPSBpZiBjaGVja0lmLmlzRG9tTm9kZShzdWJqZWN0KSB0aGVuICdyZW1vdmVFdmVudExpc3RlbmVyJyBlbHNlICdyZW1vdmVMaXN0ZW5lcidcblxuaWYgbm90IHN1YmplY3RbQGV2ZW50TWV0aG9kcy5lbWl0XVxuXHRAZXZlbnRNZXRob2RzLmVtaXQgPSBpZiBjaGVja0lmLmlzRG9tTm9kZShzdWJqZWN0KSB0aGVuICdkaXNwYXRjaEV2ZW50JyBlbHNlICdlbWl0JyIsIkJpbmRpbmdJbnRlcmZhY2U6OiA9IE9iamVjdC5jcmVhdGUgQmluZGluZ0ludGVyZmFjZVByaXZhdGUsXG5cdG9mOlx0XHRcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX29mIGlmIG5vdCBAc3RhZ2VcdFx0XHQjPT09IGlmIHN0YWdlIGlzIDBcblx0c2V0Olx0XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9zZXQgaWYgQHN0YWdlXHRcdFx0XHQjPT09IGlmIHN0YWdlIGlzIDEgb3IgMlxuXHRjaGFpblRvOlx0XHRcdGdldDogKCktPiBNRVRIT0RfY2hhaW5UbyBpZiBAc3RhZ2UgaXMgMlxuXHR0cmFuc2Zvcm1TZWxmOlx0XHRnZXQ6ICgpLT4gTUVUSE9EX3RyYW5zZm9ybVNlbGYgaWYgQHN0YWdlIGlzIDFcblx0dHJhbnNmb3JtOlx0XHRcdGdldDogKCktPiBNRVRIT0RfdHJhbnNmb3JtIGlmIEBzdGFnZSBpcyAyXG5cdHRyYW5zZm9ybUFsbDpcdFx0Z2V0OiAoKS0+IE1FVEhPRF90cmFuc2Zvcm1BbGwgaWYgQHN0YWdlIGlzIDJcblx0Y29uZGl0aW9uOlx0XHRcdGdldDogKCktPiBNRVRIT0RfY29uZGl0aW9uIGlmIEBzdGFnZSBpcyAyXG5cdGNvbmRpdGlvbkFsbDpcdFx0Z2V0OiAoKS0+IE1FVEhPRF9jb25kaXRpb25BbGwgaWYgQHN0YWdlIGlzIDJcblx0Ym90aFdheXM6XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9ib3RoV2F5cyBpZiBAc3RhZ2UgaXMgMlxuXHR1bkJpbmQ6XHRcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX3VuQmluZCBpZiBAc3RhZ2UgaXMgMlxuXHRwb2xsRXZlcnk6XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9wb2xsRXZlcnkgaWYgQHN0YWdlICM9PT0gaWYgc3RhZ2UgaXMgMSBvciAyXG5cdHN0b3BQb2xsaW5nOlx0XHRnZXQ6ICgpLT4gTUVUSE9EX3N0b3BQb2xsaW5nIGlmIEBzdGFnZSAjPT09IGlmIHN0YWdlIGlzIDEgb3IgMlxuXHRzZXRPcHRpb246XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9zZXRPcHRpb24gaWYgQHN0YWdlIGlzIDJcblx0ZGlzYWxsb3dGcm9tOlx0XHRnZXQ6ICgpLT4gaWYgQHN0YWdlIGlzIDIgYW5kICh0aGlzSW50ZXJmYWNlPUApXG5cdFx0XHRcdFx0XHRcdGdlblByb3hpZWRJbnRlcmZhY2UgZmFsc2UsIChkaXNhbGxvd0ludGVyZmFjZSktPlxuXHRcdFx0XHRcdFx0XHRcdHN1YkludGVyZmFjZSA9IHRoaXNJbnRlcmZhY2Uuc3Vic1t0aGlzSW50ZXJmYWNlLnN1YnMubGVuZ3RoLTFdXG5cdFx0XHRcdFx0XHRcdFx0dGhpc0ludGVyZmFjZS5fLmFkZERpc2FsbG93UnVsZShzdWJJbnRlcmZhY2UuXywgZGlzYWxsb3dJbnRlcmZhY2UuXylcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzSW50ZXJmYWNlXG5cdFxuXHR1cGRhdGVPbjpcdFx0XHRnZXQ6ICgpLT4gaWYgQHN0YWdlIGFuZCAodGhpc0ludGVyZmFjZT1AKSAjPT09IGlmIHN0YWdlIGlzIDEgb3IgMlxuXHRcdFx0XHRcdFx0XHRnZW5Qcm94aWVkSW50ZXJmYWNlIGZhbHNlLCAoc3ViSW50ZXJmYWNlKS0+XG5cdFx0XHRcdFx0XHRcdFx0aWYgc3ViSW50ZXJmYWNlLl8gaXNudCB0aGlzSW50ZXJmYWNlLl9cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXNJbnRlcmZhY2UuXy5wdWJzTWFwW3N1YkludGVyZmFjZS5fLklEXSA9IHN1YkludGVyZmFjZS5fXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJJbnRlcmZhY2UuXy5hZGRTdWIgZ2VuU2VsZlVwZGF0ZXIodGhpc0ludGVyZmFjZS5fLCB0cnVlKSwgc3ViSW50ZXJmYWNlLm9wdGlvbnMsIGZhbHNlLCB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXNJbnRlcmZhY2Vcblx0XG5cblx0cmVtb3ZlVXBkYXRlcjpcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBhbmQgKHRoaXNJbnRlcmZhY2U9QCkgYW5kIChzZWxmVXBkYXRlcj1AXy5zZWxmVXBkYXRlcikgIz09PSBpZiBzdGFnZSBpcyAxIG9yIDJcblx0XHRcdFx0XHRcdFx0Z2VuUHJveGllZEludGVyZmFjZSBmYWxzZSwgKHN1YkludGVyZmFjZSktPlxuXHRcdFx0XHRcdFx0XHRcdGlmIHN1YkludGVyZmFjZS5fLnN1YnNNZXRhW3NlbGZVcGRhdGVyLklEXVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXNJbnRlcmZhY2UuXy5wdWJzTWFwW3N1YkludGVyZmFjZS5fLklEXVxuXHRcdFx0XHRcdFx0XHRcdFx0c3ViSW50ZXJmYWNlLl8ucmVtb3ZlU3ViKHNlbGZVcGRhdGVyKVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cblxuXHR0bzpcdFx0XHRcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBpcyAxIGFuZCAodGhpc0ludGVyZmFjZT1AKVxuXHRcdFx0XHRcdFx0XHRnZW5Qcm94aWVkSW50ZXJmYWNlIHRydWUsIChzdWJJbnRlcmZhY2UpLT5cblx0XHRcdFx0XHRcdFx0XHRpZiBzdWJJbnRlcmZhY2UuXyBpc250IHRoaXNJbnRlcmZhY2UuX1xuXHRcdFx0XHRcdFx0XHRcdFx0c3ViSW50ZXJmYWNlLmFkZFRvUHVibGlzaGVyKHRoaXNJbnRlcmZhY2UpXG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXNJbnRlcmZhY2Vcblx0XG5cblx0YW5kOlx0XHRcdFx0Z2V0OiAoKS0+XG5cdFx0XHRcdFx0XHRcdGNsb25lSW50ZXJmYWNlID0gQHNlbGZDbG9uZSgpXG5cdFx0XHRcdFx0XHRcdGlmIEBzdGFnZSBpcyAyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNsb25lSW50ZXJmYWNlXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZiBAc3RhZ2UgaXMgMVxuXHRcdFx0XHRcdFx0XHRcdGlmIG5vdCBjbG9uZUludGVyZmFjZS5fLmlzTXVsdGlcblx0XHRcdFx0XHRcdFx0XHRcdGNsb25lQmluZGluZyA9IGNsb25lSW50ZXJmYWNlLl9cblx0XHRcdFx0XHRcdFx0XHRcdGNsb25lSW50ZXJmYWNlLl8gPSBjbG9uZUludGVyZmFjZS5fID0gbmV3IEdyb3VwQmluZGluZyhjbG9uZUludGVyZmFjZSlcblx0XHRcdFx0XHRcdFx0XHRcdGNsb25lSW50ZXJmYWNlLl8uYWRkQmluZGluZyhjbG9uZUJpbmRpbmcpXG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGdlblByb3hpZWRJbnRlcmZhY2UgZmFsc2UsIChzaWJsaW5nSW50ZXJmYWNlKS0+XG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9uZUludGVyZmFjZS5fLmFkZEJpbmRpbmcoc2libGluZ0ludGVyZmFjZS5fKVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNsb25lSW50ZXJmYWNlXG5cdFxuXG5cdG9uY2U6XHRcdFx0XHRnZXQ6ICgpLT4gaWYgQHN0YWdlIGlzIDFcblx0XHRcdFx0XHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBAc2VsZkNsb25lKClcblx0XHRcdFx0XHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4udXBkYXRlT25jZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVyZmFjZVRvUmV0dXJuXG5cblx0IyA9PT09IEFsaWFzZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdHVwZGF0ZTpcdFx0XHRcdGdldDogKCktPiBAc2V0XG5cdHR3b1dheTpcdFx0XHRcdGdldDogKCktPiBAYm90aFdheXNcblx0cGlwZTpcdFx0XHRcdGdldDogKCktPiBAY2hhaW5Ub1xuXG5cblxuXG5NRVRIT0Rfb2YgPSAob2JqZWN0KS0+XG5cdHRocm93RXJyb3JCYWRBcmcob2JqZWN0KSB1bmxlc3MgY2hlY2tJZi5pc09iamVjdChvYmplY3QpIG9yIGNoZWNrSWYuaXNGdW5jdGlvbihvYmplY3QpXG5cdFxuXHRpZiBjaGVja0lmLmlzQmluZGluZ0ludGVyZmFjZShvYmplY3QpXG5cdFx0b2JqZWN0ID0gb2JqZWN0Lm9iamVjdFxuXG5cdEBzdGFnZSA9IDFcblx0cmV0dXJuIEBzZXRPYmplY3Qob2JqZWN0KVxuXG5cblxuXG5cbk1FVEhPRF9jaGFpblRvID0gKHN1YmplY3QsIHNwZWNpZmljT3B0aW9ucywgc2F2ZU9wdGlvbnMpLT5cblx0cmV0dXJuIFNpbXBseUJpbmQoQHN1YnNbQHN1YnMubGVuZ3RoLTFdKS50byhzdWJqZWN0LCBzcGVjaWZpY09wdGlvbnMsIHNhdmVPcHRpb25zKVxuXG5cblxuXG5cbk1FVEhPRF9zZXQgPSAobmV3VmFsdWUpLT5cblx0QF8uc2V0VmFsdWUobmV3VmFsdWUpXG5cdHJldHVybiBAXG5cblxuXG5cblxuXG5cblxuTUVUSE9EX3RyYW5zZm9ybVNlbGYgPSAodHJhbnNmb3JtRm4pLT4gIyBBcHBsaWVkIG9ubHkgdG8gdGhlIGxhc3Qgc3ViXG5cdGlmIG5vdCBjaGVja0lmLmlzRnVuY3Rpb24odHJhbnNmb3JtRm4pXG5cdFx0dGhyb3dXYXJuaW5nKCdmbk9ubHknLDEpXG5cdGVsc2Vcblx0XHRAXy5zZXRTZWxmVHJhbnNmb3JtKHRyYW5zZm9ybUZuLCBAb3B0aW9ucy51cGRhdGVPbkJpbmQpXG5cdFx0XG5cdHJldHVybiBAXG5cblxuTUVUSE9EX3RyYW5zZm9ybSA9ICh0cmFuc2Zvcm1GbiktPiAjIEFwcGxpZWQgb25seSB0byB0aGUgbGFzdCBzdWJcblx0QF8uYWRkTW9kaWZpZXJGbigndHJhbnNmb3JtRm4nLCBAc3Vicy5zbGljZSgtMSksIHRyYW5zZm9ybUZuLCBAb3B0aW9ucy51cGRhdGVPbkJpbmQpXG5cdHJldHVybiBAXG5cblxuTUVUSE9EX3RyYW5zZm9ybUFsbCA9ICh0cmFuc2Zvcm1GbiktPiAjIEFwcGxpZWQgdG8gZW50cmllIHN1YnMgc2V0XHRcdFxuXHRAXy5hZGRNb2RpZmllckZuKCd0cmFuc2Zvcm1GbicsIEBzdWJzLCB0cmFuc2Zvcm1GbiwgQG9wdGlvbnMudXBkYXRlT25CaW5kKVxuXHRyZXR1cm4gQFxuXG5cblxuXG5cblxuTUVUSE9EX2NvbmRpdGlvbiA9IChjb25kaXRpb25GbiktPiAjIEFwcGxpZWQgb25seSB0byB0aGUgbGFzdCBzdWJcblx0QF8uYWRkTW9kaWZpZXJGbignY29uZGl0aW9uRm4nLCBAc3Vicy5zbGljZSgtMSksIGNvbmRpdGlvbkZuKVxuXHRyZXR1cm4gQFxuXG5cbk1FVEhPRF9jb25kaXRpb25BbGwgPSAoY29uZGl0aW9uRm4pLT4gIyBBcHBsaWVkIHRvIGVudHJpZSBzdWJzIHNldFxuXHRAXy5hZGRNb2RpZmllckZuKCdjb25kaXRpb25GbicsIEBzdWJzLCBjb25kaXRpb25Gbilcblx0cmV0dXJuIEBcblxuXG5cblxuXG5cblxuTUVUSE9EX2JvdGhXYXlzID0gKGFsdFRyYW5zZm9ybSktPiAjIEFwcGxpZWQgb25seSB0byB0aGUgbGFzdCBzdWJcblx0c3ViID0gQHN1YnNbQHN1YnMubGVuZ3RoLTFdICMgTGFzdCBQcm94aWVkXG5cdHN1YkJpbmRpbmcgPSBzdWIuX1xuXHRiaW5kaW5ncyA9IGlmIEBfLmlzTXVsdGkgdGhlbiBAXy5iaW5kaW5ncyBlbHNlIFtAX11cblxuXHRzdWJCaW5kaW5nLmFkZFN1YihAXywgc3ViLm9wdGlvbnMpXG5cdFxuXHRmb3IgYmluZGluZyBpbiBiaW5kaW5nc1xuXHRcdG9yaWdpblRyYW5zZm9ybSA9IGJpbmRpbmcuc3Vic01ldGFbc3ViQmluZGluZy5JRF0udHJhbnNmb3JtRm5cblx0XHRvcmlnaW5Db25kaXRpb24gPSBiaW5kaW5nLnN1YnNNZXRhW3N1YkJpbmRpbmcuSURdLmNvbmRpdGlvbkZuXG5cblx0XHRpZiBvcmlnaW5UcmFuc2Zvcm0gb3IgYWx0VHJhbnNmb3JtXG5cdFx0XHR0cmFuc2Zvcm1Ub1VzZSA9IGlmIGNoZWNrSWYuaXNGdW5jdGlvbihhbHRUcmFuc2Zvcm0pIHRoZW4gYWx0VHJhbnNmb3JtIGVsc2Ugb3JpZ2luVHJhbnNmb3JtXG5cdFx0XHRzdWJCaW5kaW5nLnN1YnNNZXRhW0BfLklEXS50cmFuc2Zvcm1GbiA9IHRyYW5zZm9ybVRvVXNlIGlmIHRyYW5zZm9ybVRvVXNlIGFuZCBhbHRUcmFuc2Zvcm0gaXNudCBmYWxzZVxuXG5cdFx0aWYgb3JpZ2luQ29uZGl0aW9uXG5cdFx0XHRzdWJCaW5kaW5nLnN1YnNNZXRhW0BfLklEXS5jb25kaXRpb25GbiA9IG9yaWdpbkNvbmRpdGlvblxuXG5cdHJldHVybiBAXG5cblxuXG5NRVRIT0RfdW5CaW5kID0gKGJvdGhXYXlzKS0+ICMgQXBwbGllZCB0byBhbGwgc3Vic1xuXHRAXy5yZW1vdmVTdWIoc3ViLl8sIGJvdGhXYXlzKSBmb3Igc3ViIGluIEBzdWJzXG5cdHJldHVybiBAXG5cblxuXG5cblxuTUVUSE9EX3BvbGxFdmVyeSA9ICh0aW1lKS0+XG5cdEBfLmFkZFBvbGxJbnRlcnZhbCh0aW1lKVxuXHRyZXR1cm4gQFxuXG5cblxuTUVUSE9EX3N0b3BQb2xsaW5nID0gKCktPlxuXHRAXy5yZW1vdmVQb2xsSW50ZXJ2YWwoKVxuXHRyZXR1cm4gQFxuXG5cblxuTUVUSE9EX3NldE9wdGlvbiA9IChvcHRpb25OYW1lLCBuZXdWYWx1ZSktPlxuXHRAXy5zdWJzTWV0YVtAc3Vic1tAc3Vicy5sZW5ndGgtMV0uXy5JRF0ub3B0c1tvcHRpb25OYW1lXSA9IG5ld1ZhbHVlXHRcblx0cmV0dXJuIEBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIkdyb3VwQmluZGluZyA9IChiaW5kaW5nSW50ZXJmYWNlLCBvYmplY3RzLCBvYmplY3RUeXBlKS0+XG5cdGJpbmRpbmdJbnRlcmZhY2Uuc2VsZWN0b3IgPSBiaW5kaW5nSW50ZXJmYWNlLnNlbGVjdG9yLnNsaWNlKDYpICMgVGFrZSBvdXQgdGhlICdtdWx0aTonXG5cdGV4dGVuZFN0YXRlKEAsIEBpbnRlcmZhY2UgPSBiaW5kaW5nSW50ZXJmYWNlKVxuXHRAaXNNdWx0aSA9IHRydWVcblx0QGJpbmRpbmdzID0gYmluZGluZ3MgPSBbXVxuXG5cdGlmIG9iamVjdHNcblx0XHRAYWRkQmluZGluZyhvYmplY3QsIG9iamVjdFR5cGUpIGZvciBvYmplY3QgaW4gb2JqZWN0c1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIEAsXG5cdFx0J3R5cGUnOlx0XHRcdFx0Z2V0OiAoKS0+IGJpbmRpbmdzLm1hcCAoYmluZGluZyktPiBiaW5kaW5nLnR5cGVcblx0XHQndmFsdWUnOiBcdFx0XHRnZXQ6ICgpLT4gYmluZGluZ3MubWFwIChiaW5kaW5nKS0+IGJpbmRpbmcudmFsdWVcblxuXG5cblxuXG5cbnByb3RvID0gR3JvdXBCaW5kaW5nOjogPSBPYmplY3QuY3JlYXRlKEJpbmRpbmdJbnRlcmZhY2VQcml2YXRlKVxuXG5PYmplY3Qua2V5cyhCaW5kaW5nOjopLmZvckVhY2ggKG1ldGhvZE5hbWUpLT5cdFxuXHRwcm90b1ttZXRob2ROYW1lXSA9IChhLGIsYyxkKS0+ICMgRm91ciBhcmd1bWVudHMgaXMgdGhlIG1vc3QgZXZlciBwYXNzZWQgdG8gYW55IG1ldGhvZCBmcm9tIEJpbmRpbmdJbnRlcmZhY2UgbWV0aG9kc1xuXHRcdGZvciBiaW5kaW5nIGluIEBiaW5kaW5nc1xuXHRcdFx0YiA9IGJpbmRpbmcgaWYgbWV0aG9kTmFtZSBpcyAndXBkYXRlU3ViJ1xuXHRcdFx0YmluZGluZ1ttZXRob2ROYW1lXShhLGIsYyxkKVxuXHRcdFxuXHRcdHJldHVyblxuXG5cbnByb3RvLmFkZEJpbmRpbmcgPSAob2JqZWN0LCBvYmplY3RUeXBlKS0+XG5cdEBiaW5kaW5ncy5wdXNoIGlmIG5vdCBvYmplY3RUeXBlIHRoZW4gb2JqZWN0IGVsc2UgQGNyZWF0ZUJpbmRpbmcob2JqZWN0LCBvYmplY3RUeXBlLCBAaW50ZXJmYWNlKVxuXHRyZXR1cm4iLCJleHRlbmQgPSByZXF1aXJlICcuL2V4dGVuZCdcblxubm9ybWFsaXplS2V5cyA9IChrZXlzKS0+IGlmIGtleXNcblx0b3V0cHV0ID0ge31cblx0aWYgdHlwZW9mIGtleXMgaXNudCAnb2JqZWN0J1xuXHRcdG91dHB1dFtrZXlzXSA9IHRydWVcblx0ZWxzZVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhrZXlzKSBpZiBub3QgQXJyYXkuaXNBcnJheShrZXlzKVxuXHRcdG91dHB1dFtrZXldID0gdHJ1ZSBmb3Iga2V5IGluIGtleXNcblxuXHRyZXR1cm4gb3V0cHV0XG5cblxubmV3QnVpbGRlciA9IChpc0Jhc2UpLT5cblx0YnVpbGRlciA9ICh0YXJnZXQpLT5cblx0XHRFWFBBTkRfQVJHVU1FTlRTKHNvdXJjZXMpXG5cdFx0aWYgYnVpbGRlci5vcHRpb25zLnRhcmdldFxuXHRcdFx0dGhlVGFyZ2V0ID0gYnVpbGRlci5vcHRpb25zLnRhcmdldFxuXHRcdGVsc2Vcblx0XHRcdHRoZVRhcmdldCA9IHRhcmdldFxuXHRcdFx0c291cmNlcy5zaGlmdCgpXG5cdFx0XG5cdFx0ZXh0ZW5kKGJ1aWxkZXIub3B0aW9ucywgdGhlVGFyZ2V0LCBzb3VyY2VzKVxuXHRcblx0YnVpbGRlci5pc0Jhc2UgPSB0cnVlIGlmIGlzQmFzZVxuXHRidWlsZGVyLm9wdGlvbnMgPSB7fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhidWlsZGVyLCBtb2RpZmllcnMpXG5cdHJldHVybiBidWlsZGVyXG5cblxubW9kaWZpZXJzID0gXG5cdCdkZWVwJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLmRlZXAgPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnb3duJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLm93biA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdhbGxvd051bGwnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMuYWxsb3dOdWxsID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J251bGxEZWxldGVzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLm51bGxEZWxldGVzID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J2NvbmNhdCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5jb25jYXQgPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnY2xvbmUnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMudGFyZ2V0ID0ge31cblx0XHRyZXR1cm4gX1xuXG5cdCdub3REZWVwJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMubm90RGVlcCA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J2RlZXBPbmx5JzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMuZGVlcE9ubHkgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdrZXlzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMua2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J25vdEtleXMnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRyZXR1cm4gKGtleXMpLT5cblx0XHRcdF8ub3B0aW9ucy5ub3RLZXlzID0gbm9ybWFsaXplS2V5cyhrZXlzKVx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXHQndHJhbnNmb3JtJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuICh0cmFuc2Zvcm0pLT5cblx0XHRcdGlmIHR5cGVvZiB0cmFuc2Zvcm0gaXMgJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRfLm9wdGlvbnMuZ2xvYmFsVHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cdFx0XHRlbHNlIGlmIHRyYW5zZm9ybSBhbmQgdHlwZW9mIHRyYW5zZm9ybSBpcyAnb2JqZWN0J1xuXHRcdFx0XHRfLm9wdGlvbnMudHJhbnNmb3JtcyA9IHRyYW5zZm9ybVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cblx0J2ZpbHRlcic6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoZmlsdGVyKS0+XG5cdFx0XHRpZiB0eXBlb2YgZmlsdGVyIGlzICdmdW5jdGlvbidcblx0XHRcdFx0Xy5vcHRpb25zLmdsb2JhbEZpbHRlciA9IGZpbHRlclxuXHRcdFx0ZWxzZSBpZiBmaWx0ZXIgYW5kIHR5cGVvZiBmaWx0ZXIgaXMgJ29iamVjdCdcblx0XHRcdFx0Xy5vcHRpb25zLmZpbHRlcnMgPSBmaWx0ZXJcblx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IG5ld0J1aWxkZXIodHJ1ZSlcbmV4cG9ydHMudmVyc2lvbiA9IGltcG9ydCAnLi4vcGFja2FnZS5qc29uICQgdmVyc2lvbiciLCJ7XG4gIFwiX2FyZ3NcIjogW1xuICAgIFtcbiAgICAgIFwic21hcnQtZXh0ZW5kQDEuNy4zXCIsXG4gICAgICBcIi9Vc2Vycy9kYW5pZWxrYWxlbi9zYW5kYm94L2RhdGFfdGFibGVcIlxuICAgIF1cbiAgXSxcbiAgXCJfZnJvbVwiOiBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICBcIl9pZFwiOiBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICBcIl9pbkJ1bmRsZVwiOiBmYWxzZSxcbiAgXCJfaW50ZWdyaXR5XCI6IFwic2hhNTEyLVBWRUVWWUREenl4S0EwR05GTGNXWTZvSlNrUUtkYzF3NzE4ZVFwRUhjTnVUU1dZeERLMzVHemhzR2hNa1VVOGxCSWdTRURidDV4NXA0NnBSejNBdWJBPT1cIixcbiAgXCJfbG9jYXRpb25cIjogXCIvc21hcnQtZXh0ZW5kXCIsXG4gIFwiX3BoYW50b21DaGlsZHJlblwiOiB7fSxcbiAgXCJfcmVxdWVzdGVkXCI6IHtcbiAgICBcInR5cGVcIjogXCJ2ZXJzaW9uXCIsXG4gICAgXCJyZWdpc3RyeVwiOiB0cnVlLFxuICAgIFwicmF3XCI6IFwic21hcnQtZXh0ZW5kQDEuNy4zXCIsXG4gICAgXCJuYW1lXCI6IFwic21hcnQtZXh0ZW5kXCIsXG4gICAgXCJlc2NhcGVkTmFtZVwiOiBcInNtYXJ0LWV4dGVuZFwiLFxuICAgIFwicmF3U3BlY1wiOiBcIjEuNy4zXCIsXG4gICAgXCJzYXZlU3BlY1wiOiBudWxsLFxuICAgIFwiZmV0Y2hTcGVjXCI6IFwiMS43LjNcIlxuICB9LFxuICBcIl9yZXF1aXJlZEJ5XCI6IFtcbiAgICBcIi9cIixcbiAgICBcIi9zaW1wbHl3YXRjaFwiXG4gIF0sXG4gIFwiX3Jlc29sdmVkXCI6IFwiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvc21hcnQtZXh0ZW5kLy0vc21hcnQtZXh0ZW5kLTEuNy4zLnRnelwiLFxuICBcIl9zcGVjXCI6IFwiMS43LjNcIixcbiAgXCJfd2hlcmVcIjogXCIvVXNlcnMvZGFuaWVsa2FsZW4vc2FuZGJveC9kYXRhX3RhYmxlXCIsXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJkYW5pZWxrYWxlblwiXG4gIH0sXG4gIFwiYnJvd3NlclwiOiB7XG4gICAgXCIuL2RlYnVnXCI6IFwiZGlzdC9zbWFydC1leHRlbmQuZGVidWcuanNcIixcbiAgICBcIi4vZGlzdC9zbWFydC1leHRlbmQuanNcIjogXCJzcmMvaW5kZXguY29mZmVlXCJcbiAgfSxcbiAgXCJicm93c2VyaWZ5XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcInNpbXBseWltcG9ydC9jb21wYXRcIlxuICAgIF1cbiAgfSxcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zbWFydC1leHRlbmQvaXNzdWVzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiZmFsYWZlbFwiOiBcIl4yLjEuMFwiXG4gIH0sXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZXJnZS9leHRlbmQgb2JqZWN0cyAoc2hhbGxvdy9kZWVwKSB3aXRoIGdsb2JhbC9pbmRpdmlkdWFsIGZpbHRlcnMgYW5kIG1vcmUgZmVhdHVyZXNcIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmFkZ2UtZ2VuXCI6IFwiXjEuMC4yXCIsXG4gICAgXCJibHVlYmlyZFwiOiBcIl4zLjQuN1wiLFxuICAgIFwiY2hhaVwiOiBcIl4zLjUuMFwiLFxuICAgIFwiY29mZmVlLXJlZ2lzdGVyXCI6IFwiXjAuMS4wXCIsXG4gICAgXCJjb2ZmZWVpZnktY2FjaGVkXCI6IFwiXjIuMS4xXCIsXG4gICAgXCJleHRlbmRcIjogXCJeMy4wLjFcIixcbiAgICBcImdvb2dsZS1jbG9zdXJlLWNvbXBpbGVyLWpzXCI6IFwiXjIwMTcwNjI2LjAuMFwiLFxuICAgIFwibW9jaGFcIjogXCJeMy4yLjBcIixcbiAgICBcInNpbXBseWltcG9ydFwiOiBcIl40LjAuMC1zMjFcIixcbiAgICBcInNpbXBseXdhdGNoXCI6IFwiXjMuMC4wLWwyXCIsXG4gICAgXCJ1Z2xpZnktanNcIjogXCJeMy4wLjI0XCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zbWFydC1leHRlbmQjcmVhZG1lXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiZXh0ZW5kXCIsXG4gICAgXCJjbG9uZVwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJzZWxlY3RpdmVcIixcbiAgICBcIm1lcmdlXCIsXG4gICAgXCJhc3NpZ25cIixcbiAgICBcInByb3BlcnRpZXNcIlxuICBdLFxuICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgXCJtYWluXCI6IFwiZGlzdC9zbWFydC1leHRlbmQuanNcIixcbiAgXCJtb2NoYV9vcHRzXCI6IFwiLXUgdGRkIC0tY29tcGlsZXJzIGNvZmZlZTpjb2ZmZWUtcmVnaXN0ZXIgLS1zbG93IDEwMDAgLS10aW1lb3V0IDUwMDBcIixcbiAgXCJuYW1lXCI6IFwic21hcnQtZXh0ZW5kXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL3NtYXJ0LWV4dGVuZC5naXRcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJta2RpciAtcCBkaXN0LzsgbnBtIHJ1biBidWlsZDpkZWJ1ZyAmJiBucG0gcnVuIGJ1aWxkOnJlbGVhc2VcIixcbiAgICBcImJ1aWxkOmRlYnVnXCI6IFwic2ltcGx5aW1wb3J0IGJ1bmRsZSBzcmMvaW5kZXguY29mZmVlIC1kIC0tdGFyZ2V0IG5vZGUgLS11bWQgc21hcnQtZXh0ZW5kID4gZGlzdC9zbWFydC1leHRlbmQuZGVidWcuanNcIixcbiAgICBcImJ1aWxkOnJlbGVhc2VcIjogXCJzaW1wbHlpbXBvcnQgYnVuZGxlIHNyYy9pbmRleC5jb2ZmZWUgLS10YXJnZXQgbm9kZSAtLXVtZCBzbWFydC1leHRlbmQgPiBkaXN0L3NtYXJ0LWV4dGVuZC5qc1wiLFxuICAgIFwiY292ZXJhZ2VcIjogXCJucG0gcnVuIGNvdmVyYWdlOnJ1biAmJiBucG0gcnVuIGNvdmVyYWdlOmJhZGdlXCIsXG4gICAgXCJjb3ZlcmFnZTpiYWRnZVwiOiBcImJhZGdlLWdlbiAtZCAuY29uZmlnL2JhZGdlcy9jb3ZlcmFnZVwiLFxuICAgIFwiY292ZXJhZ2U6cnVuXCI6IFwiZm9yQ292ZXJhZ2U9dHJ1ZSBpc3RhbmJ1bCBjb3ZlciAtLWRpciBjb3ZlcmFnZSBub2RlX21vZHVsZXMvbW9jaGEvYmluL19tb2NoYSAtLSAkbnBtX3BhY2thZ2VfbW9jaGFfb3B0c1wiLFxuICAgIFwicG9zdHB1Ymxpc2hcIjogXCJnaXQgcHVzaFwiLFxuICAgIFwicG9zdHZlcnNpb25cIjogXCJucG0gcnVuIGJ1aWxkICYmIGdpdCBhZGQgLiAmJiBnaXQgY29tbWl0IC1hIC1tICdbQnVpbGRdJ1wiLFxuICAgIFwicHJlcHVibGlzaE9ubHlcIjogXCJDST0xIG5wbSBydW4gdGVzdFwiLFxuICAgIFwidGVzdFwiOiBcIm1vY2hhICRucG1fcGFja2FnZV9tb2NoYV9vcHRzXCIsXG4gICAgXCJ3YXRjaFwiOiBcInNpbXBseXdhdGNoIC1nICdzcmMvKicgLXggJ25wbSBydW4gYnVpbGQ6ZGVidWcgLXMnXCJcbiAgfSxcbiAgXCJzaW1wbHlpbXBvcnRcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFtcbiAgICAgIFwiY29mZmVlaWZ5LWNhY2hlZFwiLFxuICAgICAgXCIuLy5jb25maWcvdHJhbnNmb3Jtcy9tYWNyb3NcIlxuICAgIF0sXG4gICAgXCJmaW5hbFRyYW5zZm9ybVwiOiBbXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc3VwZXJcIixcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1yZW5hbWVcIixcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1zaW1wbGVcIlxuICAgIF1cbiAgfSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMS43LjNcIlxufVxuIiwiLyohXG4gKiBlc2NhcGUtaHRtbFxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTUgQW5kcmVhcyBMdWJiZVxuICogQ29weXJpZ2h0KGMpIDIwMTUgVGlhbmNoZW5nIFwiVGltb3RoeVwiIEd1XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIG1hdGNoSHRtbFJlZ0V4cCA9IC9bXCInJjw+XS87XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVIdG1sO1xuXG4vKipcbiAqIEVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gdGhlIGdpdmVuIHN0cmluZyBvZiBodG1sLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gZXNjYXBlIGZvciBpbnNlcnRpbmcgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgdmFyIHN0ciA9ICcnICsgc3RyaW5nO1xuICB2YXIgbWF0Y2ggPSBtYXRjaEh0bWxSZWdFeHAuZXhlYyhzdHIpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIGVzY2FwZTtcbiAgdmFyIGh0bWwgPSAnJztcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RJbmRleCA9IDA7XG5cbiAgZm9yIChpbmRleCA9IG1hdGNoLmluZGV4OyBpbmRleCA8IHN0ci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGluZGV4KSkge1xuICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgZXNjYXBlID0gJyZxdW90Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gJlxuICAgICAgICBlc2NhcGUgPSAnJmFtcDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6IC8vICdcbiAgICAgICAgZXNjYXBlID0gJyYjMzk7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYwOiAvLyA8XG4gICAgICAgIGVzY2FwZSA9ICcmbHQ7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYyOiAvLyA+XG4gICAgICAgIGVzY2FwZSA9ICcmZ3Q7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgaHRtbCArPSBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICBodG1sICs9IGVzY2FwZTtcbiAgfVxuXG4gIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4XG4gICAgPyBodG1sICsgc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KVxuICAgIDogaHRtbDtcbn1cbiIsIi8qKlxuICogZXZlbnQtbGl0ZS5qcyAtIExpZ2h0LXdlaWdodCBFdmVudEVtaXR0ZXIgKGxlc3MgdGhhbiAxS0Igd2hlbiBnemlwcGVkKVxuICpcbiAqIEBjb3B5cmlnaHQgWXVzdWtlIEthd2FzYWtpXG4gKiBAbGljZW5zZSBNSVRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20va2F3YW5ldC9ldmVudC1saXRlXG4gKiBAc2VlIGh0dHA6Ly9rYXdhbmV0LmdpdGh1Yi5pby9ldmVudC1saXRlL0V2ZW50TGl0ZS5odG1sXG4gKiBAZXhhbXBsZVxuICogdmFyIEV2ZW50TGl0ZSA9IHJlcXVpcmUoXCJldmVudC1saXRlXCIpO1xuICpcbiAqIGZ1bmN0aW9uIE15Q2xhc3MoKSB7Li4ufSAgICAgICAgICAgICAvLyB5b3VyIGNsYXNzXG4gKlxuICogRXZlbnRMaXRlLm1peGluKE15Q2xhc3MucHJvdG90eXBlKTsgIC8vIGltcG9ydCBldmVudCBtZXRob2RzXG4gKlxuICogdmFyIG9iaiA9IG5ldyBNeUNsYXNzKCk7XG4gKiBvYmoub24oXCJmb29cIiwgZnVuY3Rpb24oKSB7Li4ufSk7ICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJcbiAqIG9iai5vbmNlKFwiYmFyXCIsIGZ1bmN0aW9uKCkgey4uLn0pOyAgIC8vIGFkZCBvbmUtdGltZSBldmVudCBsaXN0ZW5lclxuICogb2JqLmVtaXQoXCJmb29cIik7ICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2ggZXZlbnRcbiAqIG9iai5lbWl0KFwiYmFyXCIpOyAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGFub3RoZXIgZXZlbnRcbiAqIG9iai5vZmYoXCJmb29cIik7ICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lclxuICovXG5cbmZ1bmN0aW9uIEV2ZW50TGl0ZSgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEV2ZW50TGl0ZSkpIHJldHVybiBuZXcgRXZlbnRMaXRlKCk7XG59XG5cbihmdW5jdGlvbihFdmVudExpdGUpIHtcbiAgLy8gZXhwb3J0IHRoZSBjbGFzcyBmb3Igbm9kZS5qc1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIG1vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBFdmVudExpdGU7XG5cbiAgLy8gcHJvcGVydHkgbmFtZSB0byBob2xkIGxpc3RlbmVyc1xuICB2YXIgTElTVEVORVJTID0gXCJsaXN0ZW5lcnNcIjtcblxuICAvLyBtZXRob2RzIHRvIGV4cG9ydFxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBvbjogb24sXG4gICAgb25jZTogb25jZSxcbiAgICBvZmY6IG9mZixcbiAgICBlbWl0OiBlbWl0XG4gIH07XG5cbiAgLy8gbWl4aW4gdG8gc2VsZlxuICBtaXhpbihFdmVudExpdGUucHJvdG90eXBlKTtcblxuICAvLyBleHBvcnQgbWl4aW4gZnVuY3Rpb25cbiAgRXZlbnRMaXRlLm1peGluID0gbWl4aW47XG5cbiAgLyoqXG4gICAqIEltcG9ydCBvbigpLCBvbmNlKCksIG9mZigpIGFuZCBlbWl0KCkgbWV0aG9kcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBFdmVudExpdGUubWl4aW5cbiAgICogQHBhcmFtIHRhcmdldCB7UHJvdG90eXBlfVxuICAgKi9cblxuICBmdW5jdGlvbiBtaXhpbih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgdGFyZ2V0W2tleV0gPSBtZXRob2RzW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5vblxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZnVuYyB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtFdmVudExpdGV9IFNlbGYgZm9yIG1ldGhvZCBjaGFpbmluZ1xuICAgKi9cblxuICBmdW5jdGlvbiBvbih0eXBlLCBmdW5jKSB7XG4gICAgZ2V0TGlzdGVuZXJzKHRoaXMsIHR5cGUpLnB1c2goZnVuYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZS10aW1lIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5vbmNlXG4gICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBmdW5jIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge0V2ZW50TGl0ZX0gU2VsZiBmb3IgbWV0aG9kIGNoYWluaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uY2UodHlwZSwgZnVuYykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB3cmFwLm9yaWdpbmFsTGlzdGVuZXIgPSBmdW5jO1xuICAgIGdldExpc3RlbmVycyh0aGF0LCB0eXBlKS5wdXNoKHdyYXApO1xuICAgIHJldHVybiB0aGF0O1xuXG4gICAgZnVuY3Rpb24gd3JhcCgpIHtcbiAgICAgIG9mZi5jYWxsKHRoYXQsIHR5cGUsIHdyYXApO1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBFdmVudExpdGUucHJvdG90eXBlLm9mZlxuICAgKiBAcGFyYW0gW3R5cGVdIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBbZnVuY10ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXRlfSBTZWxmIGZvciBtZXRob2QgY2hhaW5pbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gb2ZmKHR5cGUsIGZ1bmMpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGxpc3RuZXJzO1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoYXRbTElTVEVORVJTXTtcbiAgICB9IGVsc2UgaWYgKCFmdW5jKSB7XG4gICAgICBsaXN0bmVycyA9IHRoYXRbTElTVEVORVJTXTtcbiAgICAgIGlmIChsaXN0bmVycykge1xuICAgICAgICBkZWxldGUgbGlzdG5lcnNbdHlwZV07XG4gICAgICAgIGlmICghT2JqZWN0LmtleXMobGlzdG5lcnMpLmxlbmd0aCkgcmV0dXJuIG9mZi5jYWxsKHRoYXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0bmVycyA9IGdldExpc3RlbmVycyh0aGF0LCB0eXBlLCB0cnVlKTtcbiAgICAgIGlmIChsaXN0bmVycykge1xuICAgICAgICBsaXN0bmVycyA9IGxpc3RuZXJzLmZpbHRlcihuZSk7XG4gICAgICAgIGlmICghbGlzdG5lcnMubGVuZ3RoKSByZXR1cm4gb2ZmLmNhbGwodGhhdCwgdHlwZSk7XG4gICAgICAgIHRoYXRbTElTVEVORVJTXVt0eXBlXSA9IGxpc3RuZXJzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhhdDtcblxuICAgIGZ1bmN0aW9uIG5lKHRlc3QpIHtcbiAgICAgIHJldHVybiB0ZXN0ICE9PSBmdW5jICYmIHRlc3Qub3JpZ2luYWxMaXN0ZW5lciAhPT0gZnVuYztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggKHRyaWdnZXIpIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5lbWl0XG4gICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBbdmFsdWVdIHsqfVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSB3aGVuIGEgbGlzdGVuZXIgcmVjZWl2ZWQgdGhlIGV2ZW50XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVtaXQodHlwZSwgdmFsdWUpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGF0LCB0eXBlLCB0cnVlKTtcbiAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBhcmdsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChhcmdsZW4gPT09IDEpIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKHplcm9hcmcpO1xuICAgIH0gZWxzZSBpZiAoYXJnbGVuID09PSAyKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChvbmVhcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChtb3JlYXJncyk7XG4gICAgfVxuICAgIHJldHVybiAhIWxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiB6ZXJvYXJnKGZ1bmMpIHtcbiAgICAgIGZ1bmMuY2FsbCh0aGF0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmVhcmcoZnVuYykge1xuICAgICAgZnVuYy5jYWxsKHRoYXQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JlYXJncyhmdW5jKSB7XG4gICAgICBmdW5jLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldExpc3RlbmVycyh0aGF0LCB0eXBlLCByZWFkb25seSkge1xuICAgIGlmIChyZWFkb25seSAmJiAhdGhhdFtMSVNURU5FUlNdKSByZXR1cm47XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoYXRbTElTVEVORVJTXSB8fCAodGhhdFtMSVNURU5FUlNdID0ge30pO1xuICAgIHJldHVybiBsaXN0ZW5lcnNbdHlwZV0gfHwgKGxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcbiAgfVxuXG59KShFdmVudExpdGUpO1xuIiwiaXNBcnJheSA9ICh0YXJnZXQpLT5cblx0QXJyYXkuaXNBcnJheSh0YXJnZXQpXG5cbmlzT2JqZWN0ID0gKHRhcmdldCktPlxuXHR0YXJnZXQgYW5kIE9iamVjdDo6dG9TdHJpbmcuY2FsbCh0YXJnZXQpIGlzICdbb2JqZWN0IE9iamVjdF0nIG9yIGlzQXJyYXkodGFyZ2V0KVxuXG5zaG91bGREZWVwRXh0ZW5kID0gKG9wdGlvbnMsIHRhcmdldCwgcGFyZW50S2V5KS0+XG5cdGlmIG9wdGlvbnMuZGVlcFxuXHRcdGlmIG9wdGlvbnMubm90RGVlcCB0aGVuIG5vdCBvcHRpb25zLm5vdERlZXBbdGFyZ2V0XSBlbHNlIHRydWVcblxuXHRlbHNlIGlmIG9wdGlvbnMuZGVlcE9ubHlcblx0XHRvcHRpb25zLmRlZXBPbmx5W3RhcmdldF0gb3IgcGFyZW50S2V5IGFuZCBzaG91bGREZWVwRXh0ZW5kKG9wdGlvbnMsIHBhcmVudEtleSlcblxuXHQjIGVsc2UgZmFsc2VcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZCA9IChvcHRpb25zLCB0YXJnZXQsIHNvdXJjZXMsIHBhcmVudEtleSktPlxuXHR0YXJnZXQgPSB7fSBpZiBub3QgdGFyZ2V0IG9yIHR5cGVvZiB0YXJnZXQgaXNudCAnb2JqZWN0JyBhbmQgdHlwZW9mIHRhcmdldCBpc250ICdmdW5jdGlvbidcblxuXHRmb3Igc291cmNlIGluIHNvdXJjZXMgd2hlbiBzb3VyY2U/XG5cdFx0Zm9yIGtleSBvZiBzb3VyY2Vcblx0XHRcdHNvdXJjZVZhbHVlID0gc291cmNlW2tleV1cblx0XHRcdHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV1cblx0XHRcdFxuXHRcdFx0Y29udGludWUgaWYgc291cmNlVmFsdWUgaXMgdGFyZ2V0IG9yXG5cdFx0XHRcdFx0XHRzb3VyY2VWYWx1ZSBpcyB1bmRlZmluZWQgb3Jcblx0XHRcdFx0XHRcdChzb3VyY2VWYWx1ZSBpcyBudWxsIGFuZCBub3Qgb3B0aW9ucy5hbGxvd051bGwgYW5kIG5vdCBvcHRpb25zLm51bGxEZWxldGVzKSBvclxuXHRcdFx0XHRcdFx0KG9wdGlvbnMua2V5cyBhbmQgbm90IG9wdGlvbnMua2V5c1trZXldKSBvclxuXHRcdFx0XHRcdFx0KG9wdGlvbnMubm90S2V5cyBhbmQgb3B0aW9ucy5ub3RLZXlzW2tleV0pIG9yXG5cdFx0XHRcdFx0XHQob3B0aW9ucy5vd24gYW5kIG5vdCBzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkgb3Jcblx0XHRcdFx0XHRcdChvcHRpb25zLmdsb2JhbEZpbHRlciBhbmQgbm90IG9wdGlvbnMuZ2xvYmFsRmlsdGVyKHNvdXJjZVZhbHVlLCBrZXksIHNvdXJjZSkpIG9yXG5cdFx0XHRcdFx0XHQob3B0aW9ucy5maWx0ZXJzIGFuZCBvcHRpb25zLmZpbHRlcnNba2V5XSBhbmQgbm90IG9wdGlvbnMuZmlsdGVyc1trZXldKHNvdXJjZVZhbHVlLCBrZXksIHNvdXJjZSkpXG5cdFx0XHRcblx0XHRcdGlmIHNvdXJjZVZhbHVlIGlzIG51bGwgYW5kIG9wdGlvbnMubnVsbERlbGV0ZXNcblx0XHRcdFx0ZGVsZXRlIHRhcmdldFtrZXldXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHRpZiBvcHRpb25zLmdsb2JhbFRyYW5zZm9ybVxuXHRcdFx0XHRzb3VyY2VWYWx1ZSA9IG9wdGlvbnMuZ2xvYmFsVHJhbnNmb3JtKHNvdXJjZVZhbHVlLCBrZXksIHNvdXJjZSlcblx0XHRcdGlmIG9wdGlvbnMudHJhbnNmb3JtcyBhbmQgb3B0aW9ucy50cmFuc2Zvcm1zW2tleV1cblx0XHRcdFx0c291cmNlVmFsdWUgPSBvcHRpb25zLnRyYW5zZm9ybXNba2V5XShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpXG5cdFxuXHRcdFx0c3dpdGNoXG5cdFx0XHRcdHdoZW4gb3B0aW9ucy5jb25jYXQgYW5kIGlzQXJyYXkoc291cmNlVmFsdWUpIGFuZCBpc0FycmF5KHRhcmdldFZhbHVlKVxuXHRcdFx0XHRcdHRhcmdldFtrZXldID0gdGFyZ2V0VmFsdWUuY29uY2F0KHNvdXJjZVZhbHVlKVxuXHRcdFx0XHRcblx0XHRcdFx0d2hlbiBzaG91bGREZWVwRXh0ZW5kKG9wdGlvbnMsIGtleSwgcGFyZW50S2V5KSBhbmQgaXNPYmplY3Qoc291cmNlVmFsdWUpXG5cdFx0XHRcdFx0c3ViVGFyZ2V0ID0gaWYgaXNPYmplY3QodGFyZ2V0VmFsdWUpIHRoZW4gdGFyZ2V0VmFsdWUgZWxzZSBpZiBpc0FycmF5KHNvdXJjZVZhbHVlKSB0aGVuIFtdIGVsc2Uge31cblx0XHRcdFx0XHR0YXJnZXRba2V5XSA9IGV4dGVuZChvcHRpb25zLCBzdWJUYXJnZXQsIFtzb3VyY2VWYWx1ZV0sIGtleSlcblxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2VWYWx1ZVxuXG5cblx0cmV0dXJuIHRhcmdldFxuXG5cblxuXG5cblxuXG4iXX0=