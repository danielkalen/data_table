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
var DataTable$1 = DataTable;return DataTable$1;}));