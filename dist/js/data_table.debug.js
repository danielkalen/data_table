(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('smart-extend'),require('event-lite'),require('jquery'),require('escape-html'),require('@danielkalen/simplybind')):typeof define==='function'&&define.amd?define(['smart-extend','event-lite','jquery','escape-html','@danielkalen/simplybind'],f):(g=g||self,g['@danielkalen/data_table']=f(g.extend$1,g.EventEmitter,g.$$1,g.escHTML,g.SimplyBind));}(this,function(extend$1, EventEmitter, $$1, escHTML, SimplyBind){'use strict';extend$1=extend$1&&extend$1.hasOwnProperty('default')?extend$1['default']:extend$1;EventEmitter=EventEmitter&&EventEmitter.hasOwnProperty('default')?EventEmitter['default']:EventEmitter;$$1=$$1&&$$1.hasOwnProperty('default')?$$1['default']:$$1;escHTML=escHTML&&escHTML.hasOwnProperty('default')?escHTML['default']:escHTML;SimplyBind=SimplyBind&&SimplyBind.hasOwnProperty('default')?SimplyBind['default']:SimplyBind;var version = "2.10.0";var defaults = {
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
    this.options = extend$1.clone.deepOnly('columns')(DataTable.defaults, options);
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
    this.els.tableOuterwrap = $$1(tableOuterwrap(extend$1({
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
extend$1(DataTable.prototype, generalMethods, eventMethods, bindingMethods, userActionMethods);
DataTable.version = version;
DataTable.helpers = helpers;
DataTable.markup = markup;
DataTable.defaults = defaults;
var DataTable$1 = DataTable;return DataTable$1;}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV90YWJsZS5kZWJ1Zy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL21hcmt1cC5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL2hlbHBlcnMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9tZXRob2RzL2dlbmVyYWwuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9tZXRob2RzL2NvbHVtbi5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL21ldGhvZHMvcm93LmNvZmZlZSIsIi4uLy4uL3NyYy9jb2ZmZWUvcGFydHMvbWV0aG9kcy9zcGVjaWFsQ2VsbHMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9hdHRhY2hFdmVudHMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9hdHRhY2hCaW5kaW5ncy5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL3VzZXJBY3Rpb25NZXRob2RzLmNvZmZlZSIsIi4uLy4uL3NyYy9jb2ZmZWUvaW5kZXguY29mZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFxuXHQncGVyUGFnZSc6IDIwXG5cdCdwYWdlQ291bnRNYXgnOiAxMFxuXHQnbWluV2lkdGgnOiAwXG5cdCdtb2JpbGVXaWR0aCc6IDczNlxuXHQnY2VsbHNIYXZlUGFkZGluZyc6IGZhbHNlXG5cdCdoYXNNb2JpbGUnOiB0cnVlXG5cdCdsb2FkT25Jbml0JzogdHJ1ZVxuXHQnY29sdW1ucyc6IFtdXG5cdCdzZWFyY2gnOiBbXVxuXHQncGVyY2VudGFnZSc6IHt9XG5cdCdiYXNlQ2xhc3MnOiAnRGF0YVRhYmxlJ1xuXHQnc2hvd1BhZ2VTdGF0dXMnOiB0cnVlXG5cdCdzb3J0QnknOiAnJ1xuXHQnYWxpZ25tZW50JzogJ2xlZnQnXG5cdCdhY3Rpb25zJzogZmFsc2Vcblx0J2lwRGF0YUZldGNoZXInOiAoaXBBZGRyZXNzKS0+IG5ldyBQcm9taXNlIChyZXNvbHZlKS0+ICQuZ2V0IFwiaHR0cDovL2lwaW5mby5pby8je2lwQWRkcmVzc31cIiwgcmVzb2x2ZSwgJ0pTT04nXG4iLCJpbXBvcnQgRGF0YVRhYmxlIGZyb20gJy4uLydcbmltcG9ydCBlc2NIVE1MIGZyb20gJ2VzY2FwZS1odG1sJ1xuXG5leHBvcnQgdGFibGVPdXRlcndyYXAgPSAoe0lELCBiYXNlQ2xhc3MsIG1pbldpZHRoLCBoYXNNb2JpbGUsIGNlbGxzSGF2ZVBhZGRpbmd9KS0+IFwiXG5cdDxkaXYgaWQ9JyN7YmFzZUNsYXNzfS0je0lEfScgY2xhc3M9JyN7YmFzZUNsYXNzfS1vdXRlcndyYXAge3tsb2FkaW5nfX0ge3tub1Jlc3VsdHN9fSB7e2hhc0Vycm9yfX1cblx0XHQje2lmIG1pbldpZHRoIHRoZW4gJ19oYXNNaW5XaWR0aCcgZWxzZSAnJ31cblx0XHQje2lmIGhhc01vYmlsZSB0aGVuICd7e21vYmlsZVZlcnNpb259fScgZWxzZSAnJ31cblx0XHQje2lmIGNlbGxzSGF2ZVBhZGRpbmcgdGhlbiAnX2NlbGxzSGF2ZVBhZGRpbmcnIGVsc2UgJyd9XG5cdCc+PC9kaXY+XG5cIlxuXG5leHBvcnQgdGFibGUgPSAoe2Jhc2VDbGFzcywgYWxpZ25tZW50fSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30gYWxpZ25tZW50LS0tI3thbGlnbm1lbnR9IHNvcnREaXJlY3Rpb24tLS17e3NvcnREaXJlY3Rpb259fSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmcnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmctcm93Jz48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keSc+PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgbG9hZGluZyA9ICh7YmFzZUNsYXNzfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZyB7e2lzVmlzaWJsZX19Jz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pbm5lcndyYXAnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctaWNvbic+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy10ZXh0Jz5Mb2FkaW5nPC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgbm9SZXN1bHRzID0gKHtiYXNlQ2xhc3MsIGl0ZW1TaW5nbGVMYWJlbD0nSXRlbScsIGl0ZW1QbHVyYWxMYWJlbD1pdGVtU2luZ2xlTGFiZWwrJ3MnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzIHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtaW5uZXJ3cmFwJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtaWNvbic+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQtdGl0bGUnPk5vICN7aXRlbVNpbmdsZUxhYmVsfXMgdG8gRGlzcGxheTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQtc3VidGl0bGUnPlRoZXJlIGFyZSBubyBtYXRjaGluZyAje2l0ZW1QbHVyYWxMYWJlbH0gZm9yIHRoZSBzZWFyY2ggcXVlcnkgeW91J3ZlIHR5cGVkLjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgZXJyb3IgPSAoe2Jhc2VDbGFzc30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yIHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1lcnJvci1pbm5lcndyYXAnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWljb24nPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC10aXRsZSc+QSBGYXRhbCBFcnJvciBoYXMgT2NjdXJlZDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC1zdWJ0aXRsZSc+UmVwb3J0IHRoZSBmb2xsb3dpbmcgdG8gdGhlIGFkbWluOjxiciAvPlxcXCJ7e2Vycm9yTWVzc2FnZX19XFxcIjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgcGFnZVN0YXR1cyA9ICh7YmFzZUNsYXNzLCBzaG93UGFnZVN0YXR1c30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2VTdGF0dXMgI3tpZiBzaG93UGFnZVN0YXR1cyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnfSc+XG5cdFx0U2hvd2luZyB7e3Jvd1JhbmdlfX0gb2Yge3t0b3RhbFJvd3N9fVxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHBhZ2luYXRpb24gPSAoe2Jhc2VDbGFzc30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24ge3toYXNFeHRyYX19IHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtIF9iYWNrJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtc3dyYXAgX3BhZ2luYXRpb25JdGVtcyc+PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfZXh0cmFJbmRpY2F0b3InPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tc2VsZWN0Jz48L3NlbGVjdD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfbmV4dCc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHBhZ2luYXRpb25JdGVtID0gKHtiYXNlQ2xhc3MsIHZhbHVlfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5leHBvcnQgaGVhZGluZ0NlbGwgPSAoe2Jhc2VDbGFzcywgZXh0cmFDbGFzc2VzPScnLCBzbHVnLCBpY29uPScnLCBsYWJlbCwgc3R5bGU9Jyd9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsICN7ZXh0cmFDbGFzc2VzfSBfXyN7c2x1Z30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1pY29uPScje2ljb259JyAje3N0eWxlfT5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZy1yb3ctY2VsbC10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHJvdyA9ICh7YmFzZUNsYXNzLCByb3dJRCwgY2VsbHMsIGRyaWxsZG93bj0nJ30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93IF90YWJsZVJvdyB7e2RyaWxsZG93blN0YXRlfX0nIGRhdGEtcm93LWlkPScje3Jvd0lEfSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWV4cGFuZERyaWxsZG93biBfZXhwYW5kRHJpbGxkb3duJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24taWNvbic+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0I3tjZWxsc31cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctZHJpbGxkb3duIF90YWJsZVJvd0RyaWxsZG93bic+XG5cdFx0XHQje2RyaWxsZG93bn1cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG5cbmV4cG9ydCByb3dDZWxsID0gKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgbGFiZWwsIGNvbHVtbiwgc2x1ZywgdmFsdWUsIHN0eWxlPScnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctY2VsbCBfXyN7c2x1Z30gI3tleHRyYUNsYXNzZXN9JyBkYXRhLXNsdWc9JyN7c2x1Z30nIGRhdGEtY29sdW1uPScje2NvbHVtbn0nICN7c3R5bGV9PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsLWlubmVyd3JhcCcgdGl0bGU9JyN7bGFiZWx9Jz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cblxuZXhwb3J0IHNlYXJjaEZpZWxkID0gKHtiYXNlQ2xhc3MsIHNlYXJjaH0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaCAje2lmIHNlYXJjaD8ubGVuZ3RoIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHQ8c2VsZWN0IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLXNlbGVjdCc+PC9zZWxlY3Q+XG5cdFx0PGlucHV0IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLWlucHV0JyAvPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0VHJpZ2dlcic+PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5cblxuZXhwb3J0IGlwRGV0YWlscyA9ICh7YmFzZUNsYXNzLCBpcEFkZHJlc3MsIGV4dHJhPScnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzIF9pcERldGFpbHMnIGRhdGEtaXA9JyN7aXBBZGRyZXNzfSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy10cmlnZ2VyIF9pcERldGFpbHMtdHJpZ2dlcic+PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50Jz5Mb2FkaW5nIElQIERldGFpbHM8L2Rpdj5cblx0PC9kaXY+XG5cdCN7ZXh0cmF9XG5cIlxuXG5leHBvcnQgaXBEZXRhaWxzSXRlbSA9ICh7YmFzZUNsYXNzLCBsYWJlbCwgdmFsdWV9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtJz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzLWNvbnRlbnQtaXRlbS1sYWJlbCc+I3tsYWJlbH06IDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLXZhbHVlJz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cbmV4cG9ydCBmaWVsZHMgPSAoe2Jhc2VDbGFzcywgZmllbGRzfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cCc+I3tmaWVsZHN9PC9kaXY+XG5cIlxuXG5leHBvcnQgZmllbGRzSXRlbSA9ICh7YmFzZUNsYXNzLCBsYWJlbCx2YWx1ZX0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbS1sYWJlbCc+I3tsYWJlbH06IDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwLWl0ZW0tdmFsdWUnPiN7ZXNjSFRNTCB2YWx1ZX08L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG5cblxuXG5leHBvcnQgYnV0dG9uID0gKHtiYXNlQ2xhc3MsIGFjdGlvbiwgaWNvbj0nJywgaXNNdWx0aX0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbiBfYWN0aW9uQnV0dG9uICN7aWYgaXNNdWx0aSB0aGVuICdfaXNNdWx0aScgZWxzZSAnJ30nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1idXR0b24taWNvbic+I3tpY29ufTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cbmV4cG9ydCBhY3Rpb25zID0gKHtiYXNlQ2xhc3MsIGFjdGlvbnN9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zJz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cCc+I3thY3Rpb25zfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cbmV4cG9ydCBhY3Rpb25zT3ZlcmxheSA9ICgpLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tEYXRhVGFibGUuZGVmYXVsdHMuYmFzZUNsYXNzfS1hY3Rpb25zLW92ZXJsYXknPjwvZGl2PlxuXCJcblxuZXhwb3J0IGFjdGlvbnNJdGVtID0gKHtiYXNlQ2xhc3MsIGFjdGlvbiwgaWNvbiwgbGFiZWwsIGN1c3RvbUljb25TdHlsZT0nJ30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAtaXRlbSBfYWN0aW9uQnV0dG9uIF9zdWJBY3Rpb25CdXR0b24nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nIHN0eWxlPScje2N1c3RvbUljb25TdHlsZX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0tdGV4dCc+I3tsYWJlbH08L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi9tYXJrdXAnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cblxuZXhwb3J0IGNvbXBhcmVWYWx1ZXMgPSAodmFsdWVBLCB2YWx1ZUIpLT4gc3dpdGNoXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyB0eXBlb2YgdmFsdWVCXG5cdFx0dmFsdWVBIGlzIHZhbHVlQlxuXHRcblx0d2hlbiB0eXBlb2YgdmFsdWVBIGlzICdzdHJpbmcnXG5cdFx0dmFsdWVBIGlzICcnK3ZhbHVlQlxuXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnbnVtYmVyJ1xuXHRcdHZhbHVlQSBpcyBwYXJzZUZsb2F0KHZhbHVlQilcblxuXG5leHBvcnQgdG9nZ2xlQWN0aW9uc1BvcHVwID0gKGFjdGlvbnNQb3B1cCQpLT5cblx0aXNPcGVuID0gYWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nXG5cblx0aWYgaXNPcGVuXG5cdFx0YWN0aW9uc1BvcHVwJC5kYXRhKCdvdmVybGF5JykucmVtb3ZlKClcblx0XHRhY3Rpb25zUG9wdXAkLnJlbW92ZUNsYXNzICdpc192aXNpYmxlJ1xuXHRlbHNlXG5cdFx0YWN0aW9uc1BvcHVwJC5kYXRhICdvdmVybGF5Jywgb3ZlcmxheSQgPSAkKG1hcmt1cC5hY3Rpb25zT3ZlcmxheSgpKVxuXHRcdGFjdGlvbnNQb3B1cCQuYWRkQ2xhc3MgJ2lzX3Zpc2libGUnXG5cdFx0b3ZlcmxheSQuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSkub25lICdjbGljaycsICgpLT4gdG9nZ2xlQWN0aW9uc1BvcHVwKGFjdGlvbnNQb3B1cCQpXG5cblx0YWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nLCAhaXNPcGVuXG5cblxuZXhwb3J0IGdldEJyZWFrZG93blRvdGFsID0gKGJyZWFrZG93biwgYnJlYWtkb3duS2V5cyktPiBzd2l0Y2hcblx0d2hlbiBicmVha2Rvd25LZXlzLmxlbmd0aCBpcyAwIHRoZW4gMFxuXHRlbHNlXG5cdFx0YnJlYWtkb3duS2V5c1xuXHRcdFx0Lm1hcCAoYnJlYWtkb3duSXRlbSktPiBicmVha2Rvd25bYnJlYWtkb3duSXRlbV1cblx0XHRcdC5yZWR1Y2UgKGEsYiktPiBhK2JcblxuXG5cbmV4cG9ydCBub3JtYWxpemVDb2x1bW5zID0gKGNvbHVtbnMpLT5cblx0aWYgbm90IEFycmF5LmlzQXJyYXkoY29sdW1ucylcblx0XHRvdXRwdXQgPSBjb2x1bW5zXG5cdGVsc2Vcblx0XHRvdXRwdXQgPSB7fVxuXHRcdGlmIHR5cGVvZiBjb2x1bW5zWzBdIGlzICdzdHJpbmcnXG5cdFx0XHRvdXRwdXRbbGFiZWxdID0ge2xhYmVsfSBmb3IgbGFiZWwgaW4gY29sdW1uc1xuXHRcdFxuXHRcdGVsc2UgaWYgY29sdW1uc1swXT8ubGFiZWxcblx0XHRcdG91dHB1dFtjb2x1bW4ubGFiZWxdID0gY29sdW1uIGZvciBjb2x1bW4gaW4gY29sdW1uc1xuXG5cblx0Zm9yIGxhYmVsLGNvbHVtbiBvZiBvdXRwdXRcblx0XHRjb2x1bW4ubGFiZWwgPz0gbGFiZWxcblx0XHRjb2x1bW4uc2x1ZyA/PSBjb2x1bW4ubGFiZWwudG9Mb3dlckNhc2UoKS5yZXBsYWNlIC9cXFcvZywgJ18nXG5cdFx0Y29sdW1uLnR5cGUgPz0gJ3RleHQnXG5cblx0cmV0dXJuIG91dHB1dCBcblxuXG5leHBvcnQgZ2V0QnJlYWtkb3duQmFyV2lkdGggPSAocm93LCBsYXJnZXN0KS0+XG5cdChyb3cuYnJlYWtkb3duQmFyVG90YWwgLyBsYXJnZXN0KSAqICgxMDAgLSAxOClcblxuXG5leHBvcnQgZ2VuSGVhZGVyQ2VsbFN0eWxlID0gKGNvbHVtbiktPlxuXHRzdHlsZVN0cmluZyA9ICcnXG5cblx0aWYgY29sdW1uLndpZHRoXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJtYXgtd2lkdGg6ICN7Y29sdW1uLndpZHRofTtcIlxuXHRcblx0aWYgY29sdW1uLmdyb3cgPj0gMFxuXHRcdHN0eWxlU3RyaW5nICs9IFwiZmxleC1ncm93OiAje2NvbHVtbi5ncm93fTtcIlxuXG5cdHJldHVybiBpZiBzdHlsZVN0cmluZyB0aGVuIFwic3R5bGU9JyN7c3R5bGVTdHJpbmd9J1wiIGVsc2UgJydcblxuXG5cbmV4cG9ydCBnZW5DZWxsU3R5bGUgPSAoY29sdW1uKS0+XG5cdHN0eWxlU3RyaW5nID0gJydcblxuXHRpZiBjb2x1bW4ud2lkdGhcblx0XHRzdHlsZVN0cmluZyArPSBcIm1heC13aWR0aDogI3tjb2x1bW4ud2lkdGh9O1wiXG5cblx0aWYgY29sdW1uLmNvbG9yXG5cdFx0Y29sb3IgPSBAY29sb3JNYXBwaW5nKGNvbHVtbi5jb2xvciwgY29sdW1uLmNvbG9yVHlwZSlcblx0XHRzdHlsZVN0cmluZyArPSBcImNvbG9yOiAje2NvbG9yfTtcIlxuXG5cdGlmIGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcdHN0eWxlU3RyaW5nICs9IGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcblx0aWYgY29sdW1uLmdyb3cgPj0gMFxuXHRcdHN0eWxlU3RyaW5nICs9IFwiZmxleC1ncm93OiAje2NvbHVtbi5ncm93fTtcIlxuXG5cdHJldHVybiBpZiBzdHlsZVN0cmluZyB0aGVuIFwic3R5bGU9JyN7c3R5bGVTdHJpbmd9J1wiIGVsc2UgJydcblxuXG5cblxuZXhwb3J0IGdlbkNlbGxDbGFzc25hbWUgPSAoY29sdW1uKS0+XG5cdGNsYXNzU3RyaW5nID0gJydcblx0XG5cdGlmIGNvbHVtbi5zb3J0YWJsZVxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzU29ydGFibGUge3tjdXJyZW50U29ydH19J1xuXHRcblx0aWYgY29sdW1uLm5vTGFiZWxcblx0XHRjbGFzc1N0cmluZyArPSAnIF9ub0xhYmVsJ1xuXHRcblx0aWYgY29sdW1uLmlzTGlua1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzTGluaydcblx0XG5cdGlmIGNvbHVtbi5ub0VsbGlwc2lzXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9FbGxpcHNpcydcblx0XG5cdGlmIGNvbHVtbi5zaG93T3ZlcmZsb3dcblx0XHRjbGFzc1N0cmluZyArPSAnIF9zaG93T3ZlcmZsb3cnXG5cdFxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjbGFzc1N0cmluZyArPSAnIF9oYXNDb2xvcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdidXR0b24nIG9yIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnV0dG9uJ1xuXHRcdGNvbHVtbi5hbHdheXNDZW50ZXIgPSB0cnVlXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnJlYWtkb3duQmFyJ1xuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0lwRGV0YWlscydcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNGaWVsZHMnXG5cdFxuXHRpZiBjb2x1bW4uYWx3YXlzQ2VudGVyXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfYWx3YXlzQ2VudGVyJ1xuXG5cdHJldHVybiBjbGFzc1N0cmluZ1xuXG5cblxuXG5cblxuXG5leHBvcnQgY29sb3JNYXBwaW5nID0gKHZhbHVlLCBjb2xvclR5cGU9J25hbWUnKS0+IHN3aXRjaCBjb2xvclR5cGVcblx0d2hlbiAnYnJvd3NlcicgdGhlbiBzd2l0Y2hcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdGaXJlZm94JyB0aGVuIEBjb2xvck1hcHBpbmcoJ29yYW5nZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQ2hyb21lJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2dyZWVuJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdTYWZhcmknIHRoZW4gQGNvbG9yTWFwcGluZygnYmx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnTW9iaWxlIFNhZmFyaScgdGhlbiBAY29sb3JNYXBwaW5nKCdibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdJRScgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGJsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0VkZ2UnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdPcGVyYScgdGhlbiBAY29sb3JNYXBwaW5nKCdyZWQnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0FuZHJvaWQnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRncmVlbicpXG5cdFx0ZWxzZSAndW5rbm93bidcblx0XG5cdFxuXHR3aGVuICdwbGF0Zm9ybScgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdNYWMgT1MgWCcgdGhlbiBAY29sb3JNYXBwaW5nKCdibGFjaycpXG5cdFx0d2hlbiAnV2luZG93cycgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGJsdWUnKVxuXHRcdHdoZW4gJ1dpbmRvd3MgUGhvbmUnIHRoZW4gQGNvbG9yTWFwcGluZygncHVycGxlJylcblx0XHR3aGVuICdMaW51eCcgdGhlbiBAY29sb3JNYXBwaW5nKCdkYXJreWVsbG93Jylcblx0XHR3aGVuICdpT1MnIHRoZW4gQGNvbG9yTWFwcGluZygnYmxhY2snKVxuXHRcdHdoZW4gJ0FuZHJvaWQnIHRoZW4gQGNvbG9yTWFwcGluZyhcImxpZ2h0Z3JlZW5cIilcblx0XHRlbHNlICd1bmtub3duJ1xuXHRcblx0d2hlbiAnc2F0aXNmYWN0aW9uJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ0V4Y2VsbGVudCcgdGhlbiBAY29sb3JNYXBwaW5nKCdncmVlbicpXG5cdFx0d2hlbiAnTm9ybWFsJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3llbGxvdycpXG5cdFx0d2hlbiAnUG9vcicgdGhlbiBAY29sb3JNYXBwaW5nKCdyZWQnKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cblx0XG5cdHdoZW4gJ25hbWUnIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnb3JhbmdlJyB0aGVuICcjZWU2ZjBlJ1xuXHRcdHdoZW4gJ2dyZWVuJyB0aGVuICcjMDBhZDA5J1xuXHRcdHdoZW4gJ2JsdWUnIHRoZW4gJyM0Nzg4ZjMnXG5cdFx0d2hlbiAneWVsbG93JyB0aGVuICcjZWFiNzFlJ1xuXHRcdHdoZW4gJ3JlZCcgdGhlbiAnI2NjNDgyMCdcblx0XHR3aGVuICdibGFjaycgdGhlbiAnIzE4MTgxOCdcblx0XHR3aGVuICdwdXJwbGUnIHRoZW4gJyNhMDIwYmEnXG5cdFx0d2hlbiAnbGlnaHRibHVlJyB0aGVuICcjMGNiM2VlJ1xuXHRcdHdoZW4gJ2xpZ2h0Z3JlZW4nIHRoZW4gJyM3OGMyNTcnXG5cdFx0d2hlbiAnZGFya3llbGxvdycgdGhlbiAnI2U4YWMwMSdcblxuXHRlbHNlIHZhbHVlXG5cblxuXG5cblxuXG5leHBvcnQgaWNvbk1hcHBpbmcgPSAodmFsdWUsIGljb25UeXBlKS0+IHN3aXRjaCBpY29uVHlwZVxuXHR3aGVuICdicm93c2VyJ1xuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiAnIydcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiAnJSdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ1NhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gJyQnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdJRScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0VkZ2UnIHRoZW4gJyYnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdPcGVyYScgdGhlbiAnXCInXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuICcmIzAzOTsnXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnZGV2aWNlJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRGVza3RvcCcgdGhlbiAnISdcblx0XHRcdHdoZW4gJ1RhYmxldCcgdGhlbiAnNydcblx0XHRcdHdoZW4gJ01vYmlsZScgdGhlbiAnNidcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdwbGF0Zm9ybSdcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ01hYyBPUyBYJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnV2luZG93cycgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ1dpbmRvd3MgUGhvbmUnIHRoZW4gJyknXG5cdFx0XHR3aGVuICdMaW51eCcgdGhlbiAnKydcblx0XHRcdHdoZW4gJ2lPUycgdGhlbiAnKidcblx0XHRcdHdoZW4gJ0FuZHJvaWQnIHRoZW4gXCImIzAzOTtcIlxuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbidcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ0V4Y2VsbGVudCcgdGhlbiAnWydcblx0XHRcdHdoZW4gJ05vcm1hbCcgdGhlbiAnQCdcblx0XHRcdHdoZW4gJ1Bvb3InIHRoZW4gJz8nXG5cdFx0XHRlbHNlICc0J1xuXG5cdGVsc2UgJzQnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCBjYWxjUGFnZUNvdW50ID0gKHJvd3MpLT5cblx0QHBhZ2VDb3VudFJlYWwgPSBNYXRoLmNlaWwgcm93cy5sZW5ndGgvQG9wdGlvbnMucGVyUGFnZVxuXHRAcGFnZUNvdW50ID0gaWYgQHBhZ2VDb3VudFJlYWwgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSBAcGFnZUNvdW50UmVhbFxuXG5cblxuXG5cbmV4cG9ydCBjYWxjUGVyY2VudGFnZVN0cmluZyA9IChjb2x1bW5WYWx1ZSwgY29sdW1uTmFtZSwgcm93KS0+XG5cdGZvcm11bGEgPSBAb3B0aW9ucy5wZXJjZW50YWdlW2NvbHVtbk5hbWVdXG5cdGNvbHVtbkEgPSBmb3JtdWxhWzBdXG5cdGNvbHVtbkIgPSBmb3JtdWxhWzJdXG5cdG1hdGhPcGVyYXRvciA9IGZvcm11bGFbMV1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSBzd2l0Y2ggbWF0aE9wZXJhdG9yXG5cdFx0d2hlbiAnKicgdGhlbiByb3dbY29sdW1uQV0gKiByb3dbY29sdW1uQl1cblx0XHR3aGVuICcvJyB0aGVuIHJvd1tjb2x1bW5BXSAvIHJvd1tjb2x1bW5CXVxuXHRcdHdoZW4gJysnIHRoZW4gcm93W2NvbHVtbkFdICsgcm93W2NvbHVtbkJdXG5cdFx0d2hlbiAnLScgdGhlbiByb3dbY29sdW1uQV0gLSByb3dbY29sdW1uQl1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSAwIGlmIHBlcmNlbnRhZ2VWYWx1ZSBpcyBJbmZpbml0eVxuXHRwZXJjZW50ID0gY29udmVydFRvUGVyY2VudChwZXJjZW50YWdlVmFsdWUpXG5cdHJldHVybiBcIiN7Y29sdW1uVmFsdWV9ICgje3BlcmNlbnR9KVwiXG5cblxuXG5cblxuXG5leHBvcnQgc29ydFJvd3MgPSAocm93cywgdGFyZ2V0Q29sdW1uPUBvcHRpb25zLnNvcnRCeSktPiBzd2l0Y2hcblx0d2hlbiB0YXJnZXRDb2x1bW4gaXMgJysnIHRoZW4gcm93c1xuXHR3aGVuIHRhcmdldENvbHVtbiBpcyAnLScgdGhlbiByb3dzPy5zbGljZSgpLnJldmVyc2UoKVxuXHR3aGVuIEBvcHRpb25zLmNvbHVtbnNbdGFyZ2V0Q29sdW1uXVxuXHRcdGN1c3RvbVNvcnQgPSBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl0uc29ydEZuXG5cdFx0cmF3VmFsdWUgPSBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl0ucmF3VmFsdWVGb3JtYXR0ZXJcblx0XHRzb3J0ZXIgPSBjdXN0b21Tb3J0XG5cdFx0c29ydGVyIHx8PSAoYSxiKT0+XG5cdFx0XHRhVmFsdWUgPSBpZiByYXdWYWx1ZSB0aGVuIHJhd1ZhbHVlKGFbdGFyZ2V0Q29sdW1uXSkgZWxzZSBhW3RhcmdldENvbHVtbl1cblx0XHRcdGJWYWx1ZSA9IGlmIHJhd1ZhbHVlIHRoZW4gcmF3VmFsdWUoYlt0YXJnZXRDb2x1bW5dKSBlbHNlIGJbdGFyZ2V0Q29sdW1uXVxuXHRcdFx0c3dpdGNoXG5cdFx0XHRcdHdoZW4gYVZhbHVlID4gYlZhbHVlIHRoZW4gQHNvcnREaXJlY3Rpb25cblx0XHRcdFx0d2hlbiBhVmFsdWUgPCBiVmFsdWUgdGhlbiBAc29ydERpcmVjdGlvbiAqIC0xXG5cdFx0XHRcdGVsc2UgMFxuXHRcdFxuXHRcdHJvd3Muc2xpY2UoKS5zb3J0IHNvcnRlclxuXG5cdGVsc2Ugcm93c1xuXHRcblxuXG5leHBvcnQgc2V0VmlzaWJsZVBhZ2UgPSAodGFyZ2V0UGFnZSktPlxuXHR0YXJnZXRQYWdlLS0gIyBEZWMgYnkgMSBmb3IgYXJyYXktaW5kZXggc3R5bGVcblx0c2xpY2UgPVxuXHRcdCdzdGFydCc6IHRhcmdldFBhZ2UqQG9wdGlvbnMucGVyUGFnZVxuXHRcdCdlbmQnOiAodGFyZ2V0UGFnZSpAb3B0aW9ucy5wZXJQYWdlKStAb3B0aW9ucy5wZXJQYWdlXG5cdFxuXHRyb3dzVG9SZXZlYWwgPSBAYXZhaWxhYmxlUm93c1tzbGljZS5zdGFydCAuLi4gc2xpY2UuZW5kXVxuXHRyb3dzVG9IaWRlID0gQHZpc2libGVSb3dzLnNsaWNlKClcblxuXHRyb3cudmlzaWJsZSA9IGZhbHNlIGZvciByb3cgaW4gcm93c1RvSGlkZVxuXHRAdmlzaWJsZVJvd3MubGVuZ3RoID0gMFxuXHRAdmlzaWJsZVJvd3MucHVzaC5hcHBseSBAdmlzaWJsZVJvd3MsIHJvd3NUb1JldmVhbFxuXG5cblxuXG5leHBvcnQgc2V0UGFnZUluZGljYXRvciA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UgPSAxIGlmIHRhcmdldFBhZ2UgaXMgJy4uLidcblx0dGFyZ2V0UGFnZSA9IGlmIHRhcmdldFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSB0YXJnZXRQYWdlLTEgIyAwLWJhc2VkIGluZGV4IHNvIHdlIHN1YnRyYWN0IDFcblx0cGFnZUl0ZW1zJCA9IEBlbHMucGFnaW5hdGlvbi5maW5kKCcuX3BhZ2luYXRpb25JdGVtJykuc2xpY2UoMSwtMSlcblx0bWF0Y2hlZFBhZ2VFbCQgPSBwYWdlSXRlbXMkLmVxIHRhcmdldFBhZ2Vcblx0XG5cdG1hdGNoZWRQYWdlRWwkLmFkZENsYXNzICdjdXJyZW50J1xuXHRwYWdlSXRlbXMkLm5vdChtYXRjaGVkUGFnZUVsJCkucmVtb3ZlQ2xhc3MgJ2N1cnJlbnQnXHRcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi4vbWFya3VwJ1xuaW1wb3J0IHtub3JtYWxpemVDb2x1bW5zLCBnZW5IZWFkZXJDZWxsU3R5bGUsIGdlbkNlbGxDbGFzc25hbWV9IGZyb20gJy4uL2hlbHBlcnMnXG5cbmV4cG9ydCBnZW5lcmF0ZUhlYWRpbmdDb2x1bW5zID0gKCktPlxuXHRAb3B0aW9ucy5jb2x1bW5zID0gbm9ybWFsaXplQ29sdW1ucyhAb3B0aW9ucy5jb2x1bW5zKVxuXHRAaGFzQnJlYWtkb3duQmFyID0gdHJ1ZSBpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJyBmb3IgbGFiZWwsY29sdW1uIG9mIEBvcHRpb25zLmNvbHVtbnNcblxuXHRPYmplY3Qua2V5cyhAb3B0aW9ucy5jb2x1bW5zKVxuXHRcdC5tYXAgKGxhYmVsKT0+XG5cdFx0XHRjb2x1bW4gPSBAb3B0aW9ucy5jb2x1bW5zW2xhYmVsXVxuXHRcdFx0QGVscy5nbG9iYWxTdHlsZXNbMF0uaW5uZXJIVE1MICs9IFwie3sje2NvbHVtbi5zbHVnfX19XFxuXCJcblxuXHRcdFx0bWFya3VwLmhlYWRpbmdDZWxsIEBtYXJrdXBBcmdzXG5cdFx0XHRcdCdzbHVnJzogY29sdW1uLnNsdWdcblx0XHRcdFx0J2ljb24nOiBjb2x1bW4uaWNvblxuXHRcdFx0XHQnbGFiZWwnOiBjb2x1bW4ubGFiZWxcblx0XHRcdFx0J3N0eWxlJzogZ2VuSGVhZGVyQ2VsbFN0eWxlKGNvbHVtbilcblx0XHRcdFx0J2V4dHJhQ2xhc3Nlcyc6IGdlbkNlbGxDbGFzc25hbWUoY29sdW1uKVxuXHRcdC5qb2luKCcnKVxuXG5cblxuXG5cbmV4cG9ydCB1cGRhdGVDb2x1bW5zID0gKHVwZGF0ZWRDb2x1bW5zKS0+XG5cdHVwZGF0ZWRDb2x1bW5zID0gbm9ybWFsaXplQ29sdW1ucyh1cGRhdGVkQ29sdW1ucylcblx0ZXh0ZW5kLmRlZXAoQG9wdGlvbnMuY29sdW1ucywgdXBkYXRlZENvbHVtbnMpXG5cdEBjdXJyZW50UGFnZSA9IEBjdXJyZW50UGFnZVxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IFNpbXBseUJpbmQgZnJvbSAnQGRhbmllbGthbGVuL3NpbXBseWJpbmQnXG5pbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi4vbWFya3VwJ1xuaW1wb3J0IHtnZXRCcmVha2Rvd25CYXJXaWR0aCwgZ2VuQ2VsbENsYXNzbmFtZSwgZ2VuQ2VsbFN0eWxlfSBmcm9tICcuLi9oZWxwZXJzJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5leHBvcnQgcHJvY2Vzc1JvdyA9IChyb3cpLT4gaWYgcm93LnByb2Nlc3NlZCB0aGVuIHJvdyBlbHNlXG5cdEBnZW5lcmF0ZVJvdyhyb3cpXG5cblx0U2ltcGx5QmluZCgndmlzaWJsZScsIHVwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSkub2Yocm93KVxuXHRcdC50byAoaXNWaXNpYmxlLCBwcmV2VmFsdWUpPT5cblx0XHRcdGlmIG5vdCBpc1Zpc2libGUgXG5cdFx0XHRcdHJvdy5lbC5kZXRhY2goKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyb3cuZWwuYXBwZW5kVG8gQGVscy50YWJsZUJvZHlcblxuXHRcdFx0XHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCBub3Qgcm93LnVwZGF0ZWRCcmVha2Rvd25XaWR0aCBhbmQgaXNWaXNpYmxlIGlzbnQgcHJldlZhbHVlXG5cdFx0XHRcdFx0cm93LmJyZWFrZG93bkJhcldpZHRoID0gZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXHRcdFx0XHRcblxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWw/Lmxlbmd0aFxuXHRcdFNpbXBseUJpbmQoJ2xhcmdlc3RCcmVha2Rvd25Ub3RhbCcpLm9mKEApXG5cdFx0XHQudG8oJ3VwZGF0ZWRCcmVha2Rvd25XaWR0aCcpLm9mKHJvdylcblx0XHRcdFx0LnRyYW5zZm9ybSAoKS0+IGlmIHJvdy52aXNpYmxlIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG5cdFx0XHQuYW5kLnRvKCdicmVha2Rvd25CYXJXaWR0aCcpLm9mKHJvdylcblx0XHRcdFx0LnRyYW5zZm9ybSAoKT0+IGdldEJyZWFrZG93bkJhcldpZHRoKHJvdywgQGxhcmdlc3RCcmVha2Rvd25Ub3RhbClcblxuXHRcdFx0XHQuY2hhaW5Ubygnd2lkdGgnKS5vZihyb3cuYnJlYWtkb3duQmFyRWxbMF0uc3R5bGUpXG5cdFx0XHRcdFx0LnRyYW5zZm9ybSAod2lkdGgpLT4gd2lkdGgrJyUnXG5cblx0XHRcdFx0LmFuZC50byAoKT0+XG5cdFx0XHRcdFx0Zm9yIGRyaWxsZG93bkVsLGluZGV4IGluIHJvdy5kcmlsbGRvd25FbHNcblx0XHRcdFx0XHRcdHdpZHRoID0gZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LmRyaWxsZG93bltpbmRleF0sIHJvdy5kcmlsbGRvd24ubGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXHRcdFx0XHRcdFx0JChkcmlsbGRvd25FbCkuY2hpbGRyZW4oJy5pc19icmVha2Rvd25fYmFyJykuY2hpbGRyZW4oKS5jaGlsZHJlbigpWzBdPy5zdHlsZS53aWR0aCA9IHdpZHRoKyclJ1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHQuY29uZGl0aW9uICgpLT4gcm93LmRyaWxsZG93blxuXHRcdFx0XHRcdFxuXHRcdFx0LmNvbmRpdGlvbkFsbCAoKS0+IHJvdy52aXNpYmxlXG5cblx0cm93LnByb2Nlc3NlZCA9IHRydWVcblx0cmV0dXJuIHJvd1xuXG5cblxuXG5cbmV4cG9ydCB1bnByb2Nlc3NSb3cgPSAocm93KS0+IGlmIHJvdy5wcm9jZXNzZWRcblx0U2ltcGx5QmluZC51bkJpbmRBbGwocm93LCB0cnVlKVxuXHRcblx0aWYgQGhhc0JyZWFrZG93bkJhciBhbmQgcm93LmJyZWFrZG93bkJhckVsWzBdXG5cdFx0U2ltcGx5QmluZC51bkJpbmRBbGwocm93LmJyZWFrZG93bkJhckVsWzBdLnN0eWxlKVxuXG5cdHJvdy5lbC5yZW1vdmUoKVxuXHRkZWxldGUgcm93LmVsXG5cdGRlbGV0ZSByb3cuZHJpbGxkb3duRWxzXG5cdGRlbGV0ZSByb3cudmlzaWJsZVxuXHRkZWxldGUgcm93LmJyZWFrZG93bkJhckVsXG5cdGRlbGV0ZSByb3cucHJvY2Vzc2VkXG5cblxuXG5leHBvcnQgcmVSZW5kZXJSb3cgPSAocm93KS0+XG5cdEBnZW5lcmF0ZVJvdyhyb3cpXG5cblxuXG5leHBvcnQgZ2VuZXJhdGVSb3cgPSAocm93KS0+XG5cdHByZXZSb3dFbCA9IHJvdy5lbFxuXHRuZXdSb3dFbCA9IHJvdy5lbCA9ICQoQGdlbmVyYXRlUm93TWFya3VwKHJvdykpLmRhdGEoJ3JvdycsIHJvdylcblx0cHJldlJvd0VsLnJlcGxhY2VXaXRoKG5ld1Jvd0VsKSBpZiBwcmV2Um93RWxcblx0XG5cdHJvdy5leHBhbmRCdXR0b24gPSByb3cuZWwuY2hpbGRyZW4oKS5maXJzdCgpIGlmIHJvdy5kcmlsbGRvd25cblx0cm93LmRyaWxsZG93bkVscyA9IHJvdy5lbC5jaGlsZHJlbignLl90YWJsZVJvd0RyaWxsZG93bicpLmNoaWxkcmVuKCkgaWYgcm93LmRyaWxsZG93blxuXHRyb3cuYnJlYWtkb3duQmFyRWwgPSByb3cuZWwuY2hpbGRyZW4oJy5pc0JyZWFrZG93bkJhcicpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKSBpZiBAaGFzQnJlYWtkb3duQmFyXG5cdHJvdy52aXNpYmxlID0gZmFsc2UgdW5sZXNzIHByZXZSb3dFbFxuXHRcblx0aWYgcm93LmRyaWxsZG93blxuXHRcdGlmIEBoYXNCcmVha2Rvd25CYXJcblx0XHRcdHJvdy5kcmlsbGRvd24ubGFyZ2VzdEJyZWFrZG93blRvdGFsID0gTWF0aC5tYXggcm93LmRyaWxsZG93bi5tYXAoKHN1YlJvdyktPiBzdWJSb3cuYnJlYWtkb3duQmFyVG90YWwpLi4uXG5cblx0XHRTaW1wbHlCaW5kKCdkcmlsbGRvd25PcGVuJykub2Yocm93KVxuXHRcdFx0LnRvKCdjbGFzc05hbWUuZHJpbGxkb3duU3RhdGUnKS5vZihyb3cuZWwpXG5cdFx0XHRcdC50cmFuc2Zvcm0gKGRyaWxsZG93bk9wZW4pLT4gaWYgZHJpbGxkb3duT3BlbiB0aGVuICdoYXNEcmlsbGRvd24gZHJpbGxkb3duSXNPcGVuJyBlbHNlICdoYXNEcmlsbGRvd24nXG5cblx0XHRTaW1wbHlCaW5kKCd2aXNpYmxlJykub2Yocm93KVxuXHRcdFx0Lm9uY2UudG8gKCktPlxuXHRcdFx0XHRTaW1wbHlCaW5kICgpLT5cblx0XHRcdFx0XHRpZiBub3Qgcm93LmRyaWxsZG93bk9wZW4gdGhlbiBzZXRUaW1lb3V0ICgpLT5cblx0XHRcdFx0XHRcdHJvd0hlaWdodCA9IHJvdy5lbC5oZWlnaHQoKVxuXHRcdFx0XHRcdFx0YnV0dG9uSGVpZ2h0ID0gcm93LmV4cGFuZEJ1dHRvbi5oZWlnaHQoKVxuXHRcdFx0XHRcdFx0cm93LmV4cGFuZEJ1dHRvblswXS5zdHlsZS50b3AgPSBcIiN7cm93SGVpZ2h0LzIgLSBidXR0b25IZWlnaHQvMn1weFwiXG5cblx0XHRcdFx0LnVwZGF0ZU9uKCdldmVudDpyZXNpemUnLCB0aHJvdHRsZTozMDApLm9mKHdpbmRvdylcblx0XHRcdC5jb25kaXRpb24gKHZpc2libGUpLT4gdmlzaWJsZVxuXG5cdHJldHVybiByb3dcblxuXG5cblxuXG5leHBvcnQgZ2VuZXJhdGVSb3dNYXJrdXAgPSAocm93LCBwYXJlbnRSb3cpLT5cblx0aXNTdWIgPSAhIXBhcmVudFJvd1xuXHRcblx0bWFya3VwLnJvdyBAbWFya3VwQXJnc1xuXHRcdCdyb3dJRCc6IGlmIGlzU3ViIHRoZW4gcGFyZW50Um93W0BvcHRpb25zLnVuaXF1ZUlEXSBlbHNlIHJvd1tAb3B0aW9ucy51bmlxdWVJRF1cblx0XHQnZHJpbGxkb3duJzogaWYgaXNTdWIgdGhlbiAnJyBlbHNlIGlmIHJvdy5kcmlsbGRvd24gdGhlbiBkbyAoKT0+XG5cdFx0XHRkcmlsbGRvd25NYXJrdXBzID0gJydcblx0XHRcdGRyaWxsZG93bk1hcmt1cHMgKz0gQGdlbmVyYXRlUm93TWFya3VwKGRyaWxsZG93blJvdywgcm93KSBmb3IgZHJpbGxkb3duUm93IGluIHJvdy5kcmlsbGRvd25cblx0XHRcdHJldHVybiBkcmlsbGRvd25NYXJrdXBzXG5cdFx0XG5cdFx0J2NlbGxzJzogZG8gKCk9PlxuXHRcdFx0cm93Q2VsbHMgPSAnJ1xuXHRcdFx0XG5cdFx0XHRmb3IgY29sdW1uTmFtZSxjb2x1bW4gb2YgQG9wdGlvbnMuY29sdW1uc1xuXHRcdFx0XHRjZWxsVmFsdWUgPSByb3dbY29sdW1uTmFtZV1cblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5wZXJjZW50YWdlW2NvbHVtbk5hbWVdXG5cdFx0XHRcdFx0Y2VsbFZhbHVlID0gQGNhbGNQZXJjZW50YWdlU3RyaW5nKGNlbGxWYWx1ZSwgY29sdW1uTmFtZSwgcm93KVxuXG5cblx0XHRcdFx0cm93Q2VsbHMgKz0gbWFya3VwLnJvd0NlbGwgQG1hcmt1cEFyZ3Ncblx0XHRcdFx0XHQnbGFiZWwnOiBpZiB0eXBlb2YgY2VsbFZhbHVlIGlzICdzdHJpbmcnIHRoZW4gY2VsbFZhbHVlIGVsc2UgJydcblx0XHRcdFx0XHQnY29sdW1uJzogY29sdW1uTmFtZVxuXHRcdFx0XHRcdCdzbHVnJzogY29sdW1uLnNsdWdcblx0XHRcdFx0XHQnZXh0cmFDbGFzc2VzJzogZ2VuQ2VsbENsYXNzbmFtZShjb2x1bW4pXG5cdFx0XHRcdFx0J3N0eWxlJzogZ2VuQ2VsbFN0eWxlKGNvbHVtbilcblx0XHRcdFx0XHQndmFsdWUnOiBkbyAoKT0+IHN3aXRjaFxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnZmllbGRzJyBcdFx0dGhlbiBAZ2VuZXJhdGVJbmxpbmVGaWVsZHMoY2VsbFZhbHVlLCByb3csIGNvbHVtbilcblx0XHRcdFx0XHRcdHdoZW4gY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscycgXHR0aGVuIEBnZW5lcmF0ZUlwRGV0YWlscyhjZWxsVmFsdWUsIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJyBcdHRoZW4gQGdlbmVyYXRlQnJlYWtkb3duQmFyKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdidXR0b24nIFx0XHR0aGVuIEBnZW5lcmF0ZUJ1dHRvbigoY29sdW1uLmFjdGlvbiBvciBjZWxsVmFsdWUpLCAoY29sdW1uLmJ1dHRvbkljb24gb3IgY29sdW1uLmljb24pKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnYWN0aW9ucycgXHRcdHRoZW4gQGdlbmVyYXRlQWN0aW9ucyhjb2x1bW4sIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4uaXNMaW5rIFx0XHRcdFx0XHR0aGVuIFwiPGEgaHJlZj0nI3tjZWxsVmFsdWV9JyB0YXJnZXQ9J19ibGFuayc+I3tjZWxsVmFsdWV9PC9hPlwiXG5cdFx0XHRcdFx0XHRlbHNlIChpZiBjb2x1bW4uZm9ybWF0dGVyIHRoZW4gY29sdW1uLmZvcm1hdHRlcihjZWxsVmFsdWUsIHJvdywgY29sdW1uKSBlbHNlIGNlbGxWYWx1ZSlcblx0XHRcdFx0XHRcblx0XHRcdHJldHVybiByb3dDZWxsc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICogYXMgbWFya3VwIGZyb20gJy4uL21hcmt1cCdcblxuIyBleHBvcnQgZ2VuZXJhdGVCcmVha2Rvd25CYXIgPSAoYnJlYWtkb3duLCByb3dPYmosIGNvbHVtbkVudGl0eSktPlxuIyBcdGJyZWFrZG93bktleXMgPSBAbGVnZW5kIG9yIE9iamVjdC5rZXlzKGJyZWFrZG93bilcbiMgXHRyb3dPYmouYnJlYWtkb3duQmFyVG90YWwgPSB0b3RhbCA9IEBnZXRCcmVha2Rvd25Ub3RhbChicmVha2Rvd24sIGJyZWFrZG93bktleXMpXG5cdFxuIyBcdHJldHVybiAnTi9BJyB1bmxlc3MgdG90YWxcblx0XG4jIFx0bWFya3VwLmJyZWFrZG93bkJhciBAbWFya3VwQXJnc1xuIyBcdFx0J3RvdGFsJzogdG90YWxcbiMgXHRcdCd0b3RhbEZvcm1hdHRlZCc6IGlmIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdCB0aGVuIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdCh0b3RhbCkgZWxzZSB0b3RhbFxuIyBcdFx0J2JhcnMnOiBkbyAoKS0+XG4jIFx0XHRcdGJhcnMgPSAnJ1xuIyBcdFx0XHRmb3Iga2V5IGluIGJyZWFrZG93bktleXNcbiMgXHRcdFx0XHR2YWx1ZSA9IGJyZWFrZG93bltrZXldXG4jIFx0XHRcdFx0YmFycyArPSBtYXJrdXAuYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25fYmFyLnJlcGxhY2UgJ3t7d2lkdGh9fScsICh2YWx1ZS90b3RhbCkqMTAwXG4jIFx0XHRcdHJldHVybiBiYXJzXG5cbiMgXHRcdCdob3ZlckJveCc6IGRvICgpLT5cbiMgXHRcdFx0bWFya3VwLmJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2hvdmVyYm94XG4jIFx0XHRcdFx0LnJlcGxhY2UgJ3t7cm93c319JywgKCktPlxuIyBcdFx0XHRcdFx0cm93cyA9ICcnXG5cdFx0XHRcdFx0XG4jIFx0XHRcdFx0XHRicmVha2Rvd25LZXlzLmZvckVhY2ggKGtleSwgaW5kZXgpLT5cbiMgXHRcdFx0XHRcdFx0cm93cyArPSBtYXJrdXAuYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25faG92ZXJib3hfcm93XG4jIFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7Y29sb3J9fScsIGN1c3RvbUNvbG9ycyhpbmRleClcbiMgXHRcdFx0XHRcdFx0XHQucmVwbGFjZSAne3trZXl9fScsIGtleVxuIyBcdFx0XHRcdFx0XHRcdC5yZXBsYWNlICd7e3ZhbHVlfX0nLCBpZiBjb2x1bW5FbnRpdHkudmFsdWVGb3JtYXQgdGhlbiBjb2x1bW5FbnRpdHkudmFsdWVGb3JtYXQoYnJlYWtkb3duW2tleV0pIGVsc2UgYnJlYWtkb3duW2tleV1cblxuIyBcdFx0XHRcdFx0cmV0dXJuIHJvd3NcblxuXG5cblxuXG5leHBvcnQgZ2VuZXJhdGVJbmxpbmVGaWVsZHMgPSAoZGF0YUZpZWxkcyktPlxuXHRtYXJrdXAuZmllbGRzIEBtYXJrdXBBcmdzICdmaWVsZHMnOiBkbyAoKT0+XG5cdFx0cmV0dXJuICcnIHVubGVzcyB0eXBlb2YgZGF0YUZpZWxkcyBpcyAnb2JqZWN0J1xuXHRcdFxuXHRcdG91dHB1dCA9IGZvciBsYWJlbCx2YWx1ZSBvZiBkYXRhRmllbGRzXG5cdFx0XHRtYXJrdXAuZmllbGRzSXRlbSBAbWFya3VwQXJncyB7bGFiZWwsdmFsdWV9XG5cblxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJylcblxuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZUJ1dHRvbiA9IChhY3Rpb24sIGljb24sIGlzTXVsdGkpLT5cblx0bWFya3VwLmJ1dHRvbihAbWFya3VwQXJncyB7YWN0aW9uLCBpY29uLCBpc011bHRpfSlcblxuXG5cblxuXG5leHBvcnQgZ2VuZXJhdGVBY3Rpb25zID0gKGNvbHVtbiktPlxuXHRjb2x1bW4uYWN0aW9ucyA/PSAnbXVsdGlBY3Rpb25zJ1xuXHRidXR0b25NYXJrdXAgPSBAZ2VuZXJhdGVCdXR0b24oY29sdW1uLmFjdGlvbnMsIChjb2x1bW4uYnV0dG9uSWNvbiBvciBjb2x1bW4uaWNvbiksIHRydWUpXG5cdGFjdGlvbnNNYXJrdXAgPSBtYXJrdXAuYWN0aW9ucyBAbWFya3VwQXJncyAnYWN0aW9ucyc6IGRvICgpPT5cblx0XHRyZXR1cm4gJycgdW5sZXNzIEBvcHRpb25zLmFjdGlvbnNcblx0XHRcblx0XHRvdXRwdXQgPSBmb3IgYWN0aW9uIGluIEBvcHRpb25zLmFjdGlvbnNcblx0XHRcdG1hcmt1cC5hY3Rpb25zSXRlbShAbWFya3VwQXJncyBhY3Rpb24pXG5cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpXG5cblx0cmV0dXJuIGJ1dHRvbk1hcmt1cCthY3Rpb25zTWFya3VwXG5cblxuXG5cblxuXG5leHBvcnQgZ2VuZXJhdGVJcERldGFpbHMgPSAoaXBBZGRyZXNzLCByb3csIGNvbHVtbiktPlxuXHRtYXJrdXAuaXBEZXRhaWxzIEBtYXJrdXBBcmdzIHtpcEFkZHJlc3MsIGV4dHJhOmNvbHVtbi5leHRyYU1hcmt1cD8oaXBBZGRyZXNzLCByb3cpfSAjIGRhdGEgYXR0cmlidXRlXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi9tYXJrdXAnXG5pbXBvcnQge3RvZ2dsZUFjdGlvbnNQb3B1cCwgY29tcGFyZVZhbHVlc30gZnJvbSAnLi9oZWxwZXJzJ1xuXG5leHBvcnQgYXR0YWNoRXZlbnRzID0gKCktPlxuXHQjID09PT0gUGFnaW5hdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy5wYWdpbmF0aW9uLm9uICdjbGljaycsICcuX3BhZ2luYXRpb25JdGVtJywgKGV2ZW50KT0+XG5cdFx0JHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aXNCYWNrID0gJHRoaXMuaGFzQ2xhc3MoJ19iYWNrJylcblx0XHRpc05leHQgPSAkdGhpcy5oYXNDbGFzcygnX25leHQnKVxuXHRcdGlzRXh0cmEgPSAkdGhpcy5oYXNDbGFzcygnX2V4dHJhSW5kaWNhdG9yJylcblxuXHRcdGlmIGlzQmFja1xuXHRcdFx0QGN1cnJlbnRQYWdlLS0gdW5sZXNzIEBjdXJyZW50UGFnZSBpcyAxXG5cdFx0XG5cdFx0ZWxzZSBpZiBpc05leHRcblx0XHRcdEBjdXJyZW50UGFnZSsrIHVubGVzcyBAY3VycmVudFBhZ2UgaXMgQHBhZ2VDb3VudFJlYWxcblx0XHRcblx0XHQjIGVsc2UgaWYgbm90IGlzRXh0cmEgYW5kIG5vdCBpc1dyYXBwZXJcblx0XHRlbHNlIGlmIG5vdCBpc0V4dHJhXG5cdFx0XHRwYWdlTnVtYmVyID0gcGFyc2VGbG9hdCAkdGhpcy5jaGlsZHJlbigpLmh0bWwoKVxuXHRcdFx0QGN1cnJlbnRQYWdlID0gcGFnZU51bWJlclxuXG5cblxuXG5cdCMgPT09PSBTb3J0aW5nID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlSGVhZGluZy5vbiAnY2xpY2snLCAnLl9pc1NvcnRhYmxlJywgKGV2ZW50KT0+XG5cdFx0QHNvcnRCeSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnRcblxuXG5cblx0IyA9PT09IEFjdGlvbiBidXR0b24gZXZlbnQgbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnY2xpY2snLCAnLl9hY3Rpb25CdXR0b24nLCAoZXZlbnQpPT5cblx0XHRidXR0b24kID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGlmIGJ1dHRvbiQuaGFzQ2xhc3MoJ19pc011bHRpJylcblx0XHRcdHRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLm5leHQoKS5jaGlsZHJlbigpXG5cdFx0XG5cdFx0ZWxzZVxuXHRcdFx0aXRlbVJvdyQgPSBidXR0b24kLmNsb3Nlc3QoJy5fdGFibGVSb3cnKVxuXHRcdFx0YWN0aW9uID0gYnV0dG9uJC5kYXRhKCdhY3Rpb24nKVxuXHRcdFx0aXRlbUlEID0gaXRlbVJvdyQuZGF0YSgncm93LWlkJylcblx0XHRcdGl0ZW1JbmRleCA9IGl0ZW1Sb3ckLmRhdGEoJ2luZGV4Jylcblx0XHRcdGRhdGFJdGVtID0gaWYgaXRlbUlEIHRoZW4gQGFsbFJvd3MuZmluZCAocm93KT0+IGNvbXBhcmVWYWx1ZXMocm93W0BvcHRpb25zLnVuaXF1ZUlEXSwgaXRlbUlEKVxuXHRcdFx0ZGF0YUl0ZW0gPz0gaXRlbUlEXG5cblx0XHRcdGlmIGJ1dHRvbiQuaGFzQ2xhc3MoJ19zdWJBY3Rpb25CdXR0b24nKVxuXHRcdFx0XHR0b2dnbGVBY3Rpb25zUG9wdXAgYnV0dG9uJC5wYXJlbnQoKVxuXG5cdFx0XHRAZWxzLnRhYmxlLnRyaWdnZXIgXCJhY3Rpb24uI3thY3Rpb259XCIsIGRhdGFJdGVtXG5cblxuXG5cblxuXG5cdCMgPT09PSBSb3cgZXhwYW5zaW9uIGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ2NsaWNrJywgJy5fZXhwYW5kRHJpbGxkb3duJywgKGV2ZW50KT0+XG5cdFx0YnV0dG9uJCA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpdGVtUm93ID0gYnV0dG9uJC5wYXJlbnQoKS5kYXRhKCdyb3cnKVxuXHRcdFxuXHRcdGl0ZW1Sb3cuZHJpbGxkb3duT3BlbiA9ICFpdGVtUm93LmRyaWxsZG93bk9wZW5cblxuXG5cblxuXG5cblxuXHQjID09PT0gSVAgRGV0YWlscyBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdtb3VzZW92ZXInLCAnLl9pcERldGFpbHMtdHJpZ2dlcicsIChldmVudCk9PlxuXHRcdHRyaWdnZXIkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdHdyYXBwZXIkID0gdHJpZ2dlciQucGFyZW50KClcblx0XHRjb250ZW50JCA9IHRyaWdnZXIkLm5leHQoKVxuXHRcdGNvdW50cnkkID0gY29udGVudCQubmV4dCgpXG5cdFx0aXBBZGRyZXNzID0gd3JhcHBlciQuZGF0YSAnaXAnXG5cdFx0aXNMb2FkZWQgPSB0cmlnZ2VyJC5oYXNDbGFzcyAnX2lzUmVhZHknXG5cblxuXHRcdHVubGVzcyBpc0xvYWRlZFx0XHRcdFxuXHRcdFx0QG9wdGlvbnMuaXBEYXRhRmV0Y2hlcihpcEFkZHJlc3MpLnRoZW4gKGlwRGV0YWlscyk9PlxuXHRcdFx0XHRyZXR1cm4gdW5sZXNzIGlwRGV0YWlsc1xuXHRcdFx0XHRcblx0XHRcdFx0b3V0cHV0ID0gZm9yIGxhYmVsLHZhbHVlIG9mIGlwRGV0YWlscyBcblx0XHRcdFx0XHRtYXJrdXAuaXBEZXRhaWxzSXRlbShAbWFya3VwQXJncyB7bGFiZWwsdmFsdWV9KVxuXG5cdFx0XHRcdGNvbnRlbnQkLmh0bWwgb3V0cHV0LmpvaW4oJycpXG5cdFx0XHRcdHdyYXBwZXIkLmFkZENsYXNzICdfaXNSZWFkeSdcblxuXG5cblx0UHJvbWlzZS5yZXNvbHZlKClcblxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi9tYXJrdXAnXG5pbXBvcnQgU2ltcGx5QmluZCBmcm9tICdAZGFuaWVsa2FsZW4vc2ltcGx5YmluZCdcblxuZXhwb3J0IGF0dGFjaEJpbmRpbmdzID0gKCktPlxuXHRTaW1wbHlCaW5kLnNldHRpbmdzLnRyYWNrQXJyYXlDaGlsZHJlbiA9IGZhbHNlXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFN0YXRlXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdub1Jlc3VsdHMnKS5vZihAc3RhdGUpXG5cdFx0LnRvKCdjbGFzc05hbWUuaXNWaXNpYmxlJykub2YoQGVscy5ub1Jlc3VsdHNNZXNzYWdlKS50cmFuc2Zvcm0gKG5vUmVzdWx0cyk9PiBpZiBub1Jlc3VsdHMgYW5kIG5vdCBAc3RhdGUubG9hZGluZyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLm5vUmVzdWx0cycpLm9mKEBlbHMudGFibGVPdXRlcndyYXApLnRyYW5zZm9ybSAobm9SZXN1bHRzKT0+IGlmIG5vUmVzdWx0cyBhbmQgbm90IEBzdGF0ZS5sb2FkaW5nIHRoZW4gJ19ub1Jlc3VsdHMnIGVsc2UgJydcblx0XG5cdFNpbXBseUJpbmQoJ2xvYWRpbmcnKS5vZihAc3RhdGUpXG5cdFx0LnRvKCdjbGFzc05hbWUuaXNWaXNpYmxlJykub2YoQGVscy5sb2FkaW5nTWVzc2FnZSkudHJhbnNmb3JtIChsb2FkaW5nKS0+IGlmIGxvYWRpbmcgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ1xuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5sb2FkaW5nJykub2YoQGVscy50YWJsZU91dGVyd3JhcCkudHJhbnNmb3JtIChsb2FkaW5nKT0+IGlmIGxvYWRpbmcgdGhlbiAnX2xvYWRpbmcnIGVsc2UgJydcblx0XHQuYW5kLnRvIChsb2FkaW5nKT0+XG5cdFx0XHRpZiBsb2FkaW5nXG5cdFx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSBmYWxzZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAc3RhdGUubm9SZXN1bHRzID0gIUB2aXNpYmxlUm93cy5sZW5ndGhcblxuXHRTaW1wbHlCaW5kKCdlcnJvcicpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ3RleHRDb250ZW50LmVycm9yTWVzc2FnZScpLm9mKEBlbHMuZXJyb3JNZXNzYWdlKVxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLmVycm9yTWVzc2FnZSkudHJhbnNmb3JtIChoYXNFcnJvciktPiBpZiBoYXNFcnJvciB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmhhc0Vycm9yJykub2YoQGVscy50YWJsZU91dGVyd3JhcCkudHJhbnNmb3JtIChoYXNFcnJvciktPiBpZiBoYXNFcnJvciB0aGVuICdfZXJyb3InIGVsc2UgJydcblx0XHQuYW5kLnRvIChlcnIpLT4gY29uc29sZS5lcnJvcihlcnIpIGlmIGVyclxuXHRcblxuXHRpZiBAb3B0aW9ucy5oYXNNb2JpbGVcblx0XHRAd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdFxuXHRcdFNpbXBseUJpbmQoJ2V2ZW50OnJlc2l6ZScpLm9mKHdpbmRvdylcblx0XHRcdC50byAoKT0+IEB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHRTaW1wbHlCaW5kKCd3aW5kb3dXaWR0aCcpLm9mKEApXG5cdFx0XHQudG8oJ2NsYXNzTmFtZS5tb2JpbGVWZXJzaW9uJykub2YoQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRcdFx0LnRyYW5zZm9ybSAod2luZG93V2lkdGgpPT4gaWYgd2luZG93V2lkdGggPD0gQG9wdGlvbnMubW9iaWxlV2lkdGggdGhlbiAnX21vYmlsZVZlcnNpb24nIGVsc2UgJydcblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIENvbHVtbiB2aXNpYmlsaXR5XG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRmb3IgbCxjb2x1bW4gb2YgQG9wdGlvbnMuY29sdW1ucyB0aGVuIGRvIChjb2x1bW4pPT5cblx0XHRTaW1wbHlCaW5kKCdoaWRkZW4nKS5vZihjb2x1bW4pXG5cdFx0XHQudG8oXCJpbm5lckhUTUwuI3tjb2x1bW4uc2x1Z31cIikub2YoQGVscy5nbG9iYWxTdHlsZXMpXG5cdFx0XHRcdC50cmFuc2Zvcm0gKGlzSGlkZGVuKT0+IGlmIGlzSGlkZGVuIHRoZW4gXCIje0B0YWJsZUlEfSAuX18je2NvbHVtbi5zbHVnfSB7ZGlzcGxheTpub25lfVwiIGVsc2UgJydcblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBSb3dzIGFycmF5IHJlbmRlcmluZy9wcm9jZXNzaW5nXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdhcnJheTp2aXNpYmxlUm93cycpLm9mKEApXG5cdFx0LnRvIChyb3dzLCBwcmV2Um93cyk9PlxuXHRcdFx0aWYgcHJldlJvd3M/Lmxlbmd0aFxuXHRcdFx0XHRmb3Igcm93IGluIHByZXZSb3dzXG5cdFx0XHRcdFx0cm93LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XG5cdFx0XHR0cnlcblx0XHRcdFx0Zm9yIHJvdyBpbiByb3dzXG5cdFx0XHRcdFx0QHByb2Nlc3NSb3cocm93KVxuXHRcdFx0XHRcdHJvdy52aXNpYmxlID0gdHJ1ZVxuXHRcdFx0Y2F0Y2ggZXJyXG5cdFx0XHRcdEBzdGF0ZS5lcnJvciA9IGVyclxuXHRcdFx0XG5cdFx0XHRAc3RhdGUubm9SZXN1bHRzID0gIXJvd3MubGVuZ3RoXG5cdFx0XG5cdFx0LmFuZC50byAocm93cyk9PlxuXHRcdFx0cmV0dXJuIGlmIG5vdCBAaGFzQnJlYWtkb3duQmFyXG5cdFx0XHRmb3Igcm93IGluIHJvd3Ncblx0XHRcdFx0aWYgcm93LmJyZWFrZG93bkJhclRvdGFsID4gbGFyZ2VzdEJyZWFrZG93blRvdGFsIG9yIG5vdCBsYXJnZXN0QnJlYWtkb3duVG90YWw/XG5cdFx0XHRcdFx0bGFyZ2VzdEJyZWFrZG93blRvdGFsID0gcm93LmJyZWFrZG93bkJhclRvdGFsXG5cblx0XHRcdEBsYXJnZXN0QnJlYWtkb3duVG90YWwgPSBsYXJnZXN0QnJlYWtkb3duVG90YWwgb3IgMFxuXG5cdFx0LmFuZC50bygndGV4dENvbnRlbnQucm93UmFuZ2UnKS5vZihAZWxzLnBhZ2VTdGF0dXMpXG5cdFx0XHQudHJhbnNmb3JtIChyb3dzKT0+IFwiI3tAYXZhaWxhYmxlUm93cy5pbmRleE9mKHJvd3NbMF0pKzF9LSN7QGF2YWlsYWJsZVJvd3MuaW5kZXhPZihyb3dzLnNsaWNlKC0xKVswXSkrMX1cIlxuXG5cblx0U2ltcGx5QmluZCgnYXJyYXk6YWxsUm93cycpLm9mKEApLnRvIChyb3dzKT0+XG5cdFx0QHNlYXJjaENyaXRlcmlhID0gJydcblx0XHRAY3VycmVudFBhZ2UgPSAxXG5cdFx0QHN0YXRlLm5vUmVzdWx0cyA9ICFyb3dzLmxlbmd0aFxuXHRcdGlmIEBzb3J0QnkgaXMgQG9wdGlvbnMuc29ydEJ5XG5cdFx0XHRAc29ydEJ5ID0gJydcblx0XHRcdEBzb3J0QnkgPSBAb3B0aW9ucy5zb3J0Qnlcblx0XHRlbHNlXG5cdFx0XHRAc29ydEJ5ID0gJydcblxuXG5cblx0U2ltcGx5QmluZCgnYXZhaWxhYmxlUm93cycsIHt1cGRhdGVPbkJpbmQ6ZmFsc2UsIHVwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZX0pLm9mKEApXG5cdFx0LnRvIChyb3dzKT0+IEBjYWxjUGFnZUNvdW50KHJvd3MpXG5cdFx0LmFuZC50bygndGV4dENvbnRlbnQudG90YWxSb3dzJykub2YoQGVscy5wYWdlU3RhdHVzKS50cmFuc2Zvcm0gKHJvd3MpLT4gcm93cy5sZW5ndGhcblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgUGFnaW5hdGlvblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgncGFnZUNvdW50Jykub2YoQClcblx0XHQudG8oJ2lubmVySFRNTCcpLm9mKEBlbHMucGFnaW5hdGlvbkl0ZW1zKSAjIFJlbmRlciBwYWdpbmF0aW9uXG5cdFx0XHQudHJhbnNmb3JtIChjb3VudCk9PlxuXHRcdFx0XHRwYWdpbmF0aW9uSXRlbXMgPSAnJ1xuXHRcdFx0XHRmb3IgdmFsdWUgaW4gWzEuLmNvdW50XVxuXHRcdFx0XHRcdHBhZ2luYXRpb25JdGVtcyArPSBtYXJrdXAucGFnaW5hdGlvbkl0ZW0oQG1hcmt1cEFyZ3Mge3ZhbHVlfSkgdW5sZXNzIHZhbHVlIGlzIDBcblxuXHRcdFx0XHRyZXR1cm4gcGFnaW5hdGlvbkl0ZW1zXG5cblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaXNWaXNpYmxlJykub2YoQGVscy5wYWdpbmF0aW9uKS50cmFuc2Zvcm0gKGNvdW50KS0+IGlmIGNvdW50ID4gMSB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnXG5cdFxuXG5cdFNpbXBseUJpbmQoJ3BhZ2VDb3VudFJlYWwnKS5vZihAKVxuXHRcdC50bygnaW5uZXJIVE1MJykub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0XHQudHJhbnNmb3JtIChyZWFsQ291bnQpPT5cblx0XHRcdFx0aWYgcmVhbENvdW50IDw9IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuICcnXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRvcHRpb25zID0gJzxvcHRpb24+Li4uPC9vcHRpb24+J1xuXHRcdFx0XHRcdG9wdGlvbnMgKz0gXCI8b3B0aW9uPiN7aW5kZXh9PC9vcHRpb24+XCIgZm9yIGluZGV4IGluIFsoQG9wdGlvbnMucGFnZUNvdW50TWF4KzEpLi5yZWFsQ291bnRdXG5cdFx0XHRcdFx0cmV0dXJuIG9wdGlvbnNcblx0XHRcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaGFzRXh0cmEnKS5vZihAZWxzLnBhZ2luYXRpb24pLnRyYW5zZm9ybSAocmVhbENvdW50KT0+IGlmIHJlYWxDb3VudCA+IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuICdoYXNfZXh0cmEnIGVsc2UgJydcblxuXG5cblx0IyA9PT09IEV4dHJhIEluZGljYXRvci9QYWdlcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0U2ltcGx5QmluZCgndmFsdWUnLCB1cGRhdGVPbkJpbmQ6ZmFsc2UpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdC50bygnaW5uZXJIVE1MJykub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFUZXh0KVxuXHRcdC5hbmQudG8oJ2N1cnJlbnRQYWdlJykub2YoQClcblxuXG5cblxuXHQjID09PT0gQ3VycmVudCBQYWdlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCdjdXJyZW50UGFnZScsIHVwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSkub2YoQClcblx0XHQudHJhbnNmb3JtU2VsZiAoY3VycmVudFBhZ2UpPT5cblx0XHRcdGN1cnJlbnRQYWdlID0gaWYgY3VycmVudFBhZ2UgaXMgJy4uLicgdGhlbiAxIGVsc2UgcGFyc2VGbG9hdChjdXJyZW50UGFnZSlcblx0XHRcdHJldHVybiBpZiBjdXJyZW50UGFnZSA+IEBwYWdlQ291bnRSZWFsIHRoZW4gQHBhZ2VDb3VudFJlYWwgZWxzZSBjdXJyZW50UGFnZVxuXHRcdFxuXHRcdC50bygndmFsdWUnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHRcdC50cmFuc2Zvcm0gKGN1cnJlbnRQYWdlKT0+IGlmIGN1cnJlbnRQYWdlID4gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gY3VycmVudFBhZ2UgZWxzZSAnLi4uJ1xuXHRcdFxuXHRcdC5hbmQudG8gKGN1cnJlbnRQYWdlKT0+XG5cdFx0XHRAc2V0VmlzaWJsZVBhZ2UoY3VycmVudFBhZ2UpXG5cdFx0XHRAc2V0UGFnZUluZGljYXRvcihjdXJyZW50UGFnZSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFNlYXJjaCBGaWVsZFxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0XG5cdCMgPT09PSBTZWFyY2ggRmllbGQgdmFsdWUvbWFya3VwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRpZiBAb3B0aW9ucy5zZWFyY2gubGVuZ3RoXG5cdFx0QHNlYXJjaFBhcmFtID0gQG9wdGlvbnMuc2VhcmNoWzBdXG5cblx0XHRTaW1wbHlCaW5kKCdzZWFyY2gnKS5vZihAb3B0aW9ucylcblx0XHRcdC50bygnaW5uZXJIVE1MJykub2YoQGVscy5zZWFyY2hQYXJhbSlcblx0XHRcdFx0LnRyYW5zZm9ybSAob3B0aW9ucyktPiBvcHRpb25zLm1hcCgob3B0aW9uKS0+XCI8b3B0aW9uPiN7b3B0aW9ufTwvb3B0aW9uPlwiKS5qb2luKCcnKVxuXG5cdFx0U2ltcGx5QmluZCgndmFsdWUnKS5vZihAZWxzLnNlYXJjaFBhcmFtKVxuXHRcdFx0LnRvKCdzZWFyY2hQYXJhbScpLm9mKEApXG5cdFx0XHRcdC5waXBlKCdhdHRyOnBsYWNlaG9sZGVyJykub2YoQGVscy5zZWFyY2hDcml0ZXJpYSlcblx0XHRcdFx0XHQudHJhbnNmb3JtIChvcHRpb24pLT4gXCJGaWx0ZXIgYnkgI3tvcHRpb259XCJcblxuXG5cblx0IyA9PT09IFRhYmxlIHJlc3VsdHMgZmlsdGVyICYgYXZhaWFibGUgcm93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0U2ltcGx5QmluZCgndmFsdWUnKS5vZihAZWxzLnNlYXJjaENyaXRlcmlhKSAjIFNlYXJjaC9GaWx0ZXJcblx0XHQudG8oJ3NlYXJjaENyaXRlcmlhJywgdXBkYXRlRXZlbklmU2FtZTp0cnVlKS5vZihAKS5ib3RoV2F5cygpXG5cdFx0XHQuY2hhaW5UbyAoc2VhcmNoQ3JpdGVyaWEpPT5cblx0XHRcdFx0cm93c1RvTWFrZUF2YWlsYWJsZSA9IEBhbGxSb3dzXG5cdFx0XHRcdHRhcmdldENvbHVtbiA9IEBvcHRpb25zLmNvbHVtbnNbQHNlYXJjaFBhcmFtXVxuXG5cdFx0XHRcdGlmIHNlYXJjaENyaXRlcmlhIGFuZCAodGFyZ2V0Q29sdW1uIG9yIEBhbGxSb3dzWzBdP1tAc2VhcmNoUGFyYW1dPylcblx0XHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gcm93c1RvTWFrZUF2YWlsYWJsZS5maWx0ZXIgKHJvdyk9PlxuXHRcdFx0XHRcdFx0cm93VmFsdWUgPSBpZiB0YXJnZXRDb2x1bW4/LnJhd1ZhbHVlRm9ybWF0dGVyIHRoZW4gdGFyZ2V0Q29sdW1uLnJhd1ZhbHVlRm9ybWF0dGVyKHJvd1tAc2VhcmNoUGFyYW1dKSBlbHNlIHJvd1tAc2VhcmNoUGFyYW1dXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm93VmFsdWU/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyBzZWFyY2hDcml0ZXJpYS50b0xvd2VyQ2FzZSgpXG5cblx0XHRcdFx0aWYgQG9wdGlvbnMucm93RmlsdGVyXG5cdFx0XHRcdFx0cm93c1RvTWFrZUF2YWlsYWJsZSA9IHJvd3NUb01ha2VBdmFpbGFibGUuZmlsdGVyIChyb3cpPT5cblx0XHRcdFx0XHRcdHJvd0Nsb25lID0gZXh0ZW5kLmNsb25lKHJvdylcblx0XHRcdFx0XHRcdHJvd0Nsb25lW25hbWVdID0gY29sdW1uLnJhd1ZhbHVlRm9ybWF0dGVyKHJvd0Nsb25lW25hbWVdKSBmb3IgbmFtZSxjb2x1bW4gb2YgQG9wdGlvbnMuY29sdW1ucyB3aGVuIGNvbHVtbi5yYXdWYWx1ZUZvcm1hdHRlclxuXHRcdFx0XHRcdFx0cmV0dXJuIEBvcHRpb25zLnJvd0ZpbHRlcihyb3dDbG9uZSlcblx0XHRcdFx0XG5cdFx0XHRcdEBhdmFpbGFibGVSb3dzID0gcm93c1RvTWFrZUF2YWlsYWJsZVxuXHRcdFx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFNvcnRpbmdcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ3NvcnRCeScsIHt1cGRhdGVFdmVuSWZTYW1lOnRydWUsIHVwZGF0ZU9uQmluZDpmYWxzZX0sIHRydWUpLm9mKEApXG5cdFx0LnRvIChjdXJyZW50U29ydCwgcHJldlNvcnQpPT4gaWYgY3VycmVudFNvcnQgb3IgcHJldlNvcnRcblx0XHRcdGlmIGN1cnJlbnRTb3J0IGlzIHByZXZTb3J0IGFuZCBwcmV2U29ydFxuXHRcdFx0XHRAc29ydERpcmVjdGlvbiAqPSAtMVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAc29ydERpcmVjdGlvbiA9IC0xXG5cblx0XHRcdHRhcmdldENvbHVtbiA9IGlmIGN1cnJlbnRTb3J0IHRoZW4gY3VycmVudFNvcnQgZWxzZSBudWxsXG5cdFx0XHRAYXZhaWxhYmxlUm93cyA9IEBzb3J0Um93cyhAYXZhaWxhYmxlUm93cywgdGFyZ2V0Q29sdW1uKVxuXHRcdFx0QGN1cnJlbnRQYWdlID0gMVxuXG5cdFxuXHRpZiBAZWxzLnRhYmxlSGVhZGluZy5jaGlsZHJlbignLl9pc1NvcnRhYmxlJykubGVuZ3RoXG5cdFx0U2ltcGx5QmluZCgnc29ydEJ5JywgdXBkYXRlT25CaW5kOnRydWUpLm9mKEApXG5cdFx0XHQudG8oJ211bHRpOmNsYXNzTmFtZS5jdXJyZW50U29ydCcpLm9mKEBlbHMudGFibGVIZWFkaW5nLmNoaWxkcmVuKCcuX2lzU29ydGFibGUnKSlcblx0XHRcdFx0LnRyYW5zZm9ybSAoY3VycmVudCwgcHJldiwgZWwpLT4gaWYgY3VycmVudCBpcyBlbC5jaGlsZHJlblswXS50ZXh0Q29udGVudCB0aGVuICdfY3VycmVudFNvcnQnIGVsc2UgJydcblxuXG5cblxuXHRTaW1wbHlCaW5kKCdzb3J0RGlyZWN0aW9uJykub2YoQClcblx0XHQudG8oJ2NsYXNzTmFtZS5zb3J0RGlyZWN0aW9uJykub2YoQGVscy50YWJsZSlcblx0XHRcdC50cmFuc2Zvcm0gKHNvcnREaXJlY3Rpb24pLT4gaWYgc29ydERpcmVjdGlvbiBpcyAtMSB0aGVuICdkZXNjJyBlbHNlICdhc2MnXG5cblxuXG5cblxuXHRQcm9taXNlLnJlc29sdmUoKVxuXG4iLCJleHBvcnQgc29ydEJ5ID0gKGNvbHVtbiktPiA7IiwiaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50LWxpdGUnXG5pbXBvcnQge3ZlcnNpb259IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL3BhcnRzL2RlZmF1bHRzJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICogYXMgbWFya3VwIGZyb20gJy4vcGFydHMvbWFya3VwJ1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL3BhcnRzL2hlbHBlcnMnXG5jdXJyZW50SUQgPSAwXG5cbmNsYXNzIERhdGFUYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlclxuXHRjb25zdHJ1Y3RvcjogKEBjb250YWluZXIsIG9wdGlvbnM9e30pLT5cblx0XHRzdXBlcigpXG5cdFx0QG9wdGlvbnMgPSBleHRlbmQuY2xvbmUuZGVlcE9ubHkoJ2NvbHVtbnMnKShEYXRhVGFibGUuZGVmYXVsdHMsIG9wdGlvbnMpXG5cdFx0QHN0YXRlID0gJ2xvYWRpbmcnOmZhbHNlLCAnbm9SZXN1bHRzJzpmYWxzZSwgJ2Vycm9yJzpmYWxzZVxuXHRcdEBJRCA9ICsrY3VycmVudElEXG5cdFx0QHRhYmxlSUQgPSBcIlxcIyN7QG9wdGlvbnMuYmFzZUNsYXNzfS0je0BJRH1cIlxuXHRcdEB2aXNpYmxlUm93cyA9IFtdXG5cdFx0QGF2YWlsYWJsZVJvd3MgPSBbXVxuXHRcdEBhbGxSb3dzID0gW11cblx0XHRAbGFyZ2VzdEJyZWFrZG93blRvdGFsID0gMFxuXHRcdEBzZWFyY2hDcml0ZXJpYSA9ICcnXG5cdFx0QHNlYXJjaFBhcmFtID0gJydcblx0XHRAc29ydEJ5ID0gaWYgQG9wdGlvbnMuc29ydEJ5IHRoZW4gQG9wdGlvbnMuc29ydEJ5IGVsc2UgJydcblx0XHRAc29ydERpcmVjdGlvbiA9IC0xXG5cdFx0QGN1cnJlbnRQYWdlID0gMVxuXG5cblx0XHQjID09PT0gTWFya3VwID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdEBlbHMgPSB7fVxuXHRcdEBlbHMudGFibGVPdXRlcndyYXAgPSAkKG1hcmt1cC50YWJsZU91dGVyd3JhcCBleHRlbmQoe0BJRH0sIEBvcHRpb25zKSlcblx0XHRAZWxzLnRhYmxlID0gJChtYXJrdXAudGFibGUoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMudGFibGVIZWFkaW5nID0gQGVscy50YWJsZS5jaGlsZHJlbigpLmZpcnN0KCkuY2hpbGRyZW4oKVxuXHRcdEBlbHMudGFibGVCb2R5ID0gQGVscy50YWJsZS5jaGlsZHJlbigpLmxhc3QoKVxuXHRcdEBlbHMubm9SZXN1bHRzTWVzc2FnZSA9ICQobWFya3VwLm5vUmVzdWx0cyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5sb2FkaW5nTWVzc2FnZSA9ICQobWFya3VwLmxvYWRpbmcoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMuZXJyb3JNZXNzYWdlID0gJChtYXJrdXAuZXJyb3IoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMucGFnZVN0YXR1cyA9ICQobWFya3VwLnBhZ2VTdGF0dXMoQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMucGFnaW5hdGlvbiA9ICQobWFya3VwLnBhZ2luYXRpb24oQG9wdGlvbnMpKS5hcHBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdEBlbHMucGFnaW5hdGlvbkl0ZW1zID0gQGVscy5wYWdpbmF0aW9uLmNoaWxkcmVuKCcuX3BhZ2luYXRpb25JdGVtcycpXG5cdFx0QGVscy5wYWdpbmF0aW9uRXh0cmEgPSBAZWxzLnBhZ2luYXRpb24uY2hpbGRyZW4oJy5fZXh0cmFJbmRpY2F0b3InKVxuXHRcdEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0ID0gQGVscy5wYWdpbmF0aW9uRXh0cmEuY2hpbGRyZW4oJ3NlbGVjdCcpXG5cdFx0QGVscy5wYWdpbmF0aW9uRXh0cmFUZXh0ID0gQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QucHJldigpXG5cdFx0QGVscy5zZWFyY2hGaWVsZCA9ICQobWFya3VwLnNlYXJjaEZpZWxkKEBvcHRpb25zKSkuaW5zZXJ0QmVmb3JlKEBlbHMudGFibGUpXG5cdFx0QGVscy5zZWFyY2hQYXJhbSA9IEBlbHMuc2VhcmNoRmllbGQuY2hpbGRyZW4oJ3NlbGVjdCcpXG5cdFx0QGVscy5zZWFyY2hDcml0ZXJpYSA9IEBlbHMuc2VhcmNoRmllbGQuY2hpbGRyZW4oJ2lucHV0Jylcblx0XHRAZWxzLmdsb2JhbFN0eWxlcyA9ICQoJzxzdHlsZSAvPicpLnByZXBlbmRUbyhAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXG5cdFx0QGVscy50YWJsZUhlYWRpbmcuYXBwZW5kKEBnZW5lcmF0ZUhlYWRpbmdDb2x1bW5zKCkpXG5cblx0XHRAZWxzLnRhYmxlT3V0ZXJ3cmFwLmFwcGVuZFRvIEBjb250YWluZXJcblx0XHRAZWxzLnRhYmxlLmRhdGEgJ0RhdGFUYWJsZScsIEBcblx0XHRAZWxzLnRhYmxlWzBdLnN0eWxlLm1pbldpZHRoID0gXCIje0BvcHRpb25zLm1pbldpZHRofXB4XCIgaWYgQG9wdGlvbnMubWluV2lkdGhcblxuXG5cdFx0IyA9PT09IEV2ZW50cyAmIEJpbmRpbmdzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdFByb21pc2UuYmluZChAKVxuXHRcdFx0LnRoZW4oQGF0dGFjaEV2ZW50cylcblx0XHRcdC50aGVuKEBhdHRhY2hCaW5kaW5ncylcblx0XHRcdC50aGVuICgpLT4gaWYgQG9wdGlvbnMubG9hZE9uSW5pdCB0aGVuIEBsb2FkRGF0YSgpXG5cblx0XHRyZXR1cm4gQFxuXG5cblxuXHRmZXRjaERhdGE6ICgpLT5cblx0XHRAc3RhdGUubG9hZGluZyA9IHRydWVcblx0XHRQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4gKCk9PiBAb3B0aW9ucy5kYXRhLmNhbGwoQClcblx0XHRcdC50aGVuIChkYXRhKT0+XG5cdFx0XHRcdEBzdGF0ZS5sb2FkaW5nID0gQHN0YXRlLmVycm9yID0gZmFsc2Vcblx0XHRcdFx0cmV0dXJuIGRhdGFcblx0XHRcdC5jYXRjaCAoZXJyKT0+XG5cdFx0XHRcdEBzdGF0ZS5lcnJvciA9IGVyclxuXG5cdHNldERhdGE6IChkYXRhKS0+XG5cdFx0QGFsbFJvd3MgPSBkYXRhIGlmIEFycmF5LmlzQXJyYXkoZGF0YSlcblxuXHRhcHBlbmREYXRhOiAoZGF0YSktPlxuXHRcdEBhbGxSb3dzLnB1c2goZGF0YS4uLilcblxuXHRsb2FkRGF0YTogKCktPlxuXHRcdEB1bnByb2Nlc3NSb3cocm93KSBmb3Igcm93IGluIEBhbGxSb3dzIGlmIEBhbGxSb3dzLmxlbmd0aFxuXHRcdEBmZXRjaERhdGEoKS50aGVuIChkYXRhKT0+IEBzZXREYXRhKGRhdGEpXG5cblx0cmVmcmVzaDogKCktPlxuXHRcdEBhdmFpbGFibGVSb3dzID0gQGF2YWlsYWJsZVJvd3Ncblx0XHRAY3VycmVudFBhZ2UgPSBAY3VycmVudFBhZ2VcblxuXHRtYXJrdXBBcmdzOiAoYXJnc09iamVjdD17fSktPlxuXHRcdGFyZ3NPYmplY3QuYmFzZUNsYXNzID0gQG9wdGlvbnMuYmFzZUNsYXNzXG5cdFx0cmV0dXJuIGFyZ3NPYmplY3RcblxuXG5pbXBvcnQgKiBhcyBnZW5lcmFsTWV0aG9kcyBmcm9tICcuL3BhcnRzL21ldGhvZHMnXG5pbXBvcnQgKiBhcyBldmVudE1ldGhvZHMgZnJvbSAnLi9wYXJ0cy9hdHRhY2hFdmVudHMnXG5pbXBvcnQgKiBhcyBiaW5kaW5nTWV0aG9kcyBmcm9tICcuL3BhcnRzL2F0dGFjaEJpbmRpbmdzJ1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbk1ldGhvZHMgZnJvbSAnLi9wYXJ0cy91c2VyQWN0aW9uTWV0aG9kcydcbmV4dGVuZCBEYXRhVGFibGU6OiwgZ2VuZXJhbE1ldGhvZHMsIGV2ZW50TWV0aG9kcywgYmluZGluZ01ldGhvZHMsIHVzZXJBY3Rpb25NZXRob2RzXG5cblxuRGF0YVRhYmxlLnZlcnNpb24gPSB2ZXJzaW9uXG5EYXRhVGFibGUuaGVscGVycyA9IGhlbHBlcnNcbkRhdGFUYWJsZS5tYXJrdXAgPSBtYXJrdXBcbkRhdGFUYWJsZS5kZWZhdWx0cyA9IGRlZmF1bHRzXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZVxuXG5cblxuXG4iXSwibmFtZXMiOlsiaXBBZGRyZXNzIiwiUHJvbWlzZSIsInJlc29sdmUiLCIkIiwiZ2V0IiwidGFibGVPdXRlcndyYXAiLCJJRCIsImJhc2VDbGFzcyIsIm1pbldpZHRoIiwiaGFzTW9iaWxlIiwiY2VsbHNIYXZlUGFkZGluZyIsInRhYmxlIiwiYWxpZ25tZW50IiwibG9hZGluZyIsIm5vUmVzdWx0cyIsIml0ZW1TaW5nbGVMYWJlbCIsIml0ZW1QbHVyYWxMYWJlbCIsImVycm9yIiwicGFnZVN0YXR1cyIsInNob3dQYWdlU3RhdHVzIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25JdGVtIiwidmFsdWUiLCJoZWFkaW5nQ2VsbCIsImV4dHJhQ2xhc3NlcyIsInNsdWciLCJpY29uIiwibGFiZWwiLCJzdHlsZSIsInJvdyIsInJvd0lEIiwiY2VsbHMiLCJkcmlsbGRvd24iLCJyb3dDZWxsIiwiY29sdW1uIiwic2VhcmNoRmllbGQiLCJzZWFyY2giLCJsZW5ndGgiLCJpcERldGFpbHMiLCJleHRyYSIsImlwRGV0YWlsc0l0ZW0iLCJmaWVsZHMiLCJmaWVsZHNJdGVtIiwiZXNjSFRNTCIsImJ1dHRvbiIsImFjdGlvbiIsImlzTXVsdGkiLCJhY3Rpb25zIiwiYWN0aW9uc092ZXJsYXkiLCJEYXRhVGFibGUiLCJkZWZhdWx0cyIsImFjdGlvbnNJdGVtIiwiY3VzdG9tSWNvblN0eWxlIiwiY29tcGFyZVZhbHVlcyIsInZhbHVlQSIsInZhbHVlQiIsInBhcnNlRmxvYXQiLCJ0b2dnbGVBY3Rpb25zUG9wdXAiLCJhY3Rpb25zUG9wdXAkIiwiaXNPcGVuIiwib3ZlcmxheSQiLCJkYXRhIiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJtYXJrdXAiLCJhZGRDbGFzcyIsImFwcGVuZFRvIiwiZG9jdW1lbnQiLCJib2R5Iiwib25lIiwiZ2V0QnJlYWtkb3duVG90YWwiLCJicmVha2Rvd24iLCJicmVha2Rvd25LZXlzIiwibWFwIiwiYnJlYWtkb3duSXRlbSIsInJlZHVjZSIsImEiLCJiIiwibm9ybWFsaXplQ29sdW1ucyIsImNvbHVtbnMiLCJpIiwiaiIsImxlbiIsImxlbjEiLCJvdXRwdXQiLCJyZWYiLCJBcnJheSIsImlzQXJyYXkiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJ0eXBlIiwiZ2V0QnJlYWtkb3duQmFyV2lkdGgiLCJsYXJnZXN0IiwiYnJlYWtkb3duQmFyVG90YWwiLCJnZW5IZWFkZXJDZWxsU3R5bGUiLCJzdHlsZVN0cmluZyIsIndpZHRoIiwiZ3JvdyIsImdlbkNlbGxTdHlsZSIsImNvbG9yIiwiY29sb3JNYXBwaW5nIiwiY29sb3JUeXBlIiwiY3VzdG9tU3R5bGUiLCJnZW5DZWxsQ2xhc3NuYW1lIiwiY2xhc3NTdHJpbmciLCJzb3J0YWJsZSIsIm5vTGFiZWwiLCJpc0xpbmsiLCJub0VsbGlwc2lzIiwic2hvd092ZXJmbG93IiwiYWx3YXlzQ2VudGVyIiwiaW5jbHVkZXMiLCJpY29uTWFwcGluZyIsImljb25UeXBlIiwiY2FsY1BhZ2VDb3VudCIsInJvd3MiLCJwYWdlQ291bnRSZWFsIiwiTWF0aCIsImNlaWwiLCJvcHRpb25zIiwicGVyUGFnZSIsInBhZ2VDb3VudCIsInBhZ2VDb3VudE1heCIsImNhbGNQZXJjZW50YWdlU3RyaW5nIiwiY29sdW1uVmFsdWUiLCJjb2x1bW5OYW1lIiwiY29sdW1uQSIsImNvbHVtbkIiLCJmb3JtdWxhIiwibWF0aE9wZXJhdG9yIiwicGVyY2VudCIsInBlcmNlbnRhZ2VWYWx1ZSIsInBlcmNlbnRhZ2UiLCJjb252ZXJ0VG9QZXJjZW50Iiwic29ydFJvd3MiLCJ0YXJnZXRDb2x1bW4iLCJzb3J0QnkiLCJjdXN0b21Tb3J0IiwicmF3VmFsdWUiLCJzb3J0ZXIiLCJzbGljZSIsInJldmVyc2UiLCJzb3J0Rm4iLCJyYXdWYWx1ZUZvcm1hdHRlciIsImFWYWx1ZSIsImJWYWx1ZSIsInNvcnREaXJlY3Rpb24iLCJzb3J0Iiwic2V0VmlzaWJsZVBhZ2UiLCJ0YXJnZXRQYWdlIiwicm93c1RvSGlkZSIsInJvd3NUb1JldmVhbCIsImF2YWlsYWJsZVJvd3MiLCJ2aXNpYmxlUm93cyIsInZpc2libGUiLCJwdXNoIiwiYXBwbHkiLCJzZXRQYWdlSW5kaWNhdG9yIiwibWF0Y2hlZFBhZ2VFbCQiLCJwYWdlSXRlbXMkIiwiZWxzIiwiZmluZCIsImVxIiwibm90IiwiZ2VuZXJhdGVIZWFkaW5nQ29sdW1ucyIsImhhc0JyZWFrZG93bkJhciIsIk9iamVjdCIsImtleXMiLCJnbG9iYWxTdHlsZXMiLCJpbm5lckhUTUwiLCJtYXJrdXBBcmdzIiwiam9pbiIsInVwZGF0ZUNvbHVtbnMiLCJ1cGRhdGVkQ29sdW1ucyIsImV4dGVuZCIsImRlZXAiLCJjdXJyZW50UGFnZSIsInByb2Nlc3NSb3ciLCJwcm9jZXNzZWQiLCJnZW5lcmF0ZVJvdyIsIlNpbXBseUJpbmQiLCJ1cGRhdGVFdmVuSWZTYW1lIiwib2YiLCJ0byIsImlzVmlzaWJsZSIsInByZXZWYWx1ZSIsImVsIiwiZGV0YWNoIiwidGFibGVCb2R5IiwidXBkYXRlZEJyZWFrZG93bldpZHRoIiwiYnJlYWtkb3duQmFyV2lkdGgiLCJsYXJnZXN0QnJlYWtkb3duVG90YWwiLCJ0cmFuc2Zvcm0iLCJhbmQiLCJjaGFpblRvIiwiYnJlYWtkb3duQmFyRWwiLCJkcmlsbGRvd25FbCIsImluZGV4IiwicmVmMSIsInJlZjIiLCJjb25kaXRpb24iLCJjb25kaXRpb25BbGwiLCJ1bnByb2Nlc3NSb3ciLCJ1bkJpbmRBbGwiLCJkcmlsbGRvd25FbHMiLCJyZVJlbmRlclJvdyIsIm5ld1Jvd0VsIiwicHJldlJvd0VsIiwiZ2VuZXJhdGVSb3dNYXJrdXAiLCJyZXBsYWNlV2l0aCIsImV4cGFuZEJ1dHRvbiIsImNoaWxkcmVuIiwiZmlyc3QiLCJtYXgiLCJzdWJSb3ciLCJkcmlsbGRvd25PcGVuIiwib25jZSIsInNldFRpbWVvdXQiLCJidXR0b25IZWlnaHQiLCJyb3dIZWlnaHQiLCJoZWlnaHQiLCJ0b3AiLCJ1cGRhdGVPbiIsInRocm90dGxlIiwid2luZG93IiwicGFyZW50Um93IiwiaXNTdWIiLCJ1bmlxdWVJRCIsImRyaWxsZG93bk1hcmt1cHMiLCJkcmlsbGRvd25Sb3ciLCJjZWxsVmFsdWUiLCJyb3dDZWxscyIsImdlbmVyYXRlSW5saW5lRmllbGRzIiwiZ2VuZXJhdGVJcERldGFpbHMiLCJnZW5lcmF0ZUJyZWFrZG93bkJhciIsImdlbmVyYXRlQnV0dG9uIiwiYnV0dG9uSWNvbiIsImdlbmVyYXRlQWN0aW9ucyIsImZvcm1hdHRlciIsImRhdGFGaWVsZHMiLCJhY3Rpb25zTWFya3VwIiwiYnV0dG9uTWFya3VwIiwiZXh0cmFNYXJrdXAiLCJhdHRhY2hFdmVudHMiLCJvbiIsImV2ZW50IiwiJHRoaXMiLCJpc0JhY2siLCJpc0V4dHJhIiwiaXNOZXh0IiwicGFnZU51bWJlciIsImN1cnJlbnRUYXJnZXQiLCJoYXNDbGFzcyIsImh0bWwiLCJ0YWJsZUhlYWRpbmciLCJ0ZXh0Q29udGVudCIsImJ1dHRvbiQiLCJkYXRhSXRlbSIsIml0ZW1JRCIsIml0ZW1JbmRleCIsIml0ZW1Sb3ckIiwibmV4dCIsImNsb3Nlc3QiLCJhbGxSb3dzIiwicGFyZW50IiwidHJpZ2dlciIsIml0ZW1Sb3ciLCJjb250ZW50JCIsImNvdW50cnkkIiwiaXNMb2FkZWQiLCJ0cmlnZ2VyJCIsIndyYXBwZXIkIiwiaXBEYXRhRmV0Y2hlciIsInRoZW4iLCJhdHRhY2hCaW5kaW5ncyIsImwiLCJzZXR0aW5ncyIsInRyYWNrQXJyYXlDaGlsZHJlbiIsInN0YXRlIiwibm9SZXN1bHRzTWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiaGFzRXJyb3IiLCJlcnIiLCJjb25zb2xlIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwibW9iaWxlV2lkdGgiLCJpc0hpZGRlbiIsInRhYmxlSUQiLCJwcmV2Um93cyIsImluZGV4T2YiLCJzZWFyY2hDcml0ZXJpYSIsInVwZGF0ZU9uQmluZCIsInBhZ2luYXRpb25JdGVtcyIsImNvdW50IiwicGFnaW5hdGlvbkV4dHJhU2VsZWN0IiwicmVhbENvdW50IiwicGFnaW5hdGlvbkV4dHJhVGV4dCIsInRyYW5zZm9ybVNlbGYiLCJzZWFyY2hQYXJhbSIsIm9wdGlvbiIsInBpcGUiLCJib3RoV2F5cyIsInJvd3NUb01ha2VBdmFpbGFibGUiLCJmaWx0ZXIiLCJyb3dWYWx1ZSIsInRvU3RyaW5nIiwicm93RmlsdGVyIiwibmFtZSIsInJvd0Nsb25lIiwiY2xvbmUiLCJjdXJyZW50U29ydCIsInByZXZTb3J0IiwiY3VycmVudCIsInByZXYiLCJjdXJyZW50SUQiLCJFdmVudEVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsImRlZXBPbmx5IiwibGFzdCIsInBhZ2luYXRpb25FeHRyYSIsImluc2VydEJlZm9yZSIsInByZXBlbmRUbyIsImFwcGVuZCIsImJpbmQiLCJsb2FkT25Jbml0IiwibG9hZERhdGEiLCJmZXRjaERhdGEiLCJjYWxsIiwiY2F0Y2giLCJzZXREYXRhIiwiYXBwZW5kRGF0YSIsInJlZnJlc2giLCJhcmdzT2JqZWN0IiwicHJvdG90eXBlIiwiZ2VuZXJhbE1ldGhvZHMiLCJldmVudE1ldGhvZHMiLCJiaW5kaW5nTWV0aG9kcyIsInVzZXJBY3Rpb25NZXRob2RzIiwidmVyc2lvbiIsImhlbHBlcnMiXSwibWFwcGluZ3MiOiIwN0JBQUEsZUFDQzthQUFXLEVBQVg7a0JBQ2dCLEVBRGhCO2NBRVksQ0FGWjtpQkFHZSxHQUhmO3NCQUlvQixLQUpwQjtlQUthLElBTGI7Z0JBTWMsSUFOZDthQU9XLEVBUFg7WUFRVSxFQVJWO2dCQVNjLEVBVGQ7ZUFVYSxXQVZiO29CQVdrQixJQVhsQjtZQVlVLEVBWlY7ZUFhYSxNQWJiO2FBY1csS0FkWDttQkFlaUIsVUFBQ0EsU0FBRDtXQUFjLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO2FBQVlDLENBQUMsQ0FBQ0Ms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
