(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('smart-extend'),require('event-lite'),require('jquery'),require('escape-html'),require('@danielkalen/simplybind')):typeof define==='function'&&define.amd?define(['smart-extend','event-lite','jquery','escape-html','@danielkalen/simplybind'],f):(g=g||self,g['@danielkalen/data_table']=f(g.extend,g.EventEmitter,g.$$1,g.escHTML,g.SimplyBind));}(this,function(extend, EventEmitter, $$1, escHTML, SimplyBind){'use strict';extend=extend&&extend.hasOwnProperty('default')?extend['default']:extend;EventEmitter=EventEmitter&&EventEmitter.hasOwnProperty('default')?EventEmitter['default']:EventEmitter;$$1=$$1&&$$1.hasOwnProperty('default')?$$1['default']:$$1;escHTML=escHTML&&escHTML.hasOwnProperty('default')?escHTML['default']:escHTML;SimplyBind=SimplyBind&&SimplyBind.hasOwnProperty('default')?SimplyBind['default']:SimplyBind;var version = "2.10.2";var defaults = {
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
      return $.get(`http://ipinfo.io/${ipAddress}`, resolve, 'JSON');
    });
  }
};var tableOuterwrap = function ({
  ID,
  baseClass,
  minWidth,
  hasMobile,
  cellsHavePadding
}) {
  return `<div id='${baseClass}-${ID}' class='${baseClass}-outerwrap {{loading}} {{noResults}} {{hasError}} ${minWidth ? '_hasMinWidth' : ''} ${hasMobile ? '{{mobileVersion}}' : ''} ${cellsHavePadding ? '_cellsHavePadding' : ''} '></div>`;
};
var table = function ({
  baseClass,
  alignment
}) {
  return `<div class='${baseClass} alignment---${alignment} sortDirection---{{sortDirection}}'> <div class='${baseClass}-heading'> <div class='${baseClass}-heading-row'></div> </div> <div class='${baseClass}-body'></div> </div>`;
};
var loading = function ({
  baseClass
}) {
  return `<div class='${baseClass}-loading {{isVisible}}'> <div class='${baseClass}-loading-innerwrap'> <div class='${baseClass}-loading-icon'></div> <div class='${baseClass}-loading-text'>Loading</div> </div> </div>`;
};
var noResults = function ({
  baseClass,
  itemSingleLabel = 'Item',
  itemPluralLabel = itemSingleLabel + 's'
}) {
  return `<div class='${baseClass}-noResults {{isVisible}}'> <div class='${baseClass}-noResults-innerwrap'> <div class='${baseClass}-noResults-icon'></div> <div class='${baseClass}-noResults-text'> <div class='${baseClass}-noResults-text-title'>No ${itemSingleLabel}s to Display</div> <div class='${baseClass}-noResults-text-subtitle'>There are no matching ${itemPluralLabel} for the search query you've typed.</div> </div> </div> </div>`;
};
var error = function ({
  baseClass
}) {
  return `<div class='${baseClass}-error {{isVisible}}'> <div class='${baseClass}-error-innerwrap'> <div class='${baseClass}-error-icon'></div> <div class='${baseClass}-error-text'> <div class='${baseClass}-error-text-title'>A Fatal Error has Occured</div> <div class='${baseClass}-error-text-subtitle'>Report the following to the admin:<br />"{{errorMessage}}"</div> </div> </div> </div>`;
};
var pageStatus = function ({
  baseClass,
  showPageStatus
}) {
  return `<div class='${baseClass}-pageStatus ${showPageStatus ? 'is_visible' : ''}'> Showing {{rowRange}} of {{totalRows}} </div>`;
};
var pagination = function ({
  baseClass
}) {
  return `<div class='${baseClass}-pagination {{hasExtra}} {{isVisible}}'> <div class='${baseClass}-pagination-item _paginationItem _back'> <div class='${baseClass}-pagination-item-text'></div> </div> <div class='${baseClass}-pagination-itemswrap _paginationItems'></div> <div class='${baseClass}-pagination-item _paginationItem _extraIndicator'> <div class='${baseClass}-pagination-item-text'></div> <select class='${baseClass}-pagination-item-select'></select> </div> <div class='${baseClass}-pagination-item _paginationItem _next'> <div class='${baseClass}-pagination-item-text'></div> </div> </div>`;
};
var paginationItem = function ({
  baseClass,
  value
}) {
  return `<div class='${baseClass}-pagination-item _paginationItem'> <div class='${baseClass}-pagination-item-text'>${value}</div> </div>`;
};
var headingCell = function ({
  baseClass,
  extraClasses = '',
  slug,
  icon = '',
  label,
  style = ''
}) {
  return `<div class='${baseClass}-heading-row-cell ${extraClasses} __${slug}' data-slug='${slug}' data-icon='${icon}' ${style}> <div class='${baseClass}-heading-row-cell-text'>${label}</div> </div>`;
};
var row = function ({
  baseClass,
  rowID,
  cells,
  drilldown = ''
}) {
  return `<div class='${baseClass}-body-row _tableRow {{drilldownState}}' data-row-id='${rowID}'> <div class='${baseClass}-body-row-expandDrilldown _expandDrilldown'> <div class='${baseClass}-body-row-expandDrilldown-icon'></div> </div> ${cells} <div class='${baseClass}-body-row-drilldown _tableRowDrilldown'> ${drilldown} </div> </div>`;
};
var rowCell = function ({
  baseClass,
  extraClasses = '',
  label,
  column,
  slug,
  value,
  style = ''
}) {
  return `<div class='${baseClass}-body-row-cell __${slug} ${extraClasses}' data-slug='${slug}' data-column='${column}' ${style}> <div class='${baseClass}-body-row-cell-innerwrap' title='${label}'>${value}</div> </div>`;
};
var searchField = function ({
  baseClass,
  search
}) {
  return `<div class='${baseClass}-search ${(search != null ? search.length : void 0) ? 'is_visible' : ''}'> <select class='${baseClass}-search-select'></select> <input class='${baseClass}-search-input' /> <div class='${baseClass}-search-selectTrigger'></div> </div>`;
};
var ipDetails = function ({
  baseClass,
  ipAddress,
  extra = ''
}) {
  return `<div class='${baseClass}-ipDetails _ipDetails' data-ip='${ipAddress}'> <div class='${baseClass}-ipDetails-trigger _ipDetails-trigger'></div> <div class='${baseClass}-ipDetails-content'>Loading IP Details</div> </div> ${extra}`;
};
var ipDetailsItem = function ({
  baseClass,
  label,
  value
}) {
  return `<div class='${baseClass}-ipDetails-content-item'> <div class='${baseClass}-ipDetails-content-item-label'>${label}: </div> <div class='${baseClass}-ipDetails-content-item-value'>${value}</div> </div>`;
};
var fields = function ({
  baseClass,
  fields
}) {
  return `<div class='${baseClass}-fieldGroup'>${fields}</div>`;
};
var fieldsItem = function ({
  baseClass,
  label,
  value
}) {
  return `<div class='${baseClass}-fieldGroup-item'> <div class='${baseClass}-fieldGroup-item-label'>${label}: </div> <div class='${baseClass}-fieldGroup-item-value'>${escHTML(value)}</div> </div>`;
};
var button = function ({
  baseClass,
  action,
  icon = '',
  isMulti
}) {
  return `<div class='${baseClass}-button _actionButton ${isMulti ? '_isMulti' : ''}' data-action='${action}'> <div class='${baseClass}-button-icon'>${icon}</div> </div>`;
};
var actions = function ({
  baseClass,
  actions
}) {
  return `<div class='${baseClass}-actions'> <div class='${baseClass}-actions-popup'>${actions}</div> </div>`;
};
var actionsOverlay = function () {
  return `<div class='${DataTable$1.defaults.baseClass}-actions-overlay'></div>`;
};
var actionsItem = function ({
  baseClass,
  action,
  icon,
  label,
  customIconStyle = ''
}) {
  return `<div class='${baseClass}-actions-popup-item _actionButton _subActionButton' data-action='${action}' style='${customIconStyle}'> <div class='${baseClass}-actions-popup-item-icon'>${icon}</div> <div class='${baseClass}-actions-popup-item-text'>${label}</div> </div>`;
};var markup = /*#__PURE__*/Object.freeze({tableOuterwrap: tableOuterwrap,table: table,loading: loading,noResults: noResults,error: error,pageStatus: pageStatus,pagination: pagination,paginationItem: paginationItem,headingCell: headingCell,row: row,rowCell: rowCell,searchField: searchField,ipDetails: ipDetails,ipDetailsItem: ipDetailsItem,fields: fields,fieldsItem: fieldsItem,button: button,actions: actions,actionsOverlay: actionsOverlay,actionsItem: actionsItem});var compareValues = function (valueA, valueB) {
  switch (false) {
    case typeof valueA !== typeof valueB:
      return valueA === valueB;

    case typeof valueA !== 'string':
      return valueA === '' + valueB;

    case typeof valueA !== 'number':
      return valueA === parseFloat(valueB);
  }
};
var toggleActionsPopup = function (actionsPopup$) {
  var isOpen, overlay$;
  isOpen = actionsPopup$.data('isOpen');

  if (isOpen) {
    actionsPopup$.data('overlay').remove();
    actionsPopup$.removeClass('is_visible');
  } else {
    actionsPopup$.data('overlay', overlay$ = $$1(actionsOverlay()));
    actionsPopup$.addClass('is_visible');
    overlay$.appendTo(document.body).one('click', function () {
      return toggleActionsPopup(actionsPopup$);
    });
  }

  return actionsPopup$.data('isOpen', !isOpen);
};
var getBreakdownTotal = function (breakdown, breakdownKeys) {
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
var normalizeColumns = function (columns) {
  var column, i, j, label, len, len1, output, ref;

  if (!Array.isArray(columns)) {
    output = columns;
  } else {
    output = {};

    if (typeof columns[0] === 'string') {
      for (i = 0, len = columns.length; i < len; i++) {
        label = columns[i];
        output[label] = {
          label
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
var getBreakdownBarWidth = function (row, largest) {
  return row.breakdownBarTotal / largest * (100 - 18);
};
var genHeaderCellStyle = function (column) {
  var styleString;
  styleString = '';

  if (column.width) {
    styleString += `max-width: ${column.width};`;
  }

  if (column.grow >= 0) {
    styleString += `flex-grow: ${column.grow};`;
  }

  if (styleString) {
    return `style='${styleString}'`;
  } else {
    return '';
  }
};
var genCellStyle = function (column) {
  var color, styleString;
  styleString = '';

  if (column.width) {
    styleString += `max-width: ${column.width};`;
  }

  if (column.color) {
    color = this.colorMapping(column.color, column.colorType);
    styleString += `color: ${color};`;
  }

  if (column.customStyle) {
    styleString += column.customStyle;
  }

  if (column.grow >= 0) {
    styleString += `flex-grow: ${column.grow};`;
  }

  if (styleString) {
    return `style='${styleString}'`;
  } else {
    return '';
  }
};
var genCellClassname = function (column) {
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
var colorMapping = function (value, colorType = 'name') {
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
var iconMapping = function (value, iconType) {
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
};var helpers = /*#__PURE__*/Object.freeze({compareValues: compareValues,toggleActionsPopup: toggleActionsPopup,getBreakdownTotal: getBreakdownTotal,normalizeColumns: normalizeColumns,getBreakdownBarWidth: getBreakdownBarWidth,genHeaderCellStyle: genHeaderCellStyle,genCellStyle: genCellStyle,genCellClassname: genCellClassname,colorMapping: colorMapping,iconMapping: iconMapping});var calcPageCount = function (rows) {
  this.pageCountReal = Math.ceil(rows.length / this.options.perPage);
  return this.pageCount = this.pageCountReal > this.options.pageCountMax ? this.options.pageCountMax : this.pageCountReal;
};
var calcPercentageString = function (columnValue, columnName, row) {
  var columnA, columnB, formula, mathOperator, percent, percentageValue;
  formula = this.options.percentage[columnName];
  columnA = formula[0];
  columnB = formula[2];
  mathOperator = formula[1];

  percentageValue = function () {
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
  }();

  if (percentageValue === 2e308) {
    percentageValue = 0;
  }

  percent = convertToPercent(percentageValue);
  return `${columnValue} (${percent})`;
};
var sortRows = function (rows, targetColumn = this.options.sortBy) {
  var customSort, rawValue, sorter;

  switch (false) {
    case targetColumn !== '+':
      return rows;

    case targetColumn !== '-':
      return rows != null ? rows.slice().reverse() : void 0;

    case !this.options.columns[targetColumn]:
      customSort = this.options.columns[targetColumn].sortFn;
      rawValue = this.options.columns[targetColumn].rawValueFormatter;
      sorter = customSort;
      sorter || (sorter = (a, b) => {
        var aValue, bValue;
        aValue = rawValue ? rawValue(a[targetColumn]) : a[targetColumn];
        bValue = rawValue ? rawValue(b[targetColumn]) : b[targetColumn];

        switch (false) {
          case !(aValue > bValue):
            return this.sortDirection;

          case !(aValue < bValue):
            return this.sortDirection * -1;

          default:
            return 0;
        }
      });
      return rows.slice().sort(sorter);

    default:
      return rows;
  }
};
var setVisiblePage = function (targetPage) {
  var i, len, row, rowsToHide, rowsToReveal, slice;
  targetPage--; // Dec by 1 for array-index style

  slice = {
    'start': targetPage * this.options.perPage,
    'end': targetPage * this.options.perPage + this.options.perPage
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
var setPageIndicator = function (targetPage) {
  var matchedPageEl$, pageItems$;

  if (targetPage === '...') {
    targetPage = 1;
  }

  targetPage = targetPage > this.options.pageCountMax ? this.options.pageCountMax : targetPage - 1; // 0-based index so we subtract 1

  pageItems$ = this.els.pagination.find('._paginationItem').slice(1, -1);
  matchedPageEl$ = pageItems$.eq(targetPage);
  matchedPageEl$.addClass('current');
  return pageItems$.not(matchedPageEl$).removeClass('current');
};var generateHeadingColumns = function () {
  var column, label;
  this.options.columns = normalizeColumns(this.options.columns);

  if (function () {
    var ref, results;
    ref = this.options.columns;
    results = [];

    for (label in ref) {
      column = ref[label];
      results.push(column.type === 'breakdownBar');
    }

    return results;
  }.call(this)) {
    this.hasBreakdownBar = true;
  }

  return Object.keys(this.options.columns).map(label => {
    column = this.options.columns[label];
    this.els.globalStyles[0].innerHTML += `{{${column.slug}}}\n`;
    return headingCell(this.markupArgs({
      'slug': column.slug,
      'icon': column.icon,
      'label': column.label,
      'style': genHeaderCellStyle(column),
      'extraClasses': genCellClassname(column)
    }));
  }).join('');
};
var updateColumns = function (updatedColumns) {
  updatedColumns = normalizeColumns(updatedColumns);
  extend.deep(this.options.columns, updatedColumns);
  return this.currentPage = this.currentPage;
};var processRow = function (row) {
  var ref;

  if (row.processed) {
    return row;
  } else {
    this.generateRow(row);
    SimplyBind('visible', {
      updateEvenIfSame: true
    }).of(row).to((isVisible, prevValue) => {
      if (!isVisible) {
        return row.el.detach();
      } else {
        row.el.appendTo(this.els.tableBody);

        if (this.hasBreakdownBar && !row.updatedBreakdownWidth && isVisible !== prevValue) {
          return row.breakdownBarWidth = getBreakdownBarWidth(row, this.largestBreakdownTotal);
        }
      }
    });

    if (this.hasBreakdownBar && ((ref = row.breakdownBarEl) != null ? ref.length : void 0)) {
      SimplyBind('largestBreakdownTotal').of(this).to('updatedBreakdownWidth').of(row).transform(function () {
        if (row.visible) {
          return true;
        } else {
          return false;
        }
      }).and.to('breakdownBarWidth').of(row).transform(() => {
        return getBreakdownBarWidth(row, this.largestBreakdownTotal);
      }).chainTo('width').of(row.breakdownBarEl[0].style).transform(function (width) {
        return width + '%';
      }).and.to(() => {
        var drilldownEl, i, index, len, ref1, ref2, width;
        ref1 = row.drilldownEls;

        for (index = i = 0, len = ref1.length; i < len; index = ++i) {
          drilldownEl = ref1[index];
          width = getBreakdownBarWidth(row.drilldown[index], row.drilldown.largestBreakdownTotal);

          if ((ref2 = $$1(drilldownEl).children('.is_breakdown_bar').children().children()[0]) != null) {
            ref2.style.width = width + '%';
          }
        }
      }).condition(function () {
        return row.drilldown;
      }).conditionAll(function () {
        return row.visible;
      });
    }

    row.processed = true;
    return row;
  }
};
var unprocessRow = function (row) {
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
var reRenderRow = function (row) {
  return this.generateRow(row);
};
var generateRow = function (row) {
  var newRowEl, prevRowEl;
  prevRowEl = row.el;
  newRowEl = row.el = $$1(this.generateRowMarkup(row)).data('row', row);

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
      row.drilldown.largestBreakdownTotal = Math.max(...row.drilldown.map(function (subRow) {
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
            return row.expandButton[0].style.top = `${rowHeight / 2 - buttonHeight / 2}px`;
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
var generateRowMarkup = function (row$1, parentRow) {
  var isSub;
  isSub = !!parentRow;
  return row(this.markupArgs({
    'rowID': isSub ? parentRow[this.options.uniqueID] : row$1[this.options.uniqueID],
    'drilldown': isSub ? '' : row$1.drilldown ? (() => {
      var drilldownMarkups, drilldownRow, i, len, ref;
      drilldownMarkups = '';
      ref = row$1.drilldown;

      for (i = 0, len = ref.length; i < len; i++) {
        drilldownRow = ref[i];
        drilldownMarkups += this.generateRowMarkup(drilldownRow, row$1);
      }

      return drilldownMarkups;
    })() : void 0,
    'cells': (() => {
      var cellValue, column, columnName, ref, rowCells;
      rowCells = '';
      ref = this.options.columns;

      for (columnName in ref) {
        column = ref[columnName];
        cellValue = row$1[columnName];

        if (this.options.percentage[columnName]) {
          cellValue = this.calcPercentageString(cellValue, columnName, row$1);
        }

        rowCells += rowCell(this.markupArgs({
          'label': typeof cellValue === 'string' ? cellValue : '',
          'column': columnName,
          'slug': column.slug,
          'extraClasses': genCellClassname(column),
          'style': genCellStyle(column),
          'value': (() => {
            switch (false) {
              case column.type !== 'fields':
                return this.generateInlineFields(cellValue, row$1, column);

              case column.type !== 'ipDetails':
                return this.generateIpDetails(cellValue, row$1, column);

              case column.type !== 'breakdownBar':
                return this.generateBreakdownBar(cellValue, row$1, column);

              case column.type !== 'button':
                return this.generateButton(column.action || cellValue, column.buttonIcon || column.icon);

              case column.type !== 'actions':
                return this.generateActions(column, row$1, column);

              case !column.isLink:
                return `<a href='${cellValue}' target='_blank'>${cellValue}</a>`;

              default:
                if (column.formatter) {
                  return column.formatter(cellValue, row$1, column);
                } else {
                  return cellValue;
                }

            }
          })()
        }));
      }

      return rowCells;
    })()
  }));
};// 	breakdownKeys = @legend or Object.keys(breakdown)
// 	rowObj.breakdownBarTotal = total = @getBreakdownTotal(breakdown, breakdownKeys)
// 	return 'N/A' unless total
// 	markup.breakdownBar @markupArgs
// 		'total': total
// 		'totalFormatted': if columnEntity.valueFormat then columnEntity.valueFormat(total) else total
// 		'bars': do ()->
// 			bars = ''
// 			for key in breakdownKeys
// 				value = breakdown[key]
// 				bars += markup.block_table_body_row_cell_breakdown_bar.replace '{{width}}', (value/total)*100
// 			return bars
// 		'hoverBox': do ()->
// 			markup.block_table_body_row_cell_breakdown_hoverbox
// 				.replace '{{rows}}', ()->
// 					rows = ''
// 					breakdownKeys.forEach (key, index)->
// 						rows += markup.block_table_body_row_cell_breakdown_hoverbox_row
// 							.replace '{{color}}', customColors(index)
// 							.replace '{{key}}', key
// 							.replace '{{value}}', if columnEntity.valueFormat then columnEntity.valueFormat(breakdown[key]) else breakdown[key]
// 					return rows

var generateInlineFields = function (dataFields) {
  return fields(this.markupArgs({
    'fields': (() => {
      var label, output, value;

      if (typeof dataFields !== 'object') {
        return '';
      }

      output = function () {
        var results;
        results = [];

        for (label in dataFields) {
          value = dataFields[label];
          results.push(fieldsItem(this.markupArgs({
            label,
            value
          })));
        }

        return results;
      }.call(this);

      return output.join('');
    })()
  }));
};
var generateButton = function (action, icon, isMulti) {
  return button(this.markupArgs({
    action,
    icon,
    isMulti
  }));
};
var generateActions = function (column) {
  var actionsMarkup, buttonMarkup;

  if (column.actions == null) {
    column.actions = 'multiActions';
  }

  buttonMarkup = this.generateButton(column.actions, column.buttonIcon || column.icon, true);
  actionsMarkup = actions(this.markupArgs({
    'actions': (() => {
      var action, output;

      if (!this.options.actions) {
        return '';
      }

      output = function () {
        var i, len, ref, results;
        ref = this.options.actions;
        results = [];

        for (i = 0, len = ref.length; i < len; i++) {
          action = ref[i];
          results.push(actionsItem(this.markupArgs(action)));
        }

        return results;
      }.call(this);

      return output.join('');
    })()
  }));
  return buttonMarkup + actionsMarkup;
};
var generateIpDetails = function (ipAddress, row, column) {
  return ipDetails(this.markupArgs({
    ipAddress,
    extra: typeof column.extraMarkup === "function" ? column.extraMarkup(ipAddress, row) : void 0 // data attribute

  }));
};var generalMethods = /*#__PURE__*/Object.freeze({calcPageCount: calcPageCount,calcPercentageString: calcPercentageString,sortRows: sortRows,setVisiblePage: setVisiblePage,setPageIndicator: setPageIndicator,generateHeadingColumns: generateHeadingColumns,updateColumns: updateColumns,processRow: processRow,unprocessRow: unprocessRow,reRenderRow: reRenderRow,generateRow: generateRow,generateRowMarkup: generateRowMarkup,generateInlineFields: generateInlineFields,generateButton: generateButton,generateActions: generateActions,generateIpDetails: generateIpDetails});var attachEvents = function () {
  // ==== Pagination =================================================================================
  this.els.pagination.on('click', '._paginationItem', event => {
    var $this, isBack, isExtra, isNext, pageNumber;
    $this = $$1(event.currentTarget);
    isBack = $this.hasClass('_back');
    isNext = $this.hasClass('_next');
    isExtra = $this.hasClass('_extraIndicator');

    if (isBack) {
      if (this.currentPage !== 1) {
        return this.currentPage--;
      }
    } else if (isNext) {
      if (this.currentPage !== this.pageCountReal) {
        return this.currentPage++;
      } // else if not isExtra and not isWrapper

    } else if (!isExtra) {
      pageNumber = parseFloat($this.children().html());
      return this.currentPage = pageNumber;
    }
  }); // ==== Sorting =================================================================================

  this.els.tableHeading.on('click', '._isSortable', event => {
    return this.sortBy = event.currentTarget.children[0].textContent;
  }); // ==== Action button event listeners =================================================================================

  this.els.tableBody.on('click', '._actionButton', event => {
    var action, button$, dataItem, itemID, itemIndex, itemRow$;
    button$ = $$1(event.currentTarget);

    if (button$.hasClass('_isMulti')) {
      return toggleActionsPopup(button$.next().children());
    } else {
      itemRow$ = button$.closest('._tableRow');
      action = button$.data('action');
      itemID = itemRow$.data('row-id');
      itemIndex = itemRow$.data('index');
      dataItem = itemID ? this.allRows.find(row => {
        return compareValues(row[this.options.uniqueID], itemID);
      }) : void 0;

      if (dataItem == null) {
        dataItem = itemID;
      }

      if (button$.hasClass('_subActionButton')) {
        toggleActionsPopup(button$.parent());
      }

      return this.els.table.trigger(`action.${action}`, dataItem);
    }
  }); // ==== Row expansion listeners =================================================================================

  this.els.tableBody.on('click', '._expandDrilldown', event => {
    var button$, itemRow;
    button$ = $$1(event.currentTarget);
    itemRow = button$.parent().data('row');
    return itemRow.drilldownOpen = !itemRow.drilldownOpen;
  }); // ==== IP Details listeners =================================================================================

  this.els.tableBody.on('mouseover', '._ipDetails-trigger', event => {
    var content$, country$, ipAddress, isLoaded, trigger$, wrapper$;
    trigger$ = $$1(event.currentTarget);
    wrapper$ = trigger$.parent();
    content$ = trigger$.next();
    country$ = content$.next();
    ipAddress = wrapper$.data('ip');
    isLoaded = trigger$.hasClass('_isReady');

    if (!isLoaded) {
      return this.options.ipDataFetcher(ipAddress).then(ipDetails => {
        var label, output, value;

        if (!ipDetails) {
          return;
        }

        output = function () {
          var results;
          results = [];

          for (label in ipDetails) {
            value = ipDetails[label];
            results.push(ipDetailsItem(this.markupArgs({
              label,
              value
            })));
          }

          return results;
        }.call(this);

        content$.html(output.join(''));
        return wrapper$.addClass('_isReady');
      });
    }
  });
  return Promise.resolve();
};var eventMethods = /*#__PURE__*/Object.freeze({attachEvents: attachEvents});var attachBindings = function () {
  var column, l, ref;
  SimplyBind.settings.trackArrayChildren = false; //# ==========================================================================
  //# State
  //# ========================================================================== 

  SimplyBind('noResults').of(this.state).to('className.isVisible').of(this.els.noResultsMessage).transform(noResults => {
    if (noResults && !this.state.loading) {
      return 'is_visible';
    } else {
      return '';
    }
  }).and.to('className.noResults').of(this.els.tableOuterwrap).transform(noResults => {
    if (noResults && !this.state.loading) {
      return '_noResults';
    } else {
      return '';
    }
  });
  SimplyBind('loading').of(this.state).to('className.isVisible').of(this.els.loadingMessage).transform(function (loading) {
    if (loading) {
      return 'is_visible';
    } else {
      return '';
    }
  }).and.to('className.loading').of(this.els.tableOuterwrap).transform(loading => {
    if (loading) {
      return '_loading';
    } else {
      return '';
    }
  }).and.to(loading => {
    if (loading) {
      return this.state.noResults = false;
    } else {
      return this.state.noResults = !this.visibleRows.length;
    }
  });
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
    SimplyBind('event:resize').of(window).to(() => {
      return this.windowWidth = window.innerWidth;
    });
    SimplyBind('windowWidth').of(this).to('className.mobileVersion').of(this.els.tableOuterwrap).transform(windowWidth => {
      if (windowWidth <= this.options.mobileWidth) {
        return '_mobileVersion';
      } else {
        return '';
      }
    });
  }

  ref = this.options.columns; //# ==========================================================================
  //# Column visibility
  //# ========================================================================== 

  for (l in ref) {
    column = ref[l];

    (column => {
      return SimplyBind('hidden').of(column).to(`innerHTML.${column.slug}`).of(this.els.globalStyles).transform(isHidden => {
        if (isHidden) {
          return `${this.tableID} .__${column.slug} {display:none}`;
        } else {
          return '';
        }
      });
    })(column);
  } //# ==========================================================================
  //# Rows array rendering/processing
  //# ========================================================================== 


  SimplyBind('array:visibleRows').of(this).to((rows, prevRows) => {
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
        this.processRow(row);
        row.visible = true;
      }
    } catch (error) {
      err = error;
      this.state.error = err;
    }

    return this.state.noResults = !rows.length;
  }).and.to(rows => {
    var i, largestBreakdownTotal, len, row;

    if (!this.hasBreakdownBar) {
      return;
    }

    for (i = 0, len = rows.length; i < len; i++) {
      row = rows[i];

      if (row.breakdownBarTotal > largestBreakdownTotal || typeof largestBreakdownTotal === "undefined" || largestBreakdownTotal === null) {
        largestBreakdownTotal = row.breakdownBarTotal;
      }
    }

    return this.largestBreakdownTotal = largestBreakdownTotal || 0;
  }).and.to('textContent.rowRange').of(this.els.pageStatus).transform(rows => {
    return `${this.availableRows.indexOf(rows[0]) + 1}-${this.availableRows.indexOf(rows.slice(-1)[0]) + 1}`;
  });
  SimplyBind('array:allRows').of(this).to(rows => {
    this.searchCriteria = '';
    this.currentPage = 1;
    this.state.noResults = !rows.length;

    if (this.sortBy === this.options.sortBy) {
      this.sortBy = '';
      return this.sortBy = this.options.sortBy;
    } else {
      return this.sortBy = '';
    }
  });
  SimplyBind('availableRows', {
    updateOnBind: false,
    updateEvenIfSame: true
  }).of(this).to(rows => {
    return this.calcPageCount(rows);
  }).and.to('textContent.totalRows').of(this.els.pageStatus).transform(function (rows) {
    return rows.length;
  }); //# ==========================================================================
  //# Pagination
  //# ========================================================================== 

  SimplyBind('pageCount').of(this).to('innerHTML').of(this.els.paginationItems).transform(count => {
    // Render pagination
    var i, paginationItems, ref1, value;
    paginationItems = '';

    for (value = i = 1, ref1 = count; 1 <= ref1 ? i <= ref1 : i >= ref1; value = 1 <= ref1 ? ++i : --i) {
      if (value !== 0) {
        paginationItems += paginationItem(this.markupArgs({
          value
        }));
      }
    }

    return paginationItems;
  }).and.to('className.isVisible').of(this.els.pagination).transform(function (count) {
    if (count > 1) {
      return 'is_visible';
    } else {
      return '';
    }
  });
  SimplyBind('pageCountReal').of(this).to('innerHTML').of(this.els.paginationExtraSelect).transform(realCount => {
    var i, index, options, ref1, ref2;

    if (realCount <= this.options.pageCountMax) {
      return '';
    } else {
      options = '<option>...</option>';

      for (index = i = ref1 = this.options.pageCountMax + 1, ref2 = realCount; ref1 <= ref2 ? i <= ref2 : i >= ref2; index = ref1 <= ref2 ? ++i : --i) {
        options += `<option>${index}</option>`;
      }

      return options;
    }
  }).and.to('className.hasExtra').of(this.els.pagination).transform(realCount => {
    if (realCount > this.options.pageCountMax) {
      return 'has_extra';
    } else {
      return '';
    }
  }); // ==== Extra Indicator/Pages =================================================================================

  SimplyBind('value', {
    updateOnBind: false
  }).of(this.els.paginationExtraSelect).to('innerHTML').of(this.els.paginationExtraText).and.to('currentPage').of(this); // ==== Current Page =================================================================================

  SimplyBind('currentPage', {
    updateEvenIfSame: true
  }).of(this).transformSelf(currentPage => {
    currentPage = currentPage === '...' ? 1 : parseFloat(currentPage);

    if (currentPage > this.pageCountReal) {
      return this.pageCountReal;
    } else {
      return currentPage;
    }
  }).to('value').of(this.els.paginationExtraSelect).transform(currentPage => {
    if (currentPage > this.options.pageCountMax) {
      return currentPage;
    } else {
      return '...';
    }
  }).and.to(currentPage => {
    this.setVisiblePage(currentPage);
    return this.setPageIndicator(currentPage);
  }); //# ==========================================================================
  //# Search Field
  //# ========================================================================== 
  // ==== Search Field value/markup =================================================================================

  if (this.options.search.length) {
    this.searchParam = this.options.search[0];
    SimplyBind('search').of(this.options).to('innerHTML').of(this.els.searchParam).transform(function (options) {
      return options.map(function (option) {
        return `<option>${option}</option>`;
      }).join('');
    });
    SimplyBind('value').of(this.els.searchParam).to('searchParam').of(this).pipe('attr:placeholder').of(this.els.searchCriteria).transform(function (option) {
      return `Filter by ${option}`;
    });
  } // ==== Table results filter & avaiable rows =================================================================================


  SimplyBind('value').of(this.els.searchCriteria).to('searchCriteria', {
    // Search/Filter
    updateEvenIfSame: true
  }).of(this).bothWays().chainTo(searchCriteria => {
    var ref1, rowsToMakeAvailable, targetColumn;
    rowsToMakeAvailable = this.allRows;
    targetColumn = this.options.columns[this.searchParam];

    if (searchCriteria && (targetColumn || ((ref1 = this.allRows[0]) != null ? ref1[this.searchParam] : void 0) != null)) {
      rowsToMakeAvailable = rowsToMakeAvailable.filter(row => {
        var rowValue;
        rowValue = (targetColumn != null ? targetColumn.rawValueFormatter : void 0) ? targetColumn.rawValueFormatter(row[this.searchParam]) : row[this.searchParam];
        return rowValue != null ? rowValue.toString().toLowerCase().includes(searchCriteria.toLowerCase()) : void 0;
      });
    }

    if (this.options.rowFilter) {
      rowsToMakeAvailable = rowsToMakeAvailable.filter(row => {
        var name, ref2, rowClone;
        rowClone = extend.clone(row);
        ref2 = this.options.columns;

        for (name in ref2) {
          column = ref2[name];

          if (column.rawValueFormatter) {
            rowClone[name] = column.rawValueFormatter(rowClone[name]);
          }
        }

        return this.options.rowFilter(rowClone);
      });
    }

    this.availableRows = rowsToMakeAvailable;
    return this.currentPage = 1;
  }); //# ==========================================================================
  //# Sorting
  //# ========================================================================== 

  SimplyBind('sortBy', {
    updateEvenIfSame: true,
    updateOnBind: false
  }, true).of(this).to((currentSort, prevSort) => {
    var targetColumn;

    if (currentSort || prevSort) {
      if (currentSort === prevSort && prevSort) {
        this.sortDirection *= -1;
      } else {
        this.sortDirection = -1;
      }

      targetColumn = currentSort ? currentSort : null;
      this.availableRows = this.sortRows(this.availableRows, targetColumn);
      return this.currentPage = 1;
    }
  });

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
};var bindingMethods = /*#__PURE__*/Object.freeze({attachBindings: attachBindings});var sortBy = function (column) {};var userActionMethods = /*#__PURE__*/Object.freeze({sortBy: sortBy});var DataTable, currentID;
currentID = 0;
DataTable = class DataTable extends EventEmitter {
  constructor(container, options = {}) {
    super();
    this.container = container;
    this.options = extend.clone.deepOnly('columns')(DataTable.defaults, options);
    this.state = {
      'loading': false,
      'noResults': false,
      'error': false
    };
    this.ID = ++currentID;
    this.tableID = `\#${this.options.baseClass}-${this.ID}`;
    this.visibleRows = [];
    this.availableRows = [];
    this.allRows = [];
    this.largestBreakdownTotal = 0;
    this.searchCriteria = '';
    this.searchParam = '';
    this.sortBy = this.options.sortBy ? this.options.sortBy : '';
    this.sortDirection = -1;
    this.currentPage = 1; // ==== Markup =================================================================================

    this.els = {};
    this.els.tableOuterwrap = $$1(tableOuterwrap(extend({
      ID: this.ID
    }, this.options)));
    this.els.table = $$1(table(this.options)).appendTo(this.els.tableOuterwrap);
    this.els.tableHeading = this.els.table.children().first().children();
    this.els.tableBody = this.els.table.children().last();
    this.els.noResultsMessage = $$1(noResults(this.options)).appendTo(this.els.tableOuterwrap);
    this.els.loadingMessage = $$1(loading(this.options)).appendTo(this.els.tableOuterwrap);
    this.els.errorMessage = $$1(error(this.options)).appendTo(this.els.tableOuterwrap);
    this.els.pageStatus = $$1(pageStatus(this.options)).appendTo(this.els.tableOuterwrap);
    this.els.pagination = $$1(pagination(this.options)).appendTo(this.els.tableOuterwrap);
    this.els.paginationItems = this.els.pagination.children('._paginationItems');
    this.els.paginationExtra = this.els.pagination.children('._extraIndicator');
    this.els.paginationExtraSelect = this.els.paginationExtra.children('select');
    this.els.paginationExtraText = this.els.paginationExtraSelect.prev();
    this.els.searchField = $$1(searchField(this.options)).insertBefore(this.els.table);
    this.els.searchParam = this.els.searchField.children('select');
    this.els.searchCriteria = this.els.searchField.children('input');
    this.els.globalStyles = $$1('<style />').prependTo(this.els.tableOuterwrap);
    this.els.tableHeading.append(this.generateHeadingColumns());
    this.els.tableOuterwrap.appendTo(this.container);
    this.els.table.data('DataTable', this);

    if (this.options.minWidth) {
      this.els.table[0].style.minWidth = `${this.options.minWidth}px`;
    } // ==== Events & Bindings =================================================================================


    Promise.bind(this).then(this.attachEvents).then(this.attachBindings).then(function () {
      if (this.options.loadOnInit) {
        return this.loadData();
      }
    });
    return this;
  }

  fetchData() {
    this.state.loading = true;
    return Promise.resolve().then(() => {
      return this.options.data.call(this);
    }).then(data => {
      this.state.loading = this.state.error = false;
      return data;
    }).catch(err => {
      return this.state.error = err;
    });
  }

  setData(data) {
    if (Array.isArray(data)) {
      return this.allRows = data;
    }
  }

  appendData(data) {
    return this.allRows.push(...data);
  }

  loadData() {
    var i, len, ref, row;

    if (this.allRows.length) {
      ref = this.allRows;

      for (i = 0, len = ref.length; i < len; i++) {
        row = ref[i];
        this.unprocessRow(row);
      }
    }

    return this.fetchData().then(data => {
      return this.setData(data);
    });
  }

  refresh() {
    this.availableRows = this.availableRows;
    return this.currentPage = this.currentPage;
  }

  markupArgs(argsObject = {}) {
    argsObject.baseClass = this.options.baseClass;
    return argsObject;
  }

};
extend(DataTable.prototype, generalMethods, eventMethods, bindingMethods, userActionMethods);
DataTable.version = version;
DataTable.helpers = helpers;
DataTable.markup = markup;
DataTable.defaults = defaults;
var DataTable$1 = DataTable;return DataTable$1;}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV90YWJsZS5kZWJ1Zy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL21hcmt1cC5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL2hlbHBlcnMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9tZXRob2RzL2dlbmVyYWwuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9tZXRob2RzL2NvbHVtbi5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL21ldGhvZHMvcm93LmNvZmZlZSIsIi4uLy4uL3NyYy9jb2ZmZWUvcGFydHMvbWV0aG9kcy9zcGVjaWFsQ2VsbHMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9hdHRhY2hFdmVudHMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9hdHRhY2hCaW5kaW5ncy5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL3VzZXJBY3Rpb25NZXRob2RzLmNvZmZlZSIsIi4uLy4uL3NyYy9jb2ZmZWUvaW5kZXguY29mZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFxuXHQncGVyUGFnZSc6IDIwXG5cdCdwYWdlQ291bnRNYXgnOiAxMFxuXHQnbWluV2lkdGgnOiAwXG5cdCdtb2JpbGVXaWR0aCc6IDczNlxuXHQnY2VsbHNIYXZlUGFkZGluZyc6IGZhbHNlXG5cdCdoYXNNb2JpbGUnOiB0cnVlXG5cdCdsb2FkT25Jbml0JzogdHJ1ZVxuXHQnY29sdW1ucyc6IFtdXG5cdCdzZWFyY2gnOiBbXVxuXHQncGVyY2VudGFnZSc6IHt9XG5cdCdiYXNlQ2xhc3MnOiAnRGF0YVRhYmxlJ1xuXHQnc2hvd1BhZ2VTdGF0dXMnOiB0cnVlXG5cdCdzb3J0QnknOiAnJ1xuXHQnYWxpZ25tZW50JzogJ2xlZnQnXG5cdCdhY3Rpb25zJzogZmFsc2Vcblx0J2lwRGF0YUZldGNoZXInOiAoaXBBZGRyZXNzKS0+IG5ldyBQcm9taXNlIChyZXNvbHZlKS0+ICQuZ2V0IFwiaHR0cDovL2lwaW5mby5pby8je2lwQWRkcmVzc31cIiwgcmVzb2x2ZSwgJ0pTT04nXG4iLCJpbXBvcnQgRGF0YVRhYmxlIGZyb20gJy4uLydcbmltcG9ydCBlc2NIVE1MIGZyb20gJ2VzY2FwZS1odG1sJ1xuXG5leHBvcnQgdGFibGVPdXRlcndyYXAgPSAoe0lELCBiYXNlQ2xhc3MsIG1pbldpZHRoLCBoYXNNb2JpbGUsIGNlbGxzSGF2ZVBhZGRpbmd9KS0+IFwiXG5cdDxkaXYgaWQ9JyN7YmFzZUNsYXNzfS0je0lEfScgY2xhc3M9JyN7YmFzZUNsYXNzfS1vdXRlcndyYXAge3tsb2FkaW5nfX0ge3tub1Jlc3VsdHN9fSB7e2hhc0Vycm9yfX1cblx0XHQje2lmIG1pbldpZHRoIHRoZW4gJ19oYXNNaW5XaWR0aCcgZWxzZSAnJ31cblx0XHQje2lmIGhhc01vYmlsZSB0aGVuICd7e21vYmlsZVZlcnNpb259fScgZWxzZSAnJ31cblx0XHQje2lmIGNlbGxzSGF2ZVBhZGRpbmcgdGhlbiAnX2NlbGxzSGF2ZVBhZGRpbmcnIGVsc2UgJyd9XG5cdCc+PC9kaXY+XG5cIlxuXG5leHBvcnQgdGFibGUgPSAoe2Jhc2VDbGFzcywgYWxpZ25tZW50fSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30gYWxpZ25tZW50LS0tI3thbGlnbm1lbnR9IHNvcnREaXJlY3Rpb24tLS17e3NvcnREaXJlY3Rpb259fSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmcnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmctcm93Jz48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keSc+PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgbG9hZGluZyA9ICh7YmFzZUNsYXNzfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZyB7e2lzVmlzaWJsZX19Jz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pbm5lcndyYXAnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctaWNvbic+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy10ZXh0Jz5Mb2FkaW5nPC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgbm9SZXN1bHRzID0gKHtiYXNlQ2xhc3MsIGl0ZW1TaW5nbGVMYWJlbD0nSXRlbScsIGl0ZW1QbHVyYWxMYWJlbD1pdGVtU2luZ2xlTGFiZWwrJ3MnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzIHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtaW5uZXJ3cmFwJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtaWNvbic+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQtdGl0bGUnPk5vICN7aXRlbVNpbmdsZUxhYmVsfXMgdG8gRGlzcGxheTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQtc3VidGl0bGUnPlRoZXJlIGFyZSBubyBtYXRjaGluZyAje2l0ZW1QbHVyYWxMYWJlbH0gZm9yIHRoZSBzZWFyY2ggcXVlcnkgeW91J3ZlIHR5cGVkLjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgZXJyb3IgPSAoe2Jhc2VDbGFzc30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yIHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1lcnJvci1pbm5lcndyYXAnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWljb24nPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC10aXRsZSc+QSBGYXRhbCBFcnJvciBoYXMgT2NjdXJlZDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC1zdWJ0aXRsZSc+UmVwb3J0IHRoZSBmb2xsb3dpbmcgdG8gdGhlIGFkbWluOjxiciAvPlxcXCJ7e2Vycm9yTWVzc2FnZX19XFxcIjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgcGFnZVN0YXR1cyA9ICh7YmFzZUNsYXNzLCBzaG93UGFnZVN0YXR1c30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2VTdGF0dXMgI3tpZiBzaG93UGFnZVN0YXR1cyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnfSc+XG5cdFx0U2hvd2luZyB7e3Jvd1JhbmdlfX0gb2Yge3t0b3RhbFJvd3N9fVxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHBhZ2luYXRpb24gPSAoe2Jhc2VDbGFzc30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24ge3toYXNFeHRyYX19IHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtIF9iYWNrJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtc3dyYXAgX3BhZ2luYXRpb25JdGVtcyc+PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfZXh0cmFJbmRpY2F0b3InPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tc2VsZWN0Jz48L3NlbGVjdD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfbmV4dCc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHBhZ2luYXRpb25JdGVtID0gKHtiYXNlQ2xhc3MsIHZhbHVlfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5leHBvcnQgaGVhZGluZ0NlbGwgPSAoe2Jhc2VDbGFzcywgZXh0cmFDbGFzc2VzPScnLCBzbHVnLCBpY29uPScnLCBsYWJlbCwgc3R5bGU9Jyd9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsICN7ZXh0cmFDbGFzc2VzfSBfXyN7c2x1Z30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1pY29uPScje2ljb259JyAje3N0eWxlfT5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZy1yb3ctY2VsbC10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHJvdyA9ICh7YmFzZUNsYXNzLCByb3dJRCwgY2VsbHMsIGRyaWxsZG93bj0nJ30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93IF90YWJsZVJvdyB7e2RyaWxsZG93blN0YXRlfX0nIGRhdGEtcm93LWlkPScje3Jvd0lEfSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWV4cGFuZERyaWxsZG93biBfZXhwYW5kRHJpbGxkb3duJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24taWNvbic+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0I3tjZWxsc31cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctZHJpbGxkb3duIF90YWJsZVJvd0RyaWxsZG93bic+XG5cdFx0XHQje2RyaWxsZG93bn1cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG5cbmV4cG9ydCByb3dDZWxsID0gKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgbGFiZWwsIGNvbHVtbiwgc2x1ZywgdmFsdWUsIHN0eWxlPScnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctY2VsbCBfXyN7c2x1Z30gI3tleHRyYUNsYXNzZXN9JyBkYXRhLXNsdWc9JyN7c2x1Z30nIGRhdGEtY29sdW1uPScje2NvbHVtbn0nICN7c3R5bGV9PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsLWlubmVyd3JhcCcgdGl0bGU9JyN7bGFiZWx9Jz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cblxuZXhwb3J0IHNlYXJjaEZpZWxkID0gKHtiYXNlQ2xhc3MsIHNlYXJjaH0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaCAje2lmIHNlYXJjaD8ubGVuZ3RoIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHQ8c2VsZWN0IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLXNlbGVjdCc+PC9zZWxlY3Q+XG5cdFx0PGlucHV0IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLWlucHV0JyAvPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0VHJpZ2dlcic+PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5cblxuZXhwb3J0IGlwRGV0YWlscyA9ICh7YmFzZUNsYXNzLCBpcEFkZHJlc3MsIGV4dHJhPScnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzIF9pcERldGFpbHMnIGRhdGEtaXA9JyN7aXBBZGRyZXNzfSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy10cmlnZ2VyIF9pcERldGFpbHMtdHJpZ2dlcic+PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50Jz5Mb2FkaW5nIElQIERldGFpbHM8L2Rpdj5cblx0PC9kaXY+XG5cdCN7ZXh0cmF9XG5cIlxuXG5leHBvcnQgaXBEZXRhaWxzSXRlbSA9ICh7YmFzZUNsYXNzLCBsYWJlbCwgdmFsdWV9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtJz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzLWNvbnRlbnQtaXRlbS1sYWJlbCc+I3tsYWJlbH06IDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLXZhbHVlJz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cbmV4cG9ydCBmaWVsZHMgPSAoe2Jhc2VDbGFzcywgZmllbGRzfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cCc+I3tmaWVsZHN9PC9kaXY+XG5cIlxuXG5leHBvcnQgZmllbGRzSXRlbSA9ICh7YmFzZUNsYXNzLCBsYWJlbCx2YWx1ZX0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbS1sYWJlbCc+I3tsYWJlbH06IDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwLWl0ZW0tdmFsdWUnPiN7ZXNjSFRNTCB2YWx1ZX08L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG5cblxuXG5leHBvcnQgYnV0dG9uID0gKHtiYXNlQ2xhc3MsIGFjdGlvbiwgaWNvbj0nJywgaXNNdWx0aX0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbiBfYWN0aW9uQnV0dG9uICN7aWYgaXNNdWx0aSB0aGVuICdfaXNNdWx0aScgZWxzZSAnJ30nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1idXR0b24taWNvbic+I3tpY29ufTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cbmV4cG9ydCBhY3Rpb25zID0gKHtiYXNlQ2xhc3MsIGFjdGlvbnN9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zJz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cCc+I3thY3Rpb25zfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cbmV4cG9ydCBhY3Rpb25zT3ZlcmxheSA9ICgpLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tEYXRhVGFibGUuZGVmYXVsdHMuYmFzZUNsYXNzfS1hY3Rpb25zLW92ZXJsYXknPjwvZGl2PlxuXCJcblxuZXhwb3J0IGFjdGlvbnNJdGVtID0gKHtiYXNlQ2xhc3MsIGFjdGlvbiwgaWNvbiwgbGFiZWwsIGN1c3RvbUljb25TdHlsZT0nJ30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAtaXRlbSBfYWN0aW9uQnV0dG9uIF9zdWJBY3Rpb25CdXR0b24nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nIHN0eWxlPScje2N1c3RvbUljb25TdHlsZX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0tdGV4dCc+I3tsYWJlbH08L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi9tYXJrdXAnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cblxuZXhwb3J0IGNvbXBhcmVWYWx1ZXMgPSAodmFsdWVBLCB2YWx1ZUIpLT4gc3dpdGNoXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyB0eXBlb2YgdmFsdWVCXG5cdFx0dmFsdWVBIGlzIHZhbHVlQlxuXHRcblx0d2hlbiB0eXBlb2YgdmFsdWVBIGlzICdzdHJpbmcnXG5cdFx0dmFsdWVBIGlzICcnK3ZhbHVlQlxuXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnbnVtYmVyJ1xuXHRcdHZhbHVlQSBpcyBwYXJzZUZsb2F0KHZhbHVlQilcblxuXG5leHBvcnQgdG9nZ2xlQWN0aW9uc1BvcHVwID0gKGFjdGlvbnNQb3B1cCQpLT5cblx0aXNPcGVuID0gYWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nXG5cblx0aWYgaXNPcGVuXG5cdFx0YWN0aW9uc1BvcHVwJC5kYXRhKCdvdmVybGF5JykucmVtb3ZlKClcblx0XHRhY3Rpb25zUG9wdXAkLnJlbW92ZUNsYXNzICdpc192aXNpYmxlJ1xuXHRlbHNlXG5cdFx0YWN0aW9uc1BvcHVwJC5kYXRhICdvdmVybGF5Jywgb3ZlcmxheSQgPSAkKG1hcmt1cC5hY3Rpb25zT3ZlcmxheSgpKVxuXHRcdGFjdGlvbnNQb3B1cCQuYWRkQ2xhc3MgJ2lzX3Zpc2libGUnXG5cdFx0b3ZlcmxheSQuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSkub25lICdjbGljaycsICgpLT4gdG9nZ2xlQWN0aW9uc1BvcHVwKGFjdGlvbnNQb3B1cCQpXG5cblx0YWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nLCAhaXNPcGVuXG5cblxuZXhwb3J0IGdldEJyZWFrZG93blRvdGFsID0gKGJyZWFrZG93biwgYnJlYWtkb3duS2V5cyktPiBzd2l0Y2hcblx0d2hlbiBicmVha2Rvd25LZXlzLmxlbmd0aCBpcyAwIHRoZW4gMFxuXHRlbHNlXG5cdFx0YnJlYWtkb3duS2V5c1xuXHRcdFx0Lm1hcCAoYnJlYWtkb3duSXRlbSktPiBicmVha2Rvd25bYnJlYWtkb3duSXRlbV1cblx0XHRcdC5yZWR1Y2UgKGEsYiktPiBhK2JcblxuXG5cbmV4cG9ydCBub3JtYWxpemVDb2x1bW5zID0gKGNvbHVtbnMpLT5cblx0aWYgbm90IEFycmF5LmlzQXJyYXkoY29sdW1ucylcblx0XHRvdXRwdXQgPSBjb2x1bW5zXG5cdGVsc2Vcblx0XHRvdXRwdXQgPSB7fVxuXHRcdGlmIHR5cGVvZiBjb2x1bW5zWzBdIGlzICdzdHJpbmcnXG5cdFx0XHRvdXRwdXRbbGFiZWxdID0ge2xhYmVsfSBmb3IgbGFiZWwgaW4gY29sdW1uc1xuXHRcdFxuXHRcdGVsc2UgaWYgY29sdW1uc1swXT8ubGFiZWxcblx0XHRcdG91dHB1dFtjb2x1bW4ubGFiZWxdID0gY29sdW1uIGZvciBjb2x1bW4gaW4gY29sdW1uc1xuXG5cblx0Zm9yIGxhYmVsLGNvbHVtbiBvZiBvdXRwdXRcblx0XHRjb2x1bW4ubGFiZWwgPz0gbGFiZWxcblx0XHRjb2x1bW4uc2x1ZyA/PSBjb2x1bW4ubGFiZWwudG9Mb3dlckNhc2UoKS5yZXBsYWNlIC9cXFcvZywgJ18nXG5cdFx0Y29sdW1uLnR5cGUgPz0gJ3RleHQnXG5cblx0cmV0dXJuIG91dHB1dCBcblxuXG5leHBvcnQgZ2V0QnJlYWtkb3duQmFyV2lkdGggPSAocm93LCBsYXJnZXN0KS0+XG5cdChyb3cuYnJlYWtkb3duQmFyVG90YWwgLyBsYXJnZXN0KSAqICgxMDAgLSAxOClcblxuXG5leHBvcnQgZ2VuSGVhZGVyQ2VsbFN0eWxlID0gKGNvbHVtbiktPlxuXHRzdHlsZVN0cmluZyA9ICcnXG5cblx0aWYgY29sdW1uLndpZHRoXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJtYXgtd2lkdGg6ICN7Y29sdW1uLndpZHRofTtcIlxuXHRcblx0aWYgY29sdW1uLmdyb3cgPj0gMFxuXHRcdHN0eWxlU3RyaW5nICs9IFwiZmxleC1ncm93OiAje2NvbHVtbi5ncm93fTtcIlxuXG5cdHJldHVybiBpZiBzdHlsZVN0cmluZyB0aGVuIFwic3R5bGU9JyN7c3R5bGVTdHJpbmd9J1wiIGVsc2UgJydcblxuXG5cbmV4cG9ydCBnZW5DZWxsU3R5bGUgPSAoY29sdW1uKS0+XG5cdHN0eWxlU3RyaW5nID0gJydcblxuXHRpZiBjb2x1bW4ud2lkdGhcblx0XHRzdHlsZVN0cmluZyArPSBcIm1heC13aWR0aDogI3tjb2x1bW4ud2lkdGh9O1wiXG5cblx0aWYgY29sdW1uLmNvbG9yXG5cdFx0Y29sb3IgPSBAY29sb3JNYXBwaW5nKGNvbHVtbi5jb2xvciwgY29sdW1uLmNvbG9yVHlwZSlcblx0XHRzdHlsZVN0cmluZyArPSBcImNvbG9yOiAje2NvbG9yfTtcIlxuXG5cdGlmIGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcdHN0eWxlU3RyaW5nICs9IGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcblx0aWYgY29sdW1uLmdyb3cgPj0gMFxuXHRcdHN0eWxlU3RyaW5nICs9IFwiZmxleC1ncm93OiAje2NvbHVtbi5ncm93fTtcIlxuXG5cdHJldHVybiBpZiBzdHlsZVN0cmluZyB0aGVuIFwic3R5bGU9JyN7c3R5bGVTdHJpbmd9J1wiIGVsc2UgJydcblxuXG5cblxuZXhwb3J0IGdlbkNlbGxDbGFzc25hbWUgPSAoY29sdW1uKS0+XG5cdGNsYXNzU3RyaW5nID0gJydcblx0XG5cdGlmIGNvbHVtbi5zb3J0YWJsZVxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzU29ydGFibGUge3tjdXJyZW50U29ydH19J1xuXHRcblx0aWYgY29sdW1uLm5vTGFiZWxcblx0XHRjbGFzc1N0cmluZyArPSAnIF9ub0xhYmVsJ1xuXHRcblx0aWYgY29sdW1uLmlzTGlua1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzTGluaydcblx0XG5cdGlmIGNvbHVtbi5ub0VsbGlwc2lzXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9FbGxpcHNpcydcblx0XG5cdGlmIGNvbHVtbi5zaG93T3ZlcmZsb3dcblx0XHRjbGFzc1N0cmluZyArPSAnIF9zaG93T3ZlcmZsb3cnXG5cdFxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjbGFzc1N0cmluZyArPSAnIF9oYXNDb2xvcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdidXR0b24nIG9yIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnV0dG9uJ1xuXHRcdGNvbHVtbi5hbHdheXNDZW50ZXIgPSB0cnVlXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnJlYWtkb3duQmFyJ1xuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0lwRGV0YWlscydcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNGaWVsZHMnXG5cdFxuXHRpZiBjb2x1bW4uYWx3YXlzQ2VudGVyXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfYWx3YXlzQ2VudGVyJ1xuXG5cdHJldHVybiBjbGFzc1N0cmluZ1xuXG5cblxuXG5cblxuXG5leHBvcnQgY29sb3JNYXBwaW5nID0gKHZhbHVlLCBjb2xvclR5cGU9J25hbWUnKS0+IHN3aXRjaCBjb2xvclR5cGVcblx0d2hlbiAnYnJvd3NlcicgdGhlbiBzd2l0Y2hcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdGaXJlZm94JyB0aGVuIEBjb2xvck1hcHBpbmcoJ29yYW5nZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQ2hyb21lJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2dyZWVuJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdTYWZhcmknIHRoZW4gQGNvbG9yTWFwcGluZygnYmx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnTW9iaWxlIFNhZmFyaScgdGhlbiBAY29sb3JNYXBwaW5nKCdibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdJRScgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGJsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0VkZ2UnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdPcGVyYScgdGhlbiBAY29sb3JNYXBwaW5nKCdyZWQnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0FuZHJvaWQnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRncmVlbicpXG5cdFx0ZWxzZSAndW5rbm93bidcblx0XG5cdFxuXHR3aGVuICdwbGF0Zm9ybScgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdNYWMgT1MgWCcgdGhlbiBAY29sb3JNYXBwaW5nKCdibGFjaycpXG5cdFx0d2hlbiAnV2luZG93cycgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGJsdWUnKVxuXHRcdHdoZW4gJ1dpbmRvd3MgUGhvbmUnIHRoZW4gQGNvbG9yTWFwcGluZygncHVycGxlJylcblx0XHR3aGVuICdMaW51eCcgdGhlbiBAY29sb3JNYXBwaW5nKCdkYXJreWVsbG93Jylcblx0XHR3aGVuICdpT1MnIHRoZW4gQGNvbG9yTWFwcGluZygnYmxhY2snKVxuXHRcdHdoZW4gJ0FuZHJvaWQnIHRoZW4gQGNvbG9yTWFwcGluZyhcImxpZ2h0Z3JlZW5cIilcblx0XHRlbHNlICd1bmtub3duJ1xuXHRcblx0d2hlbiAnc2F0aXNmYWN0aW9uJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ0V4Y2VsbGVudCcgdGhlbiBAY29sb3JNYXBwaW5nKCdncmVlbicpXG5cdFx0d2hlbiAnTm9ybWFsJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3llbGxvdycpXG5cdFx0d2hlbiAnUG9vcicgdGhlbiBAY29sb3JNYXBwaW5nKCdyZWQnKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cblx0XG5cdHdoZW4gJ25hbWUnIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnb3JhbmdlJyB0aGVuICcjZWU2ZjBlJ1xuXHRcdHdoZW4gJ2dyZWVuJyB0aGVuICcjMDBhZDA5J1xuXHRcdHdoZW4gJ2JsdWUnIHRoZW4gJyM0Nzg4ZjMnXG5cdFx0d2hlbiAneWVsbG93JyB0aGVuICcjZWFiNzFlJ1xuXHRcdHdoZW4gJ3JlZCcgdGhlbiAnI2NjNDgyMCdcblx0XHR3aGVuICdibGFjaycgdGhlbiAnIzE4MTgxOCdcblx0XHR3aGVuICdwdXJwbGUnIHRoZW4gJyNhMDIwYmEnXG5cdFx0d2hlbiAnbGlnaHRibHVlJyB0aGVuICcjMGNiM2VlJ1xuXHRcdHdoZW4gJ2xpZ2h0Z3JlZW4nIHRoZW4gJyM3OGMyNTcnXG5cdFx0d2hlbiAnZGFya3llbGxvdycgdGhlbiAnI2U4YWMwMSdcblxuXHRlbHNlIHZhbHVlXG5cblxuXG5cblxuXG5leHBvcnQgaWNvbk1hcHBpbmcgPSAodmFsdWUsIGljb25UeXBlKS0+IHN3aXRjaCBpY29uVHlwZVxuXHR3aGVuICdicm93c2VyJ1xuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiAnIydcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiAnJSdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ1NhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gJyQnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdJRScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0VkZ2UnIHRoZW4gJyYnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdPcGVyYScgdGhlbiAnXCInXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuICcmIzAzOTsnXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnZGV2aWNlJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRGVza3RvcCcgdGhlbiAnISdcblx0XHRcdHdoZW4gJ1RhYmxldCcgdGhlbiAnNydcblx0XHRcdHdoZW4gJ01vYmlsZScgdGhlbiAnNidcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdwbGF0Zm9ybSdcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ01hYyBPUyBYJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnV2luZG93cycgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ1dpbmRvd3MgUGhvbmUnIHRoZW4gJyknXG5cdFx0XHR3aGVuICdMaW51eCcgdGhlbiAnKydcblx0XHRcdHdoZW4gJ2lPUycgdGhlbiAnKidcblx0XHRcdHdoZW4gJ0FuZHJvaWQnIHRoZW4gXCImIzAzOTtcIlxuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbidcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ0V4Y2VsbGVudCcgdGhlbiAnWydcblx0XHRcdHdoZW4gJ05vcm1hbCcgdGhlbiAnQCdcblx0XHRcdHdoZW4gJ1Bvb3InIHRoZW4gJz8nXG5cdFx0XHRlbHNlICc0J1xuXG5cdGVsc2UgJzQnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCBjYWxjUGFnZUNvdW50ID0gKHJvd3MpLT5cblx0QHBhZ2VDb3VudFJlYWwgPSBNYXRoLmNlaWwgcm93cy5sZW5ndGgvQG9wdGlvbnMucGVyUGFnZVxuXHRAcGFnZUNvdW50ID0gaWYgQHBhZ2VDb3VudFJlYWwgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSBAcGFnZUNvdW50UmVhbFxuXG5cblxuXG5cbmV4cG9ydCBjYWxjUGVyY2VudGFnZVN0cmluZyA9IChjb2x1bW5WYWx1ZSwgY29sdW1uTmFtZSwgcm93KS0+XG5cdGZvcm11bGEgPSBAb3B0aW9ucy5wZXJjZW50YWdlW2NvbHVtbk5hbWVdXG5cdGNvbHVtbkEgPSBmb3JtdWxhWzBdXG5cdGNvbHVtbkIgPSBmb3JtdWxhWzJdXG5cdG1hdGhPcGVyYXRvciA9IGZvcm11bGFbMV1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSBzd2l0Y2ggbWF0aE9wZXJhdG9yXG5cdFx0d2hlbiAnKicgdGhlbiByb3dbY29sdW1uQV0gKiByb3dbY29sdW1uQl1cblx0XHR3aGVuICcvJyB0aGVuIHJvd1tjb2x1bW5BXSAvIHJvd1tjb2x1bW5CXVxuXHRcdHdoZW4gJysnIHRoZW4gcm93W2NvbHVtbkFdICsgcm93W2NvbHVtbkJdXG5cdFx0d2hlbiAnLScgdGhlbiByb3dbY29sdW1uQV0gLSByb3dbY29sdW1uQl1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSAwIGlmIHBlcmNlbnRhZ2VWYWx1ZSBpcyBJbmZpbml0eVxuXHRwZXJjZW50ID0gY29udmVydFRvUGVyY2VudChwZXJjZW50YWdlVmFsdWUpXG5cdHJldHVybiBcIiN7Y29sdW1uVmFsdWV9ICgje3BlcmNlbnR9KVwiXG5cblxuXG5cblxuXG5leHBvcnQgc29ydFJvd3MgPSAocm93cywgdGFyZ2V0Q29sdW1uPUBvcHRpb25zLnNvcnRCeSktPiBzd2l0Y2hcblx0d2hlbiB0YXJnZXRDb2x1bW4gaXMgJysnIHRoZW4gcm93c1xuXHR3aGVuIHRhcmdldENvbHVtbiBpcyAnLScgdGhlbiByb3dzPy5zbGljZSgpLnJldmVyc2UoKVxuXHR3aGVuIEBvcHRpb25zLmNvbHVtbnNbdGFyZ2V0Q29sdW1uXVxuXHRcdGN1c3RvbVNvcnQgPSBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl0uc29ydEZuXG5cdFx0cmF3VmFsdWUgPSBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl0ucmF3VmFsdWVGb3JtYXR0ZXJcblx0XHRzb3J0ZXIgPSBjdXN0b21Tb3J0XG5cdFx0c29ydGVyIHx8PSAoYSxiKT0+XG5cdFx0XHRhVmFsdWUgPSBpZiByYXdWYWx1ZSB0aGVuIHJhd1ZhbHVlKGFbdGFyZ2V0Q29sdW1uXSkgZWxzZSBhW3RhcmdldENvbHVtbl1cblx0XHRcdGJWYWx1ZSA9IGlmIHJhd1ZhbHVlIHRoZW4gcmF3VmFsdWUoYlt0YXJnZXRDb2x1bW5dKSBlbHNlIGJbdGFyZ2V0Q29sdW1uXVxuXHRcdFx0c3dpdGNoXG5cdFx0XHRcdHdoZW4gYVZhbHVlID4gYlZhbHVlIHRoZW4gQHNvcnREaXJlY3Rpb25cblx0XHRcdFx0d2hlbiBhVmFsdWUgPCBiVmFsdWUgdGhlbiBAc29ydERpcmVjdGlvbiAqIC0xXG5cdFx0XHRcdGVsc2UgMFxuXHRcdFxuXHRcdHJvd3Muc2xpY2UoKS5zb3J0IHNvcnRlclxuXG5cdGVsc2Ugcm93c1xuXHRcblxuXG5leHBvcnQgc2V0VmlzaWJsZVBhZ2UgPSAodGFyZ2V0UGFnZSktPlxuXHR0YXJnZXRQYWdlLS0gIyBEZWMgYnkgMSBmb3IgYXJyYXktaW5kZXggc3R5bGVcblx0c2xpY2UgPVxuXHRcdCdzdGFydCc6IHRhcmdldFBhZ2UqQG9wdGlvbnMucGVyUGFnZVxuXHRcdCdlbmQnOiAodGFyZ2V0UGFnZSpAb3B0aW9ucy5wZXJQYWdlKStAb3B0aW9ucy5wZXJQYWdlXG5cdFxuXHRyb3dzVG9SZXZlYWwgPSBAYXZhaWxhYmxlUm93c1tzbGljZS5zdGFydCAuLi4gc2xpY2UuZW5kXVxuXHRyb3dzVG9IaWRlID0gQHZpc2libGVSb3dzLnNsaWNlKClcblxuXHRyb3cudmlzaWJsZSA9IGZhbHNlIGZvciByb3cgaW4gcm93c1RvSGlkZVxuXHRAdmlzaWJsZVJvd3MubGVuZ3RoID0gMFxuXHRAdmlzaWJsZVJvd3MucHVzaC5hcHBseSBAdmlzaWJsZVJvd3MsIHJvd3NUb1JldmVhbFxuXG5cblxuXG5leHBvcnQgc2V0UGFnZUluZGljYXRvciA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UgPSAxIGlmIHRhcmdldFBhZ2UgaXMgJy4uLidcblx0dGFyZ2V0UGFnZSA9IGlmIHRhcmdldFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSB0YXJnZXRQYWdlLTEgIyAwLWJhc2VkIGluZGV4IHNvIHdlIHN1YnRyYWN0IDFcblx0cGFnZUl0ZW1zJCA9IEBlbHMucGFnaW5hdGlvbi5maW5kKCcuX3BhZ2luYXRpb25JdGVtJykuc2xpY2UoMSwtMSlcblx0bWF0Y2hlZFBhZ2VFbCQgPSBwYWdlSXRlbXMkLmVxIHRhcmdldFBhZ2Vcblx0XG5cdG1hdGNoZWRQYWdlRWwkLmFkZENsYXNzICdjdXJyZW50J1xuXHRwYWdlSXRlbXMkLm5vdChtYXRjaGVkUGFnZUVsJCkucmVtb3ZlQ2xhc3MgJ2N1cnJlbnQnXHRcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi4vbWFya3VwJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQge25vcm1hbGl6ZUNvbHVtbnMsIGdlbkhlYWRlckNlbGxTdHlsZSwgZ2VuQ2VsbENsYXNzbmFtZX0gZnJvbSAnLi4vaGVscGVycydcblxuZXhwb3J0IGdlbmVyYXRlSGVhZGluZ0NvbHVtbnMgPSAoKS0+XG5cdEBvcHRpb25zLmNvbHVtbnMgPSBub3JtYWxpemVDb2x1bW5zKEBvcHRpb25zLmNvbHVtbnMpXG5cdEBoYXNCcmVha2Rvd25CYXIgPSB0cnVlIGlmIGNvbHVtbi50eXBlIGlzICdicmVha2Rvd25CYXInIGZvciBsYWJlbCxjb2x1bW4gb2YgQG9wdGlvbnMuY29sdW1uc1xuXG5cdE9iamVjdC5rZXlzKEBvcHRpb25zLmNvbHVtbnMpXG5cdFx0Lm1hcCAobGFiZWwpPT5cblx0XHRcdGNvbHVtbiA9IEBvcHRpb25zLmNvbHVtbnNbbGFiZWxdXG5cdFx0XHRAZWxzLmdsb2JhbFN0eWxlc1swXS5pbm5lckhUTUwgKz0gXCJ7eyN7Y29sdW1uLnNsdWd9fX1cXG5cIlxuXG5cdFx0XHRtYXJrdXAuaGVhZGluZ0NlbGwgQG1hcmt1cEFyZ3Ncblx0XHRcdFx0J3NsdWcnOiBjb2x1bW4uc2x1Z1xuXHRcdFx0XHQnaWNvbic6IGNvbHVtbi5pY29uXG5cdFx0XHRcdCdsYWJlbCc6IGNvbHVtbi5sYWJlbFxuXHRcdFx0XHQnc3R5bGUnOiBnZW5IZWFkZXJDZWxsU3R5bGUoY29sdW1uKVxuXHRcdFx0XHQnZXh0cmFDbGFzc2VzJzogZ2VuQ2VsbENsYXNzbmFtZShjb2x1bW4pXG5cdFx0LmpvaW4oJycpXG5cblxuXG5cblxuZXhwb3J0IHVwZGF0ZUNvbHVtbnMgPSAodXBkYXRlZENvbHVtbnMpLT5cblx0dXBkYXRlZENvbHVtbnMgPSBub3JtYWxpemVDb2x1bW5zKHVwZGF0ZWRDb2x1bW5zKVxuXHRleHRlbmQuZGVlcChAb3B0aW9ucy5jb2x1bW5zLCB1cGRhdGVkQ29sdW1ucylcblx0QGN1cnJlbnRQYWdlID0gQGN1cnJlbnRQYWdlXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgU2ltcGx5QmluZCBmcm9tICdAZGFuaWVsa2FsZW4vc2ltcGx5YmluZCdcbmltcG9ydCAqIGFzIG1hcmt1cCBmcm9tICcuLi9tYXJrdXAnXG5pbXBvcnQge2dldEJyZWFrZG93bkJhcldpZHRoLCBnZW5DZWxsQ2xhc3NuYW1lLCBnZW5DZWxsU3R5bGV9IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmV4cG9ydCBwcm9jZXNzUm93ID0gKHJvdyktPiBpZiByb3cucHJvY2Vzc2VkIHRoZW4gcm93IGVsc2Vcblx0QGdlbmVyYXRlUm93KHJvdylcblxuXHRTaW1wbHlCaW5kKCd2aXNpYmxlJywgdXBkYXRlRXZlbklmU2FtZTp0cnVlKS5vZihyb3cpXG5cdFx0LnRvIChpc1Zpc2libGUsIHByZXZWYWx1ZSk9PlxuXHRcdFx0aWYgbm90IGlzVmlzaWJsZSBcblx0XHRcdFx0cm93LmVsLmRldGFjaCgpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJvdy5lbC5hcHBlbmRUbyBAZWxzLnRhYmxlQm9keVxuXG5cdFx0XHRcdGlmIEBoYXNCcmVha2Rvd25CYXIgYW5kIG5vdCByb3cudXBkYXRlZEJyZWFrZG93bldpZHRoIGFuZCBpc1Zpc2libGUgaXNudCBwcmV2VmFsdWVcblx0XHRcdFx0XHRyb3cuYnJlYWtkb3duQmFyV2lkdGggPSBnZXRCcmVha2Rvd25CYXJXaWR0aChyb3csIEBsYXJnZXN0QnJlYWtkb3duVG90YWwpXG5cdFx0XHRcdFxuXG5cdGlmIEBoYXNCcmVha2Rvd25CYXIgYW5kIHJvdy5icmVha2Rvd25CYXJFbD8ubGVuZ3RoXG5cdFx0U2ltcGx5QmluZCgnbGFyZ2VzdEJyZWFrZG93blRvdGFsJykub2YoQClcblx0XHRcdC50bygndXBkYXRlZEJyZWFrZG93bldpZHRoJykub2Yocm93KVxuXHRcdFx0XHQudHJhbnNmb3JtICgpLT4gaWYgcm93LnZpc2libGUgdGhlbiB0cnVlIGVsc2UgZmFsc2Vcblx0XHRcdC5hbmQudG8oJ2JyZWFrZG93bkJhcldpZHRoJykub2Yocm93KVxuXHRcdFx0XHQudHJhbnNmb3JtICgpPT4gZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXG5cdFx0XHRcdC5jaGFpblRvKCd3aWR0aCcpLm9mKHJvdy5icmVha2Rvd25CYXJFbFswXS5zdHlsZSlcblx0XHRcdFx0XHQudHJhbnNmb3JtICh3aWR0aCktPiB3aWR0aCsnJSdcblxuXHRcdFx0XHQuYW5kLnRvICgpPT5cblx0XHRcdFx0XHRmb3IgZHJpbGxkb3duRWwsaW5kZXggaW4gcm93LmRyaWxsZG93bkVsc1xuXHRcdFx0XHRcdFx0d2lkdGggPSBnZXRCcmVha2Rvd25CYXJXaWR0aChyb3cuZHJpbGxkb3duW2luZGV4XSwgcm93LmRyaWxsZG93bi5sYXJnZXN0QnJlYWtkb3duVG90YWwpXG5cdFx0XHRcdFx0XHQkKGRyaWxsZG93bkVsKS5jaGlsZHJlbignLmlzX2JyZWFrZG93bl9iYXInKS5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF0/LnN0eWxlLndpZHRoID0gd2lkdGgrJyUnXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdC5jb25kaXRpb24gKCktPiByb3cuZHJpbGxkb3duXG5cdFx0XHRcdFx0XG5cdFx0XHQuY29uZGl0aW9uQWxsICgpLT4gcm93LnZpc2libGVcblxuXHRyb3cucHJvY2Vzc2VkID0gdHJ1ZVxuXHRyZXR1cm4gcm93XG5cblxuXG5cblxuZXhwb3J0IHVucHJvY2Vzc1JvdyA9IChyb3cpLT4gaWYgcm93LnByb2Nlc3NlZFxuXHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3csIHRydWUpXG5cdFxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWxbMF1cblx0XHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3cuYnJlYWtkb3duQmFyRWxbMF0uc3R5bGUpXG5cblx0cm93LmVsLnJlbW92ZSgpXG5cdGRlbGV0ZSByb3cuZWxcblx0ZGVsZXRlIHJvdy5kcmlsbGRvd25FbHNcblx0ZGVsZXRlIHJvdy52aXNpYmxlXG5cdGRlbGV0ZSByb3cuYnJlYWtkb3duQmFyRWxcblx0ZGVsZXRlIHJvdy5wcm9jZXNzZWRcblxuXG5cbmV4cG9ydCByZVJlbmRlclJvdyA9IChyb3cpLT5cblx0QGdlbmVyYXRlUm93KHJvdylcblxuXG5cbmV4cG9ydCBnZW5lcmF0ZVJvdyA9IChyb3cpLT5cblx0cHJldlJvd0VsID0gcm93LmVsXG5cdG5ld1Jvd0VsID0gcm93LmVsID0gJChAZ2VuZXJhdGVSb3dNYXJrdXAocm93KSkuZGF0YSgncm93Jywgcm93KVxuXHRwcmV2Um93RWwucmVwbGFjZVdpdGgobmV3Um93RWwpIGlmIHByZXZSb3dFbFxuXHRcblx0cm93LmV4cGFuZEJ1dHRvbiA9IHJvdy5lbC5jaGlsZHJlbigpLmZpcnN0KCkgaWYgcm93LmRyaWxsZG93blxuXHRyb3cuZHJpbGxkb3duRWxzID0gcm93LmVsLmNoaWxkcmVuKCcuX3RhYmxlUm93RHJpbGxkb3duJykuY2hpbGRyZW4oKSBpZiByb3cuZHJpbGxkb3duXG5cdHJvdy5icmVha2Rvd25CYXJFbCA9IHJvdy5lbC5jaGlsZHJlbignLmlzQnJlYWtkb3duQmFyJykuY2hpbGRyZW4oKS5jaGlsZHJlbigpIGlmIEBoYXNCcmVha2Rvd25CYXJcblx0cm93LnZpc2libGUgPSBmYWxzZSB1bmxlc3MgcHJldlJvd0VsXG5cdFxuXHRpZiByb3cuZHJpbGxkb3duXG5cdFx0aWYgQGhhc0JyZWFrZG93bkJhclxuXHRcdFx0cm93LmRyaWxsZG93bi5sYXJnZXN0QnJlYWtkb3duVG90YWwgPSBNYXRoLm1heCByb3cuZHJpbGxkb3duLm1hcCgoc3ViUm93KS0+IHN1YlJvdy5icmVha2Rvd25CYXJUb3RhbCkuLi5cblxuXHRcdFNpbXBseUJpbmQoJ2RyaWxsZG93bk9wZW4nKS5vZihyb3cpXG5cdFx0XHQudG8oJ2NsYXNzTmFtZS5kcmlsbGRvd25TdGF0ZScpLm9mKHJvdy5lbClcblx0XHRcdFx0LnRyYW5zZm9ybSAoZHJpbGxkb3duT3BlbiktPiBpZiBkcmlsbGRvd25PcGVuIHRoZW4gJ2hhc0RyaWxsZG93biBkcmlsbGRvd25Jc09wZW4nIGVsc2UgJ2hhc0RyaWxsZG93bidcblxuXHRcdFNpbXBseUJpbmQoJ3Zpc2libGUnKS5vZihyb3cpXG5cdFx0XHQub25jZS50byAoKS0+XG5cdFx0XHRcdFNpbXBseUJpbmQgKCktPlxuXHRcdFx0XHRcdGlmIG5vdCByb3cuZHJpbGxkb3duT3BlbiB0aGVuIHNldFRpbWVvdXQgKCktPlxuXHRcdFx0XHRcdFx0cm93SGVpZ2h0ID0gcm93LmVsLmhlaWdodCgpXG5cdFx0XHRcdFx0XHRidXR0b25IZWlnaHQgPSByb3cuZXhwYW5kQnV0dG9uLmhlaWdodCgpXG5cdFx0XHRcdFx0XHRyb3cuZXhwYW5kQnV0dG9uWzBdLnN0eWxlLnRvcCA9IFwiI3tyb3dIZWlnaHQvMiAtIGJ1dHRvbkhlaWdodC8yfXB4XCJcblxuXHRcdFx0XHQudXBkYXRlT24oJ2V2ZW50OnJlc2l6ZScsIHRocm90dGxlOjMwMCkub2Yod2luZG93KVxuXHRcdFx0LmNvbmRpdGlvbiAodmlzaWJsZSktPiB2aXNpYmxlXG5cblx0cmV0dXJuIHJvd1xuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZVJvd01hcmt1cCA9IChyb3csIHBhcmVudFJvdyktPlxuXHRpc1N1YiA9ICEhcGFyZW50Um93XG5cdFxuXHRtYXJrdXAucm93IEBtYXJrdXBBcmdzXG5cdFx0J3Jvd0lEJzogaWYgaXNTdWIgdGhlbiBwYXJlbnRSb3dbQG9wdGlvbnMudW5pcXVlSURdIGVsc2Ugcm93W0BvcHRpb25zLnVuaXF1ZUlEXVxuXHRcdCdkcmlsbGRvd24nOiBpZiBpc1N1YiB0aGVuICcnIGVsc2UgaWYgcm93LmRyaWxsZG93biB0aGVuIGRvICgpPT5cblx0XHRcdGRyaWxsZG93bk1hcmt1cHMgPSAnJ1xuXHRcdFx0ZHJpbGxkb3duTWFya3VwcyArPSBAZ2VuZXJhdGVSb3dNYXJrdXAoZHJpbGxkb3duUm93LCByb3cpIGZvciBkcmlsbGRvd25Sb3cgaW4gcm93LmRyaWxsZG93blxuXHRcdFx0cmV0dXJuIGRyaWxsZG93bk1hcmt1cHNcblx0XHRcblx0XHQnY2VsbHMnOiBkbyAoKT0+XG5cdFx0XHRyb3dDZWxscyA9ICcnXG5cdFx0XHRcblx0XHRcdGZvciBjb2x1bW5OYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zXG5cdFx0XHRcdGNlbGxWYWx1ZSA9IHJvd1tjb2x1bW5OYW1lXVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnBlcmNlbnRhZ2VbY29sdW1uTmFtZV1cblx0XHRcdFx0XHRjZWxsVmFsdWUgPSBAY2FsY1BlcmNlbnRhZ2VTdHJpbmcoY2VsbFZhbHVlLCBjb2x1bW5OYW1lLCByb3cpXG5cblxuXHRcdFx0XHRyb3dDZWxscyArPSBtYXJrdXAucm93Q2VsbCBAbWFya3VwQXJnc1xuXHRcdFx0XHRcdCdsYWJlbCc6IGlmIHR5cGVvZiBjZWxsVmFsdWUgaXMgJ3N0cmluZycgdGhlbiBjZWxsVmFsdWUgZWxzZSAnJ1xuXHRcdFx0XHRcdCdjb2x1bW4nOiBjb2x1bW5OYW1lXG5cdFx0XHRcdFx0J3NsdWcnOiBjb2x1bW4uc2x1Z1xuXHRcdFx0XHRcdCdleHRyYUNsYXNzZXMnOiBnZW5DZWxsQ2xhc3NuYW1lKGNvbHVtbilcblx0XHRcdFx0XHQnc3R5bGUnOiBnZW5DZWxsU3R5bGUoY29sdW1uKVxuXHRcdFx0XHRcdCd2YWx1ZSc6IGRvICgpPT4gc3dpdGNoXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnIFx0XHR0aGVuIEBnZW5lcmF0ZUlubGluZUZpZWxkcyhjZWxsVmFsdWUsIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnaXBEZXRhaWxzJyBcdHRoZW4gQGdlbmVyYXRlSXBEZXRhaWxzKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdicmVha2Rvd25CYXInIFx0dGhlbiBAZ2VuZXJhdGVCcmVha2Rvd25CYXIoY2VsbFZhbHVlLCByb3csIGNvbHVtbilcblx0XHRcdFx0XHRcdHdoZW4gY29sdW1uLnR5cGUgaXMgJ2J1dHRvbicgXHRcdHRoZW4gQGdlbmVyYXRlQnV0dG9uKChjb2x1bW4uYWN0aW9uIG9yIGNlbGxWYWx1ZSksIChjb2x1bW4uYnV0dG9uSWNvbiBvciBjb2x1bW4uaWNvbikpXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJyBcdFx0dGhlbiBAZ2VuZXJhdGVBY3Rpb25zKGNvbHVtbiwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi5pc0xpbmsgXHRcdFx0XHRcdHRoZW4gXCI8YSBocmVmPScje2NlbGxWYWx1ZX0nIHRhcmdldD0nX2JsYW5rJz4je2NlbGxWYWx1ZX08L2E+XCJcblx0XHRcdFx0XHRcdGVsc2UgKGlmIGNvbHVtbi5mb3JtYXR0ZXIgdGhlbiBjb2x1bW4uZm9ybWF0dGVyKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pIGVsc2UgY2VsbFZhbHVlKVxuXHRcdFx0XHRcdFxuXHRcdFx0cmV0dXJuIHJvd0NlbGxzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi4vbWFya3VwJ1xuXG4jIGV4cG9ydCBnZW5lcmF0ZUJyZWFrZG93bkJhciA9IChicmVha2Rvd24sIHJvd09iaiwgY29sdW1uRW50aXR5KS0+XG4jIFx0YnJlYWtkb3duS2V5cyA9IEBsZWdlbmQgb3IgT2JqZWN0LmtleXMoYnJlYWtkb3duKVxuIyBcdHJvd09iai5icmVha2Rvd25CYXJUb3RhbCA9IHRvdGFsID0gQGdldEJyZWFrZG93blRvdGFsKGJyZWFrZG93biwgYnJlYWtkb3duS2V5cylcblx0XG4jIFx0cmV0dXJuICdOL0EnIHVubGVzcyB0b3RhbFxuXHRcbiMgXHRtYXJrdXAuYnJlYWtkb3duQmFyIEBtYXJrdXBBcmdzXG4jIFx0XHQndG90YWwnOiB0b3RhbFxuIyBcdFx0J3RvdGFsRm9ybWF0dGVkJzogaWYgY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0IHRoZW4gY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0KHRvdGFsKSBlbHNlIHRvdGFsXG4jIFx0XHQnYmFycyc6IGRvICgpLT5cbiMgXHRcdFx0YmFycyA9ICcnXG4jIFx0XHRcdGZvciBrZXkgaW4gYnJlYWtkb3duS2V5c1xuIyBcdFx0XHRcdHZhbHVlID0gYnJlYWtkb3duW2tleV1cbiMgXHRcdFx0XHRiYXJzICs9IG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9iYXIucmVwbGFjZSAne3t3aWR0aH19JywgKHZhbHVlL3RvdGFsKSoxMDBcbiMgXHRcdFx0cmV0dXJuIGJhcnNcblxuIyBcdFx0J2hvdmVyQm94JzogZG8gKCktPlxuIyBcdFx0XHRtYXJrdXAuYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25faG92ZXJib3hcbiMgXHRcdFx0XHQucmVwbGFjZSAne3tyb3dzfX0nLCAoKS0+XG4jIFx0XHRcdFx0XHRyb3dzID0gJydcblx0XHRcdFx0XHRcbiMgXHRcdFx0XHRcdGJyZWFrZG93bktleXMuZm9yRWFjaCAoa2V5LCBpbmRleCktPlxuIyBcdFx0XHRcdFx0XHRyb3dzICs9IG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9ob3ZlcmJveF9yb3dcbiMgXHRcdFx0XHRcdFx0XHQucmVwbGFjZSAne3tjb2xvcn19JywgY3VzdG9tQ29sb3JzKGluZGV4KVxuIyBcdFx0XHRcdFx0XHRcdC5yZXBsYWNlICd7e2tleX19Jywga2V5XG4jIFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7dmFsdWV9fScsIGlmIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdCB0aGVuIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdChicmVha2Rvd25ba2V5XSkgZWxzZSBicmVha2Rvd25ba2V5XVxuXG4jIFx0XHRcdFx0XHRyZXR1cm4gcm93c1xuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZUlubGluZUZpZWxkcyA9IChkYXRhRmllbGRzKS0+XG5cdG1hcmt1cC5maWVsZHMgQG1hcmt1cEFyZ3MgJ2ZpZWxkcyc6IGRvICgpPT5cblx0XHRyZXR1cm4gJycgdW5sZXNzIHR5cGVvZiBkYXRhRmllbGRzIGlzICdvYmplY3QnXG5cdFx0XG5cdFx0b3V0cHV0ID0gZm9yIGxhYmVsLHZhbHVlIG9mIGRhdGFGaWVsZHNcblx0XHRcdG1hcmt1cC5maWVsZHNJdGVtIEBtYXJrdXBBcmdzIHtsYWJlbCx2YWx1ZX1cblxuXG5cdFx0cmV0dXJuIG91dHB1dC5qb2luKCcnKVxuXG5cblxuXG5cblxuZXhwb3J0IGdlbmVyYXRlQnV0dG9uID0gKGFjdGlvbiwgaWNvbiwgaXNNdWx0aSktPlxuXHRtYXJrdXAuYnV0dG9uKEBtYXJrdXBBcmdzIHthY3Rpb24sIGljb24sIGlzTXVsdGl9KVxuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZUFjdGlvbnMgPSAoY29sdW1uKS0+XG5cdGNvbHVtbi5hY3Rpb25zID89ICdtdWx0aUFjdGlvbnMnXG5cdGJ1dHRvbk1hcmt1cCA9IEBnZW5lcmF0ZUJ1dHRvbihjb2x1bW4uYWN0aW9ucywgKGNvbHVtbi5idXR0b25JY29uIG9yIGNvbHVtbi5pY29uKSwgdHJ1ZSlcblx0YWN0aW9uc01hcmt1cCA9IG1hcmt1cC5hY3Rpb25zIEBtYXJrdXBBcmdzICdhY3Rpb25zJzogZG8gKCk9PlxuXHRcdHJldHVybiAnJyB1bmxlc3MgQG9wdGlvbnMuYWN0aW9uc1xuXHRcdFxuXHRcdG91dHB1dCA9IGZvciBhY3Rpb24gaW4gQG9wdGlvbnMuYWN0aW9uc1xuXHRcdFx0bWFya3VwLmFjdGlvbnNJdGVtKEBtYXJrdXBBcmdzIGFjdGlvbilcblxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJylcblxuXHRyZXR1cm4gYnV0dG9uTWFya3VwK2FjdGlvbnNNYXJrdXBcblxuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZUlwRGV0YWlscyA9IChpcEFkZHJlc3MsIHJvdywgY29sdW1uKS0+XG5cdG1hcmt1cC5pcERldGFpbHMgQG1hcmt1cEFyZ3Mge2lwQWRkcmVzcywgZXh0cmE6Y29sdW1uLmV4dHJhTWFya3VwPyhpcEFkZHJlc3MsIHJvdyl9ICMgZGF0YSBhdHRyaWJ1dGVcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAqIGFzIG1hcmt1cCBmcm9tICcuL21hcmt1cCdcbmltcG9ydCB7dG9nZ2xlQWN0aW9uc1BvcHVwLCBjb21wYXJlVmFsdWVzfSBmcm9tICcuL2hlbHBlcnMnXG5cbmV4cG9ydCBhdHRhY2hFdmVudHMgPSAoKS0+XG5cdCMgPT09PSBQYWdpbmF0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnBhZ2luYXRpb24ub24gJ2NsaWNrJywgJy5fcGFnaW5hdGlvbkl0ZW0nLCAoZXZlbnQpPT5cblx0XHQkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpc0JhY2sgPSAkdGhpcy5oYXNDbGFzcygnX2JhY2snKVxuXHRcdGlzTmV4dCA9ICR0aGlzLmhhc0NsYXNzKCdfbmV4dCcpXG5cdFx0aXNFeHRyYSA9ICR0aGlzLmhhc0NsYXNzKCdfZXh0cmFJbmRpY2F0b3InKVxuXG5cdFx0aWYgaXNCYWNrXG5cdFx0XHRAY3VycmVudFBhZ2UtLSB1bmxlc3MgQGN1cnJlbnRQYWdlIGlzIDFcblx0XHRcblx0XHRlbHNlIGlmIGlzTmV4dFxuXHRcdFx0QGN1cnJlbnRQYWdlKysgdW5sZXNzIEBjdXJyZW50UGFnZSBpcyBAcGFnZUNvdW50UmVhbFxuXHRcdFxuXHRcdCMgZWxzZSBpZiBub3QgaXNFeHRyYSBhbmQgbm90IGlzV3JhcHBlclxuXHRcdGVsc2UgaWYgbm90IGlzRXh0cmFcblx0XHRcdHBhZ2VOdW1iZXIgPSBwYXJzZUZsb2F0ICR0aGlzLmNoaWxkcmVuKCkuaHRtbCgpXG5cdFx0XHRAY3VycmVudFBhZ2UgPSBwYWdlTnVtYmVyXG5cblxuXG5cblx0IyA9PT09IFNvcnRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVIZWFkaW5nLm9uICdjbGljaycsICcuX2lzU29ydGFibGUnLCAoZXZlbnQpPT5cblx0XHRAc29ydEJ5ID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuXG5cblxuXHQjID09PT0gQWN0aW9uIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdjbGljaycsICcuX2FjdGlvbkJ1dHRvbicsIChldmVudCk9PlxuXHRcdGJ1dHRvbiQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX2lzTXVsdGknKVxuXHRcdFx0dG9nZ2xlQWN0aW9uc1BvcHVwIGJ1dHRvbiQubmV4dCgpLmNoaWxkcmVuKClcblx0XHRcblx0XHRlbHNlXG5cdFx0XHRpdGVtUm93JCA9IGJ1dHRvbiQuY2xvc2VzdCgnLl90YWJsZVJvdycpXG5cdFx0XHRhY3Rpb24gPSBidXR0b24kLmRhdGEoJ2FjdGlvbicpXG5cdFx0XHRpdGVtSUQgPSBpdGVtUm93JC5kYXRhKCdyb3ctaWQnKVxuXHRcdFx0aXRlbUluZGV4ID0gaXRlbVJvdyQuZGF0YSgnaW5kZXgnKVxuXHRcdFx0ZGF0YUl0ZW0gPSBpZiBpdGVtSUQgdGhlbiBAYWxsUm93cy5maW5kIChyb3cpPT4gY29tcGFyZVZhbHVlcyhyb3dbQG9wdGlvbnMudW5pcXVlSURdLCBpdGVtSUQpXG5cdFx0XHRkYXRhSXRlbSA/PSBpdGVtSURcblxuXHRcdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX3N1YkFjdGlvbkJ1dHRvbicpXG5cdFx0XHRcdHRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLnBhcmVudCgpXG5cblx0XHRcdEBlbHMudGFibGUudHJpZ2dlciBcImFjdGlvbi4je2FjdGlvbn1cIiwgZGF0YUl0ZW1cblxuXG5cblxuXG5cblx0IyA9PT09IFJvdyBleHBhbnNpb24gbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnY2xpY2snLCAnLl9leHBhbmREcmlsbGRvd24nLCAoZXZlbnQpPT5cblx0XHRidXR0b24kID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGl0ZW1Sb3cgPSBidXR0b24kLnBhcmVudCgpLmRhdGEoJ3JvdycpXG5cdFx0XG5cdFx0aXRlbVJvdy5kcmlsbGRvd25PcGVuID0gIWl0ZW1Sb3cuZHJpbGxkb3duT3BlblxuXG5cblxuXG5cblxuXG5cdCMgPT09PSBJUCBEZXRhaWxzIGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ21vdXNlb3ZlcicsICcuX2lwRGV0YWlscy10cmlnZ2VyJywgKGV2ZW50KT0+XG5cdFx0dHJpZ2dlciQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0d3JhcHBlciQgPSB0cmlnZ2VyJC5wYXJlbnQoKVxuXHRcdGNvbnRlbnQkID0gdHJpZ2dlciQubmV4dCgpXG5cdFx0Y291bnRyeSQgPSBjb250ZW50JC5uZXh0KClcblx0XHRpcEFkZHJlc3MgPSB3cmFwcGVyJC5kYXRhICdpcCdcblx0XHRpc0xvYWRlZCA9IHRyaWdnZXIkLmhhc0NsYXNzICdfaXNSZWFkeSdcblxuXG5cdFx0dW5sZXNzIGlzTG9hZGVkXHRcdFx0XG5cdFx0XHRAb3B0aW9ucy5pcERhdGFGZXRjaGVyKGlwQWRkcmVzcykudGhlbiAoaXBEZXRhaWxzKT0+XG5cdFx0XHRcdHJldHVybiB1bmxlc3MgaXBEZXRhaWxzXG5cdFx0XHRcdFxuXHRcdFx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgaXBEZXRhaWxzIFxuXHRcdFx0XHRcdG1hcmt1cC5pcERldGFpbHNJdGVtKEBtYXJrdXBBcmdzIHtsYWJlbCx2YWx1ZX0pXG5cblx0XHRcdFx0Y29udGVudCQuaHRtbCBvdXRwdXQuam9pbignJylcblx0XHRcdFx0d3JhcHBlciQuYWRkQ2xhc3MgJ19pc1JlYWR5J1xuXG5cblxuXHRQcm9taXNlLnJlc29sdmUoKVxuXG5cbiIsImltcG9ydCAqIGFzIG1hcmt1cCBmcm9tICcuL21hcmt1cCdcbmltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuaW1wb3J0IFNpbXBseUJpbmQgZnJvbSAnQGRhbmllbGthbGVuL3NpbXBseWJpbmQnXG5cbmV4cG9ydCBhdHRhY2hCaW5kaW5ncyA9ICgpLT5cblx0U2ltcGx5QmluZC5zZXR0aW5ncy50cmFja0FycmF5Q2hpbGRyZW4gPSBmYWxzZVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTdGF0ZVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnbm9SZXN1bHRzJykub2YoQHN0YXRlKVxuXHRcdC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMubm9SZXN1bHRzTWVzc2FnZSkudHJhbnNmb3JtIChub1Jlc3VsdHMpPT4gaWYgbm9SZXN1bHRzIGFuZCBub3QgQHN0YXRlLmxvYWRpbmcgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5ub1Jlc3VsdHMnKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKG5vUmVzdWx0cyk9PiBpZiBub1Jlc3VsdHMgYW5kIG5vdCBAc3RhdGUubG9hZGluZyB0aGVuICdfbm9SZXN1bHRzJyBlbHNlICcnXG5cdFxuXHRTaW1wbHlCaW5kKCdsb2FkaW5nJykub2YoQHN0YXRlKVxuXHRcdC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMubG9hZGluZ01lc3NhZ2UpLnRyYW5zZm9ybSAobG9hZGluZyktPiBpZiBsb2FkaW5nIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUubG9hZGluZycpLm9mKEBlbHMudGFibGVPdXRlcndyYXApLnRyYW5zZm9ybSAobG9hZGluZyk9PiBpZiBsb2FkaW5nIHRoZW4gJ19sb2FkaW5nJyBlbHNlICcnXG5cdFx0LmFuZC50byAobG9hZGluZyk9PlxuXHRcdFx0aWYgbG9hZGluZ1xuXHRcdFx0XHRAc3RhdGUubm9SZXN1bHRzID0gZmFsc2Vcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9ICFAdmlzaWJsZVJvd3MubGVuZ3RoXG5cblx0U2ltcGx5QmluZCgnZXJyb3InKS5vZihAc3RhdGUpXG5cdFx0LnRvKCd0ZXh0Q29udGVudC5lcnJvck1lc3NhZ2UnKS5vZihAZWxzLmVycm9yTWVzc2FnZSlcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaXNWaXNpYmxlJykub2YoQGVscy5lcnJvck1lc3NhZ2UpLnRyYW5zZm9ybSAoaGFzRXJyb3IpLT4gaWYgaGFzRXJyb3IgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5oYXNFcnJvcicpLm9mKEBlbHMudGFibGVPdXRlcndyYXApLnRyYW5zZm9ybSAoaGFzRXJyb3IpLT4gaWYgaGFzRXJyb3IgdGhlbiAnX2Vycm9yJyBlbHNlICcnXG5cdFx0LmFuZC50byAoZXJyKS0+IGNvbnNvbGUuZXJyb3IoZXJyKSBpZiBlcnJcblx0XG5cblx0aWYgQG9wdGlvbnMuaGFzTW9iaWxlXG5cdFx0QHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRcblx0XHRTaW1wbHlCaW5kKCdldmVudDpyZXNpemUnKS5vZih3aW5kb3cpXG5cdFx0XHQudG8gKCk9PiBAd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0U2ltcGx5QmluZCgnd2luZG93V2lkdGgnKS5vZihAKVxuXHRcdFx0LnRvKCdjbGFzc05hbWUubW9iaWxlVmVyc2lvbicpLm9mKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0XHRcdC50cmFuc2Zvcm0gKHdpbmRvd1dpZHRoKT0+IGlmIHdpbmRvd1dpZHRoIDw9IEBvcHRpb25zLm1vYmlsZVdpZHRoIHRoZW4gJ19tb2JpbGVWZXJzaW9uJyBlbHNlICcnXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBDb2x1bW4gdmlzaWJpbGl0eVxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0Zm9yIGwsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnMgdGhlbiBkbyAoY29sdW1uKT0+XG5cdFx0U2ltcGx5QmluZCgnaGlkZGVuJykub2YoY29sdW1uKVxuXHRcdFx0LnRvKFwiaW5uZXJIVE1MLiN7Y29sdW1uLnNsdWd9XCIpLm9mKEBlbHMuZ2xvYmFsU3R5bGVzKVxuXHRcdFx0XHQudHJhbnNmb3JtIChpc0hpZGRlbik9PiBpZiBpc0hpZGRlbiB0aGVuIFwiI3tAdGFibGVJRH0gLl9fI3tjb2x1bW4uc2x1Z30ge2Rpc3BsYXk6bm9uZX1cIiBlbHNlICcnXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgUm93cyBhcnJheSByZW5kZXJpbmcvcHJvY2Vzc2luZ1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnYXJyYXk6dmlzaWJsZVJvd3MnKS5vZihAKVxuXHRcdC50byAocm93cywgcHJldlJvd3MpPT5cblx0XHRcdGlmIHByZXZSb3dzPy5sZW5ndGhcblx0XHRcdFx0Zm9yIHJvdyBpbiBwcmV2Um93c1xuXHRcdFx0XHRcdHJvdy52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFxuXHRcdFx0dHJ5XG5cdFx0XHRcdGZvciByb3cgaW4gcm93c1xuXHRcdFx0XHRcdEBwcm9jZXNzUm93KHJvdylcblx0XHRcdFx0XHRyb3cudmlzaWJsZSA9IHRydWVcblx0XHRcdGNhdGNoIGVyclxuXHRcdFx0XHRAc3RhdGUuZXJyb3IgPSBlcnJcblx0XHRcdFxuXHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9ICFyb3dzLmxlbmd0aFxuXHRcdFxuXHRcdC5hbmQudG8gKHJvd3MpPT5cblx0XHRcdHJldHVybiBpZiBub3QgQGhhc0JyZWFrZG93bkJhclxuXHRcdFx0Zm9yIHJvdyBpbiByb3dzXG5cdFx0XHRcdGlmIHJvdy5icmVha2Rvd25CYXJUb3RhbCA+IGxhcmdlc3RCcmVha2Rvd25Ub3RhbCBvciBub3QgbGFyZ2VzdEJyZWFrZG93blRvdGFsP1xuXHRcdFx0XHRcdGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IHJvdy5icmVha2Rvd25CYXJUb3RhbFxuXG5cdFx0XHRAbGFyZ2VzdEJyZWFrZG93blRvdGFsID0gbGFyZ2VzdEJyZWFrZG93blRvdGFsIG9yIDBcblxuXHRcdC5hbmQudG8oJ3RleHRDb250ZW50LnJvd1JhbmdlJykub2YoQGVscy5wYWdlU3RhdHVzKVxuXHRcdFx0LnRyYW5zZm9ybSAocm93cyk9PiBcIiN7QGF2YWlsYWJsZVJvd3MuaW5kZXhPZihyb3dzWzBdKSsxfS0je0BhdmFpbGFibGVSb3dzLmluZGV4T2Yocm93cy5zbGljZSgtMSlbMF0pKzF9XCJcblxuXG5cdFNpbXBseUJpbmQoJ2FycmF5OmFsbFJvd3MnKS5vZihAKS50byAocm93cyk9PlxuXHRcdEBzZWFyY2hDcml0ZXJpYSA9ICcnXG5cdFx0QGN1cnJlbnRQYWdlID0gMVxuXHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhcm93cy5sZW5ndGhcblx0XHRpZiBAc29ydEJ5IGlzIEBvcHRpb25zLnNvcnRCeVxuXHRcdFx0QHNvcnRCeSA9ICcnXG5cdFx0XHRAc29ydEJ5ID0gQG9wdGlvbnMuc29ydEJ5XG5cdFx0ZWxzZVxuXHRcdFx0QHNvcnRCeSA9ICcnXG5cblxuXG5cdFNpbXBseUJpbmQoJ2F2YWlsYWJsZVJvd3MnLCB7dXBkYXRlT25CaW5kOmZhbHNlLCB1cGRhdGVFdmVuSWZTYW1lOnRydWV9KS5vZihAKVxuXHRcdC50byAocm93cyk9PiBAY2FsY1BhZ2VDb3VudChyb3dzKVxuXHRcdC5hbmQudG8oJ3RleHRDb250ZW50LnRvdGFsUm93cycpLm9mKEBlbHMucGFnZVN0YXR1cykudHJhbnNmb3JtIChyb3dzKS0+IHJvd3MubGVuZ3RoXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFBhZ2luYXRpb25cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ3BhZ2VDb3VudCcpLm9mKEApXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25JdGVtcykgIyBSZW5kZXIgcGFnaW5hdGlvblxuXHRcdFx0LnRyYW5zZm9ybSAoY291bnQpPT5cblx0XHRcdFx0cGFnaW5hdGlvbkl0ZW1zID0gJydcblx0XHRcdFx0Zm9yIHZhbHVlIGluIFsxLi5jb3VudF1cblx0XHRcdFx0XHRwYWdpbmF0aW9uSXRlbXMgKz0gbWFya3VwLnBhZ2luYXRpb25JdGVtKEBtYXJrdXBBcmdzIHt2YWx1ZX0pIHVubGVzcyB2YWx1ZSBpcyAwXG5cblx0XHRcdFx0cmV0dXJuIHBhZ2luYXRpb25JdGVtc1xuXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMucGFnaW5hdGlvbikudHJhbnNmb3JtIChjb3VudCktPiBpZiBjb3VudCA+IDEgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcblxuXHRTaW1wbHlCaW5kKCdwYWdlQ291bnRSZWFsJykub2YoQClcblx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdFx0LnRyYW5zZm9ybSAocmVhbENvdW50KT0+XG5cdFx0XHRcdGlmIHJlYWxDb3VudCA8PSBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiAnJ1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0b3B0aW9ucyA9ICc8b3B0aW9uPi4uLjwvb3B0aW9uPidcblx0XHRcdFx0XHRvcHRpb25zICs9IFwiPG9wdGlvbj4je2luZGV4fTwvb3B0aW9uPlwiIGZvciBpbmRleCBpbiBbKEBvcHRpb25zLnBhZ2VDb3VudE1heCsxKS4ucmVhbENvdW50XVxuXHRcdFx0XHRcdHJldHVybiBvcHRpb25zXG5cdFx0XG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmhhc0V4dHJhJykub2YoQGVscy5wYWdpbmF0aW9uKS50cmFuc2Zvcm0gKHJlYWxDb3VudCk9PiBpZiByZWFsQ291bnQgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiAnaGFzX2V4dHJhJyBlbHNlICcnXG5cblxuXG5cdCMgPT09PSBFeHRyYSBJbmRpY2F0b3IvUGFnZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ3ZhbHVlJywgdXBkYXRlT25CaW5kOmZhbHNlKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhVGV4dClcblx0XHQuYW5kLnRvKCdjdXJyZW50UGFnZScpLm9mKEApXG5cblxuXG5cblx0IyA9PT09IEN1cnJlbnQgUGFnZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0U2ltcGx5QmluZCgnY3VycmVudFBhZ2UnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKEApXG5cdFx0LnRyYW5zZm9ybVNlbGYgKGN1cnJlbnRQYWdlKT0+XG5cdFx0XHRjdXJyZW50UGFnZSA9IGlmIGN1cnJlbnRQYWdlIGlzICcuLi4nIHRoZW4gMSBlbHNlIHBhcnNlRmxvYXQoY3VycmVudFBhZ2UpXG5cdFx0XHRyZXR1cm4gaWYgY3VycmVudFBhZ2UgPiBAcGFnZUNvdW50UmVhbCB0aGVuIEBwYWdlQ291bnRSZWFsIGVsc2UgY3VycmVudFBhZ2Vcblx0XHRcblx0XHQudG8oJ3ZhbHVlJykub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0XHQudHJhbnNmb3JtIChjdXJyZW50UGFnZSk9PiBpZiBjdXJyZW50UGFnZSA+IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuIGN1cnJlbnRQYWdlIGVsc2UgJy4uLidcblx0XHRcblx0XHQuYW5kLnRvIChjdXJyZW50UGFnZSk9PlxuXHRcdFx0QHNldFZpc2libGVQYWdlKGN1cnJlbnRQYWdlKVxuXHRcdFx0QHNldFBhZ2VJbmRpY2F0b3IoY3VycmVudFBhZ2UpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTZWFyY2ggRmllbGRcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFxuXHQjID09PT0gU2VhcmNoIEZpZWxkIHZhbHVlL21hcmt1cCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0aWYgQG9wdGlvbnMuc2VhcmNoLmxlbmd0aFxuXHRcdEBzZWFyY2hQYXJhbSA9IEBvcHRpb25zLnNlYXJjaFswXVxuXG5cdFx0U2ltcGx5QmluZCgnc2VhcmNoJykub2YoQG9wdGlvbnMpXG5cdFx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMuc2VhcmNoUGFyYW0pXG5cdFx0XHRcdC50cmFuc2Zvcm0gKG9wdGlvbnMpLT4gb3B0aW9ucy5tYXAoKG9wdGlvbiktPlwiPG9wdGlvbj4je29wdGlvbn08L29wdGlvbj5cIikuam9pbignJylcblxuXHRcdFNpbXBseUJpbmQoJ3ZhbHVlJykub2YoQGVscy5zZWFyY2hQYXJhbSlcblx0XHRcdC50bygnc2VhcmNoUGFyYW0nKS5vZihAKVxuXHRcdFx0XHQucGlwZSgnYXR0cjpwbGFjZWhvbGRlcicpLm9mKEBlbHMuc2VhcmNoQ3JpdGVyaWEpXG5cdFx0XHRcdFx0LnRyYW5zZm9ybSAob3B0aW9uKS0+IFwiRmlsdGVyIGJ5ICN7b3B0aW9ufVwiXG5cblxuXG5cdCMgPT09PSBUYWJsZSByZXN1bHRzIGZpbHRlciAmIGF2YWlhYmxlIHJvd3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ3ZhbHVlJykub2YoQGVscy5zZWFyY2hDcml0ZXJpYSkgIyBTZWFyY2gvRmlsdGVyXG5cdFx0LnRvKCdzZWFyY2hDcml0ZXJpYScsIHVwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSkub2YoQCkuYm90aFdheXMoKVxuXHRcdFx0LmNoYWluVG8gKHNlYXJjaENyaXRlcmlhKT0+XG5cdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSBAYWxsUm93c1xuXHRcdFx0XHR0YXJnZXRDb2x1bW4gPSBAb3B0aW9ucy5jb2x1bW5zW0BzZWFyY2hQYXJhbV1cblxuXHRcdFx0XHRpZiBzZWFyY2hDcml0ZXJpYSBhbmQgKHRhcmdldENvbHVtbiBvciBAYWxsUm93c1swXT9bQHNlYXJjaFBhcmFtXT8pXG5cdFx0XHRcdFx0cm93c1RvTWFrZUF2YWlsYWJsZSA9IHJvd3NUb01ha2VBdmFpbGFibGUuZmlsdGVyIChyb3cpPT5cblx0XHRcdFx0XHRcdHJvd1ZhbHVlID0gaWYgdGFyZ2V0Q29sdW1uPy5yYXdWYWx1ZUZvcm1hdHRlciB0aGVuIHRhcmdldENvbHVtbi5yYXdWYWx1ZUZvcm1hdHRlcihyb3dbQHNlYXJjaFBhcmFtXSkgZWxzZSByb3dbQHNlYXJjaFBhcmFtXVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJvd1ZhbHVlPy50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMgc2VhcmNoQ3JpdGVyaWEudG9Mb3dlckNhc2UoKVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnJvd0ZpbHRlclxuXHRcdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSByb3dzVG9NYWtlQXZhaWxhYmxlLmZpbHRlciAocm93KT0+XG5cdFx0XHRcdFx0XHRyb3dDbG9uZSA9IGV4dGVuZC5jbG9uZShyb3cpXG5cdFx0XHRcdFx0XHRyb3dDbG9uZVtuYW1lXSA9IGNvbHVtbi5yYXdWYWx1ZUZvcm1hdHRlcihyb3dDbG9uZVtuYW1lXSkgZm9yIG5hbWUsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnMgd2hlbiBjb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXJcblx0XHRcdFx0XHRcdHJldHVybiBAb3B0aW9ucy5yb3dGaWx0ZXIocm93Q2xvbmUpXG5cdFx0XHRcdFxuXHRcdFx0XHRAYXZhaWxhYmxlUm93cyA9IHJvd3NUb01ha2VBdmFpbGFibGVcblx0XHRcdFx0QGN1cnJlbnRQYWdlID0gMVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBTb3J0aW5nXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdzb3J0QnknLCB7dXBkYXRlRXZlbklmU2FtZTp0cnVlLCB1cGRhdGVPbkJpbmQ6ZmFsc2V9LCB0cnVlKS5vZihAKVxuXHRcdC50byAoY3VycmVudFNvcnQsIHByZXZTb3J0KT0+IGlmIGN1cnJlbnRTb3J0IG9yIHByZXZTb3J0XG5cdFx0XHRpZiBjdXJyZW50U29ydCBpcyBwcmV2U29ydCBhbmQgcHJldlNvcnRcblx0XHRcdFx0QHNvcnREaXJlY3Rpb24gKj0gLTFcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHNvcnREaXJlY3Rpb24gPSAtMVxuXG5cdFx0XHR0YXJnZXRDb2x1bW4gPSBpZiBjdXJyZW50U29ydCB0aGVuIGN1cnJlbnRTb3J0IGVsc2UgbnVsbFxuXHRcdFx0QGF2YWlsYWJsZVJvd3MgPSBAc29ydFJvd3MoQGF2YWlsYWJsZVJvd3MsIHRhcmdldENvbHVtbilcblx0XHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXHRcblx0aWYgQGVscy50YWJsZUhlYWRpbmcuY2hpbGRyZW4oJy5faXNTb3J0YWJsZScpLmxlbmd0aFxuXHRcdFNpbXBseUJpbmQoJ3NvcnRCeScsIHVwZGF0ZU9uQmluZDp0cnVlKS5vZihAKVxuXHRcdFx0LnRvKCdtdWx0aTpjbGFzc05hbWUuY3VycmVudFNvcnQnKS5vZihAZWxzLnRhYmxlSGVhZGluZy5jaGlsZHJlbignLl9pc1NvcnRhYmxlJykpXG5cdFx0XHRcdC50cmFuc2Zvcm0gKGN1cnJlbnQsIHByZXYsIGVsKS0+IGlmIGN1cnJlbnQgaXMgZWwuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgdGhlbiAnX2N1cnJlbnRTb3J0JyBlbHNlICcnXG5cblxuXG5cblx0U2ltcGx5QmluZCgnc29ydERpcmVjdGlvbicpLm9mKEApXG5cdFx0LnRvKCdjbGFzc05hbWUuc29ydERpcmVjdGlvbicpLm9mKEBlbHMudGFibGUpXG5cdFx0XHQudHJhbnNmb3JtIChzb3J0RGlyZWN0aW9uKS0+IGlmIHNvcnREaXJlY3Rpb24gaXMgLTEgdGhlbiAnZGVzYycgZWxzZSAnYXNjJ1xuXG5cblxuXG5cblx0UHJvbWlzZS5yZXNvbHZlKClcblxuIiwiZXhwb3J0IHNvcnRCeSA9IChjb2x1bW4pLT4gOyIsImltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudC1saXRlJ1xuaW1wb3J0IHt2ZXJzaW9ufSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9wYXJ0cy9kZWZhdWx0cydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAqIGFzIG1hcmt1cCBmcm9tICcuL3BhcnRzL21hcmt1cCdcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9wYXJ0cy9oZWxwZXJzJ1xuY3VycmVudElEID0gMFxuXG5jbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXJcblx0Y29uc3RydWN0b3I6IChAY29udGFpbmVyLCBvcHRpb25zPXt9KS0+XG5cdFx0c3VwZXIoKVxuXHRcdEBvcHRpb25zID0gZXh0ZW5kLmNsb25lLmRlZXBPbmx5KCdjb2x1bW5zJykoRGF0YVRhYmxlLmRlZmF1bHRzLCBvcHRpb25zKVxuXHRcdEBzdGF0ZSA9ICdsb2FkaW5nJzpmYWxzZSwgJ25vUmVzdWx0cyc6ZmFsc2UsICdlcnJvcic6ZmFsc2Vcblx0XHRASUQgPSArK2N1cnJlbnRJRFxuXHRcdEB0YWJsZUlEID0gXCJcXCMje0BvcHRpb25zLmJhc2VDbGFzc30tI3tASUR9XCJcblx0XHRAdmlzaWJsZVJvd3MgPSBbXVxuXHRcdEBhdmFpbGFibGVSb3dzID0gW11cblx0XHRAYWxsUm93cyA9IFtdXG5cdFx0QGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IDBcblx0XHRAc2VhcmNoQ3JpdGVyaWEgPSAnJ1xuXHRcdEBzZWFyY2hQYXJhbSA9ICcnXG5cdFx0QHNvcnRCeSA9IGlmIEBvcHRpb25zLnNvcnRCeSB0aGVuIEBvcHRpb25zLnNvcnRCeSBlbHNlICcnXG5cdFx0QHNvcnREaXJlY3Rpb24gPSAtMVxuXHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXG5cdFx0IyA9PT09IE1hcmt1cCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRAZWxzID0ge31cblx0XHRAZWxzLnRhYmxlT3V0ZXJ3cmFwID0gJChtYXJrdXAudGFibGVPdXRlcndyYXAgZXh0ZW5kKHtASUR9LCBAb3B0aW9ucykpXG5cdFx0QGVscy50YWJsZSA9ICQobWFya3VwLnRhYmxlKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLnRhYmxlSGVhZGluZyA9IEBlbHMudGFibGUuY2hpbGRyZW4oKS5maXJzdCgpLmNoaWxkcmVuKClcblx0XHRAZWxzLnRhYmxlQm9keSA9IEBlbHMudGFibGUuY2hpbGRyZW4oKS5sYXN0KClcblx0XHRAZWxzLm5vUmVzdWx0c01lc3NhZ2UgPSAkKG1hcmt1cC5ub1Jlc3VsdHMoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMubG9hZGluZ01lc3NhZ2UgPSAkKG1hcmt1cC5sb2FkaW5nKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLmVycm9yTWVzc2FnZSA9ICQobWFya3VwLmVycm9yKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLnBhZ2VTdGF0dXMgPSAkKG1hcmt1cC5wYWdlU3RhdHVzKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLnBhZ2luYXRpb24gPSAkKG1hcmt1cC5wYWdpbmF0aW9uKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLnBhZ2luYXRpb25JdGVtcyA9IEBlbHMucGFnaW5hdGlvbi5jaGlsZHJlbignLl9wYWdpbmF0aW9uSXRlbXMnKVxuXHRcdEBlbHMucGFnaW5hdGlvbkV4dHJhID0gQGVscy5wYWdpbmF0aW9uLmNoaWxkcmVuKCcuX2V4dHJhSW5kaWNhdG9yJylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdCA9IEBlbHMucGFnaW5hdGlvbkV4dHJhLmNoaWxkcmVuKCdzZWxlY3QnKVxuXHRcdEBlbHMucGFnaW5hdGlvbkV4dHJhVGV4dCA9IEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0LnByZXYoKVxuXHRcdEBlbHMuc2VhcmNoRmllbGQgPSAkKG1hcmt1cC5zZWFyY2hGaWVsZChAb3B0aW9ucykpLmluc2VydEJlZm9yZShAZWxzLnRhYmxlKVxuXHRcdEBlbHMuc2VhcmNoUGFyYW0gPSBAZWxzLnNlYXJjaEZpZWxkLmNoaWxkcmVuKCdzZWxlY3QnKVxuXHRcdEBlbHMuc2VhcmNoQ3JpdGVyaWEgPSBAZWxzLnNlYXJjaEZpZWxkLmNoaWxkcmVuKCdpbnB1dCcpXG5cdFx0QGVscy5nbG9iYWxTdHlsZXMgPSAkKCc8c3R5bGUgLz4nKS5wcmVwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblxuXHRcdEBlbHMudGFibGVIZWFkaW5nLmFwcGVuZChAZ2VuZXJhdGVIZWFkaW5nQ29sdW1ucygpKVxuXG5cdFx0QGVscy50YWJsZU91dGVyd3JhcC5hcHBlbmRUbyBAY29udGFpbmVyXG5cdFx0QGVscy50YWJsZS5kYXRhICdEYXRhVGFibGUnLCBAXG5cdFx0QGVscy50YWJsZVswXS5zdHlsZS5taW5XaWR0aCA9IFwiI3tAb3B0aW9ucy5taW5XaWR0aH1weFwiIGlmIEBvcHRpb25zLm1pbldpZHRoXG5cblxuXHRcdCMgPT09PSBFdmVudHMgJiBCaW5kaW5ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRQcm9taXNlLmJpbmQoQClcblx0XHRcdC50aGVuKEBhdHRhY2hFdmVudHMpXG5cdFx0XHQudGhlbihAYXR0YWNoQmluZGluZ3MpXG5cdFx0XHQudGhlbiAoKS0+IGlmIEBvcHRpb25zLmxvYWRPbkluaXQgdGhlbiBAbG9hZERhdGEoKVxuXG5cdFx0cmV0dXJuIEBcblxuXG5cblx0ZmV0Y2hEYXRhOiAoKS0+XG5cdFx0QHN0YXRlLmxvYWRpbmcgPSB0cnVlXG5cdFx0UHJvbWlzZS5yZXNvbHZlKClcblx0XHRcdC50aGVuICgpPT4gQG9wdGlvbnMuZGF0YS5jYWxsKEApXG5cdFx0XHQudGhlbiAoZGF0YSk9PlxuXHRcdFx0XHRAc3RhdGUubG9hZGluZyA9IEBzdGF0ZS5lcnJvciA9IGZhbHNlXG5cdFx0XHRcdHJldHVybiBkYXRhXG5cdFx0XHQuY2F0Y2ggKGVycik9PlxuXHRcdFx0XHRAc3RhdGUuZXJyb3IgPSBlcnJcblxuXHRzZXREYXRhOiAoZGF0YSktPlxuXHRcdEBhbGxSb3dzID0gZGF0YSBpZiBBcnJheS5pc0FycmF5KGRhdGEpXG5cblx0YXBwZW5kRGF0YTogKGRhdGEpLT5cblx0XHRAYWxsUm93cy5wdXNoKGRhdGEuLi4pXG5cblx0bG9hZERhdGE6ICgpLT5cblx0XHRAdW5wcm9jZXNzUm93KHJvdykgZm9yIHJvdyBpbiBAYWxsUm93cyBpZiBAYWxsUm93cy5sZW5ndGhcblx0XHRAZmV0Y2hEYXRhKCkudGhlbiAoZGF0YSk9PiBAc2V0RGF0YShkYXRhKVxuXG5cdHJlZnJlc2g6ICgpLT5cblx0XHRAYXZhaWxhYmxlUm93cyA9IEBhdmFpbGFibGVSb3dzXG5cdFx0QGN1cnJlbnRQYWdlID0gQGN1cnJlbnRQYWdlXG5cblx0bWFya3VwQXJnczogKGFyZ3NPYmplY3Q9e30pLT5cblx0XHRhcmdzT2JqZWN0LmJhc2VDbGFzcyA9IEBvcHRpb25zLmJhc2VDbGFzc1xuXHRcdHJldHVybiBhcmdzT2JqZWN0XG5cblxuaW1wb3J0ICogYXMgZ2VuZXJhbE1ldGhvZHMgZnJvbSAnLi9wYXJ0cy9tZXRob2RzJ1xuaW1wb3J0ICogYXMgZXZlbnRNZXRob2RzIGZyb20gJy4vcGFydHMvYXR0YWNoRXZlbnRzJ1xuaW1wb3J0ICogYXMgYmluZGluZ01ldGhvZHMgZnJvbSAnLi9wYXJ0cy9hdHRhY2hCaW5kaW5ncydcbmltcG9ydCAqIGFzIHVzZXJBY3Rpb25NZXRob2RzIGZyb20gJy4vcGFydHMvdXNlckFjdGlvbk1ldGhvZHMnXG5leHRlbmQgRGF0YVRhYmxlOjosIGdlbmVyYWxNZXRob2RzLCBldmVudE1ldGhvZHMsIGJpbmRpbmdNZXRob2RzLCB1c2VyQWN0aW9uTWV0aG9kc1xuXG5cbkRhdGFUYWJsZS52ZXJzaW9uID0gdmVyc2lvblxuRGF0YVRhYmxlLmhlbHBlcnMgPSBoZWxwZXJzXG5EYXRhVGFibGUubWFya3VwID0gbWFya3VwXG5EYXRhVGFibGUuZGVmYXVsdHMgPSBkZWZhdWx0c1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVcblxuXG5cblxuIl0sIm5hbWVzIjpbImlwQWRkcmVzcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiJCIsImdldCIsInRhYmxlT3V0ZXJ3cmFwIiwiSUQiLCJiYXNlQ2xhc3MiLCJtaW5XaWR0aCIsImhhc01vYmlsZSIsImNlbGxzSGF2ZVBhZGRpbmciLCJ0YWJsZSIsImFsaWdubWVudCIsImxvYWRpbmciLCJub1Jlc3VsdHMiLCJpdGVtU2luZ2xlTGFiZWwiLCJpdGVtUGx1cmFsTGFiZWwiLCJlcnJvciIsInBhZ2VTdGF0dXMiLCJzaG93UGFnZVN0YXR1cyIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uSXRlbSIsInZhbHVlIiwiaGVhZGluZ0NlbGwiLCJleHRyYUNsYXNzZXMiLCJzbHVnIiwiaWNvbiIsImxhYmVsIiwic3R5bGUiLCJyb3ciLCJyb3dJRCIsImNlbGxzIiwiZHJpbGxkb3duIiwicm93Q2VsbCIsImNvbHVtbiIsInNlYXJjaEZpZWxkIiwic2VhcmNoIiwibGVuZ3RoIiwiaXBEZXRhaWxzIiwiZXh0cmEiLCJpcERldGFpbHNJdGVtIiwiZmllbGRzIiwiZmllbGRzSXRlbSIsImVzY0hUTUwiLCJidXR0b24iLCJhY3Rpb24iLCJpc011bHRpIiwiYWN0aW9ucyIsImFjdGlvbnNPdmVybGF5IiwiRGF0YVRhYmxlIiwiZGVmYXVsdHMiLCJhY3Rpb25zSXRlbSIsImN1c3RvbUljb25TdHlsZSIsImNvbXBhcmVWYWx1ZXMiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJwYXJzZUZsb2F0IiwidG9nZ2xlQWN0aW9uc1BvcHVwIiwiYWN0aW9uc1BvcHVwJCIsImlzT3BlbiIsIm92ZXJsYXkkIiwiZGF0YSIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwibWFya3VwIiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsImRvY3VtZW50IiwiYm9keSIsIm9uZSIsImdldEJyZWFrZG93blRvdGFsIiwiYnJlYWtkb3duIiwiYnJlYWtkb3duS2V5cyIsIm1hcCIsImJyZWFrZG93bkl0ZW0iLCJyZWR1Y2UiLCJhIiwiYiIsIm5vcm1hbGl6ZUNvbHVtbnMiLCJjb2x1bW5zIiwiaSIsImoiLCJsZW4iLCJsZW4xIiwib3V0cHV0IiwicmVmIiwiQXJyYXkiLCJpc0FycmF5IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidHlwZSIsImdldEJyZWFrZG93bkJhcldpZHRoIiwibGFyZ2VzdCIsImJyZWFrZG93bkJhclRvdGFsIiwiZ2VuSGVhZGVyQ2VsbFN0eWxlIiwic3R5bGVTdHJpbmciLCJ3aWR0aCIsImdyb3ciLCJnZW5DZWxsU3R5bGUiLCJjb2xvciIsImNvbG9yTWFwcGluZyIsImNvbG9yVHlwZSIsImN1c3RvbVN0eWxlIiwiZ2VuQ2VsbENsYXNzbmFtZSIsImNsYXNzU3RyaW5nIiwic29ydGFibGUiLCJub0xhYmVsIiwiaXNMaW5rIiwibm9FbGxpcHNpcyIsInNob3dPdmVyZmxvdyIsImFsd2F5c0NlbnRlciIsImluY2x1ZGVzIiwiaWNvbk1hcHBpbmciLCJpY29uVHlwZSIsImNhbGNQYWdlQ291bnQiLCJyb3dzIiwicGFnZUNvdW50UmVhbCIsIk1hdGgiLCJjZWlsIiwib3B0aW9ucyIsInBlclBhZ2UiLCJwYWdlQ291bnQiLCJwYWdlQ291bnRNYXgiLCJjYWxjUGVyY2VudGFnZVN0cmluZyIsImNvbHVtblZhbHVlIiwiY29sdW1uTmFtZSIsImNvbHVtbkEiLCJjb2x1bW5CIiwiZm9ybXVsYSIsIm1hdGhPcGVyYXRvciIsInBlcmNlbnQiLCJwZXJjZW50YWdlVmFsdWUiLCJwZXJjZW50YWdlIiwiY29udmVydFRvUGVyY2VudCIsInNvcnRSb3dzIiwidGFyZ2V0Q29sdW1uIiwic29ydEJ5IiwiY3VzdG9tU29ydCIsInJhd1ZhbHVlIiwic29ydGVyIiwic2xpY2UiLCJyZXZlcnNlIiwic29ydEZuIiwicmF3VmFsdWVGb3JtYXR0ZXIiLCJhVmFsdWUiLCJiVmFsdWUiLCJzb3J0RGlyZWN0aW9uIiwic29ydCIsInNldFZpc2libGVQYWdlIiwidGFyZ2V0UGFnZSIsInJvd3NUb0hpZGUiLCJyb3dzVG9SZXZlYWwiLCJhdmFpbGFibGVSb3dzIiwidmlzaWJsZVJvd3MiLCJ2aXNpYmxlIiwicHVzaCIsImFwcGx5Iiwic2V0UGFnZUluZGljYXRvciIsIm1hdGNoZWRQYWdlRWwkIiwicGFnZUl0ZW1zJCIsImVscyIsImZpbmQiLCJlcSIsIm5vdCIsImdlbmVyYXRlSGVhZGluZ0NvbHVtbnMiLCJoYXNCcmVha2Rvd25CYXIiLCJPYmplY3QiLCJrZXlzIiwiZ2xvYmFsU3R5bGVzIiwiaW5uZXJIVE1MIiwibWFya3VwQXJncyIsImpvaW4iLCJ1cGRhdGVDb2x1bW5zIiwidXBkYXRlZENvbHVtbnMiLCJleHRlbmQiLCJkZWVwIiwiY3VycmVudFBhZ2UiLCJwcm9jZXNzUm93IiwicHJvY2Vzc2VkIiwiZ2VuZXJhdGVSb3ciLCJTaW1wbHlCaW5kIiwidXBkYXRlRXZlbklmU2FtZSIsIm9mIiwidG8iLCJpc1Zpc2libGUiLCJwcmV2VmFsdWUiLCJlbCIsImRldGFjaCIsInRhYmxlQm9keSIsInVwZGF0ZWRCcmVha2Rvd25XaWR0aCIsImJyZWFrZG93bkJhcldpZHRoIiwibGFyZ2VzdEJyZWFrZG93blRvdGFsIiwidHJhbnNmb3JtIiwiYW5kIiwiY2hhaW5UbyIsImJyZWFrZG93bkJhckVsIiwiZHJpbGxkb3duRWwiLCJpbmRleCIsInJlZjEiLCJyZWYyIiwiY29uZGl0aW9uIiwiY29uZGl0aW9uQWxsIiwidW5wcm9jZXNzUm93IiwidW5CaW5kQWxsIiwiZHJpbGxkb3duRWxzIiwicmVSZW5kZXJSb3ciLCJuZXdSb3dFbCIsInByZXZSb3dFbCIsImdlbmVyYXRlUm93TWFya3VwIiwicmVwbGFjZVdpdGgiLCJleHBhbmRCdXR0b24iLCJjaGlsZHJlbiIsImZpcnN0IiwibWF4Iiwic3ViUm93IiwiZHJpbGxkb3duT3BlbiIsIm9uY2UiLCJzZXRUaW1lb3V0IiwiYnV0dG9uSGVpZ2h0Iiwicm93SGVpZ2h0IiwiaGVpZ2h0IiwidG9wIiwidXBkYXRlT24iLCJ0aHJvdHRsZSIsIndpbmRvdyIsInBhcmVudFJvdyIsImlzU3ViIiwidW5pcXVlSUQiLCJkcmlsbGRvd25NYXJrdXBzIiwiZHJpbGxkb3duUm93IiwiY2VsbFZhbHVlIiwicm93Q2VsbHMiLCJnZW5lcmF0ZUlubGluZUZpZWxkcyIsImdlbmVyYXRlSXBEZXRhaWxzIiwiZ2VuZXJhdGVCcmVha2Rvd25CYXIiLCJnZW5lcmF0ZUJ1dHRvbiIsImJ1dHRvbkljb24iLCJnZW5lcmF0ZUFjdGlvbnMiLCJmb3JtYXR0ZXIiLCJkYXRhRmllbGRzIiwiYWN0aW9uc01hcmt1cCIsImJ1dHRvbk1hcmt1cCIsImV4dHJhTWFya3VwIiwiYXR0YWNoRXZlbnRzIiwib24iLCJldmVudCIsIiR0aGlzIiwiaXNCYWNrIiwiaXNFeHRyYSIsImlzTmV4dCIsInBhZ2VOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwiaGFzQ2xhc3MiLCJodG1sIiwidGFibGVIZWFkaW5nIiwidGV4dENvbnRlbnQiLCJidXR0b24kIiwiZGF0YUl0ZW0iLCJpdGVtSUQiLCJpdGVtSW5kZXgiLCJpdGVtUm93JCIsIm5leHQiLCJjbG9zZXN0IiwiYWxsUm93cyIsInBhcmVudCIsInRyaWdnZXIiLCJpdGVtUm93IiwiY29udGVudCQiLCJjb3VudHJ5JCIsImlzTG9hZGVkIiwidHJpZ2dlciQiLCJ3cmFwcGVyJCIsImlwRGF0YUZldGNoZXIiLCJ0aGVuIiwiYXR0YWNoQmluZGluZ3MiLCJsIiwic2V0dGluZ3MiLCJ0cmFja0FycmF5Q2hpbGRyZW4iLCJzdGF0ZSIsIm5vUmVzdWx0c01lc3NhZ2UiLCJsb2FkaW5nTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsImhhc0Vycm9yIiwiZXJyIiwiY29uc29sZSIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsIm1vYmlsZVdpZHRoIiwiaXNIaWRkZW4iLCJ0YWJsZUlEIiwicHJldlJvd3MiLCJpbmRleE9mIiwic2VhcmNoQ3JpdGVyaWEiLCJ1cGRhdGVPbkJpbmQiLCJwYWdpbmF0aW9uSXRlbXMiLCJjb3VudCIsInBhZ2luYXRpb25FeHRyYVNlbGVjdCIsInJlYWxDb3VudCIsInBhZ2luYXRpb25FeHRyYVRleHQiLCJ0cmFuc2Zvcm1TZWxmIiwic2VhcmNoUGFyYW0iLCJvcHRpb24iLCJwaXBlIiwiYm90aFdheXMiLCJyb3dzVG9NYWtlQXZhaWxhYmxlIiwiZmlsdGVyIiwicm93VmFsdWUiLCJ0b1N0cmluZyIsInJvd0ZpbHRlciIsIm5hbWUiLCJyb3dDbG9uZSIsImNsb25lIiwiY3VycmVudFNvcnQiLCJwcmV2U29ydCIsImN1cnJlbnQiLCJwcmV2IiwiY3VycmVudElEIiwiRXZlbnRFbWl0dGVyIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJkZWVwT25seSIsImxhc3QiLCJwYWdpbmF0aW9uRXh0cmEiLCJpbnNlcnRCZWZvcmUiLCJwcmVwZW5kVG8iLCJhcHBlbmQiLCJiaW5kIiwibG9hZE9uSW5pdCIsImxvYWREYXRhIiwiZmV0Y2hEYXRhIiwiY2FsbCIsImNhdGNoIiwic2V0RGF0YSIsImFwcGVuZERhdGEiLCJyZWZyZXNoIiwiYXJnc09iamVjdCIsInByb3RvdHlwZSIsImdlbmVyYWxNZXRob2RzIiwiZXZlbnRNZXRob2RzIiwiYmluZGluZ01ldGhvZHMiLCJ1c2VyQWN0aW9uTWV0aG9kcyIsInZlcnNpb24iLCJoZWxwZXJzIl0sIm1hcHBpbmdzIjoiNDZCQUFBLGVBQ0M7YUFBVyxFQUFYO2tCQUNnQixFQURoQjtjQUVZLENBRlo7aUJBR2UsR0FIZjtzQkFJb0IsS0FKcEI7ZUFLYSxJQUxiO2dCQU1jLElBTmQ7YUFPVyxFQVBYO1lBUVUsRUFSVjtnQkFTYyxFQVRkO2VBVWEsV0FWYjtvQkFXa0IsSUFYbEI7WUFZVSxFQVpWO2VBYWEsTUFiYjthQWNXLEtB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
