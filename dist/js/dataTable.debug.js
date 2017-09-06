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
var DataTable, SimplyBind, currentID, escHTML, extend;

SimplyBind = require(1);

extend = require(2);

escHTML = require(3);

var markup;

markup = {
  tableOuterwrap: function(arg) {
    var ID, baseClass, cellsHavePadding, hasMobile, minWidth;
    ID = arg.ID, baseClass = arg.baseClass, minWidth = arg.minWidth, hasMobile = arg.hasMobile, cellsHavePadding = arg.cellsHavePadding;
    return "<div id='" + baseClass + "-" + ID + "' class='" + baseClass + "-outerwrap {{loading}} {{noResults}} {{hasError}} " + (minWidth ? '_hasMinWidth' : '') + " " + (hasMobile ? '{{mobileVersion}}' : '') + " " + (cellsHavePadding ? '_cellsHavePadding' : '') + " '></div>";
  },
  table: function(arg) {
    var alignment, baseClass;
    baseClass = arg.baseClass, alignment = arg.alignment;
    return "<div class='" + baseClass + " alignment---" + alignment + " sortDirection---{{sortDirection}}'> <div class='" + baseClass + "-heading'> <div class='" + baseClass + "-heading-row'></div> </div> <div class='" + baseClass + "-body'></div> </div>";
  },
  loading: function(arg) {
    var baseClass;
    baseClass = arg.baseClass;
    return "<div class='" + baseClass + "-loading {{isVisible}}'> <div class='" + baseClass + "-loading-innerwrap'> <div class='" + baseClass + "-loading-icon'></div> <div class='" + baseClass + "-loading-text'>Loading</div> </div> </div>";
  },
  noResults: function(arg) {
    var baseClass, itemPluralLabel, itemSingleLabel, ref, ref1;
    baseClass = arg.baseClass, itemSingleLabel = (ref = arg.itemSingleLabel) != null ? ref : 'Item', itemPluralLabel = (ref1 = arg.itemPluralLabel) != null ? ref1 : itemSingleLabel + 's';
    return "<div class='" + baseClass + "-noResults {{isVisible}}'> <div class='" + baseClass + "-noResults-innerwrap'> <div class='" + baseClass + "-noResults-icon'></div> <div class='" + baseClass + "-noResults-text'> <div class='" + baseClass + "-noResults-text-title'>No " + itemSingleLabel + "s to Display</div> <div class='" + baseClass + "-noResults-text-subtitle'>There are no matching " + itemPluralLabel + " for the search query you've typed.</div> </div> </div> </div>";
  },
  error: function(arg) {
    var baseClass;
    baseClass = arg.baseClass;
    return "<div class='" + baseClass + "-error {{isVisible}}'> <div class='" + baseClass + "-error-innerwrap'> <div class='" + baseClass + "-error-icon'></div> <div class='" + baseClass + "-error-text'> <div class='" + baseClass + "-error-text-title'>A Fatal Error has Occured</div> <div class='" + baseClass + "-error-text-subtitle'>Report the following to the admin:<br />\"{{errorMessage}}\"</div> </div> </div> </div>";
  },
  pageStatus: function(arg) {
    var baseClass, showPageStatus;
    baseClass = arg.baseClass, showPageStatus = arg.showPageStatus;
    return "<div class='" + baseClass + "-pageStatus " + (showPageStatus ? 'is_visible' : '') + "'> Showing {{rowRange}} of {{totalRows}} </div>";
  },
  pagination: function(arg) {
    var baseClass;
    baseClass = arg.baseClass;
    return "<div class='" + baseClass + "-pagination {{hasExtra}} {{isVisible}}'> <div class='" + baseClass + "-pagination-item _paginationItem _back'> <div class='" + baseClass + "-pagination-item-text'></div> </div> <div class='" + baseClass + "-pagination-itemswrap _paginationItems'></div> <div class='" + baseClass + "-pagination-item _paginationItem _extraIndicator'> <div class='" + baseClass + "-pagination-item-text'></div> <select class='" + baseClass + "-pagination-item-select'></select> </div> <div class='" + baseClass + "-pagination-item _paginationItem _next'> <div class='" + baseClass + "-pagination-item-text'></div> </div> </div>";
  },
  paginationItem: function(arg) {
    var baseClass, value;
    baseClass = arg.baseClass, value = arg.value;
    return "<div class='" + baseClass + "-pagination-item _paginationItem'> <div class='" + baseClass + "-pagination-item-text'>" + value + "</div> </div>";
  },
  headingCell: function(arg) {
    var baseClass, extraClasses, icon, label, ref, ref1, ref2, slug, style;
    baseClass = arg.baseClass, extraClasses = (ref = arg.extraClasses) != null ? ref : '', slug = arg.slug, icon = (ref1 = arg.icon) != null ? ref1 : '', label = arg.label, style = (ref2 = arg.style) != null ? ref2 : '';
    return "<div class='" + baseClass + "-heading-row-cell " + extraClasses + " __" + slug + "' data-slug='" + slug + "' data-icon='" + icon + "' " + style + "> <div class='" + baseClass + "-heading-row-cell-text'>" + label + "</div> </div>";
  },
  row: function(arg) {
    var baseClass, cells, drilldown, ref, rowID;
    baseClass = arg.baseClass, rowID = arg.rowID, cells = arg.cells, drilldown = (ref = arg.drilldown) != null ? ref : '';
    return "<div class='" + baseClass + "-body-row _tableRow {{drilldownState}}' data-row-id='" + rowID + "'> <div class='" + baseClass + "-body-row-expandDrilldown _expandDrilldown'> <div class='" + baseClass + "-body-row-expandDrilldown-icon'></div> </div> " + cells + " <div class='" + baseClass + "-body-row-drilldown _tableRowDrilldown'> " + drilldown + " </div> </div>";
  },
  rowCell: function(arg) {
    var baseClass, column, extraClasses, label, ref, ref1, slug, style, value;
    baseClass = arg.baseClass, extraClasses = (ref = arg.extraClasses) != null ? ref : '', label = arg.label, column = arg.column, slug = arg.slug, value = arg.value, style = (ref1 = arg.style) != null ? ref1 : '';
    return "<div class='" + baseClass + "-body-row-cell __" + slug + " " + extraClasses + "' data-slug='" + slug + "' data-column='" + column + "' " + style + "> <div class='" + baseClass + "-body-row-cell-innerwrap' title='" + label + "'>" + value + "</div> </div>";
  },
  searchField: function(arg) {
    var baseClass, search;
    baseClass = arg.baseClass, search = arg.search;
    return "<div class='" + baseClass + "-search " + ((search != null ? search.length : void 0) ? 'is_visible' : '') + "'> <select class='" + baseClass + "-search-select'></select> <input class='" + baseClass + "-search-input' /> <div class='" + baseClass + "-search-selectTrigger'></div> </div>";
  },
  ipDetails: function(arg) {
    var baseClass, extra, ipAddress, ref;
    baseClass = arg.baseClass, ipAddress = arg.ipAddress, extra = (ref = arg.extra) != null ? ref : '';
    return "<div class='" + baseClass + "-ipDetails _ipDetails' data-ip='" + ipAddress + "'> <div class='" + baseClass + "-ipDetails-trigger _ipDetails-trigger'></div> <div class='" + baseClass + "-ipDetails-content'>Loading IP Details</div> </div> " + extra;
  },
  ipDetailsItem: function(arg) {
    var baseClass, label, value;
    baseClass = arg.baseClass, label = arg.label, value = arg.value;
    return "<div class='" + baseClass + "-ipDetails-content-item'> <div class='" + baseClass + "-ipDetails-content-item-label'>" + label + ": </div> <div class='" + baseClass + "-ipDetails-content-item-value'>" + value + "</div> </div>";
  },
  fields: function(arg) {
    var baseClass, fields;
    baseClass = arg.baseClass, fields = arg.fields;
    return "<div class='" + baseClass + "-fieldGroup'>" + fields + "</div>";
  },
  fieldsItem: function(arg) {
    var baseClass, label, value;
    baseClass = arg.baseClass, label = arg.label, value = arg.value;
    return "<div class='" + baseClass + "-fieldGroup-item'> <div class='" + baseClass + "-fieldGroup-item-label'>" + label + ": </div> <div class='" + baseClass + "-fieldGroup-item-value'>" + (escHTML(value)) + "</div> </div>";
  },
  button: function(arg) {
    var action, baseClass, icon, isMulti, ref;
    baseClass = arg.baseClass, action = arg.action, icon = (ref = arg.icon) != null ? ref : '', isMulti = arg.isMulti;
    return "<div class='" + baseClass + "-button _actionButton " + (isMulti ? '_isMulti' : '') + "' data-action='" + action + "'> <div class='" + baseClass + "-button-icon'>" + icon + "</div> </div>";
  },
  actions: function(arg) {
    var actions, baseClass;
    baseClass = arg.baseClass, actions = arg.actions;
    return "<div class='" + baseClass + "-actions'> <div class='" + baseClass + "-actions-popup'>" + actions + "</div> </div>";
  },
  actionsOverlay: function() {
    return "<div class='" + DataTable.defaults.baseClass + "-actions-overlay'></div>";
  },
  actionsItem: function(arg) {
    var action, baseClass, customIconStyle, icon, label, ref;
    baseClass = arg.baseClass, action = arg.action, icon = arg.icon, label = arg.label, customIconStyle = (ref = arg.customIconStyle) != null ? ref : '';
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
  'ipDataFetcher': function(ipAddress) {
    return new Promise(function(resolve) {
      return $.get("http://ipinfo.io/" + ipAddress, resolve, 'JSON');
    });
  }
};

;

var helpers;

helpers = {};

helpers.compareValues = function(valueA, valueB) {
  switch (false) {
    case typeof valueA !== typeof valueB:
      return valueA === valueB;
    case typeof valueA !== 'string':
      return valueA === '' + valueB;
    case typeof valueA !== 'number':
      return valueA === parseFloat(valueB);
  }
};

helpers.toggleActionsPopup = function(actionsPopup$) {
  var isOpen, overlay$;
  isOpen = actionsPopup$.data('isOpen');
  if (isOpen) {
    actionsPopup$.data('overlay').remove();
    actionsPopup$.removeClass('is_visible');
  } else {
    actionsPopup$.data('overlay', overlay$ = $(markup.actionsOverlay()));
    actionsPopup$.addClass('is_visible');
    overlay$.appendTo(document.body).one('click', function() {
      return helpers.toggleActionsPopup(actionsPopup$);
    });
  }
  return actionsPopup$.data('isOpen', !isOpen);
};

helpers.getBreakdownTotal = function(breakdown, breakdownKeys) {
  switch (false) {
    case breakdownKeys.length !== 0:
      return 0;
    default:
      return breakdownKeys.map(function(breakdownItem) {
        return breakdown[breakdownItem];
      }).reduce(function(a, b) {
        return a + b;
      });
  }
};

helpers.normalizeColumns = function(columns) {
  var column, i, j, label, len, len1, output, ref;
  if (!Array.isArray(columns)) {
    output = columns;
  } else {
    output = {};
    if (typeof columns[0] === 'string') {
      for (i = 0, len = columns.length; i < len; i++) {
        label = columns[i];
        output[label] = {
          label: label
        };
      }
    } else if ((ref = columns[0]) != null ? ref.label : void 0) {
      for (j = 0, len1 = columns.length; j < len1; j++) {
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

helpers.getBreakdownBarWidth = function(row, largest) {
  return (row.breakdownBarTotal / largest) * (100 - 18);
};

helpers.genHeaderCellStyle = function(column) {
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

helpers.genCellStyle = function(column) {
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

helpers.genCellClassname = function(column) {
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

helpers.colorMapping = function(value, colorType) {
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

helpers.iconMapping = function(value, iconType) {
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

DataTable = function(container, options) {
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
  Promise.bind(this).then(this.attachEvents).then(this.attachBindings).then(function() {
    if (this.options.loadOnInit) {
      return this.loadData();
    }
  });
  return this;
};

DataTable.prototype.fetchData = function() {
  this.state.loading = true;
  return Promise.resolve().then((function(_this) {
    return function() {
      return _this.options.data.call(_this);
    };
  })(this)).then((function(_this) {
    return function(data) {
      _this.state.loading = _this.state.error = false;
      return data;
    };
  })(this))["catch"]((function(_this) {
    return function(err) {
      return _this.state.error = err;
    };
  })(this));
};

DataTable.prototype.setData = function(data) {
  if (Array.isArray(data)) {
    return this.allRows = data;
  }
};

DataTable.prototype.loadData = function() {
  var i, len, ref, row;
  if (this.allRows.length) {
    ref = this.allRows;
    for (i = 0, len = ref.length; i < len; i++) {
      row = ref[i];
      this.unprocessRow(row);
    }
  }
  return this.fetchData().then((function(_this) {
    return function(data) {
      return _this.setData(data);
    };
  })(this));
};

DataTable.prototype.refresh = function() {
  this.availableRows = this.availableRows;
  return this.currentPage = this.currentPage;
};

DataTable.prototype.markupArgs = function(argsObject) {
  if (argsObject == null) {
    argsObject = {};
  }
  argsObject.baseClass = this.options.baseClass;
  return argsObject;
};

DataTable.prototype.calcPageCount = function(rows) {
  this.pageCountReal = Math.ceil(rows.length / this.options.perPage);
  return this.pageCount = this.pageCountReal > this.options.pageCountMax ? this.options.pageCountMax : this.pageCountReal;
};

DataTable.prototype.calcPercentageString = function(columnValue, columnName, row) {
  var columnA, columnB, formula, mathOperator, percent, percentageValue;
  formula = this.options.percentage[columnName];
  columnA = formula[0];
  columnB = formula[2];
  mathOperator = formula[1];
  percentageValue = (function() {
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

DataTable.prototype.sortRows = function(rows, targetColumn) {
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
      return rows.slice().sort(customSort || (function(_this) {
        return function(a, b) {
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

DataTable.prototype.setVisiblePage = function(targetPage) {
  var i, len, row, rowsToHide, rowsToReveal, slice;
  targetPage--;
  slice = {
    'start': targetPage * this.options.perPage,
    'end': (targetPage * this.options.perPage) + this.options.perPage
  };
  rowsToReveal = this.availableRows.slice(slice.start, slice.end);
  rowsToHide = this.visibleRows.slice();
  for (i = 0, len = rowsToHide.length; i < len; i++) {
    row = rowsToHide[i];
    row.visible = false;
  }
  this.visibleRows.length = 0;
  return this.visibleRows.push.apply(this.visibleRows, rowsToReveal);
};

DataTable.prototype.setPageIndicator = function(targetPage) {
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

DataTable.prototype.generateHeadingColumns = function() {
  var column, label;
  this.options.columns = helpers.normalizeColumns(this.options.columns);
  if ((function() {
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
  return Object.keys(this.options.columns).map((function(_this) {
    return function(label) {
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

DataTable.prototype.updateColumns = function(updatedColumns) {
  updatedColumns = helpers.normalizeColumns(updatedColumns);
  extend.deep(this.options.columns, updatedColumns);
  return this.currentPage = this.currentPage;
};

;

DataTable.prototype.processRow = function(row) {
  var ref;
  if (row.processed) {
    return row;
  } else {
    this.generateRow(row);
    SimplyBind('visible', {
      updateEvenIfSame: true
    }).of(row).to((function(_this) {
      return function(isVisible, prevValue) {
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
      SimplyBind('largestBreakdownTotal').of(this).to('updatedBreakdownWidth').of(row).transform(function() {
        if (row.visible) {
          return true;
        } else {
          return false;
        }
      }).and.to('breakdownBarWidth').of(row).transform((function(_this) {
        return function() {
          return helpers.getBreakdownBarWidth(row, _this.largestBreakdownTotal);
        };
      })(this)).chainTo('width').of(row.breakdownBarEl[0].style).transform(function(width) {
        return width + '%';
      }).and.to((function(_this) {
        return function() {
          var drilldownEl, i, index, len, ref1, ref2, width;
          ref1 = row.drilldownEls;
          for (index = i = 0, len = ref1.length; i < len; index = ++i) {
            drilldownEl = ref1[index];
            width = helpers.getBreakdownBarWidth(row.drilldown[index], row.drilldown.largestBreakdownTotal);
            if ((ref2 = $(drilldownEl).children('.is_breakdown_bar').children().children()[0]) != null) {
              ref2.style.width = width + '%';
            }
          }
        };
      })(this)).condition(function() {
        return row.drilldown;
      }).conditionAll(function() {
        return row.visible;
      });
    }
    row.processed = true;
    return row;
  }
};

DataTable.prototype.unprocessRow = function(row) {
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

DataTable.prototype.reRenderRow = function(row) {
  return this.generateRow(row);
};

DataTable.prototype.generateRow = function(row) {
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
      row.drilldown.largestBreakdownTotal = Math.max.apply(Math, row.drilldown.map(function(subRow) {
        return subRow.breakdownBarTotal;
      }));
    }
    SimplyBind('drilldownOpen').of(row).to('className.drilldownState').of(row.el).transform(function(drilldownOpen) {
      if (drilldownOpen) {
        return 'hasDrilldown drilldownIsOpen';
      } else {
        return 'hasDrilldown';
      }
    });
    SimplyBind('visible').of(row).once.to(function() {
      return SimplyBind(function() {
        if (!row.drilldownOpen) {
          return setTimeout(function() {
            var buttonHeight, rowHeight;
            rowHeight = row.el.height();
            buttonHeight = row.expandButton.height();
            return row.expandButton[0].style.top = (rowHeight / 2 - buttonHeight / 2) + "px";
          });
        }
      }).updateOn('event:resize', {
        throttle: 300
      }).of(window);
    }).condition(function(visible) {
      return visible;
    });
  }
  return row;
};

DataTable.prototype.generateRowMarkup = function(row, parentRow) {
  var isSub;
  isSub = !!parentRow;
  return markup.row(this.markupArgs({
    'rowID': isSub ? parentRow[this.options.uniqueID] : row[this.options.uniqueID],
    'drilldown': isSub ? '' : row.drilldown ? (function(_this) {
      return function() {
        var drilldownMarkups, drilldownRow, i, len, ref;
        drilldownMarkups = '';
        ref = row.drilldown;
        for (i = 0, len = ref.length; i < len; i++) {
          drilldownRow = ref[i];
          drilldownMarkups += _this.generateRowMarkup(drilldownRow, row);
        }
        return drilldownMarkups;
      };
    })(this)() : void 0,
    'cells': (function(_this) {
      return function() {
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
            'value': (function() {
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

DataTable.prototype.generateBreakdownBar = function(breakdown, rowObj, columnEntity) {
  var breakdownKeys, total;
  breakdownKeys = this.legend || Object.keys(breakdown);
  rowObj.breakdownBarTotal = total = this.getBreakdownTotal(breakdown, breakdownKeys);
  if (!total) {
    return 'N/A';
  }
  return markup.breakdownBar(this.markupArgs({
    'total': total,
    'totalFormatted': columnEntity.valueFormat ? columnEntity.valueFormat(total) : total,
    'bars': (function() {
      var bars, i, key, len, value;
      bars = '';
      for (i = 0, len = breakdownKeys.length; i < len; i++) {
        key = breakdownKeys[i];
        value = breakdown[key];
        bars += markup.block_table_body_row_cell_breakdown_bar.replace('{{width}}', (value / total) * 100);
      }
      return bars;
    })(),
    'hoverBox': (function() {
      return markup.block_table_body_row_cell_breakdown_hoverbox.replace('{{rows}}', function() {
        var rows;
        rows = '';
        breakdownKeys.forEach(function(key, index) {
          return rows += markup.block_table_body_row_cell_breakdown_hoverbox_row.replace('{{color}}', customColors(index)).replace('{{key}}', key).replace('{{value}}', columnEntity.valueFormat ? columnEntity.valueFormat(breakdown[key]) : breakdown[key]);
        });
        return rows;
      });
    })()
  }));
};

DataTable.prototype.generateInlineFields = function(dataFields) {
  return markup.fields(this.markupArgs({
    'fields': (function(_this) {
      return function() {
        var label, output, value;
        if (typeof dataFields !== 'object') {
          return '';
        }
        output = (function() {
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

DataTable.prototype.generateButton = function(action, icon, isMulti) {
  return markup.button(this.markupArgs({
    action: action,
    icon: icon,
    isMulti: isMulti
  }));
};

DataTable.prototype.generateActions = function(column) {
  var actionsMarkup, buttonMarkup;
  if (column.actions == null) {
    column.actions = 'multiActions';
  }
  buttonMarkup = this.generateButton(column.actions, column.buttonIcon || column.icon, true);
  actionsMarkup = markup.actions(this.markupArgs({
    'actions': (function(_this) {
      return function() {
        var action, output;
        if (!_this.options.actions) {
          return '';
        }
        output = (function() {
          var i, len, ref, results;
          ref = this.options.actions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
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

DataTable.prototype.generateIpDetails = function(ipAddress, row, column) {
  return markup.ipDetails(this.markupArgs({
    ipAddress: ipAddress,
    extra: typeof column.extraMarkup === "function" ? column.extraMarkup(ipAddress, row) : void 0
  }));
};

;

;

DataTable.prototype.attachEvents = function() {
  this.els.pagination.on('click', '._paginationItem', (function(_this) {
    return function(event) {
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
  this.els.tableHeading.on('click', '._isSortable', (function(_this) {
    return function(event) {
      return _this.sortBy = event.currentTarget.children[0].textContent;
    };
  })(this));
  this.els.tableBody.on('click', '._actionButton', (function(_this) {
    return function(event) {
      var action, button$, dataItem, itemID, itemIndex, itemRow$;
      button$ = $(event.currentTarget);
      if (button$.hasClass('_isMulti')) {
        return helpers.toggleActionsPopup(button$.next().children());
      } else {
        itemRow$ = button$.closest('._tableRow');
        action = button$.data('action');
        itemID = itemRow$.data('row-id');
        itemIndex = itemRow$.data('index');
        dataItem = itemID ? _this.allRows.find(function(row) {
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
  this.els.tableBody.on('click', '._expandDrilldown', (function(_this) {
    return function(event) {
      var button$, itemRow;
      button$ = $(event.currentTarget);
      itemRow = button$.parent().data('row');
      return itemRow.drilldownOpen = !itemRow.drilldownOpen;
    };
  })(this));
  this.els.tableBody.on('mouseover', '._ipDetails-trigger', (function(_this) {
    return function(event) {
      var content$, country$, ipAddress, isLoaded, trigger$, wrapper$;
      trigger$ = $(event.currentTarget);
      wrapper$ = trigger$.parent();
      content$ = trigger$.next();
      country$ = content$.next();
      ipAddress = wrapper$.data('ip');
      isLoaded = trigger$.hasClass('_isReady');
      if (!isLoaded) {
        return _this.options.ipDataFetcher(ipAddress).then(function(ipDetails) {
          var label, output, value;
          if (!ipDetails) {
            return;
          }
          output = (function() {
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

DataTable.prototype.attachBindings = function() {
  var column, fn, l, ref;
  SimplyBind.settings.trackArrayChildren = false;
  SimplyBind('noResults').of(this.state).to('className.isVisible').of(this.els.noResultsMessage).transform((function(_this) {
    return function(noResults) {
      if (noResults && !_this.state.loading) {
        return 'is_visible';
      } else {
        return '';
      }
    };
  })(this)).and.to('className.noResults').of(this.els.tableOuterwrap).transform((function(_this) {
    return function(noResults) {
      if (noResults && !_this.state.loading) {
        return '_noResults';
      } else {
        return '';
      }
    };
  })(this));
  SimplyBind('loading').of(this.state).to('className.isVisible').of(this.els.loadingMessage).transform(function(loading) {
    if (loading) {
      return 'is_visible';
    } else {
      return '';
    }
  }).and.to('className.loading').of(this.els.tableOuterwrap).transform((function(_this) {
    return function(loading) {
      if (loading) {
        return '_loading';
      } else {
        return '';
      }
    };
  })(this)).and.to((function(_this) {
    return function(loading) {
      if (loading) {
        return _this.state.noResults = false;
      } else {
        return _this.state.noResults = !_this.visibleRows.length;
      }
    };
  })(this));
  SimplyBind('error').of(this.state).to('textContent.errorMessage').of(this.els.errorMessage).and.to('className.isVisible').of(this.els.errorMessage).transform(function(hasError) {
    if (hasError) {
      return 'is_visible';
    } else {
      return '';
    }
  }).and.to('className.hasError').of(this.els.tableOuterwrap).transform(function(hasError) {
    if (hasError) {
      return '_error';
    } else {
      return '';
    }
  }).and.to(function(err) {
    if (err) {
      return console.error(err);
    }
  });
  if (this.options.hasMobile) {
    this.windowWidth = window.innerWidth;
    SimplyBind('event:resize').of(window).to((function(_this) {
      return function() {
        return _this.windowWidth = window.innerWidth;
      };
    })(this));
    SimplyBind('windowWidth').of(this).to('className.mobileVersion').of(this.els.tableOuterwrap).transform((function(_this) {
      return function(windowWidth) {
        if (windowWidth <= _this.options.mobileWidth) {
          return '_mobileVersion';
        } else {
          return '';
        }
      };
    })(this));
  }
  ref = this.options.columns;
  fn = (function(_this) {
    return function(column) {
      return SimplyBind('hidden').of(column).to("innerHTML." + column.slug).of(_this.els.globalStyles).transform(function(isHidden) {
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
  SimplyBind('array:visibleRows').of(this).to((function(_this) {
    return function(rows, prevRows) {
      var err, i, j, len, len1, row;
      if (prevRows != null ? prevRows.length : void 0) {
        for (i = 0, len = prevRows.length; i < len; i++) {
          row = prevRows[i];
          row.visible = false;
        }
      }
      try {
        for (j = 0, len1 = rows.length; j < len1; j++) {
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
  })(this)).and.to((function(_this) {
    return function(rows) {
      var i, largestBreakdownTotal, len, row;
      if (!_this.hasBreakdownBar) {
        return;
      }
      for (i = 0, len = rows.length; i < len; i++) {
        row = rows[i];
        if (row.breakdownBarTotal > largestBreakdownTotal || (typeof largestBreakdownTotal === "undefined" || largestBreakdownTotal === null)) {
          largestBreakdownTotal = row.breakdownBarTotal;
        }
      }
      return _this.largestBreakdownTotal = largestBreakdownTotal || 0;
    };
  })(this)).and.to('textContent.rowRange').of(this.els.pageStatus).transform((function(_this) {
    return function(rows) {
      return (_this.availableRows.indexOf(rows[0]) + 1) + "-" + (_this.availableRows.indexOf(rows.slice(-1)[0]) + 1);
    };
  })(this));
  SimplyBind('array:allRows').of(this).to((function(_this) {
    return function(rows) {
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
  }).of(this).to((function(_this) {
    return function(rows) {
      return _this.calcPageCount(rows);
    };
  })(this)).and.to('textContent.totalRows').of(this.els.pageStatus).transform(function(rows) {
    return rows.length;
  });
  SimplyBind('pageCount').of(this).to('innerHTML').of(this.els.paginationItems).transform((function(_this) {
    return function(count) {
      var i, paginationItems, ref1, value;
      paginationItems = '';
      for (value = i = 1, ref1 = count; 1 <= ref1 ? i <= ref1 : i >= ref1; value = 1 <= ref1 ? ++i : --i) {
        if (value !== 0) {
          paginationItems += markup.paginationItem(_this.markupArgs({
            value: value
          }));
        }
      }
      return paginationItems;
    };
  })(this)).and.to('className.isVisible').of(this.els.pagination).transform(function(count) {
    if (count > 1) {
      return 'is_visible';
    } else {
      return '';
    }
  });
  SimplyBind('pageCountReal').of(this).to('innerHTML').of(this.els.paginationExtraSelect).transform((function(_this) {
    return function(realCount) {
      var i, index, options, ref1, ref2;
      if (realCount <= _this.options.pageCountMax) {
        return '';
      } else {
        options = '<option>...</option>';
        for (index = i = ref1 = _this.options.pageCountMax + 1, ref2 = realCount; ref1 <= ref2 ? i <= ref2 : i >= ref2; index = ref1 <= ref2 ? ++i : --i) {
          options += "<option>" + index + "</option>";
        }
        return options;
      }
    };
  })(this)).and.to('className.hasExtra').of(this.els.pagination).transform((function(_this) {
    return function(realCount) {
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
  }).of(this).transformSelf((function(_this) {
    return function(currentPage) {
      currentPage = currentPage === '...' ? 1 : parseFloat(currentPage);
      if (currentPage > _this.pageCountReal) {
        return _this.pageCountReal;
      } else {
        return currentPage;
      }
    };
  })(this)).to('value').of(this.els.paginationExtraSelect).transform((function(_this) {
    return function(currentPage) {
      if (currentPage > _this.options.pageCountMax) {
        return currentPage;
      } else {
        return '...';
      }
    };
  })(this)).and.to((function(_this) {
    return function(currentPage) {
      _this.setVisiblePage(currentPage);
      return _this.setPageIndicator(currentPage);
    };
  })(this));
  if (this.options.search.length) {
    this.searchParam = this.options.search[0];
    SimplyBind('search').of(this.options).to('innerHTML').of(this.els.searchParam).transform(function(options) {
      return options.map(function(option) {
        return "<option>" + option + "</option>";
      }).join('');
    });
    SimplyBind('value').of(this.els.searchParam).to('searchParam').of(this).pipe('attr:placeholder').of(this.els.searchCriteria).transform(function(option) {
      return "Search by " + option;
    });
  }
  SimplyBind('value').of(this.els.searchCriteria).to('searchCriteria', {
    updateEvenIfSame: true
  }).of(this).bothWays().chainTo((function(_this) {
    return function(searchCriteria) {
      var ref1, rowsToMakeAvailable, targetColumn;
      rowsToMakeAvailable = _this.allRows;
      targetColumn = _this.options.columns[_this.searchParam];
      if (searchCriteria && (targetColumn || (((ref1 = _this.allRows[0]) != null ? ref1[_this.searchParam] : void 0) != null))) {
        rowsToMakeAvailable = rowsToMakeAvailable.filter(function(row) {
          var rowValue;
          rowValue = (targetColumn != null ? targetColumn.rawValueFormatter : void 0) ? targetColumn.rawValueFormatter(row[_this.searchParam]) : row[_this.searchParam];
          return rowValue != null ? rowValue.toString().toLowerCase().includes(searchCriteria.toLowerCase()) : void 0;
        });
      }
      if (_this.options.rowFilter) {
        rowsToMakeAvailable = rowsToMakeAvailable.filter(function(row) {
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
  }, true).of(this).to((function(_this) {
    return function(currentSort, prevSort) {
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
    }).of(this).to('multi:className.currentSort').of(this.els.tableHeading.children('._isSortable')).transform(function(current, prev, el) {
      if (current === el.children[0].textContent) {
        return '_currentSort';
      } else {
        return '';
      }
    });
  }
  SimplyBind('sortDirection').of(this).to('className.sortDirection').of(this.els.table).transform(function(sortDirection) {
    if (sortDirection === -1) {
      return 'desc';
    } else {
      return 'asc';
    }
  });
  return Promise.resolve();
};

;

DataTable.prototype.sortBy = function(column) {};

;

currentID = 0;

DataTable.version = "2.9.3";

DataTable.helpers = helpers;

DataTable.markup = markup;

DataTable.defaults = defaults;

module.exports = DataTable;

;
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
    get: function() {
      return placeholder;
    },
    set: function(newPlaceholder) {
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

changeEvent = function() {
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

requiresDomDescriptorFix = (!('className' in Element.prototype)) || !getDescriptor(Element.prototype, 'className').get;

;

var windowPropsToIgnore;

windowPropsToIgnore = ['innerWidth', 'innerHeight', 'outerWidth', 'outerHeight', 'scrollX', 'scrollY', 'pageXOffset', 'pageYOffset', 'screenX', 'screenY', 'screenLeft', 'screenTop'];

;

setValueNoop = function(v, publisher) {
  return this.updateAllSubs(publisher || this);
};

genID = function() {
  return '' + (++currentID);
};

genObj = function() {
  return Object.create(null);
};

genProxiedInterface = function(isSub, completeCallback) {
  return function(subject, customOptions, saveOptions) {
    return SimplyBind(subject, customOptions, saveOptions, isSub, completeCallback);
  };
};

genSelfUpdater = function(binding, fetchValue) {
  return binding.selfUpdater || (binding.selfUpdater = new Binding(function() {
    if (fetchValue) {
      return binding.setValue(binding.fetchDirectValue(), binding, true);
    } else {
      return binding.updateAllSubs(binding);
    }
  }, 'Func', {}));
};

var checkIf, targetIncludes;

targetIncludes = function(target, item) {
  return target && target.indexOf(item) !== -1;
};

checkIf = {
  isDefined: function(subject) {
    return subject !== void 0;
  },
  isArray: function(subject) {
    return subject instanceof Array;
  },
  isObject: function(subject) {
    return typeof subject === 'object' && subject;
  },
  isString: function(subject) {
    return typeof subject === 'string';
  },
  isNumber: function(subject) {
    return typeof subject === 'number';
  },
  isFunction: function(subject) {
    return typeof subject === 'function';
  },
  isBindingInterface: function(subject) {
    return subject instanceof BindingInterface;
  },
  isBinding: function(subject) {
    return subject instanceof Binding;
  },
  isIterable: function(subject) {
    return checkIf.isObject(subject) && checkIf.isNumber(subject.length);
  },
  isDom: function(subject) {
    return subject.nodeName && subject.nodeType === 1;
  },
  isDomInput: function(subject) {
    var nodeName;
    nodeName = subject.nodeName;
    return nodeName === 'INPUT' || nodeName === 'TEXTAREA' || nodeName === 'SELECT';
  },
  isDomRadio: function(subject) {
    return subject.type === 'radio';
  },
  isDomCheckbox: function(subject) {
    return subject.type === 'checkbox';
  },
  isElCollection: function(subject) {
    return (subject instanceof NodeList) || (subject instanceof HTMLCollection) || (window.jQuery && subject instanceof jQuery);
  },
  domElsAreSame: function(iterable) {
    var itemsWithSameType, type;
    type = iterable[0].type;
    itemsWithSameType = [].filter.call(iterable, function(item) {
      return item.type === type;
    });
    return itemsWithSameType.length === iterable.length;
  },
  isDomNode: function(subject) {
    return checkIf.isDom(subject) || subject === window || subject === document;
  }
};

;

var convertToLive, convertToReg, fetchDescriptor;

fetchDescriptor = function(object, property, isProto) {
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

convertToLive = function(bindingInstance, object, onlyArrayMethods) {
  var _, context, getterValue, origFn, propertyDescriptor, proxyFn, shouldIndicateUpdateIsFromSelf, shouldWriteLiveProp, slice, typeIsArray;
  _ = bindingInstance;
  if (!_.origDescriptor) {
    _.origDescriptor = fetchDescriptor(object, _.property);
  }
  if (onlyArrayMethods) {
    arrayMutatorMethods.forEach(function(method) {
      return defineProperty(object, method, {
        configurable: true,
        value: function() {
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
        getterValue = proxyFn = function() {
          var args, result;
          args = slice.call(arguments);
          _.value.args = args = _.selfTransform ? _.selfTransform(args) : args;
          _.value.result = result = origFn.apply(context, args);
          _.updateAllSubs(_);
          return result;
        };
        defineProperty(object, _.property, {
          configurable: _.isLiveProp = true,
          get: function() {
            return getterValue;
          },
          set: function(newValue) {
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
      
      /**
       * There is a bug in webkit/blink engines in which native attributes/properties 
       * of DOM elements are not exposed on the element's prototype and instead is
       * exposed directly on the element instance; when looking up the property descriptor
       * of the element a data descriptor is returned instead of an accessor descriptor
       * (i.e. descriptor with getter/setter) which means we are not able to define our
       * own proxy getter/setters. This was fixed only in April 2015 in Chrome v43 and
       * Safari v10. Although we won't be able to get notified when the objects get
       * their values set, we would at least provide working functionality lacking update
       * listeners. Since v1.14.0 HTMLInputElement::value bindings invoke the original
       * getter and setter methods in Binding::setValue(), and since we want to avoid
       * increasing the amount of logic present in Binding::setValue() for performance
       * reasons, we patch those setters here. We clone the target element and check for
       * the existence of the target property - if it exists then it indicates the target
       * property is a native property (since only native properties are copied over in
       * Element::cloneNode). This patching is only for native properties.
       *
       * https://bugs.webkit.org/show_bug.cgi?id=49739
       * https://bugs.webkit.org/show_bug.cgi?id=75297
       * https://bugs.chromium.org/p/chromium/issues/detail?id=43394
       * https://bugs.chromium.org/p/chromium/issues/detail?id=431492
       * https://bugs.chromium.org/p/chromium/issues/detail?id=13175
       * https://developers.google.com/web/updates/2015/04/DOM-attributes-now-on-the-prototype-chain
       */
      var shouldWriteLiveProp;
      
      if (requiresDomDescriptorFix && _.isDom && _.property in object.cloneNode(false)) {
        _.origDescriptor = shouldWriteLiveProp = false;
        _.isLiveProp = true;
        _.origGetter = function() {
          return _.object[_.property];
        };
        _.origSetter = function(newValue) {
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
          get: _.origGetter || function() {
            return _.value;
          },
          set: function(newValue) {
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

convertToReg = function(bindingInstance, object, onlyArrayMethods) {
  var _, i, len, method, newDescriptor, results;
  if (onlyArrayMethods) {
    results = [];
    for (i = 0, len = arrayMutatorMethods.length; i < len; i++) {
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

cloneObject = function(object) {
  var clone, key;
  clone = genObj();
  for (key in object) {
    clone[key] = object[key];
  }
  return clone;
};

extendState = function(base, stateToInherit) {
  var i, key, len, stateMapping;
  stateMapping = Object.keys(stateToInherit);
  for (i = 0, len = stateMapping.length; i < len; i++) {
    key = stateMapping[i];
    base[key] = stateToInherit[key];
  }
};

;

var cache;

cache = {
  get: function(object, isFunction, selector, isMultiChoice) {
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
  set: function(B, isFunction) {
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

setPholderRegEx = function() {
  var end, middle, start;
  start = settings.placeholder[0].replace(escapeRegEx, '\\$&');
  end = settings.placeholder[1].replace(escapeRegEx, '\\$&');
  middle = "[^" + end + "]+";
  pholderRegEx = new RegExp(start + "(" + middle + ")" + end, 'g');
  pholderRegExSplit = new RegExp("" + start + middle + end, 'g');
};

setPholderRegEx();

applyPlaceholders = function(contexts, values, indexMap) {
  var contextPart, i, index, len, output;
  output = '';
  for (index = i = 0, len = contexts.length; i < len; index = ++i) {
    contextPart = contexts[index];
    output += contextPart;
    if (indexMap[index]) {
      output += values[indexMap[index]];
    }
  }
  return output;
};

textContent = 'textContent';

addToNodeStore = function(nodeStore, node, targetPlaceholder) {
  if (nodeStore[targetPlaceholder] == null) {
    nodeStore[targetPlaceholder] = [];
  }
  nodeStore[targetPlaceholder].push(node);
};

scanTextNodesPlaceholders = function(element, nodeStore) {
  var childNodes, i, index, j, len, len1, newFragment, newNode, node, textPiece, textPieces;
  childNodes = Array.prototype.slice.call(element.childNodes);
  for (i = 0, len = childNodes.length; i < len; i++) {
    node = childNodes[i];
    if (node.nodeType !== 3) {
      scanTextNodesPlaceholders(node, nodeStore);
    } else if (node[textContent].match(pholderRegExSplit)) {
      textPieces = node[textContent].split(pholderRegEx);
      if (textPieces.length === 3 && textPieces[0] + textPieces[2] === '') {
        addToNodeStore(nodeStore, node, textPieces[1]);
      } else {
        newFragment = document.createDocumentFragment();
        for (index = j = 0, len1 = textPieces.length; j < len1; index = ++j) {
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

throwError = function(errorName) {
  throw new Error('SimplyBind: ' + (errors[errorName] || errorName));
};

throwWarning = function(warningName, depth) {
  var errSource, warn;
  if (!settings.silent) {
    errSource = getErrSource(depth);
    warn = errors[warningName];
    warn += "\n\n" + errSource;
    console.warn('SimplyBind: ' + warn);
  }
};

throwErrorBadArg = function(arg) {
  throwError("Invalid argument/s (" + arg + ")", true);
};

getErrSource = function(depth) {
  return ((new Error).stack || '').split('\n').slice(depth + 3).join('\n');
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

SimplyBind = function(subject, options, saveOptions, isSub, completeCallback) {
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

SimplyBind.unBindAll = function(object, bothWays) {
  var boundID, prop, propMap;
  if (object && (checkIf.isObject(object) || checkIf.isFunction(object))) {
    
    /**
     * Conditional Checks:
     *
     * 1) Make sure the subject object is iterable (and thus a possible candidate for being an element collection)
     * 2) Make sure the subject object isn't an array binding (since element collection objects don't get directly bound)
     * 3) Make sure the first element in the collection is a valid object (i.e. isn't undefined and isn't null)
     * 4) Make sure the first element is a DOM object
     */
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

Binding = function(object, type, state) {
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

  /* ========================================================================== */
  if (this.isMultiChoice) {
    this.choices = genObj();
    this.object.forEach((function(_this) {
      return function(choiceEl) {
        var choiceBinding;
        choiceBinding = _this.choices[choiceEl.value] = SimplyBind('checked').of(choiceEl)._;
        choiceBinding.addSub(_this);
        choiceBinding.subsMeta[_this.ID].transformFn = function() {
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
  addSub: function(sub, options, updateOnce, updateEvenIfSame) {
    var alreadyHadSub, j, len, metaData, ref, subItem;
    if (sub.isMulti) {
      ref = sub.bindings;
      for (j = 0, len = ref.length; j < len; j++) {
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
  removeSub: function(sub, bothWays) {
    var j, len, ref, subItem;
    if (sub.isMulti) {
      ref = sub.bindings;
      for (j = 0, len = ref.length; j < len; j++) {
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
  removeAllSubs: function(bothWays) {
    var j, len, ref, sub;
    ref = this.subs.slice();
    for (j = 0, len = ref.length; j < len; j++) {
      sub = ref[j];
      this.removeSub(sub, bothWays);
    }
  },
  destroy: function() {
    var event, j, len, ref;
    delete boundInstances[this.ID];
    this.removePollInterval();
    if (this.type === 'Event') {
      ref = this.attachedEvents;
      for (j = 0, len = ref.length; j < len; j++) {
        event = ref[j];
        this.unRegisterEvent(event);
      }
    } else if (this.type === 'Func') {
      delete this.object._sb_ID;
    }

    /* istanbul ignore next */
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
  fetchDirectValue: function() {
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
  setValue: function(newValue, publisher, fromSelf, fromChangeEvent) {
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
            for (j = 0, len = ref.length; j < len; j++) {
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
            for (index = k = 0, len1 = newChoices.length; k < len1; index = ++k) {
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
  updateAllSubs: function(publisher) {
    var arr, i;
    if (i = (arr = this.subs).length) {
      while (i--) {
        this.updateSub(arr[i], publisher);
      }
    }
  },
  updateSub: function(sub, publisher, isDelayedUpdate) {
    var currentTime, meta, newValue, subValue, timePassed, transform;
    if ((publisher === sub) || (publisher !== this && publisher.subsMeta[sub.ID])) {
      return;
    }
    meta = this.subsMeta[sub.ID];
    if (meta.disallowList && meta.disallowList[publisher.ID]) {
      return;
    }
    if (meta.opts.throttle) {
      currentTime = +(new Date);
      timePassed = currentTime - meta.lastUpdate;
      if (timePassed < meta.opts.throttle) {
        clearTimeout(meta.updateTimer);
        return meta.updateTimer = setTimeout((function(_this) {
          return function() {
            if (_this.subsMeta[sub.ID]) {
              return _this.updateSub(sub, publisher);
            }
          };
        })(this), meta.opts.throttle - timePassed);
      } else {
        meta.lastUpdate = currentTime;
      }
    } else if (meta.opts.delay && !isDelayedUpdate) {
      return setTimeout((function(_this) {
        return function() {
          if (_this.subsMeta[sub.ID]) {
            return _this.updateSub(sub, publisher, true);
          }
        };
      })(this), meta.opts.delay);
    }
    newValue = this.type === 'Array' && meta.opts.sendArrayCopies ? this.value.slice() : this.value;
    subValue = sub[meta.valueRef];
    newValue = (transform = meta.transformFn) ? transform(newValue, subValue, sub.object) : newValue;
    if (newValue === subValue && !meta.opts.updateEvenIfSame || meta.conditionFn && !meta.conditionFn(newValue, subValue, sub.object)) {
      return;
    }
    if (meta.opts.promiseTransforms && newValue && checkIf.isFunction(newValue.then)) {
      newValue.then(function(newValue) {
        sub.setValue(newValue, publisher);
      });
    } else {
      sub.setValue(newValue, publisher);
    }
    if (meta.updateOnce) {
      this.removeSub(sub);
    }
  },
  addModifierFn: function(target, subInterfaces, subjectFn, updateOnBind) {
    var base, j, len, subInterface, subMetaData, subscriber;
    if (!checkIf.isFunction(subjectFn)) {
      return throwWarning('fnOnly', 2);
    } else {
      for (j = 0, len = subInterfaces.length; j < len; j++) {
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
  setSelfTransform: function(transformFn, updateOnBind) {
    this.selfTransform = transformFn;
    if (updateOnBind) {
      this.setValue(this.value);
    }
  },
  addDisallowRule: function(targetSub, targetDisallow) {
    var base, disallowList;
    disallowList = (base = this.subsMeta[targetSub.ID]).disallowList != null ? base.disallowList : base.disallowList = genObj();
    disallowList[targetDisallow.ID] = 1;
  },
  scanForPholders: function() {
    var index;
    if (!this.pholderValues) {
      this.pholderValues = genObj();
      this.pholderIndexMap = genObj();
      this.pholderContexts = [];
      if (checkIf.isString(this.value)) {
        this.pholderContexts = this.value.split(pholderRegExSplit);
        index = 0;
        this.value = this.value.replace(pholderRegEx, (function(_this) {
          return function(e, pholder) {
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
  addPollInterval: function(time) {
    if (this.type !== 'Event') {
      this.removePollInterval();
      return this.pollInterval = setInterval((function(_this) {
        return function() {
          var polledValue;
          polledValue = _this.fetchDirectValue();
          return _this.setValue(polledValue, _this, true);
        };
      })(this), time);
    }
  },
  removePollInterval: function() {
    clearInterval(this.pollInterval);
    return this.pollInterval = null;
  },
  addUpdateListener: function(eventName, targetProperty) {
    this.object.addEventListener(eventName, (function(_this) {
      return function(event) {
        var shouldRedefineValue;
        if (!event._sb) {
          shouldRedefineValue = _this.selfTransform && _this.isDomInput;
          _this.setValue(_this.object[targetProperty], null, !shouldRedefineValue, true);
        }
      };
    })(this), false);
  },
  attachEvents: function() {
    if (this.eventName) {
      this.registerEvent(this.eventName);
    } else if (this.isDomInput) {
      this.addUpdateListener('input', 'value');
      this.addUpdateListener('change', 'value');
    } else if (!this.isMultiChoice && (this.type === 'DOMRadio' || this.type === 'DOMCheckbox')) {
      this.addUpdateListener('change', 'checked');
    }
  },
  registerEvent: function(eventName) {
    this.attachedEvents.push(eventName);
    if (!this.eventHandler) {
      this.eventHandler = eventUpdateHandler.bind(this);
    }
    this.object[this.eventMethods.listen](eventName, this.eventHandler);
  },
  unRegisterEvent: function(eventName) {
    this.attachedEvents.splice(this.attachedEvents.indexOf(eventName), 1);
    this.object[this.eventMethods.remove](eventName, this.eventHandler);
  },
  emitEvent: function(extraData) {
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

eventUpdateHandler = function() {
  if (!this.isEmitter) {
    this.setValue(arguments[this.property], null, true);
  }
};

;

;


/**
 * Stage definitions:
 * 
 * 0: Selection:			Got selector, awaiting object.
 * 1: Indication:			Got object, awaiting proxied property / function / Binding-object.
 * 2: Binding Complete:		Complete, awaiting additional (optional) bindings/mutations.
 */
var BindingInterface;

BindingInterface = function(options, inheritedState) {
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
  selfClone: function() {
    return new BindingInterface(null, this);
  },
  defineMainProps: function(binding) {
    this._ = binding;
    return Object.defineProperties(this, {
      'value': {
        get: function() {
          return binding.value;
        }
      },
      'original': {
        get: function() {
          return binding.objects || binding.object;
        }
      },
      'subscribers': {
        get: function() {
          return binding.subs.slice().map(function(sub) {
            return sub.object;
          });
        }
      }
    });
  },
  createBinding: function(subject, newObjectType, bindingInterface, isFunction) {
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
  patchCachedBinding: function(cachedBinding) {
    var key, option, ref, ref1, value;
    if (cachedBinding.type === 'ObjectProp' && !(this.property in this.object)) {
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
  setProperty: function(subject) {
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
  setObject: function(subject, isFunction) {
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
  addToPublisher: function(publisherInterface) {
    var alreadyHadSub, binding, i, len, ref;
    publisherInterface.stage = 2;
    publisherInterface.subs.push(this);
    alreadyHadSub = publisherInterface._.addSub(this._, publisherInterface.options, publisherInterface.updateOnce);
    if (publisherInterface.updateOnce) {
      delete publisherInterface.updateOnce;
    } else if (publisherInterface.options.updateOnBind && !alreadyHadSub) {
      if (this._.isMulti) {
        ref = this._.bindings;
        for (i = 0, len = ref.length; i < len; i++) {
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
    get: function() {
      if (!this.stage) {
        return METHOD_of;
      }
    }
  },
  set: {
    get: function() {
      if (this.stage) {
        return METHOD_set;
      }
    }
  },
  chainTo: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_chainTo;
      }
    }
  },
  transformSelf: {
    get: function() {
      if (this.stage === 1) {
        return METHOD_transformSelf;
      }
    }
  },
  transform: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_transform;
      }
    }
  },
  transformAll: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_transformAll;
      }
    }
  },
  condition: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_condition;
      }
    }
  },
  conditionAll: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_conditionAll;
      }
    }
  },
  bothWays: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_bothWays;
      }
    }
  },
  unBind: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_unBind;
      }
    }
  },
  pollEvery: {
    get: function() {
      if (this.stage) {
        return METHOD_pollEvery;
      }
    }
  },
  stopPolling: {
    get: function() {
      if (this.stage) {
        return METHOD_stopPolling;
      }
    }
  },
  setOption: {
    get: function() {
      if (this.stage === 2) {
        return METHOD_setOption;
      }
    }
  },
  disallowFrom: {
    get: function() {
      var thisInterface;
      if (this.stage === 2 && (thisInterface = this)) {
        return genProxiedInterface(false, function(disallowInterface) {
          var subInterface;
          subInterface = thisInterface.subs[thisInterface.subs.length - 1];
          thisInterface._.addDisallowRule(subInterface._, disallowInterface._);
          return thisInterface;
        });
      }
    }
  },
  updateOn: {
    get: function() {
      var thisInterface;
      if (this.stage && (thisInterface = this)) {
        return genProxiedInterface(false, function(subInterface) {
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
    get: function() {
      var selfUpdater, thisInterface;
      if (this.stage && (thisInterface = this) && (selfUpdater = this._.selfUpdater)) {
        return genProxiedInterface(false, function(subInterface) {
          if (subInterface._.subsMeta[selfUpdater.ID]) {
            delete thisInterface._.pubsMap[subInterface._.ID];
            subInterface._.removeSub(selfUpdater);
          }
        });
      }
    }
  },
  to: {
    get: function() {
      var thisInterface;
      if (this.stage === 1 && (thisInterface = this)) {
        return genProxiedInterface(true, function(subInterface) {
          if (subInterface._ !== thisInterface._) {
            subInterface.addToPublisher(thisInterface);
          }
          return thisInterface;
        });
      }
    }
  },
  and: {
    get: function() {
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
        return genProxiedInterface(false, function(siblingInterface) {
          cloneInterface._.addBinding(siblingInterface._);
          return cloneInterface;
        });
      }
    }
  },
  once: {
    get: function() {
      var interfaceToReturn;
      if (this.stage === 1) {
        interfaceToReturn = this.selfClone();
        interfaceToReturn.updateOnce = true;
        return interfaceToReturn;
      }
    }
  },
  update: {
    get: function() {
      return this.set;
    }
  },
  twoWay: {
    get: function() {
      return this.bothWays;
    }
  },
  pipe: {
    get: function() {
      return this.chainTo;
    }
  }
});

METHOD_of = function(object) {
  if (!(checkIf.isObject(object) || checkIf.isFunction(object))) {
    throwErrorBadArg(object);
  }
  if (checkIf.isBindingInterface(object)) {
    object = object.object;
  }
  this.stage = 1;
  return this.setObject(object);
};

METHOD_chainTo = function(subject, specificOptions, saveOptions) {
  return SimplyBind(this.subs[this.subs.length - 1]).to(subject, specificOptions, saveOptions);
};

METHOD_set = function(newValue) {
  this._.setValue(newValue);
  return this;
};

METHOD_transformSelf = function(transformFn) {
  if (!checkIf.isFunction(transformFn)) {
    throwWarning('fnOnly', 1);
  } else {
    this._.setSelfTransform(transformFn, this.options.updateOnBind);
  }
  return this;
};

METHOD_transform = function(transformFn) {
  this._.addModifierFn('transformFn', this.subs.slice(-1), transformFn, this.options.updateOnBind);
  return this;
};

METHOD_transformAll = function(transformFn) {
  this._.addModifierFn('transformFn', this.subs, transformFn, this.options.updateOnBind);
  return this;
};

METHOD_condition = function(conditionFn) {
  this._.addModifierFn('conditionFn', this.subs.slice(-1), conditionFn);
  return this;
};

METHOD_conditionAll = function(conditionFn) {
  this._.addModifierFn('conditionFn', this.subs, conditionFn);
  return this;
};

METHOD_bothWays = function(altTransform) {
  var binding, bindings, i, len, originCondition, originTransform, sub, subBinding, transformToUse;
  sub = this.subs[this.subs.length - 1];
  subBinding = sub._;
  bindings = this._.isMulti ? this._.bindings : [this._];
  subBinding.addSub(this._, sub.options);
  for (i = 0, len = bindings.length; i < len; i++) {
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

METHOD_unBind = function(bothWays) {
  var i, len, ref, sub;
  ref = this.subs;
  for (i = 0, len = ref.length; i < len; i++) {
    sub = ref[i];
    this._.removeSub(sub._, bothWays);
  }
  return this;
};

METHOD_pollEvery = function(time) {
  this._.addPollInterval(time);
  return this;
};

METHOD_stopPolling = function() {
  this._.removePollInterval();
  return this;
};

METHOD_setOption = function(optionName, newValue) {
  this._.subsMeta[this.subs[this.subs.length - 1]._.ID].opts[optionName] = newValue;
  return this;
};

;

;

var GroupBinding, proto;

GroupBinding = function(bindingInterface, objects, objectType) {
  var bindings, i, len, object;
  bindingInterface.selector = bindingInterface.selector.slice(6);
  extendState(this, this["interface"] = bindingInterface);
  this.isMulti = true;
  this.bindings = bindings = [];
  if (objects) {
    for (i = 0, len = objects.length; i < len; i++) {
      object = objects[i];
      this.addBinding(object, objectType);
    }
  }
  return Object.defineProperties(this, {
    'type': {
      get: function() {
        return bindings.map(function(binding) {
          return binding.type;
        });
      }
    },
    'value': {
      get: function() {
        return bindings.map(function(binding) {
          return binding.value;
        });
      }
    }
  });
};

proto = GroupBinding.prototype = Object.create(BindingInterfacePrivate);

Object.keys(Binding.prototype).forEach(function(methodName) {
  return proto[methodName] = function(a, b, c, d) {
    var binding, i, len, ref;
    ref = this.bindings;
    for (i = 0, len = ref.length; i < len; i++) {
      binding = ref[i];
      if (methodName === 'updateSub') {
        b = binding;
      }
      binding[methodName](a, b, c, d);
    }
  };
});

proto.addBinding = function(object, objectType) {
  this.bindings.push(!objectType ? object : this.createBinding(object, objectType, this["interface"]));
};

;

module.exports = SimplyBind;

;
return module.exports;
},
2: function (require, module, exports) {
var exports, extend, modifiers, newBuilder, normalizeKeys;

extend = require(17);

normalizeKeys = function(keys) {
  var i, key, len, output;
  if (keys) {
    output = {};
    if (typeof keys !== 'object') {
      output[keys] = true;
    } else {
      if (!Array.isArray(keys)) {
        keys = Object.keys(keys);
      }
      for (i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        output[key] = true;
      }
    }
    return output;
  }
};

newBuilder = function(isBase) {
  var builder;
  builder = function(target) {
    var theTarget;
    var $_len = arguments.length, $_i = -1, sources = new Array($_len); while (++$_i < $_len) sources[$_i] = arguments[$_i];
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
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      _.options.deep = true;
      return _;
    }
  },
  'own': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      _.options.own = true;
      return _;
    }
  },
  'allowNull': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      _.options.allowNull = true;
      return _;
    }
  },
  'nullDeletes': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      _.options.nullDeletes = true;
      return _;
    }
  },
  'concat': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      _.options.concat = true;
      return _;
    }
  },
  'clone': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      _.options.target = {};
      return _;
    }
  },
  'notDeep': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      return function(keys) {
        _.options.notDeep = normalizeKeys(keys);
        return _;
      };
    }
  },
  'deepOnly': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      return function(keys) {
        _.options.deepOnly = normalizeKeys(keys);
        return _;
      };
    }
  },
  'keys': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      return function(keys) {
        _.options.keys = normalizeKeys(keys);
        return _;
      };
    }
  },
  'notKeys': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      return function(keys) {
        _.options.notKeys = normalizeKeys(keys);
        return _;
      };
    }
  },
  'transform': {
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      return function(transform) {
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
    get: function() {
      var _;
      _ = this.isBase ? newBuilder() : this;
      return function(filter) {
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

;
return module.exports;
},
3: function (require, module, exports) {
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

'use strict';

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

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
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
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

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}
;
return module.exports;
},
17: function (require, module, exports) {
var extend, isArray, isObject, shouldDeepExtend;

isArray = function(target) {
  return Array.isArray(target);
};

isObject = function(target) {
  return target && Object.prototype.toString.call(target) === '[object Object]' || isArray(target);
};

shouldDeepExtend = function(options, target, parentKey) {
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

module.exports = extend = function(options, target, sources, parentKey) {
  var i, key, len, source, sourceValue, subTarget, targetValue;
  if (!target || typeof target !== 'object' && typeof target !== 'function') {
    target = {};
  }
  for (i = 0, len = sources.length; i < len; i++) {
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

;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSIsInBhcnRzL21hcmt1cC5jb2ZmZWUiLCJwYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCJwYXJ0cy9oZWxwZXJzLmNvZmZlZSIsInBhcnRzL21ldGhvZHMvX2luZGV4LmNvZmZlZSIsInBhcnRzL2F0dGFjaEV2ZW50cy5jb2ZmZWUiLCJwYXJ0cy9hdHRhY2hCaW5kaW5ncy5jb2ZmZWUiLCJwYXJ0cy91c2VyQWN0aW9uTWV0aG9kcy5jb2ZmZWUiLCIuLi8uLi9wYWNrYWdlLmpzb24iLCIuLi8uLi9ub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9faW5kZXguY29mZmVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9ub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL1NpbXBseUJpbmQvX2luZGV4LmNvZmZlZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vbm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nL19pbmRleC5jb2ZmZWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9pbmRleC5jb2ZmZWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvR3JvdXBCaW5kaW5nL19pbmRleC5jb2ZmZWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9pbmRleC5jb2ZmZWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm9kZV9tb2R1bGVzL3NtYXJ0LWV4dGVuZC9wYWNrYWdlLmpzb24iLCIuLi8uLi9ub2RlX21vZHVsZXMvZXNjYXBlLWh0bWwvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9leHRlbmQuY29mZmVlIl0sIm5hbWVzIjpbImltcG9ydDoxIiwiaW1wb3J0OjIiLCJpbXBvcnQ6MyIsImlubGluZToxIiwiaW5saW5lOjIiLCJpbmxpbmU6MyIsImlubGluZTo0IiwiaW5saW5lOjUiLCJpbmxpbmU6NiIsImlubGluZTo3IiwiaW5saW5lOjgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzthQUN1QkEsVUFDQ0E7O1NBQ25CQyxVQUNIQTs7VUFBYUMsVUFDTkE7O0FDTFRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOExBQTs7QUM5TEFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBQTs7QUNqQkFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK09BQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL09BQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHNEJBOztBQ0g1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEZBQTs7QUMxRkFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVQQUE7O0FDdlBBQzs7QUFBOEJBOzs7O29CQ0E5QkMsT0FzREFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQTs7QUNGQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJrQkE7O0FDdkJsQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUZBQTs7QUNyRkFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QjJCQTs7QUN6QjNCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCT0E7Ozs7Ozs7OztTQzVCQVAsV0FDTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDSmJHLE9BdUdBQTs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiU2ltcGx5QmluZCA9IF8kc20oJ0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kJyApXG5leHRlbmQgPSBfJHNtKCdzbWFydC1leHRlbmQnIClcbmVzY0hUTUwgPSBfJHNtKCdlc2NhcGUtaHRtbCcgKVxuXyRzbSgnLi9wYXJ0cy9tYXJrdXAnIClcbl8kc20oJy4vcGFydHMvZGVmYXVsdHMnIClcbl8kc20oJy4vcGFydHMvaGVscGVycycgKVxuXG5EYXRhVGFibGUgPSAoQGNvbnRhaW5lciwgb3B0aW9ucz17fSktPlxuXHRAb3B0aW9ucyA9IGV4dGVuZC5jbG9uZS5kZWVwT25seSgnY29sdW1ucycpKERhdGFUYWJsZS5kZWZhdWx0cywgb3B0aW9ucylcblx0QHN0YXRlID0gJ2xvYWRpbmcnOmZhbHNlLCAnbm9SZXN1bHRzJzpmYWxzZSwgJ2Vycm9yJzpmYWxzZVxuXHRASUQgPSArK2N1cnJlbnRJRFxuXHRAdGFibGVJRCA9IFwiXFwjI3tAb3B0aW9ucy5iYXNlQ2xhc3N9LSN7QElEfVwiXG5cdEB2aXNpYmxlUm93cyA9IFtdXG5cdEBhdmFpbGFibGVSb3dzID0gW11cblx0QGFsbFJvd3MgPSBbXVxuXHRAbGFyZ2VzdEJyZWFrZG93blRvdGFsID0gMFxuXHRAc2VhcmNoQ3JpdGVyaWEgPSAnJ1xuXHRAc2VhcmNoUGFyYW0gPSAnJ1xuXHRAc29ydEJ5ID0gaWYgQG9wdGlvbnMuc29ydEJ5IHRoZW4gQG9wdGlvbnMuc29ydEJ5IGVsc2UgJydcblx0QHNvcnREaXJlY3Rpb24gPSAtMVxuXHRAY3VycmVudFBhZ2UgPSAxXG5cblxuXHQjID09PT0gTWFya3VwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzID0ge31cblx0QGVscy50YWJsZU91dGVyd3JhcCA9ICQobWFya3VwLnRhYmxlT3V0ZXJ3cmFwIGV4dGVuZCh7QElEfSwgQG9wdGlvbnMpKVxuXHRAZWxzLnRhYmxlID0gJChtYXJrdXAudGFibGUoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRAZWxzLnRhYmxlSGVhZGluZyA9IEBlbHMudGFibGUuY2hpbGRyZW4oKS5maXJzdCgpLmNoaWxkcmVuKClcblx0QGVscy50YWJsZUJvZHkgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkubGFzdCgpXG5cdEBlbHMubm9SZXN1bHRzTWVzc2FnZSA9ICQobWFya3VwLm5vUmVzdWx0cyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdEBlbHMubG9hZGluZ01lc3NhZ2UgPSAkKG1hcmt1cC5sb2FkaW5nKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0QGVscy5lcnJvck1lc3NhZ2UgPSAkKG1hcmt1cC5lcnJvcihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdEBlbHMucGFnZVN0YXR1cyA9ICQobWFya3VwLnBhZ2VTdGF0dXMoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRAZWxzLnBhZ2luYXRpb24gPSAkKG1hcmt1cC5wYWdpbmF0aW9uKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0QGVscy5wYWdpbmF0aW9uSXRlbXMgPSBAZWxzLnBhZ2luYXRpb24uY2hpbGRyZW4oJy5fcGFnaW5hdGlvbkl0ZW1zJylcblx0QGVscy5wYWdpbmF0aW9uRXh0cmEgPSBAZWxzLnBhZ2luYXRpb24uY2hpbGRyZW4oJy5fZXh0cmFJbmRpY2F0b3InKVxuXHRAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdCA9IEBlbHMucGFnaW5hdGlvbkV4dHJhLmNoaWxkcmVuKCdzZWxlY3QnKVxuXHRAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQgPSBAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdC5wcmV2KClcblx0QGVscy5zZWFyY2hGaWVsZCA9ICQobWFya3VwLnNlYXJjaEZpZWxkKEBvcHRpb25zKSkuaW5zZXJ0QmVmb3JlKEBlbHMudGFibGUpXG5cdEBlbHMuc2VhcmNoUGFyYW0gPSBAZWxzLnNlYXJjaEZpZWxkLmNoaWxkcmVuKCdzZWxlY3QnKVxuXHRAZWxzLnNlYXJjaENyaXRlcmlhID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignaW5wdXQnKVxuXHRAZWxzLmdsb2JhbFN0eWxlcyA9ICQoJzxzdHlsZSAvPicpLnByZXBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXG5cdEBlbHMudGFibGVIZWFkaW5nLmFwcGVuZChAZ2VuZXJhdGVIZWFkaW5nQ29sdW1ucygpKVxuXG5cdEBlbHMudGFibGVPdXRlcndyYXAuYXBwZW5kVG8gQGNvbnRhaW5lclxuXHRAZWxzLnRhYmxlLmRhdGEgJ0RhdGFUYWJsZScsIEBcblx0QGVscy50YWJsZVswXS5zdHlsZS5taW5XaWR0aCA9IFwiI3tAb3B0aW9ucy5taW5XaWR0aH1weFwiIGlmIEBvcHRpb25zLm1pbldpZHRoXG5cblxuXHQjID09PT0gRXZlbnRzICYgQmluZGluZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFByb21pc2UuYmluZChAKVxuXHRcdC50aGVuKEBhdHRhY2hFdmVudHMpXG5cdFx0LnRoZW4oQGF0dGFjaEJpbmRpbmdzKVxuXHRcdC50aGVuICgpLT4gaWYgQG9wdGlvbnMubG9hZE9uSW5pdCB0aGVuIEBsb2FkRGF0YSgpXG5cblx0cmV0dXJuIEBcblxuXG5cbkRhdGFUYWJsZTo6ZmV0Y2hEYXRhID0gKCktPlxuXHRAc3RhdGUubG9hZGluZyA9IHRydWVcblx0UHJvbWlzZS5yZXNvbHZlKClcblx0XHQudGhlbiAoKT0+IEBvcHRpb25zLmRhdGEuY2FsbChAKVxuXHRcdC50aGVuIChkYXRhKT0+XG5cdFx0XHRAc3RhdGUubG9hZGluZyA9IEBzdGF0ZS5lcnJvciA9IGZhbHNlXG5cdFx0XHRyZXR1cm4gZGF0YVxuXHRcdC5jYXRjaCAoZXJyKT0+XG5cdFx0XHRAc3RhdGUuZXJyb3IgPSBlcnJcblxuRGF0YVRhYmxlOjpzZXREYXRhID0gKGRhdGEpLT5cblx0QGFsbFJvd3MgPSBkYXRhIGlmIEFycmF5LmlzQXJyYXkoZGF0YSlcblxuRGF0YVRhYmxlOjpsb2FkRGF0YSA9ICgpLT5cblx0QHVucHJvY2Vzc1Jvdyhyb3cpIGZvciByb3cgaW4gQGFsbFJvd3MgaWYgQGFsbFJvd3MubGVuZ3RoXG5cdEBmZXRjaERhdGEoKS50aGVuIChkYXRhKT0+IEBzZXREYXRhKGRhdGEpXG5cbkRhdGFUYWJsZTo6cmVmcmVzaCA9ICgpLT5cblx0QGF2YWlsYWJsZVJvd3MgPSBAYXZhaWxhYmxlUm93c1xuXHRAY3VycmVudFBhZ2UgPSBAY3VycmVudFBhZ2VcblxuRGF0YVRhYmxlOjptYXJrdXBBcmdzID0gKGFyZ3NPYmplY3Q9e30pLT5cblx0YXJnc09iamVjdC5iYXNlQ2xhc3MgPSBAb3B0aW9ucy5iYXNlQ2xhc3Ncblx0cmV0dXJuIGFyZ3NPYmplY3RcblxuXG5cblxuXyRzbSgnLi9wYXJ0cy9tZXRob2RzJyApXG5fJHNtKCcuL3BhcnRzL2F0dGFjaEV2ZW50cycgKVxuXyRzbSgnLi9wYXJ0cy9hdHRhY2hCaW5kaW5ncycgKVxuXyRzbSgnLi9wYXJ0cy91c2VyQWN0aW9uTWV0aG9kcycgKVxuXG5jdXJyZW50SUQgPSAwXG5EYXRhVGFibGUudmVyc2lvbiA9IF8kc20oJy4uLy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nIClcbkRhdGFUYWJsZS5oZWxwZXJzID0gaGVscGVyc1xuRGF0YVRhYmxlLm1hcmt1cCA9IG1hcmt1cFxuRGF0YVRhYmxlLmRlZmF1bHRzID0gZGVmYXVsdHNcbm1vZHVsZS5leHBvcnRzID0gRGF0YVRhYmxlXG5cblxuXG5cbiIsIm1hcmt1cCA9XG5cdHRhYmxlT3V0ZXJ3cmFwOiAoe0lELCBiYXNlQ2xhc3MsIG1pbldpZHRoLCBoYXNNb2JpbGUsIGNlbGxzSGF2ZVBhZGRpbmd9KS0+IFwiXG5cdFx0PGRpdiBpZD0nI3tiYXNlQ2xhc3N9LSN7SUR9JyBjbGFzcz0nI3tiYXNlQ2xhc3N9LW91dGVyd3JhcCB7e2xvYWRpbmd9fSB7e25vUmVzdWx0c319IHt7aGFzRXJyb3J9fVxuXHRcdFx0I3tpZiBtaW5XaWR0aCB0aGVuICdfaGFzTWluV2lkdGgnIGVsc2UgJyd9XG5cdFx0XHQje2lmIGhhc01vYmlsZSB0aGVuICd7e21vYmlsZVZlcnNpb259fScgZWxzZSAnJ31cblx0XHRcdCN7aWYgY2VsbHNIYXZlUGFkZGluZyB0aGVuICdfY2VsbHNIYXZlUGFkZGluZycgZWxzZSAnJ31cblx0XHQnPjwvZGl2PlxuXHRcIlxuXG5cdHRhYmxlOiAoe2Jhc2VDbGFzcywgYWxpZ25tZW50fSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfSBhbGlnbm1lbnQtLS0je2FsaWdubWVudH0gc29ydERpcmVjdGlvbi0tLXt7c29ydERpcmVjdGlvbn19Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmctcm93Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHknPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0bG9hZGluZzogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmcge3tpc1Zpc2libGV9fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pbm5lcndyYXAnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pY29uJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctdGV4dCc+TG9hZGluZzwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRub1Jlc3VsdHM6ICh7YmFzZUNsYXNzLCBpdGVtU2luZ2xlTGFiZWw9J0l0ZW0nLCBpdGVtUGx1cmFsTGFiZWw9aXRlbVNpbmdsZUxhYmVsKydzJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzIHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy1pbm5lcndyYXAnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLWljb24nPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtdGV4dC10aXRsZSc+Tm8gI3tpdGVtU2luZ2xlTGFiZWx9cyB0byBEaXNwbGF5PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy10ZXh0LXN1YnRpdGxlJz5UaGVyZSBhcmUgbm8gbWF0Y2hpbmcgI3tpdGVtUGx1cmFsTGFiZWx9IGZvciB0aGUgc2VhcmNoIHF1ZXJ5IHlvdSd2ZSB0eXBlZC48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdGVycm9yOiAoe2Jhc2VDbGFzc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3Ige3tpc1Zpc2libGV9fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItaW5uZXJ3cmFwJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWljb24nPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQtdGl0bGUnPkEgRmF0YWwgRXJyb3IgaGFzIE9jY3VyZWQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC1zdWJ0aXRsZSc+UmVwb3J0IHRoZSBmb2xsb3dpbmcgdG8gdGhlIGFkbWluOjxiciAvPlxcXCJ7e2Vycm9yTWVzc2FnZX19XFxcIjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cGFnZVN0YXR1czogKHtiYXNlQ2xhc3MsIHNob3dQYWdlU3RhdHVzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdlU3RhdHVzICN7aWYgc2hvd1BhZ2VTdGF0dXMgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ30nPlxuXHRcdFx0U2hvd2luZyB7e3Jvd1JhbmdlfX0gb2Yge3t0b3RhbFJvd3N9fVxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cGFnaW5hdGlvbjogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24ge3toYXNFeHRyYX19IHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX2JhY2snPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW1zd3JhcCBfcGFnaW5hdGlvbkl0ZW1zJz48L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX2V4dHJhSW5kaWNhdG9yJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdFx0PHNlbGVjdCBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS1zZWxlY3QnPjwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfbmV4dCc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdHBhZ2luYXRpb25JdGVtOiAoe2Jhc2VDbGFzcywgdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblxuXHRoZWFkaW5nQ2VsbDogKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgc2x1ZywgaWNvbj0nJywgbGFiZWwsIHN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsICN7ZXh0cmFDbGFzc2VzfSBfXyN7c2x1Z30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1pY29uPScje2ljb259JyAje3N0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsLXRleHQnPiN7bGFiZWx9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRyb3c6ICh7YmFzZUNsYXNzLCByb3dJRCwgY2VsbHMsIGRyaWxsZG93bj0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3cgX3RhYmxlUm93IHt7ZHJpbGxkb3duU3RhdGV9fScgZGF0YS1yb3ctaWQ9JyN7cm93SUR9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24gX2V4cGFuZERyaWxsZG93bic+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24taWNvbic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0I3tjZWxsc31cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWRyaWxsZG93biBfdGFibGVSb3dEcmlsbGRvd24nPlxuXHRcdFx0XHQje2RyaWxsZG93bn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXHRyb3dDZWxsOiAoe2Jhc2VDbGFzcywgZXh0cmFDbGFzc2VzPScnLCBsYWJlbCwgY29sdW1uLCBzbHVnLCB2YWx1ZSwgc3R5bGU9Jyd9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWNlbGwgX18je3NsdWd9ICN7ZXh0cmFDbGFzc2VzfScgZGF0YS1zbHVnPScje3NsdWd9JyBkYXRhLWNvbHVtbj0nI3tjb2x1bW59JyAje3N0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsLWlubmVyd3JhcCcgdGl0bGU9JyN7bGFiZWx9Jz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblxuXG5cblx0c2VhcmNoRmllbGQ6ICh7YmFzZUNsYXNzLCBzZWFyY2h9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaCAje2lmIHNlYXJjaD8ubGVuZ3RoIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0Jz48L3NlbGVjdD5cblx0XHRcdDxpbnB1dCBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaC1pbnB1dCcgLz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0VHJpZ2dlcic+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRpcERldGFpbHM6ICh7YmFzZUNsYXNzLCBpcEFkZHJlc3MsIGV4dHJhPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMgX2lwRGV0YWlscycgZGF0YS1pcD0nI3tpcEFkZHJlc3N9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtdHJpZ2dlciBfaXBEZXRhaWxzLXRyaWdnZXInPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50Jz5Mb2FkaW5nIElQIERldGFpbHM8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQje2V4dHJhfVxuXHRcIlxuXG5cdGlwRGV0YWlsc0l0ZW06ICh7YmFzZUNsYXNzLCBsYWJlbCwgdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50LWl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50LWl0ZW0tbGFiZWwnPiN7bGFiZWx9OiA8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLXZhbHVlJz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0ZmllbGRzOiAoe2Jhc2VDbGFzcywgZmllbGRzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwJz4je2ZpZWxkc308L2Rpdj5cblx0XCJcblxuXHRmaWVsZHNJdGVtOiAoe2Jhc2VDbGFzcywgbGFiZWwsdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cC1pdGVtLWxhYmVsJz4je2xhYmVsfTogPC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cC1pdGVtLXZhbHVlJz4je2VzY0hUTUwgdmFsdWV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRidXR0b246ICh7YmFzZUNsYXNzLCBhY3Rpb24sIGljb249JycsIGlzTXVsdGl9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbiBfYWN0aW9uQnV0dG9uICN7aWYgaXNNdWx0aSB0aGVuICdfaXNNdWx0aScgZWxzZSAnJ30nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbi1pY29uJz4je2ljb259PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRhY3Rpb25zOiAoe2Jhc2VDbGFzcywgYWN0aW9uc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucyc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cCc+I3thY3Rpb25zfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cdGFjdGlvbnNPdmVybGF5OiAoKS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tEYXRhVGFibGUuZGVmYXVsdHMuYmFzZUNsYXNzfS1hY3Rpb25zLW92ZXJsYXknPjwvZGl2PlxuXHRcIlxuXG5cdGFjdGlvbnNJdGVtOiAoe2Jhc2VDbGFzcywgYWN0aW9uLCBpY29uLCBsYWJlbCwgY3VzdG9tSWNvblN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0gX2FjdGlvbkJ1dHRvbiBfc3ViQWN0aW9uQnV0dG9uJyBkYXRhLWFjdGlvbj0nI3thY3Rpb259JyBzdHlsZT0nI3tjdXN0b21JY29uU3R5bGV9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAtaXRlbS10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG4iLCJkZWZhdWx0cyA9IFxuXHQncGVyUGFnZSc6IDIwXG5cdCdwYWdlQ291bnRNYXgnOiAxMFxuXHQnbWluV2lkdGgnOiAwXG5cdCdtb2JpbGVXaWR0aCc6IDczNlxuXHQnY2VsbHNIYXZlUGFkZGluZyc6IGZhbHNlXG5cdCdoYXNNb2JpbGUnOiB0cnVlXG5cdCdsb2FkT25Jbml0JzogdHJ1ZVxuXHQnY29sdW1ucyc6IFtdXG5cdCdzZWFyY2gnOiBbXVxuXHQncGVyY2VudGFnZSc6IHt9XG5cdCdiYXNlQ2xhc3MnOiAnRGF0YVRhYmxlJ1xuXHQnc2hvd1BhZ2VTdGF0dXMnOiB0cnVlXG5cdCdzb3J0QnknOiAnJ1xuXHQnYWxpZ25tZW50JzogJ2xlZnQnXG5cdCdhY3Rpb25zJzogZmFsc2Vcblx0J2lwRGF0YUZldGNoZXInOiAoaXBBZGRyZXNzKS0+IG5ldyBQcm9taXNlIChyZXNvbHZlKS0+ICQuZ2V0IFwiaHR0cDovL2lwaW5mby5pby8je2lwQWRkcmVzc31cIiwgcmVzb2x2ZSwgJ0pTT04nXG4iLCJoZWxwZXJzID0ge31cblxuXG5oZWxwZXJzLmNvbXBhcmVWYWx1ZXMgPSAodmFsdWVBLCB2YWx1ZUIpLT4gc3dpdGNoXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyB0eXBlb2YgdmFsdWVCXG5cdFx0dmFsdWVBIGlzIHZhbHVlQlxuXHRcblx0d2hlbiB0eXBlb2YgdmFsdWVBIGlzICdzdHJpbmcnXG5cdFx0dmFsdWVBIGlzICcnK3ZhbHVlQlxuXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnbnVtYmVyJ1xuXHRcdHZhbHVlQSBpcyBwYXJzZUZsb2F0KHZhbHVlQilcblxuXG5oZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCA9IChhY3Rpb25zUG9wdXAkKS0+XG5cdGlzT3BlbiA9IGFjdGlvbnNQb3B1cCQuZGF0YSAnaXNPcGVuJ1xuXG5cdGlmIGlzT3BlblxuXHRcdGFjdGlvbnNQb3B1cCQuZGF0YSgnb3ZlcmxheScpLnJlbW92ZSgpXG5cdFx0YWN0aW9uc1BvcHVwJC5yZW1vdmVDbGFzcyAnaXNfdmlzaWJsZSdcblx0ZWxzZVxuXHRcdGFjdGlvbnNQb3B1cCQuZGF0YSAnb3ZlcmxheScsIG92ZXJsYXkkID0gJChtYXJrdXAuYWN0aW9uc092ZXJsYXkoKSlcblx0XHRhY3Rpb25zUG9wdXAkLmFkZENsYXNzICdpc192aXNpYmxlJ1xuXHRcdG92ZXJsYXkkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpLm9uZSAnY2xpY2snLCAoKS0+IGhlbHBlcnMudG9nZ2xlQWN0aW9uc1BvcHVwKGFjdGlvbnNQb3B1cCQpXG5cblx0YWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nLCAhaXNPcGVuXG5cblxuaGVscGVycy5nZXRCcmVha2Rvd25Ub3RhbCA9IChicmVha2Rvd24sIGJyZWFrZG93bktleXMpLT4gc3dpdGNoXG5cdHdoZW4gYnJlYWtkb3duS2V5cy5sZW5ndGggaXMgMCB0aGVuIDBcblx0ZWxzZVxuXHRcdGJyZWFrZG93bktleXNcblx0XHRcdC5tYXAgKGJyZWFrZG93bkl0ZW0pLT4gYnJlYWtkb3duW2JyZWFrZG93bkl0ZW1dXG5cdFx0XHQucmVkdWNlIChhLGIpLT4gYStiXG5cblxuXG5oZWxwZXJzLm5vcm1hbGl6ZUNvbHVtbnMgPSAoY29sdW1ucyktPlxuXHRpZiBub3QgQXJyYXkuaXNBcnJheShjb2x1bW5zKVxuXHRcdG91dHB1dCA9IGNvbHVtbnNcblx0ZWxzZVxuXHRcdG91dHB1dCA9IHt9XG5cdFx0aWYgdHlwZW9mIGNvbHVtbnNbMF0gaXMgJ3N0cmluZydcblx0XHRcdG91dHB1dFtsYWJlbF0gPSB7bGFiZWx9IGZvciBsYWJlbCBpbiBjb2x1bW5zXG5cdFx0XG5cdFx0ZWxzZSBpZiBjb2x1bW5zWzBdPy5sYWJlbFxuXHRcdFx0b3V0cHV0W2NvbHVtbi5sYWJlbF0gPSBjb2x1bW4gZm9yIGNvbHVtbiBpbiBjb2x1bW5zXG5cblxuXHRmb3IgbGFiZWwsY29sdW1uIG9mIG91dHB1dFxuXHRcdGNvbHVtbi5sYWJlbCA/PSBsYWJlbFxuXHRcdGNvbHVtbi5zbHVnID89IGNvbHVtbi5sYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UgL1xcVy9nLCAnXydcblx0XHRjb2x1bW4udHlwZSA/PSAndGV4dCdcblxuXHRyZXR1cm4gb3V0cHV0IFxuXG5cbmhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGggPSAocm93LCBsYXJnZXN0KS0+XG5cdChyb3cuYnJlYWtkb3duQmFyVG90YWwgLyBsYXJnZXN0KSAqICgxMDAgLSAxOClcblxuXG5oZWxwZXJzLmdlbkhlYWRlckNlbGxTdHlsZSA9IChjb2x1bW4pLT5cblx0c3R5bGVTdHJpbmcgPSAnJ1xuXG5cdGlmIGNvbHVtbi53aWR0aFxuXHRcdHN0eWxlU3RyaW5nICs9IFwibWF4LXdpZHRoOiAje2NvbHVtbi53aWR0aH07XCJcblx0XG5cdGlmIGNvbHVtbi5ncm93ID49IDBcblx0XHRzdHlsZVN0cmluZyArPSBcImZsZXgtZ3JvdzogI3tjb2x1bW4uZ3Jvd307XCJcblxuXHRyZXR1cm4gaWYgc3R5bGVTdHJpbmcgdGhlbiBcInN0eWxlPScje3N0eWxlU3RyaW5nfSdcIiBlbHNlICcnXG5cblxuXG5oZWxwZXJzLmdlbkNlbGxTdHlsZSA9IChjb2x1bW4pLT5cblx0c3R5bGVTdHJpbmcgPSAnJ1xuXG5cdGlmIGNvbHVtbi53aWR0aFxuXHRcdHN0eWxlU3RyaW5nICs9IFwibWF4LXdpZHRoOiAje2NvbHVtbi53aWR0aH07XCJcblxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjb2xvciA9IEBjb2xvck1hcHBpbmcoY29sdW1uLmNvbG9yLCBjb2x1bW4uY29sb3JUeXBlKVxuXHRcdHN0eWxlU3RyaW5nICs9IFwiY29sb3I6ICN7Y29sb3J9O1wiXG5cblx0aWYgY29sdW1uLmN1c3RvbVN0eWxlXG5cdFx0c3R5bGVTdHJpbmcgKz0gY29sdW1uLmN1c3RvbVN0eWxlXG5cdFxuXHRpZiBjb2x1bW4uZ3JvdyA+PSAwXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJmbGV4LWdyb3c6ICN7Y29sdW1uLmdyb3d9O1wiXG5cblx0cmV0dXJuIGlmIHN0eWxlU3RyaW5nIHRoZW4gXCJzdHlsZT0nI3tzdHlsZVN0cmluZ30nXCIgZWxzZSAnJ1xuXG5cblxuXG5oZWxwZXJzLmdlbkNlbGxDbGFzc25hbWUgPSAoY29sdW1uKS0+XG5cdGNsYXNzU3RyaW5nID0gJydcblx0XG5cdGlmIGNvbHVtbi5zb3J0YWJsZVxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzU29ydGFibGUge3tjdXJyZW50U29ydH19J1xuXHRcblx0aWYgY29sdW1uLm5vTGFiZWxcblx0XHRjbGFzc1N0cmluZyArPSAnIF9ub0xhYmVsJ1xuXHRcblx0aWYgY29sdW1uLmlzTGlua1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzTGluaydcblx0XG5cdGlmIGNvbHVtbi5ub0VsbGlwc2lzXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9FbGxpcHNpcydcblx0XG5cdGlmIGNvbHVtbi5zaG93T3ZlcmZsb3dcblx0XHRjbGFzc1N0cmluZyArPSAnIF9zaG93T3ZlcmZsb3cnXG5cdFxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjbGFzc1N0cmluZyArPSAnIF9oYXNDb2xvcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdidXR0b24nIG9yIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnV0dG9uJ1xuXHRcdGNvbHVtbi5hbHdheXNDZW50ZXIgPSB0cnVlXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnJlYWtkb3duQmFyJ1xuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0lwRGV0YWlscydcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNGaWVsZHMnXG5cdFxuXHRpZiBjb2x1bW4uYWx3YXlzQ2VudGVyXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfYWx3YXlzQ2VudGVyJ1xuXG5cdHJldHVybiBjbGFzc1N0cmluZ1xuXG5cblxuXG5cblxuXG5oZWxwZXJzLmNvbG9yTWFwcGluZyA9ICh2YWx1ZSwgY29sb3JUeXBlPSduYW1lJyktPiBzd2l0Y2ggY29sb3JUeXBlXG5cdHdoZW4gJ2Jyb3dzZXInIHRoZW4gc3dpdGNoXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiBAY29sb3JNYXBwaW5nKCdvcmFuZ2UnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiBAY29sb3JNYXBwaW5nKCdncmVlbicpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnU2FmYXJpJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gQGNvbG9yTWFwcGluZygnYmx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnSUUnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdFZGdlJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Ymx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnT3BlcmEnIHRoZW4gQGNvbG9yTWFwcGluZygncmVkJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Z3JlZW4nKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cdFxuXHRcblx0d2hlbiAncGxhdGZvcm0nIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnTWFjIE9TIFgnIHRoZW4gQGNvbG9yTWFwcGluZygnYmxhY2snKVxuXHRcdHdoZW4gJ1dpbmRvd3MnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuICdXaW5kb3dzIFBob25lJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3B1cnBsZScpXG5cdFx0d2hlbiAnTGludXgnIHRoZW4gQGNvbG9yTWFwcGluZygnZGFya3llbGxvdycpXG5cdFx0d2hlbiAnaU9TJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsYWNrJylcblx0XHR3aGVuICdBbmRyb2lkJyB0aGVuIEBjb2xvck1hcHBpbmcoXCJsaWdodGdyZWVuXCIpXG5cdFx0ZWxzZSAndW5rbm93bidcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbicgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdFeGNlbGxlbnQnIHRoZW4gQGNvbG9yTWFwcGluZygnZ3JlZW4nKVxuXHRcdHdoZW4gJ05vcm1hbCcgdGhlbiBAY29sb3JNYXBwaW5nKCd5ZWxsb3cnKVxuXHRcdHdoZW4gJ1Bvb3InIHRoZW4gQGNvbG9yTWFwcGluZygncmVkJylcblx0XHRlbHNlICd1bmtub3duJ1xuXG5cdFxuXHR3aGVuICduYW1lJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ29yYW5nZScgdGhlbiAnI2VlNmYwZSdcblx0XHR3aGVuICdncmVlbicgdGhlbiAnIzAwYWQwOSdcblx0XHR3aGVuICdibHVlJyB0aGVuICcjNDc4OGYzJ1xuXHRcdHdoZW4gJ3llbGxvdycgdGhlbiAnI2VhYjcxZSdcblx0XHR3aGVuICdyZWQnIHRoZW4gJyNjYzQ4MjAnXG5cdFx0d2hlbiAnYmxhY2snIHRoZW4gJyMxODE4MTgnXG5cdFx0d2hlbiAncHVycGxlJyB0aGVuICcjYTAyMGJhJ1xuXHRcdHdoZW4gJ2xpZ2h0Ymx1ZScgdGhlbiAnIzBjYjNlZSdcblx0XHR3aGVuICdsaWdodGdyZWVuJyB0aGVuICcjNzhjMjU3J1xuXHRcdHdoZW4gJ2Rhcmt5ZWxsb3cnIHRoZW4gJyNlOGFjMDEnXG5cblx0ZWxzZSB2YWx1ZVxuXG5cblxuXG5cblxuaGVscGVycy5pY29uTWFwcGluZyA9ICh2YWx1ZSwgaWNvblR5cGUpLT4gc3dpdGNoIGljb25UeXBlXG5cdHdoZW4gJ2Jyb3dzZXInXG5cdFx0c3dpdGNoXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdGaXJlZm94JyB0aGVuICcjJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQ2hyb21lJyB0aGVuICclJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnU2FmYXJpJyB0aGVuICckJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnTW9iaWxlIFNhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0lFJyB0aGVuICcmJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRWRnZScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ09wZXJhJyB0aGVuICdcIidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0FuZHJvaWQnIHRoZW4gJyYjMDM5Oydcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdkZXZpY2UnXG5cdFx0c3dpdGNoIHZhbHVlXG5cdFx0XHR3aGVuICdEZXNrdG9wJyB0aGVuICchJ1xuXHRcdFx0d2hlbiAnVGFibGV0JyB0aGVuICc3J1xuXHRcdFx0d2hlbiAnTW9iaWxlJyB0aGVuICc2J1xuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3BsYXRmb3JtJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnTWFjIE9TIFgnIHRoZW4gJyonXG5cdFx0XHR3aGVuICdXaW5kb3dzJyB0aGVuICcpJ1xuXHRcdFx0d2hlbiAnV2luZG93cyBQaG9uZScgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ0xpbnV4JyB0aGVuICcrJ1xuXHRcdFx0d2hlbiAnaU9TJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnQW5kcm9pZCcgdGhlbiBcIiYjMDM5O1wiXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnc2F0aXNmYWN0aW9uJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRXhjZWxsZW50JyB0aGVuICdbJ1xuXHRcdFx0d2hlbiAnTm9ybWFsJyB0aGVuICdAJ1xuXHRcdFx0d2hlbiAnUG9vcicgdGhlbiAnPydcblx0XHRcdGVsc2UgJzQnXG5cblx0ZWxzZSAnNCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICdnZW5lcmFsLmNvZmZlZSdcbmltcG9ydCAnY29sdW1uLmNvZmZlZSdcbmltcG9ydCAncm93LmNvZmZlZSdcbmltcG9ydCAnc3BlY2lhbENlbGxzLmNvZmZlZSciLCJEYXRhVGFibGU6OmF0dGFjaEV2ZW50cyA9ICgpLT5cblx0IyA9PT09IFBhZ2luYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMucGFnaW5hdGlvbi5vbiAnY2xpY2snLCAnLl9wYWdpbmF0aW9uSXRlbScsIChldmVudCk9PlxuXHRcdCR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGlzQmFjayA9ICR0aGlzLmhhc0NsYXNzKCdfYmFjaycpXG5cdFx0aXNOZXh0ID0gJHRoaXMuaGFzQ2xhc3MoJ19uZXh0Jylcblx0XHRpc0V4dHJhID0gJHRoaXMuaGFzQ2xhc3MoJ19leHRyYUluZGljYXRvcicpXG5cblx0XHRpZiBpc0JhY2tcblx0XHRcdEBjdXJyZW50UGFnZS0tIHVubGVzcyBAY3VycmVudFBhZ2UgaXMgMVxuXHRcdFxuXHRcdGVsc2UgaWYgaXNOZXh0XG5cdFx0XHRAY3VycmVudFBhZ2UrKyB1bmxlc3MgQGN1cnJlbnRQYWdlIGlzIEBwYWdlQ291bnRSZWFsXG5cdFx0XG5cdFx0IyBlbHNlIGlmIG5vdCBpc0V4dHJhIGFuZCBub3QgaXNXcmFwcGVyXG5cdFx0ZWxzZSBpZiBub3QgaXNFeHRyYVxuXHRcdFx0cGFnZU51bWJlciA9IHBhcnNlRmxvYXQgJHRoaXMuY2hpbGRyZW4oKS5odG1sKClcblx0XHRcdEBjdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXJcblxuXG5cblxuXHQjID09PT0gU29ydGluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUhlYWRpbmcub24gJ2NsaWNrJywgJy5faXNTb3J0YWJsZScsIChldmVudCk9PlxuXHRcdEBzb3J0QnkgPSBldmVudC5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzBdLnRleHRDb250ZW50XG5cblxuXG5cdCMgPT09PSBBY3Rpb24gYnV0dG9uIGV2ZW50IGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ2NsaWNrJywgJy5fYWN0aW9uQnV0dG9uJywgKGV2ZW50KT0+XG5cdFx0YnV0dG9uJCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpZiBidXR0b24kLmhhc0NsYXNzKCdfaXNNdWx0aScpXG5cdFx0XHRoZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLm5leHQoKS5jaGlsZHJlbigpXG5cdFx0XG5cdFx0ZWxzZVxuXHRcdFx0aXRlbVJvdyQgPSBidXR0b24kLmNsb3Nlc3QoJy5fdGFibGVSb3cnKVxuXHRcdFx0YWN0aW9uID0gYnV0dG9uJC5kYXRhKCdhY3Rpb24nKVxuXHRcdFx0aXRlbUlEID0gaXRlbVJvdyQuZGF0YSgncm93LWlkJylcblx0XHRcdGl0ZW1JbmRleCA9IGl0ZW1Sb3ckLmRhdGEoJ2luZGV4Jylcblx0XHRcdGRhdGFJdGVtID0gaWYgaXRlbUlEIHRoZW4gQGFsbFJvd3MuZmluZCAocm93KT0+IGhlbHBlcnMuY29tcGFyZVZhbHVlcyhyb3dbQG9wdGlvbnMudW5pcXVlSURdLCBpdGVtSUQpXG5cdFx0XHRkYXRhSXRlbSA/PSBpdGVtSURcblxuXHRcdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX3N1YkFjdGlvbkJ1dHRvbicpXG5cdFx0XHRcdGhlbHBlcnMudG9nZ2xlQWN0aW9uc1BvcHVwIGJ1dHRvbiQucGFyZW50KClcblxuXHRcdFx0QGVscy50YWJsZS50cmlnZ2VyIFwiYWN0aW9uLiN7YWN0aW9ufVwiLCBkYXRhSXRlbVxuXG5cblxuXG5cblxuXHQjID09PT0gUm93IGV4cGFuc2lvbiBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdjbGljaycsICcuX2V4cGFuZERyaWxsZG93bicsIChldmVudCk9PlxuXHRcdGJ1dHRvbiQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aXRlbVJvdyA9IGJ1dHRvbiQucGFyZW50KCkuZGF0YSgncm93Jylcblx0XHRcblx0XHRpdGVtUm93LmRyaWxsZG93bk9wZW4gPSAhaXRlbVJvdy5kcmlsbGRvd25PcGVuXG5cblxuXG5cblxuXG5cblx0IyA9PT09IElQIERldGFpbHMgbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnbW91c2VvdmVyJywgJy5faXBEZXRhaWxzLXRyaWdnZXInLCAoZXZlbnQpPT5cblx0XHR0cmlnZ2VyJCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHR3cmFwcGVyJCA9IHRyaWdnZXIkLnBhcmVudCgpXG5cdFx0Y29udGVudCQgPSB0cmlnZ2VyJC5uZXh0KClcblx0XHRjb3VudHJ5JCA9IGNvbnRlbnQkLm5leHQoKVxuXHRcdGlwQWRkcmVzcyA9IHdyYXBwZXIkLmRhdGEgJ2lwJ1xuXHRcdGlzTG9hZGVkID0gdHJpZ2dlciQuaGFzQ2xhc3MgJ19pc1JlYWR5J1xuXG5cblx0XHR1bmxlc3MgaXNMb2FkZWRcdFx0XHRcblx0XHRcdEBvcHRpb25zLmlwRGF0YUZldGNoZXIoaXBBZGRyZXNzKS50aGVuIChpcERldGFpbHMpPT5cblx0XHRcdFx0cmV0dXJuIHVubGVzcyBpcERldGFpbHNcblx0XHRcdFx0XG5cdFx0XHRcdG91dHB1dCA9IGZvciBsYWJlbCx2YWx1ZSBvZiBpcERldGFpbHMgXG5cdFx0XHRcdFx0bWFya3VwLmlwRGV0YWlsc0l0ZW0oQG1hcmt1cEFyZ3Mge2xhYmVsLHZhbHVlfSlcblxuXHRcdFx0XHRjb250ZW50JC5odG1sIG91dHB1dC5qb2luKCcnKVxuXHRcdFx0XHR3cmFwcGVyJC5hZGRDbGFzcyAnX2lzUmVhZHknXG5cblxuXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cblxuIiwiRGF0YVRhYmxlOjphdHRhY2hCaW5kaW5ncyA9ICgpLT5cblx0U2ltcGx5QmluZC5zZXR0aW5ncy50cmFja0FycmF5Q2hpbGRyZW4gPSBmYWxzZVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTdGF0ZVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnbm9SZXN1bHRzJykub2YoQHN0YXRlKVxuXHRcdC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMubm9SZXN1bHRzTWVzc2FnZSkudHJhbnNmb3JtIChub1Jlc3VsdHMpPT4gaWYgbm9SZXN1bHRzIGFuZCBub3QgQHN0YXRlLmxvYWRpbmcgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5ub1Jlc3VsdHMnKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKG5vUmVzdWx0cyk9PiBpZiBub1Jlc3VsdHMgYW5kIG5vdCBAc3RhdGUubG9hZGluZyB0aGVuICdfbm9SZXN1bHRzJyBlbHNlICcnXG5cdFxuXHRTaW1wbHlCaW5kKCdsb2FkaW5nJykub2YoQHN0YXRlKVxuXHRcdC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMubG9hZGluZ01lc3NhZ2UpLnRyYW5zZm9ybSAobG9hZGluZyktPiBpZiBsb2FkaW5nIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUubG9hZGluZycpLm9mKEBlbHMudGFibGVPdXRlcndyYXApLnRyYW5zZm9ybSAobG9hZGluZyk9PiBpZiBsb2FkaW5nIHRoZW4gJ19sb2FkaW5nJyBlbHNlICcnXG5cdFx0LmFuZC50byAobG9hZGluZyk9PlxuXHRcdFx0aWYgbG9hZGluZ1xuXHRcdFx0XHRAc3RhdGUubm9SZXN1bHRzID0gZmFsc2Vcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9ICFAdmlzaWJsZVJvd3MubGVuZ3RoXG5cblx0U2ltcGx5QmluZCgnZXJyb3InKS5vZihAc3RhdGUpXG5cdFx0LnRvKCd0ZXh0Q29udGVudC5lcnJvck1lc3NhZ2UnKS5vZihAZWxzLmVycm9yTWVzc2FnZSlcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaXNWaXNpYmxlJykub2YoQGVscy5lcnJvck1lc3NhZ2UpLnRyYW5zZm9ybSAoaGFzRXJyb3IpLT4gaWYgaGFzRXJyb3IgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5oYXNFcnJvcicpLm9mKEBlbHMudGFibGVPdXRlcndyYXApLnRyYW5zZm9ybSAoaGFzRXJyb3IpLT4gaWYgaGFzRXJyb3IgdGhlbiAnX2Vycm9yJyBlbHNlICcnXG5cdFx0LmFuZC50byAoZXJyKS0+IGNvbnNvbGUuZXJyb3IoZXJyKSBpZiBlcnJcblx0XG5cblx0aWYgQG9wdGlvbnMuaGFzTW9iaWxlXG5cdFx0QHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcblx0XHRTaW1wbHlCaW5kKCdldmVudDpyZXNpemUnKS5vZih3aW5kb3cpXG5cdFx0XHQudG8gKCk9PiBAd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0U2ltcGx5QmluZCgnd2luZG93V2lkdGgnKS5vZihAKVxuXHRcdFx0LnRvKCdjbGFzc05hbWUubW9iaWxlVmVyc2lvbicpLm9mKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0XHRcdC50cmFuc2Zvcm0gKHdpbmRvd1dpZHRoKT0+IGlmIHdpbmRvd1dpZHRoIDw9IEBvcHRpb25zLm1vYmlsZVdpZHRoIHRoZW4gJ19tb2JpbGVWZXJzaW9uJyBlbHNlICcnXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBDb2x1bW4gdmlzaWJpbGl0eVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0Zm9yIGwsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnMgdGhlbiBkbyAoY29sdW1uKT0+XG5cdFx0U2ltcGx5QmluZCgnaGlkZGVuJykub2YoY29sdW1uKVxuXHRcdFx0LnRvKFwiaW5uZXJIVE1MLiN7Y29sdW1uLnNsdWd9XCIpLm9mKEBlbHMuZ2xvYmFsU3R5bGVzKVxuXHRcdFx0XHQudHJhbnNmb3JtIChpc0hpZGRlbik9PiBpZiBpc0hpZGRlbiB0aGVuIFwiI3tAdGFibGVJRH0gLl9fI3tjb2x1bW4uc2x1Z30ge2Rpc3BsYXk6bm9uZX1cIiBlbHNlICcnXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgUm93cyBhcnJheSByZW5kZXJpbmcvcHJvY2Vzc2luZ1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnYXJyYXk6dmlzaWJsZVJvd3MnKS5vZihAKVxuXHRcdC50byAocm93cywgcHJldlJvd3MpPT5cblx0XHRcdGlmIHByZXZSb3dzPy5sZW5ndGhcblx0XHRcdFx0Zm9yIHJvdyBpbiBwcmV2Um93c1xuXHRcdFx0XHRcdHJvdy52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFxuXHRcdFx0dHJ5XG5cdFx0XHRcdGZvciByb3cgaW4gcm93c1xuXHRcdFx0XHRcdEBwcm9jZXNzUm93KHJvdylcblx0XHRcdFx0XHRyb3cudmlzaWJsZSA9IHRydWVcblx0XHRcdGNhdGNoIGVyclxuXHRcdFx0XHRAc3RhdGUuZXJyb3IgPSBlcnJcblx0XHRcdFxuXHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9ICFyb3dzLmxlbmd0aFxuXHRcdFxuXHRcdC5hbmQudG8gKHJvd3MpPT5cblx0XHRcdHJldHVybiBpZiBub3QgQGhhc0JyZWFrZG93bkJhclxuXHRcdFx0Zm9yIHJvdyBpbiByb3dzXG5cdFx0XHRcdGlmIHJvdy5icmVha2Rvd25CYXJUb3RhbCA+IGxhcmdlc3RCcmVha2Rvd25Ub3RhbCBvciBub3QgbGFyZ2VzdEJyZWFrZG93blRvdGFsP1xuXHRcdFx0XHRcdGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IHJvdy5icmVha2Rvd25CYXJUb3RhbFxuXG5cdFx0XHRAbGFyZ2VzdEJyZWFrZG93blRvdGFsID0gbGFyZ2VzdEJyZWFrZG93blRvdGFsIG9yIDBcblxuXHRcdC5hbmQudG8oJ3RleHRDb250ZW50LnJvd1JhbmdlJykub2YoQGVscy5wYWdlU3RhdHVzKVxuXHRcdFx0LnRyYW5zZm9ybSAocm93cyk9PiBcIiN7QGF2YWlsYWJsZVJvd3MuaW5kZXhPZihyb3dzWzBdKSsxfS0je0BhdmFpbGFibGVSb3dzLmluZGV4T2Yocm93cy5zbGljZSgtMSlbMF0pKzF9XCJcblxuXG5cdFNpbXBseUJpbmQoJ2FycmF5OmFsbFJvd3MnKS5vZihAKS50byAocm93cyk9PlxuXHRcdEBzZWFyY2hDcml0ZXJpYSA9ICcnXG5cdFx0QGN1cnJlbnRQYWdlID0gMVxuXHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhcm93cy5sZW5ndGhcblx0XHRpZiBAc29ydEJ5IGlzIEBvcHRpb25zLnNvcnRCeVxuXHRcdFx0QHNvcnRCeSA9ICcnXG5cdFx0XHRAc29ydEJ5ID0gQG9wdGlvbnMuc29ydEJ5XG5cdFx0ZWxzZVxuXHRcdFx0QHNvcnRCeSA9ICcnXG5cblxuXG5cdFNpbXBseUJpbmQoJ2F2YWlsYWJsZVJvd3MnLCB7dXBkYXRlT25CaW5kOmZhbHNlLCB1cGRhdGVFdmVuSWZTYW1lOnRydWV9KS5vZihAKVxuXHRcdC50byAocm93cyk9PiBAY2FsY1BhZ2VDb3VudChyb3dzKVxuXHRcdC5hbmQudG8oJ3RleHRDb250ZW50LnRvdGFsUm93cycpLm9mKEBlbHMucGFnZVN0YXR1cykudHJhbnNmb3JtIChyb3dzKS0+IHJvd3MubGVuZ3RoXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFBhZ2luYXRpb25cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ3BhZ2VDb3VudCcpLm9mKEApXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25JdGVtcykgIyBSZW5kZXIgcGFnaW5hdGlvblxuXHRcdFx0LnRyYW5zZm9ybSAoY291bnQpPT5cblx0XHRcdFx0cGFnaW5hdGlvbkl0ZW1zID0gJydcblx0XHRcdFx0Zm9yIHZhbHVlIGluIFsxLi5jb3VudF1cblx0XHRcdFx0XHRwYWdpbmF0aW9uSXRlbXMgKz0gbWFya3VwLnBhZ2luYXRpb25JdGVtKEBtYXJrdXBBcmdzIHt2YWx1ZX0pIHVubGVzcyB2YWx1ZSBpcyAwXG5cblx0XHRcdFx0cmV0dXJuIHBhZ2luYXRpb25JdGVtc1xuXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMucGFnaW5hdGlvbikudHJhbnNmb3JtIChjb3VudCktPiBpZiBjb3VudCA+IDEgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcblxuXHRTaW1wbHlCaW5kKCdwYWdlQ291bnRSZWFsJykub2YoQClcblx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdFx0LnRyYW5zZm9ybSAocmVhbENvdW50KT0+XG5cdFx0XHRcdGlmIHJlYWxDb3VudCA8PSBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiAnJ1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0b3B0aW9ucyA9ICc8b3B0aW9uPi4uLjwvb3B0aW9uPidcblx0XHRcdFx0XHRvcHRpb25zICs9IFwiPG9wdGlvbj4je2luZGV4fTwvb3B0aW9uPlwiIGZvciBpbmRleCBpbiBbKEBvcHRpb25zLnBhZ2VDb3VudE1heCsxKS4ucmVhbENvdW50XVxuXHRcdFx0XHRcdHJldHVybiBvcHRpb25zXG5cdFx0XG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmhhc0V4dHJhJykub2YoQGVscy5wYWdpbmF0aW9uKS50cmFuc2Zvcm0gKHJlYWxDb3VudCk9PiBpZiByZWFsQ291bnQgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiAnaGFzX2V4dHJhJyBlbHNlICcnXG5cblxuXG5cdCMgPT09PSBFeHRyYSBJbmRpY2F0b3IvUGFnZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ3ZhbHVlJywgdXBkYXRlT25CaW5kOmZhbHNlKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhVGV4dClcblx0XHQuYW5kLnRvKCdjdXJyZW50UGFnZScpLm9mKEApXG5cblxuXG5cblx0IyA9PT09IEN1cnJlbnQgUGFnZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0U2ltcGx5QmluZCgnY3VycmVudFBhZ2UnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKEApXG5cdFx0LnRyYW5zZm9ybVNlbGYgKGN1cnJlbnRQYWdlKT0+XG5cdFx0XHRjdXJyZW50UGFnZSA9IGlmIGN1cnJlbnRQYWdlIGlzICcuLi4nIHRoZW4gMSBlbHNlIHBhcnNlRmxvYXQoY3VycmVudFBhZ2UpXG5cdFx0XHRyZXR1cm4gaWYgY3VycmVudFBhZ2UgPiBAcGFnZUNvdW50UmVhbCB0aGVuIEBwYWdlQ291bnRSZWFsIGVsc2UgY3VycmVudFBhZ2Vcblx0XHRcblx0XHQudG8oJ3ZhbHVlJykub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0XHQudHJhbnNmb3JtIChjdXJyZW50UGFnZSk9PiBpZiBjdXJyZW50UGFnZSA+IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuIGN1cnJlbnRQYWdlIGVsc2UgJy4uLidcblx0XHRcblx0XHQuYW5kLnRvIChjdXJyZW50UGFnZSk9PlxuXHRcdFx0QHNldFZpc2libGVQYWdlKGN1cnJlbnRQYWdlKVxuXHRcdFx0QHNldFBhZ2VJbmRpY2F0b3IoY3VycmVudFBhZ2UpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTZWFyY2ggRmllbGRcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFxuXHQjID09PT0gU2VhcmNoIEZpZWxkIHZhbHVlL21hcmt1cCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0aWYgQG9wdGlvbnMuc2VhcmNoLmxlbmd0aFxuXHRcdEBzZWFyY2hQYXJhbSA9IEBvcHRpb25zLnNlYXJjaFswXVxuXG5cdFx0U2ltcGx5QmluZCgnc2VhcmNoJykub2YoQG9wdGlvbnMpXG5cdFx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMuc2VhcmNoUGFyYW0pXG5cdFx0XHRcdC50cmFuc2Zvcm0gKG9wdGlvbnMpLT4gb3B0aW9ucy5tYXAoKG9wdGlvbiktPlwiPG9wdGlvbj4je29wdGlvbn08L29wdGlvbj5cIikuam9pbignJylcblxuXHRcdFNpbXBseUJpbmQoJ3ZhbHVlJykub2YoQGVscy5zZWFyY2hQYXJhbSlcblx0XHRcdC50bygnc2VhcmNoUGFyYW0nKS5vZihAKVxuXHRcdFx0XHQucGlwZSgnYXR0cjpwbGFjZWhvbGRlcicpLm9mKEBlbHMuc2VhcmNoQ3JpdGVyaWEpXG5cdFx0XHRcdFx0LnRyYW5zZm9ybSAob3B0aW9uKS0+IFwiU2VhcmNoIGJ5ICN7b3B0aW9ufVwiXG5cblxuXG5cdCMgPT09PSBUYWJsZSByZXN1bHRzIGZpbHRlciAmIGF2YWlhYmxlIHJvd3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ3ZhbHVlJykub2YoQGVscy5zZWFyY2hDcml0ZXJpYSkgIyBTZWFyY2gvRmlsdGVyXG5cdFx0LnRvKCdzZWFyY2hDcml0ZXJpYScsIHVwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSkub2YoQCkuYm90aFdheXMoKVxuXHRcdFx0LmNoYWluVG8gKHNlYXJjaENyaXRlcmlhKT0+XG5cdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSBAYWxsUm93c1xuXHRcdFx0XHR0YXJnZXRDb2x1bW4gPSBAb3B0aW9ucy5jb2x1bW5zW0BzZWFyY2hQYXJhbV1cblxuXHRcdFx0XHRpZiBzZWFyY2hDcml0ZXJpYSBhbmQgKHRhcmdldENvbHVtbiBvciBAYWxsUm93c1swXT9bQHNlYXJjaFBhcmFtXT8pXG5cdFx0XHRcdFx0cm93c1RvTWFrZUF2YWlsYWJsZSA9IHJvd3NUb01ha2VBdmFpbGFibGUuZmlsdGVyIChyb3cpPT5cblx0XHRcdFx0XHRcdHJvd1ZhbHVlID0gaWYgdGFyZ2V0Q29sdW1uPy5yYXdWYWx1ZUZvcm1hdHRlciB0aGVuIHRhcmdldENvbHVtbi5yYXdWYWx1ZUZvcm1hdHRlcihyb3dbQHNlYXJjaFBhcmFtXSkgZWxzZSByb3dbQHNlYXJjaFBhcmFtXVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJvd1ZhbHVlPy50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMgc2VhcmNoQ3JpdGVyaWEudG9Mb3dlckNhc2UoKVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnJvd0ZpbHRlclxuXHRcdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSByb3dzVG9NYWtlQXZhaWxhYmxlLmZpbHRlciAocm93KT0+XG5cdFx0XHRcdFx0XHRyb3dDbG9uZSA9IGV4dGVuZC5jbG9uZShyb3cpXG5cdFx0XHRcdFx0XHRyb3dDbG9uZVtuYW1lXSA9IGNvbHVtbi5yYXdWYWx1ZUZvcm1hdHRlcihyb3dDbG9uZVtuYW1lXSkgZm9yIG5hbWUsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnMgd2hlbiBjb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXJcblx0XHRcdFx0XHRcdHJldHVybiBAb3B0aW9ucy5yb3dGaWx0ZXIocm93Q2xvbmUpXG5cdFx0XHRcdFxuXHRcdFx0XHRAYXZhaWxhYmxlUm93cyA9IHJvd3NUb01ha2VBdmFpbGFibGVcblx0XHRcdFx0QGN1cnJlbnRQYWdlID0gMVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTb3J0aW5nXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdzb3J0QnknLCB7dXBkYXRlRXZlbklmU2FtZTp0cnVlLCB1cGRhdGVPbkJpbmQ6ZmFsc2V9LCB0cnVlKS5vZihAKVxuXHRcdC50byAoY3VycmVudFNvcnQsIHByZXZTb3J0KT0+IGlmIGN1cnJlbnRTb3J0IG9yIHByZXZTb3J0XG5cdFx0XHRpZiBjdXJyZW50U29ydCBpcyBwcmV2U29ydCBhbmQgcHJldlNvcnRcblx0XHRcdFx0QHNvcnREaXJlY3Rpb24gKj0gLTFcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHNvcnREaXJlY3Rpb24gPSAtMVxuXG5cdFx0XHR0YXJnZXRDb2x1bW4gPSBpZiBjdXJyZW50U29ydCB0aGVuIGN1cnJlbnRTb3J0IGVsc2UgbnVsbFxuXHRcdFx0QGF2YWlsYWJsZVJvd3MgPSBAc29ydFJvd3MoQGF2YWlsYWJsZVJvd3MsIHRhcmdldENvbHVtbilcblx0XHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXHRcblx0aWYgQGVscy50YWJsZUhlYWRpbmcuY2hpbGRyZW4oJy5faXNTb3J0YWJsZScpLmxlbmd0aFxuXHRcdFNpbXBseUJpbmQoJ3NvcnRCeScsIHVwZGF0ZU9uQmluZDp0cnVlKS5vZihAKVxuXHRcdFx0LnRvKCdtdWx0aTpjbGFzc05hbWUuY3VycmVudFNvcnQnKS5vZihAZWxzLnRhYmxlSGVhZGluZy5jaGlsZHJlbignLl9pc1NvcnRhYmxlJykpXG5cdFx0XHRcdC50cmFuc2Zvcm0gKGN1cnJlbnQsIHByZXYsIGVsKS0+IGlmIGN1cnJlbnQgaXMgZWwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgdGhlbiAnX2N1cnJlbnRTb3J0JyBlbHNlICcnXG5cblxuXG5cblx0U2ltcGx5QmluZCgnc29ydERpcmVjdGlvbicpLm9mKEApXG5cdFx0LnRvKCdjbGFzc05hbWUuc29ydERpcmVjdGlvbicpLm9mKEBlbHMudGFibGUpXG5cdFx0XHQudHJhbnNmb3JtIChzb3J0RGlyZWN0aW9uKS0+IGlmIHNvcnREaXJlY3Rpb24gaXMgLTEgdGhlbiAnZGVzYycgZWxzZSAnYXNjJ1xuXG5cblxuXG5cblx0UHJvbWlzZS5yZXNvbHZlKClcblxuIiwiRGF0YVRhYmxlOjpzb3J0QnkgPSAoY29sdW1uKS0+Iiwie1xuICBcIm5hbWVcIjogXCJAZGFuaWVsa2FsZW4vZGF0YV90YWJsZVwiLFxuICBcInZlcnNpb25cIjogXCIyLjkuM1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGlueSBsaWJyYXJ5IGZvciBkaXNwbGF5aW5nIGRhdGFiYXNlLWZldGNoZWQgZGF0YSBpbiBhbiBIVE1MIHRhYmxlIHdpdGggZnJvbnQtZW5kIHBhZ2luYXRpb25cIixcbiAgXCJtYWluXCI6IFwiZGlzdC9qcy9kYXRhX3RhYmxlLmpzXCIsXG4gIFwiYnJvd3NlclwiOiB7XG4gICAgXCIuL2RlYnVnXCI6IFwiZGlzdC9qcy9kYXRhX3RhYmxlLmRlYnVnLmpzXCIsXG4gICAgXCIuL2Rpc3QvanMvZGF0YV90YWJsZS5qc1wiOiBcInNyYy9jb2ZmZWUvaW5kZXguY29mZmVlXCJcbiAgfSxcbiAgXCJicm93c2VyaWZ5XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcInNpbXBseWltcG9ydC9jb21wYXRcIlxuICAgIF1cbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGRhbmllbGthbGVuL3Nhc3MtYmFzZVwiOiBcIl4xLjUuMlwiLFxuICAgIFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRcIjogXCJeMS4xNS44XCIsXG4gICAgXCJibHVlYmlyZFwiOiBcIl4zLjUuMFwiLFxuICAgIFwiZXNjYXBlLWh0bWxcIjogXCJeMS4wLjNcIixcbiAgICBcInNtYXJ0LWV4dGVuZFwiOiBcIl4xLjcuM1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImNoYWxrXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJjb2ZmZWUtc2NyaXB0XCI6IFwiXjEuMTIuNlwiLFxuICAgIFwiZnMtamV0cGFja1wiOiBcIl4xLjEuMFwiLFxuICAgIFwibm9kZS1zYXNzXCI6IFwiXjQuNS4zXCIsXG4gICAgXCJwcm9taXNlLWJyZWFrXCI6IFwiXjAuMS4xXCIsXG4gICAgXCJzYXNzLW1vZHVsZS1pbXBvcnRlclwiOiBcImdpdGh1YjpkYW5pZWxrYWxlbi9zYXNzLW1vZHVsZS1pbXBvcnRlclwiLFxuICAgIFwic2ltcGx5aW1wb3J0XCI6IFwiXjQuMC4wLXMzM1wiLFxuICAgIFwic2ltcGx5d2F0Y2hcIjogXCJeMy4wLjAtbDJcIlxuICB9LFxuICBcInNhc3NGbnNcIjogXCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3Nhc3MtYmFzZS9jb21waWxlci1mbnMuanNcIixcbiAgXCJzYXNzSW1wb3J0ZXJcIjogXCJub2RlX21vZHVsZXMvc2Fzcy1tb2R1bGUtaW1wb3J0ZXIvbGliL2luZGV4LmpzXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJwb3N0dmVyc2lvblwiOiBcIm5wbSBydW4gYnVpbGQgJiYgZ2l0IGFkZCAuICYmIGdpdCBjb21taXQgLWEgLW0gJ1tCdWlsZF0nXCIsXG4gICAgXCJwb3N0cHVibGlzaFwiOiBcImdpdCBwdXNoXCIsXG4gICAgXCJidWlsZFwiOiBcImNha2UgaW5zdGFsbDpidWlsZDsgY2FrZSAtZCBidWlsZCAmJiBjYWtlIGJ1aWxkICYmIGNwIC1yIGJ1aWxkLyogZGlzdC9cIixcbiAgICBcImNvbXBpbGVcIjogXCJjYWtlIC1kIGJ1aWxkXCIsXG4gICAgXCJ3YXRjaFwiOiBcImNha2UgaW5zdGFsbDsgY2FrZSAtZCB3YXRjaFwiLFxuICAgIFwid2F0Y2g6anNcIjogXCJzaW1wbHl3YXRjaCAnc3JjL2NvZmZlZS8qLmNvZmZlZScgLWUgJ2NvZmZlZScgLXggJ25wbSBydW4gY29tcGlsZTpqczpkZWJ1ZyAtcydcIixcbiAgICBcIndhdGNoOnNhc3NcIjogXCJmb250c0Rpcj1kaXN0L2ZvbnRzIHNpbXBseXdhdGNoICdzcmMvc2Fzcy8qLnNhc3MnIC1lICdzYXNzJyAteCAnbnBtIHJ1biBjb21waWxlOnNhc3M6ZGVidWcgLXMnXCIsXG4gICAgXCJ0YWthbmFcIjogXCJmb250c0Rpcj1kaXN0L2ZvbnRzIHRha2FuYSAtZiAkKHB3ZCkvJG5wbV9wYWNrYWdlX3Nhc3NGbnMgJChwd2QpL3NyYy9zYXNzXCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vZGF0YV90YWJsZS5naXRcIlxuICB9LFxuICBcImF1dGhvclwiOiBcIkRhbmllbCBLYWxlblwiLFxuICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9kYXRhX3RhYmxlL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vZGF0YV90YWJsZSNyZWFkbWVcIlxufVxuIiwiaW1wb3J0ICcuL2hlbHBlcnMnXG5pbXBvcnQgJy4vZXJyb3JzQW5kV2FybmluZ3MnXG4iLCJTaW1wbHlCaW5kID0gKHN1YmplY3QsIG9wdGlvbnMsIHNhdmVPcHRpb25zLCBpc1N1YiwgY29tcGxldGVDYWxsYmFjayktPlxuXHRpZiAoIXN1YmplY3QgYW5kIHN1YmplY3QgaXNudCAwKSBvciAoIWNoZWNrSWYuaXNTdHJpbmcoc3ViamVjdCkgYW5kICFjaGVja0lmLmlzTnVtYmVyKHN1YmplY3QpIGFuZCAhY2hlY2tJZi5pc0Z1bmN0aW9uKHN1YmplY3QpIGFuZCBzdWJqZWN0IG5vdCBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdHRocm93RXJyb3IoJ2ludmFsaWRQYXJhbU5hbWUnKSB1bmxlc3MgY2hlY2tJZi5pc0JpbmRpbmdJbnRlcmZhY2Uoc3ViamVjdClcblxuXHRpZiBjaGVja0lmLmlzT2JqZWN0KHN1YmplY3QpIGFuZCBzdWJqZWN0IG5vdCBpbnN0YW5jZW9mIEFycmF5ICMgSW5kaWNhdGVzIGl0J3MgYSBCaW5kaW5nIGluc3RhbmNlIG9iamVjdCBkdWUgdG8gdGhlIGFib3ZlIGNoZWNrXG5cdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBpZiBjb21wbGV0ZUNhbGxiYWNrIHRoZW4gY29tcGxldGVDYWxsYmFjayhzdWJqZWN0KSBlbHNlIHN1YmplY3Quc2VsZkNsb25lKClcblx0XG5cdGVsc2Vcblx0XHRuZXdJbnRlcmZhY2UgPSBuZXcgQmluZGluZ0ludGVyZmFjZShvcHRpb25zKVxuXHRcdG5ld0ludGVyZmFjZS5zYXZlT3B0aW9ucyA9IHNhdmVPcHRpb25zXG5cdFx0bmV3SW50ZXJmYWNlLmlzU3ViID0gaXNTdWJcblx0XHRuZXdJbnRlcmZhY2UuY29tcGxldGVDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2tcblxuXHRcdGlmIGNoZWNrSWYuaXNGdW5jdGlvbihzdWJqZWN0KVxuXHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBuZXdJbnRlcmZhY2Uuc2V0T2JqZWN0KHN1YmplY3QsIHRydWUpXG5cdFx0ZWxzZVxuXHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBuZXdJbnRlcmZhY2Uuc2V0UHJvcGVydHkoc3ViamVjdClcblxuXHRyZXR1cm4gaW50ZXJmYWNlVG9SZXR1cm5cblxuXG5cblxuaW1wb3J0ICcuL21ldGhvZHMnIiwiQmluZGluZyA9IChvYmplY3QsIHR5cGUsIHN0YXRlKS0+XG5cdGV4dGVuZFN0YXRlKEAsIHN0YXRlKVxuXHRAb3B0aW9uc0RlZmF1bHQgPSBpZiBAc2F2ZU9wdGlvbnMgdGhlbiBAb3B0aW9ucyBlbHNlIGRlZmF1bHRPcHRpb25zXG5cdEB0eXBlID0gdHlwZVx0XHRcdFx0XHRcdFx0IyBPYmplY3RQcm9wIHwgQXJyYXkgfCBGdW5jIHwgUHJveHkgfCBFdmVudCB8IFBob2xkZXIgfCBET01BdHRyIHwgRE9NQ2hlY2tib3ggfCBET01SYWRpb1xuXHRAb2JqZWN0ID0gb2JqZWN0IFx0XHRcdFx0XHRcdCMgVGhlIHN1YmplY3Qgb2JqZWN0IG9mIHRoaXMgYmluZGluZywgaS5lLiBmdW5jdGlvbiwgYXJyYXksIHt9LCBET00gZWwsIGV0Yy5cblx0QElEID0gZ2VuSUQoKSBcdFx0XHRcdFx0XHRcdCMgQXNzaWduZWQgb25seSBhZnRlciBwYXNzaW5nIGEgdmFsaWQgb2JqZWN0IHRvIC5vZigpXG5cdEBzdWJzID0gW11cdFx0XHRcdFx0XHRcdFx0IyBTdWJzY3JpYmVycyBhcnJheSBsaXN0aW5nIGFsbCBvZiB0aGUgb2JqZWN0cyB0aGF0IHdpbGwgYmUgdXBkYXRlZCB1cG9uIHZhbHVlIHVwZGF0ZVxuXHRAc3Vic01ldGEgPSBnZW5PYmooKVx0XHRcdFx0XHQjIE1hcCBzdWJzY3JpYmVycycgSUQgdG8gdGhlaXIgbWV0YWRhdGEgKGkuZS4gb3B0aW9ucywgdHJhbnNmb3JtLCBjb25kaXRpb24sIG9uZS10aW1lLWJpbmRpbmcsIGV0Yy4pXG5cdEBwdWJzTWFwID0gZ2VuT2JqKClcdFx0XHRcdFx0XHQjIE1hcCBwdWJsaXNoZXJzIChiaW5kaW5ncyB0aGF0IHVwZGF0ZSB0aGlzIGJpbmRpbmcpIGJ5IHRoZWlyIElEXG5cdEBhdHRhY2hlZEV2ZW50cyA9IFtdXHRcdFx0XHRcdCMgQXJyYXkgbGlzdGluZyBhbGwgb2YgdGhlIGV2ZW50cyBjdXJyZW50bHkgbGlzdGVuZWQgb24gQG9iamVjdFxuXHRAc2V0VmFsdWUgPSBzZXRWYWx1ZU5vb3AgaWYgQHR5cGUgaXMgJ1Byb3h5J1xuXG5cdCMgPT09PSBQcm9wZXJ0aWVzIGRlY2xhcmVkIGxhdGVyIG9yIGluaGVyaXRlZCBmcm9tIGJpbmRpbmcgaW50ZXJmYWNlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIEBvcHRpb25zID0gb3B0aW9uc1xuXHQjIEB2YWx1ZSA9IHVuZGVmaW5lZCBcdFx0XHRcdFx0IyBXaWxsIHJlcHJlc2VudCB0aGUgYWN0dWFsIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGJpbmRpbmcvb2JqZWN0XG5cdCMgQHByb3BlcnR5ID0gcHJvcGVydHlcdFx0XHRcdFx0IyBUaGUgcHJvcGVydHkgbmFtZSBvciBhcnJheSBpbmRleCBvciBldmVudCBjYWxsYmFjayBhcmd1bWVudFxuXHQjIEBzZWxlY3RvciA9IHNlbGVjdG9yXHRcdFx0XHRcdCMgVGhlIHByb3BlcnR5IG5hbWUgb3IgYXJyYXkgaW5kZXggb3IgZXZlbnQgY2FsbGJhY2sgYXJndW1lbnRcblx0IyBAb3JpZ0ZuID0gRnVuY3Rpb25cdFx0XHRcdFx0IyBUaGUgb3JpZ2luYWwgcHJveGllZCBmdW5jdGlvbiBwYXNzZWQgdG8gUHJveHkgYmluZGluZ3Ncblx0IyBAY3VzdG9tRXZlbnRNZXRob2QgPSB7fVx0XHRcdFx0IyBOYW1lcyBvZiB0aGUgZXZlbnQgZW1pdHRlci90cmlnZ2VyIG1ldGhvZHMgKGlmIGFwcGxpY2FibGUpXG5cdCMgQHBob2xkZXJDb250ZXh0cyA9IHt9XHRcdFx0XHRcdCMgUGxhY2Vob2xkZXIgc3Vycm91bmRpbmdzIChvcmlnaW5hbCBiaW5kaW5nIHZhbHVlIHNwbGl0IGJ5IHRoZSBwbGFjZWhvbGRlciByZWdFeClcblx0IyBAcGhvbGRlckluZGV4TWFwID0ge31cdFx0XHRcdFx0IyBQbGFjZWhvbGRlciBvY2N1cmVuY2UgbWFwcGluZywgaS5lLiB0aGUgcGxhY2Vob2xkZXIgbmFtZSBmb3IgZWFjaCBwbGFjZWhvbGRlciBvY2N1cmVuY2Vcblx0IyBAcGxhY2Vob2xkZXIgPSBcIlwiXHRcdFx0XHRcdFx0IyBUaGUgbGFzdCBzcGVjaWZpZWQgcGxhY2Vob2xkZXIgdG8gYmluZCB0aGUgdmFsdWUgdG9cblx0IyBAZGVzY3JpcHRvciA9IFtdXHRcdFx0XHRcdFx0IyBEZXNjcmliZXMgdGhlIHR5cGUgb2YgcHJvcGVydHksIGkuZS4gJ2F0dHI6ZGF0YS1uYW1lJyB0byBpbmRpY2F0ZSBhIERPTUF0dHIgdHlwZSBiaW5kaW5nXG5cdCMgQGlzTGl2ZVByb3AgPSBCb29sZWFuXHRcdFx0XHRcdCMgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBPYmplY3QvT2JqZWN0J3MgcHJvcGV0eSBoYXZlIGJlZW4gbW9kaWZpZWQgdG8gYmUgYSBsaXZlIHByb3BlcnR5XG5cdCMgQGlzRG9tID0gQm9vbGVhblx0XHRcdFx0XHRcdCMgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBiaW5kaW5nJ3Mgb2JqZWN0IGlzIGEgRE9NIG9iamVjdFxuXHQjIEBwb2xsSW50ZXJ2YWwgPSBJRFx0XHRcdFx0XHQjIFRoZSBpbnRlcnZhbCBJRCBvZiB0aGUgdGltZXIgdGhhdCBtYW51YWxseSBwb2xscyB0aGUgb2JqZWN0J3MgdmFsdWUgYXQgYSBzZXQgaW50ZXJ2YWxcblx0IyBAYXJyYXlCaW5kaW5nID0gQmluZGluZ1x0XHRcdFx0IyBSZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBhcnJheSBiaW5kaW5nIChpZiBleGlzdHMpIGZvciBhbiBpbmRleC1vZi1hcnJheSBiaW5kaW5nIChpLmUuIFNpbXBseUJpbmQoYXJyYXkpKVxuXHQjIEBldmVudE5hbWUgPSBcIlwiXHRcdFx0XHRcdFx0IyBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdGhpcyBiaW5kaW5nIGlzIGxpc3RlbmluZyB0byAoZm9yIEV2ZW50IHR5cGUgYmluZGluZ3MpXG5cdCMgQGlzRW1pdHRlciA9IEJvb2xlYW4gXHRcdFx0XHRcdCMgVHJhY2tlciB0byBsZXQgdXMga25vdyB3ZSBzaG91bGRuJ3QgaGFuZGxlIHRoZSBldmVudCB1cGRhdGUgd2UgcmVjZWl2ZWQgYXMgaXQgaXMgdGhlIGV2ZW50IHRoaXMgYmluZGluZyBqdXN0IGVtaXR0ZWRcblx0IyBAZXZlbnRIYW5kbGVyID0gRnVuY3Rpb24gXHRcdFx0XHQjIFRoZSBjYWxsYmFjayB0aGF0IGdldHMgdHJpZ2dlcmVkIHVwb24gYW4gZXZlbnQgZW1pdHRhbmNlIChmb3IgRXZlbiB0eXBlIGJpbmRpbmdzKVxuXHQjIEBldmVudE9iamVjdCA9IEV2ZW50IFx0XHRcdFx0XHQjIFRoZSBkaXNwYXRjaGVkIGV2ZW50IG9iamVjdCAoZm9yIEV2ZW50IHR5cGUgYmluZGluZ3MpXG5cdCMgQHNlbGZUcmFuc2Zvcm0gPSBGdW5jdGlvbiBcdFx0XHQjIFRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gdGhhdCBuZXcgdmFsdWVzIGJlaW5nIHNldCB0byB0aGlzIGJpbmRpbmcgYXJlIGJlaW5nIHBhc3NlZCB0aHJvdWdoIGR1cmluZyBAc2V0VmFsdWUgKGlmIGFwcGxpY2FibGUpXG5cdCMgQHNlbGZVcGRhdGVyID0gRnVuY3Rpb24gXHRcdFx0XHQjIEEgRnVuYy10eXBlIEJpbmRpbmcgd2hpY2ggaW52b2tlcyBAc2V0VmFsdWUoQGZldGNoRGlyZWN0VmFsdWUoKSkgdXBvbiBjaGFuZ2UuIENyZWF0ZWQgaW4gQGNvbnZlcnRUb0xpdmUoKSBmb3IgQXJyYXkgYmluZGluZ3MgJiBpbiBpbnRlcmZhY2UudXBkYXRlT24oKVxuXHQjIEBpc0FzeW5jID0gQm9vbGVhblx0XHRcdFx0XHQjIEluZGljYXRlcyBpZiB0aGlzIGlzIGFuIGFzeW5jIGJpbmRpbmcgKGN1cnJlbnRseSBvbmx5IHVzZWQgZm9yIEV2ZW50IGJpbmRpbmdzKVxuXHQjIyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIyMjXG5cblx0IyBzaW1wbHlpbXBvcnQ6aWYgQlVORExFX1RBUkdFVCA9ICdicm93c2VyJ1xuXHRpZiBAaXNNdWx0aUNob2ljZSAjIFRydWUgaWYgQG9iamVjdCBpcyBhIHJhZGlvL2NoZWNrYm94IGNvbGxlY3Rpb25cblx0XHRAY2hvaWNlcyA9IGdlbk9iaigpXG5cdFx0XG5cdFx0QG9iamVjdC5mb3JFYWNoIChjaG9pY2VFbCk9PlxuXHRcdFx0Y2hvaWNlQmluZGluZyA9IEBjaG9pY2VzW2Nob2ljZUVsLnZhbHVlXSA9IFNpbXBseUJpbmQoJ2NoZWNrZWQnKS5vZihjaG9pY2VFbCkuX1xuXHRcdFx0Y2hvaWNlQmluZGluZy5hZGRTdWIoQClcblx0XHRcdGNob2ljZUJpbmRpbmcuc3Vic01ldGFbQElEXS50cmFuc2Zvcm1GbiA9ICgpLT4gY2hvaWNlQmluZGluZ1xuXHRcdFx0Y2hvaWNlQmluZGluZy5ncm91cEJpbmRpbmcgPSBAXG5cdFx0XHRyZXR1cm5cblx0IyBzaW1wbHlpbXBvcnQ6ZW5kXG5cdFxuXG5cdHVubGVzcyBAdHlwZSBpcyAnRXZlbnQnIG9yIChAdHlwZSBpcyAnRnVuYycgYW5kIEBpc1N1YikgIyB0aGUgc2Vjb25kIGNvbmRpdGlvbiB3aWxsIHByZXZlbnQgZnVuY3Rpb24gc3Vic2NyaWJlcnMgZnJvbSBiZWluZyBpbnZva2VkIG9uIHRoaXMgYmluZGluZyBjcmVhdGlvblxuXHRcdGlmIEB0eXBlIGlzICdQaG9sZGVyJ1xuXHRcdFx0IyBzaW1wbHlpbXBvcnQ6aWYgQlVORExFX1RBUkdFVCA9ICdicm93c2VyJ1xuXHRcdFx0cGFyZW50UHJvcGVydHkgPSBpZiBAZGVzY3JpcHRvciBhbmQgbm90IHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnbXVsdGknKSB0aGVuIFwiI3tAZGVzY3JpcHRvcn06I3tAcHJvcGVydHl9XCIgZWxzZSBAcHJvcGVydHlcblx0XHRcdCMgc2ltcGx5aW1wb3J0OmVuZFxuXHRcdFx0XG5cdFx0XHQjIHNpbXBseWltcG9ydDppZiBCVU5ETEVfVEFSR0VUID0gJ25vZGUnXG5cdFx0XHRwYXJlbnRQcm9wZXJ0eSA9IEBwcm9wZXJ0eVxuXHRcdFx0IyBzaW1wbHlpbXBvcnQ6ZW5kXG5cdFx0XHRcblx0XHRcdHBhcmVudEJpbmRpbmcgPSBAcGFyZW50QmluZGluZyA9IFNpbXBseUJpbmQocGFyZW50UHJvcGVydHkpLm9mKG9iamVjdCkuX1xuXHRcdFx0cGFyZW50QmluZGluZy5zY2FuRm9yUGhvbGRlcnMoKVxuXHRcdFx0QHZhbHVlID0gcGFyZW50QmluZGluZy5waG9sZGVyVmFsdWVzW0BwaG9sZGVyXVxuXHRcdFxuXHRcdFx0IyBzaW1wbHlpbXBvcnQ6aWYgQlVORExFX1RBUkdFVCA9ICdicm93c2VyJ1xuXHRcdFx0QHRleHROb2RlcyA9IHBhcmVudEJpbmRpbmcudGV4dE5vZGVzW0BwaG9sZGVyXSBpZiBwYXJlbnRCaW5kaW5nLnRleHROb2Rlc1xuXHRcdFx0IyBzaW1wbHlpbXBvcnQ6ZW5kXG5cdFx0XG5cblx0XHRlbHNlXG5cdFx0XHRAdmFsdWUgPSBzdWJqZWN0VmFsdWUgPSBAZmV0Y2hEaXJlY3RWYWx1ZSgpXG5cdFx0XG5cdFx0XHRpZiBAdHlwZSBpcyAnT2JqZWN0UHJvcCcgYW5kIG5vdCBjaGVja0lmLmlzRGVmaW5lZChzdWJqZWN0VmFsdWUpIGFuZCBub3QgZ2V0RGVzY3JpcHRvcihAb2JqZWN0LCBAcHJvcGVydHkpXG5cdFx0XHRcdEBvYmplY3RbQHByb3BlcnR5XSA9IHN1YmplY3RWYWx1ZSAjIERlZmluZSB0aGUgcHJvcCBvbiB0aGUgb2JqZWN0IGlmIGl0IG5vbi1leGlzdGVudFxuXG5cdFx0XHRjb252ZXJ0VG9MaXZlKEAsIEBvYmplY3QpXG5cblxuXHRAYXR0YWNoRXZlbnRzKClcblx0cmV0dXJuIGJvdW5kSW5zdGFuY2VzW0BJRF0gPSBAXG5cblxuXG5cblxuaW1wb3J0ICcuL3Byb3RvdHlwZSdcbiIsIiMjIypcbiAqIFN0YWdlIGRlZmluaXRpb25zOlxuICogXG4gKiAwOiBTZWxlY3Rpb246XHRcdFx0R290IHNlbGVjdG9yLCBhd2FpdGluZyBvYmplY3QuXG4gKiAxOiBJbmRpY2F0aW9uOlx0XHRcdEdvdCBvYmplY3QsIGF3YWl0aW5nIHByb3hpZWQgcHJvcGVydHkgLyBmdW5jdGlvbiAvIEJpbmRpbmctb2JqZWN0LlxuICogMjogQmluZGluZyBDb21wbGV0ZTpcdFx0Q29tcGxldGUsIGF3YWl0aW5nIGFkZGl0aW9uYWwgKG9wdGlvbmFsKSBiaW5kaW5ncy9tdXRhdGlvbnMuXG4jIyNcbkJpbmRpbmdJbnRlcmZhY2UgPSAob3B0aW9ucywgaW5oZXJpdGVkU3RhdGUpLT5cblx0aWYgaW5oZXJpdGVkU3RhdGVcblx0XHRleHRlbmRTdGF0ZShALCBpbmhlcml0ZWRTdGF0ZSlcblx0XHRAc3RhZ2UgPSAxXG5cdGVsc2Vcblx0XHRAc3RhZ2UgPSAwXG5cdFx0QHN1YnMgPSBbXVxuXHRcdEBvcHRpb25zUGFzc2VkID0gb3B0aW9ucyB8fD0ge31cblx0XHRAb3B0aW9ucyA9IHt9XG5cdFx0Zm9yIGtleSBvZiBkZWZhdWx0T3B0aW9uc1xuXHRcdFx0QG9wdGlvbnNba2V5XSA9IGlmIG9wdGlvbnNba2V5XT8gdGhlbiBvcHRpb25zW2tleV0gZWxzZSBkZWZhdWx0T3B0aW9uc1trZXldXG5cdFxuXHRyZXR1cm4gQFx0XHRcdFxuXHRcblxuXG5cbmltcG9ydCAnLi9wcm90b3R5cGUtcHJpdmF0ZSdcbmltcG9ydCAnLi9wcm90b3R5cGUtcHVibGljJyIsIkdyb3VwQmluZGluZyA9IChiaW5kaW5nSW50ZXJmYWNlLCBvYmplY3RzLCBvYmplY3RUeXBlKS0+XG5cdGJpbmRpbmdJbnRlcmZhY2Uuc2VsZWN0b3IgPSBiaW5kaW5nSW50ZXJmYWNlLnNlbGVjdG9yLnNsaWNlKDYpICMgVGFrZSBvdXQgdGhlICdtdWx0aTonXG5cdGV4dGVuZFN0YXRlKEAsIEBpbnRlcmZhY2UgPSBiaW5kaW5nSW50ZXJmYWNlKVxuXHRAaXNNdWx0aSA9IHRydWVcblx0QGJpbmRpbmdzID0gYmluZGluZ3MgPSBbXVxuXG5cdGlmIG9iamVjdHNcblx0XHRAYWRkQmluZGluZyhvYmplY3QsIG9iamVjdFR5cGUpIGZvciBvYmplY3QgaW4gb2JqZWN0c1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIEAsXG5cdFx0J3R5cGUnOlx0XHRcdFx0Z2V0OiAoKS0+IGJpbmRpbmdzLm1hcCAoYmluZGluZyktPiBiaW5kaW5nLnR5cGVcblx0XHQndmFsdWUnOiBcdFx0XHRnZXQ6ICgpLT4gYmluZGluZ3MubWFwIChiaW5kaW5nKS0+IGJpbmRpbmcudmFsdWVcblxuXG5cblxuXG5cbnByb3RvID0gR3JvdXBCaW5kaW5nOjogPSBPYmplY3QuY3JlYXRlKEJpbmRpbmdJbnRlcmZhY2VQcml2YXRlKVxuXG5PYmplY3Qua2V5cyhCaW5kaW5nOjopLmZvckVhY2ggKG1ldGhvZE5hbWUpLT5cdFxuXHRwcm90b1ttZXRob2ROYW1lXSA9IChhLGIsYyxkKS0+ICMgRm91ciBhcmd1bWVudHMgaXMgdGhlIG1vc3QgZXZlciBwYXNzZWQgdG8gYW55IG1ldGhvZCBmcm9tIEJpbmRpbmdJbnRlcmZhY2UgbWV0aG9kc1xuXHRcdGZvciBiaW5kaW5nIGluIEBiaW5kaW5nc1xuXHRcdFx0YiA9IGJpbmRpbmcgaWYgbWV0aG9kTmFtZSBpcyAndXBkYXRlU3ViJ1xuXHRcdFx0YmluZGluZ1ttZXRob2ROYW1lXShhLGIsYyxkKVxuXHRcdFxuXHRcdHJldHVyblxuXG5cbnByb3RvLmFkZEJpbmRpbmcgPSAob2JqZWN0LCBvYmplY3RUeXBlKS0+XG5cdEBiaW5kaW5ncy5wdXNoIGlmIG5vdCBvYmplY3RUeXBlIHRoZW4gb2JqZWN0IGVsc2UgQGNyZWF0ZUJpbmRpbmcob2JqZWN0LCBvYmplY3RUeXBlLCBAaW50ZXJmYWNlKVxuXHRyZXR1cm4iLCJleHRlbmQgPSByZXF1aXJlICcuL2V4dGVuZCdcblxubm9ybWFsaXplS2V5cyA9IChrZXlzKS0+IGlmIGtleXNcblx0b3V0cHV0ID0ge31cblx0aWYgdHlwZW9mIGtleXMgaXNudCAnb2JqZWN0J1xuXHRcdG91dHB1dFtrZXlzXSA9IHRydWVcblx0ZWxzZVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhrZXlzKSBpZiBub3QgQXJyYXkuaXNBcnJheShrZXlzKVxuXHRcdG91dHB1dFtrZXldID0gdHJ1ZSBmb3Iga2V5IGluIGtleXNcblxuXHRyZXR1cm4gb3V0cHV0XG5cblxubmV3QnVpbGRlciA9IChpc0Jhc2UpLT5cblx0YnVpbGRlciA9ICh0YXJnZXQpLT5cblx0XHRFWFBBTkRfQVJHVU1FTlRTKHNvdXJjZXMpXG5cdFx0aWYgYnVpbGRlci5vcHRpb25zLnRhcmdldFxuXHRcdFx0dGhlVGFyZ2V0ID0gYnVpbGRlci5vcHRpb25zLnRhcmdldFxuXHRcdGVsc2Vcblx0XHRcdHRoZVRhcmdldCA9IHRhcmdldFxuXHRcdFx0c291cmNlcy5zaGlmdCgpXG5cdFx0XG5cdFx0ZXh0ZW5kKGJ1aWxkZXIub3B0aW9ucywgdGhlVGFyZ2V0LCBzb3VyY2VzKVxuXHRcblx0YnVpbGRlci5pc0Jhc2UgPSB0cnVlIGlmIGlzQmFzZVxuXHRidWlsZGVyLm9wdGlvbnMgPSB7fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhidWlsZGVyLCBtb2RpZmllcnMpXG5cdHJldHVybiBidWlsZGVyXG5cblxubW9kaWZpZXJzID0gXG5cdCdkZWVwJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLmRlZXAgPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnb3duJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLm93biA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdhbGxvd051bGwnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMuYWxsb3dOdWxsID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J251bGxEZWxldGVzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLm51bGxEZWxldGVzID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J2NvbmNhdCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5jb25jYXQgPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnY2xvbmUnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMudGFyZ2V0ID0ge31cblx0XHRyZXR1cm4gX1xuXG5cdCdub3REZWVwJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMubm90RGVlcCA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J2RlZXBPbmx5JzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMuZGVlcE9ubHkgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdrZXlzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMua2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J25vdEtleXMnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRyZXR1cm4gKGtleXMpLT5cblx0XHRcdF8ub3B0aW9ucy5ub3RLZXlzID0gbm9ybWFsaXplS2V5cyhrZXlzKVx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXHQndHJhbnNmb3JtJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuICh0cmFuc2Zvcm0pLT5cblx0XHRcdGlmIHR5cGVvZiB0cmFuc2Zvcm0gaXMgJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRfLm9wdGlvbnMuZ2xvYmFsVHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cdFx0XHRlbHNlIGlmIHRyYW5zZm9ybSBhbmQgdHlwZW9mIHRyYW5zZm9ybSBpcyAnb2JqZWN0J1xuXHRcdFx0XHRfLm9wdGlvbnMudHJhbnNmb3JtcyA9IHRyYW5zZm9ybVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cblx0J2ZpbHRlcic6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoZmlsdGVyKS0+XG5cdFx0XHRpZiB0eXBlb2YgZmlsdGVyIGlzICdmdW5jdGlvbidcblx0XHRcdFx0Xy5vcHRpb25zLmdsb2JhbEZpbHRlciA9IGZpbHRlclxuXHRcdFx0ZWxzZSBpZiBmaWx0ZXIgYW5kIHR5cGVvZiBmaWx0ZXIgaXMgJ29iamVjdCdcblx0XHRcdFx0Xy5vcHRpb25zLmZpbHRlcnMgPSBmaWx0ZXJcblx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IG5ld0J1aWxkZXIodHJ1ZSlcbmV4cG9ydHMudmVyc2lvbiA9IGltcG9ydCAnLi4vcGFja2FnZS5qc29uICQgdmVyc2lvbiciLCJ7XG4gIFwiX2Zyb21cIjogXCJzbWFydC1leHRlbmRAXjEuNy4zXCIsXG4gIFwiX2lkXCI6IFwic21hcnQtZXh0ZW5kQDEuNy4zXCIsXG4gIFwiX2luQnVuZGxlXCI6IGZhbHNlLFxuICBcIl9pbnRlZ3JpdHlcIjogXCJzaGE1MTItUFZFRVZZRER6eXhLQTBHTkZMY1dZNm9KU2tRS2RjMXc3MThlUXBFSGNOdVRTV1l4REszNUd6aHNHaE1rVVU4bEJJZ1NFRGJ0NXg1cDQ2cFJ6M0F1YkE9PVwiLFxuICBcIl9sb2NhdGlvblwiOiBcIi9zbWFydC1leHRlbmRcIixcbiAgXCJfcGhhbnRvbUNoaWxkcmVuXCI6IHt9LFxuICBcIl9yZXF1ZXN0ZWRcIjoge1xuICAgIFwidHlwZVwiOiBcInJhbmdlXCIsXG4gICAgXCJyZWdpc3RyeVwiOiB0cnVlLFxuICAgIFwicmF3XCI6IFwic21hcnQtZXh0ZW5kQF4xLjcuM1wiLFxuICAgIFwibmFtZVwiOiBcInNtYXJ0LWV4dGVuZFwiLFxuICAgIFwiZXNjYXBlZE5hbWVcIjogXCJzbWFydC1leHRlbmRcIixcbiAgICBcInJhd1NwZWNcIjogXCJeMS43LjNcIixcbiAgICBcInNhdmVTcGVjXCI6IG51bGwsXG4gICAgXCJmZXRjaFNwZWNcIjogXCJeMS43LjNcIlxuICB9LFxuICBcIl9yZXF1aXJlZEJ5XCI6IFtcbiAgICBcIi9cIixcbiAgICBcIi9zaW1wbHl3YXRjaFwiXG4gIF0sXG4gIFwiX3Jlc29sdmVkXCI6IFwiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvc21hcnQtZXh0ZW5kLy0vc21hcnQtZXh0ZW5kLTEuNy4zLnRnelwiLFxuICBcIl9zaGFzdW1cIjogXCIwZmU0YTQyNmM4NjM4ZjQ4Zjk5YjdjYzg1ZTI3Njc5MWVjZjVhZjJiXCIsXG4gIFwiX3NwZWNcIjogXCJzbWFydC1leHRlbmRAXjEuNy4zXCIsXG4gIFwiX3doZXJlXCI6IFwiL1VzZXJzL2RhbmllbGthbGVuL3NhbmRib3gvZGF0YV90YWJsZVwiLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiZGFuaWVsa2FsZW5cIlxuICB9LFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3Qvc21hcnQtZXh0ZW5kLmRlYnVnLmpzXCIsXG4gICAgXCIuL2Rpc3Qvc21hcnQtZXh0ZW5kLmpzXCI6IFwic3JjL2luZGV4LmNvZmZlZVwiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc21hcnQtZXh0ZW5kL2lzc3Vlc1wiXG4gIH0sXG4gIFwiYnVuZGxlRGVwZW5kZW5jaWVzXCI6IGZhbHNlLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJmYWxhZmVsXCI6IFwiXjIuMS4wXCJcbiAgfSxcbiAgXCJkZXByZWNhdGVkXCI6IGZhbHNlLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVyZ2UvZXh0ZW5kIG9iamVjdHMgKHNoYWxsb3cvZGVlcCkgd2l0aCBnbG9iYWwvaW5kaXZpZHVhbCBmaWx0ZXJzIGFuZCBtb3JlIGZlYXR1cmVzXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJhZGdlLWdlblwiOiBcIl4xLjAuMlwiLFxuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy40LjdcIixcbiAgICBcImNoYWlcIjogXCJeMy41LjBcIixcbiAgICBcImNvZmZlZS1yZWdpc3RlclwiOiBcIl4wLjEuMFwiLFxuICAgIFwiY29mZmVlaWZ5LWNhY2hlZFwiOiBcIl4yLjEuMVwiLFxuICAgIFwiZXh0ZW5kXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJnb29nbGUtY2xvc3VyZS1jb21waWxlci1qc1wiOiBcIl4yMDE3MDYyNi4wLjBcIixcbiAgICBcIm1vY2hhXCI6IFwiXjMuMi4wXCIsXG4gICAgXCJzaW1wbHlpbXBvcnRcIjogXCJeNC4wLjAtczIxXCIsXG4gICAgXCJzaW1wbHl3YXRjaFwiOiBcIl4zLjAuMC1sMlwiLFxuICAgIFwidWdsaWZ5LWpzXCI6IFwiXjMuMC4yNFwiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc21hcnQtZXh0ZW5kI3JlYWRtZVwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImV4dGVuZFwiLFxuICAgIFwiY2xvbmVcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwic2VsZWN0aXZlXCIsXG4gICAgXCJtZXJnZVwiLFxuICAgIFwiYXNzaWduXCIsXG4gICAgXCJwcm9wZXJ0aWVzXCJcbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXG4gIFwibWFpblwiOiBcImRpc3Qvc21hcnQtZXh0ZW5kLmpzXCIsXG4gIFwibW9jaGFfb3B0c1wiOiBcIi11IHRkZCAtLWNvbXBpbGVycyBjb2ZmZWU6Y29mZmVlLXJlZ2lzdGVyIC0tc2xvdyAxMDAwIC0tdGltZW91dCA1MDAwXCIsXG4gIFwibmFtZVwiOiBcInNtYXJ0LWV4dGVuZFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zbWFydC1leHRlbmQuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgZGlzdC87IG5wbSBydW4gYnVpbGQ6ZGVidWcgJiYgbnBtIHJ1biBidWlsZDpyZWxlYXNlXCIsXG4gICAgXCJidWlsZDpkZWJ1Z1wiOiBcInNpbXBseWltcG9ydCBidW5kbGUgc3JjL2luZGV4LmNvZmZlZSAtZCAtLXRhcmdldCBub2RlIC0tdW1kIHNtYXJ0LWV4dGVuZCA+IGRpc3Qvc21hcnQtZXh0ZW5kLmRlYnVnLmpzXCIsXG4gICAgXCJidWlsZDpyZWxlYXNlXCI6IFwic2ltcGx5aW1wb3J0IGJ1bmRsZSBzcmMvaW5kZXguY29mZmVlIC0tdGFyZ2V0IG5vZGUgLS11bWQgc21hcnQtZXh0ZW5kID4gZGlzdC9zbWFydC1leHRlbmQuanNcIixcbiAgICBcImNvdmVyYWdlXCI6IFwibnBtIHJ1biBjb3ZlcmFnZTpydW4gJiYgbnBtIHJ1biBjb3ZlcmFnZTpiYWRnZVwiLFxuICAgIFwiY292ZXJhZ2U6YmFkZ2VcIjogXCJiYWRnZS1nZW4gLWQgLmNvbmZpZy9iYWRnZXMvY292ZXJhZ2VcIixcbiAgICBcImNvdmVyYWdlOnJ1blwiOiBcImZvckNvdmVyYWdlPXRydWUgaXN0YW5idWwgY292ZXIgLS1kaXIgY292ZXJhZ2Ugbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gJG5wbV9wYWNrYWdlX21vY2hhX29wdHNcIixcbiAgICBcInBvc3RwdWJsaXNoXCI6IFwiZ2l0IHB1c2hcIixcbiAgICBcInBvc3R2ZXJzaW9uXCI6IFwibnBtIHJ1biBidWlsZCAmJiBnaXQgYWRkIC4gJiYgZ2l0IGNvbW1pdCAtYSAtbSAnW0J1aWxkXSdcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwiQ0k9MSBucG0gcnVuIHRlc3RcIixcbiAgICBcInRlc3RcIjogXCJtb2NoYSAkbnBtX3BhY2thZ2VfbW9jaGFfb3B0c1wiLFxuICAgIFwid2F0Y2hcIjogXCJzaW1wbHl3YXRjaCAtZyAnc3JjLyonIC14ICducG0gcnVuIGJ1aWxkOmRlYnVnIC1zJ1wiXG4gIH0sXG4gIFwic2ltcGx5aW1wb3J0XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcImNvZmZlZWlmeS1jYWNoZWRcIixcbiAgICAgIFwiLi8uY29uZmlnL3RyYW5zZm9ybXMvbWFjcm9zXCJcbiAgICBdLFxuICAgIFwiZmluYWxUcmFuc2Zvcm1cIjogW1xuICAgICAgXCIuY29uZmlnL3RyYW5zZm9ybXMvbWluaWZ5LXN1cGVyXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktcmVuYW1lXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc2ltcGxlXCJcbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjEuNy4zXCJcbn1cbiIsIi8qIVxuICogZXNjYXBlLWh0bWxcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTMgVEogSG9sb3dheWNodWtcbiAqIENvcHlyaWdodChjKSAyMDE1IEFuZHJlYXMgTHViYmVcbiAqIENvcHlyaWdodChjKSAyMDE1IFRpYW5jaGVuZyBcIlRpbW90aHlcIiBHdVxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBtYXRjaEh0bWxSZWdFeHAgPSAvW1wiJyY8Pl0vO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlSHRtbDtcblxuLyoqXG4gKiBFc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIHRoZSBnaXZlbiBzdHJpbmcgb2YgaHRtbC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGVzY2FwZSBmb3IgaW5zZXJ0aW5nIGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKSB7XG4gIHZhciBzdHIgPSAnJyArIHN0cmluZztcbiAgdmFyIG1hdGNoID0gbWF0Y2hIdG1sUmVnRXhwLmV4ZWMoc3RyKTtcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHZhciBlc2NhcGU7XG4gIHZhciBodG1sID0gJyc7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0SW5kZXggPSAwO1xuXG4gIGZvciAoaW5kZXggPSBtYXRjaC5pbmRleDsgaW5kZXggPCBzdHIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpbmRleCkpIHtcbiAgICAgIGNhc2UgMzQ6IC8vIFwiXG4gICAgICAgIGVzY2FwZSA9ICcmcXVvdDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vICZcbiAgICAgICAgZXNjYXBlID0gJyZhbXA7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyAnXG4gICAgICAgIGVzY2FwZSA9ICcmIzM5Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MDogLy8gPFxuICAgICAgICBlc2NhcGUgPSAnJmx0Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MjogLy8gPlxuICAgICAgICBlc2NhcGUgPSAnJmd0Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIGh0bWwgKz0gc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KTtcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaHRtbCArPSBlc2NhcGU7XG4gIH1cblxuICByZXR1cm4gbGFzdEluZGV4ICE9PSBpbmRleFxuICAgID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleClcbiAgICA6IGh0bWw7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lJdUxpOHVMaTl1YjJSbFgyMXZaSFZzWlhNdlpYTmpZWEJsTFdoMGJXd3ZhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwidmFyIGV4dGVuZCwgaXNBcnJheSwgaXNPYmplY3QsIHNob3VsZERlZXBFeHRlbmQ7XG5cbmlzQXJyYXkgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcbn07XG5cbmlzT2JqZWN0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRhcmdldCkgPT09ICdbb2JqZWN0IE9iamVjdF0nIHx8IGlzQXJyYXkodGFyZ2V0KTtcbn07XG5cbnNob3VsZERlZXBFeHRlbmQgPSBmdW5jdGlvbihvcHRpb25zLCB0YXJnZXQsIHBhcmVudEtleSkge1xuICBpZiAob3B0aW9ucy5kZWVwKSB7XG4gICAgaWYgKG9wdGlvbnMubm90RGVlcCkge1xuICAgICAgcmV0dXJuICFvcHRpb25zLm5vdERlZXBbdGFyZ2V0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9wdGlvbnMuZGVlcE9ubHkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5kZWVwT25seVt0YXJnZXRdIHx8IHBhcmVudEtleSAmJiBzaG91bGREZWVwRXh0ZW5kKG9wdGlvbnMsIHBhcmVudEtleSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kID0gZnVuY3Rpb24ob3B0aW9ucywgdGFyZ2V0LCBzb3VyY2VzLCBwYXJlbnRLZXkpIHtcbiAgdmFyIGksIGtleSwgbGVuLCBzb3VyY2UsIHNvdXJjZVZhbHVlLCBzdWJUYXJnZXQsIHRhcmdldFZhbHVlO1xuICBpZiAoIXRhcmdldCB8fCB0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGFyZ2V0ID0ge307XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHNvdXJjZSA9IHNvdXJjZXNbaV07XG4gICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgc291cmNlVmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgdGFyZ2V0VmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKHNvdXJjZVZhbHVlID09PSB0YXJnZXQgfHwgc291cmNlVmFsdWUgPT09IHZvaWQgMCB8fCAoc291cmNlVmFsdWUgPT09IG51bGwgJiYgIW9wdGlvbnMuYWxsb3dOdWxsICYmICFvcHRpb25zLm51bGxEZWxldGVzKSB8fCAob3B0aW9ucy5rZXlzICYmICFvcHRpb25zLmtleXNba2V5XSkgfHwgKG9wdGlvbnMubm90S2V5cyAmJiBvcHRpb25zLm5vdEtleXNba2V5XSkgfHwgKG9wdGlvbnMub3duICYmICFzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkgfHwgKG9wdGlvbnMuZ2xvYmFsRmlsdGVyICYmICFvcHRpb25zLmdsb2JhbEZpbHRlcihzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpKSB8fCAob3B0aW9ucy5maWx0ZXJzICYmIG9wdGlvbnMuZmlsdGVyc1trZXldICYmICFvcHRpb25zLmZpbHRlcnNba2V5XShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2VWYWx1ZSA9PT0gbnVsbCAmJiBvcHRpb25zLm51bGxEZWxldGVzKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmdsb2JhbFRyYW5zZm9ybSkge1xuICAgICAgICAgIHNvdXJjZVZhbHVlID0gb3B0aW9ucy5nbG9iYWxUcmFuc2Zvcm0oc291cmNlVmFsdWUsIGtleSwgc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50cmFuc2Zvcm1zICYmIG9wdGlvbnMudHJhbnNmb3Jtc1trZXldKSB7XG4gICAgICAgICAgc291cmNlVmFsdWUgPSBvcHRpb25zLnRyYW5zZm9ybXNba2V5XShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZmFsc2UpIHtcbiAgICAgICAgICBjYXNlICEob3B0aW9ucy5jb25jYXQgJiYgaXNBcnJheShzb3VyY2VWYWx1ZSkgJiYgaXNBcnJheSh0YXJnZXRWYWx1ZSkpOlxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB0YXJnZXRWYWx1ZS5jb25jYXQoc291cmNlVmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAhKHNob3VsZERlZXBFeHRlbmQob3B0aW9ucywga2V5LCBwYXJlbnRLZXkpICYmIGlzT2JqZWN0KHNvdXJjZVZhbHVlKSk6XG4gICAgICAgICAgICBzdWJUYXJnZXQgPSBpc09iamVjdCh0YXJnZXRWYWx1ZSkgPyB0YXJnZXRWYWx1ZSA6IGlzQXJyYXkoc291cmNlVmFsdWUpID8gW10gOiB7fTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gZXh0ZW5kKG9wdGlvbnMsIHN1YlRhcmdldCwgW3NvdXJjZVZhbHVlXSwga2V5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lJdUxpOHVMaTl1YjJSbFgyMXZaSFZzWlhNdmMyMWhjblF0WlhoMFpXNWtMM055WXk5bGVIUmxibVF1WTI5bVptVmxJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSJdfQ==