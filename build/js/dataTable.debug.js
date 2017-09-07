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

DataTable.prototype.appendData = function(data) {
  var ref;
  return (ref = this.allRows).push.apply(ref, data);
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
      return "Filter by " + option;
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

DataTable.version = "2.9.4";

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSIsInBhcnRzL21hcmt1cC5jb2ZmZWUiLCJwYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCJwYXJ0cy9oZWxwZXJzLmNvZmZlZSIsInBhcnRzL21ldGhvZHMvX2luZGV4LmNvZmZlZSIsInBhcnRzL2F0dGFjaEV2ZW50cy5jb2ZmZWUiLCJwYXJ0cy9hdHRhY2hCaW5kaW5ncy5jb2ZmZWUiLCJwYXJ0cy91c2VyQWN0aW9uTWV0aG9kcy5jb2ZmZWUiLCIuLi8uLi9wYWNrYWdlLmpzb24iLCIuLi8uLi9ub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9faW5kZXguY29mZmVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9ub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL1NpbXBseUJpbmQvX2luZGV4LmNvZmZlZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vbm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nL19pbmRleC5jb2ZmZWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9pbmRleC5jb2ZmZWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvR3JvdXBCaW5kaW5nL19pbmRleC5jb2ZmZWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9pbmRleC5jb2ZmZWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvbm9kZV9tb2R1bGVzL3NtYXJ0LWV4dGVuZC9wYWNrYWdlLmpzb24iLCIuLi8uLi9ub2RlX21vZHVsZXMvZXNjYXBlLWh0bWwvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9leHRlbmQuY29mZmVlIl0sIm5hbWVzIjpbImltcG9ydDoxIiwiaW1wb3J0OjIiLCJpbXBvcnQ6MyIsImlubGluZToxIiwiaW5saW5lOjIiLCJpbmxpbmU6MyIsImlubGluZTo0IiwiaW5saW5lOjUiLCJpbmxpbmU6NiIsImlubGluZTo3IiwiaW5saW5lOjgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzthQUN1QkEsVUFDQ0E7O1NBQ25CQyxVQUNIQTs7VUFBYUMsVUFDTkE7O0FDTFRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOExBQTs7QUM5TEFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBQTs7QUNqQkFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK09BQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvT0FDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc0QkE7O0FDSDVCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRkFBOztBQzFGQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdVBBQTs7QUN2UEFDOztBQUE4QkE7Ozs7b0JDQTlCQyxPQXNEQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REFQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBOztBQ0ZBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QmtCQTs7QUN2QmxCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRkFBOztBQ3JGQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCMkJBOztBQ3pCM0JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JPQTs7Ozs7Ozs7O1NDNUJBUCxXQUNNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNKYkcsT0F1R0FBOzs7OztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJTaW1wbHlCaW5kID0gXyRzbSgnQGRhbmllbGthbGVuL3NpbXBseWJpbmQnIClcbmV4dGVuZCA9IF8kc20oJ3NtYXJ0LWV4dGVuZCcgKVxuZXNjSFRNTCA9IF8kc20oJ2VzY2FwZS1odG1sJyApXG5fJHNtKCcuL3BhcnRzL21hcmt1cCcgKVxuXyRzbSgnLi9wYXJ0cy9kZWZhdWx0cycgKVxuXyRzbSgnLi9wYXJ0cy9oZWxwZXJzJyApXG5cbkRhdGFUYWJsZSA9IChAY29udGFpbmVyLCBvcHRpb25zPXt9KS0+XG5cdEBvcHRpb25zID0gZXh0ZW5kLmNsb25lLmRlZXBPbmx5KCdjb2x1bW5zJykoRGF0YVRhYmxlLmRlZmF1bHRzLCBvcHRpb25zKVxuXHRAc3RhdGUgPSAnbG9hZGluZyc6ZmFsc2UsICdub1Jlc3VsdHMnOmZhbHNlLCAnZXJyb3InOmZhbHNlXG5cdEBJRCA9ICsrY3VycmVudElEXG5cdEB0YWJsZUlEID0gXCJcXCMje0BvcHRpb25zLmJhc2VDbGFzc30tI3tASUR9XCJcblx0QHZpc2libGVSb3dzID0gW11cblx0QGF2YWlsYWJsZVJvd3MgPSBbXVxuXHRAYWxsUm93cyA9IFtdXG5cdEBsYXJnZXN0QnJlYWtkb3duVG90YWwgPSAwXG5cdEBzZWFyY2hDcml0ZXJpYSA9ICcnXG5cdEBzZWFyY2hQYXJhbSA9ICcnXG5cdEBzb3J0QnkgPSBpZiBAb3B0aW9ucy5zb3J0QnkgdGhlbiBAb3B0aW9ucy5zb3J0QnkgZWxzZSAnJ1xuXHRAc29ydERpcmVjdGlvbiA9IC0xXG5cdEBjdXJyZW50UGFnZSA9IDFcblxuXG5cdCMgPT09PSBNYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMgPSB7fVxuXHRAZWxzLnRhYmxlT3V0ZXJ3cmFwID0gJChtYXJrdXAudGFibGVPdXRlcndyYXAgZXh0ZW5kKHtASUR9LCBAb3B0aW9ucykpXG5cdEBlbHMudGFibGUgPSAkKG1hcmt1cC50YWJsZShAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdEBlbHMudGFibGVIZWFkaW5nID0gQGVscy50YWJsZS5jaGlsZHJlbigpLmZpcnN0KCkuY2hpbGRyZW4oKVxuXHRAZWxzLnRhYmxlQm9keSA9IEBlbHMudGFibGUuY2hpbGRyZW4oKS5sYXN0KClcblx0QGVscy5ub1Jlc3VsdHNNZXNzYWdlID0gJChtYXJrdXAubm9SZXN1bHRzKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0QGVscy5sb2FkaW5nTWVzc2FnZSA9ICQobWFya3VwLmxvYWRpbmcoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRAZWxzLmVycm9yTWVzc2FnZSA9ICQobWFya3VwLmVycm9yKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0QGVscy5wYWdlU3RhdHVzID0gJChtYXJrdXAucGFnZVN0YXR1cyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdEBlbHMucGFnaW5hdGlvbiA9ICQobWFya3VwLnBhZ2luYXRpb24oQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRAZWxzLnBhZ2luYXRpb25JdGVtcyA9IEBlbHMucGFnaW5hdGlvbi5jaGlsZHJlbignLl9wYWdpbmF0aW9uSXRlbXMnKVxuXHRAZWxzLnBhZ2luYXRpb25FeHRyYSA9IEBlbHMucGFnaW5hdGlvbi5jaGlsZHJlbignLl9leHRyYUluZGljYXRvcicpXG5cdEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0ID0gQGVscy5wYWdpbmF0aW9uRXh0cmEuY2hpbGRyZW4oJ3NlbGVjdCcpXG5cdEBlbHMucGFnaW5hdGlvbkV4dHJhVGV4dCA9IEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0LnByZXYoKVxuXHRAZWxzLnNlYXJjaEZpZWxkID0gJChtYXJrdXAuc2VhcmNoRmllbGQoQG9wdGlvbnMpKS5pbnNlcnRCZWZvcmUoQGVscy50YWJsZSlcblx0QGVscy5zZWFyY2hQYXJhbSA9IEBlbHMuc2VhcmNoRmllbGQuY2hpbGRyZW4oJ3NlbGVjdCcpXG5cdEBlbHMuc2VhcmNoQ3JpdGVyaWEgPSBAZWxzLnNlYXJjaEZpZWxkLmNoaWxkcmVuKCdpbnB1dCcpXG5cdEBlbHMuZ2xvYmFsU3R5bGVzID0gJCgnPHN0eWxlIC8+JykucHJlcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cblx0QGVscy50YWJsZUhlYWRpbmcuYXBwZW5kKEBnZW5lcmF0ZUhlYWRpbmdDb2x1bW5zKCkpXG5cblx0QGVscy50YWJsZU91dGVyd3JhcC5hcHBlbmRUbyBAY29udGFpbmVyXG5cdEBlbHMudGFibGUuZGF0YSAnRGF0YVRhYmxlJywgQFxuXHRAZWxzLnRhYmxlWzBdLnN0eWxlLm1pbldpZHRoID0gXCIje0BvcHRpb25zLm1pbldpZHRofXB4XCIgaWYgQG9wdGlvbnMubWluV2lkdGhcblxuXG5cdCMgPT09PSBFdmVudHMgJiBCaW5kaW5ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0UHJvbWlzZS5iaW5kKEApXG5cdFx0LnRoZW4oQGF0dGFjaEV2ZW50cylcblx0XHQudGhlbihAYXR0YWNoQmluZGluZ3MpXG5cdFx0LnRoZW4gKCktPiBpZiBAb3B0aW9ucy5sb2FkT25Jbml0IHRoZW4gQGxvYWREYXRhKClcblxuXHRyZXR1cm4gQFxuXG5cblxuRGF0YVRhYmxlOjpmZXRjaERhdGEgPSAoKS0+XG5cdEBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuXHRQcm9taXNlLnJlc29sdmUoKVxuXHRcdC50aGVuICgpPT4gQG9wdGlvbnMuZGF0YS5jYWxsKEApXG5cdFx0LnRoZW4gKGRhdGEpPT5cblx0XHRcdEBzdGF0ZS5sb2FkaW5nID0gQHN0YXRlLmVycm9yID0gZmFsc2Vcblx0XHRcdHJldHVybiBkYXRhXG5cdFx0LmNhdGNoIChlcnIpPT5cblx0XHRcdEBzdGF0ZS5lcnJvciA9IGVyclxuXG5EYXRhVGFibGU6OnNldERhdGEgPSAoZGF0YSktPlxuXHRAYWxsUm93cyA9IGRhdGEgaWYgQXJyYXkuaXNBcnJheShkYXRhKVxuXG5EYXRhVGFibGU6OmFwcGVuZERhdGEgPSAoZGF0YSktPlxuXHRAYWxsUm93cy5wdXNoKGRhdGEuLi4pXG5cbkRhdGFUYWJsZTo6bG9hZERhdGEgPSAoKS0+XG5cdEB1bnByb2Nlc3NSb3cocm93KSBmb3Igcm93IGluIEBhbGxSb3dzIGlmIEBhbGxSb3dzLmxlbmd0aFxuXHRAZmV0Y2hEYXRhKCkudGhlbiAoZGF0YSk9PiBAc2V0RGF0YShkYXRhKVxuXG5EYXRhVGFibGU6OnJlZnJlc2ggPSAoKS0+XG5cdEBhdmFpbGFibGVSb3dzID0gQGF2YWlsYWJsZVJvd3Ncblx0QGN1cnJlbnRQYWdlID0gQGN1cnJlbnRQYWdlXG5cbkRhdGFUYWJsZTo6bWFya3VwQXJncyA9IChhcmdzT2JqZWN0PXt9KS0+XG5cdGFyZ3NPYmplY3QuYmFzZUNsYXNzID0gQG9wdGlvbnMuYmFzZUNsYXNzXG5cdHJldHVybiBhcmdzT2JqZWN0XG5cblxuXG5cbl8kc20oJy4vcGFydHMvbWV0aG9kcycgKVxuXyRzbSgnLi9wYXJ0cy9hdHRhY2hFdmVudHMnIClcbl8kc20oJy4vcGFydHMvYXR0YWNoQmluZGluZ3MnIClcbl8kc20oJy4vcGFydHMvdXNlckFjdGlvbk1ldGhvZHMnIClcblxuY3VycmVudElEID0gMFxuRGF0YVRhYmxlLnZlcnNpb24gPSBfJHNtKCcuLi8uLi9wYWNrYWdlLmpzb24gJCB2ZXJzaW9uJyApXG5EYXRhVGFibGUuaGVscGVycyA9IGhlbHBlcnNcbkRhdGFUYWJsZS5tYXJrdXAgPSBtYXJrdXBcbkRhdGFUYWJsZS5kZWZhdWx0cyA9IGRlZmF1bHRzXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFUYWJsZVxuXG5cblxuXG4iLCJtYXJrdXAgPVxuXHR0YWJsZU91dGVyd3JhcDogKHtJRCwgYmFzZUNsYXNzLCBtaW5XaWR0aCwgaGFzTW9iaWxlLCBjZWxsc0hhdmVQYWRkaW5nfSktPiBcIlxuXHRcdDxkaXYgaWQ9JyN7YmFzZUNsYXNzfS0je0lEfScgY2xhc3M9JyN7YmFzZUNsYXNzfS1vdXRlcndyYXAge3tsb2FkaW5nfX0ge3tub1Jlc3VsdHN9fSB7e2hhc0Vycm9yfX1cblx0XHRcdCN7aWYgbWluV2lkdGggdGhlbiAnX2hhc01pbldpZHRoJyBlbHNlICcnfVxuXHRcdFx0I3tpZiBoYXNNb2JpbGUgdGhlbiAne3ttb2JpbGVWZXJzaW9ufX0nIGVsc2UgJyd9XG5cdFx0XHQje2lmIGNlbGxzSGF2ZVBhZGRpbmcgdGhlbiAnX2NlbGxzSGF2ZVBhZGRpbmcnIGVsc2UgJyd9XG5cdFx0Jz48L2Rpdj5cblx0XCJcblxuXHR0YWJsZTogKHtiYXNlQ2xhc3MsIGFsaWdubWVudH0pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30gYWxpZ25tZW50LS0tI3thbGlnbm1lbnR9IHNvcnREaXJlY3Rpb24tLS17e3NvcnREaXJlY3Rpb259fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZyc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdyc+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5Jz48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdGxvYWRpbmc6ICh7YmFzZUNsYXNzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1sb2FkaW5nIHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctaW5uZXJ3cmFwJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctaWNvbic+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1sb2FkaW5nLXRleHQnPkxvYWRpbmc8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0bm9SZXN1bHRzOiAoe2Jhc2VDbGFzcywgaXRlbVNpbmdsZUxhYmVsPSdJdGVtJywgaXRlbVBsdXJhbExhYmVsPWl0ZW1TaW5nbGVMYWJlbCsncyd9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cyB7e2lzVmlzaWJsZX19Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtaW5uZXJ3cmFwJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy1pY29uJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy10ZXh0Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQtdGl0bGUnPk5vICN7aXRlbVNpbmdsZUxhYmVsfXMgdG8gRGlzcGxheTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtdGV4dC1zdWJ0aXRsZSc+VGhlcmUgYXJlIG5vIG1hdGNoaW5nICN7aXRlbVBsdXJhbExhYmVsfSBmb3IgdGhlIHNlYXJjaCBxdWVyeSB5b3UndmUgdHlwZWQuPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRlcnJvcjogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yIHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWlubmVyd3JhcCc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1lcnJvci1pY29uJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1lcnJvci10ZXh0LXRpdGxlJz5BIEZhdGFsIEVycm9yIGhhcyBPY2N1cmVkPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQtc3VidGl0bGUnPlJlcG9ydCB0aGUgZm9sbG93aW5nIHRvIHRoZSBhZG1pbjo8YnIgLz5cXFwie3tlcnJvck1lc3NhZ2V9fVxcXCI8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdHBhZ2VTdGF0dXM6ICh7YmFzZUNsYXNzLCBzaG93UGFnZVN0YXR1c30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnZVN0YXR1cyAje2lmIHNob3dQYWdlU3RhdHVzIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHRcdFNob3dpbmcge3tyb3dSYW5nZX19IG9mIHt7dG90YWxSb3dzfX1cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdHBhZ2luYXRpb246ICh7YmFzZUNsYXNzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uIHt7aGFzRXh0cmF9fSB7e2lzVmlzaWJsZX19Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtIF9iYWNrJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtc3dyYXAgX3BhZ2luYXRpb25JdGVtcyc+PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtIF9leHRyYUluZGljYXRvcic+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tc2VsZWN0Jz48L3NlbGVjdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX25leHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRwYWdpbmF0aW9uSXRlbTogKHtiYXNlQ2xhc3MsIHZhbHVlfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+I3t2YWx1ZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cblx0aGVhZGluZ0NlbGw6ICh7YmFzZUNsYXNzLCBleHRyYUNsYXNzZXM9JycsIHNsdWcsIGljb249JycsIGxhYmVsLCBzdHlsZT0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZy1yb3ctY2VsbCAje2V4dHJhQ2xhc3Nlc30gX18je3NsdWd9JyBkYXRhLXNsdWc9JyN7c2x1Z30nIGRhdGEtaWNvbj0nI3tpY29ufScgI3tzdHlsZX0+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZy1yb3ctY2VsbC10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cm93OiAoe2Jhc2VDbGFzcywgcm93SUQsIGNlbGxzLCBkcmlsbGRvd249Jyd9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93IF90YWJsZVJvdyB7e2RyaWxsZG93blN0YXRlfX0nIGRhdGEtcm93LWlkPScje3Jvd0lEfSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctZXhwYW5kRHJpbGxkb3duIF9leHBhbmREcmlsbGRvd24nPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctZXhwYW5kRHJpbGxkb3duLWljb24nPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdCN7Y2VsbHN9XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1kcmlsbGRvd24gX3RhYmxlUm93RHJpbGxkb3duJz5cblx0XHRcdFx0I3tkcmlsbGRvd259XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblx0XG5cblx0cm93Q2VsbDogKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgbGFiZWwsIGNvbHVtbiwgc2x1ZywgdmFsdWUsIHN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsIF9fI3tzbHVnfSAje2V4dHJhQ2xhc3Nlc30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1jb2x1bW49JyN7Y29sdW1ufScgI3tzdHlsZX0+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctY2VsbC1pbm5lcndyYXAnIHRpdGxlPScje2xhYmVsfSc+I3t2YWx1ZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cblxuXG5cdHNlYXJjaEZpZWxkOiAoe2Jhc2VDbGFzcywgc2VhcmNofSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2ggI3tpZiBzZWFyY2g/Lmxlbmd0aCB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnfSc+XG5cdFx0XHQ8c2VsZWN0IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLXNlbGVjdCc+PC9zZWxlY3Q+XG5cdFx0XHQ8aW5wdXQgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtaW5wdXQnIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLXNlbGVjdFRyaWdnZXInPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0aXBEZXRhaWxzOiAoe2Jhc2VDbGFzcywgaXBBZGRyZXNzLCBleHRyYT0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzIF9pcERldGFpbHMnIGRhdGEtaXA9JyN7aXBBZGRyZXNzfSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzLXRyaWdnZXIgX2lwRGV0YWlscy10cmlnZ2VyJz48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudCc+TG9hZGluZyBJUCBEZXRhaWxzPC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0I3tleHRyYX1cblx0XCJcblxuXHRpcERldGFpbHNJdGVtOiAoe2Jhc2VDbGFzcywgbGFiZWwsIHZhbHVlfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLWxhYmVsJz4je2xhYmVsfTogPC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzLWNvbnRlbnQtaXRlbS12YWx1ZSc+I3t2YWx1ZX08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblx0XG5cblxuXG5cdGZpZWxkczogKHtiYXNlQ2xhc3MsIGZpZWxkc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cCc+I3tmaWVsZHN9PC9kaXY+XG5cdFwiXG5cblx0ZmllbGRzSXRlbTogKHtiYXNlQ2xhc3MsIGxhYmVsLHZhbHVlfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwLWl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbS1sYWJlbCc+I3tsYWJlbH06IDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbS12YWx1ZSc+I3tlc2NIVE1MIHZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0YnV0dG9uOiAoe2Jhc2VDbGFzcywgYWN0aW9uLCBpY29uPScnLCBpc011bHRpfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1idXR0b24gX2FjdGlvbkJ1dHRvbiAje2lmIGlzTXVsdGkgdGhlbiAnX2lzTXVsdGknIGVsc2UgJyd9JyBkYXRhLWFjdGlvbj0nI3thY3Rpb259Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1idXR0b24taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0YWN0aW9uczogKHtiYXNlQ2xhc3MsIGFjdGlvbnN9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAnPiN7YWN0aW9uc308L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXHRhY3Rpb25zT3ZlcmxheTogKCktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7RGF0YVRhYmxlLmRlZmF1bHRzLmJhc2VDbGFzc30tYWN0aW9ucy1vdmVybGF5Jz48L2Rpdj5cblx0XCJcblxuXHRhY3Rpb25zSXRlbTogKHtiYXNlQ2xhc3MsIGFjdGlvbiwgaWNvbiwgbGFiZWwsIGN1c3RvbUljb25TdHlsZT0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cC1pdGVtIF9hY3Rpb25CdXR0b24gX3N1YkFjdGlvbkJ1dHRvbicgZGF0YS1hY3Rpb249JyN7YWN0aW9ufScgc3R5bGU9JyN7Y3VzdG9tSWNvblN0eWxlfSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cC1pdGVtLWljb24nPiN7aWNvbn08L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0tdGV4dCc+I3tsYWJlbH08L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuIiwiZGVmYXVsdHMgPSBcblx0J3BlclBhZ2UnOiAyMFxuXHQncGFnZUNvdW50TWF4JzogMTBcblx0J21pbldpZHRoJzogMFxuXHQnbW9iaWxlV2lkdGgnOiA3MzZcblx0J2NlbGxzSGF2ZVBhZGRpbmcnOiBmYWxzZVxuXHQnaGFzTW9iaWxlJzogdHJ1ZVxuXHQnbG9hZE9uSW5pdCc6IHRydWVcblx0J2NvbHVtbnMnOiBbXVxuXHQnc2VhcmNoJzogW11cblx0J3BlcmNlbnRhZ2UnOiB7fVxuXHQnYmFzZUNsYXNzJzogJ0RhdGFUYWJsZSdcblx0J3Nob3dQYWdlU3RhdHVzJzogdHJ1ZVxuXHQnc29ydEJ5JzogJydcblx0J2FsaWdubWVudCc6ICdsZWZ0J1xuXHQnYWN0aW9ucyc6IGZhbHNlXG5cdCdpcERhdGFGZXRjaGVyJzogKGlwQWRkcmVzcyktPiBuZXcgUHJvbWlzZSAocmVzb2x2ZSktPiAkLmdldCBcImh0dHA6Ly9pcGluZm8uaW8vI3tpcEFkZHJlc3N9XCIsIHJlc29sdmUsICdKU09OJ1xuIiwiaGVscGVycyA9IHt9XG5cblxuaGVscGVycy5jb21wYXJlVmFsdWVzID0gKHZhbHVlQSwgdmFsdWVCKS0+IHN3aXRjaFxuXHR3aGVuIHR5cGVvZiB2YWx1ZUEgaXMgdHlwZW9mIHZhbHVlQlxuXHRcdHZhbHVlQSBpcyB2YWx1ZUJcblx0XG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnc3RyaW5nJ1xuXHRcdHZhbHVlQSBpcyAnJyt2YWx1ZUJcblxuXHR3aGVuIHR5cGVvZiB2YWx1ZUEgaXMgJ251bWJlcidcblx0XHR2YWx1ZUEgaXMgcGFyc2VGbG9hdCh2YWx1ZUIpXG5cblxuaGVscGVycy50b2dnbGVBY3Rpb25zUG9wdXAgPSAoYWN0aW9uc1BvcHVwJCktPlxuXHRpc09wZW4gPSBhY3Rpb25zUG9wdXAkLmRhdGEgJ2lzT3BlbidcblxuXHRpZiBpc09wZW5cblx0XHRhY3Rpb25zUG9wdXAkLmRhdGEoJ292ZXJsYXknKS5yZW1vdmUoKVxuXHRcdGFjdGlvbnNQb3B1cCQucmVtb3ZlQ2xhc3MgJ2lzX3Zpc2libGUnXG5cdGVsc2Vcblx0XHRhY3Rpb25zUG9wdXAkLmRhdGEgJ292ZXJsYXknLCBvdmVybGF5JCA9ICQobWFya3VwLmFjdGlvbnNPdmVybGF5KCkpXG5cdFx0YWN0aW9uc1BvcHVwJC5hZGRDbGFzcyAnaXNfdmlzaWJsZSdcblx0XHRvdmVybGF5JC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KS5vbmUgJ2NsaWNrJywgKCktPiBoZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cChhY3Rpb25zUG9wdXAkKVxuXG5cdGFjdGlvbnNQb3B1cCQuZGF0YSAnaXNPcGVuJywgIWlzT3BlblxuXG5cbmhlbHBlcnMuZ2V0QnJlYWtkb3duVG90YWwgPSAoYnJlYWtkb3duLCBicmVha2Rvd25LZXlzKS0+IHN3aXRjaFxuXHR3aGVuIGJyZWFrZG93bktleXMubGVuZ3RoIGlzIDAgdGhlbiAwXG5cdGVsc2Vcblx0XHRicmVha2Rvd25LZXlzXG5cdFx0XHQubWFwIChicmVha2Rvd25JdGVtKS0+IGJyZWFrZG93blticmVha2Rvd25JdGVtXVxuXHRcdFx0LnJlZHVjZSAoYSxiKS0+IGErYlxuXG5cblxuaGVscGVycy5ub3JtYWxpemVDb2x1bW5zID0gKGNvbHVtbnMpLT5cblx0aWYgbm90IEFycmF5LmlzQXJyYXkoY29sdW1ucylcblx0XHRvdXRwdXQgPSBjb2x1bW5zXG5cdGVsc2Vcblx0XHRvdXRwdXQgPSB7fVxuXHRcdGlmIHR5cGVvZiBjb2x1bW5zWzBdIGlzICdzdHJpbmcnXG5cdFx0XHRvdXRwdXRbbGFiZWxdID0ge2xhYmVsfSBmb3IgbGFiZWwgaW4gY29sdW1uc1xuXHRcdFxuXHRcdGVsc2UgaWYgY29sdW1uc1swXT8ubGFiZWxcblx0XHRcdG91dHB1dFtjb2x1bW4ubGFiZWxdID0gY29sdW1uIGZvciBjb2x1bW4gaW4gY29sdW1uc1xuXG5cblx0Zm9yIGxhYmVsLGNvbHVtbiBvZiBvdXRwdXRcblx0XHRjb2x1bW4ubGFiZWwgPz0gbGFiZWxcblx0XHRjb2x1bW4uc2x1ZyA/PSBjb2x1bW4ubGFiZWwudG9Mb3dlckNhc2UoKS5yZXBsYWNlIC9cXFcvZywgJ18nXG5cdFx0Y29sdW1uLnR5cGUgPz0gJ3RleHQnXG5cblx0cmV0dXJuIG91dHB1dCBcblxuXG5oZWxwZXJzLmdldEJyZWFrZG93bkJhcldpZHRoID0gKHJvdywgbGFyZ2VzdCktPlxuXHQocm93LmJyZWFrZG93bkJhclRvdGFsIC8gbGFyZ2VzdCkgKiAoMTAwIC0gMTgpXG5cblxuaGVscGVycy5nZW5IZWFkZXJDZWxsU3R5bGUgPSAoY29sdW1uKS0+XG5cdHN0eWxlU3RyaW5nID0gJydcblxuXHRpZiBjb2x1bW4ud2lkdGhcblx0XHRzdHlsZVN0cmluZyArPSBcIm1heC13aWR0aDogI3tjb2x1bW4ud2lkdGh9O1wiXG5cdFxuXHRpZiBjb2x1bW4uZ3JvdyA+PSAwXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJmbGV4LWdyb3c6ICN7Y29sdW1uLmdyb3d9O1wiXG5cblx0cmV0dXJuIGlmIHN0eWxlU3RyaW5nIHRoZW4gXCJzdHlsZT0nI3tzdHlsZVN0cmluZ30nXCIgZWxzZSAnJ1xuXG5cblxuaGVscGVycy5nZW5DZWxsU3R5bGUgPSAoY29sdW1uKS0+XG5cdHN0eWxlU3RyaW5nID0gJydcblxuXHRpZiBjb2x1bW4ud2lkdGhcblx0XHRzdHlsZVN0cmluZyArPSBcIm1heC13aWR0aDogI3tjb2x1bW4ud2lkdGh9O1wiXG5cblx0aWYgY29sdW1uLmNvbG9yXG5cdFx0Y29sb3IgPSBAY29sb3JNYXBwaW5nKGNvbHVtbi5jb2xvciwgY29sdW1uLmNvbG9yVHlwZSlcblx0XHRzdHlsZVN0cmluZyArPSBcImNvbG9yOiAje2NvbG9yfTtcIlxuXG5cdGlmIGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcdHN0eWxlU3RyaW5nICs9IGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcblx0aWYgY29sdW1uLmdyb3cgPj0gMFxuXHRcdHN0eWxlU3RyaW5nICs9IFwiZmxleC1ncm93OiAje2NvbHVtbi5ncm93fTtcIlxuXG5cdHJldHVybiBpZiBzdHlsZVN0cmluZyB0aGVuIFwic3R5bGU9JyN7c3R5bGVTdHJpbmd9J1wiIGVsc2UgJydcblxuXG5cblxuaGVscGVycy5nZW5DZWxsQ2xhc3NuYW1lID0gKGNvbHVtbiktPlxuXHRjbGFzc1N0cmluZyA9ICcnXG5cdFxuXHRpZiBjb2x1bW4uc29ydGFibGVcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc1NvcnRhYmxlIHt7Y3VycmVudFNvcnR9fSdcblx0XG5cdGlmIGNvbHVtbi5ub0xhYmVsXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9MYWJlbCdcblx0XG5cdGlmIGNvbHVtbi5pc0xpbmtcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0xpbmsnXG5cdFxuXHRpZiBjb2x1bW4ubm9FbGxpcHNpc1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX25vRWxsaXBzaXMnXG5cdFxuXHRpZiBjb2x1bW4uc2hvd092ZXJmbG93XG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfc2hvd092ZXJmbG93J1xuXHRcblx0aWYgY29sdW1uLmNvbG9yXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaGFzQ29sb3InXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnV0dG9uJyBvciBjb2x1bW4udHlwZSBpcyAnYWN0aW9ucydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0J1dHRvbidcblx0XHRjb2x1bW4uYWx3YXlzQ2VudGVyID0gdHJ1ZVxuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2JyZWFrZG93bkJhcidcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0JyZWFrZG93bkJhcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdpcERldGFpbHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNJcERldGFpbHMnXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnZmllbGRzJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzRmllbGRzJ1xuXHRcblx0aWYgY29sdW1uLmFsd2F5c0NlbnRlclxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2Fsd2F5c0NlbnRlcidcblxuXHRyZXR1cm4gY2xhc3NTdHJpbmdcblxuXG5cblxuXG5cblxuaGVscGVycy5jb2xvck1hcHBpbmcgPSAodmFsdWUsIGNvbG9yVHlwZT0nbmFtZScpLT4gc3dpdGNoIGNvbG9yVHlwZVxuXHR3aGVuICdicm93c2VyJyB0aGVuIHN3aXRjaFxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0ZpcmVmb3gnIHRoZW4gQGNvbG9yTWFwcGluZygnb3JhbmdlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdDaHJvbWUnIHRoZW4gQGNvbG9yTWFwcGluZygnZ3JlZW4nKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ1NhZmFyaScgdGhlbiBAY29sb3JNYXBwaW5nKCdibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdNb2JpbGUgU2FmYXJpJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0lFJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Ymx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRWRnZScgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGJsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ09wZXJhJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3JlZCcpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQW5kcm9pZCcgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGdyZWVuJylcblx0XHRlbHNlICd1bmtub3duJ1xuXHRcblx0XG5cdHdoZW4gJ3BsYXRmb3JtJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ01hYyBPUyBYJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsYWNrJylcblx0XHR3aGVuICdXaW5kb3dzJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Ymx1ZScpXG5cdFx0d2hlbiAnV2luZG93cyBQaG9uZScgdGhlbiBAY29sb3JNYXBwaW5nKCdwdXJwbGUnKVxuXHRcdHdoZW4gJ0xpbnV4JyB0aGVuIEBjb2xvck1hcHBpbmcoJ2Rhcmt5ZWxsb3cnKVxuXHRcdHdoZW4gJ2lPUycgdGhlbiBAY29sb3JNYXBwaW5nKCdibGFjaycpXG5cdFx0d2hlbiAnQW5kcm9pZCcgdGhlbiBAY29sb3JNYXBwaW5nKFwibGlnaHRncmVlblwiKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cdFxuXHR3aGVuICdzYXRpc2ZhY3Rpb24nIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnRXhjZWxsZW50JyB0aGVuIEBjb2xvck1hcHBpbmcoJ2dyZWVuJylcblx0XHR3aGVuICdOb3JtYWwnIHRoZW4gQGNvbG9yTWFwcGluZygneWVsbG93Jylcblx0XHR3aGVuICdQb29yJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3JlZCcpXG5cdFx0ZWxzZSAndW5rbm93bidcblxuXHRcblx0d2hlbiAnbmFtZScgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdvcmFuZ2UnIHRoZW4gJyNlZTZmMGUnXG5cdFx0d2hlbiAnZ3JlZW4nIHRoZW4gJyMwMGFkMDknXG5cdFx0d2hlbiAnYmx1ZScgdGhlbiAnIzQ3ODhmMydcblx0XHR3aGVuICd5ZWxsb3cnIHRoZW4gJyNlYWI3MWUnXG5cdFx0d2hlbiAncmVkJyB0aGVuICcjY2M0ODIwJ1xuXHRcdHdoZW4gJ2JsYWNrJyB0aGVuICcjMTgxODE4J1xuXHRcdHdoZW4gJ3B1cnBsZScgdGhlbiAnI2EwMjBiYSdcblx0XHR3aGVuICdsaWdodGJsdWUnIHRoZW4gJyMwY2IzZWUnXG5cdFx0d2hlbiAnbGlnaHRncmVlbicgdGhlbiAnIzc4YzI1Nydcblx0XHR3aGVuICdkYXJreWVsbG93JyB0aGVuICcjZThhYzAxJ1xuXG5cdGVsc2UgdmFsdWVcblxuXG5cblxuXG5cbmhlbHBlcnMuaWNvbk1hcHBpbmcgPSAodmFsdWUsIGljb25UeXBlKS0+IHN3aXRjaCBpY29uVHlwZVxuXHR3aGVuICdicm93c2VyJ1xuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiAnIydcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiAnJSdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ1NhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gJyQnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdJRScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0VkZ2UnIHRoZW4gJyYnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdPcGVyYScgdGhlbiAnXCInXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuICcmIzAzOTsnXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnZGV2aWNlJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRGVza3RvcCcgdGhlbiAnISdcblx0XHRcdHdoZW4gJ1RhYmxldCcgdGhlbiAnNydcblx0XHRcdHdoZW4gJ01vYmlsZScgdGhlbiAnNidcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdwbGF0Zm9ybSdcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ01hYyBPUyBYJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnV2luZG93cycgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ1dpbmRvd3MgUGhvbmUnIHRoZW4gJyknXG5cdFx0XHR3aGVuICdMaW51eCcgdGhlbiAnKydcblx0XHRcdHdoZW4gJ2lPUycgdGhlbiAnKidcblx0XHRcdHdoZW4gJ0FuZHJvaWQnIHRoZW4gXCImIzAzOTtcIlxuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbidcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ0V4Y2VsbGVudCcgdGhlbiAnWydcblx0XHRcdHdoZW4gJ05vcm1hbCcgdGhlbiAnQCdcblx0XHRcdHdoZW4gJ1Bvb3InIHRoZW4gJz8nXG5cdFx0XHRlbHNlICc0J1xuXG5cdGVsc2UgJzQnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAnZ2VuZXJhbC5jb2ZmZWUnXG5pbXBvcnQgJ2NvbHVtbi5jb2ZmZWUnXG5pbXBvcnQgJ3Jvdy5jb2ZmZWUnXG5pbXBvcnQgJ3NwZWNpYWxDZWxscy5jb2ZmZWUnIiwiRGF0YVRhYmxlOjphdHRhY2hFdmVudHMgPSAoKS0+XG5cdCMgPT09PSBQYWdpbmF0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnBhZ2luYXRpb24ub24gJ2NsaWNrJywgJy5fcGFnaW5hdGlvbkl0ZW0nLCAoZXZlbnQpPT5cblx0XHQkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpc0JhY2sgPSAkdGhpcy5oYXNDbGFzcygnX2JhY2snKVxuXHRcdGlzTmV4dCA9ICR0aGlzLmhhc0NsYXNzKCdfbmV4dCcpXG5cdFx0aXNFeHRyYSA9ICR0aGlzLmhhc0NsYXNzKCdfZXh0cmFJbmRpY2F0b3InKVxuXG5cdFx0aWYgaXNCYWNrXG5cdFx0XHRAY3VycmVudFBhZ2UtLSB1bmxlc3MgQGN1cnJlbnRQYWdlIGlzIDFcblx0XHRcblx0XHRlbHNlIGlmIGlzTmV4dFxuXHRcdFx0QGN1cnJlbnRQYWdlKysgdW5sZXNzIEBjdXJyZW50UGFnZSBpcyBAcGFnZUNvdW50UmVhbFxuXHRcdFxuXHRcdCMgZWxzZSBpZiBub3QgaXNFeHRyYSBhbmQgbm90IGlzV3JhcHBlclxuXHRcdGVsc2UgaWYgbm90IGlzRXh0cmFcblx0XHRcdHBhZ2VOdW1iZXIgPSBwYXJzZUZsb2F0ICR0aGlzLmNoaWxkcmVuKCkuaHRtbCgpXG5cdFx0XHRAY3VycmVudFBhZ2UgPSBwYWdlTnVtYmVyXG5cblxuXG5cblx0IyA9PT09IFNvcnRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVIZWFkaW5nLm9uICdjbGljaycsICcuX2lzU29ydGFibGUnLCAoZXZlbnQpPT5cblx0XHRAc29ydEJ5ID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuXG5cblxuXHQjID09PT0gQWN0aW9uIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdjbGljaycsICcuX2FjdGlvbkJ1dHRvbicsIChldmVudCk9PlxuXHRcdGJ1dHRvbiQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX2lzTXVsdGknKVxuXHRcdFx0aGVscGVycy50b2dnbGVBY3Rpb25zUG9wdXAgYnV0dG9uJC5uZXh0KCkuY2hpbGRyZW4oKVxuXHRcdFxuXHRcdGVsc2Vcblx0XHRcdGl0ZW1Sb3ckID0gYnV0dG9uJC5jbG9zZXN0KCcuX3RhYmxlUm93Jylcblx0XHRcdGFjdGlvbiA9IGJ1dHRvbiQuZGF0YSgnYWN0aW9uJylcblx0XHRcdGl0ZW1JRCA9IGl0ZW1Sb3ckLmRhdGEoJ3Jvdy1pZCcpXG5cdFx0XHRpdGVtSW5kZXggPSBpdGVtUm93JC5kYXRhKCdpbmRleCcpXG5cdFx0XHRkYXRhSXRlbSA9IGlmIGl0ZW1JRCB0aGVuIEBhbGxSb3dzLmZpbmQgKHJvdyk9PiBoZWxwZXJzLmNvbXBhcmVWYWx1ZXMocm93W0BvcHRpb25zLnVuaXF1ZUlEXSwgaXRlbUlEKVxuXHRcdFx0ZGF0YUl0ZW0gPz0gaXRlbUlEXG5cblx0XHRcdGlmIGJ1dHRvbiQuaGFzQ2xhc3MoJ19zdWJBY3Rpb25CdXR0b24nKVxuXHRcdFx0XHRoZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLnBhcmVudCgpXG5cblx0XHRcdEBlbHMudGFibGUudHJpZ2dlciBcImFjdGlvbi4je2FjdGlvbn1cIiwgZGF0YUl0ZW1cblxuXG5cblxuXG5cblx0IyA9PT09IFJvdyBleHBhbnNpb24gbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnY2xpY2snLCAnLl9leHBhbmREcmlsbGRvd24nLCAoZXZlbnQpPT5cblx0XHRidXR0b24kID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGl0ZW1Sb3cgPSBidXR0b24kLnBhcmVudCgpLmRhdGEoJ3JvdycpXG5cdFx0XG5cdFx0aXRlbVJvdy5kcmlsbGRvd25PcGVuID0gIWl0ZW1Sb3cuZHJpbGxkb3duT3BlblxuXG5cblxuXG5cblxuXG5cdCMgPT09PSBJUCBEZXRhaWxzIGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ21vdXNlb3ZlcicsICcuX2lwRGV0YWlscy10cmlnZ2VyJywgKGV2ZW50KT0+XG5cdFx0dHJpZ2dlciQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0d3JhcHBlciQgPSB0cmlnZ2VyJC5wYXJlbnQoKVxuXHRcdGNvbnRlbnQkID0gdHJpZ2dlciQubmV4dCgpXG5cdFx0Y291bnRyeSQgPSBjb250ZW50JC5uZXh0KClcblx0XHRpcEFkZHJlc3MgPSB3cmFwcGVyJC5kYXRhICdpcCdcblx0XHRpc0xvYWRlZCA9IHRyaWdnZXIkLmhhc0NsYXNzICdfaXNSZWFkeSdcblxuXG5cdFx0dW5sZXNzIGlzTG9hZGVkXHRcdFx0XG5cdFx0XHRAb3B0aW9ucy5pcERhdGFGZXRjaGVyKGlwQWRkcmVzcykudGhlbiAoaXBEZXRhaWxzKT0+XG5cdFx0XHRcdHJldHVybiB1bmxlc3MgaXBEZXRhaWxzXG5cdFx0XHRcdFxuXHRcdFx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgaXBEZXRhaWxzIFxuXHRcdFx0XHRcdG1hcmt1cC5pcERldGFpbHNJdGVtKEBtYXJrdXBBcmdzIHtsYWJlbCx2YWx1ZX0pXG5cblx0XHRcdFx0Y29udGVudCQuaHRtbCBvdXRwdXQuam9pbignJylcblx0XHRcdFx0d3JhcHBlciQuYWRkQ2xhc3MgJ19pc1JlYWR5J1xuXG5cblxuXHRQcm9taXNlLnJlc29sdmUoKVxuXG5cbiIsIkRhdGFUYWJsZTo6YXR0YWNoQmluZGluZ3MgPSAoKS0+XG5cdFNpbXBseUJpbmQuc2V0dGluZ3MudHJhY2tBcnJheUNoaWxkcmVuID0gZmFsc2Vcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU3RhdGVcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ25vUmVzdWx0cycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLm5vUmVzdWx0c01lc3NhZ2UpLnRyYW5zZm9ybSAobm9SZXN1bHRzKT0+IGlmIG5vUmVzdWx0cyBhbmQgbm90IEBzdGF0ZS5sb2FkaW5nIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUubm9SZXN1bHRzJykub2YoQGVscy50YWJsZU91dGVyd3JhcCkudHJhbnNmb3JtIChub1Jlc3VsdHMpPT4gaWYgbm9SZXN1bHRzIGFuZCBub3QgQHN0YXRlLmxvYWRpbmcgdGhlbiAnX25vUmVzdWx0cycgZWxzZSAnJ1xuXHRcblx0U2ltcGx5QmluZCgnbG9hZGluZycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLmxvYWRpbmdNZXNzYWdlKS50cmFuc2Zvcm0gKGxvYWRpbmcpLT4gaWYgbG9hZGluZyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmxvYWRpbmcnKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGxvYWRpbmcpPT4gaWYgbG9hZGluZyB0aGVuICdfbG9hZGluZycgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGxvYWRpbmcpPT5cblx0XHRcdGlmIGxvYWRpbmdcblx0XHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9IGZhbHNlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhQHZpc2libGVSb3dzLmxlbmd0aFxuXG5cdFNpbXBseUJpbmQoJ2Vycm9yJykub2YoQHN0YXRlKVxuXHRcdC50bygndGV4dENvbnRlbnQuZXJyb3JNZXNzYWdlJykub2YoQGVscy5lcnJvck1lc3NhZ2UpXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMuZXJyb3JNZXNzYWdlKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaGFzRXJyb3InKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ19lcnJvcicgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGVyciktPiBjb25zb2xlLmVycm9yKGVycikgaWYgZXJyXG5cdFxuXG5cdGlmIEBvcHRpb25zLmhhc01vYmlsZVxuXHRcdEB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XG5cdFx0U2ltcGx5QmluZCgnZXZlbnQ6cmVzaXplJykub2Yod2luZG93KVxuXHRcdFx0LnRvICgpPT4gQHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdFNpbXBseUJpbmQoJ3dpbmRvd1dpZHRoJykub2YoQClcblx0XHRcdC50bygnY2xhc3NOYW1lLm1vYmlsZVZlcnNpb24nKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdFx0XHQudHJhbnNmb3JtICh3aW5kb3dXaWR0aCk9PiBpZiB3aW5kb3dXaWR0aCA8PSBAb3B0aW9ucy5tb2JpbGVXaWR0aCB0aGVuICdfbW9iaWxlVmVyc2lvbicgZWxzZSAnJ1xuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgQ29sdW1uIHZpc2liaWxpdHlcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGZvciBsLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHRoZW4gZG8gKGNvbHVtbik9PlxuXHRcdFNpbXBseUJpbmQoJ2hpZGRlbicpLm9mKGNvbHVtbilcblx0XHRcdC50byhcImlubmVySFRNTC4je2NvbHVtbi5zbHVnfVwiKS5vZihAZWxzLmdsb2JhbFN0eWxlcylcblx0XHRcdFx0LnRyYW5zZm9ybSAoaXNIaWRkZW4pPT4gaWYgaXNIaWRkZW4gdGhlbiBcIiN7QHRhYmxlSUR9IC5fXyN7Y29sdW1uLnNsdWd9IHtkaXNwbGF5Om5vbmV9XCIgZWxzZSAnJ1xuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFJvd3MgYXJyYXkgcmVuZGVyaW5nL3Byb2Nlc3Npbmdcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ2FycmF5OnZpc2libGVSb3dzJykub2YoQClcblx0XHQudG8gKHJvd3MsIHByZXZSb3dzKT0+XG5cdFx0XHRpZiBwcmV2Um93cz8ubGVuZ3RoXG5cdFx0XHRcdGZvciByb3cgaW4gcHJldlJvd3Ncblx0XHRcdFx0XHRyb3cudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcblx0XHRcdHRyeVxuXHRcdFx0XHRmb3Igcm93IGluIHJvd3Ncblx0XHRcdFx0XHRAcHJvY2Vzc1Jvdyhyb3cpXG5cdFx0XHRcdFx0cm93LnZpc2libGUgPSB0cnVlXG5cdFx0XHRjYXRjaCBlcnJcblx0XHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cdFx0XHRcblx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhcm93cy5sZW5ndGhcblx0XHRcblx0XHQuYW5kLnRvIChyb3dzKT0+XG5cdFx0XHRyZXR1cm4gaWYgbm90IEBoYXNCcmVha2Rvd25CYXJcblx0XHRcdGZvciByb3cgaW4gcm93c1xuXHRcdFx0XHRpZiByb3cuYnJlYWtkb3duQmFyVG90YWwgPiBsYXJnZXN0QnJlYWtkb3duVG90YWwgb3Igbm90IGxhcmdlc3RCcmVha2Rvd25Ub3RhbD9cblx0XHRcdFx0XHRsYXJnZXN0QnJlYWtkb3duVG90YWwgPSByb3cuYnJlYWtkb3duQmFyVG90YWxcblxuXHRcdFx0QGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IGxhcmdlc3RCcmVha2Rvd25Ub3RhbCBvciAwXG5cblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC5yb3dSYW5nZScpLm9mKEBlbHMucGFnZVN0YXR1cylcblx0XHRcdC50cmFuc2Zvcm0gKHJvd3MpPT4gXCIje0BhdmFpbGFibGVSb3dzLmluZGV4T2Yocm93c1swXSkrMX0tI3tAYXZhaWxhYmxlUm93cy5pbmRleE9mKHJvd3Muc2xpY2UoLTEpWzBdKSsxfVwiXG5cblxuXHRTaW1wbHlCaW5kKCdhcnJheTphbGxSb3dzJykub2YoQCkudG8gKHJvd3MpPT5cblx0XHRAc2VhcmNoQ3JpdGVyaWEgPSAnJ1xuXHRcdEBjdXJyZW50UGFnZSA9IDFcblx0XHRAc3RhdGUubm9SZXN1bHRzID0gIXJvd3MubGVuZ3RoXG5cdFx0aWYgQHNvcnRCeSBpcyBAb3B0aW9ucy5zb3J0Qnlcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXHRcdFx0QHNvcnRCeSA9IEBvcHRpb25zLnNvcnRCeVxuXHRcdGVsc2Vcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXG5cblxuXHRTaW1wbHlCaW5kKCdhdmFpbGFibGVSb3dzJywge3VwZGF0ZU9uQmluZDpmYWxzZSwgdXBkYXRlRXZlbklmU2FtZTp0cnVlfSkub2YoQClcblx0XHQudG8gKHJvd3MpPT4gQGNhbGNQYWdlQ291bnQocm93cylcblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC50b3RhbFJvd3MnKS5vZihAZWxzLnBhZ2VTdGF0dXMpLnRyYW5zZm9ybSAocm93cyktPiByb3dzLmxlbmd0aFxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBQYWdpbmF0aW9uXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdwYWdlQ291bnQnKS5vZihAKVxuXHRcdC50bygnaW5uZXJIVE1MJykub2YoQGVscy5wYWdpbmF0aW9uSXRlbXMpICMgUmVuZGVyIHBhZ2luYXRpb25cblx0XHRcdC50cmFuc2Zvcm0gKGNvdW50KT0+XG5cdFx0XHRcdHBhZ2luYXRpb25JdGVtcyA9ICcnXG5cdFx0XHRcdGZvciB2YWx1ZSBpbiBbMS4uY291bnRdXG5cdFx0XHRcdFx0cGFnaW5hdGlvbkl0ZW1zICs9IG1hcmt1cC5wYWdpbmF0aW9uSXRlbShAbWFya3VwQXJncyB7dmFsdWV9KSB1bmxlc3MgdmFsdWUgaXMgMFxuXG5cdFx0XHRcdHJldHVybiBwYWdpbmF0aW9uSXRlbXNcblxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLnBhZ2luYXRpb24pLnRyYW5zZm9ybSAoY291bnQpLT4gaWYgY291bnQgPiAxIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XG5cblx0U2ltcGx5QmluZCgncGFnZUNvdW50UmVhbCcpLm9mKEApXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHRcdC50cmFuc2Zvcm0gKHJlYWxDb3VudCk9PlxuXHRcdFx0XHRpZiByZWFsQ291bnQgPD0gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJydcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG9wdGlvbnMgPSAnPG9wdGlvbj4uLi48L29wdGlvbj4nXG5cdFx0XHRcdFx0b3B0aW9ucyArPSBcIjxvcHRpb24+I3tpbmRleH08L29wdGlvbj5cIiBmb3IgaW5kZXggaW4gWyhAb3B0aW9ucy5wYWdlQ291bnRNYXgrMSkuLnJlYWxDb3VudF1cblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1xuXHRcdFxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5oYXNFeHRyYScpLm9mKEBlbHMucGFnaW5hdGlvbikudHJhbnNmb3JtIChyZWFsQ291bnQpPT4gaWYgcmVhbENvdW50ID4gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJ2hhc19leHRyYScgZWxzZSAnJ1xuXG5cblxuXHQjID09PT0gRXh0cmEgSW5kaWNhdG9yL1BhZ2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScsIHVwZGF0ZU9uQmluZDpmYWxzZSkub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQpXG5cdFx0LmFuZC50bygnY3VycmVudFBhZ2UnKS5vZihAKVxuXG5cblxuXG5cdCMgPT09PSBDdXJyZW50IFBhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ2N1cnJlbnRQYWdlJywgdXBkYXRlRXZlbklmU2FtZTp0cnVlKS5vZihAKVxuXHRcdC50cmFuc2Zvcm1TZWxmIChjdXJyZW50UGFnZSk9PlxuXHRcdFx0Y3VycmVudFBhZ2UgPSBpZiBjdXJyZW50UGFnZSBpcyAnLi4uJyB0aGVuIDEgZWxzZSBwYXJzZUZsb2F0KGN1cnJlbnRQYWdlKVxuXHRcdFx0cmV0dXJuIGlmIGN1cnJlbnRQYWdlID4gQHBhZ2VDb3VudFJlYWwgdGhlbiBAcGFnZUNvdW50UmVhbCBlbHNlIGN1cnJlbnRQYWdlXG5cdFx0XG5cdFx0LnRvKCd2YWx1ZScpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdFx0LnRyYW5zZm9ybSAoY3VycmVudFBhZ2UpPT4gaWYgY3VycmVudFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBjdXJyZW50UGFnZSBlbHNlICcuLi4nXG5cdFx0XG5cdFx0LmFuZC50byAoY3VycmVudFBhZ2UpPT5cblx0XHRcdEBzZXRWaXNpYmxlUGFnZShjdXJyZW50UGFnZSlcblx0XHRcdEBzZXRQYWdlSW5kaWNhdG9yKGN1cnJlbnRQYWdlKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU2VhcmNoIEZpZWxkXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRcblx0IyA9PT09IFNlYXJjaCBGaWVsZCB2YWx1ZS9tYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGlmIEBvcHRpb25zLnNlYXJjaC5sZW5ndGhcblx0XHRAc2VhcmNoUGFyYW0gPSBAb3B0aW9ucy5zZWFyY2hbMF1cblxuXHRcdFNpbXBseUJpbmQoJ3NlYXJjaCcpLm9mKEBvcHRpb25zKVxuXHRcdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnNlYXJjaFBhcmFtKVxuXHRcdFx0XHQudHJhbnNmb3JtIChvcHRpb25zKS0+IG9wdGlvbnMubWFwKChvcHRpb24pLT5cIjxvcHRpb24+I3tvcHRpb259PC9vcHRpb24+XCIpLmpvaW4oJycpXG5cblx0XHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoUGFyYW0pXG5cdFx0XHQudG8oJ3NlYXJjaFBhcmFtJykub2YoQClcblx0XHRcdFx0LnBpcGUoJ2F0dHI6cGxhY2Vob2xkZXInKS5vZihAZWxzLnNlYXJjaENyaXRlcmlhKVxuXHRcdFx0XHRcdC50cmFuc2Zvcm0gKG9wdGlvbiktPiBcIkZpbHRlciBieSAje29wdGlvbn1cIlxuXG5cblxuXHQjID09PT0gVGFibGUgcmVzdWx0cyBmaWx0ZXIgJiBhdmFpYWJsZSByb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoQ3JpdGVyaWEpICMgU2VhcmNoL0ZpbHRlclxuXHRcdC50bygnc2VhcmNoQ3JpdGVyaWEnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKEApLmJvdGhXYXlzKClcblx0XHRcdC5jaGFpblRvIChzZWFyY2hDcml0ZXJpYSk9PlxuXHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gQGFsbFJvd3Ncblx0XHRcdFx0dGFyZ2V0Q29sdW1uID0gQG9wdGlvbnMuY29sdW1uc1tAc2VhcmNoUGFyYW1dXG5cblx0XHRcdFx0aWYgc2VhcmNoQ3JpdGVyaWEgYW5kICh0YXJnZXRDb2x1bW4gb3IgQGFsbFJvd3NbMF0/W0BzZWFyY2hQYXJhbV0/KVxuXHRcdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSByb3dzVG9NYWtlQXZhaWxhYmxlLmZpbHRlciAocm93KT0+XG5cdFx0XHRcdFx0XHRyb3dWYWx1ZSA9IGlmIHRhcmdldENvbHVtbj8ucmF3VmFsdWVGb3JtYXR0ZXIgdGhlbiB0YXJnZXRDb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93W0BzZWFyY2hQYXJhbV0pIGVsc2Ugcm93W0BzZWFyY2hQYXJhbV1cblx0XHRcdFx0XHRcdHJldHVybiByb3dWYWx1ZT8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzIHNlYXJjaENyaXRlcmlhLnRvTG93ZXJDYXNlKClcblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5yb3dGaWx0ZXJcblx0XHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gcm93c1RvTWFrZUF2YWlsYWJsZS5maWx0ZXIgKHJvdyk9PlxuXHRcdFx0XHRcdFx0cm93Q2xvbmUgPSBleHRlbmQuY2xvbmUocm93KVxuXHRcdFx0XHRcdFx0cm93Q2xvbmVbbmFtZV0gPSBjb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93Q2xvbmVbbmFtZV0pIGZvciBuYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHdoZW4gY29sdW1uLnJhd1ZhbHVlRm9ybWF0dGVyXG5cdFx0XHRcdFx0XHRyZXR1cm4gQG9wdGlvbnMucm93RmlsdGVyKHJvd0Nsb25lKVxuXHRcdFx0XHRcblx0XHRcdFx0QGF2YWlsYWJsZVJvd3MgPSByb3dzVG9NYWtlQXZhaWxhYmxlXG5cdFx0XHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU29ydGluZ1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnc29ydEJ5Jywge3VwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSwgdXBkYXRlT25CaW5kOmZhbHNlfSwgdHJ1ZSkub2YoQClcblx0XHQudG8gKGN1cnJlbnRTb3J0LCBwcmV2U29ydCk9PiBpZiBjdXJyZW50U29ydCBvciBwcmV2U29ydFxuXHRcdFx0aWYgY3VycmVudFNvcnQgaXMgcHJldlNvcnQgYW5kIHByZXZTb3J0XG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uICo9IC0xXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblxuXHRcdFx0dGFyZ2V0Q29sdW1uID0gaWYgY3VycmVudFNvcnQgdGhlbiBjdXJyZW50U29ydCBlbHNlIG51bGxcblx0XHRcdEBhdmFpbGFibGVSb3dzID0gQHNvcnRSb3dzKEBhdmFpbGFibGVSb3dzLCB0YXJnZXRDb2x1bW4pXG5cdFx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblx0XG5cdGlmIEBlbHMudGFibGVIZWFkaW5nLmNoaWxkcmVuKCcuX2lzU29ydGFibGUnKS5sZW5ndGhcblx0XHRTaW1wbHlCaW5kKCdzb3J0QnknLCB1cGRhdGVPbkJpbmQ6dHJ1ZSkub2YoQClcblx0XHRcdC50bygnbXVsdGk6Y2xhc3NOYW1lLmN1cnJlbnRTb3J0Jykub2YoQGVscy50YWJsZUhlYWRpbmcuY2hpbGRyZW4oJy5faXNTb3J0YWJsZScpKVxuXHRcdFx0XHQudHJhbnNmb3JtIChjdXJyZW50LCBwcmV2LCBlbCktPiBpZiBjdXJyZW50IGlzIGVsLmNoaWxkcmVuWzBdLnRleHRDb250ZW50IHRoZW4gJ19jdXJyZW50U29ydCcgZWxzZSAnJ1xuXG5cblxuXG5cdFNpbXBseUJpbmQoJ3NvcnREaXJlY3Rpb24nKS5vZihAKVxuXHRcdC50bygnY2xhc3NOYW1lLnNvcnREaXJlY3Rpb24nKS5vZihAZWxzLnRhYmxlKVxuXHRcdFx0LnRyYW5zZm9ybSAoc29ydERpcmVjdGlvbiktPiBpZiBzb3J0RGlyZWN0aW9uIGlzIC0xIHRoZW4gJ2Rlc2MnIGVsc2UgJ2FzYydcblxuXG5cblxuXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cbiIsIkRhdGFUYWJsZTo6c29ydEJ5ID0gKGNvbHVtbiktPiIsIntcbiAgXCJuYW1lXCI6IFwiQGRhbmllbGthbGVuL2RhdGFfdGFibGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi45LjRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRpbnkgbGlicmFyeSBmb3IgZGlzcGxheWluZyBkYXRhYmFzZS1mZXRjaGVkIGRhdGEgaW4gYW4gSFRNTCB0YWJsZSB3aXRoIGZyb250LWVuZCBwYWdpbmF0aW9uXCIsXG4gIFwibWFpblwiOiBcImRpc3QvanMvZGF0YV90YWJsZS5qc1wiLFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3QvanMvZGF0YV90YWJsZS5kZWJ1Zy5qc1wiLFxuICAgIFwiLi9kaXN0L2pzL2RhdGFfdGFibGUuanNcIjogXCJzcmMvY29mZmVlL2luZGV4LmNvZmZlZVwiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBkYW5pZWxrYWxlbi9zYXNzLWJhc2VcIjogXCJeMS41LjJcIixcbiAgICBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCI6IFwiXjEuMTUuOFwiLFxuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy41LjBcIixcbiAgICBcImVzY2FwZS1odG1sXCI6IFwiXjEuMC4zXCIsXG4gICAgXCJzbWFydC1leHRlbmRcIjogXCJeMS43LjNcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJjaGFsa1wiOiBcIl4yLjAuMVwiLFxuICAgIFwiY29mZmVlLXNjcmlwdFwiOiBcIl4xLjEyLjZcIixcbiAgICBcImZzLWpldHBhY2tcIjogXCJeMS4xLjBcIixcbiAgICBcIm5vZGUtc2Fzc1wiOiBcIl40LjUuM1wiLFxuICAgIFwicHJvbWlzZS1icmVha1wiOiBcIl4wLjEuMVwiLFxuICAgIFwic2Fzcy1tb2R1bGUtaW1wb3J0ZXJcIjogXCJnaXRodWI6ZGFuaWVsa2FsZW4vc2Fzcy1tb2R1bGUtaW1wb3J0ZXJcIixcbiAgICBcInNpbXBseWltcG9ydFwiOiBcIl40LjAuMC1zMzNcIixcbiAgICBcInNpbXBseXdhdGNoXCI6IFwiXjMuMC4wLWwyXCJcbiAgfSxcbiAgXCJzYXNzRm5zXCI6IFwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zYXNzLWJhc2UvY29tcGlsZXItZm5zLmpzXCIsXG4gIFwic2Fzc0ltcG9ydGVyXCI6IFwibm9kZV9tb2R1bGVzL3Nhc3MtbW9kdWxlLWltcG9ydGVyL2xpYi9pbmRleC5qc1wiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwicG9zdHZlcnNpb25cIjogXCJucG0gcnVuIGJ1aWxkICYmIGdpdCBhZGQgLiAmJiBnaXQgY29tbWl0IC1hIC1tICdbQnVpbGRdJ1wiLFxuICAgIFwicG9zdHB1Ymxpc2hcIjogXCJnaXQgcHVzaFwiLFxuICAgIFwiYnVpbGRcIjogXCJjYWtlIGluc3RhbGw6YnVpbGQ7IGNha2UgLWQgYnVpbGQgJiYgY2FrZSBidWlsZCAmJiBjcCAtciBidWlsZC8qIGRpc3QvXCIsXG4gICAgXCJjb21waWxlXCI6IFwiY2FrZSAtZCBidWlsZFwiLFxuICAgIFwid2F0Y2hcIjogXCJjYWtlIGluc3RhbGw7IGNha2UgLWQgd2F0Y2hcIixcbiAgICBcIndhdGNoOmpzXCI6IFwic2ltcGx5d2F0Y2ggJ3NyYy9jb2ZmZWUvKi5jb2ZmZWUnIC1lICdjb2ZmZWUnIC14ICducG0gcnVuIGNvbXBpbGU6anM6ZGVidWcgLXMnXCIsXG4gICAgXCJ3YXRjaDpzYXNzXCI6IFwiZm9udHNEaXI9ZGlzdC9mb250cyBzaW1wbHl3YXRjaCAnc3JjL3Nhc3MvKi5zYXNzJyAtZSAnc2FzcycgLXggJ25wbSBydW4gY29tcGlsZTpzYXNzOmRlYnVnIC1zJ1wiLFxuICAgIFwidGFrYW5hXCI6IFwiZm9udHNEaXI9ZGlzdC9mb250cyB0YWthbmEgLWYgJChwd2QpLyRucG1fcGFja2FnZV9zYXNzRm5zICQocHdkKS9zcmMvc2Fzc1wiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL2RhdGFfdGFibGUuZ2l0XCJcbiAgfSxcbiAgXCJhdXRob3JcIjogXCJEYW5pZWwgS2FsZW5cIixcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vZGF0YV90YWJsZS9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL2RhdGFfdGFibGUjcmVhZG1lXCJcbn1cbiIsImltcG9ydCAnLi9oZWxwZXJzJ1xuaW1wb3J0ICcuL2Vycm9yc0FuZFdhcm5pbmdzJ1xuIiwiU2ltcGx5QmluZCA9IChzdWJqZWN0LCBvcHRpb25zLCBzYXZlT3B0aW9ucywgaXNTdWIsIGNvbXBsZXRlQ2FsbGJhY2spLT5cblx0aWYgKCFzdWJqZWN0IGFuZCBzdWJqZWN0IGlzbnQgMCkgb3IgKCFjaGVja0lmLmlzU3RyaW5nKHN1YmplY3QpIGFuZCAhY2hlY2tJZi5pc051bWJlcihzdWJqZWN0KSBhbmQgIWNoZWNrSWYuaXNGdW5jdGlvbihzdWJqZWN0KSBhbmQgc3ViamVjdCBub3QgaW5zdGFuY2VvZiBBcnJheSlcblx0XHR0aHJvd0Vycm9yKCdpbnZhbGlkUGFyYW1OYW1lJykgdW5sZXNzIGNoZWNrSWYuaXNCaW5kaW5nSW50ZXJmYWNlKHN1YmplY3QpXG5cblx0aWYgY2hlY2tJZi5pc09iamVjdChzdWJqZWN0KSBhbmQgc3ViamVjdCBub3QgaW5zdGFuY2VvZiBBcnJheSAjIEluZGljYXRlcyBpdCdzIGEgQmluZGluZyBpbnN0YW5jZSBvYmplY3QgZHVlIHRvIHRoZSBhYm92ZSBjaGVja1xuXHRcdGludGVyZmFjZVRvUmV0dXJuID0gaWYgY29tcGxldGVDYWxsYmFjayB0aGVuIGNvbXBsZXRlQ2FsbGJhY2soc3ViamVjdCkgZWxzZSBzdWJqZWN0LnNlbGZDbG9uZSgpXG5cdFxuXHRlbHNlXG5cdFx0bmV3SW50ZXJmYWNlID0gbmV3IEJpbmRpbmdJbnRlcmZhY2Uob3B0aW9ucylcblx0XHRuZXdJbnRlcmZhY2Uuc2F2ZU9wdGlvbnMgPSBzYXZlT3B0aW9uc1xuXHRcdG5ld0ludGVyZmFjZS5pc1N1YiA9IGlzU3ViXG5cdFx0bmV3SW50ZXJmYWNlLmNvbXBsZXRlQ2FsbGJhY2sgPSBjb21wbGV0ZUNhbGxiYWNrXG5cblx0XHRpZiBjaGVja0lmLmlzRnVuY3Rpb24oc3ViamVjdClcblx0XHRcdGludGVyZmFjZVRvUmV0dXJuID0gbmV3SW50ZXJmYWNlLnNldE9iamVjdChzdWJqZWN0LCB0cnVlKVxuXHRcdGVsc2Vcblx0XHRcdGludGVyZmFjZVRvUmV0dXJuID0gbmV3SW50ZXJmYWNlLnNldFByb3BlcnR5KHN1YmplY3QpXG5cblx0cmV0dXJuIGludGVyZmFjZVRvUmV0dXJuXG5cblxuXG5cbmltcG9ydCAnLi9tZXRob2RzJyIsIkJpbmRpbmcgPSAob2JqZWN0LCB0eXBlLCBzdGF0ZSktPlxuXHRleHRlbmRTdGF0ZShALCBzdGF0ZSlcblx0QG9wdGlvbnNEZWZhdWx0ID0gaWYgQHNhdmVPcHRpb25zIHRoZW4gQG9wdGlvbnMgZWxzZSBkZWZhdWx0T3B0aW9uc1xuXHRAdHlwZSA9IHR5cGVcdFx0XHRcdFx0XHRcdCMgT2JqZWN0UHJvcCB8IEFycmF5IHwgRnVuYyB8IFByb3h5IHwgRXZlbnQgfCBQaG9sZGVyIHwgRE9NQXR0ciB8IERPTUNoZWNrYm94IHwgRE9NUmFkaW9cblx0QG9iamVjdCA9IG9iamVjdCBcdFx0XHRcdFx0XHQjIFRoZSBzdWJqZWN0IG9iamVjdCBvZiB0aGlzIGJpbmRpbmcsIGkuZS4gZnVuY3Rpb24sIGFycmF5LCB7fSwgRE9NIGVsLCBldGMuXG5cdEBJRCA9IGdlbklEKCkgXHRcdFx0XHRcdFx0XHQjIEFzc2lnbmVkIG9ubHkgYWZ0ZXIgcGFzc2luZyBhIHZhbGlkIG9iamVjdCB0byAub2YoKVxuXHRAc3VicyA9IFtdXHRcdFx0XHRcdFx0XHRcdCMgU3Vic2NyaWJlcnMgYXJyYXkgbGlzdGluZyBhbGwgb2YgdGhlIG9iamVjdHMgdGhhdCB3aWxsIGJlIHVwZGF0ZWQgdXBvbiB2YWx1ZSB1cGRhdGVcblx0QHN1YnNNZXRhID0gZ2VuT2JqKClcdFx0XHRcdFx0IyBNYXAgc3Vic2NyaWJlcnMnIElEIHRvIHRoZWlyIG1ldGFkYXRhIChpLmUuIG9wdGlvbnMsIHRyYW5zZm9ybSwgY29uZGl0aW9uLCBvbmUtdGltZS1iaW5kaW5nLCBldGMuKVxuXHRAcHVic01hcCA9IGdlbk9iaigpXHRcdFx0XHRcdFx0IyBNYXAgcHVibGlzaGVycyAoYmluZGluZ3MgdGhhdCB1cGRhdGUgdGhpcyBiaW5kaW5nKSBieSB0aGVpciBJRFxuXHRAYXR0YWNoZWRFdmVudHMgPSBbXVx0XHRcdFx0XHQjIEFycmF5IGxpc3RpbmcgYWxsIG9mIHRoZSBldmVudHMgY3VycmVudGx5IGxpc3RlbmVkIG9uIEBvYmplY3Rcblx0QHNldFZhbHVlID0gc2V0VmFsdWVOb29wIGlmIEB0eXBlIGlzICdQcm94eSdcblxuXHQjID09PT0gUHJvcGVydGllcyBkZWNsYXJlZCBsYXRlciBvciBpbmhlcml0ZWQgZnJvbSBiaW5kaW5nIGludGVyZmFjZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyBAb3B0aW9ucyA9IG9wdGlvbnNcblx0IyBAdmFsdWUgPSB1bmRlZmluZWQgXHRcdFx0XHRcdCMgV2lsbCByZXByZXNlbnQgdGhlIGFjdHVhbCBjdXJyZW50IHZhbHVlIG9mIHRoZSBiaW5kaW5nL29iamVjdFxuXHQjIEBwcm9wZXJ0eSA9IHByb3BlcnR5XHRcdFx0XHRcdCMgVGhlIHByb3BlcnR5IG5hbWUgb3IgYXJyYXkgaW5kZXggb3IgZXZlbnQgY2FsbGJhY2sgYXJndW1lbnRcblx0IyBAc2VsZWN0b3IgPSBzZWxlY3Rvclx0XHRcdFx0XHQjIFRoZSBwcm9wZXJ0eSBuYW1lIG9yIGFycmF5IGluZGV4IG9yIGV2ZW50IGNhbGxiYWNrIGFyZ3VtZW50XG5cdCMgQG9yaWdGbiA9IEZ1bmN0aW9uXHRcdFx0XHRcdCMgVGhlIG9yaWdpbmFsIHByb3hpZWQgZnVuY3Rpb24gcGFzc2VkIHRvIFByb3h5IGJpbmRpbmdzXG5cdCMgQGN1c3RvbUV2ZW50TWV0aG9kID0ge31cdFx0XHRcdCMgTmFtZXMgb2YgdGhlIGV2ZW50IGVtaXR0ZXIvdHJpZ2dlciBtZXRob2RzIChpZiBhcHBsaWNhYmxlKVxuXHQjIEBwaG9sZGVyQ29udGV4dHMgPSB7fVx0XHRcdFx0XHQjIFBsYWNlaG9sZGVyIHN1cnJvdW5kaW5ncyAob3JpZ2luYWwgYmluZGluZyB2YWx1ZSBzcGxpdCBieSB0aGUgcGxhY2Vob2xkZXIgcmVnRXgpXG5cdCMgQHBob2xkZXJJbmRleE1hcCA9IHt9XHRcdFx0XHRcdCMgUGxhY2Vob2xkZXIgb2NjdXJlbmNlIG1hcHBpbmcsIGkuZS4gdGhlIHBsYWNlaG9sZGVyIG5hbWUgZm9yIGVhY2ggcGxhY2Vob2xkZXIgb2NjdXJlbmNlXG5cdCMgQHBsYWNlaG9sZGVyID0gXCJcIlx0XHRcdFx0XHRcdCMgVGhlIGxhc3Qgc3BlY2lmaWVkIHBsYWNlaG9sZGVyIHRvIGJpbmQgdGhlIHZhbHVlIHRvXG5cdCMgQGRlc2NyaXB0b3IgPSBbXVx0XHRcdFx0XHRcdCMgRGVzY3JpYmVzIHRoZSB0eXBlIG9mIHByb3BlcnR5LCBpLmUuICdhdHRyOmRhdGEtbmFtZScgdG8gaW5kaWNhdGUgYSBET01BdHRyIHR5cGUgYmluZGluZ1xuXHQjIEBpc0xpdmVQcm9wID0gQm9vbGVhblx0XHRcdFx0XHQjIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgT2JqZWN0L09iamVjdCdzIHByb3BldHkgaGF2ZSBiZWVuIG1vZGlmaWVkIHRvIGJlIGEgbGl2ZSBwcm9wZXJ0eVxuXHQjIEBpc0RvbSA9IEJvb2xlYW5cdFx0XHRcdFx0XHQjIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgYmluZGluZydzIG9iamVjdCBpcyBhIERPTSBvYmplY3Rcblx0IyBAcG9sbEludGVydmFsID0gSURcdFx0XHRcdFx0IyBUaGUgaW50ZXJ2YWwgSUQgb2YgdGhlIHRpbWVyIHRoYXQgbWFudWFsbHkgcG9sbHMgdGhlIG9iamVjdCdzIHZhbHVlIGF0IGEgc2V0IGludGVydmFsXG5cdCMgQGFycmF5QmluZGluZyA9IEJpbmRpbmdcdFx0XHRcdCMgUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgYXJyYXkgYmluZGluZyAoaWYgZXhpc3RzKSBmb3IgYW4gaW5kZXgtb2YtYXJyYXkgYmluZGluZyAoaS5lLiBTaW1wbHlCaW5kKGFycmF5KSlcblx0IyBAZXZlbnROYW1lID0gXCJcIlx0XHRcdFx0XHRcdCMgVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRoaXMgYmluZGluZyBpcyBsaXN0ZW5pbmcgdG8gKGZvciBFdmVudCB0eXBlIGJpbmRpbmdzKVxuXHQjIEBpc0VtaXR0ZXIgPSBCb29sZWFuIFx0XHRcdFx0XHQjIFRyYWNrZXIgdG8gbGV0IHVzIGtub3cgd2Ugc2hvdWxkbid0IGhhbmRsZSB0aGUgZXZlbnQgdXBkYXRlIHdlIHJlY2VpdmVkIGFzIGl0IGlzIHRoZSBldmVudCB0aGlzIGJpbmRpbmcganVzdCBlbWl0dGVkXG5cdCMgQGV2ZW50SGFuZGxlciA9IEZ1bmN0aW9uIFx0XHRcdFx0IyBUaGUgY2FsbGJhY2sgdGhhdCBnZXRzIHRyaWdnZXJlZCB1cG9uIGFuIGV2ZW50IGVtaXR0YW5jZSAoZm9yIEV2ZW4gdHlwZSBiaW5kaW5ncylcblx0IyBAZXZlbnRPYmplY3QgPSBFdmVudCBcdFx0XHRcdFx0IyBUaGUgZGlzcGF0Y2hlZCBldmVudCBvYmplY3QgKGZvciBFdmVudCB0eXBlIGJpbmRpbmdzKVxuXHQjIEBzZWxmVHJhbnNmb3JtID0gRnVuY3Rpb24gXHRcdFx0IyBUaGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHRoYXQgbmV3IHZhbHVlcyBiZWluZyBzZXQgdG8gdGhpcyBiaW5kaW5nIGFyZSBiZWluZyBwYXNzZWQgdGhyb3VnaCBkdXJpbmcgQHNldFZhbHVlIChpZiBhcHBsaWNhYmxlKVxuXHQjIEBzZWxmVXBkYXRlciA9IEZ1bmN0aW9uIFx0XHRcdFx0IyBBIEZ1bmMtdHlwZSBCaW5kaW5nIHdoaWNoIGludm9rZXMgQHNldFZhbHVlKEBmZXRjaERpcmVjdFZhbHVlKCkpIHVwb24gY2hhbmdlLiBDcmVhdGVkIGluIEBjb252ZXJ0VG9MaXZlKCkgZm9yIEFycmF5IGJpbmRpbmdzICYgaW4gaW50ZXJmYWNlLnVwZGF0ZU9uKClcblx0IyBAaXNBc3luYyA9IEJvb2xlYW5cdFx0XHRcdFx0IyBJbmRpY2F0ZXMgaWYgdGhpcyBpcyBhbiBhc3luYyBiaW5kaW5nIChjdXJyZW50bHkgb25seSB1c2VkIGZvciBFdmVudCBiaW5kaW5ncylcblx0IyMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICMjI1xuXG5cdCMgc2ltcGx5aW1wb3J0OmlmIEJVTkRMRV9UQVJHRVQgPSAnYnJvd3Nlcidcblx0aWYgQGlzTXVsdGlDaG9pY2UgIyBUcnVlIGlmIEBvYmplY3QgaXMgYSByYWRpby9jaGVja2JveCBjb2xsZWN0aW9uXG5cdFx0QGNob2ljZXMgPSBnZW5PYmooKVxuXHRcdFxuXHRcdEBvYmplY3QuZm9yRWFjaCAoY2hvaWNlRWwpPT5cblx0XHRcdGNob2ljZUJpbmRpbmcgPSBAY2hvaWNlc1tjaG9pY2VFbC52YWx1ZV0gPSBTaW1wbHlCaW5kKCdjaGVja2VkJykub2YoY2hvaWNlRWwpLl9cblx0XHRcdGNob2ljZUJpbmRpbmcuYWRkU3ViKEApXG5cdFx0XHRjaG9pY2VCaW5kaW5nLnN1YnNNZXRhW0BJRF0udHJhbnNmb3JtRm4gPSAoKS0+IGNob2ljZUJpbmRpbmdcblx0XHRcdGNob2ljZUJpbmRpbmcuZ3JvdXBCaW5kaW5nID0gQFxuXHRcdFx0cmV0dXJuXG5cdCMgc2ltcGx5aW1wb3J0OmVuZFxuXHRcblxuXHR1bmxlc3MgQHR5cGUgaXMgJ0V2ZW50JyBvciAoQHR5cGUgaXMgJ0Z1bmMnIGFuZCBAaXNTdWIpICMgdGhlIHNlY29uZCBjb25kaXRpb24gd2lsbCBwcmV2ZW50IGZ1bmN0aW9uIHN1YnNjcmliZXJzIGZyb20gYmVpbmcgaW52b2tlZCBvbiB0aGlzIGJpbmRpbmcgY3JlYXRpb25cblx0XHRpZiBAdHlwZSBpcyAnUGhvbGRlcidcblx0XHRcdCMgc2ltcGx5aW1wb3J0OmlmIEJVTkRMRV9UQVJHRVQgPSAnYnJvd3Nlcidcblx0XHRcdHBhcmVudFByb3BlcnR5ID0gaWYgQGRlc2NyaXB0b3IgYW5kIG5vdCB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ211bHRpJykgdGhlbiBcIiN7QGRlc2NyaXB0b3J9OiN7QHByb3BlcnR5fVwiIGVsc2UgQHByb3BlcnR5XG5cdFx0XHQjIHNpbXBseWltcG9ydDplbmRcblx0XHRcdFxuXHRcdFx0IyBzaW1wbHlpbXBvcnQ6aWYgQlVORExFX1RBUkdFVCA9ICdub2RlJ1xuXHRcdFx0cGFyZW50UHJvcGVydHkgPSBAcHJvcGVydHlcblx0XHRcdCMgc2ltcGx5aW1wb3J0OmVuZFxuXHRcdFx0XG5cdFx0XHRwYXJlbnRCaW5kaW5nID0gQHBhcmVudEJpbmRpbmcgPSBTaW1wbHlCaW5kKHBhcmVudFByb3BlcnR5KS5vZihvYmplY3QpLl9cblx0XHRcdHBhcmVudEJpbmRpbmcuc2NhbkZvclBob2xkZXJzKClcblx0XHRcdEB2YWx1ZSA9IHBhcmVudEJpbmRpbmcucGhvbGRlclZhbHVlc1tAcGhvbGRlcl1cblx0XHRcblx0XHRcdCMgc2ltcGx5aW1wb3J0OmlmIEJVTkRMRV9UQVJHRVQgPSAnYnJvd3Nlcidcblx0XHRcdEB0ZXh0Tm9kZXMgPSBwYXJlbnRCaW5kaW5nLnRleHROb2Rlc1tAcGhvbGRlcl0gaWYgcGFyZW50QmluZGluZy50ZXh0Tm9kZXNcblx0XHRcdCMgc2ltcGx5aW1wb3J0OmVuZFxuXHRcdFxuXG5cdFx0ZWxzZVxuXHRcdFx0QHZhbHVlID0gc3ViamVjdFZhbHVlID0gQGZldGNoRGlyZWN0VmFsdWUoKVxuXHRcdFxuXHRcdFx0aWYgQHR5cGUgaXMgJ09iamVjdFByb3AnIGFuZCBub3QgY2hlY2tJZi5pc0RlZmluZWQoc3ViamVjdFZhbHVlKSBhbmQgbm90IGdldERlc2NyaXB0b3IoQG9iamVjdCwgQHByb3BlcnR5KVxuXHRcdFx0XHRAb2JqZWN0W0Bwcm9wZXJ0eV0gPSBzdWJqZWN0VmFsdWUgIyBEZWZpbmUgdGhlIHByb3Agb24gdGhlIG9iamVjdCBpZiBpdCBub24tZXhpc3RlbnRcblxuXHRcdFx0Y29udmVydFRvTGl2ZShALCBAb2JqZWN0KVxuXG5cblx0QGF0dGFjaEV2ZW50cygpXG5cdHJldHVybiBib3VuZEluc3RhbmNlc1tASURdID0gQFxuXG5cblxuXG5cbmltcG9ydCAnLi9wcm90b3R5cGUnXG4iLCIjIyMqXG4gKiBTdGFnZSBkZWZpbml0aW9uczpcbiAqIFxuICogMDogU2VsZWN0aW9uOlx0XHRcdEdvdCBzZWxlY3RvciwgYXdhaXRpbmcgb2JqZWN0LlxuICogMTogSW5kaWNhdGlvbjpcdFx0XHRHb3Qgb2JqZWN0LCBhd2FpdGluZyBwcm94aWVkIHByb3BlcnR5IC8gZnVuY3Rpb24gLyBCaW5kaW5nLW9iamVjdC5cbiAqIDI6IEJpbmRpbmcgQ29tcGxldGU6XHRcdENvbXBsZXRlLCBhd2FpdGluZyBhZGRpdGlvbmFsIChvcHRpb25hbCkgYmluZGluZ3MvbXV0YXRpb25zLlxuIyMjXG5CaW5kaW5nSW50ZXJmYWNlID0gKG9wdGlvbnMsIGluaGVyaXRlZFN0YXRlKS0+XG5cdGlmIGluaGVyaXRlZFN0YXRlXG5cdFx0ZXh0ZW5kU3RhdGUoQCwgaW5oZXJpdGVkU3RhdGUpXG5cdFx0QHN0YWdlID0gMVxuXHRlbHNlXG5cdFx0QHN0YWdlID0gMFxuXHRcdEBzdWJzID0gW11cblx0XHRAb3B0aW9uc1Bhc3NlZCA9IG9wdGlvbnMgfHw9IHt9XG5cdFx0QG9wdGlvbnMgPSB7fVxuXHRcdGZvciBrZXkgb2YgZGVmYXVsdE9wdGlvbnNcblx0XHRcdEBvcHRpb25zW2tleV0gPSBpZiBvcHRpb25zW2tleV0/IHRoZW4gb3B0aW9uc1trZXldIGVsc2UgZGVmYXVsdE9wdGlvbnNba2V5XVxuXHRcblx0cmV0dXJuIEBcdFx0XHRcblx0XG5cblxuXG5pbXBvcnQgJy4vcHJvdG90eXBlLXByaXZhdGUnXG5pbXBvcnQgJy4vcHJvdG90eXBlLXB1YmxpYyciLCJHcm91cEJpbmRpbmcgPSAoYmluZGluZ0ludGVyZmFjZSwgb2JqZWN0cywgb2JqZWN0VHlwZSktPlxuXHRiaW5kaW5nSW50ZXJmYWNlLnNlbGVjdG9yID0gYmluZGluZ0ludGVyZmFjZS5zZWxlY3Rvci5zbGljZSg2KSAjIFRha2Ugb3V0IHRoZSAnbXVsdGk6J1xuXHRleHRlbmRTdGF0ZShALCBAaW50ZXJmYWNlID0gYmluZGluZ0ludGVyZmFjZSlcblx0QGlzTXVsdGkgPSB0cnVlXG5cdEBiaW5kaW5ncyA9IGJpbmRpbmdzID0gW11cblxuXHRpZiBvYmplY3RzXG5cdFx0QGFkZEJpbmRpbmcob2JqZWN0LCBvYmplY3RUeXBlKSBmb3Igb2JqZWN0IGluIG9iamVjdHNcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyBALFxuXHRcdCd0eXBlJzpcdFx0XHRcdGdldDogKCktPiBiaW5kaW5ncy5tYXAgKGJpbmRpbmcpLT4gYmluZGluZy50eXBlXG5cdFx0J3ZhbHVlJzogXHRcdFx0Z2V0OiAoKS0+IGJpbmRpbmdzLm1hcCAoYmluZGluZyktPiBiaW5kaW5nLnZhbHVlXG5cblxuXG5cblxuXG5wcm90byA9IEdyb3VwQmluZGluZzo6ID0gT2JqZWN0LmNyZWF0ZShCaW5kaW5nSW50ZXJmYWNlUHJpdmF0ZSlcblxuT2JqZWN0LmtleXMoQmluZGluZzo6KS5mb3JFYWNoIChtZXRob2ROYW1lKS0+XHRcblx0cHJvdG9bbWV0aG9kTmFtZV0gPSAoYSxiLGMsZCktPiAjIEZvdXIgYXJndW1lbnRzIGlzIHRoZSBtb3N0IGV2ZXIgcGFzc2VkIHRvIGFueSBtZXRob2QgZnJvbSBCaW5kaW5nSW50ZXJmYWNlIG1ldGhvZHNcblx0XHRmb3IgYmluZGluZyBpbiBAYmluZGluZ3Ncblx0XHRcdGIgPSBiaW5kaW5nIGlmIG1ldGhvZE5hbWUgaXMgJ3VwZGF0ZVN1Yidcblx0XHRcdGJpbmRpbmdbbWV0aG9kTmFtZV0oYSxiLGMsZClcblx0XHRcblx0XHRyZXR1cm5cblxuXG5wcm90by5hZGRCaW5kaW5nID0gKG9iamVjdCwgb2JqZWN0VHlwZSktPlxuXHRAYmluZGluZ3MucHVzaCBpZiBub3Qgb2JqZWN0VHlwZSB0aGVuIG9iamVjdCBlbHNlIEBjcmVhdGVCaW5kaW5nKG9iamVjdCwgb2JqZWN0VHlwZSwgQGludGVyZmFjZSlcblx0cmV0dXJuIiwiZXh0ZW5kID0gcmVxdWlyZSAnLi9leHRlbmQnXG5cbm5vcm1hbGl6ZUtleXMgPSAoa2V5cyktPiBpZiBrZXlzXG5cdG91dHB1dCA9IHt9XG5cdGlmIHR5cGVvZiBrZXlzIGlzbnQgJ29iamVjdCdcblx0XHRvdXRwdXRba2V5c10gPSB0cnVlXG5cdGVsc2Vcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoa2V5cykgaWYgbm90IEFycmF5LmlzQXJyYXkoa2V5cylcblx0XHRvdXRwdXRba2V5XSA9IHRydWUgZm9yIGtleSBpbiBrZXlzXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cbm5ld0J1aWxkZXIgPSAoaXNCYXNlKS0+XG5cdGJ1aWxkZXIgPSAodGFyZ2V0KS0+XG5cdFx0RVhQQU5EX0FSR1VNRU5UUyhzb3VyY2VzKVxuXHRcdGlmIGJ1aWxkZXIub3B0aW9ucy50YXJnZXRcblx0XHRcdHRoZVRhcmdldCA9IGJ1aWxkZXIub3B0aW9ucy50YXJnZXRcblx0XHRlbHNlXG5cdFx0XHR0aGVUYXJnZXQgPSB0YXJnZXRcblx0XHRcdHNvdXJjZXMuc2hpZnQoKVxuXHRcdFxuXHRcdGV4dGVuZChidWlsZGVyLm9wdGlvbnMsIHRoZVRhcmdldCwgc291cmNlcylcblx0XG5cdGJ1aWxkZXIuaXNCYXNlID0gdHJ1ZSBpZiBpc0Jhc2Vcblx0YnVpbGRlci5vcHRpb25zID0ge31cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYnVpbGRlciwgbW9kaWZpZXJzKVxuXHRyZXR1cm4gYnVpbGRlclxuXG5cbm1vZGlmaWVycyA9IFxuXHQnZGVlcCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5kZWVwID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J293bic6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5vd24gPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnYWxsb3dOdWxsJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLmFsbG93TnVsbCA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdudWxsRGVsZXRlcyc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5udWxsRGVsZXRlcyA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdjb25jYXQnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMuY29uY2F0ID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J2Nsb25lJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLnRhcmdldCA9IHt9XG5cdFx0cmV0dXJuIF9cblxuXHQnbm90RGVlcCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLm5vdERlZXAgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdkZWVwT25seSc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLmRlZXBPbmx5ID0gbm9ybWFsaXplS2V5cyhrZXlzKVx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXHQna2V5cyc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLmtleXMgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdub3RLZXlzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMubm90S2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J3RyYW5zZm9ybSc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAodHJhbnNmb3JtKS0+XG5cdFx0XHRpZiB0eXBlb2YgdHJhbnNmb3JtIGlzICdmdW5jdGlvbidcblx0XHRcdFx0Xy5vcHRpb25zLmdsb2JhbFRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXHRcdFx0ZWxzZSBpZiB0cmFuc2Zvcm0gYW5kIHR5cGVvZiB0cmFuc2Zvcm0gaXMgJ29iamVjdCdcblx0XHRcdFx0Xy5vcHRpb25zLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXG5cdCdmaWx0ZXInOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRyZXR1cm4gKGZpbHRlciktPlxuXHRcdFx0aWYgdHlwZW9mIGZpbHRlciBpcyAnZnVuY3Rpb24nXG5cdFx0XHRcdF8ub3B0aW9ucy5nbG9iYWxGaWx0ZXIgPSBmaWx0ZXJcblx0XHRcdGVsc2UgaWYgZmlsdGVyIGFuZCB0eXBlb2YgZmlsdGVyIGlzICdvYmplY3QnXG5cdFx0XHRcdF8ub3B0aW9ucy5maWx0ZXJzID0gZmlsdGVyXG5cdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBuZXdCdWlsZGVyKHRydWUpXG5leHBvcnRzLnZlcnNpb24gPSBpbXBvcnQgJy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nIiwie1xuICBcIl9mcm9tXCI6IFwic21hcnQtZXh0ZW5kQF4xLjcuM1wiLFxuICBcIl9pZFwiOiBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICBcIl9pbkJ1bmRsZVwiOiBmYWxzZSxcbiAgXCJfaW50ZWdyaXR5XCI6IFwic2hhNTEyLVBWRUVWWUREenl4S0EwR05GTGNXWTZvSlNrUUtkYzF3NzE4ZVFwRUhjTnVUU1dZeERLMzVHemhzR2hNa1VVOGxCSWdTRURidDV4NXA0NnBSejNBdWJBPT1cIixcbiAgXCJfbG9jYXRpb25cIjogXCIvc21hcnQtZXh0ZW5kXCIsXG4gIFwiX3BoYW50b21DaGlsZHJlblwiOiB7fSxcbiAgXCJfcmVxdWVzdGVkXCI6IHtcbiAgICBcInR5cGVcIjogXCJyYW5nZVwiLFxuICAgIFwicmVnaXN0cnlcIjogdHJ1ZSxcbiAgICBcInJhd1wiOiBcInNtYXJ0LWV4dGVuZEBeMS43LjNcIixcbiAgICBcIm5hbWVcIjogXCJzbWFydC1leHRlbmRcIixcbiAgICBcImVzY2FwZWROYW1lXCI6IFwic21hcnQtZXh0ZW5kXCIsXG4gICAgXCJyYXdTcGVjXCI6IFwiXjEuNy4zXCIsXG4gICAgXCJzYXZlU3BlY1wiOiBudWxsLFxuICAgIFwiZmV0Y2hTcGVjXCI6IFwiXjEuNy4zXCJcbiAgfSxcbiAgXCJfcmVxdWlyZWRCeVwiOiBbXG4gICAgXCIvXCIsXG4gICAgXCIvc2ltcGx5d2F0Y2hcIlxuICBdLFxuICBcIl9yZXNvbHZlZFwiOiBcImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL3NtYXJ0LWV4dGVuZC8tL3NtYXJ0LWV4dGVuZC0xLjcuMy50Z3pcIixcbiAgXCJfc2hhc3VtXCI6IFwiMGZlNGE0MjZjODYzOGY0OGY5OWI3Y2M4NWUyNzY3OTFlY2Y1YWYyYlwiLFxuICBcIl9zcGVjXCI6IFwic21hcnQtZXh0ZW5kQF4xLjcuM1wiLFxuICBcIl93aGVyZVwiOiBcIi9Vc2Vycy9kYW5pZWxrYWxlbi9zYW5kYm94L2RhdGFfdGFibGVcIixcbiAgXCJhdXRob3JcIjoge1xuICAgIFwibmFtZVwiOiBcImRhbmllbGthbGVuXCJcbiAgfSxcbiAgXCJicm93c2VyXCI6IHtcbiAgICBcIi4vZGVidWdcIjogXCJkaXN0L3NtYXJ0LWV4dGVuZC5kZWJ1Zy5qc1wiLFxuICAgIFwiLi9kaXN0L3NtYXJ0LWV4dGVuZC5qc1wiOiBcInNyYy9pbmRleC5jb2ZmZWVcIlxuICB9LFxuICBcImJyb3dzZXJpZnlcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFtcbiAgICAgIFwic2ltcGx5aW1wb3J0L2NvbXBhdFwiXG4gICAgXVxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL3NtYXJ0LWV4dGVuZC9pc3N1ZXNcIlxuICB9LFxuICBcImJ1bmRsZURlcGVuZGVuY2llc1wiOiBmYWxzZSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiZmFsYWZlbFwiOiBcIl4yLjEuMFwiXG4gIH0sXG4gIFwiZGVwcmVjYXRlZFwiOiBmYWxzZSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1lcmdlL2V4dGVuZCBvYmplY3RzIChzaGFsbG93L2RlZXApIHdpdGggZ2xvYmFsL2luZGl2aWR1YWwgZmlsdGVycyBhbmQgbW9yZSBmZWF0dXJlc1wiLFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJiYWRnZS1nZW5cIjogXCJeMS4wLjJcIixcbiAgICBcImJsdWViaXJkXCI6IFwiXjMuNC43XCIsXG4gICAgXCJjaGFpXCI6IFwiXjMuNS4wXCIsXG4gICAgXCJjb2ZmZWUtcmVnaXN0ZXJcIjogXCJeMC4xLjBcIixcbiAgICBcImNvZmZlZWlmeS1jYWNoZWRcIjogXCJeMi4xLjFcIixcbiAgICBcImV4dGVuZFwiOiBcIl4zLjAuMVwiLFxuICAgIFwiZ29vZ2xlLWNsb3N1cmUtY29tcGlsZXItanNcIjogXCJeMjAxNzA2MjYuMC4wXCIsXG4gICAgXCJtb2NoYVwiOiBcIl4zLjIuMFwiLFxuICAgIFwic2ltcGx5aW1wb3J0XCI6IFwiXjQuMC4wLXMyMVwiLFxuICAgIFwic2ltcGx5d2F0Y2hcIjogXCJeMy4wLjAtbDJcIixcbiAgICBcInVnbGlmeS1qc1wiOiBcIl4zLjAuMjRcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL3NtYXJ0LWV4dGVuZCNyZWFkbWVcIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJleHRlbmRcIixcbiAgICBcImNsb25lXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcInNlbGVjdGl2ZVwiLFxuICAgIFwibWVyZ2VcIixcbiAgICBcImFzc2lnblwiLFxuICAgIFwicHJvcGVydGllc1wiXG4gIF0sXG4gIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICBcIm1haW5cIjogXCJkaXN0L3NtYXJ0LWV4dGVuZC5qc1wiLFxuICBcIm1vY2hhX29wdHNcIjogXCItdSB0ZGQgLS1jb21waWxlcnMgY29mZmVlOmNvZmZlZS1yZWdpc3RlciAtLXNsb3cgMTAwMCAtLXRpbWVvdXQgNTAwMFwiLFxuICBcIm5hbWVcIjogXCJzbWFydC1leHRlbmRcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc21hcnQtZXh0ZW5kLmdpdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcIm1rZGlyIC1wIGRpc3QvOyBucG0gcnVuIGJ1aWxkOmRlYnVnICYmIG5wbSBydW4gYnVpbGQ6cmVsZWFzZVwiLFxuICAgIFwiYnVpbGQ6ZGVidWdcIjogXCJzaW1wbHlpbXBvcnQgYnVuZGxlIHNyYy9pbmRleC5jb2ZmZWUgLWQgLS10YXJnZXQgbm9kZSAtLXVtZCBzbWFydC1leHRlbmQgPiBkaXN0L3NtYXJ0LWV4dGVuZC5kZWJ1Zy5qc1wiLFxuICAgIFwiYnVpbGQ6cmVsZWFzZVwiOiBcInNpbXBseWltcG9ydCBidW5kbGUgc3JjL2luZGV4LmNvZmZlZSAtLXRhcmdldCBub2RlIC0tdW1kIHNtYXJ0LWV4dGVuZCA+IGRpc3Qvc21hcnQtZXh0ZW5kLmpzXCIsXG4gICAgXCJjb3ZlcmFnZVwiOiBcIm5wbSBydW4gY292ZXJhZ2U6cnVuICYmIG5wbSBydW4gY292ZXJhZ2U6YmFkZ2VcIixcbiAgICBcImNvdmVyYWdlOmJhZGdlXCI6IFwiYmFkZ2UtZ2VuIC1kIC5jb25maWcvYmFkZ2VzL2NvdmVyYWdlXCIsXG4gICAgXCJjb3ZlcmFnZTpydW5cIjogXCJmb3JDb3ZlcmFnZT10cnVlIGlzdGFuYnVsIGNvdmVyIC0tZGlyIGNvdmVyYWdlIG5vZGVfbW9kdWxlcy9tb2NoYS9iaW4vX21vY2hhIC0tICRucG1fcGFja2FnZV9tb2NoYV9vcHRzXCIsXG4gICAgXCJwb3N0cHVibGlzaFwiOiBcImdpdCBwdXNoXCIsXG4gICAgXCJwb3N0dmVyc2lvblwiOiBcIm5wbSBydW4gYnVpbGQgJiYgZ2l0IGFkZCAuICYmIGdpdCBjb21taXQgLWEgLW0gJ1tCdWlsZF0nXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIkNJPTEgbnBtIHJ1biB0ZXN0XCIsXG4gICAgXCJ0ZXN0XCI6IFwibW9jaGEgJG5wbV9wYWNrYWdlX21vY2hhX29wdHNcIixcbiAgICBcIndhdGNoXCI6IFwic2ltcGx5d2F0Y2ggLWcgJ3NyYy8qJyAteCAnbnBtIHJ1biBidWlsZDpkZWJ1ZyAtcydcIlxuICB9LFxuICBcInNpbXBseWltcG9ydFwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJjb2ZmZWVpZnktY2FjaGVkXCIsXG4gICAgICBcIi4vLmNvbmZpZy90cmFuc2Zvcm1zL21hY3Jvc1wiXG4gICAgXSxcbiAgICBcImZpbmFsVHJhbnNmb3JtXCI6IFtcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1zdXBlclwiLFxuICAgICAgXCIuY29uZmlnL3RyYW5zZm9ybXMvbWluaWZ5LXJlbmFtZVwiLFxuICAgICAgXCIuY29uZmlnL3RyYW5zZm9ybXMvbWluaWZ5LXNpbXBsZVwiXG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIxLjcuM1wiXG59XG4iLCIvKiFcbiAqIGVzY2FwZS1odG1sXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDEzIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBBbmRyZWFzIEx1YmJlXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBUaWFuY2hlbmcgXCJUaW1vdGh5XCIgR3VcbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgbWF0Y2hIdG1sUmVnRXhwID0gL1tcIicmPD5dLztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZUh0bWw7XG5cbi8qKlxuICogRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyBpbiB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGh0bWwuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBlc2NhcGUgZm9yIGluc2VydGluZyBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZykge1xuICB2YXIgc3RyID0gJycgKyBzdHJpbmc7XG4gIHZhciBtYXRjaCA9IG1hdGNoSHRtbFJlZ0V4cC5leGVjKHN0cik7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICB2YXIgZXNjYXBlO1xuICB2YXIgaHRtbCA9ICcnO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEluZGV4ID0gMDtcblxuICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XG4gICAgICBjYXNlIDM0OiAvLyBcIlxuICAgICAgICBlc2NhcGUgPSAnJnF1b3Q7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyAmXG4gICAgICAgIGVzY2FwZSA9ICcmYW1wOyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gJ1xuICAgICAgICBlc2NhcGUgPSAnJiMzOTsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjA6IC8vIDxcbiAgICAgICAgZXNjYXBlID0gJyZsdDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjI6IC8vID5cbiAgICAgICAgZXNjYXBlID0gJyZndDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICBodG1sICs9IHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCk7XG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xuICAgIGh0bWwgKz0gZXNjYXBlO1xuICB9XG5cbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gaW5kZXhcbiAgICA/IGh0bWwgKyBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpXG4gICAgOiBodG1sO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSXVMaTh1TGk5dWIyUmxYMjF2WkhWc1pYTXZaWE5qWVhCbExXaDBiV3d2YVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsInZhciBleHRlbmQsIGlzQXJyYXksIGlzT2JqZWN0LCBzaG91bGREZWVwRXh0ZW5kO1xuXG5pc0FycmF5ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCk7XG59O1xuXG5pc09iamVjdCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0ICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0YXJnZXQpID09PSAnW29iamVjdCBPYmplY3RdJyB8fCBpc0FycmF5KHRhcmdldCk7XG59O1xuXG5zaG91bGREZWVwRXh0ZW5kID0gZnVuY3Rpb24ob3B0aW9ucywgdGFyZ2V0LCBwYXJlbnRLZXkpIHtcbiAgaWYgKG9wdGlvbnMuZGVlcCkge1xuICAgIGlmIChvcHRpb25zLm5vdERlZXApIHtcbiAgICAgIHJldHVybiAhb3B0aW9ucy5ub3REZWVwW3RhcmdldF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvcHRpb25zLmRlZXBPbmx5KSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZGVlcE9ubHlbdGFyZ2V0XSB8fCBwYXJlbnRLZXkgJiYgc2hvdWxkRGVlcEV4dGVuZChvcHRpb25zLCBwYXJlbnRLZXkpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZCA9IGZ1bmN0aW9uKG9wdGlvbnMsIHRhcmdldCwgc291cmNlcywgcGFyZW50S2V5KSB7XG4gIHZhciBpLCBrZXksIGxlbiwgc291cmNlLCBzb3VyY2VWYWx1ZSwgc3ViVGFyZ2V0LCB0YXJnZXRWYWx1ZTtcbiAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRhcmdldCA9IHt9O1xuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzb3VyY2UgPSBzb3VyY2VzW2ldO1xuICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZVZhbHVlID0gc291cmNlW2tleV07XG4gICAgICAgIHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmIChzb3VyY2VWYWx1ZSA9PT0gdGFyZ2V0IHx8IHNvdXJjZVZhbHVlID09PSB2b2lkIDAgfHwgKHNvdXJjZVZhbHVlID09PSBudWxsICYmICFvcHRpb25zLmFsbG93TnVsbCAmJiAhb3B0aW9ucy5udWxsRGVsZXRlcykgfHwgKG9wdGlvbnMua2V5cyAmJiAhb3B0aW9ucy5rZXlzW2tleV0pIHx8IChvcHRpb25zLm5vdEtleXMgJiYgb3B0aW9ucy5ub3RLZXlzW2tleV0pIHx8IChvcHRpb25zLm93biAmJiAhc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHx8IChvcHRpb25zLmdsb2JhbEZpbHRlciAmJiAhb3B0aW9ucy5nbG9iYWxGaWx0ZXIoc291cmNlVmFsdWUsIGtleSwgc291cmNlKSkgfHwgKG9wdGlvbnMuZmlsdGVycyAmJiBvcHRpb25zLmZpbHRlcnNba2V5XSAmJiAhb3B0aW9ucy5maWx0ZXJzW2tleV0oc291cmNlVmFsdWUsIGtleSwgc291cmNlKSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlVmFsdWUgPT09IG51bGwgJiYgb3B0aW9ucy5udWxsRGVsZXRlcykge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5nbG9iYWxUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzb3VyY2VWYWx1ZSA9IG9wdGlvbnMuZ2xvYmFsVHJhbnNmb3JtKHNvdXJjZVZhbHVlLCBrZXksIHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudHJhbnNmb3JtcyAmJiBvcHRpb25zLnRyYW5zZm9ybXNba2V5XSkge1xuICAgICAgICAgIHNvdXJjZVZhbHVlID0gb3B0aW9ucy50cmFuc2Zvcm1zW2tleV0oc291cmNlVmFsdWUsIGtleSwgc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGZhbHNlKSB7XG4gICAgICAgICAgY2FzZSAhKG9wdGlvbnMuY29uY2F0ICYmIGlzQXJyYXkoc291cmNlVmFsdWUpICYmIGlzQXJyYXkodGFyZ2V0VmFsdWUpKTpcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdGFyZ2V0VmFsdWUuY29uY2F0KHNvdXJjZVZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgIShzaG91bGREZWVwRXh0ZW5kKG9wdGlvbnMsIGtleSwgcGFyZW50S2V5KSAmJiBpc09iamVjdChzb3VyY2VWYWx1ZSkpOlxuICAgICAgICAgICAgc3ViVGFyZ2V0ID0gaXNPYmplY3QodGFyZ2V0VmFsdWUpID8gdGFyZ2V0VmFsdWUgOiBpc0FycmF5KHNvdXJjZVZhbHVlKSA/IFtdIDoge307XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGV4dGVuZChvcHRpb25zLCBzdWJUYXJnZXQsIFtzb3VyY2VWYWx1ZV0sIGtleSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2VWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSXVMaTh1TGk5dWIyUmxYMjF2WkhWc1pYTXZjMjFoY25RdFpYaDBaVzVrTDNOeVl5OWxlSFJsYm1RdVkyOW1abVZsSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2x0ZGZRPT0iXX0=