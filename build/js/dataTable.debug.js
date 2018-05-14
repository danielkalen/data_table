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
DataTable.__super__.constructor.apply(this, arguments);
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
DataTable.version = "2.9.6";
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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSIsInBhcnRzL21hcmt1cC5jb2ZmZWUiLCJwYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCJwYXJ0cy9oZWxwZXJzLmNvZmZlZSIsInBhcnRzL21ldGhvZHMvX2luZGV4LmNvZmZlZSIsInBhcnRzL21ldGhvZHMvZ2VuZXJhbC5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL2NvbHVtbi5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL3Jvdy5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL3NwZWNpYWxDZWxscy5jb2ZmZWUiLCJwYXJ0cy9hdHRhY2hFdmVudHMuY29mZmVlIiwicGFydHMvYXR0YWNoQmluZGluZ3MuY29mZmVlIiwicGFydHMvdXNlckFjdGlvbk1ldGhvZHMuY29mZmVlIiwiLi4vLi4vcGFja2FnZS5qc29uIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvX2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL19pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jaGFuZ2VFdmVudC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9yZXF1aXJlc0RvbURlc2NyaXB0b3JGaXguY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvd2luZG93UHJvcHNUb0lnbm9yZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jaGVja3MuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvZGVzY3JpcHRvci1tb2QuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvd2Via2l0RG9tRGVzY3JpcHRvckZpeC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jbG9uaW5nLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL2NhY2hlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL3BsYWNlaG9sZGVycy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9lcnJvcnMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2Vycm9yc0FuZFdhcm5pbmdzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvU2ltcGx5QmluZC9faW5kZXguY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9TaW1wbHlCaW5kL21ldGhvZHMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3BhY2thZ2UuanNvbiIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvU2ltcGx5QmluZC9tZXRob2RzLnVuQmluZEFsbC1wYXJzZURPTU9iamVjdC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL0JpbmRpbmcvX2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZy9wcm90b3R5cGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nL3Byb3RvdHlwZS5zZXRWYWx1ZS1PYmplY3RQcm9wLURPTVZhbHVlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZy9wcm90b3R5cGUuc2V0VmFsdWUtRE9NVHlwZXMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nSW50ZXJmYWNlL2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHJpdmF0ZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL0JpbmRpbmdJbnRlcmZhY2UvcHJvdG90eXBlLXByaXZhdGUuc2V0T2JqZWN0LXBhcnNlRE9NT2JqZWN0LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHJpdmF0ZS5zZXRPYmplY3QtZGVmaW5lRXZlbnRNZXRob2RzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHVibGljLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvR3JvdXBCaW5kaW5nL19pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3BhY2thZ2UuanNvbiIsIm5vZGVfbW9kdWxlcy9lc2NhcGUtaHRtbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudC1saXRlL2V2ZW50LWxpdGUuanMiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9leHRlbmQuY29mZmVlIl0sIm5hbWVzIjpbIkRhdGFUYWJsZSIsImV4dGVuZCIsImVzY0hUTUwiLCJtYXJrdXAiLCJ0YWJsZU91dGVyd3JhcCIsImFyZyIsIklEIiwiYmFzZUNsYXNzIiwibWluV2lkdGgiLCJoYXNNb2JpbGUiLCJjZWxsc0hhdmVQYWRkaW5nIiwidGFibGUiLCJhbGlnbm1lbnQiLCJsb2FkaW5nIiwibm9SZXN1bHRzIiwiaXRlbVNpbmdsZUxhYmVsIiwiaXRlbVBsdXJhbExhYmVsIiwiZXJyb3IiLCJwYWdlU3RhdHVzIiwic2hvd1BhZ2VTdGF0dXMiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbkl0ZW0iLCJ2YWx1ZSIsImhlYWRpbmdDZWxsIiwiZXh0cmFDbGFzc2VzIiwic2x1ZyIsImljb24iLCJsYWJlbCIsInN0eWxlIiwicm93Iiwicm93SUQiLCJjZWxscyIsImRyaWxsZG93biIsInJvd0NlbGwiLCJjb2x1bW4iLCJzZWFyY2hGaWVsZCIsInNlYXJjaCIsImxlbmd0aCIsImlwRGV0YWlscyIsImlwQWRkcmVzcyIsImV4dHJhIiwiaXBEZXRhaWxzSXRlbSIsImZpZWxkcyIsImZpZWxkc0l0ZW0iLCJidXR0b24iLCJhY3Rpb24iLCJpc011bHRpIiwiYWN0aW9ucyIsImFjdGlvbnNPdmVybGF5IiwiZGVmYXVsdHMiLCJhY3Rpb25zSXRlbSIsImN1c3RvbUljb25TdHlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiJCIsImdldCIsImhlbHBlcnMiLCJjb21wYXJlVmFsdWVzIiwidmFsdWVBIiwidmFsdWVCIiwicGFyc2VGbG9hdCIsInRvZ2dsZUFjdGlvbnNQb3B1cCIsImFjdGlvbnNQb3B1cCQiLCJpc09wZW4iLCJkYXRhIiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJvdmVybGF5JCIsImFkZENsYXNzIiwiYXBwZW5kVG8iLCJkb2N1bWVudCIsImJvZHkiLCJvbmUiLCJnZXRCcmVha2Rvd25Ub3RhbCIsImJyZWFrZG93biIsImJyZWFrZG93bktleXMiLCJtYXAiLCJicmVha2Rvd25JdGVtIiwicmVkdWNlIiwiYSIsImIiLCJub3JtYWxpemVDb2x1bW5zIiwiY29sdW1ucyIsIkFycmF5IiwiaXNBcnJheSIsIm91dHB1dCIsImkiLCJyZWYiLCJqIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidHlwZSIsImdldEJyZWFrZG93bkJhcldpZHRoIiwibGFyZ2VzdCIsImJyZWFrZG93bkJhclRvdGFsIiwiZ2VuSGVhZGVyQ2VsbFN0eWxlIiwic3R5bGVTdHJpbmciLCJ3aWR0aCIsImdyb3ciLCJnZW5DZWxsU3R5bGUiLCJjb2xvciIsImNvbG9yTWFwcGluZyIsImNvbG9yVHlwZSIsImN1c3RvbVN0eWxlIiwiZ2VuQ2VsbENsYXNzbmFtZSIsImNsYXNzU3RyaW5nIiwic29ydGFibGUiLCJub0xhYmVsIiwiaXNMaW5rIiwibm9FbGxpcHNpcyIsInNob3dPdmVyZmxvdyIsImFsd2F5c0NlbnRlciIsImluY2x1ZGVzIiwiaWNvbk1hcHBpbmciLCJpY29uVHlwZSIsImNvbnRhaW5lciIsIm9wdGlvbnMiLCJjbG9uZSIsImRlZXBPbmx5Iiwic3RhdGUiLCJjdXJyZW50SUQiLCJ0YWJsZUlEIiwidmlzaWJsZVJvd3MiLCJhdmFpbGFibGVSb3dzIiwiYWxsUm93cyIsImxhcmdlc3RCcmVha2Rvd25Ub3RhbCIsInNlYXJjaENyaXRlcmlhIiwic2VhcmNoUGFyYW0iLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwiY3VycmVudFBhZ2UiLCJlbHMiLCJ0YWJsZUhlYWRpbmciLCJjaGlsZHJlbiIsImZpcnN0IiwidGFibGVCb2R5IiwibGFzdCIsIm5vUmVzdWx0c01lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInBhZ2luYXRpb25JdGVtcyIsInBhZ2luYXRpb25FeHRyYSIsInBhZ2luYXRpb25FeHRyYVNlbGVjdCIsInBhZ2luYXRpb25FeHRyYVRleHQiLCJwcmV2IiwiaW5zZXJ0QmVmb3JlIiwiZ2xvYmFsU3R5bGVzIiwicHJlcGVuZFRvIiwiYXBwZW5kIiwiZ2VuZXJhdGVIZWFkaW5nQ29sdW1ucyIsImJpbmQiLCJ0aGVuIiwiYXR0YWNoRXZlbnRzIiwiYXR0YWNoQmluZGluZ3MiLCJsb2FkT25Jbml0IiwibG9hZERhdGEiLCJwcm90b3R5cGUiLCJmZXRjaERhdGEiLCJfdGhpcyIsImNhbGwiLCJlcnIiLCJzZXREYXRhIiwiYXBwZW5kRGF0YSIsInB1c2giLCJhcHBseSIsInVucHJvY2Vzc1JvdyIsInJlZnJlc2giLCJtYXJrdXBBcmdzIiwiYXJnc09iamVjdCIsImNhbGNQYWdlQ291bnQiLCJyb3dzIiwicGFnZUNvdW50UmVhbCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSIsInBhZ2VDb3VudCIsInBhZ2VDb3VudE1heCIsImNhbGNQZXJjZW50YWdlU3RyaW5nIiwiY29sdW1uVmFsdWUiLCJjb2x1bW5OYW1lIiwiY29sdW1uQSIsInBlcmNlbnRhZ2UiLCJmb3JtdWxhIiwiY29sdW1uQiIsIm1hdGhPcGVyYXRvciIsInBlcmNlbnRhZ2VWYWx1ZSIsInBlcmNlbnQiLCJjb252ZXJ0VG9QZXJjZW50Iiwic29ydFJvd3MiLCJ0YXJnZXRDb2x1bW4iLCJjdXN0b21Tb3J0Iiwic2xpY2UiLCJyZXZlcnNlIiwic29ydEZuIiwicmF3VmFsdWUiLCJyYXdWYWx1ZUZvcm1hdHRlciIsInNvcnQiLCJhVmFsdWUiLCJiVmFsdWUiLCJzZXRWaXNpYmxlUGFnZSIsInRhcmdldFBhZ2UiLCJyb3dzVG9SZXZlYWwiLCJyb3dzVG9IaWRlIiwidmlzaWJsZSIsInNldFBhZ2VJbmRpY2F0b3IiLCJtYXRjaGVkUGFnZUVsJCIsInBhZ2VJdGVtcyQiLCJmaW5kIiwiZXEiLCJub3QiLCJoYXNCcmVha2Rvd25CYXIiLCJPYmplY3QiLCJrZXlzIiwiaW5uZXJIVE1MIiwiam9pbiIsInVwZGF0ZUNvbHVtbnMiLCJ1cGRhdGVkQ29sdW1ucyIsImRlZXAiLCJwcm9jZXNzUm93IiwicHJvY2Vzc2VkIiwiZ2VuZXJhdGVSb3ciLCJTaW1wbHlCaW5kIiwidXBkYXRlRXZlbklmU2FtZSIsIm9mIiwidG8iLCJpc1Zpc2libGUiLCJwcmV2VmFsdWUiLCJlbCIsImRldGFjaCIsInVwZGF0ZWRCcmVha2Rvd25XaWR0aCIsImJyZWFrZG93bkJhcldpZHRoIiwidHJhbnNmb3JtIiwiYW5kIiwiY2hhaW5UbyIsImJyZWFrZG93bkJhckVsIiwiZHJpbGxkb3duRWwiLCJpbmRleCIsImNvbmRpdGlvbiIsImNvbmRpdGlvbkFsbCIsInVuQmluZEFsbCIsImRyaWxsZG93bkVscyIsInJlUmVuZGVyUm93IiwibmV3Um93RWwiLCJnZW5lcmF0ZVJvd01hcmt1cCIsInByZXZSb3dFbCIsInJlcGxhY2VXaXRoIiwiZXhwYW5kQnV0dG9uIiwibWF4Iiwic3ViUm93IiwiZHJpbGxkb3duT3BlbiIsIm9uY2UiLCJzZXRUaW1lb3V0IiwiYnV0dG9uSGVpZ2h0IiwiaGVpZ2h0IiwidG9wIiwicm93SGVpZ2h0IiwidXBkYXRlT24iLCJ0aHJvdHRsZSIsIndpbmRvdyIsInBhcmVudFJvdyIsImlzU3ViIiwidW5pcXVlSUQiLCJkcmlsbGRvd25NYXJrdXBzIiwiZHJpbGxkb3duUm93IiwiY2VsbFZhbHVlIiwicm93Q2VsbHMiLCJnZW5lcmF0ZUlubGluZUZpZWxkcyIsImdlbmVyYXRlSXBEZXRhaWxzIiwiZ2VuZXJhdGVCcmVha2Rvd25CYXIiLCJnZW5lcmF0ZUJ1dHRvbiIsImJ1dHRvbkljb24iLCJnZW5lcmF0ZUFjdGlvbnMiLCJmb3JtYXR0ZXIiLCJyb3dPYmoiLCJjb2x1bW5FbnRpdHkiLCJsZWdlbmQiLCJ0b3RhbCIsImJyZWFrZG93bkJhciIsInZhbHVlRm9ybWF0IiwiYmFycyIsImtleSIsImJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2JhciIsImJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2hvdmVyYm94IiwiZm9yRWFjaCIsImJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2hvdmVyYm94X3JvdyIsImN1c3RvbUNvbG9ycyIsImRhdGFGaWVsZHMiLCJyZXN1bHRzIiwiYWN0aW9uc01hcmt1cCIsImJ1dHRvbk1hcmt1cCIsImV4dHJhTWFya3VwIiwib24iLCJldmVudCIsIiR0aGlzIiwiY3VycmVudFRhcmdldCIsImlzQmFjayIsImhhc0NsYXNzIiwiaXNOZXh0IiwiaXNFeHRyYSIsInBhZ2VOdW1iZXIiLCJodG1sIiwidGV4dENvbnRlbnQiLCJidXR0b24kIiwibmV4dCIsIml0ZW1Sb3ckIiwiY2xvc2VzdCIsIml0ZW1JRCIsIml0ZW1JbmRleCIsImRhdGFJdGVtIiwicGFyZW50IiwidHJpZ2dlciIsIml0ZW1Sb3ciLCJjb250ZW50JCIsIndyYXBwZXIkIiwidHJpZ2dlciQiLCJjb3VudHJ5JCIsImlzTG9hZGVkIiwiaXBEYXRhRmV0Y2hlciIsInNldHRpbmdzIiwidHJhY2tBcnJheUNoaWxkcmVuIiwiaGFzRXJyb3IiLCJjb25zb2xlIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwibW9iaWxlV2lkdGgiLCJpc0hpZGRlbiIsImwiLCJwcmV2Um93cyIsImluZGV4T2YiLCJ1cGRhdGVPbkJpbmQiLCJjb3VudCIsInJlYWxDb3VudCIsInRyYW5zZm9ybVNlbGYiLCJvcHRpb24iLCJwaXBlIiwiYm90aFdheXMiLCJyZWYxIiwicm93c1RvTWFrZUF2YWlsYWJsZSIsImZpbHRlciIsInJvd1ZhbHVlIiwidG9TdHJpbmciLCJyb3dGaWx0ZXIiLCJuYW1lIiwicmVmMiIsInJvd0Nsb25lIiwiY3VycmVudFNvcnQiLCJwcmV2U29ydCIsImN1cnJlbnQiLCJ2ZXJzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5TXV0YXRvck1ldGhvZHMiLCJkdW1teVByb3BlcnR5RGVzY3JpcHRvciIsImJvdW5kSW5zdGFuY2VzIiwicGxhY2Vob2xkZXIiLCJjcmVhdGUiLCJzaWxlbnQiLCJzZXQiLCJuZXdQbGFjZWhvbGRlciIsImNoZWNrSWYiLCJzZXRQaG9sZGVyUmVnRXgiLCJkZWZhdWx0T3B0aW9ucyIsImRlbGF5Iiwic2ltcGxlU2VsZWN0b3IiLCJwcm9taXNlVHJhbnNmb3JtcyIsImRpc3BhdGNoRXZlbnRzIiwic2VuZEFycmF5Q29waWVzIiwiZGVmaW5lUHJvcGVydHkiLCJnZXREZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY2FjaGVkRXZlbnQiLCJjaGFuZ2VFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiX3NiIiwicmVxdWlyZXNEb21EZXNjcmlwdG9yRml4IiwiRWxlbWVudCIsIndpbmRvd1Byb3BzVG9JZ25vcmUiLCJzZXRWYWx1ZU5vb3AiLCJ2IiwicHVibGlzaGVyIiwidXBkYXRlQWxsU3VicyIsImdlbklEIiwiZ2VuT2JqIiwiZ2VuUHJveGllZEludGVyZmFjZSIsImNvbXBsZXRlQ2FsbGJhY2siLCJzdWJqZWN0IiwiY3VzdG9tT3B0aW9ucyIsInNhdmVPcHRpb25zIiwiZ2VuU2VsZlVwZGF0ZXIiLCJiaW5kaW5nIiwiZmV0Y2hWYWx1ZSIsInNlbGZVcGRhdGVyIiwiQmluZGluZyIsInNldFZhbHVlIiwiZmV0Y2hEaXJlY3RWYWx1ZSIsInRhcmdldCIsIml0ZW0iLCJpc0RlZmluZWQiLCJpc09iamVjdCIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0Z1bmN0aW9uIiwiaXNCaW5kaW5nSW50ZXJmYWNlIiwiQmluZGluZ0ludGVyZmFjZSIsImlzQmluZGluZyIsImlzSXRlcmFibGUiLCJpc0RvbSIsIm5vZGVOYW1lIiwibm9kZVR5cGUiLCJpc0RvbUlucHV0IiwiaXNEb21SYWRpbyIsImlzRG9tQ2hlY2tib3giLCJpc0VsQ29sbGVjdGlvbiIsIk5vZGVMaXN0IiwiSFRNTENvbGxlY3Rpb24iLCJqUXVlcnkiLCJkb21FbHNBcmVTYW1lIiwiaXRlcmFibGUiLCJpdGVtc1dpdGhTYW1lVHlwZSIsImlzRG9tTm9kZSIsImNvbnZlcnRUb0xpdmUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsImlzUHJvdG8iLCJkZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwib2JqZWN0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImZldGNoRGVzY3JpcHRvciIsImJpbmRpbmdJbnN0YW5jZSIsIm9ubHlBcnJheU1ldGhvZHMiLCJfIiwib3JpZ0Rlc2NyaXB0b3IiLCJtZXRob2QiLCJyZXN1bHQiLCJhcmd1bWVudHMiLCJvcmlnRm4iLCJjb250ZXh0IiwiYXJncyIsImdldHRlclZhbHVlIiwicHJveHlGbiIsInNlbGZUcmFuc2Zvcm0iLCJpc0xpdmVQcm9wIiwibmV3VmFsdWUiLCJ0YXJnZXRJbmNsdWRlcyIsInByb3BlcnR5RGVzY3JpcHRvciIsIm9yaWdHZXR0ZXIiLCJvcmlnU2V0dGVyIiwic2hvdWxkV3JpdGVMaXZlUHJvcCIsImNvbnN0cnVjdG9yIiwiQ1NTU3R5bGVEZWNsYXJhdGlvbiIsImNsb25lTm9kZSIsInR5cGVJc0FycmF5Iiwic2hvdWxkSW5kaWNhdGVVcGRhdGVJc0Zyb21TZWxmIiwiZW51bWVyYWJsZSIsImNvbnZlcnRUb1JlZyIsIm5ld0Rlc2NyaXB0b3IiLCJjbG9uZU9iamVjdCIsImV4dGVuZFN0YXRlIiwiYmFzZSIsInN0YXRlVG9Jbmhlcml0IiwiY2FjaGUiLCJzZWxlY3RvciIsImlzTXVsdGlDaG9pY2UiLCJzYW1wbGVJdGVtIiwiX3NiX0lEIiwiX3NiX21hcCIsImdyb3VwQmluZGluZyIsIkIiLCJwcm9wc01hcCIsImFkZFRvTm9kZVN0b3JlIiwicGhvbGRlclJlZ0V4IiwicGhvbGRlclJlZ0V4U3BsaXQiLCJlbmQiLCJlc2NhcGVSZWdFeCIsIm1pZGRsZSIsIlJlZ0V4cCIsInN0YXJ0IiwiYXBwbHlQbGFjZWhvbGRlcnMiLCJjb250ZXh0cyIsInZhbHVlcyIsImluZGV4TWFwIiwiY29udGV4dFBhcnQiLCJub2RlU3RvcmUiLCJub2RlIiwidGFyZ2V0UGxhY2Vob2xkZXIiLCJzY2FuVGV4dE5vZGVzUGxhY2Vob2xkZXJzIiwiZWxlbWVudCIsImNoaWxkTm9kZXMiLCJtYXRjaCIsInRleHRQaWVjZXMiLCJzcGxpdCIsIm5ld0ZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm5ld05vZGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwidGV4dFBpZWNlIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImdldEVyclNvdXJjZSIsImVycm9yTmFtZSIsIkVycm9yIiwiZXJyb3JzIiwidGhyb3dXYXJuaW5nIiwid2FybmluZ05hbWUiLCJkZXB0aCIsImVyclNvdXJjZSIsIndhcm4iLCJ0aHJvd0Vycm9yQmFkQXJnIiwidGhyb3dFcnJvciIsInN0YWNrIiwiaW52YWxpZFBhcmFtTmFtZSIsImZuT25seSIsImJhZEV2ZW50QXJnIiwiZW1wdHlMaXN0Iiwib25seU9uZURPTUVsZW1lbnQiLCJtaXhlZEVsTGlzdCIsImludGVyZmFjZVRvUmV0dXJuIiwic2VsZkNsb25lIiwibmV3SW50ZXJmYWNlIiwic2V0T2JqZWN0Iiwic2V0UHJvcGVydHkiLCJib3VuZElEIiwicHJvcE1hcCIsInJlbW92ZUFsbFN1YnMiLCJwcm9wIiwicGFyZW50QmluZGluZyIsIm9wdGlvbnNEZWZhdWx0Iiwic3VicyIsInN1YnNNZXRhIiwicHVic01hcCIsImF0dGFjaGVkRXZlbnRzIiwiY2hvaWNlcyIsImNob2ljZUVsIiwiY2hvaWNlQmluZGluZyIsImFkZFN1YiIsInRyYW5zZm9ybUZuIiwicGFyZW50UHJvcGVydHkiLCJzY2FuRm9yUGhvbGRlcnMiLCJwaG9sZGVyVmFsdWVzIiwicGhvbGRlciIsInRleHROb2RlcyIsInN1YmplY3RWYWx1ZSIsImV2ZW50VXBkYXRlSGFuZGxlciIsInN1YiIsInVwZGF0ZU9uY2UiLCJhbHJlYWR5SGFkU3ViIiwic3ViSXRlbSIsIm1ldGFEYXRhIiwidW5zaGlmdCIsIm9wdHMiLCJ2YWx1ZVJlZiIsInJlbW92ZVN1YiIsInNwbGljZSIsImRlc3Ryb3kiLCJyZW1vdmVQb2xsSW50ZXJ2YWwiLCJ1blJlZ2lzdGVyRXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJmcm9tU2VsZiIsImZyb21DaGFuZ2VFdmVudCIsImNob2ljZU5hbWUiLCJlbnRpcmVWYWx1ZSIsImsiLCJsZW4iLCJsZW4xIiwibiIsIm5ld0Nob2ljZVZhbHVlIiwibmV3Q2hvaWNlcyIsIm5ld1ZhbHVlQXJyYXkiLCJvdmVyd3JpdGVQcmV2aW91cyIsInByZXZDdXJzcm9yIiwidGFyZ2V0Q2hvaWNlQmluZGluZyIsInRleHROb2RlIiwiZGlzcGF0Y2hFdmVudCIsImNvbmNhdCIsInZhbHVlUGFzc2VkIiwiaXNFbWl0dGVyIiwiZW1pdEV2ZW50IiwiY2hlY2tlZCIsInNldEF0dHJpYnV0ZSIsImFyciIsInVwZGF0ZVN1YiIsImlzRGVsYXllZFVwZGF0ZSIsImN1cnJlbnRUaW1lIiwibWV0YSIsInN1YlZhbHVlIiwidGltZVBhc3NlZCIsImRpc2FsbG93TGlzdCIsIkRhdGUiLCJsYXN0VXBkYXRlIiwiY2xlYXJUaW1lb3V0IiwidXBkYXRlVGltZXIiLCJjb25kaXRpb25GbiIsImFkZE1vZGlmaWVyRm4iLCJzdWJJbnRlcmZhY2VzIiwic3ViamVjdEZuIiwic3ViSW50ZXJmYWNlIiwic3ViTWV0YURhdGEiLCJzdWJzY3JpYmVyIiwiYmluZGluZ3MiLCJzZXRTZWxmVHJhbnNmb3JtIiwiYWRkRGlzYWxsb3dSdWxlIiwidGFyZ2V0U3ViIiwidGFyZ2V0RGlzYWxsb3ciLCJwaG9sZGVySW5kZXhNYXAiLCJwaG9sZGVyQ29udGV4dHMiLCJlIiwiYWRkUG9sbEludGVydmFsIiwidGltZSIsInBvbGxJbnRlcnZhbCIsInNldEludGVydmFsIiwicG9sbGVkVmFsdWUiLCJjbGVhckludGVydmFsIiwiYWRkVXBkYXRlTGlzdGVuZXIiLCJldmVudE5hbWUiLCJ0YXJnZXRQcm9wZXJ0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG91bGRSZWRlZmluZVZhbHVlIiwicmVnaXN0ZXJFdmVudCIsImV2ZW50SGFuZGxlciIsImV2ZW50TWV0aG9kcyIsImxpc3RlbiIsImV4dHJhRGF0YSIsImV2ZW50T2JqZWN0IiwiZW1pdCIsImJpbmRpbmdEYXRhIiwiaW5oZXJpdGVkU3RhdGUiLCJzdGFnZSIsIm9wdGlvbnNQYXNzZWQiLCJCaW5kaW5nSW50ZXJmYWNlUHJpdmF0ZSIsImRlZmluZU1haW5Qcm9wcyIsImRlZmluZVByb3BlcnRpZXMiLCJvYmplY3RzIiwiY3JlYXRlQmluZGluZyIsIm5ld09iamVjdFR5cGUiLCJiaW5kaW5nSW50ZXJmYWNlIiwiY2FjaGVkQmluZGluZyIsInBhdGNoQ2FjaGVkQmluZGluZyIsIm5ld0JpbmRpbmciLCJpc05hTiIsInBhcnNlSW50IiwibGlzdGVuTWV0aG9kIiwicmVtb3ZlTWV0aG9kIiwiZW1pdE1ldGhvZCIsIkdyb3VwQmluZGluZyIsImFkZFRvUHVibGlzaGVyIiwicHVibGlzaGVySW50ZXJmYWNlIiwiTUVUSE9EX2JvdGhXYXlzIiwiTUVUSE9EX29mIiwiTUVUSE9EX3NldCIsIk1FVEhPRF9jaGFpblRvIiwiTUVUSE9EX3RyYW5zZm9ybVNlbGYiLCJNRVRIT0RfdHJhbnNmb3JtIiwidHJhbnNmb3JtQWxsIiwiTUVUSE9EX3RyYW5zZm9ybUFsbCIsIk1FVEhPRF9jb25kaXRpb24iLCJNRVRIT0RfY29uZGl0aW9uQWxsIiwidW5CaW5kIiwiTUVUSE9EX3VuQmluZCIsInBvbGxFdmVyeSIsIk1FVEhPRF9wb2xsRXZlcnkiLCJzdG9wUG9sbGluZyIsIk1FVEhPRF9zdG9wUG9sbGluZyIsInNldE9wdGlvbiIsIk1FVEhPRF9zZXRPcHRpb24iLCJkaXNhbGxvd0Zyb20iLCJ0aGlzSW50ZXJmYWNlIiwiZGlzYWxsb3dJbnRlcmZhY2UiLCJyZW1vdmVVcGRhdGVyIiwiY2xvbmVCaW5kaW5nIiwiY2xvbmVJbnRlcmZhY2UiLCJhZGRCaW5kaW5nIiwic2libGluZ0ludGVyZmFjZSIsInVwZGF0ZSIsInR3b1dheSIsInNwZWNpZmljT3B0aW9ucyIsImFsdFRyYW5zZm9ybSIsInN1YkJpbmRpbmciLCJvcmlnaW5UcmFuc2Zvcm0iLCJvcmlnaW5Db25kaXRpb24iLCJ0cmFuc2Zvcm1Ub1VzZSIsIm9wdGlvbk5hbWUiLCJvYmplY3RUeXBlIiwicHJvdG8iLCJtZXRob2ROYW1lIiwiYyIsImQiLCJub3JtYWxpemVLZXlzIiwibmV3QnVpbGRlciIsImlzQmFzZSIsImJ1aWxkZXIiLCJ0aGVUYXJnZXQiLCIkX2kiLCJzb3VyY2VzIiwic2hpZnQiLCJtb2RpZmllcnMiLCJvd24iLCJhbGxvd051bGwiLCJudWxsRGVsZXRlcyIsIm5vdERlZXAiLCJub3RLZXlzIiwiZ2xvYmFsVHJhbnNmb3JtIiwidHJhbnNmb3JtcyIsImdsb2JhbEZpbHRlciIsImZpbHRlcnMiLCJtYXRjaEh0bWxSZWdFeHAiLCJlc2NhcGVIdG1sIiwic3RyaW5nIiwic3RyIiwiZXhlYyIsImVzY2FwZSIsImxhc3RJbmRleCIsImNoYXJDb2RlQXQiLCJzdWJzdHJpbmciLCJFdmVudExpdGUiLCJMSVNURU5FUlMiLCJtZXRob2RzIiwib2ZmIiwibWl4aW4iLCJmdW5jIiwiZ2V0TGlzdGVuZXJzIiwidGhhdCIsIndyYXAiLCJvcmlnaW5hbExpc3RlbmVyIiwibGlzdG5lcnMiLCJuZSIsInRlc3QiLCJsaXN0ZW5lcnMiLCJhcmdsZW4iLCJ6ZXJvYXJnIiwib25lYXJnIiwibW9yZWFyZ3MiLCJyZWFkb25seSIsInNob3VsZERlZXBFeHRlbmQiLCJwYXJlbnRLZXkiLCJzb3VyY2UiLCJzb3VyY2VWYWx1ZSIsInRhcmdldFZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJzdWJUYXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQUE7Ozs7Ozs7Ozs7OzthQUlhO0FBSGJDLFNBS1M7QUFKVEMsVUFNVTtBQUxWLEFDSEFDO1NBQ0NDO2dCQUFnQixVQUFDQyxLQUFEO0FBQTJEQztBQUF6REEsY0FBSUMsMkJBQVdDLHlCQUFVQywyQkFBV0M7T0FBcUIsY0FDL0RILFlBQVUsTUFBR0QsS0FBRyxjQUFXQyxZQUFVLHVEQUM5QyxDQUFJQyxXQUFjLGlCQUFvQixNQUFHLE1BQ3pDLENBQUlDLFlBQWUsc0JBQXlCLE1BQUcsTUFDL0MsQ0FBSUMsbUJBQXNCLHNCQUF5QixNQUFHOztBQUl6REMsT0FBTyxVQUFDTixLQUFEO0FBQTJCTztBQUF6QkwsNEJBQVdLO09BQWMsaUJB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bUMsY0FBYzltQixRQUFRMmtCLGdCQUFnQm1DLGFBQWExYyxLQUFLeWM7O0FBQ3pELElBQUc3bUIsUUFBUTRrQixjQUFlNWtCLFFBQVE0a0IsV0FBV3hhLE1BQTdDO0FBQ0MwYyxjQUFjOW1CLFFBQVE0a0IsV0FBV3hhLEtBQUswYyxhQUFhMWMsS0FBS3ljOztBQUV6RDtPQUNNN21CLFFBQVE0YyxVQUFXNWUsUUFBUThvQixnQkFBaUI5b0IsUUFBUStvQjtBQUN4RHZWLE9BQU9wSCxPQUFPMmMsWUFBWW5LLE9BQU9rSzs7S0FGbkMsRUFJTUgsaUJBQWlCM21CLFNBQVNvSyxLQUFLd2MsY0FBZWpWLFNBQVNtVjtBQUMzREcsWUFBZXRWLFNBQVNvVixlQUFrQkEsY0FBb0Ivb0IsUUFBUThvQixlQUFrQixLQUFRO0FBQ2hHdFYsT0FBT3BILE9BQU92UixPQUFPbUgsU0FBU2luQixXQUFXLENBQUNILGNBQWMxYzs7O0FBR3hEb0gsT0FBT3BILE9BQU8wYzs7Ozs7QUFHbEIsT0FBT3RWIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlNpbXBseUJpbmQgPSBpbXBvcnQgJ0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kJ1xuZXh0ZW5kID0gaW1wb3J0ICdzbWFydC1leHRlbmQnXG5lc2NIVE1MID0gaW1wb3J0ICdlc2NhcGUtaHRtbCdcbmltcG9ydCAnLi9wYXJ0cy9tYXJrdXAnXG5pbXBvcnQgJy4vcGFydHMvZGVmYXVsdHMnXG5pbXBvcnQgJy4vcGFydHMvaGVscGVycydcblxuY2xhc3MgRGF0YVRhYmxlIGV4dGVuZHMgcmVxdWlyZSgnZXZlbnQtbGl0ZScpXG5cdGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgb3B0aW9ucz17fSktPlxuXHRcdHN1cGVyXG5cdFx0QG9wdGlvbnMgPSBleHRlbmQuY2xvbmUuZGVlcE9ubHkoJ2NvbHVtbnMnKShEYXRhVGFibGUuZGVmYXVsdHMsIG9wdGlvbnMpXG5cdFx0QHN0YXRlID0gJ2xvYWRpbmcnOmZhbHNlLCAnbm9SZXN1bHRzJzpmYWxzZSwgJ2Vycm9yJzpmYWxzZVxuXHRcdEBJRCA9ICsrY3VycmVudElEXG5cdFx0QHRhYmxlSUQgPSBcIlxcIyN7QG9wdGlvbnMuYmFzZUNsYXNzfS0je0BJRH1cIlxuXHRcdEB2aXNpYmxlUm93cyA9IFtdXG5cdFx0QGF2YWlsYWJsZVJvd3MgPSBbXVxuXHRcdEBhbGxSb3dzID0gW11cblx0XHRAbGFyZ2VzdEJyZWFrZG93blRvdGFsID0gMFxuXHRcdEBzZWFyY2hDcml0ZXJpYSA9ICcnXG5cdFx0QHNlYXJjaFBhcmFtID0gJydcblx0XHRAc29ydEJ5ID0gaWYgQG9wdGlvbnMuc29ydEJ5IHRoZW4gQG9wdGlvbnMuc29ydEJ5IGVsc2UgJydcblx0XHRAc29ydERpcmVjdGlvbiA9IC0xXG5cdFx0QGN1cnJlbnRQYWdlID0gMVxuXG5cblx0XHQjID09PT0gTWFya3VwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdEBlbHMgPSB7fVxuXHRcdEBlbHMudGFibGVPdXRlcndyYXAgPSAkKG1hcmt1cC50YWJsZU91dGVyd3JhcCBleHRlbmQoe0BJRH0sIEBvcHRpb25zKSlcblx0XHRAZWxzLnRhYmxlID0gJChtYXJrdXAudGFibGUoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMudGFibGVIZWFkaW5nID0gQGVscy50YWJsZS5jaGlsZHJlbigpLmZpcnN0KCkuY2hpbGRyZW4oKVxuXHRcdEBlbHMudGFibGVCb2R5ID0gQGVscy50YWJsZS5jaGlsZHJlbigpLmxhc3QoKVxuXHRcdEBlbHMubm9SZXN1bHRzTWVzc2FnZSA9ICQobWFya3VwLm5vUmVzdWx0cyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5sb2FkaW5nTWVzc2FnZSA9ICQobWFya3VwLmxvYWRpbmcoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMuZXJyb3JNZXNzYWdlID0gJChtYXJrdXAuZXJyb3IoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMucGFnZVN0YXR1cyA9ICQobWFya3VwLnBhZ2VTdGF0dXMoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMucGFnaW5hdGlvbiA9ICQobWFya3VwLnBhZ2luYXRpb24oQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMucGFnaW5hdGlvbkl0ZW1zID0gQGVscy5wYWdpbmF0aW9uLmNoaWxkcmVuKCcuX3BhZ2luYXRpb25JdGVtcycpXG5cdFx0QGVscy5wYWdpbmF0aW9uRXh0cmEgPSBAZWxzLnBhZ2luYXRpb24uY2hpbGRyZW4oJy5fZXh0cmFJbmRpY2F0b3InKVxuXHRcdEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0ID0gQGVscy5wYWdpbmF0aW9uRXh0cmEuY2hpbGRyZW4oJ3NlbGVjdCcpXG5cdFx0QGVscy5wYWdpbmF0aW9uRXh0cmFUZXh0ID0gQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QucHJldigpXG5cdFx0QGVscy5zZWFyY2hGaWVsZCA9ICQobWFya3VwLnNlYXJjaEZpZWxkKEBvcHRpb25zKSkuaW5zZXJ0QmVmb3JlKEBlbHMudGFibGUpXG5cdFx0QGVscy5zZWFyY2hQYXJhbSA9IEBlbHMuc2VhcmNoRmllbGQuY2hpbGRyZW4oJ3NlbGVjdCcpXG5cdFx0QGVscy5zZWFyY2hDcml0ZXJpYSA9IEBlbHMuc2VhcmNoRmllbGQuY2hpbGRyZW4oJ2lucHV0Jylcblx0XHRAZWxzLmdsb2JhbFN0eWxlcyA9ICQoJzxzdHlsZSAvPicpLnByZXBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXG5cdFx0QGVscy50YWJsZUhlYWRpbmcuYXBwZW5kKEBnZW5lcmF0ZUhlYWRpbmdDb2x1bW5zKCkpXG5cblx0XHRAZWxzLnRhYmxlT3V0ZXJ3cmFwLmFwcGVuZFRvIEBjb250YWluZXJcblx0XHRAZWxzLnRhYmxlLmRhdGEgJ0RhdGFUYWJsZScsIEBcblx0XHRAZWxzLnRhYmxlWzBdLnN0eWxlLm1pbldpZHRoID0gXCIje0BvcHRpb25zLm1pbldpZHRofXB4XCIgaWYgQG9wdGlvbnMubWluV2lkdGhcblxuXG5cdFx0IyA9PT09IEV2ZW50cyAmIEJpbmRpbmdzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFByb21pc2UuYmluZChAKVxuXHRcdFx0LnRoZW4oQGF0dGFjaEV2ZW50cylcblx0XHRcdC50aGVuKEBhdHRhY2hCaW5kaW5ncylcblx0XHRcdC50aGVuICgpLT4gaWYgQG9wdGlvbnMubG9hZE9uSW5pdCB0aGVuIEBsb2FkRGF0YSgpXG5cblx0XHRyZXR1cm4gQFxuXG5cblxuRGF0YVRhYmxlOjpmZXRjaERhdGEgPSAoKS0+XG5cdEBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuXHRQcm9taXNlLnJlc29sdmUoKVxuXHRcdC50aGVuICgpPT4gQG9wdGlvbnMuZGF0YS5jYWxsKEApXG5cdFx0LnRoZW4gKGRhdGEpPT5cblx0XHRcdEBzdGF0ZS5sb2FkaW5nID0gQHN0YXRlLmVycm9yID0gZmFsc2Vcblx0XHRcdHJldHVybiBkYXRhXG5cdFx0LmNhdGNoIChlcnIpPT5cblx0XHRcdEBzdGF0ZS5lcnJvciA9IGVyclxuXG5EYXRhVGFibGU6OnNldERhdGEgPSAoZGF0YSktPlxuXHRAYWxsUm93cyA9IGRhdGEgaWYgQXJyYXkuaXNBcnJheShkYXRhKVxuXG5EYXRhVGFibGU6OmFwcGVuZERhdGEgPSAoZGF0YSktPlxuXHRAYWxsUm93cy5wdXNoKGRhdGEuLi4pXG5cbkRhdGFUYWJsZTo6bG9hZERhdGEgPSAoKS0+XG5cdEB1bnByb2Nlc3NSb3cocm93KSBmb3Igcm93IGluIEBhbGxSb3dzIGlmIEBhbGxSb3dzLmxlbmd0aFxuXHRAZmV0Y2hEYXRhKCkudGhlbiAoZGF0YSk9PiBAc2V0RGF0YShkYXRhKVxuXG5EYXRhVGFibGU6OnJlZnJlc2ggPSAoKS0+XG5cdEBhdmFpbGFibGVSb3dzID0gQGF2YWlsYWJsZVJvd3Ncblx0QGN1cnJlbnRQYWdlID0gQGN1cnJlbnRQYWdlXG5cbkRhdGFUYWJsZTo6bWFya3VwQXJncyA9IChhcmdzT2JqZWN0PXt9KS0+XG5cdGFyZ3NPYmplY3QuYmFzZUNsYXNzID0gQG9wdGlvbnMuYmFzZUNsYXNzXG5cdHJldHVybiBhcmdzT2JqZWN0XG5cblxuXG5cbmltcG9ydCAnLi9wYXJ0cy9tZXRob2RzJ1xuaW1wb3J0ICcuL3BhcnRzL2F0dGFjaEV2ZW50cydcbmltcG9ydCAnLi9wYXJ0cy9hdHRhY2hCaW5kaW5ncydcbmltcG9ydCAnLi9wYXJ0cy91c2VyQWN0aW9uTWV0aG9kcydcblxuY3VycmVudElEID0gMFxuRGF0YVRhYmxlLnZlcnNpb24gPSBpbXBvcnQgJy4uLy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nXG5EYXRhVGFibGUuaGVscGVycyA9IGhlbHBlcnNcbkRhdGFUYWJsZS5tYXJrdXAgPSBtYXJrdXBcbkRhdGFUYWJsZS5kZWZhdWx0cyA9IGRlZmF1bHRzXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFUYWJsZVxuXG5cblxuXG4iLCJtYXJrdXAgPVxuXHR0YWJsZU91dGVyd3JhcDogKHtJRCwgYmFzZUNsYXNzLCBtaW5XaWR0aCwgaGFzTW9iaWxlLCBjZWxsc0hhdmVQYWRkaW5nfSktPiBcIlxuXHRcdDxkaXYgaWQ9JyN7YmFzZUNsYXNzfS0je0lEfScgY2xhc3M9JyN7YmFzZUNsYXNzfS1vdXRlcndyYXAge3tsb2FkaW5nfX0ge3tub1Jlc3VsdHN9fSB7e2hhc0Vycm9yfX1cblx0XHRcdCN7aWYgbWluV2lkdGggdGhlbiAnX2hhc01pbldpZHRoJyBlbHNlICcnfVxuXHRcdFx0I3tpZiBoYXNNb2JpbGUgdGhlbiAne3ttb2JpbGVWZXJzaW9ufX0nIGVsc2UgJyd9XG5cdFx0XHQje2lmIGNlbGxzSGF2ZVBhZGRpbmcgdGhlbiAnX2NlbGxzSGF2ZVBhZGRpbmcnIGVsc2UgJyd9XG5cdFx0Jz48L2Rpdj5cblx0XCJcblxuXHR0YWJsZTogKHtiYXNlQ2xhc3MsIGFsaWdubWVudH0pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30gYWxpZ25tZW50LS0tI3thbGlnbm1lbnR9IHNvcnREaXJlY3Rpb24tLS17e3NvcnREaXJlY3Rpb259fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZyc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdyc+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5Jz48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdGxvYWRpbmc6ICh7YmFzZUNsYXNzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1sb2FkaW5nIHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctaW5uZXJ3cmFwJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctaWNvbic+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1sb2FkaW5nLXRleHQnPkxvYWRpbmc8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0bm9SZXN1bHRzOiAoe2Jhc2VDbGFzcywgaXRlbVNpbmdsZUxhYmVsPSdJdGVtJywgaXRlbVBsdXJhbExhYmVsPWl0ZW1TaW5nbGVMYWJlbCsncyd9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cyB7e2lzVmlzaWJsZX19Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtaW5uZXJ3cmFwJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy1pY29uJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy10ZXh0Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQtdGl0bGUnPk5vICN7aXRlbVNpbmdsZUxhYmVsfXMgdG8gRGlzcGxheTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtdGV4dC1zdWJ0aXRsZSc+VGhlcmUgYXJlIG5vIG1hdGNoaW5nICN7aXRlbVBsdXJhbExhYmVsfSBmb3IgdGhlIHNlYXJjaCBxdWVyeSB5b3UndmUgdHlwZWQuPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRlcnJvcjogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yIHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWlubmVyd3JhcCc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1lcnJvci1pY29uJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1lcnJvci10ZXh0LXRpdGxlJz5BIEZhdGFsIEVycm9yIGhhcyBPY2N1cmVkPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQtc3VidGl0bGUnPlJlcG9ydCB0aGUgZm9sbG93aW5nIHRvIHRoZSBhZG1pbjo8YnIgLz5cXFwie3tlcnJvck1lc3NhZ2V9fVxcXCI8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdHBhZ2VTdGF0dXM6ICh7YmFzZUNsYXNzLCBzaG93UGFnZVN0YXR1c30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnZVN0YXR1cyAje2lmIHNob3dQYWdlU3RhdHVzIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHRcdFNob3dpbmcge3tyb3dSYW5nZX19IG9mIHt7dG90YWxSb3dzfX1cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdHBhZ2luYXRpb246ICh7YmFzZUNsYXNzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uIHt7aGFzRXh0cmF9fSB7e2lzVmlzaWJsZX19Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtIF9iYWNrJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtc3dyYXAgX3BhZ2luYXRpb25JdGVtcyc+PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtIF9leHRyYUluZGljYXRvcic+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tc2VsZWN0Jz48L3NlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX25leHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRwYWdpbmF0aW9uSXRlbTogKHtiYXNlQ2xhc3MsIHZhbHVlfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+I3t2YWx1ZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cblx0aGVhZGluZ0NlbGw6ICh7YmFzZUNsYXNzLCBleHRyYUNsYXNzZXM9JycsIHNsdWcsIGljb249JycsIGxhYmVsLCBzdHlsZT0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZy1yb3ctY2VsbCAje2V4dHJhQ2xhc3Nlc30gX18je3NsdWd9JyBkYXRhLXNsdWc9JyN7c2x1Z30nIGRhdGEtaWNvbj0nI3tpY29ufScgI3tzdHlsZX0+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZy1yb3ctY2VsbC10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cm93OiAoe2Jhc2VDbGFzcywgcm93SUQsIGNlbGxzLCBkcmlsbGRvd249Jyd9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93IF90YWJsZVJvdyB7e2RyaWxsZG93blN0YXRlfX0nIGRhdGEtcm93LWlkPScje3Jvd0lEfSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctZXhwYW5kRHJpbGxkb3duIF9leHBhbmREcmlsbGRvd24nPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctZXhwYW5kRHJpbGxkb3duLWljb24nPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdCN7Y2VsbHN9XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1kcmlsbGRvd24gX3RhYmxlUm93RHJpbGxkb3duJz5cblx0XHRcdFx0I3tkcmlsbGRvd259XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblx0XG5cblx0cm93Q2VsbDogKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgbGFiZWwsIGNvbHVtbiwgc2x1ZywgdmFsdWUsIHN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsIF9fI3tzbHVnfSAje2V4dHJhQ2xhc3Nlc30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1jb2x1bW49JyN7Y29sdW1ufScgI3tzdHlsZX0+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctY2VsbC1pbm5lcndyYXAnIHRpdGxlPScje2xhYmVsfSc+I3t2YWx1ZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cblxuXG5cdHNlYXJjaEZpZWxkOiAoe2Jhc2VDbGFzcywgc2VhcmNofSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2ggI3tpZiBzZWFyY2g/Lmxlbmd0aCB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnfSc+XG5cdFx0XHQ8c2VsZWN0IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLXNlbGVjdCc+PC9zZWxlY3Q+XG5cdFx0XHQ8aW5wdXQgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtaW5wdXQnIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLXNlbGVjdFRyaWdnZXInPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0aXBEZXRhaWxzOiAoe2Jhc2VDbGFzcywgaXBBZGRyZXNzLCBleHRyYT0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzIF9pcERldGFpbHMnIGRhdGEtaXA9JyN7aXBBZGRyZXNzfSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzLXRyaWdnZXIgX2lwRGV0YWlscy10cmlnZ2VyJz48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudCc+TG9hZGluZyBJUCBEZXRhaWxzPC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0I3tleHRyYX1cblx0XCJcblxuXHRpcERldGFpbHNJdGVtOiAoe2Jhc2VDbGFzcywgbGFiZWwsIHZhbHVlfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLWxhYmVsJz4je2xhYmVsfTogPC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzLWNvbnRlbnQtaXRlbS12YWx1ZSc+I3t2YWx1ZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblx0XG5cblxuXG5cdGZpZWxkczogKHtiYXNlQ2xhc3MsIGZpZWxkc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cCc+I3tmaWVsZHN9PC9kaXY+XG5cdFwiXG5cblx0ZmllbGRzSXRlbTogKHtiYXNlQ2xhc3MsIGxhYmVsLHZhbHVlfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwLWl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbS1sYWJlbCc+I3tsYWJlbH06IDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbS12YWx1ZSc+I3tlc2NIVE1MIHZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0YnV0dG9uOiAoe2Jhc2VDbGFzcywgYWN0aW9uLCBpY29uPScnLCBpc011bHRpfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1idXR0b24gX2FjdGlvbkJ1dHRvbiAje2lmIGlzTXVsdGkgdGhlbiAnX2lzTXVsdGknIGVsc2UgJyd9JyBkYXRhLWFjdGlvbj0nI3thY3Rpb259Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1idXR0b24taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0YWN0aW9uczogKHtiYXNlQ2xhc3MsIGFjdGlvbnN9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAnPiN7YWN0aW9uc308L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXHRhY3Rpb25zT3ZlcmxheTogKCktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7RGF0YVRhYmxlLmRlZmF1bHRzLmJhc2VDbGFzc30tYWN0aW9ucy1vdmVybGF5Jz48L2Rpdj5cblx0XCJcblxuXHRhY3Rpb25zSXRlbTogKHtiYXNlQ2xhc3MsIGFjdGlvbiwgaWNvbiwgbGFiZWwsIGN1c3RvbUljb25TdHlsZT0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cC1pdGVtIF9hY3Rpb25CdXR0b24gX3N1YkFjdGlvbkJ1dHRvbicgZGF0YS1hY3Rpb249JyN7YWN0aW9ufScgc3R5bGU9JyN7Y3VzdG9tSWNvblN0eWxlfSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cC1pdGVtLWljb24nPiN7aWNvbn08L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0tdGV4dCc+I3tsYWJlbH08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuIiwiZGVmYXVsdHMgPSBcblx0J3BlclBhZ2UnOiAyMFxuXHQncGFnZUNvdW50TWF4JzogMTBcblx0J21pbldpZHRoJzogMFxuXHQnbW9iaWxlV2lkdGgnOiA3MzZcblx0J2NlbGxzSGF2ZVBhZGRpbmcnOiBmYWxzZVxuXHQnaGFzTW9iaWxlJzogdHJ1ZVxuXHQnbG9hZE9uSW5pdCc6IHRydWVcblx0J2NvbHVtbnMnOiBbXVxuXHQnc2VhcmNoJzogW11cblx0J3BlcmNlbnRhZ2UnOiB7fVxuXHQnYmFzZUNsYXNzJzogJ0RhdGFUYWJsZSdcblx0J3Nob3dQYWdlU3RhdHVzJzogdHJ1ZVxuXHQnc29ydEJ5JzogJydcblx0J2FsaWdubWVudCc6ICdsZWZ0J1xuXHQnYWN0aW9ucyc6IGZhbHNlXG5cdCdpcERhdGFGZXRjaGVyJzogKGlwQWRkcmVzcyktPiBuZXcgUHJvbWlzZSAocmVzb2x2ZSktPiAkLmdldCBcImh0dHA6Ly9pcGluZm8uaW8vI3tpcEFkZHJlc3N9XCIsIHJlc29sdmUsICdKU09OJ1xuIiwiaGVscGVycyA9IHt9XG5cblxuaGVscGVycy5jb21wYXJlVmFsdWVzID0gKHZhbHVlQSwgdmFsdWVCKS0+IHN3aXRjaFxuXHR3aGVuIHR5cGVvZiB2YWx1ZUEgaXMgdHlwZW9mIHZhbHVlQlxuXHRcdHZhbHVlQSBpcyB2YWx1ZUJcblx0XG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnc3RyaW5nJ1xuXHRcdHZhbHVlQSBpcyAnJyt2YWx1ZUJcblxuXHR3aGVuIHR5cGVvZiB2YWx1ZUEgaXMgJ251bWJlcidcblx0XHR2YWx1ZUEgaXMgcGFyc2VGbG9hdCh2YWx1ZUIpXG5cblxuaGVscGVycy50b2dnbGVBY3Rpb25zUG9wdXAgPSAoYWN0aW9uc1BvcHVwJCktPlxuXHRpc09wZW4gPSBhY3Rpb25zUG9wdXAkLmRhdGEgJ2lzT3BlbidcblxuXHRpZiBpc09wZW5cblx0XHRhY3Rpb25zUG9wdXAkLmRhdGEoJ292ZXJsYXknKS5yZW1vdmUoKVxuXHRcdGFjdGlvbnNQb3B1cCQucmVtb3ZlQ2xhc3MgJ2lzX3Zpc2libGUnXG5cdGVsc2Vcblx0XHRhY3Rpb25zUG9wdXAkLmRhdGEgJ292ZXJsYXknLCBvdmVybGF5JCA9ICQobWFya3VwLmFjdGlvbnNPdmVybGF5KCkpXG5cdFx0YWN0aW9uc1BvcHVwJC5hZGRDbGFzcyAnaXNfdmlzaWJsZSdcblx0XHRvdmVybGF5JC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KS5vbmUgJ2NsaWNrJywgKCktPiBoZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cChhY3Rpb25zUG9wdXAkKVxuXG5cdGFjdGlvbnNQb3B1cCQuZGF0YSAnaXNPcGVuJywgIWlzT3BlblxuXG5cbmhlbHBlcnMuZ2V0QnJlYWtkb3duVG90YWwgPSAoYnJlYWtkb3duLCBicmVha2Rvd25LZXlzKS0+IHN3aXRjaFxuXHR3aGVuIGJyZWFrZG93bktleXMubGVuZ3RoIGlzIDAgdGhlbiAwXG5cdGVsc2Vcblx0XHRicmVha2Rvd25LZXlzXG5cdFx0XHQubWFwIChicmVha2Rvd25JdGVtKS0+IGJyZWFrZG93blticmVha2Rvd25JdGVtXVxuXHRcdFx0LnJlZHVjZSAoYSxiKS0+IGErYlxuXG5cblxuaGVscGVycy5ub3JtYWxpemVDb2x1bW5zID0gKGNvbHVtbnMpLT5cblx0aWYgbm90IEFycmF5LmlzQXJyYXkoY29sdW1ucylcblx0XHRvdXRwdXQgPSBjb2x1bW5zXG5cdGVsc2Vcblx0XHRvdXRwdXQgPSB7fVxuXHRcdGlmIHR5cGVvZiBjb2x1bW5zWzBdIGlzICdzdHJpbmcnXG5cdFx0XHRvdXRwdXRbbGFiZWxdID0ge2xhYmVsfSBmb3IgbGFiZWwgaW4gY29sdW1uc1xuXHRcdFxuXHRcdGVsc2UgaWYgY29sdW1uc1swXT8ubGFiZWxcblx0XHRcdG91dHB1dFtjb2x1bW4ubGFiZWxdID0gY29sdW1uIGZvciBjb2x1bW4gaW4gY29sdW1uc1xuXG5cblx0Zm9yIGxhYmVsLGNvbHVtbiBvZiBvdXRwdXRcblx0XHRjb2x1bW4ubGFiZWwgPz0gbGFiZWxcblx0XHRjb2x1bW4uc2x1ZyA/PSBjb2x1bW4ubGFiZWwudG9Mb3dlckNhc2UoKS5yZXBsYWNlIC9cXFcvZywgJ18nXG5cdFx0Y29sdW1uLnR5cGUgPz0gJ3RleHQnXG5cblx0cmV0dXJuIG91dHB1dCBcblxuXG5oZWxwZXJzLmdldEJyZWFrZG93bkJhcldpZHRoID0gKHJvdywgbGFyZ2VzdCktPlxuXHQocm93LmJyZWFrZG93bkJhclRvdGFsIC8gbGFyZ2VzdCkgKiAoMTAwIC0gMTgpXG5cblxuaGVscGVycy5nZW5IZWFkZXJDZWxsU3R5bGUgPSAoY29sdW1uKS0+XG5cdHN0eWxlU3RyaW5nID0gJydcblxuXHRpZiBjb2x1bW4ud2lkdGhcblx0XHRzdHlsZVN0cmluZyArPSBcIm1heC13aWR0aDogI3tjb2x1bW4ud2lkdGh9O1wiXG5cdFxuXHRpZiBjb2x1bW4uZ3JvdyA+PSAwXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJmbGV4LWdyb3c6ICN7Y29sdW1uLmdyb3d9O1wiXG5cblx0cmV0dXJuIGlmIHN0eWxlU3RyaW5nIHRoZW4gXCJzdHlsZT0nI3tzdHlsZVN0cmluZ30nXCIgZWxzZSAnJ1xuXG5cblxuaGVscGVycy5nZW5DZWxsU3R5bGUgPSAoY29sdW1uKS0+XG5cdHN0eWxlU3RyaW5nID0gJydcblxuXHRpZiBjb2x1bW4ud2lkdGhcblx0XHRzdHlsZVN0cmluZyArPSBcIm1heC13aWR0aDogI3tjb2x1bW4ud2lkdGh9O1wiXG5cblx0aWYgY29sdW1uLmNvbG9yXG5cdFx0Y29sb3IgPSBAY29sb3JNYXBwaW5nKGNvbHVtbi5jb2xvciwgY29sdW1uLmNvbG9yVHlwZSlcblx0XHRzdHlsZVN0cmluZyArPSBcImNvbG9yOiAje2NvbG9yfTtcIlxuXG5cdGlmIGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcdHN0eWxlU3RyaW5nICs9IGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcblx0aWYgY29sdW1uLmdyb3cgPj0gMFxuXHRcdHN0eWxlU3RyaW5nICs9IFwiZmxleC1ncm93OiAje2NvbHVtbi5ncm93fTtcIlxuXG5cdHJldHVybiBpZiBzdHlsZVN0cmluZyB0aGVuIFwic3R5bGU9JyN7c3R5bGVTdHJpbmd9J1wiIGVsc2UgJydcblxuXG5cblxuaGVscGVycy5nZW5DZWxsQ2xhc3NuYW1lID0gKGNvbHVtbiktPlxuXHRjbGFzc1N0cmluZyA9ICcnXG5cdFxuXHRpZiBjb2x1bW4uc29ydGFibGVcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc1NvcnRhYmxlIHt7Y3VycmVudFNvcnR9fSdcblx0XG5cdGlmIGNvbHVtbi5ub0xhYmVsXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9MYWJlbCdcblx0XG5cdGlmIGNvbHVtbi5pc0xpbmtcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0xpbmsnXG5cdFxuXHRpZiBjb2x1bW4ubm9FbGxpcHNpc1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX25vRWxsaXBzaXMnXG5cdFxuXHRpZiBjb2x1bW4uc2hvd092ZXJmbG93XG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfc2hvd092ZXJmbG93J1xuXHRcblx0aWYgY29sdW1uLmNvbG9yXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaGFzQ29sb3InXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnV0dG9uJyBvciBjb2x1bW4udHlwZSBpcyAnYWN0aW9ucydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0J1dHRvbidcblx0XHRjb2x1bW4uYWx3YXlzQ2VudGVyID0gdHJ1ZVxuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2JyZWFrZG93bkJhcidcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0JyZWFrZG93bkJhcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdpcERldGFpbHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNJcERldGFpbHMnXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnZmllbGRzJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzRmllbGRzJ1xuXHRcblx0aWYgY29sdW1uLmFsd2F5c0NlbnRlclxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2Fsd2F5c0NlbnRlcidcblxuXHRyZXR1cm4gY2xhc3NTdHJpbmdcblxuXG5cblxuXG5cblxuaGVscGVycy5jb2xvck1hcHBpbmcgPSAodmFsdWUsIGNvbG9yVHlwZT0nbmFtZScpLT4gc3dpdGNoIGNvbG9yVHlwZVxuXHR3aGVuICdicm93c2VyJyB0aGVuIHN3aXRjaFxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0ZpcmVmb3gnIHRoZW4gQGNvbG9yTWFwcGluZygnb3JhbmdlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdDaHJvbWUnIHRoZW4gQGNvbG9yTWFwcGluZygnZ3JlZW4nKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ1NhZmFyaScgdGhlbiBAY29sb3JNYXBwaW5nKCdibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdNb2JpbGUgU2FmYXJpJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0lFJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Ymx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRWRnZScgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGJsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ09wZXJhJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3JlZCcpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQW5kcm9pZCcgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGdyZWVuJylcblx0XHRlbHNlICd1bmtub3duJ1xuXHRcblx0XG5cdHdoZW4gJ3BsYXRmb3JtJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ01hYyBPUyBYJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsYWNrJylcblx0XHR3aGVuICdXaW5kb3dzJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Ymx1ZScpXG5cdFx0d2hlbiAnV2luZG93cyBQaG9uZScgdGhlbiBAY29sb3JNYXBwaW5nKCdwdXJwbGUnKVxuXHRcdHdoZW4gJ0xpbnV4JyB0aGVuIEBjb2xvck1hcHBpbmcoJ2Rhcmt5ZWxsb3cnKVxuXHRcdHdoZW4gJ2lPUycgdGhlbiBAY29sb3JNYXBwaW5nKCdibGFjaycpXG5cdFx0d2hlbiAnQW5kcm9pZCcgdGhlbiBAY29sb3JNYXBwaW5nKFwibGlnaHRncmVlblwiKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cdFxuXHR3aGVuICdzYXRpc2ZhY3Rpb24nIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnRXhjZWxsZW50JyB0aGVuIEBjb2xvck1hcHBpbmcoJ2dyZWVuJylcblx0XHR3aGVuICdOb3JtYWwnIHRoZW4gQGNvbG9yTWFwcGluZygneWVsbG93Jylcblx0XHR3aGVuICdQb29yJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3JlZCcpXG5cdFx0ZWxzZSAndW5rbm93bidcblxuXHRcblx0d2hlbiAnbmFtZScgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdvcmFuZ2UnIHRoZW4gJyNlZTZmMGUnXG5cdFx0d2hlbiAnZ3JlZW4nIHRoZW4gJyMwMGFkMDknXG5cdFx0d2hlbiAnYmx1ZScgdGhlbiAnIzQ3ODhmMydcblx0XHR3aGVuICd5ZWxsb3cnIHRoZW4gJyNlYWI3MWUnXG5cdFx0d2hlbiAncmVkJyB0aGVuICcjY2M0ODIwJ1xuXHRcdHdoZW4gJ2JsYWNrJyB0aGVuICcjMTgxODE4J1xuXHRcdHdoZW4gJ3B1cnBsZScgdGhlbiAnI2EwMjBiYSdcblx0XHR3aGVuICdsaWdodGJsdWUnIHRoZW4gJyMwY2IzZWUnXG5cdFx0d2hlbiAnbGlnaHRncmVlbicgdGhlbiAnIzc4YzI1Nydcblx0XHR3aGVuICdkYXJreWVsbG93JyB0aGVuICcjZThhYzAxJ1xuXG5cdGVsc2UgdmFsdWVcblxuXG5cblxuXG5cbmhlbHBlcnMuaWNvbk1hcHBpbmcgPSAodmFsdWUsIGljb25UeXBlKS0+IHN3aXRjaCBpY29uVHlwZVxuXHR3aGVuICdicm93c2VyJ1xuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiAnIydcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiAnJSdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ1NhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gJyQnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdJRScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0VkZ2UnIHRoZW4gJyYnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdPcGVyYScgdGhlbiAnXCInXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuICcmIzAzOTsnXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnZGV2aWNlJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRGVza3RvcCcgdGhlbiAnISdcblx0XHRcdHdoZW4gJ1RhYmxldCcgdGhlbiAnNydcblx0XHRcdHdoZW4gJ01vYmlsZScgdGhlbiAnNidcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdwbGF0Zm9ybSdcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ01hYyBPUyBYJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnV2luZG93cycgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ1dpbmRvd3MgUGhvbmUnIHRoZW4gJyknXG5cdFx0XHR3aGVuICdMaW51eCcgdGhlbiAnKydcblx0XHRcdHdoZW4gJ2lPUycgdGhlbiAnKidcblx0XHRcdHdoZW4gJ0FuZHJvaWQnIHRoZW4gXCImIzAzOTtcIlxuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbidcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ0V4Y2VsbGVudCcgdGhlbiAnWydcblx0XHRcdHdoZW4gJ05vcm1hbCcgdGhlbiAnQCdcblx0XHRcdHdoZW4gJ1Bvb3InIHRoZW4gJz8nXG5cdFx0XHRlbHNlICc0J1xuXG5cdGVsc2UgJzQnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAnZ2VuZXJhbC5jb2ZmZWUnXG5pbXBvcnQgJ2NvbHVtbi5jb2ZmZWUnXG5pbXBvcnQgJ3Jvdy5jb2ZmZWUnXG5pbXBvcnQgJ3NwZWNpYWxDZWxscy5jb2ZmZWUnIiwiRGF0YVRhYmxlOjpjYWxjUGFnZUNvdW50ID0gKHJvd3MpLT5cblx0QHBhZ2VDb3VudFJlYWwgPSBNYXRoLmNlaWwgcm93cy5sZW5ndGgvQG9wdGlvbnMucGVyUGFnZVxuXHRAcGFnZUNvdW50ID0gaWYgQHBhZ2VDb3VudFJlYWwgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSBAcGFnZUNvdW50UmVhbFxuXG5cblxuXG5cbkRhdGFUYWJsZTo6Y2FsY1BlcmNlbnRhZ2VTdHJpbmcgPSAoY29sdW1uVmFsdWUsIGNvbHVtbk5hbWUsIHJvdyktPlxuXHRmb3JtdWxhID0gQG9wdGlvbnMucGVyY2VudGFnZVtjb2x1bW5OYW1lXVxuXHRjb2x1bW5BID0gZm9ybXVsYVswXVxuXHRjb2x1bW5CID0gZm9ybXVsYVsyXVxuXHRtYXRoT3BlcmF0b3IgPSBmb3JtdWxhWzFdXG5cblx0cGVyY2VudGFnZVZhbHVlID0gc3dpdGNoIG1hdGhPcGVyYXRvclxuXHRcdHdoZW4gJyonIHRoZW4gcm93W2NvbHVtbkFdICogcm93W2NvbHVtbkJdXG5cdFx0d2hlbiAnLycgdGhlbiByb3dbY29sdW1uQV0gLyByb3dbY29sdW1uQl1cblx0XHR3aGVuICcrJyB0aGVuIHJvd1tjb2x1bW5BXSArIHJvd1tjb2x1bW5CXVxuXHRcdHdoZW4gJy0nIHRoZW4gcm93W2NvbHVtbkFdIC0gcm93W2NvbHVtbkJdXG5cblx0cGVyY2VudGFnZVZhbHVlID0gMCBpZiBwZXJjZW50YWdlVmFsdWUgaXMgSW5maW5pdHlcblx0cGVyY2VudCA9IGNvbnZlcnRUb1BlcmNlbnQocGVyY2VudGFnZVZhbHVlKVxuXHRyZXR1cm4gXCIje2NvbHVtblZhbHVlfSAoI3twZXJjZW50fSlcIlxuXG5cblxuXG5cblxuRGF0YVRhYmxlOjpzb3J0Um93cyA9IChyb3dzLCB0YXJnZXRDb2x1bW49QG9wdGlvbnMuc29ydEJ5KS0+IHN3aXRjaFxuXHR3aGVuIHRhcmdldENvbHVtbiBpcyAnKycgdGhlbiByb3dzXG5cdHdoZW4gdGFyZ2V0Q29sdW1uIGlzICctJyB0aGVuIHJvd3M/LnNsaWNlKCkucmV2ZXJzZSgpXG5cdHdoZW4gQG9wdGlvbnMuY29sdW1uc1t0YXJnZXRDb2x1bW5dXG5cdFx0Y3VzdG9tU29ydCA9IEBvcHRpb25zLmNvbHVtbnNbdGFyZ2V0Q29sdW1uXS5zb3J0Rm5cblx0XHRyYXdWYWx1ZSA9IEBvcHRpb25zLmNvbHVtbnNbdGFyZ2V0Q29sdW1uXS5yYXdWYWx1ZUZvcm1hdHRlclxuXHRcdFxuXHRcdHJvd3Muc2xpY2UoKS5zb3J0IGN1c3RvbVNvcnQgb3IgKGEsYik9PlxuXHRcdFx0YVZhbHVlID0gaWYgcmF3VmFsdWUgdGhlbiByYXdWYWx1ZShhW3RhcmdldENvbHVtbl0pIGVsc2UgYVt0YXJnZXRDb2x1bW5dXG5cdFx0XHRiVmFsdWUgPSBpZiByYXdWYWx1ZSB0aGVuIHJhd1ZhbHVlKGJbdGFyZ2V0Q29sdW1uXSkgZWxzZSBiW3RhcmdldENvbHVtbl1cblx0XHRcdHN3aXRjaFxuXHRcdFx0XHR3aGVuIGFWYWx1ZSA+IGJWYWx1ZSB0aGVuIEBzb3J0RGlyZWN0aW9uXG5cdFx0XHRcdHdoZW4gYVZhbHVlIDwgYlZhbHVlIHRoZW4gQHNvcnREaXJlY3Rpb24gKiAtMVxuXHRcdFx0XHRlbHNlIDBcblxuXHRlbHNlIHJvd3Ncblx0XG5cblxuRGF0YVRhYmxlOjpzZXRWaXNpYmxlUGFnZSA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UtLSAjIERlYyBieSAxIGZvciBhcnJheS1pbmRleCBzdHlsZVxuXHRzbGljZSA9XG5cdFx0J3N0YXJ0JzogdGFyZ2V0UGFnZSpAb3B0aW9ucy5wZXJQYWdlXG5cdFx0J2VuZCc6ICh0YXJnZXRQYWdlKkBvcHRpb25zLnBlclBhZ2UpK0BvcHRpb25zLnBlclBhZ2Vcblx0XG5cdHJvd3NUb1JldmVhbCA9IEBhdmFpbGFibGVSb3dzW3NsaWNlLnN0YXJ0IC4uLiBzbGljZS5lbmRdXG5cdHJvd3NUb0hpZGUgPSBAdmlzaWJsZVJvd3Muc2xpY2UoKVxuXG5cdHJvdy52aXNpYmxlID0gZmFsc2UgZm9yIHJvdyBpbiByb3dzVG9IaWRlXG5cdEB2aXNpYmxlUm93cy5sZW5ndGggPSAwXG5cdEB2aXNpYmxlUm93cy5wdXNoLmFwcGx5IEB2aXNpYmxlUm93cywgcm93c1RvUmV2ZWFsXG5cblxuXG5cbkRhdGFUYWJsZTo6c2V0UGFnZUluZGljYXRvciA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UgPSAxIGlmIHRhcmdldFBhZ2UgaXMgJy4uLidcblx0dGFyZ2V0UGFnZSA9IGlmIHRhcmdldFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSB0YXJnZXRQYWdlLTEgIyAwLWJhc2VkIGluZGV4IHNvIHdlIHN1YnRyYWN0IDFcblx0cGFnZUl0ZW1zJCA9IEBlbHMucGFnaW5hdGlvbi5maW5kKCcuX3BhZ2luYXRpb25JdGVtJykuc2xpY2UoMSwtMSlcblx0bWF0Y2hlZFBhZ2VFbCQgPSBwYWdlSXRlbXMkLmVxIHRhcmdldFBhZ2Vcblx0XG5cdG1hdGNoZWRQYWdlRWwkLmFkZENsYXNzICdjdXJyZW50J1xuXHRwYWdlSXRlbXMkLm5vdChtYXRjaGVkUGFnZUVsJCkucmVtb3ZlQ2xhc3MgJ2N1cnJlbnQnXHRcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJEYXRhVGFibGU6OmdlbmVyYXRlSGVhZGluZ0NvbHVtbnMgPSAoKS0+XG5cdEBvcHRpb25zLmNvbHVtbnMgPSBoZWxwZXJzLm5vcm1hbGl6ZUNvbHVtbnMoQG9wdGlvbnMuY29sdW1ucylcblx0QGhhc0JyZWFrZG93bkJhciA9IHRydWUgaWYgY29sdW1uLnR5cGUgaXMgJ2JyZWFrZG93bkJhcicgZm9yIGxhYmVsLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zXG5cblx0T2JqZWN0LmtleXMoQG9wdGlvbnMuY29sdW1ucylcblx0XHQubWFwIChsYWJlbCk9PlxuXHRcdFx0Y29sdW1uID0gQG9wdGlvbnMuY29sdW1uc1tsYWJlbF1cblx0XHRcdEBlbHMuZ2xvYmFsU3R5bGVzWzBdLmlubmVySFRNTCArPSBcInt7I3tjb2x1bW4uc2x1Z319fVxcblwiXG5cblx0XHRcdG1hcmt1cC5oZWFkaW5nQ2VsbCBAbWFya3VwQXJnc1xuXHRcdFx0XHQnc2x1Zyc6IGNvbHVtbi5zbHVnXG5cdFx0XHRcdCdpY29uJzogY29sdW1uLmljb25cblx0XHRcdFx0J2xhYmVsJzogY29sdW1uLmxhYmVsXG5cdFx0XHRcdCdzdHlsZSc6IGhlbHBlcnMuZ2VuSGVhZGVyQ2VsbFN0eWxlKGNvbHVtbilcblx0XHRcdFx0J2V4dHJhQ2xhc3Nlcyc6IGhlbHBlcnMuZ2VuQ2VsbENsYXNzbmFtZShjb2x1bW4pXG5cdFx0LmpvaW4oJycpXG5cblxuXG5cblxuRGF0YVRhYmxlOjp1cGRhdGVDb2x1bW5zID0gKHVwZGF0ZWRDb2x1bW5zKS0+XG5cdHVwZGF0ZWRDb2x1bW5zID0gaGVscGVycy5ub3JtYWxpemVDb2x1bW5zKHVwZGF0ZWRDb2x1bW5zKVxuXHRleHRlbmQuZGVlcChAb3B0aW9ucy5jb2x1bW5zLCB1cGRhdGVkQ29sdW1ucylcblx0QGN1cnJlbnRQYWdlID0gQGN1cnJlbnRQYWdlXG5cblxuXG5cblxuXG5cblxuXG4iLCJEYXRhVGFibGU6OnByb2Nlc3NSb3cgPSAocm93KS0+IGlmIHJvdy5wcm9jZXNzZWQgdGhlbiByb3cgZWxzZVxuXHRAZ2VuZXJhdGVSb3cocm93KVxuXG5cdFNpbXBseUJpbmQoJ3Zpc2libGUnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKHJvdylcblx0XHQudG8gKGlzVmlzaWJsZSwgcHJldlZhbHVlKT0+XG5cdFx0XHRpZiBub3QgaXNWaXNpYmxlIFxuXHRcdFx0XHRyb3cuZWwuZGV0YWNoKClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cm93LmVsLmFwcGVuZFRvIEBlbHMudGFibGVCb2R5XG5cblx0XHRcdFx0aWYgQGhhc0JyZWFrZG93bkJhciBhbmQgbm90IHJvdy51cGRhdGVkQnJlYWtkb3duV2lkdGggYW5kIGlzVmlzaWJsZSBpc250IHByZXZWYWx1ZVxuXHRcdFx0XHRcdHJvdy5icmVha2Rvd25CYXJXaWR0aCA9IGhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXHRcdFx0XHRcblxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWw/Lmxlbmd0aFxuXHRcdFNpbXBseUJpbmQoJ2xhcmdlc3RCcmVha2Rvd25Ub3RhbCcpLm9mKEApXG5cdFx0XHQudG8oJ3VwZGF0ZWRCcmVha2Rvd25XaWR0aCcpLm9mKHJvdylcblx0XHRcdFx0LnRyYW5zZm9ybSAoKS0+IGlmIHJvdy52aXNpYmxlIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG5cdFx0XHQuYW5kLnRvKCdicmVha2Rvd25CYXJXaWR0aCcpLm9mKHJvdylcblx0XHRcdFx0LnRyYW5zZm9ybSAoKT0+IGhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXG5cdFx0XHRcdC5jaGFpblRvKCd3aWR0aCcpLm9mKHJvdy5icmVha2Rvd25CYXJFbFswXS5zdHlsZSlcblx0XHRcdFx0XHQudHJhbnNmb3JtICh3aWR0aCktPiB3aWR0aCsnJSdcblxuXHRcdFx0XHQuYW5kLnRvICgpPT5cblx0XHRcdFx0XHRmb3IgZHJpbGxkb3duRWwsaW5kZXggaW4gcm93LmRyaWxsZG93bkVsc1xuXHRcdFx0XHRcdFx0d2lkdGggPSBoZWxwZXJzLmdldEJyZWFrZG93bkJhcldpZHRoKHJvdy5kcmlsbGRvd25baW5kZXhdLCByb3cuZHJpbGxkb3duLmxhcmdlc3RCcmVha2Rvd25Ub3RhbClcblx0XHRcdFx0XHRcdCQoZHJpbGxkb3duRWwpLmNoaWxkcmVuKCcuaXNfYnJlYWtkb3duX2JhcicpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVswXT8uc3R5bGUud2lkdGggPSB3aWR0aCsnJSdcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0LmNvbmRpdGlvbiAoKS0+IHJvdy5kcmlsbGRvd25cblx0XHRcdFx0XHRcblx0XHRcdC5jb25kaXRpb25BbGwgKCktPiByb3cudmlzaWJsZVxuXG5cdHJvdy5wcm9jZXNzZWQgPSB0cnVlXG5cdHJldHVybiByb3dcblxuXG5cblxuXG5EYXRhVGFibGU6OnVucHJvY2Vzc1JvdyA9IChyb3cpLT4gaWYgcm93LnByb2Nlc3NlZFxuXHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3csIHRydWUpXG5cdFxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWxbMF1cblx0XHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3cuYnJlYWtkb3duQmFyRWxbMF0uc3R5bGUpXG5cblx0cm93LmVsLnJlbW92ZSgpXG5cdGRlbGV0ZSByb3cuZWxcblx0ZGVsZXRlIHJvdy5kcmlsbGRvd25FbHNcblx0ZGVsZXRlIHJvdy52aXNpYmxlXG5cdGRlbGV0ZSByb3cuYnJlYWtkb3duQmFyRWxcblx0ZGVsZXRlIHJvdy5wcm9jZXNzZWRcblxuXG5cbkRhdGFUYWJsZTo6cmVSZW5kZXJSb3cgPSAocm93KS0+XG5cdEBnZW5lcmF0ZVJvdyhyb3cpXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlUm93ID0gKHJvdyktPlxuXHRwcmV2Um93RWwgPSByb3cuZWxcblx0bmV3Um93RWwgPSByb3cuZWwgPSAkKEBnZW5lcmF0ZVJvd01hcmt1cChyb3cpKS5kYXRhKCdyb3cnLCByb3cpXG5cdHByZXZSb3dFbC5yZXBsYWNlV2l0aChuZXdSb3dFbCkgaWYgcHJldlJvd0VsXG5cdFxuXHRyb3cuZXhwYW5kQnV0dG9uID0gcm93LmVsLmNoaWxkcmVuKCkuZmlyc3QoKSBpZiByb3cuZHJpbGxkb3duXG5cdHJvdy5kcmlsbGRvd25FbHMgPSByb3cuZWwuY2hpbGRyZW4oJy5fdGFibGVSb3dEcmlsbGRvd24nKS5jaGlsZHJlbigpIGlmIHJvdy5kcmlsbGRvd25cblx0cm93LmJyZWFrZG93bkJhckVsID0gcm93LmVsLmNoaWxkcmVuKCcuaXNCcmVha2Rvd25CYXInKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkgaWYgQGhhc0JyZWFrZG93bkJhclxuXHRyb3cudmlzaWJsZSA9IGZhbHNlIHVubGVzcyBwcmV2Um93RWxcblx0XG5cdGlmIHJvdy5kcmlsbGRvd25cblx0XHRpZiBAaGFzQnJlYWtkb3duQmFyXG5cdFx0XHRyb3cuZHJpbGxkb3duLmxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IE1hdGgubWF4IHJvdy5kcmlsbGRvd24ubWFwKChzdWJSb3cpLT4gc3ViUm93LmJyZWFrZG93bkJhclRvdGFsKS4uLlxuXG5cdFx0U2ltcGx5QmluZCgnZHJpbGxkb3duT3BlbicpLm9mKHJvdylcblx0XHRcdC50bygnY2xhc3NOYW1lLmRyaWxsZG93blN0YXRlJykub2Yocm93LmVsKVxuXHRcdFx0XHQudHJhbnNmb3JtIChkcmlsbGRvd25PcGVuKS0+IGlmIGRyaWxsZG93bk9wZW4gdGhlbiAnaGFzRHJpbGxkb3duIGRyaWxsZG93bklzT3BlbicgZWxzZSAnaGFzRHJpbGxkb3duJ1xuXG5cdFx0U2ltcGx5QmluZCgndmlzaWJsZScpLm9mKHJvdylcblx0XHRcdC5vbmNlLnRvICgpLT5cblx0XHRcdFx0U2ltcGx5QmluZCAoKS0+XG5cdFx0XHRcdFx0aWYgbm90IHJvdy5kcmlsbGRvd25PcGVuIHRoZW4gc2V0VGltZW91dCAoKS0+XG5cdFx0XHRcdFx0XHRyb3dIZWlnaHQgPSByb3cuZWwuaGVpZ2h0KClcblx0XHRcdFx0XHRcdGJ1dHRvbkhlaWdodCA9IHJvdy5leHBhbmRCdXR0b24uaGVpZ2h0KClcblx0XHRcdFx0XHRcdHJvdy5leHBhbmRCdXR0b25bMF0uc3R5bGUudG9wID0gXCIje3Jvd0hlaWdodC8yIC0gYnV0dG9uSGVpZ2h0LzJ9cHhcIlxuXG5cdFx0XHRcdC51cGRhdGVPbignZXZlbnQ6cmVzaXplJywgdGhyb3R0bGU6MzAwKS5vZih3aW5kb3cpXG5cdFx0XHQuY29uZGl0aW9uICh2aXNpYmxlKS0+IHZpc2libGVcblxuXHRyZXR1cm4gcm93XG5cblxuXG5cblxuRGF0YVRhYmxlOjpnZW5lcmF0ZVJvd01hcmt1cCA9IChyb3csIHBhcmVudFJvdyktPlxuXHRpc1N1YiA9ICEhcGFyZW50Um93XG5cdFxuXHRtYXJrdXAucm93IEBtYXJrdXBBcmdzXG5cdFx0J3Jvd0lEJzogaWYgaXNTdWIgdGhlbiBwYXJlbnRSb3dbQG9wdGlvbnMudW5pcXVlSURdIGVsc2Ugcm93W0BvcHRpb25zLnVuaXF1ZUlEXVxuXHRcdCdkcmlsbGRvd24nOiBpZiBpc1N1YiB0aGVuICcnIGVsc2UgaWYgcm93LmRyaWxsZG93biB0aGVuIGRvICgpPT5cblx0XHRcdGRyaWxsZG93bk1hcmt1cHMgPSAnJ1xuXHRcdFx0ZHJpbGxkb3duTWFya3VwcyArPSBAZ2VuZXJhdGVSb3dNYXJrdXAoZHJpbGxkb3duUm93LCByb3cpIGZvciBkcmlsbGRvd25Sb3cgaW4gcm93LmRyaWxsZG93blxuXHRcdFx0cmV0dXJuIGRyaWxsZG93bk1hcmt1cHNcblx0XHRcblx0XHQnY2VsbHMnOiBkbyAoKT0+XG5cdFx0XHRyb3dDZWxscyA9ICcnXG5cdFx0XHRcblx0XHRcdGZvciBjb2x1bW5OYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zXG5cdFx0XHRcdGNlbGxWYWx1ZSA9IHJvd1tjb2x1bW5OYW1lXVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnBlcmNlbnRhZ2VbY29sdW1uTmFtZV1cblx0XHRcdFx0XHRjZWxsVmFsdWUgPSBAY2FsY1BlcmNlbnRhZ2VTdHJpbmcoY2VsbFZhbHVlLCBjb2x1bW5OYW1lLCByb3cpXG5cblxuXHRcdFx0XHRyb3dDZWxscyArPSBtYXJrdXAucm93Q2VsbCBAbWFya3VwQXJnc1xuXHRcdFx0XHRcdCdsYWJlbCc6IGlmIHR5cGVvZiBjZWxsVmFsdWUgaXMgJ3N0cmluZycgdGhlbiBjZWxsVmFsdWUgZWxzZSAnJ1xuXHRcdFx0XHRcdCdjb2x1bW4nOiBjb2x1bW5OYW1lXG5cdFx0XHRcdFx0J3NsdWcnOiBjb2x1bW4uc2x1Z1xuXHRcdFx0XHRcdCdleHRyYUNsYXNzZXMnOiBoZWxwZXJzLmdlbkNlbGxDbGFzc25hbWUoY29sdW1uKVxuXHRcdFx0XHRcdCdzdHlsZSc6IGhlbHBlcnMuZ2VuQ2VsbFN0eWxlKGNvbHVtbilcblx0XHRcdFx0XHQndmFsdWUnOiBkbyAoKT0+IHN3aXRjaFxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnZmllbGRzJyBcdFx0dGhlbiBAZ2VuZXJhdGVJbmxpbmVGaWVsZHMoY2VsbFZhbHVlLCByb3csIGNvbHVtbilcblx0XHRcdFx0XHRcdHdoZW4gY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscycgXHR0aGVuIEBnZW5lcmF0ZUlwRGV0YWlscyhjZWxsVmFsdWUsIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJyBcdHRoZW4gQGdlbmVyYXRlQnJlYWtkb3duQmFyKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdidXR0b24nIFx0XHR0aGVuIEBnZW5lcmF0ZUJ1dHRvbigoY29sdW1uLmFjdGlvbiBvciBjZWxsVmFsdWUpLCAoY29sdW1uLmJ1dHRvbkljb24gb3IgY29sdW1uLmljb24pKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnYWN0aW9ucycgXHRcdHRoZW4gQGdlbmVyYXRlQWN0aW9ucyhjb2x1bW4sIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4uaXNMaW5rIFx0XHRcdFx0XHR0aGVuIFwiPGEgaHJlZj0nI3tjZWxsVmFsdWV9JyB0YXJnZXQ9J19ibGFuayc+I3tjZWxsVmFsdWV9PC9hPlwiXG5cdFx0XHRcdFx0XHRlbHNlIChpZiBjb2x1bW4uZm9ybWF0dGVyIHRoZW4gY29sdW1uLmZvcm1hdHRlcihjZWxsVmFsdWUsIHJvdywgY29sdW1uKSBlbHNlIGNlbGxWYWx1ZSlcblx0XHRcdFx0XHRcblx0XHRcdHJldHVybiByb3dDZWxsc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiRGF0YVRhYmxlOjpnZW5lcmF0ZUJyZWFrZG93bkJhciA9IChicmVha2Rvd24sIHJvd09iaiwgY29sdW1uRW50aXR5KS0+XG5cdGJyZWFrZG93bktleXMgPSBAbGVnZW5kIG9yIE9iamVjdC5rZXlzKGJyZWFrZG93bilcblx0cm93T2JqLmJyZWFrZG93bkJhclRvdGFsID0gdG90YWwgPSBAZ2V0QnJlYWtkb3duVG90YWwoYnJlYWtkb3duLCBicmVha2Rvd25LZXlzKVxuXHRcblx0cmV0dXJuICdOL0EnIHVubGVzcyB0b3RhbFxuXHRcblx0bWFya3VwLmJyZWFrZG93bkJhciBAbWFya3VwQXJnc1xuXHRcdCd0b3RhbCc6IHRvdGFsXG5cdFx0J3RvdGFsRm9ybWF0dGVkJzogaWYgY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0IHRoZW4gY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0KHRvdGFsKSBlbHNlIHRvdGFsXG5cdFx0J2JhcnMnOiBkbyAoKS0+XG5cdFx0XHRiYXJzID0gJydcblx0XHRcdGZvciBrZXkgaW4gYnJlYWtkb3duS2V5c1xuXHRcdFx0XHR2YWx1ZSA9IGJyZWFrZG93bltrZXldXG5cdFx0XHRcdGJhcnMgKz0gbWFya3VwLmJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2Jhci5yZXBsYWNlICd7e3dpZHRofX0nLCAodmFsdWUvdG90YWwpKjEwMFxuXHRcdFx0cmV0dXJuIGJhcnNcblxuXHRcdCdob3ZlckJveCc6IGRvICgpLT5cblx0XHRcdG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9ob3ZlcmJveFxuXHRcdFx0XHQucmVwbGFjZSAne3tyb3dzfX0nLCAoKS0+XG5cdFx0XHRcdFx0cm93cyA9ICcnXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWtkb3duS2V5cy5mb3JFYWNoIChrZXksIGluZGV4KS0+XG5cdFx0XHRcdFx0XHRyb3dzICs9IG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9ob3ZlcmJveF9yb3dcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7Y29sb3J9fScsIGN1c3RvbUNvbG9ycyhpbmRleClcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7a2V5fX0nLCBrZXlcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7dmFsdWV9fScsIGlmIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdCB0aGVuIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdChicmVha2Rvd25ba2V5XSkgZWxzZSBicmVha2Rvd25ba2V5XVxuXG5cdFx0XHRcdFx0cmV0dXJuIHJvd3NcblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlSW5saW5lRmllbGRzID0gKGRhdGFGaWVsZHMpLT5cblx0bWFya3VwLmZpZWxkcyBAbWFya3VwQXJncyAnZmllbGRzJzogZG8gKCk9PlxuXHRcdHJldHVybiAnJyB1bmxlc3MgdHlwZW9mIGRhdGFGaWVsZHMgaXMgJ29iamVjdCdcblx0XHRcblx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgZGF0YUZpZWxkc1xuXHRcdFx0bWFya3VwLmZpZWxkc0l0ZW0gQG1hcmt1cEFyZ3Mge2xhYmVsLHZhbHVlfVxuXG5cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlQnV0dG9uID0gKGFjdGlvbiwgaWNvbiwgaXNNdWx0aSktPlxuXHRtYXJrdXAuYnV0dG9uKEBtYXJrdXBBcmdzIHthY3Rpb24sIGljb24sIGlzTXVsdGl9KVxuXG5cblxuXG5cbkRhdGFUYWJsZTo6Z2VuZXJhdGVBY3Rpb25zID0gKGNvbHVtbiktPlxuXHRjb2x1bW4uYWN0aW9ucyA/PSAnbXVsdGlBY3Rpb25zJ1xuXHRidXR0b25NYXJrdXAgPSBAZ2VuZXJhdGVCdXR0b24oY29sdW1uLmFjdGlvbnMsIChjb2x1bW4uYnV0dG9uSWNvbiBvciBjb2x1bW4uaWNvbiksIHRydWUpXG5cdGFjdGlvbnNNYXJrdXAgPSBtYXJrdXAuYWN0aW9ucyBAbWFya3VwQXJncyAnYWN0aW9ucyc6IGRvICgpPT5cblx0XHRyZXR1cm4gJycgdW5sZXNzIEBvcHRpb25zLmFjdGlvbnNcblx0XHRcblx0XHRvdXRwdXQgPSBmb3IgYWN0aW9uIGluIEBvcHRpb25zLmFjdGlvbnNcblx0XHRcdG1hcmt1cC5hY3Rpb25zSXRlbShAbWFya3VwQXJncyBhY3Rpb24pXG5cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpXG5cblx0cmV0dXJuIGJ1dHRvbk1hcmt1cCthY3Rpb25zTWFya3VwXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlSXBEZXRhaWxzID0gKGlwQWRkcmVzcywgcm93LCBjb2x1bW4pLT5cblx0bWFya3VwLmlwRGV0YWlscyBAbWFya3VwQXJncyB7aXBBZGRyZXNzLCBleHRyYTpjb2x1bW4uZXh0cmFNYXJrdXA/KGlwQWRkcmVzcywgcm93KX0gIyBkYXRhIGF0dHJpYnV0ZVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiRGF0YVRhYmxlOjphdHRhY2hFdmVudHMgPSAoKS0+XG5cdCMgPT09PSBQYWdpbmF0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnBhZ2luYXRpb24ub24gJ2NsaWNrJywgJy5fcGFnaW5hdGlvbkl0ZW0nLCAoZXZlbnQpPT5cblx0XHQkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpc0JhY2sgPSAkdGhpcy5oYXNDbGFzcygnX2JhY2snKVxuXHRcdGlzTmV4dCA9ICR0aGlzLmhhc0NsYXNzKCdfbmV4dCcpXG5cdFx0aXNFeHRyYSA9ICR0aGlzLmhhc0NsYXNzKCdfZXh0cmFJbmRpY2F0b3InKVxuXG5cdFx0aWYgaXNCYWNrXG5cdFx0XHRAY3VycmVudFBhZ2UtLSB1bmxlc3MgQGN1cnJlbnRQYWdlIGlzIDFcblx0XHRcblx0XHRlbHNlIGlmIGlzTmV4dFxuXHRcdFx0QGN1cnJlbnRQYWdlKysgdW5sZXNzIEBjdXJyZW50UGFnZSBpcyBAcGFnZUNvdW50UmVhbFxuXHRcdFxuXHRcdCMgZWxzZSBpZiBub3QgaXNFeHRyYSBhbmQgbm90IGlzV3JhcHBlclxuXHRcdGVsc2UgaWYgbm90IGlzRXh0cmFcblx0XHRcdHBhZ2VOdW1iZXIgPSBwYXJzZUZsb2F0ICR0aGlzLmNoaWxkcmVuKCkuaHRtbCgpXG5cdFx0XHRAY3VycmVudFBhZ2UgPSBwYWdlTnVtYmVyXG5cblxuXG5cblx0IyA9PT09IFNvcnRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVIZWFkaW5nLm9uICdjbGljaycsICcuX2lzU29ydGFibGUnLCAoZXZlbnQpPT5cblx0XHRAc29ydEJ5ID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuXG5cblxuXHQjID09PT0gQWN0aW9uIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdjbGljaycsICcuX2FjdGlvbkJ1dHRvbicsIChldmVudCk9PlxuXHRcdGJ1dHRvbiQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX2lzTXVsdGknKVxuXHRcdFx0aGVscGVycy50b2dnbGVBY3Rpb25zUG9wdXAgYnV0dG9uJC5uZXh0KCkuY2hpbGRyZW4oKVxuXHRcdFxuXHRcdGVsc2Vcblx0XHRcdGl0ZW1Sb3ckID0gYnV0dG9uJC5jbG9zZXN0KCcuX3RhYmxlUm93Jylcblx0XHRcdGFjdGlvbiA9IGJ1dHRvbiQuZGF0YSgnYWN0aW9uJylcblx0XHRcdGl0ZW1JRCA9IGl0ZW1Sb3ckLmRhdGEoJ3Jvdy1pZCcpXG5cdFx0XHRpdGVtSW5kZXggPSBpdGVtUm93JC5kYXRhKCdpbmRleCcpXG5cdFx0XHRkYXRhSXRlbSA9IGlmIGl0ZW1JRCB0aGVuIEBhbGxSb3dzLmZpbmQgKHJvdyk9PiBoZWxwZXJzLmNvbXBhcmVWYWx1ZXMocm93W0BvcHRpb25zLnVuaXF1ZUlEXSwgaXRlbUlEKVxuXHRcdFx0ZGF0YUl0ZW0gPz0gaXRlbUlEXG5cblx0XHRcdGlmIGJ1dHRvbiQuaGFzQ2xhc3MoJ19zdWJBY3Rpb25CdXR0b24nKVxuXHRcdFx0XHRoZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLnBhcmVudCgpXG5cblx0XHRcdEBlbHMudGFibGUudHJpZ2dlciBcImFjdGlvbi4je2FjdGlvbn1cIiwgZGF0YUl0ZW1cblxuXG5cblxuXG5cblx0IyA9PT09IFJvdyBleHBhbnNpb24gbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnY2xpY2snLCAnLl9leHBhbmREcmlsbGRvd24nLCAoZXZlbnQpPT5cblx0XHRidXR0b24kID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGl0ZW1Sb3cgPSBidXR0b24kLnBhcmVudCgpLmRhdGEoJ3JvdycpXG5cdFx0XG5cdFx0aXRlbVJvdy5kcmlsbGRvd25PcGVuID0gIWl0ZW1Sb3cuZHJpbGxkb3duT3BlblxuXG5cblxuXG5cblxuXG5cdCMgPT09PSBJUCBEZXRhaWxzIGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ21vdXNlb3ZlcicsICcuX2lwRGV0YWlscy10cmlnZ2VyJywgKGV2ZW50KT0+XG5cdFx0dHJpZ2dlciQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0d3JhcHBlciQgPSB0cmlnZ2VyJC5wYXJlbnQoKVxuXHRcdGNvbnRlbnQkID0gdHJpZ2dlciQubmV4dCgpXG5cdFx0Y291bnRyeSQgPSBjb250ZW50JC5uZXh0KClcblx0XHRpcEFkZHJlc3MgPSB3cmFwcGVyJC5kYXRhICdpcCdcblx0XHRpc0xvYWRlZCA9IHRyaWdnZXIkLmhhc0NsYXNzICdfaXNSZWFkeSdcblxuXG5cdFx0dW5sZXNzIGlzTG9hZGVkXHRcdFx0XG5cdFx0XHRAb3B0aW9ucy5pcERhdGFGZXRjaGVyKGlwQWRkcmVzcykudGhlbiAoaXBEZXRhaWxzKT0+XG5cdFx0XHRcdHJldHVybiB1bmxlc3MgaXBEZXRhaWxzXG5cdFx0XHRcdFxuXHRcdFx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgaXBEZXRhaWxzIFxuXHRcdFx0XHRcdG1hcmt1cC5pcERldGFpbHNJdGVtKEBtYXJrdXBBcmdzIHtsYWJlbCx2YWx1ZX0pXG5cblx0XHRcdFx0Y29udGVudCQuaHRtbCBvdXRwdXQuam9pbignJylcblx0XHRcdFx0d3JhcHBlciQuYWRkQ2xhc3MgJ19pc1JlYWR5J1xuXG5cblxuXHRQcm9taXNlLnJlc29sdmUoKVxuXG5cbiIsIkRhdGFUYWJsZTo6YXR0YWNoQmluZGluZ3MgPSAoKS0+XG5cdFNpbXBseUJpbmQuc2V0dGluZ3MudHJhY2tBcnJheUNoaWxkcmVuID0gZmFsc2Vcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU3RhdGVcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ25vUmVzdWx0cycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLm5vUmVzdWx0c01lc3NhZ2UpLnRyYW5zZm9ybSAobm9SZXN1bHRzKT0+IGlmIG5vUmVzdWx0cyBhbmQgbm90IEBzdGF0ZS5sb2FkaW5nIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUubm9SZXN1bHRzJykub2YoQGVscy50YWJsZU91dGVyd3JhcCkudHJhbnNmb3JtIChub1Jlc3VsdHMpPT4gaWYgbm9SZXN1bHRzIGFuZCBub3QgQHN0YXRlLmxvYWRpbmcgdGhlbiAnX25vUmVzdWx0cycgZWxzZSAnJ1xuXHRcblx0U2ltcGx5QmluZCgnbG9hZGluZycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLmxvYWRpbmdNZXNzYWdlKS50cmFuc2Zvcm0gKGxvYWRpbmcpLT4gaWYgbG9hZGluZyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmxvYWRpbmcnKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGxvYWRpbmcpPT4gaWYgbG9hZGluZyB0aGVuICdfbG9hZGluZycgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGxvYWRpbmcpPT5cblx0XHRcdGlmIGxvYWRpbmdcblx0XHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9IGZhbHNlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhQHZpc2libGVSb3dzLmxlbmd0aFxuXG5cdFNpbXBseUJpbmQoJ2Vycm9yJykub2YoQHN0YXRlKVxuXHRcdC50bygndGV4dENvbnRlbnQuZXJyb3JNZXNzYWdlJykub2YoQGVscy5lcnJvck1lc3NhZ2UpXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMuZXJyb3JNZXNzYWdlKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaGFzRXJyb3InKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ19lcnJvcicgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGVyciktPiBjb25zb2xlLmVycm9yKGVycikgaWYgZXJyXG5cdFxuXG5cdGlmIEBvcHRpb25zLmhhc01vYmlsZVxuXHRcdEB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XG5cdFx0U2ltcGx5QmluZCgnZXZlbnQ6cmVzaXplJykub2Yod2luZG93KVxuXHRcdFx0LnRvICgpPT4gQHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdFNpbXBseUJpbmQoJ3dpbmRvd1dpZHRoJykub2YoQClcblx0XHRcdC50bygnY2xhc3NOYW1lLm1vYmlsZVZlcnNpb24nKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdFx0XHQudHJhbnNmb3JtICh3aW5kb3dXaWR0aCk9PiBpZiB3aW5kb3dXaWR0aCA8PSBAb3B0aW9ucy5tb2JpbGVXaWR0aCB0aGVuICdfbW9iaWxlVmVyc2lvbicgZWxzZSAnJ1xuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgQ29sdW1uIHZpc2liaWxpdHlcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGZvciBsLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHRoZW4gZG8gKGNvbHVtbik9PlxuXHRcdFNpbXBseUJpbmQoJ2hpZGRlbicpLm9mKGNvbHVtbilcblx0XHRcdC50byhcImlubmVySFRNTC4je2NvbHVtbi5zbHVnfVwiKS5vZihAZWxzLmdsb2JhbFN0eWxlcylcblx0XHRcdFx0LnRyYW5zZm9ybSAoaXNIaWRkZW4pPT4gaWYgaXNIaWRkZW4gdGhlbiBcIiN7QHRhYmxlSUR9IC5fXyN7Y29sdW1uLnNsdWd9IHtkaXNwbGF5Om5vbmV9XCIgZWxzZSAnJ1xuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFJvd3MgYXJyYXkgcmVuZGVyaW5nL3Byb2Nlc3Npbmdcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ2FycmF5OnZpc2libGVSb3dzJykub2YoQClcblx0XHQudG8gKHJvd3MsIHByZXZSb3dzKT0+XG5cdFx0XHRpZiBwcmV2Um93cz8ubGVuZ3RoXG5cdFx0XHRcdGZvciByb3cgaW4gcHJldlJvd3Ncblx0XHRcdFx0XHRyb3cudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcblx0XHRcdHRyeVxuXHRcdFx0XHRmb3Igcm93IGluIHJvd3Ncblx0XHRcdFx0XHRAcHJvY2Vzc1Jvdyhyb3cpXG5cdFx0XHRcdFx0cm93LnZpc2libGUgPSB0cnVlXG5cdFx0XHRjYXRjaCBlcnJcblx0XHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cdFx0XHRcblx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhcm93cy5sZW5ndGhcblx0XHRcblx0XHQuYW5kLnRvIChyb3dzKT0+XG5cdFx0XHRyZXR1cm4gaWYgbm90IEBoYXNCcmVha2Rvd25CYXJcblx0XHRcdGZvciByb3cgaW4gcm93c1xuXHRcdFx0XHRpZiByb3cuYnJlYWtkb3duQmFyVG90YWwgPiBsYXJnZXN0QnJlYWtkb3duVG90YWwgb3Igbm90IGxhcmdlc3RCcmVha2Rvd25Ub3RhbD9cblx0XHRcdFx0XHRsYXJnZXN0QnJlYWtkb3duVG90YWwgPSByb3cuYnJlYWtkb3duQmFyVG90YWxcblxuXHRcdFx0QGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IGxhcmdlc3RCcmVha2Rvd25Ub3RhbCBvciAwXG5cblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC5yb3dSYW5nZScpLm9mKEBlbHMucGFnZVN0YXR1cylcblx0XHRcdC50cmFuc2Zvcm0gKHJvd3MpPT4gXCIje0BhdmFpbGFibGVSb3dzLmluZGV4T2Yocm93c1swXSkrMX0tI3tAYXZhaWxhYmxlUm93cy5pbmRleE9mKHJvd3Muc2xpY2UoLTEpWzBdKSsxfVwiXG5cblxuXHRTaW1wbHlCaW5kKCdhcnJheTphbGxSb3dzJykub2YoQCkudG8gKHJvd3MpPT5cblx0XHRAc2VhcmNoQ3JpdGVyaWEgPSAnJ1xuXHRcdEBjdXJyZW50UGFnZSA9IDFcblx0XHRAc3RhdGUubm9SZXN1bHRzID0gIXJvd3MubGVuZ3RoXG5cdFx0aWYgQHNvcnRCeSBpcyBAb3B0aW9ucy5zb3J0Qnlcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXHRcdFx0QHNvcnRCeSA9IEBvcHRpb25zLnNvcnRCeVxuXHRcdGVsc2Vcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXG5cblxuXHRTaW1wbHlCaW5kKCdhdmFpbGFibGVSb3dzJywge3VwZGF0ZU9uQmluZDpmYWxzZSwgdXBkYXRlRXZlbklmU2FtZTp0cnVlfSkub2YoQClcblx0XHQudG8gKHJvd3MpPT4gQGNhbGNQYWdlQ291bnQocm93cylcblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC50b3RhbFJvd3MnKS5vZihAZWxzLnBhZ2VTdGF0dXMpLnRyYW5zZm9ybSAocm93cyktPiByb3dzLmxlbmd0aFxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBQYWdpbmF0aW9uXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdwYWdlQ291bnQnKS5vZihAKVxuXHRcdC50bygnaW5uZXJIVE1MJykub2YoQGVscy5wYWdpbmF0aW9uSXRlbXMpICMgUmVuZGVyIHBhZ2luYXRpb25cblx0XHRcdC50cmFuc2Zvcm0gKGNvdW50KT0+XG5cdFx0XHRcdHBhZ2luYXRpb25JdGVtcyA9ICcnXG5cdFx0XHRcdGZvciB2YWx1ZSBpbiBbMS4uY291bnRdXG5cdFx0XHRcdFx0cGFnaW5hdGlvbkl0ZW1zICs9IG1hcmt1cC5wYWdpbmF0aW9uSXRlbShAbWFya3VwQXJncyB7dmFsdWV9KSB1bmxlc3MgdmFsdWUgaXMgMFxuXG5cdFx0XHRcdHJldHVybiBwYWdpbmF0aW9uSXRlbXNcblxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLnBhZ2luYXRpb24pLnRyYW5zZm9ybSAoY291bnQpLT4gaWYgY291bnQgPiAxIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XG5cblx0U2ltcGx5QmluZCgncGFnZUNvdW50UmVhbCcpLm9mKEApXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHRcdC50cmFuc2Zvcm0gKHJlYWxDb3VudCk9PlxuXHRcdFx0XHRpZiByZWFsQ291bnQgPD0gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJydcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG9wdGlvbnMgPSAnPG9wdGlvbj4uLi48L29wdGlvbj4nXG5cdFx0XHRcdFx0b3B0aW9ucyArPSBcIjxvcHRpb24+I3tpbmRleH08L29wdGlvbj5cIiBmb3IgaW5kZXggaW4gWyhAb3B0aW9ucy5wYWdlQ291bnRNYXgrMSkuLnJlYWxDb3VudF1cblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1xuXHRcdFxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5oYXNFeHRyYScpLm9mKEBlbHMucGFnaW5hdGlvbikudHJhbnNmb3JtIChyZWFsQ291bnQpPT4gaWYgcmVhbENvdW50ID4gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJ2hhc19leHRyYScgZWxzZSAnJ1xuXG5cblxuXHQjID09PT0gRXh0cmEgSW5kaWNhdG9yL1BhZ2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScsIHVwZGF0ZU9uQmluZDpmYWxzZSkub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQpXG5cdFx0LmFuZC50bygnY3VycmVudFBhZ2UnKS5vZihAKVxuXG5cblxuXG5cdCMgPT09PSBDdXJyZW50IFBhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ2N1cnJlbnRQYWdlJywgdXBkYXRlRXZlbklmU2FtZTp0cnVlKS5vZihAKVxuXHRcdC50cmFuc2Zvcm1TZWxmIChjdXJyZW50UGFnZSk9PlxuXHRcdFx0Y3VycmVudFBhZ2UgPSBpZiBjdXJyZW50UGFnZSBpcyAnLi4uJyB0aGVuIDEgZWxzZSBwYXJzZUZsb2F0KGN1cnJlbnRQYWdlKVxuXHRcdFx0cmV0dXJuIGlmIGN1cnJlbnRQYWdlID4gQHBhZ2VDb3VudFJlYWwgdGhlbiBAcGFnZUNvdW50UmVhbCBlbHNlIGN1cnJlbnRQYWdlXG5cdFx0XG5cdFx0LnRvKCd2YWx1ZScpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdFx0LnRyYW5zZm9ybSAoY3VycmVudFBhZ2UpPT4gaWYgY3VycmVudFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBjdXJyZW50UGFnZSBlbHNlICcuLi4nXG5cdFx0XG5cdFx0LmFuZC50byAoY3VycmVudFBhZ2UpPT5cblx0XHRcdEBzZXRWaXNpYmxlUGFnZShjdXJyZW50UGFnZSlcblx0XHRcdEBzZXRQYWdlSW5kaWNhdG9yKGN1cnJlbnRQYWdlKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU2VhcmNoIEZpZWxkXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRcblx0IyA9PT09IFNlYXJjaCBGaWVsZCB2YWx1ZS9tYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGlmIEBvcHRpb25zLnNlYXJjaC5sZW5ndGhcblx0XHRAc2VhcmNoUGFyYW0gPSBAb3B0aW9ucy5zZWFyY2hbMF1cblxuXHRcdFNpbXBseUJpbmQoJ3NlYXJjaCcpLm9mKEBvcHRpb25zKVxuXHRcdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnNlYXJjaFBhcmFtKVxuXHRcdFx0XHQudHJhbnNmb3JtIChvcHRpb25zKS0+IG9wdGlvbnMubWFwKChvcHRpb24pLT5cIjxvcHRpb24+I3tvcHRpb259PC9vcHRpb24+XCIpLmpvaW4oJycpXG5cblx0XHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoUGFyYW0pXG5cdFx0XHQudG8oJ3NlYXJjaFBhcmFtJykub2YoQClcblx0XHRcdFx0LnBpcGUoJ2F0dHI6cGxhY2Vob2xkZXInKS5vZihAZWxzLnNlYXJjaENyaXRlcmlhKVxuXHRcdFx0XHRcdC50cmFuc2Zvcm0gKG9wdGlvbiktPiBcIkZpbHRlciBieSAje29wdGlvbn1cIlxuXG5cblxuXHQjID09PT0gVGFibGUgcmVzdWx0cyBmaWx0ZXIgJiBhdmFpYWJsZSByb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoQ3JpdGVyaWEpICMgU2VhcmNoL0ZpbHRlclxuXHRcdC50bygnc2VhcmNoQ3JpdGVyaWEnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKEApLmJvdGhXYXlzKClcblx0XHRcdC5jaGFpblRvIChzZWFyY2hDcml0ZXJpYSk9PlxuXHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gQGFsbFJvd3Ncblx0XHRcdFx0dGFyZ2V0Q29sdW1uID0gQG9wdGlvbnMuY29sdW1uc1tAc2VhcmNoUGFyYW1dXG5cblx0XHRcdFx0aWYgc2VhcmNoQ3JpdGVyaWEgYW5kICh0YXJnZXRDb2x1bW4gb3IgQGFsbFJvd3NbMF0/W0BzZWFyY2hQYXJhbV0/KVxuXHRcdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSByb3dzVG9NYWtlQXZhaWxhYmxlLmZpbHRlciAocm93KT0+XG5cdFx0XHRcdFx0XHRyb3dWYWx1ZSA9IGlmIHRhcmdldENvbHVtbj8ucmF3VmFsdWVGb3JtYXR0ZXIgdGhlbiB0YXJnZXRDb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93W0BzZWFyY2hQYXJhbV0pIGVsc2Ugcm93W0BzZWFyY2hQYXJhbV1cblx0XHRcdFx0XHRcdHJldHVybiByb3dWYWx1ZT8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzIHNlYXJjaENyaXRlcmlhLnRvTG93ZXJDYXNlKClcblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5yb3dGaWx0ZXJcblx0XHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gcm93c1RvTWFrZUF2YWlsYWJsZS5maWx0ZXIgKHJvdyk9PlxuXHRcdFx0XHRcdFx0cm93Q2xvbmUgPSBleHRlbmQuY2xvbmUocm93KVxuXHRcdFx0XHRcdFx0cm93Q2xvbmVbbmFtZV0gPSBjb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93Q2xvbmVbbmFtZV0pIGZvciBuYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHdoZW4gY29sdW1uLnJhd1ZhbHVlRm9ybWF0dGVyXG5cdFx0XHRcdFx0XHRyZXR1cm4gQG9wdGlvbnMucm93RmlsdGVyKHJvd0Nsb25lKVxuXHRcdFx0XHRcblx0XHRcdFx0QGF2YWlsYWJsZVJvd3MgPSByb3dzVG9NYWtlQXZhaWxhYmxlXG5cdFx0XHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU29ydGluZ1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnc29ydEJ5Jywge3VwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSwgdXBkYXRlT25CaW5kOmZhbHNlfSwgdHJ1ZSkub2YoQClcblx0XHQudG8gKGN1cnJlbnRTb3J0LCBwcmV2U29ydCk9PiBpZiBjdXJyZW50U29ydCBvciBwcmV2U29ydFxuXHRcdFx0aWYgY3VycmVudFNvcnQgaXMgcHJldlNvcnQgYW5kIHByZXZTb3J0XG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uICo9IC0xXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblxuXHRcdFx0dGFyZ2V0Q29sdW1uID0gaWYgY3VycmVudFNvcnQgdGhlbiBjdXJyZW50U29ydCBlbHNlIG51bGxcblx0XHRcdEBhdmFpbGFibGVSb3dzID0gQHNvcnRSb3dzKEBhdmFpbGFibGVSb3dzLCB0YXJnZXRDb2x1bW4pXG5cdFx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblx0XG5cdGlmIEBlbHMudGFibGVIZWFkaW5nLmNoaWxkcmVuKCcuX2lzU29ydGFibGUnKS5sZW5ndGhcblx0XHRTaW1wbHlCaW5kKCdzb3J0QnknLCB1cGRhdGVPbkJpbmQ6dHJ1ZSkub2YoQClcblx0XHRcdC50bygnbXVsdGk6Y2xhc3NOYW1lLmN1cnJlbnRTb3J0Jykub2YoQGVscy50YWJsZUhlYWRpbmcuY2hpbGRyZW4oJy5faXNTb3J0YWJsZScpKVxuXHRcdFx0XHQudHJhbnNmb3JtIChjdXJyZW50LCBwcmV2LCBlbCktPiBpZiBjdXJyZW50IGlzIGVsLmNoaWxkcmVuWzBdLnRleHRDb250ZW50IHRoZW4gJ19jdXJyZW50U29ydCcgZWxzZSAnJ1xuXG5cblxuXG5cdFNpbXBseUJpbmQoJ3NvcnREaXJlY3Rpb24nKS5vZihAKVxuXHRcdC50bygnY2xhc3NOYW1lLnNvcnREaXJlY3Rpb24nKS5vZihAZWxzLnRhYmxlKVxuXHRcdFx0LnRyYW5zZm9ybSAoc29ydERpcmVjdGlvbiktPiBpZiBzb3J0RGlyZWN0aW9uIGlzIC0xIHRoZW4gJ2Rlc2MnIGVsc2UgJ2FzYydcblxuXG5cblxuXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cbiIsIkRhdGFUYWJsZTo6c29ydEJ5ID0gKGNvbHVtbiktPiIsIntcbiAgXCJuYW1lXCI6IFwiQGRhbmllbGthbGVuL2RhdGFfdGFibGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi45LjZcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRpbnkgbGlicmFyeSBmb3IgZGlzcGxheWluZyBkYXRhYmFzZS1mZXRjaGVkIGRhdGEgaW4gYW4gSFRNTCB0YWJsZSB3aXRoIGZyb250LWVuZCBwYWdpbmF0aW9uXCIsXG4gIFwibWFpblwiOiBcImRpc3QvanMvZGF0YV90YWJsZS5qc1wiLFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3QvanMvZGF0YV90YWJsZS5kZWJ1Zy5qc1wiLFxuICAgIFwiLi9kaXN0L2pzL2RhdGFfdGFibGUuanNcIjogXCJzcmMvY29mZmVlL2luZGV4LmNvZmZlZVwiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBkYW5pZWxrYWxlbi9zYXNzLWJhc2VcIjogXCJeMS41LjJcIixcbiAgICBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCI6IFwiXjEuMTUuOFwiLFxuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy41LjBcIixcbiAgICBcImVzY2FwZS1odG1sXCI6IFwiXjEuMC4zXCIsXG4gICAgXCJldmVudC1saXRlXCI6IFwiXjAuMS4xXCIsXG4gICAgXCJzbWFydC1leHRlbmRcIjogXCJeMS43LjNcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJjaGFsa1wiOiBcIl4yLjAuMVwiLFxuICAgIFwiY29mZmVlLXNjcmlwdFwiOiBcIl4xLjEyLjZcIixcbiAgICBcImZzLWpldHBhY2tcIjogXCJeMS4xLjBcIixcbiAgICBcIm5vZGUtc2Fzc1wiOiBcIl40LjUuM1wiLFxuICAgIFwicHJvbWlzZS1icmVha1wiOiBcIl4wLjEuMVwiLFxuICAgIFwic2Fzcy1tb2R1bGUtaW1wb3J0ZXJcIjogXCJnaXRodWI6ZGFuaWVsa2FsZW4vc2Fzcy1tb2R1bGUtaW1wb3J0ZXJcIixcbiAgICBcInNpbXBseWltcG9ydFwiOiBcIl40LjAuMC10N1wiLFxuICAgIFwic2ltcGx5d2F0Y2hcIjogXCJeMy4wLjAtbDVcIlxuICB9LFxuICBcInNhc3NGbnNcIjogXCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3Nhc3MtYmFzZS9jb21waWxlci1mbnMuanNcIixcbiAgXCJzYXNzSW1wb3J0ZXJcIjogXCJub2RlX21vZHVsZXMvc2Fzcy1tb2R1bGUtaW1wb3J0ZXIvbGliL2luZGV4LmpzXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJwb3N0dmVyc2lvblwiOiBcIm5wbSBydW4gYnVpbGQgJiYgZ2l0IGFkZCAuICYmIGdpdCBjb21taXQgLWEgLW0gJ1tCdWlsZF0nXCIsXG4gICAgXCJwb3N0cHVibGlzaFwiOiBcImdpdCBwdXNoXCIsXG4gICAgXCJidWlsZFwiOiBcImNha2UgaW5zdGFsbDpidWlsZDsgY2FrZSAtZCBidWlsZCAmJiBjYWtlIGJ1aWxkICYmIGNwIC1yIGJ1aWxkLyogZGlzdC9cIixcbiAgICBcImNvbXBpbGVcIjogXCJjYWtlIC1kIGJ1aWxkXCIsXG4gICAgXCJ3YXRjaFwiOiBcImNha2UgaW5zdGFsbDsgY2FrZSAtZCB3YXRjaFwiLFxuICAgIFwid2F0Y2g6anNcIjogXCJzaW1wbHl3YXRjaCAnc3JjL2NvZmZlZS8qLmNvZmZlZScgLWUgJ2NvZmZlZScgLXggJ25wbSBydW4gY29tcGlsZTpqczpkZWJ1ZyAtcydcIixcbiAgICBcIndhdGNoOnNhc3NcIjogXCJmb250c0Rpcj1kaXN0L2ZvbnRzIHNpbXBseXdhdGNoICdzcmMvc2Fzcy8qLnNhc3MnIC1lICdzYXNzJyAteCAnbnBtIHJ1biBjb21waWxlOnNhc3M6ZGVidWcgLXMnXCIsXG4gICAgXCJ0YWthbmFcIjogXCJmb250c0Rpcj1kaXN0L2ZvbnRzIHRha2FuYSAtZiAkKHB3ZCkvJG5wbV9wYWNrYWdlX3Nhc3NGbnMgJChwd2QpL3NyYy9zYXNzXCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vZGF0YV90YWJsZS5naXRcIlxuICB9LFxuICBcImF1dGhvclwiOiBcIkRhbmllbCBLYWxlblwiLFxuICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9kYXRhX3RhYmxlL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vZGF0YV90YWJsZSNyZWFkbWVcIlxufVxuIiwiY3VycmVudElEID0gMFxuYXJyYXlNdXRhdG9yTWV0aG9kcyA9IFsncHVzaCcsJ3BvcCcsJ3NoaWZ0JywndW5zaGlmdCcsJ3NwbGljZScsJ3JldmVyc2UnLCdzb3J0J11cbmR1bW15UHJvcGVydHlEZXNjcmlwdG9yID0ge31cbmJvdW5kSW5zdGFuY2VzID0ge31cbnBsYWNlaG9sZGVyID0gWyd7eycsICd9fSddXG5zZXR0aW5ncyA9IE9iamVjdC5jcmVhdGVcblx0c2lsZW50Olx0XHRcdFx0XHRmYWxzZVxuLFxuXHRwbGFjZWhvbGRlcjpcblx0XHRnZXQ6ICgpLT4gcGxhY2Vob2xkZXJcblx0XHRzZXQ6IChuZXdQbGFjZWhvbGRlciktPiBpZiBjaGVja0lmLmlzQXJyYXkobmV3UGxhY2Vob2xkZXIpIGFuZCBuZXdQbGFjZWhvbGRlci5sZW5ndGggaXMgMlxuXHRcdFx0cGxhY2Vob2xkZXIgPSBuZXdQbGFjZWhvbGRlclxuXHRcdFx0c2V0UGhvbGRlclJlZ0V4KClcblx0XHRcdHJldHVyblxuXG5cbmRlZmF1bHRPcHRpb25zID0gXG5cdGRlbGF5Olx0XHRcdFx0XHRmYWxzZVxuXHR0aHJvdHRsZTpcdFx0XHRcdGZhbHNlXG5cdHNpbXBsZVNlbGVjdG9yOlx0XHRcdGZhbHNlXG5cdHByb21pc2VUcmFuc2Zvcm1zOlx0XHRmYWxzZVxuXHRkaXNwYXRjaEV2ZW50czpcdFx0XHRmYWxzZVxuXHRzZW5kQXJyYXlDb3BpZXM6XHRcdGZhbHNlXG5cdHVwZGF0ZUV2ZW5JZlNhbWU6XHRcdGZhbHNlXG5cdHVwZGF0ZU9uQmluZDpcdFx0XHR0cnVlXG5cblxuaW1wb3J0ICcuL21pc2MnXG5pbXBvcnQgJy4vU2ltcGx5QmluZCdcbmltcG9ydCAnLi9CaW5kaW5nJ1xuaW1wb3J0ICcuL0JpbmRpbmdJbnRlcmZhY2UnXG5pbXBvcnQgJy4vR3JvdXBCaW5kaW5nJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXBseUJpbmQiLCJpbXBvcnQgJy4vaGVscGVycydcbmltcG9ydCAnLi9lcnJvcnNBbmRXYXJuaW5ncydcbiIsImRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG5nZXREZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvclxuXG5pbXBvcnQgJy4vY2hhbmdlRXZlbnQnXG5pbXBvcnQgJy4vcmVxdWlyZXNEb21EZXNjcmlwdG9yRml4J1xuaW1wb3J0ICcuL3dpbmRvd1Byb3BzVG9JZ25vcmUnXG5cblxuc2V0VmFsdWVOb29wID0gKHYsIHB1Ymxpc2hlciktPiBAdXBkYXRlQWxsU3VicyhwdWJsaXNoZXIgb3IgQClcblxuZ2VuSUQgPSAoKS0+ICcnKygrK2N1cnJlbnRJRClcblxuZ2VuT2JqID0gKCktPiBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmdlblByb3hpZWRJbnRlcmZhY2UgPSAoaXNTdWIsIGNvbXBsZXRlQ2FsbGJhY2spLT4gKHN1YmplY3QsIGN1c3RvbU9wdGlvbnMsIHNhdmVPcHRpb25zKS0+XG5cdFNpbXBseUJpbmQoc3ViamVjdCwgY3VzdG9tT3B0aW9ucywgc2F2ZU9wdGlvbnMsIGlzU3ViLCBjb21wbGV0ZUNhbGxiYWNrKVxuXG5nZW5TZWxmVXBkYXRlciA9IChiaW5kaW5nLCBmZXRjaFZhbHVlKS0+XG5cdGJpbmRpbmcuc2VsZlVwZGF0ZXIgb3Jcblx0YmluZGluZy5zZWxmVXBkYXRlciA9IG5ldyBCaW5kaW5nICgpLT5cblx0XHRpZiBmZXRjaFZhbHVlIHRoZW4gYmluZGluZy5zZXRWYWx1ZShiaW5kaW5nLmZldGNoRGlyZWN0VmFsdWUoKSwgYmluZGluZywgdHJ1ZSkgZWxzZSBiaW5kaW5nLnVwZGF0ZUFsbFN1YnMoYmluZGluZylcblx0LCAnRnVuYycsIHt9XG5cblxuIyA9PT09IENoZWNrcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi9jaGVja3MnXG5cblxuIyA9PT09IERlc2NyaXB0b3IgTW9kaWZpY2F0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2Rlc2NyaXB0b3ItbW9kJ1xuXG5cbiMgPT09PSBPYmplY3QgY2xvbmluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi9jbG9uaW5nJ1xuXG5cbiMgPT09PSBCaW5kaW5nIENhY2hlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2NhY2hlJ1xuXG5cbiMgPT09PSBQbGFjZWhvbGRlcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgJy4vcGxhY2Vob2xkZXJzJ1xuXG5cbiMgPT09PSBFcnJvcnMgKyBXYXJuaW5ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi9lcnJvcnMnXG5cblxuXG5cblxuXG5cbiIsImNhY2hlZEV2ZW50ID0gbnVsbFxuXG5jaGFuZ2VFdmVudCA9ICgpLT5cblx0aWYgbm90IGNhY2hlZEV2ZW50XG5cdFx0ZXZlbnQgPSBjYWNoZWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG5cdFx0ZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCBmYWxzZSlcblx0XHRldmVudC5fc2IgPSB0cnVlXG5cblx0cmV0dXJuIGNhY2hlZEV2ZW50IiwicmVxdWlyZXNEb21EZXNjcmlwdG9yRml4ID0gKCdjbGFzc05hbWUnIG5vdCBvZiBFbGVtZW50OjopIG9yIG5vdCBnZXREZXNjcmlwdG9yKEVsZW1lbnQ6OiwgJ2NsYXNzTmFtZScpLmdldCIsIndpbmRvd1Byb3BzVG9JZ25vcmUgPSBbXG5cdCdpbm5lcldpZHRoJ1xuXHQnaW5uZXJIZWlnaHQnXG5cdCdvdXRlcldpZHRoJ1xuXHQnb3V0ZXJIZWlnaHQnXG5cdCdzY3JvbGxYJ1xuXHQnc2Nyb2xsWSdcblx0J3BhZ2VYT2Zmc2V0J1xuXHQncGFnZVlPZmZzZXQnXG5cdCdzY3JlZW5YJ1xuXHQnc2NyZWVuWSdcblx0J3NjcmVlbkxlZnQnXG5cdCdzY3JlZW5Ub3AnXG5dIiwidGFyZ2V0SW5jbHVkZXMgPSAodGFyZ2V0LCBpdGVtKS0+IHRhcmdldCBhbmQgdGFyZ2V0LmluZGV4T2YoaXRlbSkgaXNudCAtMVxuXG5jaGVja0lmID1cblx0aXNEZWZpbmVkOiAoc3ViamVjdCktPiBzdWJqZWN0IGlzbnQgdW5kZWZpbmVkXG5cdFxuXHRpc0FycmF5OiAoc3ViamVjdCktPiBzdWJqZWN0IGluc3RhbmNlb2YgQXJyYXlcblx0XG5cdGlzT2JqZWN0OiAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnb2JqZWN0JyBhbmQgc3ViamVjdCAjIDJuZCBjaGVjayBpcyB0byB0ZXN0IGFnYWluc3QgJ251bGwnIHZhbHVlc1xuXG5cdGlzU3RyaW5nOiAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnc3RyaW5nJ1xuXHRcblx0aXNOdW1iZXI6IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdudW1iZXInXG5cdFxuXHRpc0Z1bmN0aW9uOiAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnZnVuY3Rpb24nXG5cblx0aXNCaW5kaW5nSW50ZXJmYWNlOiAoc3ViamVjdCktPiBzdWJqZWN0IGluc3RhbmNlb2YgQmluZGluZ0ludGVyZmFjZVxuXHRcblx0aXNCaW5kaW5nOiAoc3ViamVjdCktPiBzdWJqZWN0IGluc3RhbmNlb2YgQmluZGluZ1xuXG5cdGlzSXRlcmFibGU6IChzdWJqZWN0KS0+IGNoZWNrSWYuaXNPYmplY3Qoc3ViamVjdCkgYW5kIGNoZWNrSWYuaXNOdW1iZXIoc3ViamVjdC5sZW5ndGgpXG5cblx0aXNEb206IChzdWJqZWN0KS0+IHN1YmplY3Qubm9kZU5hbWUgYW5kIHN1YmplY3Qubm9kZVR5cGUgaXMgMVxuXG5cdGlzRG9tSW5wdXQ6IChzdWJqZWN0KS0+XG5cdFx0bm9kZU5hbWUgPSBzdWJqZWN0Lm5vZGVOYW1lXG5cdFx0cmV0dXJuIG5vZGVOYW1lIGlzICdJTlBVVCcgb3Igbm9kZU5hbWUgaXMgJ1RFWFRBUkVBJyBvciBub2RlTmFtZSBpcyAnU0VMRUNUJ1xuXG5cdGlzRG9tUmFkaW86IChzdWJqZWN0KS0+IHN1YmplY3QudHlwZSBpcyAncmFkaW8nXG5cblx0aXNEb21DaGVja2JveDogKHN1YmplY3QpLT4gc3ViamVjdC50eXBlIGlzICdjaGVja2JveCdcblxuXHRpc0VsQ29sbGVjdGlvbjogKHN1YmplY3QpLT4gKHN1YmplY3QgaW5zdGFuY2VvZiBOb2RlTGlzdCkgb3IgKHN1YmplY3QgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgb3IgKHdpbmRvdy5qUXVlcnkgYW5kIHN1YmplY3QgaW5zdGFuY2VvZiBqUXVlcnkpXG5cblx0ZG9tRWxzQXJlU2FtZTogKGl0ZXJhYmxlKS0+XG5cdFx0dHlwZSA9IGl0ZXJhYmxlWzBdLnR5cGVcblx0XHRpdGVtc1dpdGhTYW1lVHlwZSA9IFtdLmZpbHRlci5jYWxsIGl0ZXJhYmxlLCAoaXRlbSktPiBpdGVtLnR5cGUgaXMgdHlwZVxuXG5cdFx0cmV0dXJuIGl0ZW1zV2l0aFNhbWVUeXBlLmxlbmd0aCBpcyBpdGVyYWJsZS5sZW5ndGhcblxuXHRpc0RvbU5vZGU6IChzdWJqZWN0KS0+IGNoZWNrSWYuaXNEb20oc3ViamVjdCkgb3Igc3ViamVjdCBpcyB3aW5kb3cgb3Igc3ViamVjdCBpcyBkb2N1bWVudCIsImZldGNoRGVzY3JpcHRvciA9IChvYmplY3QsIHByb3BlcnR5LCBpc1Byb3RvKS0+XG5cdGRlc2NyaXB0b3IgPSBnZXREZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpXG5cdGlmIGRlc2NyaXB0b3Jcblx0XHRkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWUgaWYgaXNQcm90b1xuXHRcdHJldHVybiBkZXNjcmlwdG9yXG5cdFxuXHRlbHNlIGlmIG9iamVjdFByb3RvPU9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpXG5cdFx0cmV0dXJuIGZldGNoRGVzY3JpcHRvcihvYmplY3RQcm90bywgcHJvcGVydHksIHRydWUpXG5cblxuY29udmVydFRvTGl2ZSA9IChiaW5kaW5nSW5zdGFuY2UsIG9iamVjdCwgb25seUFycmF5TWV0aG9kcyktPlxuXHRfID0gYmluZGluZ0luc3RhbmNlXG5cdF8ub3JpZ0Rlc2NyaXB0b3IgPSBmZXRjaERlc2NyaXB0b3Iob2JqZWN0LCBfLnByb3BlcnR5KSBpZiBub3QgXy5vcmlnRGVzY3JpcHRvclxuXG5cdGlmIG9ubHlBcnJheU1ldGhvZHNcblx0XHRhcnJheU11dGF0b3JNZXRob2RzLmZvckVhY2ggKG1ldGhvZCktPiAjIFVzaW5nIGZvckVhY2ggYmVjYXVzZSB3ZSBuZWVkIGEgY2xvc3VyZSBoZXJlXG5cdFx0XHRkZWZpbmVQcm9wZXJ0eSBvYmplY3QsIG1ldGhvZCwgXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHR2YWx1ZTogKCktPlxuXHRcdFx0XHRcdHJlc3VsdCA9IEFycmF5OjpbbWV0aG9kXS5hcHBseSBvYmplY3QsIGFyZ3VtZW50c1xuXHRcdFx0XHRcdF8udXBkYXRlQWxsU3VicyhfKVxuXHRcdFx0XHRcdHJldHVybiByZXN1bHRcblxuXHRlbHNlXG5cdFx0aWYgXy50eXBlIGlzICdQcm94eSdcblx0XHRcdG9yaWdGbiA9IF8ub3JpZ0ZuID0gXy52YWx1ZVxuXHRcdFx0Y29udGV4dCA9IG9iamVjdFxuXHRcdFx0Xy52YWx1ZSA9IHJlc3VsdDpudWxsLCBhcmdzOm51bGxcblxuXHRcdFx0aWYgY2hlY2tJZi5pc0Z1bmN0aW9uKG9yaWdGbilcblx0XHRcdFx0c2xpY2UgPSBbXS5zbGljZVxuXHRcdFx0XHRnZXR0ZXJWYWx1ZSA9IHByb3h5Rm4gPSAoKS0+IFxuXHRcdFx0XHRcdGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cylcblx0XHRcdFx0XHRfLnZhbHVlLmFyZ3MgPSBhcmdzID0gaWYgXy5zZWxmVHJhbnNmb3JtIHRoZW4gXy5zZWxmVHJhbnNmb3JtKGFyZ3MpIGVsc2UgYXJnc1xuXHRcdFx0XHRcdF8udmFsdWUucmVzdWx0ID0gcmVzdWx0ID0gb3JpZ0ZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG5cdFx0XHRcdFx0Xy51cGRhdGVBbGxTdWJzKF8pXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdFxuXHRcdFx0XHRcblx0XHRcdFx0ZGVmaW5lUHJvcGVydHkgb2JqZWN0LCBfLnByb3BlcnR5LCBcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IF8uaXNMaXZlUHJvcCA9IHRydWVcblx0XHRcdFx0XHRnZXQ6ICgpLT4gZ2V0dGVyVmFsdWVcblx0XHRcdFx0XHRzZXQ6IChuZXdWYWx1ZSktPlxuXHRcdFx0XHRcdFx0aWYgbm90IGNoZWNrSWYuaXNGdW5jdGlvbihuZXdWYWx1ZSlcblx0XHRcdFx0XHRcdFx0Z2V0dGVyVmFsdWUgPSBuZXdWYWx1ZVxuXG5cdFx0XHRcdFx0XHRlbHNlIGlmIG5ld1ZhbHVlIGlzbnQgb3JpZ0ZuXG5cdFx0XHRcdFx0XHRcdG9yaWdGbiA9IF8ub3JpZ0ZuID0gbmV3VmFsdWVcdGlmIG5ld1ZhbHVlIGlzbnQgcHJveHlGblxuXHRcdFx0XHRcdFx0XHRnZXR0ZXJWYWx1ZSA9IHByb3h5Rm5cdFx0XHRpZiBnZXR0ZXJWYWx1ZSBpc250IHByb3h5Rm5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cblx0XHRcdFxuXG5cdFx0ZWxzZSBpZiBub3QgdGFyZ2V0SW5jbHVkZXMoXy50eXBlLCAnRE9NJykgYW5kIG5vdCAoXy5vYmplY3QgaXMgd2luZG93IGFuZCB0YXJnZXRJbmNsdWRlcyh3aW5kb3dQcm9wc1RvSWdub3JlLCBfLnByb3BlcnR5KSlcblx0XHRcblx0XHRcdCMgJ09iamVjdFByb3AnIG9yICdBcnJheScgdHlwZSBiaW5kaW5nc1xuXHRcdFx0cHJvcGVydHlEZXNjcmlwdG9yID0gXy5vcmlnRGVzY3JpcHRvciBvciBkdW1teVByb3BlcnR5RGVzY3JpcHRvclxuXHRcdFx0Xy5vcmlnR2V0dGVyID0gcHJvcGVydHlEZXNjcmlwdG9yLmdldC5iaW5kKG9iamVjdCkgaWYgcHJvcGVydHlEZXNjcmlwdG9yLmdldFxuXHRcdFx0Xy5vcmlnU2V0dGVyID0gcHJvcGVydHlEZXNjcmlwdG9yLnNldC5iaW5kKG9iamVjdCkgaWYgcHJvcGVydHlEZXNjcmlwdG9yLnNldFxuXHRcdFx0c2hvdWxkV3JpdGVMaXZlUHJvcCA9IHByb3BlcnR5RGVzY3JpcHRvci5jb25maWd1cmFibGVcblxuXHRcdFx0c2hvdWxkV3JpdGVMaXZlUHJvcCA9IHNob3VsZFdyaXRlTGl2ZVByb3AgYW5kIG9iamVjdC5jb25zdHJ1Y3RvciBpc250IENTU1N0eWxlRGVjbGFyYXRpb25cblx0XHRcdGltcG9ydCAnLi93ZWJraXREb21EZXNjcmlwdG9yRml4J1xuXHRcdFx0XG5cdFx0XHRpZiBzaG91bGRXcml0ZUxpdmVQcm9wXG5cdFx0XHRcdHR5cGVJc0FycmF5ID0gXy50eXBlIGlzICdBcnJheSdcblx0XHRcdFx0c2hvdWxkSW5kaWNhdGVVcGRhdGVJc0Zyb21TZWxmID0gbm90IF8ub3JpZ1NldHRlciBhbmQgbm90IHR5cGVJc0FycmF5XG5cdFx0XHRcdFxuXHRcdFx0XHRkZWZpbmVQcm9wZXJ0eSBvYmplY3QsIF8ucHJvcGVydHksXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiBfLmlzTGl2ZVByb3AgPSB0cnVlXG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogcHJvcGVydHlEZXNjcmlwdG9yLmVudW1lcmFibGVcblx0XHRcdFx0XHRnZXQ6IF8ub3JpZ0dldHRlciBvciAoKS0+IF8udmFsdWVcblx0XHRcdFx0XHRzZXQ6IChuZXdWYWx1ZSktPiBfLnNldFZhbHVlKG5ld1ZhbHVlLCBfLCBzaG91bGRJbmRpY2F0ZVVwZGF0ZUlzRnJvbVNlbGYpOyByZXR1cm5cblxuXHRcdFx0XG5cdFx0XHRcdGlmIHR5cGVJc0FycmF5XG5cdFx0XHRcdFx0Y29udmVydFRvTGl2ZShfLCBvYmplY3RbXy5wcm9wZXJ0eV0sIHRydWUpXG5cblx0cmV0dXJuXG5cblxuXG5cblxuY29udmVydFRvUmVnID0gKGJpbmRpbmdJbnN0YW5jZSwgb2JqZWN0LCBvbmx5QXJyYXlNZXRob2RzKS0+XG5cdGlmIG9ubHlBcnJheU1ldGhvZHNcblx0XHRkZWxldGUgb2JqZWN0W21ldGhvZF0gZm9yIG1ldGhvZCBpbiBhcnJheU11dGF0b3JNZXRob2RzXG5cdGVsc2Vcblx0XHRfID0gYmluZGluZ0luc3RhbmNlXG5cdFx0bmV3RGVzY3JpcHRvciA9IF8ub3JpZ0Rlc2NyaXB0b3Jcblx0XHRuZXdEZXNjcmlwdG9yLnZhbHVlID0gKF8ub3JpZ0ZuIG9yIF8udmFsdWUpIHVubGVzcyBuZXdEZXNjcmlwdG9yLnNldCBvciBuZXdEZXNjcmlwdG9yLmdldFxuXHRcdGRlZmluZVByb3BlcnR5IG9iamVjdCwgXy5wcm9wZXJ0eSwgbmV3RGVzY3JpcHRvclxuXG5cblxuIiwiIyMjKlxuICogVGhlcmUgaXMgYSBidWcgaW4gd2Via2l0L2JsaW5rIGVuZ2luZXMgaW4gd2hpY2ggbmF0aXZlIGF0dHJpYnV0ZXMvcHJvcGVydGllcyBcbiAqIG9mIERPTSBlbGVtZW50cyBhcmUgbm90IGV4cG9zZWQgb24gdGhlIGVsZW1lbnQncyBwcm90b3R5cGUgYW5kIGluc3RlYWQgaXNcbiAqIGV4cG9zZWQgZGlyZWN0bHkgb24gdGhlIGVsZW1lbnQgaW5zdGFuY2U7IHdoZW4gbG9va2luZyB1cCB0aGUgcHJvcGVydHkgZGVzY3JpcHRvclxuICogb2YgdGhlIGVsZW1lbnQgYSBkYXRhIGRlc2NyaXB0b3IgaXMgcmV0dXJuZWQgaW5zdGVhZCBvZiBhbiBhY2Nlc3NvciBkZXNjcmlwdG9yXG4gKiAoaS5lLiBkZXNjcmlwdG9yIHdpdGggZ2V0dGVyL3NldHRlcikgd2hpY2ggbWVhbnMgd2UgYXJlIG5vdCBhYmxlIHRvIGRlZmluZSBvdXJcbiAqIG93biBwcm94eSBnZXR0ZXIvc2V0dGVycy4gVGhpcyB3YXMgZml4ZWQgb25seSBpbiBBcHJpbCAyMDE1IGluIENocm9tZSB2NDMgYW5kXG4gKiBTYWZhcmkgdjEwLiBBbHRob3VnaCB3ZSB3b24ndCBiZSBhYmxlIHRvIGdldCBub3RpZmllZCB3aGVuIHRoZSBvYmplY3RzIGdldFxuICogdGhlaXIgdmFsdWVzIHNldCwgd2Ugd291bGQgYXQgbGVhc3QgcHJvdmlkZSB3b3JraW5nIGZ1bmN0aW9uYWxpdHkgbGFja2luZyB1cGRhdGVcbiAqIGxpc3RlbmVycy4gU2luY2UgdjEuMTQuMCBIVE1MSW5wdXRFbGVtZW50Ojp2YWx1ZSBiaW5kaW5ncyBpbnZva2UgdGhlIG9yaWdpbmFsXG4gKiBnZXR0ZXIgYW5kIHNldHRlciBtZXRob2RzIGluIEJpbmRpbmc6OnNldFZhbHVlKCksIGFuZCBzaW5jZSB3ZSB3YW50IHRvIGF2b2lkXG4gKiBpbmNyZWFzaW5nIHRoZSBhbW91bnQgb2YgbG9naWMgcHJlc2VudCBpbiBCaW5kaW5nOjpzZXRWYWx1ZSgpIGZvciBwZXJmb3JtYW5jZVxuICogcmVhc29ucywgd2UgcGF0Y2ggdGhvc2Ugc2V0dGVycyBoZXJlLiBXZSBjbG9uZSB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIGNoZWNrIGZvclxuICogdGhlIGV4aXN0ZW5jZSBvZiB0aGUgdGFyZ2V0IHByb3BlcnR5IC0gaWYgaXQgZXhpc3RzIHRoZW4gaXQgaW5kaWNhdGVzIHRoZSB0YXJnZXRcbiAqIHByb3BlcnR5IGlzIGEgbmF0aXZlIHByb3BlcnR5IChzaW5jZSBvbmx5IG5hdGl2ZSBwcm9wZXJ0aWVzIGFyZSBjb3BpZWQgb3ZlciBpblxuICogRWxlbWVudDo6Y2xvbmVOb2RlKS4gVGhpcyBwYXRjaGluZyBpcyBvbmx5IGZvciBuYXRpdmUgcHJvcGVydGllcy5cbiAqXG4gKiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDk3MzlcbiAqIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03NTI5N1xuICogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDMzOTRcbiAqIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQzMTQ5MlxuICogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTMxNzVcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTUvMDQvRE9NLWF0dHJpYnV0ZXMtbm93LW9uLXRoZS1wcm90b3R5cGUtY2hhaW5cbiMjI1xuXG5pZiByZXF1aXJlc0RvbURlc2NyaXB0b3JGaXggYW5kIF8uaXNEb20gYW5kIF8ucHJvcGVydHkgb2Ygb2JqZWN0LmNsb25lTm9kZShmYWxzZSlcblx0Xy5vcmlnRGVzY3JpcHRvciA9IHNob3VsZFdyaXRlTGl2ZVByb3AgPSBmYWxzZVxuXHRfLmlzTGl2ZVByb3AgPSB0cnVlXG5cdF8ub3JpZ0dldHRlciA9ICgpLT4gXy5vYmplY3RbXy5wcm9wZXJ0eV1cblx0Xy5vcmlnU2V0dGVyID0gKG5ld1ZhbHVlKS0+IF8ub2JqZWN0W18ucHJvcGVydHldID0gbmV3VmFsdWUiLCJjbG9uZU9iamVjdCA9IChvYmplY3QpLT5cblx0Y2xvbmUgPSBnZW5PYmooKVxuXHRjbG9uZVtrZXldID0gb2JqZWN0W2tleV0gZm9yIGtleSBvZiBvYmplY3Rcblx0cmV0dXJuIGNsb25lXG5cbmV4dGVuZFN0YXRlID0gKGJhc2UsIHN0YXRlVG9Jbmhlcml0KS0+XG5cdHN0YXRlTWFwcGluZyA9IE9iamVjdC5rZXlzKHN0YXRlVG9Jbmhlcml0KVxuXHRiYXNlW2tleV0gPSBzdGF0ZVRvSW5oZXJpdFtrZXldIGZvciBrZXkgaW4gc3RhdGVNYXBwaW5nXG5cdHJldHVyblxuIiwiY2FjaGUgPVx0XG5cdGdldDogKG9iamVjdCwgaXNGdW5jdGlvbiwgc2VsZWN0b3IsIGlzTXVsdGlDaG9pY2UpLT5cblx0XHRpZiBpc0Z1bmN0aW9uXG5cdFx0XHRyZXR1cm4gYm91bmRJbnN0YW5jZXNbb2JqZWN0Ll9zYl9JRF1cblx0XHRlbHNlXG5cdFx0XHRpZiBpc011bHRpQ2hvaWNlIGFuZCBvYmplY3RbMF0uX3NiX21hcFxuXHRcdFx0XHRzYW1wbGVJdGVtID0gYm91bmRJbnN0YW5jZXNbIG9iamVjdFswXS5fc2JfbWFwW3NlbGVjdG9yXSBdXG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gc2FtcGxlSXRlbS5ncm91cEJpbmRpbmcgaWYgc2FtcGxlSXRlbS5ncm91cEJpbmRpbmdcblxuXHRcdFx0aWYgb2JqZWN0Ll9zYl9tYXAgYW5kIG9iamVjdC5fc2JfbWFwW3NlbGVjdG9yXVxuXHRcdFx0XHRyZXR1cm4gYm91bmRJbnN0YW5jZXNbIG9iamVjdC5fc2JfbWFwW3NlbGVjdG9yXSBdXG5cblxuXHRzZXQ6IChCLCBpc0Z1bmN0aW9uKS0+ICMgQiA9PT09IEJpbmRpbmcgT2JqZWN0XG5cdFx0aWYgaXNGdW5jdGlvblxuXHRcdFx0ZGVmaW5lUHJvcGVydHkgQi5vYmplY3QsICdfc2JfSUQnLCB7J2NvbmZpZ3VyYWJsZSc6dHJ1ZSwgJ3ZhbHVlJzpCLklEfVxuXG5cdFx0ZWxzZVxuXHRcdFx0c2VsZWN0b3IgPSBCLnNlbGVjdG9yXG5cblx0XHRcdGlmIEIub2JqZWN0Ll9zYl9tYXBcblx0XHRcdFx0Qi5vYmplY3QuX3NiX21hcFtzZWxlY3Rvcl0gPSBCLklEXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHByb3BzTWFwID0ge31cblx0XHRcdFx0cHJvcHNNYXBbc2VsZWN0b3JdID0gQi5JRFxuXHRcdFx0XHRcblx0XHRcdFx0ZGVmaW5lUHJvcGVydHkgQi5vYmplY3QsICdfc2JfbWFwJywgeydjb25maWd1cmFibGUnOnRydWUsICd2YWx1ZSc6cHJvcHNNYXB9XG5cdFx0cmV0dXJuIiwiZXNjYXBlUmVnRXggPSAvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2dcbnBob2xkZXJSZWdFeCA9IHBob2xkZXJSZWdFeFNwbGl0ID0gbnVsbFxuXG5zZXRQaG9sZGVyUmVnRXggPSAoKS0+XG5cdHN0YXJ0ID0gc2V0dGluZ3MucGxhY2Vob2xkZXJbMF0ucmVwbGFjZShlc2NhcGVSZWdFeCwgJ1xcXFwkJicpXG5cdGVuZCA9IHNldHRpbmdzLnBsYWNlaG9sZGVyWzFdLnJlcGxhY2UoZXNjYXBlUmVnRXgsICdcXFxcJCYnKVxuXHRtaWRkbGUgPSBcIlteI3tlbmR9XStcIlxuXHRwaG9sZGVyUmVnRXggPSBuZXcgUmVnRXhwKFwiI3tzdGFydH0oI3ttaWRkbGV9KSN7ZW5kfVwiLCAnZycpXG5cdHBob2xkZXJSZWdFeFNwbGl0ID0gbmV3IFJlZ0V4cChcIiN7c3RhcnR9I3ttaWRkbGV9I3tlbmR9XCIsICdnJylcblx0cmV0dXJuXG5cbnNldFBob2xkZXJSZWdFeCgpICMgQ3JlYXRlIHRoZSByZWdFeCBvbiBpbml0XG5cblxuXG5hcHBseVBsYWNlaG9sZGVycyA9IChjb250ZXh0cywgdmFsdWVzLCBpbmRleE1hcCktPlxuXHRvdXRwdXQgPSAnJ1xuXHRmb3IgY29udGV4dFBhcnQsaW5kZXggaW4gY29udGV4dHNcblx0XHRvdXRwdXQgKz0gY29udGV4dFBhcnRcblx0XHRvdXRwdXQgKz0gdmFsdWVzW2luZGV4TWFwW2luZGV4XV0gaWYgaW5kZXhNYXBbaW5kZXhdXG5cdFxuXHRyZXR1cm4gb3V0cHV0XG5cblxudGV4dENvbnRlbnQgPSAndGV4dENvbnRlbnQnXG5cbmFkZFRvTm9kZVN0b3JlID0gKG5vZGVTdG9yZSwgbm9kZSwgdGFyZ2V0UGxhY2Vob2xkZXIpLT5cblx0bm9kZVN0b3JlW3RhcmdldFBsYWNlaG9sZGVyXSA/PSBbXVxuXHRub2RlU3RvcmVbdGFyZ2V0UGxhY2Vob2xkZXJdLnB1c2gobm9kZSlcblx0cmV0dXJuXG5cblxuc2NhblRleHROb2Rlc1BsYWNlaG9sZGVycyA9IChlbGVtZW50LCBub2RlU3RvcmUpLT5cblx0Y2hpbGROb2RlcyA9IEFycmF5OjpzbGljZS5jYWxsKGVsZW1lbnQuY2hpbGROb2Rlcylcblx0Zm9yIG5vZGUgaW4gY2hpbGROb2Rlc1xuXHRcdGlmIG5vZGUubm9kZVR5cGUgaXNudCAzIFxuXHRcdFx0c2NhblRleHROb2Rlc1BsYWNlaG9sZGVycyhub2RlLCBub2RlU3RvcmUpXG5cdFx0XG5cdFx0ZWxzZSBpZiBub2RlW3RleHRDb250ZW50XS5tYXRjaChwaG9sZGVyUmVnRXhTcGxpdClcblx0XHRcdHRleHRQaWVjZXMgPSBub2RlW3RleHRDb250ZW50XS5zcGxpdChwaG9sZGVyUmVnRXgpXG5cblx0XHRcdGlmIHRleHRQaWVjZXMubGVuZ3RoIGlzIDMgYW5kIHRleHRQaWVjZXNbMF0rdGV4dFBpZWNlc1syXSBpcyAnJyAjIFRoZSBlbnRpcmUgdGV4dE5vZGUgaXMganVzdCB0aGUgcGxhY2Vob2xkZXJcblx0XHRcdFx0YWRkVG9Ob2RlU3RvcmUobm9kZVN0b3JlLCBub2RlLCB0ZXh0UGllY2VzWzFdKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRuZXdGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXG5cdFx0XHRcdGZvciB0ZXh0UGllY2UsaW5kZXggaW4gdGV4dFBpZWNlc1xuXHRcdFx0XHRcdG5ld05vZGUgPSBuZXdGcmFnbWVudC5hcHBlbmRDaGlsZCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0UGllY2UpXG5cdFx0XHRcdFx0aWYgaW5kZXggJSAyICMgaXMgYW4gb2RkIGluZGV4LCBpbmRpY2F0aW5nIHRoYXQgYmVmb3JlIHRoaXMgdGV4dCBwaWVjZSBzaG91bGQgY29tZSBhIHBsYWNlaG9sZGVyIG5vZGVcblx0XHRcdFx0XHRcdGFkZFRvTm9kZVN0b3JlKG5vZGVTdG9yZSwgbmV3Tm9kZSwgdGV4dFBpZWNlKVxuXG5cdFx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RnJhZ21lbnQsIG5vZGUpXG5cblx0cmV0dXJuXG5cblxuXG4iLCJ0aHJvd0Vycm9yID0gKGVycm9yTmFtZSktPlxuXHR0aHJvdyBuZXcgRXJyb3IgJ1NpbXBseUJpbmQ6ICcrKGVycm9yc1tlcnJvck5hbWVdIG9yIGVycm9yTmFtZSlcblxudGhyb3dXYXJuaW5nID0gKHdhcm5pbmdOYW1lLCBkZXB0aCktPiB1bmxlc3Mgc2V0dGluZ3Muc2lsZW50XG5cdGVyclNvdXJjZSA9IGdldEVyclNvdXJjZShkZXB0aClcblx0d2FybiA9IGVycm9yc1t3YXJuaW5nTmFtZV1cblx0d2FybiArPSBcIlxcblxcblwiK2VyclNvdXJjZVxuXHRjb25zb2xlLndhcm4oJ1NpbXBseUJpbmQ6ICcrd2Fybilcblx0cmV0dXJuXG5cbnRocm93RXJyb3JCYWRBcmcgPSAoYXJnKS0+XG5cdHRocm93RXJyb3IgXCJJbnZhbGlkIGFyZ3VtZW50L3MgKCN7YXJnfSlcIiwgdHJ1ZVxuXHRyZXR1cm5cblxuZ2V0RXJyU291cmNlID0gKGRlcHRoKS0+XG5cdCgobmV3IEVycm9yKS5zdGFjayBvciAnJylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0LnNsaWNlKGRlcHRoKzMpXG5cdFx0LmpvaW4oJ1xcbicpXG5cblxuIiwiZXJyb3JzID0gXG5cdGludmFsaWRQYXJhbU5hbWU6IFwiU2ltcGx5QmluZCgpIGFuZCAudG8oKSBvbmx5IGFjY2VwdCBhIGZ1bmN0aW9uLCBhbiBhcnJheSwgYSBib3VuZCBvYmplY3QsIGEgc3RyaW5nLCBvciBhIG51bWJlci5cIlxuXHRmbk9ubHk6IFwiT25seSBmdW5jdGlvbnMgYXJlIGFsbG93ZWQgZm9yIC50cmFuc2Zvcm0vLmNvbmRpdGlvbi9BbGwoKVwiXG5cdGJhZEV2ZW50QXJnOiBcIkludmFsaWQgYXJndW1lbnQgbnVtYmVyIGluIC5vZkV2ZW50KClcIlxuXHRlbXB0eUxpc3Q6IFwiRW1wdHkgY29sbGVjdGlvbiBwcm92aWRlZFwiXG5cdFxuXHRvbmx5T25lRE9NRWxlbWVudDogXCJZb3UgY2FuIG9ubHkgcGFzcyBhIHNpbmdsZSBET00gZWxlbWVudCB0byBhIGJpbmRpbmdcIlxuXHRtaXhlZEVsTGlzdDogXCInY2hlY2tlZCcgb2YgTWl4ZWQgbGlzdCBvZiBlbGVtZW50IGNhbm5vdCBiZSBib3VuZFwiXG4iLCJTaW1wbHlCaW5kID0gKHN1YmplY3QsIG9wdGlvbnMsIHNhdmVPcHRpb25zLCBpc1N1YiwgY29tcGxldGVDYWxsYmFjayktPlxuXHRpZiAoIXN1YmplY3QgYW5kIHN1YmplY3QgaXNudCAwKSBvciAoIWNoZWNrSWYuaXNTdHJpbmcoc3ViamVjdCkgYW5kICFjaGVja0lmLmlzTnVtYmVyKHN1YmplY3QpIGFuZCAhY2hlY2tJZi5pc0Z1bmN0aW9uKHN1YmplY3QpIGFuZCBzdWJqZWN0IG5vdCBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdHRocm93RXJyb3IoJ2ludmFsaWRQYXJhbU5hbWUnKSB1bmxlc3MgY2hlY2tJZi5pc0JpbmRpbmdJbnRlcmZhY2Uoc3ViamVjdClcblxuXHRpZiBjaGVja0lmLmlzT2JqZWN0KHN1YmplY3QpIGFuZCBzdWJqZWN0IG5vdCBpbnN0YW5jZW9mIEFycmF5ICMgSW5kaWNhdGVzIGl0J3MgYSBCaW5kaW5nIGluc3RhbmNlIG9iamVjdCBkdWUgdG8gdGhlIGFib3ZlIGNoZWNrXG5cdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBpZiBjb21wbGV0ZUNhbGxiYWNrIHRoZW4gY29tcGxldGVDYWxsYmFjayhzdWJqZWN0KSBlbHNlIHN1YmplY3Quc2VsZkNsb25lKClcblx0XG5cdGVsc2Vcblx0XHRuZXdJbnRlcmZhY2UgPSBuZXcgQmluZGluZ0ludGVyZmFjZShvcHRpb25zKVxuXHRcdG5ld0ludGVyZmFjZS5zYXZlT3B0aW9ucyA9IHNhdmVPcHRpb25zXG5cdFx0bmV3SW50ZXJmYWNlLmlzU3ViID0gaXNTdWJcblx0XHRuZXdJbnRlcmZhY2UuY29tcGxldGVDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2tcblxuXHRcdGlmIGNoZWNrSWYuaXNGdW5jdGlvbihzdWJqZWN0KVxuXHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBuZXdJbnRlcmZhY2Uuc2V0T2JqZWN0KHN1YmplY3QsIHRydWUpXG5cdFx0ZWxzZVxuXHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBuZXdJbnRlcmZhY2Uuc2V0UHJvcGVydHkoc3ViamVjdClcblxuXHRyZXR1cm4gaW50ZXJmYWNlVG9SZXR1cm5cblxuXG5cblxuaW1wb3J0ICcuL21ldGhvZHMnIiwiU2ltcGx5QmluZC52ZXJzaW9uID0gaW1wb3J0ICcuLi8uLi9wYWNrYWdlLmpzb24gJCB2ZXJzaW9uJ1xuU2ltcGx5QmluZC5zZXR0aW5ncyA9IHNldHRpbmdzXG5TaW1wbHlCaW5kLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnNcblxuXG5cblNpbXBseUJpbmQudW5CaW5kQWxsID0gKG9iamVjdCwgYm90aFdheXMpLT5cblx0aWYgb2JqZWN0IGFuZCAoY2hlY2tJZi5pc09iamVjdChvYmplY3QpIG9yIGNoZWNrSWYuaXNGdW5jdGlvbihvYmplY3QpKVxuXHRcdGltcG9ydCAnLi9tZXRob2RzLnVuQmluZEFsbC1wYXJzZURPTU9iamVjdC5jb2ZmZWUnXG5cdFx0cHJvcE1hcCA9IG9iamVjdC5fc2JfbWFwXHRcdFxuXG5cdFx0aWYgb2JqZWN0Ll9zYl9JRFxuXHRcdFx0Ym91bmRJbnN0YW5jZXNbb2JqZWN0Ll9zYl9JRF0ucmVtb3ZlQWxsU3Vicyhib3RoV2F5cylcblx0XHRcblx0XHRpZiBwcm9wTWFwXG5cdFx0XHRib3VuZEluc3RhbmNlc1tib3VuZElEXS5yZW1vdmVBbGxTdWJzKGJvdGhXYXlzKSBmb3IgcHJvcCwgYm91bmRJRCBvZiBwcm9wTWFwXG5cblx0cmV0dXJuXG5cbiIsIntcbiAgXCJfYXJnc1wiOiBbXG4gICAgW1xuICAgICAgXCJAZGFuaWVsa2FsZW4vc2ltcGx5YmluZEAxLjE1LjhcIixcbiAgICAgIFwiL1VzZXJzL2RhbmllbGthbGVuL3NhbmRib3gvZGF0YV90YWJsZVwiXG4gICAgXVxuICBdLFxuICBcIl9mcm9tXCI6IFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRAMS4xNS44XCIsXG4gIFwiX2lkXCI6IFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRAMS4xNS44XCIsXG4gIFwiX2luQnVuZGxlXCI6IGZhbHNlLFxuICBcIl9pbnRlZ3JpdHlcIjogXCJzaGE1MTItcmtsK3dIYmJDb1BvMkEzVk5EQXQ1dXlWWCtsQkhvZU5aZkRBb0lWTnNsUkVVQUY5WktrUDZzWXA5eXFGTE5ZM2ptcjhsK3l5TXFNR3N4cUJaR3o1OHc9PVwiLFxuICBcIl9sb2NhdGlvblwiOiBcIi9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZFwiLFxuICBcIl9waGFudG9tQ2hpbGRyZW5cIjoge30sXG4gIFwiX3JlcXVlc3RlZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwidmVyc2lvblwiLFxuICAgIFwicmVnaXN0cnlcIjogdHJ1ZSxcbiAgICBcInJhd1wiOiBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kQDEuMTUuOFwiLFxuICAgIFwibmFtZVwiOiBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCIsXG4gICAgXCJlc2NhcGVkTmFtZVwiOiBcIkBkYW5pZWxrYWxlbiUyZnNpbXBseWJpbmRcIixcbiAgICBcInNjb3BlXCI6IFwiQGRhbmllbGthbGVuXCIsXG4gICAgXCJyYXdTcGVjXCI6IFwiMS4xNS44XCIsXG4gICAgXCJzYXZlU3BlY1wiOiBudWxsLFxuICAgIFwiZmV0Y2hTcGVjXCI6IFwiMS4xNS44XCJcbiAgfSxcbiAgXCJfcmVxdWlyZWRCeVwiOiBbXG4gICAgXCIvXCJcbiAgXSxcbiAgXCJfcmVzb2x2ZWRcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC8tL3NpbXBseWJpbmQtMS4xNS44LnRnelwiLFxuICBcIl9zcGVjXCI6IFwiMS4xNS44XCIsXG4gIFwiX3doZXJlXCI6IFwiL1VzZXJzL2RhbmllbGthbGVuL3NhbmRib3gvZGF0YV90YWJsZVwiLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiZGFuaWVsa2FsZW5cIlxuICB9LFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kaXN0L3NpbXBseWJpbmQubm9kZS5kZWJ1Zy5qc1wiOiBcInNyYy9pbmRleC5jb2ZmZWVcIixcbiAgICBcIi4vZGVidWdcIjogXCJkaXN0L3NpbXBseWJpbmQuZGVidWcuanNcIlxuICB9LFxuICBcImJyb3dzZXJpZnlcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFtcbiAgICAgIFwic2ltcGx5aW1wb3J0L2NvbXBhdFwiXG4gICAgXVxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL3NpbXBseWJpbmQvaXNzdWVzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge30sXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWdpY2FsbHkgc2ltcGxlLCBmcmFtZXdvcmstbGVzcyBvbmUtd2F5L3R3by13YXkgZGF0YSBiaW5kaW5nIGZvciBmcm9udGVuZC9iYWNrZW5kIGluIH41a2IuXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJsdWViaXJkXCI6IFwiXjMuNS4wXCIsXG4gICAgXCJjb2ZmZWUtc2NyaXB0XCI6IFwiXjEuMTIuNlwiLFxuICAgIFwiZnMtamV0cGFja1wiOiBcIl4wLjEzLjFcIixcbiAgICBcInByb21pc2UtYnJlYWtcIjogXCJeMC4xLjFcIixcbiAgICBcInNlbXZlclwiOiBcIl41LjMuMFwiLFxuICAgIFwic2ltcGx5aW1wb3J0XCI6IFwiXjQuMC4wLXM0XCIsXG4gICAgXCJzaW1wbHl3YXRjaFwiOiBcIl4zLjAuMC1sMlwiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc2ltcGx5YmluZCNyZWFkbWVcIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJiaW5kXCIsXG4gICAgXCJiaW5kaW5nXCIsXG4gICAgXCJkb20tYmluZGluZ1wiLFxuICAgIFwib25lLXdheVwiLFxuICAgIFwidHdvLXdheVwiXG4gIF0sXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcIm1haW5cIjogXCJkaXN0L3NpbXBseWJpbmQubm9kZS5kZWJ1Zy5qc1wiLFxuICBcIm5hbWVcIjogXCJAZGFuaWVsa2FsZW4vc2ltcGx5YmluZFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zaW1wbHliaW5kLmdpdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJiZW5jaG1hcmtzXCI6IFwiY2FrZSBpbnN0YWxsOmJlbmNoOyBucG0gcnVuIGJlbmNobWFya3M6YnVpbGQgJiYgbnBtIHJ1biBiZW5jaG1hcmtzOnNlcnZlXCIsXG4gICAgXCJiZW5jaG1hcmtzOmJ1aWxkXCI6IFwiYmVuY2htYXJrcyBidWlsZCAtcyBiZW5jaG1hcmtzL3NyYyAtZCBiZW5jaG1hcmtzL2Rlc3RcIixcbiAgICBcImJlbmNobWFya3M6cnVuXCI6IFwiYmVuY2htYXJrcyBydW4gLWQgYmVuY2htYXJrcy9kZXN0XCIsXG4gICAgXCJiZW5jaG1hcmtzOnNlcnZlXCI6IFwiYmVuY2htYXJrcyBzZXJ2ZSAtZCBiZW5jaG1hcmtzL2Rlc3RcIixcbiAgICBcImJlbmNobWFya3M6dXBkYXRlXCI6IFwiY2FrZSBpbnN0YWxsOmJlbmNoOyBjYWtlIHVwZGF0ZVNCQmVuY2g7IG5wbSBydW4gYmVuY2htYXJrczpidWlsZFwiLFxuICAgIFwiYnVpbGRcIjogXCJjYWtlIC1kIGJ1aWxkICYmIGNha2UgYnVpbGQgJiYgY2FrZSBtZWFzdXJlICYmIGNwIC1yIGJ1aWxkLyogZGlzdC9cIixcbiAgICBcImNvdmVyYWdlXCI6IFwiY2FrZSBpbnN0YWxsOmNvdmVyYWdlOyBucG0gcnVuIGNvdmVyYWdlOnJ1biAmJiBucG0gcnVuIGNvdmVyYWdlOmJhZGdlXCIsXG4gICAgXCJjb3ZlcmFnZTpiYWRnZVwiOiBcImJhZGdlLWdlbiAtZCAuLy5jb25maWcvYmFkZ2VzL2NvdmVyYWdlXCIsXG4gICAgXCJjb3ZlcmFnZTpydW5cIjogXCJpc3RhbmJ1bCBjb3ZlciAtLWRpciBjb3ZlcmFnZS9ub2RlIG5vZGVfbW9kdWxlcy9tb2NoYS9iaW4vX21vY2hhIC0tIC11IHRkZCAtYiB0ZXN0L3Rlc3RIZWxwZXJzLmpzIHRlc3QvdGVzdC5qc1wiLFxuICAgIFwicG9zdHB1Ymxpc2hcIjogXCJnaXQgcHVzaFwiLFxuICAgIFwicG9zdHZlcnNpb25cIjogXCJucG0gcnVuIGJ1aWxkICYmIG5wbSBydW4gYmVuY2htYXJrczp1cGRhdGUgJiYgZ2l0IGFkZCAuICYmIGdpdCBjb21taXQgLWEgLW0gJ1tCdWlsZF0nXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIm5wbSBydW4gdGVzdFwiLFxuICAgIFwidGVzdFwiOiBcIm5wbSBydW4gdGVzdDpub2RlIC1zICYmIG5wbSBydW4gdGVzdDpicm93c2VyIC1zICYmIG5wbSBydW4gdGVzdDptaW5pZmllZCAtc1wiLFxuICAgIFwidGVzdDpicm93c2VyXCI6IFwiY2FrZSBpbnN0YWxsOmthcm1hOyBrYXJtYSBzdGFydCAtLXNpbmdsZS1ydW4gLS1icm93c2VycyBFbGVjdHJvbiAuY29uZmlnL2thcm1hLmNvbmYuY29mZmVlXCIsXG4gICAgXCJ0ZXN0OmJyb3dzZXI6bG9jYWxcIjogXCJjYWtlIGluc3RhbGw6dGVzdDsgb3BlbiB0ZXN0L3Rlc3RydW5uZXIuaHRtbFwiLFxuICAgIFwidGVzdDprYXJtYVwiOiBcImNha2UgaW5zdGFsbDprYXJtYTsga2FybWEgc3RhcnQgLmNvbmZpZy9rYXJtYS5jb25mLmNvZmZlZVwiLFxuICAgIFwidGVzdDptaW5pZmllZFwiOiBcIm1pbmlmaWVkPTEgbnBtIHJ1biB0ZXN0OmJyb3dzZXIgLXMgfHwgdHJ1ZVwiLFxuICAgIFwidGVzdDpub2RlXCI6IFwiY2FrZSBpbnN0YWxsOnRlc3Q7IG1vY2hhIC11IHRkZCAtLWNvbXBpbGVycyBjb2ZmZWU6Y29mZmVlLXJlZ2lzdGVyIHRlc3Qvbm9kZS5jb2ZmZWVcIixcbiAgICBcInRlc3Q6c2F1Y2VcIjogXCJjYWtlIGluc3RhbGw6a2FybWE7IHNhdWNlPTEga2FybWEgc3RhcnQgLmNvbmZpZy9rYXJtYS5jb25mLmNvZmZlZVwiLFxuICAgIFwid2F0Y2hcIjogXCJjYWtlIC1kIHdhdGNoXCJcbiAgfSxcbiAgXCJzaW1wbHlpbXBvcnRcIjoge1xuICAgIFwiZmluYWxUcmFuc2Zvcm1cIjogW1xuICAgICAgXCIuY29uZmlnL3RyYW5zZm9ybXMvbWluaWZ5LXN1cGVyXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktcmVuYW1lXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc2ltcGxlXCJcbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjEuMTUuOFwiXG59XG4iLCIjIyMqXG4gKiBDb25kaXRpb25hbCBDaGVja3M6XG4gKlxuICogMSkgTWFrZSBzdXJlIHRoZSBzdWJqZWN0IG9iamVjdCBpcyBpdGVyYWJsZSAoYW5kIHRodXMgYSBwb3NzaWJsZSBjYW5kaWRhdGUgZm9yIGJlaW5nIGFuIGVsZW1lbnQgY29sbGVjdGlvbilcbiAqIDIpIE1ha2Ugc3VyZSB0aGUgc3ViamVjdCBvYmplY3QgaXNuJ3QgYW4gYXJyYXkgYmluZGluZyAoc2luY2UgZWxlbWVudCBjb2xsZWN0aW9uIG9iamVjdHMgZG9uJ3QgZ2V0IGRpcmVjdGx5IGJvdW5kKVxuICogMykgTWFrZSBzdXJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uIGlzIGEgdmFsaWQgb2JqZWN0IChpLmUuIGlzbid0IHVuZGVmaW5lZCBhbmQgaXNuJ3QgbnVsbClcbiAqIDQpIE1ha2Ugc3VyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyBhIERPTSBvYmplY3RcbiMjI1xuaWYgY2hlY2tJZi5pc0l0ZXJhYmxlKG9iamVjdCkgYW5kIG5vdCBvYmplY3QuX3NiX0lEIGFuZCBvYmplY3RbMF0gYW5kIChjaGVja0lmLmlzRG9tKG9iamVjdFswXSkpXG5cdG9iamVjdCA9IG9iamVjdFswXSIsIkJpbmRpbmcgPSAob2JqZWN0LCB0eXBlLCBzdGF0ZSktPlxuXHRleHRlbmRTdGF0ZShALCBzdGF0ZSlcblx0QG9wdGlvbnNEZWZhdWx0ID0gaWYgQHNhdmVPcHRpb25zIHRoZW4gQG9wdGlvbnMgZWxzZSBkZWZhdWx0T3B0aW9uc1xuXHRAdHlwZSA9IHR5cGVcdFx0XHRcdFx0XHRcdCMgT2JqZWN0UHJvcCB8IEFycmF5IHwgRnVuYyB8IFByb3h5IHwgRXZlbnQgfCBQaG9sZGVyIHwgRE9NQXR0ciB8IERPTUNoZWNrYm94IHwgRE9NUmFkaW9cblx0QG9iamVjdCA9IG9iamVjdCBcdFx0XHRcdFx0XHQjIFRoZSBzdWJqZWN0IG9iamVjdCBvZiB0aGlzIGJpbmRpbmcsIGkuZS4gZnVuY3Rpb24sIGFycmF5LCB7fSwgRE9NIGVsLCBldGMuXG5cdEBJRCA9IGdlbklEKCkgXHRcdFx0XHRcdFx0XHQjIEFzc2lnbmVkIG9ubHkgYWZ0ZXIgcGFzc2luZyBhIHZhbGlkIG9iamVjdCB0byAub2YoKVxuXHRAc3VicyA9IFtdXHRcdFx0XHRcdFx0XHRcdCMgU3Vic2NyaWJlcnMgYXJyYXkgbGlzdGluZyBhbGwgb2YgdGhlIG9iamVjdHMgdGhhdCB3aWxsIGJlIHVwZGF0ZWQgdXBvbiB2YWx1ZSB1cGRhdGVcblx0QHN1YnNNZXRhID0gZ2VuT2JqKClcdFx0XHRcdFx0IyBNYXAgc3Vic2NyaWJlcnMnIElEIHRvIHRoZWlyIG1ldGFkYXRhIChpLmUuIG9wdGlvbnMsIHRyYW5zZm9ybSwgY29uZGl0aW9uLCBvbmUtdGltZS1iaW5kaW5nLCBldGMuKVxuXHRAcHVic01hcCA9IGdlbk9iaigpXHRcdFx0XHRcdFx0IyBNYXAgcHVibGlzaGVycyAoYmluZGluZ3MgdGhhdCB1cGRhdGUgdGhpcyBiaW5kaW5nKSBieSB0aGVpciBJRFxuXHRAYXR0YWNoZWRFdmVudHMgPSBbXVx0XHRcdFx0XHQjIEFycmF5IGxpc3RpbmcgYWxsIG9mIHRoZSBldmVudHMgY3VycmVudGx5IGxpc3RlbmVkIG9uIEBvYmplY3Rcblx0QHNldFZhbHVlID0gc2V0VmFsdWVOb29wIGlmIEB0eXBlIGlzICdQcm94eSdcblxuXHQjID09PT0gUHJvcGVydGllcyBkZWNsYXJlZCBsYXRlciBvciBpbmhlcml0ZWQgZnJvbSBiaW5kaW5nIGludGVyZmFjZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyBAb3B0aW9ucyA9IG9wdGlvbnNcblx0IyBAdmFsdWUgPSB1bmRlZmluZWQgXHRcdFx0XHRcdCMgV2lsbCByZXByZXNlbnQgdGhlIGFjdHVhbCBjdXJyZW50IHZhbHVlIG9mIHRoZSBiaW5kaW5nL29iamVjdFxuXHQjIEBwcm9wZXJ0eSA9IHByb3BlcnR5XHRcdFx0XHRcdCMgVGhlIHByb3BlcnR5IG5hbWUgb3IgYXJyYXkgaW5kZXggb3IgZXZlbnQgY2FsbGJhY2sgYXJndW1lbnRcblx0IyBAc2VsZWN0b3IgPSBzZWxlY3Rvclx0XHRcdFx0XHQjIFRoZSBwcm9wZXJ0eSBuYW1lIG9yIGFycmF5IGluZGV4IG9yIGV2ZW50IGNhbGxiYWNrIGFyZ3VtZW50XG5cdCMgQG9yaWdGbiA9IEZ1bmN0aW9uXHRcdFx0XHRcdCMgVGhlIG9yaWdpbmFsIHByb3hpZWQgZnVuY3Rpb24gcGFzc2VkIHRvIFByb3h5IGJpbmRpbmdzXG5cdCMgQGN1c3RvbUV2ZW50TWV0aG9kID0ge31cdFx0XHRcdCMgTmFtZXMgb2YgdGhlIGV2ZW50IGVtaXR0ZXIvdHJpZ2dlciBtZXRob2RzIChpZiBhcHBsaWNhYmxlKVxuXHQjIEBwaG9sZGVyQ29udGV4dHMgPSB7fVx0XHRcdFx0XHQjIFBsYWNlaG9sZGVyIHN1cnJvdW5kaW5ncyAob3JpZ2luYWwgYmluZGluZyB2YWx1ZSBzcGxpdCBieSB0aGUgcGxhY2Vob2xkZXIgcmVnRXgpXG5cdCMgQHBob2xkZXJJbmRleE1hcCA9IHt9XHRcdFx0XHRcdCMgUGxhY2Vob2xkZXIgb2NjdXJlbmNlIG1hcHBpbmcsIGkuZS4gdGhlIHBsYWNlaG9sZGVyIG5hbWUgZm9yIGVhY2ggcGxhY2Vob2xkZXIgb2NjdXJlbmNlXG5cdCMgQHBsYWNlaG9sZGVyID0gXCJcIlx0XHRcdFx0XHRcdCMgVGhlIGxhc3Qgc3BlY2lmaWVkIHBsYWNlaG9sZGVyIHRvIGJpbmQgdGhlIHZhbHVlIHRvXG5cdCMgQGRlc2NyaXB0b3IgPSBbXVx0XHRcdFx0XHRcdCMgRGVzY3JpYmVzIHRoZSB0eXBlIG9mIHByb3BlcnR5LCBpLmUuICdhdHRyOmRhdGEtbmFtZScgdG8gaW5kaWNhdGUgYSBET01BdHRyIHR5cGUgYmluZGluZ1xuXHQjIEBpc0xpdmVQcm9wID0gQm9vbGVhblx0XHRcdFx0XHQjIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgT2JqZWN0L09iamVjdCdzIHByb3BldHkgaGF2ZSBiZWVuIG1vZGlmaWVkIHRvIGJlIGEgbGl2ZSBwcm9wZXJ0eVxuXHQjIEBpc0RvbSA9IEJvb2xlYW5cdFx0XHRcdFx0XHQjIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgYmluZGluZydzIG9iamVjdCBpcyBhIERPTSBvYmplY3Rcblx0IyBAcG9sbEludGVydmFsID0gSURcdFx0XHRcdFx0IyBUaGUgaW50ZXJ2YWwgSUQgb2YgdGhlIHRpbWVyIHRoYXQgbWFudWFsbHkgcG9sbHMgdGhlIG9iamVjdCdzIHZhbHVlIGF0IGEgc2V0IGludGVydmFsXG5cdCMgQGFycmF5QmluZGluZyA9IEJpbmRpbmdcdFx0XHRcdCMgUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgYXJyYXkgYmluZGluZyAoaWYgZXhpc3RzKSBmb3IgYW4gaW5kZXgtb2YtYXJyYXkgYmluZGluZyAoaS5lLiBTaW1wbHlCaW5kKGFycmF5KSlcblx0IyBAZXZlbnROYW1lID0gXCJcIlx0XHRcdFx0XHRcdCMgVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRoaXMgYmluZGluZyBpcyBsaXN0ZW5pbmcgdG8gKGZvciBFdmVudCB0eXBlIGJpbmRpbmdzKVxuXHQjIEBpc0VtaXR0ZXIgPSBCb29sZWFuIFx0XHRcdFx0XHQjIFRyYWNrZXIgdG8gbGV0IHVzIGtub3cgd2Ugc2hvdWxkbid0IGhhbmRsZSB0aGUgZXZlbnQgdXBkYXRlIHdlIHJlY2VpdmVkIGFzIGl0IGlzIHRoZSBldmVudCB0aGlzIGJpbmRpbmcganVzdCBlbWl0dGVkXG5cdCMgQGV2ZW50SGFuZGxlciA9IEZ1bmN0aW9uIFx0XHRcdFx0IyBUaGUgY2FsbGJhY2sgdGhhdCBnZXRzIHRyaWdnZXJlZCB1cG9uIGFuIGV2ZW50IGVtaXR0YW5jZSAoZm9yIEV2ZW4gdHlwZSBiaW5kaW5ncylcblx0IyBAZXZlbnRPYmplY3QgPSBFdmVudCBcdFx0XHRcdFx0IyBUaGUgZGlzcGF0Y2hlZCBldmVudCBvYmplY3QgKGZvciBFdmVudCB0eXBlIGJpbmRpbmdzKVxuXHQjIEBzZWxmVHJhbnNmb3JtID0gRnVuY3Rpb24gXHRcdFx0IyBUaGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHRoYXQgbmV3IHZhbHVlcyBiZWluZyBzZXQgdG8gdGhpcyBiaW5kaW5nIGFyZSBiZWluZyBwYXNzZWQgdGhyb3VnaCBkdXJpbmcgQHNldFZhbHVlIChpZiBhcHBsaWNhYmxlKVxuXHQjIEBzZWxmVXBkYXRlciA9IEZ1bmN0aW9uIFx0XHRcdFx0IyBBIEZ1bmMtdHlwZSBCaW5kaW5nIHdoaWNoIGludm9rZXMgQHNldFZhbHVlKEBmZXRjaERpcmVjdFZhbHVlKCkpIHVwb24gY2hhbmdlLiBDcmVhdGVkIGluIEBjb252ZXJ0VG9MaXZlKCkgZm9yIEFycmF5IGJpbmRpbmdzICYgaW4gaW50ZXJmYWNlLnVwZGF0ZU9uKClcblx0IyBAaXNBc3luYyA9IEJvb2xlYW5cdFx0XHRcdFx0IyBJbmRpY2F0ZXMgaWYgdGhpcyBpcyBhbiBhc3luYyBiaW5kaW5nIChjdXJyZW50bHkgb25seSB1c2VkIGZvciBFdmVudCBiaW5kaW5ncylcblx0IyMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICMjI1xuXG5cdGlmIEBpc011bHRpQ2hvaWNlICMgVHJ1ZSBpZiBAb2JqZWN0IGlzIGEgcmFkaW8vY2hlY2tib3ggY29sbGVjdGlvblxuXHRcdEBjaG9pY2VzID0gZ2VuT2JqKClcblx0XHRcblx0XHRAb2JqZWN0LmZvckVhY2ggKGNob2ljZUVsKT0+XG5cdFx0XHRjaG9pY2VCaW5kaW5nID0gQGNob2ljZXNbY2hvaWNlRWwudmFsdWVdID0gU2ltcGx5QmluZCgnY2hlY2tlZCcpLm9mKGNob2ljZUVsKS5fXG5cdFx0XHRjaG9pY2VCaW5kaW5nLmFkZFN1YihAKVxuXHRcdFx0Y2hvaWNlQmluZGluZy5zdWJzTWV0YVtASURdLnRyYW5zZm9ybUZuID0gKCktPiBjaG9pY2VCaW5kaW5nXG5cdFx0XHRjaG9pY2VCaW5kaW5nLmdyb3VwQmluZGluZyA9IEBcblx0XHRcdHJldHVyblxuXHRcblxuXHR1bmxlc3MgQHR5cGUgaXMgJ0V2ZW50JyBvciAoQHR5cGUgaXMgJ0Z1bmMnIGFuZCBAaXNTdWIpICMgdGhlIHNlY29uZCBjb25kaXRpb24gd2lsbCBwcmV2ZW50IGZ1bmN0aW9uIHN1YnNjcmliZXJzIGZyb20gYmVpbmcgaW52b2tlZCBvbiB0aGlzIGJpbmRpbmcgY3JlYXRpb25cblx0XHRpZiBAdHlwZSBpcyAnUGhvbGRlcidcblx0XHRcdHBhcmVudFByb3BlcnR5ID0gaWYgQGRlc2NyaXB0b3IgYW5kIG5vdCB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ211bHRpJykgdGhlbiBcIiN7QGRlc2NyaXB0b3J9OiN7QHByb3BlcnR5fVwiIGVsc2UgQHByb3BlcnR5XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0cGFyZW50QmluZGluZyA9IEBwYXJlbnRCaW5kaW5nID0gU2ltcGx5QmluZChwYXJlbnRQcm9wZXJ0eSkub2Yob2JqZWN0KS5fXG5cdFx0XHRwYXJlbnRCaW5kaW5nLnNjYW5Gb3JQaG9sZGVycygpXG5cdFx0XHRAdmFsdWUgPSBwYXJlbnRCaW5kaW5nLnBob2xkZXJWYWx1ZXNbQHBob2xkZXJdXG5cdFx0XG5cdFx0XHRAdGV4dE5vZGVzID0gcGFyZW50QmluZGluZy50ZXh0Tm9kZXNbQHBob2xkZXJdIGlmIHBhcmVudEJpbmRpbmcudGV4dE5vZGVzXG5cdFx0XG5cblx0XHRlbHNlXG5cdFx0XHRAdmFsdWUgPSBzdWJqZWN0VmFsdWUgPSBAZmV0Y2hEaXJlY3RWYWx1ZSgpXG5cdFx0XG5cdFx0XHRpZiBAdHlwZSBpcyAnT2JqZWN0UHJvcCcgYW5kIG5vdCBjaGVja0lmLmlzRGVmaW5lZChzdWJqZWN0VmFsdWUpIGFuZCBub3QgZ2V0RGVzY3JpcHRvcihAb2JqZWN0LCBAcHJvcGVydHkpXG5cdFx0XHRcdEBvYmplY3RbQHByb3BlcnR5XSA9IHN1YmplY3RWYWx1ZSAjIERlZmluZSB0aGUgcHJvcCBvbiB0aGUgb2JqZWN0IGlmIGl0IG5vbi1leGlzdGVudFxuXG5cdFx0XHRjb252ZXJ0VG9MaXZlKEAsIEBvYmplY3QpXG5cblxuXHRAYXR0YWNoRXZlbnRzKClcblx0cmV0dXJuIGJvdW5kSW5zdGFuY2VzW0BJRF0gPSBAXG5cblxuXG5cblxuaW1wb3J0ICcuL3Byb3RvdHlwZSdcbiIsIkJpbmRpbmc6OiA9XG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFN1YnNjcmliZXIgTWFuYWdlbWVudFxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0YWRkU3ViOiAoc3ViLCBvcHRpb25zLCB1cGRhdGVPbmNlLCB1cGRhdGVFdmVuSWZTYW1lKS0+XG5cdFx0aWYgc3ViLmlzTXVsdGlcblx0XHRcdEBhZGRTdWIoc3ViSXRlbSwgb3B0aW9ucywgdXBkYXRlT25jZSwgdXBkYXRlRXZlbklmU2FtZSkgZm9yIHN1Ykl0ZW0gaW4gc3ViLmJpbmRpbmdzXG5cdFx0ZWxzZVxuXHRcdFx0aWYgbWV0YURhdGE9QHN1YnNNZXRhW3N1Yi5JRF1cblx0XHRcdFx0YWxyZWFkeUhhZFN1YiA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0c3ViLnB1YnNNYXBbQElEXSA9IEBcblx0XHRcdFx0QHN1YnMudW5zaGlmdChzdWIpXG5cdFx0XHRcdFxuXHRcdFx0XHRtZXRhRGF0YSA9IEBzdWJzTWV0YVtzdWIuSURdID0gZ2VuT2JqKClcblx0XHRcdFx0bWV0YURhdGEudXBkYXRlT25jZSA9IHVwZGF0ZU9uY2Vcblx0XHRcdFx0bWV0YURhdGEub3B0cyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpXG5cdFx0XHRcdG1ldGFEYXRhLm9wdHMudXBkYXRlRXZlbklmU2FtZSA9IHRydWUgaWYgdXBkYXRlRXZlbklmU2FtZSBvciBAdHlwZSBpcyAnRXZlbnQnIG9yIEB0eXBlIGlzICdQcm94eScgb3IgQHR5cGUgaXMgJ0FycmF5J1xuXHRcdFx0XHRtZXRhRGF0YS52YWx1ZVJlZiA9IGlmIHN1Yi50eXBlIGlzICdGdW5jJyB0aGVuICd2YWx1ZVBhc3NlZCcgZWxzZSAndmFsdWUnXG5cdFx0XHRcblx0XHRyZXR1cm4gYWxyZWFkeUhhZFN1YlxuXG5cblxuXHRyZW1vdmVTdWI6IChzdWIsIGJvdGhXYXlzKS0+XG5cdFx0aWYgc3ViLmlzTXVsdGlcblx0XHRcdEByZW1vdmVTdWIoc3ViSXRlbSwgYm90aFdheXMpIGZvciBzdWJJdGVtIGluIHN1Yi5iaW5kaW5nc1xuXHRcdGVsc2Vcblx0XHRcdGlmIEBzdWJzTWV0YVtzdWIuSURdXG5cdFx0XHRcdEBzdWJzLnNwbGljZShAc3Vicy5pbmRleE9mKHN1YiksIDEpXG5cdFx0XHRcdGRlbGV0ZSBAc3Vic01ldGFbc3ViLklEXVxuXHRcdFx0XHRkZWxldGUgc3ViLnB1YnNNYXBbQElEXVxuXG5cdFx0XHRpZiBib3RoV2F5c1xuXHRcdFx0XHRzdWIucmVtb3ZlU3ViKEApXG5cdFx0XHRcdGRlbGV0ZSBAcHVic01hcFtzdWIuSURdXG5cblx0XHRpZiBAc3Vicy5sZW5ndGggaXMgMCBhbmQgT2JqZWN0LmtleXMoQHB1YnNNYXApLmxlbmd0aCBpcyAwXG5cdFx0XHRAZGVzdHJveSgpICMgU2luY2UgaXQncyBubyBsb25nZXIgYSBzdWJzY3JpYmVyIG9yIGhhcyBhbnkgc3Vic2NyaWJlcnNcblx0XG5cdFx0cmV0dXJuXG5cblx0XG5cblx0cmVtb3ZlQWxsU3ViczogKGJvdGhXYXlzKS0+XG5cdFx0QHJlbW92ZVN1YihzdWIsIGJvdGhXYXlzKSBmb3Igc3ViIGluIEBzdWJzLnNsaWNlKClcblx0XHRyZXR1cm5cblxuXG5cblxuXHRkZXN0cm95OiAoKS0+ICMgUmVzZXRzIG9iamVjdCB0byBpbml0aWFsIHN0YXRlIChwcmUtYmluZGluZyBzdGF0ZSlcblx0XHRkZWxldGUgYm91bmRJbnN0YW5jZXNbQElEXVxuXHRcdEByZW1vdmVQb2xsSW50ZXJ2YWwoKVxuXHRcdFxuXHRcdGlmIEB0eXBlIGlzICdFdmVudCdcblx0XHRcdEB1blJlZ2lzdGVyRXZlbnQoZXZlbnQpIGZvciBldmVudCBpbiBAYXR0YWNoZWRFdmVudHNcblx0XHRcblx0XHRlbHNlIGlmIEB0eXBlIGlzICdGdW5jJ1xuXHRcdFx0ZGVsZXRlIEBvYmplY3QuX3NiX0lEXG5cblx0XHQjIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5cdFx0Y29udmVydFRvUmVnKEAsIEBvYmplY3QpIGlmIEBpc0xpdmVQcm9wIGFuZCBAb3JpZ0Rlc2NyaXB0b3Jcblx0XHRjb252ZXJ0VG9SZWcoQCwgQHZhbHVlLCB0cnVlKSBpZiBAdHlwZSBpcyAnQXJyYXknXG5cdFx0XG5cdFx0aWYgQG9iamVjdC5fc2JfbWFwXG5cdFx0XHRkZWxldGUgQG9iamVjdC5fc2JfbWFwW0BzZWxlY3Rvcl1cblx0XHRcdGRlbGV0ZSBAb2JqZWN0Ll9zYl9tYXAgaWYgT2JqZWN0LmtleXMoQG9iamVjdC5fc2JfbWFwKS5sZW5ndGggaXMgMFxuXG5cblx0XHRyZXR1cm5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgVmFsdWUgc2V0L2dldFxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0ZmV0Y2hEaXJlY3RWYWx1ZTogKCktPlxuXHRcdHR5cGUgPSBAdHlwZVxuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiB0eXBlIGlzICdGdW5jJyB0aGVuIEBvYmplY3QoKVxuXHRcdFx0XG5cdFx0XHR3aGVuIHR5cGUgaXMgJ0RPTUF0dHInIHRoZW4gQG9iamVjdC5nZXRBdHRyaWJ1dGUoQHByb3BlcnR5KSBvciAnJ1xuXG5cdFx0XHR3aGVuIEBpc011bHRpQ2hvaWNlXG5cdFx0XHRcdHJlc3VsdHMgPSBbXVxuXHRcdFx0XHRmb3IgY2hvaWNlTmFtZSxjaG9pY2VFbCBvZiBAY2hvaWNlc1xuXHRcdFx0XHRcdGlmIGNob2ljZUVsLm9iamVjdC5jaGVja2VkXG5cdFx0XHRcdFx0XHRpZiB0eXBlIGlzICdET01SYWRpbydcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNob2ljZU5hbWVcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoIGNob2ljZU5hbWVcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0c1xuXHRcdFxuXHRcdFx0ZWxzZSBAb2JqZWN0W0Bwcm9wZXJ0eV1cblx0XG5cblxuXG5cdHNldFZhbHVlOiAobmV3VmFsdWUsIHB1Ymxpc2hlciwgZnJvbVNlbGYsIGZyb21DaGFuZ2VFdmVudCktPiAjIGZyb21TZWxmPT09dHJ1ZSB3aGVuIGNhbGxlZCBmcm9tIGV2ZW50VXBkYXRlSGFuZGxlciBvciBwcm9wZXJ0eSBkZXNjcmlwdG9yIHNldHRlciAodW5sZXNzIGl0J3MgYW4gQXJyYXkgYmluZGluZylcblx0XHRwdWJsaXNoZXIgfHw9IEBcblx0XHRuZXdWYWx1ZSA9IEBzZWxmVHJhbnNmb3JtKG5ld1ZhbHVlKSBpZiBAc2VsZlRyYW5zZm9ybVxuXHRcdFxuXHRcdHVubGVzcyBmcm9tU2VsZiB0aGVuIHN3aXRjaCBAdHlwZVxuXHRcdFx0d2hlbiAnT2JqZWN0UHJvcCdcblx0XHRcdFx0aWYgbm90IEBpc0xpdmVQcm9wXG5cdFx0XHRcdFx0QG9iamVjdFtAcHJvcGVydHldID0gbmV3VmFsdWUgaWYgbmV3VmFsdWUgaXNudCBAdmFsdWVcblx0XHRcdFx0aW1wb3J0SW5saW5lICcuL3Byb3RvdHlwZS5zZXRWYWx1ZS1PYmplY3RQcm9wLURPTVZhbHVlJ1xuXHRcdFx0XHRlbHNlIGlmIEBvcmlnU2V0dGVyXG5cdFx0XHRcdFx0QG9yaWdTZXR0ZXIobmV3VmFsdWUpXG5cblxuXHRcdFx0d2hlbiAnUGhvbGRlcidcblx0XHRcdFx0cGFyZW50ID0gQHBhcmVudEJpbmRpbmdcblx0XHRcdFx0cGFyZW50LnBob2xkZXJWYWx1ZXNbQHBob2xkZXJdID0gbmV3VmFsdWVcblx0XHRcdFx0ZW50aXJlVmFsdWUgPSBhcHBseVBsYWNlaG9sZGVycyhwYXJlbnQucGhvbGRlckNvbnRleHRzLCBwYXJlbnQucGhvbGRlclZhbHVlcywgcGFyZW50LnBob2xkZXJJbmRleE1hcClcblxuXHRcdFx0XHRpZiBAdGV4dE5vZGVzIGFuZCBuZXdWYWx1ZSBpc250IEB2YWx1ZVxuXHRcdFx0XHRcdGZvciB0ZXh0Tm9kZSBpbiBAdGV4dE5vZGVzXG5cdFx0XHRcdFx0XHR0ZXh0Tm9kZVt0ZXh0Q29udGVudF0gPSBuZXdWYWx1ZVxuXHRcdFx0XHRcblx0XHRcdFx0cGFyZW50LnNldFZhbHVlKGVudGlyZVZhbHVlLCBwdWJsaXNoZXIpIHVubGVzcyBAcHJvcGVydHkgaXMgdGV4dENvbnRlbnRcblx0XHRcdFx0XG5cblxuXHRcdFx0d2hlbiAnQXJyYXknXG5cdFx0XHRcdGlmIG5ld1ZhbHVlIGlzbnQgQHZhbHVlXG5cdFx0XHRcdFx0bmV3VmFsdWUgPSBBcnJheTo6Y29uY2F0KG5ld1ZhbHVlKSBpZiBub3QgY2hlY2tJZi5pc0FycmF5KG5ld1ZhbHVlKVxuXHRcdFx0XHRcdGNvbnZlcnRUb1JlZyhALCBAdmFsdWUsIHRydWUpXG5cdFx0XHRcdFx0Y29udmVydFRvTGl2ZShALCBuZXdWYWx1ZT1uZXdWYWx1ZS5zbGljZSgpLCB0cnVlKVxuXHRcdFx0XHRcdEBvcmlnU2V0dGVyKG5ld1ZhbHVlKSBpZiBAb3JpZ1NldHRlciAjIFdpbGwgdXBkYXRlIGFueSBvdGhlciBwcmV2aW91cyBub24tQXJyYXkgYmluZGluZ3MgdG8gdGhlIHNhbWUgb2JqZWN0IHByb3BlcnR5XG5cblxuXHRcdFx0d2hlbiAnRnVuYydcblx0XHRcdFx0cHJldlZhbHVlID0gQHZhbHVlUGFzc2VkXG5cdFx0XHRcdEB2YWx1ZVBhc3NlZCA9IG5ld1ZhbHVlXG5cdFx0XHRcdG5ld1ZhbHVlID0gQG9iamVjdChuZXdWYWx1ZSwgcHJldlZhbHVlKVxuXG5cdFx0XHR3aGVuICdFdmVudCdcblx0XHRcdFx0QGlzRW1pdHRlciA9IHRydWVcblx0XHRcdFx0QGVtaXRFdmVudChuZXdWYWx1ZSlcblx0XHRcdFx0QGlzRW1pdHRlciA9IGZhbHNlXG5cdFx0XG5cdFx0XHRpbXBvcnRJbmxpbmUgJy4vcHJvdG90eXBlLnNldFZhbHVlLURPTVR5cGVzJ1xuXHRcdFxuXHRcdEB2YWx1ZSA9IG5ld1ZhbHVlXG5cdFx0QHVwZGF0ZUFsbFN1YnMocHVibGlzaGVyKVxuXG5cdFx0cmV0dXJuXG5cblxuXG5cblxuXHR1cGRhdGVBbGxTdWJzOiAocHVibGlzaGVyKS0+IGlmIGk9KGFycj1Ac3VicykubGVuZ3RoICMgVWdseSBzaG9ydGN1dCBmb3IgaW5kZXggZGVmaW5pdGlvbiBpbiBvcmRlciB0byBsaW1pdCBsb2dpYyByZXBpdGlpb25cblx0XHRAdXBkYXRlU3ViKGFycltpXSwgcHVibGlzaGVyKSB3aGlsZSBpLS1cblx0XHRyZXR1cm5cblxuXG5cblx0XHRcdFxuXG5cdHVwZGF0ZVN1YjogKHN1YiwgcHVibGlzaGVyLCBpc0RlbGF5ZWRVcGRhdGUpLT5cblx0XHRyZXR1cm4gaWYgKHB1Ymxpc2hlciBpcyBzdWIpIG9yIChwdWJsaXNoZXIgaXNudCBAIGFuZCBwdWJsaXNoZXIuc3Vic01ldGFbc3ViLklEXSkgIyBpbmRpY2F0ZXMgdGhpcyBpcyBhbiBpbmZpbml0ZSBsb29wXG5cdFx0bWV0YSA9IEBzdWJzTWV0YVtzdWIuSURdXG5cblx0XHRpZiBtZXRhLmRpc2FsbG93TGlzdCBhbmQgbWV0YS5kaXNhbGxvd0xpc3RbcHVibGlzaGVyLklEXVxuXHRcdFx0cmV0dXJuXG5cblx0XHRpZiBtZXRhLm9wdHMudGhyb3R0bGVcblx0XHRcdGN1cnJlbnRUaW1lID0gKyhuZXcgRGF0ZSlcblx0XHRcdHRpbWVQYXNzZWQgPSBjdXJyZW50VGltZSAtIG1ldGEubGFzdFVwZGF0ZVxuXHRcdFx0XG5cdFx0XHRpZiB0aW1lUGFzc2VkIDwgbWV0YS5vcHRzLnRocm90dGxlXG5cdFx0XHRcdGNsZWFyVGltZW91dChtZXRhLnVwZGF0ZVRpbWVyKVxuXHRcdFx0XHRyZXR1cm4gbWV0YS51cGRhdGVUaW1lciA9XG5cdFx0XHRcdFx0c2V0VGltZW91dCAoKT0+XG5cdFx0XHRcdFx0XHRAdXBkYXRlU3ViKHN1YiwgcHVibGlzaGVyKSBpZiBAc3Vic01ldGFbc3ViLklEXVxuXHRcdFx0XHRcdCwgbWV0YS5vcHRzLnRocm90dGxlLXRpbWVQYXNzZWRcblx0XHRcdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRtZXRhLmxhc3RVcGRhdGUgPSBjdXJyZW50VGltZVxuXG5cdFx0ZWxzZSBpZiBtZXRhLm9wdHMuZGVsYXkgYW5kIG5vdCBpc0RlbGF5ZWRVcGRhdGVcblx0XHRcdHJldHVybiBzZXRUaW1lb3V0ICgpPT5cblx0XHRcdFx0QHVwZGF0ZVN1YihzdWIsIHB1Ymxpc2hlciwgdHJ1ZSkgaWYgQHN1YnNNZXRhW3N1Yi5JRF1cblx0XHRcdCwgbWV0YS5vcHRzLmRlbGF5XG5cblxuXHRcdG5ld1ZhbHVlID0gaWYgQHR5cGUgaXMgJ0FycmF5JyBhbmQgbWV0YS5vcHRzLnNlbmRBcnJheUNvcGllcyB0aGVuIEB2YWx1ZS5zbGljZSgpIGVsc2UgQHZhbHVlXG5cdFx0c3ViVmFsdWUgPSBzdWJbbWV0YS52YWx1ZVJlZl1cblx0XHRuZXdWYWx1ZSA9IGlmIHRyYW5zZm9ybT1tZXRhLnRyYW5zZm9ybUZuIHRoZW4gdHJhbnNmb3JtKG5ld1ZhbHVlLCBzdWJWYWx1ZSwgc3ViLm9iamVjdCkgZWxzZSBuZXdWYWx1ZVxuXG5cdFx0cmV0dXJuIGlmIG5ld1ZhbHVlIGlzIHN1YlZhbHVlIGFuZCBub3QgbWV0YS5vcHRzLnVwZGF0ZUV2ZW5JZlNhbWUgb3Jcblx0XHRcdG1ldGEuY29uZGl0aW9uRm4gYW5kIG5vdCBtZXRhLmNvbmRpdGlvbkZuKG5ld1ZhbHVlLCBzdWJWYWx1ZSwgc3ViLm9iamVjdClcblxuXHRcdCMgV2h5IGRvIHdlIG5lZWQgdGhlICdwcm9taXNlVHJhbnNmb3Jtcycgb3B0aW9uIHdoZW4gd2UgY2FuIGp1c3QgY2hlY2sgZm9yIHRoZSBleGlzdGFuY2Ugb2YgLnRoZW4gbWV0aG9kP1xuXHRcdCMgQmVjYXVzZSB0ZXN0cyBzaG93IHRoYXQgd2hlbiBzZWFyY2hpbmcgZm9yIHRoZSAudGhlbiBwcm9wIG9uIHRoZSBvYmplY3QgcmVzdWx0cyBpbiBhIHBlcmZvcm1hbmNlIHNsb3dkb3duIG9mIHVwIHRvIDMwJSFcblx0XHQjIENoZWNraW5nIGlmIHRoZSBwcm9taXNlVHJhbnNmb3JtcyBvcHRpb24gaXMgZW5hYmxlZCBmaXJzdCBlbGltaW5hdGVzIHVubmVjZXNzYXJ5IGxvb2t1cHMgJiBzbG93ZG93bnMuXG5cdFx0aWYgbWV0YS5vcHRzLnByb21pc2VUcmFuc2Zvcm1zIGFuZCBuZXdWYWx1ZSBhbmQgY2hlY2tJZi5pc0Z1bmN0aW9uKG5ld1ZhbHVlLnRoZW4pXG5cdFx0XHRuZXdWYWx1ZS50aGVuIChuZXdWYWx1ZSktPiBzdWIuc2V0VmFsdWUobmV3VmFsdWUsIHB1Ymxpc2hlcik7IHJldHVyblxuXHRcdGVsc2Vcblx0XHRcdHN1Yi5zZXRWYWx1ZShuZXdWYWx1ZSwgcHVibGlzaGVyKVxuXG5cdFx0QHJlbW92ZVN1YihzdWIpIGlmIG1ldGEudXBkYXRlT25jZVxuXHRcdHJldHVyblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFRyYW5zZm9ybXMgJiBDb25kaXRpb25zXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGFkZE1vZGlmaWVyRm46ICh0YXJnZXQsIHN1YkludGVyZmFjZXMsIHN1YmplY3RGbiwgdXBkYXRlT25CaW5kKS0+XG5cdFx0aWYgbm90IGNoZWNrSWYuaXNGdW5jdGlvbihzdWJqZWN0Rm4pXG5cdFx0XHR0aHJvd1dhcm5pbmcoJ2ZuT25seScsMilcblxuXHRcdGVsc2Vcblx0XHRcdGZvciBzdWJJbnRlcmZhY2UgaW4gc3ViSW50ZXJmYWNlc1xuXHRcdFx0XHRzdWJzY3JpYmVyID0gc3ViSW50ZXJmYWNlLl8gb3Igc3ViSW50ZXJmYWNlICMgU2Vjb25kIGlzIGNob3NlbiB3aGVuIHRoZSBwYXNzZWQgc3Vic2NyaWJlciBpbnRlcmZhY2VzIG11bHRpLWJpbmRpbmcgKGlzIGEgcmVjdXJzaXZlIGNhbGwgb2YgdGhpcyBtZXRob2QpXG5cblx0XHRcdFx0aWYgc3Vic2NyaWJlci5pc011bHRpXG5cdFx0XHRcdFx0QGFkZE1vZGlmaWVyRm4odGFyZ2V0LCBzdWJzY3JpYmVyLmJpbmRpbmdzLCBzdWJqZWN0Rm4sIHVwZGF0ZU9uQmluZClcblx0XHRcdFx0XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdWJNZXRhRGF0YSA9IEBzdWJzTWV0YVtzdWJzY3JpYmVyLklEXVxuXHRcdFx0XHRcdHN1Yk1ldGFEYXRhW3RhcmdldF0gPSBzdWJqZWN0Rm5cblx0XHRcdFx0XHR1cGRhdGVPbkJpbmQgPSB1cGRhdGVPbkJpbmQgYW5kIG5vdCBzdWJNZXRhRGF0YS51cGRhdGVPbmNlXG5cblx0XHRcdFx0XHRpZiBAcHVic01hcFtzdWJzY3JpYmVyLklEXVxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlci5zdWJzTWV0YVtASURdW3RhcmdldF0gfHw9IHN1YmplY3RGbiAjIFdpbGwgbm90IHJlcGxhY2UgZXhpc3RpbmcgbW9kaWZpZXIgZnVuY3Rpb24gaWYgZXhpc3RzXG5cblx0XHRcdFx0XHRAdXBkYXRlU3ViKHN1YnNjcmliZXIsIEApIGlmICh1cGRhdGVPbkJpbmQgb3IgQHR5cGUgaXMgJ0Z1bmMnKSBhbmQgdGFyZ2V0IGlzICd0cmFuc2Zvcm1GbidcblxuXHRcdFx0cmV0dXJuIHRydWVcblxuXG5cblx0c2V0U2VsZlRyYW5zZm9ybTogKHRyYW5zZm9ybUZuLCB1cGRhdGVPbkJpbmQpLT5cblx0XHRAc2VsZlRyYW5zZm9ybSA9IHRyYW5zZm9ybUZuXG5cdFx0QHNldFZhbHVlKEB2YWx1ZSkgaWYgdXBkYXRlT25CaW5kXG5cdFx0cmV0dXJuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgQWxsb3cvRGlzYWxsb3cgcnVsZXNcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGFkZERpc2FsbG93UnVsZTogKHRhcmdldFN1YiwgdGFyZ2V0RGlzYWxsb3cpLT5cblx0XHRkaXNhbGxvd0xpc3QgPSBAc3Vic01ldGFbdGFyZ2V0U3ViLklEXS5kaXNhbGxvd0xpc3QgPz0gZ2VuT2JqKClcblx0XHRkaXNhbGxvd0xpc3RbdGFyZ2V0RGlzYWxsb3cuSURdID0gMVxuXHRcdHJldHVyblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFBsYWNlaG9sZGVyc1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0c2NhbkZvclBob2xkZXJzOiAoKS0+IHVubGVzcyBAcGhvbGRlclZhbHVlc1xuXHRcdEBwaG9sZGVyVmFsdWVzID0gZ2VuT2JqKClcblx0XHRAcGhvbGRlckluZGV4TWFwID0gZ2VuT2JqKClcblx0XHRAcGhvbGRlckNvbnRleHRzID0gW11cblxuXHRcdGlmIGNoZWNrSWYuaXNTdHJpbmcoQHZhbHVlKVxuXHRcdFx0QHBob2xkZXJDb250ZXh0cyA9IEB2YWx1ZS5zcGxpdCBwaG9sZGVyUmVnRXhTcGxpdFxuXHRcdFx0XG5cdFx0XHRpbmRleCA9IDBcblx0XHRcdEB2YWx1ZSA9IEB2YWx1ZS5yZXBsYWNlIHBob2xkZXJSZWdFeCwgKGUsIHBob2xkZXIpPT5cblx0XHRcdFx0QHBob2xkZXJJbmRleE1hcFtpbmRleCsrXSA9IHBob2xkZXJcblx0XHRcdFx0QHBob2xkZXJWYWx1ZXNbcGhvbGRlcl0gPSBwaG9sZGVyXG5cdFx0XG5cdFx0c2NhblRleHROb2Rlc1BsYWNlaG9sZGVycyhAb2JqZWN0LCBAdGV4dE5vZGVzPWdlbk9iaigpKSBpZiBAaXNEb20gYW5kIEBwcm9wZXJ0eSBpcyB0ZXh0Q29udGVudFxuXHRcdHJldHVyblxuXHRcblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBQb2xsaW5nXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRhZGRQb2xsSW50ZXJ2YWw6ICh0aW1lKS0+IGlmIEB0eXBlIGlzbnQgJ0V2ZW50J1xuXHRcdEByZW1vdmVQb2xsSW50ZXJ2YWwoKVxuXHRcdFxuXHRcdEBwb2xsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCAoKT0+XG5cdFx0XHRwb2xsZWRWYWx1ZSA9IEBmZXRjaERpcmVjdFZhbHVlKClcblxuXHRcdFx0QHNldFZhbHVlIHBvbGxlZFZhbHVlLCBALCB0cnVlXG5cdFx0LCB0aW1lXG5cblxuXHRyZW1vdmVQb2xsSW50ZXJ2YWw6ICgpLT5cblx0XHRjbGVhckludGVydmFsKEBwb2xsSW50ZXJ2YWwpXG5cdFx0QHBvbGxJbnRlcnZhbCA9IG51bGxcblxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBFdmVudHNcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFxuXHRhZGRVcGRhdGVMaXN0ZW5lcjogKGV2ZW50TmFtZSwgdGFyZ2V0UHJvcGVydHkpLT5cblx0XHRAb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIgZXZlbnROYW1lLCAoZXZlbnQpPT5cblx0XHRcdHVubGVzcyBldmVudC5fc2Jcblx0XHRcdFx0c2hvdWxkUmVkZWZpbmVWYWx1ZSA9IEBzZWxmVHJhbnNmb3JtIGFuZCBAaXNEb21JbnB1dFxuXHRcdFx0XHRAc2V0VmFsdWUoQG9iamVjdFt0YXJnZXRQcm9wZXJ0eV0sIG51bGwsICFzaG91bGRSZWRlZmluZVZhbHVlLCB0cnVlKVxuXG5cdFx0XHRyZXR1cm5cblx0XHRcblx0XHQsIGZhbHNlXG5cdFx0cmV0dXJuXG5cdFxuXG5cdGF0dGFjaEV2ZW50czogKCktPlxuXHRcdGlmIEBldmVudE5hbWVcblx0XHRcdEByZWdpc3RlckV2ZW50KEBldmVudE5hbWUpXG5cdFx0XG5cdFx0ZWxzZSBpZiBAaXNEb21JbnB1dFxuXHRcdFx0QGFkZFVwZGF0ZUxpc3RlbmVyKCdpbnB1dCcsICd2YWx1ZScpXG5cdFx0XHRAYWRkVXBkYXRlTGlzdGVuZXIoJ2NoYW5nZScsICd2YWx1ZScpXG5cblx0XHRlbHNlIGlmIG5vdCBAaXNNdWx0aUNob2ljZSBhbmQgKEB0eXBlIGlzICdET01SYWRpbycgb3IgQHR5cGUgaXMgJ0RPTUNoZWNrYm94Jylcblx0XHRcdEBhZGRVcGRhdGVMaXN0ZW5lcignY2hhbmdlJywgJ2NoZWNrZWQnKVxuXG5cdFx0cmV0dXJuXG5cdFxuXG5cblx0cmVnaXN0ZXJFdmVudDogKGV2ZW50TmFtZSktPlxuXHRcdEBhdHRhY2hlZEV2ZW50cy5wdXNoKGV2ZW50TmFtZSlcblx0XHRAZXZlbnRIYW5kbGVyID0gZXZlbnRVcGRhdGVIYW5kbGVyLmJpbmQoQCkgdW5sZXNzIEBldmVudEhhbmRsZXJcblx0XHRcblx0XHRAb2JqZWN0W0BldmVudE1ldGhvZHMubGlzdGVuXShldmVudE5hbWUsIEBldmVudEhhbmRsZXIpXG5cdFx0cmV0dXJuXG5cblxuXG5cdHVuUmVnaXN0ZXJFdmVudDogKGV2ZW50TmFtZSktPlxuXHRcdEBhdHRhY2hlZEV2ZW50cy5zcGxpY2UgQGF0dGFjaGVkRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSwgMVxuXG5cdFx0QG9iamVjdFtAZXZlbnRNZXRob2RzLnJlbW92ZV0oZXZlbnROYW1lLCBAZXZlbnRIYW5kbGVyKVxuXHRcdHJldHVyblxuXG5cblxuXHRlbWl0RXZlbnQ6IChleHRyYURhdGEpLT5cblx0XHRldmVudE9iamVjdCA9IEBldmVudE5hbWVcblx0XHRcblx0XHRpZiBAZXZlbnRNZXRob2RzLmVtaXQgaXMgJ2Rpc3BhdGNoRXZlbnQnXG5cdFx0XHR1bmxlc3MgQGV2ZW50T2JqZWN0XG5cdFx0XHRcdEBldmVudE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG5cdFx0XHRcdEBldmVudE9iamVjdC5pbml0RXZlbnQoQGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSlcblxuXHRcdFx0QGV2ZW50T2JqZWN0LmJpbmRpbmdEYXRhID0gZXh0cmFEYXRhXG5cdFx0XHRldmVudE9iamVjdCA9IEBldmVudE9iamVjdFxuXG5cdFx0QG9iamVjdFtAZXZlbnRNZXRob2RzLmVtaXRdKGV2ZW50T2JqZWN0LCBleHRyYURhdGEpXG5cdFx0cmV0dXJuXG5cblxuXG5cbmV2ZW50VXBkYXRlSGFuZGxlciA9ICgpLT4gdW5sZXNzIEBpc0VtaXR0ZXJcblx0QHNldFZhbHVlKGFyZ3VtZW50c1tAcHJvcGVydHldLCBudWxsLCB0cnVlKVxuXHRyZXR1cm5cblxuXG5cblxuXG4iLCJlbHNlIGlmIEBpc0RvbUlucHV0XG5cdGlmIG5vdCBmcm9tQ2hhbmdlRXZlbnRcblx0XHRAb3JpZ1NldHRlcihuZXdWYWx1ZSlcblx0XHRAb2JqZWN0LmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQoKSkgaWYgc2V0dGluZ3MuZGlzcGF0Y2hFdmVudHNcblx0XG5cdGVsc2UgaWYgbmV3VmFsdWUgaXNudCBAb3JpZ0dldHRlcigpICMgSU1QTElDSVQ6IGFuZCBmcm9tQ2hhbmdlRXZlbnRcblx0XHRwcmV2Q3Vyc3JvciA9IEBvYmplY3Quc2VsZWN0aW9uU3RhcnRcblx0XHRAb3JpZ1NldHRlcihuZXdWYWx1ZSlcblx0XHRAb2JqZWN0LnNldFNlbGVjdGlvblJhbmdlKHByZXZDdXJzcm9yLCBwcmV2Q3Vyc3JvcikgaWYgcHJldkN1cnNyb3IiLCJ3aGVuICdET01SYWRpbydcblx0aWYgQGlzTXVsdGlDaG9pY2UgIyBUaGUgbmV3VmFsdWUgdmFyIHdpbGwgaG9sZCB0aGUgcmFkaW8gZmllbGQgYmluZGluZyBhcyBpdHMgdmFsdWUgaWYgdGhlIHVwZGF0ZSBpcyBjb21pbmcgZnJvbSB0aGUgcmFkaW8gZmllbGQncyBjaGFuZ2UgZXZlbnRcblx0XHR0YXJnZXRDaG9pY2VCaW5kaW5nID0gaWYgY2hlY2tJZi5pc0JpbmRpbmcobmV3VmFsdWUpIHRoZW4gbmV3VmFsdWUgZWxzZSBAY2hvaWNlc1tuZXdWYWx1ZV1cblxuXHRcdGlmIHRhcmdldENob2ljZUJpbmRpbmdcblx0XHRcdG5ld1ZhbHVlID0gdGFyZ2V0Q2hvaWNlQmluZGluZy5vYmplY3QudmFsdWVcblx0XHRcblx0XHRcdGZvciBuLGNob2ljZUJpbmRpbmcgb2YgQGNob2ljZXNcblx0XHRcdFx0Y2hvaWNlQmluZGluZy5zZXRWYWx1ZShjaG9pY2VCaW5kaW5nLklEIGlzIHRhcmdldENob2ljZUJpbmRpbmcuSUQsIHB1Ymxpc2hlcilcblx0XHRlbHNlXG5cdFx0XHRuZXdWYWx1ZSA9IEB2YWx1ZSAjIFNldCB0byBwcmV2IHZhbHVlXG5cdFxuXHRlbHNlXG5cdFx0bmV3VmFsdWUgPSAhIW5ld1ZhbHVlICMgQ29udmVydCB0byBCb29sZWFuXG5cdFx0cmV0dXJuIGlmIG5ld1ZhbHVlIGlzIEB2YWx1ZVxuXHRcdEBvYmplY3QuY2hlY2tlZCA9IG5ld1ZhbHVlIHVubGVzcyBAb2JqZWN0LmNoZWNrZWQgaXMgbmV3VmFsdWVcblx0XHRAb2JqZWN0LmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQoKSkgaWYgbmV3VmFsdWUgYW5kIHNldHRpbmdzLmRpc3BhdGNoRXZlbnRzICMgT25seSBlbWl0IGlmIHRoZSB2YWx1ZSBpcyB0cnVlIChpbiBvcmRlciB0byBjb25mb3JtIHRvIHdlYiBzdGFuZGFyZHMpXG5cblxud2hlbiAnRE9NQ2hlY2tib3gnXG5cdGlmIEBpc011bHRpQ2hvaWNlICMgVGhlIG5ld1ZhbHVlIHZhciB3aWxsIGhvbGQgdGhlIGNoZWNrYm94IGZpZWxkIGJpbmRpbmcgYXMgaXRzIHZhbHVlIGlmIHRoZSB1cGRhdGUgaXMgY29taW5nIGZyb20gdGhlIGNoZWNrYm94IGZpZWxkJ3MgY2hhbmdlIGV2ZW50XG5cdFx0b3ZlcndyaXRlUHJldmlvdXMgPSBub3QgY2hlY2tJZi5pc0JpbmRpbmcobmV3VmFsdWUpICMgTWVhbnMgdGhhdCBhIG5ldyBhcnJheSB3YXMgc3VwcGxpZWRcblx0XHRuZXdDaG9pY2VzID0gW10uY29uY2F0KG5ld1ZhbHVlKSAjIFRoaXMgKm5vcm1hbGl6ZXMqIHRoZSBuZXcgdmFsdWUgaW50byBhbiBhcnJheVxuXHRcdFxuXHRcdGZvciB2YWx1ZSxpbmRleCBpbiBuZXdDaG9pY2VzXG5cdFx0XHRuZXdDaG9pY2VzW2luZGV4XSA9IGlmIGNoZWNrSWYuaXNCaW5kaW5nKHZhbHVlKSB0aGVuIHZhbHVlIGVsc2UgQGNob2ljZXNbdmFsdWVdXG5cdFx0XG5cdFx0bmV3VmFsdWVBcnJheSA9IFtdXG5cdFx0Zm9yIGNob2ljZU5hbWUsY2hvaWNlQmluZGluZyBvZiBAY2hvaWNlc1xuXHRcdFx0aWYgb3ZlcndyaXRlUHJldmlvdXNcblx0XHRcdFx0bmV3Q2hvaWNlVmFsdWUgPSB0YXJnZXRJbmNsdWRlcyhuZXdDaG9pY2VzLCBjaG9pY2VCaW5kaW5nKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRuZXdDaG9pY2VWYWx1ZSA9IGNob2ljZUJpbmRpbmcudmFsdWVcblx0XHRcdFxuXHRcdFx0Y2hvaWNlQmluZGluZy5zZXRWYWx1ZShuZXdDaG9pY2VWYWx1ZSwgcHVibGlzaGVyKVxuXHRcdFx0bmV3VmFsdWVBcnJheS5wdXNoKGNob2ljZU5hbWUpIGlmIG5ld0Nob2ljZVZhbHVlXG5cblx0XHRuZXdWYWx1ZSA9IG5ld1ZhbHVlQXJyYXlcblxuXG5cdGVsc2Vcblx0XHRuZXdWYWx1ZSA9ICEhbmV3VmFsdWUgIyBDb252ZXJ0IHRvIEJvb2xlYW5cblx0XHRyZXR1cm4gaWYgbmV3VmFsdWUgaXMgQHZhbHVlXG5cdFx0dW5sZXNzIEBvYmplY3QuY2hlY2tlZCBpcyBuZXdWYWx1ZVxuXHRcdFx0QG9iamVjdC5jaGVja2VkID0gbmV3VmFsdWVcblx0XHRcdEBvYmplY3QuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCgpKSBpZiBzZXR0aW5ncy5kaXNwYXRjaEV2ZW50c1xuXG5cblxud2hlbiAnRE9NQXR0cidcblx0QG9iamVjdC5zZXRBdHRyaWJ1dGUoQHByb3BlcnR5LCBuZXdWYWx1ZSlcbiIsIiMjIypcbiAqIFN0YWdlIGRlZmluaXRpb25zOlxuICogXG4gKiAwOiBTZWxlY3Rpb246XHRcdFx0R290IHNlbGVjdG9yLCBhd2FpdGluZyBvYmplY3QuXG4gKiAxOiBJbmRpY2F0aW9uOlx0XHRcdEdvdCBvYmplY3QsIGF3YWl0aW5nIHByb3hpZWQgcHJvcGVydHkgLyBmdW5jdGlvbiAvIEJpbmRpbmctb2JqZWN0LlxuICogMjogQmluZGluZyBDb21wbGV0ZTpcdFx0Q29tcGxldGUsIGF3YWl0aW5nIGFkZGl0aW9uYWwgKG9wdGlvbmFsKSBiaW5kaW5ncy9tdXRhdGlvbnMuXG4jIyNcbkJpbmRpbmdJbnRlcmZhY2UgPSAob3B0aW9ucywgaW5oZXJpdGVkU3RhdGUpLT5cblx0aWYgaW5oZXJpdGVkU3RhdGVcblx0XHRleHRlbmRTdGF0ZShALCBpbmhlcml0ZWRTdGF0ZSlcblx0XHRAc3RhZ2UgPSAxXG5cdGVsc2Vcblx0XHRAc3RhZ2UgPSAwXG5cdFx0QHN1YnMgPSBbXVxuXHRcdEBvcHRpb25zUGFzc2VkID0gb3B0aW9ucyB8fD0ge31cblx0XHRAb3B0aW9ucyA9IHt9XG5cdFx0Zm9yIGtleSBvZiBkZWZhdWx0T3B0aW9uc1xuXHRcdFx0QG9wdGlvbnNba2V5XSA9IGlmIG9wdGlvbnNba2V5XT8gdGhlbiBvcHRpb25zW2tleV0gZWxzZSBkZWZhdWx0T3B0aW9uc1trZXldXG5cdFxuXHRyZXR1cm4gQFx0XHRcdFxuXHRcblxuXG5cbmltcG9ydCAnLi9wcm90b3R5cGUtcHJpdmF0ZSdcbmltcG9ydCAnLi9wcm90b3R5cGUtcHVibGljJyIsIkJpbmRpbmdJbnRlcmZhY2VQcml2YXRlID1cblx0c2VsZkNsb25lOiAoKS0+IG5ldyBCaW5kaW5nSW50ZXJmYWNlKG51bGwsIEApXG5cdFxuXHRkZWZpbmVNYWluUHJvcHM6IChiaW5kaW5nKS0+XG5cdFx0QF8gPSBiaW5kaW5nXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMgQCxcblx0XHRcdCd2YWx1ZSc6XHRcdGdldDogKCktPiBiaW5kaW5nLnZhbHVlXG5cdFx0XHQnb3JpZ2luYWwnOlx0XHRnZXQ6ICgpLT4gYmluZGluZy5vYmplY3RzIG9yIGJpbmRpbmcub2JqZWN0XG5cdFx0XHQnc3Vic2NyaWJlcnMnOlx0Z2V0OiAoKS0+IGJpbmRpbmcuc3Vicy5zbGljZSgpLm1hcCAoc3ViKS0+IHN1Yi5vYmplY3RcblxuXG5cblxuXHRjcmVhdGVCaW5kaW5nOiAoc3ViamVjdCwgbmV3T2JqZWN0VHlwZSwgYmluZGluZ0ludGVyZmFjZSwgaXNGdW5jdGlvbiktPlxuXHRcdEBvYmplY3QgPSBzdWJqZWN0XG5cdFx0Y2FjaGVkQmluZGluZyA9IGNhY2hlLmdldChzdWJqZWN0LCBpc0Z1bmN0aW9uLCBAc2VsZWN0b3IsIEBpc011bHRpQ2hvaWNlKVxuXHRcdFxuXHRcdGlmIGNhY2hlZEJpbmRpbmcgIyBFeGl0IGVhcmx5IGJ5IHJldHVybmluZyB0aGUgc3ViamVjdCBmcm9tIGNhY2hlIGlmIGlzIGFscmVhZHkgaW4gdGhlcmVcblx0XHRcdHJldHVybiBAcGF0Y2hDYWNoZWRCaW5kaW5nKGNhY2hlZEJpbmRpbmcpXG5cblx0XHRlbHNlXG5cdFx0XHRuZXdCaW5kaW5nID0gbmV3IEJpbmRpbmcoc3ViamVjdCwgbmV3T2JqZWN0VHlwZSwgYmluZGluZ0ludGVyZmFjZSlcblx0XHRcdGNhY2hlLnNldChuZXdCaW5kaW5nLCBpc0Z1bmN0aW9uKVxuXHRcdFx0cmV0dXJuIG5ld0JpbmRpbmdcblxuXG5cblx0cGF0Y2hDYWNoZWRCaW5kaW5nOiAoY2FjaGVkQmluZGluZyktPlxuXHRcdGlmIGNhY2hlZEJpbmRpbmcudHlwZSBpcyAnT2JqZWN0UHJvcCcgYW5kIEBwcm9wZXJ0eSBub3Qgb2YgQG9iamVjdCAjIFRoaXMgcHJvcGVydHkgd2FzIG1hbnVhbGx5IGRlbGV0ZWQgYW5kIG5lZWRzIGl0cyBwcm9wIHRvIGJlIHJlLWRlZmluZWQgYXMgYSBsaXZlIG9uZVxuXHRcdFx0Y29udmVydFRvTGl2ZShjYWNoZWRCaW5kaW5nLCBAb2JqZWN0KVxuXG5cdFx0aWYgQHNhdmVPcHRpb25zXG5cdFx0XHRjYWNoZWRCaW5kaW5nLm9wdGlvbnNEZWZhdWx0W29wdGlvbl0gPSB2YWx1ZSBmb3Igb3B0aW9uLHZhbHVlIG9mIEBvcHRpb25zUGFzc2VkXG5cblx0XHRmb3Iga2V5LHZhbHVlIG9mIGNhY2hlZEJpbmRpbmcub3B0aW9uc0RlZmF1bHRcblx0XHRcdEBvcHRpb25zW2tleV0gPSBpZiBjaGVja0lmLmlzRGVmaW5lZChAb3B0aW9uc1Bhc3NlZFtrZXldKSB0aGVuIEBvcHRpb25zUGFzc2VkW2tleV0gZWxzZSB2YWx1ZVxuXHRcdFxuXHRcdHJldHVybiBjYWNoZWRCaW5kaW5nXG5cblxuXG5cdHNldFByb3BlcnR5OiAoc3ViamVjdCktPlxuXHRcdHN1YmplY3QgPSBzdWJqZWN0LnRvU3RyaW5nKCkgaWYgY2hlY2tJZi5pc051bWJlcihzdWJqZWN0KVxuXHRcdEBzZWxlY3RvciA9IEBwcm9wZXJ0eSA9IHN1YmplY3RcblxuXHRcdFxuXHRcdHVubGVzcyBAb3B0aW9ucy5zaW1wbGVTZWxlY3RvclxuXHRcdFx0aWYgdGFyZ2V0SW5jbHVkZXMoc3ViamVjdCwgJzonKVxuXHRcdFx0XHRzcGxpdCA9IHN1YmplY3Quc3BsaXQoJzonKVxuXHRcdFx0XHRAZGVzY3JpcHRvciA9IHNwbGl0LnNsaWNlKDAsIC0xKS5qb2luKCc6Jylcblx0XHRcdFx0QHByb3BlcnR5ID0gc3BsaXRbc3BsaXQubGVuZ3RoLTFdXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgdGFyZ2V0SW5jbHVkZXMoc3ViamVjdCwgJy4nKSAjIFBsYWNlaG9sZGVyIGV4dHJhY3Rpb25cblx0XHRcdFx0c3BsaXQgPSBAcHJvcGVydHkuc3BsaXQoJy4nKSAjIFdlIHVzZSAnQHByb3BlcnR5JyBpbnN0ZWFkIG9mICdzdWJqZWN0JyBiZWNhdXNlIGl0IG1heSBoYXZlIGJlZW4gbW9kaWZpZWQgYnkgdGhlIHByZXZpb3VzICc6JyBkZXNjcmlwdG9yIGNoZWNrXG5cdFx0XHRcdEBwcm9wZXJ0eSA9IHNwbGl0WzBdXHRcdFx0XHRcblx0XHRcdFx0QHBob2xkZXIgPSBzcGxpdC5zbGljZSgxKS5qb2luKCcuJylcblxuXG5cblx0XHRcdGlmIHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnZXZlbnQnKVxuXHRcdFx0XHRpZiB0YXJnZXRJbmNsdWRlcyhzdWJqZWN0LCAnIycpXG5cdFx0XHRcdFx0c3BsaXQgPSBAcHJvcGVydHkuc3BsaXQoJyMnKVxuXHRcdFx0XHRcdEBldmVudE5hbWUgPSBzcGxpdFswXVxuXHRcdFx0XHRcdEBwcm9wZXJ0eSA9IHNwbGl0WzFdXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRAZXZlbnROYW1lID0gQHByb3BlcnR5XG5cdFx0XHRcdFx0QHByb3BlcnR5ID0gMFxuXG5cdFx0XHRcdHRocm93V2FybmluZygnYmFkRXZlbnRBcmcnLDEpIGlmIGlzTmFOIHBhcnNlSW50KEBwcm9wZXJ0eSlcblxuXHRcdHJldHVybiBAXG5cblxuXG5cdHNldE9iamVjdDogKHN1YmplY3QsIGlzRnVuY3Rpb24pLT5cblx0XHRAc3RhZ2UgPSAxXG5cdFx0aW1wb3J0ICcuL3Byb3RvdHlwZS1wcml2YXRlLnNldE9iamVjdC1wYXJzZURPTU9iamVjdCdcblx0XHRcblx0XHRzd2l0Y2hcblx0XHRcdHdoZW4gaXNGdW5jdGlvblxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0Z1bmMnXG5cdFx0XHRcblx0XHRcdHdoZW4gQHBob2xkZXJcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdQaG9sZGVyJ1xuXHRcdFx0XG5cdFx0XHR3aGVuIHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnYXJyYXknKSBhbmQgY2hlY2tJZi5pc0FycmF5KHN1YmplY3RbQHByb3BlcnR5XSlcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdBcnJheSdcblx0XHRcdFxuXHRcdFx0d2hlbiB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ2V2ZW50Jylcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdFdmVudCdcblx0XHRcdFx0aW1wb3J0ICcuL3Byb3RvdHlwZS1wcml2YXRlLnNldE9iamVjdC1kZWZpbmVFdmVudE1ldGhvZHMnXG5cblx0XHRcdHdoZW4gdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdmdW5jJylcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdQcm94eSdcblx0XHRcdFxuXHRcdFx0d2hlbiBpc0RvbVJhZGlvIFxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0RPTVJhZGlvJ1xuXG5cdFx0XHR3aGVuIGlzRG9tQ2hlY2tib3ggXG5cdFx0XHRcdG5ld09iamVjdFR5cGUgPSAnRE9NQ2hlY2tib3gnXG5cblx0XHRcdHdoZW4gdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdhdHRyJylcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdET01BdHRyJ1xuXG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5ld09iamVjdFR5cGUgPSAnT2JqZWN0UHJvcCdcblx0XHRcblxuXHRcdGlmIHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnbXVsdGknKVxuXHRcdFx0dGhyb3dFcnJvcignZW1wdHlMaXN0JykgaWYgbm90IHN1YmplY3QubGVuZ3RoXG5cdFx0XHRAZGVmaW5lTWFpblByb3BzIG5ldyBHcm91cEJpbmRpbmcoQCwgc3ViamVjdCwgbmV3T2JqZWN0VHlwZSlcblx0XHRlbHNlXG5cdFx0XHRAZGVmaW5lTWFpblByb3BzIEBjcmVhdGVCaW5kaW5nKHN1YmplY3QsIG5ld09iamVjdFR5cGUsIEAsIGlzRnVuY3Rpb24pXG5cblxuXHRcdGlmIHRhcmdldEluY2x1ZGVzKEBfLnR5cGUsICdFdmVudCcpIG9yIHRhcmdldEluY2x1ZGVzKEBfLnR5cGUsICdQcm94eScpXG5cdFx0XHRAb3B0aW9ucy51cGRhdGVPbkJpbmQgPSBmYWxzZVxuXHRcdGVsc2UgaWYgdGFyZ2V0SW5jbHVkZXMoQF8udHlwZSwgJ0Z1bmMnKVxuXHRcdFx0QG9wdGlvbnMudXBkYXRlT25CaW5kID0gdHJ1ZVxuXG5cblx0XHRpZiBAY29tcGxldGVDYWxsYmFja1xuXHRcdFx0cmV0dXJuIEBjb21wbGV0ZUNhbGxiYWNrKEApXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIEBcblxuXG5cblxuXHRhZGRUb1B1Ymxpc2hlcjogKHB1Ymxpc2hlckludGVyZmFjZSktPlxuXHRcdHB1Ymxpc2hlckludGVyZmFjZS5zdGFnZSA9IDJcblx0XHRwdWJsaXNoZXJJbnRlcmZhY2Uuc3Vicy5wdXNoKEApXG5cdFx0YWxyZWFkeUhhZFN1YiA9IHB1Ymxpc2hlckludGVyZmFjZS5fLmFkZFN1YihAXywgcHVibGlzaGVySW50ZXJmYWNlLm9wdGlvbnMsIHB1Ymxpc2hlckludGVyZmFjZS51cGRhdGVPbmNlKVxuXG5cdFx0aWYgcHVibGlzaGVySW50ZXJmYWNlLnVwZGF0ZU9uY2Vcblx0XHRcdGRlbGV0ZSBwdWJsaXNoZXJJbnRlcmZhY2UudXBkYXRlT25jZVxuXHRcdFxuXHRcdGVsc2UgaWYgcHVibGlzaGVySW50ZXJmYWNlLm9wdGlvbnMudXBkYXRlT25CaW5kIGFuZCBub3QgYWxyZWFkeUhhZFN1YlxuXHRcdFx0aWYgQF8uaXNNdWx0aVxuXHRcdFx0XHRwdWJsaXNoZXJJbnRlcmZhY2UuXy51cGRhdGVTdWIoYmluZGluZywgcHVibGlzaGVySW50ZXJmYWNlLl8pIGZvciBiaW5kaW5nIGluIEBfLmJpbmRpbmdzXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHB1Ymxpc2hlckludGVyZmFjZS5fLnVwZGF0ZVN1YihAXywgcHVibGlzaGVySW50ZXJmYWNlLl8pXG5cblx0XHRyZXR1cm5cblxuXG5cblxuXG4iLCJpc0l0ZXJhYmxlID0gc3ViamVjdCBpc250IHdpbmRvdyBhbmQgY2hlY2tJZi5pc0l0ZXJhYmxlKHN1YmplY3QpIGFuZCBub3Qgc3ViamVjdC5ub2RlVHlwZVxuc2FtcGxlSXRlbSA9IGlmIGlzSXRlcmFibGUgdGhlbiBzdWJqZWN0WzBdIGVsc2Ugc3ViamVjdFxuXG5pZiBub3Qgc2FtcGxlSXRlbVxuXHR0aHJvd0Vycm9yKCdlbXB0eUxpc3QnKSBpZiBpc0l0ZXJhYmxlIGFuZCBjaGVja0lmLmlzRWxDb2xsZWN0aW9uKHN1YmplY3QpXG5cbmVsc2UgaWYgQGlzRG9tID0gY2hlY2tJZi5pc0RvbShzYW1wbGVJdGVtKVxuXG5cdGlmIEBwcm9wZXJ0eSBpcyAnY2hlY2tlZCdcblx0XHRpc0RvbVJhZGlvID0gc2FtcGxlSXRlbSBhbmQgY2hlY2tJZi5pc0RvbVJhZGlvKHNhbXBsZUl0ZW0pXG5cdFx0aXNEb21DaGVja2JveCA9IG5vdCBpc0RvbVJhZGlvIGFuZCBzYW1wbGVJdGVtIGFuZCBjaGVja0lmLmlzRG9tQ2hlY2tib3goc2FtcGxlSXRlbSlcblx0XG5cdGVsc2UgaWYgQHByb3BlcnR5IGlzICd2YWx1ZSdcblx0XHRAaXNEb21JbnB1dCA9IGNoZWNrSWYuaXNEb21JbnB1dChzYW1wbGVJdGVtKVxuXHRcblxuXHRpZiBpc0l0ZXJhYmxlIGFuZCBub3QgdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdtdWx0aScpXG5cdFx0aWYgc3ViamVjdC5sZW5ndGggaXMgMVxuXHRcdFx0c3ViamVjdCA9IHN1YmplY3RbMF1cblxuXHRcdGVsc2Vcblx0XHRcdGlmIChpc0RvbVJhZGlvIG9yIGlzRG9tQ2hlY2tib3gpIGFuZCBub3QgY2hlY2tJZi5kb21FbHNBcmVTYW1lKHN1YmplY3QpXG5cdFx0XHRcdHJldHVybiB0aHJvd1dhcm5pbmcoJ21peGVkRWxMaXN0JywzKVx0XHRcdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpZiBpc0RvbVJhZGlvIG9yIGlzRG9tQ2hlY2tib3hcblx0XHRcdFx0XHRAaXNNdWx0aUNob2ljZSA9IHRydWVcblx0XHRcdFx0XHRzdWJqZWN0ID0gW10uc2xpY2UuY2FsbChzdWJqZWN0KVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c3ViamVjdCA9IHN1YmplY3RbMF1cblx0XHRcdFx0XHR0aHJvd1dhcm5pbmcoJ29ubHlPbmVET01FbGVtZW50JywzKVxuXG5cblxuXG4iLCJAZXZlbnRNZXRob2RzID0gbGlzdGVuOkBvcHRpb25zUGFzc2VkLmxpc3Rlbk1ldGhvZCwgcmVtb3ZlOkBvcHRpb25zUGFzc2VkLnJlbW92ZU1ldGhvZCwgZW1pdDpAb3B0aW9uc1Bhc3NlZC5lbWl0TWV0aG9kXG5cblxuXG5pZiBub3Qgc3ViamVjdFtAZXZlbnRNZXRob2RzLmxpc3Rlbl1cblx0QGV2ZW50TWV0aG9kcy5saXN0ZW4gPSBpZiBjaGVja0lmLmlzRG9tTm9kZShzdWJqZWN0KSB0aGVuICdhZGRFdmVudExpc3RlbmVyJyBlbHNlICdvbidcblxuaWYgbm90IHN1YmplY3RbQGV2ZW50TWV0aG9kcy5yZW1vdmVdXG5cdEBldmVudE1ldGhvZHMucmVtb3ZlID0gaWYgY2hlY2tJZi5pc0RvbU5vZGUoc3ViamVjdCkgdGhlbiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgZWxzZSAncmVtb3ZlTGlzdGVuZXInXG5cbmlmIG5vdCBzdWJqZWN0W0BldmVudE1ldGhvZHMuZW1pdF1cblx0QGV2ZW50TWV0aG9kcy5lbWl0ID0gaWYgY2hlY2tJZi5pc0RvbU5vZGUoc3ViamVjdCkgdGhlbiAnZGlzcGF0Y2hFdmVudCcgZWxzZSAnZW1pdCciLCJCaW5kaW5nSW50ZXJmYWNlOjogPSBPYmplY3QuY3JlYXRlIEJpbmRpbmdJbnRlcmZhY2VQcml2YXRlLFxuXHRvZjpcdFx0XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9vZiBpZiBub3QgQHN0YWdlXHRcdFx0Iz09PSBpZiBzdGFnZSBpcyAwXG5cdHNldDpcdFx0XHRcdGdldDogKCktPiBNRVRIT0Rfc2V0IGlmIEBzdGFnZVx0XHRcdFx0Iz09PSBpZiBzdGFnZSBpcyAxIG9yIDJcblx0Y2hhaW5UbzpcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX2NoYWluVG8gaWYgQHN0YWdlIGlzIDJcblx0dHJhbnNmb3JtU2VsZjpcdFx0Z2V0OiAoKS0+IE1FVEhPRF90cmFuc2Zvcm1TZWxmIGlmIEBzdGFnZSBpcyAxXG5cdHRyYW5zZm9ybTpcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX3RyYW5zZm9ybSBpZiBAc3RhZ2UgaXMgMlxuXHR0cmFuc2Zvcm1BbGw6XHRcdGdldDogKCktPiBNRVRIT0RfdHJhbnNmb3JtQWxsIGlmIEBzdGFnZSBpcyAyXG5cdGNvbmRpdGlvbjpcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX2NvbmRpdGlvbiBpZiBAc3RhZ2UgaXMgMlxuXHRjb25kaXRpb25BbGw6XHRcdGdldDogKCktPiBNRVRIT0RfY29uZGl0aW9uQWxsIGlmIEBzdGFnZSBpcyAyXG5cdGJvdGhXYXlzOlx0XHRcdGdldDogKCktPiBNRVRIT0RfYm90aFdheXMgaWYgQHN0YWdlIGlzIDJcblx0dW5CaW5kOlx0XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF91bkJpbmQgaWYgQHN0YWdlIGlzIDJcblx0cG9sbEV2ZXJ5Olx0XHRcdGdldDogKCktPiBNRVRIT0RfcG9sbEV2ZXJ5IGlmIEBzdGFnZSAjPT09IGlmIHN0YWdlIGlzIDEgb3IgMlxuXHRzdG9wUG9sbGluZzpcdFx0Z2V0OiAoKS0+IE1FVEhPRF9zdG9wUG9sbGluZyBpZiBAc3RhZ2UgIz09PSBpZiBzdGFnZSBpcyAxIG9yIDJcblx0c2V0T3B0aW9uOlx0XHRcdGdldDogKCktPiBNRVRIT0Rfc2V0T3B0aW9uIGlmIEBzdGFnZSBpcyAyXG5cdGRpc2FsbG93RnJvbTpcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBpcyAyIGFuZCAodGhpc0ludGVyZmFjZT1AKVxuXHRcdFx0XHRcdFx0XHRnZW5Qcm94aWVkSW50ZXJmYWNlIGZhbHNlLCAoZGlzYWxsb3dJbnRlcmZhY2UpLT5cblx0XHRcdFx0XHRcdFx0XHRzdWJJbnRlcmZhY2UgPSB0aGlzSW50ZXJmYWNlLnN1YnNbdGhpc0ludGVyZmFjZS5zdWJzLmxlbmd0aC0xXVxuXHRcdFx0XHRcdFx0XHRcdHRoaXNJbnRlcmZhY2UuXy5hZGREaXNhbGxvd1J1bGUoc3ViSW50ZXJmYWNlLl8sIGRpc2FsbG93SW50ZXJmYWNlLl8pXG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpc0ludGVyZmFjZVxuXHRcblx0dXBkYXRlT246XHRcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBhbmQgKHRoaXNJbnRlcmZhY2U9QCkgIz09PSBpZiBzdGFnZSBpcyAxIG9yIDJcblx0XHRcdFx0XHRcdFx0Z2VuUHJveGllZEludGVyZmFjZSBmYWxzZSwgKHN1YkludGVyZmFjZSktPlxuXHRcdFx0XHRcdFx0XHRcdGlmIHN1YkludGVyZmFjZS5fIGlzbnQgdGhpc0ludGVyZmFjZS5fXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzSW50ZXJmYWNlLl8ucHVic01hcFtzdWJJbnRlcmZhY2UuXy5JRF0gPSBzdWJJbnRlcmZhY2UuX1xuXHRcdFx0XHRcdFx0XHRcdFx0c3ViSW50ZXJmYWNlLl8uYWRkU3ViIGdlblNlbGZVcGRhdGVyKHRoaXNJbnRlcmZhY2UuXywgdHJ1ZSksIHN1YkludGVyZmFjZS5vcHRpb25zLCBmYWxzZSwgdHJ1ZVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzSW50ZXJmYWNlXG5cdFxuXG5cdHJlbW92ZVVwZGF0ZXI6XHRcdGdldDogKCktPiBpZiBAc3RhZ2UgYW5kICh0aGlzSW50ZXJmYWNlPUApIGFuZCAoc2VsZlVwZGF0ZXI9QF8uc2VsZlVwZGF0ZXIpICM9PT0gaWYgc3RhZ2UgaXMgMSBvciAyXG5cdFx0XHRcdFx0XHRcdGdlblByb3hpZWRJbnRlcmZhY2UgZmFsc2UsIChzdWJJbnRlcmZhY2UpLT5cblx0XHRcdFx0XHRcdFx0XHRpZiBzdWJJbnRlcmZhY2UuXy5zdWJzTWV0YVtzZWxmVXBkYXRlci5JRF1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzSW50ZXJmYWNlLl8ucHVic01hcFtzdWJJbnRlcmZhY2UuXy5JRF1cblx0XHRcdFx0XHRcdFx0XHRcdHN1YkludGVyZmFjZS5fLnJlbW92ZVN1YihzZWxmVXBkYXRlcilcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVyblxuXG5cblx0dG86XHRcdFx0XHRcdGdldDogKCktPiBpZiBAc3RhZ2UgaXMgMSBhbmQgKHRoaXNJbnRlcmZhY2U9QClcblx0XHRcdFx0XHRcdFx0Z2VuUHJveGllZEludGVyZmFjZSB0cnVlLCAoc3ViSW50ZXJmYWNlKS0+XG5cdFx0XHRcdFx0XHRcdFx0aWYgc3ViSW50ZXJmYWNlLl8gaXNudCB0aGlzSW50ZXJmYWNlLl9cblx0XHRcdFx0XHRcdFx0XHRcdHN1YkludGVyZmFjZS5hZGRUb1B1Ymxpc2hlcih0aGlzSW50ZXJmYWNlKVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzSW50ZXJmYWNlXG5cdFxuXG5cdGFuZDpcdFx0XHRcdGdldDogKCktPlxuXHRcdFx0XHRcdFx0XHRjbG9uZUludGVyZmFjZSA9IEBzZWxmQ2xvbmUoKVxuXHRcdFx0XHRcdFx0XHRpZiBAc3RhZ2UgaXMgMlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBjbG9uZUludGVyZmFjZVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYgQHN0YWdlIGlzIDFcblx0XHRcdFx0XHRcdFx0XHRpZiBub3QgY2xvbmVJbnRlcmZhY2UuXy5pc011bHRpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9uZUJpbmRpbmcgPSBjbG9uZUludGVyZmFjZS5fXG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9uZUludGVyZmFjZS5fID0gY2xvbmVJbnRlcmZhY2UuXyA9IG5ldyBHcm91cEJpbmRpbmcoY2xvbmVJbnRlcmZhY2UpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9uZUludGVyZmFjZS5fLmFkZEJpbmRpbmcoY2xvbmVCaW5kaW5nKVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBnZW5Qcm94aWVkSW50ZXJmYWNlIGZhbHNlLCAoc2libGluZ0ludGVyZmFjZSktPlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xvbmVJbnRlcmZhY2UuXy5hZGRCaW5kaW5nKHNpYmxpbmdJbnRlcmZhY2UuXylcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBjbG9uZUludGVyZmFjZVxuXHRcblxuXHRvbmNlOlx0XHRcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBpcyAxXG5cdFx0XHRcdFx0XHRcdGludGVyZmFjZVRvUmV0dXJuID0gQHNlbGZDbG9uZSgpXG5cdFx0XHRcdFx0XHRcdGludGVyZmFjZVRvUmV0dXJuLnVwZGF0ZU9uY2UgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcmZhY2VUb1JldHVyblxuXG5cdCMgPT09PSBBbGlhc2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHR1cGRhdGU6XHRcdFx0XHRnZXQ6ICgpLT4gQHNldFxuXHR0d29XYXk6XHRcdFx0XHRnZXQ6ICgpLT4gQGJvdGhXYXlzXG5cdHBpcGU6XHRcdFx0XHRnZXQ6ICgpLT4gQGNoYWluVG9cblxuXG5cblxuTUVUSE9EX29mID0gKG9iamVjdCktPlxuXHR0aHJvd0Vycm9yQmFkQXJnKG9iamVjdCkgdW5sZXNzIGNoZWNrSWYuaXNPYmplY3Qob2JqZWN0KSBvciBjaGVja0lmLmlzRnVuY3Rpb24ob2JqZWN0KVxuXHRcblx0aWYgY2hlY2tJZi5pc0JpbmRpbmdJbnRlcmZhY2Uob2JqZWN0KVxuXHRcdG9iamVjdCA9IG9iamVjdC5vYmplY3RcblxuXHRAc3RhZ2UgPSAxXG5cdHJldHVybiBAc2V0T2JqZWN0KG9iamVjdClcblxuXG5cblxuXG5NRVRIT0RfY2hhaW5UbyA9IChzdWJqZWN0LCBzcGVjaWZpY09wdGlvbnMsIHNhdmVPcHRpb25zKS0+XG5cdHJldHVybiBTaW1wbHlCaW5kKEBzdWJzW0BzdWJzLmxlbmd0aC0xXSkudG8oc3ViamVjdCwgc3BlY2lmaWNPcHRpb25zLCBzYXZlT3B0aW9ucylcblxuXG5cblxuXG5NRVRIT0Rfc2V0ID0gKG5ld1ZhbHVlKS0+XG5cdEBfLnNldFZhbHVlKG5ld1ZhbHVlKVxuXHRyZXR1cm4gQFxuXG5cblxuXG5cblxuXG5cbk1FVEhPRF90cmFuc2Zvcm1TZWxmID0gKHRyYW5zZm9ybUZuKS0+ICMgQXBwbGllZCBvbmx5IHRvIHRoZSBsYXN0IHN1YlxuXHRpZiBub3QgY2hlY2tJZi5pc0Z1bmN0aW9uKHRyYW5zZm9ybUZuKVxuXHRcdHRocm93V2FybmluZygnZm5Pbmx5JywxKVxuXHRlbHNlXG5cdFx0QF8uc2V0U2VsZlRyYW5zZm9ybSh0cmFuc2Zvcm1GbiwgQG9wdGlvbnMudXBkYXRlT25CaW5kKVxuXHRcdFxuXHRyZXR1cm4gQFxuXG5cbk1FVEhPRF90cmFuc2Zvcm0gPSAodHJhbnNmb3JtRm4pLT4gIyBBcHBsaWVkIG9ubHkgdG8gdGhlIGxhc3Qgc3ViXG5cdEBfLmFkZE1vZGlmaWVyRm4oJ3RyYW5zZm9ybUZuJywgQHN1YnMuc2xpY2UoLTEpLCB0cmFuc2Zvcm1GbiwgQG9wdGlvbnMudXBkYXRlT25CaW5kKVxuXHRyZXR1cm4gQFxuXG5cbk1FVEhPRF90cmFuc2Zvcm1BbGwgPSAodHJhbnNmb3JtRm4pLT4gIyBBcHBsaWVkIHRvIGVudHJpZSBzdWJzIHNldFx0XHRcblx0QF8uYWRkTW9kaWZpZXJGbigndHJhbnNmb3JtRm4nLCBAc3VicywgdHJhbnNmb3JtRm4sIEBvcHRpb25zLnVwZGF0ZU9uQmluZClcblx0cmV0dXJuIEBcblxuXG5cblxuXG5cbk1FVEhPRF9jb25kaXRpb24gPSAoY29uZGl0aW9uRm4pLT4gIyBBcHBsaWVkIG9ubHkgdG8gdGhlIGxhc3Qgc3ViXG5cdEBfLmFkZE1vZGlmaWVyRm4oJ2NvbmRpdGlvbkZuJywgQHN1YnMuc2xpY2UoLTEpLCBjb25kaXRpb25Gbilcblx0cmV0dXJuIEBcblxuXG5NRVRIT0RfY29uZGl0aW9uQWxsID0gKGNvbmRpdGlvbkZuKS0+ICMgQXBwbGllZCB0byBlbnRyaWUgc3VicyBzZXRcblx0QF8uYWRkTW9kaWZpZXJGbignY29uZGl0aW9uRm4nLCBAc3VicywgY29uZGl0aW9uRm4pXG5cdHJldHVybiBAXG5cblxuXG5cblxuXG5cbk1FVEhPRF9ib3RoV2F5cyA9IChhbHRUcmFuc2Zvcm0pLT4gIyBBcHBsaWVkIG9ubHkgdG8gdGhlIGxhc3Qgc3ViXG5cdHN1YiA9IEBzdWJzW0BzdWJzLmxlbmd0aC0xXSAjIExhc3QgUHJveGllZFxuXHRzdWJCaW5kaW5nID0gc3ViLl9cblx0YmluZGluZ3MgPSBpZiBAXy5pc011bHRpIHRoZW4gQF8uYmluZGluZ3MgZWxzZSBbQF9dXG5cblx0c3ViQmluZGluZy5hZGRTdWIoQF8sIHN1Yi5vcHRpb25zKVxuXHRcblx0Zm9yIGJpbmRpbmcgaW4gYmluZGluZ3Ncblx0XHRvcmlnaW5UcmFuc2Zvcm0gPSBiaW5kaW5nLnN1YnNNZXRhW3N1YkJpbmRpbmcuSURdLnRyYW5zZm9ybUZuXG5cdFx0b3JpZ2luQ29uZGl0aW9uID0gYmluZGluZy5zdWJzTWV0YVtzdWJCaW5kaW5nLklEXS5jb25kaXRpb25GblxuXG5cdFx0aWYgb3JpZ2luVHJhbnNmb3JtIG9yIGFsdFRyYW5zZm9ybVxuXHRcdFx0dHJhbnNmb3JtVG9Vc2UgPSBpZiBjaGVja0lmLmlzRnVuY3Rpb24oYWx0VHJhbnNmb3JtKSB0aGVuIGFsdFRyYW5zZm9ybSBlbHNlIG9yaWdpblRyYW5zZm9ybVxuXHRcdFx0c3ViQmluZGluZy5zdWJzTWV0YVtAXy5JRF0udHJhbnNmb3JtRm4gPSB0cmFuc2Zvcm1Ub1VzZSBpZiB0cmFuc2Zvcm1Ub1VzZSBhbmQgYWx0VHJhbnNmb3JtIGlzbnQgZmFsc2VcblxuXHRcdGlmIG9yaWdpbkNvbmRpdGlvblxuXHRcdFx0c3ViQmluZGluZy5zdWJzTWV0YVtAXy5JRF0uY29uZGl0aW9uRm4gPSBvcmlnaW5Db25kaXRpb25cblxuXHRyZXR1cm4gQFxuXG5cblxuTUVUSE9EX3VuQmluZCA9IChib3RoV2F5cyktPiAjIEFwcGxpZWQgdG8gYWxsIHN1YnNcblx0QF8ucmVtb3ZlU3ViKHN1Yi5fLCBib3RoV2F5cykgZm9yIHN1YiBpbiBAc3Vic1xuXHRyZXR1cm4gQFxuXG5cblxuXG5cbk1FVEhPRF9wb2xsRXZlcnkgPSAodGltZSktPlxuXHRAXy5hZGRQb2xsSW50ZXJ2YWwodGltZSlcblx0cmV0dXJuIEBcblxuXG5cbk1FVEhPRF9zdG9wUG9sbGluZyA9ICgpLT5cblx0QF8ucmVtb3ZlUG9sbEludGVydmFsKClcblx0cmV0dXJuIEBcblxuXG5cbk1FVEhPRF9zZXRPcHRpb24gPSAob3B0aW9uTmFtZSwgbmV3VmFsdWUpLT5cblx0QF8uc3Vic01ldGFbQHN1YnNbQHN1YnMubGVuZ3RoLTFdLl8uSURdLm9wdHNbb3B0aW9uTmFtZV0gPSBuZXdWYWx1ZVx0XG5cdHJldHVybiBAXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJHcm91cEJpbmRpbmcgPSAoYmluZGluZ0ludGVyZmFjZSwgb2JqZWN0cywgb2JqZWN0VHlwZSktPlxuXHRiaW5kaW5nSW50ZXJmYWNlLnNlbGVjdG9yID0gYmluZGluZ0ludGVyZmFjZS5zZWxlY3Rvci5zbGljZSg2KSAjIFRha2Ugb3V0IHRoZSAnbXVsdGk6J1xuXHRleHRlbmRTdGF0ZShALCBAaW50ZXJmYWNlID0gYmluZGluZ0ludGVyZmFjZSlcblx0QGlzTXVsdGkgPSB0cnVlXG5cdEBiaW5kaW5ncyA9IGJpbmRpbmdzID0gW11cblxuXHRpZiBvYmplY3RzXG5cdFx0QGFkZEJpbmRpbmcob2JqZWN0LCBvYmplY3RUeXBlKSBmb3Igb2JqZWN0IGluIG9iamVjdHNcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyBALFxuXHRcdCd0eXBlJzpcdFx0XHRcdGdldDogKCktPiBiaW5kaW5ncy5tYXAgKGJpbmRpbmcpLT4gYmluZGluZy50eXBlXG5cdFx0J3ZhbHVlJzogXHRcdFx0Z2V0OiAoKS0+IGJpbmRpbmdzLm1hcCAoYmluZGluZyktPiBiaW5kaW5nLnZhbHVlXG5cblxuXG5cblxuXG5wcm90byA9IEdyb3VwQmluZGluZzo6ID0gT2JqZWN0LmNyZWF0ZShCaW5kaW5nSW50ZXJmYWNlUHJpdmF0ZSlcblxuT2JqZWN0LmtleXMoQmluZGluZzo6KS5mb3JFYWNoIChtZXRob2ROYW1lKS0+XHRcblx0cHJvdG9bbWV0aG9kTmFtZV0gPSAoYSxiLGMsZCktPiAjIEZvdXIgYXJndW1lbnRzIGlzIHRoZSBtb3N0IGV2ZXIgcGFzc2VkIHRvIGFueSBtZXRob2QgZnJvbSBCaW5kaW5nSW50ZXJmYWNlIG1ldGhvZHNcblx0XHRmb3IgYmluZGluZyBpbiBAYmluZGluZ3Ncblx0XHRcdGIgPSBiaW5kaW5nIGlmIG1ldGhvZE5hbWUgaXMgJ3VwZGF0ZVN1Yidcblx0XHRcdGJpbmRpbmdbbWV0aG9kTmFtZV0oYSxiLGMsZClcblx0XHRcblx0XHRyZXR1cm5cblxuXG5wcm90by5hZGRCaW5kaW5nID0gKG9iamVjdCwgb2JqZWN0VHlwZSktPlxuXHRAYmluZGluZ3MucHVzaCBpZiBub3Qgb2JqZWN0VHlwZSB0aGVuIG9iamVjdCBlbHNlIEBjcmVhdGVCaW5kaW5nKG9iamVjdCwgb2JqZWN0VHlwZSwgQGludGVyZmFjZSlcblx0cmV0dXJuIiwiZXh0ZW5kID0gcmVxdWlyZSAnLi9leHRlbmQnXG5cbm5vcm1hbGl6ZUtleXMgPSAoa2V5cyktPiBpZiBrZXlzXG5cdG91dHB1dCA9IHt9XG5cdGlmIHR5cGVvZiBrZXlzIGlzbnQgJ29iamVjdCdcblx0XHRvdXRwdXRba2V5c10gPSB0cnVlXG5cdGVsc2Vcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoa2V5cykgaWYgbm90IEFycmF5LmlzQXJyYXkoa2V5cylcblx0XHRvdXRwdXRba2V5XSA9IHRydWUgZm9yIGtleSBpbiBrZXlzXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cbm5ld0J1aWxkZXIgPSAoaXNCYXNlKS0+XG5cdGJ1aWxkZXIgPSAodGFyZ2V0KS0+XG5cdFx0RVhQQU5EX0FSR1VNRU5UUyhzb3VyY2VzKVxuXHRcdGlmIGJ1aWxkZXIub3B0aW9ucy50YXJnZXRcblx0XHRcdHRoZVRhcmdldCA9IGJ1aWxkZXIub3B0aW9ucy50YXJnZXRcblx0XHRlbHNlXG5cdFx0XHR0aGVUYXJnZXQgPSB0YXJnZXRcblx0XHRcdHNvdXJjZXMuc2hpZnQoKVxuXHRcdFxuXHRcdGV4dGVuZChidWlsZGVyLm9wdGlvbnMsIHRoZVRhcmdldCwgc291cmNlcylcblx0XG5cdGJ1aWxkZXIuaXNCYXNlID0gdHJ1ZSBpZiBpc0Jhc2Vcblx0YnVpbGRlci5vcHRpb25zID0ge31cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYnVpbGRlciwgbW9kaWZpZXJzKVxuXHRyZXR1cm4gYnVpbGRlclxuXG5cbm1vZGlmaWVycyA9IFxuXHQnZGVlcCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5kZWVwID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J293bic6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5vd24gPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnYWxsb3dOdWxsJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLmFsbG93TnVsbCA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdudWxsRGVsZXRlcyc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5udWxsRGVsZXRlcyA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdjb25jYXQnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMuY29uY2F0ID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J2Nsb25lJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLnRhcmdldCA9IHt9XG5cdFx0cmV0dXJuIF9cblxuXHQnbm90RGVlcCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLm5vdERlZXAgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdkZWVwT25seSc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLmRlZXBPbmx5ID0gbm9ybWFsaXplS2V5cyhrZXlzKVx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXHQna2V5cyc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLmtleXMgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdub3RLZXlzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMubm90S2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J3RyYW5zZm9ybSc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAodHJhbnNmb3JtKS0+XG5cdFx0XHRpZiB0eXBlb2YgdHJhbnNmb3JtIGlzICdmdW5jdGlvbidcblx0XHRcdFx0Xy5vcHRpb25zLmdsb2JhbFRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXHRcdFx0ZWxzZSBpZiB0cmFuc2Zvcm0gYW5kIHR5cGVvZiB0cmFuc2Zvcm0gaXMgJ29iamVjdCdcblx0XHRcdFx0Xy5vcHRpb25zLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXG5cdCdmaWx0ZXInOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRyZXR1cm4gKGZpbHRlciktPlxuXHRcdFx0aWYgdHlwZW9mIGZpbHRlciBpcyAnZnVuY3Rpb24nXG5cdFx0XHRcdF8ub3B0aW9ucy5nbG9iYWxGaWx0ZXIgPSBmaWx0ZXJcblx0XHRcdGVsc2UgaWYgZmlsdGVyIGFuZCB0eXBlb2YgZmlsdGVyIGlzICdvYmplY3QnXG5cdFx0XHRcdF8ub3B0aW9ucy5maWx0ZXJzID0gZmlsdGVyXG5cdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBuZXdCdWlsZGVyKHRydWUpXG5leHBvcnRzLnZlcnNpb24gPSBpbXBvcnQgJy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nIiwie1xuICBcIl9hcmdzXCI6IFtcbiAgICBbXG4gICAgICBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICAgICAgXCIvVXNlcnMvZGFuaWVsa2FsZW4vc2FuZGJveC9kYXRhX3RhYmxlXCJcbiAgICBdXG4gIF0sXG4gIFwiX2Zyb21cIjogXCJzbWFydC1leHRlbmRAMS43LjNcIixcbiAgXCJfaWRcIjogXCJzbWFydC1leHRlbmRAMS43LjNcIixcbiAgXCJfaW5CdW5kbGVcIjogZmFsc2UsXG4gIFwiX2ludGVncml0eVwiOiBcInNoYTUxMi1QVkVFVllERHp5eEtBMEdORkxjV1k2b0pTa1FLZGMxdzcxOGVRcEVIY051VFNXWXhESzM1R3poc0doTWtVVThsQklnU0VEYnQ1eDVwNDZwUnozQXViQT09XCIsXG4gIFwiX2xvY2F0aW9uXCI6IFwiL3NtYXJ0LWV4dGVuZFwiLFxuICBcIl9waGFudG9tQ2hpbGRyZW5cIjoge30sXG4gIFwiX3JlcXVlc3RlZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwidmVyc2lvblwiLFxuICAgIFwicmVnaXN0cnlcIjogdHJ1ZSxcbiAgICBcInJhd1wiOiBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICAgIFwibmFtZVwiOiBcInNtYXJ0LWV4dGVuZFwiLFxuICAgIFwiZXNjYXBlZE5hbWVcIjogXCJzbWFydC1leHRlbmRcIixcbiAgICBcInJhd1NwZWNcIjogXCIxLjcuM1wiLFxuICAgIFwic2F2ZVNwZWNcIjogbnVsbCxcbiAgICBcImZldGNoU3BlY1wiOiBcIjEuNy4zXCJcbiAgfSxcbiAgXCJfcmVxdWlyZWRCeVwiOiBbXG4gICAgXCIvXCIsXG4gICAgXCIvc2ltcGx5d2F0Y2hcIlxuICBdLFxuICBcIl9yZXNvbHZlZFwiOiBcImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL3NtYXJ0LWV4dGVuZC8tL3NtYXJ0LWV4dGVuZC0xLjcuMy50Z3pcIixcbiAgXCJfc3BlY1wiOiBcIjEuNy4zXCIsXG4gIFwiX3doZXJlXCI6IFwiL1VzZXJzL2RhbmllbGthbGVuL3NhbmRib3gvZGF0YV90YWJsZVwiLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiZGFuaWVsa2FsZW5cIlxuICB9LFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3Qvc21hcnQtZXh0ZW5kLmRlYnVnLmpzXCIsXG4gICAgXCIuL2Rpc3Qvc21hcnQtZXh0ZW5kLmpzXCI6IFwic3JjL2luZGV4LmNvZmZlZVwiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc21hcnQtZXh0ZW5kL2lzc3Vlc1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImZhbGFmZWxcIjogXCJeMi4xLjBcIlxuICB9LFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVyZ2UvZXh0ZW5kIG9iamVjdHMgKHNoYWxsb3cvZGVlcCkgd2l0aCBnbG9iYWwvaW5kaXZpZHVhbCBmaWx0ZXJzIGFuZCBtb3JlIGZlYXR1cmVzXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJhZGdlLWdlblwiOiBcIl4xLjAuMlwiLFxuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy40LjdcIixcbiAgICBcImNoYWlcIjogXCJeMy41LjBcIixcbiAgICBcImNvZmZlZS1yZWdpc3RlclwiOiBcIl4wLjEuMFwiLFxuICAgIFwiY29mZmVlaWZ5LWNhY2hlZFwiOiBcIl4yLjEuMVwiLFxuICAgIFwiZXh0ZW5kXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJnb29nbGUtY2xvc3VyZS1jb21waWxlci1qc1wiOiBcIl4yMDE3MDYyNi4wLjBcIixcbiAgICBcIm1vY2hhXCI6IFwiXjMuMi4wXCIsXG4gICAgXCJzaW1wbHlpbXBvcnRcIjogXCJeNC4wLjAtczIxXCIsXG4gICAgXCJzaW1wbHl3YXRjaFwiOiBcIl4zLjAuMC1sMlwiLFxuICAgIFwidWdsaWZ5LWpzXCI6IFwiXjMuMC4yNFwiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc21hcnQtZXh0ZW5kI3JlYWRtZVwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImV4dGVuZFwiLFxuICAgIFwiY2xvbmVcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwic2VsZWN0aXZlXCIsXG4gICAgXCJtZXJnZVwiLFxuICAgIFwiYXNzaWduXCIsXG4gICAgXCJwcm9wZXJ0aWVzXCJcbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXG4gIFwibWFpblwiOiBcImRpc3Qvc21hcnQtZXh0ZW5kLmpzXCIsXG4gIFwibW9jaGFfb3B0c1wiOiBcIi11IHRkZCAtLWNvbXBpbGVycyBjb2ZmZWU6Y29mZmVlLXJlZ2lzdGVyIC0tc2xvdyAxMDAwIC0tdGltZW91dCA1MDAwXCIsXG4gIFwibmFtZVwiOiBcInNtYXJ0LWV4dGVuZFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zbWFydC1leHRlbmQuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgZGlzdC87IG5wbSBydW4gYnVpbGQ6ZGVidWcgJiYgbnBtIHJ1biBidWlsZDpyZWxlYXNlXCIsXG4gICAgXCJidWlsZDpkZWJ1Z1wiOiBcInNpbXBseWltcG9ydCBidW5kbGUgc3JjL2luZGV4LmNvZmZlZSAtZCAtLXRhcmdldCBub2RlIC0tdW1kIHNtYXJ0LWV4dGVuZCA+IGRpc3Qvc21hcnQtZXh0ZW5kLmRlYnVnLmpzXCIsXG4gICAgXCJidWlsZDpyZWxlYXNlXCI6IFwic2ltcGx5aW1wb3J0IGJ1bmRsZSBzcmMvaW5kZXguY29mZmVlIC0tdGFyZ2V0IG5vZGUgLS11bWQgc21hcnQtZXh0ZW5kID4gZGlzdC9zbWFydC1leHRlbmQuanNcIixcbiAgICBcImNvdmVyYWdlXCI6IFwibnBtIHJ1biBjb3ZlcmFnZTpydW4gJiYgbnBtIHJ1biBjb3ZlcmFnZTpiYWRnZVwiLFxuICAgIFwiY292ZXJhZ2U6YmFkZ2VcIjogXCJiYWRnZS1nZW4gLWQgLmNvbmZpZy9iYWRnZXMvY292ZXJhZ2VcIixcbiAgICBcImNvdmVyYWdlOnJ1blwiOiBcImZvckNvdmVyYWdlPXRydWUgaXN0YW5idWwgY292ZXIgLS1kaXIgY292ZXJhZ2Ugbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gJG5wbV9wYWNrYWdlX21vY2hhX29wdHNcIixcbiAgICBcInBvc3RwdWJsaXNoXCI6IFwiZ2l0IHB1c2hcIixcbiAgICBcInBvc3R2ZXJzaW9uXCI6IFwibnBtIHJ1biBidWlsZCAmJiBnaXQgYWRkIC4gJiYgZ2l0IGNvbW1pdCAtYSAtbSAnW0J1aWxkXSdcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwiQ0k9MSBucG0gcnVuIHRlc3RcIixcbiAgICBcInRlc3RcIjogXCJtb2NoYSAkbnBtX3BhY2thZ2VfbW9jaGFfb3B0c1wiLFxuICAgIFwid2F0Y2hcIjogXCJzaW1wbHl3YXRjaCAtZyAnc3JjLyonIC14ICducG0gcnVuIGJ1aWxkOmRlYnVnIC1zJ1wiXG4gIH0sXG4gIFwic2ltcGx5aW1wb3J0XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcImNvZmZlZWlmeS1jYWNoZWRcIixcbiAgICAgIFwiLi8uY29uZmlnL3RyYW5zZm9ybXMvbWFjcm9zXCJcbiAgICBdLFxuICAgIFwiZmluYWxUcmFuc2Zvcm1cIjogW1xuICAgICAgXCIuY29uZmlnL3RyYW5zZm9ybXMvbWluaWZ5LXN1cGVyXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktcmVuYW1lXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc2ltcGxlXCJcbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjEuNy4zXCJcbn1cbiIsIi8qIVxuICogZXNjYXBlLWh0bWxcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTMgVEogSG9sb3dheWNodWtcbiAqIENvcHlyaWdodChjKSAyMDE1IEFuZHJlYXMgTHViYmVcbiAqIENvcHlyaWdodChjKSAyMDE1IFRpYW5jaGVuZyBcIlRpbW90aHlcIiBHdVxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBtYXRjaEh0bWxSZWdFeHAgPSAvW1wiJyY8Pl0vO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlSHRtbDtcblxuLyoqXG4gKiBFc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIHRoZSBnaXZlbiBzdHJpbmcgb2YgaHRtbC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGVzY2FwZSBmb3IgaW5zZXJ0aW5nIGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKSB7XG4gIHZhciBzdHIgPSAnJyArIHN0cmluZztcbiAgdmFyIG1hdGNoID0gbWF0Y2hIdG1sUmVnRXhwLmV4ZWMoc3RyKTtcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHZhciBlc2NhcGU7XG4gIHZhciBodG1sID0gJyc7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0SW5kZXggPSAwO1xuXG4gIGZvciAoaW5kZXggPSBtYXRjaC5pbmRleDsgaW5kZXggPCBzdHIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpbmRleCkpIHtcbiAgICAgIGNhc2UgMzQ6IC8vIFwiXG4gICAgICAgIGVzY2FwZSA9ICcmcXVvdDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vICZcbiAgICAgICAgZXNjYXBlID0gJyZhbXA7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyAnXG4gICAgICAgIGVzY2FwZSA9ICcmIzM5Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MDogLy8gPFxuICAgICAgICBlc2NhcGUgPSAnJmx0Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MjogLy8gPlxuICAgICAgICBlc2NhcGUgPSAnJmd0Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIGh0bWwgKz0gc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KTtcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaHRtbCArPSBlc2NhcGU7XG4gIH1cblxuICByZXR1cm4gbGFzdEluZGV4ICE9PSBpbmRleFxuICAgID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleClcbiAgICA6IGh0bWw7XG59XG4iLCIvKipcbiAqIGV2ZW50LWxpdGUuanMgLSBMaWdodC13ZWlnaHQgRXZlbnRFbWl0dGVyIChsZXNzIHRoYW4gMUtCIHdoZW4gZ3ppcHBlZClcbiAqXG4gKiBAY29weXJpZ2h0IFl1c3VrZSBLYXdhc2FraVxuICogQGxpY2Vuc2UgTUlUXG4gKiBAY29uc3RydWN0b3JcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2thd2FuZXQvZXZlbnQtbGl0ZVxuICogQHNlZSBodHRwOi8va2F3YW5ldC5naXRodWIuaW8vZXZlbnQtbGl0ZS9FdmVudExpdGUuaHRtbFxuICogQGV4YW1wbGVcbiAqIHZhciBFdmVudExpdGUgPSByZXF1aXJlKFwiZXZlbnQtbGl0ZVwiKTtcbiAqXG4gKiBmdW5jdGlvbiBNeUNsYXNzKCkgey4uLn0gICAgICAgICAgICAgLy8geW91ciBjbGFzc1xuICpcbiAqIEV2ZW50TGl0ZS5taXhpbihNeUNsYXNzLnByb3RvdHlwZSk7ICAvLyBpbXBvcnQgZXZlbnQgbWV0aG9kc1xuICpcbiAqIHZhciBvYmogPSBuZXcgTXlDbGFzcygpO1xuICogb2JqLm9uKFwiZm9vXCIsIGZ1bmN0aW9uKCkgey4uLn0pOyAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gKiBvYmoub25jZShcImJhclwiLCBmdW5jdGlvbigpIHsuLi59KTsgICAvLyBhZGQgb25lLXRpbWUgZXZlbnQgbGlzdGVuZXJcbiAqIG9iai5lbWl0KFwiZm9vXCIpOyAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGV2ZW50XG4gKiBvYmouZW1pdChcImJhclwiKTsgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBhbm90aGVyIGV2ZW50XG4gKiBvYmoub2ZmKFwiZm9vXCIpOyAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXJcbiAqL1xuXG5mdW5jdGlvbiBFdmVudExpdGUoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFdmVudExpdGUpKSByZXR1cm4gbmV3IEV2ZW50TGl0ZSgpO1xufVxuXG4oZnVuY3Rpb24oRXZlbnRMaXRlKSB7XG4gIC8vIGV4cG9ydCB0aGUgY2xhc3MgZm9yIG5vZGUuanNcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBtb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gRXZlbnRMaXRlO1xuXG4gIC8vIHByb3BlcnR5IG5hbWUgdG8gaG9sZCBsaXN0ZW5lcnNcbiAgdmFyIExJU1RFTkVSUyA9IFwibGlzdGVuZXJzXCI7XG5cbiAgLy8gbWV0aG9kcyB0byBleHBvcnRcbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgb246IG9uLFxuICAgIG9uY2U6IG9uY2UsXG4gICAgb2ZmOiBvZmYsXG4gICAgZW1pdDogZW1pdFxuICB9O1xuXG4gIC8vIG1peGluIHRvIHNlbGZcbiAgbWl4aW4oRXZlbnRMaXRlLnByb3RvdHlwZSk7XG5cbiAgLy8gZXhwb3J0IG1peGluIGZ1bmN0aW9uXG4gIEV2ZW50TGl0ZS5taXhpbiA9IG1peGluO1xuXG4gIC8qKlxuICAgKiBJbXBvcnQgb24oKSwgb25jZSgpLCBvZmYoKSBhbmQgZW1pdCgpIG1ldGhvZHMgaW50byB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLm1peGluXG4gICAqIEBwYXJhbSB0YXJnZXQge1Byb3RvdHlwZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gbWl4aW4odGFyZ2V0KSB7XG4gICAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHRhcmdldFtrZXldID0gbWV0aG9kc1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUub25cbiAgICogQHBhcmFtIHR5cGUge3N0cmluZ31cbiAgICogQHBhcmFtIGZ1bmMge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXRlfSBTZWxmIGZvciBtZXRob2QgY2hhaW5pbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gb24odHlwZSwgZnVuYykge1xuICAgIGdldExpc3RlbmVycyh0aGlzLCB0eXBlKS5wdXNoKGZ1bmMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUtdGltZSBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUub25jZVxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZnVuYyB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtFdmVudExpdGV9IFNlbGYgZm9yIG1ldGhvZCBjaGFpbmluZ1xuICAgKi9cblxuICBmdW5jdGlvbiBvbmNlKHR5cGUsIGZ1bmMpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgd3JhcC5vcmlnaW5hbExpc3RlbmVyID0gZnVuYztcbiAgICBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSkucHVzaCh3cmFwKTtcbiAgICByZXR1cm4gdGhhdDtcblxuICAgIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgICBvZmYuY2FsbCh0aGF0LCB0eXBlLCB3cmFwKTtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5vZmZcbiAgICogQHBhcmFtIFt0eXBlXSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gW2Z1bmNdIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge0V2ZW50TGl0ZX0gU2VsZiBmb3IgbWV0aG9kIGNoYWluaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9mZih0eXBlLCBmdW5jKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBsaXN0bmVycztcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGF0W0xJU1RFTkVSU107XG4gICAgfSBlbHNlIGlmICghZnVuYykge1xuICAgICAgbGlzdG5lcnMgPSB0aGF0W0xJU1RFTkVSU107XG4gICAgICBpZiAobGlzdG5lcnMpIHtcbiAgICAgICAgZGVsZXRlIGxpc3RuZXJzW3R5cGVdO1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGxpc3RuZXJzKS5sZW5ndGgpIHJldHVybiBvZmYuY2FsbCh0aGF0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdG5lcnMgPSBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgdHJ1ZSk7XG4gICAgICBpZiAobGlzdG5lcnMpIHtcbiAgICAgICAgbGlzdG5lcnMgPSBsaXN0bmVycy5maWx0ZXIobmUpO1xuICAgICAgICBpZiAoIWxpc3RuZXJzLmxlbmd0aCkgcmV0dXJuIG9mZi5jYWxsKHRoYXQsIHR5cGUpO1xuICAgICAgICB0aGF0W0xJU1RFTkVSU11bdHlwZV0gPSBsaXN0bmVycztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoYXQ7XG5cbiAgICBmdW5jdGlvbiBuZSh0ZXN0KSB7XG4gICAgICByZXR1cm4gdGVzdCAhPT0gZnVuYyAmJiB0ZXN0Lm9yaWdpbmFsTGlzdGVuZXIgIT09IGZ1bmM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoICh0cmlnZ2VyKSBhbiBldmVudC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUuZW1pdFxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gW3ZhbHVlXSB7Kn1cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgd2hlbiBhIGxpc3RlbmVyIHJlY2VpdmVkIHRoZSBldmVudFxuICAgKi9cblxuICBmdW5jdGlvbiBlbWl0KHR5cGUsIHZhbHVlKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgdHJ1ZSk7XG4gICAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgYXJnbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYXJnbGVuID09PSAxKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCh6ZXJvYXJnKTtcbiAgICB9IGVsc2UgaWYgKGFyZ2xlbiA9PT0gMikge1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2gob25lYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2gobW9yZWFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gISFsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gemVyb2FyZyhmdW5jKSB7XG4gICAgICBmdW5jLmNhbGwodGhhdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25lYXJnKGZ1bmMpIHtcbiAgICAgIGZ1bmMuY2FsbCh0aGF0LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9yZWFyZ3MoZnVuYykge1xuICAgICAgZnVuYy5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgcmVhZG9ubHkpIHtcbiAgICBpZiAocmVhZG9ubHkgJiYgIXRoYXRbTElTVEVORVJTXSkgcmV0dXJuO1xuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGF0W0xJU1RFTkVSU10gfHwgKHRoYXRbTElTVEVORVJTXSA9IHt9KTtcbiAgICByZXR1cm4gbGlzdGVuZXJzW3R5cGVdIHx8IChsaXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG4gIH1cblxufSkoRXZlbnRMaXRlKTtcbiIsImlzQXJyYXkgPSAodGFyZ2V0KS0+XG5cdEFycmF5LmlzQXJyYXkodGFyZ2V0KVxuXG5pc09iamVjdCA9ICh0YXJnZXQpLT5cblx0dGFyZ2V0IGFuZCBPYmplY3Q6OnRvU3RyaW5nLmNhbGwodGFyZ2V0KSBpcyAnW29iamVjdCBPYmplY3RdJyBvciBpc0FycmF5KHRhcmdldClcblxuc2hvdWxkRGVlcEV4dGVuZCA9IChvcHRpb25zLCB0YXJnZXQsIHBhcmVudEtleSktPlxuXHRpZiBvcHRpb25zLmRlZXBcblx0XHRpZiBvcHRpb25zLm5vdERlZXAgdGhlbiBub3Qgb3B0aW9ucy5ub3REZWVwW3RhcmdldF0gZWxzZSB0cnVlXG5cblx0ZWxzZSBpZiBvcHRpb25zLmRlZXBPbmx5XG5cdFx0b3B0aW9ucy5kZWVwT25seVt0YXJnZXRdIG9yIHBhcmVudEtleSBhbmQgc2hvdWxkRGVlcEV4dGVuZChvcHRpb25zLCBwYXJlbnRLZXkpXG5cblx0IyBlbHNlIGZhbHNlXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHRlbmQgPSAob3B0aW9ucywgdGFyZ2V0LCBzb3VyY2VzLCBwYXJlbnRLZXkpLT5cblx0dGFyZ2V0ID0ge30gaWYgbm90IHRhcmdldCBvciB0eXBlb2YgdGFyZ2V0IGlzbnQgJ29iamVjdCcgYW5kIHR5cGVvZiB0YXJnZXQgaXNudCAnZnVuY3Rpb24nXG5cblx0Zm9yIHNvdXJjZSBpbiBzb3VyY2VzIHdoZW4gc291cmNlP1xuXHRcdGZvciBrZXkgb2Ygc291cmNlXG5cdFx0XHRzb3VyY2VWYWx1ZSA9IHNvdXJjZVtrZXldXG5cdFx0XHR0YXJnZXRWYWx1ZSA9IHRhcmdldFtrZXldXG5cdFx0XHRcblx0XHRcdGNvbnRpbnVlIGlmIHNvdXJjZVZhbHVlIGlzIHRhcmdldCBvclxuXHRcdFx0XHRcdFx0c291cmNlVmFsdWUgaXMgdW5kZWZpbmVkIG9yXG5cdFx0XHRcdFx0XHQoc291cmNlVmFsdWUgaXMgbnVsbCBhbmQgbm90IG9wdGlvbnMuYWxsb3dOdWxsIGFuZCBub3Qgb3B0aW9ucy5udWxsRGVsZXRlcykgb3Jcblx0XHRcdFx0XHRcdChvcHRpb25zLmtleXMgYW5kIG5vdCBvcHRpb25zLmtleXNba2V5XSkgb3Jcblx0XHRcdFx0XHRcdChvcHRpb25zLm5vdEtleXMgYW5kIG9wdGlvbnMubm90S2V5c1trZXldKSBvclxuXHRcdFx0XHRcdFx0KG9wdGlvbnMub3duIGFuZCBub3Qgc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIG9yXG5cdFx0XHRcdFx0XHQob3B0aW9ucy5nbG9iYWxGaWx0ZXIgYW5kIG5vdCBvcHRpb25zLmdsb2JhbEZpbHRlcihzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpKSBvclxuXHRcdFx0XHRcdFx0KG9wdGlvbnMuZmlsdGVycyBhbmQgb3B0aW9ucy5maWx0ZXJzW2tleV0gYW5kIG5vdCBvcHRpb25zLmZpbHRlcnNba2V5XShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpKVxuXHRcdFx0XG5cdFx0XHRpZiBzb3VyY2VWYWx1ZSBpcyBudWxsIGFuZCBvcHRpb25zLm51bGxEZWxldGVzXG5cdFx0XHRcdGRlbGV0ZSB0YXJnZXRba2V5XVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0aWYgb3B0aW9ucy5nbG9iYWxUcmFuc2Zvcm1cblx0XHRcdFx0c291cmNlVmFsdWUgPSBvcHRpb25zLmdsb2JhbFRyYW5zZm9ybShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpXG5cdFx0XHRpZiBvcHRpb25zLnRyYW5zZm9ybXMgYW5kIG9wdGlvbnMudHJhbnNmb3Jtc1trZXldXG5cdFx0XHRcdHNvdXJjZVZhbHVlID0gb3B0aW9ucy50cmFuc2Zvcm1zW2tleV0oc291cmNlVmFsdWUsIGtleSwgc291cmNlKVxuXHRcblx0XHRcdHN3aXRjaFxuXHRcdFx0XHR3aGVuIG9wdGlvbnMuY29uY2F0IGFuZCBpc0FycmF5KHNvdXJjZVZhbHVlKSBhbmQgaXNBcnJheSh0YXJnZXRWYWx1ZSlcblx0XHRcdFx0XHR0YXJnZXRba2V5XSA9IHRhcmdldFZhbHVlLmNvbmNhdChzb3VyY2VWYWx1ZSlcblx0XHRcdFx0XG5cdFx0XHRcdHdoZW4gc2hvdWxkRGVlcEV4dGVuZChvcHRpb25zLCBrZXksIHBhcmVudEtleSkgYW5kIGlzT2JqZWN0KHNvdXJjZVZhbHVlKVxuXHRcdFx0XHRcdHN1YlRhcmdldCA9IGlmIGlzT2JqZWN0KHRhcmdldFZhbHVlKSB0aGVuIHRhcmdldFZhbHVlIGVsc2UgaWYgaXNBcnJheShzb3VyY2VWYWx1ZSkgdGhlbiBbXSBlbHNlIHt9XG5cdFx0XHRcdFx0dGFyZ2V0W2tleV0gPSBleHRlbmQob3B0aW9ucywgc3ViVGFyZ2V0LCBbc291cmNlVmFsdWVdLCBrZXkpXG5cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRhcmdldFtrZXldID0gc291cmNlVmFsdWVcblxuXG5cdHJldHVybiB0YXJnZXRcblxuXG5cblxuXG5cblxuIl19