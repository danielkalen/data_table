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
        targetPage--;
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

        targetPage = targetPage > this.options.pageCountMax ? this.options.pageCountMax : targetPage - 1;
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
          extra: typeof column.extraMarkup === "function" ? column.extraMarkup(ipAddress, row) : void 0
        }));
      };

      ;
      ;

      DataTable.prototype.attachEvents = function () {
        var _this10 = this;

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
            }
          } else if (!isExtra) {
            pageNumber = parseFloat($this.children().html());
            return _this10.currentPage = pageNumber;
          }
        });
        this.els.tableHeading.on('click', '._isSortable', function (event) {
          return _this10.sortBy = event.currentTarget.children[0].textContent;
        });
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
        });
        this.els.tableBody.on('click', '._expandDrilldown', function (event) {
          var button$, itemRow;
          button$ = $(event.currentTarget);
          itemRow = button$.parent().data('row');
          return itemRow.drilldownOpen = !itemRow.drilldownOpen;
        });
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
        SimplyBind.settings.trackArrayChildren = false;
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

        ref = this.options.columns;

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
        }

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
        });
        SimplyBind('pageCount').of(this).to('innerHTML').of(this.els.paginationItems).transform(function (count) {
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
        });
        SimplyBind('value', {
          updateOnBind: false
        }).of(this.els.paginationExtraSelect).to('innerHTML').of(this.els.paginationExtraText).and.to('currentPage').of(this);
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
        });

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
        }

        SimplyBind('value').of(this.els.searchCriteria).to('searchCriteria', {
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
        });
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
      DataTable.version = "2.9.6";
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
          return _typeof(subject) === 'object' && subject;
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

      setPholderRegEx();

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
            this.destroy();
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

                  _convertToLive(this, newValue = newValue.slice(), true);

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
        updateAllSubs: function updateAllSubs(publisher) {
          var arr, i;

          if (i = (arr = this.subs).length) {
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
        addModifierFn: function addModifierFn(target, subInterfaces, subjectFn, updateOnBind) {
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
        setSelfTransform: function setSelfTransform(transformFn, updateOnBind) {
          this.selfTransform = transformFn;

          if (updateOnBind) {
            this.setValue(this.value);
          }
        },
        addDisallowRule: function addDisallowRule(targetSub, targetDisallow) {
          var base, disallowList;
          disallowList = (base = this.subsMeta[targetSub.ID]).disallowList != null ? base.disallowList : base.disallowList = genObj();
          disallowList[targetDisallow.ID] = 1;
        },
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
              return METHOD_of;
            }
          }
        },
        set: {
          get: function get() {
            if (this.stage) {
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
              return METHOD_pollEvery;
            }
          }
        },
        stopPolling: {
          get: function get() {
            if (this.stage) {
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
        if (!checkIf.isFunction(transformFn)) {
          throwWarning('fnOnly', 1);
        } else {
          this._.setSelfTransform(transformFn, this.options.updateOnBind);
        }

        return this;
      };

      METHOD_transform = function METHOD_transform(transformFn) {
        this._.addModifierFn('transformFn', this.subs.slice(-1), transformFn, this.options.updateOnBind);

        return this;
      };

      METHOD_transformAll = function METHOD_transformAll(transformFn) {
        this._.addModifierFn('transformFn', this.subs, transformFn, this.options.updateOnBind);

        return this;
      };

      METHOD_condition = function METHOD_condition(conditionFn) {
        this._.addModifierFn('conditionFn', this.subs.slice(-1), conditionFn);

        return this;
      };

      METHOD_conditionAll = function METHOD_conditionAll(conditionFn) {
        this._.addModifierFn('conditionFn', this.subs, conditionFn);

        return this;
      };

      METHOD_bothWays = function METHOD_bothWays(altTransform) {
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
        bindingInterface.selector = bindingInterface.selector.slice(6);
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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSIsInBhcnRzL21hcmt1cC5jb2ZmZWUiLCJwYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCJwYXJ0cy9oZWxwZXJzLmNvZmZlZSIsInBhcnRzL21ldGhvZHMvX2luZGV4LmNvZmZlZSIsInBhcnRzL21ldGhvZHMvZ2VuZXJhbC5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL2NvbHVtbi5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL3Jvdy5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL3NwZWNpYWxDZWxscy5jb2ZmZWUiLCJwYXJ0cy9hdHRhY2hFdmVudHMuY29mZmVlIiwicGFydHMvYXR0YWNoQmluZGluZ3MuY29mZmVlIiwicGFydHMvdXNlckFjdGlvbk1ldGhvZHMuY29mZmVlIiwiLi4vLi4vcGFja2FnZS5qc29uIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvX2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL19pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jaGFuZ2VFdmVudC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9yZXF1aXJlc0RvbURlc2NyaXB0b3JGaXguY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvd2luZG93UHJvcHNUb0lnbm9yZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jaGVja3MuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvZGVzY3JpcHRvci1tb2QuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvd2Via2l0RG9tRGVzY3JpcHRvckZpeC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jbG9uaW5nLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL2NhY2hlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL3BsYWNlaG9sZGVycy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9lcnJvcnMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2Vycm9yc0FuZFdhcm5pbmdzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvU2ltcGx5QmluZC9faW5kZXguY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9TaW1wbHlCaW5kL21ldGhvZHMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3BhY2thZ2UuanNvbiIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvU2ltcGx5QmluZC9tZXRob2RzLnVuQmluZEFsbC1wYXJzZURPTU9iamVjdC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL0JpbmRpbmcvX2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZy9wcm90b3R5cGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nL3Byb3RvdHlwZS5zZXRWYWx1ZS1PYmplY3RQcm9wLURPTVZhbHVlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZy9wcm90b3R5cGUuc2V0VmFsdWUtRE9NVHlwZXMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nSW50ZXJmYWNlL2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHJpdmF0ZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL0JpbmRpbmdJbnRlcmZhY2UvcHJvdG90eXBlLXByaXZhdGUuc2V0T2JqZWN0LXBhcnNlRE9NT2JqZWN0LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHJpdmF0ZS5zZXRPYmplY3QtZGVmaW5lRXZlbnRNZXRob2RzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHVibGljLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvR3JvdXBCaW5kaW5nL19pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3BhY2thZ2UuanNvbiIsIm5vZGVfbW9kdWxlcy9lc2NhcGUtaHRtbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudC1saXRlL2V2ZW50LWxpdGUuanMiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9leHRlbmQuY29mZmVlIl0sIm5hbWVzIjpbIkRhdGFUYWJsZSIsImV4dGVuZCIsImVzY0hUTUwiLCJtYXJrdXAiLCJ0YWJsZU91dGVyd3JhcCIsImJhc2VDbGFzcyIsIklEIiwibWluV2lkdGgiLCJoYXNNb2JpbGUiLCJjZWxsc0hhdmVQYWRkaW5nIiwidGFibGUiLCJhbGlnbm1lbnQiLCJsb2FkaW5nIiwibm9SZXN1bHRzIiwiaXRlbVNpbmdsZUxhYmVsIiwiaXRlbVBsdXJhbExhYmVsIiwiZXJyb3IiLCJwYWdlU3RhdHVzIiwic2hvd1BhZ2VTdGF0dXMiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbkl0ZW0iLCJ2YWx1ZSIsImhlYWRpbmdDZWxsIiwiZXh0cmFDbGFzc2VzIiwic2x1ZyIsImljb24iLCJzdHlsZSIsImxhYmVsIiwicm93Iiwicm93SUQiLCJjZWxscyIsImRyaWxsZG93biIsInJvd0NlbGwiLCJjb2x1bW4iLCJzZWFyY2hGaWVsZCIsInNlYXJjaCIsImxlbmd0aCIsImlwRGV0YWlscyIsImlwQWRkcmVzcyIsImV4dHJhIiwiaXBEZXRhaWxzSXRlbSIsImZpZWxkcyIsImZpZWxkc0l0ZW0iLCJidXR0b24iLCJpc011bHRpIiwiYWN0aW9uIiwiYWN0aW9ucyIsImFjdGlvbnNPdmVybGF5IiwiZGVmYXVsdHMiLCJhY3Rpb25zSXRlbSIsImN1c3RvbUljb25TdHlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiJCIsImdldCIsImhlbHBlcnMiLCJjb21wYXJlVmFsdWVzIiwidmFsdWVBIiwidmFsdWVCIiwicGFyc2VGbG9hdCIsInRvZ2dsZUFjdGlvbnNQb3B1cCIsImFjdGlvbnNQb3B1cCQiLCJpc09wZW4iLCJkYXRhIiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJvdmVybGF5JCIsImFkZENsYXNzIiwiYXBwZW5kVG8iLCJkb2N1bWVudCIsImJvZHkiLCJvbmUiLCJnZXRCcmVha2Rvd25Ub3RhbCIsImJyZWFrZG93biIsImJyZWFrZG93bktleXMiLCJtYXAiLCJicmVha2Rvd25JdGVtIiwicmVkdWNlIiwiYSIsImIiLCJub3JtYWxpemVDb2x1bW5zIiwiY29sdW1ucyIsIkFycmF5IiwiaXNBcnJheSIsIm91dHB1dCIsImkiLCJyZWYiLCJqIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidHlwZSIsImdldEJyZWFrZG93bkJhcldpZHRoIiwibGFyZ2VzdCIsImJyZWFrZG93bkJhclRvdGFsIiwiZ2VuSGVhZGVyQ2VsbFN0eWxlIiwic3R5bGVTdHJpbmciLCJ3aWR0aCIsImdyb3ciLCJnZW5DZWxsU3R5bGUiLCJjb2xvciIsImNvbG9yTWFwcGluZyIsImNvbG9yVHlwZSIsImN1c3RvbVN0eWxlIiwiZ2VuQ2VsbENsYXNzbmFtZSIsImNsYXNzU3RyaW5nIiwic29ydGFibGUiLCJub0xhYmVsIiwiaXNMaW5rIiwibm9FbGxpcHNpcyIsInNob3dPdmVyZmxvdyIsImFsd2F5c0NlbnRlciIsImluY2x1ZGVzIiwiaWNvbk1hcHBpbmciLCJpY29uVHlwZSIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwib3B0aW9ucyIsImNsb25lIiwiZGVlcE9ubHkiLCJzdGF0ZSIsImN1cnJlbnRJRCIsInRhYmxlSUQiLCJ2aXNpYmxlUm93cyIsImF2YWlsYWJsZVJvd3MiLCJhbGxSb3dzIiwibGFyZ2VzdEJyZWFrZG93blRvdGFsIiwic2VhcmNoQ3JpdGVyaWEiLCJzZWFyY2hQYXJhbSIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJjdXJyZW50UGFnZSIsImVscyIsInRhYmxlSGVhZGluZyIsImNoaWxkcmVuIiwiZmlyc3QiLCJ0YWJsZUJvZHkiLCJsYXN0Iiwibm9SZXN1bHRzTWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwicGFnaW5hdGlvbkl0ZW1zIiwicGFnaW5hdGlvbkV4dHJhIiwicGFnaW5hdGlvbkV4dHJhU2VsZWN0IiwicGFnaW5hdGlvbkV4dHJhVGV4dCIsInByZXYiLCJpbnNlcnRCZWZvcmUiLCJnbG9iYWxTdHlsZXMiLCJwcmVwZW5kVG8iLCJhcHBlbmQiLCJnZW5lcmF0ZUhlYWRpbmdDb2x1bW5zIiwiYmluZCIsInRoZW4iLCJhdHRhY2hFdmVudHMiLCJhdHRhY2hCaW5kaW5ncyIsImxvYWRPbkluaXQiLCJsb2FkRGF0YSIsInByb3RvdHlwZSIsImZldGNoRGF0YSIsImNhbGwiLCJjYXRjaCIsImVyciIsInNldERhdGEiLCJhcHBlbmREYXRhIiwicHVzaCIsInVucHJvY2Vzc1JvdyIsInJlZnJlc2giLCJtYXJrdXBBcmdzIiwiYXJnc09iamVjdCIsImNhbGNQYWdlQ291bnQiLCJyb3dzIiwicGFnZUNvdW50UmVhbCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSIsInBhZ2VDb3VudCIsInBhZ2VDb3VudE1heCIsImNhbGNQZXJjZW50YWdlU3RyaW5nIiwiY29sdW1uVmFsdWUiLCJjb2x1bW5OYW1lIiwiY29sdW1uQSIsInBlcmNlbnRhZ2UiLCJmb3JtdWxhIiwiY29sdW1uQiIsIm1hdGhPcGVyYXRvciIsInBlcmNlbnRhZ2VWYWx1ZSIsInBlcmNlbnQiLCJjb252ZXJ0VG9QZXJjZW50Iiwic29ydFJvd3MiLCJ0YXJnZXRDb2x1bW4iLCJjdXN0b21Tb3J0Iiwic2xpY2UiLCJyZXZlcnNlIiwic29ydEZuIiwicmF3VmFsdWUiLCJyYXdWYWx1ZUZvcm1hdHRlciIsInNvcnRlciIsImFWYWx1ZSIsImJWYWx1ZSIsInNvcnQiLCJzZXRWaXNpYmxlUGFnZSIsInRhcmdldFBhZ2UiLCJyb3dzVG9SZXZlYWwiLCJyb3dzVG9IaWRlIiwidmlzaWJsZSIsImFwcGx5Iiwic2V0UGFnZUluZGljYXRvciIsIm1hdGNoZWRQYWdlRWwkIiwicGFnZUl0ZW1zJCIsImZpbmQiLCJlcSIsIm5vdCIsImhhc0JyZWFrZG93bkJhciIsIk9iamVjdCIsImtleXMiLCJpbm5lckhUTUwiLCJqb2luIiwidXBkYXRlQ29sdW1ucyIsInVwZGF0ZWRDb2x1bW5zIiwiZGVlcCIsInByb2Nlc3NSb3ciLCJwcm9jZXNzZWQiLCJnZW5lcmF0ZVJvdyIsIlNpbXBseUJpbmQiLCJ1cGRhdGVFdmVuSWZTYW1lIiwib2YiLCJ0byIsImlzVmlzaWJsZSIsInByZXZWYWx1ZSIsImVsIiwiZGV0YWNoIiwidXBkYXRlZEJyZWFrZG93bldpZHRoIiwiYnJlYWtkb3duQmFyV2lkdGgiLCJ0cmFuc2Zvcm0iLCJhbmQiLCJjaGFpblRvIiwiYnJlYWtkb3duQmFyRWwiLCJkcmlsbGRvd25FbCIsImluZGV4IiwiY29uZGl0aW9uIiwiY29uZGl0aW9uQWxsIiwidW5CaW5kQWxsIiwiZHJpbGxkb3duRWxzIiwicmVSZW5kZXJSb3ciLCJuZXdSb3dFbCIsImdlbmVyYXRlUm93TWFya3VwIiwicHJldlJvd0VsIiwicmVwbGFjZVdpdGgiLCJleHBhbmRCdXR0b24iLCJtYXgiLCJzdWJSb3ciLCJkcmlsbGRvd25PcGVuIiwib25jZSIsInNldFRpbWVvdXQiLCJidXR0b25IZWlnaHQiLCJoZWlnaHQiLCJ0b3AiLCJyb3dIZWlnaHQiLCJ1cGRhdGVPbiIsInRocm90dGxlIiwid2luZG93IiwicGFyZW50Um93IiwiaXNTdWIiLCJ1bmlxdWVJRCIsImRyaWxsZG93bk1hcmt1cHMiLCJkcmlsbGRvd25Sb3ciLCJjZWxsVmFsdWUiLCJyb3dDZWxscyIsImdlbmVyYXRlSW5saW5lRmllbGRzIiwiZ2VuZXJhdGVJcERldGFpbHMiLCJnZW5lcmF0ZUJyZWFrZG93bkJhciIsImdlbmVyYXRlQnV0dG9uIiwiYnV0dG9uSWNvbiIsImdlbmVyYXRlQWN0aW9ucyIsImZvcm1hdHRlciIsInJvd09iaiIsImNvbHVtbkVudGl0eSIsImxlZ2VuZCIsInRvdGFsIiwiYnJlYWtkb3duQmFyIiwidmFsdWVGb3JtYXQiLCJiYXJzIiwia2V5IiwiYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25fYmFyIiwiYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25faG92ZXJib3giLCJmb3JFYWNoIiwiYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25faG92ZXJib3hfcm93IiwiY3VzdG9tQ29sb3JzIiwiZGF0YUZpZWxkcyIsInJlc3VsdHMiLCJhY3Rpb25zTWFya3VwIiwiYnV0dG9uTWFya3VwIiwiZXh0cmFNYXJrdXAiLCJvbiIsImV2ZW50IiwiJHRoaXMiLCJjdXJyZW50VGFyZ2V0IiwiaXNCYWNrIiwiaGFzQ2xhc3MiLCJpc05leHQiLCJpc0V4dHJhIiwicGFnZU51bWJlciIsImh0bWwiLCJ0ZXh0Q29udGVudCIsImJ1dHRvbiQiLCJuZXh0IiwiaXRlbVJvdyQiLCJjbG9zZXN0IiwiaXRlbUlEIiwiaXRlbUluZGV4IiwiZGF0YUl0ZW0iLCJwYXJlbnQiLCJ0cmlnZ2VyIiwiaXRlbVJvdyIsImNvbnRlbnQkIiwid3JhcHBlciQiLCJ0cmlnZ2VyJCIsImNvdW50cnkkIiwiaXNMb2FkZWQiLCJpcERhdGFGZXRjaGVyIiwic2V0dGluZ3MiLCJ0cmFja0FycmF5Q2hpbGRyZW4iLCJoYXNFcnJvciIsImNvbnNvbGUiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJtb2JpbGVXaWR0aCIsImlzSGlkZGVuIiwicHJldlJvd3MiLCJpbmRleE9mIiwidXBkYXRlT25CaW5kIiwiY291bnQiLCJyZWFsQ291bnQiLCJ0cmFuc2Zvcm1TZWxmIiwib3B0aW9uIiwicGlwZSIsImJvdGhXYXlzIiwicmVmMSIsInJvd3NUb01ha2VBdmFpbGFibGUiLCJmaWx0ZXIiLCJyb3dWYWx1ZSIsInRvU3RyaW5nIiwicm93RmlsdGVyIiwibmFtZSIsInJlZjIiLCJyb3dDbG9uZSIsImN1cnJlbnRTb3J0IiwicHJldlNvcnQiLCJjdXJyZW50IiwidmVyc2lvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheU11dGF0b3JNZXRob2RzIiwiZHVtbXlQcm9wZXJ0eURlc2NyaXB0b3IiLCJib3VuZEluc3RhbmNlcyIsInBsYWNlaG9sZGVyIiwiY3JlYXRlIiwic2lsZW50Iiwic2V0IiwibmV3UGxhY2Vob2xkZXIiLCJjaGVja0lmIiwic2V0UGhvbGRlclJlZ0V4IiwiZGVmYXVsdE9wdGlvbnMiLCJkZWxheSIsInNpbXBsZVNlbGVjdG9yIiwicHJvbWlzZVRyYW5zZm9ybXMiLCJkaXNwYXRjaEV2ZW50cyIsInNlbmRBcnJheUNvcGllcyIsImRlZmluZVByb3BlcnR5IiwiZ2V0RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNhY2hlZEV2ZW50IiwiY2hhbmdlRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIl9zYiIsInJlcXVpcmVzRG9tRGVzY3JpcHRvckZpeCIsIkVsZW1lbnQiLCJ3aW5kb3dQcm9wc1RvSWdub3JlIiwic2V0VmFsdWVOb29wIiwidiIsInB1Ymxpc2hlciIsInVwZGF0ZUFsbFN1YnMiLCJnZW5JRCIsImdlbk9iaiIsImdlblByb3hpZWRJbnRlcmZhY2UiLCJjb21wbGV0ZUNhbGxiYWNrIiwic3ViamVjdCIsImN1c3RvbU9wdGlvbnMiLCJzYXZlT3B0aW9ucyIsImdlblNlbGZVcGRhdGVyIiwiYmluZGluZyIsImZldGNoVmFsdWUiLCJzZWxmVXBkYXRlciIsIkJpbmRpbmciLCJzZXRWYWx1ZSIsImZldGNoRGlyZWN0VmFsdWUiLCJ0YXJnZXQiLCJpdGVtIiwiaXNEZWZpbmVkIiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaXNGdW5jdGlvbiIsImlzQmluZGluZ0ludGVyZmFjZSIsIkJpbmRpbmdJbnRlcmZhY2UiLCJpc0JpbmRpbmciLCJpc0l0ZXJhYmxlIiwiaXNEb20iLCJub2RlTmFtZSIsIm5vZGVUeXBlIiwiaXNEb21JbnB1dCIsImlzRG9tUmFkaW8iLCJpc0RvbUNoZWNrYm94IiwiaXNFbENvbGxlY3Rpb24iLCJOb2RlTGlzdCIsIkhUTUxDb2xsZWN0aW9uIiwialF1ZXJ5IiwiZG9tRWxzQXJlU2FtZSIsIml0ZXJhYmxlIiwiaXRlbXNXaXRoU2FtZVR5cGUiLCJpc0RvbU5vZGUiLCJjb252ZXJ0VG9MaXZlIiwib2JqZWN0IiwicHJvcGVydHkiLCJpc1Byb3RvIiwiZGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsIm9iamVjdFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJmZXRjaERlc2NyaXB0b3IiLCJiaW5kaW5nSW5zdGFuY2UiLCJvbmx5QXJyYXlNZXRob2RzIiwiXyIsIm9yaWdEZXNjcmlwdG9yIiwibWV0aG9kIiwicmVzdWx0IiwiYXJndW1lbnRzIiwib3JpZ0ZuIiwiY29udGV4dCIsImFyZ3MiLCJnZXR0ZXJWYWx1ZSIsInByb3h5Rm4iLCJzZWxmVHJhbnNmb3JtIiwiaXNMaXZlUHJvcCIsIm5ld1ZhbHVlIiwidGFyZ2V0SW5jbHVkZXMiLCJwcm9wZXJ0eURlc2NyaXB0b3IiLCJvcmlnR2V0dGVyIiwib3JpZ1NldHRlciIsInNob3VsZFdyaXRlTGl2ZVByb3AiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiY2xvbmVOb2RlIiwidHlwZUlzQXJyYXkiLCJzaG91bGRJbmRpY2F0ZVVwZGF0ZUlzRnJvbVNlbGYiLCJlbnVtZXJhYmxlIiwiY29udmVydFRvUmVnIiwibmV3RGVzY3JpcHRvciIsImNsb25lT2JqZWN0IiwiZXh0ZW5kU3RhdGUiLCJiYXNlIiwic3RhdGVUb0luaGVyaXQiLCJjYWNoZSIsInNlbGVjdG9yIiwiaXNNdWx0aUNob2ljZSIsInNhbXBsZUl0ZW0iLCJfc2JfSUQiLCJfc2JfbWFwIiwiZ3JvdXBCaW5kaW5nIiwiQiIsInByb3BzTWFwIiwiYWRkVG9Ob2RlU3RvcmUiLCJwaG9sZGVyUmVnRXgiLCJwaG9sZGVyUmVnRXhTcGxpdCIsImVuZCIsImVzY2FwZVJlZ0V4IiwibWlkZGxlIiwiUmVnRXhwIiwic3RhcnQiLCJhcHBseVBsYWNlaG9sZGVycyIsImNvbnRleHRzIiwidmFsdWVzIiwiaW5kZXhNYXAiLCJjb250ZXh0UGFydCIsIm5vZGVTdG9yZSIsIm5vZGUiLCJ0YXJnZXRQbGFjZWhvbGRlciIsInNjYW5UZXh0Tm9kZXNQbGFjZWhvbGRlcnMiLCJlbGVtZW50IiwiY2hpbGROb2RlcyIsIm1hdGNoIiwidGV4dFBpZWNlcyIsInNwbGl0IiwibmV3RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibmV3Tm9kZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0UGllY2UiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZ2V0RXJyU291cmNlIiwiZXJyb3JOYW1lIiwiRXJyb3IiLCJlcnJvcnMiLCJ0aHJvd1dhcm5pbmciLCJ3YXJuaW5nTmFtZSIsImRlcHRoIiwiZXJyU291cmNlIiwid2FybiIsInRocm93RXJyb3JCYWRBcmciLCJhcmciLCJ0aHJvd0Vycm9yIiwic3RhY2siLCJpbnZhbGlkUGFyYW1OYW1lIiwiZm5Pbmx5IiwiYmFkRXZlbnRBcmciLCJlbXB0eUxpc3QiLCJvbmx5T25lRE9NRWxlbWVudCIsIm1peGVkRWxMaXN0IiwiaW50ZXJmYWNlVG9SZXR1cm4iLCJzZWxmQ2xvbmUiLCJuZXdJbnRlcmZhY2UiLCJzZXRPYmplY3QiLCJzZXRQcm9wZXJ0eSIsImJvdW5kSUQiLCJwcm9wTWFwIiwicmVtb3ZlQWxsU3VicyIsInByb3AiLCJwYXJlbnRCaW5kaW5nIiwib3B0aW9uc0RlZmF1bHQiLCJzdWJzIiwic3Vic01ldGEiLCJwdWJzTWFwIiwiYXR0YWNoZWRFdmVudHMiLCJjaG9pY2VzIiwiY2hvaWNlRWwiLCJjaG9pY2VCaW5kaW5nIiwiYWRkU3ViIiwidHJhbnNmb3JtRm4iLCJwYXJlbnRQcm9wZXJ0eSIsInNjYW5Gb3JQaG9sZGVycyIsInBob2xkZXJWYWx1ZXMiLCJwaG9sZGVyIiwidGV4dE5vZGVzIiwic3ViamVjdFZhbHVlIiwiZXZlbnRVcGRhdGVIYW5kbGVyIiwic3ViIiwidXBkYXRlT25jZSIsImFscmVhZHlIYWRTdWIiLCJzdWJJdGVtIiwibWV0YURhdGEiLCJ1bnNoaWZ0Iiwib3B0cyIsInZhbHVlUmVmIiwicmVtb3ZlU3ViIiwic3BsaWNlIiwiZGVzdHJveSIsInJlbW92ZVBvbGxJbnRlcnZhbCIsInVuUmVnaXN0ZXJFdmVudCIsImdldEF0dHJpYnV0ZSIsImNob2ljZU5hbWUiLCJjaGVja2VkIiwiZnJvbVNlbGYiLCJmcm9tQ2hhbmdlRXZlbnQiLCJlbnRpcmVWYWx1ZSIsImsiLCJsZW4iLCJsZW4xIiwibiIsIm5ld0Nob2ljZVZhbHVlIiwibmV3Q2hvaWNlcyIsIm5ld1ZhbHVlQXJyYXkiLCJvdmVyd3JpdGVQcmV2aW91cyIsInByZXZDdXJzcm9yIiwidGFyZ2V0Q2hvaWNlQmluZGluZyIsInRleHROb2RlIiwicGhvbGRlckNvbnRleHRzIiwicGhvbGRlckluZGV4TWFwIiwiY29uY2F0IiwidmFsdWVQYXNzZWQiLCJpc0VtaXR0ZXIiLCJlbWl0RXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwic2V0QXR0cmlidXRlIiwiYXJyIiwidXBkYXRlU3ViIiwiaXNEZWxheWVkVXBkYXRlIiwiY3VycmVudFRpbWUiLCJtZXRhIiwic3ViVmFsdWUiLCJ0aW1lUGFzc2VkIiwiZGlzYWxsb3dMaXN0IiwiRGF0ZSIsImxhc3RVcGRhdGUiLCJjbGVhclRpbWVvdXQiLCJ1cGRhdGVUaW1lciIsImNvbmRpdGlvbkZuIiwiYWRkTW9kaWZpZXJGbiIsInN1YkludGVyZmFjZXMiLCJzdWJqZWN0Rm4iLCJzdWJJbnRlcmZhY2UiLCJzdWJNZXRhRGF0YSIsInN1YnNjcmliZXIiLCJiaW5kaW5ncyIsInNldFNlbGZUcmFuc2Zvcm0iLCJhZGREaXNhbGxvd1J1bGUiLCJ0YXJnZXRTdWIiLCJ0YXJnZXREaXNhbGxvdyIsImUiLCJhZGRQb2xsSW50ZXJ2YWwiLCJ0aW1lIiwicG9sbEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwb2xsZWRWYWx1ZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRVcGRhdGVMaXN0ZW5lciIsImV2ZW50TmFtZSIsInRhcmdldFByb3BlcnR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3VsZFJlZGVmaW5lVmFsdWUiLCJyZWdpc3RlckV2ZW50IiwiZXZlbnRIYW5kbGVyIiwiZXZlbnRNZXRob2RzIiwibGlzdGVuIiwiZXh0cmFEYXRhIiwiZXZlbnRPYmplY3QiLCJlbWl0IiwiYmluZGluZ0RhdGEiLCJpbmhlcml0ZWRTdGF0ZSIsInN0YWdlIiwib3B0aW9uc1Bhc3NlZCIsIkJpbmRpbmdJbnRlcmZhY2VQcml2YXRlIiwiZGVmaW5lTWFpblByb3BzIiwiZGVmaW5lUHJvcGVydGllcyIsIm9iamVjdHMiLCJjcmVhdGVCaW5kaW5nIiwibmV3T2JqZWN0VHlwZSIsImJpbmRpbmdJbnRlcmZhY2UiLCJjYWNoZWRCaW5kaW5nIiwicGF0Y2hDYWNoZWRCaW5kaW5nIiwibmV3QmluZGluZyIsImlzTmFOIiwicGFyc2VJbnQiLCJsaXN0ZW5NZXRob2QiLCJyZW1vdmVNZXRob2QiLCJlbWl0TWV0aG9kIiwiR3JvdXBCaW5kaW5nIiwiYWRkVG9QdWJsaXNoZXIiLCJwdWJsaXNoZXJJbnRlcmZhY2UiLCJNRVRIT0RfYm90aFdheXMiLCJNRVRIT0Rfb2YiLCJNRVRIT0Rfc2V0IiwiTUVUSE9EX2NoYWluVG8iLCJNRVRIT0RfdHJhbnNmb3JtU2VsZiIsIk1FVEhPRF90cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1BbGwiLCJNRVRIT0RfdHJhbnNmb3JtQWxsIiwiTUVUSE9EX2NvbmRpdGlvbiIsIk1FVEhPRF9jb25kaXRpb25BbGwiLCJ1bkJpbmQiLCJNRVRIT0RfdW5CaW5kIiwicG9sbEV2ZXJ5IiwiTUVUSE9EX3BvbGxFdmVyeSIsInN0b3BQb2xsaW5nIiwiTUVUSE9EX3N0b3BQb2xsaW5nIiwic2V0T3B0aW9uIiwiTUVUSE9EX3NldE9wdGlvbiIsImRpc2FsbG93RnJvbSIsInRoaXNJbnRlcmZhY2UiLCJkaXNhbGxvd0ludGVyZmFjZSIsInJlbW92ZVVwZGF0ZXIiLCJjbG9uZUJpbmRpbmciLCJjbG9uZUludGVyZmFjZSIsImFkZEJpbmRpbmciLCJzaWJsaW5nSW50ZXJmYWNlIiwidXBkYXRlIiwidHdvV2F5Iiwic3BlY2lmaWNPcHRpb25zIiwiYWx0VHJhbnNmb3JtIiwic3ViQmluZGluZyIsIm9yaWdpblRyYW5zZm9ybSIsIm9yaWdpbkNvbmRpdGlvbiIsInRyYW5zZm9ybVRvVXNlIiwib3B0aW9uTmFtZSIsIm9iamVjdFR5cGUiLCJpbnRlcmZhY2UiLCJwcm90byIsIm1ldGhvZE5hbWUiLCJjIiwiZCIsIm5vcm1hbGl6ZUtleXMiLCJuZXdCdWlsZGVyIiwiaXNCYXNlIiwiYnVpbGRlciIsInRoZVRhcmdldCIsIiRfaSIsInNvdXJjZXMiLCJzaGlmdCIsIm1vZGlmaWVycyIsIm93biIsImFsbG93TnVsbCIsIm51bGxEZWxldGVzIiwibm90RGVlcCIsIm5vdEtleXMiLCJnbG9iYWxUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm1zIiwiZ2xvYmFsRmlsdGVyIiwiZmlsdGVycyIsIm1hdGNoSHRtbFJlZ0V4cCIsImVzY2FwZUh0bWwiLCJzdHJpbmciLCJzdHIiLCJleGVjIiwiZXNjYXBlIiwibGFzdEluZGV4IiwiY2hhckNvZGVBdCIsInN1YnN0cmluZyIsIkV2ZW50TGl0ZSIsIkxJU1RFTkVSUyIsIm1ldGhvZHMiLCJvZmYiLCJtaXhpbiIsImZ1bmMiLCJnZXRMaXN0ZW5lcnMiLCJ0aGF0Iiwid3JhcCIsIm9yaWdpbmFsTGlzdGVuZXIiLCJsaXN0bmVycyIsIm5lIiwidGVzdCIsImxpc3RlbmVycyIsImFyZ2xlbiIsInplcm9hcmciLCJvbmVhcmciLCJtb3JlYXJncyIsInJlYWRvbmx5Iiwic2hvdWxkRGVlcEV4dGVuZCIsInBhcmVudEtleSIsInNvdXJjZSIsInNvdXJjZVZhbHVlIiwidGFyZ2V0VmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsInN1YlRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUFBO2FBRWE7QUFEYkMsU0FHUztBQUZUQyxVQUlVO0FBSFYsQUNIQUM7U0FDQ0M7Z0JBQWdCLFVBQUMsQ0FBQyxJQUFJLFdBQVcsVUFBVSxXQUFXLG1CQUF0QzttQkFDSkMsYUFBYUMsY0FBY0QsOERBQ3BDLENBQUlFLFdBQWMsaUJBQW9CLE9BQ3RDLENBQUlDLFlBQWUsc0JBQXlCLE9BQzVDLENBQUlDLG1CQUFzQixzQkFBeUI7O0FBSXREQyxPQUFPLFVBQUMsQ0FBQyxBQVVUTCxXQVZvQixBQVVUTSxZQVZKO3NCQUNRTix5QkFBeUJNLDZEQUN4Qk4sbUNBQ0NBLG9EQUVEQTs7QUFLaEJPLFNBQVMs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Q0FBQ3JLLFFBQVF1a0IsT0FBUSxDQUFJdUMsT0FBT0csZUFBZTVjLFNBQzNDLENBQUNySyxRQUFROGtCLGdCQUFpQixDQUFJOWtCLFFBQVE4a0IsYUFBYWlDLGFBQWExYyxLQUFLeWMsWUFDckUsQ0FBQzltQixRQUFRK2tCLFdBQVkva0IsUUFBUStrQixRQUFRMWEsUUFBUyxDQUFJckssUUFBUStrQixRQUFRMWEsS0FBSzBjLGFBQWExYyxLQUFLeWMsVUFQNUY7OztBQVNBLElBQUdDLGdCQUFlLFFBQVMvbUIsUUFBUXlrQixhQUFuQztBQUNDLE9BQU9qVCxPQUFPbkg7QUFDZDs7QUFDRCxJQUFHckssUUFBUTRrQixpQkFBWDtBQUNDbUMsY0FBYy9tQixRQUFRNGtCLGdCQUFnQm1DLGFBQWExYyxLQUFLeWM7O0FBQ3pELElBQUc5bUIsUUFBUTZrQixjQUFlN2tCLFFBQVE2a0IsV0FBV3hhLE1BQTdDO0FBQ0MwYyxjQUFjL21CLFFBQVE2a0IsV0FBV3hhLEtBQUswYyxhQUFhMWMsS0FBS3ljOztBQUV6RDtPQUNNOW1CLFFBQVE4YyxVQUFXL2UsUUFBUWdwQixnQkFBaUJocEIsUUFBUWlwQjtBQUN4RHhWLE9BQU9uSCxPQUFPMmMsWUFBWWxLLE9BQU9pSzs7S0FGbkMsRUFJTUgsaUJBQWlCNW1CLFNBQVNxSyxLQUFLd2MsY0FBZWxWLFNBQVNvVjtBQUMzREcsWUFBZXZWLFNBQVNxVixlQUFrQkEsY0FBb0JqcEIsUUFBUWdwQixlQUFrQixLQUFRO0FBQ2hHdlYsT0FBT25ILE9BQU94UixPQUFPbUgsU0FBU2tuQixXQUFXLENBQUNILGNBQWMxYzs7O0FBR3hEbUgsT0FBT25ILE9BQU8wYzs7Ozs7QUFHbEIsT0FBT3ZWIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlNpbXBseUJpbmQgPSBpbXBvcnQgJ0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kJ1xuZXh0ZW5kID0gaW1wb3J0ICdzbWFydC1leHRlbmQnXG5lc2NIVE1MID0gaW1wb3J0ICdlc2NhcGUtaHRtbCdcbmltcG9ydCAnLi9wYXJ0cy9tYXJrdXAnXG5pbXBvcnQgJy4vcGFydHMvZGVmYXVsdHMnXG5pbXBvcnQgJy4vcGFydHMvaGVscGVycydcblxuY2xhc3MgRGF0YVRhYmxlIGV4dGVuZHMgcmVxdWlyZSgnZXZlbnQtbGl0ZScpXG5cdGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgb3B0aW9ucz17fSktPlxuXHRcdHN1cGVyKClcblx0XHRAb3B0aW9ucyA9IGV4dGVuZC5jbG9uZS5kZWVwT25seSgnY29sdW1ucycpKERhdGFUYWJsZS5kZWZhdWx0cywgb3B0aW9ucylcblx0XHRAc3RhdGUgPSAnbG9hZGluZyc6ZmFsc2UsICdub1Jlc3VsdHMnOmZhbHNlLCAnZXJyb3InOmZhbHNlXG5cdFx0QElEID0gKytjdXJyZW50SURcblx0XHRAdGFibGVJRCA9IFwiXFwjI3tAb3B0aW9ucy5iYXNlQ2xhc3N9LSN7QElEfVwiXG5cdFx0QHZpc2libGVSb3dzID0gW11cblx0XHRAYXZhaWxhYmxlUm93cyA9IFtdXG5cdFx0QGFsbFJvd3MgPSBbXVxuXHRcdEBsYXJnZXN0QnJlYWtkb3duVG90YWwgPSAwXG5cdFx0QHNlYXJjaENyaXRlcmlhID0gJydcblx0XHRAc2VhcmNoUGFyYW0gPSAnJ1xuXHRcdEBzb3J0QnkgPSBpZiBAb3B0aW9ucy5zb3J0QnkgdGhlbiBAb3B0aW9ucy5zb3J0QnkgZWxzZSAnJ1xuXHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblxuXHRcdCMgPT09PSBNYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0QGVscyA9IHt9XG5cdFx0QGVscy50YWJsZU91dGVyd3JhcCA9ICQobWFya3VwLnRhYmxlT3V0ZXJ3cmFwIGV4dGVuZCh7QElEfSwgQG9wdGlvbnMpKVxuXHRcdEBlbHMudGFibGUgPSAkKG1hcmt1cC50YWJsZShAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy50YWJsZUhlYWRpbmcgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkuZmlyc3QoKS5jaGlsZHJlbigpXG5cdFx0QGVscy50YWJsZUJvZHkgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkubGFzdCgpXG5cdFx0QGVscy5ub1Jlc3VsdHNNZXNzYWdlID0gJChtYXJrdXAubm9SZXN1bHRzKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLmxvYWRpbmdNZXNzYWdlID0gJChtYXJrdXAubG9hZGluZyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5lcnJvck1lc3NhZ2UgPSAkKG1hcmt1cC5lcnJvcihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdlU3RhdHVzID0gJChtYXJrdXAucGFnZVN0YXR1cyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdpbmF0aW9uID0gJChtYXJrdXAucGFnaW5hdGlvbihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdpbmF0aW9uSXRlbXMgPSBAZWxzLnBhZ2luYXRpb24uY2hpbGRyZW4oJy5fcGFnaW5hdGlvbkl0ZW1zJylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYSA9IEBlbHMucGFnaW5hdGlvbi5jaGlsZHJlbignLl9leHRyYUluZGljYXRvcicpXG5cdFx0QGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QgPSBAZWxzLnBhZ2luYXRpb25FeHRyYS5jaGlsZHJlbignc2VsZWN0Jylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQgPSBAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdC5wcmV2KClcblx0XHRAZWxzLnNlYXJjaEZpZWxkID0gJChtYXJrdXAuc2VhcmNoRmllbGQoQG9wdGlvbnMpKS5pbnNlcnRCZWZvcmUoQGVscy50YWJsZSlcblx0XHRAZWxzLnNlYXJjaFBhcmFtID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignc2VsZWN0Jylcblx0XHRAZWxzLnNlYXJjaENyaXRlcmlhID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignaW5wdXQnKVxuXHRcdEBlbHMuZ2xvYmFsU3R5bGVzID0gJCgnPHN0eWxlIC8+JykucHJlcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cblx0XHRAZWxzLnRhYmxlSGVhZGluZy5hcHBlbmQoQGdlbmVyYXRlSGVhZGluZ0NvbHVtbnMoKSlcblxuXHRcdEBlbHMudGFibGVPdXRlcndyYXAuYXBwZW5kVG8gQGNvbnRhaW5lclxuXHRcdEBlbHMudGFibGUuZGF0YSAnRGF0YVRhYmxlJywgQFxuXHRcdEBlbHMudGFibGVbMF0uc3R5bGUubWluV2lkdGggPSBcIiN7QG9wdGlvbnMubWluV2lkdGh9cHhcIiBpZiBAb3B0aW9ucy5taW5XaWR0aFxuXG5cblx0XHQjID09PT0gRXZlbnRzICYgQmluZGluZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0UHJvbWlzZS5iaW5kKEApXG5cdFx0XHQudGhlbihAYXR0YWNoRXZlbnRzKVxuXHRcdFx0LnRoZW4oQGF0dGFjaEJpbmRpbmdzKVxuXHRcdFx0LnRoZW4gKCktPiBpZiBAb3B0aW9ucy5sb2FkT25Jbml0IHRoZW4gQGxvYWREYXRhKClcblxuXHRcdHJldHVybiBAXG5cblxuXG5EYXRhVGFibGU6OmZldGNoRGF0YSA9ICgpLT5cblx0QHN0YXRlLmxvYWRpbmcgPSB0cnVlXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cdFx0LnRoZW4gKCk9PiBAb3B0aW9ucy5kYXRhLmNhbGwoQClcblx0XHQudGhlbiAoZGF0YSk9PlxuXHRcdFx0QHN0YXRlLmxvYWRpbmcgPSBAc3RhdGUuZXJyb3IgPSBmYWxzZVxuXHRcdFx0cmV0dXJuIGRhdGFcblx0XHQuY2F0Y2ggKGVycik9PlxuXHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cbkRhdGFUYWJsZTo6c2V0RGF0YSA9IChkYXRhKS0+XG5cdEBhbGxSb3dzID0gZGF0YSBpZiBBcnJheS5pc0FycmF5KGRhdGEpXG5cbkRhdGFUYWJsZTo6YXBwZW5kRGF0YSA9IChkYXRhKS0+XG5cdEBhbGxSb3dzLnB1c2goZGF0YS4uLilcblxuRGF0YVRhYmxlOjpsb2FkRGF0YSA9ICgpLT5cblx0QHVucHJvY2Vzc1Jvdyhyb3cpIGZvciByb3cgaW4gQGFsbFJvd3MgaWYgQGFsbFJvd3MubGVuZ3RoXG5cdEBmZXRjaERhdGEoKS50aGVuIChkYXRhKT0+IEBzZXREYXRhKGRhdGEpXG5cbkRhdGFUYWJsZTo6cmVmcmVzaCA9ICgpLT5cblx0QGF2YWlsYWJsZVJvd3MgPSBAYXZhaWxhYmxlUm93c1xuXHRAY3VycmVudFBhZ2UgPSBAY3VycmVudFBhZ2VcblxuRGF0YVRhYmxlOjptYXJrdXBBcmdzID0gKGFyZ3NPYmplY3Q9e30pLT5cblx0YXJnc09iamVjdC5iYXNlQ2xhc3MgPSBAb3B0aW9ucy5iYXNlQ2xhc3Ncblx0cmV0dXJuIGFyZ3NPYmplY3RcblxuXG5cblxuaW1wb3J0ICcuL3BhcnRzL21ldGhvZHMnXG5pbXBvcnQgJy4vcGFydHMvYXR0YWNoRXZlbnRzJ1xuaW1wb3J0ICcuL3BhcnRzL2F0dGFjaEJpbmRpbmdzJ1xuaW1wb3J0ICcuL3BhcnRzL3VzZXJBY3Rpb25NZXRob2RzJ1xuXG5jdXJyZW50SUQgPSAwXG5EYXRhVGFibGUudmVyc2lvbiA9IGltcG9ydCAnLi4vLi4vcGFja2FnZS5qc29uICQgdmVyc2lvbidcbkRhdGFUYWJsZS5oZWxwZXJzID0gaGVscGVyc1xuRGF0YVRhYmxlLm1hcmt1cCA9IG1hcmt1cFxuRGF0YVRhYmxlLmRlZmF1bHRzID0gZGVmYXVsdHNcbm1vZHVsZS5leHBvcnRzID0gRGF0YVRhYmxlXG5cblxuXG5cbiIsIm1hcmt1cCA9XG5cdHRhYmxlT3V0ZXJ3cmFwOiAoe0lELCBiYXNlQ2xhc3MsIG1pbldpZHRoLCBoYXNNb2JpbGUsIGNlbGxzSGF2ZVBhZGRpbmd9KS0+IFwiXG5cdFx0PGRpdiBpZD0nI3tiYXNlQ2xhc3N9LSN7SUR9JyBjbGFzcz0nI3tiYXNlQ2xhc3N9LW91dGVyd3JhcCB7e2xvYWRpbmd9fSB7e25vUmVzdWx0c319IHt7aGFzRXJyb3J9fVxuXHRcdFx0I3tpZiBtaW5XaWR0aCB0aGVuICdfaGFzTWluV2lkdGgnIGVsc2UgJyd9XG5cdFx0XHQje2lmIGhhc01vYmlsZSB0aGVuICd7e21vYmlsZVZlcnNpb259fScgZWxzZSAnJ31cblx0XHRcdCN7aWYgY2VsbHNIYXZlUGFkZGluZyB0aGVuICdfY2VsbHNIYXZlUGFkZGluZycgZWxzZSAnJ31cblx0XHQnPjwvZGl2PlxuXHRcIlxuXG5cdHRhYmxlOiAoe2Jhc2VDbGFzcywgYWxpZ25tZW50fSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfSBhbGlnbm1lbnQtLS0je2FsaWdubWVudH0gc29ydERpcmVjdGlvbi0tLXt7c29ydERpcmVjdGlvbn19Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmctcm93Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHknPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0bG9hZGluZzogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmcge3tpc1Zpc2libGV9fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pbm5lcndyYXAnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pY29uJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctdGV4dCc+TG9hZGluZzwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRub1Jlc3VsdHM6ICh7YmFzZUNsYXNzLCBpdGVtU2luZ2xlTGFiZWw9J0l0ZW0nLCBpdGVtUGx1cmFsTGFiZWw9aXRlbVNpbmdsZUxhYmVsKydzJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzIHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy1pbm5lcndyYXAnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLWljb24nPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtdGV4dC10aXRsZSc+Tm8gI3tpdGVtU2luZ2xlTGFiZWx9cyB0byBEaXNwbGF5PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy10ZXh0LXN1YnRpdGxlJz5UaGVyZSBhcmUgbm8gbWF0Y2hpbmcgI3tpdGVtUGx1cmFsTGFiZWx9IGZvciB0aGUgc2VhcmNoIHF1ZXJ5IHlvdSd2ZSB0eXBlZC48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdGVycm9yOiAoe2Jhc2VDbGFzc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3Ige3tpc1Zpc2libGV9fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItaW5uZXJ3cmFwJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWljb24nPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQtdGl0bGUnPkEgRmF0YWwgRXJyb3IgaGFzIE9jY3VyZWQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC1zdWJ0aXRsZSc+UmVwb3J0IHRoZSBmb2xsb3dpbmcgdG8gdGhlIGFkbWluOjxiciAvPlxcXCJ7e2Vycm9yTWVzc2FnZX19XFxcIjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cGFnZVN0YXR1czogKHtiYXNlQ2xhc3MsIHNob3dQYWdlU3RhdHVzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdlU3RhdHVzICN7aWYgc2hvd1BhZ2VTdGF0dXMgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ30nPlxuXHRcdFx0U2hvd2luZyB7e3Jvd1JhbmdlfX0gb2Yge3t0b3RhbFJvd3N9fVxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cGFnaW5hdGlvbjogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24ge3toYXNFeHRyYX19IHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX2JhY2snPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW1zd3JhcCBfcGFnaW5hdGlvbkl0ZW1zJz48L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX2V4dHJhSW5kaWNhdG9yJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdFx0PHNlbGVjdCBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS1zZWxlY3QnPjwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfbmV4dCc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdHBhZ2luYXRpb25JdGVtOiAoe2Jhc2VDbGFzcywgdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblxuXHRoZWFkaW5nQ2VsbDogKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgc2x1ZywgaWNvbj0nJywgbGFiZWwsIHN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsICN7ZXh0cmFDbGFzc2VzfSBfXyN7c2x1Z30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1pY29uPScje2ljb259JyAje3N0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsLXRleHQnPiN7bGFiZWx9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRyb3c6ICh7YmFzZUNsYXNzLCByb3dJRCwgY2VsbHMsIGRyaWxsZG93bj0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3cgX3RhYmxlUm93IHt7ZHJpbGxkb3duU3RhdGV9fScgZGF0YS1yb3ctaWQ9JyN7cm93SUR9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24gX2V4cGFuZERyaWxsZG93bic+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24taWNvbic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0I3tjZWxsc31cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWRyaWxsZG93biBfdGFibGVSb3dEcmlsbGRvd24nPlxuXHRcdFx0XHQje2RyaWxsZG93bn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXHRyb3dDZWxsOiAoe2Jhc2VDbGFzcywgZXh0cmFDbGFzc2VzPScnLCBsYWJlbCwgY29sdW1uLCBzbHVnLCB2YWx1ZSwgc3R5bGU9Jyd9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWNlbGwgX18je3NsdWd9ICN7ZXh0cmFDbGFzc2VzfScgZGF0YS1zbHVnPScje3NsdWd9JyBkYXRhLWNvbHVtbj0nI3tjb2x1bW59JyAje3N0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsLWlubmVyd3JhcCcgdGl0bGU9JyN7bGFiZWx9Jz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblxuXG5cblx0c2VhcmNoRmllbGQ6ICh7YmFzZUNsYXNzLCBzZWFyY2h9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaCAje2lmIHNlYXJjaD8ubGVuZ3RoIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0Jz48L3NlbGVjdD5cblx0XHRcdDxpbnB1dCBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaC1pbnB1dCcgLz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0VHJpZ2dlcic+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRpcERldGFpbHM6ICh7YmFzZUNsYXNzLCBpcEFkZHJlc3MsIGV4dHJhPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMgX2lwRGV0YWlscycgZGF0YS1pcD0nI3tpcEFkZHJlc3N9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtdHJpZ2dlciBfaXBEZXRhaWxzLXRyaWdnZXInPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50Jz5Mb2FkaW5nIElQIERldGFpbHM8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQje2V4dHJhfVxuXHRcIlxuXG5cdGlwRGV0YWlsc0l0ZW06ICh7YmFzZUNsYXNzLCBsYWJlbCwgdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50LWl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50LWl0ZW0tbGFiZWwnPiN7bGFiZWx9OiA8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLXZhbHVlJz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0ZmllbGRzOiAoe2Jhc2VDbGFzcywgZmllbGRzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwJz4je2ZpZWxkc308L2Rpdj5cblx0XCJcblxuXHRmaWVsZHNJdGVtOiAoe2Jhc2VDbGFzcywgbGFiZWwsdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cC1pdGVtLWxhYmVsJz4je2xhYmVsfTogPC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cC1pdGVtLXZhbHVlJz4je2VzY0hUTUwgdmFsdWV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRidXR0b246ICh7YmFzZUNsYXNzLCBhY3Rpb24sIGljb249JycsIGlzTXVsdGl9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbiBfYWN0aW9uQnV0dG9uICN7aWYgaXNNdWx0aSB0aGVuICdfaXNNdWx0aScgZWxzZSAnJ30nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbi1pY29uJz4je2ljb259PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRhY3Rpb25zOiAoe2Jhc2VDbGFzcywgYWN0aW9uc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucyc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cCc+I3thY3Rpb25zfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cdGFjdGlvbnNPdmVybGF5OiAoKS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tEYXRhVGFibGUuZGVmYXVsdHMuYmFzZUNsYXNzfS1hY3Rpb25zLW92ZXJsYXknPjwvZGl2PlxuXHRcIlxuXG5cdGFjdGlvbnNJdGVtOiAoe2Jhc2VDbGFzcywgYWN0aW9uLCBpY29uLCBsYWJlbCwgY3VzdG9tSWNvblN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0gX2FjdGlvbkJ1dHRvbiBfc3ViQWN0aW9uQnV0dG9uJyBkYXRhLWFjdGlvbj0nI3thY3Rpb259JyBzdHlsZT0nI3tjdXN0b21JY29uU3R5bGV9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAtaXRlbS10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG4iLCJkZWZhdWx0cyA9IFxuXHQncGVyUGFnZSc6IDIwXG5cdCdwYWdlQ291bnRNYXgnOiAxMFxuXHQnbWluV2lkdGgnOiAwXG5cdCdtb2JpbGVXaWR0aCc6IDczNlxuXHQnY2VsbHNIYXZlUGFkZGluZyc6IGZhbHNlXG5cdCdoYXNNb2JpbGUnOiB0cnVlXG5cdCdsb2FkT25Jbml0JzogdHJ1ZVxuXHQnY29sdW1ucyc6IFtdXG5cdCdzZWFyY2gnOiBbXVxuXHQncGVyY2VudGFnZSc6IHt9XG5cdCdiYXNlQ2xhc3MnOiAnRGF0YVRhYmxlJ1xuXHQnc2hvd1BhZ2VTdGF0dXMnOiB0cnVlXG5cdCdzb3J0QnknOiAnJ1xuXHQnYWxpZ25tZW50JzogJ2xlZnQnXG5cdCdhY3Rpb25zJzogZmFsc2Vcblx0J2lwRGF0YUZldGNoZXInOiAoaXBBZGRyZXNzKS0+IG5ldyBQcm9taXNlIChyZXNvbHZlKS0+ICQuZ2V0IFwiaHR0cDovL2lwaW5mby5pby8je2lwQWRkcmVzc31cIiwgcmVzb2x2ZSwgJ0pTT04nXG4iLCJoZWxwZXJzID0ge31cblxuXG5oZWxwZXJzLmNvbXBhcmVWYWx1ZXMgPSAodmFsdWVBLCB2YWx1ZUIpLT4gc3dpdGNoXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyB0eXBlb2YgdmFsdWVCXG5cdFx0dmFsdWVBIGlzIHZhbHVlQlxuXHRcblx0d2hlbiB0eXBlb2YgdmFsdWVBIGlzICdzdHJpbmcnXG5cdFx0dmFsdWVBIGlzICcnK3ZhbHVlQlxuXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnbnVtYmVyJ1xuXHRcdHZhbHVlQSBpcyBwYXJzZUZsb2F0KHZhbHVlQilcblxuXG5oZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCA9IChhY3Rpb25zUG9wdXAkKS0+XG5cdGlzT3BlbiA9IGFjdGlvbnNQb3B1cCQuZGF0YSAnaXNPcGVuJ1xuXG5cdGlmIGlzT3BlblxuXHRcdGFjdGlvbnNQb3B1cCQuZGF0YSgnb3ZlcmxheScpLnJlbW92ZSgpXG5cdFx0YWN0aW9uc1BvcHVwJC5yZW1vdmVDbGFzcyAnaXNfdmlzaWJsZSdcblx0ZWxzZVxuXHRcdGFjdGlvbnNQb3B1cCQuZGF0YSAnb3ZlcmxheScsIG92ZXJsYXkkID0gJChtYXJrdXAuYWN0aW9uc092ZXJsYXkoKSlcblx0XHRhY3Rpb25zUG9wdXAkLmFkZENsYXNzICdpc192aXNpYmxlJ1xuXHRcdG92ZXJsYXkkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpLm9uZSAnY2xpY2snLCAoKS0+IGhlbHBlcnMudG9nZ2xlQWN0aW9uc1BvcHVwKGFjdGlvbnNQb3B1cCQpXG5cblx0YWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nLCAhaXNPcGVuXG5cblxuaGVscGVycy5nZXRCcmVha2Rvd25Ub3RhbCA9IChicmVha2Rvd24sIGJyZWFrZG93bktleXMpLT4gc3dpdGNoXG5cdHdoZW4gYnJlYWtkb3duS2V5cy5sZW5ndGggaXMgMCB0aGVuIDBcblx0ZWxzZVxuXHRcdGJyZWFrZG93bktleXNcblx0XHRcdC5tYXAgKGJyZWFrZG93bkl0ZW0pLT4gYnJlYWtkb3duW2JyZWFrZG93bkl0ZW1dXG5cdFx0XHQucmVkdWNlIChhLGIpLT4gYStiXG5cblxuXG5oZWxwZXJzLm5vcm1hbGl6ZUNvbHVtbnMgPSAoY29sdW1ucyktPlxuXHRpZiBub3QgQXJyYXkuaXNBcnJheShjb2x1bW5zKVxuXHRcdG91dHB1dCA9IGNvbHVtbnNcblx0ZWxzZVxuXHRcdG91dHB1dCA9IHt9XG5cdFx0aWYgdHlwZW9mIGNvbHVtbnNbMF0gaXMgJ3N0cmluZydcblx0XHRcdG91dHB1dFtsYWJlbF0gPSB7bGFiZWx9IGZvciBsYWJlbCBpbiBjb2x1bW5zXG5cdFx0XG5cdFx0ZWxzZSBpZiBjb2x1bW5zWzBdPy5sYWJlbFxuXHRcdFx0b3V0cHV0W2NvbHVtbi5sYWJlbF0gPSBjb2x1bW4gZm9yIGNvbHVtbiBpbiBjb2x1bW5zXG5cblxuXHRmb3IgbGFiZWwsY29sdW1uIG9mIG91dHB1dFxuXHRcdGNvbHVtbi5sYWJlbCA/PSBsYWJlbFxuXHRcdGNvbHVtbi5zbHVnID89IGNvbHVtbi5sYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UgL1xcVy9nLCAnXydcblx0XHRjb2x1bW4udHlwZSA/PSAndGV4dCdcblxuXHRyZXR1cm4gb3V0cHV0IFxuXG5cbmhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGggPSAocm93LCBsYXJnZXN0KS0+XG5cdChyb3cuYnJlYWtkb3duQmFyVG90YWwgLyBsYXJnZXN0KSAqICgxMDAgLSAxOClcblxuXG5oZWxwZXJzLmdlbkhlYWRlckNlbGxTdHlsZSA9IChjb2x1bW4pLT5cblx0c3R5bGVTdHJpbmcgPSAnJ1xuXG5cdGlmIGNvbHVtbi53aWR0aFxuXHRcdHN0eWxlU3RyaW5nICs9IFwibWF4LXdpZHRoOiAje2NvbHVtbi53aWR0aH07XCJcblx0XG5cdGlmIGNvbHVtbi5ncm93ID49IDBcblx0XHRzdHlsZVN0cmluZyArPSBcImZsZXgtZ3JvdzogI3tjb2x1bW4uZ3Jvd307XCJcblxuXHRyZXR1cm4gaWYgc3R5bGVTdHJpbmcgdGhlbiBcInN0eWxlPScje3N0eWxlU3RyaW5nfSdcIiBlbHNlICcnXG5cblxuXG5oZWxwZXJzLmdlbkNlbGxTdHlsZSA9IChjb2x1bW4pLT5cblx0c3R5bGVTdHJpbmcgPSAnJ1xuXG5cdGlmIGNvbHVtbi53aWR0aFxuXHRcdHN0eWxlU3RyaW5nICs9IFwibWF4LXdpZHRoOiAje2NvbHVtbi53aWR0aH07XCJcblxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjb2xvciA9IEBjb2xvck1hcHBpbmcoY29sdW1uLmNvbG9yLCBjb2x1bW4uY29sb3JUeXBlKVxuXHRcdHN0eWxlU3RyaW5nICs9IFwiY29sb3I6ICN7Y29sb3J9O1wiXG5cblx0aWYgY29sdW1uLmN1c3RvbVN0eWxlXG5cdFx0c3R5bGVTdHJpbmcgKz0gY29sdW1uLmN1c3RvbVN0eWxlXG5cdFxuXHRpZiBjb2x1bW4uZ3JvdyA+PSAwXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJmbGV4LWdyb3c6ICN7Y29sdW1uLmdyb3d9O1wiXG5cblx0cmV0dXJuIGlmIHN0eWxlU3RyaW5nIHRoZW4gXCJzdHlsZT0nI3tzdHlsZVN0cmluZ30nXCIgZWxzZSAnJ1xuXG5cblxuXG5oZWxwZXJzLmdlbkNlbGxDbGFzc25hbWUgPSAoY29sdW1uKS0+XG5cdGNsYXNzU3RyaW5nID0gJydcblx0XG5cdGlmIGNvbHVtbi5zb3J0YWJsZVxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzU29ydGFibGUge3tjdXJyZW50U29ydH19J1xuXHRcblx0aWYgY29sdW1uLm5vTGFiZWxcblx0XHRjbGFzc1N0cmluZyArPSAnIF9ub0xhYmVsJ1xuXHRcblx0aWYgY29sdW1uLmlzTGlua1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzTGluaydcblx0XG5cdGlmIGNvbHVtbi5ub0VsbGlwc2lzXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9FbGxpcHNpcydcblx0XG5cdGlmIGNvbHVtbi5zaG93T3ZlcmZsb3dcblx0XHRjbGFzc1N0cmluZyArPSAnIF9zaG93T3ZlcmZsb3cnXG5cdFxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjbGFzc1N0cmluZyArPSAnIF9oYXNDb2xvcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdidXR0b24nIG9yIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnV0dG9uJ1xuXHRcdGNvbHVtbi5hbHdheXNDZW50ZXIgPSB0cnVlXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnJlYWtkb3duQmFyJ1xuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0lwRGV0YWlscydcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNGaWVsZHMnXG5cdFxuXHRpZiBjb2x1bW4uYWx3YXlzQ2VudGVyXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfYWx3YXlzQ2VudGVyJ1xuXG5cdHJldHVybiBjbGFzc1N0cmluZ1xuXG5cblxuXG5cblxuXG5oZWxwZXJzLmNvbG9yTWFwcGluZyA9ICh2YWx1ZSwgY29sb3JUeXBlPSduYW1lJyktPiBzd2l0Y2ggY29sb3JUeXBlXG5cdHdoZW4gJ2Jyb3dzZXInIHRoZW4gc3dpdGNoXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiBAY29sb3JNYXBwaW5nKCdvcmFuZ2UnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiBAY29sb3JNYXBwaW5nKCdncmVlbicpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnU2FmYXJpJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gQGNvbG9yTWFwcGluZygnYmx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnSUUnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdFZGdlJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Ymx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnT3BlcmEnIHRoZW4gQGNvbG9yTWFwcGluZygncmVkJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Z3JlZW4nKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cdFxuXHRcblx0d2hlbiAncGxhdGZvcm0nIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnTWFjIE9TIFgnIHRoZW4gQGNvbG9yTWFwcGluZygnYmxhY2snKVxuXHRcdHdoZW4gJ1dpbmRvd3MnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuICdXaW5kb3dzIFBob25lJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3B1cnBsZScpXG5cdFx0d2hlbiAnTGludXgnIHRoZW4gQGNvbG9yTWFwcGluZygnZGFya3llbGxvdycpXG5cdFx0d2hlbiAnaU9TJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsYWNrJylcblx0XHR3aGVuICdBbmRyb2lkJyB0aGVuIEBjb2xvck1hcHBpbmcoXCJsaWdodGdyZWVuXCIpXG5cdFx0ZWxzZSAndW5rbm93bidcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbicgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdFeGNlbGxlbnQnIHRoZW4gQGNvbG9yTWFwcGluZygnZ3JlZW4nKVxuXHRcdHdoZW4gJ05vcm1hbCcgdGhlbiBAY29sb3JNYXBwaW5nKCd5ZWxsb3cnKVxuXHRcdHdoZW4gJ1Bvb3InIHRoZW4gQGNvbG9yTWFwcGluZygncmVkJylcblx0XHRlbHNlICd1bmtub3duJ1xuXG5cdFxuXHR3aGVuICduYW1lJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ29yYW5nZScgdGhlbiAnI2VlNmYwZSdcblx0XHR3aGVuICdncmVlbicgdGhlbiAnIzAwYWQwOSdcblx0XHR3aGVuICdibHVlJyB0aGVuICcjNDc4OGYzJ1xuXHRcdHdoZW4gJ3llbGxvdycgdGhlbiAnI2VhYjcxZSdcblx0XHR3aGVuICdyZWQnIHRoZW4gJyNjYzQ4MjAnXG5cdFx0d2hlbiAnYmxhY2snIHRoZW4gJyMxODE4MTgnXG5cdFx0d2hlbiAncHVycGxlJyB0aGVuICcjYTAyMGJhJ1xuXHRcdHdoZW4gJ2xpZ2h0Ymx1ZScgdGhlbiAnIzBjYjNlZSdcblx0XHR3aGVuICdsaWdodGdyZWVuJyB0aGVuICcjNzhjMjU3J1xuXHRcdHdoZW4gJ2Rhcmt5ZWxsb3cnIHRoZW4gJyNlOGFjMDEnXG5cblx0ZWxzZSB2YWx1ZVxuXG5cblxuXG5cblxuaGVscGVycy5pY29uTWFwcGluZyA9ICh2YWx1ZSwgaWNvblR5cGUpLT4gc3dpdGNoIGljb25UeXBlXG5cdHdoZW4gJ2Jyb3dzZXInXG5cdFx0c3dpdGNoXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdGaXJlZm94JyB0aGVuICcjJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQ2hyb21lJyB0aGVuICclJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnU2FmYXJpJyB0aGVuICckJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnTW9iaWxlIFNhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0lFJyB0aGVuICcmJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRWRnZScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ09wZXJhJyB0aGVuICdcIidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0FuZHJvaWQnIHRoZW4gJyYjMDM5Oydcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdkZXZpY2UnXG5cdFx0c3dpdGNoIHZhbHVlXG5cdFx0XHR3aGVuICdEZXNrdG9wJyB0aGVuICchJ1xuXHRcdFx0d2hlbiAnVGFibGV0JyB0aGVuICc3J1xuXHRcdFx0d2hlbiAnTW9iaWxlJyB0aGVuICc2J1xuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3BsYXRmb3JtJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnTWFjIE9TIFgnIHRoZW4gJyonXG5cdFx0XHR3aGVuICdXaW5kb3dzJyB0aGVuICcpJ1xuXHRcdFx0d2hlbiAnV2luZG93cyBQaG9uZScgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ0xpbnV4JyB0aGVuICcrJ1xuXHRcdFx0d2hlbiAnaU9TJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnQW5kcm9pZCcgdGhlbiBcIiYjMDM5O1wiXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnc2F0aXNmYWN0aW9uJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRXhjZWxsZW50JyB0aGVuICdbJ1xuXHRcdFx0d2hlbiAnTm9ybWFsJyB0aGVuICdAJ1xuXHRcdFx0d2hlbiAnUG9vcicgdGhlbiAnPydcblx0XHRcdGVsc2UgJzQnXG5cblx0ZWxzZSAnNCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICdnZW5lcmFsLmNvZmZlZSdcbmltcG9ydCAnY29sdW1uLmNvZmZlZSdcbmltcG9ydCAncm93LmNvZmZlZSdcbmltcG9ydCAnc3BlY2lhbENlbGxzLmNvZmZlZSciLCJEYXRhVGFibGU6OmNhbGNQYWdlQ291bnQgPSAocm93cyktPlxuXHRAcGFnZUNvdW50UmVhbCA9IE1hdGguY2VpbCByb3dzLmxlbmd0aC9Ab3B0aW9ucy5wZXJQYWdlXG5cdEBwYWdlQ291bnQgPSBpZiBAcGFnZUNvdW50UmVhbCA+IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuIEBvcHRpb25zLnBhZ2VDb3VudE1heCBlbHNlIEBwYWdlQ291bnRSZWFsXG5cblxuXG5cblxuRGF0YVRhYmxlOjpjYWxjUGVyY2VudGFnZVN0cmluZyA9IChjb2x1bW5WYWx1ZSwgY29sdW1uTmFtZSwgcm93KS0+XG5cdGZvcm11bGEgPSBAb3B0aW9ucy5wZXJjZW50YWdlW2NvbHVtbk5hbWVdXG5cdGNvbHVtbkEgPSBmb3JtdWxhWzBdXG5cdGNvbHVtbkIgPSBmb3JtdWxhWzJdXG5cdG1hdGhPcGVyYXRvciA9IGZvcm11bGFbMV1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSBzd2l0Y2ggbWF0aE9wZXJhdG9yXG5cdFx0d2hlbiAnKicgdGhlbiByb3dbY29sdW1uQV0gKiByb3dbY29sdW1uQl1cblx0XHR3aGVuICcvJyB0aGVuIHJvd1tjb2x1bW5BXSAvIHJvd1tjb2x1bW5CXVxuXHRcdHdoZW4gJysnIHRoZW4gcm93W2NvbHVtbkFdICsgcm93W2NvbHVtbkJdXG5cdFx0d2hlbiAnLScgdGhlbiByb3dbY29sdW1uQV0gLSByb3dbY29sdW1uQl1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSAwIGlmIHBlcmNlbnRhZ2VWYWx1ZSBpcyBJbmZpbml0eVxuXHRwZXJjZW50ID0gY29udmVydFRvUGVyY2VudChwZXJjZW50YWdlVmFsdWUpXG5cdHJldHVybiBcIiN7Y29sdW1uVmFsdWV9ICgje3BlcmNlbnR9KVwiXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OnNvcnRSb3dzID0gKHJvd3MsIHRhcmdldENvbHVtbj1Ab3B0aW9ucy5zb3J0QnkpLT4gc3dpdGNoXG5cdHdoZW4gdGFyZ2V0Q29sdW1uIGlzICcrJyB0aGVuIHJvd3Ncblx0d2hlbiB0YXJnZXRDb2x1bW4gaXMgJy0nIHRoZW4gcm93cz8uc2xpY2UoKS5yZXZlcnNlKClcblx0d2hlbiBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl1cblx0XHRjdXN0b21Tb3J0ID0gQG9wdGlvbnMuY29sdW1uc1t0YXJnZXRDb2x1bW5dLnNvcnRGblxuXHRcdHJhd1ZhbHVlID0gQG9wdGlvbnMuY29sdW1uc1t0YXJnZXRDb2x1bW5dLnJhd1ZhbHVlRm9ybWF0dGVyXG5cdFx0c29ydGVyID0gY3VzdG9tU29ydFxuXHRcdHNvcnRlciB8fD0gKGEsYik9PlxuXHRcdFx0YVZhbHVlID0gaWYgcmF3VmFsdWUgdGhlbiByYXdWYWx1ZShhW3RhcmdldENvbHVtbl0pIGVsc2UgYVt0YXJnZXRDb2x1bW5dXG5cdFx0XHRiVmFsdWUgPSBpZiByYXdWYWx1ZSB0aGVuIHJhd1ZhbHVlKGJbdGFyZ2V0Q29sdW1uXSkgZWxzZSBiW3RhcmdldENvbHVtbl1cblx0XHRcdHN3aXRjaFxuXHRcdFx0XHR3aGVuIGFWYWx1ZSA+IGJWYWx1ZSB0aGVuIEBzb3J0RGlyZWN0aW9uXG5cdFx0XHRcdHdoZW4gYVZhbHVlIDwgYlZhbHVlIHRoZW4gQHNvcnREaXJlY3Rpb24gKiAtMVxuXHRcdFx0XHRlbHNlIDBcblx0XHRcblx0XHRyb3dzLnNsaWNlKCkuc29ydCBzb3J0ZXJcblxuXHRlbHNlIHJvd3Ncblx0XG5cblxuRGF0YVRhYmxlOjpzZXRWaXNpYmxlUGFnZSA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UtLSAjIERlYyBieSAxIGZvciBhcnJheS1pbmRleCBzdHlsZVxuXHRzbGljZSA9XG5cdFx0J3N0YXJ0JzogdGFyZ2V0UGFnZSpAb3B0aW9ucy5wZXJQYWdlXG5cdFx0J2VuZCc6ICh0YXJnZXRQYWdlKkBvcHRpb25zLnBlclBhZ2UpK0BvcHRpb25zLnBlclBhZ2Vcblx0XG5cdHJvd3NUb1JldmVhbCA9IEBhdmFpbGFibGVSb3dzW3NsaWNlLnN0YXJ0IC4uLiBzbGljZS5lbmRdXG5cdHJvd3NUb0hpZGUgPSBAdmlzaWJsZVJvd3Muc2xpY2UoKVxuXG5cdHJvdy52aXNpYmxlID0gZmFsc2UgZm9yIHJvdyBpbiByb3dzVG9IaWRlXG5cdEB2aXNpYmxlUm93cy5sZW5ndGggPSAwXG5cdEB2aXNpYmxlUm93cy5wdXNoLmFwcGx5IEB2aXNpYmxlUm93cywgcm93c1RvUmV2ZWFsXG5cblxuXG5cbkRhdGFUYWJsZTo6c2V0UGFnZUluZGljYXRvciA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UgPSAxIGlmIHRhcmdldFBhZ2UgaXMgJy4uLidcblx0dGFyZ2V0UGFnZSA9IGlmIHRhcmdldFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSB0YXJnZXRQYWdlLTEgIyAwLWJhc2VkIGluZGV4IHNvIHdlIHN1YnRyYWN0IDFcblx0cGFnZUl0ZW1zJCA9IEBlbHMucGFnaW5hdGlvbi5maW5kKCcuX3BhZ2luYXRpb25JdGVtJykuc2xpY2UoMSwtMSlcblx0bWF0Y2hlZFBhZ2VFbCQgPSBwYWdlSXRlbXMkLmVxIHRhcmdldFBhZ2Vcblx0XG5cdG1hdGNoZWRQYWdlRWwkLmFkZENsYXNzICdjdXJyZW50J1xuXHRwYWdlSXRlbXMkLm5vdChtYXRjaGVkUGFnZUVsJCkucmVtb3ZlQ2xhc3MgJ2N1cnJlbnQnXHRcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJEYXRhVGFibGU6OmdlbmVyYXRlSGVhZGluZ0NvbHVtbnMgPSAoKS0+XG5cdEBvcHRpb25zLmNvbHVtbnMgPSBoZWxwZXJzLm5vcm1hbGl6ZUNvbHVtbnMoQG9wdGlvbnMuY29sdW1ucylcblx0QGhhc0JyZWFrZG93bkJhciA9IHRydWUgaWYgY29sdW1uLnR5cGUgaXMgJ2JyZWFrZG93bkJhcicgZm9yIGxhYmVsLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zXG5cblx0T2JqZWN0LmtleXMoQG9wdGlvbnMuY29sdW1ucylcblx0XHQubWFwIChsYWJlbCk9PlxuXHRcdFx0Y29sdW1uID0gQG9wdGlvbnMuY29sdW1uc1tsYWJlbF1cblx0XHRcdEBlbHMuZ2xvYmFsU3R5bGVzWzBdLmlubmVySFRNTCArPSBcInt7I3tjb2x1bW4uc2x1Z319fVxcblwiXG5cblx0XHRcdG1hcmt1cC5oZWFkaW5nQ2VsbCBAbWFya3VwQXJnc1xuXHRcdFx0XHQnc2x1Zyc6IGNvbHVtbi5zbHVnXG5cdFx0XHRcdCdpY29uJzogY29sdW1uLmljb25cblx0XHRcdFx0J2xhYmVsJzogY29sdW1uLmxhYmVsXG5cdFx0XHRcdCdzdHlsZSc6IGhlbHBlcnMuZ2VuSGVhZGVyQ2VsbFN0eWxlKGNvbHVtbilcblx0XHRcdFx0J2V4dHJhQ2xhc3Nlcyc6IGhlbHBlcnMuZ2VuQ2VsbENsYXNzbmFtZShjb2x1bW4pXG5cdFx0LmpvaW4oJycpXG5cblxuXG5cblxuRGF0YVRhYmxlOjp1cGRhdGVDb2x1bW5zID0gKHVwZGF0ZWRDb2x1bW5zKS0+XG5cdHVwZGF0ZWRDb2x1bW5zID0gaGVscGVycy5ub3JtYWxpemVDb2x1bW5zKHVwZGF0ZWRDb2x1bW5zKVxuXHRleHRlbmQuZGVlcChAb3B0aW9ucy5jb2x1bW5zLCB1cGRhdGVkQ29sdW1ucylcblx0QGN1cnJlbnRQYWdlID0gQGN1cnJlbnRQYWdlXG5cblxuXG5cblxuXG5cblxuXG4iLCJEYXRhVGFibGU6OnByb2Nlc3NSb3cgPSAocm93KS0+IGlmIHJvdy5wcm9jZXNzZWQgdGhlbiByb3cgZWxzZVxuXHRAZ2VuZXJhdGVSb3cocm93KVxuXG5cdFNpbXBseUJpbmQoJ3Zpc2libGUnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKHJvdylcblx0XHQudG8gKGlzVmlzaWJsZSwgcHJldlZhbHVlKT0+XG5cdFx0XHRpZiBub3QgaXNWaXNpYmxlIFxuXHRcdFx0XHRyb3cuZWwuZGV0YWNoKClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cm93LmVsLmFwcGVuZFRvIEBlbHMudGFibGVCb2R5XG5cblx0XHRcdFx0aWYgQGhhc0JyZWFrZG93bkJhciBhbmQgbm90IHJvdy51cGRhdGVkQnJlYWtkb3duV2lkdGggYW5kIGlzVmlzaWJsZSBpc250IHByZXZWYWx1ZVxuXHRcdFx0XHRcdHJvdy5icmVha2Rvd25CYXJXaWR0aCA9IGhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXHRcdFx0XHRcblxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWw/Lmxlbmd0aFxuXHRcdFNpbXBseUJpbmQoJ2xhcmdlc3RCcmVha2Rvd25Ub3RhbCcpLm9mKEApXG5cdFx0XHQudG8oJ3VwZGF0ZWRCcmVha2Rvd25XaWR0aCcpLm9mKHJvdylcblx0XHRcdFx0LnRyYW5zZm9ybSAoKS0+IGlmIHJvdy52aXNpYmxlIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG5cdFx0XHQuYW5kLnRvKCdicmVha2Rvd25CYXJXaWR0aCcpLm9mKHJvdylcblx0XHRcdFx0LnRyYW5zZm9ybSAoKT0+IGhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXG5cdFx0XHRcdC5jaGFpblRvKCd3aWR0aCcpLm9mKHJvdy5icmVha2Rvd25CYXJFbFswXS5zdHlsZSlcblx0XHRcdFx0XHQudHJhbnNmb3JtICh3aWR0aCktPiB3aWR0aCsnJSdcblxuXHRcdFx0XHQuYW5kLnRvICgpPT5cblx0XHRcdFx0XHRmb3IgZHJpbGxkb3duRWwsaW5kZXggaW4gcm93LmRyaWxsZG93bkVsc1xuXHRcdFx0XHRcdFx0d2lkdGggPSBoZWxwZXJzLmdldEJyZWFrZG93bkJhcldpZHRoKHJvdy5kcmlsbGRvd25baW5kZXhdLCByb3cuZHJpbGxkb3duLmxhcmdlc3RCcmVha2Rvd25Ub3RhbClcblx0XHRcdFx0XHRcdCQoZHJpbGxkb3duRWwpLmNoaWxkcmVuKCcuaXNfYnJlYWtkb3duX2JhcicpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVswXT8uc3R5bGUud2lkdGggPSB3aWR0aCsnJSdcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0LmNvbmRpdGlvbiAoKS0+IHJvdy5kcmlsbGRvd25cblx0XHRcdFx0XHRcblx0XHRcdC5jb25kaXRpb25BbGwgKCktPiByb3cudmlzaWJsZVxuXG5cdHJvdy5wcm9jZXNzZWQgPSB0cnVlXG5cdHJldHVybiByb3dcblxuXG5cblxuXG5EYXRhVGFibGU6OnVucHJvY2Vzc1JvdyA9IChyb3cpLT4gaWYgcm93LnByb2Nlc3NlZFxuXHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3csIHRydWUpXG5cdFxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWxbMF1cblx0XHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3cuYnJlYWtkb3duQmFyRWxbMF0uc3R5bGUpXG5cblx0cm93LmVsLnJlbW92ZSgpXG5cdGRlbGV0ZSByb3cuZWxcblx0ZGVsZXRlIHJvdy5kcmlsbGRvd25FbHNcblx0ZGVsZXRlIHJvdy52aXNpYmxlXG5cdGRlbGV0ZSByb3cuYnJlYWtkb3duQmFyRWxcblx0ZGVsZXRlIHJvdy5wcm9jZXNzZWRcblxuXG5cbkRhdGFUYWJsZTo6cmVSZW5kZXJSb3cgPSAocm93KS0+XG5cdEBnZW5lcmF0ZVJvdyhyb3cpXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlUm93ID0gKHJvdyktPlxuXHRwcmV2Um93RWwgPSByb3cuZWxcblx0bmV3Um93RWwgPSByb3cuZWwgPSAkKEBnZW5lcmF0ZVJvd01hcmt1cChyb3cpKS5kYXRhKCdyb3cnLCByb3cpXG5cdHByZXZSb3dFbC5yZXBsYWNlV2l0aChuZXdSb3dFbCkgaWYgcHJldlJvd0VsXG5cdFxuXHRyb3cuZXhwYW5kQnV0dG9uID0gcm93LmVsLmNoaWxkcmVuKCkuZmlyc3QoKSBpZiByb3cuZHJpbGxkb3duXG5cdHJvdy5kcmlsbGRvd25FbHMgPSByb3cuZWwuY2hpbGRyZW4oJy5fdGFibGVSb3dEcmlsbGRvd24nKS5jaGlsZHJlbigpIGlmIHJvdy5kcmlsbGRvd25cblx0cm93LmJyZWFrZG93bkJhckVsID0gcm93LmVsLmNoaWxkcmVuKCcuaXNCcmVha2Rvd25CYXInKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkgaWYgQGhhc0JyZWFrZG93bkJhclxuXHRyb3cudmlzaWJsZSA9IGZhbHNlIHVubGVzcyBwcmV2Um93RWxcblx0XG5cdGlmIHJvdy5kcmlsbGRvd25cblx0XHRpZiBAaGFzQnJlYWtkb3duQmFyXG5cdFx0XHRyb3cuZHJpbGxkb3duLmxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IE1hdGgubWF4IHJvdy5kcmlsbGRvd24ubWFwKChzdWJSb3cpLT4gc3ViUm93LmJyZWFrZG93bkJhclRvdGFsKS4uLlxuXG5cdFx0U2ltcGx5QmluZCgnZHJpbGxkb3duT3BlbicpLm9mKHJvdylcblx0XHRcdC50bygnY2xhc3NOYW1lLmRyaWxsZG93blN0YXRlJykub2Yocm93LmVsKVxuXHRcdFx0XHQudHJhbnNmb3JtIChkcmlsbGRvd25PcGVuKS0+IGlmIGRyaWxsZG93bk9wZW4gdGhlbiAnaGFzRHJpbGxkb3duIGRyaWxsZG93bklzT3BlbicgZWxzZSAnaGFzRHJpbGxkb3duJ1xuXG5cdFx0U2ltcGx5QmluZCgndmlzaWJsZScpLm9mKHJvdylcblx0XHRcdC5vbmNlLnRvICgpLT5cblx0XHRcdFx0U2ltcGx5QmluZCAoKS0+XG5cdFx0XHRcdFx0aWYgbm90IHJvdy5kcmlsbGRvd25PcGVuIHRoZW4gc2V0VGltZW91dCAoKS0+XG5cdFx0XHRcdFx0XHRyb3dIZWlnaHQgPSByb3cuZWwuaGVpZ2h0KClcblx0XHRcdFx0XHRcdGJ1dHRvbkhlaWdodCA9IHJvdy5leHBhbmRCdXR0b24uaGVpZ2h0KClcblx0XHRcdFx0XHRcdHJvdy5leHBhbmRCdXR0b25bMF0uc3R5bGUudG9wID0gXCIje3Jvd0hlaWdodC8yIC0gYnV0dG9uSGVpZ2h0LzJ9cHhcIlxuXG5cdFx0XHRcdC51cGRhdGVPbignZXZlbnQ6cmVzaXplJywgdGhyb3R0bGU6MzAwKS5vZih3aW5kb3cpXG5cdFx0XHQuY29uZGl0aW9uICh2aXNpYmxlKS0+IHZpc2libGVcblxuXHRyZXR1cm4gcm93XG5cblxuXG5cblxuRGF0YVRhYmxlOjpnZW5lcmF0ZVJvd01hcmt1cCA9IChyb3csIHBhcmVudFJvdyktPlxuXHRpc1N1YiA9ICEhcGFyZW50Um93XG5cdFxuXHRtYXJrdXAucm93IEBtYXJrdXBBcmdzXG5cdFx0J3Jvd0lEJzogaWYgaXNTdWIgdGhlbiBwYXJlbnRSb3dbQG9wdGlvbnMudW5pcXVlSURdIGVsc2Ugcm93W0BvcHRpb25zLnVuaXF1ZUlEXVxuXHRcdCdkcmlsbGRvd24nOiBpZiBpc1N1YiB0aGVuICcnIGVsc2UgaWYgcm93LmRyaWxsZG93biB0aGVuIGRvICgpPT5cblx0XHRcdGRyaWxsZG93bk1hcmt1cHMgPSAnJ1xuXHRcdFx0ZHJpbGxkb3duTWFya3VwcyArPSBAZ2VuZXJhdGVSb3dNYXJrdXAoZHJpbGxkb3duUm93LCByb3cpIGZvciBkcmlsbGRvd25Sb3cgaW4gcm93LmRyaWxsZG93blxuXHRcdFx0cmV0dXJuIGRyaWxsZG93bk1hcmt1cHNcblx0XHRcblx0XHQnY2VsbHMnOiBkbyAoKT0+XG5cdFx0XHRyb3dDZWxscyA9ICcnXG5cdFx0XHRcblx0XHRcdGZvciBjb2x1bW5OYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zXG5cdFx0XHRcdGNlbGxWYWx1ZSA9IHJvd1tjb2x1bW5OYW1lXVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnBlcmNlbnRhZ2VbY29sdW1uTmFtZV1cblx0XHRcdFx0XHRjZWxsVmFsdWUgPSBAY2FsY1BlcmNlbnRhZ2VTdHJpbmcoY2VsbFZhbHVlLCBjb2x1bW5OYW1lLCByb3cpXG5cblxuXHRcdFx0XHRyb3dDZWxscyArPSBtYXJrdXAucm93Q2VsbCBAbWFya3VwQXJnc1xuXHRcdFx0XHRcdCdsYWJlbCc6IGlmIHR5cGVvZiBjZWxsVmFsdWUgaXMgJ3N0cmluZycgdGhlbiBjZWxsVmFsdWUgZWxzZSAnJ1xuXHRcdFx0XHRcdCdjb2x1bW4nOiBjb2x1bW5OYW1lXG5cdFx0XHRcdFx0J3NsdWcnOiBjb2x1bW4uc2x1Z1xuXHRcdFx0XHRcdCdleHRyYUNsYXNzZXMnOiBoZWxwZXJzLmdlbkNlbGxDbGFzc25hbWUoY29sdW1uKVxuXHRcdFx0XHRcdCdzdHlsZSc6IGhlbHBlcnMuZ2VuQ2VsbFN0eWxlKGNvbHVtbilcblx0XHRcdFx0XHQndmFsdWUnOiBkbyAoKT0+IHN3aXRjaFxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnZmllbGRzJyBcdFx0dGhlbiBAZ2VuZXJhdGVJbmxpbmVGaWVsZHMoY2VsbFZhbHVlLCByb3csIGNvbHVtbilcblx0XHRcdFx0XHRcdHdoZW4gY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscycgXHR0aGVuIEBnZW5lcmF0ZUlwRGV0YWlscyhjZWxsVmFsdWUsIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJyBcdHRoZW4gQGdlbmVyYXRlQnJlYWtkb3duQmFyKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdidXR0b24nIFx0XHR0aGVuIEBnZW5lcmF0ZUJ1dHRvbigoY29sdW1uLmFjdGlvbiBvciBjZWxsVmFsdWUpLCAoY29sdW1uLmJ1dHRvbkljb24gb3IgY29sdW1uLmljb24pKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnYWN0aW9ucycgXHRcdHRoZW4gQGdlbmVyYXRlQWN0aW9ucyhjb2x1bW4sIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4uaXNMaW5rIFx0XHRcdFx0XHR0aGVuIFwiPGEgaHJlZj0nI3tjZWxsVmFsdWV9JyB0YXJnZXQ9J19ibGFuayc+I3tjZWxsVmFsdWV9PC9hPlwiXG5cdFx0XHRcdFx0XHRlbHNlIChpZiBjb2x1bW4uZm9ybWF0dGVyIHRoZW4gY29sdW1uLmZvcm1hdHRlcihjZWxsVmFsdWUsIHJvdywgY29sdW1uKSBlbHNlIGNlbGxWYWx1ZSlcblx0XHRcdFx0XHRcblx0XHRcdHJldHVybiByb3dDZWxsc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiRGF0YVRhYmxlOjpnZW5lcmF0ZUJyZWFrZG93bkJhciA9IChicmVha2Rvd24sIHJvd09iaiwgY29sdW1uRW50aXR5KS0+XG5cdGJyZWFrZG93bktleXMgPSBAbGVnZW5kIG9yIE9iamVjdC5rZXlzKGJyZWFrZG93bilcblx0cm93T2JqLmJyZWFrZG93bkJhclRvdGFsID0gdG90YWwgPSBAZ2V0QnJlYWtkb3duVG90YWwoYnJlYWtkb3duLCBicmVha2Rvd25LZXlzKVxuXHRcblx0cmV0dXJuICdOL0EnIHVubGVzcyB0b3RhbFxuXHRcblx0bWFya3VwLmJyZWFrZG93bkJhciBAbWFya3VwQXJnc1xuXHRcdCd0b3RhbCc6IHRvdGFsXG5cdFx0J3RvdGFsRm9ybWF0dGVkJzogaWYgY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0IHRoZW4gY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0KHRvdGFsKSBlbHNlIHRvdGFsXG5cdFx0J2JhcnMnOiBkbyAoKS0+XG5cdFx0XHRiYXJzID0gJydcblx0XHRcdGZvciBrZXkgaW4gYnJlYWtkb3duS2V5c1xuXHRcdFx0XHR2YWx1ZSA9IGJyZWFrZG93bltrZXldXG5cdFx0XHRcdGJhcnMgKz0gbWFya3VwLmJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2Jhci5yZXBsYWNlICd7e3dpZHRofX0nLCAodmFsdWUvdG90YWwpKjEwMFxuXHRcdFx0cmV0dXJuIGJhcnNcblxuXHRcdCdob3ZlckJveCc6IGRvICgpLT5cblx0XHRcdG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9ob3ZlcmJveFxuXHRcdFx0XHQucmVwbGFjZSAne3tyb3dzfX0nLCAoKS0+XG5cdFx0XHRcdFx0cm93cyA9ICcnXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWtkb3duS2V5cy5mb3JFYWNoIChrZXksIGluZGV4KS0+XG5cdFx0XHRcdFx0XHRyb3dzICs9IG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9ob3ZlcmJveF9yb3dcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7Y29sb3J9fScsIGN1c3RvbUNvbG9ycyhpbmRleClcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7a2V5fX0nLCBrZXlcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7dmFsdWV9fScsIGlmIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdCB0aGVuIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdChicmVha2Rvd25ba2V5XSkgZWxzZSBicmVha2Rvd25ba2V5XVxuXG5cdFx0XHRcdFx0cmV0dXJuIHJvd3NcblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlSW5saW5lRmllbGRzID0gKGRhdGFGaWVsZHMpLT5cblx0bWFya3VwLmZpZWxkcyBAbWFya3VwQXJncyAnZmllbGRzJzogZG8gKCk9PlxuXHRcdHJldHVybiAnJyB1bmxlc3MgdHlwZW9mIGRhdGFGaWVsZHMgaXMgJ29iamVjdCdcblx0XHRcblx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgZGF0YUZpZWxkc1xuXHRcdFx0bWFya3VwLmZpZWxkc0l0ZW0gQG1hcmt1cEFyZ3Mge2xhYmVsLHZhbHVlfVxuXG5cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlQnV0dG9uID0gKGFjdGlvbiwgaWNvbiwgaXNNdWx0aSktPlxuXHRtYXJrdXAuYnV0dG9uKEBtYXJrdXBBcmdzIHthY3Rpb24sIGljb24sIGlzTXVsdGl9KVxuXG5cblxuXG5cbkRhdGFUYWJsZTo6Z2VuZXJhdGVBY3Rpb25zID0gKGNvbHVtbiktPlxuXHRjb2x1bW4uYWN0aW9ucyA/PSAnbXVsdGlBY3Rpb25zJ1xuXHRidXR0b25NYXJrdXAgPSBAZ2VuZXJhdGVCdXR0b24oY29sdW1uLmFjdGlvbnMsIChjb2x1bW4uYnV0dG9uSWNvbiBvciBjb2x1bW4uaWNvbiksIHRydWUpXG5cdGFjdGlvbnNNYXJrdXAgPSBtYXJrdXAuYWN0aW9ucyBAbWFya3VwQXJncyAnYWN0aW9ucyc6IGRvICgpPT5cblx0XHRyZXR1cm4gJycgdW5sZXNzIEBvcHRpb25zLmFjdGlvbnNcblx0XHRcblx0XHRvdXRwdXQgPSBmb3IgYWN0aW9uIGluIEBvcHRpb25zLmFjdGlvbnNcblx0XHRcdG1hcmt1cC5hY3Rpb25zSXRlbShAbWFya3VwQXJncyBhY3Rpb24pXG5cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpXG5cblx0cmV0dXJuIGJ1dHRvbk1hcmt1cCthY3Rpb25zTWFya3VwXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlSXBEZXRhaWxzID0gKGlwQWRkcmVzcywgcm93LCBjb2x1bW4pLT5cblx0bWFya3VwLmlwRGV0YWlscyBAbWFya3VwQXJncyB7aXBBZGRyZXNzLCBleHRyYTpjb2x1bW4uZXh0cmFNYXJrdXA/KGlwQWRkcmVzcywgcm93KX0gIyBkYXRhIGF0dHJpYnV0ZVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiRGF0YVRhYmxlOjphdHRhY2hFdmVudHMgPSAoKS0+XG5cdCMgPT09PSBQYWdpbmF0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnBhZ2luYXRpb24ub24gJ2NsaWNrJywgJy5fcGFnaW5hdGlvbkl0ZW0nLCAoZXZlbnQpPT5cblx0XHQkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpc0JhY2sgPSAkdGhpcy5oYXNDbGFzcygnX2JhY2snKVxuXHRcdGlzTmV4dCA9ICR0aGlzLmhhc0NsYXNzKCdfbmV4dCcpXG5cdFx0aXNFeHRyYSA9ICR0aGlzLmhhc0NsYXNzKCdfZXh0cmFJbmRpY2F0b3InKVxuXG5cdFx0aWYgaXNCYWNrXG5cdFx0XHRAY3VycmVudFBhZ2UtLSB1bmxlc3MgQGN1cnJlbnRQYWdlIGlzIDFcblx0XHRcblx0XHRlbHNlIGlmIGlzTmV4dFxuXHRcdFx0QGN1cnJlbnRQYWdlKysgdW5sZXNzIEBjdXJyZW50UGFnZSBpcyBAcGFnZUNvdW50UmVhbFxuXHRcdFxuXHRcdCMgZWxzZSBpZiBub3QgaXNFeHRyYSBhbmQgbm90IGlzV3JhcHBlclxuXHRcdGVsc2UgaWYgbm90IGlzRXh0cmFcblx0XHRcdHBhZ2VOdW1iZXIgPSBwYXJzZUZsb2F0ICR0aGlzLmNoaWxkcmVuKCkuaHRtbCgpXG5cdFx0XHRAY3VycmVudFBhZ2UgPSBwYWdlTnVtYmVyXG5cblxuXG5cblx0IyA9PT09IFNvcnRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVIZWFkaW5nLm9uICdjbGljaycsICcuX2lzU29ydGFibGUnLCAoZXZlbnQpPT5cblx0XHRAc29ydEJ5ID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuXG5cblxuXHQjID09PT0gQWN0aW9uIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdjbGljaycsICcuX2FjdGlvbkJ1dHRvbicsIChldmVudCk9PlxuXHRcdGJ1dHRvbiQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX2lzTXVsdGknKVxuXHRcdFx0aGVscGVycy50b2dnbGVBY3Rpb25zUG9wdXAgYnV0dG9uJC5uZXh0KCkuY2hpbGRyZW4oKVxuXHRcdFxuXHRcdGVsc2Vcblx0XHRcdGl0ZW1Sb3ckID0gYnV0dG9uJC5jbG9zZXN0KCcuX3RhYmxlUm93Jylcblx0XHRcdGFjdGlvbiA9IGJ1dHRvbiQuZGF0YSgnYWN0aW9uJylcblx0XHRcdGl0ZW1JRCA9IGl0ZW1Sb3ckLmRhdGEoJ3Jvdy1pZCcpXG5cdFx0XHRpdGVtSW5kZXggPSBpdGVtUm93JC5kYXRhKCdpbmRleCcpXG5cdFx0XHRkYXRhSXRlbSA9IGlmIGl0ZW1JRCB0aGVuIEBhbGxSb3dzLmZpbmQgKHJvdyk9PiBoZWxwZXJzLmNvbXBhcmVWYWx1ZXMocm93W0BvcHRpb25zLnVuaXF1ZUlEXSwgaXRlbUlEKVxuXHRcdFx0ZGF0YUl0ZW0gPz0gaXRlbUlEXG5cblx0XHRcdGlmIGJ1dHRvbiQuaGFzQ2xhc3MoJ19zdWJBY3Rpb25CdXR0b24nKVxuXHRcdFx0XHRoZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLnBhcmVudCgpXG5cblx0XHRcdEBlbHMudGFibGUudHJpZ2dlciBcImFjdGlvbi4je2FjdGlvbn1cIiwgZGF0YUl0ZW1cblxuXG5cblxuXG5cblx0IyA9PT09IFJvdyBleHBhbnNpb24gbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnY2xpY2snLCAnLl9leHBhbmREcmlsbGRvd24nLCAoZXZlbnQpPT5cblx0XHRidXR0b24kID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGl0ZW1Sb3cgPSBidXR0b24kLnBhcmVudCgpLmRhdGEoJ3JvdycpXG5cdFx0XG5cdFx0aXRlbVJvdy5kcmlsbGRvd25PcGVuID0gIWl0ZW1Sb3cuZHJpbGxkb3duT3BlblxuXG5cblxuXG5cblxuXG5cdCMgPT09PSBJUCBEZXRhaWxzIGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ21vdXNlb3ZlcicsICcuX2lwRGV0YWlscy10cmlnZ2VyJywgKGV2ZW50KT0+XG5cdFx0dHJpZ2dlciQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0d3JhcHBlciQgPSB0cmlnZ2VyJC5wYXJlbnQoKVxuXHRcdGNvbnRlbnQkID0gdHJpZ2dlciQubmV4dCgpXG5cdFx0Y291bnRyeSQgPSBjb250ZW50JC5uZXh0KClcblx0XHRpcEFkZHJlc3MgPSB3cmFwcGVyJC5kYXRhICdpcCdcblx0XHRpc0xvYWRlZCA9IHRyaWdnZXIkLmhhc0NsYXNzICdfaXNSZWFkeSdcblxuXG5cdFx0dW5sZXNzIGlzTG9hZGVkXHRcdFx0XG5cdFx0XHRAb3B0aW9ucy5pcERhdGFGZXRjaGVyKGlwQWRkcmVzcykudGhlbiAoaXBEZXRhaWxzKT0+XG5cdFx0XHRcdHJldHVybiB1bmxlc3MgaXBEZXRhaWxzXG5cdFx0XHRcdFxuXHRcdFx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgaXBEZXRhaWxzIFxuXHRcdFx0XHRcdG1hcmt1cC5pcERldGFpbHNJdGVtKEBtYXJrdXBBcmdzIHtsYWJlbCx2YWx1ZX0pXG5cblx0XHRcdFx0Y29udGVudCQuaHRtbCBvdXRwdXQuam9pbignJylcblx0XHRcdFx0d3JhcHBlciQuYWRkQ2xhc3MgJ19pc1JlYWR5J1xuXG5cblxuXHRQcm9taXNlLnJlc29sdmUoKVxuXG5cbiIsIkRhdGFUYWJsZTo6YXR0YWNoQmluZGluZ3MgPSAoKS0+XG5cdFNpbXBseUJpbmQuc2V0dGluZ3MudHJhY2tBcnJheUNoaWxkcmVuID0gZmFsc2Vcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU3RhdGVcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ25vUmVzdWx0cycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLm5vUmVzdWx0c01lc3NhZ2UpLnRyYW5zZm9ybSAobm9SZXN1bHRzKT0+IGlmIG5vUmVzdWx0cyBhbmQgbm90IEBzdGF0ZS5sb2FkaW5nIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUubm9SZXN1bHRzJykub2YoQGVscy50YWJsZU91dGVyd3JhcCkudHJhbnNmb3JtIChub1Jlc3VsdHMpPT4gaWYgbm9SZXN1bHRzIGFuZCBub3QgQHN0YXRlLmxvYWRpbmcgdGhlbiAnX25vUmVzdWx0cycgZWxzZSAnJ1xuXHRcblx0U2ltcGx5QmluZCgnbG9hZGluZycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLmxvYWRpbmdNZXNzYWdlKS50cmFuc2Zvcm0gKGxvYWRpbmcpLT4gaWYgbG9hZGluZyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmxvYWRpbmcnKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGxvYWRpbmcpPT4gaWYgbG9hZGluZyB0aGVuICdfbG9hZGluZycgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGxvYWRpbmcpPT5cblx0XHRcdGlmIGxvYWRpbmdcblx0XHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9IGZhbHNlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhQHZpc2libGVSb3dzLmxlbmd0aFxuXG5cdFNpbXBseUJpbmQoJ2Vycm9yJykub2YoQHN0YXRlKVxuXHRcdC50bygndGV4dENvbnRlbnQuZXJyb3JNZXNzYWdlJykub2YoQGVscy5lcnJvck1lc3NhZ2UpXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMuZXJyb3JNZXNzYWdlKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaGFzRXJyb3InKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ19lcnJvcicgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGVyciktPiBjb25zb2xlLmVycm9yKGVycikgaWYgZXJyXG5cdFxuXG5cdGlmIEBvcHRpb25zLmhhc01vYmlsZVxuXHRcdEB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XG5cdFx0U2ltcGx5QmluZCgnZXZlbnQ6cmVzaXplJykub2Yod2luZG93KVxuXHRcdFx0LnRvICgpPT4gQHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdFNpbXBseUJpbmQoJ3dpbmRvd1dpZHRoJykub2YoQClcblx0XHRcdC50bygnY2xhc3NOYW1lLm1vYmlsZVZlcnNpb24nKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdFx0XHQudHJhbnNmb3JtICh3aW5kb3dXaWR0aCk9PiBpZiB3aW5kb3dXaWR0aCA8PSBAb3B0aW9ucy5tb2JpbGVXaWR0aCB0aGVuICdfbW9iaWxlVmVyc2lvbicgZWxzZSAnJ1xuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgQ29sdW1uIHZpc2liaWxpdHlcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGZvciBsLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHRoZW4gZG8gKGNvbHVtbik9PlxuXHRcdFNpbXBseUJpbmQoJ2hpZGRlbicpLm9mKGNvbHVtbilcblx0XHRcdC50byhcImlubmVySFRNTC4je2NvbHVtbi5zbHVnfVwiKS5vZihAZWxzLmdsb2JhbFN0eWxlcylcblx0XHRcdFx0LnRyYW5zZm9ybSAoaXNIaWRkZW4pPT4gaWYgaXNIaWRkZW4gdGhlbiBcIiN7QHRhYmxlSUR9IC5fXyN7Y29sdW1uLnNsdWd9IHtkaXNwbGF5Om5vbmV9XCIgZWxzZSAnJ1xuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFJvd3MgYXJyYXkgcmVuZGVyaW5nL3Byb2Nlc3Npbmdcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ2FycmF5OnZpc2libGVSb3dzJykub2YoQClcblx0XHQudG8gKHJvd3MsIHByZXZSb3dzKT0+XG5cdFx0XHRpZiBwcmV2Um93cz8ubGVuZ3RoXG5cdFx0XHRcdGZvciByb3cgaW4gcHJldlJvd3Ncblx0XHRcdFx0XHRyb3cudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcblx0XHRcdHRyeVxuXHRcdFx0XHRmb3Igcm93IGluIHJvd3Ncblx0XHRcdFx0XHRAcHJvY2Vzc1Jvdyhyb3cpXG5cdFx0XHRcdFx0cm93LnZpc2libGUgPSB0cnVlXG5cdFx0XHRjYXRjaCBlcnJcblx0XHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cdFx0XHRcblx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhcm93cy5sZW5ndGhcblx0XHRcblx0XHQuYW5kLnRvIChyb3dzKT0+XG5cdFx0XHRyZXR1cm4gaWYgbm90IEBoYXNCcmVha2Rvd25CYXJcblx0XHRcdGZvciByb3cgaW4gcm93c1xuXHRcdFx0XHRpZiByb3cuYnJlYWtkb3duQmFyVG90YWwgPiBsYXJnZXN0QnJlYWtkb3duVG90YWwgb3Igbm90IGxhcmdlc3RCcmVha2Rvd25Ub3RhbD9cblx0XHRcdFx0XHRsYXJnZXN0QnJlYWtkb3duVG90YWwgPSByb3cuYnJlYWtkb3duQmFyVG90YWxcblxuXHRcdFx0QGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IGxhcmdlc3RCcmVha2Rvd25Ub3RhbCBvciAwXG5cblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC5yb3dSYW5nZScpLm9mKEBlbHMucGFnZVN0YXR1cylcblx0XHRcdC50cmFuc2Zvcm0gKHJvd3MpPT4gXCIje0BhdmFpbGFibGVSb3dzLmluZGV4T2Yocm93c1swXSkrMX0tI3tAYXZhaWxhYmxlUm93cy5pbmRleE9mKHJvd3Muc2xpY2UoLTEpWzBdKSsxfVwiXG5cblxuXHRTaW1wbHlCaW5kKCdhcnJheTphbGxSb3dzJykub2YoQCkudG8gKHJvd3MpPT5cblx0XHRAc2VhcmNoQ3JpdGVyaWEgPSAnJ1xuXHRcdEBjdXJyZW50UGFnZSA9IDFcblx0XHRAc3RhdGUubm9SZXN1bHRzID0gIXJvd3MubGVuZ3RoXG5cdFx0aWYgQHNvcnRCeSBpcyBAb3B0aW9ucy5zb3J0Qnlcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXHRcdFx0QHNvcnRCeSA9IEBvcHRpb25zLnNvcnRCeVxuXHRcdGVsc2Vcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXG5cblxuXHRTaW1wbHlCaW5kKCdhdmFpbGFibGVSb3dzJywge3VwZGF0ZU9uQmluZDpmYWxzZSwgdXBkYXRlRXZlbklmU2FtZTp0cnVlfSkub2YoQClcblx0XHQudG8gKHJvd3MpPT4gQGNhbGNQYWdlQ291bnQocm93cylcblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC50b3RhbFJvd3MnKS5vZihAZWxzLnBhZ2VTdGF0dXMpLnRyYW5zZm9ybSAocm93cyktPiByb3dzLmxlbmd0aFxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBQYWdpbmF0aW9uXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdwYWdlQ291bnQnKS5vZihAKVxuXHRcdC50bygnaW5uZXJIVE1MJykub2YoQGVscy5wYWdpbmF0aW9uSXRlbXMpICMgUmVuZGVyIHBhZ2luYXRpb25cblx0XHRcdC50cmFuc2Zvcm0gKGNvdW50KT0+XG5cdFx0XHRcdHBhZ2luYXRpb25JdGVtcyA9ICcnXG5cdFx0XHRcdGZvciB2YWx1ZSBpbiBbMS4uY291bnRdXG5cdFx0XHRcdFx0cGFnaW5hdGlvbkl0ZW1zICs9IG1hcmt1cC5wYWdpbmF0aW9uSXRlbShAbWFya3VwQXJncyB7dmFsdWV9KSB1bmxlc3MgdmFsdWUgaXMgMFxuXG5cdFx0XHRcdHJldHVybiBwYWdpbmF0aW9uSXRlbXNcblxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLnBhZ2luYXRpb24pLnRyYW5zZm9ybSAoY291bnQpLT4gaWYgY291bnQgPiAxIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XG5cblx0U2ltcGx5QmluZCgncGFnZUNvdW50UmVhbCcpLm9mKEApXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHRcdC50cmFuc2Zvcm0gKHJlYWxDb3VudCk9PlxuXHRcdFx0XHRpZiByZWFsQ291bnQgPD0gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJydcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG9wdGlvbnMgPSAnPG9wdGlvbj4uLi48L29wdGlvbj4nXG5cdFx0XHRcdFx0b3B0aW9ucyArPSBcIjxvcHRpb24+I3tpbmRleH08L29wdGlvbj5cIiBmb3IgaW5kZXggaW4gWyhAb3B0aW9ucy5wYWdlQ291bnRNYXgrMSkuLnJlYWxDb3VudF1cblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1xuXHRcdFxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5oYXNFeHRyYScpLm9mKEBlbHMucGFnaW5hdGlvbikudHJhbnNmb3JtIChyZWFsQ291bnQpPT4gaWYgcmVhbENvdW50ID4gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJ2hhc19leHRyYScgZWxzZSAnJ1xuXG5cblxuXHQjID09PT0gRXh0cmEgSW5kaWNhdG9yL1BhZ2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScsIHVwZGF0ZU9uQmluZDpmYWxzZSkub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQpXG5cdFx0LmFuZC50bygnY3VycmVudFBhZ2UnKS5vZihAKVxuXG5cblxuXG5cdCMgPT09PSBDdXJyZW50IFBhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ2N1cnJlbnRQYWdlJywgdXBkYXRlRXZlbklmU2FtZTp0cnVlKS5vZihAKVxuXHRcdC50cmFuc2Zvcm1TZWxmIChjdXJyZW50UGFnZSk9PlxuXHRcdFx0Y3VycmVudFBhZ2UgPSBpZiBjdXJyZW50UGFnZSBpcyAnLi4uJyB0aGVuIDEgZWxzZSBwYXJzZUZsb2F0KGN1cnJlbnRQYWdlKVxuXHRcdFx0cmV0dXJuIGlmIGN1cnJlbnRQYWdlID4gQHBhZ2VDb3VudFJlYWwgdGhlbiBAcGFnZUNvdW50UmVhbCBlbHNlIGN1cnJlbnRQYWdlXG5cdFx0XG5cdFx0LnRvKCd2YWx1ZScpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdFx0LnRyYW5zZm9ybSAoY3VycmVudFBhZ2UpPT4gaWYgY3VycmVudFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBjdXJyZW50UGFnZSBlbHNlICcuLi4nXG5cdFx0XG5cdFx0LmFuZC50byAoY3VycmVudFBhZ2UpPT5cblx0XHRcdEBzZXRWaXNpYmxlUGFnZShjdXJyZW50UGFnZSlcblx0XHRcdEBzZXRQYWdlSW5kaWNhdG9yKGN1cnJlbnRQYWdlKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU2VhcmNoIEZpZWxkXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRcblx0IyA9PT09IFNlYXJjaCBGaWVsZCB2YWx1ZS9tYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGlmIEBvcHRpb25zLnNlYXJjaC5sZW5ndGhcblx0XHRAc2VhcmNoUGFyYW0gPSBAb3B0aW9ucy5zZWFyY2hbMF1cblxuXHRcdFNpbXBseUJpbmQoJ3NlYXJjaCcpLm9mKEBvcHRpb25zKVxuXHRcdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnNlYXJjaFBhcmFtKVxuXHRcdFx0XHQudHJhbnNmb3JtIChvcHRpb25zKS0+IG9wdGlvbnMubWFwKChvcHRpb24pLT5cIjxvcHRpb24+I3tvcHRpb259PC9vcHRpb24+XCIpLmpvaW4oJycpXG5cblx0XHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoUGFyYW0pXG5cdFx0XHQudG8oJ3NlYXJjaFBhcmFtJykub2YoQClcblx0XHRcdFx0LnBpcGUoJ2F0dHI6cGxhY2Vob2xkZXInKS5vZihAZWxzLnNlYXJjaENyaXRlcmlhKVxuXHRcdFx0XHRcdC50cmFuc2Zvcm0gKG9wdGlvbiktPiBcIkZpbHRlciBieSAje29wdGlvbn1cIlxuXG5cblxuXHQjID09PT0gVGFibGUgcmVzdWx0cyBmaWx0ZXIgJiBhdmFpYWJsZSByb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoQ3JpdGVyaWEpICMgU2VhcmNoL0ZpbHRlclxuXHRcdC50bygnc2VhcmNoQ3JpdGVyaWEnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKEApLmJvdGhXYXlzKClcblx0XHRcdC5jaGFpblRvIChzZWFyY2hDcml0ZXJpYSk9PlxuXHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gQGFsbFJvd3Ncblx0XHRcdFx0dGFyZ2V0Q29sdW1uID0gQG9wdGlvbnMuY29sdW1uc1tAc2VhcmNoUGFyYW1dXG5cblx0XHRcdFx0aWYgc2VhcmNoQ3JpdGVyaWEgYW5kICh0YXJnZXRDb2x1bW4gb3IgQGFsbFJvd3NbMF0/W0BzZWFyY2hQYXJhbV0/KVxuXHRcdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSByb3dzVG9NYWtlQXZhaWxhYmxlLmZpbHRlciAocm93KT0+XG5cdFx0XHRcdFx0XHRyb3dWYWx1ZSA9IGlmIHRhcmdldENvbHVtbj8ucmF3VmFsdWVGb3JtYXR0ZXIgdGhlbiB0YXJnZXRDb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93W0BzZWFyY2hQYXJhbV0pIGVsc2Ugcm93W0BzZWFyY2hQYXJhbV1cblx0XHRcdFx0XHRcdHJldHVybiByb3dWYWx1ZT8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzIHNlYXJjaENyaXRlcmlhLnRvTG93ZXJDYXNlKClcblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5yb3dGaWx0ZXJcblx0XHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gcm93c1RvTWFrZUF2YWlsYWJsZS5maWx0ZXIgKHJvdyk9PlxuXHRcdFx0XHRcdFx0cm93Q2xvbmUgPSBleHRlbmQuY2xvbmUocm93KVxuXHRcdFx0XHRcdFx0cm93Q2xvbmVbbmFtZV0gPSBjb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93Q2xvbmVbbmFtZV0pIGZvciBuYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHdoZW4gY29sdW1uLnJhd1ZhbHVlRm9ybWF0dGVyXG5cdFx0XHRcdFx0XHRyZXR1cm4gQG9wdGlvbnMucm93RmlsdGVyKHJvd0Nsb25lKVxuXHRcdFx0XHRcblx0XHRcdFx0QGF2YWlsYWJsZVJvd3MgPSByb3dzVG9NYWtlQXZhaWxhYmxlXG5cdFx0XHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU29ydGluZ1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnc29ydEJ5Jywge3VwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSwgdXBkYXRlT25CaW5kOmZhbHNlfSwgdHJ1ZSkub2YoQClcblx0XHQudG8gKGN1cnJlbnRTb3J0LCBwcmV2U29ydCk9PiBpZiBjdXJyZW50U29ydCBvciBwcmV2U29ydFxuXHRcdFx0aWYgY3VycmVudFNvcnQgaXMgcHJldlNvcnQgYW5kIHByZXZTb3J0XG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uICo9IC0xXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblxuXHRcdFx0dGFyZ2V0Q29sdW1uID0gaWYgY3VycmVudFNvcnQgdGhlbiBjdXJyZW50U29ydCBlbHNlIG51bGxcblx0XHRcdEBhdmFpbGFibGVSb3dzID0gQHNvcnRSb3dzKEBhdmFpbGFibGVSb3dzLCB0YXJnZXRDb2x1bW4pXG5cdFx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblx0XG5cdGlmIEBlbHMudGFibGVIZWFkaW5nLmNoaWxkcmVuKCcuX2lzU29ydGFibGUnKS5sZW5ndGhcblx0XHRTaW1wbHlCaW5kKCdzb3J0QnknLCB1cGRhdGVPbkJpbmQ6dHJ1ZSkub2YoQClcblx0XHRcdC50bygnbXVsdGk6Y2xhc3NOYW1lLmN1cnJlbnRTb3J0Jykub2YoQGVscy50YWJsZUhlYWRpbmcuY2hpbGRyZW4oJy5faXNTb3J0YWJsZScpKVxuXHRcdFx0XHQudHJhbnNmb3JtIChjdXJyZW50LCBwcmV2LCBlbCktPiBpZiBjdXJyZW50IGlzIGVsLmNoaWxkcmVuWzBdLnRleHRDb250ZW50IHRoZW4gJ19jdXJyZW50U29ydCcgZWxzZSAnJ1xuXG5cblxuXG5cdFNpbXBseUJpbmQoJ3NvcnREaXJlY3Rpb24nKS5vZihAKVxuXHRcdC50bygnY2xhc3NOYW1lLnNvcnREaXJlY3Rpb24nKS5vZihAZWxzLnRhYmxlKVxuXHRcdFx0LnRyYW5zZm9ybSAoc29ydERpcmVjdGlvbiktPiBpZiBzb3J0RGlyZWN0aW9uIGlzIC0xIHRoZW4gJ2Rlc2MnIGVsc2UgJ2FzYydcblxuXG5cblxuXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cbiIsIkRhdGFUYWJsZTo6c29ydEJ5ID0gKGNvbHVtbiktPiIsIntcbiAgXCJuYW1lXCI6IFwiQGRhbmllbGthbGVuL2RhdGFfdGFibGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi45LjZcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRpbnkgbGlicmFyeSBmb3IgZGlzcGxheWluZyBkYXRhYmFzZS1mZXRjaGVkIGRhdGEgaW4gYW4gSFRNTCB0YWJsZSB3aXRoIGZyb250LWVuZCBwYWdpbmF0aW9uXCIsXG4gIFwibWFpblwiOiBcImRpc3QvanMvZGF0YV90YWJsZS5qc1wiLFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3QvanMvZGF0YV90YWJsZS5kZWJ1Zy5qc1wiLFxuICAgIFwiLi9kaXN0L2pzL2RhdGFfdGFibGUuanNcIjogXCJzcmMvY29mZmVlL2luZGV4LmNvZmZlZVwiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwic2ltcGx5aW1wb3J0XCI6IHtcbiAgICBcImZpbmFsVHJhbnNmb3JtXCI6IFtcbiAgICAgIFtcbiAgICAgICAgXCJiYWJlbGlmeVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJwcmVzZXRzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBkYW5pZWxrYWxlbi9zYXNzLWJhc2VcIjogXCJeMS41LjJcIixcbiAgICBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCI6IFwiXjEuMTUuOFwiLFxuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy41LjBcIixcbiAgICBcImVzY2FwZS1odG1sXCI6IFwiXjEuMC4zXCIsXG4gICAgXCJldmVudC1saXRlXCI6IFwiXjAuMS4xXCIsXG4gICAgXCJzbWFydC1leHRlbmRcIjogXCJeMS43LjNcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjIuMFwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy4yLjBcIixcbiAgICBcImJhYmVsaWZ5XCI6IFwiXjEwLjAuMFwiLFxuICAgIFwiY2hhbGtcIjogXCJeMi4wLjFcIixcbiAgICBcImNvZmZlZS1zY3JpcHRcIjogXCJeMS4xMi42XCIsXG4gICAgXCJmcy1qZXRwYWNrXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJub2RlLXNhc3NcIjogXCJeNC41LjNcIixcbiAgICBcInByb21pc2UtYnJlYWtcIjogXCJeMC4xLjFcIixcbiAgICBcInNhc3MtbW9kdWxlLWltcG9ydGVyXCI6IFwiZ2l0aHViOmRhbmllbGthbGVuL3Nhc3MtbW9kdWxlLWltcG9ydGVyXCIsXG4gICAgXCJzaW1wbHlpbXBvcnRcIjogXCJeNC4wLjEwXCIsXG4gICAgXCJzaW1wbHl3YXRjaFwiOiBcIl4zLjAuMC1sNVwiXG4gIH0sXG4gIFwic2Fzc0Zuc1wiOiBcIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2Fzcy1iYXNlL2NvbXBpbGVyLWZucy5qc1wiLFxuICBcInNhc3NJbXBvcnRlclwiOiBcIm5vZGVfbW9kdWxlcy9zYXNzLW1vZHVsZS1pbXBvcnRlci9saWIvaW5kZXguanNcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInBvc3R2ZXJzaW9uXCI6IFwibnBtIHJ1biBidWlsZCAmJiBnaXQgYWRkIC4gJiYgZ2l0IGNvbW1pdCAtYSAtbSAnW0J1aWxkXSdcIixcbiAgICBcInBvc3RwdWJsaXNoXCI6IFwiZ2l0IHB1c2hcIixcbiAgICBcImJ1aWxkXCI6IFwiY2FrZSBpbnN0YWxsOmJ1aWxkOyBjYWtlIC1kIGJ1aWxkICYmIGNha2UgYnVpbGQgJiYgY3AgLXIgYnVpbGQvKiBkaXN0L1wiLFxuICAgIFwiY29tcGlsZVwiOiBcImNha2UgLWQgYnVpbGRcIixcbiAgICBcIndhdGNoXCI6IFwiY2FrZSBpbnN0YWxsOyBjYWtlIC1kIHdhdGNoXCIsXG4gICAgXCJ3YXRjaDpqc1wiOiBcInNpbXBseXdhdGNoICdzcmMvY29mZmVlLyouY29mZmVlJyAtZSAnY29mZmVlJyAteCAnbnBtIHJ1biBjb21waWxlOmpzOmRlYnVnIC1zJ1wiLFxuICAgIFwid2F0Y2g6c2Fzc1wiOiBcImZvbnRzRGlyPWRpc3QvZm9udHMgc2ltcGx5d2F0Y2ggJ3NyYy9zYXNzLyouc2FzcycgLWUgJ3Nhc3MnIC14ICducG0gcnVuIGNvbXBpbGU6c2FzczpkZWJ1ZyAtcydcIixcbiAgICBcInRha2FuYVwiOiBcImZvbnRzRGlyPWRpc3QvZm9udHMgdGFrYW5hIC1mICQocHdkKS8kbnBtX3BhY2thZ2Vfc2Fzc0ZucyAkKHB3ZCkvc3JjL3Nhc3NcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9kYXRhX3RhYmxlLmdpdFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IFwiRGFuaWVsIEthbGVuXCIsXG4gIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL2RhdGFfdGFibGUvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9kYXRhX3RhYmxlI3JlYWRtZVwiXG59XG4iLCJjdXJyZW50SUQgPSAwXG5hcnJheU11dGF0b3JNZXRob2RzID0gWydwdXNoJywncG9wJywnc2hpZnQnLCd1bnNoaWZ0Jywnc3BsaWNlJywncmV2ZXJzZScsJ3NvcnQnXVxuZHVtbXlQcm9wZXJ0eURlc2NyaXB0b3IgPSB7fVxuYm91bmRJbnN0YW5jZXMgPSB7fVxucGxhY2Vob2xkZXIgPSBbJ3t7JywgJ319J11cbnNldHRpbmdzID0gT2JqZWN0LmNyZWF0ZVxuXHRzaWxlbnQ6XHRcdFx0XHRcdGZhbHNlXG4sXG5cdHBsYWNlaG9sZGVyOlxuXHRcdGdldDogKCktPiBwbGFjZWhvbGRlclxuXHRcdHNldDogKG5ld1BsYWNlaG9sZGVyKS0+IGlmIGNoZWNrSWYuaXNBcnJheShuZXdQbGFjZWhvbGRlcikgYW5kIG5ld1BsYWNlaG9sZGVyLmxlbmd0aCBpcyAyXG5cdFx0XHRwbGFjZWhvbGRlciA9IG5ld1BsYWNlaG9sZGVyXG5cdFx0XHRzZXRQaG9sZGVyUmVnRXgoKVxuXHRcdFx0cmV0dXJuXG5cblxuZGVmYXVsdE9wdGlvbnMgPSBcblx0ZGVsYXk6XHRcdFx0XHRcdGZhbHNlXG5cdHRocm90dGxlOlx0XHRcdFx0ZmFsc2Vcblx0c2ltcGxlU2VsZWN0b3I6XHRcdFx0ZmFsc2Vcblx0cHJvbWlzZVRyYW5zZm9ybXM6XHRcdGZhbHNlXG5cdGRpc3BhdGNoRXZlbnRzOlx0XHRcdGZhbHNlXG5cdHNlbmRBcnJheUNvcGllczpcdFx0ZmFsc2Vcblx0dXBkYXRlRXZlbklmU2FtZTpcdFx0ZmFsc2Vcblx0dXBkYXRlT25CaW5kOlx0XHRcdHRydWVcblxuXG5pbXBvcnQgJy4vbWlzYydcbmltcG9ydCAnLi9TaW1wbHlCaW5kJ1xuaW1wb3J0ICcuL0JpbmRpbmcnXG5pbXBvcnQgJy4vQmluZGluZ0ludGVyZmFjZSdcbmltcG9ydCAnLi9Hcm91cEJpbmRpbmcnXG5cbm1vZHVsZS5leHBvcnRzID0gU2ltcGx5QmluZCIsImltcG9ydCAnLi9oZWxwZXJzJ1xuaW1wb3J0ICcuL2Vycm9yc0FuZFdhcm5pbmdzJ1xuIiwiZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbmdldERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG5cbmltcG9ydCAnLi9jaGFuZ2VFdmVudCdcbmltcG9ydCAnLi9yZXF1aXJlc0RvbURlc2NyaXB0b3JGaXgnXG5pbXBvcnQgJy4vd2luZG93UHJvcHNUb0lnbm9yZSdcblxuXG5zZXRWYWx1ZU5vb3AgPSAodiwgcHVibGlzaGVyKS0+IEB1cGRhdGVBbGxTdWJzKHB1Ymxpc2hlciBvciBAKVxuXG5nZW5JRCA9ICgpLT4gJycrKCsrY3VycmVudElEKVxuXG5nZW5PYmogPSAoKS0+IE9iamVjdC5jcmVhdGUobnVsbClcblxuZ2VuUHJveGllZEludGVyZmFjZSA9IChpc1N1YiwgY29tcGxldGVDYWxsYmFjayktPiAoc3ViamVjdCwgY3VzdG9tT3B0aW9ucywgc2F2ZU9wdGlvbnMpLT5cblx0U2ltcGx5QmluZChzdWJqZWN0LCBjdXN0b21PcHRpb25zLCBzYXZlT3B0aW9ucywgaXNTdWIsIGNvbXBsZXRlQ2FsbGJhY2spXG5cbmdlblNlbGZVcGRhdGVyID0gKGJpbmRpbmcsIGZldGNoVmFsdWUpLT5cblx0YmluZGluZy5zZWxmVXBkYXRlciBvclxuXHRiaW5kaW5nLnNlbGZVcGRhdGVyID0gbmV3IEJpbmRpbmcgKCktPlxuXHRcdGlmIGZldGNoVmFsdWUgdGhlbiBiaW5kaW5nLnNldFZhbHVlKGJpbmRpbmcuZmV0Y2hEaXJlY3RWYWx1ZSgpLCBiaW5kaW5nLCB0cnVlKSBlbHNlIGJpbmRpbmcudXBkYXRlQWxsU3VicyhiaW5kaW5nKVxuXHQsICdGdW5jJywge31cblxuXG4jID09PT0gQ2hlY2tzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2NoZWNrcydcblxuXG4jID09PT0gRGVzY3JpcHRvciBNb2RpZmljYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgJy4vZGVzY3JpcHRvci1tb2QnXG5cblxuIyA9PT09IE9iamVjdCBjbG9uaW5nID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2Nsb25pbmcnXG5cblxuIyA9PT09IEJpbmRpbmcgQ2FjaGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgJy4vY2FjaGUnXG5cblxuIyA9PT09IFBsYWNlaG9sZGVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi9wbGFjZWhvbGRlcnMnXG5cblxuIyA9PT09IEVycm9ycyArIFdhcm5pbmdzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2Vycm9ycydcblxuXG5cblxuXG5cblxuIiwiY2FjaGVkRXZlbnQgPSBudWxsXG5cbmNoYW5nZUV2ZW50ID0gKCktPlxuXHRpZiBub3QgY2FjaGVkRXZlbnRcblx0XHRldmVudCA9IGNhY2hlZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jylcblx0XHRldmVudC5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIGZhbHNlKVxuXHRcdGV2ZW50Ll9zYiA9IHRydWVcblxuXHRyZXR1cm4gY2FjaGVkRXZlbnQiLCJyZXF1aXJlc0RvbURlc2NyaXB0b3JGaXggPSAoJ2NsYXNzTmFtZScgbm90IG9mIEVsZW1lbnQ6Oikgb3Igbm90IGdldERlc2NyaXB0b3IoRWxlbWVudDo6LCAnY2xhc3NOYW1lJykuZ2V0Iiwid2luZG93UHJvcHNUb0lnbm9yZSA9IFtcblx0J2lubmVyV2lkdGgnXG5cdCdpbm5lckhlaWdodCdcblx0J291dGVyV2lkdGgnXG5cdCdvdXRlckhlaWdodCdcblx0J3Njcm9sbFgnXG5cdCdzY3JvbGxZJ1xuXHQncGFnZVhPZmZzZXQnXG5cdCdwYWdlWU9mZnNldCdcblx0J3NjcmVlblgnXG5cdCdzY3JlZW5ZJ1xuXHQnc2NyZWVuTGVmdCdcblx0J3NjcmVlblRvcCdcbl0iLCJ0YXJnZXRJbmNsdWRlcyA9ICh0YXJnZXQsIGl0ZW0pLT4gdGFyZ2V0IGFuZCB0YXJnZXQuaW5kZXhPZihpdGVtKSBpc250IC0xXG5cbmNoZWNrSWYgPVxuXHRpc0RlZmluZWQ6IChzdWJqZWN0KS0+IHN1YmplY3QgaXNudCB1bmRlZmluZWRcblx0XG5cdGlzQXJyYXk6IChzdWJqZWN0KS0+IHN1YmplY3QgaW5zdGFuY2VvZiBBcnJheVxuXHRcblx0aXNPYmplY3Q6IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdvYmplY3QnIGFuZCBzdWJqZWN0ICMgMm5kIGNoZWNrIGlzIHRvIHRlc3QgYWdhaW5zdCAnbnVsbCcgdmFsdWVzXG5cblx0aXNTdHJpbmc6IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdzdHJpbmcnXG5cdFxuXHRpc051bWJlcjogKHN1YmplY3QpLT4gdHlwZW9mIHN1YmplY3QgaXMgJ251bWJlcidcblx0XG5cdGlzRnVuY3Rpb246IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdmdW5jdGlvbidcblxuXHRpc0JpbmRpbmdJbnRlcmZhY2U6IChzdWJqZWN0KS0+IHN1YmplY3QgaW5zdGFuY2VvZiBCaW5kaW5nSW50ZXJmYWNlXG5cdFxuXHRpc0JpbmRpbmc6IChzdWJqZWN0KS0+IHN1YmplY3QgaW5zdGFuY2VvZiBCaW5kaW5nXG5cblx0aXNJdGVyYWJsZTogKHN1YmplY3QpLT4gY2hlY2tJZi5pc09iamVjdChzdWJqZWN0KSBhbmQgY2hlY2tJZi5pc051bWJlcihzdWJqZWN0Lmxlbmd0aClcblxuXHRpc0RvbTogKHN1YmplY3QpLT4gc3ViamVjdC5ub2RlTmFtZSBhbmQgc3ViamVjdC5ub2RlVHlwZSBpcyAxXG5cblx0aXNEb21JbnB1dDogKHN1YmplY3QpLT5cblx0XHRub2RlTmFtZSA9IHN1YmplY3Qubm9kZU5hbWVcblx0XHRyZXR1cm4gbm9kZU5hbWUgaXMgJ0lOUFVUJyBvciBub2RlTmFtZSBpcyAnVEVYVEFSRUEnIG9yIG5vZGVOYW1lIGlzICdTRUxFQ1QnXG5cblx0aXNEb21SYWRpbzogKHN1YmplY3QpLT4gc3ViamVjdC50eXBlIGlzICdyYWRpbydcblxuXHRpc0RvbUNoZWNrYm94OiAoc3ViamVjdCktPiBzdWJqZWN0LnR5cGUgaXMgJ2NoZWNrYm94J1xuXG5cdGlzRWxDb2xsZWN0aW9uOiAoc3ViamVjdCktPiAoc3ViamVjdCBpbnN0YW5jZW9mIE5vZGVMaXN0KSBvciAoc3ViamVjdCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSBvciAod2luZG93LmpRdWVyeSBhbmQgc3ViamVjdCBpbnN0YW5jZW9mIGpRdWVyeSlcblxuXHRkb21FbHNBcmVTYW1lOiAoaXRlcmFibGUpLT5cblx0XHR0eXBlID0gaXRlcmFibGVbMF0udHlwZVxuXHRcdGl0ZW1zV2l0aFNhbWVUeXBlID0gW10uZmlsdGVyLmNhbGwgaXRlcmFibGUsIChpdGVtKS0+IGl0ZW0udHlwZSBpcyB0eXBlXG5cblx0XHRyZXR1cm4gaXRlbXNXaXRoU2FtZVR5cGUubGVuZ3RoIGlzIGl0ZXJhYmxlLmxlbmd0aFxuXG5cdGlzRG9tTm9kZTogKHN1YmplY3QpLT4gY2hlY2tJZi5pc0RvbShzdWJqZWN0KSBvciBzdWJqZWN0IGlzIHdpbmRvdyBvciBzdWJqZWN0IGlzIGRvY3VtZW50IiwiZmV0Y2hEZXNjcmlwdG9yID0gKG9iamVjdCwgcHJvcGVydHksIGlzUHJvdG8pLT5cblx0ZGVzY3JpcHRvciA9IGdldERlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSlcblx0aWYgZGVzY3JpcHRvclxuXHRcdGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZSBpZiBpc1Byb3RvXG5cdFx0cmV0dXJuIGRlc2NyaXB0b3Jcblx0XG5cdGVsc2UgaWYgb2JqZWN0UHJvdG89T2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdClcblx0XHRyZXR1cm4gZmV0Y2hEZXNjcmlwdG9yKG9iamVjdFByb3RvLCBwcm9wZXJ0eSwgdHJ1ZSlcblxuXG5jb252ZXJ0VG9MaXZlID0gKGJpbmRpbmdJbnN0YW5jZSwgb2JqZWN0LCBvbmx5QXJyYXlNZXRob2RzKS0+XG5cdF8gPSBiaW5kaW5nSW5zdGFuY2Vcblx0Xy5vcmlnRGVzY3JpcHRvciA9IGZldGNoRGVzY3JpcHRvcihvYmplY3QsIF8ucHJvcGVydHkpIGlmIG5vdCBfLm9yaWdEZXNjcmlwdG9yXG5cblx0aWYgb25seUFycmF5TWV0aG9kc1xuXHRcdGFycmF5TXV0YXRvck1ldGhvZHMuZm9yRWFjaCAobWV0aG9kKS0+ICMgVXNpbmcgZm9yRWFjaCBiZWNhdXNlIHdlIG5lZWQgYSBjbG9zdXJlIGhlcmVcblx0XHRcdGRlZmluZVByb3BlcnR5IG9iamVjdCwgbWV0aG9kLCBcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdHZhbHVlOiAoKS0+XG5cdFx0XHRcdFx0cmVzdWx0ID0gQXJyYXk6OlttZXRob2RdLmFwcGx5IG9iamVjdCwgYXJndW1lbnRzXG5cdFx0XHRcdFx0Xy51cGRhdGVBbGxTdWJzKF8pXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdFxuXG5cdGVsc2Vcblx0XHRpZiBfLnR5cGUgaXMgJ1Byb3h5J1xuXHRcdFx0b3JpZ0ZuID0gXy5vcmlnRm4gPSBfLnZhbHVlXG5cdFx0XHRjb250ZXh0ID0gb2JqZWN0XG5cdFx0XHRfLnZhbHVlID0gcmVzdWx0Om51bGwsIGFyZ3M6bnVsbFxuXG5cdFx0XHRpZiBjaGVja0lmLmlzRnVuY3Rpb24ob3JpZ0ZuKVxuXHRcdFx0XHRzbGljZSA9IFtdLnNsaWNlXG5cdFx0XHRcdGdldHRlclZhbHVlID0gcHJveHlGbiA9ICgpLT4gXG5cdFx0XHRcdFx0YXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKVxuXHRcdFx0XHRcdF8udmFsdWUuYXJncyA9IGFyZ3MgPSBpZiBfLnNlbGZUcmFuc2Zvcm0gdGhlbiBfLnNlbGZUcmFuc2Zvcm0oYXJncykgZWxzZSBhcmdzXG5cdFx0XHRcdFx0Xy52YWx1ZS5yZXN1bHQgPSByZXN1bHQgPSBvcmlnRm4uYXBwbHkoY29udGV4dCwgYXJncylcblx0XHRcdFx0XHRfLnVwZGF0ZUFsbFN1YnMoXylcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0XG5cdFx0XHRcdFxuXHRcdFx0XHRkZWZpbmVQcm9wZXJ0eSBvYmplY3QsIF8ucHJvcGVydHksIFxuXHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogXy5pc0xpdmVQcm9wID0gdHJ1ZVxuXHRcdFx0XHRcdGdldDogKCktPiBnZXR0ZXJWYWx1ZVxuXHRcdFx0XHRcdHNldDogKG5ld1ZhbHVlKS0+XG5cdFx0XHRcdFx0XHRpZiBub3QgY2hlY2tJZi5pc0Z1bmN0aW9uKG5ld1ZhbHVlKVxuXHRcdFx0XHRcdFx0XHRnZXR0ZXJWYWx1ZSA9IG5ld1ZhbHVlXG5cblx0XHRcdFx0XHRcdGVsc2UgaWYgbmV3VmFsdWUgaXNudCBvcmlnRm5cblx0XHRcdFx0XHRcdFx0b3JpZ0ZuID0gXy5vcmlnRm4gPSBuZXdWYWx1ZVx0aWYgbmV3VmFsdWUgaXNudCBwcm94eUZuXG5cdFx0XHRcdFx0XHRcdGdldHRlclZhbHVlID0gcHJveHlGblx0XHRcdGlmIGdldHRlclZhbHVlIGlzbnQgcHJveHlGblxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyZXR1cm5cblxuXHRcdFx0XG5cblx0XHRlbHNlIGlmIG5vdCB0YXJnZXRJbmNsdWRlcyhfLnR5cGUsICdET00nKSBhbmQgbm90IChfLm9iamVjdCBpcyB3aW5kb3cgYW5kIHRhcmdldEluY2x1ZGVzKHdpbmRvd1Byb3BzVG9JZ25vcmUsIF8ucHJvcGVydHkpKVxuXHRcdFxuXHRcdFx0IyAnT2JqZWN0UHJvcCcgb3IgJ0FycmF5JyB0eXBlIGJpbmRpbmdzXG5cdFx0XHRwcm9wZXJ0eURlc2NyaXB0b3IgPSBfLm9yaWdEZXNjcmlwdG9yIG9yIGR1bW15UHJvcGVydHlEZXNjcmlwdG9yXG5cdFx0XHRfLm9yaWdHZXR0ZXIgPSBwcm9wZXJ0eURlc2NyaXB0b3IuZ2V0LmJpbmQob2JqZWN0KSBpZiBwcm9wZXJ0eURlc2NyaXB0b3IuZ2V0XG5cdFx0XHRfLm9yaWdTZXR0ZXIgPSBwcm9wZXJ0eURlc2NyaXB0b3Iuc2V0LmJpbmQob2JqZWN0KSBpZiBwcm9wZXJ0eURlc2NyaXB0b3Iuc2V0XG5cdFx0XHRzaG91bGRXcml0ZUxpdmVQcm9wID0gcHJvcGVydHlEZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZVxuXG5cdFx0XHRzaG91bGRXcml0ZUxpdmVQcm9wID0gc2hvdWxkV3JpdGVMaXZlUHJvcCBhbmQgb2JqZWN0LmNvbnN0cnVjdG9yIGlzbnQgQ1NTU3R5bGVEZWNsYXJhdGlvblxuXHRcdFx0aW1wb3J0ICcuL3dlYmtpdERvbURlc2NyaXB0b3JGaXgnXG5cdFx0XHRcblx0XHRcdGlmIHNob3VsZFdyaXRlTGl2ZVByb3Bcblx0XHRcdFx0dHlwZUlzQXJyYXkgPSBfLnR5cGUgaXMgJ0FycmF5J1xuXHRcdFx0XHRzaG91bGRJbmRpY2F0ZVVwZGF0ZUlzRnJvbVNlbGYgPSBub3QgXy5vcmlnU2V0dGVyIGFuZCBub3QgdHlwZUlzQXJyYXlcblx0XHRcdFx0XG5cdFx0XHRcdGRlZmluZVByb3BlcnR5IG9iamVjdCwgXy5wcm9wZXJ0eSxcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IF8uaXNMaXZlUHJvcCA9IHRydWVcblx0XHRcdFx0XHRlbnVtZXJhYmxlOiBwcm9wZXJ0eURlc2NyaXB0b3IuZW51bWVyYWJsZVxuXHRcdFx0XHRcdGdldDogXy5vcmlnR2V0dGVyIG9yICgpLT4gXy52YWx1ZVxuXHRcdFx0XHRcdHNldDogKG5ld1ZhbHVlKS0+IF8uc2V0VmFsdWUobmV3VmFsdWUsIF8sIHNob3VsZEluZGljYXRlVXBkYXRlSXNGcm9tU2VsZik7IHJldHVyblxuXG5cdFx0XHRcblx0XHRcdFx0aWYgdHlwZUlzQXJyYXlcblx0XHRcdFx0XHRjb252ZXJ0VG9MaXZlKF8sIG9iamVjdFtfLnByb3BlcnR5XSwgdHJ1ZSlcblxuXHRyZXR1cm5cblxuXG5cblxuXG5jb252ZXJ0VG9SZWcgPSAoYmluZGluZ0luc3RhbmNlLCBvYmplY3QsIG9ubHlBcnJheU1ldGhvZHMpLT5cblx0aWYgb25seUFycmF5TWV0aG9kc1xuXHRcdGRlbGV0ZSBvYmplY3RbbWV0aG9kXSBmb3IgbWV0aG9kIGluIGFycmF5TXV0YXRvck1ldGhvZHNcblx0ZWxzZVxuXHRcdF8gPSBiaW5kaW5nSW5zdGFuY2Vcblx0XHRuZXdEZXNjcmlwdG9yID0gXy5vcmlnRGVzY3JpcHRvclxuXHRcdG5ld0Rlc2NyaXB0b3IudmFsdWUgPSAoXy5vcmlnRm4gb3IgXy52YWx1ZSkgdW5sZXNzIG5ld0Rlc2NyaXB0b3Iuc2V0IG9yIG5ld0Rlc2NyaXB0b3IuZ2V0XG5cdFx0ZGVmaW5lUHJvcGVydHkgb2JqZWN0LCBfLnByb3BlcnR5LCBuZXdEZXNjcmlwdG9yXG5cblxuXG4iLCIjIyMqXG4gKiBUaGVyZSBpcyBhIGJ1ZyBpbiB3ZWJraXQvYmxpbmsgZW5naW5lcyBpbiB3aGljaCBuYXRpdmUgYXR0cmlidXRlcy9wcm9wZXJ0aWVzIFxuICogb2YgRE9NIGVsZW1lbnRzIGFyZSBub3QgZXhwb3NlZCBvbiB0aGUgZWxlbWVudCdzIHByb3RvdHlwZSBhbmQgaW5zdGVhZCBpc1xuICogZXhwb3NlZCBkaXJlY3RseSBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZTsgd2hlbiBsb29raW5nIHVwIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yXG4gKiBvZiB0aGUgZWxlbWVudCBhIGRhdGEgZGVzY3JpcHRvciBpcyByZXR1cm5lZCBpbnN0ZWFkIG9mIGFuIGFjY2Vzc29yIGRlc2NyaXB0b3JcbiAqIChpLmUuIGRlc2NyaXB0b3Igd2l0aCBnZXR0ZXIvc2V0dGVyKSB3aGljaCBtZWFucyB3ZSBhcmUgbm90IGFibGUgdG8gZGVmaW5lIG91clxuICogb3duIHByb3h5IGdldHRlci9zZXR0ZXJzLiBUaGlzIHdhcyBmaXhlZCBvbmx5IGluIEFwcmlsIDIwMTUgaW4gQ2hyb21lIHY0MyBhbmRcbiAqIFNhZmFyaSB2MTAuIEFsdGhvdWdoIHdlIHdvbid0IGJlIGFibGUgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gdGhlIG9iamVjdHMgZ2V0XG4gKiB0aGVpciB2YWx1ZXMgc2V0LCB3ZSB3b3VsZCBhdCBsZWFzdCBwcm92aWRlIHdvcmtpbmcgZnVuY3Rpb25hbGl0eSBsYWNraW5nIHVwZGF0ZVxuICogbGlzdGVuZXJzLiBTaW5jZSB2MS4xNC4wIEhUTUxJbnB1dEVsZW1lbnQ6OnZhbHVlIGJpbmRpbmdzIGludm9rZSB0aGUgb3JpZ2luYWxcbiAqIGdldHRlciBhbmQgc2V0dGVyIG1ldGhvZHMgaW4gQmluZGluZzo6c2V0VmFsdWUoKSwgYW5kIHNpbmNlIHdlIHdhbnQgdG8gYXZvaWRcbiAqIGluY3JlYXNpbmcgdGhlIGFtb3VudCBvZiBsb2dpYyBwcmVzZW50IGluIEJpbmRpbmc6OnNldFZhbHVlKCkgZm9yIHBlcmZvcm1hbmNlXG4gKiByZWFzb25zLCB3ZSBwYXRjaCB0aG9zZSBzZXR0ZXJzIGhlcmUuIFdlIGNsb25lIHRoZSB0YXJnZXQgZWxlbWVudCBhbmQgY2hlY2sgZm9yXG4gKiB0aGUgZXhpc3RlbmNlIG9mIHRoZSB0YXJnZXQgcHJvcGVydHkgLSBpZiBpdCBleGlzdHMgdGhlbiBpdCBpbmRpY2F0ZXMgdGhlIHRhcmdldFxuICogcHJvcGVydHkgaXMgYSBuYXRpdmUgcHJvcGVydHkgKHNpbmNlIG9ubHkgbmF0aXZlIHByb3BlcnRpZXMgYXJlIGNvcGllZCBvdmVyIGluXG4gKiBFbGVtZW50OjpjbG9uZU5vZGUpLiBUaGlzIHBhdGNoaW5nIGlzIG9ubHkgZm9yIG5hdGl2ZSBwcm9wZXJ0aWVzLlxuICpcbiAqIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00OTczOVxuICogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTc1Mjk3XG4gKiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00MzM5NFxuICogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDMxNDkyXG4gKiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMzE3NVxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxNS8wNC9ET00tYXR0cmlidXRlcy1ub3ctb24tdGhlLXByb3RvdHlwZS1jaGFpblxuIyMjXG5cbmlmIHJlcXVpcmVzRG9tRGVzY3JpcHRvckZpeCBhbmQgXy5pc0RvbSBhbmQgXy5wcm9wZXJ0eSBvZiBvYmplY3QuY2xvbmVOb2RlKGZhbHNlKVxuXHRfLm9yaWdEZXNjcmlwdG9yID0gc2hvdWxkV3JpdGVMaXZlUHJvcCA9IGZhbHNlXG5cdF8uaXNMaXZlUHJvcCA9IHRydWVcblx0Xy5vcmlnR2V0dGVyID0gKCktPiBfLm9iamVjdFtfLnByb3BlcnR5XVxuXHRfLm9yaWdTZXR0ZXIgPSAobmV3VmFsdWUpLT4gXy5vYmplY3RbXy5wcm9wZXJ0eV0gPSBuZXdWYWx1ZSIsImNsb25lT2JqZWN0ID0gKG9iamVjdCktPlxuXHRjbG9uZSA9IGdlbk9iaigpXG5cdGNsb25lW2tleV0gPSBvYmplY3Rba2V5XSBmb3Iga2V5IG9mIG9iamVjdFxuXHRyZXR1cm4gY2xvbmVcblxuZXh0ZW5kU3RhdGUgPSAoYmFzZSwgc3RhdGVUb0luaGVyaXQpLT5cblx0c3RhdGVNYXBwaW5nID0gT2JqZWN0LmtleXMoc3RhdGVUb0luaGVyaXQpXG5cdGJhc2Vba2V5XSA9IHN0YXRlVG9Jbmhlcml0W2tleV0gZm9yIGtleSBpbiBzdGF0ZU1hcHBpbmdcblx0cmV0dXJuXG4iLCJjYWNoZSA9XHRcblx0Z2V0OiAob2JqZWN0LCBpc0Z1bmN0aW9uLCBzZWxlY3RvciwgaXNNdWx0aUNob2ljZSktPlxuXHRcdGlmIGlzRnVuY3Rpb25cblx0XHRcdHJldHVybiBib3VuZEluc3RhbmNlc1tvYmplY3QuX3NiX0lEXVxuXHRcdGVsc2Vcblx0XHRcdGlmIGlzTXVsdGlDaG9pY2UgYW5kIG9iamVjdFswXS5fc2JfbWFwXG5cdFx0XHRcdHNhbXBsZUl0ZW0gPSBib3VuZEluc3RhbmNlc1sgb2JqZWN0WzBdLl9zYl9tYXBbc2VsZWN0b3JdIF1cblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBzYW1wbGVJdGVtLmdyb3VwQmluZGluZyBpZiBzYW1wbGVJdGVtLmdyb3VwQmluZGluZ1xuXG5cdFx0XHRpZiBvYmplY3QuX3NiX21hcCBhbmQgb2JqZWN0Ll9zYl9tYXBbc2VsZWN0b3JdXG5cdFx0XHRcdHJldHVybiBib3VuZEluc3RhbmNlc1sgb2JqZWN0Ll9zYl9tYXBbc2VsZWN0b3JdIF1cblxuXG5cdHNldDogKEIsIGlzRnVuY3Rpb24pLT4gIyBCID09PT0gQmluZGluZyBPYmplY3Rcblx0XHRpZiBpc0Z1bmN0aW9uXG5cdFx0XHRkZWZpbmVQcm9wZXJ0eSBCLm9iamVjdCwgJ19zYl9JRCcsIHsnY29uZmlndXJhYmxlJzp0cnVlLCAndmFsdWUnOkIuSUR9XG5cblx0XHRlbHNlXG5cdFx0XHRzZWxlY3RvciA9IEIuc2VsZWN0b3JcblxuXHRcdFx0aWYgQi5vYmplY3QuX3NiX21hcFxuXHRcdFx0XHRCLm9iamVjdC5fc2JfbWFwW3NlbGVjdG9yXSA9IEIuSURcblx0XHRcdGVsc2Vcblx0XHRcdFx0cHJvcHNNYXAgPSB7fVxuXHRcdFx0XHRwcm9wc01hcFtzZWxlY3Rvcl0gPSBCLklEXG5cdFx0XHRcdFxuXHRcdFx0XHRkZWZpbmVQcm9wZXJ0eSBCLm9iamVjdCwgJ19zYl9tYXAnLCB7J2NvbmZpZ3VyYWJsZSc6dHJ1ZSwgJ3ZhbHVlJzpwcm9wc01hcH1cblx0XHRyZXR1cm4iLCJlc2NhcGVSZWdFeCA9IC9bLiorP14ke30oKXxbXFxdXFxcXF0vZ1xucGhvbGRlclJlZ0V4ID0gcGhvbGRlclJlZ0V4U3BsaXQgPSBudWxsXG5cbnNldFBob2xkZXJSZWdFeCA9ICgpLT5cblx0c3RhcnQgPSBzZXR0aW5ncy5wbGFjZWhvbGRlclswXS5yZXBsYWNlKGVzY2FwZVJlZ0V4LCAnXFxcXCQmJylcblx0ZW5kID0gc2V0dGluZ3MucGxhY2Vob2xkZXJbMV0ucmVwbGFjZShlc2NhcGVSZWdFeCwgJ1xcXFwkJicpXG5cdG1pZGRsZSA9IFwiW14je2VuZH1dK1wiXG5cdHBob2xkZXJSZWdFeCA9IG5ldyBSZWdFeHAoXCIje3N0YXJ0fSgje21pZGRsZX0pI3tlbmR9XCIsICdnJylcblx0cGhvbGRlclJlZ0V4U3BsaXQgPSBuZXcgUmVnRXhwKFwiI3tzdGFydH0je21pZGRsZX0je2VuZH1cIiwgJ2cnKVxuXHRyZXR1cm5cblxuc2V0UGhvbGRlclJlZ0V4KCkgIyBDcmVhdGUgdGhlIHJlZ0V4IG9uIGluaXRcblxuXG5cbmFwcGx5UGxhY2Vob2xkZXJzID0gKGNvbnRleHRzLCB2YWx1ZXMsIGluZGV4TWFwKS0+XG5cdG91dHB1dCA9ICcnXG5cdGZvciBjb250ZXh0UGFydCxpbmRleCBpbiBjb250ZXh0c1xuXHRcdG91dHB1dCArPSBjb250ZXh0UGFydFxuXHRcdG91dHB1dCArPSB2YWx1ZXNbaW5kZXhNYXBbaW5kZXhdXSBpZiBpbmRleE1hcFtpbmRleF1cblx0XG5cdHJldHVybiBvdXRwdXRcblxuXG50ZXh0Q29udGVudCA9ICd0ZXh0Q29udGVudCdcblxuYWRkVG9Ob2RlU3RvcmUgPSAobm9kZVN0b3JlLCBub2RlLCB0YXJnZXRQbGFjZWhvbGRlciktPlxuXHRub2RlU3RvcmVbdGFyZ2V0UGxhY2Vob2xkZXJdID89IFtdXG5cdG5vZGVTdG9yZVt0YXJnZXRQbGFjZWhvbGRlcl0ucHVzaChub2RlKVxuXHRyZXR1cm5cblxuXG5zY2FuVGV4dE5vZGVzUGxhY2Vob2xkZXJzID0gKGVsZW1lbnQsIG5vZGVTdG9yZSktPlxuXHRjaGlsZE5vZGVzID0gQXJyYXk6OnNsaWNlLmNhbGwoZWxlbWVudC5jaGlsZE5vZGVzKVxuXHRmb3Igbm9kZSBpbiBjaGlsZE5vZGVzXG5cdFx0aWYgbm9kZS5ub2RlVHlwZSBpc250IDMgXG5cdFx0XHRzY2FuVGV4dE5vZGVzUGxhY2Vob2xkZXJzKG5vZGUsIG5vZGVTdG9yZSlcblx0XHRcblx0XHRlbHNlIGlmIG5vZGVbdGV4dENvbnRlbnRdLm1hdGNoKHBob2xkZXJSZWdFeFNwbGl0KVxuXHRcdFx0dGV4dFBpZWNlcyA9IG5vZGVbdGV4dENvbnRlbnRdLnNwbGl0KHBob2xkZXJSZWdFeClcblxuXHRcdFx0aWYgdGV4dFBpZWNlcy5sZW5ndGggaXMgMyBhbmQgdGV4dFBpZWNlc1swXSt0ZXh0UGllY2VzWzJdIGlzICcnICMgVGhlIGVudGlyZSB0ZXh0Tm9kZSBpcyBqdXN0IHRoZSBwbGFjZWhvbGRlclxuXHRcdFx0XHRhZGRUb05vZGVTdG9yZShub2RlU3RvcmUsIG5vZGUsIHRleHRQaWVjZXNbMV0pXG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5ld0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cblx0XHRcdFx0Zm9yIHRleHRQaWVjZSxpbmRleCBpbiB0ZXh0UGllY2VzXG5cdFx0XHRcdFx0bmV3Tm9kZSA9IG5ld0ZyYWdtZW50LmFwcGVuZENoaWxkIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRQaWVjZSlcblx0XHRcdFx0XHRpZiBpbmRleCAlIDIgIyBpcyBhbiBvZGQgaW5kZXgsIGluZGljYXRpbmcgdGhhdCBiZWZvcmUgdGhpcyB0ZXh0IHBpZWNlIHNob3VsZCBjb21lIGEgcGxhY2Vob2xkZXIgbm9kZVxuXHRcdFx0XHRcdFx0YWRkVG9Ob2RlU3RvcmUobm9kZVN0b3JlLCBuZXdOb2RlLCB0ZXh0UGllY2UpXG5cblx0XHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdGcmFnbWVudCwgbm9kZSlcblxuXHRyZXR1cm5cblxuXG5cbiIsInRocm93RXJyb3IgPSAoZXJyb3JOYW1lKS0+XG5cdHRocm93IG5ldyBFcnJvciAnU2ltcGx5QmluZDogJysoZXJyb3JzW2Vycm9yTmFtZV0gb3IgZXJyb3JOYW1lKVxuXG50aHJvd1dhcm5pbmcgPSAod2FybmluZ05hbWUsIGRlcHRoKS0+IHVubGVzcyBzZXR0aW5ncy5zaWxlbnRcblx0ZXJyU291cmNlID0gZ2V0RXJyU291cmNlKGRlcHRoKVxuXHR3YXJuID0gZXJyb3JzW3dhcm5pbmdOYW1lXVxuXHR3YXJuICs9IFwiXFxuXFxuXCIrZXJyU291cmNlXG5cdGNvbnNvbGUud2FybignU2ltcGx5QmluZDogJyt3YXJuKVxuXHRyZXR1cm5cblxudGhyb3dFcnJvckJhZEFyZyA9IChhcmcpLT5cblx0dGhyb3dFcnJvciBcIkludmFsaWQgYXJndW1lbnQvcyAoI3thcmd9KVwiLCB0cnVlXG5cdHJldHVyblxuXG5nZXRFcnJTb3VyY2UgPSAoZGVwdGgpLT5cblx0KChuZXcgRXJyb3IpLnN0YWNrIG9yICcnKVxuXHRcdC5zcGxpdCgnXFxuJylcblx0XHQuc2xpY2UoZGVwdGgrMylcblx0XHQuam9pbignXFxuJylcblxuXG4iLCJlcnJvcnMgPSBcblx0aW52YWxpZFBhcmFtTmFtZTogXCJTaW1wbHlCaW5kKCkgYW5kIC50bygpIG9ubHkgYWNjZXB0IGEgZnVuY3Rpb24sIGFuIGFycmF5LCBhIGJvdW5kIG9iamVjdCwgYSBzdHJpbmcsIG9yIGEgbnVtYmVyLlwiXG5cdGZuT25seTogXCJPbmx5IGZ1bmN0aW9ucyBhcmUgYWxsb3dlZCBmb3IgLnRyYW5zZm9ybS8uY29uZGl0aW9uL0FsbCgpXCJcblx0YmFkRXZlbnRBcmc6IFwiSW52YWxpZCBhcmd1bWVudCBudW1iZXIgaW4gLm9mRXZlbnQoKVwiXG5cdGVtcHR5TGlzdDogXCJFbXB0eSBjb2xsZWN0aW9uIHByb3ZpZGVkXCJcblx0XG5cdG9ubHlPbmVET01FbGVtZW50OiBcIllvdSBjYW4gb25seSBwYXNzIGEgc2luZ2xlIERPTSBlbGVtZW50IHRvIGEgYmluZGluZ1wiXG5cdG1peGVkRWxMaXN0OiBcIidjaGVja2VkJyBvZiBNaXhlZCBsaXN0IG9mIGVsZW1lbnQgY2Fubm90IGJlIGJvdW5kXCJcbiIsIlNpbXBseUJpbmQgPSAoc3ViamVjdCwgb3B0aW9ucywgc2F2ZU9wdGlvbnMsIGlzU3ViLCBjb21wbGV0ZUNhbGxiYWNrKS0+XG5cdGlmICghc3ViamVjdCBhbmQgc3ViamVjdCBpc250IDApIG9yICghY2hlY2tJZi5pc1N0cmluZyhzdWJqZWN0KSBhbmQgIWNoZWNrSWYuaXNOdW1iZXIoc3ViamVjdCkgYW5kICFjaGVja0lmLmlzRnVuY3Rpb24oc3ViamVjdCkgYW5kIHN1YmplY3Qgbm90IGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0dGhyb3dFcnJvcignaW52YWxpZFBhcmFtTmFtZScpIHVubGVzcyBjaGVja0lmLmlzQmluZGluZ0ludGVyZmFjZShzdWJqZWN0KVxuXG5cdGlmIGNoZWNrSWYuaXNPYmplY3Qoc3ViamVjdCkgYW5kIHN1YmplY3Qgbm90IGluc3RhbmNlb2YgQXJyYXkgIyBJbmRpY2F0ZXMgaXQncyBhIEJpbmRpbmcgaW5zdGFuY2Ugb2JqZWN0IGR1ZSB0byB0aGUgYWJvdmUgY2hlY2tcblx0XHRpbnRlcmZhY2VUb1JldHVybiA9IGlmIGNvbXBsZXRlQ2FsbGJhY2sgdGhlbiBjb21wbGV0ZUNhbGxiYWNrKHN1YmplY3QpIGVsc2Ugc3ViamVjdC5zZWxmQ2xvbmUoKVxuXHRcblx0ZWxzZVxuXHRcdG5ld0ludGVyZmFjZSA9IG5ldyBCaW5kaW5nSW50ZXJmYWNlKG9wdGlvbnMpXG5cdFx0bmV3SW50ZXJmYWNlLnNhdmVPcHRpb25zID0gc2F2ZU9wdGlvbnNcblx0XHRuZXdJbnRlcmZhY2UuaXNTdWIgPSBpc1N1YlxuXHRcdG5ld0ludGVyZmFjZS5jb21wbGV0ZUNhbGxiYWNrID0gY29tcGxldGVDYWxsYmFja1xuXG5cdFx0aWYgY2hlY2tJZi5pc0Z1bmN0aW9uKHN1YmplY3QpXG5cdFx0XHRpbnRlcmZhY2VUb1JldHVybiA9IG5ld0ludGVyZmFjZS5zZXRPYmplY3Qoc3ViamVjdCwgdHJ1ZSlcblx0XHRlbHNlXG5cdFx0XHRpbnRlcmZhY2VUb1JldHVybiA9IG5ld0ludGVyZmFjZS5zZXRQcm9wZXJ0eShzdWJqZWN0KVxuXG5cdHJldHVybiBpbnRlcmZhY2VUb1JldHVyblxuXG5cblxuXG5pbXBvcnQgJy4vbWV0aG9kcyciLCJTaW1wbHlCaW5kLnZlcnNpb24gPSBpbXBvcnQgJy4uLy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nXG5TaW1wbHlCaW5kLnNldHRpbmdzID0gc2V0dGluZ3NcblNpbXBseUJpbmQuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uc1xuXG5cblxuU2ltcGx5QmluZC51bkJpbmRBbGwgPSAob2JqZWN0LCBib3RoV2F5cyktPlxuXHRpZiBvYmplY3QgYW5kIChjaGVja0lmLmlzT2JqZWN0KG9iamVjdCkgb3IgY2hlY2tJZi5pc0Z1bmN0aW9uKG9iamVjdCkpXG5cdFx0aW1wb3J0ICcuL21ldGhvZHMudW5CaW5kQWxsLXBhcnNlRE9NT2JqZWN0LmNvZmZlZSdcblx0XHRwcm9wTWFwID0gb2JqZWN0Ll9zYl9tYXBcdFx0XG5cblx0XHRpZiBvYmplY3QuX3NiX0lEXG5cdFx0XHRib3VuZEluc3RhbmNlc1tvYmplY3QuX3NiX0lEXS5yZW1vdmVBbGxTdWJzKGJvdGhXYXlzKVxuXHRcdFxuXHRcdGlmIHByb3BNYXBcblx0XHRcdGJvdW5kSW5zdGFuY2VzW2JvdW5kSURdLnJlbW92ZUFsbFN1YnMoYm90aFdheXMpIGZvciBwcm9wLCBib3VuZElEIG9mIHByb3BNYXBcblxuXHRyZXR1cm5cblxuIiwie1xuICBcIl9hcmdzXCI6IFtcbiAgICBbXG4gICAgICBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kQDEuMTUuOFwiLFxuICAgICAgXCIvVXNlcnMvZGFuaWVsa2FsZW4vc2FuZGJveC9kYXRhX3RhYmxlXCJcbiAgICBdXG4gIF0sXG4gIFwiX2Zyb21cIjogXCJAZGFuaWVsa2FsZW4vc2ltcGx5YmluZEAxLjE1LjhcIixcbiAgXCJfaWRcIjogXCJAZGFuaWVsa2FsZW4vc2ltcGx5YmluZEAxLjE1LjhcIixcbiAgXCJfaW5CdW5kbGVcIjogZmFsc2UsXG4gIFwiX2ludGVncml0eVwiOiBcInNoYTUxMi1ya2wrd0hiYkNvUG8yQTNWTkRBdDV1eVZYK2xCSG9lTlpmREFvSVZOc2xSRVVBRjlaS2tQNnNZcDl5cUZMTlkzam1yOGwreXlNcU1Hc3hxQlpHejU4dz09XCIsXG4gIFwiX2xvY2F0aW9uXCI6IFwiL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCIsXG4gIFwiX3BoYW50b21DaGlsZHJlblwiOiB7fSxcbiAgXCJfcmVxdWVzdGVkXCI6IHtcbiAgICBcInR5cGVcIjogXCJ2ZXJzaW9uXCIsXG4gICAgXCJyZWdpc3RyeVwiOiB0cnVlLFxuICAgIFwicmF3XCI6IFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRAMS4xNS44XCIsXG4gICAgXCJuYW1lXCI6IFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRcIixcbiAgICBcImVzY2FwZWROYW1lXCI6IFwiQGRhbmllbGthbGVuJTJmc2ltcGx5YmluZFwiLFxuICAgIFwic2NvcGVcIjogXCJAZGFuaWVsa2FsZW5cIixcbiAgICBcInJhd1NwZWNcIjogXCIxLjE1LjhcIixcbiAgICBcInNhdmVTcGVjXCI6IG51bGwsXG4gICAgXCJmZXRjaFNwZWNcIjogXCIxLjE1LjhcIlxuICB9LFxuICBcIl9yZXF1aXJlZEJ5XCI6IFtcbiAgICBcIi9cIlxuICBdLFxuICBcIl9yZXNvbHZlZFwiOiBcImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kLy0vc2ltcGx5YmluZC0xLjE1LjgudGd6XCIsXG4gIFwiX3NwZWNcIjogXCIxLjE1LjhcIixcbiAgXCJfd2hlcmVcIjogXCIvVXNlcnMvZGFuaWVsa2FsZW4vc2FuZGJveC9kYXRhX3RhYmxlXCIsXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJkYW5pZWxrYWxlblwiXG4gIH0sXG4gIFwiYnJvd3NlclwiOiB7XG4gICAgXCIuL2Rpc3Qvc2ltcGx5YmluZC5ub2RlLmRlYnVnLmpzXCI6IFwic3JjL2luZGV4LmNvZmZlZVwiLFxuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3Qvc2ltcGx5YmluZC5kZWJ1Zy5qc1wiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9pc3N1ZXNcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7fSxcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZ2ljYWxseSBzaW1wbGUsIGZyYW1ld29yay1sZXNzIG9uZS13YXkvdHdvLXdheSBkYXRhIGJpbmRpbmcgZm9yIGZyb250ZW5kL2JhY2tlbmQgaW4gfjVrYi5cIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy41LjBcIixcbiAgICBcImNvZmZlZS1zY3JpcHRcIjogXCJeMS4xMi42XCIsXG4gICAgXCJmcy1qZXRwYWNrXCI6IFwiXjAuMTMuMVwiLFxuICAgIFwicHJvbWlzZS1icmVha1wiOiBcIl4wLjEuMVwiLFxuICAgIFwic2VtdmVyXCI6IFwiXjUuMy4wXCIsXG4gICAgXCJzaW1wbHlpbXBvcnRcIjogXCJeNC4wLjAtczRcIixcbiAgICBcInNpbXBseXdhdGNoXCI6IFwiXjMuMC4wLWwyXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zaW1wbHliaW5kI3JlYWRtZVwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImJpbmRcIixcbiAgICBcImJpbmRpbmdcIixcbiAgICBcImRvbS1iaW5kaW5nXCIsXG4gICAgXCJvbmUtd2F5XCIsXG4gICAgXCJ0d28td2F5XCJcbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwibWFpblwiOiBcImRpc3Qvc2ltcGx5YmluZC5ub2RlLmRlYnVnLmpzXCIsXG4gIFwibmFtZVwiOiBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL3NpbXBseWJpbmQuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJlbmNobWFya3NcIjogXCJjYWtlIGluc3RhbGw6YmVuY2g7IG5wbSBydW4gYmVuY2htYXJrczpidWlsZCAmJiBucG0gcnVuIGJlbmNobWFya3M6c2VydmVcIixcbiAgICBcImJlbmNobWFya3M6YnVpbGRcIjogXCJiZW5jaG1hcmtzIGJ1aWxkIC1zIGJlbmNobWFya3Mvc3JjIC1kIGJlbmNobWFya3MvZGVzdFwiLFxuICAgIFwiYmVuY2htYXJrczpydW5cIjogXCJiZW5jaG1hcmtzIHJ1biAtZCBiZW5jaG1hcmtzL2Rlc3RcIixcbiAgICBcImJlbmNobWFya3M6c2VydmVcIjogXCJiZW5jaG1hcmtzIHNlcnZlIC1kIGJlbmNobWFya3MvZGVzdFwiLFxuICAgIFwiYmVuY2htYXJrczp1cGRhdGVcIjogXCJjYWtlIGluc3RhbGw6YmVuY2g7IGNha2UgdXBkYXRlU0JCZW5jaDsgbnBtIHJ1biBiZW5jaG1hcmtzOmJ1aWxkXCIsXG4gICAgXCJidWlsZFwiOiBcImNha2UgLWQgYnVpbGQgJiYgY2FrZSBidWlsZCAmJiBjYWtlIG1lYXN1cmUgJiYgY3AgLXIgYnVpbGQvKiBkaXN0L1wiLFxuICAgIFwiY292ZXJhZ2VcIjogXCJjYWtlIGluc3RhbGw6Y292ZXJhZ2U7IG5wbSBydW4gY292ZXJhZ2U6cnVuICYmIG5wbSBydW4gY292ZXJhZ2U6YmFkZ2VcIixcbiAgICBcImNvdmVyYWdlOmJhZGdlXCI6IFwiYmFkZ2UtZ2VuIC1kIC4vLmNvbmZpZy9iYWRnZXMvY292ZXJhZ2VcIixcbiAgICBcImNvdmVyYWdlOnJ1blwiOiBcImlzdGFuYnVsIGNvdmVyIC0tZGlyIGNvdmVyYWdlL25vZGUgbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gLXUgdGRkIC1iIHRlc3QvdGVzdEhlbHBlcnMuanMgdGVzdC90ZXN0LmpzXCIsXG4gICAgXCJwb3N0cHVibGlzaFwiOiBcImdpdCBwdXNoXCIsXG4gICAgXCJwb3N0dmVyc2lvblwiOiBcIm5wbSBydW4gYnVpbGQgJiYgbnBtIHJ1biBiZW5jaG1hcmtzOnVwZGF0ZSAmJiBnaXQgYWRkIC4gJiYgZ2l0IGNvbW1pdCAtYSAtbSAnW0J1aWxkXSdcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwibnBtIHJ1biB0ZXN0XCIsXG4gICAgXCJ0ZXN0XCI6IFwibnBtIHJ1biB0ZXN0Om5vZGUgLXMgJiYgbnBtIHJ1biB0ZXN0OmJyb3dzZXIgLXMgJiYgbnBtIHJ1biB0ZXN0Om1pbmlmaWVkIC1zXCIsXG4gICAgXCJ0ZXN0OmJyb3dzZXJcIjogXCJjYWtlIGluc3RhbGw6a2FybWE7IGthcm1hIHN0YXJ0IC0tc2luZ2xlLXJ1biAtLWJyb3dzZXJzIEVsZWN0cm9uIC5jb25maWcva2FybWEuY29uZi5jb2ZmZWVcIixcbiAgICBcInRlc3Q6YnJvd3Nlcjpsb2NhbFwiOiBcImNha2UgaW5zdGFsbDp0ZXN0OyBvcGVuIHRlc3QvdGVzdHJ1bm5lci5odG1sXCIsXG4gICAgXCJ0ZXN0Omthcm1hXCI6IFwiY2FrZSBpbnN0YWxsOmthcm1hOyBrYXJtYSBzdGFydCAuY29uZmlnL2thcm1hLmNvbmYuY29mZmVlXCIsXG4gICAgXCJ0ZXN0Om1pbmlmaWVkXCI6IFwibWluaWZpZWQ9MSBucG0gcnVuIHRlc3Q6YnJvd3NlciAtcyB8fCB0cnVlXCIsXG4gICAgXCJ0ZXN0Om5vZGVcIjogXCJjYWtlIGluc3RhbGw6dGVzdDsgbW9jaGEgLXUgdGRkIC0tY29tcGlsZXJzIGNvZmZlZTpjb2ZmZWUtcmVnaXN0ZXIgdGVzdC9ub2RlLmNvZmZlZVwiLFxuICAgIFwidGVzdDpzYXVjZVwiOiBcImNha2UgaW5zdGFsbDprYXJtYTsgc2F1Y2U9MSBrYXJtYSBzdGFydCAuY29uZmlnL2thcm1hLmNvbmYuY29mZmVlXCIsXG4gICAgXCJ3YXRjaFwiOiBcImNha2UgLWQgd2F0Y2hcIlxuICB9LFxuICBcInNpbXBseWltcG9ydFwiOiB7XG4gICAgXCJmaW5hbFRyYW5zZm9ybVwiOiBbXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc3VwZXJcIixcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1yZW5hbWVcIixcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1zaW1wbGVcIlxuICAgIF1cbiAgfSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4xNS44XCJcbn1cbiIsIiMjIypcbiAqIENvbmRpdGlvbmFsIENoZWNrczpcbiAqXG4gKiAxKSBNYWtlIHN1cmUgdGhlIHN1YmplY3Qgb2JqZWN0IGlzIGl0ZXJhYmxlIChhbmQgdGh1cyBhIHBvc3NpYmxlIGNhbmRpZGF0ZSBmb3IgYmVpbmcgYW4gZWxlbWVudCBjb2xsZWN0aW9uKVxuICogMikgTWFrZSBzdXJlIHRoZSBzdWJqZWN0IG9iamVjdCBpc24ndCBhbiBhcnJheSBiaW5kaW5nIChzaW5jZSBlbGVtZW50IGNvbGxlY3Rpb24gb2JqZWN0cyBkb24ndCBnZXQgZGlyZWN0bHkgYm91bmQpXG4gKiAzKSBNYWtlIHN1cmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24gaXMgYSB2YWxpZCBvYmplY3QgKGkuZS4gaXNuJ3QgdW5kZWZpbmVkIGFuZCBpc24ndCBudWxsKVxuICogNCkgTWFrZSBzdXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIGEgRE9NIG9iamVjdFxuIyMjXG5pZiBjaGVja0lmLmlzSXRlcmFibGUob2JqZWN0KSBhbmQgbm90IG9iamVjdC5fc2JfSUQgYW5kIG9iamVjdFswXSBhbmQgKGNoZWNrSWYuaXNEb20ob2JqZWN0WzBdKSlcblx0b2JqZWN0ID0gb2JqZWN0WzBdIiwiQmluZGluZyA9IChvYmplY3QsIHR5cGUsIHN0YXRlKS0+XG5cdGV4dGVuZFN0YXRlKEAsIHN0YXRlKVxuXHRAb3B0aW9uc0RlZmF1bHQgPSBpZiBAc2F2ZU9wdGlvbnMgdGhlbiBAb3B0aW9ucyBlbHNlIGRlZmF1bHRPcHRpb25zXG5cdEB0eXBlID0gdHlwZVx0XHRcdFx0XHRcdFx0IyBPYmplY3RQcm9wIHwgQXJyYXkgfCBGdW5jIHwgUHJveHkgfCBFdmVudCB8IFBob2xkZXIgfCBET01BdHRyIHwgRE9NQ2hlY2tib3ggfCBET01SYWRpb1xuXHRAb2JqZWN0ID0gb2JqZWN0IFx0XHRcdFx0XHRcdCMgVGhlIHN1YmplY3Qgb2JqZWN0IG9mIHRoaXMgYmluZGluZywgaS5lLiBmdW5jdGlvbiwgYXJyYXksIHt9LCBET00gZWwsIGV0Yy5cblx0QElEID0gZ2VuSUQoKSBcdFx0XHRcdFx0XHRcdCMgQXNzaWduZWQgb25seSBhZnRlciBwYXNzaW5nIGEgdmFsaWQgb2JqZWN0IHRvIC5vZigpXG5cdEBzdWJzID0gW11cdFx0XHRcdFx0XHRcdFx0IyBTdWJzY3JpYmVycyBhcnJheSBsaXN0aW5nIGFsbCBvZiB0aGUgb2JqZWN0cyB0aGF0IHdpbGwgYmUgdXBkYXRlZCB1cG9uIHZhbHVlIHVwZGF0ZVxuXHRAc3Vic01ldGEgPSBnZW5PYmooKVx0XHRcdFx0XHQjIE1hcCBzdWJzY3JpYmVycycgSUQgdG8gdGhlaXIgbWV0YWRhdGEgKGkuZS4gb3B0aW9ucywgdHJhbnNmb3JtLCBjb25kaXRpb24sIG9uZS10aW1lLWJpbmRpbmcsIGV0Yy4pXG5cdEBwdWJzTWFwID0gZ2VuT2JqKClcdFx0XHRcdFx0XHQjIE1hcCBwdWJsaXNoZXJzIChiaW5kaW5ncyB0aGF0IHVwZGF0ZSB0aGlzIGJpbmRpbmcpIGJ5IHRoZWlyIElEXG5cdEBhdHRhY2hlZEV2ZW50cyA9IFtdXHRcdFx0XHRcdCMgQXJyYXkgbGlzdGluZyBhbGwgb2YgdGhlIGV2ZW50cyBjdXJyZW50bHkgbGlzdGVuZWQgb24gQG9iamVjdFxuXHRAc2V0VmFsdWUgPSBzZXRWYWx1ZU5vb3AgaWYgQHR5cGUgaXMgJ1Byb3h5J1xuXG5cdCMgPT09PSBQcm9wZXJ0aWVzIGRlY2xhcmVkIGxhdGVyIG9yIGluaGVyaXRlZCBmcm9tIGJpbmRpbmcgaW50ZXJmYWNlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIEBvcHRpb25zID0gb3B0aW9uc1xuXHQjIEB2YWx1ZSA9IHVuZGVmaW5lZCBcdFx0XHRcdFx0IyBXaWxsIHJlcHJlc2VudCB0aGUgYWN0dWFsIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGJpbmRpbmcvb2JqZWN0XG5cdCMgQHByb3BlcnR5ID0gcHJvcGVydHlcdFx0XHRcdFx0IyBUaGUgcHJvcGVydHkgbmFtZSBvciBhcnJheSBpbmRleCBvciBldmVudCBjYWxsYmFjayBhcmd1bWVudFxuXHQjIEBzZWxlY3RvciA9IHNlbGVjdG9yXHRcdFx0XHRcdCMgVGhlIHByb3BlcnR5IG5hbWUgb3IgYXJyYXkgaW5kZXggb3IgZXZlbnQgY2FsbGJhY2sgYXJndW1lbnRcblx0IyBAb3JpZ0ZuID0gRnVuY3Rpb25cdFx0XHRcdFx0IyBUaGUgb3JpZ2luYWwgcHJveGllZCBmdW5jdGlvbiBwYXNzZWQgdG8gUHJveHkgYmluZGluZ3Ncblx0IyBAY3VzdG9tRXZlbnRNZXRob2QgPSB7fVx0XHRcdFx0IyBOYW1lcyBvZiB0aGUgZXZlbnQgZW1pdHRlci90cmlnZ2VyIG1ldGhvZHMgKGlmIGFwcGxpY2FibGUpXG5cdCMgQHBob2xkZXJDb250ZXh0cyA9IHt9XHRcdFx0XHRcdCMgUGxhY2Vob2xkZXIgc3Vycm91bmRpbmdzIChvcmlnaW5hbCBiaW5kaW5nIHZhbHVlIHNwbGl0IGJ5IHRoZSBwbGFjZWhvbGRlciByZWdFeClcblx0IyBAcGhvbGRlckluZGV4TWFwID0ge31cdFx0XHRcdFx0IyBQbGFjZWhvbGRlciBvY2N1cmVuY2UgbWFwcGluZywgaS5lLiB0aGUgcGxhY2Vob2xkZXIgbmFtZSBmb3IgZWFjaCBwbGFjZWhvbGRlciBvY2N1cmVuY2Vcblx0IyBAcGxhY2Vob2xkZXIgPSBcIlwiXHRcdFx0XHRcdFx0IyBUaGUgbGFzdCBzcGVjaWZpZWQgcGxhY2Vob2xkZXIgdG8gYmluZCB0aGUgdmFsdWUgdG9cblx0IyBAZGVzY3JpcHRvciA9IFtdXHRcdFx0XHRcdFx0IyBEZXNjcmliZXMgdGhlIHR5cGUgb2YgcHJvcGVydHksIGkuZS4gJ2F0dHI6ZGF0YS1uYW1lJyB0byBpbmRpY2F0ZSBhIERPTUF0dHIgdHlwZSBiaW5kaW5nXG5cdCMgQGlzTGl2ZVByb3AgPSBCb29sZWFuXHRcdFx0XHRcdCMgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBPYmplY3QvT2JqZWN0J3MgcHJvcGV0eSBoYXZlIGJlZW4gbW9kaWZpZWQgdG8gYmUgYSBsaXZlIHByb3BlcnR5XG5cdCMgQGlzRG9tID0gQm9vbGVhblx0XHRcdFx0XHRcdCMgSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBiaW5kaW5nJ3Mgb2JqZWN0IGlzIGEgRE9NIG9iamVjdFxuXHQjIEBwb2xsSW50ZXJ2YWwgPSBJRFx0XHRcdFx0XHQjIFRoZSBpbnRlcnZhbCBJRCBvZiB0aGUgdGltZXIgdGhhdCBtYW51YWxseSBwb2xscyB0aGUgb2JqZWN0J3MgdmFsdWUgYXQgYSBzZXQgaW50ZXJ2YWxcblx0IyBAYXJyYXlCaW5kaW5nID0gQmluZGluZ1x0XHRcdFx0IyBSZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBhcnJheSBiaW5kaW5nIChpZiBleGlzdHMpIGZvciBhbiBpbmRleC1vZi1hcnJheSBiaW5kaW5nIChpLmUuIFNpbXBseUJpbmQoYXJyYXkpKVxuXHQjIEBldmVudE5hbWUgPSBcIlwiXHRcdFx0XHRcdFx0IyBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdGhpcyBiaW5kaW5nIGlzIGxpc3RlbmluZyB0byAoZm9yIEV2ZW50IHR5cGUgYmluZGluZ3MpXG5cdCMgQGlzRW1pdHRlciA9IEJvb2xlYW4gXHRcdFx0XHRcdCMgVHJhY2tlciB0byBsZXQgdXMga25vdyB3ZSBzaG91bGRuJ3QgaGFuZGxlIHRoZSBldmVudCB1cGRhdGUgd2UgcmVjZWl2ZWQgYXMgaXQgaXMgdGhlIGV2ZW50IHRoaXMgYmluZGluZyBqdXN0IGVtaXR0ZWRcblx0IyBAZXZlbnRIYW5kbGVyID0gRnVuY3Rpb24gXHRcdFx0XHQjIFRoZSBjYWxsYmFjayB0aGF0IGdldHMgdHJpZ2dlcmVkIHVwb24gYW4gZXZlbnQgZW1pdHRhbmNlIChmb3IgRXZlbiB0eXBlIGJpbmRpbmdzKVxuXHQjIEBldmVudE9iamVjdCA9IEV2ZW50IFx0XHRcdFx0XHQjIFRoZSBkaXNwYXRjaGVkIGV2ZW50IG9iamVjdCAoZm9yIEV2ZW50IHR5cGUgYmluZGluZ3MpXG5cdCMgQHNlbGZUcmFuc2Zvcm0gPSBGdW5jdGlvbiBcdFx0XHQjIFRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gdGhhdCBuZXcgdmFsdWVzIGJlaW5nIHNldCB0byB0aGlzIGJpbmRpbmcgYXJlIGJlaW5nIHBhc3NlZCB0aHJvdWdoIGR1cmluZyBAc2V0VmFsdWUgKGlmIGFwcGxpY2FibGUpXG5cdCMgQHNlbGZVcGRhdGVyID0gRnVuY3Rpb24gXHRcdFx0XHQjIEEgRnVuYy10eXBlIEJpbmRpbmcgd2hpY2ggaW52b2tlcyBAc2V0VmFsdWUoQGZldGNoRGlyZWN0VmFsdWUoKSkgdXBvbiBjaGFuZ2UuIENyZWF0ZWQgaW4gQGNvbnZlcnRUb0xpdmUoKSBmb3IgQXJyYXkgYmluZGluZ3MgJiBpbiBpbnRlcmZhY2UudXBkYXRlT24oKVxuXHQjIEBpc0FzeW5jID0gQm9vbGVhblx0XHRcdFx0XHQjIEluZGljYXRlcyBpZiB0aGlzIGlzIGFuIGFzeW5jIGJpbmRpbmcgKGN1cnJlbnRseSBvbmx5IHVzZWQgZm9yIEV2ZW50IGJpbmRpbmdzKVxuXHQjIyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIyMjXG5cblx0aWYgQGlzTXVsdGlDaG9pY2UgIyBUcnVlIGlmIEBvYmplY3QgaXMgYSByYWRpby9jaGVja2JveCBjb2xsZWN0aW9uXG5cdFx0QGNob2ljZXMgPSBnZW5PYmooKVxuXHRcdFxuXHRcdEBvYmplY3QuZm9yRWFjaCAoY2hvaWNlRWwpPT5cblx0XHRcdGNob2ljZUJpbmRpbmcgPSBAY2hvaWNlc1tjaG9pY2VFbC52YWx1ZV0gPSBTaW1wbHlCaW5kKCdjaGVja2VkJykub2YoY2hvaWNlRWwpLl9cblx0XHRcdGNob2ljZUJpbmRpbmcuYWRkU3ViKEApXG5cdFx0XHRjaG9pY2VCaW5kaW5nLnN1YnNNZXRhW0BJRF0udHJhbnNmb3JtRm4gPSAoKS0+IGNob2ljZUJpbmRpbmdcblx0XHRcdGNob2ljZUJpbmRpbmcuZ3JvdXBCaW5kaW5nID0gQFxuXHRcdFx0cmV0dXJuXG5cdFxuXG5cdHVubGVzcyBAdHlwZSBpcyAnRXZlbnQnIG9yIChAdHlwZSBpcyAnRnVuYycgYW5kIEBpc1N1YikgIyB0aGUgc2Vjb25kIGNvbmRpdGlvbiB3aWxsIHByZXZlbnQgZnVuY3Rpb24gc3Vic2NyaWJlcnMgZnJvbSBiZWluZyBpbnZva2VkIG9uIHRoaXMgYmluZGluZyBjcmVhdGlvblxuXHRcdGlmIEB0eXBlIGlzICdQaG9sZGVyJ1xuXHRcdFx0cGFyZW50UHJvcGVydHkgPSBpZiBAZGVzY3JpcHRvciBhbmQgbm90IHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnbXVsdGknKSB0aGVuIFwiI3tAZGVzY3JpcHRvcn06I3tAcHJvcGVydHl9XCIgZWxzZSBAcHJvcGVydHlcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRwYXJlbnRCaW5kaW5nID0gQHBhcmVudEJpbmRpbmcgPSBTaW1wbHlCaW5kKHBhcmVudFByb3BlcnR5KS5vZihvYmplY3QpLl9cblx0XHRcdHBhcmVudEJpbmRpbmcuc2NhbkZvclBob2xkZXJzKClcblx0XHRcdEB2YWx1ZSA9IHBhcmVudEJpbmRpbmcucGhvbGRlclZhbHVlc1tAcGhvbGRlcl1cblx0XHRcblx0XHRcdEB0ZXh0Tm9kZXMgPSBwYXJlbnRCaW5kaW5nLnRleHROb2Rlc1tAcGhvbGRlcl0gaWYgcGFyZW50QmluZGluZy50ZXh0Tm9kZXNcblx0XHRcblxuXHRcdGVsc2Vcblx0XHRcdEB2YWx1ZSA9IHN1YmplY3RWYWx1ZSA9IEBmZXRjaERpcmVjdFZhbHVlKClcblx0XHRcblx0XHRcdGlmIEB0eXBlIGlzICdPYmplY3RQcm9wJyBhbmQgbm90IGNoZWNrSWYuaXNEZWZpbmVkKHN1YmplY3RWYWx1ZSkgYW5kIG5vdCBnZXREZXNjcmlwdG9yKEBvYmplY3QsIEBwcm9wZXJ0eSlcblx0XHRcdFx0QG9iamVjdFtAcHJvcGVydHldID0gc3ViamVjdFZhbHVlICMgRGVmaW5lIHRoZSBwcm9wIG9uIHRoZSBvYmplY3QgaWYgaXQgbm9uLWV4aXN0ZW50XG5cblx0XHRcdGNvbnZlcnRUb0xpdmUoQCwgQG9iamVjdClcblxuXG5cdEBhdHRhY2hFdmVudHMoKVxuXHRyZXR1cm4gYm91bmRJbnN0YW5jZXNbQElEXSA9IEBcblxuXG5cblxuXG5pbXBvcnQgJy4vcHJvdG90eXBlJ1xuIiwiQmluZGluZzo6ID1cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU3Vic2NyaWJlciBNYW5hZ2VtZW50XG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRhZGRTdWI6IChzdWIsIG9wdGlvbnMsIHVwZGF0ZU9uY2UsIHVwZGF0ZUV2ZW5JZlNhbWUpLT5cblx0XHRpZiBzdWIuaXNNdWx0aVxuXHRcdFx0QGFkZFN1YihzdWJJdGVtLCBvcHRpb25zLCB1cGRhdGVPbmNlLCB1cGRhdGVFdmVuSWZTYW1lKSBmb3Igc3ViSXRlbSBpbiBzdWIuYmluZGluZ3Ncblx0XHRlbHNlXG5cdFx0XHRpZiBtZXRhRGF0YT1Ac3Vic01ldGFbc3ViLklEXVxuXHRcdFx0XHRhbHJlYWR5SGFkU3ViID0gdHJ1ZVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzdWIucHVic01hcFtASURdID0gQFxuXHRcdFx0XHRAc3Vicy51bnNoaWZ0KHN1Yilcblx0XHRcdFx0XG5cdFx0XHRcdG1ldGFEYXRhID0gQHN1YnNNZXRhW3N1Yi5JRF0gPSBnZW5PYmooKVxuXHRcdFx0XHRtZXRhRGF0YS51cGRhdGVPbmNlID0gdXBkYXRlT25jZVxuXHRcdFx0XHRtZXRhRGF0YS5vcHRzID0gY2xvbmVPYmplY3Qob3B0aW9ucylcblx0XHRcdFx0bWV0YURhdGEub3B0cy51cGRhdGVFdmVuSWZTYW1lID0gdHJ1ZSBpZiB1cGRhdGVFdmVuSWZTYW1lIG9yIEB0eXBlIGlzICdFdmVudCcgb3IgQHR5cGUgaXMgJ1Byb3h5JyBvciBAdHlwZSBpcyAnQXJyYXknXG5cdFx0XHRcdG1ldGFEYXRhLnZhbHVlUmVmID0gaWYgc3ViLnR5cGUgaXMgJ0Z1bmMnIHRoZW4gJ3ZhbHVlUGFzc2VkJyBlbHNlICd2YWx1ZSdcblx0XHRcdFxuXHRcdHJldHVybiBhbHJlYWR5SGFkU3ViXG5cblxuXG5cdHJlbW92ZVN1YjogKHN1YiwgYm90aFdheXMpLT5cblx0XHRpZiBzdWIuaXNNdWx0aVxuXHRcdFx0QHJlbW92ZVN1YihzdWJJdGVtLCBib3RoV2F5cykgZm9yIHN1Ykl0ZW0gaW4gc3ViLmJpbmRpbmdzXG5cdFx0ZWxzZVxuXHRcdFx0aWYgQHN1YnNNZXRhW3N1Yi5JRF1cblx0XHRcdFx0QHN1YnMuc3BsaWNlKEBzdWJzLmluZGV4T2Yoc3ViKSwgMSlcblx0XHRcdFx0ZGVsZXRlIEBzdWJzTWV0YVtzdWIuSURdXG5cdFx0XHRcdGRlbGV0ZSBzdWIucHVic01hcFtASURdXG5cblx0XHRcdGlmIGJvdGhXYXlzXG5cdFx0XHRcdHN1Yi5yZW1vdmVTdWIoQClcblx0XHRcdFx0ZGVsZXRlIEBwdWJzTWFwW3N1Yi5JRF1cblxuXHRcdGlmIEBzdWJzLmxlbmd0aCBpcyAwIGFuZCBPYmplY3Qua2V5cyhAcHVic01hcCkubGVuZ3RoIGlzIDBcblx0XHRcdEBkZXN0cm95KCkgIyBTaW5jZSBpdCdzIG5vIGxvbmdlciBhIHN1YnNjcmliZXIgb3IgaGFzIGFueSBzdWJzY3JpYmVyc1xuXHRcblx0XHRyZXR1cm5cblxuXHRcblxuXHRyZW1vdmVBbGxTdWJzOiAoYm90aFdheXMpLT5cblx0XHRAcmVtb3ZlU3ViKHN1YiwgYm90aFdheXMpIGZvciBzdWIgaW4gQHN1YnMuc2xpY2UoKVxuXHRcdHJldHVyblxuXG5cblxuXG5cdGRlc3Ryb3k6ICgpLT4gIyBSZXNldHMgb2JqZWN0IHRvIGluaXRpYWwgc3RhdGUgKHByZS1iaW5kaW5nIHN0YXRlKVxuXHRcdGRlbGV0ZSBib3VuZEluc3RhbmNlc1tASURdXG5cdFx0QHJlbW92ZVBvbGxJbnRlcnZhbCgpXG5cdFx0XG5cdFx0aWYgQHR5cGUgaXMgJ0V2ZW50J1xuXHRcdFx0QHVuUmVnaXN0ZXJFdmVudChldmVudCkgZm9yIGV2ZW50IGluIEBhdHRhY2hlZEV2ZW50c1xuXHRcdFxuXHRcdGVsc2UgaWYgQHR5cGUgaXMgJ0Z1bmMnXG5cdFx0XHRkZWxldGUgQG9iamVjdC5fc2JfSURcblxuXHRcdCMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblx0XHRjb252ZXJ0VG9SZWcoQCwgQG9iamVjdCkgaWYgQGlzTGl2ZVByb3AgYW5kIEBvcmlnRGVzY3JpcHRvclxuXHRcdGNvbnZlcnRUb1JlZyhALCBAdmFsdWUsIHRydWUpIGlmIEB0eXBlIGlzICdBcnJheSdcblx0XHRcblx0XHRpZiBAb2JqZWN0Ll9zYl9tYXBcblx0XHRcdGRlbGV0ZSBAb2JqZWN0Ll9zYl9tYXBbQHNlbGVjdG9yXVxuXHRcdFx0ZGVsZXRlIEBvYmplY3QuX3NiX21hcCBpZiBPYmplY3Qua2V5cyhAb2JqZWN0Ll9zYl9tYXApLmxlbmd0aCBpcyAwXG5cblxuXHRcdHJldHVyblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBWYWx1ZSBzZXQvZ2V0XG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRmZXRjaERpcmVjdFZhbHVlOiAoKS0+XG5cdFx0dHlwZSA9IEB0eXBlXG5cdFx0c3dpdGNoXG5cdFx0XHR3aGVuIHR5cGUgaXMgJ0Z1bmMnIHRoZW4gQG9iamVjdCgpXG5cdFx0XHRcblx0XHRcdHdoZW4gdHlwZSBpcyAnRE9NQXR0cicgdGhlbiBAb2JqZWN0LmdldEF0dHJpYnV0ZShAcHJvcGVydHkpIG9yICcnXG5cblx0XHRcdHdoZW4gQGlzTXVsdGlDaG9pY2Vcblx0XHRcdFx0cmVzdWx0cyA9IFtdXG5cdFx0XHRcdGZvciBjaG9pY2VOYW1lLGNob2ljZUVsIG9mIEBjaG9pY2VzXG5cdFx0XHRcdFx0aWYgY2hvaWNlRWwub2JqZWN0LmNoZWNrZWRcblx0XHRcdFx0XHRcdGlmIHR5cGUgaXMgJ0RPTVJhZGlvJ1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gY2hvaWNlTmFtZVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2ggY2hvaWNlTmFtZVxuXG5cdFx0XHRcdHJldHVybiByZXN1bHRzXG5cdFx0XG5cdFx0XHRlbHNlIEBvYmplY3RbQHByb3BlcnR5XVxuXHRcblxuXG5cblx0c2V0VmFsdWU6IChuZXdWYWx1ZSwgcHVibGlzaGVyLCBmcm9tU2VsZiwgZnJvbUNoYW5nZUV2ZW50KS0+ICMgZnJvbVNlbGY9PT10cnVlIHdoZW4gY2FsbGVkIGZyb20gZXZlbnRVcGRhdGVIYW5kbGVyIG9yIHByb3BlcnR5IGRlc2NyaXB0b3Igc2V0dGVyICh1bmxlc3MgaXQncyBhbiBBcnJheSBiaW5kaW5nKVxuXHRcdHB1Ymxpc2hlciB8fD0gQFxuXHRcdG5ld1ZhbHVlID0gQHNlbGZUcmFuc2Zvcm0obmV3VmFsdWUpIGlmIEBzZWxmVHJhbnNmb3JtXG5cdFx0XG5cdFx0dW5sZXNzIGZyb21TZWxmIHRoZW4gc3dpdGNoIEB0eXBlXG5cdFx0XHR3aGVuICdPYmplY3RQcm9wJ1xuXHRcdFx0XHRpZiBub3QgQGlzTGl2ZVByb3Bcblx0XHRcdFx0XHRAb2JqZWN0W0Bwcm9wZXJ0eV0gPSBuZXdWYWx1ZSBpZiBuZXdWYWx1ZSBpc250IEB2YWx1ZVxuXHRcdFx0XHRpbXBvcnRJbmxpbmUgJy4vcHJvdG90eXBlLnNldFZhbHVlLU9iamVjdFByb3AtRE9NVmFsdWUnXG5cdFx0XHRcdGVsc2UgaWYgQG9yaWdTZXR0ZXJcblx0XHRcdFx0XHRAb3JpZ1NldHRlcihuZXdWYWx1ZSlcblxuXG5cdFx0XHR3aGVuICdQaG9sZGVyJ1xuXHRcdFx0XHRwYXJlbnQgPSBAcGFyZW50QmluZGluZ1xuXHRcdFx0XHRwYXJlbnQucGhvbGRlclZhbHVlc1tAcGhvbGRlcl0gPSBuZXdWYWx1ZVxuXHRcdFx0XHRlbnRpcmVWYWx1ZSA9IGFwcGx5UGxhY2Vob2xkZXJzKHBhcmVudC5waG9sZGVyQ29udGV4dHMsIHBhcmVudC5waG9sZGVyVmFsdWVzLCBwYXJlbnQucGhvbGRlckluZGV4TWFwKVxuXG5cdFx0XHRcdGlmIEB0ZXh0Tm9kZXMgYW5kIG5ld1ZhbHVlIGlzbnQgQHZhbHVlXG5cdFx0XHRcdFx0Zm9yIHRleHROb2RlIGluIEB0ZXh0Tm9kZXNcblx0XHRcdFx0XHRcdHRleHROb2RlW3RleHRDb250ZW50XSA9IG5ld1ZhbHVlXG5cdFx0XHRcdFxuXHRcdFx0XHRwYXJlbnQuc2V0VmFsdWUoZW50aXJlVmFsdWUsIHB1Ymxpc2hlcikgdW5sZXNzIEBwcm9wZXJ0eSBpcyB0ZXh0Q29udGVudFxuXHRcdFx0XHRcblxuXG5cdFx0XHR3aGVuICdBcnJheSdcblx0XHRcdFx0aWYgbmV3VmFsdWUgaXNudCBAdmFsdWVcblx0XHRcdFx0XHRuZXdWYWx1ZSA9IEFycmF5Ojpjb25jYXQobmV3VmFsdWUpIGlmIG5vdCBjaGVja0lmLmlzQXJyYXkobmV3VmFsdWUpXG5cdFx0XHRcdFx0Y29udmVydFRvUmVnKEAsIEB2YWx1ZSwgdHJ1ZSlcblx0XHRcdFx0XHRjb252ZXJ0VG9MaXZlKEAsIG5ld1ZhbHVlPW5ld1ZhbHVlLnNsaWNlKCksIHRydWUpXG5cdFx0XHRcdFx0QG9yaWdTZXR0ZXIobmV3VmFsdWUpIGlmIEBvcmlnU2V0dGVyICMgV2lsbCB1cGRhdGUgYW55IG90aGVyIHByZXZpb3VzIG5vbi1BcnJheSBiaW5kaW5ncyB0byB0aGUgc2FtZSBvYmplY3QgcHJvcGVydHlcblxuXG5cdFx0XHR3aGVuICdGdW5jJ1xuXHRcdFx0XHRwcmV2VmFsdWUgPSBAdmFsdWVQYXNzZWRcblx0XHRcdFx0QHZhbHVlUGFzc2VkID0gbmV3VmFsdWVcblx0XHRcdFx0bmV3VmFsdWUgPSBAb2JqZWN0KG5ld1ZhbHVlLCBwcmV2VmFsdWUpXG5cblx0XHRcdHdoZW4gJ0V2ZW50J1xuXHRcdFx0XHRAaXNFbWl0dGVyID0gdHJ1ZVxuXHRcdFx0XHRAZW1pdEV2ZW50KG5ld1ZhbHVlKVxuXHRcdFx0XHRAaXNFbWl0dGVyID0gZmFsc2Vcblx0XHRcblx0XHRcdGltcG9ydElubGluZSAnLi9wcm90b3R5cGUuc2V0VmFsdWUtRE9NVHlwZXMnXG5cdFx0XG5cdFx0QHZhbHVlID0gbmV3VmFsdWVcblx0XHRAdXBkYXRlQWxsU3VicyhwdWJsaXNoZXIpXG5cblx0XHRyZXR1cm5cblxuXG5cblxuXG5cdHVwZGF0ZUFsbFN1YnM6IChwdWJsaXNoZXIpLT4gaWYgaT0oYXJyPUBzdWJzKS5sZW5ndGggIyBVZ2x5IHNob3J0Y3V0IGZvciBpbmRleCBkZWZpbml0aW9uIGluIG9yZGVyIHRvIGxpbWl0IGxvZ2ljIHJlcGl0aWlvblxuXHRcdEB1cGRhdGVTdWIoYXJyW2ldLCBwdWJsaXNoZXIpIHdoaWxlIGktLVxuXHRcdHJldHVyblxuXG5cblxuXHRcdFx0XG5cblx0dXBkYXRlU3ViOiAoc3ViLCBwdWJsaXNoZXIsIGlzRGVsYXllZFVwZGF0ZSktPlxuXHRcdHJldHVybiBpZiAocHVibGlzaGVyIGlzIHN1Yikgb3IgKHB1Ymxpc2hlciBpc250IEAgYW5kIHB1Ymxpc2hlci5zdWJzTWV0YVtzdWIuSURdKSAjIGluZGljYXRlcyB0aGlzIGlzIGFuIGluZmluaXRlIGxvb3Bcblx0XHRtZXRhID0gQHN1YnNNZXRhW3N1Yi5JRF1cblxuXHRcdGlmIG1ldGEuZGlzYWxsb3dMaXN0IGFuZCBtZXRhLmRpc2FsbG93TGlzdFtwdWJsaXNoZXIuSURdXG5cdFx0XHRyZXR1cm5cblxuXHRcdGlmIG1ldGEub3B0cy50aHJvdHRsZVxuXHRcdFx0Y3VycmVudFRpbWUgPSArKG5ldyBEYXRlKVxuXHRcdFx0dGltZVBhc3NlZCA9IGN1cnJlbnRUaW1lIC0gbWV0YS5sYXN0VXBkYXRlXG5cdFx0XHRcblx0XHRcdGlmIHRpbWVQYXNzZWQgPCBtZXRhLm9wdHMudGhyb3R0bGVcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KG1ldGEudXBkYXRlVGltZXIpXG5cdFx0XHRcdHJldHVybiBtZXRhLnVwZGF0ZVRpbWVyID1cblx0XHRcdFx0XHRzZXRUaW1lb3V0ICgpPT5cblx0XHRcdFx0XHRcdEB1cGRhdGVTdWIoc3ViLCBwdWJsaXNoZXIpIGlmIEBzdWJzTWV0YVtzdWIuSURdXG5cdFx0XHRcdFx0LCBtZXRhLm9wdHMudGhyb3R0bGUtdGltZVBhc3NlZFxuXHRcdFx0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG1ldGEubGFzdFVwZGF0ZSA9IGN1cnJlbnRUaW1lXG5cblx0XHRlbHNlIGlmIG1ldGEub3B0cy5kZWxheSBhbmQgbm90IGlzRGVsYXllZFVwZGF0ZVxuXHRcdFx0cmV0dXJuIHNldFRpbWVvdXQgKCk9PlxuXHRcdFx0XHRAdXBkYXRlU3ViKHN1YiwgcHVibGlzaGVyLCB0cnVlKSBpZiBAc3Vic01ldGFbc3ViLklEXVxuXHRcdFx0LCBtZXRhLm9wdHMuZGVsYXlcblxuXG5cdFx0bmV3VmFsdWUgPSBpZiBAdHlwZSBpcyAnQXJyYXknIGFuZCBtZXRhLm9wdHMuc2VuZEFycmF5Q29waWVzIHRoZW4gQHZhbHVlLnNsaWNlKCkgZWxzZSBAdmFsdWVcblx0XHRzdWJWYWx1ZSA9IHN1YlttZXRhLnZhbHVlUmVmXVxuXHRcdG5ld1ZhbHVlID0gaWYgdHJhbnNmb3JtPW1ldGEudHJhbnNmb3JtRm4gdGhlbiB0cmFuc2Zvcm0obmV3VmFsdWUsIHN1YlZhbHVlLCBzdWIub2JqZWN0KSBlbHNlIG5ld1ZhbHVlXG5cblx0XHRyZXR1cm4gaWYgbmV3VmFsdWUgaXMgc3ViVmFsdWUgYW5kIG5vdCBtZXRhLm9wdHMudXBkYXRlRXZlbklmU2FtZSBvclxuXHRcdFx0bWV0YS5jb25kaXRpb25GbiBhbmQgbm90IG1ldGEuY29uZGl0aW9uRm4obmV3VmFsdWUsIHN1YlZhbHVlLCBzdWIub2JqZWN0KVxuXG5cdFx0IyBXaHkgZG8gd2UgbmVlZCB0aGUgJ3Byb21pc2VUcmFuc2Zvcm1zJyBvcHRpb24gd2hlbiB3ZSBjYW4ganVzdCBjaGVjayBmb3IgdGhlIGV4aXN0YW5jZSBvZiAudGhlbiBtZXRob2Q/XG5cdFx0IyBCZWNhdXNlIHRlc3RzIHNob3cgdGhhdCB3aGVuIHNlYXJjaGluZyBmb3IgdGhlIC50aGVuIHByb3Agb24gdGhlIG9iamVjdCByZXN1bHRzIGluIGEgcGVyZm9ybWFuY2Ugc2xvd2Rvd24gb2YgdXAgdG8gMzAlIVxuXHRcdCMgQ2hlY2tpbmcgaWYgdGhlIHByb21pc2VUcmFuc2Zvcm1zIG9wdGlvbiBpcyBlbmFibGVkIGZpcnN0IGVsaW1pbmF0ZXMgdW5uZWNlc3NhcnkgbG9va3VwcyAmIHNsb3dkb3ducy5cblx0XHRpZiBtZXRhLm9wdHMucHJvbWlzZVRyYW5zZm9ybXMgYW5kIG5ld1ZhbHVlIGFuZCBjaGVja0lmLmlzRnVuY3Rpb24obmV3VmFsdWUudGhlbilcblx0XHRcdG5ld1ZhbHVlLnRoZW4gKG5ld1ZhbHVlKS0+IHN1Yi5zZXRWYWx1ZShuZXdWYWx1ZSwgcHVibGlzaGVyKTsgcmV0dXJuXG5cdFx0ZWxzZVxuXHRcdFx0c3ViLnNldFZhbHVlKG5ld1ZhbHVlLCBwdWJsaXNoZXIpXG5cblx0XHRAcmVtb3ZlU3ViKHN1YikgaWYgbWV0YS51cGRhdGVPbmNlXG5cdFx0cmV0dXJuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgVHJhbnNmb3JtcyAmIENvbmRpdGlvbnNcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0YWRkTW9kaWZpZXJGbjogKHRhcmdldCwgc3ViSW50ZXJmYWNlcywgc3ViamVjdEZuLCB1cGRhdGVPbkJpbmQpLT5cblx0XHRpZiBub3QgY2hlY2tJZi5pc0Z1bmN0aW9uKHN1YmplY3RGbilcblx0XHRcdHRocm93V2FybmluZygnZm5Pbmx5JywyKVxuXG5cdFx0ZWxzZVxuXHRcdFx0Zm9yIHN1YkludGVyZmFjZSBpbiBzdWJJbnRlcmZhY2VzXG5cdFx0XHRcdHN1YnNjcmliZXIgPSBzdWJJbnRlcmZhY2UuXyBvciBzdWJJbnRlcmZhY2UgIyBTZWNvbmQgaXMgY2hvc2VuIHdoZW4gdGhlIHBhc3NlZCBzdWJzY3JpYmVyIGludGVyZmFjZXMgbXVsdGktYmluZGluZyAoaXMgYSByZWN1cnNpdmUgY2FsbCBvZiB0aGlzIG1ldGhvZClcblxuXHRcdFx0XHRpZiBzdWJzY3JpYmVyLmlzTXVsdGlcblx0XHRcdFx0XHRAYWRkTW9kaWZpZXJGbih0YXJnZXQsIHN1YnNjcmliZXIuYmluZGluZ3MsIHN1YmplY3RGbiwgdXBkYXRlT25CaW5kKVxuXHRcdFx0XHRcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHN1Yk1ldGFEYXRhID0gQHN1YnNNZXRhW3N1YnNjcmliZXIuSURdXG5cdFx0XHRcdFx0c3ViTWV0YURhdGFbdGFyZ2V0XSA9IHN1YmplY3RGblxuXHRcdFx0XHRcdHVwZGF0ZU9uQmluZCA9IHVwZGF0ZU9uQmluZCBhbmQgbm90IHN1Yk1ldGFEYXRhLnVwZGF0ZU9uY2VcblxuXHRcdFx0XHRcdGlmIEBwdWJzTWFwW3N1YnNjcmliZXIuSURdXG5cdFx0XHRcdFx0XHRzdWJzY3JpYmVyLnN1YnNNZXRhW0BJRF1bdGFyZ2V0XSB8fD0gc3ViamVjdEZuICMgV2lsbCBub3QgcmVwbGFjZSBleGlzdGluZyBtb2RpZmllciBmdW5jdGlvbiBpZiBleGlzdHNcblxuXHRcdFx0XHRcdEB1cGRhdGVTdWIoc3Vic2NyaWJlciwgQCkgaWYgKHVwZGF0ZU9uQmluZCBvciBAdHlwZSBpcyAnRnVuYycpIGFuZCB0YXJnZXQgaXMgJ3RyYW5zZm9ybUZuJ1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXG5cblxuXHRzZXRTZWxmVHJhbnNmb3JtOiAodHJhbnNmb3JtRm4sIHVwZGF0ZU9uQmluZCktPlxuXHRcdEBzZWxmVHJhbnNmb3JtID0gdHJhbnNmb3JtRm5cblx0XHRAc2V0VmFsdWUoQHZhbHVlKSBpZiB1cGRhdGVPbkJpbmRcblx0XHRyZXR1cm5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBBbGxvdy9EaXNhbGxvdyBydWxlc1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0YWRkRGlzYWxsb3dSdWxlOiAodGFyZ2V0U3ViLCB0YXJnZXREaXNhbGxvdyktPlxuXHRcdGRpc2FsbG93TGlzdCA9IEBzdWJzTWV0YVt0YXJnZXRTdWIuSURdLmRpc2FsbG93TGlzdCA/PSBnZW5PYmooKVxuXHRcdGRpc2FsbG93TGlzdFt0YXJnZXREaXNhbGxvdy5JRF0gPSAxXG5cdFx0cmV0dXJuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgUGxhY2Vob2xkZXJzXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRzY2FuRm9yUGhvbGRlcnM6ICgpLT4gdW5sZXNzIEBwaG9sZGVyVmFsdWVzXG5cdFx0QHBob2xkZXJWYWx1ZXMgPSBnZW5PYmooKVxuXHRcdEBwaG9sZGVySW5kZXhNYXAgPSBnZW5PYmooKVxuXHRcdEBwaG9sZGVyQ29udGV4dHMgPSBbXVxuXG5cdFx0aWYgY2hlY2tJZi5pc1N0cmluZyhAdmFsdWUpXG5cdFx0XHRAcGhvbGRlckNvbnRleHRzID0gQHZhbHVlLnNwbGl0IHBob2xkZXJSZWdFeFNwbGl0XG5cdFx0XHRcblx0XHRcdGluZGV4ID0gMFxuXHRcdFx0QHZhbHVlID0gQHZhbHVlLnJlcGxhY2UgcGhvbGRlclJlZ0V4LCAoZSwgcGhvbGRlcik9PlxuXHRcdFx0XHRAcGhvbGRlckluZGV4TWFwW2luZGV4KytdID0gcGhvbGRlclxuXHRcdFx0XHRAcGhvbGRlclZhbHVlc1twaG9sZGVyXSA9IHBob2xkZXJcblx0XHRcblx0XHRzY2FuVGV4dE5vZGVzUGxhY2Vob2xkZXJzKEBvYmplY3QsIEB0ZXh0Tm9kZXM9Z2VuT2JqKCkpIGlmIEBpc0RvbSBhbmQgQHByb3BlcnR5IGlzIHRleHRDb250ZW50XG5cdFx0cmV0dXJuXG5cdFxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFBvbGxpbmdcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGFkZFBvbGxJbnRlcnZhbDogKHRpbWUpLT4gaWYgQHR5cGUgaXNudCAnRXZlbnQnXG5cdFx0QHJlbW92ZVBvbGxJbnRlcnZhbCgpXG5cdFx0XG5cdFx0QHBvbGxJbnRlcnZhbCA9IHNldEludGVydmFsICgpPT5cblx0XHRcdHBvbGxlZFZhbHVlID0gQGZldGNoRGlyZWN0VmFsdWUoKVxuXG5cdFx0XHRAc2V0VmFsdWUgcG9sbGVkVmFsdWUsIEAsIHRydWVcblx0XHQsIHRpbWVcblxuXG5cdHJlbW92ZVBvbGxJbnRlcnZhbDogKCktPlxuXHRcdGNsZWFySW50ZXJ2YWwoQHBvbGxJbnRlcnZhbClcblx0XHRAcG9sbEludGVydmFsID0gbnVsbFxuXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIEV2ZW50c1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0XG5cdGFkZFVwZGF0ZUxpc3RlbmVyOiAoZXZlbnROYW1lLCB0YXJnZXRQcm9wZXJ0eSktPlxuXHRcdEBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lciBldmVudE5hbWUsIChldmVudCk9PlxuXHRcdFx0dW5sZXNzIGV2ZW50Ll9zYlxuXHRcdFx0XHRzaG91bGRSZWRlZmluZVZhbHVlID0gQHNlbGZUcmFuc2Zvcm0gYW5kIEBpc0RvbUlucHV0XG5cdFx0XHRcdEBzZXRWYWx1ZShAb2JqZWN0W3RhcmdldFByb3BlcnR5XSwgbnVsbCwgIXNob3VsZFJlZGVmaW5lVmFsdWUsIHRydWUpXG5cblx0XHRcdHJldHVyblxuXHRcdFxuXHRcdCwgZmFsc2Vcblx0XHRyZXR1cm5cblx0XG5cblx0YXR0YWNoRXZlbnRzOiAoKS0+XG5cdFx0aWYgQGV2ZW50TmFtZVxuXHRcdFx0QHJlZ2lzdGVyRXZlbnQoQGV2ZW50TmFtZSlcblx0XHRcblx0XHRlbHNlIGlmIEBpc0RvbUlucHV0XG5cdFx0XHRAYWRkVXBkYXRlTGlzdGVuZXIoJ2lucHV0JywgJ3ZhbHVlJylcblx0XHRcdEBhZGRVcGRhdGVMaXN0ZW5lcignY2hhbmdlJywgJ3ZhbHVlJylcblxuXHRcdGVsc2UgaWYgbm90IEBpc011bHRpQ2hvaWNlIGFuZCAoQHR5cGUgaXMgJ0RPTVJhZGlvJyBvciBAdHlwZSBpcyAnRE9NQ2hlY2tib3gnKVxuXHRcdFx0QGFkZFVwZGF0ZUxpc3RlbmVyKCdjaGFuZ2UnLCAnY2hlY2tlZCcpXG5cblx0XHRyZXR1cm5cblx0XG5cblxuXHRyZWdpc3RlckV2ZW50OiAoZXZlbnROYW1lKS0+XG5cdFx0QGF0dGFjaGVkRXZlbnRzLnB1c2goZXZlbnROYW1lKVxuXHRcdEBldmVudEhhbmRsZXIgPSBldmVudFVwZGF0ZUhhbmRsZXIuYmluZChAKSB1bmxlc3MgQGV2ZW50SGFuZGxlclxuXHRcdFxuXHRcdEBvYmplY3RbQGV2ZW50TWV0aG9kcy5saXN0ZW5dKGV2ZW50TmFtZSwgQGV2ZW50SGFuZGxlcilcblx0XHRyZXR1cm5cblxuXG5cblx0dW5SZWdpc3RlckV2ZW50OiAoZXZlbnROYW1lKS0+XG5cdFx0QGF0dGFjaGVkRXZlbnRzLnNwbGljZSBAYXR0YWNoZWRFdmVudHMuaW5kZXhPZihldmVudE5hbWUpLCAxXG5cblx0XHRAb2JqZWN0W0BldmVudE1ldGhvZHMucmVtb3ZlXShldmVudE5hbWUsIEBldmVudEhhbmRsZXIpXG5cdFx0cmV0dXJuXG5cblxuXG5cdGVtaXRFdmVudDogKGV4dHJhRGF0YSktPlxuXHRcdGV2ZW50T2JqZWN0ID0gQGV2ZW50TmFtZVxuXHRcdFxuXHRcdGlmIEBldmVudE1ldGhvZHMuZW1pdCBpcyAnZGlzcGF0Y2hFdmVudCdcblx0XHRcdHVubGVzcyBAZXZlbnRPYmplY3Rcblx0XHRcdFx0QGV2ZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jylcblx0XHRcdFx0QGV2ZW50T2JqZWN0LmluaXRFdmVudChAZXZlbnROYW1lLCB0cnVlLCB0cnVlKVxuXG5cdFx0XHRAZXZlbnRPYmplY3QuYmluZGluZ0RhdGEgPSBleHRyYURhdGFcblx0XHRcdGV2ZW50T2JqZWN0ID0gQGV2ZW50T2JqZWN0XG5cblx0XHRAb2JqZWN0W0BldmVudE1ldGhvZHMuZW1pdF0oZXZlbnRPYmplY3QsIGV4dHJhRGF0YSlcblx0XHRyZXR1cm5cblxuXG5cblxuZXZlbnRVcGRhdGVIYW5kbGVyID0gKCktPiB1bmxlc3MgQGlzRW1pdHRlclxuXHRAc2V0VmFsdWUoYXJndW1lbnRzW0Bwcm9wZXJ0eV0sIG51bGwsIHRydWUpXG5cdHJldHVyblxuXG5cblxuXG5cbiIsImVsc2UgaWYgQGlzRG9tSW5wdXRcblx0aWYgbm90IGZyb21DaGFuZ2VFdmVudFxuXHRcdEBvcmlnU2V0dGVyKG5ld1ZhbHVlKVxuXHRcdEBvYmplY3QuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCgpKSBpZiBzZXR0aW5ncy5kaXNwYXRjaEV2ZW50c1xuXHRcblx0ZWxzZSBpZiBuZXdWYWx1ZSBpc250IEBvcmlnR2V0dGVyKCkgIyBJTVBMSUNJVDogYW5kIGZyb21DaGFuZ2VFdmVudFxuXHRcdHByZXZDdXJzcm9yID0gQG9iamVjdC5zZWxlY3Rpb25TdGFydFxuXHRcdEBvcmlnU2V0dGVyKG5ld1ZhbHVlKVxuXHRcdEBvYmplY3Quc2V0U2VsZWN0aW9uUmFuZ2UocHJldkN1cnNyb3IsIHByZXZDdXJzcm9yKSBpZiBwcmV2Q3Vyc3JvciIsIndoZW4gJ0RPTVJhZGlvJ1xuXHRpZiBAaXNNdWx0aUNob2ljZSAjIFRoZSBuZXdWYWx1ZSB2YXIgd2lsbCBob2xkIHRoZSByYWRpbyBmaWVsZCBiaW5kaW5nIGFzIGl0cyB2YWx1ZSBpZiB0aGUgdXBkYXRlIGlzIGNvbWluZyBmcm9tIHRoZSByYWRpbyBmaWVsZCdzIGNoYW5nZSBldmVudFxuXHRcdHRhcmdldENob2ljZUJpbmRpbmcgPSBpZiBjaGVja0lmLmlzQmluZGluZyhuZXdWYWx1ZSkgdGhlbiBuZXdWYWx1ZSBlbHNlIEBjaG9pY2VzW25ld1ZhbHVlXVxuXG5cdFx0aWYgdGFyZ2V0Q2hvaWNlQmluZGluZ1xuXHRcdFx0bmV3VmFsdWUgPSB0YXJnZXRDaG9pY2VCaW5kaW5nLm9iamVjdC52YWx1ZVxuXHRcdFxuXHRcdFx0Zm9yIG4sY2hvaWNlQmluZGluZyBvZiBAY2hvaWNlc1xuXHRcdFx0XHRjaG9pY2VCaW5kaW5nLnNldFZhbHVlKGNob2ljZUJpbmRpbmcuSUQgaXMgdGFyZ2V0Q2hvaWNlQmluZGluZy5JRCwgcHVibGlzaGVyKVxuXHRcdGVsc2Vcblx0XHRcdG5ld1ZhbHVlID0gQHZhbHVlICMgU2V0IHRvIHByZXYgdmFsdWVcblx0XG5cdGVsc2Vcblx0XHRuZXdWYWx1ZSA9ICEhbmV3VmFsdWUgIyBDb252ZXJ0IHRvIEJvb2xlYW5cblx0XHRyZXR1cm4gaWYgbmV3VmFsdWUgaXMgQHZhbHVlXG5cdFx0QG9iamVjdC5jaGVja2VkID0gbmV3VmFsdWUgdW5sZXNzIEBvYmplY3QuY2hlY2tlZCBpcyBuZXdWYWx1ZVxuXHRcdEBvYmplY3QuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCgpKSBpZiBuZXdWYWx1ZSBhbmQgc2V0dGluZ3MuZGlzcGF0Y2hFdmVudHMgIyBPbmx5IGVtaXQgaWYgdGhlIHZhbHVlIGlzIHRydWUgKGluIG9yZGVyIHRvIGNvbmZvcm0gdG8gd2ViIHN0YW5kYXJkcylcblxuXG53aGVuICdET01DaGVja2JveCdcblx0aWYgQGlzTXVsdGlDaG9pY2UgIyBUaGUgbmV3VmFsdWUgdmFyIHdpbGwgaG9sZCB0aGUgY2hlY2tib3ggZmllbGQgYmluZGluZyBhcyBpdHMgdmFsdWUgaWYgdGhlIHVwZGF0ZSBpcyBjb21pbmcgZnJvbSB0aGUgY2hlY2tib3ggZmllbGQncyBjaGFuZ2UgZXZlbnRcblx0XHRvdmVyd3JpdGVQcmV2aW91cyA9IG5vdCBjaGVja0lmLmlzQmluZGluZyhuZXdWYWx1ZSkgIyBNZWFucyB0aGF0IGEgbmV3IGFycmF5IHdhcyBzdXBwbGllZFxuXHRcdG5ld0Nob2ljZXMgPSBbXS5jb25jYXQobmV3VmFsdWUpICMgVGhpcyAqbm9ybWFsaXplcyogdGhlIG5ldyB2YWx1ZSBpbnRvIGFuIGFycmF5XG5cdFx0XG5cdFx0Zm9yIHZhbHVlLGluZGV4IGluIG5ld0Nob2ljZXNcblx0XHRcdG5ld0Nob2ljZXNbaW5kZXhdID0gaWYgY2hlY2tJZi5pc0JpbmRpbmcodmFsdWUpIHRoZW4gdmFsdWUgZWxzZSBAY2hvaWNlc1t2YWx1ZV1cblx0XHRcblx0XHRuZXdWYWx1ZUFycmF5ID0gW11cblx0XHRmb3IgY2hvaWNlTmFtZSxjaG9pY2VCaW5kaW5nIG9mIEBjaG9pY2VzXG5cdFx0XHRpZiBvdmVyd3JpdGVQcmV2aW91c1xuXHRcdFx0XHRuZXdDaG9pY2VWYWx1ZSA9IHRhcmdldEluY2x1ZGVzKG5ld0Nob2ljZXMsIGNob2ljZUJpbmRpbmcpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5ld0Nob2ljZVZhbHVlID0gY2hvaWNlQmluZGluZy52YWx1ZVxuXHRcdFx0XG5cdFx0XHRjaG9pY2VCaW5kaW5nLnNldFZhbHVlKG5ld0Nob2ljZVZhbHVlLCBwdWJsaXNoZXIpXG5cdFx0XHRuZXdWYWx1ZUFycmF5LnB1c2goY2hvaWNlTmFtZSkgaWYgbmV3Q2hvaWNlVmFsdWVcblxuXHRcdG5ld1ZhbHVlID0gbmV3VmFsdWVBcnJheVxuXG5cblx0ZWxzZVxuXHRcdG5ld1ZhbHVlID0gISFuZXdWYWx1ZSAjIENvbnZlcnQgdG8gQm9vbGVhblxuXHRcdHJldHVybiBpZiBuZXdWYWx1ZSBpcyBAdmFsdWVcblx0XHR1bmxlc3MgQG9iamVjdC5jaGVja2VkIGlzIG5ld1ZhbHVlXG5cdFx0XHRAb2JqZWN0LmNoZWNrZWQgPSBuZXdWYWx1ZVxuXHRcdFx0QG9iamVjdC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KCkpIGlmIHNldHRpbmdzLmRpc3BhdGNoRXZlbnRzXG5cblxuXG53aGVuICdET01BdHRyJ1xuXHRAb2JqZWN0LnNldEF0dHJpYnV0ZShAcHJvcGVydHksIG5ld1ZhbHVlKVxuIiwiIyMjKlxuICogU3RhZ2UgZGVmaW5pdGlvbnM6XG4gKiBcbiAqIDA6IFNlbGVjdGlvbjpcdFx0XHRHb3Qgc2VsZWN0b3IsIGF3YWl0aW5nIG9iamVjdC5cbiAqIDE6IEluZGljYXRpb246XHRcdFx0R290IG9iamVjdCwgYXdhaXRpbmcgcHJveGllZCBwcm9wZXJ0eSAvIGZ1bmN0aW9uIC8gQmluZGluZy1vYmplY3QuXG4gKiAyOiBCaW5kaW5nIENvbXBsZXRlOlx0XHRDb21wbGV0ZSwgYXdhaXRpbmcgYWRkaXRpb25hbCAob3B0aW9uYWwpIGJpbmRpbmdzL211dGF0aW9ucy5cbiMjI1xuQmluZGluZ0ludGVyZmFjZSA9IChvcHRpb25zLCBpbmhlcml0ZWRTdGF0ZSktPlxuXHRpZiBpbmhlcml0ZWRTdGF0ZVxuXHRcdGV4dGVuZFN0YXRlKEAsIGluaGVyaXRlZFN0YXRlKVxuXHRcdEBzdGFnZSA9IDFcblx0ZWxzZVxuXHRcdEBzdGFnZSA9IDBcblx0XHRAc3VicyA9IFtdXG5cdFx0QG9wdGlvbnNQYXNzZWQgPSBvcHRpb25zIHx8PSB7fVxuXHRcdEBvcHRpb25zID0ge31cblx0XHRmb3Iga2V5IG9mIGRlZmF1bHRPcHRpb25zXG5cdFx0XHRAb3B0aW9uc1trZXldID0gaWYgb3B0aW9uc1trZXldPyB0aGVuIG9wdGlvbnNba2V5XSBlbHNlIGRlZmF1bHRPcHRpb25zW2tleV1cblx0XG5cdHJldHVybiBAXHRcdFx0XG5cdFxuXG5cblxuaW1wb3J0ICcuL3Byb3RvdHlwZS1wcml2YXRlJ1xuaW1wb3J0ICcuL3Byb3RvdHlwZS1wdWJsaWMnIiwiQmluZGluZ0ludGVyZmFjZVByaXZhdGUgPVxuXHRzZWxmQ2xvbmU6ICgpLT4gbmV3IEJpbmRpbmdJbnRlcmZhY2UobnVsbCwgQClcblx0XG5cdGRlZmluZU1haW5Qcm9wczogKGJpbmRpbmcpLT5cblx0XHRAXyA9IGJpbmRpbmdcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyBALFxuXHRcdFx0J3ZhbHVlJzpcdFx0Z2V0OiAoKS0+IGJpbmRpbmcudmFsdWVcblx0XHRcdCdvcmlnaW5hbCc6XHRcdGdldDogKCktPiBiaW5kaW5nLm9iamVjdHMgb3IgYmluZGluZy5vYmplY3Rcblx0XHRcdCdzdWJzY3JpYmVycyc6XHRnZXQ6ICgpLT4gYmluZGluZy5zdWJzLnNsaWNlKCkubWFwIChzdWIpLT4gc3ViLm9iamVjdFxuXG5cblxuXG5cdGNyZWF0ZUJpbmRpbmc6IChzdWJqZWN0LCBuZXdPYmplY3RUeXBlLCBiaW5kaW5nSW50ZXJmYWNlLCBpc0Z1bmN0aW9uKS0+XG5cdFx0QG9iamVjdCA9IHN1YmplY3Rcblx0XHRjYWNoZWRCaW5kaW5nID0gY2FjaGUuZ2V0KHN1YmplY3QsIGlzRnVuY3Rpb24sIEBzZWxlY3RvciwgQGlzTXVsdGlDaG9pY2UpXG5cdFx0XG5cdFx0aWYgY2FjaGVkQmluZGluZyAjIEV4aXQgZWFybHkgYnkgcmV0dXJuaW5nIHRoZSBzdWJqZWN0IGZyb20gY2FjaGUgaWYgaXMgYWxyZWFkeSBpbiB0aGVyZVxuXHRcdFx0cmV0dXJuIEBwYXRjaENhY2hlZEJpbmRpbmcoY2FjaGVkQmluZGluZylcblxuXHRcdGVsc2Vcblx0XHRcdG5ld0JpbmRpbmcgPSBuZXcgQmluZGluZyhzdWJqZWN0LCBuZXdPYmplY3RUeXBlLCBiaW5kaW5nSW50ZXJmYWNlKVxuXHRcdFx0Y2FjaGUuc2V0KG5ld0JpbmRpbmcsIGlzRnVuY3Rpb24pXG5cdFx0XHRyZXR1cm4gbmV3QmluZGluZ1xuXG5cblxuXHRwYXRjaENhY2hlZEJpbmRpbmc6IChjYWNoZWRCaW5kaW5nKS0+XG5cdFx0aWYgY2FjaGVkQmluZGluZy50eXBlIGlzICdPYmplY3RQcm9wJyBhbmQgQHByb3BlcnR5IG5vdCBvZiBAb2JqZWN0ICMgVGhpcyBwcm9wZXJ0eSB3YXMgbWFudWFsbHkgZGVsZXRlZCBhbmQgbmVlZHMgaXRzIHByb3AgdG8gYmUgcmUtZGVmaW5lZCBhcyBhIGxpdmUgb25lXG5cdFx0XHRjb252ZXJ0VG9MaXZlKGNhY2hlZEJpbmRpbmcsIEBvYmplY3QpXG5cblx0XHRpZiBAc2F2ZU9wdGlvbnNcblx0XHRcdGNhY2hlZEJpbmRpbmcub3B0aW9uc0RlZmF1bHRbb3B0aW9uXSA9IHZhbHVlIGZvciBvcHRpb24sdmFsdWUgb2YgQG9wdGlvbnNQYXNzZWRcblxuXHRcdGZvciBrZXksdmFsdWUgb2YgY2FjaGVkQmluZGluZy5vcHRpb25zRGVmYXVsdFxuXHRcdFx0QG9wdGlvbnNba2V5XSA9IGlmIGNoZWNrSWYuaXNEZWZpbmVkKEBvcHRpb25zUGFzc2VkW2tleV0pIHRoZW4gQG9wdGlvbnNQYXNzZWRba2V5XSBlbHNlIHZhbHVlXG5cdFx0XG5cdFx0cmV0dXJuIGNhY2hlZEJpbmRpbmdcblxuXG5cblx0c2V0UHJvcGVydHk6IChzdWJqZWN0KS0+XG5cdFx0c3ViamVjdCA9IHN1YmplY3QudG9TdHJpbmcoKSBpZiBjaGVja0lmLmlzTnVtYmVyKHN1YmplY3QpXG5cdFx0QHNlbGVjdG9yID0gQHByb3BlcnR5ID0gc3ViamVjdFxuXG5cdFx0XG5cdFx0dW5sZXNzIEBvcHRpb25zLnNpbXBsZVNlbGVjdG9yXG5cdFx0XHRpZiB0YXJnZXRJbmNsdWRlcyhzdWJqZWN0LCAnOicpXG5cdFx0XHRcdHNwbGl0ID0gc3ViamVjdC5zcGxpdCgnOicpXG5cdFx0XHRcdEBkZXNjcmlwdG9yID0gc3BsaXQuc2xpY2UoMCwgLTEpLmpvaW4oJzonKVxuXHRcdFx0XHRAcHJvcGVydHkgPSBzcGxpdFtzcGxpdC5sZW5ndGgtMV1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRpZiB0YXJnZXRJbmNsdWRlcyhzdWJqZWN0LCAnLicpICMgUGxhY2Vob2xkZXIgZXh0cmFjdGlvblxuXHRcdFx0XHRzcGxpdCA9IEBwcm9wZXJ0eS5zcGxpdCgnLicpICMgV2UgdXNlICdAcHJvcGVydHknIGluc3RlYWQgb2YgJ3N1YmplY3QnIGJlY2F1c2UgaXQgbWF5IGhhdmUgYmVlbiBtb2RpZmllZCBieSB0aGUgcHJldmlvdXMgJzonIGRlc2NyaXB0b3IgY2hlY2tcblx0XHRcdFx0QHByb3BlcnR5ID0gc3BsaXRbMF1cdFx0XHRcdFxuXHRcdFx0XHRAcGhvbGRlciA9IHNwbGl0LnNsaWNlKDEpLmpvaW4oJy4nKVxuXG5cblxuXHRcdFx0aWYgdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdldmVudCcpXG5cdFx0XHRcdGlmIHRhcmdldEluY2x1ZGVzKHN1YmplY3QsICcjJylcblx0XHRcdFx0XHRzcGxpdCA9IEBwcm9wZXJ0eS5zcGxpdCgnIycpXG5cdFx0XHRcdFx0QGV2ZW50TmFtZSA9IHNwbGl0WzBdXG5cdFx0XHRcdFx0QHByb3BlcnR5ID0gc3BsaXRbMV1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdEBldmVudE5hbWUgPSBAcHJvcGVydHlcblx0XHRcdFx0XHRAcHJvcGVydHkgPSAwXG5cblx0XHRcdFx0dGhyb3dXYXJuaW5nKCdiYWRFdmVudEFyZycsMSkgaWYgaXNOYU4gcGFyc2VJbnQoQHByb3BlcnR5KVxuXG5cdFx0cmV0dXJuIEBcblxuXG5cblx0c2V0T2JqZWN0OiAoc3ViamVjdCwgaXNGdW5jdGlvbiktPlxuXHRcdEBzdGFnZSA9IDFcblx0XHRpbXBvcnQgJy4vcHJvdG90eXBlLXByaXZhdGUuc2V0T2JqZWN0LXBhcnNlRE9NT2JqZWN0J1xuXHRcdFxuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiBpc0Z1bmN0aW9uXG5cdFx0XHRcdG5ld09iamVjdFR5cGUgPSAnRnVuYydcblx0XHRcdFxuXHRcdFx0d2hlbiBAcGhvbGRlclxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ1Bob2xkZXInXG5cdFx0XHRcblx0XHRcdHdoZW4gdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdhcnJheScpIGFuZCBjaGVja0lmLmlzQXJyYXkoc3ViamVjdFtAcHJvcGVydHldKVxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0FycmF5J1xuXHRcdFx0XG5cdFx0XHR3aGVuIHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnZXZlbnQnKVxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0V2ZW50J1xuXHRcdFx0XHRpbXBvcnQgJy4vcHJvdG90eXBlLXByaXZhdGUuc2V0T2JqZWN0LWRlZmluZUV2ZW50TWV0aG9kcydcblxuXHRcdFx0d2hlbiB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ2Z1bmMnKVxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ1Byb3h5J1xuXHRcdFx0XG5cdFx0XHR3aGVuIGlzRG9tUmFkaW8gXG5cdFx0XHRcdG5ld09iamVjdFR5cGUgPSAnRE9NUmFkaW8nXG5cblx0XHRcdHdoZW4gaXNEb21DaGVja2JveCBcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdET01DaGVja2JveCdcblxuXHRcdFx0d2hlbiB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ2F0dHInKVxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0RPTUF0dHInXG5cblx0XHRcdGVsc2Vcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdPYmplY3RQcm9wJ1xuXHRcdFxuXG5cdFx0aWYgdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdtdWx0aScpXG5cdFx0XHR0aHJvd0Vycm9yKCdlbXB0eUxpc3QnKSBpZiBub3Qgc3ViamVjdC5sZW5ndGhcblx0XHRcdEBkZWZpbmVNYWluUHJvcHMgbmV3IEdyb3VwQmluZGluZyhALCBzdWJqZWN0LCBuZXdPYmplY3RUeXBlKVxuXHRcdGVsc2Vcblx0XHRcdEBkZWZpbmVNYWluUHJvcHMgQGNyZWF0ZUJpbmRpbmcoc3ViamVjdCwgbmV3T2JqZWN0VHlwZSwgQCwgaXNGdW5jdGlvbilcblxuXG5cdFx0aWYgdGFyZ2V0SW5jbHVkZXMoQF8udHlwZSwgJ0V2ZW50Jykgb3IgdGFyZ2V0SW5jbHVkZXMoQF8udHlwZSwgJ1Byb3h5Jylcblx0XHRcdEBvcHRpb25zLnVwZGF0ZU9uQmluZCA9IGZhbHNlXG5cdFx0ZWxzZSBpZiB0YXJnZXRJbmNsdWRlcyhAXy50eXBlLCAnRnVuYycpXG5cdFx0XHRAb3B0aW9ucy51cGRhdGVPbkJpbmQgPSB0cnVlXG5cblxuXHRcdGlmIEBjb21wbGV0ZUNhbGxiYWNrXG5cdFx0XHRyZXR1cm4gQGNvbXBsZXRlQ2FsbGJhY2soQClcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gQFxuXG5cblxuXG5cdGFkZFRvUHVibGlzaGVyOiAocHVibGlzaGVySW50ZXJmYWNlKS0+XG5cdFx0cHVibGlzaGVySW50ZXJmYWNlLnN0YWdlID0gMlxuXHRcdHB1Ymxpc2hlckludGVyZmFjZS5zdWJzLnB1c2goQClcblx0XHRhbHJlYWR5SGFkU3ViID0gcHVibGlzaGVySW50ZXJmYWNlLl8uYWRkU3ViKEBfLCBwdWJsaXNoZXJJbnRlcmZhY2Uub3B0aW9ucywgcHVibGlzaGVySW50ZXJmYWNlLnVwZGF0ZU9uY2UpXG5cblx0XHRpZiBwdWJsaXNoZXJJbnRlcmZhY2UudXBkYXRlT25jZVxuXHRcdFx0ZGVsZXRlIHB1Ymxpc2hlckludGVyZmFjZS51cGRhdGVPbmNlXG5cdFx0XG5cdFx0ZWxzZSBpZiBwdWJsaXNoZXJJbnRlcmZhY2Uub3B0aW9ucy51cGRhdGVPbkJpbmQgYW5kIG5vdCBhbHJlYWR5SGFkU3ViXG5cdFx0XHRpZiBAXy5pc011bHRpXG5cdFx0XHRcdHB1Ymxpc2hlckludGVyZmFjZS5fLnVwZGF0ZVN1YihiaW5kaW5nLCBwdWJsaXNoZXJJbnRlcmZhY2UuXykgZm9yIGJpbmRpbmcgaW4gQF8uYmluZGluZ3Ncblx0XHRcdGVsc2Vcblx0XHRcdFx0cHVibGlzaGVySW50ZXJmYWNlLl8udXBkYXRlU3ViKEBfLCBwdWJsaXNoZXJJbnRlcmZhY2UuXylcblxuXHRcdHJldHVyblxuXG5cblxuXG5cbiIsImlzSXRlcmFibGUgPSBzdWJqZWN0IGlzbnQgd2luZG93IGFuZCBjaGVja0lmLmlzSXRlcmFibGUoc3ViamVjdCkgYW5kIG5vdCBzdWJqZWN0Lm5vZGVUeXBlXG5zYW1wbGVJdGVtID0gaWYgaXNJdGVyYWJsZSB0aGVuIHN1YmplY3RbMF0gZWxzZSBzdWJqZWN0XG5cbmlmIG5vdCBzYW1wbGVJdGVtXG5cdHRocm93RXJyb3IoJ2VtcHR5TGlzdCcpIGlmIGlzSXRlcmFibGUgYW5kIGNoZWNrSWYuaXNFbENvbGxlY3Rpb24oc3ViamVjdClcblxuZWxzZSBpZiBAaXNEb20gPSBjaGVja0lmLmlzRG9tKHNhbXBsZUl0ZW0pXG5cblx0aWYgQHByb3BlcnR5IGlzICdjaGVja2VkJ1xuXHRcdGlzRG9tUmFkaW8gPSBzYW1wbGVJdGVtIGFuZCBjaGVja0lmLmlzRG9tUmFkaW8oc2FtcGxlSXRlbSlcblx0XHRpc0RvbUNoZWNrYm94ID0gbm90IGlzRG9tUmFkaW8gYW5kIHNhbXBsZUl0ZW0gYW5kIGNoZWNrSWYuaXNEb21DaGVja2JveChzYW1wbGVJdGVtKVxuXHRcblx0ZWxzZSBpZiBAcHJvcGVydHkgaXMgJ3ZhbHVlJ1xuXHRcdEBpc0RvbUlucHV0ID0gY2hlY2tJZi5pc0RvbUlucHV0KHNhbXBsZUl0ZW0pXG5cdFxuXG5cdGlmIGlzSXRlcmFibGUgYW5kIG5vdCB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ211bHRpJylcblx0XHRpZiBzdWJqZWN0Lmxlbmd0aCBpcyAxXG5cdFx0XHRzdWJqZWN0ID0gc3ViamVjdFswXVxuXG5cdFx0ZWxzZVxuXHRcdFx0aWYgKGlzRG9tUmFkaW8gb3IgaXNEb21DaGVja2JveCkgYW5kIG5vdCBjaGVja0lmLmRvbUVsc0FyZVNhbWUoc3ViamVjdClcblx0XHRcdFx0cmV0dXJuIHRocm93V2FybmluZygnbWl4ZWRFbExpc3QnLDMpXHRcdFx0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGlmIGlzRG9tUmFkaW8gb3IgaXNEb21DaGVja2JveFxuXHRcdFx0XHRcdEBpc011bHRpQ2hvaWNlID0gdHJ1ZVxuXHRcdFx0XHRcdHN1YmplY3QgPSBbXS5zbGljZS5jYWxsKHN1YmplY3QpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdWJqZWN0ID0gc3ViamVjdFswXVxuXHRcdFx0XHRcdHRocm93V2FybmluZygnb25seU9uZURPTUVsZW1lbnQnLDMpXG5cblxuXG5cbiIsIkBldmVudE1ldGhvZHMgPSBsaXN0ZW46QG9wdGlvbnNQYXNzZWQubGlzdGVuTWV0aG9kLCByZW1vdmU6QG9wdGlvbnNQYXNzZWQucmVtb3ZlTWV0aG9kLCBlbWl0OkBvcHRpb25zUGFzc2VkLmVtaXRNZXRob2RcblxuXG5cbmlmIG5vdCBzdWJqZWN0W0BldmVudE1ldGhvZHMubGlzdGVuXVxuXHRAZXZlbnRNZXRob2RzLmxpc3RlbiA9IGlmIGNoZWNrSWYuaXNEb21Ob2RlKHN1YmplY3QpIHRoZW4gJ2FkZEV2ZW50TGlzdGVuZXInIGVsc2UgJ29uJ1xuXG5pZiBub3Qgc3ViamVjdFtAZXZlbnRNZXRob2RzLnJlbW92ZV1cblx0QGV2ZW50TWV0aG9kcy5yZW1vdmUgPSBpZiBjaGVja0lmLmlzRG9tTm9kZShzdWJqZWN0KSB0aGVuICdyZW1vdmVFdmVudExpc3RlbmVyJyBlbHNlICdyZW1vdmVMaXN0ZW5lcidcblxuaWYgbm90IHN1YmplY3RbQGV2ZW50TWV0aG9kcy5lbWl0XVxuXHRAZXZlbnRNZXRob2RzLmVtaXQgPSBpZiBjaGVja0lmLmlzRG9tTm9kZShzdWJqZWN0KSB0aGVuICdkaXNwYXRjaEV2ZW50JyBlbHNlICdlbWl0JyIsIkJpbmRpbmdJbnRlcmZhY2U6OiA9IE9iamVjdC5jcmVhdGUgQmluZGluZ0ludGVyZmFjZVByaXZhdGUsXG5cdG9mOlx0XHRcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX29mIGlmIG5vdCBAc3RhZ2VcdFx0XHQjPT09IGlmIHN0YWdlIGlzIDBcblx0c2V0Olx0XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9zZXQgaWYgQHN0YWdlXHRcdFx0XHQjPT09IGlmIHN0YWdlIGlzIDEgb3IgMlxuXHRjaGFpblRvOlx0XHRcdGdldDogKCktPiBNRVRIT0RfY2hhaW5UbyBpZiBAc3RhZ2UgaXMgMlxuXHR0cmFuc2Zvcm1TZWxmOlx0XHRnZXQ6ICgpLT4gTUVUSE9EX3RyYW5zZm9ybVNlbGYgaWYgQHN0YWdlIGlzIDFcblx0dHJhbnNmb3JtOlx0XHRcdGdldDogKCktPiBNRVRIT0RfdHJhbnNmb3JtIGlmIEBzdGFnZSBpcyAyXG5cdHRyYW5zZm9ybUFsbDpcdFx0Z2V0OiAoKS0+IE1FVEhPRF90cmFuc2Zvcm1BbGwgaWYgQHN0YWdlIGlzIDJcblx0Y29uZGl0aW9uOlx0XHRcdGdldDogKCktPiBNRVRIT0RfY29uZGl0aW9uIGlmIEBzdGFnZSBpcyAyXG5cdGNvbmRpdGlvbkFsbDpcdFx0Z2V0OiAoKS0+IE1FVEhPRF9jb25kaXRpb25BbGwgaWYgQHN0YWdlIGlzIDJcblx0Ym90aFdheXM6XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9ib3RoV2F5cyBpZiBAc3RhZ2UgaXMgMlxuXHR1bkJpbmQ6XHRcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX3VuQmluZCBpZiBAc3RhZ2UgaXMgMlxuXHRwb2xsRXZlcnk6XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9wb2xsRXZlcnkgaWYgQHN0YWdlICM9PT0gaWYgc3RhZ2UgaXMgMSBvciAyXG5cdHN0b3BQb2xsaW5nOlx0XHRnZXQ6ICgpLT4gTUVUSE9EX3N0b3BQb2xsaW5nIGlmIEBzdGFnZSAjPT09IGlmIHN0YWdlIGlzIDEgb3IgMlxuXHRzZXRPcHRpb246XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9zZXRPcHRpb24gaWYgQHN0YWdlIGlzIDJcblx0ZGlzYWxsb3dGcm9tOlx0XHRnZXQ6ICgpLT4gaWYgQHN0YWdlIGlzIDIgYW5kICh0aGlzSW50ZXJmYWNlPUApXG5cdFx0XHRcdFx0XHRcdGdlblByb3hpZWRJbnRlcmZhY2UgZmFsc2UsIChkaXNhbGxvd0ludGVyZmFjZSktPlxuXHRcdFx0XHRcdFx0XHRcdHN1YkludGVyZmFjZSA9IHRoaXNJbnRlcmZhY2Uuc3Vic1t0aGlzSW50ZXJmYWNlLnN1YnMubGVuZ3RoLTFdXG5cdFx0XHRcdFx0XHRcdFx0dGhpc0ludGVyZmFjZS5fLmFkZERpc2FsbG93UnVsZShzdWJJbnRlcmZhY2UuXywgZGlzYWxsb3dJbnRlcmZhY2UuXylcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzSW50ZXJmYWNlXG5cdFxuXHR1cGRhdGVPbjpcdFx0XHRnZXQ6ICgpLT4gaWYgQHN0YWdlIGFuZCAodGhpc0ludGVyZmFjZT1AKSAjPT09IGlmIHN0YWdlIGlzIDEgb3IgMlxuXHRcdFx0XHRcdFx0XHRnZW5Qcm94aWVkSW50ZXJmYWNlIGZhbHNlLCAoc3ViSW50ZXJmYWNlKS0+XG5cdFx0XHRcdFx0XHRcdFx0aWYgc3ViSW50ZXJmYWNlLl8gaXNudCB0aGlzSW50ZXJmYWNlLl9cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXNJbnRlcmZhY2UuXy5wdWJzTWFwW3N1YkludGVyZmFjZS5fLklEXSA9IHN1YkludGVyZmFjZS5fXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJJbnRlcmZhY2UuXy5hZGRTdWIgZ2VuU2VsZlVwZGF0ZXIodGhpc0ludGVyZmFjZS5fLCB0cnVlKSwgc3ViSW50ZXJmYWNlLm9wdGlvbnMsIGZhbHNlLCB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXNJbnRlcmZhY2Vcblx0XG5cblx0cmVtb3ZlVXBkYXRlcjpcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBhbmQgKHRoaXNJbnRlcmZhY2U9QCkgYW5kIChzZWxmVXBkYXRlcj1AXy5zZWxmVXBkYXRlcikgIz09PSBpZiBzdGFnZSBpcyAxIG9yIDJcblx0XHRcdFx0XHRcdFx0Z2VuUHJveGllZEludGVyZmFjZSBmYWxzZSwgKHN1YkludGVyZmFjZSktPlxuXHRcdFx0XHRcdFx0XHRcdGlmIHN1YkludGVyZmFjZS5fLnN1YnNNZXRhW3NlbGZVcGRhdGVyLklEXVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXNJbnRlcmZhY2UuXy5wdWJzTWFwW3N1YkludGVyZmFjZS5fLklEXVxuXHRcdFx0XHRcdFx0XHRcdFx0c3ViSW50ZXJmYWNlLl8ucmVtb3ZlU3ViKHNlbGZVcGRhdGVyKVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cblxuXHR0bzpcdFx0XHRcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBpcyAxIGFuZCAodGhpc0ludGVyZmFjZT1AKVxuXHRcdFx0XHRcdFx0XHRnZW5Qcm94aWVkSW50ZXJmYWNlIHRydWUsIChzdWJJbnRlcmZhY2UpLT5cblx0XHRcdFx0XHRcdFx0XHRpZiBzdWJJbnRlcmZhY2UuXyBpc250IHRoaXNJbnRlcmZhY2UuX1xuXHRcdFx0XHRcdFx0XHRcdFx0c3ViSW50ZXJmYWNlLmFkZFRvUHVibGlzaGVyKHRoaXNJbnRlcmZhY2UpXG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXNJbnRlcmZhY2Vcblx0XG5cblx0YW5kOlx0XHRcdFx0Z2V0OiAoKS0+XG5cdFx0XHRcdFx0XHRcdGNsb25lSW50ZXJmYWNlID0gQHNlbGZDbG9uZSgpXG5cdFx0XHRcdFx0XHRcdGlmIEBzdGFnZSBpcyAyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNsb25lSW50ZXJmYWNlXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZiBAc3RhZ2UgaXMgMVxuXHRcdFx0XHRcdFx0XHRcdGlmIG5vdCBjbG9uZUludGVyZmFjZS5fLmlzTXVsdGlcblx0XHRcdFx0XHRcdFx0XHRcdGNsb25lQmluZGluZyA9IGNsb25lSW50ZXJmYWNlLl9cblx0XHRcdFx0XHRcdFx0XHRcdGNsb25lSW50ZXJmYWNlLl8gPSBjbG9uZUludGVyZmFjZS5fID0gbmV3IEdyb3VwQmluZGluZyhjbG9uZUludGVyZmFjZSlcblx0XHRcdFx0XHRcdFx0XHRcdGNsb25lSW50ZXJmYWNlLl8uYWRkQmluZGluZyhjbG9uZUJpbmRpbmcpXG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGdlblByb3hpZWRJbnRlcmZhY2UgZmFsc2UsIChzaWJsaW5nSW50ZXJmYWNlKS0+XG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9uZUludGVyZmFjZS5fLmFkZEJpbmRpbmcoc2libGluZ0ludGVyZmFjZS5fKVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNsb25lSW50ZXJmYWNlXG5cdFxuXG5cdG9uY2U6XHRcdFx0XHRnZXQ6ICgpLT4gaWYgQHN0YWdlIGlzIDFcblx0XHRcdFx0XHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBAc2VsZkNsb25lKClcblx0XHRcdFx0XHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4udXBkYXRlT25jZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVyZmFjZVRvUmV0dXJuXG5cblx0IyA9PT09IEFsaWFzZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdHVwZGF0ZTpcdFx0XHRcdGdldDogKCktPiBAc2V0XG5cdHR3b1dheTpcdFx0XHRcdGdldDogKCktPiBAYm90aFdheXNcblx0cGlwZTpcdFx0XHRcdGdldDogKCktPiBAY2hhaW5Ub1xuXG5cblxuXG5NRVRIT0Rfb2YgPSAob2JqZWN0KS0+XG5cdHRocm93RXJyb3JCYWRBcmcob2JqZWN0KSB1bmxlc3MgY2hlY2tJZi5pc09iamVjdChvYmplY3QpIG9yIGNoZWNrSWYuaXNGdW5jdGlvbihvYmplY3QpXG5cdFxuXHRpZiBjaGVja0lmLmlzQmluZGluZ0ludGVyZmFjZShvYmplY3QpXG5cdFx0b2JqZWN0ID0gb2JqZWN0Lm9iamVjdFxuXG5cdEBzdGFnZSA9IDFcblx0cmV0dXJuIEBzZXRPYmplY3Qob2JqZWN0KVxuXG5cblxuXG5cbk1FVEhPRF9jaGFpblRvID0gKHN1YmplY3QsIHNwZWNpZmljT3B0aW9ucywgc2F2ZU9wdGlvbnMpLT5cblx0cmV0dXJuIFNpbXBseUJpbmQoQHN1YnNbQHN1YnMubGVuZ3RoLTFdKS50byhzdWJqZWN0LCBzcGVjaWZpY09wdGlvbnMsIHNhdmVPcHRpb25zKVxuXG5cblxuXG5cbk1FVEhPRF9zZXQgPSAobmV3VmFsdWUpLT5cblx0QF8uc2V0VmFsdWUobmV3VmFsdWUpXG5cdHJldHVybiBAXG5cblxuXG5cblxuXG5cblxuTUVUSE9EX3RyYW5zZm9ybVNlbGYgPSAodHJhbnNmb3JtRm4pLT4gIyBBcHBsaWVkIG9ubHkgdG8gdGhlIGxhc3Qgc3ViXG5cdGlmIG5vdCBjaGVja0lmLmlzRnVuY3Rpb24odHJhbnNmb3JtRm4pXG5cdFx0dGhyb3dXYXJuaW5nKCdmbk9ubHknLDEpXG5cdGVsc2Vcblx0XHRAXy5zZXRTZWxmVHJhbnNmb3JtKHRyYW5zZm9ybUZuLCBAb3B0aW9ucy51cGRhdGVPbkJpbmQpXG5cdFx0XG5cdHJldHVybiBAXG5cblxuTUVUSE9EX3RyYW5zZm9ybSA9ICh0cmFuc2Zvcm1GbiktPiAjIEFwcGxpZWQgb25seSB0byB0aGUgbGFzdCBzdWJcblx0QF8uYWRkTW9kaWZpZXJGbigndHJhbnNmb3JtRm4nLCBAc3Vicy5zbGljZSgtMSksIHRyYW5zZm9ybUZuLCBAb3B0aW9ucy51cGRhdGVPbkJpbmQpXG5cdHJldHVybiBAXG5cblxuTUVUSE9EX3RyYW5zZm9ybUFsbCA9ICh0cmFuc2Zvcm1GbiktPiAjIEFwcGxpZWQgdG8gZW50cmllIHN1YnMgc2V0XHRcdFxuXHRAXy5hZGRNb2RpZmllckZuKCd0cmFuc2Zvcm1GbicsIEBzdWJzLCB0cmFuc2Zvcm1GbiwgQG9wdGlvbnMudXBkYXRlT25CaW5kKVxuXHRyZXR1cm4gQFxuXG5cblxuXG5cblxuTUVUSE9EX2NvbmRpdGlvbiA9IChjb25kaXRpb25GbiktPiAjIEFwcGxpZWQgb25seSB0byB0aGUgbGFzdCBzdWJcblx0QF8uYWRkTW9kaWZpZXJGbignY29uZGl0aW9uRm4nLCBAc3Vicy5zbGljZSgtMSksIGNvbmRpdGlvbkZuKVxuXHRyZXR1cm4gQFxuXG5cbk1FVEhPRF9jb25kaXRpb25BbGwgPSAoY29uZGl0aW9uRm4pLT4gIyBBcHBsaWVkIHRvIGVudHJpZSBzdWJzIHNldFxuXHRAXy5hZGRNb2RpZmllckZuKCdjb25kaXRpb25GbicsIEBzdWJzLCBjb25kaXRpb25Gbilcblx0cmV0dXJuIEBcblxuXG5cblxuXG5cblxuTUVUSE9EX2JvdGhXYXlzID0gKGFsdFRyYW5zZm9ybSktPiAjIEFwcGxpZWQgb25seSB0byB0aGUgbGFzdCBzdWJcblx0c3ViID0gQHN1YnNbQHN1YnMubGVuZ3RoLTFdICMgTGFzdCBQcm94aWVkXG5cdHN1YkJpbmRpbmcgPSBzdWIuX1xuXHRiaW5kaW5ncyA9IGlmIEBfLmlzTXVsdGkgdGhlbiBAXy5iaW5kaW5ncyBlbHNlIFtAX11cblxuXHRzdWJCaW5kaW5nLmFkZFN1YihAXywgc3ViLm9wdGlvbnMpXG5cdFxuXHRmb3IgYmluZGluZyBpbiBiaW5kaW5nc1xuXHRcdG9yaWdpblRyYW5zZm9ybSA9IGJpbmRpbmcuc3Vic01ldGFbc3ViQmluZGluZy5JRF0udHJhbnNmb3JtRm5cblx0XHRvcmlnaW5Db25kaXRpb24gPSBiaW5kaW5nLnN1YnNNZXRhW3N1YkJpbmRpbmcuSURdLmNvbmRpdGlvbkZuXG5cblx0XHRpZiBvcmlnaW5UcmFuc2Zvcm0gb3IgYWx0VHJhbnNmb3JtXG5cdFx0XHR0cmFuc2Zvcm1Ub1VzZSA9IGlmIGNoZWNrSWYuaXNGdW5jdGlvbihhbHRUcmFuc2Zvcm0pIHRoZW4gYWx0VHJhbnNmb3JtIGVsc2Ugb3JpZ2luVHJhbnNmb3JtXG5cdFx0XHRzdWJCaW5kaW5nLnN1YnNNZXRhW0BfLklEXS50cmFuc2Zvcm1GbiA9IHRyYW5zZm9ybVRvVXNlIGlmIHRyYW5zZm9ybVRvVXNlIGFuZCBhbHRUcmFuc2Zvcm0gaXNudCBmYWxzZVxuXG5cdFx0aWYgb3JpZ2luQ29uZGl0aW9uXG5cdFx0XHRzdWJCaW5kaW5nLnN1YnNNZXRhW0BfLklEXS5jb25kaXRpb25GbiA9IG9yaWdpbkNvbmRpdGlvblxuXG5cdHJldHVybiBAXG5cblxuXG5NRVRIT0RfdW5CaW5kID0gKGJvdGhXYXlzKS0+ICMgQXBwbGllZCB0byBhbGwgc3Vic1xuXHRAXy5yZW1vdmVTdWIoc3ViLl8sIGJvdGhXYXlzKSBmb3Igc3ViIGluIEBzdWJzXG5cdHJldHVybiBAXG5cblxuXG5cblxuTUVUSE9EX3BvbGxFdmVyeSA9ICh0aW1lKS0+XG5cdEBfLmFkZFBvbGxJbnRlcnZhbCh0aW1lKVxuXHRyZXR1cm4gQFxuXG5cblxuTUVUSE9EX3N0b3BQb2xsaW5nID0gKCktPlxuXHRAXy5yZW1vdmVQb2xsSW50ZXJ2YWwoKVxuXHRyZXR1cm4gQFxuXG5cblxuTUVUSE9EX3NldE9wdGlvbiA9IChvcHRpb25OYW1lLCBuZXdWYWx1ZSktPlxuXHRAXy5zdWJzTWV0YVtAc3Vic1tAc3Vicy5sZW5ndGgtMV0uXy5JRF0ub3B0c1tvcHRpb25OYW1lXSA9IG5ld1ZhbHVlXHRcblx0cmV0dXJuIEBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIkdyb3VwQmluZGluZyA9IChiaW5kaW5nSW50ZXJmYWNlLCBvYmplY3RzLCBvYmplY3RUeXBlKS0+XG5cdGJpbmRpbmdJbnRlcmZhY2Uuc2VsZWN0b3IgPSBiaW5kaW5nSW50ZXJmYWNlLnNlbGVjdG9yLnNsaWNlKDYpICMgVGFrZSBvdXQgdGhlICdtdWx0aTonXG5cdGV4dGVuZFN0YXRlKEAsIEBpbnRlcmZhY2UgPSBiaW5kaW5nSW50ZXJmYWNlKVxuXHRAaXNNdWx0aSA9IHRydWVcblx0QGJpbmRpbmdzID0gYmluZGluZ3MgPSBbXVxuXG5cdGlmIG9iamVjdHNcblx0XHRAYWRkQmluZGluZyhvYmplY3QsIG9iamVjdFR5cGUpIGZvciBvYmplY3QgaW4gb2JqZWN0c1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIEAsXG5cdFx0J3R5cGUnOlx0XHRcdFx0Z2V0OiAoKS0+IGJpbmRpbmdzLm1hcCAoYmluZGluZyktPiBiaW5kaW5nLnR5cGVcblx0XHQndmFsdWUnOiBcdFx0XHRnZXQ6ICgpLT4gYmluZGluZ3MubWFwIChiaW5kaW5nKS0+IGJpbmRpbmcudmFsdWVcblxuXG5cblxuXG5cbnByb3RvID0gR3JvdXBCaW5kaW5nOjogPSBPYmplY3QuY3JlYXRlKEJpbmRpbmdJbnRlcmZhY2VQcml2YXRlKVxuXG5PYmplY3Qua2V5cyhCaW5kaW5nOjopLmZvckVhY2ggKG1ldGhvZE5hbWUpLT5cdFxuXHRwcm90b1ttZXRob2ROYW1lXSA9IChhLGIsYyxkKS0+ICMgRm91ciBhcmd1bWVudHMgaXMgdGhlIG1vc3QgZXZlciBwYXNzZWQgdG8gYW55IG1ldGhvZCBmcm9tIEJpbmRpbmdJbnRlcmZhY2UgbWV0aG9kc1xuXHRcdGZvciBiaW5kaW5nIGluIEBiaW5kaW5nc1xuXHRcdFx0YiA9IGJpbmRpbmcgaWYgbWV0aG9kTmFtZSBpcyAndXBkYXRlU3ViJ1xuXHRcdFx0YmluZGluZ1ttZXRob2ROYW1lXShhLGIsYyxkKVxuXHRcdFxuXHRcdHJldHVyblxuXG5cbnByb3RvLmFkZEJpbmRpbmcgPSAob2JqZWN0LCBvYmplY3RUeXBlKS0+XG5cdEBiaW5kaW5ncy5wdXNoIGlmIG5vdCBvYmplY3RUeXBlIHRoZW4gb2JqZWN0IGVsc2UgQGNyZWF0ZUJpbmRpbmcob2JqZWN0LCBvYmplY3RUeXBlLCBAaW50ZXJmYWNlKVxuXHRyZXR1cm4iLCJleHRlbmQgPSByZXF1aXJlICcuL2V4dGVuZCdcblxubm9ybWFsaXplS2V5cyA9IChrZXlzKS0+IGlmIGtleXNcblx0b3V0cHV0ID0ge31cblx0aWYgdHlwZW9mIGtleXMgaXNudCAnb2JqZWN0J1xuXHRcdG91dHB1dFtrZXlzXSA9IHRydWVcblx0ZWxzZVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhrZXlzKSBpZiBub3QgQXJyYXkuaXNBcnJheShrZXlzKVxuXHRcdG91dHB1dFtrZXldID0gdHJ1ZSBmb3Iga2V5IGluIGtleXNcblxuXHRyZXR1cm4gb3V0cHV0XG5cblxubmV3QnVpbGRlciA9IChpc0Jhc2UpLT5cblx0YnVpbGRlciA9ICh0YXJnZXQpLT5cblx0XHRFWFBBTkRfQVJHVU1FTlRTKHNvdXJjZXMpXG5cdFx0aWYgYnVpbGRlci5vcHRpb25zLnRhcmdldFxuXHRcdFx0dGhlVGFyZ2V0ID0gYnVpbGRlci5vcHRpb25zLnRhcmdldFxuXHRcdGVsc2Vcblx0XHRcdHRoZVRhcmdldCA9IHRhcmdldFxuXHRcdFx0c291cmNlcy5zaGlmdCgpXG5cdFx0XG5cdFx0ZXh0ZW5kKGJ1aWxkZXIub3B0aW9ucywgdGhlVGFyZ2V0LCBzb3VyY2VzKVxuXHRcblx0YnVpbGRlci5pc0Jhc2UgPSB0cnVlIGlmIGlzQmFzZVxuXHRidWlsZGVyLm9wdGlvbnMgPSB7fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhidWlsZGVyLCBtb2RpZmllcnMpXG5cdHJldHVybiBidWlsZGVyXG5cblxubW9kaWZpZXJzID0gXG5cdCdkZWVwJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLmRlZXAgPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnb3duJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLm93biA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdhbGxvd051bGwnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMuYWxsb3dOdWxsID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J251bGxEZWxldGVzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLm51bGxEZWxldGVzID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J2NvbmNhdCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5jb25jYXQgPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnY2xvbmUnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMudGFyZ2V0ID0ge31cblx0XHRyZXR1cm4gX1xuXG5cdCdub3REZWVwJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMubm90RGVlcCA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J2RlZXBPbmx5JzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMuZGVlcE9ubHkgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdrZXlzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMua2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J25vdEtleXMnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRyZXR1cm4gKGtleXMpLT5cblx0XHRcdF8ub3B0aW9ucy5ub3RLZXlzID0gbm9ybWFsaXplS2V5cyhrZXlzKVx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXHQndHJhbnNmb3JtJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuICh0cmFuc2Zvcm0pLT5cblx0XHRcdGlmIHR5cGVvZiB0cmFuc2Zvcm0gaXMgJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRfLm9wdGlvbnMuZ2xvYmFsVHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cdFx0XHRlbHNlIGlmIHRyYW5zZm9ybSBhbmQgdHlwZW9mIHRyYW5zZm9ybSBpcyAnb2JqZWN0J1xuXHRcdFx0XHRfLm9wdGlvbnMudHJhbnNmb3JtcyA9IHRyYW5zZm9ybVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cblx0J2ZpbHRlcic6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoZmlsdGVyKS0+XG5cdFx0XHRpZiB0eXBlb2YgZmlsdGVyIGlzICdmdW5jdGlvbidcblx0XHRcdFx0Xy5vcHRpb25zLmdsb2JhbEZpbHRlciA9IGZpbHRlclxuXHRcdFx0ZWxzZSBpZiBmaWx0ZXIgYW5kIHR5cGVvZiBmaWx0ZXIgaXMgJ29iamVjdCdcblx0XHRcdFx0Xy5vcHRpb25zLmZpbHRlcnMgPSBmaWx0ZXJcblx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IG5ld0J1aWxkZXIodHJ1ZSlcbmV4cG9ydHMudmVyc2lvbiA9IGltcG9ydCAnLi4vcGFja2FnZS5qc29uICQgdmVyc2lvbiciLCJ7XG4gIFwiX2FyZ3NcIjogW1xuICAgIFtcbiAgICAgIFwic21hcnQtZXh0ZW5kQDEuNy4zXCIsXG4gICAgICBcIi9Vc2Vycy9kYW5pZWxrYWxlbi9zYW5kYm94L2RhdGFfdGFibGVcIlxuICAgIF1cbiAgXSxcbiAgXCJfZnJvbVwiOiBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICBcIl9pZFwiOiBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICBcIl9pbkJ1bmRsZVwiOiBmYWxzZSxcbiAgXCJfaW50ZWdyaXR5XCI6IFwic2hhNTEyLVBWRUVWWUREenl4S0EwR05GTGNXWTZvSlNrUUtkYzF3NzE4ZVFwRUhjTnVUU1dZeERLMzVHemhzR2hNa1VVOGxCSWdTRURidDV4NXA0NnBSejNBdWJBPT1cIixcbiAgXCJfbG9jYXRpb25cIjogXCIvc21hcnQtZXh0ZW5kXCIsXG4gIFwiX3BoYW50b21DaGlsZHJlblwiOiB7fSxcbiAgXCJfcmVxdWVzdGVkXCI6IHtcbiAgICBcInR5cGVcIjogXCJ2ZXJzaW9uXCIsXG4gICAgXCJyZWdpc3RyeVwiOiB0cnVlLFxuICAgIFwicmF3XCI6IFwic21hcnQtZXh0ZW5kQDEuNy4zXCIsXG4gICAgXCJuYW1lXCI6IFwic21hcnQtZXh0ZW5kXCIsXG4gICAgXCJlc2NhcGVkTmFtZVwiOiBcInNtYXJ0LWV4dGVuZFwiLFxuICAgIFwicmF3U3BlY1wiOiBcIjEuNy4zXCIsXG4gICAgXCJzYXZlU3BlY1wiOiBudWxsLFxuICAgIFwiZmV0Y2hTcGVjXCI6IFwiMS43LjNcIlxuICB9LFxuICBcIl9yZXF1aXJlZEJ5XCI6IFtcbiAgICBcIi9cIixcbiAgICBcIi9zaW1wbHl3YXRjaFwiXG4gIF0sXG4gIFwiX3Jlc29sdmVkXCI6IFwiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvc21hcnQtZXh0ZW5kLy0vc21hcnQtZXh0ZW5kLTEuNy4zLnRnelwiLFxuICBcIl9zcGVjXCI6IFwiMS43LjNcIixcbiAgXCJfd2hlcmVcIjogXCIvVXNlcnMvZGFuaWVsa2FsZW4vc2FuZGJveC9kYXRhX3RhYmxlXCIsXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJkYW5pZWxrYWxlblwiXG4gIH0sXG4gIFwiYnJvd3NlclwiOiB7XG4gICAgXCIuL2RlYnVnXCI6IFwiZGlzdC9zbWFydC1leHRlbmQuZGVidWcuanNcIixcbiAgICBcIi4vZGlzdC9zbWFydC1leHRlbmQuanNcIjogXCJzcmMvaW5kZXguY29mZmVlXCJcbiAgfSxcbiAgXCJicm93c2VyaWZ5XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcInNpbXBseWltcG9ydC9jb21wYXRcIlxuICAgIF1cbiAgfSxcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zbWFydC1leHRlbmQvaXNzdWVzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiZmFsYWZlbFwiOiBcIl4yLjEuMFwiXG4gIH0sXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZXJnZS9leHRlbmQgb2JqZWN0cyAoc2hhbGxvdy9kZWVwKSB3aXRoIGdsb2JhbC9pbmRpdmlkdWFsIGZpbHRlcnMgYW5kIG1vcmUgZmVhdHVyZXNcIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmFkZ2UtZ2VuXCI6IFwiXjEuMC4yXCIsXG4gICAgXCJibHVlYmlyZFwiOiBcIl4zLjQuN1wiLFxuICAgIFwiY2hhaVwiOiBcIl4zLjUuMFwiLFxuICAgIFwiY29mZmVlLXJlZ2lzdGVyXCI6IFwiXjAuMS4wXCIsXG4gICAgXCJjb2ZmZWVpZnktY2FjaGVkXCI6IFwiXjIuMS4xXCIsXG4gICAgXCJleHRlbmRcIjogXCJeMy4wLjFcIixcbiAgICBcImdvb2dsZS1jbG9zdXJlLWNvbXBpbGVyLWpzXCI6IFwiXjIwMTcwNjI2LjAuMFwiLFxuICAgIFwibW9jaGFcIjogXCJeMy4yLjBcIixcbiAgICBcInNpbXBseWltcG9ydFwiOiBcIl40LjAuMC1zMjFcIixcbiAgICBcInNpbXBseXdhdGNoXCI6IFwiXjMuMC4wLWwyXCIsXG4gICAgXCJ1Z2xpZnktanNcIjogXCJeMy4wLjI0XCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zbWFydC1leHRlbmQjcmVhZG1lXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiZXh0ZW5kXCIsXG4gICAgXCJjbG9uZVwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJzZWxlY3RpdmVcIixcbiAgICBcIm1lcmdlXCIsXG4gICAgXCJhc3NpZ25cIixcbiAgICBcInByb3BlcnRpZXNcIlxuICBdLFxuICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgXCJtYWluXCI6IFwiZGlzdC9zbWFydC1leHRlbmQuanNcIixcbiAgXCJtb2NoYV9vcHRzXCI6IFwiLXUgdGRkIC0tY29tcGlsZXJzIGNvZmZlZTpjb2ZmZWUtcmVnaXN0ZXIgLS1zbG93IDEwMDAgLS10aW1lb3V0IDUwMDBcIixcbiAgXCJuYW1lXCI6IFwic21hcnQtZXh0ZW5kXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL3NtYXJ0LWV4dGVuZC5naXRcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJta2RpciAtcCBkaXN0LzsgbnBtIHJ1biBidWlsZDpkZWJ1ZyAmJiBucG0gcnVuIGJ1aWxkOnJlbGVhc2VcIixcbiAgICBcImJ1aWxkOmRlYnVnXCI6IFwic2ltcGx5aW1wb3J0IGJ1bmRsZSBzcmMvaW5kZXguY29mZmVlIC1kIC0tdGFyZ2V0IG5vZGUgLS11bWQgc21hcnQtZXh0ZW5kID4gZGlzdC9zbWFydC1leHRlbmQuZGVidWcuanNcIixcbiAgICBcImJ1aWxkOnJlbGVhc2VcIjogXCJzaW1wbHlpbXBvcnQgYnVuZGxlIHNyYy9pbmRleC5jb2ZmZWUgLS10YXJnZXQgbm9kZSAtLXVtZCBzbWFydC1leHRlbmQgPiBkaXN0L3NtYXJ0LWV4dGVuZC5qc1wiLFxuICAgIFwiY292ZXJhZ2VcIjogXCJucG0gcnVuIGNvdmVyYWdlOnJ1biAmJiBucG0gcnVuIGNvdmVyYWdlOmJhZGdlXCIsXG4gICAgXCJjb3ZlcmFnZTpiYWRnZVwiOiBcImJhZGdlLWdlbiAtZCAuY29uZmlnL2JhZGdlcy9jb3ZlcmFnZVwiLFxuICAgIFwiY292ZXJhZ2U6cnVuXCI6IFwiZm9yQ292ZXJhZ2U9dHJ1ZSBpc3RhbmJ1bCBjb3ZlciAtLWRpciBjb3ZlcmFnZSBub2RlX21vZHVsZXMvbW9jaGEvYmluL19tb2NoYSAtLSAkbnBtX3BhY2thZ2VfbW9jaGFfb3B0c1wiLFxuICAgIFwicG9zdHB1Ymxpc2hcIjogXCJnaXQgcHVzaFwiLFxuICAgIFwicG9zdHZlcnNpb25cIjogXCJucG0gcnVuIGJ1aWxkICYmIGdpdCBhZGQgLiAmJiBnaXQgY29tbWl0IC1hIC1tICdbQnVpbGRdJ1wiLFxuICAgIFwicHJlcHVibGlzaE9ubHlcIjogXCJDST0xIG5wbSBydW4gdGVzdFwiLFxuICAgIFwidGVzdFwiOiBcIm1vY2hhICRucG1fcGFja2FnZV9tb2NoYV9vcHRzXCIsXG4gICAgXCJ3YXRjaFwiOiBcInNpbXBseXdhdGNoIC1nICdzcmMvKicgLXggJ25wbSBydW4gYnVpbGQ6ZGVidWcgLXMnXCJcbiAgfSxcbiAgXCJzaW1wbHlpbXBvcnRcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFtcbiAgICAgIFwiY29mZmVlaWZ5LWNhY2hlZFwiLFxuICAgICAgXCIuLy5jb25maWcvdHJhbnNmb3Jtcy9tYWNyb3NcIlxuICAgIF0sXG4gICAgXCJmaW5hbFRyYW5zZm9ybVwiOiBbXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc3VwZXJcIixcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1yZW5hbWVcIixcbiAgICAgIFwiLmNvbmZpZy90cmFuc2Zvcm1zL21pbmlmeS1zaW1wbGVcIlxuICAgIF1cbiAgfSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMS43LjNcIlxufVxuIiwiLyohXG4gKiBlc2NhcGUtaHRtbFxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTUgQW5kcmVhcyBMdWJiZVxuICogQ29weXJpZ2h0KGMpIDIwMTUgVGlhbmNoZW5nIFwiVGltb3RoeVwiIEd1XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIG1hdGNoSHRtbFJlZ0V4cCA9IC9bXCInJjw+XS87XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVIdG1sO1xuXG4vKipcbiAqIEVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gdGhlIGdpdmVuIHN0cmluZyBvZiBodG1sLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gZXNjYXBlIGZvciBpbnNlcnRpbmcgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgdmFyIHN0ciA9ICcnICsgc3RyaW5nO1xuICB2YXIgbWF0Y2ggPSBtYXRjaEh0bWxSZWdFeHAuZXhlYyhzdHIpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIGVzY2FwZTtcbiAgdmFyIGh0bWwgPSAnJztcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RJbmRleCA9IDA7XG5cbiAgZm9yIChpbmRleCA9IG1hdGNoLmluZGV4OyBpbmRleCA8IHN0ci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGluZGV4KSkge1xuICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgZXNjYXBlID0gJyZxdW90Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gJlxuICAgICAgICBlc2NhcGUgPSAnJmFtcDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6IC8vICdcbiAgICAgICAgZXNjYXBlID0gJyYjMzk7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYwOiAvLyA8XG4gICAgICAgIGVzY2FwZSA9ICcmbHQ7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYyOiAvLyA+XG4gICAgICAgIGVzY2FwZSA9ICcmZ3Q7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgaHRtbCArPSBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICBodG1sICs9IGVzY2FwZTtcbiAgfVxuXG4gIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4XG4gICAgPyBodG1sICsgc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KVxuICAgIDogaHRtbDtcbn1cbiIsIi8qKlxuICogZXZlbnQtbGl0ZS5qcyAtIExpZ2h0LXdlaWdodCBFdmVudEVtaXR0ZXIgKGxlc3MgdGhhbiAxS0Igd2hlbiBnemlwcGVkKVxuICpcbiAqIEBjb3B5cmlnaHQgWXVzdWtlIEthd2FzYWtpXG4gKiBAbGljZW5zZSBNSVRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20va2F3YW5ldC9ldmVudC1saXRlXG4gKiBAc2VlIGh0dHA6Ly9rYXdhbmV0LmdpdGh1Yi5pby9ldmVudC1saXRlL0V2ZW50TGl0ZS5odG1sXG4gKiBAZXhhbXBsZVxuICogdmFyIEV2ZW50TGl0ZSA9IHJlcXVpcmUoXCJldmVudC1saXRlXCIpO1xuICpcbiAqIGZ1bmN0aW9uIE15Q2xhc3MoKSB7Li4ufSAgICAgICAgICAgICAvLyB5b3VyIGNsYXNzXG4gKlxuICogRXZlbnRMaXRlLm1peGluKE15Q2xhc3MucHJvdG90eXBlKTsgIC8vIGltcG9ydCBldmVudCBtZXRob2RzXG4gKlxuICogdmFyIG9iaiA9IG5ldyBNeUNsYXNzKCk7XG4gKiBvYmoub24oXCJmb29cIiwgZnVuY3Rpb24oKSB7Li4ufSk7ICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJcbiAqIG9iai5vbmNlKFwiYmFyXCIsIGZ1bmN0aW9uKCkgey4uLn0pOyAgIC8vIGFkZCBvbmUtdGltZSBldmVudCBsaXN0ZW5lclxuICogb2JqLmVtaXQoXCJmb29cIik7ICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2ggZXZlbnRcbiAqIG9iai5lbWl0KFwiYmFyXCIpOyAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGFub3RoZXIgZXZlbnRcbiAqIG9iai5vZmYoXCJmb29cIik7ICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lclxuICovXG5cbmZ1bmN0aW9uIEV2ZW50TGl0ZSgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEV2ZW50TGl0ZSkpIHJldHVybiBuZXcgRXZlbnRMaXRlKCk7XG59XG5cbihmdW5jdGlvbihFdmVudExpdGUpIHtcbiAgLy8gZXhwb3J0IHRoZSBjbGFzcyBmb3Igbm9kZS5qc1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIG1vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBFdmVudExpdGU7XG5cbiAgLy8gcHJvcGVydHkgbmFtZSB0byBob2xkIGxpc3RlbmVyc1xuICB2YXIgTElTVEVORVJTID0gXCJsaXN0ZW5lcnNcIjtcblxuICAvLyBtZXRob2RzIHRvIGV4cG9ydFxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBvbjogb24sXG4gICAgb25jZTogb25jZSxcbiAgICBvZmY6IG9mZixcbiAgICBlbWl0OiBlbWl0XG4gIH07XG5cbiAgLy8gbWl4aW4gdG8gc2VsZlxuICBtaXhpbihFdmVudExpdGUucHJvdG90eXBlKTtcblxuICAvLyBleHBvcnQgbWl4aW4gZnVuY3Rpb25cbiAgRXZlbnRMaXRlLm1peGluID0gbWl4aW47XG5cbiAgLyoqXG4gICAqIEltcG9ydCBvbigpLCBvbmNlKCksIG9mZigpIGFuZCBlbWl0KCkgbWV0aG9kcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBFdmVudExpdGUubWl4aW5cbiAgICogQHBhcmFtIHRhcmdldCB7UHJvdG90eXBlfVxuICAgKi9cblxuICBmdW5jdGlvbiBtaXhpbih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgdGFyZ2V0W2tleV0gPSBtZXRob2RzW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5vblxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZnVuYyB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtFdmVudExpdGV9IFNlbGYgZm9yIG1ldGhvZCBjaGFpbmluZ1xuICAgKi9cblxuICBmdW5jdGlvbiBvbih0eXBlLCBmdW5jKSB7XG4gICAgZ2V0TGlzdGVuZXJzKHRoaXMsIHR5cGUpLnB1c2goZnVuYyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZS10aW1lIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5vbmNlXG4gICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBmdW5jIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge0V2ZW50TGl0ZX0gU2VsZiBmb3IgbWV0aG9kIGNoYWluaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uY2UodHlwZSwgZnVuYykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB3cmFwLm9yaWdpbmFsTGlzdGVuZXIgPSBmdW5jO1xuICAgIGdldExpc3RlbmVycyh0aGF0LCB0eXBlKS5wdXNoKHdyYXApO1xuICAgIHJldHVybiB0aGF0O1xuXG4gICAgZnVuY3Rpb24gd3JhcCgpIHtcbiAgICAgIG9mZi5jYWxsKHRoYXQsIHR5cGUsIHdyYXApO1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBmdW5jdGlvbiBFdmVudExpdGUucHJvdG90eXBlLm9mZlxuICAgKiBAcGFyYW0gW3R5cGVdIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBbZnVuY10ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXRlfSBTZWxmIGZvciBtZXRob2QgY2hhaW5pbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gb2ZmKHR5cGUsIGZ1bmMpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGxpc3RuZXJzO1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoYXRbTElTVEVORVJTXTtcbiAgICB9IGVsc2UgaWYgKCFmdW5jKSB7XG4gICAgICBsaXN0bmVycyA9IHRoYXRbTElTVEVORVJTXTtcbiAgICAgIGlmIChsaXN0bmVycykge1xuICAgICAgICBkZWxldGUgbGlzdG5lcnNbdHlwZV07XG4gICAgICAgIGlmICghT2JqZWN0LmtleXMobGlzdG5lcnMpLmxlbmd0aCkgcmV0dXJuIG9mZi5jYWxsKHRoYXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0bmVycyA9IGdldExpc3RlbmVycyh0aGF0LCB0eXBlLCB0cnVlKTtcbiAgICAgIGlmIChsaXN0bmVycykge1xuICAgICAgICBsaXN0bmVycyA9IGxpc3RuZXJzLmZpbHRlcihuZSk7XG4gICAgICAgIGlmICghbGlzdG5lcnMubGVuZ3RoKSByZXR1cm4gb2ZmLmNhbGwodGhhdCwgdHlwZSk7XG4gICAgICAgIHRoYXRbTElTVEVORVJTXVt0eXBlXSA9IGxpc3RuZXJzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhhdDtcblxuICAgIGZ1bmN0aW9uIG5lKHRlc3QpIHtcbiAgICAgIHJldHVybiB0ZXN0ICE9PSBmdW5jICYmIHRlc3Qub3JpZ2luYWxMaXN0ZW5lciAhPT0gZnVuYztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggKHRyaWdnZXIpIGFuIGV2ZW50LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5lbWl0XG4gICAqIEBwYXJhbSB0eXBlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBbdmFsdWVdIHsqfVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSB3aGVuIGEgbGlzdGVuZXIgcmVjZWl2ZWQgdGhlIGV2ZW50XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVtaXQodHlwZSwgdmFsdWUpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGF0LCB0eXBlLCB0cnVlKTtcbiAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBhcmdsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChhcmdsZW4gPT09IDEpIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKHplcm9hcmcpO1xuICAgIH0gZWxzZSBpZiAoYXJnbGVuID09PSAyKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChvbmVhcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChtb3JlYXJncyk7XG4gICAgfVxuICAgIHJldHVybiAhIWxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiB6ZXJvYXJnKGZ1bmMpIHtcbiAgICAgIGZ1bmMuY2FsbCh0aGF0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmVhcmcoZnVuYykge1xuICAgICAgZnVuYy5jYWxsKHRoYXQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JlYXJncyhmdW5jKSB7XG4gICAgICBmdW5jLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldExpc3RlbmVycyh0aGF0LCB0eXBlLCByZWFkb25seSkge1xuICAgIGlmIChyZWFkb25seSAmJiAhdGhhdFtMSVNURU5FUlNdKSByZXR1cm47XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoYXRbTElTVEVORVJTXSB8fCAodGhhdFtMSVNURU5FUlNdID0ge30pO1xuICAgIHJldHVybiBsaXN0ZW5lcnNbdHlwZV0gfHwgKGxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcbiAgfVxuXG59KShFdmVudExpdGUpO1xuIiwiaXNBcnJheSA9ICh0YXJnZXQpLT5cblx0QXJyYXkuaXNBcnJheSh0YXJnZXQpXG5cbmlzT2JqZWN0ID0gKHRhcmdldCktPlxuXHR0YXJnZXQgYW5kIE9iamVjdDo6dG9TdHJpbmcuY2FsbCh0YXJnZXQpIGlzICdbb2JqZWN0IE9iamVjdF0nIG9yIGlzQXJyYXkodGFyZ2V0KVxuXG5zaG91bGREZWVwRXh0ZW5kID0gKG9wdGlvbnMsIHRhcmdldCwgcGFyZW50S2V5KS0+XG5cdGlmIG9wdGlvbnMuZGVlcFxuXHRcdGlmIG9wdGlvbnMubm90RGVlcCB0aGVuIG5vdCBvcHRpb25zLm5vdERlZXBbdGFyZ2V0XSBlbHNlIHRydWVcblxuXHRlbHNlIGlmIG9wdGlvbnMuZGVlcE9ubHlcblx0XHRvcHRpb25zLmRlZXBPbmx5W3RhcmdldF0gb3IgcGFyZW50S2V5IGFuZCBzaG91bGREZWVwRXh0ZW5kKG9wdGlvbnMsIHBhcmVudEtleSlcblxuXHQjIGVsc2UgZmFsc2VcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZCA9IChvcHRpb25zLCB0YXJnZXQsIHNvdXJjZXMsIHBhcmVudEtleSktPlxuXHR0YXJnZXQgPSB7fSBpZiBub3QgdGFyZ2V0IG9yIHR5cGVvZiB0YXJnZXQgaXNudCAnb2JqZWN0JyBhbmQgdHlwZW9mIHRhcmdldCBpc250ICdmdW5jdGlvbidcblxuXHRmb3Igc291cmNlIGluIHNvdXJjZXMgd2hlbiBzb3VyY2U/XG5cdFx0Zm9yIGtleSBvZiBzb3VyY2Vcblx0XHRcdHNvdXJjZVZhbHVlID0gc291cmNlW2tleV1cblx0XHRcdHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV1cblx0XHRcdFxuXHRcdFx0Y29udGludWUgaWYgc291cmNlVmFsdWUgaXMgdGFyZ2V0IG9yXG5cdFx0XHRcdFx0XHRzb3VyY2VWYWx1ZSBpcyB1bmRlZmluZWQgb3Jcblx0XHRcdFx0XHRcdChzb3VyY2VWYWx1ZSBpcyBudWxsIGFuZCBub3Qgb3B0aW9ucy5hbGxvd051bGwgYW5kIG5vdCBvcHRpb25zLm51bGxEZWxldGVzKSBvclxuXHRcdFx0XHRcdFx0KG9wdGlvbnMua2V5cyBhbmQgbm90IG9wdGlvbnMua2V5c1trZXldKSBvclxuXHRcdFx0XHRcdFx0KG9wdGlvbnMubm90S2V5cyBhbmQgb3B0aW9ucy5ub3RLZXlzW2tleV0pIG9yXG5cdFx0XHRcdFx0XHQob3B0aW9ucy5vd24gYW5kIG5vdCBzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkgb3Jcblx0XHRcdFx0XHRcdChvcHRpb25zLmdsb2JhbEZpbHRlciBhbmQgbm90IG9wdGlvbnMuZ2xvYmFsRmlsdGVyKHNvdXJjZVZhbHVlLCBrZXksIHNvdXJjZSkpIG9yXG5cdFx0XHRcdFx0XHQob3B0aW9ucy5maWx0ZXJzIGFuZCBvcHRpb25zLmZpbHRlcnNba2V5XSBhbmQgbm90IG9wdGlvbnMuZmlsdGVyc1trZXldKHNvdXJjZVZhbHVlLCBrZXksIHNvdXJjZSkpXG5cdFx0XHRcblx0XHRcdGlmIHNvdXJjZVZhbHVlIGlzIG51bGwgYW5kIG9wdGlvbnMubnVsbERlbGV0ZXNcblx0XHRcdFx0ZGVsZXRlIHRhcmdldFtrZXldXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHRpZiBvcHRpb25zLmdsb2JhbFRyYW5zZm9ybVxuXHRcdFx0XHRzb3VyY2VWYWx1ZSA9IG9wdGlvbnMuZ2xvYmFsVHJhbnNmb3JtKHNvdXJjZVZhbHVlLCBrZXksIHNvdXJjZSlcblx0XHRcdGlmIG9wdGlvbnMudHJhbnNmb3JtcyBhbmQgb3B0aW9ucy50cmFuc2Zvcm1zW2tleV1cblx0XHRcdFx0c291cmNlVmFsdWUgPSBvcHRpb25zLnRyYW5zZm9ybXNba2V5XShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpXG5cdFxuXHRcdFx0c3dpdGNoXG5cdFx0XHRcdHdoZW4gb3B0aW9ucy5jb25jYXQgYW5kIGlzQXJyYXkoc291cmNlVmFsdWUpIGFuZCBpc0FycmF5KHRhcmdldFZhbHVlKVxuXHRcdFx0XHRcdHRhcmdldFtrZXldID0gdGFyZ2V0VmFsdWUuY29uY2F0KHNvdXJjZVZhbHVlKVxuXHRcdFx0XHRcblx0XHRcdFx0d2hlbiBzaG91bGREZWVwRXh0ZW5kKG9wdGlvbnMsIGtleSwgcGFyZW50S2V5KSBhbmQgaXNPYmplY3Qoc291cmNlVmFsdWUpXG5cdFx0XHRcdFx0c3ViVGFyZ2V0ID0gaWYgaXNPYmplY3QodGFyZ2V0VmFsdWUpIHRoZW4gdGFyZ2V0VmFsdWUgZWxzZSBpZiBpc0FycmF5KHNvdXJjZVZhbHVlKSB0aGVuIFtdIGVsc2Uge31cblx0XHRcdFx0XHR0YXJnZXRba2V5XSA9IGV4dGVuZChvcHRpb25zLCBzdWJUYXJnZXQsIFtzb3VyY2VWYWx1ZV0sIGtleSlcblxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2VWYWx1ZVxuXG5cblx0cmV0dXJuIHRhcmdldFxuXG5cblxuXG5cblxuXG4iXX0=