(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('smart-extend'),require('event-lite'),require('jquery'),require('escape-html'),require('@danielkalen/simplybind')):typeof define==='function'&&define.amd?define(['smart-extend','event-lite','jquery','escape-html','@danielkalen/simplybind'],f):(g=g||self,g['@danielkalen/data_table']=f(g.extend$1,g.EventEmitter,g.$$1,g.escHTML,g.SimplyBind));}(this,function(extend$1, EventEmitter, $$1, escHTML, SimplyBind){'use strict';extend$1=extend$1&&extend$1.hasOwnProperty('default')?extend$1['default']:extend$1;EventEmitter=EventEmitter&&EventEmitter.hasOwnProperty('default')?EventEmitter['default']:EventEmitter;$$1=$$1&&$$1.hasOwnProperty('default')?$$1['default']:$$1;escHTML=escHTML&&escHTML.hasOwnProperty('default')?escHTML['default']:escHTML;SimplyBind=SimplyBind&&SimplyBind.hasOwnProperty('default')?SimplyBind['default']:SimplyBind;var version = "2.10.1";var defaults = {
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
  extend$1.deep(this.options.columns, updatedColumns);
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
var DataTable$1 = DataTable;return DataTable$1;}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV90YWJsZS5kZWJ1Zy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL21hcmt1cC5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL2hlbHBlcnMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9tZXRob2RzL2dlbmVyYWwuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9tZXRob2RzL2NvbHVtbi5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL21ldGhvZHMvcm93LmNvZmZlZSIsIi4uLy4uL3NyYy9jb2ZmZWUvcGFydHMvbWV0aG9kcy9zcGVjaWFsQ2VsbHMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9hdHRhY2hFdmVudHMuY29mZmVlIiwiLi4vLi4vc3JjL2NvZmZlZS9wYXJ0cy9hdHRhY2hCaW5kaW5ncy5jb2ZmZWUiLCIuLi8uLi9zcmMvY29mZmVlL3BhcnRzL3VzZXJBY3Rpb25NZXRob2RzLmNvZmZlZSIsIi4uLy4uL3NyYy9jb2ZmZWUvaW5kZXguY29mZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFxuXHQncGVyUGFnZSc6IDIwXG5cdCdwYWdlQ291bnRNYXgnOiAxMFxuXHQnbWluV2lkdGgnOiAwXG5cdCdtb2JpbGVXaWR0aCc6IDczNlxuXHQnY2VsbHNIYXZlUGFkZGluZyc6IGZhbHNlXG5cdCdoYXNNb2JpbGUnOiB0cnVlXG5cdCdsb2FkT25Jbml0JzogdHJ1ZVxuXHQnY29sdW1ucyc6IFtdXG5cdCdzZWFyY2gnOiBbXVxuXHQncGVyY2VudGFnZSc6IHt9XG5cdCdiYXNlQ2xhc3MnOiAnRGF0YVRhYmxlJ1xuXHQnc2hvd1BhZ2VTdGF0dXMnOiB0cnVlXG5cdCdzb3J0QnknOiAnJ1xuXHQnYWxpZ25tZW50JzogJ2xlZnQnXG5cdCdhY3Rpb25zJzogZmFsc2Vcblx0J2lwRGF0YUZldGNoZXInOiAoaXBBZGRyZXNzKS0+IG5ldyBQcm9taXNlIChyZXNvbHZlKS0+ICQuZ2V0IFwiaHR0cDovL2lwaW5mby5pby8je2lwQWRkcmVzc31cIiwgcmVzb2x2ZSwgJ0pTT04nXG4iLCJpbXBvcnQgRGF0YVRhYmxlIGZyb20gJy4uLydcbmltcG9ydCBlc2NIVE1MIGZyb20gJ2VzY2FwZS1odG1sJ1xuXG5leHBvcnQgdGFibGVPdXRlcndyYXAgPSAoe0lELCBiYXNlQ2xhc3MsIG1pbldpZHRoLCBoYXNNb2JpbGUsIGNlbGxzSGF2ZVBhZGRpbmd9KS0+IFwiXG5cdDxkaXYgaWQ9JyN7YmFzZUNsYXNzfS0je0lEfScgY2xhc3M9JyN7YmFzZUNsYXNzfS1vdXRlcndyYXAge3tsb2FkaW5nfX0ge3tub1Jlc3VsdHN9fSB7e2hhc0Vycm9yfX1cblx0XHQje2lmIG1pbldpZHRoIHRoZW4gJ19oYXNNaW5XaWR0aCcgZWxzZSAnJ31cblx0XHQje2lmIGhhc01vYmlsZSB0aGVuICd7e21vYmlsZVZlcnNpb259fScgZWxzZSAnJ31cblx0XHQje2lmIGNlbGxzSGF2ZVBhZGRpbmcgdGhlbiAnX2NlbGxzSGF2ZVBhZGRpbmcnIGVsc2UgJyd9XG5cdCc+PC9kaXY+XG5cIlxuXG5leHBvcnQgdGFibGUgPSAoe2Jhc2VDbGFzcywgYWxpZ25tZW50fSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30gYWxpZ25tZW50LS0tI3thbGlnbm1lbnR9IHNvcnREaXJlY3Rpb24tLS17e3NvcnREaXJlY3Rpb259fSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmcnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmctcm93Jz48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keSc+PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgbG9hZGluZyA9ICh7YmFzZUNsYXNzfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZyB7e2lzVmlzaWJsZX19Jz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pbm5lcndyYXAnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctaWNvbic+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy10ZXh0Jz5Mb2FkaW5nPC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgbm9SZXN1bHRzID0gKHtiYXNlQ2xhc3MsIGl0ZW1TaW5nbGVMYWJlbD0nSXRlbScsIGl0ZW1QbHVyYWxMYWJlbD1pdGVtU2luZ2xlTGFiZWwrJ3MnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzIHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtaW5uZXJ3cmFwJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtaWNvbic+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQtdGl0bGUnPk5vICN7aXRlbVNpbmdsZUxhYmVsfXMgdG8gRGlzcGxheTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQtc3VidGl0bGUnPlRoZXJlIGFyZSBubyBtYXRjaGluZyAje2l0ZW1QbHVyYWxMYWJlbH0gZm9yIHRoZSBzZWFyY2ggcXVlcnkgeW91J3ZlIHR5cGVkLjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgZXJyb3IgPSAoe2Jhc2VDbGFzc30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yIHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1lcnJvci1pbm5lcndyYXAnPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWljb24nPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC10aXRsZSc+QSBGYXRhbCBFcnJvciBoYXMgT2NjdXJlZDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC1zdWJ0aXRsZSc+UmVwb3J0IHRoZSBmb2xsb3dpbmcgdG8gdGhlIGFkbWluOjxiciAvPlxcXCJ7e2Vycm9yTWVzc2FnZX19XFxcIjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5leHBvcnQgcGFnZVN0YXR1cyA9ICh7YmFzZUNsYXNzLCBzaG93UGFnZVN0YXR1c30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2VTdGF0dXMgI3tpZiBzaG93UGFnZVN0YXR1cyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnfSc+XG5cdFx0U2hvd2luZyB7e3Jvd1JhbmdlfX0gb2Yge3t0b3RhbFJvd3N9fVxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHBhZ2luYXRpb24gPSAoe2Jhc2VDbGFzc30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24ge3toYXNFeHRyYX19IHt7aXNWaXNpYmxlfX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0gX3BhZ2luYXRpb25JdGVtIF9iYWNrJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtc3dyYXAgX3BhZ2luYXRpb25JdGVtcyc+PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfZXh0cmFJbmRpY2F0b3InPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tc2VsZWN0Jz48L3NlbGVjdD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfbmV4dCc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHBhZ2luYXRpb25JdGVtID0gKHtiYXNlQ2xhc3MsIHZhbHVlfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5leHBvcnQgaGVhZGluZ0NlbGwgPSAoe2Jhc2VDbGFzcywgZXh0cmFDbGFzc2VzPScnLCBzbHVnLCBpY29uPScnLCBsYWJlbCwgc3R5bGU9Jyd9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsICN7ZXh0cmFDbGFzc2VzfSBfXyN7c2x1Z30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1pY29uPScje2ljb259JyAje3N0eWxlfT5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taGVhZGluZy1yb3ctY2VsbC10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuZXhwb3J0IHJvdyA9ICh7YmFzZUNsYXNzLCByb3dJRCwgY2VsbHMsIGRyaWxsZG93bj0nJ30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93IF90YWJsZVJvdyB7e2RyaWxsZG93blN0YXRlfX0nIGRhdGEtcm93LWlkPScje3Jvd0lEfSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWV4cGFuZERyaWxsZG93biBfZXhwYW5kRHJpbGxkb3duJz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24taWNvbic+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0I3tjZWxsc31cblx0XHRcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctZHJpbGxkb3duIF90YWJsZVJvd0RyaWxsZG93bic+XG5cdFx0XHQje2RyaWxsZG93bn1cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG5cbmV4cG9ydCByb3dDZWxsID0gKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgbGFiZWwsIGNvbHVtbiwgc2x1ZywgdmFsdWUsIHN0eWxlPScnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3ctY2VsbCBfXyN7c2x1Z30gI3tleHRyYUNsYXNzZXN9JyBkYXRhLXNsdWc9JyN7c2x1Z30nIGRhdGEtY29sdW1uPScje2NvbHVtbn0nICN7c3R5bGV9PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsLWlubmVyd3JhcCcgdGl0bGU9JyN7bGFiZWx9Jz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cblxuZXhwb3J0IHNlYXJjaEZpZWxkID0gKHtiYXNlQ2xhc3MsIHNlYXJjaH0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaCAje2lmIHNlYXJjaD8ubGVuZ3RoIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHQ8c2VsZWN0IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLXNlbGVjdCc+PC9zZWxlY3Q+XG5cdFx0PGlucHV0IGNsYXNzPScje2Jhc2VDbGFzc30tc2VhcmNoLWlucHV0JyAvPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0VHJpZ2dlcic+PC9kaXY+XG5cdDwvZGl2PlxuXCJcblxuXG5cblxuZXhwb3J0IGlwRGV0YWlscyA9ICh7YmFzZUNsYXNzLCBpcEFkZHJlc3MsIGV4dHJhPScnfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzIF9pcERldGFpbHMnIGRhdGEtaXA9JyN7aXBBZGRyZXNzfSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy10cmlnZ2VyIF9pcERldGFpbHMtdHJpZ2dlcic+PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50Jz5Mb2FkaW5nIElQIERldGFpbHM8L2Rpdj5cblx0PC9kaXY+XG5cdCN7ZXh0cmF9XG5cIlxuXG5leHBvcnQgaXBEZXRhaWxzSXRlbSA9ICh7YmFzZUNsYXNzLCBsYWJlbCwgdmFsdWV9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtJz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30taXBEZXRhaWxzLWNvbnRlbnQtaXRlbS1sYWJlbCc+I3tsYWJlbH06IDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLXZhbHVlJz4je3ZhbHVlfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cbmV4cG9ydCBmaWVsZHMgPSAoe2Jhc2VDbGFzcywgZmllbGRzfSktPiBcIlxuXHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cCc+I3tmaWVsZHN9PC9kaXY+XG5cIlxuXG5leHBvcnQgZmllbGRzSXRlbSA9ICh7YmFzZUNsYXNzLCBsYWJlbCx2YWx1ZX0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbSc+XG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbS1sYWJlbCc+I3tsYWJlbH06IDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwLWl0ZW0tdmFsdWUnPiN7ZXNjSFRNTCB2YWx1ZX08L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG5cblxuXG5leHBvcnQgYnV0dG9uID0gKHtiYXNlQ2xhc3MsIGFjdGlvbiwgaWNvbj0nJywgaXNNdWx0aX0pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbiBfYWN0aW9uQnV0dG9uICN7aWYgaXNNdWx0aSB0aGVuICdfaXNNdWx0aScgZWxzZSAnJ30nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1idXR0b24taWNvbic+I3tpY29ufTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cblxuXG5cbmV4cG9ydCBhY3Rpb25zID0gKHtiYXNlQ2xhc3MsIGFjdGlvbnN9KS0+IFwiXG5cdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zJz5cblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cCc+I3thY3Rpb25zfTwvZGl2PlxuXHQ8L2Rpdj5cblwiXG5cbmV4cG9ydCBhY3Rpb25zT3ZlcmxheSA9ICgpLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tEYXRhVGFibGUuZGVmYXVsdHMuYmFzZUNsYXNzfS1hY3Rpb25zLW92ZXJsYXknPjwvZGl2PlxuXCJcblxuZXhwb3J0IGFjdGlvbnNJdGVtID0gKHtiYXNlQ2xhc3MsIGFjdGlvbiwgaWNvbiwgbGFiZWwsIGN1c3RvbUljb25TdHlsZT0nJ30pLT4gXCJcblx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAtaXRlbSBfYWN0aW9uQnV0dG9uIF9zdWJBY3Rpb25CdXR0b24nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nIHN0eWxlPScje2N1c3RvbUljb25TdHlsZX0nPlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0tdGV4dCc+I3tsYWJlbH08L2Rpdj5cblx0PC9kaXY+XG5cIlxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi9tYXJrdXAnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cblxuZXhwb3J0IGNvbXBhcmVWYWx1ZXMgPSAodmFsdWVBLCB2YWx1ZUIpLT4gc3dpdGNoXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyB0eXBlb2YgdmFsdWVCXG5cdFx0dmFsdWVBIGlzIHZhbHVlQlxuXHRcblx0d2hlbiB0eXBlb2YgdmFsdWVBIGlzICdzdHJpbmcnXG5cdFx0dmFsdWVBIGlzICcnK3ZhbHVlQlxuXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnbnVtYmVyJ1xuXHRcdHZhbHVlQSBpcyBwYXJzZUZsb2F0KHZhbHVlQilcblxuXG5leHBvcnQgdG9nZ2xlQWN0aW9uc1BvcHVwID0gKGFjdGlvbnNQb3B1cCQpLT5cblx0aXNPcGVuID0gYWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nXG5cblx0aWYgaXNPcGVuXG5cdFx0YWN0aW9uc1BvcHVwJC5kYXRhKCdvdmVybGF5JykucmVtb3ZlKClcblx0XHRhY3Rpb25zUG9wdXAkLnJlbW92ZUNsYXNzICdpc192aXNpYmxlJ1xuXHRlbHNlXG5cdFx0YWN0aW9uc1BvcHVwJC5kYXRhICdvdmVybGF5Jywgb3ZlcmxheSQgPSAkKG1hcmt1cC5hY3Rpb25zT3ZlcmxheSgpKVxuXHRcdGFjdGlvbnNQb3B1cCQuYWRkQ2xhc3MgJ2lzX3Zpc2libGUnXG5cdFx0b3ZlcmxheSQuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSkub25lICdjbGljaycsICgpLT4gdG9nZ2xlQWN0aW9uc1BvcHVwKGFjdGlvbnNQb3B1cCQpXG5cblx0YWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nLCAhaXNPcGVuXG5cblxuZXhwb3J0IGdldEJyZWFrZG93blRvdGFsID0gKGJyZWFrZG93biwgYnJlYWtkb3duS2V5cyktPiBzd2l0Y2hcblx0d2hlbiBicmVha2Rvd25LZXlzLmxlbmd0aCBpcyAwIHRoZW4gMFxuXHRlbHNlXG5cdFx0YnJlYWtkb3duS2V5c1xuXHRcdFx0Lm1hcCAoYnJlYWtkb3duSXRlbSktPiBicmVha2Rvd25bYnJlYWtkb3duSXRlbV1cblx0XHRcdC5yZWR1Y2UgKGEsYiktPiBhK2JcblxuXG5cbmV4cG9ydCBub3JtYWxpemVDb2x1bW5zID0gKGNvbHVtbnMpLT5cblx0aWYgbm90IEFycmF5LmlzQXJyYXkoY29sdW1ucylcblx0XHRvdXRwdXQgPSBjb2x1bW5zXG5cdGVsc2Vcblx0XHRvdXRwdXQgPSB7fVxuXHRcdGlmIHR5cGVvZiBjb2x1bW5zWzBdIGlzICdzdHJpbmcnXG5cdFx0XHRvdXRwdXRbbGFiZWxdID0ge2xhYmVsfSBmb3IgbGFiZWwgaW4gY29sdW1uc1xuXHRcdFxuXHRcdGVsc2UgaWYgY29sdW1uc1swXT8ubGFiZWxcblx0XHRcdG91dHB1dFtjb2x1bW4ubGFiZWxdID0gY29sdW1uIGZvciBjb2x1bW4gaW4gY29sdW1uc1xuXG5cblx0Zm9yIGxhYmVsLGNvbHVtbiBvZiBvdXRwdXRcblx0XHRjb2x1bW4ubGFiZWwgPz0gbGFiZWxcblx0XHRjb2x1bW4uc2x1ZyA/PSBjb2x1bW4ubGFiZWwudG9Mb3dlckNhc2UoKS5yZXBsYWNlIC9cXFcvZywgJ18nXG5cdFx0Y29sdW1uLnR5cGUgPz0gJ3RleHQnXG5cblx0cmV0dXJuIG91dHB1dCBcblxuXG5leHBvcnQgZ2V0QnJlYWtkb3duQmFyV2lkdGggPSAocm93LCBsYXJnZXN0KS0+XG5cdChyb3cuYnJlYWtkb3duQmFyVG90YWwgLyBsYXJnZXN0KSAqICgxMDAgLSAxOClcblxuXG5leHBvcnQgZ2VuSGVhZGVyQ2VsbFN0eWxlID0gKGNvbHVtbiktPlxuXHRzdHlsZVN0cmluZyA9ICcnXG5cblx0aWYgY29sdW1uLndpZHRoXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJtYXgtd2lkdGg6ICN7Y29sdW1uLndpZHRofTtcIlxuXHRcblx0aWYgY29sdW1uLmdyb3cgPj0gMFxuXHRcdHN0eWxlU3RyaW5nICs9IFwiZmxleC1ncm93OiAje2NvbHVtbi5ncm93fTtcIlxuXG5cdHJldHVybiBpZiBzdHlsZVN0cmluZyB0aGVuIFwic3R5bGU9JyN7c3R5bGVTdHJpbmd9J1wiIGVsc2UgJydcblxuXG5cbmV4cG9ydCBnZW5DZWxsU3R5bGUgPSAoY29sdW1uKS0+XG5cdHN0eWxlU3RyaW5nID0gJydcblxuXHRpZiBjb2x1bW4ud2lkdGhcblx0XHRzdHlsZVN0cmluZyArPSBcIm1heC13aWR0aDogI3tjb2x1bW4ud2lkdGh9O1wiXG5cblx0aWYgY29sdW1uLmNvbG9yXG5cdFx0Y29sb3IgPSBAY29sb3JNYXBwaW5nKGNvbHVtbi5jb2xvciwgY29sdW1uLmNvbG9yVHlwZSlcblx0XHRzdHlsZVN0cmluZyArPSBcImNvbG9yOiAje2NvbG9yfTtcIlxuXG5cdGlmIGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcdHN0eWxlU3RyaW5nICs9IGNvbHVtbi5jdXN0b21TdHlsZVxuXHRcblx0aWYgY29sdW1uLmdyb3cgPj0gMFxuXHRcdHN0eWxlU3RyaW5nICs9IFwiZmxleC1ncm93OiAje2NvbHVtbi5ncm93fTtcIlxuXG5cdHJldHVybiBpZiBzdHlsZVN0cmluZyB0aGVuIFwic3R5bGU9JyN7c3R5bGVTdHJpbmd9J1wiIGVsc2UgJydcblxuXG5cblxuZXhwb3J0IGdlbkNlbGxDbGFzc25hbWUgPSAoY29sdW1uKS0+XG5cdGNsYXNzU3RyaW5nID0gJydcblx0XG5cdGlmIGNvbHVtbi5zb3J0YWJsZVxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzU29ydGFibGUge3tjdXJyZW50U29ydH19J1xuXHRcblx0aWYgY29sdW1uLm5vTGFiZWxcblx0XHRjbGFzc1N0cmluZyArPSAnIF9ub0xhYmVsJ1xuXHRcblx0aWYgY29sdW1uLmlzTGlua1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzTGluaydcblx0XG5cdGlmIGNvbHVtbi5ub0VsbGlwc2lzXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9FbGxpcHNpcydcblx0XG5cdGlmIGNvbHVtbi5zaG93T3ZlcmZsb3dcblx0XHRjbGFzc1N0cmluZyArPSAnIF9zaG93T3ZlcmZsb3cnXG5cdFxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjbGFzc1N0cmluZyArPSAnIF9oYXNDb2xvcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdidXR0b24nIG9yIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnV0dG9uJ1xuXHRcdGNvbHVtbi5hbHdheXNDZW50ZXIgPSB0cnVlXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnJlYWtkb3duQmFyJ1xuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0lwRGV0YWlscydcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNGaWVsZHMnXG5cdFxuXHRpZiBjb2x1bW4uYWx3YXlzQ2VudGVyXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfYWx3YXlzQ2VudGVyJ1xuXG5cdHJldHVybiBjbGFzc1N0cmluZ1xuXG5cblxuXG5cblxuXG5leHBvcnQgY29sb3JNYXBwaW5nID0gKHZhbHVlLCBjb2xvclR5cGU9J25hbWUnKS0+IHN3aXRjaCBjb2xvclR5cGVcblx0d2hlbiAnYnJvd3NlcicgdGhlbiBzd2l0Y2hcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdGaXJlZm94JyB0aGVuIEBjb2xvck1hcHBpbmcoJ29yYW5nZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQ2hyb21lJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2dyZWVuJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdTYWZhcmknIHRoZW4gQGNvbG9yTWFwcGluZygnYmx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnTW9iaWxlIFNhZmFyaScgdGhlbiBAY29sb3JNYXBwaW5nKCdibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdJRScgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGJsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0VkZ2UnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdPcGVyYScgdGhlbiBAY29sb3JNYXBwaW5nKCdyZWQnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0FuZHJvaWQnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRncmVlbicpXG5cdFx0ZWxzZSAndW5rbm93bidcblx0XG5cdFxuXHR3aGVuICdwbGF0Zm9ybScgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdNYWMgT1MgWCcgdGhlbiBAY29sb3JNYXBwaW5nKCdibGFjaycpXG5cdFx0d2hlbiAnV2luZG93cycgdGhlbiBAY29sb3JNYXBwaW5nKCdsaWdodGJsdWUnKVxuXHRcdHdoZW4gJ1dpbmRvd3MgUGhvbmUnIHRoZW4gQGNvbG9yTWFwcGluZygncHVycGxlJylcblx0XHR3aGVuICdMaW51eCcgdGhlbiBAY29sb3JNYXBwaW5nKCdkYXJreWVsbG93Jylcblx0XHR3aGVuICdpT1MnIHRoZW4gQGNvbG9yTWFwcGluZygnYmxhY2snKVxuXHRcdHdoZW4gJ0FuZHJvaWQnIHRoZW4gQGNvbG9yTWFwcGluZyhcImxpZ2h0Z3JlZW5cIilcblx0XHRlbHNlICd1bmtub3duJ1xuXHRcblx0d2hlbiAnc2F0aXNmYWN0aW9uJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ0V4Y2VsbGVudCcgdGhlbiBAY29sb3JNYXBwaW5nKCdncmVlbicpXG5cdFx0d2hlbiAnTm9ybWFsJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3llbGxvdycpXG5cdFx0d2hlbiAnUG9vcicgdGhlbiBAY29sb3JNYXBwaW5nKCdyZWQnKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cblx0XG5cdHdoZW4gJ25hbWUnIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnb3JhbmdlJyB0aGVuICcjZWU2ZjBlJ1xuXHRcdHdoZW4gJ2dyZWVuJyB0aGVuICcjMDBhZDA5J1xuXHRcdHdoZW4gJ2JsdWUnIHRoZW4gJyM0Nzg4ZjMnXG5cdFx0d2hlbiAneWVsbG93JyB0aGVuICcjZWFiNzFlJ1xuXHRcdHdoZW4gJ3JlZCcgdGhlbiAnI2NjNDgyMCdcblx0XHR3aGVuICdibGFjaycgdGhlbiAnIzE4MTgxOCdcblx0XHR3aGVuICdwdXJwbGUnIHRoZW4gJyNhMDIwYmEnXG5cdFx0d2hlbiAnbGlnaHRibHVlJyB0aGVuICcjMGNiM2VlJ1xuXHRcdHdoZW4gJ2xpZ2h0Z3JlZW4nIHRoZW4gJyM3OGMyNTcnXG5cdFx0d2hlbiAnZGFya3llbGxvdycgdGhlbiAnI2U4YWMwMSdcblxuXHRlbHNlIHZhbHVlXG5cblxuXG5cblxuXG5leHBvcnQgaWNvbk1hcHBpbmcgPSAodmFsdWUsIGljb25UeXBlKS0+IHN3aXRjaCBpY29uVHlwZVxuXHR3aGVuICdicm93c2VyJ1xuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiAnIydcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiAnJSdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ1NhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gJyQnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdJRScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0VkZ2UnIHRoZW4gJyYnXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdPcGVyYScgdGhlbiAnXCInXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuICcmIzAzOTsnXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnZGV2aWNlJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRGVza3RvcCcgdGhlbiAnISdcblx0XHRcdHdoZW4gJ1RhYmxldCcgdGhlbiAnNydcblx0XHRcdHdoZW4gJ01vYmlsZScgdGhlbiAnNidcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdwbGF0Zm9ybSdcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ01hYyBPUyBYJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnV2luZG93cycgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ1dpbmRvd3MgUGhvbmUnIHRoZW4gJyknXG5cdFx0XHR3aGVuICdMaW51eCcgdGhlbiAnKydcblx0XHRcdHdoZW4gJ2lPUycgdGhlbiAnKidcblx0XHRcdHdoZW4gJ0FuZHJvaWQnIHRoZW4gXCImIzAzOTtcIlxuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbidcblx0XHRzd2l0Y2ggdmFsdWVcblx0XHRcdHdoZW4gJ0V4Y2VsbGVudCcgdGhlbiAnWydcblx0XHRcdHdoZW4gJ05vcm1hbCcgdGhlbiAnQCdcblx0XHRcdHdoZW4gJ1Bvb3InIHRoZW4gJz8nXG5cdFx0XHRlbHNlICc0J1xuXG5cdGVsc2UgJzQnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCBjYWxjUGFnZUNvdW50ID0gKHJvd3MpLT5cblx0QHBhZ2VDb3VudFJlYWwgPSBNYXRoLmNlaWwgcm93cy5sZW5ndGgvQG9wdGlvbnMucGVyUGFnZVxuXHRAcGFnZUNvdW50ID0gaWYgQHBhZ2VDb3VudFJlYWwgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSBAcGFnZUNvdW50UmVhbFxuXG5cblxuXG5cbmV4cG9ydCBjYWxjUGVyY2VudGFnZVN0cmluZyA9IChjb2x1bW5WYWx1ZSwgY29sdW1uTmFtZSwgcm93KS0+XG5cdGZvcm11bGEgPSBAb3B0aW9ucy5wZXJjZW50YWdlW2NvbHVtbk5hbWVdXG5cdGNvbHVtbkEgPSBmb3JtdWxhWzBdXG5cdGNvbHVtbkIgPSBmb3JtdWxhWzJdXG5cdG1hdGhPcGVyYXRvciA9IGZvcm11bGFbMV1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSBzd2l0Y2ggbWF0aE9wZXJhdG9yXG5cdFx0d2hlbiAnKicgdGhlbiByb3dbY29sdW1uQV0gKiByb3dbY29sdW1uQl1cblx0XHR3aGVuICcvJyB0aGVuIHJvd1tjb2x1bW5BXSAvIHJvd1tjb2x1bW5CXVxuXHRcdHdoZW4gJysnIHRoZW4gcm93W2NvbHVtbkFdICsgcm93W2NvbHVtbkJdXG5cdFx0d2hlbiAnLScgdGhlbiByb3dbY29sdW1uQV0gLSByb3dbY29sdW1uQl1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSAwIGlmIHBlcmNlbnRhZ2VWYWx1ZSBpcyBJbmZpbml0eVxuXHRwZXJjZW50ID0gY29udmVydFRvUGVyY2VudChwZXJjZW50YWdlVmFsdWUpXG5cdHJldHVybiBcIiN7Y29sdW1uVmFsdWV9ICgje3BlcmNlbnR9KVwiXG5cblxuXG5cblxuXG5leHBvcnQgc29ydFJvd3MgPSAocm93cywgdGFyZ2V0Q29sdW1uPUBvcHRpb25zLnNvcnRCeSktPiBzd2l0Y2hcblx0d2hlbiB0YXJnZXRDb2x1bW4gaXMgJysnIHRoZW4gcm93c1xuXHR3aGVuIHRhcmdldENvbHVtbiBpcyAnLScgdGhlbiByb3dzPy5zbGljZSgpLnJldmVyc2UoKVxuXHR3aGVuIEBvcHRpb25zLmNvbHVtbnNbdGFyZ2V0Q29sdW1uXVxuXHRcdGN1c3RvbVNvcnQgPSBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl0uc29ydEZuXG5cdFx0cmF3VmFsdWUgPSBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl0ucmF3VmFsdWVGb3JtYXR0ZXJcblx0XHRzb3J0ZXIgPSBjdXN0b21Tb3J0XG5cdFx0c29ydGVyIHx8PSAoYSxiKT0+XG5cdFx0XHRhVmFsdWUgPSBpZiByYXdWYWx1ZSB0aGVuIHJhd1ZhbHVlKGFbdGFyZ2V0Q29sdW1uXSkgZWxzZSBhW3RhcmdldENvbHVtbl1cblx0XHRcdGJWYWx1ZSA9IGlmIHJhd1ZhbHVlIHRoZW4gcmF3VmFsdWUoYlt0YXJnZXRDb2x1bW5dKSBlbHNlIGJbdGFyZ2V0Q29sdW1uXVxuXHRcdFx0c3dpdGNoXG5cdFx0XHRcdHdoZW4gYVZhbHVlID4gYlZhbHVlIHRoZW4gQHNvcnREaXJlY3Rpb25cblx0XHRcdFx0d2hlbiBhVmFsdWUgPCBiVmFsdWUgdGhlbiBAc29ydERpcmVjdGlvbiAqIC0xXG5cdFx0XHRcdGVsc2UgMFxuXHRcdFxuXHRcdHJvd3Muc2xpY2UoKS5zb3J0IHNvcnRlclxuXG5cdGVsc2Ugcm93c1xuXHRcblxuXG5leHBvcnQgc2V0VmlzaWJsZVBhZ2UgPSAodGFyZ2V0UGFnZSktPlxuXHR0YXJnZXRQYWdlLS0gIyBEZWMgYnkgMSBmb3IgYXJyYXktaW5kZXggc3R5bGVcblx0c2xpY2UgPVxuXHRcdCdzdGFydCc6IHRhcmdldFBhZ2UqQG9wdGlvbnMucGVyUGFnZVxuXHRcdCdlbmQnOiAodGFyZ2V0UGFnZSpAb3B0aW9ucy5wZXJQYWdlKStAb3B0aW9ucy5wZXJQYWdlXG5cdFxuXHRyb3dzVG9SZXZlYWwgPSBAYXZhaWxhYmxlUm93c1tzbGljZS5zdGFydCAuLi4gc2xpY2UuZW5kXVxuXHRyb3dzVG9IaWRlID0gQHZpc2libGVSb3dzLnNsaWNlKClcblxuXHRyb3cudmlzaWJsZSA9IGZhbHNlIGZvciByb3cgaW4gcm93c1RvSGlkZVxuXHRAdmlzaWJsZVJvd3MubGVuZ3RoID0gMFxuXHRAdmlzaWJsZVJvd3MucHVzaC5hcHBseSBAdmlzaWJsZVJvd3MsIHJvd3NUb1JldmVhbFxuXG5cblxuXG5leHBvcnQgc2V0UGFnZUluZGljYXRvciA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UgPSAxIGlmIHRhcmdldFBhZ2UgaXMgJy4uLidcblx0dGFyZ2V0UGFnZSA9IGlmIHRhcmdldFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSB0YXJnZXRQYWdlLTEgIyAwLWJhc2VkIGluZGV4IHNvIHdlIHN1YnRyYWN0IDFcblx0cGFnZUl0ZW1zJCA9IEBlbHMucGFnaW5hdGlvbi5maW5kKCcuX3BhZ2luYXRpb25JdGVtJykuc2xpY2UoMSwtMSlcblx0bWF0Y2hlZFBhZ2VFbCQgPSBwYWdlSXRlbXMkLmVxIHRhcmdldFBhZ2Vcblx0XG5cdG1hdGNoZWRQYWdlRWwkLmFkZENsYXNzICdjdXJyZW50J1xuXHRwYWdlSXRlbXMkLm5vdChtYXRjaGVkUGFnZUVsJCkucmVtb3ZlQ2xhc3MgJ2N1cnJlbnQnXHRcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi4vbWFya3VwJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQge25vcm1hbGl6ZUNvbHVtbnMsIGdlbkhlYWRlckNlbGxTdHlsZSwgZ2VuQ2VsbENsYXNzbmFtZX0gZnJvbSAnLi4vaGVscGVycydcblxuZXhwb3J0IGdlbmVyYXRlSGVhZGluZ0NvbHVtbnMgPSAoKS0+XG5cdEBvcHRpb25zLmNvbHVtbnMgPSBub3JtYWxpemVDb2x1bW5zKEBvcHRpb25zLmNvbHVtbnMpXG5cdEBoYXNCcmVha2Rvd25CYXIgPSB0cnVlIGlmIGNvbHVtbi50eXBlIGlzICdicmVha2Rvd25CYXInIGZvciBsYWJlbCxjb2x1bW4gb2YgQG9wdGlvbnMuY29sdW1uc1xuXG5cdE9iamVjdC5rZXlzKEBvcHRpb25zLmNvbHVtbnMpXG5cdFx0Lm1hcCAobGFiZWwpPT5cblx0XHRcdGNvbHVtbiA9IEBvcHRpb25zLmNvbHVtbnNbbGFiZWxdXG5cdFx0XHRAZWxzLmdsb2JhbFN0eWxlc1swXS5pbm5lckhUTUwgKz0gXCJ7eyN7Y29sdW1uLnNsdWd9fX1cXG5cIlxuXG5cdFx0XHRtYXJrdXAuaGVhZGluZ0NlbGwgQG1hcmt1cEFyZ3Ncblx0XHRcdFx0J3NsdWcnOiBjb2x1bW4uc2x1Z1xuXHRcdFx0XHQnaWNvbic6IGNvbHVtbi5pY29uXG5cdFx0XHRcdCdsYWJlbCc6IGNvbHVtbi5sYWJlbFxuXHRcdFx0XHQnc3R5bGUnOiBnZW5IZWFkZXJDZWxsU3R5bGUoY29sdW1uKVxuXHRcdFx0XHQnZXh0cmFDbGFzc2VzJzogZ2VuQ2VsbENsYXNzbmFtZShjb2x1bW4pXG5cdFx0LmpvaW4oJycpXG5cblxuXG5cblxuZXhwb3J0IHVwZGF0ZUNvbHVtbnMgPSAodXBkYXRlZENvbHVtbnMpLT5cblx0dXBkYXRlZENvbHVtbnMgPSBub3JtYWxpemVDb2x1bW5zKHVwZGF0ZWRDb2x1bW5zKVxuXHRleHRlbmQuZGVlcChAb3B0aW9ucy5jb2x1bW5zLCB1cGRhdGVkQ29sdW1ucylcblx0QGN1cnJlbnRQYWdlID0gQGN1cnJlbnRQYWdlXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgU2ltcGx5QmluZCBmcm9tICdAZGFuaWVsa2FsZW4vc2ltcGx5YmluZCdcbmltcG9ydCAqIGFzIG1hcmt1cCBmcm9tICcuLi9tYXJrdXAnXG5pbXBvcnQge2dldEJyZWFrZG93bkJhcldpZHRoLCBnZW5DZWxsQ2xhc3NuYW1lLCBnZW5DZWxsU3R5bGV9IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmV4cG9ydCBwcm9jZXNzUm93ID0gKHJvdyktPiBpZiByb3cucHJvY2Vzc2VkIHRoZW4gcm93IGVsc2Vcblx0QGdlbmVyYXRlUm93KHJvdylcblxuXHRTaW1wbHlCaW5kKCd2aXNpYmxlJywgdXBkYXRlRXZlbklmU2FtZTp0cnVlKS5vZihyb3cpXG5cdFx0LnRvIChpc1Zpc2libGUsIHByZXZWYWx1ZSk9PlxuXHRcdFx0aWYgbm90IGlzVmlzaWJsZSBcblx0XHRcdFx0cm93LmVsLmRldGFjaCgpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJvdy5lbC5hcHBlbmRUbyBAZWxzLnRhYmxlQm9keVxuXG5cdFx0XHRcdGlmIEBoYXNCcmVha2Rvd25CYXIgYW5kIG5vdCByb3cudXBkYXRlZEJyZWFrZG93bldpZHRoIGFuZCBpc1Zpc2libGUgaXNudCBwcmV2VmFsdWVcblx0XHRcdFx0XHRyb3cuYnJlYWtkb3duQmFyV2lkdGggPSBnZXRCcmVha2Rvd25CYXJXaWR0aChyb3csIEBsYXJnZXN0QnJlYWtkb3duVG90YWwpXG5cdFx0XHRcdFxuXG5cdGlmIEBoYXNCcmVha2Rvd25CYXIgYW5kIHJvdy5icmVha2Rvd25CYXJFbD8ubGVuZ3RoXG5cdFx0U2ltcGx5QmluZCgnbGFyZ2VzdEJyZWFrZG93blRvdGFsJykub2YoQClcblx0XHRcdC50bygndXBkYXRlZEJyZWFrZG93bldpZHRoJykub2Yocm93KVxuXHRcdFx0XHQudHJhbnNmb3JtICgpLT4gaWYgcm93LnZpc2libGUgdGhlbiB0cnVlIGVsc2UgZmFsc2Vcblx0XHRcdC5hbmQudG8oJ2JyZWFrZG93bkJhcldpZHRoJykub2Yocm93KVxuXHRcdFx0XHQudHJhbnNmb3JtICgpPT4gZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXG5cdFx0XHRcdC5jaGFpblRvKCd3aWR0aCcpLm9mKHJvdy5icmVha2Rvd25CYXJFbFswXS5zdHlsZSlcblx0XHRcdFx0XHQudHJhbnNmb3JtICh3aWR0aCktPiB3aWR0aCsnJSdcblxuXHRcdFx0XHQuYW5kLnRvICgpPT5cblx0XHRcdFx0XHRmb3IgZHJpbGxkb3duRWwsaW5kZXggaW4gcm93LmRyaWxsZG93bkVsc1xuXHRcdFx0XHRcdFx0d2lkdGggPSBnZXRCcmVha2Rvd25CYXJXaWR0aChyb3cuZHJpbGxkb3duW2luZGV4XSwgcm93LmRyaWxsZG93bi5sYXJnZXN0QnJlYWtkb3duVG90YWwpXG5cdFx0XHRcdFx0XHQkKGRyaWxsZG93bkVsKS5jaGlsZHJlbignLmlzX2JyZWFrZG93bl9iYXInKS5jaGlsZHJlbigpLmNoaWxkcmVuKClbMF0/LnN0eWxlLndpZHRoID0gd2lkdGgrJyUnXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdC5jb25kaXRpb24gKCktPiByb3cuZHJpbGxkb3duXG5cdFx0XHRcdFx0XG5cdFx0XHQuY29uZGl0aW9uQWxsICgpLT4gcm93LnZpc2libGVcblxuXHRyb3cucHJvY2Vzc2VkID0gdHJ1ZVxuXHRyZXR1cm4gcm93XG5cblxuXG5cblxuZXhwb3J0IHVucHJvY2Vzc1JvdyA9IChyb3cpLT4gaWYgcm93LnByb2Nlc3NlZFxuXHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3csIHRydWUpXG5cdFxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWxbMF1cblx0XHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3cuYnJlYWtkb3duQmFyRWxbMF0uc3R5bGUpXG5cblx0cm93LmVsLnJlbW92ZSgpXG5cdGRlbGV0ZSByb3cuZWxcblx0ZGVsZXRlIHJvdy5kcmlsbGRvd25FbHNcblx0ZGVsZXRlIHJvdy52aXNpYmxlXG5cdGRlbGV0ZSByb3cuYnJlYWtkb3duQmFyRWxcblx0ZGVsZXRlIHJvdy5wcm9jZXNzZWRcblxuXG5cbmV4cG9ydCByZVJlbmRlclJvdyA9IChyb3cpLT5cblx0QGdlbmVyYXRlUm93KHJvdylcblxuXG5cbmV4cG9ydCBnZW5lcmF0ZVJvdyA9IChyb3cpLT5cblx0cHJldlJvd0VsID0gcm93LmVsXG5cdG5ld1Jvd0VsID0gcm93LmVsID0gJChAZ2VuZXJhdGVSb3dNYXJrdXAocm93KSkuZGF0YSgncm93Jywgcm93KVxuXHRwcmV2Um93RWwucmVwbGFjZVdpdGgobmV3Um93RWwpIGlmIHByZXZSb3dFbFxuXHRcblx0cm93LmV4cGFuZEJ1dHRvbiA9IHJvdy5lbC5jaGlsZHJlbigpLmZpcnN0KCkgaWYgcm93LmRyaWxsZG93blxuXHRyb3cuZHJpbGxkb3duRWxzID0gcm93LmVsLmNoaWxkcmVuKCcuX3RhYmxlUm93RHJpbGxkb3duJykuY2hpbGRyZW4oKSBpZiByb3cuZHJpbGxkb3duXG5cdHJvdy5icmVha2Rvd25CYXJFbCA9IHJvdy5lbC5jaGlsZHJlbignLmlzQnJlYWtkb3duQmFyJykuY2hpbGRyZW4oKS5jaGlsZHJlbigpIGlmIEBoYXNCcmVha2Rvd25CYXJcblx0cm93LnZpc2libGUgPSBmYWxzZSB1bmxlc3MgcHJldlJvd0VsXG5cdFxuXHRpZiByb3cuZHJpbGxkb3duXG5cdFx0aWYgQGhhc0JyZWFrZG93bkJhclxuXHRcdFx0cm93LmRyaWxsZG93bi5sYXJnZXN0QnJlYWtkb3duVG90YWwgPSBNYXRoLm1heCByb3cuZHJpbGxkb3duLm1hcCgoc3ViUm93KS0+IHN1YlJvdy5icmVha2Rvd25CYXJUb3RhbCkuLi5cblxuXHRcdFNpbXBseUJpbmQoJ2RyaWxsZG93bk9wZW4nKS5vZihyb3cpXG5cdFx0XHQudG8oJ2NsYXNzTmFtZS5kcmlsbGRvd25TdGF0ZScpLm9mKHJvdy5lbClcblx0XHRcdFx0LnRyYW5zZm9ybSAoZHJpbGxkb3duT3BlbiktPiBpZiBkcmlsbGRvd25PcGVuIHRoZW4gJ2hhc0RyaWxsZG93biBkcmlsbGRvd25Jc09wZW4nIGVsc2UgJ2hhc0RyaWxsZG93bidcblxuXHRcdFNpbXBseUJpbmQoJ3Zpc2libGUnKS5vZihyb3cpXG5cdFx0XHQub25jZS50byAoKS0+XG5cdFx0XHRcdFNpbXBseUJpbmQgKCktPlxuXHRcdFx0XHRcdGlmIG5vdCByb3cuZHJpbGxkb3duT3BlbiB0aGVuIHNldFRpbWVvdXQgKCktPlxuXHRcdFx0XHRcdFx0cm93SGVpZ2h0ID0gcm93LmVsLmhlaWdodCgpXG5cdFx0XHRcdFx0XHRidXR0b25IZWlnaHQgPSByb3cuZXhwYW5kQnV0dG9uLmhlaWdodCgpXG5cdFx0XHRcdFx0XHRyb3cuZXhwYW5kQnV0dG9uWzBdLnN0eWxlLnRvcCA9IFwiI3tyb3dIZWlnaHQvMiAtIGJ1dHRvbkhlaWdodC8yfXB4XCJcblxuXHRcdFx0XHQudXBkYXRlT24oJ2V2ZW50OnJlc2l6ZScsIHRocm90dGxlOjMwMCkub2Yod2luZG93KVxuXHRcdFx0LmNvbmRpdGlvbiAodmlzaWJsZSktPiB2aXNpYmxlXG5cblx0cmV0dXJuIHJvd1xuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZVJvd01hcmt1cCA9IChyb3csIHBhcmVudFJvdyktPlxuXHRpc1N1YiA9ICEhcGFyZW50Um93XG5cdFxuXHRtYXJrdXAucm93IEBtYXJrdXBBcmdzXG5cdFx0J3Jvd0lEJzogaWYgaXNTdWIgdGhlbiBwYXJlbnRSb3dbQG9wdGlvbnMudW5pcXVlSURdIGVsc2Ugcm93W0BvcHRpb25zLnVuaXF1ZUlEXVxuXHRcdCdkcmlsbGRvd24nOiBpZiBpc1N1YiB0aGVuICcnIGVsc2UgaWYgcm93LmRyaWxsZG93biB0aGVuIGRvICgpPT5cblx0XHRcdGRyaWxsZG93bk1hcmt1cHMgPSAnJ1xuXHRcdFx0ZHJpbGxkb3duTWFya3VwcyArPSBAZ2VuZXJhdGVSb3dNYXJrdXAoZHJpbGxkb3duUm93LCByb3cpIGZvciBkcmlsbGRvd25Sb3cgaW4gcm93LmRyaWxsZG93blxuXHRcdFx0cmV0dXJuIGRyaWxsZG93bk1hcmt1cHNcblx0XHRcblx0XHQnY2VsbHMnOiBkbyAoKT0+XG5cdFx0XHRyb3dDZWxscyA9ICcnXG5cdFx0XHRcblx0XHRcdGZvciBjb2x1bW5OYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zXG5cdFx0XHRcdGNlbGxWYWx1ZSA9IHJvd1tjb2x1bW5OYW1lXVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnBlcmNlbnRhZ2VbY29sdW1uTmFtZV1cblx0XHRcdFx0XHRjZWxsVmFsdWUgPSBAY2FsY1BlcmNlbnRhZ2VTdHJpbmcoY2VsbFZhbHVlLCBjb2x1bW5OYW1lLCByb3cpXG5cblxuXHRcdFx0XHRyb3dDZWxscyArPSBtYXJrdXAucm93Q2VsbCBAbWFya3VwQXJnc1xuXHRcdFx0XHRcdCdsYWJlbCc6IGlmIHR5cGVvZiBjZWxsVmFsdWUgaXMgJ3N0cmluZycgdGhlbiBjZWxsVmFsdWUgZWxzZSAnJ1xuXHRcdFx0XHRcdCdjb2x1bW4nOiBjb2x1bW5OYW1lXG5cdFx0XHRcdFx0J3NsdWcnOiBjb2x1bW4uc2x1Z1xuXHRcdFx0XHRcdCdleHRyYUNsYXNzZXMnOiBnZW5DZWxsQ2xhc3NuYW1lKGNvbHVtbilcblx0XHRcdFx0XHQnc3R5bGUnOiBnZW5DZWxsU3R5bGUoY29sdW1uKVxuXHRcdFx0XHRcdCd2YWx1ZSc6IGRvICgpPT4gc3dpdGNoXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnIFx0XHR0aGVuIEBnZW5lcmF0ZUlubGluZUZpZWxkcyhjZWxsVmFsdWUsIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnaXBEZXRhaWxzJyBcdHRoZW4gQGdlbmVyYXRlSXBEZXRhaWxzKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdicmVha2Rvd25CYXInIFx0dGhlbiBAZ2VuZXJhdGVCcmVha2Rvd25CYXIoY2VsbFZhbHVlLCByb3csIGNvbHVtbilcblx0XHRcdFx0XHRcdHdoZW4gY29sdW1uLnR5cGUgaXMgJ2J1dHRvbicgXHRcdHRoZW4gQGdlbmVyYXRlQnV0dG9uKChjb2x1bW4uYWN0aW9uIG9yIGNlbGxWYWx1ZSksIChjb2x1bW4uYnV0dG9uSWNvbiBvciBjb2x1bW4uaWNvbikpXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJyBcdFx0dGhlbiBAZ2VuZXJhdGVBY3Rpb25zKGNvbHVtbiwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi5pc0xpbmsgXHRcdFx0XHRcdHRoZW4gXCI8YSBocmVmPScje2NlbGxWYWx1ZX0nIHRhcmdldD0nX2JsYW5rJz4je2NlbGxWYWx1ZX08L2E+XCJcblx0XHRcdFx0XHRcdGVsc2UgKGlmIGNvbHVtbi5mb3JtYXR0ZXIgdGhlbiBjb2x1bW4uZm9ybWF0dGVyKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pIGVsc2UgY2VsbFZhbHVlKVxuXHRcdFx0XHRcdFxuXHRcdFx0cmV0dXJuIHJvd0NlbGxzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi4vbWFya3VwJ1xuXG4jIGV4cG9ydCBnZW5lcmF0ZUJyZWFrZG93bkJhciA9IChicmVha2Rvd24sIHJvd09iaiwgY29sdW1uRW50aXR5KS0+XG4jIFx0YnJlYWtkb3duS2V5cyA9IEBsZWdlbmQgb3IgT2JqZWN0LmtleXMoYnJlYWtkb3duKVxuIyBcdHJvd09iai5icmVha2Rvd25CYXJUb3RhbCA9IHRvdGFsID0gQGdldEJyZWFrZG93blRvdGFsKGJyZWFrZG93biwgYnJlYWtkb3duS2V5cylcblx0XG4jIFx0cmV0dXJuICdOL0EnIHVubGVzcyB0b3RhbFxuXHRcbiMgXHRtYXJrdXAuYnJlYWtkb3duQmFyIEBtYXJrdXBBcmdzXG4jIFx0XHQndG90YWwnOiB0b3RhbFxuIyBcdFx0J3RvdGFsRm9ybWF0dGVkJzogaWYgY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0IHRoZW4gY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0KHRvdGFsKSBlbHNlIHRvdGFsXG4jIFx0XHQnYmFycyc6IGRvICgpLT5cbiMgXHRcdFx0YmFycyA9ICcnXG4jIFx0XHRcdGZvciBrZXkgaW4gYnJlYWtkb3duS2V5c1xuIyBcdFx0XHRcdHZhbHVlID0gYnJlYWtkb3duW2tleV1cbiMgXHRcdFx0XHRiYXJzICs9IG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9iYXIucmVwbGFjZSAne3t3aWR0aH19JywgKHZhbHVlL3RvdGFsKSoxMDBcbiMgXHRcdFx0cmV0dXJuIGJhcnNcblxuIyBcdFx0J2hvdmVyQm94JzogZG8gKCktPlxuIyBcdFx0XHRtYXJrdXAuYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25faG92ZXJib3hcbiMgXHRcdFx0XHQucmVwbGFjZSAne3tyb3dzfX0nLCAoKS0+XG4jIFx0XHRcdFx0XHRyb3dzID0gJydcblx0XHRcdFx0XHRcbiMgXHRcdFx0XHRcdGJyZWFrZG93bktleXMuZm9yRWFjaCAoa2V5LCBpbmRleCktPlxuIyBcdFx0XHRcdFx0XHRyb3dzICs9IG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9ob3ZlcmJveF9yb3dcbiMgXHRcdFx0XHRcdFx0XHQucmVwbGFjZSAne3tjb2xvcn19JywgY3VzdG9tQ29sb3JzKGluZGV4KVxuIyBcdFx0XHRcdFx0XHRcdC5yZXBsYWNlICd7e2tleX19Jywga2V5XG4jIFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7dmFsdWV9fScsIGlmIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdCB0aGVuIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdChicmVha2Rvd25ba2V5XSkgZWxzZSBicmVha2Rvd25ba2V5XVxuXG4jIFx0XHRcdFx0XHRyZXR1cm4gcm93c1xuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZUlubGluZUZpZWxkcyA9IChkYXRhRmllbGRzKS0+XG5cdG1hcmt1cC5maWVsZHMgQG1hcmt1cEFyZ3MgJ2ZpZWxkcyc6IGRvICgpPT5cblx0XHRyZXR1cm4gJycgdW5sZXNzIHR5cGVvZiBkYXRhRmllbGRzIGlzICdvYmplY3QnXG5cdFx0XG5cdFx0b3V0cHV0ID0gZm9yIGxhYmVsLHZhbHVlIG9mIGRhdGFGaWVsZHNcblx0XHRcdG1hcmt1cC5maWVsZHNJdGVtIEBtYXJrdXBBcmdzIHtsYWJlbCx2YWx1ZX1cblxuXG5cdFx0cmV0dXJuIG91dHB1dC5qb2luKCcnKVxuXG5cblxuXG5cblxuZXhwb3J0IGdlbmVyYXRlQnV0dG9uID0gKGFjdGlvbiwgaWNvbiwgaXNNdWx0aSktPlxuXHRtYXJrdXAuYnV0dG9uKEBtYXJrdXBBcmdzIHthY3Rpb24sIGljb24sIGlzTXVsdGl9KVxuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZUFjdGlvbnMgPSAoY29sdW1uKS0+XG5cdGNvbHVtbi5hY3Rpb25zID89ICdtdWx0aUFjdGlvbnMnXG5cdGJ1dHRvbk1hcmt1cCA9IEBnZW5lcmF0ZUJ1dHRvbihjb2x1bW4uYWN0aW9ucywgKGNvbHVtbi5idXR0b25JY29uIG9yIGNvbHVtbi5pY29uKSwgdHJ1ZSlcblx0YWN0aW9uc01hcmt1cCA9IG1hcmt1cC5hY3Rpb25zIEBtYXJrdXBBcmdzICdhY3Rpb25zJzogZG8gKCk9PlxuXHRcdHJldHVybiAnJyB1bmxlc3MgQG9wdGlvbnMuYWN0aW9uc1xuXHRcdFxuXHRcdG91dHB1dCA9IGZvciBhY3Rpb24gaW4gQG9wdGlvbnMuYWN0aW9uc1xuXHRcdFx0bWFya3VwLmFjdGlvbnNJdGVtKEBtYXJrdXBBcmdzIGFjdGlvbilcblxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJylcblxuXHRyZXR1cm4gYnV0dG9uTWFya3VwK2FjdGlvbnNNYXJrdXBcblxuXG5cblxuXG5cbmV4cG9ydCBnZW5lcmF0ZUlwRGV0YWlscyA9IChpcEFkZHJlc3MsIHJvdywgY29sdW1uKS0+XG5cdG1hcmt1cC5pcERldGFpbHMgQG1hcmt1cEFyZ3Mge2lwQWRkcmVzcywgZXh0cmE6Y29sdW1uLmV4dHJhTWFya3VwPyhpcEFkZHJlc3MsIHJvdyl9ICMgZGF0YSBhdHRyaWJ1dGVcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAqIGFzIG1hcmt1cCBmcm9tICcuL21hcmt1cCdcbmltcG9ydCB7dG9nZ2xlQWN0aW9uc1BvcHVwLCBjb21wYXJlVmFsdWVzfSBmcm9tICcuL2hlbHBlcnMnXG5cbmV4cG9ydCBhdHRhY2hFdmVudHMgPSAoKS0+XG5cdCMgPT09PSBQYWdpbmF0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnBhZ2luYXRpb24ub24gJ2NsaWNrJywgJy5fcGFnaW5hdGlvbkl0ZW0nLCAoZXZlbnQpPT5cblx0XHQkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpc0JhY2sgPSAkdGhpcy5oYXNDbGFzcygnX2JhY2snKVxuXHRcdGlzTmV4dCA9ICR0aGlzLmhhc0NsYXNzKCdfbmV4dCcpXG5cdFx0aXNFeHRyYSA9ICR0aGlzLmhhc0NsYXNzKCdfZXh0cmFJbmRpY2F0b3InKVxuXG5cdFx0aWYgaXNCYWNrXG5cdFx0XHRAY3VycmVudFBhZ2UtLSB1bmxlc3MgQGN1cnJlbnRQYWdlIGlzIDFcblx0XHRcblx0XHRlbHNlIGlmIGlzTmV4dFxuXHRcdFx0QGN1cnJlbnRQYWdlKysgdW5sZXNzIEBjdXJyZW50UGFnZSBpcyBAcGFnZUNvdW50UmVhbFxuXHRcdFxuXHRcdCMgZWxzZSBpZiBub3QgaXNFeHRyYSBhbmQgbm90IGlzV3JhcHBlclxuXHRcdGVsc2UgaWYgbm90IGlzRXh0cmFcblx0XHRcdHBhZ2VOdW1iZXIgPSBwYXJzZUZsb2F0ICR0aGlzLmNoaWxkcmVuKCkuaHRtbCgpXG5cdFx0XHRAY3VycmVudFBhZ2UgPSBwYWdlTnVtYmVyXG5cblxuXG5cblx0IyA9PT09IFNvcnRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVIZWFkaW5nLm9uICdjbGljaycsICcuX2lzU29ydGFibGUnLCAoZXZlbnQpPT5cblx0XHRAc29ydEJ5ID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuXG5cblxuXHQjID09PT0gQWN0aW9uIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdjbGljaycsICcuX2FjdGlvbkJ1dHRvbicsIChldmVudCk9PlxuXHRcdGJ1dHRvbiQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX2lzTXVsdGknKVxuXHRcdFx0dG9nZ2xlQWN0aW9uc1BvcHVwIGJ1dHRvbiQubmV4dCgpLmNoaWxkcmVuKClcblx0XHRcblx0XHRlbHNlXG5cdFx0XHRpdGVtUm93JCA9IGJ1dHRvbiQuY2xvc2VzdCgnLl90YWJsZVJvdycpXG5cdFx0XHRhY3Rpb24gPSBidXR0b24kLmRhdGEoJ2FjdGlvbicpXG5cdFx0XHRpdGVtSUQgPSBpdGVtUm93JC5kYXRhKCdyb3ctaWQnKVxuXHRcdFx0aXRlbUluZGV4ID0gaXRlbVJvdyQuZGF0YSgnaW5kZXgnKVxuXHRcdFx0ZGF0YUl0ZW0gPSBpZiBpdGVtSUQgdGhlbiBAYWxsUm93cy5maW5kIChyb3cpPT4gY29tcGFyZVZhbHVlcyhyb3dbQG9wdGlvbnMudW5pcXVlSURdLCBpdGVtSUQpXG5cdFx0XHRkYXRhSXRlbSA/PSBpdGVtSURcblxuXHRcdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX3N1YkFjdGlvbkJ1dHRvbicpXG5cdFx0XHRcdHRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLnBhcmVudCgpXG5cblx0XHRcdEBlbHMudGFibGUudHJpZ2dlciBcImFjdGlvbi4je2FjdGlvbn1cIiwgZGF0YUl0ZW1cblxuXG5cblxuXG5cblx0IyA9PT09IFJvdyBleHBhbnNpb24gbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnY2xpY2snLCAnLl9leHBhbmREcmlsbGRvd24nLCAoZXZlbnQpPT5cblx0XHRidXR0b24kID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGl0ZW1Sb3cgPSBidXR0b24kLnBhcmVudCgpLmRhdGEoJ3JvdycpXG5cdFx0XG5cdFx0aXRlbVJvdy5kcmlsbGRvd25PcGVuID0gIWl0ZW1Sb3cuZHJpbGxkb3duT3BlblxuXG5cblxuXG5cblxuXG5cdCMgPT09PSBJUCBEZXRhaWxzIGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ21vdXNlb3ZlcicsICcuX2lwRGV0YWlscy10cmlnZ2VyJywgKGV2ZW50KT0+XG5cdFx0dHJpZ2dlciQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0d3JhcHBlciQgPSB0cmlnZ2VyJC5wYXJlbnQoKVxuXHRcdGNvbnRlbnQkID0gdHJpZ2dlciQubmV4dCgpXG5cdFx0Y291bnRyeSQgPSBjb250ZW50JC5uZXh0KClcblx0XHRpcEFkZHJlc3MgPSB3cmFwcGVyJC5kYXRhICdpcCdcblx0XHRpc0xvYWRlZCA9IHRyaWdnZXIkLmhhc0NsYXNzICdfaXNSZWFkeSdcblxuXG5cdFx0dW5sZXNzIGlzTG9hZGVkXHRcdFx0XG5cdFx0XHRAb3B0aW9ucy5pcERhdGFGZXRjaGVyKGlwQWRkcmVzcykudGhlbiAoaXBEZXRhaWxzKT0+XG5cdFx0XHRcdHJldHVybiB1bmxlc3MgaXBEZXRhaWxzXG5cdFx0XHRcdFxuXHRcdFx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgaXBEZXRhaWxzIFxuXHRcdFx0XHRcdG1hcmt1cC5pcERldGFpbHNJdGVtKEBtYXJrdXBBcmdzIHtsYWJlbCx2YWx1ZX0pXG5cblx0XHRcdFx0Y29udGVudCQuaHRtbCBvdXRwdXQuam9pbignJylcblx0XHRcdFx0d3JhcHBlciQuYWRkQ2xhc3MgJ19pc1JlYWR5J1xuXG5cblxuXHRQcm9taXNlLnJlc29sdmUoKVxuXG5cbiIsImltcG9ydCAqIGFzIG1hcmt1cCBmcm9tICcuL21hcmt1cCdcbmltcG9ydCBTaW1wbHlCaW5kIGZyb20gJ0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kJ1xuXG5leHBvcnQgYXR0YWNoQmluZGluZ3MgPSAoKS0+XG5cdFNpbXBseUJpbmQuc2V0dGluZ3MudHJhY2tBcnJheUNoaWxkcmVuID0gZmFsc2Vcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU3RhdGVcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ25vUmVzdWx0cycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLm5vUmVzdWx0c01lc3NhZ2UpLnRyYW5zZm9ybSAobm9SZXN1bHRzKT0+IGlmIG5vUmVzdWx0cyBhbmQgbm90IEBzdGF0ZS5sb2FkaW5nIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUubm9SZXN1bHRzJykub2YoQGVscy50YWJsZU91dGVyd3JhcCkudHJhbnNmb3JtIChub1Jlc3VsdHMpPT4gaWYgbm9SZXN1bHRzIGFuZCBub3QgQHN0YXRlLmxvYWRpbmcgdGhlbiAnX25vUmVzdWx0cycgZWxzZSAnJ1xuXHRcblx0U2ltcGx5QmluZCgnbG9hZGluZycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLmxvYWRpbmdNZXNzYWdlKS50cmFuc2Zvcm0gKGxvYWRpbmcpLT4gaWYgbG9hZGluZyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmxvYWRpbmcnKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGxvYWRpbmcpPT4gaWYgbG9hZGluZyB0aGVuICdfbG9hZGluZycgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGxvYWRpbmcpPT5cblx0XHRcdGlmIGxvYWRpbmdcblx0XHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9IGZhbHNlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhQHZpc2libGVSb3dzLmxlbmd0aFxuXG5cdFNpbXBseUJpbmQoJ2Vycm9yJykub2YoQHN0YXRlKVxuXHRcdC50bygndGV4dENvbnRlbnQuZXJyb3JNZXNzYWdlJykub2YoQGVscy5lcnJvck1lc3NhZ2UpXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMuZXJyb3JNZXNzYWdlKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaGFzRXJyb3InKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ19lcnJvcicgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGVyciktPiBjb25zb2xlLmVycm9yKGVycikgaWYgZXJyXG5cdFxuXG5cdGlmIEBvcHRpb25zLmhhc01vYmlsZVxuXHRcdEB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XG5cdFx0U2ltcGx5QmluZCgnZXZlbnQ6cmVzaXplJykub2Yod2luZG93KVxuXHRcdFx0LnRvICgpPT4gQHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdFNpbXBseUJpbmQoJ3dpbmRvd1dpZHRoJykub2YoQClcblx0XHRcdC50bygnY2xhc3NOYW1lLm1vYmlsZVZlcnNpb24nKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdFx0XHQudHJhbnNmb3JtICh3aW5kb3dXaWR0aCk9PiBpZiB3aW5kb3dXaWR0aCA8PSBAb3B0aW9ucy5tb2JpbGVXaWR0aCB0aGVuICdfbW9iaWxlVmVyc2lvbicgZWxzZSAnJ1xuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgQ29sdW1uIHZpc2liaWxpdHlcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGZvciBsLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHRoZW4gZG8gKGNvbHVtbik9PlxuXHRcdFNpbXBseUJpbmQoJ2hpZGRlbicpLm9mKGNvbHVtbilcblx0XHRcdC50byhcImlubmVySFRNTC4je2NvbHVtbi5zbHVnfVwiKS5vZihAZWxzLmdsb2JhbFN0eWxlcylcblx0XHRcdFx0LnRyYW5zZm9ybSAoaXNIaWRkZW4pPT4gaWYgaXNIaWRkZW4gdGhlbiBcIiN7QHRhYmxlSUR9IC5fXyN7Y29sdW1uLnNsdWd9IHtkaXNwbGF5Om5vbmV9XCIgZWxzZSAnJ1xuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFJvd3MgYXJyYXkgcmVuZGVyaW5nL3Byb2Nlc3Npbmdcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ2FycmF5OnZpc2libGVSb3dzJykub2YoQClcblx0XHQudG8gKHJvd3MsIHByZXZSb3dzKT0+XG5cdFx0XHRpZiBwcmV2Um93cz8ubGVuZ3RoXG5cdFx0XHRcdGZvciByb3cgaW4gcHJldlJvd3Ncblx0XHRcdFx0XHRyb3cudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcblx0XHRcdHRyeVxuXHRcdFx0XHRmb3Igcm93IGluIHJvd3Ncblx0XHRcdFx0XHRAcHJvY2Vzc1Jvdyhyb3cpXG5cdFx0XHRcdFx0cm93LnZpc2libGUgPSB0cnVlXG5cdFx0XHRjYXRjaCBlcnJcblx0XHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cdFx0XHRcblx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhcm93cy5sZW5ndGhcblx0XHRcblx0XHQuYW5kLnRvIChyb3dzKT0+XG5cdFx0XHRyZXR1cm4gaWYgbm90IEBoYXNCcmVha2Rvd25CYXJcblx0XHRcdGZvciByb3cgaW4gcm93c1xuXHRcdFx0XHRpZiByb3cuYnJlYWtkb3duQmFyVG90YWwgPiBsYXJnZXN0QnJlYWtkb3duVG90YWwgb3Igbm90IGxhcmdlc3RCcmVha2Rvd25Ub3RhbD9cblx0XHRcdFx0XHRsYXJnZXN0QnJlYWtkb3duVG90YWwgPSByb3cuYnJlYWtkb3duQmFyVG90YWxcblxuXHRcdFx0QGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IGxhcmdlc3RCcmVha2Rvd25Ub3RhbCBvciAwXG5cblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC5yb3dSYW5nZScpLm9mKEBlbHMucGFnZVN0YXR1cylcblx0XHRcdC50cmFuc2Zvcm0gKHJvd3MpPT4gXCIje0BhdmFpbGFibGVSb3dzLmluZGV4T2Yocm93c1swXSkrMX0tI3tAYXZhaWxhYmxlUm93cy5pbmRleE9mKHJvd3Muc2xpY2UoLTEpWzBdKSsxfVwiXG5cblxuXHRTaW1wbHlCaW5kKCdhcnJheTphbGxSb3dzJykub2YoQCkudG8gKHJvd3MpPT5cblx0XHRAc2VhcmNoQ3JpdGVyaWEgPSAnJ1xuXHRcdEBjdXJyZW50UGFnZSA9IDFcblx0XHRAc3RhdGUubm9SZXN1bHRzID0gIXJvd3MubGVuZ3RoXG5cdFx0aWYgQHNvcnRCeSBpcyBAb3B0aW9ucy5zb3J0Qnlcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXHRcdFx0QHNvcnRCeSA9IEBvcHRpb25zLnNvcnRCeVxuXHRcdGVsc2Vcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXG5cblxuXHRTaW1wbHlCaW5kKCdhdmFpbGFibGVSb3dzJywge3VwZGF0ZU9uQmluZDpmYWxzZSwgdXBkYXRlRXZlbklmU2FtZTp0cnVlfSkub2YoQClcblx0XHQudG8gKHJvd3MpPT4gQGNhbGNQYWdlQ291bnQocm93cylcblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC50b3RhbFJvd3MnKS5vZihAZWxzLnBhZ2VTdGF0dXMpLnRyYW5zZm9ybSAocm93cyktPiByb3dzLmxlbmd0aFxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBQYWdpbmF0aW9uXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdwYWdlQ291bnQnKS5vZihAKVxuXHRcdC50bygnaW5uZXJIVE1MJykub2YoQGVscy5wYWdpbmF0aW9uSXRlbXMpICMgUmVuZGVyIHBhZ2luYXRpb25cblx0XHRcdC50cmFuc2Zvcm0gKGNvdW50KT0+XG5cdFx0XHRcdHBhZ2luYXRpb25JdGVtcyA9ICcnXG5cdFx0XHRcdGZvciB2YWx1ZSBpbiBbMS4uY291bnRdXG5cdFx0XHRcdFx0cGFnaW5hdGlvbkl0ZW1zICs9IG1hcmt1cC5wYWdpbmF0aW9uSXRlbShAbWFya3VwQXJncyB7dmFsdWV9KSB1bmxlc3MgdmFsdWUgaXMgMFxuXG5cdFx0XHRcdHJldHVybiBwYWdpbmF0aW9uSXRlbXNcblxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLnBhZ2luYXRpb24pLnRyYW5zZm9ybSAoY291bnQpLT4gaWYgY291bnQgPiAxIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XG5cblx0U2ltcGx5QmluZCgncGFnZUNvdW50UmVhbCcpLm9mKEApXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHRcdC50cmFuc2Zvcm0gKHJlYWxDb3VudCk9PlxuXHRcdFx0XHRpZiByZWFsQ291bnQgPD0gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJydcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG9wdGlvbnMgPSAnPG9wdGlvbj4uLi48L29wdGlvbj4nXG5cdFx0XHRcdFx0b3B0aW9ucyArPSBcIjxvcHRpb24+I3tpbmRleH08L29wdGlvbj5cIiBmb3IgaW5kZXggaW4gWyhAb3B0aW9ucy5wYWdlQ291bnRNYXgrMSkuLnJlYWxDb3VudF1cblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1xuXHRcdFxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5oYXNFeHRyYScpLm9mKEBlbHMucGFnaW5hdGlvbikudHJhbnNmb3JtIChyZWFsQ291bnQpPT4gaWYgcmVhbENvdW50ID4gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJ2hhc19leHRyYScgZWxzZSAnJ1xuXG5cblxuXHQjID09PT0gRXh0cmEgSW5kaWNhdG9yL1BhZ2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScsIHVwZGF0ZU9uQmluZDpmYWxzZSkub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQpXG5cdFx0LmFuZC50bygnY3VycmVudFBhZ2UnKS5vZihAKVxuXG5cblxuXG5cdCMgPT09PSBDdXJyZW50IFBhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ2N1cnJlbnRQYWdlJywgdXBkYXRlRXZlbklmU2FtZTp0cnVlKS5vZihAKVxuXHRcdC50cmFuc2Zvcm1TZWxmIChjdXJyZW50UGFnZSk9PlxuXHRcdFx0Y3VycmVudFBhZ2UgPSBpZiBjdXJyZW50UGFnZSBpcyAnLi4uJyB0aGVuIDEgZWxzZSBwYXJzZUZsb2F0KGN1cnJlbnRQYWdlKVxuXHRcdFx0cmV0dXJuIGlmIGN1cnJlbnRQYWdlID4gQHBhZ2VDb3VudFJlYWwgdGhlbiBAcGFnZUNvdW50UmVhbCBlbHNlIGN1cnJlbnRQYWdlXG5cdFx0XG5cdFx0LnRvKCd2YWx1ZScpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdFx0LnRyYW5zZm9ybSAoY3VycmVudFBhZ2UpPT4gaWYgY3VycmVudFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBjdXJyZW50UGFnZSBlbHNlICcuLi4nXG5cdFx0XG5cdFx0LmFuZC50byAoY3VycmVudFBhZ2UpPT5cblx0XHRcdEBzZXRWaXNpYmxlUGFnZShjdXJyZW50UGFnZSlcblx0XHRcdEBzZXRQYWdlSW5kaWNhdG9yKGN1cnJlbnRQYWdlKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU2VhcmNoIEZpZWxkXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRcblx0IyA9PT09IFNlYXJjaCBGaWVsZCB2YWx1ZS9tYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGlmIEBvcHRpb25zLnNlYXJjaC5sZW5ndGhcblx0XHRAc2VhcmNoUGFyYW0gPSBAb3B0aW9ucy5zZWFyY2hbMF1cblxuXHRcdFNpbXBseUJpbmQoJ3NlYXJjaCcpLm9mKEBvcHRpb25zKVxuXHRcdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnNlYXJjaFBhcmFtKVxuXHRcdFx0XHQudHJhbnNmb3JtIChvcHRpb25zKS0+IG9wdGlvbnMubWFwKChvcHRpb24pLT5cIjxvcHRpb24+I3tvcHRpb259PC9vcHRpb24+XCIpLmpvaW4oJycpXG5cblx0XHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoUGFyYW0pXG5cdFx0XHQudG8oJ3NlYXJjaFBhcmFtJykub2YoQClcblx0XHRcdFx0LnBpcGUoJ2F0dHI6cGxhY2Vob2xkZXInKS5vZihAZWxzLnNlYXJjaENyaXRlcmlhKVxuXHRcdFx0XHRcdC50cmFuc2Zvcm0gKG9wdGlvbiktPiBcIkZpbHRlciBieSAje29wdGlvbn1cIlxuXG5cblxuXHQjID09PT0gVGFibGUgcmVzdWx0cyBmaWx0ZXIgJiBhdmFpYWJsZSByb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoQ3JpdGVyaWEpICMgU2VhcmNoL0ZpbHRlclxuXHRcdC50bygnc2VhcmNoQ3JpdGVyaWEnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKEApLmJvdGhXYXlzKClcblx0XHRcdC5jaGFpblRvIChzZWFyY2hDcml0ZXJpYSk9PlxuXHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gQGFsbFJvd3Ncblx0XHRcdFx0dGFyZ2V0Q29sdW1uID0gQG9wdGlvbnMuY29sdW1uc1tAc2VhcmNoUGFyYW1dXG5cblx0XHRcdFx0aWYgc2VhcmNoQ3JpdGVyaWEgYW5kICh0YXJnZXRDb2x1bW4gb3IgQGFsbFJvd3NbMF0/W0BzZWFyY2hQYXJhbV0/KVxuXHRcdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSByb3dzVG9NYWtlQXZhaWxhYmxlLmZpbHRlciAocm93KT0+XG5cdFx0XHRcdFx0XHRyb3dWYWx1ZSA9IGlmIHRhcmdldENvbHVtbj8ucmF3VmFsdWVGb3JtYXR0ZXIgdGhlbiB0YXJnZXRDb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93W0BzZWFyY2hQYXJhbV0pIGVsc2Ugcm93W0BzZWFyY2hQYXJhbV1cblx0XHRcdFx0XHRcdHJldHVybiByb3dWYWx1ZT8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzIHNlYXJjaENyaXRlcmlhLnRvTG93ZXJDYXNlKClcblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5yb3dGaWx0ZXJcblx0XHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gcm93c1RvTWFrZUF2YWlsYWJsZS5maWx0ZXIgKHJvdyk9PlxuXHRcdFx0XHRcdFx0cm93Q2xvbmUgPSBleHRlbmQuY2xvbmUocm93KVxuXHRcdFx0XHRcdFx0cm93Q2xvbmVbbmFtZV0gPSBjb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93Q2xvbmVbbmFtZV0pIGZvciBuYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHdoZW4gY29sdW1uLnJhd1ZhbHVlRm9ybWF0dGVyXG5cdFx0XHRcdFx0XHRyZXR1cm4gQG9wdGlvbnMucm93RmlsdGVyKHJvd0Nsb25lKVxuXHRcdFx0XHRcblx0XHRcdFx0QGF2YWlsYWJsZVJvd3MgPSByb3dzVG9NYWtlQXZhaWxhYmxlXG5cdFx0XHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU29ydGluZ1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnc29ydEJ5Jywge3VwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSwgdXBkYXRlT25CaW5kOmZhbHNlfSwgdHJ1ZSkub2YoQClcblx0XHQudG8gKGN1cnJlbnRTb3J0LCBwcmV2U29ydCk9PiBpZiBjdXJyZW50U29ydCBvciBwcmV2U29ydFxuXHRcdFx0aWYgY3VycmVudFNvcnQgaXMgcHJldlNvcnQgYW5kIHByZXZTb3J0XG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uICo9IC0xXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblxuXHRcdFx0dGFyZ2V0Q29sdW1uID0gaWYgY3VycmVudFNvcnQgdGhlbiBjdXJyZW50U29ydCBlbHNlIG51bGxcblx0XHRcdEBhdmFpbGFibGVSb3dzID0gQHNvcnRSb3dzKEBhdmFpbGFibGVSb3dzLCB0YXJnZXRDb2x1bW4pXG5cdFx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblx0XG5cdGlmIEBlbHMudGFibGVIZWFkaW5nLmNoaWxkcmVuKCcuX2lzU29ydGFibGUnKS5sZW5ndGhcblx0XHRTaW1wbHlCaW5kKCdzb3J0QnknLCB1cGRhdGVPbkJpbmQ6dHJ1ZSkub2YoQClcblx0XHRcdC50bygnbXVsdGk6Y2xhc3NOYW1lLmN1cnJlbnRTb3J0Jykub2YoQGVscy50YWJsZUhlYWRpbmcuY2hpbGRyZW4oJy5faXNTb3J0YWJsZScpKVxuXHRcdFx0XHQudHJhbnNmb3JtIChjdXJyZW50LCBwcmV2LCBlbCktPiBpZiBjdXJyZW50IGlzIGVsLmNoaWxkcmVuWzBdLnRleHRDb250ZW50IHRoZW4gJ19jdXJyZW50U29ydCcgZWxzZSAnJ1xuXG5cblxuXG5cdFNpbXBseUJpbmQoJ3NvcnREaXJlY3Rpb24nKS5vZihAKVxuXHRcdC50bygnY2xhc3NOYW1lLnNvcnREaXJlY3Rpb24nKS5vZihAZWxzLnRhYmxlKVxuXHRcdFx0LnRyYW5zZm9ybSAoc29ydERpcmVjdGlvbiktPiBpZiBzb3J0RGlyZWN0aW9uIGlzIC0xIHRoZW4gJ2Rlc2MnIGVsc2UgJ2FzYydcblxuXG5cblxuXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cbiIsImV4cG9ydCBzb3J0QnkgPSAoY29sdW1uKS0+IDsiLCJpbXBvcnQgZXh0ZW5kIGZyb20gJ3NtYXJ0LWV4dGVuZCdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnQtbGl0ZSdcbmltcG9ydCB7dmVyc2lvbn0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vcGFydHMvZGVmYXVsdHMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgKiBhcyBtYXJrdXAgZnJvbSAnLi9wYXJ0cy9tYXJrdXAnXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vcGFydHMvaGVscGVycydcbmN1cnJlbnRJRCA9IDBcblxuY2xhc3MgRGF0YVRhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyXG5cdGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgb3B0aW9ucz17fSktPlxuXHRcdHN1cGVyKClcblx0XHRAb3B0aW9ucyA9IGV4dGVuZC5jbG9uZS5kZWVwT25seSgnY29sdW1ucycpKERhdGFUYWJsZS5kZWZhdWx0cywgb3B0aW9ucylcblx0XHRAc3RhdGUgPSAnbG9hZGluZyc6ZmFsc2UsICdub1Jlc3VsdHMnOmZhbHNlLCAnZXJyb3InOmZhbHNlXG5cdFx0QElEID0gKytjdXJyZW50SURcblx0XHRAdGFibGVJRCA9IFwiXFwjI3tAb3B0aW9ucy5iYXNlQ2xhc3N9LSN7QElEfVwiXG5cdFx0QHZpc2libGVSb3dzID0gW11cblx0XHRAYXZhaWxhYmxlUm93cyA9IFtdXG5cdFx0QGFsbFJvd3MgPSBbXVxuXHRcdEBsYXJnZXN0QnJlYWtkb3duVG90YWwgPSAwXG5cdFx0QHNlYXJjaENyaXRlcmlhID0gJydcblx0XHRAc2VhcmNoUGFyYW0gPSAnJ1xuXHRcdEBzb3J0QnkgPSBpZiBAb3B0aW9ucy5zb3J0QnkgdGhlbiBAb3B0aW9ucy5zb3J0QnkgZWxzZSAnJ1xuXHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblxuXHRcdCMgPT09PSBNYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0QGVscyA9IHt9XG5cdFx0QGVscy50YWJsZU91dGVyd3JhcCA9ICQobWFya3VwLnRhYmxlT3V0ZXJ3cmFwIGV4dGVuZCh7QElEfSwgQG9wdGlvbnMpKVxuXHRcdEBlbHMudGFibGUgPSAkKG1hcmt1cC50YWJsZShAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy50YWJsZUhlYWRpbmcgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkuZmlyc3QoKS5jaGlsZHJlbigpXG5cdFx0QGVscy50YWJsZUJvZHkgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkubGFzdCgpXG5cdFx0QGVscy5ub1Jlc3VsdHNNZXNzYWdlID0gJChtYXJrdXAubm9SZXN1bHRzKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLmxvYWRpbmdNZXNzYWdlID0gJChtYXJrdXAubG9hZGluZyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5lcnJvck1lc3NhZ2UgPSAkKG1hcmt1cC5lcnJvcihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdlU3RhdHVzID0gJChtYXJrdXAucGFnZVN0YXR1cyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdpbmF0aW9uID0gJChtYXJrdXAucGFnaW5hdGlvbihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdpbmF0aW9uSXRlbXMgPSBAZWxzLnBhZ2luYXRpb24uY2hpbGRyZW4oJy5fcGFnaW5hdGlvbkl0ZW1zJylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYSA9IEBlbHMucGFnaW5hdGlvbi5jaGlsZHJlbignLl9leHRyYUluZGljYXRvcicpXG5cdFx0QGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QgPSBAZWxzLnBhZ2luYXRpb25FeHRyYS5jaGlsZHJlbignc2VsZWN0Jylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQgPSBAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdC5wcmV2KClcblx0XHRAZWxzLnNlYXJjaEZpZWxkID0gJChtYXJrdXAuc2VhcmNoRmllbGQoQG9wdGlvbnMpKS5pbnNlcnRCZWZvcmUoQGVscy50YWJsZSlcblx0XHRAZWxzLnNlYXJjaFBhcmFtID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignc2VsZWN0Jylcblx0XHRAZWxzLnNlYXJjaENyaXRlcmlhID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignaW5wdXQnKVxuXHRcdEBlbHMuZ2xvYmFsU3R5bGVzID0gJCgnPHN0eWxlIC8+JykucHJlcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cblx0XHRAZWxzLnRhYmxlSGVhZGluZy5hcHBlbmQoQGdlbmVyYXRlSGVhZGluZ0NvbHVtbnMoKSlcblxuXHRcdEBlbHMudGFibGVPdXRlcndyYXAuYXBwZW5kVG8gQGNvbnRhaW5lclxuXHRcdEBlbHMudGFibGUuZGF0YSAnRGF0YVRhYmxlJywgQFxuXHRcdEBlbHMudGFibGVbMF0uc3R5bGUubWluV2lkdGggPSBcIiN7QG9wdGlvbnMubWluV2lkdGh9cHhcIiBpZiBAb3B0aW9ucy5taW5XaWR0aFxuXG5cblx0XHQjID09PT0gRXZlbnRzICYgQmluZGluZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0UHJvbWlzZS5iaW5kKEApXG5cdFx0XHQudGhlbihAYXR0YWNoRXZlbnRzKVxuXHRcdFx0LnRoZW4oQGF0dGFjaEJpbmRpbmdzKVxuXHRcdFx0LnRoZW4gKCktPiBpZiBAb3B0aW9ucy5sb2FkT25Jbml0IHRoZW4gQGxvYWREYXRhKClcblxuXHRcdHJldHVybiBAXG5cblxuXG5cdGZldGNoRGF0YTogKCktPlxuXHRcdEBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuXHRcdFByb21pc2UucmVzb2x2ZSgpXG5cdFx0XHQudGhlbiAoKT0+IEBvcHRpb25zLmRhdGEuY2FsbChAKVxuXHRcdFx0LnRoZW4gKGRhdGEpPT5cblx0XHRcdFx0QHN0YXRlLmxvYWRpbmcgPSBAc3RhdGUuZXJyb3IgPSBmYWxzZVxuXHRcdFx0XHRyZXR1cm4gZGF0YVxuXHRcdFx0LmNhdGNoIChlcnIpPT5cblx0XHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cblx0c2V0RGF0YTogKGRhdGEpLT5cblx0XHRAYWxsUm93cyA9IGRhdGEgaWYgQXJyYXkuaXNBcnJheShkYXRhKVxuXG5cdGFwcGVuZERhdGE6IChkYXRhKS0+XG5cdFx0QGFsbFJvd3MucHVzaChkYXRhLi4uKVxuXG5cdGxvYWREYXRhOiAoKS0+XG5cdFx0QHVucHJvY2Vzc1Jvdyhyb3cpIGZvciByb3cgaW4gQGFsbFJvd3MgaWYgQGFsbFJvd3MubGVuZ3RoXG5cdFx0QGZldGNoRGF0YSgpLnRoZW4gKGRhdGEpPT4gQHNldERhdGEoZGF0YSlcblxuXHRyZWZyZXNoOiAoKS0+XG5cdFx0QGF2YWlsYWJsZVJvd3MgPSBAYXZhaWxhYmxlUm93c1xuXHRcdEBjdXJyZW50UGFnZSA9IEBjdXJyZW50UGFnZVxuXG5cdG1hcmt1cEFyZ3M6IChhcmdzT2JqZWN0PXt9KS0+XG5cdFx0YXJnc09iamVjdC5iYXNlQ2xhc3MgPSBAb3B0aW9ucy5iYXNlQ2xhc3Ncblx0XHRyZXR1cm4gYXJnc09iamVjdFxuXG5cbmltcG9ydCAqIGFzIGdlbmVyYWxNZXRob2RzIGZyb20gJy4vcGFydHMvbWV0aG9kcydcbmltcG9ydCAqIGFzIGV2ZW50TWV0aG9kcyBmcm9tICcuL3BhcnRzL2F0dGFjaEV2ZW50cydcbmltcG9ydCAqIGFzIGJpbmRpbmdNZXRob2RzIGZyb20gJy4vcGFydHMvYXR0YWNoQmluZGluZ3MnXG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9uTWV0aG9kcyBmcm9tICcuL3BhcnRzL3VzZXJBY3Rpb25NZXRob2RzJ1xuZXh0ZW5kIERhdGFUYWJsZTo6LCBnZW5lcmFsTWV0aG9kcywgZXZlbnRNZXRob2RzLCBiaW5kaW5nTWV0aG9kcywgdXNlckFjdGlvbk1ldGhvZHNcblxuXG5EYXRhVGFibGUudmVyc2lvbiA9IHZlcnNpb25cbkRhdGFUYWJsZS5oZWxwZXJzID0gaGVscGVyc1xuRGF0YVRhYmxlLm1hcmt1cCA9IG1hcmt1cFxuRGF0YVRhYmxlLmRlZmF1bHRzID0gZGVmYXVsdHNcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJpcEFkZHJlc3MiLCJQcm9taXNlIiwicmVzb2x2ZSIsIiQiLCJnZXQiLCJ0YWJsZU91dGVyd3JhcCIsIklEIiwiYmFzZUNsYXNzIiwibWluV2lkdGgiLCJoYXNNb2JpbGUiLCJjZWxsc0hhdmVQYWRkaW5nIiwidGFibGUiLCJhbGlnbm1lbnQiLCJsb2FkaW5nIiwibm9SZXN1bHRzIiwiaXRlbVNpbmdsZUxhYmVsIiwiaXRlbVBsdXJhbExhYmVsIiwiZXJyb3IiLCJwYWdlU3RhdHVzIiwic2hvd1BhZ2VTdGF0dXMiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbkl0ZW0iLCJ2YWx1ZSIsImhlYWRpbmdDZWxsIiwiZXh0cmFDbGFzc2VzIiwic2x1ZyIsImljb24iLCJsYWJlbCIsInN0eWxlIiwicm93Iiwicm93SUQiLCJjZWxscyIsImRyaWxsZG93biIsInJvd0NlbGwiLCJjb2x1bW4iLCJzZWFyY2hGaWVsZCIsInNlYXJjaCIsImxlbmd0aCIsImlwRGV0YWlscyIsImV4dHJhIiwiaXBEZXRhaWxzSXRlbSIsImZpZWxkcyIsImZpZWxkc0l0ZW0iLCJlc2NIVE1MIiwiYnV0dG9uIiwiYWN0aW9uIiwiaXNNdWx0aSIsImFjdGlvbnMiLCJhY3Rpb25zT3ZlcmxheSIsIkRhdGFUYWJsZSIsImRlZmF1bHRzIiwiYWN0aW9uc0l0ZW0iLCJjdXN0b21JY29uU3R5bGUiLCJjb21wYXJlVmFsdWVzIiwidmFsdWVBIiwidmFsdWVCIiwicGFyc2VGbG9hdCIsInRvZ2dsZUFjdGlvbnNQb3B1cCIsImFjdGlvbnNQb3B1cCQiLCJpc09wZW4iLCJvdmVybGF5JCIsImRhdGEiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsIm1hcmt1cCIsImFkZENsYXNzIiwiYXBwZW5kVG8iLCJkb2N1bWVudCIsImJvZHkiLCJvbmUiLCJnZXRCcmVha2Rvd25Ub3RhbCIsImJyZWFrZG93biIsImJyZWFrZG93bktleXMiLCJtYXAiLCJicmVha2Rvd25JdGVtIiwicmVkdWNlIiwiYSIsImIiLCJub3JtYWxpemVDb2x1bW5zIiwiY29sdW1ucyIsImkiLCJqIiwibGVuIiwibGVuMSIsIm91dHB1dCIsInJlZiIsIkFycmF5IiwiaXNBcnJheSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInR5cGUiLCJnZXRCcmVha2Rvd25CYXJXaWR0aCIsImxhcmdlc3QiLCJicmVha2Rvd25CYXJUb3RhbCIsImdlbkhlYWRlckNlbGxTdHlsZSIsInN0eWxlU3RyaW5nIiwid2lkdGgiLCJncm93IiwiZ2VuQ2VsbFN0eWxlIiwiY29sb3IiLCJjb2xvck1hcHBpbmciLCJjb2xvclR5cGUiLCJjdXN0b21TdHlsZSIsImdlbkNlbGxDbGFzc25hbWUiLCJjbGFzc1N0cmluZyIsInNvcnRhYmxlIiwibm9MYWJlbCIsImlzTGluayIsIm5vRWxsaXBzaXMiLCJzaG93T3ZlcmZsb3ciLCJhbHdheXNDZW50ZXIiLCJpbmNsdWRlcyIsImljb25NYXBwaW5nIiwiaWNvblR5cGUiLCJjYWxjUGFnZUNvdW50Iiwicm93cyIsInBhZ2VDb3VudFJlYWwiLCJNYXRoIiwiY2VpbCIsIm9wdGlvbnMiLCJwZXJQYWdlIiwicGFnZUNvdW50IiwicGFnZUNvdW50TWF4IiwiY2FsY1BlcmNlbnRhZ2VTdHJpbmciLCJjb2x1bW5WYWx1ZSIsImNvbHVtbk5hbWUiLCJjb2x1bW5BIiwiY29sdW1uQiIsImZvcm11bGEiLCJtYXRoT3BlcmF0b3IiLCJwZXJjZW50IiwicGVyY2VudGFnZVZhbHVlIiwicGVyY2VudGFnZSIsImNvbnZlcnRUb1BlcmNlbnQiLCJzb3J0Um93cyIsInRhcmdldENvbHVtbiIsInNvcnRCeSIsImN1c3RvbVNvcnQiLCJyYXdWYWx1ZSIsInNvcnRlciIsInNsaWNlIiwicmV2ZXJzZSIsInNvcnRGbiIsInJhd1ZhbHVlRm9ybWF0dGVyIiwiYVZhbHVlIiwiYlZhbHVlIiwic29ydERpcmVjdGlvbiIsInNvcnQiLCJzZXRWaXNpYmxlUGFnZSIsInRhcmdldFBhZ2UiLCJyb3dzVG9IaWRlIiwicm93c1RvUmV2ZWFsIiwiYXZhaWxhYmxlUm93cyIsInZpc2libGVSb3dzIiwidmlzaWJsZSIsInB1c2giLCJhcHBseSIsInNldFBhZ2VJbmRpY2F0b3IiLCJtYXRjaGVkUGFnZUVsJCIsInBhZ2VJdGVtcyQiLCJlbHMiLCJmaW5kIiwiZXEiLCJub3QiLCJnZW5lcmF0ZUhlYWRpbmdDb2x1bW5zIiwiaGFzQnJlYWtkb3duQmFyIiwiT2JqZWN0Iiwia2V5cyIsImdsb2JhbFN0eWxlcyIsImlubmVySFRNTCIsIm1hcmt1cEFyZ3MiLCJqb2luIiwidXBkYXRlQ29sdW1ucyIsInVwZGF0ZWRDb2x1bW5zIiwiZXh0ZW5kIiwiZGVlcCIsImN1cnJlbnRQYWdlIiwicHJvY2Vzc1JvdyIsInByb2Nlc3NlZCIsImdlbmVyYXRlUm93IiwiU2ltcGx5QmluZCIsInVwZGF0ZUV2ZW5JZlNhbWUiLCJvZiIsInRvIiwiaXNWaXNpYmxlIiwicHJldlZhbHVlIiwiZWwiLCJkZXRhY2giLCJ0YWJsZUJvZHkiLCJ1cGRhdGVkQnJlYWtkb3duV2lkdGgiLCJicmVha2Rvd25CYXJXaWR0aCIsImxhcmdlc3RCcmVha2Rvd25Ub3RhbCIsInRyYW5zZm9ybSIsImFuZCIsImNoYWluVG8iLCJicmVha2Rvd25CYXJFbCIsImRyaWxsZG93bkVsIiwiaW5kZXgiLCJyZWYxIiwicmVmMiIsImNvbmRpdGlvbiIsImNvbmRpdGlvbkFsbCIsInVucHJvY2Vzc1JvdyIsInVuQmluZEFsbCIsImRyaWxsZG93bkVscyIsInJlUmVuZGVyUm93IiwibmV3Um93RWwiLCJwcmV2Um93RWwiLCJnZW5lcmF0ZVJvd01hcmt1cCIsInJlcGxhY2VXaXRoIiwiZXhwYW5kQnV0dG9uIiwiY2hpbGRyZW4iLCJmaXJzdCIsIm1heCIsInN1YlJvdyIsImRyaWxsZG93bk9wZW4iLCJvbmNlIiwic2V0VGltZW91dCIsImJ1dHRvbkhlaWdodCIsInJvd0hlaWdodCIsImhlaWdodCIsInRvcCIsInVwZGF0ZU9uIiwidGhyb3R0bGUiLCJ3aW5kb3ciLCJwYXJlbnRSb3ciLCJpc1N1YiIsInVuaXF1ZUlEIiwiZHJpbGxkb3duTWFya3VwcyIsImRyaWxsZG93blJvdyIsImNlbGxWYWx1ZSIsInJvd0NlbGxzIiwiZ2VuZXJhdGVJbmxpbmVGaWVsZHMiLCJnZW5lcmF0ZUlwRGV0YWlscyIsImdlbmVyYXRlQnJlYWtkb3duQmFyIiwiZ2VuZXJhdGVCdXR0b24iLCJidXR0b25JY29uIiwiZ2VuZXJhdGVBY3Rpb25zIiwiZm9ybWF0dGVyIiwiZGF0YUZpZWxkcyIsImFjdGlvbnNNYXJrdXAiLCJidXR0b25NYXJrdXAiLCJleHRyYU1hcmt1cCIsImF0dGFjaEV2ZW50cyIsIm9uIiwiZXZlbnQiLCIkdGhpcyIsImlzQmFjayIsImlzRXh0cmEiLCJpc05leHQiLCJwYWdlTnVtYmVyIiwiY3VycmVudFRhcmdldCIsImhhc0NsYXNzIiwiaHRtbCIsInRhYmxlSGVhZGluZyIsInRleHRDb250ZW50IiwiYnV0dG9uJCIsImRhdGFJdGVtIiwiaXRlbUlEIiwiaXRlbUluZGV4IiwiaXRlbVJvdyQiLCJuZXh0IiwiY2xvc2VzdCIsImFsbFJvd3MiLCJwYXJlbnQiLCJ0cmlnZ2VyIiwiaXRlbVJvdyIsImNvbnRlbnQkIiwiY291bnRyeSQiLCJpc0xvYWRlZCIsInRyaWdnZXIkIiwid3JhcHBlciQiLCJpcERhdGFGZXRjaGVyIiwidGhlbiIsImF0dGFjaEJpbmRpbmdzIiwibCIsInNldHRpbmdzIiwidHJhY2tBcnJheUNoaWxkcmVuIiwic3RhdGUiLCJub1Jlc3VsdHNNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJoYXNFcnJvciIsImVyciIsImNvbnNvbGUiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJtb2JpbGVXaWR0aCIsImlzSGlkZGVuIiwidGFibGVJRCIsInByZXZSb3dzIiwiaW5kZXhPZiIsInNlYXJjaENyaXRlcmlhIiwidXBkYXRlT25CaW5kIiwicGFnaW5hdGlvbkl0ZW1zIiwiY291bnQiLCJwYWdpbmF0aW9uRXh0cmFTZWxlY3QiLCJyZWFsQ291bnQiLCJwYWdpbmF0aW9uRXh0cmFUZXh0IiwidHJhbnNmb3JtU2VsZiIsInNlYXJjaFBhcmFtIiwib3B0aW9uIiwicGlwZSIsImJvdGhXYXlzIiwicm93c1RvTWFrZUF2YWlsYWJsZSIsImZpbHRlciIsInJvd1ZhbHVlIiwidG9TdHJpbmciLCJyb3dGaWx0ZXIiLCJuYW1lIiwicm93Q2xvbmUiLCJjbG9uZSIsImN1cnJlbnRTb3J0IiwicHJldlNvcnQiLCJjdXJyZW50IiwicHJldiIsImN1cnJlbnRJRCIsIkV2ZW50RW1pdHRlciIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwiZGVlcE9ubHkiLCJsYXN0IiwicGFnaW5hdGlvbkV4dHJhIiwiaW5zZXJ0QmVmb3JlIiwicHJlcGVuZFRvIiwiYXBwZW5kIiwiYmluZCIsImxvYWRPbkluaXQiLCJsb2FkRGF0YSIsImZldGNoRGF0YSIsImNhbGwiLCJjYXRjaCIsInNldERhdGEiLCJhcHBlbmREYXRhIiwicmVmcmVzaCIsImFyZ3NPYmplY3QiLCJwcm90b3R5cGUiLCJnZW5lcmFsTWV0aG9kcyIsImV2ZW50TWV0aG9kcyIsImJpbmRpbmdNZXRob2RzIiwidXNlckFjdGlvbk1ldGhvZHMiLCJ2ZXJzaW9uIiwiaGVscGVycyJdLCJtYXBwaW5ncyI6IjA3QkFBQSxlQUNDO2FBQVcsRUFBWDtrQkFDZ0IsRUFEaEI7Y0FFWSxDQUZaO2lCQUdlLEdBSGY7c0JBSW9CLEtBSnBCO2VBS2EsSUFMYjtnQkFNYyxJQU5kO2FBT1csRUFQWDtZQVFVLEVBUlY7Z0JBU2MsRUFUZDtlQVVhLFdBVmI7b0JBV2tCLElBWGxCO1lBWVUsRUFaVjtlQWFhLE1BYmI7YUFjVyxLQWRYO21CQWVpQixVQUFDQSxTQUFEO1dBQWMsSUFBSUMsT0FB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
