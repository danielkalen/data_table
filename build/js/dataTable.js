function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (require, global) {
  require = function (cache, modules, cx) {
    var loader = function loader(r) {
      if (!modules[r]) throw new Error(r + ' is not a module');
      return cache[r] ? cache[r].exports : (cache[r] = {
        exports: {}
      }, cache[r].exports = modules[r].call(cx, require, cache[r], cache[r].exports));
    };

    loader.modules = modules;
    return loader;
  }({}, {
    0: function _(require, module, exports) {
      var DataTable, SimplyBind, currentID, escHTML, extend;
      SimplyBind = require(1);
      extend = require(2);
      escHTML = require(3);
      var markup;
      markup = {
        tableOuterwrap: function tableOuterwrap(_ref) {
          var ID = _ref.ID,
              baseClass = _ref.baseClass,
              minWidth = _ref.minWidth,
              hasMobile = _ref.hasMobile,
              cellsHavePadding = _ref.cellsHavePadding;
          return "<div id='".concat(baseClass, "-").concat(ID, "' class='").concat(baseClass, "-outerwrap {{loading}} {{noResults}} {{hasError}} ").concat(minWidth ? '_hasMinWidth' : '', " ").concat(hasMobile ? '{{mobileVersion}}' : '', " ").concat(cellsHavePadding ? '_cellsHavePadding' : '', " '></div>");
        },
        table: function table(_ref2) {
          var baseClass = _ref2.baseClass,
              alignment = _ref2.alignment;
          return "<div class='".concat(baseClass, " alignment---").concat(alignment, " sortDirection---{{sortDirection}}'> <div class='").concat(baseClass, "-heading'> <div class='").concat(baseClass, "-heading-row'></div> </div> <div class='").concat(baseClass, "-body'></div> </div>");
        },
        loading: function loading(_ref3) {
          var baseClass = _ref3.baseClass;
          return "<div class='".concat(baseClass, "-loading {{isVisible}}'> <div class='").concat(baseClass, "-loading-innerwrap'> <div class='").concat(baseClass, "-loading-icon'></div> <div class='").concat(baseClass, "-loading-text'>Loading</div> </div> </div>");
        },
        noResults: function noResults(_ref4) {
          var baseClass = _ref4.baseClass,
              _ref4$itemSingleLabel = _ref4.itemSingleLabel,
              itemSingleLabel = _ref4$itemSingleLabel === void 0 ? 'Item' : _ref4$itemSingleLabel,
              _ref4$itemPluralLabel = _ref4.itemPluralLabel,
              itemPluralLabel = _ref4$itemPluralLabel === void 0 ? itemSingleLabel + 's' : _ref4$itemPluralLabel;
          return "<div class='".concat(baseClass, "-noResults {{isVisible}}'> <div class='").concat(baseClass, "-noResults-innerwrap'> <div class='").concat(baseClass, "-noResults-icon'></div> <div class='").concat(baseClass, "-noResults-text'> <div class='").concat(baseClass, "-noResults-text-title'>No ").concat(itemSingleLabel, "s to Display</div> <div class='").concat(baseClass, "-noResults-text-subtitle'>There are no matching ").concat(itemPluralLabel, " for the search query you've typed.</div> </div> </div> </div>");
        },
        error: function error(_ref5) {
          var baseClass = _ref5.baseClass;
          return "<div class='".concat(baseClass, "-error {{isVisible}}'> <div class='").concat(baseClass, "-error-innerwrap'> <div class='").concat(baseClass, "-error-icon'></div> <div class='").concat(baseClass, "-error-text'> <div class='").concat(baseClass, "-error-text-title'>A Fatal Error has Occured</div> <div class='").concat(baseClass, "-error-text-subtitle'>Report the following to the admin:<br />\"{{errorMessage}}\"</div> </div> </div> </div>");
        },
        pageStatus: function pageStatus(_ref6) {
          var baseClass = _ref6.baseClass,
              showPageStatus = _ref6.showPageStatus;
          return "<div class='".concat(baseClass, "-pageStatus ").concat(showPageStatus ? 'is_visible' : '', "'> Showing {{rowRange}} of {{totalRows}} </div>");
        },
        pagination: function pagination(_ref7) {
          var baseClass = _ref7.baseClass;
          return "<div class='".concat(baseClass, "-pagination {{hasExtra}} {{isVisible}}'> <div class='").concat(baseClass, "-pagination-item _paginationItem _back'> <div class='").concat(baseClass, "-pagination-item-text'></div> </div> <div class='").concat(baseClass, "-pagination-itemswrap _paginationItems'></div> <div class='").concat(baseClass, "-pagination-item _paginationItem _extraIndicator'> <div class='").concat(baseClass, "-pagination-item-text'></div> <select class='").concat(baseClass, "-pagination-item-select'></select> </div> <div class='").concat(baseClass, "-pagination-item _paginationItem _next'> <div class='").concat(baseClass, "-pagination-item-text'></div> </div> </div>");
        },
        paginationItem: function paginationItem(_ref8) {
          var baseClass = _ref8.baseClass,
              value = _ref8.value;
          return "<div class='".concat(baseClass, "-pagination-item _paginationItem'> <div class='").concat(baseClass, "-pagination-item-text'>").concat(value, "</div> </div>");
        },
        headingCell: function headingCell(_ref9) {
          var baseClass = _ref9.baseClass,
              _ref9$extraClasses = _ref9.extraClasses,
              extraClasses = _ref9$extraClasses === void 0 ? '' : _ref9$extraClasses,
              slug = _ref9.slug,
              _ref9$icon = _ref9.icon,
              icon = _ref9$icon === void 0 ? '' : _ref9$icon,
              label = _ref9.label,
              _ref9$style = _ref9.style,
              style = _ref9$style === void 0 ? '' : _ref9$style;
          return "<div class='".concat(baseClass, "-heading-row-cell ").concat(extraClasses, " __").concat(slug, "' data-slug='").concat(slug, "' data-icon='").concat(icon, "' ").concat(style, "> <div class='").concat(baseClass, "-heading-row-cell-text'>").concat(label, "</div> </div>");
        },
        row: function row(_ref10) {
          var baseClass = _ref10.baseClass,
              rowID = _ref10.rowID,
              cells = _ref10.cells,
              _ref10$drilldown = _ref10.drilldown,
              drilldown = _ref10$drilldown === void 0 ? '' : _ref10$drilldown;
          return "<div class='".concat(baseClass, "-body-row _tableRow {{drilldownState}}' data-row-id='").concat(rowID, "'> <div class='").concat(baseClass, "-body-row-expandDrilldown _expandDrilldown'> <div class='").concat(baseClass, "-body-row-expandDrilldown-icon'></div> </div> ").concat(cells, " <div class='").concat(baseClass, "-body-row-drilldown _tableRowDrilldown'> ").concat(drilldown, " </div> </div>");
        },
        rowCell: function rowCell(_ref11) {
          var baseClass = _ref11.baseClass,
              _ref11$extraClasses = _ref11.extraClasses,
              extraClasses = _ref11$extraClasses === void 0 ? '' : _ref11$extraClasses,
              label = _ref11.label,
              column = _ref11.column,
              slug = _ref11.slug,
              value = _ref11.value,
              _ref11$style = _ref11.style,
              style = _ref11$style === void 0 ? '' : _ref11$style;
          return "<div class='".concat(baseClass, "-body-row-cell __").concat(slug, " ").concat(extraClasses, "' data-slug='").concat(slug, "' data-column='").concat(column, "' ").concat(style, "> <div class='").concat(baseClass, "-body-row-cell-innerwrap' title='").concat(label, "'>").concat(value, "</div> </div>");
        },
        searchField: function searchField(_ref12) {
          var baseClass = _ref12.baseClass,
              search = _ref12.search;
          return "<div class='".concat(baseClass, "-search ").concat((search != null ? search.length : void 0) ? 'is_visible' : '', "'> <select class='").concat(baseClass, "-search-select'></select> <input class='").concat(baseClass, "-search-input' /> <div class='").concat(baseClass, "-search-selectTrigger'></div> </div>");
        },
        ipDetails: function ipDetails(_ref13) {
          var baseClass = _ref13.baseClass,
              ipAddress = _ref13.ipAddress,
              _ref13$extra = _ref13.extra,
              extra = _ref13$extra === void 0 ? '' : _ref13$extra;
          return "<div class='".concat(baseClass, "-ipDetails _ipDetails' data-ip='").concat(ipAddress, "'> <div class='").concat(baseClass, "-ipDetails-trigger _ipDetails-trigger'></div> <div class='").concat(baseClass, "-ipDetails-content'>Loading IP Details</div> </div> ").concat(extra);
        },
        ipDetailsItem: function ipDetailsItem(_ref14) {
          var baseClass = _ref14.baseClass,
              label = _ref14.label,
              value = _ref14.value;
          return "<div class='".concat(baseClass, "-ipDetails-content-item'> <div class='").concat(baseClass, "-ipDetails-content-item-label'>").concat(label, ": </div> <div class='").concat(baseClass, "-ipDetails-content-item-value'>").concat(value, "</div> </div>");
        },
        fields: function fields(_ref15) {
          var baseClass = _ref15.baseClass,
              _fields = _ref15.fields;
          return "<div class='".concat(baseClass, "-fieldGroup'>").concat(_fields, "</div>");
        },
        fieldsItem: function fieldsItem(_ref16) {
          var baseClass = _ref16.baseClass,
              label = _ref16.label,
              value = _ref16.value;
          return "<div class='".concat(baseClass, "-fieldGroup-item'> <div class='").concat(baseClass, "-fieldGroup-item-label'>").concat(label, ": </div> <div class='").concat(baseClass, "-fieldGroup-item-value'>").concat(escHTML(value), "</div> </div>");
        },
        button: function button(_ref17) {
          var baseClass = _ref17.baseClass,
              action = _ref17.action,
              _ref17$icon = _ref17.icon,
              icon = _ref17$icon === void 0 ? '' : _ref17$icon,
              isMulti = _ref17.isMulti;
          return "<div class='".concat(baseClass, "-button _actionButton ").concat(isMulti ? '_isMulti' : '', "' data-action='").concat(action, "'> <div class='").concat(baseClass, "-button-icon'>").concat(icon, "</div> </div>");
        },
        actions: function actions(_ref18) {
          var baseClass = _ref18.baseClass,
              _actions = _ref18.actions;
          return "<div class='".concat(baseClass, "-actions'> <div class='").concat(baseClass, "-actions-popup'>").concat(_actions, "</div> </div>");
        },
        actionsOverlay: function actionsOverlay() {
          return "<div class='".concat(DataTable.defaults.baseClass, "-actions-overlay'></div>");
        },
        actionsItem: function actionsItem(_ref19) {
          var baseClass = _ref19.baseClass,
              action = _ref19.action,
              icon = _ref19.icon,
              label = _ref19.label,
              _ref19$customIconStyl = _ref19.customIconStyle,
              customIconStyle = _ref19$customIconStyl === void 0 ? '' : _ref19$customIconStyl;
          return "<div class='".concat(baseClass, "-actions-popup-item _actionButton _subActionButton' data-action='").concat(action, "' style='").concat(customIconStyle, "'> <div class='").concat(baseClass, "-actions-popup-item-icon'>").concat(icon, "</div> <div class='").concat(baseClass, "-actions-popup-item-text'>").concat(label, "</div> </div>");
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
        'ipDataFetcher': function ipDataFetcher(ipAddress) {
          return new Promise(function (resolve) {
            return $.get("http://ipinfo.io/".concat(ipAddress), resolve, 'JSON');
          });
        }
      };
      ;
      var helpers;
      helpers = {};

      helpers.compareValues = function (valueA, valueB) {
        switch (false) {
          case _typeof(valueA) !== _typeof(valueB):
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

      helpers.getBreakdownBarWidth = function (row, largest) {
        return row.breakdownBarTotal / largest * (100 - 18);
      };

      helpers.genHeaderCellStyle = function (column) {
        var styleString;
        styleString = '';

        if (column.width) {
          styleString += "max-width: ".concat(column.width, ";");
        }

        if (column.grow >= 0) {
          styleString += "flex-grow: ".concat(column.grow, ";");
        }

        if (styleString) {
          return "style='".concat(styleString, "'");
        } else {
          return '';
        }
      };

      helpers.genCellStyle = function (column) {
        var color, styleString;
        styleString = '';

        if (column.width) {
          styleString += "max-width: ".concat(column.width, ";");
        }

        if (column.color) {
          color = this.colorMapping(column.color, column.colorType);
          styleString += "color: ".concat(color, ";");
        }

        if (column.customStyle) {
          styleString += column.customStyle;
        }

        if (column.grow >= 0) {
          styleString += "flex-grow: ".concat(column.grow, ";");
        }

        if (styleString) {
          return "style='".concat(styleString, "'");
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

      helpers.colorMapping = function (value) {
        var colorType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';

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

      DataTable =
      /*#__PURE__*/
      function (_require) {
        _inherits(DataTable, _require);

        function DataTable(container) {
          var _this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, DataTable);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this));
          _this.container = container;
          _this.options = extend.clone.deepOnly('columns')(DataTable.defaults, options);
          _this.state = {
            'loading': false,
            'noResults': false,
            'error': false
          };
          _this.ID = ++currentID;
          _this.tableID = "#".concat(_this.options.baseClass, "-").concat(_this.ID);
          _this.visibleRows = [];
          _this.availableRows = [];
          _this.allRows = [];
          _this.largestBreakdownTotal = 0;
          _this.searchCriteria = '';
          _this.searchParam = '';
          _this.sortBy = _this.options.sortBy ? _this.options.sortBy : '';
          _this.sortDirection = -1;
          _this.currentPage = 1;
          _this.els = {};
          _this.els.tableOuterwrap = $(markup.tableOuterwrap(extend({
            ID: _this.ID
          }, _this.options)));
          _this.els.table = $(markup.table(_this.options)).appendTo(_this.els.tableOuterwrap);
          _this.els.tableHeading = _this.els.table.children().first().children();
          _this.els.tableBody = _this.els.table.children().last();
          _this.els.noResultsMessage = $(markup.noResults(_this.options)).appendTo(_this.els.tableOuterwrap);
          _this.els.loadingMessage = $(markup.loading(_this.options)).appendTo(_this.els.tableOuterwrap);
          _this.els.errorMessage = $(markup.error(_this.options)).appendTo(_this.els.tableOuterwrap);
          _this.els.pageStatus = $(markup.pageStatus(_this.options)).appendTo(_this.els.tableOuterwrap);
          _this.els.pagination = $(markup.pagination(_this.options)).appendTo(_this.els.tableOuterwrap);
          _this.els.paginationItems = _this.els.pagination.children('._paginationItems');
          _this.els.paginationExtra = _this.els.pagination.children('._extraIndicator');
          _this.els.paginationExtraSelect = _this.els.paginationExtra.children('select');
          _this.els.paginationExtraText = _this.els.paginationExtraSelect.prev();
          _this.els.searchField = $(markup.searchField(_this.options)).insertBefore(_this.els.table);
          _this.els.searchParam = _this.els.searchField.children('select');
          _this.els.searchCriteria = _this.els.searchField.children('input');
          _this.els.globalStyles = $('<style />').prependTo(_this.els.tableOuterwrap);

          _this.els.tableHeading.append(_this.generateHeadingColumns());

          _this.els.tableOuterwrap.appendTo(_this.container);

          _this.els.table.data('DataTable', _assertThisInitialized(_assertThisInitialized(_this)));

          if (_this.options.minWidth) {
            _this.els.table[0].style.minWidth = "".concat(_this.options.minWidth, "px");
          }

          Promise.bind(_assertThisInitialized(_assertThisInitialized(_this))).then(_this.attachEvents).then(_this.attachBindings).then(function () {
            if (this.options.loadOnInit) {
              return this.loadData();
            }
          });
          return _possibleConstructorReturn(_this, _assertThisInitialized(_assertThisInitialized(_this)));
        }

        return DataTable;
      }(require(7));

      DataTable.prototype.fetchData = function () {
        var _this2 = this;

        this.state.loading = true;
        return Promise.resolve().then(function () {
          return _this2.options.data.call(_this2);
        }).then(function (data) {
          _this2.state.loading = _this2.state.error = false;
          return data;
        }).catch(function (err) {
          return _this2.state.error = err;
        });
      };

      DataTable.prototype.setData = function (data) {
        if (Array.isArray(data)) {
          return this.allRows = data;
        }
      };

      DataTable.prototype.appendData = function (data) {
        var _this$allRows;

        return (_this$allRows = this.allRows).push.apply(_this$allRows, _toConsumableArray(data));
      };

      DataTable.prototype.loadData = function () {
        var _this3 = this;

        var i, len, ref, row;

        if (this.allRows.length) {
          ref = this.allRows;

          for (i = 0, len = ref.length; i < len; i++) {
            row = ref[i];
            this.unprocessRow(row);
          }
        }

        return this.fetchData().then(function (data) {
          return _this3.setData(data);
        });
      };

      DataTable.prototype.refresh = function () {
        this.availableRows = this.availableRows;
        return this.currentPage = this.currentPage;
      };

      DataTable.prototype.markupArgs = function () {
        var argsObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
        return "".concat(columnValue, " (").concat(percent, ")");
      };

      DataTable.prototype.sortRows = function (rows) {
        var _this4 = this;

        var targetColumn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.sortBy;
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
            sorter || (sorter = function sorter(a, b) {
              var aValue, bValue;
              aValue = rawValue ? rawValue(a[targetColumn]) : a[targetColumn];
              bValue = rawValue ? rawValue(b[targetColumn]) : b[targetColumn];

              switch (false) {
                case !(aValue > bValue):
                  return _this4.sortDirection;

                case !(aValue < bValue):
                  return _this4.sortDirection * -1;

                default:
                  return 0;
              }
            });
            return rows.slice().sort(sorter);

          default:
            return rows;
        }
      };

      DataTable.prototype.setVisiblePage = function (targetPage) {
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

      DataTable.prototype.setPageIndicator = function (targetPage) {
        var matchedPageEl$, pageItems$;

        if (targetPage === '...') {
          targetPage = 1;
        }

        targetPage = targetPage > this.options.pageCountMax ? this.options.pageCountMax : targetPage - 1; // 0-based index so we subtract 1

        pageItems$ = this.els.pagination.find('._paginationItem').slice(1, -1);
        matchedPageEl$ = pageItems$.eq(targetPage);
        matchedPageEl$.addClass('current');
        return pageItems$.not(matchedPageEl$).removeClass('current');
      };

      ;

      DataTable.prototype.generateHeadingColumns = function () {
        var _this5 = this;

        var column, label;
        this.options.columns = helpers.normalizeColumns(this.options.columns);

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

        return Object.keys(this.options.columns).map(function (label) {
          column = _this5.options.columns[label];
          _this5.els.globalStyles[0].innerHTML += "{{".concat(column.slug, "}}\n");
          return markup.headingCell(_this5.markupArgs({
            'slug': column.slug,
            'icon': column.icon,
            'label': column.label,
            'style': helpers.genHeaderCellStyle(column),
            'extraClasses': helpers.genCellClassname(column)
          }));
        }).join('');
      };

      DataTable.prototype.updateColumns = function (updatedColumns) {
        updatedColumns = helpers.normalizeColumns(updatedColumns);
        extend.deep(this.options.columns, updatedColumns);
        return this.currentPage = this.currentPage;
      };

      ;

      DataTable.prototype.processRow = function (row) {
        var _this6 = this;

        var ref;

        if (row.processed) {
          return row;
        } else {
          this.generateRow(row);
          SimplyBind('visible', {
            updateEvenIfSame: true
          }).of(row).to(function (isVisible, prevValue) {
            if (!isVisible) {
              return row.el.detach();
            } else {
              row.el.appendTo(_this6.els.tableBody);

              if (_this6.hasBreakdownBar && !row.updatedBreakdownWidth && isVisible !== prevValue) {
                return row.breakdownBarWidth = helpers.getBreakdownBarWidth(row, _this6.largestBreakdownTotal);
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
            }).and.to('breakdownBarWidth').of(row).transform(function () {
              return helpers.getBreakdownBarWidth(row, _this6.largestBreakdownTotal);
            }).chainTo('width').of(row.breakdownBarEl[0].style).transform(function (width) {
              return width + '%';
            }).and.to(function () {
              var drilldownEl, i, index, len, ref1, ref2, width;
              ref1 = row.drilldownEls;

              for (index = i = 0, len = ref1.length; i < len; index = ++i) {
                drilldownEl = ref1[index];
                width = helpers.getBreakdownBarWidth(row.drilldown[index], row.drilldown.largestBreakdownTotal);

                if ((ref2 = $(drilldownEl).children('.is_breakdown_bar').children().children()[0]) != null) {
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
            row.drilldown.largestBreakdownTotal = Math.max.apply(Math, _toConsumableArray(row.drilldown.map(function (subRow) {
              return subRow.breakdownBarTotal;
            })));
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
                  return row.expandButton[0].style.top = "".concat(rowHeight / 2 - buttonHeight / 2, "px");
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
        var _this7 = this;

        var isSub;
        isSub = !!parentRow;
        return markup.row(this.markupArgs({
          'rowID': isSub ? parentRow[this.options.uniqueID] : row[this.options.uniqueID],
          'drilldown': isSub ? '' : row.drilldown ? function () {
            var drilldownMarkups, drilldownRow, i, len, ref;
            drilldownMarkups = '';
            ref = row.drilldown;

            for (i = 0, len = ref.length; i < len; i++) {
              drilldownRow = ref[i];
              drilldownMarkups += _this7.generateRowMarkup(drilldownRow, row);
            }

            return drilldownMarkups;
          }() : void 0,
          'cells': function () {
            var cellValue, column, columnName, ref, rowCells;
            rowCells = '';
            ref = _this7.options.columns;

            for (columnName in ref) {
              column = ref[columnName];
              cellValue = row[columnName];

              if (_this7.options.percentage[columnName]) {
                cellValue = _this7.calcPercentageString(cellValue, columnName, row);
              }

              rowCells += markup.rowCell(_this7.markupArgs({
                'label': typeof cellValue === 'string' ? cellValue : '',
                'column': columnName,
                'slug': column.slug,
                'extraClasses': helpers.genCellClassname(column),
                'style': helpers.genCellStyle(column),
                'value': function () {
                  switch (false) {
                    case column.type !== 'fields':
                      return _this7.generateInlineFields(cellValue, row, column);

                    case column.type !== 'ipDetails':
                      return _this7.generateIpDetails(cellValue, row, column);

                    case column.type !== 'breakdownBar':
                      return _this7.generateBreakdownBar(cellValue, row, column);

                    case column.type !== 'button':
                      return _this7.generateButton(column.action || cellValue, column.buttonIcon || column.icon);

                    case column.type !== 'actions':
                      return _this7.generateActions(column, row, column);

                    case !column.isLink:
                      return "<a href='".concat(cellValue, "' target='_blank'>").concat(cellValue, "</a>");

                    default:
                      if (column.formatter) {
                        return column.formatter(cellValue, row, column);
                      } else {
                        return cellValue;
                      }

                  }
                }()
              }));
            }

            return rowCells;
          }()
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
          'bars': function () {
            var bars, i, key, len, value;
            bars = '';

            for (i = 0, len = breakdownKeys.length; i < len; i++) {
              key = breakdownKeys[i];
              value = breakdown[key];
              bars += markup.block_table_body_row_cell_breakdown_bar.replace('{{width}}', value / total * 100);
            }

            return bars;
          }(),
          'hoverBox': function () {
            return markup.block_table_body_row_cell_breakdown_hoverbox.replace('{{rows}}', function () {
              var rows;
              rows = '';
              breakdownKeys.forEach(function (key, index) {
                return rows += markup.block_table_body_row_cell_breakdown_hoverbox_row.replace('{{color}}', customColors(index)).replace('{{key}}', key).replace('{{value}}', columnEntity.valueFormat ? columnEntity.valueFormat(breakdown[key]) : breakdown[key]);
              });
              return rows;
            });
          }()
        }));
      };

      DataTable.prototype.generateInlineFields = function (dataFields) {
        var _this8 = this;

        return markup.fields(this.markupArgs({
          'fields': function () {
            var label, output, value;

            if (_typeof(dataFields) !== 'object') {
              return '';
            }

            output = function () {
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
            }.call(_this8);

            return output.join('');
          }()
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
        var _this9 = this;

        var actionsMarkup, buttonMarkup;

        if (column.actions == null) {
          column.actions = 'multiActions';
        }

        buttonMarkup = this.generateButton(column.actions, column.buttonIcon || column.icon, true);
        actionsMarkup = markup.actions(this.markupArgs({
          'actions': function () {
            var action, output;

            if (!_this9.options.actions) {
              return '';
            }

            output = function () {
              var i, len, ref, results;
              ref = this.options.actions;
              results = [];

              for (i = 0, len = ref.length; i < len; i++) {
                action = ref[i];
                results.push(markup.actionsItem(this.markupArgs(action)));
              }

              return results;
            }.call(_this9);

            return output.join('');
          }()
        }));
        return buttonMarkup + actionsMarkup;
      };

      DataTable.prototype.generateIpDetails = function (ipAddress, row, column) {
        return markup.ipDetails(this.markupArgs({
          ipAddress: ipAddress,
          extra: typeof column.extraMarkup === "function" ? column.extraMarkup(ipAddress, row) : void 0 // data attribute

        }));
      };

      ;
      ;

      DataTable.prototype.attachEvents = function () {
        var _this10 = this;

        // ==== Pagination =================================================================================
        this.els.pagination.on('click', '._paginationItem', function (event) {
          var $this, isBack, isExtra, isNext, pageNumber;
          $this = $(event.currentTarget);
          isBack = $this.hasClass('_back');
          isNext = $this.hasClass('_next');
          isExtra = $this.hasClass('_extraIndicator');

          if (isBack) {
            if (_this10.currentPage !== 1) {
              return _this10.currentPage--;
            }
          } else if (isNext) {
            if (_this10.currentPage !== _this10.pageCountReal) {
              return _this10.currentPage++;
            } // else if not isExtra and not isWrapper

          } else if (!isExtra) {
            pageNumber = parseFloat($this.children().html());
            return _this10.currentPage = pageNumber;
          }
        }); // ==== Sorting =================================================================================

        this.els.tableHeading.on('click', '._isSortable', function (event) {
          return _this10.sortBy = event.currentTarget.children[0].textContent;
        }); // ==== Action button event listeners =================================================================================

        this.els.tableBody.on('click', '._actionButton', function (event) {
          var action, button$, dataItem, itemID, itemIndex, itemRow$;
          button$ = $(event.currentTarget);

          if (button$.hasClass('_isMulti')) {
            return helpers.toggleActionsPopup(button$.next().children());
          } else {
            itemRow$ = button$.closest('._tableRow');
            action = button$.data('action');
            itemID = itemRow$.data('row-id');
            itemIndex = itemRow$.data('index');
            dataItem = itemID ? _this10.allRows.find(function (row) {
              return helpers.compareValues(row[_this10.options.uniqueID], itemID);
            }) : void 0;

            if (dataItem == null) {
              dataItem = itemID;
            }

            if (button$.hasClass('_subActionButton')) {
              helpers.toggleActionsPopup(button$.parent());
            }

            return _this10.els.table.trigger("action.".concat(action), dataItem);
          }
        }); // ==== Row expansion listeners =================================================================================

        this.els.tableBody.on('click', '._expandDrilldown', function (event) {
          var button$, itemRow;
          button$ = $(event.currentTarget);
          itemRow = button$.parent().data('row');
          return itemRow.drilldownOpen = !itemRow.drilldownOpen;
        }); // ==== IP Details listeners =================================================================================

        this.els.tableBody.on('mouseover', '._ipDetails-trigger', function (event) {
          var content$, country$, ipAddress, isLoaded, trigger$, wrapper$;
          trigger$ = $(event.currentTarget);
          wrapper$ = trigger$.parent();
          content$ = trigger$.next();
          country$ = content$.next();
          ipAddress = wrapper$.data('ip');
          isLoaded = trigger$.hasClass('_isReady');

          if (!isLoaded) {
            return _this10.options.ipDataFetcher(ipAddress).then(function (ipDetails) {
              var label, output, value;

              if (!ipDetails) {
                return;
              }

              output = function () {
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
              }.call(_this10);

              content$.html(output.join(''));
              return wrapper$.addClass('_isReady');
            });
          }
        });
        return Promise.resolve();
      };

      ;

      DataTable.prototype.attachBindings = function () {
        var _this11 = this;

        var column, l, ref;
        SimplyBind.settings.trackArrayChildren = false; //# ==========================================================================
        //# State
        //# ========================================================================== 

        SimplyBind('noResults').of(this.state).to('className.isVisible').of(this.els.noResultsMessage).transform(function (noResults) {
          if (noResults && !_this11.state.loading) {
            return 'is_visible';
          } else {
            return '';
          }
        }).and.to('className.noResults').of(this.els.tableOuterwrap).transform(function (noResults) {
          if (noResults && !_this11.state.loading) {
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
        }).and.to('className.loading').of(this.els.tableOuterwrap).transform(function (loading) {
          if (loading) {
            return '_loading';
          } else {
            return '';
          }
        }).and.to(function (loading) {
          if (loading) {
            return _this11.state.noResults = false;
          } else {
            return _this11.state.noResults = !_this11.visibleRows.length;
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
          SimplyBind('event:resize').of(window).to(function () {
            return _this11.windowWidth = window.innerWidth;
          });
          SimplyBind('windowWidth').of(this).to('className.mobileVersion').of(this.els.tableOuterwrap).transform(function (windowWidth) {
            if (windowWidth <= _this11.options.mobileWidth) {
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

          (function (column) {
            return SimplyBind('hidden').of(column).to("innerHTML.".concat(column.slug)).of(_this11.els.globalStyles).transform(function (isHidden) {
              if (isHidden) {
                return "".concat(_this11.tableID, " .__").concat(column.slug, " {display:none}");
              } else {
                return '';
              }
            });
          })(column);
        } //# ==========================================================================
        //# Rows array rendering/processing
        //# ========================================================================== 


        SimplyBind('array:visibleRows').of(this).to(function (rows, prevRows) {
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

              _this11.processRow(row);

              row.visible = true;
            }
          } catch (error) {
            err = error;
            _this11.state.error = err;
          }

          return _this11.state.noResults = !rows.length;
        }).and.to(function (rows) {
          var i, largestBreakdownTotal, len, row;

          if (!_this11.hasBreakdownBar) {
            return;
          }

          for (i = 0, len = rows.length; i < len; i++) {
            row = rows[i];

            if (row.breakdownBarTotal > largestBreakdownTotal || typeof largestBreakdownTotal === "undefined" || largestBreakdownTotal === null) {
              largestBreakdownTotal = row.breakdownBarTotal;
            }
          }

          return _this11.largestBreakdownTotal = largestBreakdownTotal || 0;
        }).and.to('textContent.rowRange').of(this.els.pageStatus).transform(function (rows) {
          return "".concat(_this11.availableRows.indexOf(rows[0]) + 1, "-").concat(_this11.availableRows.indexOf(rows.slice(-1)[0]) + 1);
        });
        SimplyBind('array:allRows').of(this).to(function (rows) {
          _this11.searchCriteria = '';
          _this11.currentPage = 1;
          _this11.state.noResults = !rows.length;

          if (_this11.sortBy === _this11.options.sortBy) {
            _this11.sortBy = '';
            return _this11.sortBy = _this11.options.sortBy;
          } else {
            return _this11.sortBy = '';
          }
        });
        SimplyBind('availableRows', {
          updateOnBind: false,
          updateEvenIfSame: true
        }).of(this).to(function (rows) {
          return _this11.calcPageCount(rows);
        }).and.to('textContent.totalRows').of(this.els.pageStatus).transform(function (rows) {
          return rows.length;
        }); //# ==========================================================================
        //# Pagination
        //# ========================================================================== 

        SimplyBind('pageCount').of(this).to('innerHTML').of(this.els.paginationItems).transform(function (count) {
          // Render pagination
          var i, paginationItems, ref1, value;
          paginationItems = '';

          for (value = i = 1, ref1 = count; 1 <= ref1 ? i <= ref1 : i >= ref1; value = 1 <= ref1 ? ++i : --i) {
            if (value !== 0) {
              paginationItems += markup.paginationItem(_this11.markupArgs({
                value: value
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
        SimplyBind('pageCountReal').of(this).to('innerHTML').of(this.els.paginationExtraSelect).transform(function (realCount) {
          var i, index, options, ref1, ref2;

          if (realCount <= _this11.options.pageCountMax) {
            return '';
          } else {
            options = '<option>...</option>';

            for (index = i = ref1 = _this11.options.pageCountMax + 1, ref2 = realCount; ref1 <= ref2 ? i <= ref2 : i >= ref2; index = ref1 <= ref2 ? ++i : --i) {
              options += "<option>".concat(index, "</option>");
            }

            return options;
          }
        }).and.to('className.hasExtra').of(this.els.pagination).transform(function (realCount) {
          if (realCount > _this11.options.pageCountMax) {
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
        }).of(this).transformSelf(function (currentPage) {
          currentPage = currentPage === '...' ? 1 : parseFloat(currentPage);

          if (currentPage > _this11.pageCountReal) {
            return _this11.pageCountReal;
          } else {
            return currentPage;
          }
        }).to('value').of(this.els.paginationExtraSelect).transform(function (currentPage) {
          if (currentPage > _this11.options.pageCountMax) {
            return currentPage;
          } else {
            return '...';
          }
        }).and.to(function (currentPage) {
          _this11.setVisiblePage(currentPage);

          return _this11.setPageIndicator(currentPage);
        }); //# ==========================================================================
        //# Search Field
        //# ========================================================================== 
        // ==== Search Field value/markup =================================================================================

        if (this.options.search.length) {
          this.searchParam = this.options.search[0];
          SimplyBind('search').of(this.options).to('innerHTML').of(this.els.searchParam).transform(function (options) {
            return options.map(function (option) {
              return "<option>".concat(option, "</option>");
            }).join('');
          });
          SimplyBind('value').of(this.els.searchParam).to('searchParam').of(this).pipe('attr:placeholder').of(this.els.searchCriteria).transform(function (option) {
            return "Filter by ".concat(option);
          });
        } // ==== Table results filter & avaiable rows =================================================================================


        SimplyBind('value').of(this.els.searchCriteria).to('searchCriteria', {
          // Search/Filter
          updateEvenIfSame: true
        }).of(this).bothWays().chainTo(function (searchCriteria) {
          var ref1, rowsToMakeAvailable, targetColumn;
          rowsToMakeAvailable = _this11.allRows;
          targetColumn = _this11.options.columns[_this11.searchParam];

          if (searchCriteria && (targetColumn || ((ref1 = _this11.allRows[0]) != null ? ref1[_this11.searchParam] : void 0) != null)) {
            rowsToMakeAvailable = rowsToMakeAvailable.filter(function (row) {
              var rowValue;
              rowValue = (targetColumn != null ? targetColumn.rawValueFormatter : void 0) ? targetColumn.rawValueFormatter(row[_this11.searchParam]) : row[_this11.searchParam];
              return rowValue != null ? rowValue.toString().toLowerCase().includes(searchCriteria.toLowerCase()) : void 0;
            });
          }

          if (_this11.options.rowFilter) {
            rowsToMakeAvailable = rowsToMakeAvailable.filter(function (row) {
              var name, ref2, rowClone;
              rowClone = extend.clone(row);
              ref2 = _this11.options.columns;

              for (name in ref2) {
                column = ref2[name];

                if (column.rawValueFormatter) {
                  rowClone[name] = column.rawValueFormatter(rowClone[name]);
                }
              }

              return _this11.options.rowFilter(rowClone);
            });
          }

          _this11.availableRows = rowsToMakeAvailable;
          return _this11.currentPage = 1;
        }); //# ==========================================================================
        //# Sorting
        //# ========================================================================== 

        SimplyBind('sortBy', {
          updateEvenIfSame: true,
          updateOnBind: false
        }, true).of(this).to(function (currentSort, prevSort) {
          var targetColumn;

          if (currentSort || prevSort) {
            if (currentSort === prevSort && prevSort) {
              _this11.sortDirection *= -1;
            } else {
              _this11.sortDirection = -1;
            }

            targetColumn = currentSort ? currentSort : null;
            _this11.availableRows = _this11.sortRows(_this11.availableRows, targetColumn);
            return _this11.currentPage = 1;
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
      };

      ;

      DataTable.prototype.sortBy = function (column) {};

      ;
      currentID = 0;
      DataTable.version = "2.9.7";
      DataTable.helpers = helpers;
      DataTable.markup = markup;
      DataTable.defaults = defaults;
      module.exports = DataTable;
      return module.exports;
    },
    1: function _(require, module, exports) {
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
          get: function get() {
            return placeholder;
          },
          set: function set(newPlaceholder) {
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

      changeEvent = function changeEvent() {
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
      requiresDomDescriptorFix = !('className' in Element.prototype) || !getDescriptor(Element.prototype, 'className').get;
      ;
      var windowPropsToIgnore;
      windowPropsToIgnore = ['innerWidth', 'innerHeight', 'outerWidth', 'outerHeight', 'scrollX', 'scrollY', 'pageXOffset', 'pageYOffset', 'screenX', 'screenY', 'screenLeft', 'screenTop'];
      ;

      setValueNoop = function setValueNoop(v, publisher) {
        return this.updateAllSubs(publisher || this);
      };

      genID = function genID() {
        return '' + ++currentID;
      };

      genObj = function genObj() {
        return Object.create(null);
      };

      genProxiedInterface = function genProxiedInterface(isSub, completeCallback) {
        return function (subject, customOptions, saveOptions) {
          return SimplyBind(subject, customOptions, saveOptions, isSub, completeCallback);
        };
      };

      genSelfUpdater = function genSelfUpdater(binding, fetchValue) {
        return binding.selfUpdater || (binding.selfUpdater = new Binding(function () {
          if (fetchValue) {
            return binding.setValue(binding.fetchDirectValue(), binding, true);
          } else {
            return binding.updateAllSubs(binding);
          }
        }, 'Func', {}));
      };

      var checkIf, targetIncludes;

      targetIncludes = function targetIncludes(target, item) {
        return target && target.indexOf(item) !== -1;
      };

      checkIf = {
        isDefined: function isDefined(subject) {
          return subject !== void 0;
        },
        isArray: function isArray(subject) {
          return subject instanceof Array;
        },
        isObject: function isObject(subject) {
          return _typeof(subject) === 'object' && subject; // 2nd check is to test against 'null' values
        },
        isString: function isString(subject) {
          return typeof subject === 'string';
        },
        isNumber: function isNumber(subject) {
          return typeof subject === 'number';
        },
        isFunction: function isFunction(subject) {
          return typeof subject === 'function';
        },
        isBindingInterface: function isBindingInterface(subject) {
          return subject instanceof BindingInterface;
        },
        isBinding: function isBinding(subject) {
          return subject instanceof Binding;
        },
        isIterable: function isIterable(subject) {
          return checkIf.isObject(subject) && checkIf.isNumber(subject.length);
        },
        isDom: function isDom(subject) {
          return subject.nodeName && subject.nodeType === 1;
        },
        isDomInput: function isDomInput(subject) {
          var nodeName;
          nodeName = subject.nodeName;
          return nodeName === 'INPUT' || nodeName === 'TEXTAREA' || nodeName === 'SELECT';
        },
        isDomRadio: function isDomRadio(subject) {
          return subject.type === 'radio';
        },
        isDomCheckbox: function isDomCheckbox(subject) {
          return subject.type === 'checkbox';
        },
        isElCollection: function isElCollection(subject) {
          return subject instanceof NodeList || subject instanceof HTMLCollection || window.jQuery && subject instanceof jQuery;
        },
        domElsAreSame: function domElsAreSame(iterable) {
          var itemsWithSameType, type;
          type = iterable[0].type;
          itemsWithSameType = [].filter.call(iterable, function (item) {
            return item.type === type;
          });
          return itemsWithSameType.length === iterable.length;
        },
        isDomNode: function isDomNode(subject) {
          return checkIf.isDom(subject) || subject === window || subject === document;
        }
      };
      ;

      var _convertToLive, convertToReg, _fetchDescriptor;

      _fetchDescriptor = function fetchDescriptor(object, property, isProto) {
        var descriptor, objectProto;
        descriptor = getDescriptor(object, property);

        if (descriptor) {
          if (isProto) {
            descriptor.configurable = true;
          }

          return descriptor;
        } else if (objectProto = Object.getPrototypeOf(object)) {
          return _fetchDescriptor(objectProto, property, true);
        }
      };

      _convertToLive = function convertToLive(bindingInstance, object, onlyArrayMethods) {
        var _, context, getterValue, origFn, propertyDescriptor, proxyFn, shouldIndicateUpdateIsFromSelf, shouldWriteLiveProp, slice, typeIsArray;

        _ = bindingInstance;

        if (!_.origDescriptor) {
          _.origDescriptor = _fetchDescriptor(object, _.property);
        }

        if (onlyArrayMethods) {
          arrayMutatorMethods.forEach(function (method) {
            return defineProperty(object, method, {
              configurable: true,
              value: function value() {
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

              getterValue = proxyFn = function proxyFn() {
                var args, result;
                args = slice.call(arguments);
                _.value.args = args = _.selfTransform ? _.selfTransform(args) : args;
                _.value.result = result = origFn.apply(context, args);

                _.updateAllSubs(_);

                return result;
              };

              defineProperty(object, _.property, {
                configurable: _.isLiveProp = true,
                get: function get() {
                  return getterValue;
                },
                set: function set(newValue) {
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
                get: _.origGetter || function () {
                  return _.value;
                },
                set: function set(newValue) {
                  _.setValue(newValue, _, shouldIndicateUpdateIsFromSelf);
                }
              });

              if (typeIsArray) {
                _convertToLive(_, object[_.property], true);
              }
            }
          }
        }
      };

      convertToReg = function convertToReg(bindingInstance, object, onlyArrayMethods) {
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

      cloneObject = function cloneObject(object) {
        var clone, key;
        clone = genObj();

        for (key in object) {
          clone[key] = object[key];
        }

        return clone;
      };

      extendState = function extendState(base, stateToInherit) {
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
        get: function get(object, isFunction, selector, isMultiChoice) {
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
        set: function set(B, isFunction) {
          // B ==== Binding Object
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

      var addToNodeStore, applyPlaceholders, escapeRegEx, pholderRegEx, pholderRegExSplit, _scanTextNodesPlaceholders, setPholderRegEx, textContent;

      escapeRegEx = /[.*+?^${}()|[\]\\]/g;
      pholderRegEx = pholderRegExSplit = null;

      setPholderRegEx = function setPholderRegEx() {
        var end, middle, start;
        start = settings.placeholder[0].replace(escapeRegEx, '\\$&');
        end = settings.placeholder[1].replace(escapeRegEx, '\\$&');
        middle = "[^".concat(end, "]+");
        pholderRegEx = new RegExp("".concat(start, "(").concat(middle, ")").concat(end), 'g');
        pholderRegExSplit = new RegExp("".concat(start).concat(middle).concat(end), 'g');
      };

      setPholderRegEx(); // Create the regEx on init

      applyPlaceholders = function applyPlaceholders(contexts, values, indexMap) {
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

      addToNodeStore = function addToNodeStore(nodeStore, node, targetPlaceholder) {
        if (nodeStore[targetPlaceholder] == null) {
          nodeStore[targetPlaceholder] = [];
        }

        nodeStore[targetPlaceholder].push(node);
      };

      _scanTextNodesPlaceholders = function scanTextNodesPlaceholders(element, nodeStore) {
        var childNodes, i, index, j, len, len1, newFragment, newNode, node, textPiece, textPieces;
        childNodes = Array.prototype.slice.call(element.childNodes);

        for (i = 0, len = childNodes.length; i < len; i++) {
          node = childNodes[i];

          if (node.nodeType !== 3) {
            _scanTextNodesPlaceholders(node, nodeStore);
          } else if (node[textContent].match(pholderRegExSplit)) {
            textPieces = node[textContent].split(pholderRegEx);

            if (textPieces.length === 3 && textPieces[0] + textPieces[2] === '') {
              // The entire textNode is just the placeholder
              addToNodeStore(nodeStore, node, textPieces[1]);
            } else {
              newFragment = document.createDocumentFragment();

              for (index = j = 0, len1 = textPieces.length; j < len1; index = ++j) {
                textPiece = textPieces[index];
                newNode = newFragment.appendChild(document.createTextNode(textPiece));

                if (index % 2) {
                  // is an odd index, indicating that before this text piece should come a placeholder node
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

      throwError = function throwError(errorName) {
        throw new Error('SimplyBind: ' + (errors[errorName] || errorName));
      };

      throwWarning = function throwWarning(warningName, depth) {
        var errSource, warn;

        if (!settings.silent) {
          errSource = getErrSource(depth);
          warn = errors[warningName];
          warn += "\n\n" + errSource;
          console.warn('SimplyBind: ' + warn);
        }
      };

      throwErrorBadArg = function throwErrorBadArg(arg) {
        throwError("Invalid argument/s (".concat(arg, ")"), true);
      };

      getErrSource = function getErrSource(depth) {
        return (new Error().stack || '').split('\n').slice(depth + 3).join('\n');
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

      SimplyBind = function SimplyBind(subject, options, saveOptions, isSub, completeCallback) {
        var interfaceToReturn, newInterface;

        if (!subject && subject !== 0 || !checkIf.isString(subject) && !checkIf.isNumber(subject) && !checkIf.isFunction(subject) && !(subject instanceof Array)) {
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
          /**
           * Conditional Checks:
           *
           * 1) Make sure the subject object is iterable (and thus a possible candidate for being an element collection)
           * 2) Make sure the subject object isn't an array binding (since element collection objects don't get directly bound)
           * 3) Make sure the first element in the collection is a valid object (i.e. isn't undefined and isn't null)
           * 4) Make sure the first element is a DOM object
           */
          var object;

          if (checkIf.isIterable(object) && !object._sb_ID && object[0] && checkIf.isDom(object[0])) {
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

      Binding = function Binding(object, type, state) {
        var _this12 = this;

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
          this.object.forEach(function (choiceEl) {
            var choiceBinding;
            choiceBinding = _this12.choices[choiceEl.value] = SimplyBind('checked').of(choiceEl)._;
            choiceBinding.addSub(_this12);

            choiceBinding.subsMeta[_this12.ID].transformFn = function () {
              return choiceBinding;
            };

            choiceBinding.groupBinding = _this12;
          });
        }

        if (!(this.type === 'Event' || this.type === 'Func' && this.isSub)) {
          if (this.type === 'Pholder') {
            parentProperty = this.descriptor && !targetIncludes(this.descriptor, 'multi') ? "".concat(this.descriptor, ":").concat(this.property) : this.property;
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

            _convertToLive(this, this.object);
          }
        }

        this.attachEvents();
        return boundInstances[this.ID] = this;
      };

      var eventUpdateHandler;
      Binding.prototype = {
        //# ==========================================================================
        //# Subscriber Management
        //# ========================================================================== 
        addSub: function addSub(sub, options, updateOnce, updateEvenIfSame) {
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
        removeSub: function removeSub(sub, bothWays) {
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
            this.destroy(); // Since it's no longer a subscriber or has any subscribers
          }
        },
        removeAllSubs: function removeAllSubs(bothWays) {
          var j, len, ref, sub;
          ref = this.subs.slice();

          for (j = 0, len = ref.length; j < len; j++) {
            sub = ref[j];
            this.removeSub(sub, bothWays);
          }
        },
        destroy: function destroy() {
          // Resets object to initial state (pre-binding state)
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

          if (this.isLiveProp && this.origDescriptor) {
            /* istanbul ignore next */
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
        //# ==========================================================================
        //# Value set/get
        //# ========================================================================== 
        fetchDirectValue: function fetchDirectValue() {
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
        setValue: function setValue(newValue, publisher, fromSelf, fromChangeEvent) {
          // fromSelf===true when called from eventUpdateHandler or property descriptor setter (unless it's an Array binding)
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
                    // IMPLICIT: and fromChangeEvent
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

                  _convertToLive(this, newValue = newValue.slice(), true);

                  if (this.origSetter) {
                    // Will update any other previous non-Array bindings to the same object property
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
                  // The newValue var will hold the radio field binding as its value if the update is coming from the radio field's change event
                  targetChoiceBinding = checkIf.isBinding(newValue) ? newValue : this.choices[newValue];

                  if (targetChoiceBinding) {
                    newValue = targetChoiceBinding.object.value;
                    ref1 = this.choices;

                    for (n in ref1) {
                      choiceBinding = ref1[n];
                      choiceBinding.setValue(choiceBinding.ID === targetChoiceBinding.ID, publisher);
                    }
                  } else {
                    newValue = this.value; // Set to prev value
                  }
                } else {
                  newValue = !!newValue; // Convert to Boolean

                  if (newValue === this.value) {
                    return;
                  }

                  if (this.object.checked !== newValue) {
                    this.object.checked = newValue;
                  }

                  if (newValue && settings.dispatchEvents) {
                    // Only emit if the value is true (in order to conform to web standards)
                    this.object.dispatchEvent(changeEvent());
                  }
                }

                break;

              case 'DOMCheckbox':
                if (this.isMultiChoice) {
                  // The newValue var will hold the checkbox field binding as its value if the update is coming from the checkbox field's change event
                  overwritePrevious = !checkIf.isBinding(newValue); // Means that a new array was supplied

                  newChoices = [].concat(newValue); // This *normalizes* the new value into an array

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
                  newValue = !!newValue; // Convert to Boolean

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
        updateAllSubs: function updateAllSubs(publisher) {
          var arr, i;

          if (i = (arr = this.subs).length) {
            // Ugly shortcut for index definition in order to limit logic repitiion
            while (i--) {
              this.updateSub(arr[i], publisher);
            }
          }
        },
        updateSub: function updateSub(sub, publisher, isDelayedUpdate) {
          var _this13 = this;

          var currentTime, meta, newValue, subValue, timePassed, transform;

          if (publisher === sub || publisher !== this && publisher.subsMeta[sub.ID]) {
            return;
          }

          meta = this.subsMeta[sub.ID];

          if (meta.disallowList && meta.disallowList[publisher.ID]) {
            return;
          }

          if (meta.opts.throttle) {
            currentTime = +new Date();
            timePassed = currentTime - meta.lastUpdate;

            if (timePassed < meta.opts.throttle) {
              clearTimeout(meta.updateTimer);
              return meta.updateTimer = setTimeout(function () {
                if (_this13.subsMeta[sub.ID]) {
                  return _this13.updateSub(sub, publisher);
                }
              }, meta.opts.throttle - timePassed);
            } else {
              meta.lastUpdate = currentTime;
            }
          } else if (meta.opts.delay && !isDelayedUpdate) {
            return setTimeout(function () {
              if (_this13.subsMeta[sub.ID]) {
                return _this13.updateSub(sub, publisher, true);
              }
            }, meta.opts.delay);
          }

          newValue = this.type === 'Array' && meta.opts.sendArrayCopies ? this.value.slice() : this.value;
          subValue = sub[meta.valueRef];
          newValue = (transform = meta.transformFn) ? transform(newValue, subValue, sub.object) : newValue;

          if (newValue === subValue && !meta.opts.updateEvenIfSame || meta.conditionFn && !meta.conditionFn(newValue, subValue, sub.object)) {
            return;
          } // Why do we need the 'promiseTransforms' option when we can just check for the existance of .then method?
          // Because tests show that when searching for the .then prop on the object results in a performance slowdown of up to 30%!
          // Checking if the promiseTransforms option is enabled first eliminates unnecessary lookups & slowdowns.


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
        //# ==========================================================================
        //# Transforms & Conditions
        //# ==========================================================================
        addModifierFn: function addModifierFn(target, subInterfaces, subjectFn, updateOnBind) {
          var base, j, len, subInterface, subMetaData, subscriber;

          if (!checkIf.isFunction(subjectFn)) {
            return throwWarning('fnOnly', 2);
          } else {
            for (j = 0, len = subInterfaces.length; j < len; j++) {
              subInterface = subInterfaces[j];
              subscriber = subInterface._ || subInterface; // Second is chosen when the passed subscriber interfaces multi-binding (is a recursive call of this method)

              if (subscriber.isMulti) {
                this.addModifierFn(target, subscriber.bindings, subjectFn, updateOnBind);
              } else {
                subMetaData = this.subsMeta[subscriber.ID];
                subMetaData[target] = subjectFn;
                updateOnBind = updateOnBind && !subMetaData.updateOnce;

                if (this.pubsMap[subscriber.ID]) {
                  (base = subscriber.subsMeta[this.ID])[target] || (base[target] = subjectFn); // Will not replace existing modifier function if exists
                }

                if ((updateOnBind || this.type === 'Func') && target === 'transformFn') {
                  this.updateSub(subscriber, this);
                }
              }
            }

            return true;
          }
        },
        setSelfTransform: function setSelfTransform(transformFn, updateOnBind) {
          this.selfTransform = transformFn;

          if (updateOnBind) {
            this.setValue(this.value);
          }
        },
        //# ==========================================================================
        //# Allow/Disallow rules
        //# ========================================================================== 
        addDisallowRule: function addDisallowRule(targetSub, targetDisallow) {
          var base, disallowList;
          disallowList = (base = this.subsMeta[targetSub.ID]).disallowList != null ? base.disallowList : base.disallowList = genObj();
          disallowList[targetDisallow.ID] = 1;
        },
        //# ==========================================================================
        //# Placeholders
        //# ========================================================================== 
        scanForPholders: function scanForPholders() {
          var _this14 = this;

          var index;

          if (!this.pholderValues) {
            this.pholderValues = genObj();
            this.pholderIndexMap = genObj();
            this.pholderContexts = [];

            if (checkIf.isString(this.value)) {
              this.pholderContexts = this.value.split(pholderRegExSplit);
              index = 0;
              this.value = this.value.replace(pholderRegEx, function (e, pholder) {
                _this14.pholderIndexMap[index++] = pholder;
                return _this14.pholderValues[pholder] = pholder;
              });
            }

            if (this.isDom && this.property === textContent) {
              _scanTextNodesPlaceholders(this.object, this.textNodes = genObj());
            }
          }
        },
        //# ==========================================================================
        //# Polling
        //# ========================================================================== 
        addPollInterval: function addPollInterval(time) {
          var _this15 = this;

          if (this.type !== 'Event') {
            this.removePollInterval();
            return this.pollInterval = setInterval(function () {
              var polledValue;
              polledValue = _this15.fetchDirectValue();
              return _this15.setValue(polledValue, _this15, true);
            }, time);
          }
        },
        removePollInterval: function removePollInterval() {
          clearInterval(this.pollInterval);
          return this.pollInterval = null;
        },
        //# ==========================================================================
        //# Events
        //# ========================================================================== 
        addUpdateListener: function addUpdateListener(eventName, targetProperty) {
          var _this16 = this;

          this.object.addEventListener(eventName, function (event) {
            var shouldRedefineValue;

            if (!event._sb) {
              shouldRedefineValue = _this16.selfTransform && _this16.isDomInput;

              _this16.setValue(_this16.object[targetProperty], null, !shouldRedefineValue, true);
            }
          }, false);
        },
        attachEvents: function attachEvents() {
          if (this.eventName) {
            this.registerEvent(this.eventName);
          } else if (this.isDomInput) {
            this.addUpdateListener('input', 'value');
            this.addUpdateListener('change', 'value');
          } else if (!this.isMultiChoice && (this.type === 'DOMRadio' || this.type === 'DOMCheckbox')) {
            this.addUpdateListener('change', 'checked');
          }
        },
        registerEvent: function registerEvent(eventName) {
          this.attachedEvents.push(eventName);

          if (!this.eventHandler) {
            this.eventHandler = eventUpdateHandler.bind(this);
          }

          this.object[this.eventMethods.listen](eventName, this.eventHandler);
        },
        unRegisterEvent: function unRegisterEvent(eventName) {
          this.attachedEvents.splice(this.attachedEvents.indexOf(eventName), 1);
          this.object[this.eventMethods.remove](eventName, this.eventHandler);
        },
        emitEvent: function emitEvent(extraData) {
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

      eventUpdateHandler = function eventUpdateHandler() {
        if (!this.isEmitter) {
          this.setValue(arguments[this.property], null, true);
        }
      };

      ;
      ;
      var BindingInterface;

      BindingInterface = function BindingInterface(options, inheritedState) {
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
        selfClone: function selfClone() {
          return new BindingInterface(null, this);
        },
        defineMainProps: function defineMainProps(binding) {
          this._ = binding;
          return Object.defineProperties(this, {
            'value': {
              get: function get() {
                return binding.value;
              }
            },
            'original': {
              get: function get() {
                return binding.objects || binding.object;
              }
            },
            'subscribers': {
              get: function get() {
                return binding.subs.slice().map(function (sub) {
                  return sub.object;
                });
              }
            }
          });
        },
        createBinding: function createBinding(subject, newObjectType, bindingInterface, isFunction) {
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
        patchCachedBinding: function patchCachedBinding(cachedBinding) {
          var key, option, ref, ref1, value;

          if (cachedBinding.type === 'ObjectProp' && !(this.property in this.object)) {
            _convertToLive(cachedBinding, this.object);
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
        setProperty: function setProperty(subject) {
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
        setObject: function setObject(subject, isFunction) {
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
        addToPublisher: function addToPublisher(publisherInterface) {
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
          get: function get() {
            if (!this.stage) {
              //=== if stage is 0
              return METHOD_of;
            }
          }
        },
        set: {
          get: function get() {
            if (this.stage) {
              //=== if stage is 1 or 2
              return METHOD_set;
            }
          }
        },
        chainTo: {
          get: function get() {
            if (this.stage === 2) {
              return METHOD_chainTo;
            }
          }
        },
        transformSelf: {
          get: function get() {
            if (this.stage === 1) {
              return METHOD_transformSelf;
            }
          }
        },
        transform: {
          get: function get() {
            if (this.stage === 2) {
              return METHOD_transform;
            }
          }
        },
        transformAll: {
          get: function get() {
            if (this.stage === 2) {
              return METHOD_transformAll;
            }
          }
        },
        condition: {
          get: function get() {
            if (this.stage === 2) {
              return METHOD_condition;
            }
          }
        },
        conditionAll: {
          get: function get() {
            if (this.stage === 2) {
              return METHOD_conditionAll;
            }
          }
        },
        bothWays: {
          get: function get() {
            if (this.stage === 2) {
              return METHOD_bothWays;
            }
          }
        },
        unBind: {
          get: function get() {
            if (this.stage === 2) {
              return METHOD_unBind;
            }
          }
        },
        pollEvery: {
          get: function get() {
            if (this.stage) {
              //=== if stage is 1 or 2
              return METHOD_pollEvery;
            }
          }
        },
        stopPolling: {
          get: function get() {
            if (this.stage) {
              //=== if stage is 1 or 2
              return METHOD_stopPolling;
            }
          }
        },
        setOption: {
          get: function get() {
            if (this.stage === 2) {
              return METHOD_setOption;
            }
          }
        },
        disallowFrom: {
          get: function get() {
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
          get: function get() {
            var thisInterface;

            if (this.stage && (thisInterface = this)) {
              //=== if stage is 1 or 2
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
          get: function get() {
            var selfUpdater, thisInterface;

            if (this.stage && (thisInterface = this) && (selfUpdater = this._.selfUpdater)) {
              //=== if stage is 1 or 2
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
          get: function get() {
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
          get: function get() {
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
          get: function get() {
            var interfaceToReturn;

            if (this.stage === 1) {
              interfaceToReturn = this.selfClone();
              interfaceToReturn.updateOnce = true;
              return interfaceToReturn;
            }
          }
        },
        // ==== Aliases =================================================================================
        update: {
          get: function get() {
            return this.set;
          }
        },
        twoWay: {
          get: function get() {
            return this.bothWays;
          }
        },
        pipe: {
          get: function get() {
            return this.chainTo;
          }
        }
      });

      METHOD_of = function METHOD_of(object) {
        if (!(checkIf.isObject(object) || checkIf.isFunction(object))) {
          throwErrorBadArg(object);
        }

        if (checkIf.isBindingInterface(object)) {
          object = object.object;
        }

        this.stage = 1;
        return this.setObject(object);
      };

      METHOD_chainTo = function METHOD_chainTo(subject, specificOptions, saveOptions) {
        return SimplyBind(this.subs[this.subs.length - 1]).to(subject, specificOptions, saveOptions);
      };

      METHOD_set = function METHOD_set(newValue) {
        this._.setValue(newValue);

        return this;
      };

      METHOD_transformSelf = function METHOD_transformSelf(transformFn) {
        // Applied only to the last sub
        if (!checkIf.isFunction(transformFn)) {
          throwWarning('fnOnly', 1);
        } else {
          this._.setSelfTransform(transformFn, this.options.updateOnBind);
        }

        return this;
      };

      METHOD_transform = function METHOD_transform(transformFn) {
        // Applied only to the last sub
        this._.addModifierFn('transformFn', this.subs.slice(-1), transformFn, this.options.updateOnBind);

        return this;
      };

      METHOD_transformAll = function METHOD_transformAll(transformFn) {
        // Applied to entrie subs set		
        this._.addModifierFn('transformFn', this.subs, transformFn, this.options.updateOnBind);

        return this;
      };

      METHOD_condition = function METHOD_condition(conditionFn) {
        // Applied only to the last sub
        this._.addModifierFn('conditionFn', this.subs.slice(-1), conditionFn);

        return this;
      };

      METHOD_conditionAll = function METHOD_conditionAll(conditionFn) {
        // Applied to entrie subs set
        this._.addModifierFn('conditionFn', this.subs, conditionFn);

        return this;
      };

      METHOD_bothWays = function METHOD_bothWays(altTransform) {
        // Applied only to the last sub
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

      METHOD_unBind = function METHOD_unBind(bothWays) {
        // Applied to all subs
        var i, len, ref, sub;
        ref = this.subs;

        for (i = 0, len = ref.length; i < len; i++) {
          sub = ref[i];

          this._.removeSub(sub._, bothWays);
        }

        return this;
      };

      METHOD_pollEvery = function METHOD_pollEvery(time) {
        this._.addPollInterval(time);

        return this;
      };

      METHOD_stopPolling = function METHOD_stopPolling() {
        this._.removePollInterval();

        return this;
      };

      METHOD_setOption = function METHOD_setOption(optionName, newValue) {
        this._.subsMeta[this.subs[this.subs.length - 1]._.ID].opts[optionName] = newValue;
        return this;
      };

      ;
      ;
      var GroupBinding, proto;

      GroupBinding = function GroupBinding(bindingInterface, objects, objectType) {
        var bindings, i, len, object;
        bindingInterface.selector = bindingInterface.selector.slice(6); // Take out the 'multi:'

        extendState(this, this.interface = bindingInterface);
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
            get: function get() {
              return bindings.map(function (binding) {
                return binding.type;
              });
            }
          },
          'value': {
            get: function get() {
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
          // Four arguments is the most ever passed to any method from BindingInterface methods
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

      proto.addBinding = function (object, objectType) {
        this.bindings.push(!objectType ? object : this.createBinding(object, objectType, this.interface));
      };

      ;
      module.exports = SimplyBind;
      return module.exports;
    },
    2: function _(require, module, exports) {
      var exports, extend, modifiers, newBuilder, normalizeKeys;
      extend = require(18);

      normalizeKeys = function normalizeKeys(keys) {
        var i, key, len, output;

        if (keys) {
          output = {};

          if (_typeof(keys) !== 'object') {
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

      newBuilder = function newBuilder(isBase) {
        var _builder;

        _builder = function builder(target) {
          var theTarget;
          var $_len = arguments.length,
              $_i = -1,
              sources = new Array($_len);

          while (++$_i < $_len) {
            sources[$_i] = arguments[$_i];
          }

          if (_builder.options.target) {
            theTarget = _builder.options.target;
          } else {
            theTarget = target;
            sources.shift();
          }

          return extend(_builder.options, theTarget, sources);
        };

        if (isBase) {
          _builder.isBase = true;
        }

        _builder.options = {};
        Object.defineProperties(_builder, modifiers);
        return _builder;
      };

      modifiers = {
        'deep': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            _.options.deep = true;
            return _;
          }
        },
        'own': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            _.options.own = true;
            return _;
          }
        },
        'allowNull': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            _.options.allowNull = true;
            return _;
          }
        },
        'nullDeletes': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            _.options.nullDeletes = true;
            return _;
          }
        },
        'concat': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            _.options.concat = true;
            return _;
          }
        },
        'clone': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            _.options.target = {};
            return _;
          }
        },
        'notDeep': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            return function (keys) {
              _.options.notDeep = normalizeKeys(keys);
              return _;
            };
          }
        },
        'deepOnly': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            return function (keys) {
              _.options.deepOnly = normalizeKeys(keys);
              return _;
            };
          }
        },
        'keys': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            return function (keys) {
              _.options.keys = normalizeKeys(keys);
              return _;
            };
          }
        },
        'notKeys': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            return function (keys) {
              _.options.notKeys = normalizeKeys(keys);
              return _;
            };
          }
        },
        'transform': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            return function (transform) {
              if (typeof transform === 'function') {
                _.options.globalTransform = transform;
              } else if (transform && _typeof(transform) === 'object') {
                _.options.transforms = transform;
              }

              return _;
            };
          }
        },
        'filter': {
          get: function get() {
            var _;

            _ = this.isBase ? newBuilder() : this;
            return function (filter) {
              if (typeof filter === 'function') {
                _.options.globalFilter = filter;
              } else if (filter && _typeof(filter) === 'object') {
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
    3: function _(require, module, exports) {
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
    7: function _(require, module, exports) {
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
    18: function _(require, module, exports) {
      var _extend, isArray, isObject, _shouldDeepExtend;

      isArray = function isArray(target) {
        return Array.isArray(target);
      };

      isObject = function isObject(target) {
        return target && Object.prototype.toString.call(target) === '[object Object]' || isArray(target);
      };

      _shouldDeepExtend = function shouldDeepExtend(options, target, parentKey) {
        if (options.deep) {
          if (options.notDeep) {
            return !options.notDeep[target];
          } else {
            return true;
          }
        } else if (options.deepOnly) {
          return options.deepOnly[target] || parentKey && _shouldDeepExtend(options, parentKey);
        }
      };

      module.exports = _extend = function extend(options, target, sources, parentKey) {
        var i, key, len, source, sourceValue, subTarget, targetValue;

        if (!target || _typeof(target) !== 'object' && typeof target !== 'function') {
          target = {};
        }

        for (i = 0, len = sources.length; i < len; i++) {
          source = sources[i];

          if (source != null) {
            for (key in source) {
              sourceValue = source[key];
              targetValue = target[key];

              if (sourceValue === target || sourceValue === void 0 || sourceValue === null && !options.allowNull && !options.nullDeletes || options.keys && !options.keys[key] || options.notKeys && options.notKeys[key] || options.own && !source.hasOwnProperty(key) || options.globalFilter && !options.globalFilter(sourceValue, key, source) || options.filters && options.filters[key] && !options.filters[key](sourceValue, key, source)) {
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

                case !(_shouldDeepExtend(options, key, parentKey) && isObject(sourceValue)):
                  subTarget = isObject(targetValue) ? targetValue : isArray(sourceValue) ? [] : {};
                  target[key] = _extend(options, subTarget, [sourceValue], key);
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
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    module.exports = require(0);
  } else {
    return this['DataTable'] = require(0);
  }
}).call(this, null, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : this);
