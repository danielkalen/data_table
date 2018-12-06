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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSIsInBhcnRzL21hcmt1cC5jb2ZmZWUiLCJwYXJ0cy9kZWZhdWx0cy5jb2ZmZWUiLCJwYXJ0cy9oZWxwZXJzLmNvZmZlZSIsInBhcnRzL21ldGhvZHMvX2luZGV4LmNvZmZlZSIsInBhcnRzL21ldGhvZHMvZ2VuZXJhbC5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL2NvbHVtbi5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL3Jvdy5jb2ZmZWUiLCJwYXJ0cy9tZXRob2RzL3NwZWNpYWxDZWxscy5jb2ZmZWUiLCJwYXJ0cy9hdHRhY2hFdmVudHMuY29mZmVlIiwicGFydHMvYXR0YWNoQmluZGluZ3MuY29mZmVlIiwicGFydHMvdXNlckFjdGlvbk1ldGhvZHMuY29mZmVlIiwiLi4vLi4vcGFja2FnZS5qc29uIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvX2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL19pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jaGFuZ2VFdmVudC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9yZXF1aXJlc0RvbURlc2NyaXB0b3JGaXguY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvd2luZG93UHJvcHNUb0lnbm9yZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jaGVja3MuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvZGVzY3JpcHRvci1tb2QuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2hlbHBlcnMvd2Via2l0RG9tRGVzY3JpcHRvckZpeC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9jbG9uaW5nLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL2NhY2hlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvbWlzYy9oZWxwZXJzL3BsYWNlaG9sZGVycy5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL21pc2MvaGVscGVycy9lcnJvcnMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9taXNjL2Vycm9yc0FuZFdhcm5pbmdzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvU2ltcGx5QmluZC9faW5kZXguY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9TaW1wbHlCaW5kL21ldGhvZHMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3BhY2thZ2UuanNvbiIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvU2ltcGx5QmluZC9tZXRob2RzLnVuQmluZEFsbC1wYXJzZURPTU9iamVjdC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL0JpbmRpbmcvX2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZy9wcm90b3R5cGUuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nL3Byb3RvdHlwZS5zZXRWYWx1ZS1PYmplY3RQcm9wLURPTVZhbHVlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZy9wcm90b3R5cGUuc2V0VmFsdWUtRE9NVHlwZXMuY29mZmVlIiwibm9kZV9tb2R1bGVzL0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kL3NyYy9CaW5kaW5nSW50ZXJmYWNlL2luZGV4LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHJpdmF0ZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3NpbXBseWJpbmQvc3JjL0JpbmRpbmdJbnRlcmZhY2UvcHJvdG90eXBlLXByaXZhdGUuc2V0T2JqZWN0LXBhcnNlRE9NT2JqZWN0LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHJpdmF0ZS5zZXRPYmplY3QtZGVmaW5lRXZlbnRNZXRob2RzLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvQmluZGluZ0ludGVyZmFjZS9wcm90b3R5cGUtcHVibGljLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC9zcmMvR3JvdXBCaW5kaW5nL19pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9pbmRleC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3BhY2thZ2UuanNvbiIsIm5vZGVfbW9kdWxlcy9lc2NhcGUtaHRtbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudC1saXRlL2V2ZW50LWxpdGUuanMiLCJub2RlX21vZHVsZXMvc21hcnQtZXh0ZW5kL3NyYy9leHRlbmQuY29mZmVlIl0sIm5hbWVzIjpbIkRhdGFUYWJsZSIsImV4dGVuZCIsImVzY0hUTUwiLCJtYXJrdXAiLCJ0YWJsZU91dGVyd3JhcCIsImJhc2VDbGFzcyIsIklEIiwibWluV2lkdGgiLCJoYXNNb2JpbGUiLCJjZWxsc0hhdmVQYWRkaW5nIiwidGFibGUiLCJhbGlnbm1lbnQiLCJsb2FkaW5nIiwibm9SZXN1bHRzIiwiaXRlbVNpbmdsZUxhYmVsIiwiaXRlbVBsdXJhbExhYmVsIiwiZXJyb3IiLCJwYWdlU3RhdHVzIiwic2hvd1BhZ2VTdGF0dXMiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbkl0ZW0iLCJ2YWx1ZSIsImhlYWRpbmdDZWxsIiwiZXh0cmFDbGFzc2VzIiwic2x1ZyIsImljb24iLCJzdHlsZSIsImxhYmVsIiwicm93Iiwicm93SUQiLCJjZWxscyIsImRyaWxsZG93biIsInJvd0NlbGwiLCJjb2x1bW4iLCJzZWFyY2hGaWVsZCIsInNlYXJjaCIsImxlbmd0aCIsImlwRGV0YWlscyIsImlwQWRkcmVzcyIsImV4dHJhIiwiaXBEZXRhaWxzSXRlbSIsImZpZWxkcyIsImZpZWxkc0l0ZW0iLCJidXR0b24iLCJpc011bHRpIiwiYWN0aW9uIiwiYWN0aW9ucyIsImFjdGlvbnNPdmVybGF5IiwiZGVmYXVsdHMiLCJhY3Rpb25zSXRlbSIsImN1c3RvbUljb25TdHlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiJCIsImdldCIsImhlbHBlcnMiLCJjb21wYXJlVmFsdWVzIiwidmFsdWVBIiwidmFsdWVCIiwicGFyc2VGbG9hdCIsInRvZ2dsZUFjdGlvbnNQb3B1cCIsImFjdGlvbnNQb3B1cCQiLCJpc09wZW4iLCJkYXRhIiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJvdmVybGF5JCIsImFkZENsYXNzIiwiYXBwZW5kVG8iLCJkb2N1bWVudCIsImJvZHkiLCJvbmUiLCJnZXRCcmVha2Rvd25Ub3RhbCIsImJyZWFrZG93biIsImJyZWFrZG93bktleXMiLCJtYXAiLCJicmVha2Rvd25JdGVtIiwicmVkdWNlIiwiYSIsImIiLCJub3JtYWxpemVDb2x1bW5zIiwiY29sdW1ucyIsIkFycmF5IiwiaXNBcnJheSIsIm91dHB1dCIsImkiLCJyZWYiLCJqIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidHlwZSIsImdldEJyZWFrZG93bkJhcldpZHRoIiwibGFyZ2VzdCIsImJyZWFrZG93bkJhclRvdGFsIiwiZ2VuSGVhZGVyQ2VsbFN0eWxlIiwic3R5bGVTdHJpbmciLCJ3aWR0aCIsImdyb3ciLCJnZW5DZWxsU3R5bGUiLCJjb2xvciIsImNvbG9yTWFwcGluZyIsImNvbG9yVHlwZSIsImN1c3RvbVN0eWxlIiwiZ2VuQ2VsbENsYXNzbmFtZSIsImNsYXNzU3RyaW5nIiwic29ydGFibGUiLCJub0xhYmVsIiwiaXNMaW5rIiwibm9FbGxpcHNpcyIsInNob3dPdmVyZmxvdyIsImFsd2F5c0NlbnRlciIsImluY2x1ZGVzIiwiaWNvbk1hcHBpbmciLCJpY29uVHlwZSIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwib3B0aW9ucyIsImNsb25lIiwiZGVlcE9ubHkiLCJzdGF0ZSIsImN1cnJlbnRJRCIsInRhYmxlSUQiLCJ2aXNpYmxlUm93cyIsImF2YWlsYWJsZVJvd3MiLCJhbGxSb3dzIiwibGFyZ2VzdEJyZWFrZG93blRvdGFsIiwic2VhcmNoQ3JpdGVyaWEiLCJzZWFyY2hQYXJhbSIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJjdXJyZW50UGFnZSIsImVscyIsInRhYmxlSGVhZGluZyIsImNoaWxkcmVuIiwiZmlyc3QiLCJ0YWJsZUJvZHkiLCJsYXN0Iiwibm9SZXN1bHRzTWVzc2FnZSIsImxvYWRpbmdNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwicGFnaW5hdGlvbkl0ZW1zIiwicGFnaW5hdGlvbkV4dHJhIiwicGFnaW5hdGlvbkV4dHJhU2VsZWN0IiwicGFnaW5hdGlvbkV4dHJhVGV4dCIsInByZXYiLCJpbnNlcnRCZWZvcmUiLCJnbG9iYWxTdHlsZXMiLCJwcmVwZW5kVG8iLCJhcHBlbmQiLCJnZW5lcmF0ZUhlYWRpbmdDb2x1bW5zIiwiYmluZCIsInRoZW4iLCJhdHRhY2hFdmVudHMiLCJhdHRhY2hCaW5kaW5ncyIsImxvYWRPbkluaXQiLCJsb2FkRGF0YSIsInByb3RvdHlwZSIsImZldGNoRGF0YSIsImNhbGwiLCJjYXRjaCIsImVyciIsInNldERhdGEiLCJhcHBlbmREYXRhIiwicHVzaCIsInVucHJvY2Vzc1JvdyIsInJlZnJlc2giLCJtYXJrdXBBcmdzIiwiYXJnc09iamVjdCIsImNhbGNQYWdlQ291bnQiLCJyb3dzIiwicGFnZUNvdW50UmVhbCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSIsInBhZ2VDb3VudCIsInBhZ2VDb3VudE1heCIsImNhbGNQZXJjZW50YWdlU3RyaW5nIiwiY29sdW1uVmFsdWUiLCJjb2x1bW5OYW1lIiwiY29sdW1uQSIsInBlcmNlbnRhZ2UiLCJmb3JtdWxhIiwiY29sdW1uQiIsIm1hdGhPcGVyYXRvciIsInBlcmNlbnRhZ2VWYWx1ZSIsInBlcmNlbnQiLCJjb252ZXJ0VG9QZXJjZW50Iiwic29ydFJvd3MiLCJ0YXJnZXRDb2x1bW4iLCJjdXN0b21Tb3J0Iiwic2xpY2UiLCJyZXZlcnNlIiwic29ydEZuIiwicmF3VmFsdWUiLCJyYXdWYWx1ZUZvcm1hdHRlciIsInNvcnRlciIsImFWYWx1ZSIsImJWYWx1ZSIsInNvcnQiLCJzZXRWaXNpYmxlUGFnZSIsInRhcmdldFBhZ2UiLCJyb3dzVG9SZXZlYWwiLCJyb3dzVG9IaWRlIiwidmlzaWJsZSIsImFwcGx5Iiwic2V0UGFnZUluZGljYXRvciIsIm1hdGNoZWRQYWdlRWwkIiwicGFnZUl0ZW1zJCIsImZpbmQiLCJlcSIsIm5vdCIsImhhc0JyZWFrZG93bkJhciIsIk9iamVjdCIsImtleXMiLCJpbm5lckhUTUwiLCJqb2luIiwidXBkYXRlQ29sdW1ucyIsInVwZGF0ZWRDb2x1bW5zIiwiZGVlcCIsInByb2Nlc3NSb3ciLCJwcm9jZXNzZWQiLCJnZW5lcmF0ZVJvdyIsIlNpbXBseUJpbmQiLCJ1cGRhdGVFdmVuSWZTYW1lIiwib2YiLCJ0byIsImlzVmlzaWJsZSIsInByZXZWYWx1ZSIsImVsIiwiZGV0YWNoIiwidXBkYXRlZEJyZWFrZG93bldpZHRoIiwiYnJlYWtkb3duQmFyV2lkdGgiLCJ0cmFuc2Zvcm0iLCJhbmQiLCJjaGFpblRvIiwiYnJlYWtkb3duQmFyRWwiLCJkcmlsbGRvd25FbCIsImluZGV4IiwiY29uZGl0aW9uIiwiY29uZGl0aW9uQWxsIiwidW5CaW5kQWxsIiwiZHJpbGxkb3duRWxzIiwicmVSZW5kZXJSb3ciLCJuZXdSb3dFbCIsImdlbmVyYXRlUm93TWFya3VwIiwicHJldlJvd0VsIiwicmVwbGFjZVdpdGgiLCJleHBhbmRCdXR0b24iLCJtYXgiLCJzdWJSb3ciLCJkcmlsbGRvd25PcGVuIiwib25jZSIsInNldFRpbWVvdXQiLCJidXR0b25IZWlnaHQiLCJoZWlnaHQiLCJ0b3AiLCJyb3dIZWlnaHQiLCJ1cGRhdGVPbiIsInRocm90dGxlIiwid2luZG93IiwicGFyZW50Um93IiwiaXNTdWIiLCJ1bmlxdWVJRCIsImRyaWxsZG93bk1hcmt1cHMiLCJkcmlsbGRvd25Sb3ciLCJjZWxsVmFsdWUiLCJyb3dDZWxscyIsImdlbmVyYXRlSW5saW5lRmllbGRzIiwiZ2VuZXJhdGVJcERldGFpbHMiLCJnZW5lcmF0ZUJyZWFrZG93bkJhciIsImdlbmVyYXRlQnV0dG9uIiwiYnV0dG9uSWNvbiIsImdlbmVyYXRlQWN0aW9ucyIsImZvcm1hdHRlciIsInJvd09iaiIsImNvbHVtbkVudGl0eSIsImxlZ2VuZCIsInRvdGFsIiwiYnJlYWtkb3duQmFyIiwidmFsdWVGb3JtYXQiLCJiYXJzIiwia2V5IiwiYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25fYmFyIiwiYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25faG92ZXJib3giLCJmb3JFYWNoIiwiYmxvY2tfdGFibGVfYm9keV9yb3dfY2VsbF9icmVha2Rvd25faG92ZXJib3hfcm93IiwiY3VzdG9tQ29sb3JzIiwiZGF0YUZpZWxkcyIsInJlc3VsdHMiLCJhY3Rpb25zTWFya3VwIiwiYnV0dG9uTWFya3VwIiwiZXh0cmFNYXJrdXAiLCJvbiIsImV2ZW50IiwiJHRoaXMiLCJjdXJyZW50VGFyZ2V0IiwiaXNCYWNrIiwiaGFzQ2xhc3MiLCJpc05leHQiLCJpc0V4dHJhIiwicGFnZU51bWJlciIsImh0bWwiLCJ0ZXh0Q29udGVudCIsImJ1dHRvbiQiLCJuZXh0IiwiaXRlbVJvdyQiLCJjbG9zZXN0IiwiaXRlbUlEIiwiaXRlbUluZGV4IiwiZGF0YUl0ZW0iLCJwYXJlbnQiLCJ0cmlnZ2VyIiwiaXRlbVJvdyIsImNvbnRlbnQkIiwid3JhcHBlciQiLCJ0cmlnZ2VyJCIsImNvdW50cnkkIiwiaXNMb2FkZWQiLCJpcERhdGFGZXRjaGVyIiwic2V0dGluZ3MiLCJ0cmFja0FycmF5Q2hpbGRyZW4iLCJoYXNFcnJvciIsImNvbnNvbGUiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJtb2JpbGVXaWR0aCIsImlzSGlkZGVuIiwicHJldlJvd3MiLCJpbmRleE9mIiwidXBkYXRlT25CaW5kIiwiY291bnQiLCJyZWFsQ291bnQiLCJ0cmFuc2Zvcm1TZWxmIiwib3B0aW9uIiwicGlwZSIsImJvdGhXYXlzIiwicmVmMSIsInJvd3NUb01ha2VBdmFpbGFibGUiLCJmaWx0ZXIiLCJyb3dWYWx1ZSIsInRvU3RyaW5nIiwicm93RmlsdGVyIiwibmFtZSIsInJlZjIiLCJyb3dDbG9uZSIsImN1cnJlbnRTb3J0IiwicHJldlNvcnQiLCJjdXJyZW50IiwidmVyc2lvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheU11dGF0b3JNZXRob2RzIiwiZHVtbXlQcm9wZXJ0eURlc2NyaXB0b3IiLCJib3VuZEluc3RhbmNlcyIsInBsYWNlaG9sZGVyIiwiY3JlYXRlIiwic2lsZW50Iiwic2V0IiwibmV3UGxhY2Vob2xkZXIiLCJjaGVja0lmIiwic2V0UGhvbGRlclJlZ0V4IiwiZGVmYXVsdE9wdGlvbnMiLCJkZWxheSIsInNpbXBsZVNlbGVjdG9yIiwicHJvbWlzZVRyYW5zZm9ybXMiLCJkaXNwYXRjaEV2ZW50cyIsInNlbmRBcnJheUNvcGllcyIsImRlZmluZVByb3BlcnR5IiwiZ2V0RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNhY2hlZEV2ZW50IiwiY2hhbmdlRXZlbnQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIl9zYiIsInJlcXVpcmVzRG9tRGVzY3JpcHRvckZpeCIsIkVsZW1lbnQiLCJ3aW5kb3dQcm9wc1RvSWdub3JlIiwic2V0VmFsdWVOb29wIiwidiIsInB1Ymxpc2hlciIsInVwZGF0ZUFsbFN1YnMiLCJnZW5JRCIsImdlbk9iaiIsImdlblByb3hpZWRJbnRlcmZhY2UiLCJjb21wbGV0ZUNhbGxiYWNrIiwic3ViamVjdCIsImN1c3RvbU9wdGlvbnMiLCJzYXZlT3B0aW9ucyIsImdlblNlbGZVcGRhdGVyIiwiYmluZGluZyIsImZldGNoVmFsdWUiLCJzZWxmVXBkYXRlciIsIkJpbmRpbmciLCJzZXRWYWx1ZSIsImZldGNoRGlyZWN0VmFsdWUiLCJ0YXJnZXQiLCJpdGVtIiwiaXNEZWZpbmVkIiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaXNGdW5jdGlvbiIsImlzQmluZGluZ0ludGVyZmFjZSIsIkJpbmRpbmdJbnRlcmZhY2UiLCJpc0JpbmRpbmciLCJpc0l0ZXJhYmxlIiwiaXNEb20iLCJub2RlTmFtZSIsIm5vZGVUeXBlIiwiaXNEb21JbnB1dCIsImlzRG9tUmFkaW8iLCJpc0RvbUNoZWNrYm94IiwiaXNFbENvbGxlY3Rpb24iLCJOb2RlTGlzdCIsIkhUTUxDb2xsZWN0aW9uIiwialF1ZXJ5IiwiZG9tRWxzQXJlU2FtZSIsIml0ZXJhYmxlIiwiaXRlbXNXaXRoU2FtZVR5cGUiLCJpc0RvbU5vZGUiLCJjb252ZXJ0VG9MaXZlIiwib2JqZWN0IiwicHJvcGVydHkiLCJpc1Byb3RvIiwiZGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsIm9iamVjdFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJmZXRjaERlc2NyaXB0b3IiLCJiaW5kaW5nSW5zdGFuY2UiLCJvbmx5QXJyYXlNZXRob2RzIiwiXyIsIm9yaWdEZXNjcmlwdG9yIiwibWV0aG9kIiwicmVzdWx0IiwiYXJndW1lbnRzIiwib3JpZ0ZuIiwiY29udGV4dCIsImFyZ3MiLCJnZXR0ZXJWYWx1ZSIsInByb3h5Rm4iLCJzZWxmVHJhbnNmb3JtIiwiaXNMaXZlUHJvcCIsIm5ld1ZhbHVlIiwidGFyZ2V0SW5jbHVkZXMiLCJwcm9wZXJ0eURlc2NyaXB0b3IiLCJvcmlnR2V0dGVyIiwib3JpZ1NldHRlciIsInNob3VsZFdyaXRlTGl2ZVByb3AiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiY2xvbmVOb2RlIiwidHlwZUlzQXJyYXkiLCJzaG91bGRJbmRpY2F0ZVVwZGF0ZUlzRnJvbVNlbGYiLCJlbnVtZXJhYmxlIiwiY29udmVydFRvUmVnIiwibmV3RGVzY3JpcHRvciIsImNsb25lT2JqZWN0IiwiZXh0ZW5kU3RhdGUiLCJiYXNlIiwic3RhdGVUb0luaGVyaXQiLCJjYWNoZSIsInNlbGVjdG9yIiwiaXNNdWx0aUNob2ljZSIsInNhbXBsZUl0ZW0iLCJfc2JfSUQiLCJfc2JfbWFwIiwiZ3JvdXBCaW5kaW5nIiwiQiIsInByb3BzTWFwIiwiYWRkVG9Ob2RlU3RvcmUiLCJwaG9sZGVyUmVnRXgiLCJwaG9sZGVyUmVnRXhTcGxpdCIsImVuZCIsImVzY2FwZVJlZ0V4IiwibWlkZGxlIiwiUmVnRXhwIiwic3RhcnQiLCJhcHBseVBsYWNlaG9sZGVycyIsImNvbnRleHRzIiwidmFsdWVzIiwiaW5kZXhNYXAiLCJjb250ZXh0UGFydCIsIm5vZGVTdG9yZSIsIm5vZGUiLCJ0YXJnZXRQbGFjZWhvbGRlciIsInNjYW5UZXh0Tm9kZXNQbGFjZWhvbGRlcnMiLCJlbGVtZW50IiwiY2hpbGROb2RlcyIsIm1hdGNoIiwidGV4dFBpZWNlcyIsInNwbGl0IiwibmV3RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibmV3Tm9kZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0UGllY2UiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiZ2V0RXJyU291cmNlIiwiZXJyb3JOYW1lIiwiRXJyb3IiLCJlcnJvcnMiLCJ0aHJvd1dhcm5pbmciLCJ3YXJuaW5nTmFtZSIsImRlcHRoIiwiZXJyU291cmNlIiwid2FybiIsInRocm93RXJyb3JCYWRBcmciLCJhcmciLCJ0aHJvd0Vycm9yIiwic3RhY2siLCJpbnZhbGlkUGFyYW1OYW1lIiwiZm5Pbmx5IiwiYmFkRXZlbnRBcmciLCJlbXB0eUxpc3QiLCJvbmx5T25lRE9NRWxlbWVudCIsIm1peGVkRWxMaXN0IiwiaW50ZXJmYWNlVG9SZXR1cm4iLCJzZWxmQ2xvbmUiLCJuZXdJbnRlcmZhY2UiLCJzZXRPYmplY3QiLCJzZXRQcm9wZXJ0eSIsImJvdW5kSUQiLCJwcm9wTWFwIiwicmVtb3ZlQWxsU3VicyIsInByb3AiLCJwYXJlbnRCaW5kaW5nIiwib3B0aW9uc0RlZmF1bHQiLCJzdWJzIiwic3Vic01ldGEiLCJwdWJzTWFwIiwiYXR0YWNoZWRFdmVudHMiLCJjaG9pY2VzIiwiY2hvaWNlRWwiLCJjaG9pY2VCaW5kaW5nIiwiYWRkU3ViIiwidHJhbnNmb3JtRm4iLCJwYXJlbnRQcm9wZXJ0eSIsInNjYW5Gb3JQaG9sZGVycyIsInBob2xkZXJWYWx1ZXMiLCJwaG9sZGVyIiwidGV4dE5vZGVzIiwic3ViamVjdFZhbHVlIiwiZXZlbnRVcGRhdGVIYW5kbGVyIiwic3ViIiwidXBkYXRlT25jZSIsImFscmVhZHlIYWRTdWIiLCJzdWJJdGVtIiwibWV0YURhdGEiLCJ1bnNoaWZ0Iiwib3B0cyIsInZhbHVlUmVmIiwicmVtb3ZlU3ViIiwic3BsaWNlIiwiZGVzdHJveSIsInJlbW92ZVBvbGxJbnRlcnZhbCIsInVuUmVnaXN0ZXJFdmVudCIsImdldEF0dHJpYnV0ZSIsImNob2ljZU5hbWUiLCJjaGVja2VkIiwiZnJvbVNlbGYiLCJmcm9tQ2hhbmdlRXZlbnQiLCJlbnRpcmVWYWx1ZSIsImsiLCJsZW4iLCJsZW4xIiwibiIsIm5ld0Nob2ljZVZhbHVlIiwibmV3Q2hvaWNlcyIsIm5ld1ZhbHVlQXJyYXkiLCJvdmVyd3JpdGVQcmV2aW91cyIsInByZXZDdXJzcm9yIiwidGFyZ2V0Q2hvaWNlQmluZGluZyIsInRleHROb2RlIiwicGhvbGRlckNvbnRleHRzIiwicGhvbGRlckluZGV4TWFwIiwiY29uY2F0IiwidmFsdWVQYXNzZWQiLCJpc0VtaXR0ZXIiLCJlbWl0RXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwic2V0QXR0cmlidXRlIiwiYXJyIiwidXBkYXRlU3ViIiwiaXNEZWxheWVkVXBkYXRlIiwiY3VycmVudFRpbWUiLCJtZXRhIiwic3ViVmFsdWUiLCJ0aW1lUGFzc2VkIiwiZGlzYWxsb3dMaXN0IiwiRGF0ZSIsImxhc3RVcGRhdGUiLCJjbGVhclRpbWVvdXQiLCJ1cGRhdGVUaW1lciIsImNvbmRpdGlvbkZuIiwiYWRkTW9kaWZpZXJGbiIsInN1YkludGVyZmFjZXMiLCJzdWJqZWN0Rm4iLCJzdWJJbnRlcmZhY2UiLCJzdWJNZXRhRGF0YSIsInN1YnNjcmliZXIiLCJiaW5kaW5ncyIsInNldFNlbGZUcmFuc2Zvcm0iLCJhZGREaXNhbGxvd1J1bGUiLCJ0YXJnZXRTdWIiLCJ0YXJnZXREaXNhbGxvdyIsImUiLCJhZGRQb2xsSW50ZXJ2YWwiLCJ0aW1lIiwicG9sbEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwb2xsZWRWYWx1ZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRVcGRhdGVMaXN0ZW5lciIsImV2ZW50TmFtZSIsInRhcmdldFByb3BlcnR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3VsZFJlZGVmaW5lVmFsdWUiLCJyZWdpc3RlckV2ZW50IiwiZXZlbnRIYW5kbGVyIiwiZXZlbnRNZXRob2RzIiwibGlzdGVuIiwiZXh0cmFEYXRhIiwiZXZlbnRPYmplY3QiLCJlbWl0IiwiYmluZGluZ0RhdGEiLCJpbmhlcml0ZWRTdGF0ZSIsInN0YWdlIiwib3B0aW9uc1Bhc3NlZCIsIkJpbmRpbmdJbnRlcmZhY2VQcml2YXRlIiwiZGVmaW5lTWFpblByb3BzIiwiZGVmaW5lUHJvcGVydGllcyIsIm9iamVjdHMiLCJjcmVhdGVCaW5kaW5nIiwibmV3T2JqZWN0VHlwZSIsImJpbmRpbmdJbnRlcmZhY2UiLCJjYWNoZWRCaW5kaW5nIiwicGF0Y2hDYWNoZWRCaW5kaW5nIiwibmV3QmluZGluZyIsImlzTmFOIiwicGFyc2VJbnQiLCJsaXN0ZW5NZXRob2QiLCJyZW1vdmVNZXRob2QiLCJlbWl0TWV0aG9kIiwiR3JvdXBCaW5kaW5nIiwiYWRkVG9QdWJsaXNoZXIiLCJwdWJsaXNoZXJJbnRlcmZhY2UiLCJNRVRIT0RfYm90aFdheXMiLCJNRVRIT0Rfb2YiLCJNRVRIT0Rfc2V0IiwiTUVUSE9EX2NoYWluVG8iLCJNRVRIT0RfdHJhbnNmb3JtU2VsZiIsIk1FVEhPRF90cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1BbGwiLCJNRVRIT0RfdHJhbnNmb3JtQWxsIiwiTUVUSE9EX2NvbmRpdGlvbiIsIk1FVEhPRF9jb25kaXRpb25BbGwiLCJ1bkJpbmQiLCJNRVRIT0RfdW5CaW5kIiwicG9sbEV2ZXJ5IiwiTUVUSE9EX3BvbGxFdmVyeSIsInN0b3BQb2xsaW5nIiwiTUVUSE9EX3N0b3BQb2xsaW5nIiwic2V0T3B0aW9uIiwiTUVUSE9EX3NldE9wdGlvbiIsImRpc2FsbG93RnJvbSIsInRoaXNJbnRlcmZhY2UiLCJkaXNhbGxvd0ludGVyZmFjZSIsInJlbW92ZVVwZGF0ZXIiLCJjbG9uZUJpbmRpbmciLCJjbG9uZUludGVyZmFjZSIsImFkZEJpbmRpbmciLCJzaWJsaW5nSW50ZXJmYWNlIiwidXBkYXRlIiwidHdvV2F5Iiwic3BlY2lmaWNPcHRpb25zIiwiYWx0VHJhbnNmb3JtIiwic3ViQmluZGluZyIsIm9yaWdpblRyYW5zZm9ybSIsIm9yaWdpbkNvbmRpdGlvbiIsInRyYW5zZm9ybVRvVXNlIiwib3B0aW9uTmFtZSIsIm9iamVjdFR5cGUiLCJpbnRlcmZhY2UiLCJwcm90byIsIm1ldGhvZE5hbWUiLCJjIiwiZCIsIm5vcm1hbGl6ZUtleXMiLCJuZXdCdWlsZGVyIiwiaXNCYXNlIiwiYnVpbGRlciIsInRoZVRhcmdldCIsIiRfaSIsInNvdXJjZXMiLCJzaGlmdCIsIm1vZGlmaWVycyIsIm93biIsImFsbG93TnVsbCIsIm51bGxEZWxldGVzIiwibm90RGVlcCIsIm5vdEtleXMiLCJnbG9iYWxUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm1zIiwiZ2xvYmFsRmlsdGVyIiwiZmlsdGVycyIsIm1hdGNoSHRtbFJlZ0V4cCIsImVzY2FwZUh0bWwiLCJzdHJpbmciLCJzdHIiLCJleGVjIiwiZXNjYXBlIiwibGFzdEluZGV4IiwiY2hhckNvZGVBdCIsInN1YnN0cmluZyIsIkV2ZW50TGl0ZSIsIkxJU1RFTkVSUyIsIm1ldGhvZHMiLCJvZmYiLCJtaXhpbiIsImZ1bmMiLCJnZXRMaXN0ZW5lcnMiLCJ0aGF0Iiwid3JhcCIsIm9yaWdpbmFsTGlzdGVuZXIiLCJsaXN0bmVycyIsIm5lIiwidGVzdCIsImxpc3RlbmVycyIsImFyZ2xlbiIsInplcm9hcmciLCJvbmVhcmciLCJtb3JlYXJncyIsInJlYWRvbmx5Iiwic2hvdWxkRGVlcEV4dGVuZCIsInBhcmVudEtleSIsInNvdXJjZSIsInNvdXJjZVZhbHVlIiwidGFyZ2V0VmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsInN1YlRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUFBO2FBRWE7QUFEYkMsU0FHUztBQUZUQyxVQUlVO0FBSFYsQUNIQUM7U0FDQ0M7Z0JBQWdCLFVBQUMsQ0FBQyxJQUFJLFdBQVcsVUFBVSxXQUFXLG1CQUF0QzttQkFDSkMsYUFBYUMsY0FBY0QsOERBQ3BDLENBQUlFLFdBQWMsaUJBQW9CLE9BQ3RDLENBQUlDLFlBQWUsc0JBQXlCLE9BQzVDLENBQUlDLG1CQUFzQixzQkFBeUI7O0FBSXREQyxPQUFPLFVBQUMsQ0FBQyxBQVVUTCxXQVZvQixBQVVUTSxZQVZKO3NCQUNRTix5QkFBeUJNLDZEQUN4Qk4sbUNBQ0NBLG9EQUVEQTs7QUFLaEJPLFNBQVMs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Q0FBQ3JLLFFBQVF1a0IsT0FBUSxDQUFJdUMsT0FBT0csZUFBZTVjLFNBQzNDLENBQUNySyxRQUFROGtCLGdCQUFpQixDQUFJOWtCLFFBQVE4a0IsYUFBYWlDLGFBQWExYyxLQUFLeWMsWUFDckUsQ0FBQzltQixRQUFRK2tCLFdBQVkva0IsUUFBUStrQixRQUFRMWEsUUFBUyxDQUFJckssUUFBUStrQixRQUFRMWEsS0FBSzBjLGFBQWExYyxLQUFLeWMsVUFQNUY7OztBQVNBLElBQUdDLGdCQUFlLFFBQVMvbUIsUUFBUXlrQixhQUFuQztBQUNDLE9BQU9qVCxPQUFPbkg7QUFDZDs7QUFDRCxJQUFHckssUUFBUTRrQixpQkFBWDtBQUNDbUMsY0FBYy9tQixRQUFRNGtCLGdCQUFnQm1DLGFBQWExYyxLQUFLeWM7O0FBQ3pELElBQUc5bUIsUUFBUTZrQixjQUFlN2tCLFFBQVE2a0IsV0FBV3hhLE1BQTdDO0FBQ0MwYyxjQUFjL21CLFFBQVE2a0IsV0FBV3hhLEtBQUswYyxhQUFhMWMsS0FBS3ljOztBQUV6RDtPQUNNOW1CLFFBQVE4YyxVQUFXL2UsUUFBUWdwQixnQkFBaUJocEIsUUFBUWlwQjtBQUN4RHhWLE9BQU9uSCxPQUFPMmMsWUFBWWxLLE9BQU9pSzs7S0FGbkMsRUFJTUgsaUJBQWlCNW1CLFNBQVNxSyxLQUFLd2MsY0FBZWxWLFNBQVNvVjtBQUMzREcsWUFBZXZWLFNBQVNxVixlQUFrQkEsY0FBb0JqcEIsUUFBUWdwQixlQUFrQixLQUFRO0FBQ2hHdlYsT0FBT25ILE9BQU94UixPQUFPbUgsU0FBU2tuQixXQUFXLENBQUNILGNBQWMxYzs7O0FBR3hEbUgsT0FBT25ILE9BQU8wYzs7Ozs7QUFHbEIsT0FBT3ZWIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlNpbXBseUJpbmQgPSBpbXBvcnQgJ0BkYW5pZWxrYWxlbi9zaW1wbHliaW5kJ1xuZXh0ZW5kID0gaW1wb3J0ICdzbWFydC1leHRlbmQnXG5lc2NIVE1MID0gaW1wb3J0ICdlc2NhcGUtaHRtbCdcbmltcG9ydCAnLi9wYXJ0cy9tYXJrdXAnXG5pbXBvcnQgJy4vcGFydHMvZGVmYXVsdHMnXG5pbXBvcnQgJy4vcGFydHMvaGVscGVycydcblxuY2xhc3MgRGF0YVRhYmxlIGV4dGVuZHMgcmVxdWlyZSgnZXZlbnQtbGl0ZScpXG5cdGNvbnN0cnVjdG9yOiAoQGNvbnRhaW5lciwgb3B0aW9ucz17fSktPlxuXHRcdHN1cGVyKClcblx0XHRAb3B0aW9ucyA9IGV4dGVuZC5jbG9uZS5kZWVwT25seSgnY29sdW1ucycpKERhdGFUYWJsZS5kZWZhdWx0cywgb3B0aW9ucylcblx0XHRAc3RhdGUgPSAnbG9hZGluZyc6ZmFsc2UsICdub1Jlc3VsdHMnOmZhbHNlLCAnZXJyb3InOmZhbHNlXG5cdFx0QElEID0gKytjdXJyZW50SURcblx0XHRAdGFibGVJRCA9IFwiXFwjI3tAb3B0aW9ucy5iYXNlQ2xhc3N9LSN7QElEfVwiXG5cdFx0QHZpc2libGVSb3dzID0gW11cblx0XHRAYXZhaWxhYmxlUm93cyA9IFtdXG5cdFx0QGFsbFJvd3MgPSBbXVxuXHRcdEBsYXJnZXN0QnJlYWtkb3duVG90YWwgPSAwXG5cdFx0QHNlYXJjaENyaXRlcmlhID0gJydcblx0XHRAc2VhcmNoUGFyYW0gPSAnJ1xuXHRcdEBzb3J0QnkgPSBpZiBAb3B0aW9ucy5zb3J0QnkgdGhlbiBAb3B0aW9ucy5zb3J0QnkgZWxzZSAnJ1xuXHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblxuXHRcdCMgPT09PSBNYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0QGVscyA9IHt9XG5cdFx0QGVscy50YWJsZU91dGVyd3JhcCA9ICQobWFya3VwLnRhYmxlT3V0ZXJ3cmFwIGV4dGVuZCh7QElEfSwgQG9wdGlvbnMpKVxuXHRcdEBlbHMudGFibGUgPSAkKG1hcmt1cC50YWJsZShAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy50YWJsZUhlYWRpbmcgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkuZmlyc3QoKS5jaGlsZHJlbigpXG5cdFx0QGVscy50YWJsZUJvZHkgPSBAZWxzLnRhYmxlLmNoaWxkcmVuKCkubGFzdCgpXG5cdFx0QGVscy5ub1Jlc3VsdHNNZXNzYWdlID0gJChtYXJrdXAubm9SZXN1bHRzKEBvcHRpb25zKSkuYXBwZW5kVG8oQGVscy50YWJsZU91dGVyd3JhcClcblx0XHRAZWxzLmxvYWRpbmdNZXNzYWdlID0gJChtYXJrdXAubG9hZGluZyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5lcnJvck1lc3NhZ2UgPSAkKG1hcmt1cC5lcnJvcihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdlU3RhdHVzID0gJChtYXJrdXAucGFnZVN0YXR1cyhAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdpbmF0aW9uID0gJChtYXJrdXAucGFnaW5hdGlvbihAb3B0aW9ucykpLmFwcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cdFx0QGVscy5wYWdpbmF0aW9uSXRlbXMgPSBAZWxzLnBhZ2luYXRpb24uY2hpbGRyZW4oJy5fcGFnaW5hdGlvbkl0ZW1zJylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYSA9IEBlbHMucGFnaW5hdGlvbi5jaGlsZHJlbignLl9leHRyYUluZGljYXRvcicpXG5cdFx0QGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QgPSBAZWxzLnBhZ2luYXRpb25FeHRyYS5jaGlsZHJlbignc2VsZWN0Jylcblx0XHRAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQgPSBAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdC5wcmV2KClcblx0XHRAZWxzLnNlYXJjaEZpZWxkID0gJChtYXJrdXAuc2VhcmNoRmllbGQoQG9wdGlvbnMpKS5pbnNlcnRCZWZvcmUoQGVscy50YWJsZSlcblx0XHRAZWxzLnNlYXJjaFBhcmFtID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignc2VsZWN0Jylcblx0XHRAZWxzLnNlYXJjaENyaXRlcmlhID0gQGVscy5zZWFyY2hGaWVsZC5jaGlsZHJlbignaW5wdXQnKVxuXHRcdEBlbHMuZ2xvYmFsU3R5bGVzID0gJCgnPHN0eWxlIC8+JykucHJlcGVuZFRvKEBlbHMudGFibGVPdXRlcndyYXApXG5cblx0XHRAZWxzLnRhYmxlSGVhZGluZy5hcHBlbmQoQGdlbmVyYXRlSGVhZGluZ0NvbHVtbnMoKSlcblxuXHRcdEBlbHMudGFibGVPdXRlcndyYXAuYXBwZW5kVG8gQGNvbnRhaW5lclxuXHRcdEBlbHMudGFibGUuZGF0YSAnRGF0YVRhYmxlJywgQFxuXHRcdEBlbHMudGFibGVbMF0uc3R5bGUubWluV2lkdGggPSBcIiN7QG9wdGlvbnMubWluV2lkdGh9cHhcIiBpZiBAb3B0aW9ucy5taW5XaWR0aFxuXG5cblx0XHQjID09PT0gRXZlbnRzICYgQmluZGluZ3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0UHJvbWlzZS5iaW5kKEApXG5cdFx0XHQudGhlbihAYXR0YWNoRXZlbnRzKVxuXHRcdFx0LnRoZW4oQGF0dGFjaEJpbmRpbmdzKVxuXHRcdFx0LnRoZW4gKCktPiBpZiBAb3B0aW9ucy5sb2FkT25Jbml0IHRoZW4gQGxvYWREYXRhKClcblxuXHRcdHJldHVybiBAXG5cblxuXG5EYXRhVGFibGU6OmZldGNoRGF0YSA9ICgpLT5cblx0QHN0YXRlLmxvYWRpbmcgPSB0cnVlXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cdFx0LnRoZW4gKCk9PiBAb3B0aW9ucy5kYXRhLmNhbGwoQClcblx0XHQudGhlbiAoZGF0YSk9PlxuXHRcdFx0QHN0YXRlLmxvYWRpbmcgPSBAc3RhdGUuZXJyb3IgPSBmYWxzZVxuXHRcdFx0cmV0dXJuIGRhdGFcblx0XHQuY2F0Y2ggKGVycik9PlxuXHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cbkRhdGFUYWJsZTo6c2V0RGF0YSA9IChkYXRhKS0+XG5cdEBhbGxSb3dzID0gZGF0YSBpZiBBcnJheS5pc0FycmF5KGRhdGEpXG5cbkRhdGFUYWJsZTo6YXBwZW5kRGF0YSA9IChkYXRhKS0+XG5cdEBhbGxSb3dzLnB1c2goZGF0YS4uLilcblxuRGF0YVRhYmxlOjpsb2FkRGF0YSA9ICgpLT5cblx0QHVucHJvY2Vzc1Jvdyhyb3cpIGZvciByb3cgaW4gQGFsbFJvd3MgaWYgQGFsbFJvd3MubGVuZ3RoXG5cdEBmZXRjaERhdGEoKS50aGVuIChkYXRhKT0+IEBzZXREYXRhKGRhdGEpXG5cbkRhdGFUYWJsZTo6cmVmcmVzaCA9ICgpLT5cblx0QGF2YWlsYWJsZVJvd3MgPSBAYXZhaWxhYmxlUm93c1xuXHRAY3VycmVudFBhZ2UgPSBAY3VycmVudFBhZ2VcblxuRGF0YVRhYmxlOjptYXJrdXBBcmdzID0gKGFyZ3NPYmplY3Q9e30pLT5cblx0YXJnc09iamVjdC5iYXNlQ2xhc3MgPSBAb3B0aW9ucy5iYXNlQ2xhc3Ncblx0cmV0dXJuIGFyZ3NPYmplY3RcblxuXG5cblxuaW1wb3J0ICcuL3BhcnRzL21ldGhvZHMnXG5pbXBvcnQgJy4vcGFydHMvYXR0YWNoRXZlbnRzJ1xuaW1wb3J0ICcuL3BhcnRzL2F0dGFjaEJpbmRpbmdzJ1xuaW1wb3J0ICcuL3BhcnRzL3VzZXJBY3Rpb25NZXRob2RzJ1xuXG5jdXJyZW50SUQgPSAwXG5EYXRhVGFibGUudmVyc2lvbiA9IGltcG9ydCAnLi4vLi4vcGFja2FnZS5qc29uICQgdmVyc2lvbidcbkRhdGFUYWJsZS5oZWxwZXJzID0gaGVscGVyc1xuRGF0YVRhYmxlLm1hcmt1cCA9IG1hcmt1cFxuRGF0YVRhYmxlLmRlZmF1bHRzID0gZGVmYXVsdHNcbm1vZHVsZS5leHBvcnRzID0gRGF0YVRhYmxlXG5cblxuXG5cbiIsIm1hcmt1cCA9XG5cdHRhYmxlT3V0ZXJ3cmFwOiAoe0lELCBiYXNlQ2xhc3MsIG1pbldpZHRoLCBoYXNNb2JpbGUsIGNlbGxzSGF2ZVBhZGRpbmd9KS0+IFwiXG5cdFx0PGRpdiBpZD0nI3tiYXNlQ2xhc3N9LSN7SUR9JyBjbGFzcz0nI3tiYXNlQ2xhc3N9LW91dGVyd3JhcCB7e2xvYWRpbmd9fSB7e25vUmVzdWx0c319IHt7aGFzRXJyb3J9fVxuXHRcdFx0I3tpZiBtaW5XaWR0aCB0aGVuICdfaGFzTWluV2lkdGgnIGVsc2UgJyd9XG5cdFx0XHQje2lmIGhhc01vYmlsZSB0aGVuICd7e21vYmlsZVZlcnNpb259fScgZWxzZSAnJ31cblx0XHRcdCN7aWYgY2VsbHNIYXZlUGFkZGluZyB0aGVuICdfY2VsbHNIYXZlUGFkZGluZycgZWxzZSAnJ31cblx0XHQnPjwvZGl2PlxuXHRcIlxuXG5cdHRhYmxlOiAoe2Jhc2VDbGFzcywgYWxpZ25tZW50fSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfSBhbGlnbm1lbnQtLS0je2FsaWdubWVudH0gc29ydERpcmVjdGlvbi0tLXt7c29ydERpcmVjdGlvbn19Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWhlYWRpbmctcm93Jz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHknPjwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0bG9hZGluZzogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmcge3tpc1Zpc2libGV9fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pbm5lcndyYXAnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbG9hZGluZy1pY29uJz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWxvYWRpbmctdGV4dCc+TG9hZGluZzwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRub1Jlc3VsdHM6ICh7YmFzZUNsYXNzLCBpdGVtU2luZ2xlTGFiZWw9J0l0ZW0nLCBpdGVtUGx1cmFsTGFiZWw9aXRlbVNpbmdsZUxhYmVsKydzJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzIHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy1pbm5lcndyYXAnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLWljb24nPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tbm9SZXN1bHRzLXRleHQnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ub1Jlc3VsdHMtdGV4dC10aXRsZSc+Tm8gI3tpdGVtU2luZ2xlTGFiZWx9cyB0byBEaXNwbGF5PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LW5vUmVzdWx0cy10ZXh0LXN1YnRpdGxlJz5UaGVyZSBhcmUgbm8gbWF0Y2hpbmcgI3tpdGVtUGx1cmFsTGFiZWx9IGZvciB0aGUgc2VhcmNoIHF1ZXJ5IHlvdSd2ZSB0eXBlZC48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdGVycm9yOiAoe2Jhc2VDbGFzc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3Ige3tpc1Zpc2libGV9fSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItaW5uZXJ3cmFwJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLWljb24nPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dCc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWVycm9yLXRleHQtdGl0bGUnPkEgRmF0YWwgRXJyb3IgaGFzIE9jY3VyZWQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZXJyb3ItdGV4dC1zdWJ0aXRsZSc+UmVwb3J0IHRoZSBmb2xsb3dpbmcgdG8gdGhlIGFkbWluOjxiciAvPlxcXCJ7e2Vycm9yTWVzc2FnZX19XFxcIjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cGFnZVN0YXR1czogKHtiYXNlQ2xhc3MsIHNob3dQYWdlU3RhdHVzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdlU3RhdHVzICN7aWYgc2hvd1BhZ2VTdGF0dXMgdGhlbiAnaXNfdmlzaWJsZScgZWxzZSAnJ30nPlxuXHRcdFx0U2hvd2luZyB7e3Jvd1JhbmdlfX0gb2Yge3t0b3RhbFJvd3N9fVxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblx0cGFnaW5hdGlvbjogKHtiYXNlQ2xhc3N9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24ge3toYXNFeHRyYX19IHt7aXNWaXNpYmxlfX0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX2JhY2snPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtLXRleHQnPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW1zd3JhcCBfcGFnaW5hdGlvbkl0ZW1zJz48L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0gX2V4dHJhSW5kaWNhdG9yJz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz48L2Rpdj5cblx0XHRcdFx0PHNlbGVjdCBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS1zZWxlY3QnPjwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tcGFnaW5hdGlvbi1pdGVtIF9wYWdpbmF0aW9uSXRlbSBfbmV4dCc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1wYWdpbmF0aW9uLWl0ZW0tdGV4dCc+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XCJcblxuXG5cdHBhZ2luYXRpb25JdGVtOiAoe2Jhc2VDbGFzcywgdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbSBfcGFnaW5hdGlvbkl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXBhZ2luYXRpb24taXRlbS10ZXh0Jz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblxuXHRoZWFkaW5nQ2VsbDogKHtiYXNlQ2xhc3MsIGV4dHJhQ2xhc3Nlcz0nJywgc2x1ZywgaWNvbj0nJywgbGFiZWwsIHN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsICN7ZXh0cmFDbGFzc2VzfSBfXyN7c2x1Z30nIGRhdGEtc2x1Zz0nI3tzbHVnfScgZGF0YS1pY29uPScje2ljb259JyAje3N0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1oZWFkaW5nLXJvdy1jZWxsLXRleHQnPiN7bGFiZWx9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cblxuXHRyb3c6ICh7YmFzZUNsYXNzLCByb3dJRCwgY2VsbHMsIGRyaWxsZG93bj0nJ30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYm9keS1yb3cgX3RhYmxlUm93IHt7ZHJpbGxkb3duU3RhdGV9fScgZGF0YS1yb3ctaWQ9JyN7cm93SUR9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24gX2V4cGFuZERyaWxsZG93bic+XG5cdFx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1leHBhbmREcmlsbGRvd24taWNvbic+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0I3tjZWxsc31cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWRyaWxsZG93biBfdGFibGVSb3dEcmlsbGRvd24nPlxuXHRcdFx0XHQje2RyaWxsZG93bn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXHRyb3dDZWxsOiAoe2Jhc2VDbGFzcywgZXh0cmFDbGFzc2VzPScnLCBsYWJlbCwgY29sdW1uLCBzbHVnLCB2YWx1ZSwgc3R5bGU9Jyd9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJvZHktcm93LWNlbGwgX18je3NsdWd9ICN7ZXh0cmFDbGFzc2VzfScgZGF0YS1zbHVnPScje3NsdWd9JyBkYXRhLWNvbHVtbj0nI3tjb2x1bW59JyAje3N0eWxlfT5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1ib2R5LXJvdy1jZWxsLWlubmVyd3JhcCcgdGl0bGU9JyN7bGFiZWx9Jz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cblxuXG5cblx0c2VhcmNoRmllbGQ6ICh7YmFzZUNsYXNzLCBzZWFyY2h9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaCAje2lmIHNlYXJjaD8ubGVuZ3RoIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJyd9Jz5cblx0XHRcdDxzZWxlY3QgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0Jz48L3NlbGVjdD5cblx0XHRcdDxpbnB1dCBjbGFzcz0nI3tiYXNlQ2xhc3N9LXNlYXJjaC1pbnB1dCcgLz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1zZWFyY2gtc2VsZWN0VHJpZ2dlcic+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRpcERldGFpbHM6ICh7YmFzZUNsYXNzLCBpcEFkZHJlc3MsIGV4dHJhPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMgX2lwRGV0YWlscycgZGF0YS1pcD0nI3tpcEFkZHJlc3N9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtdHJpZ2dlciBfaXBEZXRhaWxzLXRyaWdnZXInPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50Jz5Mb2FkaW5nIElQIERldGFpbHM8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQje2V4dHJhfVxuXHRcIlxuXG5cdGlwRGV0YWlsc0l0ZW06ICh7YmFzZUNsYXNzLCBsYWJlbCwgdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50LWl0ZW0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWlwRGV0YWlscy1jb250ZW50LWl0ZW0tbGFiZWwnPiN7bGFiZWx9OiA8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1pcERldGFpbHMtY29udGVudC1pdGVtLXZhbHVlJz4je3ZhbHVlfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXHRcblxuXG5cblx0ZmllbGRzOiAoe2Jhc2VDbGFzcywgZmllbGRzfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1maWVsZEdyb3VwJz4je2ZpZWxkc308L2Rpdj5cblx0XCJcblxuXHRmaWVsZHNJdGVtOiAoe2Jhc2VDbGFzcywgbGFiZWwsdmFsdWV9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWZpZWxkR3JvdXAtaXRlbSc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cC1pdGVtLWxhYmVsJz4je2xhYmVsfTogPC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tZmllbGRHcm91cC1pdGVtLXZhbHVlJz4je2VzY0hUTUwgdmFsdWV9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRidXR0b246ICh7YmFzZUNsYXNzLCBhY3Rpb24sIGljb249JycsIGlzTXVsdGl9KS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbiBfYWN0aW9uQnV0dG9uICN7aWYgaXNNdWx0aSB0aGVuICdfaXNNdWx0aScgZWxzZSAnJ30nIGRhdGEtYWN0aW9uPScje2FjdGlvbn0nPlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWJ1dHRvbi1pY29uJz4je2ljb259PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFwiXG5cdFxuXG5cblxuXHRhY3Rpb25zOiAoe2Jhc2VDbGFzcywgYWN0aW9uc30pLT4gXCJcblx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucyc+XG5cdFx0XHQ8ZGl2IGNsYXNzPScje2Jhc2VDbGFzc30tYWN0aW9ucy1wb3B1cCc+I3thY3Rpb25zfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG5cdGFjdGlvbnNPdmVybGF5OiAoKS0+IFwiXG5cdFx0PGRpdiBjbGFzcz0nI3tEYXRhVGFibGUuZGVmYXVsdHMuYmFzZUNsYXNzfS1hY3Rpb25zLW92ZXJsYXknPjwvZGl2PlxuXHRcIlxuXG5cdGFjdGlvbnNJdGVtOiAoe2Jhc2VDbGFzcywgYWN0aW9uLCBpY29uLCBsYWJlbCwgY3VzdG9tSWNvblN0eWxlPScnfSktPiBcIlxuXHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0gX2FjdGlvbkJ1dHRvbiBfc3ViQWN0aW9uQnV0dG9uJyBkYXRhLWFjdGlvbj0nI3thY3Rpb259JyBzdHlsZT0nI3tjdXN0b21JY29uU3R5bGV9Jz5cblx0XHRcdDxkaXYgY2xhc3M9JyN7YmFzZUNsYXNzfS1hY3Rpb25zLXBvcHVwLWl0ZW0taWNvbic+I3tpY29ufTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nI3tiYXNlQ2xhc3N9LWFjdGlvbnMtcG9wdXAtaXRlbS10ZXh0Jz4je2xhYmVsfTwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcIlxuXG4iLCJkZWZhdWx0cyA9IFxuXHQncGVyUGFnZSc6IDIwXG5cdCdwYWdlQ291bnRNYXgnOiAxMFxuXHQnbWluV2lkdGgnOiAwXG5cdCdtb2JpbGVXaWR0aCc6IDczNlxuXHQnY2VsbHNIYXZlUGFkZGluZyc6IGZhbHNlXG5cdCdoYXNNb2JpbGUnOiB0cnVlXG5cdCdsb2FkT25Jbml0JzogdHJ1ZVxuXHQnY29sdW1ucyc6IFtdXG5cdCdzZWFyY2gnOiBbXVxuXHQncGVyY2VudGFnZSc6IHt9XG5cdCdiYXNlQ2xhc3MnOiAnRGF0YVRhYmxlJ1xuXHQnc2hvd1BhZ2VTdGF0dXMnOiB0cnVlXG5cdCdzb3J0QnknOiAnJ1xuXHQnYWxpZ25tZW50JzogJ2xlZnQnXG5cdCdhY3Rpb25zJzogZmFsc2Vcblx0J2lwRGF0YUZldGNoZXInOiAoaXBBZGRyZXNzKS0+IG5ldyBQcm9taXNlIChyZXNvbHZlKS0+ICQuZ2V0IFwiaHR0cDovL2lwaW5mby5pby8je2lwQWRkcmVzc31cIiwgcmVzb2x2ZSwgJ0pTT04nXG4iLCJoZWxwZXJzID0ge31cblxuXG5oZWxwZXJzLmNvbXBhcmVWYWx1ZXMgPSAodmFsdWVBLCB2YWx1ZUIpLT4gc3dpdGNoXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyB0eXBlb2YgdmFsdWVCXG5cdFx0dmFsdWVBIGlzIHZhbHVlQlxuXHRcblx0d2hlbiB0eXBlb2YgdmFsdWVBIGlzICdzdHJpbmcnXG5cdFx0dmFsdWVBIGlzICcnK3ZhbHVlQlxuXG5cdHdoZW4gdHlwZW9mIHZhbHVlQSBpcyAnbnVtYmVyJ1xuXHRcdHZhbHVlQSBpcyBwYXJzZUZsb2F0KHZhbHVlQilcblxuXG5oZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCA9IChhY3Rpb25zUG9wdXAkKS0+XG5cdGlzT3BlbiA9IGFjdGlvbnNQb3B1cCQuZGF0YSAnaXNPcGVuJ1xuXG5cdGlmIGlzT3BlblxuXHRcdGFjdGlvbnNQb3B1cCQuZGF0YSgnb3ZlcmxheScpLnJlbW92ZSgpXG5cdFx0YWN0aW9uc1BvcHVwJC5yZW1vdmVDbGFzcyAnaXNfdmlzaWJsZSdcblx0ZWxzZVxuXHRcdGFjdGlvbnNQb3B1cCQuZGF0YSAnb3ZlcmxheScsIG92ZXJsYXkkID0gJChtYXJrdXAuYWN0aW9uc092ZXJsYXkoKSlcblx0XHRhY3Rpb25zUG9wdXAkLmFkZENsYXNzICdpc192aXNpYmxlJ1xuXHRcdG92ZXJsYXkkLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpLm9uZSAnY2xpY2snLCAoKS0+IGhlbHBlcnMudG9nZ2xlQWN0aW9uc1BvcHVwKGFjdGlvbnNQb3B1cCQpXG5cblx0YWN0aW9uc1BvcHVwJC5kYXRhICdpc09wZW4nLCAhaXNPcGVuXG5cblxuaGVscGVycy5nZXRCcmVha2Rvd25Ub3RhbCA9IChicmVha2Rvd24sIGJyZWFrZG93bktleXMpLT4gc3dpdGNoXG5cdHdoZW4gYnJlYWtkb3duS2V5cy5sZW5ndGggaXMgMCB0aGVuIDBcblx0ZWxzZVxuXHRcdGJyZWFrZG93bktleXNcblx0XHRcdC5tYXAgKGJyZWFrZG93bkl0ZW0pLT4gYnJlYWtkb3duW2JyZWFrZG93bkl0ZW1dXG5cdFx0XHQucmVkdWNlIChhLGIpLT4gYStiXG5cblxuXG5oZWxwZXJzLm5vcm1hbGl6ZUNvbHVtbnMgPSAoY29sdW1ucyktPlxuXHRpZiBub3QgQXJyYXkuaXNBcnJheShjb2x1bW5zKVxuXHRcdG91dHB1dCA9IGNvbHVtbnNcblx0ZWxzZVxuXHRcdG91dHB1dCA9IHt9XG5cdFx0aWYgdHlwZW9mIGNvbHVtbnNbMF0gaXMgJ3N0cmluZydcblx0XHRcdG91dHB1dFtsYWJlbF0gPSB7bGFiZWx9IGZvciBsYWJlbCBpbiBjb2x1bW5zXG5cdFx0XG5cdFx0ZWxzZSBpZiBjb2x1bW5zWzBdPy5sYWJlbFxuXHRcdFx0b3V0cHV0W2NvbHVtbi5sYWJlbF0gPSBjb2x1bW4gZm9yIGNvbHVtbiBpbiBjb2x1bW5zXG5cblxuXHRmb3IgbGFiZWwsY29sdW1uIG9mIG91dHB1dFxuXHRcdGNvbHVtbi5sYWJlbCA/PSBsYWJlbFxuXHRcdGNvbHVtbi5zbHVnID89IGNvbHVtbi5sYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UgL1xcVy9nLCAnXydcblx0XHRjb2x1bW4udHlwZSA/PSAndGV4dCdcblxuXHRyZXR1cm4gb3V0cHV0IFxuXG5cbmhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGggPSAocm93LCBsYXJnZXN0KS0+XG5cdChyb3cuYnJlYWtkb3duQmFyVG90YWwgLyBsYXJnZXN0KSAqICgxMDAgLSAxOClcblxuXG5oZWxwZXJzLmdlbkhlYWRlckNlbGxTdHlsZSA9IChjb2x1bW4pLT5cblx0c3R5bGVTdHJpbmcgPSAnJ1xuXG5cdGlmIGNvbHVtbi53aWR0aFxuXHRcdHN0eWxlU3RyaW5nICs9IFwibWF4LXdpZHRoOiAje2NvbHVtbi53aWR0aH07XCJcblx0XG5cdGlmIGNvbHVtbi5ncm93ID49IDBcblx0XHRzdHlsZVN0cmluZyArPSBcImZsZXgtZ3JvdzogI3tjb2x1bW4uZ3Jvd307XCJcblxuXHRyZXR1cm4gaWYgc3R5bGVTdHJpbmcgdGhlbiBcInN0eWxlPScje3N0eWxlU3RyaW5nfSdcIiBlbHNlICcnXG5cblxuXG5oZWxwZXJzLmdlbkNlbGxTdHlsZSA9IChjb2x1bW4pLT5cblx0c3R5bGVTdHJpbmcgPSAnJ1xuXG5cdGlmIGNvbHVtbi53aWR0aFxuXHRcdHN0eWxlU3RyaW5nICs9IFwibWF4LXdpZHRoOiAje2NvbHVtbi53aWR0aH07XCJcblxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjb2xvciA9IEBjb2xvck1hcHBpbmcoY29sdW1uLmNvbG9yLCBjb2x1bW4uY29sb3JUeXBlKVxuXHRcdHN0eWxlU3RyaW5nICs9IFwiY29sb3I6ICN7Y29sb3J9O1wiXG5cblx0aWYgY29sdW1uLmN1c3RvbVN0eWxlXG5cdFx0c3R5bGVTdHJpbmcgKz0gY29sdW1uLmN1c3RvbVN0eWxlXG5cdFxuXHRpZiBjb2x1bW4uZ3JvdyA+PSAwXG5cdFx0c3R5bGVTdHJpbmcgKz0gXCJmbGV4LWdyb3c6ICN7Y29sdW1uLmdyb3d9O1wiXG5cblx0cmV0dXJuIGlmIHN0eWxlU3RyaW5nIHRoZW4gXCJzdHlsZT0nI3tzdHlsZVN0cmluZ30nXCIgZWxzZSAnJ1xuXG5cblxuXG5oZWxwZXJzLmdlbkNlbGxDbGFzc25hbWUgPSAoY29sdW1uKS0+XG5cdGNsYXNzU3RyaW5nID0gJydcblx0XG5cdGlmIGNvbHVtbi5zb3J0YWJsZVxuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzU29ydGFibGUge3tjdXJyZW50U29ydH19J1xuXHRcblx0aWYgY29sdW1uLm5vTGFiZWxcblx0XHRjbGFzc1N0cmluZyArPSAnIF9ub0xhYmVsJ1xuXHRcblx0aWYgY29sdW1uLmlzTGlua1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzTGluaydcblx0XG5cdGlmIGNvbHVtbi5ub0VsbGlwc2lzXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfbm9FbGxpcHNpcydcblx0XG5cdGlmIGNvbHVtbi5zaG93T3ZlcmZsb3dcblx0XHRjbGFzc1N0cmluZyArPSAnIF9zaG93T3ZlcmZsb3cnXG5cdFxuXHRpZiBjb2x1bW4uY29sb3Jcblx0XHRjbGFzc1N0cmluZyArPSAnIF9oYXNDb2xvcidcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdidXR0b24nIG9yIGNvbHVtbi50eXBlIGlzICdhY3Rpb25zJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnV0dG9uJ1xuXHRcdGNvbHVtbi5hbHdheXNDZW50ZXIgPSB0cnVlXG5cdFxuXHRpZiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJ1xuXHRcdGNsYXNzU3RyaW5nICs9ICcgX2lzQnJlYWtkb3duQmFyJ1xuXHRcblx0aWYgY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscydcblx0XHRjbGFzc1N0cmluZyArPSAnIF9pc0lwRGV0YWlscydcblx0XG5cdGlmIGNvbHVtbi50eXBlIGlzICdmaWVsZHMnXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfaXNGaWVsZHMnXG5cdFxuXHRpZiBjb2x1bW4uYWx3YXlzQ2VudGVyXG5cdFx0Y2xhc3NTdHJpbmcgKz0gJyBfYWx3YXlzQ2VudGVyJ1xuXG5cdHJldHVybiBjbGFzc1N0cmluZ1xuXG5cblxuXG5cblxuXG5oZWxwZXJzLmNvbG9yTWFwcGluZyA9ICh2YWx1ZSwgY29sb3JUeXBlPSduYW1lJyktPiBzd2l0Y2ggY29sb3JUeXBlXG5cdHdoZW4gJ2Jyb3dzZXInIHRoZW4gc3dpdGNoXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRmlyZWZveCcgdGhlbiBAY29sb3JNYXBwaW5nKCdvcmFuZ2UnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0Nocm9tZScgdGhlbiBAY29sb3JNYXBwaW5nKCdncmVlbicpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnU2FmYXJpJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsdWUnKVxuXHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ01vYmlsZSBTYWZhcmknIHRoZW4gQGNvbG9yTWFwcGluZygnYmx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnSUUnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdFZGdlJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Ymx1ZScpXG5cdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnT3BlcmEnIHRoZW4gQGNvbG9yTWFwcGluZygncmVkJylcblx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdBbmRyb2lkJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2xpZ2h0Z3JlZW4nKVxuXHRcdGVsc2UgJ3Vua25vd24nXG5cdFxuXHRcblx0d2hlbiAncGxhdGZvcm0nIHRoZW4gc3dpdGNoIHZhbHVlXG5cdFx0d2hlbiAnTWFjIE9TIFgnIHRoZW4gQGNvbG9yTWFwcGluZygnYmxhY2snKVxuXHRcdHdoZW4gJ1dpbmRvd3MnIHRoZW4gQGNvbG9yTWFwcGluZygnbGlnaHRibHVlJylcblx0XHR3aGVuICdXaW5kb3dzIFBob25lJyB0aGVuIEBjb2xvck1hcHBpbmcoJ3B1cnBsZScpXG5cdFx0d2hlbiAnTGludXgnIHRoZW4gQGNvbG9yTWFwcGluZygnZGFya3llbGxvdycpXG5cdFx0d2hlbiAnaU9TJyB0aGVuIEBjb2xvck1hcHBpbmcoJ2JsYWNrJylcblx0XHR3aGVuICdBbmRyb2lkJyB0aGVuIEBjb2xvck1hcHBpbmcoXCJsaWdodGdyZWVuXCIpXG5cdFx0ZWxzZSAndW5rbm93bidcblx0XG5cdHdoZW4gJ3NhdGlzZmFjdGlvbicgdGhlbiBzd2l0Y2ggdmFsdWVcblx0XHR3aGVuICdFeGNlbGxlbnQnIHRoZW4gQGNvbG9yTWFwcGluZygnZ3JlZW4nKVxuXHRcdHdoZW4gJ05vcm1hbCcgdGhlbiBAY29sb3JNYXBwaW5nKCd5ZWxsb3cnKVxuXHRcdHdoZW4gJ1Bvb3InIHRoZW4gQGNvbG9yTWFwcGluZygncmVkJylcblx0XHRlbHNlICd1bmtub3duJ1xuXG5cdFxuXHR3aGVuICduYW1lJyB0aGVuIHN3aXRjaCB2YWx1ZVxuXHRcdHdoZW4gJ29yYW5nZScgdGhlbiAnI2VlNmYwZSdcblx0XHR3aGVuICdncmVlbicgdGhlbiAnIzAwYWQwOSdcblx0XHR3aGVuICdibHVlJyB0aGVuICcjNDc4OGYzJ1xuXHRcdHdoZW4gJ3llbGxvdycgdGhlbiAnI2VhYjcxZSdcblx0XHR3aGVuICdyZWQnIHRoZW4gJyNjYzQ4MjAnXG5cdFx0d2hlbiAnYmxhY2snIHRoZW4gJyMxODE4MTgnXG5cdFx0d2hlbiAncHVycGxlJyB0aGVuICcjYTAyMGJhJ1xuXHRcdHdoZW4gJ2xpZ2h0Ymx1ZScgdGhlbiAnIzBjYjNlZSdcblx0XHR3aGVuICdsaWdodGdyZWVuJyB0aGVuICcjNzhjMjU3J1xuXHRcdHdoZW4gJ2Rhcmt5ZWxsb3cnIHRoZW4gJyNlOGFjMDEnXG5cblx0ZWxzZSB2YWx1ZVxuXG5cblxuXG5cblxuaGVscGVycy5pY29uTWFwcGluZyA9ICh2YWx1ZSwgaWNvblR5cGUpLT4gc3dpdGNoIGljb25UeXBlXG5cdHdoZW4gJ2Jyb3dzZXInXG5cdFx0c3dpdGNoXG5cdFx0XHR3aGVuIHZhbHVlLmluY2x1ZGVzICdGaXJlZm94JyB0aGVuICcjJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnQ2hyb21lJyB0aGVuICclJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnU2FmYXJpJyB0aGVuICckJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnTW9iaWxlIFNhZmFyaScgdGhlbiAnJCdcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0lFJyB0aGVuICcmJ1xuXHRcdFx0d2hlbiB2YWx1ZS5pbmNsdWRlcyAnRWRnZScgdGhlbiAnJidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ09wZXJhJyB0aGVuICdcIidcblx0XHRcdHdoZW4gdmFsdWUuaW5jbHVkZXMgJ0FuZHJvaWQnIHRoZW4gJyYjMDM5Oydcblx0XHRcdGVsc2UgJzQnXG5cdFxuXHR3aGVuICdkZXZpY2UnXG5cdFx0c3dpdGNoIHZhbHVlXG5cdFx0XHR3aGVuICdEZXNrdG9wJyB0aGVuICchJ1xuXHRcdFx0d2hlbiAnVGFibGV0JyB0aGVuICc3J1xuXHRcdFx0d2hlbiAnTW9iaWxlJyB0aGVuICc2J1xuXHRcdFx0ZWxzZSAnNCdcblx0XG5cdHdoZW4gJ3BsYXRmb3JtJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnTWFjIE9TIFgnIHRoZW4gJyonXG5cdFx0XHR3aGVuICdXaW5kb3dzJyB0aGVuICcpJ1xuXHRcdFx0d2hlbiAnV2luZG93cyBQaG9uZScgdGhlbiAnKSdcblx0XHRcdHdoZW4gJ0xpbnV4JyB0aGVuICcrJ1xuXHRcdFx0d2hlbiAnaU9TJyB0aGVuICcqJ1xuXHRcdFx0d2hlbiAnQW5kcm9pZCcgdGhlbiBcIiYjMDM5O1wiXG5cdFx0XHRlbHNlICc0J1xuXHRcblx0d2hlbiAnc2F0aXNmYWN0aW9uJ1xuXHRcdHN3aXRjaCB2YWx1ZVxuXHRcdFx0d2hlbiAnRXhjZWxsZW50JyB0aGVuICdbJ1xuXHRcdFx0d2hlbiAnTm9ybWFsJyB0aGVuICdAJ1xuXHRcdFx0d2hlbiAnUG9vcicgdGhlbiAnPydcblx0XHRcdGVsc2UgJzQnXG5cblx0ZWxzZSAnNCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICdnZW5lcmFsLmNvZmZlZSdcbmltcG9ydCAnY29sdW1uLmNvZmZlZSdcbmltcG9ydCAncm93LmNvZmZlZSdcbmltcG9ydCAnc3BlY2lhbENlbGxzLmNvZmZlZSciLCJEYXRhVGFibGU6OmNhbGNQYWdlQ291bnQgPSAocm93cyktPlxuXHRAcGFnZUNvdW50UmVhbCA9IE1hdGguY2VpbCByb3dzLmxlbmd0aC9Ab3B0aW9ucy5wZXJQYWdlXG5cdEBwYWdlQ291bnQgPSBpZiBAcGFnZUNvdW50UmVhbCA+IEBvcHRpb25zLnBhZ2VDb3VudE1heCB0aGVuIEBvcHRpb25zLnBhZ2VDb3VudE1heCBlbHNlIEBwYWdlQ291bnRSZWFsXG5cblxuXG5cblxuRGF0YVRhYmxlOjpjYWxjUGVyY2VudGFnZVN0cmluZyA9IChjb2x1bW5WYWx1ZSwgY29sdW1uTmFtZSwgcm93KS0+XG5cdGZvcm11bGEgPSBAb3B0aW9ucy5wZXJjZW50YWdlW2NvbHVtbk5hbWVdXG5cdGNvbHVtbkEgPSBmb3JtdWxhWzBdXG5cdGNvbHVtbkIgPSBmb3JtdWxhWzJdXG5cdG1hdGhPcGVyYXRvciA9IGZvcm11bGFbMV1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSBzd2l0Y2ggbWF0aE9wZXJhdG9yXG5cdFx0d2hlbiAnKicgdGhlbiByb3dbY29sdW1uQV0gKiByb3dbY29sdW1uQl1cblx0XHR3aGVuICcvJyB0aGVuIHJvd1tjb2x1bW5BXSAvIHJvd1tjb2x1bW5CXVxuXHRcdHdoZW4gJysnIHRoZW4gcm93W2NvbHVtbkFdICsgcm93W2NvbHVtbkJdXG5cdFx0d2hlbiAnLScgdGhlbiByb3dbY29sdW1uQV0gLSByb3dbY29sdW1uQl1cblxuXHRwZXJjZW50YWdlVmFsdWUgPSAwIGlmIHBlcmNlbnRhZ2VWYWx1ZSBpcyBJbmZpbml0eVxuXHRwZXJjZW50ID0gY29udmVydFRvUGVyY2VudChwZXJjZW50YWdlVmFsdWUpXG5cdHJldHVybiBcIiN7Y29sdW1uVmFsdWV9ICgje3BlcmNlbnR9KVwiXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OnNvcnRSb3dzID0gKHJvd3MsIHRhcmdldENvbHVtbj1Ab3B0aW9ucy5zb3J0QnkpLT4gc3dpdGNoXG5cdHdoZW4gdGFyZ2V0Q29sdW1uIGlzICcrJyB0aGVuIHJvd3Ncblx0d2hlbiB0YXJnZXRDb2x1bW4gaXMgJy0nIHRoZW4gcm93cz8uc2xpY2UoKS5yZXZlcnNlKClcblx0d2hlbiBAb3B0aW9ucy5jb2x1bW5zW3RhcmdldENvbHVtbl1cblx0XHRjdXN0b21Tb3J0ID0gQG9wdGlvbnMuY29sdW1uc1t0YXJnZXRDb2x1bW5dLnNvcnRGblxuXHRcdHJhd1ZhbHVlID0gQG9wdGlvbnMuY29sdW1uc1t0YXJnZXRDb2x1bW5dLnJhd1ZhbHVlRm9ybWF0dGVyXG5cdFx0c29ydGVyID0gY3VzdG9tU29ydFxuXHRcdHNvcnRlciB8fD0gKGEsYik9PlxuXHRcdFx0YVZhbHVlID0gaWYgcmF3VmFsdWUgdGhlbiByYXdWYWx1ZShhW3RhcmdldENvbHVtbl0pIGVsc2UgYVt0YXJnZXRDb2x1bW5dXG5cdFx0XHRiVmFsdWUgPSBpZiByYXdWYWx1ZSB0aGVuIHJhd1ZhbHVlKGJbdGFyZ2V0Q29sdW1uXSkgZWxzZSBiW3RhcmdldENvbHVtbl1cblx0XHRcdHN3aXRjaFxuXHRcdFx0XHR3aGVuIGFWYWx1ZSA+IGJWYWx1ZSB0aGVuIEBzb3J0RGlyZWN0aW9uXG5cdFx0XHRcdHdoZW4gYVZhbHVlIDwgYlZhbHVlIHRoZW4gQHNvcnREaXJlY3Rpb24gKiAtMVxuXHRcdFx0XHRlbHNlIDBcblx0XHRcblx0XHRyb3dzLnNsaWNlKCkuc29ydCBzb3J0ZXJcblxuXHRlbHNlIHJvd3Ncblx0XG5cblxuRGF0YVRhYmxlOjpzZXRWaXNpYmxlUGFnZSA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UtLSAjIERlYyBieSAxIGZvciBhcnJheS1pbmRleCBzdHlsZVxuXHRzbGljZSA9XG5cdFx0J3N0YXJ0JzogdGFyZ2V0UGFnZSpAb3B0aW9ucy5wZXJQYWdlXG5cdFx0J2VuZCc6ICh0YXJnZXRQYWdlKkBvcHRpb25zLnBlclBhZ2UpK0BvcHRpb25zLnBlclBhZ2Vcblx0XG5cdHJvd3NUb1JldmVhbCA9IEBhdmFpbGFibGVSb3dzW3NsaWNlLnN0YXJ0IC4uLiBzbGljZS5lbmRdXG5cdHJvd3NUb0hpZGUgPSBAdmlzaWJsZVJvd3Muc2xpY2UoKVxuXG5cdHJvdy52aXNpYmxlID0gZmFsc2UgZm9yIHJvdyBpbiByb3dzVG9IaWRlXG5cdEB2aXNpYmxlUm93cy5sZW5ndGggPSAwXG5cdEB2aXNpYmxlUm93cy5wdXNoLmFwcGx5IEB2aXNpYmxlUm93cywgcm93c1RvUmV2ZWFsXG5cblxuXG5cbkRhdGFUYWJsZTo6c2V0UGFnZUluZGljYXRvciA9ICh0YXJnZXRQYWdlKS0+XG5cdHRhcmdldFBhZ2UgPSAxIGlmIHRhcmdldFBhZ2UgaXMgJy4uLidcblx0dGFyZ2V0UGFnZSA9IGlmIHRhcmdldFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBAb3B0aW9ucy5wYWdlQ291bnRNYXggZWxzZSB0YXJnZXRQYWdlLTEgIyAwLWJhc2VkIGluZGV4IHNvIHdlIHN1YnRyYWN0IDFcblx0cGFnZUl0ZW1zJCA9IEBlbHMucGFnaW5hdGlvbi5maW5kKCcuX3BhZ2luYXRpb25JdGVtJykuc2xpY2UoMSwtMSlcblx0bWF0Y2hlZFBhZ2VFbCQgPSBwYWdlSXRlbXMkLmVxIHRhcmdldFBhZ2Vcblx0XG5cdG1hdGNoZWRQYWdlRWwkLmFkZENsYXNzICdjdXJyZW50J1xuXHRwYWdlSXRlbXMkLm5vdChtYXRjaGVkUGFnZUVsJCkucmVtb3ZlQ2xhc3MgJ2N1cnJlbnQnXHRcblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJEYXRhVGFibGU6OmdlbmVyYXRlSGVhZGluZ0NvbHVtbnMgPSAoKS0+XG5cdEBvcHRpb25zLmNvbHVtbnMgPSBoZWxwZXJzLm5vcm1hbGl6ZUNvbHVtbnMoQG9wdGlvbnMuY29sdW1ucylcblx0QGhhc0JyZWFrZG93bkJhciA9IHRydWUgaWYgY29sdW1uLnR5cGUgaXMgJ2JyZWFrZG93bkJhcicgZm9yIGxhYmVsLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zXG5cblx0T2JqZWN0LmtleXMoQG9wdGlvbnMuY29sdW1ucylcblx0XHQubWFwIChsYWJlbCk9PlxuXHRcdFx0Y29sdW1uID0gQG9wdGlvbnMuY29sdW1uc1tsYWJlbF1cblx0XHRcdEBlbHMuZ2xvYmFsU3R5bGVzWzBdLmlubmVySFRNTCArPSBcInt7I3tjb2x1bW4uc2x1Z319fVxcblwiXG5cblx0XHRcdG1hcmt1cC5oZWFkaW5nQ2VsbCBAbWFya3VwQXJnc1xuXHRcdFx0XHQnc2x1Zyc6IGNvbHVtbi5zbHVnXG5cdFx0XHRcdCdpY29uJzogY29sdW1uLmljb25cblx0XHRcdFx0J2xhYmVsJzogY29sdW1uLmxhYmVsXG5cdFx0XHRcdCdzdHlsZSc6IGhlbHBlcnMuZ2VuSGVhZGVyQ2VsbFN0eWxlKGNvbHVtbilcblx0XHRcdFx0J2V4dHJhQ2xhc3Nlcyc6IGhlbHBlcnMuZ2VuQ2VsbENsYXNzbmFtZShjb2x1bW4pXG5cdFx0LmpvaW4oJycpXG5cblxuXG5cblxuRGF0YVRhYmxlOjp1cGRhdGVDb2x1bW5zID0gKHVwZGF0ZWRDb2x1bW5zKS0+XG5cdHVwZGF0ZWRDb2x1bW5zID0gaGVscGVycy5ub3JtYWxpemVDb2x1bW5zKHVwZGF0ZWRDb2x1bW5zKVxuXHRleHRlbmQuZGVlcChAb3B0aW9ucy5jb2x1bW5zLCB1cGRhdGVkQ29sdW1ucylcblx0QGN1cnJlbnRQYWdlID0gQGN1cnJlbnRQYWdlXG5cblxuXG5cblxuXG5cblxuXG4iLCJEYXRhVGFibGU6OnByb2Nlc3NSb3cgPSAocm93KS0+IGlmIHJvdy5wcm9jZXNzZWQgdGhlbiByb3cgZWxzZVxuXHRAZ2VuZXJhdGVSb3cocm93KVxuXG5cdFNpbXBseUJpbmQoJ3Zpc2libGUnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKHJvdylcblx0XHQudG8gKGlzVmlzaWJsZSwgcHJldlZhbHVlKT0+XG5cdFx0XHRpZiBub3QgaXNWaXNpYmxlIFxuXHRcdFx0XHRyb3cuZWwuZGV0YWNoKClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cm93LmVsLmFwcGVuZFRvIEBlbHMudGFibGVCb2R5XG5cblx0XHRcdFx0aWYgQGhhc0JyZWFrZG93bkJhciBhbmQgbm90IHJvdy51cGRhdGVkQnJlYWtkb3duV2lkdGggYW5kIGlzVmlzaWJsZSBpc250IHByZXZWYWx1ZVxuXHRcdFx0XHRcdHJvdy5icmVha2Rvd25CYXJXaWR0aCA9IGhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXHRcdFx0XHRcblxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWw/Lmxlbmd0aFxuXHRcdFNpbXBseUJpbmQoJ2xhcmdlc3RCcmVha2Rvd25Ub3RhbCcpLm9mKEApXG5cdFx0XHQudG8oJ3VwZGF0ZWRCcmVha2Rvd25XaWR0aCcpLm9mKHJvdylcblx0XHRcdFx0LnRyYW5zZm9ybSAoKS0+IGlmIHJvdy52aXNpYmxlIHRoZW4gdHJ1ZSBlbHNlIGZhbHNlXG5cdFx0XHQuYW5kLnRvKCdicmVha2Rvd25CYXJXaWR0aCcpLm9mKHJvdylcblx0XHRcdFx0LnRyYW5zZm9ybSAoKT0+IGhlbHBlcnMuZ2V0QnJlYWtkb3duQmFyV2lkdGgocm93LCBAbGFyZ2VzdEJyZWFrZG93blRvdGFsKVxuXG5cdFx0XHRcdC5jaGFpblRvKCd3aWR0aCcpLm9mKHJvdy5icmVha2Rvd25CYXJFbFswXS5zdHlsZSlcblx0XHRcdFx0XHQudHJhbnNmb3JtICh3aWR0aCktPiB3aWR0aCsnJSdcblxuXHRcdFx0XHQuYW5kLnRvICgpPT5cblx0XHRcdFx0XHRmb3IgZHJpbGxkb3duRWwsaW5kZXggaW4gcm93LmRyaWxsZG93bkVsc1xuXHRcdFx0XHRcdFx0d2lkdGggPSBoZWxwZXJzLmdldEJyZWFrZG93bkJhcldpZHRoKHJvdy5kcmlsbGRvd25baW5kZXhdLCByb3cuZHJpbGxkb3duLmxhcmdlc3RCcmVha2Rvd25Ub3RhbClcblx0XHRcdFx0XHRcdCQoZHJpbGxkb3duRWwpLmNoaWxkcmVuKCcuaXNfYnJlYWtkb3duX2JhcicpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVswXT8uc3R5bGUud2lkdGggPSB3aWR0aCsnJSdcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0LmNvbmRpdGlvbiAoKS0+IHJvdy5kcmlsbGRvd25cblx0XHRcdFx0XHRcblx0XHRcdC5jb25kaXRpb25BbGwgKCktPiByb3cudmlzaWJsZVxuXG5cdHJvdy5wcm9jZXNzZWQgPSB0cnVlXG5cdHJldHVybiByb3dcblxuXG5cblxuXG5EYXRhVGFibGU6OnVucHJvY2Vzc1JvdyA9IChyb3cpLT4gaWYgcm93LnByb2Nlc3NlZFxuXHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3csIHRydWUpXG5cdFxuXHRpZiBAaGFzQnJlYWtkb3duQmFyIGFuZCByb3cuYnJlYWtkb3duQmFyRWxbMF1cblx0XHRTaW1wbHlCaW5kLnVuQmluZEFsbChyb3cuYnJlYWtkb3duQmFyRWxbMF0uc3R5bGUpXG5cblx0cm93LmVsLnJlbW92ZSgpXG5cdGRlbGV0ZSByb3cuZWxcblx0ZGVsZXRlIHJvdy5kcmlsbGRvd25FbHNcblx0ZGVsZXRlIHJvdy52aXNpYmxlXG5cdGRlbGV0ZSByb3cuYnJlYWtkb3duQmFyRWxcblx0ZGVsZXRlIHJvdy5wcm9jZXNzZWRcblxuXG5cbkRhdGFUYWJsZTo6cmVSZW5kZXJSb3cgPSAocm93KS0+XG5cdEBnZW5lcmF0ZVJvdyhyb3cpXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlUm93ID0gKHJvdyktPlxuXHRwcmV2Um93RWwgPSByb3cuZWxcblx0bmV3Um93RWwgPSByb3cuZWwgPSAkKEBnZW5lcmF0ZVJvd01hcmt1cChyb3cpKS5kYXRhKCdyb3cnLCByb3cpXG5cdHByZXZSb3dFbC5yZXBsYWNlV2l0aChuZXdSb3dFbCkgaWYgcHJldlJvd0VsXG5cdFxuXHRyb3cuZXhwYW5kQnV0dG9uID0gcm93LmVsLmNoaWxkcmVuKCkuZmlyc3QoKSBpZiByb3cuZHJpbGxkb3duXG5cdHJvdy5kcmlsbGRvd25FbHMgPSByb3cuZWwuY2hpbGRyZW4oJy5fdGFibGVSb3dEcmlsbGRvd24nKS5jaGlsZHJlbigpIGlmIHJvdy5kcmlsbGRvd25cblx0cm93LmJyZWFrZG93bkJhckVsID0gcm93LmVsLmNoaWxkcmVuKCcuaXNCcmVha2Rvd25CYXInKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkgaWYgQGhhc0JyZWFrZG93bkJhclxuXHRyb3cudmlzaWJsZSA9IGZhbHNlIHVubGVzcyBwcmV2Um93RWxcblx0XG5cdGlmIHJvdy5kcmlsbGRvd25cblx0XHRpZiBAaGFzQnJlYWtkb3duQmFyXG5cdFx0XHRyb3cuZHJpbGxkb3duLmxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IE1hdGgubWF4IHJvdy5kcmlsbGRvd24ubWFwKChzdWJSb3cpLT4gc3ViUm93LmJyZWFrZG93bkJhclRvdGFsKS4uLlxuXG5cdFx0U2ltcGx5QmluZCgnZHJpbGxkb3duT3BlbicpLm9mKHJvdylcblx0XHRcdC50bygnY2xhc3NOYW1lLmRyaWxsZG93blN0YXRlJykub2Yocm93LmVsKVxuXHRcdFx0XHQudHJhbnNmb3JtIChkcmlsbGRvd25PcGVuKS0+IGlmIGRyaWxsZG93bk9wZW4gdGhlbiAnaGFzRHJpbGxkb3duIGRyaWxsZG93bklzT3BlbicgZWxzZSAnaGFzRHJpbGxkb3duJ1xuXG5cdFx0U2ltcGx5QmluZCgndmlzaWJsZScpLm9mKHJvdylcblx0XHRcdC5vbmNlLnRvICgpLT5cblx0XHRcdFx0U2ltcGx5QmluZCAoKS0+XG5cdFx0XHRcdFx0aWYgbm90IHJvdy5kcmlsbGRvd25PcGVuIHRoZW4gc2V0VGltZW91dCAoKS0+XG5cdFx0XHRcdFx0XHRyb3dIZWlnaHQgPSByb3cuZWwuaGVpZ2h0KClcblx0XHRcdFx0XHRcdGJ1dHRvbkhlaWdodCA9IHJvdy5leHBhbmRCdXR0b24uaGVpZ2h0KClcblx0XHRcdFx0XHRcdHJvdy5leHBhbmRCdXR0b25bMF0uc3R5bGUudG9wID0gXCIje3Jvd0hlaWdodC8yIC0gYnV0dG9uSGVpZ2h0LzJ9cHhcIlxuXG5cdFx0XHRcdC51cGRhdGVPbignZXZlbnQ6cmVzaXplJywgdGhyb3R0bGU6MzAwKS5vZih3aW5kb3cpXG5cdFx0XHQuY29uZGl0aW9uICh2aXNpYmxlKS0+IHZpc2libGVcblxuXHRyZXR1cm4gcm93XG5cblxuXG5cblxuRGF0YVRhYmxlOjpnZW5lcmF0ZVJvd01hcmt1cCA9IChyb3csIHBhcmVudFJvdyktPlxuXHRpc1N1YiA9ICEhcGFyZW50Um93XG5cdFxuXHRtYXJrdXAucm93IEBtYXJrdXBBcmdzXG5cdFx0J3Jvd0lEJzogaWYgaXNTdWIgdGhlbiBwYXJlbnRSb3dbQG9wdGlvbnMudW5pcXVlSURdIGVsc2Ugcm93W0BvcHRpb25zLnVuaXF1ZUlEXVxuXHRcdCdkcmlsbGRvd24nOiBpZiBpc1N1YiB0aGVuICcnIGVsc2UgaWYgcm93LmRyaWxsZG93biB0aGVuIGRvICgpPT5cblx0XHRcdGRyaWxsZG93bk1hcmt1cHMgPSAnJ1xuXHRcdFx0ZHJpbGxkb3duTWFya3VwcyArPSBAZ2VuZXJhdGVSb3dNYXJrdXAoZHJpbGxkb3duUm93LCByb3cpIGZvciBkcmlsbGRvd25Sb3cgaW4gcm93LmRyaWxsZG93blxuXHRcdFx0cmV0dXJuIGRyaWxsZG93bk1hcmt1cHNcblx0XHRcblx0XHQnY2VsbHMnOiBkbyAoKT0+XG5cdFx0XHRyb3dDZWxscyA9ICcnXG5cdFx0XHRcblx0XHRcdGZvciBjb2x1bW5OYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zXG5cdFx0XHRcdGNlbGxWYWx1ZSA9IHJvd1tjb2x1bW5OYW1lXVxuXG5cdFx0XHRcdGlmIEBvcHRpb25zLnBlcmNlbnRhZ2VbY29sdW1uTmFtZV1cblx0XHRcdFx0XHRjZWxsVmFsdWUgPSBAY2FsY1BlcmNlbnRhZ2VTdHJpbmcoY2VsbFZhbHVlLCBjb2x1bW5OYW1lLCByb3cpXG5cblxuXHRcdFx0XHRyb3dDZWxscyArPSBtYXJrdXAucm93Q2VsbCBAbWFya3VwQXJnc1xuXHRcdFx0XHRcdCdsYWJlbCc6IGlmIHR5cGVvZiBjZWxsVmFsdWUgaXMgJ3N0cmluZycgdGhlbiBjZWxsVmFsdWUgZWxzZSAnJ1xuXHRcdFx0XHRcdCdjb2x1bW4nOiBjb2x1bW5OYW1lXG5cdFx0XHRcdFx0J3NsdWcnOiBjb2x1bW4uc2x1Z1xuXHRcdFx0XHRcdCdleHRyYUNsYXNzZXMnOiBoZWxwZXJzLmdlbkNlbGxDbGFzc25hbWUoY29sdW1uKVxuXHRcdFx0XHRcdCdzdHlsZSc6IGhlbHBlcnMuZ2VuQ2VsbFN0eWxlKGNvbHVtbilcblx0XHRcdFx0XHQndmFsdWUnOiBkbyAoKT0+IHN3aXRjaFxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnZmllbGRzJyBcdFx0dGhlbiBAZ2VuZXJhdGVJbmxpbmVGaWVsZHMoY2VsbFZhbHVlLCByb3csIGNvbHVtbilcblx0XHRcdFx0XHRcdHdoZW4gY29sdW1uLnR5cGUgaXMgJ2lwRGV0YWlscycgXHR0aGVuIEBnZW5lcmF0ZUlwRGV0YWlscyhjZWxsVmFsdWUsIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnYnJlYWtkb3duQmFyJyBcdHRoZW4gQGdlbmVyYXRlQnJlYWtkb3duQmFyKGNlbGxWYWx1ZSwgcm93LCBjb2x1bW4pXG5cdFx0XHRcdFx0XHR3aGVuIGNvbHVtbi50eXBlIGlzICdidXR0b24nIFx0XHR0aGVuIEBnZW5lcmF0ZUJ1dHRvbigoY29sdW1uLmFjdGlvbiBvciBjZWxsVmFsdWUpLCAoY29sdW1uLmJ1dHRvbkljb24gb3IgY29sdW1uLmljb24pKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4udHlwZSBpcyAnYWN0aW9ucycgXHRcdHRoZW4gQGdlbmVyYXRlQWN0aW9ucyhjb2x1bW4sIHJvdywgY29sdW1uKVxuXHRcdFx0XHRcdFx0d2hlbiBjb2x1bW4uaXNMaW5rIFx0XHRcdFx0XHR0aGVuIFwiPGEgaHJlZj0nI3tjZWxsVmFsdWV9JyB0YXJnZXQ9J19ibGFuayc+I3tjZWxsVmFsdWV9PC9hPlwiXG5cdFx0XHRcdFx0XHRlbHNlIChpZiBjb2x1bW4uZm9ybWF0dGVyIHRoZW4gY29sdW1uLmZvcm1hdHRlcihjZWxsVmFsdWUsIHJvdywgY29sdW1uKSBlbHNlIGNlbGxWYWx1ZSlcblx0XHRcdFx0XHRcblx0XHRcdHJldHVybiByb3dDZWxsc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiRGF0YVRhYmxlOjpnZW5lcmF0ZUJyZWFrZG93bkJhciA9IChicmVha2Rvd24sIHJvd09iaiwgY29sdW1uRW50aXR5KS0+XG5cdGJyZWFrZG93bktleXMgPSBAbGVnZW5kIG9yIE9iamVjdC5rZXlzKGJyZWFrZG93bilcblx0cm93T2JqLmJyZWFrZG93bkJhclRvdGFsID0gdG90YWwgPSBAZ2V0QnJlYWtkb3duVG90YWwoYnJlYWtkb3duLCBicmVha2Rvd25LZXlzKVxuXHRcblx0cmV0dXJuICdOL0EnIHVubGVzcyB0b3RhbFxuXHRcblx0bWFya3VwLmJyZWFrZG93bkJhciBAbWFya3VwQXJnc1xuXHRcdCd0b3RhbCc6IHRvdGFsXG5cdFx0J3RvdGFsRm9ybWF0dGVkJzogaWYgY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0IHRoZW4gY29sdW1uRW50aXR5LnZhbHVlRm9ybWF0KHRvdGFsKSBlbHNlIHRvdGFsXG5cdFx0J2JhcnMnOiBkbyAoKS0+XG5cdFx0XHRiYXJzID0gJydcblx0XHRcdGZvciBrZXkgaW4gYnJlYWtkb3duS2V5c1xuXHRcdFx0XHR2YWx1ZSA9IGJyZWFrZG93bltrZXldXG5cdFx0XHRcdGJhcnMgKz0gbWFya3VwLmJsb2NrX3RhYmxlX2JvZHlfcm93X2NlbGxfYnJlYWtkb3duX2Jhci5yZXBsYWNlICd7e3dpZHRofX0nLCAodmFsdWUvdG90YWwpKjEwMFxuXHRcdFx0cmV0dXJuIGJhcnNcblxuXHRcdCdob3ZlckJveCc6IGRvICgpLT5cblx0XHRcdG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9ob3ZlcmJveFxuXHRcdFx0XHQucmVwbGFjZSAne3tyb3dzfX0nLCAoKS0+XG5cdFx0XHRcdFx0cm93cyA9ICcnXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWtkb3duS2V5cy5mb3JFYWNoIChrZXksIGluZGV4KS0+XG5cdFx0XHRcdFx0XHRyb3dzICs9IG1hcmt1cC5ibG9ja190YWJsZV9ib2R5X3Jvd19jZWxsX2JyZWFrZG93bl9ob3ZlcmJveF9yb3dcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7Y29sb3J9fScsIGN1c3RvbUNvbG9ycyhpbmRleClcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7a2V5fX0nLCBrZXlcblx0XHRcdFx0XHRcdFx0LnJlcGxhY2UgJ3t7dmFsdWV9fScsIGlmIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdCB0aGVuIGNvbHVtbkVudGl0eS52YWx1ZUZvcm1hdChicmVha2Rvd25ba2V5XSkgZWxzZSBicmVha2Rvd25ba2V5XVxuXG5cdFx0XHRcdFx0cmV0dXJuIHJvd3NcblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlSW5saW5lRmllbGRzID0gKGRhdGFGaWVsZHMpLT5cblx0bWFya3VwLmZpZWxkcyBAbWFya3VwQXJncyAnZmllbGRzJzogZG8gKCk9PlxuXHRcdHJldHVybiAnJyB1bmxlc3MgdHlwZW9mIGRhdGFGaWVsZHMgaXMgJ29iamVjdCdcblx0XHRcblx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgZGF0YUZpZWxkc1xuXHRcdFx0bWFya3VwLmZpZWxkc0l0ZW0gQG1hcmt1cEFyZ3Mge2xhYmVsLHZhbHVlfVxuXG5cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlQnV0dG9uID0gKGFjdGlvbiwgaWNvbiwgaXNNdWx0aSktPlxuXHRtYXJrdXAuYnV0dG9uKEBtYXJrdXBBcmdzIHthY3Rpb24sIGljb24sIGlzTXVsdGl9KVxuXG5cblxuXG5cbkRhdGFUYWJsZTo6Z2VuZXJhdGVBY3Rpb25zID0gKGNvbHVtbiktPlxuXHRjb2x1bW4uYWN0aW9ucyA/PSAnbXVsdGlBY3Rpb25zJ1xuXHRidXR0b25NYXJrdXAgPSBAZ2VuZXJhdGVCdXR0b24oY29sdW1uLmFjdGlvbnMsIChjb2x1bW4uYnV0dG9uSWNvbiBvciBjb2x1bW4uaWNvbiksIHRydWUpXG5cdGFjdGlvbnNNYXJrdXAgPSBtYXJrdXAuYWN0aW9ucyBAbWFya3VwQXJncyAnYWN0aW9ucyc6IGRvICgpPT5cblx0XHRyZXR1cm4gJycgdW5sZXNzIEBvcHRpb25zLmFjdGlvbnNcblx0XHRcblx0XHRvdXRwdXQgPSBmb3IgYWN0aW9uIGluIEBvcHRpb25zLmFjdGlvbnNcblx0XHRcdG1hcmt1cC5hY3Rpb25zSXRlbShAbWFya3VwQXJncyBhY3Rpb24pXG5cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpXG5cblx0cmV0dXJuIGJ1dHRvbk1hcmt1cCthY3Rpb25zTWFya3VwXG5cblxuXG5cblxuXG5EYXRhVGFibGU6OmdlbmVyYXRlSXBEZXRhaWxzID0gKGlwQWRkcmVzcywgcm93LCBjb2x1bW4pLT5cblx0bWFya3VwLmlwRGV0YWlscyBAbWFya3VwQXJncyB7aXBBZGRyZXNzLCBleHRyYTpjb2x1bW4uZXh0cmFNYXJrdXA/KGlwQWRkcmVzcywgcm93KX0gIyBkYXRhIGF0dHJpYnV0ZVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiRGF0YVRhYmxlOjphdHRhY2hFdmVudHMgPSAoKS0+XG5cdCMgPT09PSBQYWdpbmF0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnBhZ2luYXRpb24ub24gJ2NsaWNrJywgJy5fcGFnaW5hdGlvbkl0ZW0nLCAoZXZlbnQpPT5cblx0XHQkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldClcblx0XHRpc0JhY2sgPSAkdGhpcy5oYXNDbGFzcygnX2JhY2snKVxuXHRcdGlzTmV4dCA9ICR0aGlzLmhhc0NsYXNzKCdfbmV4dCcpXG5cdFx0aXNFeHRyYSA9ICR0aGlzLmhhc0NsYXNzKCdfZXh0cmFJbmRpY2F0b3InKVxuXG5cdFx0aWYgaXNCYWNrXG5cdFx0XHRAY3VycmVudFBhZ2UtLSB1bmxlc3MgQGN1cnJlbnRQYWdlIGlzIDFcblx0XHRcblx0XHRlbHNlIGlmIGlzTmV4dFxuXHRcdFx0QGN1cnJlbnRQYWdlKysgdW5sZXNzIEBjdXJyZW50UGFnZSBpcyBAcGFnZUNvdW50UmVhbFxuXHRcdFxuXHRcdCMgZWxzZSBpZiBub3QgaXNFeHRyYSBhbmQgbm90IGlzV3JhcHBlclxuXHRcdGVsc2UgaWYgbm90IGlzRXh0cmFcblx0XHRcdHBhZ2VOdW1iZXIgPSBwYXJzZUZsb2F0ICR0aGlzLmNoaWxkcmVuKCkuaHRtbCgpXG5cdFx0XHRAY3VycmVudFBhZ2UgPSBwYWdlTnVtYmVyXG5cblxuXG5cblx0IyA9PT09IFNvcnRpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVIZWFkaW5nLm9uICdjbGljaycsICcuX2lzU29ydGFibGUnLCAoZXZlbnQpPT5cblx0XHRAc29ydEJ5ID0gZXZlbnQuY3VycmVudFRhcmdldC5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuXG5cblxuXHQjID09PT0gQWN0aW9uIGJ1dHRvbiBldmVudCBsaXN0ZW5lcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEBlbHMudGFibGVCb2R5Lm9uICdjbGljaycsICcuX2FjdGlvbkJ1dHRvbicsIChldmVudCk9PlxuXHRcdGJ1dHRvbiQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0aWYgYnV0dG9uJC5oYXNDbGFzcygnX2lzTXVsdGknKVxuXHRcdFx0aGVscGVycy50b2dnbGVBY3Rpb25zUG9wdXAgYnV0dG9uJC5uZXh0KCkuY2hpbGRyZW4oKVxuXHRcdFxuXHRcdGVsc2Vcblx0XHRcdGl0ZW1Sb3ckID0gYnV0dG9uJC5jbG9zZXN0KCcuX3RhYmxlUm93Jylcblx0XHRcdGFjdGlvbiA9IGJ1dHRvbiQuZGF0YSgnYWN0aW9uJylcblx0XHRcdGl0ZW1JRCA9IGl0ZW1Sb3ckLmRhdGEoJ3Jvdy1pZCcpXG5cdFx0XHRpdGVtSW5kZXggPSBpdGVtUm93JC5kYXRhKCdpbmRleCcpXG5cdFx0XHRkYXRhSXRlbSA9IGlmIGl0ZW1JRCB0aGVuIEBhbGxSb3dzLmZpbmQgKHJvdyk9PiBoZWxwZXJzLmNvbXBhcmVWYWx1ZXMocm93W0BvcHRpb25zLnVuaXF1ZUlEXSwgaXRlbUlEKVxuXHRcdFx0ZGF0YUl0ZW0gPz0gaXRlbUlEXG5cblx0XHRcdGlmIGJ1dHRvbiQuaGFzQ2xhc3MoJ19zdWJBY3Rpb25CdXR0b24nKVxuXHRcdFx0XHRoZWxwZXJzLnRvZ2dsZUFjdGlvbnNQb3B1cCBidXR0b24kLnBhcmVudCgpXG5cblx0XHRcdEBlbHMudGFibGUudHJpZ2dlciBcImFjdGlvbi4je2FjdGlvbn1cIiwgZGF0YUl0ZW1cblxuXG5cblxuXG5cblx0IyA9PT09IFJvdyBleHBhbnNpb24gbGlzdGVuZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRAZWxzLnRhYmxlQm9keS5vbiAnY2xpY2snLCAnLl9leHBhbmREcmlsbGRvd24nLCAoZXZlbnQpPT5cblx0XHRidXR0b24kID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuXHRcdGl0ZW1Sb3cgPSBidXR0b24kLnBhcmVudCgpLmRhdGEoJ3JvdycpXG5cdFx0XG5cdFx0aXRlbVJvdy5kcmlsbGRvd25PcGVuID0gIWl0ZW1Sb3cuZHJpbGxkb3duT3BlblxuXG5cblxuXG5cblxuXG5cdCMgPT09PSBJUCBEZXRhaWxzIGxpc3RlbmVycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0QGVscy50YWJsZUJvZHkub24gJ21vdXNlb3ZlcicsICcuX2lwRGV0YWlscy10cmlnZ2VyJywgKGV2ZW50KT0+XG5cdFx0dHJpZ2dlciQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG5cdFx0d3JhcHBlciQgPSB0cmlnZ2VyJC5wYXJlbnQoKVxuXHRcdGNvbnRlbnQkID0gdHJpZ2dlciQubmV4dCgpXG5cdFx0Y291bnRyeSQgPSBjb250ZW50JC5uZXh0KClcblx0XHRpcEFkZHJlc3MgPSB3cmFwcGVyJC5kYXRhICdpcCdcblx0XHRpc0xvYWRlZCA9IHRyaWdnZXIkLmhhc0NsYXNzICdfaXNSZWFkeSdcblxuXG5cdFx0dW5sZXNzIGlzTG9hZGVkXHRcdFx0XG5cdFx0XHRAb3B0aW9ucy5pcERhdGFGZXRjaGVyKGlwQWRkcmVzcykudGhlbiAoaXBEZXRhaWxzKT0+XG5cdFx0XHRcdHJldHVybiB1bmxlc3MgaXBEZXRhaWxzXG5cdFx0XHRcdFxuXHRcdFx0XHRvdXRwdXQgPSBmb3IgbGFiZWwsdmFsdWUgb2YgaXBEZXRhaWxzIFxuXHRcdFx0XHRcdG1hcmt1cC5pcERldGFpbHNJdGVtKEBtYXJrdXBBcmdzIHtsYWJlbCx2YWx1ZX0pXG5cblx0XHRcdFx0Y29udGVudCQuaHRtbCBvdXRwdXQuam9pbignJylcblx0XHRcdFx0d3JhcHBlciQuYWRkQ2xhc3MgJ19pc1JlYWR5J1xuXG5cblxuXHRQcm9taXNlLnJlc29sdmUoKVxuXG5cbiIsIkRhdGFUYWJsZTo6YXR0YWNoQmluZGluZ3MgPSAoKS0+XG5cdFNpbXBseUJpbmQuc2V0dGluZ3MudHJhY2tBcnJheUNoaWxkcmVuID0gZmFsc2Vcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU3RhdGVcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ25vUmVzdWx0cycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLm5vUmVzdWx0c01lc3NhZ2UpLnRyYW5zZm9ybSAobm9SZXN1bHRzKT0+IGlmIG5vUmVzdWx0cyBhbmQgbm90IEBzdGF0ZS5sb2FkaW5nIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUubm9SZXN1bHRzJykub2YoQGVscy50YWJsZU91dGVyd3JhcCkudHJhbnNmb3JtIChub1Jlc3VsdHMpPT4gaWYgbm9SZXN1bHRzIGFuZCBub3QgQHN0YXRlLmxvYWRpbmcgdGhlbiAnX25vUmVzdWx0cycgZWxzZSAnJ1xuXHRcblx0U2ltcGx5QmluZCgnbG9hZGluZycpLm9mKEBzdGF0ZSlcblx0XHQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLmxvYWRpbmdNZXNzYWdlKS50cmFuc2Zvcm0gKGxvYWRpbmcpLT4gaWYgbG9hZGluZyB0aGVuICdpc192aXNpYmxlJyBlbHNlICcnXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmxvYWRpbmcnKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGxvYWRpbmcpPT4gaWYgbG9hZGluZyB0aGVuICdfbG9hZGluZycgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGxvYWRpbmcpPT5cblx0XHRcdGlmIGxvYWRpbmdcblx0XHRcdFx0QHN0YXRlLm5vUmVzdWx0cyA9IGZhbHNlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhQHZpc2libGVSb3dzLmxlbmd0aFxuXG5cdFNpbXBseUJpbmQoJ2Vycm9yJykub2YoQHN0YXRlKVxuXHRcdC50bygndGV4dENvbnRlbnQuZXJyb3JNZXNzYWdlJykub2YoQGVscy5lcnJvck1lc3NhZ2UpXG5cdFx0LmFuZC50bygnY2xhc3NOYW1lLmlzVmlzaWJsZScpLm9mKEBlbHMuZXJyb3JNZXNzYWdlKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XHQuYW5kLnRvKCdjbGFzc05hbWUuaGFzRXJyb3InKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKS50cmFuc2Zvcm0gKGhhc0Vycm9yKS0+IGlmIGhhc0Vycm9yIHRoZW4gJ19lcnJvcicgZWxzZSAnJ1xuXHRcdC5hbmQudG8gKGVyciktPiBjb25zb2xlLmVycm9yKGVycikgaWYgZXJyXG5cdFxuXG5cdGlmIEBvcHRpb25zLmhhc01vYmlsZVxuXHRcdEB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0XG5cdFx0U2ltcGx5QmluZCgnZXZlbnQ6cmVzaXplJykub2Yod2luZG93KVxuXHRcdFx0LnRvICgpPT4gQHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdFNpbXBseUJpbmQoJ3dpbmRvd1dpZHRoJykub2YoQClcblx0XHRcdC50bygnY2xhc3NOYW1lLm1vYmlsZVZlcnNpb24nKS5vZihAZWxzLnRhYmxlT3V0ZXJ3cmFwKVxuXHRcdFx0XHQudHJhbnNmb3JtICh3aW5kb3dXaWR0aCk9PiBpZiB3aW5kb3dXaWR0aCA8PSBAb3B0aW9ucy5tb2JpbGVXaWR0aCB0aGVuICdfbW9iaWxlVmVyc2lvbicgZWxzZSAnJ1xuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgQ29sdW1uIHZpc2liaWxpdHlcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGZvciBsLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHRoZW4gZG8gKGNvbHVtbik9PlxuXHRcdFNpbXBseUJpbmQoJ2hpZGRlbicpLm9mKGNvbHVtbilcblx0XHRcdC50byhcImlubmVySFRNTC4je2NvbHVtbi5zbHVnfVwiKS5vZihAZWxzLmdsb2JhbFN0eWxlcylcblx0XHRcdFx0LnRyYW5zZm9ybSAoaXNIaWRkZW4pPT4gaWYgaXNIaWRkZW4gdGhlbiBcIiN7QHRhYmxlSUR9IC5fXyN7Y29sdW1uLnNsdWd9IHtkaXNwbGF5Om5vbmV9XCIgZWxzZSAnJ1xuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFJvd3MgYXJyYXkgcmVuZGVyaW5nL3Byb2Nlc3Npbmdcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFNpbXBseUJpbmQoJ2FycmF5OnZpc2libGVSb3dzJykub2YoQClcblx0XHQudG8gKHJvd3MsIHByZXZSb3dzKT0+XG5cdFx0XHRpZiBwcmV2Um93cz8ubGVuZ3RoXG5cdFx0XHRcdGZvciByb3cgaW4gcHJldlJvd3Ncblx0XHRcdFx0XHRyb3cudmlzaWJsZSA9IGZhbHNlXG5cdFx0XHRcblx0XHRcdHRyeVxuXHRcdFx0XHRmb3Igcm93IGluIHJvd3Ncblx0XHRcdFx0XHRAcHJvY2Vzc1Jvdyhyb3cpXG5cdFx0XHRcdFx0cm93LnZpc2libGUgPSB0cnVlXG5cdFx0XHRjYXRjaCBlcnJcblx0XHRcdFx0QHN0YXRlLmVycm9yID0gZXJyXG5cdFx0XHRcblx0XHRcdEBzdGF0ZS5ub1Jlc3VsdHMgPSAhcm93cy5sZW5ndGhcblx0XHRcblx0XHQuYW5kLnRvIChyb3dzKT0+XG5cdFx0XHRyZXR1cm4gaWYgbm90IEBoYXNCcmVha2Rvd25CYXJcblx0XHRcdGZvciByb3cgaW4gcm93c1xuXHRcdFx0XHRpZiByb3cuYnJlYWtkb3duQmFyVG90YWwgPiBsYXJnZXN0QnJlYWtkb3duVG90YWwgb3Igbm90IGxhcmdlc3RCcmVha2Rvd25Ub3RhbD9cblx0XHRcdFx0XHRsYXJnZXN0QnJlYWtkb3duVG90YWwgPSByb3cuYnJlYWtkb3duQmFyVG90YWxcblxuXHRcdFx0QGxhcmdlc3RCcmVha2Rvd25Ub3RhbCA9IGxhcmdlc3RCcmVha2Rvd25Ub3RhbCBvciAwXG5cblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC5yb3dSYW5nZScpLm9mKEBlbHMucGFnZVN0YXR1cylcblx0XHRcdC50cmFuc2Zvcm0gKHJvd3MpPT4gXCIje0BhdmFpbGFibGVSb3dzLmluZGV4T2Yocm93c1swXSkrMX0tI3tAYXZhaWxhYmxlUm93cy5pbmRleE9mKHJvd3Muc2xpY2UoLTEpWzBdKSsxfVwiXG5cblxuXHRTaW1wbHlCaW5kKCdhcnJheTphbGxSb3dzJykub2YoQCkudG8gKHJvd3MpPT5cblx0XHRAc2VhcmNoQ3JpdGVyaWEgPSAnJ1xuXHRcdEBjdXJyZW50UGFnZSA9IDFcblx0XHRAc3RhdGUubm9SZXN1bHRzID0gIXJvd3MubGVuZ3RoXG5cdFx0aWYgQHNvcnRCeSBpcyBAb3B0aW9ucy5zb3J0Qnlcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXHRcdFx0QHNvcnRCeSA9IEBvcHRpb25zLnNvcnRCeVxuXHRcdGVsc2Vcblx0XHRcdEBzb3J0QnkgPSAnJ1xuXG5cblxuXHRTaW1wbHlCaW5kKCdhdmFpbGFibGVSb3dzJywge3VwZGF0ZU9uQmluZDpmYWxzZSwgdXBkYXRlRXZlbklmU2FtZTp0cnVlfSkub2YoQClcblx0XHQudG8gKHJvd3MpPT4gQGNhbGNQYWdlQ291bnQocm93cylcblx0XHQuYW5kLnRvKCd0ZXh0Q29udGVudC50b3RhbFJvd3MnKS5vZihAZWxzLnBhZ2VTdGF0dXMpLnRyYW5zZm9ybSAocm93cyktPiByb3dzLmxlbmd0aFxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBQYWdpbmF0aW9uXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRTaW1wbHlCaW5kKCdwYWdlQ291bnQnKS5vZihAKVxuXHRcdC50bygnaW5uZXJIVE1MJykub2YoQGVscy5wYWdpbmF0aW9uSXRlbXMpICMgUmVuZGVyIHBhZ2luYXRpb25cblx0XHRcdC50cmFuc2Zvcm0gKGNvdW50KT0+XG5cdFx0XHRcdHBhZ2luYXRpb25JdGVtcyA9ICcnXG5cdFx0XHRcdGZvciB2YWx1ZSBpbiBbMS4uY291bnRdXG5cdFx0XHRcdFx0cGFnaW5hdGlvbkl0ZW1zICs9IG1hcmt1cC5wYWdpbmF0aW9uSXRlbShAbWFya3VwQXJncyB7dmFsdWV9KSB1bmxlc3MgdmFsdWUgaXMgMFxuXG5cdFx0XHRcdHJldHVybiBwYWdpbmF0aW9uSXRlbXNcblxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5pc1Zpc2libGUnKS5vZihAZWxzLnBhZ2luYXRpb24pLnRyYW5zZm9ybSAoY291bnQpLT4gaWYgY291bnQgPiAxIHRoZW4gJ2lzX3Zpc2libGUnIGVsc2UgJydcblx0XG5cblx0U2ltcGx5QmluZCgncGFnZUNvdW50UmVhbCcpLm9mKEApXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVNlbGVjdClcblx0XHRcdC50cmFuc2Zvcm0gKHJlYWxDb3VudCk9PlxuXHRcdFx0XHRpZiByZWFsQ291bnQgPD0gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJydcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG9wdGlvbnMgPSAnPG9wdGlvbj4uLi48L29wdGlvbj4nXG5cdFx0XHRcdFx0b3B0aW9ucyArPSBcIjxvcHRpb24+I3tpbmRleH08L29wdGlvbj5cIiBmb3IgaW5kZXggaW4gWyhAb3B0aW9ucy5wYWdlQ291bnRNYXgrMSkuLnJlYWxDb3VudF1cblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1xuXHRcdFxuXHRcdC5hbmQudG8oJ2NsYXNzTmFtZS5oYXNFeHRyYScpLm9mKEBlbHMucGFnaW5hdGlvbikudHJhbnNmb3JtIChyZWFsQ291bnQpPT4gaWYgcmVhbENvdW50ID4gQG9wdGlvbnMucGFnZUNvdW50TWF4IHRoZW4gJ2hhc19leHRyYScgZWxzZSAnJ1xuXG5cblxuXHQjID09PT0gRXh0cmEgSW5kaWNhdG9yL1BhZ2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScsIHVwZGF0ZU9uQmluZDpmYWxzZSkub2YoQGVscy5wYWdpbmF0aW9uRXh0cmFTZWxlY3QpXG5cdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnBhZ2luYXRpb25FeHRyYVRleHQpXG5cdFx0LmFuZC50bygnY3VycmVudFBhZ2UnKS5vZihAKVxuXG5cblxuXG5cdCMgPT09PSBDdXJyZW50IFBhZ2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFNpbXBseUJpbmQoJ2N1cnJlbnRQYWdlJywgdXBkYXRlRXZlbklmU2FtZTp0cnVlKS5vZihAKVxuXHRcdC50cmFuc2Zvcm1TZWxmIChjdXJyZW50UGFnZSk9PlxuXHRcdFx0Y3VycmVudFBhZ2UgPSBpZiBjdXJyZW50UGFnZSBpcyAnLi4uJyB0aGVuIDEgZWxzZSBwYXJzZUZsb2F0KGN1cnJlbnRQYWdlKVxuXHRcdFx0cmV0dXJuIGlmIGN1cnJlbnRQYWdlID4gQHBhZ2VDb3VudFJlYWwgdGhlbiBAcGFnZUNvdW50UmVhbCBlbHNlIGN1cnJlbnRQYWdlXG5cdFx0XG5cdFx0LnRvKCd2YWx1ZScpLm9mKEBlbHMucGFnaW5hdGlvbkV4dHJhU2VsZWN0KVxuXHRcdFx0LnRyYW5zZm9ybSAoY3VycmVudFBhZ2UpPT4gaWYgY3VycmVudFBhZ2UgPiBAb3B0aW9ucy5wYWdlQ291bnRNYXggdGhlbiBjdXJyZW50UGFnZSBlbHNlICcuLi4nXG5cdFx0XG5cdFx0LmFuZC50byAoY3VycmVudFBhZ2UpPT5cblx0XHRcdEBzZXRWaXNpYmxlUGFnZShjdXJyZW50UGFnZSlcblx0XHRcdEBzZXRQYWdlSW5kaWNhdG9yKGN1cnJlbnRQYWdlKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU2VhcmNoIEZpZWxkXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRcblx0IyA9PT09IFNlYXJjaCBGaWVsZCB2YWx1ZS9tYXJrdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGlmIEBvcHRpb25zLnNlYXJjaC5sZW5ndGhcblx0XHRAc2VhcmNoUGFyYW0gPSBAb3B0aW9ucy5zZWFyY2hbMF1cblxuXHRcdFNpbXBseUJpbmQoJ3NlYXJjaCcpLm9mKEBvcHRpb25zKVxuXHRcdFx0LnRvKCdpbm5lckhUTUwnKS5vZihAZWxzLnNlYXJjaFBhcmFtKVxuXHRcdFx0XHQudHJhbnNmb3JtIChvcHRpb25zKS0+IG9wdGlvbnMubWFwKChvcHRpb24pLT5cIjxvcHRpb24+I3tvcHRpb259PC9vcHRpb24+XCIpLmpvaW4oJycpXG5cblx0XHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoUGFyYW0pXG5cdFx0XHQudG8oJ3NlYXJjaFBhcmFtJykub2YoQClcblx0XHRcdFx0LnBpcGUoJ2F0dHI6cGxhY2Vob2xkZXInKS5vZihAZWxzLnNlYXJjaENyaXRlcmlhKVxuXHRcdFx0XHRcdC50cmFuc2Zvcm0gKG9wdGlvbiktPiBcIkZpbHRlciBieSAje29wdGlvbn1cIlxuXG5cblxuXHQjID09PT0gVGFibGUgcmVzdWx0cyBmaWx0ZXIgJiBhdmFpYWJsZSByb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRTaW1wbHlCaW5kKCd2YWx1ZScpLm9mKEBlbHMuc2VhcmNoQ3JpdGVyaWEpICMgU2VhcmNoL0ZpbHRlclxuXHRcdC50bygnc2VhcmNoQ3JpdGVyaWEnLCB1cGRhdGVFdmVuSWZTYW1lOnRydWUpLm9mKEApLmJvdGhXYXlzKClcblx0XHRcdC5jaGFpblRvIChzZWFyY2hDcml0ZXJpYSk9PlxuXHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gQGFsbFJvd3Ncblx0XHRcdFx0dGFyZ2V0Q29sdW1uID0gQG9wdGlvbnMuY29sdW1uc1tAc2VhcmNoUGFyYW1dXG5cblx0XHRcdFx0aWYgc2VhcmNoQ3JpdGVyaWEgYW5kICh0YXJnZXRDb2x1bW4gb3IgQGFsbFJvd3NbMF0/W0BzZWFyY2hQYXJhbV0/KVxuXHRcdFx0XHRcdHJvd3NUb01ha2VBdmFpbGFibGUgPSByb3dzVG9NYWtlQXZhaWxhYmxlLmZpbHRlciAocm93KT0+XG5cdFx0XHRcdFx0XHRyb3dWYWx1ZSA9IGlmIHRhcmdldENvbHVtbj8ucmF3VmFsdWVGb3JtYXR0ZXIgdGhlbiB0YXJnZXRDb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93W0BzZWFyY2hQYXJhbV0pIGVsc2Ugcm93W0BzZWFyY2hQYXJhbV1cblx0XHRcdFx0XHRcdHJldHVybiByb3dWYWx1ZT8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzIHNlYXJjaENyaXRlcmlhLnRvTG93ZXJDYXNlKClcblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5yb3dGaWx0ZXJcblx0XHRcdFx0XHRyb3dzVG9NYWtlQXZhaWxhYmxlID0gcm93c1RvTWFrZUF2YWlsYWJsZS5maWx0ZXIgKHJvdyk9PlxuXHRcdFx0XHRcdFx0cm93Q2xvbmUgPSBleHRlbmQuY2xvbmUocm93KVxuXHRcdFx0XHRcdFx0cm93Q2xvbmVbbmFtZV0gPSBjb2x1bW4ucmF3VmFsdWVGb3JtYXR0ZXIocm93Q2xvbmVbbmFtZV0pIGZvciBuYW1lLGNvbHVtbiBvZiBAb3B0aW9ucy5jb2x1bW5zIHdoZW4gY29sdW1uLnJhd1ZhbHVlRm9ybWF0dGVyXG5cdFx0XHRcdFx0XHRyZXR1cm4gQG9wdGlvbnMucm93RmlsdGVyKHJvd0Nsb25lKVxuXHRcdFx0XHRcblx0XHRcdFx0QGF2YWlsYWJsZVJvd3MgPSByb3dzVG9NYWtlQXZhaWxhYmxlXG5cdFx0XHRcdEBjdXJyZW50UGFnZSA9IDFcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgU29ydGluZ1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0U2ltcGx5QmluZCgnc29ydEJ5Jywge3VwZGF0ZUV2ZW5JZlNhbWU6dHJ1ZSwgdXBkYXRlT25CaW5kOmZhbHNlfSwgdHJ1ZSkub2YoQClcblx0XHQudG8gKGN1cnJlbnRTb3J0LCBwcmV2U29ydCk9PiBpZiBjdXJyZW50U29ydCBvciBwcmV2U29ydFxuXHRcdFx0aWYgY3VycmVudFNvcnQgaXMgcHJldlNvcnQgYW5kIHByZXZTb3J0XG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uICo9IC0xXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzb3J0RGlyZWN0aW9uID0gLTFcblxuXHRcdFx0dGFyZ2V0Q29sdW1uID0gaWYgY3VycmVudFNvcnQgdGhlbiBjdXJyZW50U29ydCBlbHNlIG51bGxcblx0XHRcdEBhdmFpbGFibGVSb3dzID0gQHNvcnRSb3dzKEBhdmFpbGFibGVSb3dzLCB0YXJnZXRDb2x1bW4pXG5cdFx0XHRAY3VycmVudFBhZ2UgPSAxXG5cblx0XG5cdGlmIEBlbHMudGFibGVIZWFkaW5nLmNoaWxkcmVuKCcuX2lzU29ydGFibGUnKS5sZW5ndGhcblx0XHRTaW1wbHlCaW5kKCdzb3J0QnknLCB1cGRhdGVPbkJpbmQ6dHJ1ZSkub2YoQClcblx0XHRcdC50bygnbXVsdGk6Y2xhc3NOYW1lLmN1cnJlbnRTb3J0Jykub2YoQGVscy50YWJsZUhlYWRpbmcuY2hpbGRyZW4oJy5faXNTb3J0YWJsZScpKVxuXHRcdFx0XHQudHJhbnNmb3JtIChjdXJyZW50LCBwcmV2LCBlbCktPiBpZiBjdXJyZW50IGlzIGVsLmNoaWxkcmVuWzBdLnRleHRDb250ZW50IHRoZW4gJ19jdXJyZW50U29ydCcgZWxzZSAnJ1xuXG5cblxuXG5cdFNpbXBseUJpbmQoJ3NvcnREaXJlY3Rpb24nKS5vZihAKVxuXHRcdC50bygnY2xhc3NOYW1lLnNvcnREaXJlY3Rpb24nKS5vZihAZWxzLnRhYmxlKVxuXHRcdFx0LnRyYW5zZm9ybSAoc29ydERpcmVjdGlvbiktPiBpZiBzb3J0RGlyZWN0aW9uIGlzIC0xIHRoZW4gJ2Rlc2MnIGVsc2UgJ2FzYydcblxuXG5cblxuXG5cdFByb21pc2UucmVzb2x2ZSgpXG5cbiIsIkRhdGFUYWJsZTo6c29ydEJ5ID0gKGNvbHVtbiktPiIsIntcbiAgXCJuYW1lXCI6IFwiQGRhbmllbGthbGVuL2RhdGFfdGFibGVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMi45LjdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRpbnkgbGlicmFyeSBmb3IgZGlzcGxheWluZyBkYXRhYmFzZS1mZXRjaGVkIGRhdGEgaW4gYW4gSFRNTCB0YWJsZSB3aXRoIGZyb250LWVuZCBwYWdpbmF0aW9uXCIsXG4gIFwibWFpblwiOiBcImRpc3QvanMvZGF0YV90YWJsZS5qc1wiLFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3QvanMvZGF0YV90YWJsZS5kZWJ1Zy5qc1wiLFxuICAgIFwiLi9kaXN0L2pzL2RhdGFfdGFibGUuanNcIjogXCJzcmMvY29mZmVlL2luZGV4LmNvZmZlZVwiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwic2ltcGx5aW1wb3J0XCI6IHtcbiAgICBcImZpbmFsVHJhbnNmb3JtXCI6IFtcbiAgICAgIFtcbiAgICAgICAgXCJiYWJlbGlmeVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJwcmVzZXRzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJtb2R1bGVzXCI6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBkYW5pZWxrYWxlbi9zYXNzLWJhc2VcIjogXCJeMS41LjJcIixcbiAgICBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCI6IFwiXjEuMTUuOFwiLFxuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy41LjBcIixcbiAgICBcImVzY2FwZS1odG1sXCI6IFwiXjEuMC4zXCIsXG4gICAgXCJldmVudC1saXRlXCI6IFwiXjAuMS4xXCIsXG4gICAgXCJzbWFydC1leHRlbmRcIjogXCJeMS43LjNcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjIuMFwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1lbnZcIjogXCJeNy4yLjBcIixcbiAgICBcImJhYmVsaWZ5XCI6IFwiXjEwLjAuMFwiLFxuICAgIFwiY2hhbGtcIjogXCJeMi4wLjFcIixcbiAgICBcImNvZmZlZS1zY3JpcHRcIjogXCJeMS4xMi42XCIsXG4gICAgXCJmcy1qZXRwYWNrXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJub2RlLXNhc3NcIjogXCJeNC4xMC4wXCIsXG4gICAgXCJwcm9taXNlLWJyZWFrXCI6IFwiXjAuMS4xXCIsXG4gICAgXCJzYXNzLW1vZHVsZS1pbXBvcnRlclwiOiBcImdpdGh1YjpkYW5pZWxrYWxlbi9zYXNzLW1vZHVsZS1pbXBvcnRlclwiLFxuICAgIFwic2ltcGx5aW1wb3J0XCI6IFwiXjQuMC4xMFwiLFxuICAgIFwic2ltcGx5d2F0Y2hcIjogXCJeMy4wLjAtbDVcIlxuICB9LFxuICBcInNhc3NGbnNcIjogXCJub2RlX21vZHVsZXMvQGRhbmllbGthbGVuL3Nhc3MtYmFzZS9jb21waWxlci1mbnMuanNcIixcbiAgXCJzYXNzSW1wb3J0ZXJcIjogXCJub2RlX21vZHVsZXMvc2Fzcy1tb2R1bGUtaW1wb3J0ZXIvbGliL2luZGV4LmpzXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJwb3N0dmVyc2lvblwiOiBcIm5wbSBydW4gYnVpbGQgJiYgZ2l0IGFkZCAuICYmIGdpdCBjb21taXQgLWEgLW0gJ1tCdWlsZF0nXCIsXG4gICAgXCJwb3N0cHVibGlzaFwiOiBcImdpdCBwdXNoXCIsXG4gICAgXCJidWlsZFwiOiBcImNha2UgaW5zdGFsbDpidWlsZDsgY2FrZSAtZCBidWlsZCAmJiBjYWtlIGJ1aWxkICYmIGNwIC1yIGJ1aWxkLyogZGlzdC9cIixcbiAgICBcImNvbXBpbGVcIjogXCJjYWtlIC1kIGJ1aWxkXCIsXG4gICAgXCJ3YXRjaFwiOiBcImNha2UgaW5zdGFsbDsgY2FrZSAtZCB3YXRjaFwiLFxuICAgIFwid2F0Y2g6anNcIjogXCJzaW1wbHl3YXRjaCAnc3JjL2NvZmZlZS8qLmNvZmZlZScgLWUgJ2NvZmZlZScgLXggJ25wbSBydW4gY29tcGlsZTpqczpkZWJ1ZyAtcydcIixcbiAgICBcIndhdGNoOnNhc3NcIjogXCJmb250c0Rpcj1kaXN0L2ZvbnRzIHNpbXBseXdhdGNoICdzcmMvc2Fzcy8qLnNhc3MnIC1lICdzYXNzJyAteCAnbnBtIHJ1biBjb21waWxlOnNhc3M6ZGVidWcgLXMnXCIsXG4gICAgXCJ0YWthbmFcIjogXCJmb250c0Rpcj1kaXN0L2ZvbnRzIHRha2FuYSAtZiAkKHB3ZCkvJG5wbV9wYWNrYWdlX3Nhc3NGbnMgJChwd2QpL3NyYy9zYXNzXCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vZGF0YV90YWJsZS5naXRcIlxuICB9LFxuICBcImF1dGhvclwiOiBcIkRhbmllbCBLYWxlblwiLFxuICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9kYXRhX3RhYmxlL2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vZGF0YV90YWJsZSNyZWFkbWVcIlxufVxuIiwiY3VycmVudElEID0gMFxuYXJyYXlNdXRhdG9yTWV0aG9kcyA9IFsncHVzaCcsJ3BvcCcsJ3NoaWZ0JywndW5zaGlmdCcsJ3NwbGljZScsJ3JldmVyc2UnLCdzb3J0J11cbmR1bW15UHJvcGVydHlEZXNjcmlwdG9yID0ge31cbmJvdW5kSW5zdGFuY2VzID0ge31cbnBsYWNlaG9sZGVyID0gWyd7eycsICd9fSddXG5zZXR0aW5ncyA9IE9iamVjdC5jcmVhdGVcblx0c2lsZW50Olx0XHRcdFx0XHRmYWxzZVxuLFxuXHRwbGFjZWhvbGRlcjpcblx0XHRnZXQ6ICgpLT4gcGxhY2Vob2xkZXJcblx0XHRzZXQ6IChuZXdQbGFjZWhvbGRlciktPiBpZiBjaGVja0lmLmlzQXJyYXkobmV3UGxhY2Vob2xkZXIpIGFuZCBuZXdQbGFjZWhvbGRlci5sZW5ndGggaXMgMlxuXHRcdFx0cGxhY2Vob2xkZXIgPSBuZXdQbGFjZWhvbGRlclxuXHRcdFx0c2V0UGhvbGRlclJlZ0V4KClcblx0XHRcdHJldHVyblxuXG5cbmRlZmF1bHRPcHRpb25zID0gXG5cdGRlbGF5Olx0XHRcdFx0XHRmYWxzZVxuXHR0aHJvdHRsZTpcdFx0XHRcdGZhbHNlXG5cdHNpbXBsZVNlbGVjdG9yOlx0XHRcdGZhbHNlXG5cdHByb21pc2VUcmFuc2Zvcm1zOlx0XHRmYWxzZVxuXHRkaXNwYXRjaEV2ZW50czpcdFx0XHRmYWxzZVxuXHRzZW5kQXJyYXlDb3BpZXM6XHRcdGZhbHNlXG5cdHVwZGF0ZUV2ZW5JZlNhbWU6XHRcdGZhbHNlXG5cdHVwZGF0ZU9uQmluZDpcdFx0XHR0cnVlXG5cblxuaW1wb3J0ICcuL21pc2MnXG5pbXBvcnQgJy4vU2ltcGx5QmluZCdcbmltcG9ydCAnLi9CaW5kaW5nJ1xuaW1wb3J0ICcuL0JpbmRpbmdJbnRlcmZhY2UnXG5pbXBvcnQgJy4vR3JvdXBCaW5kaW5nJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXBseUJpbmQiLCJpbXBvcnQgJy4vaGVscGVycydcbmltcG9ydCAnLi9lcnJvcnNBbmRXYXJuaW5ncydcbiIsImRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG5nZXREZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvclxuXG5pbXBvcnQgJy4vY2hhbmdlRXZlbnQnXG5pbXBvcnQgJy4vcmVxdWlyZXNEb21EZXNjcmlwdG9yRml4J1xuaW1wb3J0ICcuL3dpbmRvd1Byb3BzVG9JZ25vcmUnXG5cblxuc2V0VmFsdWVOb29wID0gKHYsIHB1Ymxpc2hlciktPiBAdXBkYXRlQWxsU3VicyhwdWJsaXNoZXIgb3IgQClcblxuZ2VuSUQgPSAoKS0+ICcnKygrK2N1cnJlbnRJRClcblxuZ2VuT2JqID0gKCktPiBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmdlblByb3hpZWRJbnRlcmZhY2UgPSAoaXNTdWIsIGNvbXBsZXRlQ2FsbGJhY2spLT4gKHN1YmplY3QsIGN1c3RvbU9wdGlvbnMsIHNhdmVPcHRpb25zKS0+XG5cdFNpbXBseUJpbmQoc3ViamVjdCwgY3VzdG9tT3B0aW9ucywgc2F2ZU9wdGlvbnMsIGlzU3ViLCBjb21wbGV0ZUNhbGxiYWNrKVxuXG5nZW5TZWxmVXBkYXRlciA9IChiaW5kaW5nLCBmZXRjaFZhbHVlKS0+XG5cdGJpbmRpbmcuc2VsZlVwZGF0ZXIgb3Jcblx0YmluZGluZy5zZWxmVXBkYXRlciA9IG5ldyBCaW5kaW5nICgpLT5cblx0XHRpZiBmZXRjaFZhbHVlIHRoZW4gYmluZGluZy5zZXRWYWx1ZShiaW5kaW5nLmZldGNoRGlyZWN0VmFsdWUoKSwgYmluZGluZywgdHJ1ZSkgZWxzZSBiaW5kaW5nLnVwZGF0ZUFsbFN1YnMoYmluZGluZylcblx0LCAnRnVuYycsIHt9XG5cblxuIyA9PT09IENoZWNrcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi9jaGVja3MnXG5cblxuIyA9PT09IERlc2NyaXB0b3IgTW9kaWZpY2F0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2Rlc2NyaXB0b3ItbW9kJ1xuXG5cbiMgPT09PSBPYmplY3QgY2xvbmluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi9jbG9uaW5nJ1xuXG5cbiMgPT09PSBCaW5kaW5nIENhY2hlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0ICcuL2NhY2hlJ1xuXG5cbiMgPT09PSBQbGFjZWhvbGRlcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pbXBvcnQgJy4vcGxhY2Vob2xkZXJzJ1xuXG5cbiMgPT09PSBFcnJvcnMgKyBXYXJuaW5ncyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmltcG9ydCAnLi9lcnJvcnMnXG5cblxuXG5cblxuXG5cbiIsImNhY2hlZEV2ZW50ID0gbnVsbFxuXG5jaGFuZ2VFdmVudCA9ICgpLT5cblx0aWYgbm90IGNhY2hlZEV2ZW50XG5cdFx0ZXZlbnQgPSBjYWNoZWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG5cdFx0ZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCBmYWxzZSlcblx0XHRldmVudC5fc2IgPSB0cnVlXG5cblx0cmV0dXJuIGNhY2hlZEV2ZW50IiwicmVxdWlyZXNEb21EZXNjcmlwdG9yRml4ID0gKCdjbGFzc05hbWUnIG5vdCBvZiBFbGVtZW50OjopIG9yIG5vdCBnZXREZXNjcmlwdG9yKEVsZW1lbnQ6OiwgJ2NsYXNzTmFtZScpLmdldCIsIndpbmRvd1Byb3BzVG9JZ25vcmUgPSBbXG5cdCdpbm5lcldpZHRoJ1xuXHQnaW5uZXJIZWlnaHQnXG5cdCdvdXRlcldpZHRoJ1xuXHQnb3V0ZXJIZWlnaHQnXG5cdCdzY3JvbGxYJ1xuXHQnc2Nyb2xsWSdcblx0J3BhZ2VYT2Zmc2V0J1xuXHQncGFnZVlPZmZzZXQnXG5cdCdzY3JlZW5YJ1xuXHQnc2NyZWVuWSdcblx0J3NjcmVlbkxlZnQnXG5cdCdzY3JlZW5Ub3AnXG5dIiwidGFyZ2V0SW5jbHVkZXMgPSAodGFyZ2V0LCBpdGVtKS0+IHRhcmdldCBhbmQgdGFyZ2V0LmluZGV4T2YoaXRlbSkgaXNudCAtMVxuXG5jaGVja0lmID1cblx0aXNEZWZpbmVkOiAoc3ViamVjdCktPiBzdWJqZWN0IGlzbnQgdW5kZWZpbmVkXG5cdFxuXHRpc0FycmF5OiAoc3ViamVjdCktPiBzdWJqZWN0IGluc3RhbmNlb2YgQXJyYXlcblx0XG5cdGlzT2JqZWN0OiAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnb2JqZWN0JyBhbmQgc3ViamVjdCAjIDJuZCBjaGVjayBpcyB0byB0ZXN0IGFnYWluc3QgJ251bGwnIHZhbHVlc1xuXG5cdGlzU3RyaW5nOiAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnc3RyaW5nJ1xuXHRcblx0aXNOdW1iZXI6IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdudW1iZXInXG5cdFxuXHRpc0Z1bmN0aW9uOiAoc3ViamVjdCktPiB0eXBlb2Ygc3ViamVjdCBpcyAnZnVuY3Rpb24nXG5cblx0aXNCaW5kaW5nSW50ZXJmYWNlOiAoc3ViamVjdCktPiBzdWJqZWN0IGluc3RhbmNlb2YgQmluZGluZ0ludGVyZmFjZVxuXHRcblx0aXNCaW5kaW5nOiAoc3ViamVjdCktPiBzdWJqZWN0IGluc3RhbmNlb2YgQmluZGluZ1xuXG5cdGlzSXRlcmFibGU6IChzdWJqZWN0KS0+IGNoZWNrSWYuaXNPYmplY3Qoc3ViamVjdCkgYW5kIGNoZWNrSWYuaXNOdW1iZXIoc3ViamVjdC5sZW5ndGgpXG5cblx0aXNEb206IChzdWJqZWN0KS0+IHN1YmplY3Qubm9kZU5hbWUgYW5kIHN1YmplY3Qubm9kZVR5cGUgaXMgMVxuXG5cdGlzRG9tSW5wdXQ6IChzdWJqZWN0KS0+XG5cdFx0bm9kZU5hbWUgPSBzdWJqZWN0Lm5vZGVOYW1lXG5cdFx0cmV0dXJuIG5vZGVOYW1lIGlzICdJTlBVVCcgb3Igbm9kZU5hbWUgaXMgJ1RFWFRBUkVBJyBvciBub2RlTmFtZSBpcyAnU0VMRUNUJ1xuXG5cdGlzRG9tUmFkaW86IChzdWJqZWN0KS0+IHN1YmplY3QudHlwZSBpcyAncmFkaW8nXG5cblx0aXNEb21DaGVja2JveDogKHN1YmplY3QpLT4gc3ViamVjdC50eXBlIGlzICdjaGVja2JveCdcblxuXHRpc0VsQ29sbGVjdGlvbjogKHN1YmplY3QpLT4gKHN1YmplY3QgaW5zdGFuY2VvZiBOb2RlTGlzdCkgb3IgKHN1YmplY3QgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgb3IgKHdpbmRvdy5qUXVlcnkgYW5kIHN1YmplY3QgaW5zdGFuY2VvZiBqUXVlcnkpXG5cblx0ZG9tRWxzQXJlU2FtZTogKGl0ZXJhYmxlKS0+XG5cdFx0dHlwZSA9IGl0ZXJhYmxlWzBdLnR5cGVcblx0XHRpdGVtc1dpdGhTYW1lVHlwZSA9IFtdLmZpbHRlci5jYWxsIGl0ZXJhYmxlLCAoaXRlbSktPiBpdGVtLnR5cGUgaXMgdHlwZVxuXG5cdFx0cmV0dXJuIGl0ZW1zV2l0aFNhbWVUeXBlLmxlbmd0aCBpcyBpdGVyYWJsZS5sZW5ndGhcblxuXHRpc0RvbU5vZGU6IChzdWJqZWN0KS0+IGNoZWNrSWYuaXNEb20oc3ViamVjdCkgb3Igc3ViamVjdCBpcyB3aW5kb3cgb3Igc3ViamVjdCBpcyBkb2N1bWVudCIsImZldGNoRGVzY3JpcHRvciA9IChvYmplY3QsIHByb3BlcnR5LCBpc1Byb3RvKS0+XG5cdGRlc2NyaXB0b3IgPSBnZXREZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpXG5cdGlmIGRlc2NyaXB0b3Jcblx0XHRkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWUgaWYgaXNQcm90b1xuXHRcdHJldHVybiBkZXNjcmlwdG9yXG5cdFxuXHRlbHNlIGlmIG9iamVjdFByb3RvPU9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpXG5cdFx0cmV0dXJuIGZldGNoRGVzY3JpcHRvcihvYmplY3RQcm90bywgcHJvcGVydHksIHRydWUpXG5cblxuY29udmVydFRvTGl2ZSA9IChiaW5kaW5nSW5zdGFuY2UsIG9iamVjdCwgb25seUFycmF5TWV0aG9kcyktPlxuXHRfID0gYmluZGluZ0luc3RhbmNlXG5cdF8ub3JpZ0Rlc2NyaXB0b3IgPSBmZXRjaERlc2NyaXB0b3Iob2JqZWN0LCBfLnByb3BlcnR5KSBpZiBub3QgXy5vcmlnRGVzY3JpcHRvclxuXG5cdGlmIG9ubHlBcnJheU1ldGhvZHNcblx0XHRhcnJheU11dGF0b3JNZXRob2RzLmZvckVhY2ggKG1ldGhvZCktPiAjIFVzaW5nIGZvckVhY2ggYmVjYXVzZSB3ZSBuZWVkIGEgY2xvc3VyZSBoZXJlXG5cdFx0XHRkZWZpbmVQcm9wZXJ0eSBvYmplY3QsIG1ldGhvZCwgXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHR2YWx1ZTogKCktPlxuXHRcdFx0XHRcdHJlc3VsdCA9IEFycmF5OjpbbWV0aG9kXS5hcHBseSBvYmplY3QsIGFyZ3VtZW50c1xuXHRcdFx0XHRcdF8udXBkYXRlQWxsU3VicyhfKVxuXHRcdFx0XHRcdHJldHVybiByZXN1bHRcblxuXHRlbHNlXG5cdFx0aWYgXy50eXBlIGlzICdQcm94eSdcblx0XHRcdG9yaWdGbiA9IF8ub3JpZ0ZuID0gXy52YWx1ZVxuXHRcdFx0Y29udGV4dCA9IG9iamVjdFxuXHRcdFx0Xy52YWx1ZSA9IHJlc3VsdDpudWxsLCBhcmdzOm51bGxcblxuXHRcdFx0aWYgY2hlY2tJZi5pc0Z1bmN0aW9uKG9yaWdGbilcblx0XHRcdFx0c2xpY2UgPSBbXS5zbGljZVxuXHRcdFx0XHRnZXR0ZXJWYWx1ZSA9IHByb3h5Rm4gPSAoKS0+IFxuXHRcdFx0XHRcdGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cylcblx0XHRcdFx0XHRfLnZhbHVlLmFyZ3MgPSBhcmdzID0gaWYgXy5zZWxmVHJhbnNmb3JtIHRoZW4gXy5zZWxmVHJhbnNmb3JtKGFyZ3MpIGVsc2UgYXJnc1xuXHRcdFx0XHRcdF8udmFsdWUucmVzdWx0ID0gcmVzdWx0ID0gb3JpZ0ZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG5cdFx0XHRcdFx0Xy51cGRhdGVBbGxTdWJzKF8pXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdFxuXHRcdFx0XHRcblx0XHRcdFx0ZGVmaW5lUHJvcGVydHkgb2JqZWN0LCBfLnByb3BlcnR5LCBcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IF8uaXNMaXZlUHJvcCA9IHRydWVcblx0XHRcdFx0XHRnZXQ6ICgpLT4gZ2V0dGVyVmFsdWVcblx0XHRcdFx0XHRzZXQ6IChuZXdWYWx1ZSktPlxuXHRcdFx0XHRcdFx0aWYgbm90IGNoZWNrSWYuaXNGdW5jdGlvbihuZXdWYWx1ZSlcblx0XHRcdFx0XHRcdFx0Z2V0dGVyVmFsdWUgPSBuZXdWYWx1ZVxuXG5cdFx0XHRcdFx0XHRlbHNlIGlmIG5ld1ZhbHVlIGlzbnQgb3JpZ0ZuXG5cdFx0XHRcdFx0XHRcdG9yaWdGbiA9IF8ub3JpZ0ZuID0gbmV3VmFsdWVcdGlmIG5ld1ZhbHVlIGlzbnQgcHJveHlGblxuXHRcdFx0XHRcdFx0XHRnZXR0ZXJWYWx1ZSA9IHByb3h5Rm5cdFx0XHRpZiBnZXR0ZXJWYWx1ZSBpc250IHByb3h5Rm5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cblx0XHRcdFxuXG5cdFx0ZWxzZSBpZiBub3QgdGFyZ2V0SW5jbHVkZXMoXy50eXBlLCAnRE9NJykgYW5kIG5vdCAoXy5vYmplY3QgaXMgd2luZG93IGFuZCB0YXJnZXRJbmNsdWRlcyh3aW5kb3dQcm9wc1RvSWdub3JlLCBfLnByb3BlcnR5KSlcblx0XHRcblx0XHRcdCMgJ09iamVjdFByb3AnIG9yICdBcnJheScgdHlwZSBiaW5kaW5nc1xuXHRcdFx0cHJvcGVydHlEZXNjcmlwdG9yID0gXy5vcmlnRGVzY3JpcHRvciBvciBkdW1teVByb3BlcnR5RGVzY3JpcHRvclxuXHRcdFx0Xy5vcmlnR2V0dGVyID0gcHJvcGVydHlEZXNjcmlwdG9yLmdldC5iaW5kKG9iamVjdCkgaWYgcHJvcGVydHlEZXNjcmlwdG9yLmdldFxuXHRcdFx0Xy5vcmlnU2V0dGVyID0gcHJvcGVydHlEZXNjcmlwdG9yLnNldC5iaW5kKG9iamVjdCkgaWYgcHJvcGVydHlEZXNjcmlwdG9yLnNldFxuXHRcdFx0c2hvdWxkV3JpdGVMaXZlUHJvcCA9IHByb3BlcnR5RGVzY3JpcHRvci5jb25maWd1cmFibGVcblxuXHRcdFx0c2hvdWxkV3JpdGVMaXZlUHJvcCA9IHNob3VsZFdyaXRlTGl2ZVByb3AgYW5kIG9iamVjdC5jb25zdHJ1Y3RvciBpc250IENTU1N0eWxlRGVjbGFyYXRpb25cblx0XHRcdGltcG9ydCAnLi93ZWJraXREb21EZXNjcmlwdG9yRml4J1xuXHRcdFx0XG5cdFx0XHRpZiBzaG91bGRXcml0ZUxpdmVQcm9wXG5cdFx0XHRcdHR5cGVJc0FycmF5ID0gXy50eXBlIGlzICdBcnJheSdcblx0XHRcdFx0c2hvdWxkSW5kaWNhdGVVcGRhdGVJc0Zyb21TZWxmID0gbm90IF8ub3JpZ1NldHRlciBhbmQgbm90IHR5cGVJc0FycmF5XG5cdFx0XHRcdFxuXHRcdFx0XHRkZWZpbmVQcm9wZXJ0eSBvYmplY3QsIF8ucHJvcGVydHksXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiBfLmlzTGl2ZVByb3AgPSB0cnVlXG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogcHJvcGVydHlEZXNjcmlwdG9yLmVudW1lcmFibGVcblx0XHRcdFx0XHRnZXQ6IF8ub3JpZ0dldHRlciBvciAoKS0+IF8udmFsdWVcblx0XHRcdFx0XHRzZXQ6IChuZXdWYWx1ZSktPiBfLnNldFZhbHVlKG5ld1ZhbHVlLCBfLCBzaG91bGRJbmRpY2F0ZVVwZGF0ZUlzRnJvbVNlbGYpOyByZXR1cm5cblxuXHRcdFx0XG5cdFx0XHRcdGlmIHR5cGVJc0FycmF5XG5cdFx0XHRcdFx0Y29udmVydFRvTGl2ZShfLCBvYmplY3RbXy5wcm9wZXJ0eV0sIHRydWUpXG5cblx0cmV0dXJuXG5cblxuXG5cblxuY29udmVydFRvUmVnID0gKGJpbmRpbmdJbnN0YW5jZSwgb2JqZWN0LCBvbmx5QXJyYXlNZXRob2RzKS0+XG5cdGlmIG9ubHlBcnJheU1ldGhvZHNcblx0XHRkZWxldGUgb2JqZWN0W21ldGhvZF0gZm9yIG1ldGhvZCBpbiBhcnJheU11dGF0b3JNZXRob2RzXG5cdGVsc2Vcblx0XHRfID0gYmluZGluZ0luc3RhbmNlXG5cdFx0bmV3RGVzY3JpcHRvciA9IF8ub3JpZ0Rlc2NyaXB0b3Jcblx0XHRuZXdEZXNjcmlwdG9yLnZhbHVlID0gKF8ub3JpZ0ZuIG9yIF8udmFsdWUpIHVubGVzcyBuZXdEZXNjcmlwdG9yLnNldCBvciBuZXdEZXNjcmlwdG9yLmdldFxuXHRcdGRlZmluZVByb3BlcnR5IG9iamVjdCwgXy5wcm9wZXJ0eSwgbmV3RGVzY3JpcHRvclxuXG5cblxuIiwiIyMjKlxuICogVGhlcmUgaXMgYSBidWcgaW4gd2Via2l0L2JsaW5rIGVuZ2luZXMgaW4gd2hpY2ggbmF0aXZlIGF0dHJpYnV0ZXMvcHJvcGVydGllcyBcbiAqIG9mIERPTSBlbGVtZW50cyBhcmUgbm90IGV4cG9zZWQgb24gdGhlIGVsZW1lbnQncyBwcm90b3R5cGUgYW5kIGluc3RlYWQgaXNcbiAqIGV4cG9zZWQgZGlyZWN0bHkgb24gdGhlIGVsZW1lbnQgaW5zdGFuY2U7IHdoZW4gbG9va2luZyB1cCB0aGUgcHJvcGVydHkgZGVzY3JpcHRvclxuICogb2YgdGhlIGVsZW1lbnQgYSBkYXRhIGRlc2NyaXB0b3IgaXMgcmV0dXJuZWQgaW5zdGVhZCBvZiBhbiBhY2Nlc3NvciBkZXNjcmlwdG9yXG4gKiAoaS5lLiBkZXNjcmlwdG9yIHdpdGggZ2V0dGVyL3NldHRlcikgd2hpY2ggbWVhbnMgd2UgYXJlIG5vdCBhYmxlIHRvIGRlZmluZSBvdXJcbiAqIG93biBwcm94eSBnZXR0ZXIvc2V0dGVycy4gVGhpcyB3YXMgZml4ZWQgb25seSBpbiBBcHJpbCAyMDE1IGluIENocm9tZSB2NDMgYW5kXG4gKiBTYWZhcmkgdjEwLiBBbHRob3VnaCB3ZSB3b24ndCBiZSBhYmxlIHRvIGdldCBub3RpZmllZCB3aGVuIHRoZSBvYmplY3RzIGdldFxuICogdGhlaXIgdmFsdWVzIHNldCwgd2Ugd291bGQgYXQgbGVhc3QgcHJvdmlkZSB3b3JraW5nIGZ1bmN0aW9uYWxpdHkgbGFja2luZyB1cGRhdGVcbiAqIGxpc3RlbmVycy4gU2luY2UgdjEuMTQuMCBIVE1MSW5wdXRFbGVtZW50Ojp2YWx1ZSBiaW5kaW5ncyBpbnZva2UgdGhlIG9yaWdpbmFsXG4gKiBnZXR0ZXIgYW5kIHNldHRlciBtZXRob2RzIGluIEJpbmRpbmc6OnNldFZhbHVlKCksIGFuZCBzaW5jZSB3ZSB3YW50IHRvIGF2b2lkXG4gKiBpbmNyZWFzaW5nIHRoZSBhbW91bnQgb2YgbG9naWMgcHJlc2VudCBpbiBCaW5kaW5nOjpzZXRWYWx1ZSgpIGZvciBwZXJmb3JtYW5jZVxuICogcmVhc29ucywgd2UgcGF0Y2ggdGhvc2Ugc2V0dGVycyBoZXJlLiBXZSBjbG9uZSB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIGNoZWNrIGZvclxuICogdGhlIGV4aXN0ZW5jZSBvZiB0aGUgdGFyZ2V0IHByb3BlcnR5IC0gaWYgaXQgZXhpc3RzIHRoZW4gaXQgaW5kaWNhdGVzIHRoZSB0YXJnZXRcbiAqIHByb3BlcnR5IGlzIGEgbmF0aXZlIHByb3BlcnR5IChzaW5jZSBvbmx5IG5hdGl2ZSBwcm9wZXJ0aWVzIGFyZSBjb3BpZWQgb3ZlciBpblxuICogRWxlbWVudDo6Y2xvbmVOb2RlKS4gVGhpcyBwYXRjaGluZyBpcyBvbmx5IGZvciBuYXRpdmUgcHJvcGVydGllcy5cbiAqXG4gKiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDk3MzlcbiAqIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03NTI5N1xuICogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDMzOTRcbiAqIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQzMTQ5MlxuICogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTMxNzVcbiAqIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTUvMDQvRE9NLWF0dHJpYnV0ZXMtbm93LW9uLXRoZS1wcm90b3R5cGUtY2hhaW5cbiMjI1xuXG5pZiByZXF1aXJlc0RvbURlc2NyaXB0b3JGaXggYW5kIF8uaXNEb20gYW5kIF8ucHJvcGVydHkgb2Ygb2JqZWN0LmNsb25lTm9kZShmYWxzZSlcblx0Xy5vcmlnRGVzY3JpcHRvciA9IHNob3VsZFdyaXRlTGl2ZVByb3AgPSBmYWxzZVxuXHRfLmlzTGl2ZVByb3AgPSB0cnVlXG5cdF8ub3JpZ0dldHRlciA9ICgpLT4gXy5vYmplY3RbXy5wcm9wZXJ0eV1cblx0Xy5vcmlnU2V0dGVyID0gKG5ld1ZhbHVlKS0+IF8ub2JqZWN0W18ucHJvcGVydHldID0gbmV3VmFsdWUiLCJjbG9uZU9iamVjdCA9IChvYmplY3QpLT5cblx0Y2xvbmUgPSBnZW5PYmooKVxuXHRjbG9uZVtrZXldID0gb2JqZWN0W2tleV0gZm9yIGtleSBvZiBvYmplY3Rcblx0cmV0dXJuIGNsb25lXG5cbmV4dGVuZFN0YXRlID0gKGJhc2UsIHN0YXRlVG9Jbmhlcml0KS0+XG5cdHN0YXRlTWFwcGluZyA9IE9iamVjdC5rZXlzKHN0YXRlVG9Jbmhlcml0KVxuXHRiYXNlW2tleV0gPSBzdGF0ZVRvSW5oZXJpdFtrZXldIGZvciBrZXkgaW4gc3RhdGVNYXBwaW5nXG5cdHJldHVyblxuIiwiY2FjaGUgPVx0XG5cdGdldDogKG9iamVjdCwgaXNGdW5jdGlvbiwgc2VsZWN0b3IsIGlzTXVsdGlDaG9pY2UpLT5cblx0XHRpZiBpc0Z1bmN0aW9uXG5cdFx0XHRyZXR1cm4gYm91bmRJbnN0YW5jZXNbb2JqZWN0Ll9zYl9JRF1cblx0XHRlbHNlXG5cdFx0XHRpZiBpc011bHRpQ2hvaWNlIGFuZCBvYmplY3RbMF0uX3NiX21hcFxuXHRcdFx0XHRzYW1wbGVJdGVtID0gYm91bmRJbnN0YW5jZXNbIG9iamVjdFswXS5fc2JfbWFwW3NlbGVjdG9yXSBdXG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gc2FtcGxlSXRlbS5ncm91cEJpbmRpbmcgaWYgc2FtcGxlSXRlbS5ncm91cEJpbmRpbmdcblxuXHRcdFx0aWYgb2JqZWN0Ll9zYl9tYXAgYW5kIG9iamVjdC5fc2JfbWFwW3NlbGVjdG9yXVxuXHRcdFx0XHRyZXR1cm4gYm91bmRJbnN0YW5jZXNbIG9iamVjdC5fc2JfbWFwW3NlbGVjdG9yXSBdXG5cblxuXHRzZXQ6IChCLCBpc0Z1bmN0aW9uKS0+ICMgQiA9PT09IEJpbmRpbmcgT2JqZWN0XG5cdFx0aWYgaXNGdW5jdGlvblxuXHRcdFx0ZGVmaW5lUHJvcGVydHkgQi5vYmplY3QsICdfc2JfSUQnLCB7J2NvbmZpZ3VyYWJsZSc6dHJ1ZSwgJ3ZhbHVlJzpCLklEfVxuXG5cdFx0ZWxzZVxuXHRcdFx0c2VsZWN0b3IgPSBCLnNlbGVjdG9yXG5cblx0XHRcdGlmIEIub2JqZWN0Ll9zYl9tYXBcblx0XHRcdFx0Qi5vYmplY3QuX3NiX21hcFtzZWxlY3Rvcl0gPSBCLklEXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHByb3BzTWFwID0ge31cblx0XHRcdFx0cHJvcHNNYXBbc2VsZWN0b3JdID0gQi5JRFxuXHRcdFx0XHRcblx0XHRcdFx0ZGVmaW5lUHJvcGVydHkgQi5vYmplY3QsICdfc2JfbWFwJywgeydjb25maWd1cmFibGUnOnRydWUsICd2YWx1ZSc6cHJvcHNNYXB9XG5cdFx0cmV0dXJuIiwiZXNjYXBlUmVnRXggPSAvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2dcbnBob2xkZXJSZWdFeCA9IHBob2xkZXJSZWdFeFNwbGl0ID0gbnVsbFxuXG5zZXRQaG9sZGVyUmVnRXggPSAoKS0+XG5cdHN0YXJ0ID0gc2V0dGluZ3MucGxhY2Vob2xkZXJbMF0ucmVwbGFjZShlc2NhcGVSZWdFeCwgJ1xcXFwkJicpXG5cdGVuZCA9IHNldHRpbmdzLnBsYWNlaG9sZGVyWzFdLnJlcGxhY2UoZXNjYXBlUmVnRXgsICdcXFxcJCYnKVxuXHRtaWRkbGUgPSBcIlteI3tlbmR9XStcIlxuXHRwaG9sZGVyUmVnRXggPSBuZXcgUmVnRXhwKFwiI3tzdGFydH0oI3ttaWRkbGV9KSN7ZW5kfVwiLCAnZycpXG5cdHBob2xkZXJSZWdFeFNwbGl0ID0gbmV3IFJlZ0V4cChcIiN7c3RhcnR9I3ttaWRkbGV9I3tlbmR9XCIsICdnJylcblx0cmV0dXJuXG5cbnNldFBob2xkZXJSZWdFeCgpICMgQ3JlYXRlIHRoZSByZWdFeCBvbiBpbml0XG5cblxuXG5hcHBseVBsYWNlaG9sZGVycyA9IChjb250ZXh0cywgdmFsdWVzLCBpbmRleE1hcCktPlxuXHRvdXRwdXQgPSAnJ1xuXHRmb3IgY29udGV4dFBhcnQsaW5kZXggaW4gY29udGV4dHNcblx0XHRvdXRwdXQgKz0gY29udGV4dFBhcnRcblx0XHRvdXRwdXQgKz0gdmFsdWVzW2luZGV4TWFwW2luZGV4XV0gaWYgaW5kZXhNYXBbaW5kZXhdXG5cdFxuXHRyZXR1cm4gb3V0cHV0XG5cblxudGV4dENvbnRlbnQgPSAndGV4dENvbnRlbnQnXG5cbmFkZFRvTm9kZVN0b3JlID0gKG5vZGVTdG9yZSwgbm9kZSwgdGFyZ2V0UGxhY2Vob2xkZXIpLT5cblx0bm9kZVN0b3JlW3RhcmdldFBsYWNlaG9sZGVyXSA/PSBbXVxuXHRub2RlU3RvcmVbdGFyZ2V0UGxhY2Vob2xkZXJdLnB1c2gobm9kZSlcblx0cmV0dXJuXG5cblxuc2NhblRleHROb2Rlc1BsYWNlaG9sZGVycyA9IChlbGVtZW50LCBub2RlU3RvcmUpLT5cblx0Y2hpbGROb2RlcyA9IEFycmF5OjpzbGljZS5jYWxsKGVsZW1lbnQuY2hpbGROb2Rlcylcblx0Zm9yIG5vZGUgaW4gY2hpbGROb2Rlc1xuXHRcdGlmIG5vZGUubm9kZVR5cGUgaXNudCAzIFxuXHRcdFx0c2NhblRleHROb2Rlc1BsYWNlaG9sZGVycyhub2RlLCBub2RlU3RvcmUpXG5cdFx0XG5cdFx0ZWxzZSBpZiBub2RlW3RleHRDb250ZW50XS5tYXRjaChwaG9sZGVyUmVnRXhTcGxpdClcblx0XHRcdHRleHRQaWVjZXMgPSBub2RlW3RleHRDb250ZW50XS5zcGxpdChwaG9sZGVyUmVnRXgpXG5cblx0XHRcdGlmIHRleHRQaWVjZXMubGVuZ3RoIGlzIDMgYW5kIHRleHRQaWVjZXNbMF0rdGV4dFBpZWNlc1syXSBpcyAnJyAjIFRoZSBlbnRpcmUgdGV4dE5vZGUgaXMganVzdCB0aGUgcGxhY2Vob2xkZXJcblx0XHRcdFx0YWRkVG9Ob2RlU3RvcmUobm9kZVN0b3JlLCBub2RlLCB0ZXh0UGllY2VzWzFdKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRuZXdGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXG5cdFx0XHRcdGZvciB0ZXh0UGllY2UsaW5kZXggaW4gdGV4dFBpZWNlc1xuXHRcdFx0XHRcdG5ld05vZGUgPSBuZXdGcmFnbWVudC5hcHBlbmRDaGlsZCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0UGllY2UpXG5cdFx0XHRcdFx0aWYgaW5kZXggJSAyICMgaXMgYW4gb2RkIGluZGV4LCBpbmRpY2F0aW5nIHRoYXQgYmVmb3JlIHRoaXMgdGV4dCBwaWVjZSBzaG91bGQgY29tZSBhIHBsYWNlaG9sZGVyIG5vZGVcblx0XHRcdFx0XHRcdGFkZFRvTm9kZVN0b3JlKG5vZGVTdG9yZSwgbmV3Tm9kZSwgdGV4dFBpZWNlKVxuXG5cdFx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RnJhZ21lbnQsIG5vZGUpXG5cblx0cmV0dXJuXG5cblxuXG4iLCJ0aHJvd0Vycm9yID0gKGVycm9yTmFtZSktPlxuXHR0aHJvdyBuZXcgRXJyb3IgJ1NpbXBseUJpbmQ6ICcrKGVycm9yc1tlcnJvck5hbWVdIG9yIGVycm9yTmFtZSlcblxudGhyb3dXYXJuaW5nID0gKHdhcm5pbmdOYW1lLCBkZXB0aCktPiB1bmxlc3Mgc2V0dGluZ3Muc2lsZW50XG5cdGVyclNvdXJjZSA9IGdldEVyclNvdXJjZShkZXB0aClcblx0d2FybiA9IGVycm9yc1t3YXJuaW5nTmFtZV1cblx0d2FybiArPSBcIlxcblxcblwiK2VyclNvdXJjZVxuXHRjb25zb2xlLndhcm4oJ1NpbXBseUJpbmQ6ICcrd2Fybilcblx0cmV0dXJuXG5cbnRocm93RXJyb3JCYWRBcmcgPSAoYXJnKS0+XG5cdHRocm93RXJyb3IgXCJJbnZhbGlkIGFyZ3VtZW50L3MgKCN7YXJnfSlcIiwgdHJ1ZVxuXHRyZXR1cm5cblxuZ2V0RXJyU291cmNlID0gKGRlcHRoKS0+XG5cdCgobmV3IEVycm9yKS5zdGFjayBvciAnJylcblx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0LnNsaWNlKGRlcHRoKzMpXG5cdFx0LmpvaW4oJ1xcbicpXG5cblxuIiwiZXJyb3JzID0gXG5cdGludmFsaWRQYXJhbU5hbWU6IFwiU2ltcGx5QmluZCgpIGFuZCAudG8oKSBvbmx5IGFjY2VwdCBhIGZ1bmN0aW9uLCBhbiBhcnJheSwgYSBib3VuZCBvYmplY3QsIGEgc3RyaW5nLCBvciBhIG51bWJlci5cIlxuXHRmbk9ubHk6IFwiT25seSBmdW5jdGlvbnMgYXJlIGFsbG93ZWQgZm9yIC50cmFuc2Zvcm0vLmNvbmRpdGlvbi9BbGwoKVwiXG5cdGJhZEV2ZW50QXJnOiBcIkludmFsaWQgYXJndW1lbnQgbnVtYmVyIGluIC5vZkV2ZW50KClcIlxuXHRlbXB0eUxpc3Q6IFwiRW1wdHkgY29sbGVjdGlvbiBwcm92aWRlZFwiXG5cdFxuXHRvbmx5T25lRE9NRWxlbWVudDogXCJZb3UgY2FuIG9ubHkgcGFzcyBhIHNpbmdsZSBET00gZWxlbWVudCB0byBhIGJpbmRpbmdcIlxuXHRtaXhlZEVsTGlzdDogXCInY2hlY2tlZCcgb2YgTWl4ZWQgbGlzdCBvZiBlbGVtZW50IGNhbm5vdCBiZSBib3VuZFwiXG4iLCJTaW1wbHlCaW5kID0gKHN1YmplY3QsIG9wdGlvbnMsIHNhdmVPcHRpb25zLCBpc1N1YiwgY29tcGxldGVDYWxsYmFjayktPlxuXHRpZiAoIXN1YmplY3QgYW5kIHN1YmplY3QgaXNudCAwKSBvciAoIWNoZWNrSWYuaXNTdHJpbmcoc3ViamVjdCkgYW5kICFjaGVja0lmLmlzTnVtYmVyKHN1YmplY3QpIGFuZCAhY2hlY2tJZi5pc0Z1bmN0aW9uKHN1YmplY3QpIGFuZCBzdWJqZWN0IG5vdCBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdHRocm93RXJyb3IoJ2ludmFsaWRQYXJhbU5hbWUnKSB1bmxlc3MgY2hlY2tJZi5pc0JpbmRpbmdJbnRlcmZhY2Uoc3ViamVjdClcblxuXHRpZiBjaGVja0lmLmlzT2JqZWN0KHN1YmplY3QpIGFuZCBzdWJqZWN0IG5vdCBpbnN0YW5jZW9mIEFycmF5ICMgSW5kaWNhdGVzIGl0J3MgYSBCaW5kaW5nIGluc3RhbmNlIG9iamVjdCBkdWUgdG8gdGhlIGFib3ZlIGNoZWNrXG5cdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBpZiBjb21wbGV0ZUNhbGxiYWNrIHRoZW4gY29tcGxldGVDYWxsYmFjayhzdWJqZWN0KSBlbHNlIHN1YmplY3Quc2VsZkNsb25lKClcblx0XG5cdGVsc2Vcblx0XHRuZXdJbnRlcmZhY2UgPSBuZXcgQmluZGluZ0ludGVyZmFjZShvcHRpb25zKVxuXHRcdG5ld0ludGVyZmFjZS5zYXZlT3B0aW9ucyA9IHNhdmVPcHRpb25zXG5cdFx0bmV3SW50ZXJmYWNlLmlzU3ViID0gaXNTdWJcblx0XHRuZXdJbnRlcmZhY2UuY29tcGxldGVDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2tcblxuXHRcdGlmIGNoZWNrSWYuaXNGdW5jdGlvbihzdWJqZWN0KVxuXHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBuZXdJbnRlcmZhY2Uuc2V0T2JqZWN0KHN1YmplY3QsIHRydWUpXG5cdFx0ZWxzZVxuXHRcdFx0aW50ZXJmYWNlVG9SZXR1cm4gPSBuZXdJbnRlcmZhY2Uuc2V0UHJvcGVydHkoc3ViamVjdClcblxuXHRyZXR1cm4gaW50ZXJmYWNlVG9SZXR1cm5cblxuXG5cblxuaW1wb3J0ICcuL21ldGhvZHMnIiwiU2ltcGx5QmluZC52ZXJzaW9uID0gaW1wb3J0ICcuLi8uLi9wYWNrYWdlLmpzb24gJCB2ZXJzaW9uJ1xuU2ltcGx5QmluZC5zZXR0aW5ncyA9IHNldHRpbmdzXG5TaW1wbHlCaW5kLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnNcblxuXG5cblNpbXBseUJpbmQudW5CaW5kQWxsID0gKG9iamVjdCwgYm90aFdheXMpLT5cblx0aWYgb2JqZWN0IGFuZCAoY2hlY2tJZi5pc09iamVjdChvYmplY3QpIG9yIGNoZWNrSWYuaXNGdW5jdGlvbihvYmplY3QpKVxuXHRcdGltcG9ydCAnLi9tZXRob2RzLnVuQmluZEFsbC1wYXJzZURPTU9iamVjdC5jb2ZmZWUnXG5cdFx0cHJvcE1hcCA9IG9iamVjdC5fc2JfbWFwXHRcdFxuXG5cdFx0aWYgb2JqZWN0Ll9zYl9JRFxuXHRcdFx0Ym91bmRJbnN0YW5jZXNbb2JqZWN0Ll9zYl9JRF0ucmVtb3ZlQWxsU3Vicyhib3RoV2F5cylcblx0XHRcblx0XHRpZiBwcm9wTWFwXG5cdFx0XHRib3VuZEluc3RhbmNlc1tib3VuZElEXS5yZW1vdmVBbGxTdWJzKGJvdGhXYXlzKSBmb3IgcHJvcCwgYm91bmRJRCBvZiBwcm9wTWFwXG5cblx0cmV0dXJuXG5cbiIsIntcbiAgXCJfYXJnc1wiOiBbXG4gICAgW1xuICAgICAgXCJAZGFuaWVsa2FsZW4vc2ltcGx5YmluZEAxLjE1LjhcIixcbiAgICAgIFwiL1VzZXJzL2RhbmllbGthbGVuL3NhbmRib3gvZGF0YV90YWJsZVwiXG4gICAgXVxuICBdLFxuICBcIl9mcm9tXCI6IFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRAMS4xNS44XCIsXG4gIFwiX2lkXCI6IFwiQGRhbmllbGthbGVuL3NpbXBseWJpbmRAMS4xNS44XCIsXG4gIFwiX2luQnVuZGxlXCI6IGZhbHNlLFxuICBcIl9pbnRlZ3JpdHlcIjogXCJzaGE1MTItcmtsK3dIYmJDb1BvMkEzVk5EQXQ1dXlWWCtsQkhvZU5aZkRBb0lWTnNsUkVVQUY5WktrUDZzWXA5eXFGTE5ZM2ptcjhsK3l5TXFNR3N4cUJaR3o1OHc9PVwiLFxuICBcIl9sb2NhdGlvblwiOiBcIi9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZFwiLFxuICBcIl9waGFudG9tQ2hpbGRyZW5cIjoge30sXG4gIFwiX3JlcXVlc3RlZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwidmVyc2lvblwiLFxuICAgIFwicmVnaXN0cnlcIjogdHJ1ZSxcbiAgICBcInJhd1wiOiBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kQDEuMTUuOFwiLFxuICAgIFwibmFtZVwiOiBcIkBkYW5pZWxrYWxlbi9zaW1wbHliaW5kXCIsXG4gICAgXCJlc2NhcGVkTmFtZVwiOiBcIkBkYW5pZWxrYWxlbiUyZnNpbXBseWJpbmRcIixcbiAgICBcInNjb3BlXCI6IFwiQGRhbmllbGthbGVuXCIsXG4gICAgXCJyYXdTcGVjXCI6IFwiMS4xNS44XCIsXG4gICAgXCJzYXZlU3BlY1wiOiBudWxsLFxuICAgIFwiZmV0Y2hTcGVjXCI6IFwiMS4xNS44XCJcbiAgfSxcbiAgXCJfcmVxdWlyZWRCeVwiOiBbXG4gICAgXCIvXCJcbiAgXSxcbiAgXCJfcmVzb2x2ZWRcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9AZGFuaWVsa2FsZW4vc2ltcGx5YmluZC8tL3NpbXBseWJpbmQtMS4xNS44LnRnelwiLFxuICBcIl9zcGVjXCI6IFwiMS4xNS44XCIsXG4gIFwiX3doZXJlXCI6IFwiL1VzZXJzL2RhbmllbGthbGVuL3NhbmRib3gvZGF0YV90YWJsZVwiLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiZGFuaWVsa2FsZW5cIlxuICB9LFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kaXN0L3NpbXBseWJpbmQubm9kZS5kZWJ1Zy5qc1wiOiBcInNyYy9pbmRleC5jb2ZmZWVcIixcbiAgICBcIi4vZGVidWdcIjogXCJkaXN0L3NpbXBseWJpbmQuZGVidWcuanNcIlxuICB9LFxuICBcImJyb3dzZXJpZnlcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFtcbiAgICAgIFwic2ltcGx5aW1wb3J0L2NvbXBhdFwiXG4gICAgXVxuICB9LFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbGthbGVuL3NpbXBseWJpbmQvaXNzdWVzXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge30sXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWdpY2FsbHkgc2ltcGxlLCBmcmFtZXdvcmstbGVzcyBvbmUtd2F5L3R3by13YXkgZGF0YSBiaW5kaW5nIGZvciBmcm9udGVuZC9iYWNrZW5kIGluIH41a2IuXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJsdWViaXJkXCI6IFwiXjMuNS4wXCIsXG4gICAgXCJjb2ZmZWUtc2NyaXB0XCI6IFwiXjEuMTIuNlwiLFxuICAgIFwiZnMtamV0cGFja1wiOiBcIl4wLjEzLjFcIixcbiAgICBcInByb21pc2UtYnJlYWtcIjogXCJeMC4xLjFcIixcbiAgICBcInNlbXZlclwiOiBcIl41LjMuMFwiLFxuICAgIFwic2ltcGx5aW1wb3J0XCI6IFwiXjQuMC4wLXM0XCIsXG4gICAgXCJzaW1wbHl3YXRjaFwiOiBcIl4zLjAuMC1sMlwiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc2ltcGx5YmluZCNyZWFkbWVcIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJiaW5kXCIsXG4gICAgXCJiaW5kaW5nXCIsXG4gICAgXCJkb20tYmluZGluZ1wiLFxuICAgIFwib25lLXdheVwiLFxuICAgIFwidHdvLXdheVwiXG4gIF0sXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcIm1haW5cIjogXCJkaXN0L3NpbXBseWJpbmQubm9kZS5kZWJ1Zy5qc1wiLFxuICBcIm5hbWVcIjogXCJAZGFuaWVsa2FsZW4vc2ltcGx5YmluZFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zaW1wbHliaW5kLmdpdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJiZW5jaG1hcmtzXCI6IFwiY2FrZSBpbnN0YWxsOmJlbmNoOyBucG0gcnVuIGJlbmNobWFya3M6YnVpbGQgJiYgbnBtIHJ1biBiZW5jaG1hcmtzOnNlcnZlXCIsXG4gICAgXCJiZW5jaG1hcmtzOmJ1aWxkXCI6IFwiYmVuY2htYXJrcyBidWlsZCAtcyBiZW5jaG1hcmtzL3NyYyAtZCBiZW5jaG1hcmtzL2Rlc3RcIixcbiAgICBcImJlbmNobWFya3M6cnVuXCI6IFwiYmVuY2htYXJrcyBydW4gLWQgYmVuY2htYXJrcy9kZXN0XCIsXG4gICAgXCJiZW5jaG1hcmtzOnNlcnZlXCI6IFwiYmVuY2htYXJrcyBzZXJ2ZSAtZCBiZW5jaG1hcmtzL2Rlc3RcIixcbiAgICBcImJlbmNobWFya3M6dXBkYXRlXCI6IFwiY2FrZSBpbnN0YWxsOmJlbmNoOyBjYWtlIHVwZGF0ZVNCQmVuY2g7IG5wbSBydW4gYmVuY2htYXJrczpidWlsZFwiLFxuICAgIFwiYnVpbGRcIjogXCJjYWtlIC1kIGJ1aWxkICYmIGNha2UgYnVpbGQgJiYgY2FrZSBtZWFzdXJlICYmIGNwIC1yIGJ1aWxkLyogZGlzdC9cIixcbiAgICBcImNvdmVyYWdlXCI6IFwiY2FrZSBpbnN0YWxsOmNvdmVyYWdlOyBucG0gcnVuIGNvdmVyYWdlOnJ1biAmJiBucG0gcnVuIGNvdmVyYWdlOmJhZGdlXCIsXG4gICAgXCJjb3ZlcmFnZTpiYWRnZVwiOiBcImJhZGdlLWdlbiAtZCAuLy5jb25maWcvYmFkZ2VzL2NvdmVyYWdlXCIsXG4gICAgXCJjb3ZlcmFnZTpydW5cIjogXCJpc3RhbmJ1bCBjb3ZlciAtLWRpciBjb3ZlcmFnZS9ub2RlIG5vZGVfbW9kdWxlcy9tb2NoYS9iaW4vX21vY2hhIC0tIC11IHRkZCAtYiB0ZXN0L3Rlc3RIZWxwZXJzLmpzIHRlc3QvdGVzdC5qc1wiLFxuICAgIFwicG9zdHB1Ymxpc2hcIjogXCJnaXQgcHVzaFwiLFxuICAgIFwicG9zdHZlcnNpb25cIjogXCJucG0gcnVuIGJ1aWxkICYmIG5wbSBydW4gYmVuY2htYXJrczp1cGRhdGUgJiYgZ2l0IGFkZCAuICYmIGdpdCBjb21taXQgLWEgLW0gJ1tCdWlsZF0nXCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcIm5wbSBydW4gdGVzdFwiLFxuICAgIFwidGVzdFwiOiBcIm5wbSBydW4gdGVzdDpub2RlIC1zICYmIG5wbSBydW4gdGVzdDpicm93c2VyIC1zICYmIG5wbSBydW4gdGVzdDptaW5pZmllZCAtc1wiLFxuICAgIFwidGVzdDpicm93c2VyXCI6IFwiY2FrZSBpbnN0YWxsOmthcm1hOyBrYXJtYSBzdGFydCAtLXNpbmdsZS1ydW4gLS1icm93c2VycyBFbGVjdHJvbiAuY29uZmlnL2thcm1hLmNvbmYuY29mZmVlXCIsXG4gICAgXCJ0ZXN0OmJyb3dzZXI6bG9jYWxcIjogXCJjYWtlIGluc3RhbGw6dGVzdDsgb3BlbiB0ZXN0L3Rlc3RydW5uZXIuaHRtbFwiLFxuICAgIFwidGVzdDprYXJtYVwiOiBcImNha2UgaW5zdGFsbDprYXJtYTsga2FybWEgc3RhcnQgLmNvbmZpZy9rYXJtYS5jb25mLmNvZmZlZVwiLFxuICAgIFwidGVzdDptaW5pZmllZFwiOiBcIm1pbmlmaWVkPTEgbnBtIHJ1biB0ZXN0OmJyb3dzZXIgLXMgfHwgdHJ1ZVwiLFxuICAgIFwidGVzdDpub2RlXCI6IFwiY2FrZSBpbnN0YWxsOnRlc3Q7IG1vY2hhIC11IHRkZCAtLWNvbXBpbGVycyBjb2ZmZWU6Y29mZmVlLXJlZ2lzdGVyIHRlc3Qvbm9kZS5jb2ZmZWVcIixcbiAgICBcInRlc3Q6c2F1Y2VcIjogXCJjYWtlIGluc3RhbGw6a2FybWE7IHNhdWNlPTEga2FybWEgc3RhcnQgLmNvbmZpZy9rYXJtYS5jb25mLmNvZmZlZVwiLFxuICAgIFwid2F0Y2hcIjogXCJjYWtlIC1kIHdhdGNoXCJcbiAgfSxcbiAgXCJzaW1wbHlpbXBvcnRcIjoge1xuICAgIFwiZmluYWxUcmFuc2Zvcm1cIjogW1xuICAgICAgXCIuY29uZmlnL3RyYW5zZm9ybXMvbWluaWZ5LXN1cGVyXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktcmVuYW1lXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc2ltcGxlXCJcbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjEuMTUuOFwiXG59XG4iLCIjIyMqXG4gKiBDb25kaXRpb25hbCBDaGVja3M6XG4gKlxuICogMSkgTWFrZSBzdXJlIHRoZSBzdWJqZWN0IG9iamVjdCBpcyBpdGVyYWJsZSAoYW5kIHRodXMgYSBwb3NzaWJsZSBjYW5kaWRhdGUgZm9yIGJlaW5nIGFuIGVsZW1lbnQgY29sbGVjdGlvbilcbiAqIDIpIE1ha2Ugc3VyZSB0aGUgc3ViamVjdCBvYmplY3QgaXNuJ3QgYW4gYXJyYXkgYmluZGluZyAoc2luY2UgZWxlbWVudCBjb2xsZWN0aW9uIG9iamVjdHMgZG9uJ3QgZ2V0IGRpcmVjdGx5IGJvdW5kKVxuICogMykgTWFrZSBzdXJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uIGlzIGEgdmFsaWQgb2JqZWN0IChpLmUuIGlzbid0IHVuZGVmaW5lZCBhbmQgaXNuJ3QgbnVsbClcbiAqIDQpIE1ha2Ugc3VyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyBhIERPTSBvYmplY3RcbiMjI1xuaWYgY2hlY2tJZi5pc0l0ZXJhYmxlKG9iamVjdCkgYW5kIG5vdCBvYmplY3QuX3NiX0lEIGFuZCBvYmplY3RbMF0gYW5kIChjaGVja0lmLmlzRG9tKG9iamVjdFswXSkpXG5cdG9iamVjdCA9IG9iamVjdFswXSIsIkJpbmRpbmcgPSAob2JqZWN0LCB0eXBlLCBzdGF0ZSktPlxuXHRleHRlbmRTdGF0ZShALCBzdGF0ZSlcblx0QG9wdGlvbnNEZWZhdWx0ID0gaWYgQHNhdmVPcHRpb25zIHRoZW4gQG9wdGlvbnMgZWxzZSBkZWZhdWx0T3B0aW9uc1xuXHRAdHlwZSA9IHR5cGVcdFx0XHRcdFx0XHRcdCMgT2JqZWN0UHJvcCB8IEFycmF5IHwgRnVuYyB8IFByb3h5IHwgRXZlbnQgfCBQaG9sZGVyIHwgRE9NQXR0ciB8IERPTUNoZWNrYm94IHwgRE9NUmFkaW9cblx0QG9iamVjdCA9IG9iamVjdCBcdFx0XHRcdFx0XHQjIFRoZSBzdWJqZWN0IG9iamVjdCBvZiB0aGlzIGJpbmRpbmcsIGkuZS4gZnVuY3Rpb24sIGFycmF5LCB7fSwgRE9NIGVsLCBldGMuXG5cdEBJRCA9IGdlbklEKCkgXHRcdFx0XHRcdFx0XHQjIEFzc2lnbmVkIG9ubHkgYWZ0ZXIgcGFzc2luZyBhIHZhbGlkIG9iamVjdCB0byAub2YoKVxuXHRAc3VicyA9IFtdXHRcdFx0XHRcdFx0XHRcdCMgU3Vic2NyaWJlcnMgYXJyYXkgbGlzdGluZyBhbGwgb2YgdGhlIG9iamVjdHMgdGhhdCB3aWxsIGJlIHVwZGF0ZWQgdXBvbiB2YWx1ZSB1cGRhdGVcblx0QHN1YnNNZXRhID0gZ2VuT2JqKClcdFx0XHRcdFx0IyBNYXAgc3Vic2NyaWJlcnMnIElEIHRvIHRoZWlyIG1ldGFkYXRhIChpLmUuIG9wdGlvbnMsIHRyYW5zZm9ybSwgY29uZGl0aW9uLCBvbmUtdGltZS1iaW5kaW5nLCBldGMuKVxuXHRAcHVic01hcCA9IGdlbk9iaigpXHRcdFx0XHRcdFx0IyBNYXAgcHVibGlzaGVycyAoYmluZGluZ3MgdGhhdCB1cGRhdGUgdGhpcyBiaW5kaW5nKSBieSB0aGVpciBJRFxuXHRAYXR0YWNoZWRFdmVudHMgPSBbXVx0XHRcdFx0XHQjIEFycmF5IGxpc3RpbmcgYWxsIG9mIHRoZSBldmVudHMgY3VycmVudGx5IGxpc3RlbmVkIG9uIEBvYmplY3Rcblx0QHNldFZhbHVlID0gc2V0VmFsdWVOb29wIGlmIEB0eXBlIGlzICdQcm94eSdcblxuXHQjID09PT0gUHJvcGVydGllcyBkZWNsYXJlZCBsYXRlciBvciBpbmhlcml0ZWQgZnJvbSBiaW5kaW5nIGludGVyZmFjZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyBAb3B0aW9ucyA9IG9wdGlvbnNcblx0IyBAdmFsdWUgPSB1bmRlZmluZWQgXHRcdFx0XHRcdCMgV2lsbCByZXByZXNlbnQgdGhlIGFjdHVhbCBjdXJyZW50IHZhbHVlIG9mIHRoZSBiaW5kaW5nL29iamVjdFxuXHQjIEBwcm9wZXJ0eSA9IHByb3BlcnR5XHRcdFx0XHRcdCMgVGhlIHByb3BlcnR5IG5hbWUgb3IgYXJyYXkgaW5kZXggb3IgZXZlbnQgY2FsbGJhY2sgYXJndW1lbnRcblx0IyBAc2VsZWN0b3IgPSBzZWxlY3Rvclx0XHRcdFx0XHQjIFRoZSBwcm9wZXJ0eSBuYW1lIG9yIGFycmF5IGluZGV4IG9yIGV2ZW50IGNhbGxiYWNrIGFyZ3VtZW50XG5cdCMgQG9yaWdGbiA9IEZ1bmN0aW9uXHRcdFx0XHRcdCMgVGhlIG9yaWdpbmFsIHByb3hpZWQgZnVuY3Rpb24gcGFzc2VkIHRvIFByb3h5IGJpbmRpbmdzXG5cdCMgQGN1c3RvbUV2ZW50TWV0aG9kID0ge31cdFx0XHRcdCMgTmFtZXMgb2YgdGhlIGV2ZW50IGVtaXR0ZXIvdHJpZ2dlciBtZXRob2RzIChpZiBhcHBsaWNhYmxlKVxuXHQjIEBwaG9sZGVyQ29udGV4dHMgPSB7fVx0XHRcdFx0XHQjIFBsYWNlaG9sZGVyIHN1cnJvdW5kaW5ncyAob3JpZ2luYWwgYmluZGluZyB2YWx1ZSBzcGxpdCBieSB0aGUgcGxhY2Vob2xkZXIgcmVnRXgpXG5cdCMgQHBob2xkZXJJbmRleE1hcCA9IHt9XHRcdFx0XHRcdCMgUGxhY2Vob2xkZXIgb2NjdXJlbmNlIG1hcHBpbmcsIGkuZS4gdGhlIHBsYWNlaG9sZGVyIG5hbWUgZm9yIGVhY2ggcGxhY2Vob2xkZXIgb2NjdXJlbmNlXG5cdCMgQHBsYWNlaG9sZGVyID0gXCJcIlx0XHRcdFx0XHRcdCMgVGhlIGxhc3Qgc3BlY2lmaWVkIHBsYWNlaG9sZGVyIHRvIGJpbmQgdGhlIHZhbHVlIHRvXG5cdCMgQGRlc2NyaXB0b3IgPSBbXVx0XHRcdFx0XHRcdCMgRGVzY3JpYmVzIHRoZSB0eXBlIG9mIHByb3BlcnR5LCBpLmUuICdhdHRyOmRhdGEtbmFtZScgdG8gaW5kaWNhdGUgYSBET01BdHRyIHR5cGUgYmluZGluZ1xuXHQjIEBpc0xpdmVQcm9wID0gQm9vbGVhblx0XHRcdFx0XHQjIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgT2JqZWN0L09iamVjdCdzIHByb3BldHkgaGF2ZSBiZWVuIG1vZGlmaWVkIHRvIGJlIGEgbGl2ZSBwcm9wZXJ0eVxuXHQjIEBpc0RvbSA9IEJvb2xlYW5cdFx0XHRcdFx0XHQjIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgYmluZGluZydzIG9iamVjdCBpcyBhIERPTSBvYmplY3Rcblx0IyBAcG9sbEludGVydmFsID0gSURcdFx0XHRcdFx0IyBUaGUgaW50ZXJ2YWwgSUQgb2YgdGhlIHRpbWVyIHRoYXQgbWFudWFsbHkgcG9sbHMgdGhlIG9iamVjdCdzIHZhbHVlIGF0IGEgc2V0IGludGVydmFsXG5cdCMgQGFycmF5QmluZGluZyA9IEJpbmRpbmdcdFx0XHRcdCMgUmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgYXJyYXkgYmluZGluZyAoaWYgZXhpc3RzKSBmb3IgYW4gaW5kZXgtb2YtYXJyYXkgYmluZGluZyAoaS5lLiBTaW1wbHlCaW5kKGFycmF5KSlcblx0IyBAZXZlbnROYW1lID0gXCJcIlx0XHRcdFx0XHRcdCMgVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRoaXMgYmluZGluZyBpcyBsaXN0ZW5pbmcgdG8gKGZvciBFdmVudCB0eXBlIGJpbmRpbmdzKVxuXHQjIEBpc0VtaXR0ZXIgPSBCb29sZWFuIFx0XHRcdFx0XHQjIFRyYWNrZXIgdG8gbGV0IHVzIGtub3cgd2Ugc2hvdWxkbid0IGhhbmRsZSB0aGUgZXZlbnQgdXBkYXRlIHdlIHJlY2VpdmVkIGFzIGl0IGlzIHRoZSBldmVudCB0aGlzIGJpbmRpbmcganVzdCBlbWl0dGVkXG5cdCMgQGV2ZW50SGFuZGxlciA9IEZ1bmN0aW9uIFx0XHRcdFx0IyBUaGUgY2FsbGJhY2sgdGhhdCBnZXRzIHRyaWdnZXJlZCB1cG9uIGFuIGV2ZW50IGVtaXR0YW5jZSAoZm9yIEV2ZW4gdHlwZSBiaW5kaW5ncylcblx0IyBAZXZlbnRPYmplY3QgPSBFdmVudCBcdFx0XHRcdFx0IyBUaGUgZGlzcGF0Y2hlZCBldmVudCBvYmplY3QgKGZvciBFdmVudCB0eXBlIGJpbmRpbmdzKVxuXHQjIEBzZWxmVHJhbnNmb3JtID0gRnVuY3Rpb24gXHRcdFx0IyBUaGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHRoYXQgbmV3IHZhbHVlcyBiZWluZyBzZXQgdG8gdGhpcyBiaW5kaW5nIGFyZSBiZWluZyBwYXNzZWQgdGhyb3VnaCBkdXJpbmcgQHNldFZhbHVlIChpZiBhcHBsaWNhYmxlKVxuXHQjIEBzZWxmVXBkYXRlciA9IEZ1bmN0aW9uIFx0XHRcdFx0IyBBIEZ1bmMtdHlwZSBCaW5kaW5nIHdoaWNoIGludm9rZXMgQHNldFZhbHVlKEBmZXRjaERpcmVjdFZhbHVlKCkpIHVwb24gY2hhbmdlLiBDcmVhdGVkIGluIEBjb252ZXJ0VG9MaXZlKCkgZm9yIEFycmF5IGJpbmRpbmdzICYgaW4gaW50ZXJmYWNlLnVwZGF0ZU9uKClcblx0IyBAaXNBc3luYyA9IEJvb2xlYW5cdFx0XHRcdFx0IyBJbmRpY2F0ZXMgaWYgdGhpcyBpcyBhbiBhc3luYyBiaW5kaW5nIChjdXJyZW50bHkgb25seSB1c2VkIGZvciBFdmVudCBiaW5kaW5ncylcblx0IyMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICMjI1xuXG5cdGlmIEBpc011bHRpQ2hvaWNlICMgVHJ1ZSBpZiBAb2JqZWN0IGlzIGEgcmFkaW8vY2hlY2tib3ggY29sbGVjdGlvblxuXHRcdEBjaG9pY2VzID0gZ2VuT2JqKClcblx0XHRcblx0XHRAb2JqZWN0LmZvckVhY2ggKGNob2ljZUVsKT0+XG5cdFx0XHRjaG9pY2VCaW5kaW5nID0gQGNob2ljZXNbY2hvaWNlRWwudmFsdWVdID0gU2ltcGx5QmluZCgnY2hlY2tlZCcpLm9mKGNob2ljZUVsKS5fXG5cdFx0XHRjaG9pY2VCaW5kaW5nLmFkZFN1YihAKVxuXHRcdFx0Y2hvaWNlQmluZGluZy5zdWJzTWV0YVtASURdLnRyYW5zZm9ybUZuID0gKCktPiBjaG9pY2VCaW5kaW5nXG5cdFx0XHRjaG9pY2VCaW5kaW5nLmdyb3VwQmluZGluZyA9IEBcblx0XHRcdHJldHVyblxuXHRcblxuXHR1bmxlc3MgQHR5cGUgaXMgJ0V2ZW50JyBvciAoQHR5cGUgaXMgJ0Z1bmMnIGFuZCBAaXNTdWIpICMgdGhlIHNlY29uZCBjb25kaXRpb24gd2lsbCBwcmV2ZW50IGZ1bmN0aW9uIHN1YnNjcmliZXJzIGZyb20gYmVpbmcgaW52b2tlZCBvbiB0aGlzIGJpbmRpbmcgY3JlYXRpb25cblx0XHRpZiBAdHlwZSBpcyAnUGhvbGRlcidcblx0XHRcdHBhcmVudFByb3BlcnR5ID0gaWYgQGRlc2NyaXB0b3IgYW5kIG5vdCB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ211bHRpJykgdGhlbiBcIiN7QGRlc2NyaXB0b3J9OiN7QHByb3BlcnR5fVwiIGVsc2UgQHByb3BlcnR5XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0cGFyZW50QmluZGluZyA9IEBwYXJlbnRCaW5kaW5nID0gU2ltcGx5QmluZChwYXJlbnRQcm9wZXJ0eSkub2Yob2JqZWN0KS5fXG5cdFx0XHRwYXJlbnRCaW5kaW5nLnNjYW5Gb3JQaG9sZGVycygpXG5cdFx0XHRAdmFsdWUgPSBwYXJlbnRCaW5kaW5nLnBob2xkZXJWYWx1ZXNbQHBob2xkZXJdXG5cdFx0XG5cdFx0XHRAdGV4dE5vZGVzID0gcGFyZW50QmluZGluZy50ZXh0Tm9kZXNbQHBob2xkZXJdIGlmIHBhcmVudEJpbmRpbmcudGV4dE5vZGVzXG5cdFx0XG5cblx0XHRlbHNlXG5cdFx0XHRAdmFsdWUgPSBzdWJqZWN0VmFsdWUgPSBAZmV0Y2hEaXJlY3RWYWx1ZSgpXG5cdFx0XG5cdFx0XHRpZiBAdHlwZSBpcyAnT2JqZWN0UHJvcCcgYW5kIG5vdCBjaGVja0lmLmlzRGVmaW5lZChzdWJqZWN0VmFsdWUpIGFuZCBub3QgZ2V0RGVzY3JpcHRvcihAb2JqZWN0LCBAcHJvcGVydHkpXG5cdFx0XHRcdEBvYmplY3RbQHByb3BlcnR5XSA9IHN1YmplY3RWYWx1ZSAjIERlZmluZSB0aGUgcHJvcCBvbiB0aGUgb2JqZWN0IGlmIGl0IG5vbi1leGlzdGVudFxuXG5cdFx0XHRjb252ZXJ0VG9MaXZlKEAsIEBvYmplY3QpXG5cblxuXHRAYXR0YWNoRXZlbnRzKClcblx0cmV0dXJuIGJvdW5kSW5zdGFuY2VzW0BJRF0gPSBAXG5cblxuXG5cblxuaW1wb3J0ICcuL3Byb3RvdHlwZSdcbiIsIkJpbmRpbmc6OiA9XG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFN1YnNjcmliZXIgTWFuYWdlbWVudFxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0YWRkU3ViOiAoc3ViLCBvcHRpb25zLCB1cGRhdGVPbmNlLCB1cGRhdGVFdmVuSWZTYW1lKS0+XG5cdFx0aWYgc3ViLmlzTXVsdGlcblx0XHRcdEBhZGRTdWIoc3ViSXRlbSwgb3B0aW9ucywgdXBkYXRlT25jZSwgdXBkYXRlRXZlbklmU2FtZSkgZm9yIHN1Ykl0ZW0gaW4gc3ViLmJpbmRpbmdzXG5cdFx0ZWxzZVxuXHRcdFx0aWYgbWV0YURhdGE9QHN1YnNNZXRhW3N1Yi5JRF1cblx0XHRcdFx0YWxyZWFkeUhhZFN1YiA9IHRydWVcblx0XHRcdGVsc2Vcblx0XHRcdFx0c3ViLnB1YnNNYXBbQElEXSA9IEBcblx0XHRcdFx0QHN1YnMudW5zaGlmdChzdWIpXG5cdFx0XHRcdFxuXHRcdFx0XHRtZXRhRGF0YSA9IEBzdWJzTWV0YVtzdWIuSURdID0gZ2VuT2JqKClcblx0XHRcdFx0bWV0YURhdGEudXBkYXRlT25jZSA9IHVwZGF0ZU9uY2Vcblx0XHRcdFx0bWV0YURhdGEub3B0cyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpXG5cdFx0XHRcdG1ldGFEYXRhLm9wdHMudXBkYXRlRXZlbklmU2FtZSA9IHRydWUgaWYgdXBkYXRlRXZlbklmU2FtZSBvciBAdHlwZSBpcyAnRXZlbnQnIG9yIEB0eXBlIGlzICdQcm94eScgb3IgQHR5cGUgaXMgJ0FycmF5J1xuXHRcdFx0XHRtZXRhRGF0YS52YWx1ZVJlZiA9IGlmIHN1Yi50eXBlIGlzICdGdW5jJyB0aGVuICd2YWx1ZVBhc3NlZCcgZWxzZSAndmFsdWUnXG5cdFx0XHRcblx0XHRyZXR1cm4gYWxyZWFkeUhhZFN1YlxuXG5cblxuXHRyZW1vdmVTdWI6IChzdWIsIGJvdGhXYXlzKS0+XG5cdFx0aWYgc3ViLmlzTXVsdGlcblx0XHRcdEByZW1vdmVTdWIoc3ViSXRlbSwgYm90aFdheXMpIGZvciBzdWJJdGVtIGluIHN1Yi5iaW5kaW5nc1xuXHRcdGVsc2Vcblx0XHRcdGlmIEBzdWJzTWV0YVtzdWIuSURdXG5cdFx0XHRcdEBzdWJzLnNwbGljZShAc3Vicy5pbmRleE9mKHN1YiksIDEpXG5cdFx0XHRcdGRlbGV0ZSBAc3Vic01ldGFbc3ViLklEXVxuXHRcdFx0XHRkZWxldGUgc3ViLnB1YnNNYXBbQElEXVxuXG5cdFx0XHRpZiBib3RoV2F5c1xuXHRcdFx0XHRzdWIucmVtb3ZlU3ViKEApXG5cdFx0XHRcdGRlbGV0ZSBAcHVic01hcFtzdWIuSURdXG5cblx0XHRpZiBAc3Vicy5sZW5ndGggaXMgMCBhbmQgT2JqZWN0LmtleXMoQHB1YnNNYXApLmxlbmd0aCBpcyAwXG5cdFx0XHRAZGVzdHJveSgpICMgU2luY2UgaXQncyBubyBsb25nZXIgYSBzdWJzY3JpYmVyIG9yIGhhcyBhbnkgc3Vic2NyaWJlcnNcblx0XG5cdFx0cmV0dXJuXG5cblx0XG5cblx0cmVtb3ZlQWxsU3ViczogKGJvdGhXYXlzKS0+XG5cdFx0QHJlbW92ZVN1YihzdWIsIGJvdGhXYXlzKSBmb3Igc3ViIGluIEBzdWJzLnNsaWNlKClcblx0XHRyZXR1cm5cblxuXG5cblxuXHRkZXN0cm95OiAoKS0+ICMgUmVzZXRzIG9iamVjdCB0byBpbml0aWFsIHN0YXRlIChwcmUtYmluZGluZyBzdGF0ZSlcblx0XHRkZWxldGUgYm91bmRJbnN0YW5jZXNbQElEXVxuXHRcdEByZW1vdmVQb2xsSW50ZXJ2YWwoKVxuXHRcdFxuXHRcdGlmIEB0eXBlIGlzICdFdmVudCdcblx0XHRcdEB1blJlZ2lzdGVyRXZlbnQoZXZlbnQpIGZvciBldmVudCBpbiBAYXR0YWNoZWRFdmVudHNcblx0XHRcblx0XHRlbHNlIGlmIEB0eXBlIGlzICdGdW5jJ1xuXHRcdFx0ZGVsZXRlIEBvYmplY3QuX3NiX0lEXG5cblx0XHQjIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5cdFx0Y29udmVydFRvUmVnKEAsIEBvYmplY3QpIGlmIEBpc0xpdmVQcm9wIGFuZCBAb3JpZ0Rlc2NyaXB0b3Jcblx0XHRjb252ZXJ0VG9SZWcoQCwgQHZhbHVlLCB0cnVlKSBpZiBAdHlwZSBpcyAnQXJyYXknXG5cdFx0XG5cdFx0aWYgQG9iamVjdC5fc2JfbWFwXG5cdFx0XHRkZWxldGUgQG9iamVjdC5fc2JfbWFwW0BzZWxlY3Rvcl1cblx0XHRcdGRlbGV0ZSBAb2JqZWN0Ll9zYl9tYXAgaWYgT2JqZWN0LmtleXMoQG9iamVjdC5fc2JfbWFwKS5sZW5ndGggaXMgMFxuXG5cblx0XHRyZXR1cm5cblxuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgVmFsdWUgc2V0L2dldFxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0ZmV0Y2hEaXJlY3RWYWx1ZTogKCktPlxuXHRcdHR5cGUgPSBAdHlwZVxuXHRcdHN3aXRjaFxuXHRcdFx0d2hlbiB0eXBlIGlzICdGdW5jJyB0aGVuIEBvYmplY3QoKVxuXHRcdFx0XG5cdFx0XHR3aGVuIHR5cGUgaXMgJ0RPTUF0dHInIHRoZW4gQG9iamVjdC5nZXRBdHRyaWJ1dGUoQHByb3BlcnR5KSBvciAnJ1xuXG5cdFx0XHR3aGVuIEBpc011bHRpQ2hvaWNlXG5cdFx0XHRcdHJlc3VsdHMgPSBbXVxuXHRcdFx0XHRmb3IgY2hvaWNlTmFtZSxjaG9pY2VFbCBvZiBAY2hvaWNlc1xuXHRcdFx0XHRcdGlmIGNob2ljZUVsLm9iamVjdC5jaGVja2VkXG5cdFx0XHRcdFx0XHRpZiB0eXBlIGlzICdET01SYWRpbydcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNob2ljZU5hbWVcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoIGNob2ljZU5hbWVcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0c1xuXHRcdFxuXHRcdFx0ZWxzZSBAb2JqZWN0W0Bwcm9wZXJ0eV1cblx0XG5cblxuXG5cdHNldFZhbHVlOiAobmV3VmFsdWUsIHB1Ymxpc2hlciwgZnJvbVNlbGYsIGZyb21DaGFuZ2VFdmVudCktPiAjIGZyb21TZWxmPT09dHJ1ZSB3aGVuIGNhbGxlZCBmcm9tIGV2ZW50VXBkYXRlSGFuZGxlciBvciBwcm9wZXJ0eSBkZXNjcmlwdG9yIHNldHRlciAodW5sZXNzIGl0J3MgYW4gQXJyYXkgYmluZGluZylcblx0XHRwdWJsaXNoZXIgfHw9IEBcblx0XHRuZXdWYWx1ZSA9IEBzZWxmVHJhbnNmb3JtKG5ld1ZhbHVlKSBpZiBAc2VsZlRyYW5zZm9ybVxuXHRcdFxuXHRcdHVubGVzcyBmcm9tU2VsZiB0aGVuIHN3aXRjaCBAdHlwZVxuXHRcdFx0d2hlbiAnT2JqZWN0UHJvcCdcblx0XHRcdFx0aWYgbm90IEBpc0xpdmVQcm9wXG5cdFx0XHRcdFx0QG9iamVjdFtAcHJvcGVydHldID0gbmV3VmFsdWUgaWYgbmV3VmFsdWUgaXNudCBAdmFsdWVcblx0XHRcdFx0aW1wb3J0SW5saW5lICcuL3Byb3RvdHlwZS5zZXRWYWx1ZS1PYmplY3RQcm9wLURPTVZhbHVlJ1xuXHRcdFx0XHRlbHNlIGlmIEBvcmlnU2V0dGVyXG5cdFx0XHRcdFx0QG9yaWdTZXR0ZXIobmV3VmFsdWUpXG5cblxuXHRcdFx0d2hlbiAnUGhvbGRlcidcblx0XHRcdFx0cGFyZW50ID0gQHBhcmVudEJpbmRpbmdcblx0XHRcdFx0cGFyZW50LnBob2xkZXJWYWx1ZXNbQHBob2xkZXJdID0gbmV3VmFsdWVcblx0XHRcdFx0ZW50aXJlVmFsdWUgPSBhcHBseVBsYWNlaG9sZGVycyhwYXJlbnQucGhvbGRlckNvbnRleHRzLCBwYXJlbnQucGhvbGRlclZhbHVlcywgcGFyZW50LnBob2xkZXJJbmRleE1hcClcblxuXHRcdFx0XHRpZiBAdGV4dE5vZGVzIGFuZCBuZXdWYWx1ZSBpc250IEB2YWx1ZVxuXHRcdFx0XHRcdGZvciB0ZXh0Tm9kZSBpbiBAdGV4dE5vZGVzXG5cdFx0XHRcdFx0XHR0ZXh0Tm9kZVt0ZXh0Q29udGVudF0gPSBuZXdWYWx1ZVxuXHRcdFx0XHRcblx0XHRcdFx0cGFyZW50LnNldFZhbHVlKGVudGlyZVZhbHVlLCBwdWJsaXNoZXIpIHVubGVzcyBAcHJvcGVydHkgaXMgdGV4dENvbnRlbnRcblx0XHRcdFx0XG5cblxuXHRcdFx0d2hlbiAnQXJyYXknXG5cdFx0XHRcdGlmIG5ld1ZhbHVlIGlzbnQgQHZhbHVlXG5cdFx0XHRcdFx0bmV3VmFsdWUgPSBBcnJheTo6Y29uY2F0KG5ld1ZhbHVlKSBpZiBub3QgY2hlY2tJZi5pc0FycmF5KG5ld1ZhbHVlKVxuXHRcdFx0XHRcdGNvbnZlcnRUb1JlZyhALCBAdmFsdWUsIHRydWUpXG5cdFx0XHRcdFx0Y29udmVydFRvTGl2ZShALCBuZXdWYWx1ZT1uZXdWYWx1ZS5zbGljZSgpLCB0cnVlKVxuXHRcdFx0XHRcdEBvcmlnU2V0dGVyKG5ld1ZhbHVlKSBpZiBAb3JpZ1NldHRlciAjIFdpbGwgdXBkYXRlIGFueSBvdGhlciBwcmV2aW91cyBub24tQXJyYXkgYmluZGluZ3MgdG8gdGhlIHNhbWUgb2JqZWN0IHByb3BlcnR5XG5cblxuXHRcdFx0d2hlbiAnRnVuYydcblx0XHRcdFx0cHJldlZhbHVlID0gQHZhbHVlUGFzc2VkXG5cdFx0XHRcdEB2YWx1ZVBhc3NlZCA9IG5ld1ZhbHVlXG5cdFx0XHRcdG5ld1ZhbHVlID0gQG9iamVjdChuZXdWYWx1ZSwgcHJldlZhbHVlKVxuXG5cdFx0XHR3aGVuICdFdmVudCdcblx0XHRcdFx0QGlzRW1pdHRlciA9IHRydWVcblx0XHRcdFx0QGVtaXRFdmVudChuZXdWYWx1ZSlcblx0XHRcdFx0QGlzRW1pdHRlciA9IGZhbHNlXG5cdFx0XG5cdFx0XHRpbXBvcnRJbmxpbmUgJy4vcHJvdG90eXBlLnNldFZhbHVlLURPTVR5cGVzJ1xuXHRcdFxuXHRcdEB2YWx1ZSA9IG5ld1ZhbHVlXG5cdFx0QHVwZGF0ZUFsbFN1YnMocHVibGlzaGVyKVxuXG5cdFx0cmV0dXJuXG5cblxuXG5cblxuXHR1cGRhdGVBbGxTdWJzOiAocHVibGlzaGVyKS0+IGlmIGk9KGFycj1Ac3VicykubGVuZ3RoICMgVWdseSBzaG9ydGN1dCBmb3IgaW5kZXggZGVmaW5pdGlvbiBpbiBvcmRlciB0byBsaW1pdCBsb2dpYyByZXBpdGlpb25cblx0XHRAdXBkYXRlU3ViKGFycltpXSwgcHVibGlzaGVyKSB3aGlsZSBpLS1cblx0XHRyZXR1cm5cblxuXG5cblx0XHRcdFxuXG5cdHVwZGF0ZVN1YjogKHN1YiwgcHVibGlzaGVyLCBpc0RlbGF5ZWRVcGRhdGUpLT5cblx0XHRyZXR1cm4gaWYgKHB1Ymxpc2hlciBpcyBzdWIpIG9yIChwdWJsaXNoZXIgaXNudCBAIGFuZCBwdWJsaXNoZXIuc3Vic01ldGFbc3ViLklEXSkgIyBpbmRpY2F0ZXMgdGhpcyBpcyBhbiBpbmZpbml0ZSBsb29wXG5cdFx0bWV0YSA9IEBzdWJzTWV0YVtzdWIuSURdXG5cblx0XHRpZiBtZXRhLmRpc2FsbG93TGlzdCBhbmQgbWV0YS5kaXNhbGxvd0xpc3RbcHVibGlzaGVyLklEXVxuXHRcdFx0cmV0dXJuXG5cblx0XHRpZiBtZXRhLm9wdHMudGhyb3R0bGVcblx0XHRcdGN1cnJlbnRUaW1lID0gKyhuZXcgRGF0ZSlcblx0XHRcdHRpbWVQYXNzZWQgPSBjdXJyZW50VGltZSAtIG1ldGEubGFzdFVwZGF0ZVxuXHRcdFx0XG5cdFx0XHRpZiB0aW1lUGFzc2VkIDwgbWV0YS5vcHRzLnRocm90dGxlXG5cdFx0XHRcdGNsZWFyVGltZW91dChtZXRhLnVwZGF0ZVRpbWVyKVxuXHRcdFx0XHRyZXR1cm4gbWV0YS51cGRhdGVUaW1lciA9XG5cdFx0XHRcdFx0c2V0VGltZW91dCAoKT0+XG5cdFx0XHRcdFx0XHRAdXBkYXRlU3ViKHN1YiwgcHVibGlzaGVyKSBpZiBAc3Vic01ldGFbc3ViLklEXVxuXHRcdFx0XHRcdCwgbWV0YS5vcHRzLnRocm90dGxlLXRpbWVQYXNzZWRcblx0XHRcdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRtZXRhLmxhc3RVcGRhdGUgPSBjdXJyZW50VGltZVxuXG5cdFx0ZWxzZSBpZiBtZXRhLm9wdHMuZGVsYXkgYW5kIG5vdCBpc0RlbGF5ZWRVcGRhdGVcblx0XHRcdHJldHVybiBzZXRUaW1lb3V0ICgpPT5cblx0XHRcdFx0QHVwZGF0ZVN1YihzdWIsIHB1Ymxpc2hlciwgdHJ1ZSkgaWYgQHN1YnNNZXRhW3N1Yi5JRF1cblx0XHRcdCwgbWV0YS5vcHRzLmRlbGF5XG5cblxuXHRcdG5ld1ZhbHVlID0gaWYgQHR5cGUgaXMgJ0FycmF5JyBhbmQgbWV0YS5vcHRzLnNlbmRBcnJheUNvcGllcyB0aGVuIEB2YWx1ZS5zbGljZSgpIGVsc2UgQHZhbHVlXG5cdFx0c3ViVmFsdWUgPSBzdWJbbWV0YS52YWx1ZVJlZl1cblx0XHRuZXdWYWx1ZSA9IGlmIHRyYW5zZm9ybT1tZXRhLnRyYW5zZm9ybUZuIHRoZW4gdHJhbnNmb3JtKG5ld1ZhbHVlLCBzdWJWYWx1ZSwgc3ViLm9iamVjdCkgZWxzZSBuZXdWYWx1ZVxuXG5cdFx0cmV0dXJuIGlmIG5ld1ZhbHVlIGlzIHN1YlZhbHVlIGFuZCBub3QgbWV0YS5vcHRzLnVwZGF0ZUV2ZW5JZlNhbWUgb3Jcblx0XHRcdG1ldGEuY29uZGl0aW9uRm4gYW5kIG5vdCBtZXRhLmNvbmRpdGlvbkZuKG5ld1ZhbHVlLCBzdWJWYWx1ZSwgc3ViLm9iamVjdClcblxuXHRcdCMgV2h5IGRvIHdlIG5lZWQgdGhlICdwcm9taXNlVHJhbnNmb3Jtcycgb3B0aW9uIHdoZW4gd2UgY2FuIGp1c3QgY2hlY2sgZm9yIHRoZSBleGlzdGFuY2Ugb2YgLnRoZW4gbWV0aG9kP1xuXHRcdCMgQmVjYXVzZSB0ZXN0cyBzaG93IHRoYXQgd2hlbiBzZWFyY2hpbmcgZm9yIHRoZSAudGhlbiBwcm9wIG9uIHRoZSBvYmplY3QgcmVzdWx0cyBpbiBhIHBlcmZvcm1hbmNlIHNsb3dkb3duIG9mIHVwIHRvIDMwJSFcblx0XHQjIENoZWNraW5nIGlmIHRoZSBwcm9taXNlVHJhbnNmb3JtcyBvcHRpb24gaXMgZW5hYmxlZCBmaXJzdCBlbGltaW5hdGVzIHVubmVjZXNzYXJ5IGxvb2t1cHMgJiBzbG93ZG93bnMuXG5cdFx0aWYgbWV0YS5vcHRzLnByb21pc2VUcmFuc2Zvcm1zIGFuZCBuZXdWYWx1ZSBhbmQgY2hlY2tJZi5pc0Z1bmN0aW9uKG5ld1ZhbHVlLnRoZW4pXG5cdFx0XHRuZXdWYWx1ZS50aGVuIChuZXdWYWx1ZSktPiBzdWIuc2V0VmFsdWUobmV3VmFsdWUsIHB1Ymxpc2hlcik7IHJldHVyblxuXHRcdGVsc2Vcblx0XHRcdHN1Yi5zZXRWYWx1ZShuZXdWYWx1ZSwgcHVibGlzaGVyKVxuXG5cdFx0QHJlbW92ZVN1YihzdWIpIGlmIG1ldGEudXBkYXRlT25jZVxuXHRcdHJldHVyblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFRyYW5zZm9ybXMgJiBDb25kaXRpb25zXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGFkZE1vZGlmaWVyRm46ICh0YXJnZXQsIHN1YkludGVyZmFjZXMsIHN1YmplY3RGbiwgdXBkYXRlT25CaW5kKS0+XG5cdFx0aWYgbm90IGNoZWNrSWYuaXNGdW5jdGlvbihzdWJqZWN0Rm4pXG5cdFx0XHR0aHJvd1dhcm5pbmcoJ2ZuT25seScsMilcblxuXHRcdGVsc2Vcblx0XHRcdGZvciBzdWJJbnRlcmZhY2UgaW4gc3ViSW50ZXJmYWNlc1xuXHRcdFx0XHRzdWJzY3JpYmVyID0gc3ViSW50ZXJmYWNlLl8gb3Igc3ViSW50ZXJmYWNlICMgU2Vjb25kIGlzIGNob3NlbiB3aGVuIHRoZSBwYXNzZWQgc3Vic2NyaWJlciBpbnRlcmZhY2VzIG11bHRpLWJpbmRpbmcgKGlzIGEgcmVjdXJzaXZlIGNhbGwgb2YgdGhpcyBtZXRob2QpXG5cblx0XHRcdFx0aWYgc3Vic2NyaWJlci5pc011bHRpXG5cdFx0XHRcdFx0QGFkZE1vZGlmaWVyRm4odGFyZ2V0LCBzdWJzY3JpYmVyLmJpbmRpbmdzLCBzdWJqZWN0Rm4sIHVwZGF0ZU9uQmluZClcblx0XHRcdFx0XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRzdWJNZXRhRGF0YSA9IEBzdWJzTWV0YVtzdWJzY3JpYmVyLklEXVxuXHRcdFx0XHRcdHN1Yk1ldGFEYXRhW3RhcmdldF0gPSBzdWJqZWN0Rm5cblx0XHRcdFx0XHR1cGRhdGVPbkJpbmQgPSB1cGRhdGVPbkJpbmQgYW5kIG5vdCBzdWJNZXRhRGF0YS51cGRhdGVPbmNlXG5cblx0XHRcdFx0XHRpZiBAcHVic01hcFtzdWJzY3JpYmVyLklEXVxuXHRcdFx0XHRcdFx0c3Vic2NyaWJlci5zdWJzTWV0YVtASURdW3RhcmdldF0gfHw9IHN1YmplY3RGbiAjIFdpbGwgbm90IHJlcGxhY2UgZXhpc3RpbmcgbW9kaWZpZXIgZnVuY3Rpb24gaWYgZXhpc3RzXG5cblx0XHRcdFx0XHRAdXBkYXRlU3ViKHN1YnNjcmliZXIsIEApIGlmICh1cGRhdGVPbkJpbmQgb3IgQHR5cGUgaXMgJ0Z1bmMnKSBhbmQgdGFyZ2V0IGlzICd0cmFuc2Zvcm1GbidcblxuXHRcdFx0cmV0dXJuIHRydWVcblxuXG5cblx0c2V0U2VsZlRyYW5zZm9ybTogKHRyYW5zZm9ybUZuLCB1cGRhdGVPbkJpbmQpLT5cblx0XHRAc2VsZlRyYW5zZm9ybSA9IHRyYW5zZm9ybUZuXG5cdFx0QHNldFZhbHVlKEB2YWx1ZSkgaWYgdXBkYXRlT25CaW5kXG5cdFx0cmV0dXJuXG5cblxuXG5cblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0IyMgQWxsb3cvRGlzYWxsb3cgcnVsZXNcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdGFkZERpc2FsbG93UnVsZTogKHRhcmdldFN1YiwgdGFyZ2V0RGlzYWxsb3cpLT5cblx0XHRkaXNhbGxvd0xpc3QgPSBAc3Vic01ldGFbdGFyZ2V0U3ViLklEXS5kaXNhbGxvd0xpc3QgPz0gZ2VuT2JqKClcblx0XHRkaXNhbGxvd0xpc3RbdGFyZ2V0RGlzYWxsb3cuSURdID0gMVxuXHRcdHJldHVyblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdCMjIFBsYWNlaG9sZGVyc1xuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcblx0c2NhbkZvclBob2xkZXJzOiAoKS0+IHVubGVzcyBAcGhvbGRlclZhbHVlc1xuXHRcdEBwaG9sZGVyVmFsdWVzID0gZ2VuT2JqKClcblx0XHRAcGhvbGRlckluZGV4TWFwID0gZ2VuT2JqKClcblx0XHRAcGhvbGRlckNvbnRleHRzID0gW11cblxuXHRcdGlmIGNoZWNrSWYuaXNTdHJpbmcoQHZhbHVlKVxuXHRcdFx0QHBob2xkZXJDb250ZXh0cyA9IEB2YWx1ZS5zcGxpdCBwaG9sZGVyUmVnRXhTcGxpdFxuXHRcdFx0XG5cdFx0XHRpbmRleCA9IDBcblx0XHRcdEB2YWx1ZSA9IEB2YWx1ZS5yZXBsYWNlIHBob2xkZXJSZWdFeCwgKGUsIHBob2xkZXIpPT5cblx0XHRcdFx0QHBob2xkZXJJbmRleE1hcFtpbmRleCsrXSA9IHBob2xkZXJcblx0XHRcdFx0QHBob2xkZXJWYWx1ZXNbcGhvbGRlcl0gPSBwaG9sZGVyXG5cdFx0XG5cdFx0c2NhblRleHROb2Rlc1BsYWNlaG9sZGVycyhAb2JqZWN0LCBAdGV4dE5vZGVzPWdlbk9iaigpKSBpZiBAaXNEb20gYW5kIEBwcm9wZXJ0eSBpcyB0ZXh0Q29udGVudFxuXHRcdHJldHVyblxuXHRcblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBQb2xsaW5nXG5cdCMjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxuXHRhZGRQb2xsSW50ZXJ2YWw6ICh0aW1lKS0+IGlmIEB0eXBlIGlzbnQgJ0V2ZW50J1xuXHRcdEByZW1vdmVQb2xsSW50ZXJ2YWwoKVxuXHRcdFxuXHRcdEBwb2xsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCAoKT0+XG5cdFx0XHRwb2xsZWRWYWx1ZSA9IEBmZXRjaERpcmVjdFZhbHVlKClcblxuXHRcdFx0QHNldFZhbHVlIHBvbGxlZFZhbHVlLCBALCB0cnVlXG5cdFx0LCB0aW1lXG5cblxuXHRyZW1vdmVQb2xsSW50ZXJ2YWw6ICgpLT5cblx0XHRjbGVhckludGVydmFsKEBwb2xsSW50ZXJ2YWwpXG5cdFx0QHBvbGxJbnRlcnZhbCA9IG51bGxcblxuXG5cblxuXG5cblxuXG5cblxuXHQjIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQjIyBFdmVudHNcblx0IyMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG5cdFxuXHRhZGRVcGRhdGVMaXN0ZW5lcjogKGV2ZW50TmFtZSwgdGFyZ2V0UHJvcGVydHkpLT5cblx0XHRAb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIgZXZlbnROYW1lLCAoZXZlbnQpPT5cblx0XHRcdHVubGVzcyBldmVudC5fc2Jcblx0XHRcdFx0c2hvdWxkUmVkZWZpbmVWYWx1ZSA9IEBzZWxmVHJhbnNmb3JtIGFuZCBAaXNEb21JbnB1dFxuXHRcdFx0XHRAc2V0VmFsdWUoQG9iamVjdFt0YXJnZXRQcm9wZXJ0eV0sIG51bGwsICFzaG91bGRSZWRlZmluZVZhbHVlLCB0cnVlKVxuXG5cdFx0XHRyZXR1cm5cblx0XHRcblx0XHQsIGZhbHNlXG5cdFx0cmV0dXJuXG5cdFxuXG5cdGF0dGFjaEV2ZW50czogKCktPlxuXHRcdGlmIEBldmVudE5hbWVcblx0XHRcdEByZWdpc3RlckV2ZW50KEBldmVudE5hbWUpXG5cdFx0XG5cdFx0ZWxzZSBpZiBAaXNEb21JbnB1dFxuXHRcdFx0QGFkZFVwZGF0ZUxpc3RlbmVyKCdpbnB1dCcsICd2YWx1ZScpXG5cdFx0XHRAYWRkVXBkYXRlTGlzdGVuZXIoJ2NoYW5nZScsICd2YWx1ZScpXG5cblx0XHRlbHNlIGlmIG5vdCBAaXNNdWx0aUNob2ljZSBhbmQgKEB0eXBlIGlzICdET01SYWRpbycgb3IgQHR5cGUgaXMgJ0RPTUNoZWNrYm94Jylcblx0XHRcdEBhZGRVcGRhdGVMaXN0ZW5lcignY2hhbmdlJywgJ2NoZWNrZWQnKVxuXG5cdFx0cmV0dXJuXG5cdFxuXG5cblx0cmVnaXN0ZXJFdmVudDogKGV2ZW50TmFtZSktPlxuXHRcdEBhdHRhY2hlZEV2ZW50cy5wdXNoKGV2ZW50TmFtZSlcblx0XHRAZXZlbnRIYW5kbGVyID0gZXZlbnRVcGRhdGVIYW5kbGVyLmJpbmQoQCkgdW5sZXNzIEBldmVudEhhbmRsZXJcblx0XHRcblx0XHRAb2JqZWN0W0BldmVudE1ldGhvZHMubGlzdGVuXShldmVudE5hbWUsIEBldmVudEhhbmRsZXIpXG5cdFx0cmV0dXJuXG5cblxuXG5cdHVuUmVnaXN0ZXJFdmVudDogKGV2ZW50TmFtZSktPlxuXHRcdEBhdHRhY2hlZEV2ZW50cy5zcGxpY2UgQGF0dGFjaGVkRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSwgMVxuXG5cdFx0QG9iamVjdFtAZXZlbnRNZXRob2RzLnJlbW92ZV0oZXZlbnROYW1lLCBAZXZlbnRIYW5kbGVyKVxuXHRcdHJldHVyblxuXG5cblxuXHRlbWl0RXZlbnQ6IChleHRyYURhdGEpLT5cblx0XHRldmVudE9iamVjdCA9IEBldmVudE5hbWVcblx0XHRcblx0XHRpZiBAZXZlbnRNZXRob2RzLmVtaXQgaXMgJ2Rpc3BhdGNoRXZlbnQnXG5cdFx0XHR1bmxlc3MgQGV2ZW50T2JqZWN0XG5cdFx0XHRcdEBldmVudE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG5cdFx0XHRcdEBldmVudE9iamVjdC5pbml0RXZlbnQoQGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSlcblxuXHRcdFx0QGV2ZW50T2JqZWN0LmJpbmRpbmdEYXRhID0gZXh0cmFEYXRhXG5cdFx0XHRldmVudE9iamVjdCA9IEBldmVudE9iamVjdFxuXG5cdFx0QG9iamVjdFtAZXZlbnRNZXRob2RzLmVtaXRdKGV2ZW50T2JqZWN0LCBleHRyYURhdGEpXG5cdFx0cmV0dXJuXG5cblxuXG5cbmV2ZW50VXBkYXRlSGFuZGxlciA9ICgpLT4gdW5sZXNzIEBpc0VtaXR0ZXJcblx0QHNldFZhbHVlKGFyZ3VtZW50c1tAcHJvcGVydHldLCBudWxsLCB0cnVlKVxuXHRyZXR1cm5cblxuXG5cblxuXG4iLCJlbHNlIGlmIEBpc0RvbUlucHV0XG5cdGlmIG5vdCBmcm9tQ2hhbmdlRXZlbnRcblx0XHRAb3JpZ1NldHRlcihuZXdWYWx1ZSlcblx0XHRAb2JqZWN0LmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQoKSkgaWYgc2V0dGluZ3MuZGlzcGF0Y2hFdmVudHNcblx0XG5cdGVsc2UgaWYgbmV3VmFsdWUgaXNudCBAb3JpZ0dldHRlcigpICMgSU1QTElDSVQ6IGFuZCBmcm9tQ2hhbmdlRXZlbnRcblx0XHRwcmV2Q3Vyc3JvciA9IEBvYmplY3Quc2VsZWN0aW9uU3RhcnRcblx0XHRAb3JpZ1NldHRlcihuZXdWYWx1ZSlcblx0XHRAb2JqZWN0LnNldFNlbGVjdGlvblJhbmdlKHByZXZDdXJzcm9yLCBwcmV2Q3Vyc3JvcikgaWYgcHJldkN1cnNyb3IiLCJ3aGVuICdET01SYWRpbydcblx0aWYgQGlzTXVsdGlDaG9pY2UgIyBUaGUgbmV3VmFsdWUgdmFyIHdpbGwgaG9sZCB0aGUgcmFkaW8gZmllbGQgYmluZGluZyBhcyBpdHMgdmFsdWUgaWYgdGhlIHVwZGF0ZSBpcyBjb21pbmcgZnJvbSB0aGUgcmFkaW8gZmllbGQncyBjaGFuZ2UgZXZlbnRcblx0XHR0YXJnZXRDaG9pY2VCaW5kaW5nID0gaWYgY2hlY2tJZi5pc0JpbmRpbmcobmV3VmFsdWUpIHRoZW4gbmV3VmFsdWUgZWxzZSBAY2hvaWNlc1tuZXdWYWx1ZV1cblxuXHRcdGlmIHRhcmdldENob2ljZUJpbmRpbmdcblx0XHRcdG5ld1ZhbHVlID0gdGFyZ2V0Q2hvaWNlQmluZGluZy5vYmplY3QudmFsdWVcblx0XHRcblx0XHRcdGZvciBuLGNob2ljZUJpbmRpbmcgb2YgQGNob2ljZXNcblx0XHRcdFx0Y2hvaWNlQmluZGluZy5zZXRWYWx1ZShjaG9pY2VCaW5kaW5nLklEIGlzIHRhcmdldENob2ljZUJpbmRpbmcuSUQsIHB1Ymxpc2hlcilcblx0XHRlbHNlXG5cdFx0XHRuZXdWYWx1ZSA9IEB2YWx1ZSAjIFNldCB0byBwcmV2IHZhbHVlXG5cdFxuXHRlbHNlXG5cdFx0bmV3VmFsdWUgPSAhIW5ld1ZhbHVlICMgQ29udmVydCB0byBCb29sZWFuXG5cdFx0cmV0dXJuIGlmIG5ld1ZhbHVlIGlzIEB2YWx1ZVxuXHRcdEBvYmplY3QuY2hlY2tlZCA9IG5ld1ZhbHVlIHVubGVzcyBAb2JqZWN0LmNoZWNrZWQgaXMgbmV3VmFsdWVcblx0XHRAb2JqZWN0LmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQoKSkgaWYgbmV3VmFsdWUgYW5kIHNldHRpbmdzLmRpc3BhdGNoRXZlbnRzICMgT25seSBlbWl0IGlmIHRoZSB2YWx1ZSBpcyB0cnVlIChpbiBvcmRlciB0byBjb25mb3JtIHRvIHdlYiBzdGFuZGFyZHMpXG5cblxud2hlbiAnRE9NQ2hlY2tib3gnXG5cdGlmIEBpc011bHRpQ2hvaWNlICMgVGhlIG5ld1ZhbHVlIHZhciB3aWxsIGhvbGQgdGhlIGNoZWNrYm94IGZpZWxkIGJpbmRpbmcgYXMgaXRzIHZhbHVlIGlmIHRoZSB1cGRhdGUgaXMgY29taW5nIGZyb20gdGhlIGNoZWNrYm94IGZpZWxkJ3MgY2hhbmdlIGV2ZW50XG5cdFx0b3ZlcndyaXRlUHJldmlvdXMgPSBub3QgY2hlY2tJZi5pc0JpbmRpbmcobmV3VmFsdWUpICMgTWVhbnMgdGhhdCBhIG5ldyBhcnJheSB3YXMgc3VwcGxpZWRcblx0XHRuZXdDaG9pY2VzID0gW10uY29uY2F0KG5ld1ZhbHVlKSAjIFRoaXMgKm5vcm1hbGl6ZXMqIHRoZSBuZXcgdmFsdWUgaW50byBhbiBhcnJheVxuXHRcdFxuXHRcdGZvciB2YWx1ZSxpbmRleCBpbiBuZXdDaG9pY2VzXG5cdFx0XHRuZXdDaG9pY2VzW2luZGV4XSA9IGlmIGNoZWNrSWYuaXNCaW5kaW5nKHZhbHVlKSB0aGVuIHZhbHVlIGVsc2UgQGNob2ljZXNbdmFsdWVdXG5cdFx0XG5cdFx0bmV3VmFsdWVBcnJheSA9IFtdXG5cdFx0Zm9yIGNob2ljZU5hbWUsY2hvaWNlQmluZGluZyBvZiBAY2hvaWNlc1xuXHRcdFx0aWYgb3ZlcndyaXRlUHJldmlvdXNcblx0XHRcdFx0bmV3Q2hvaWNlVmFsdWUgPSB0YXJnZXRJbmNsdWRlcyhuZXdDaG9pY2VzLCBjaG9pY2VCaW5kaW5nKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRuZXdDaG9pY2VWYWx1ZSA9IGNob2ljZUJpbmRpbmcudmFsdWVcblx0XHRcdFxuXHRcdFx0Y2hvaWNlQmluZGluZy5zZXRWYWx1ZShuZXdDaG9pY2VWYWx1ZSwgcHVibGlzaGVyKVxuXHRcdFx0bmV3VmFsdWVBcnJheS5wdXNoKGNob2ljZU5hbWUpIGlmIG5ld0Nob2ljZVZhbHVlXG5cblx0XHRuZXdWYWx1ZSA9IG5ld1ZhbHVlQXJyYXlcblxuXG5cdGVsc2Vcblx0XHRuZXdWYWx1ZSA9ICEhbmV3VmFsdWUgIyBDb252ZXJ0IHRvIEJvb2xlYW5cblx0XHRyZXR1cm4gaWYgbmV3VmFsdWUgaXMgQHZhbHVlXG5cdFx0dW5sZXNzIEBvYmplY3QuY2hlY2tlZCBpcyBuZXdWYWx1ZVxuXHRcdFx0QG9iamVjdC5jaGVja2VkID0gbmV3VmFsdWVcblx0XHRcdEBvYmplY3QuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCgpKSBpZiBzZXR0aW5ncy5kaXNwYXRjaEV2ZW50c1xuXG5cblxud2hlbiAnRE9NQXR0cidcblx0QG9iamVjdC5zZXRBdHRyaWJ1dGUoQHByb3BlcnR5LCBuZXdWYWx1ZSlcbiIsIiMjIypcbiAqIFN0YWdlIGRlZmluaXRpb25zOlxuICogXG4gKiAwOiBTZWxlY3Rpb246XHRcdFx0R290IHNlbGVjdG9yLCBhd2FpdGluZyBvYmplY3QuXG4gKiAxOiBJbmRpY2F0aW9uOlx0XHRcdEdvdCBvYmplY3QsIGF3YWl0aW5nIHByb3hpZWQgcHJvcGVydHkgLyBmdW5jdGlvbiAvIEJpbmRpbmctb2JqZWN0LlxuICogMjogQmluZGluZyBDb21wbGV0ZTpcdFx0Q29tcGxldGUsIGF3YWl0aW5nIGFkZGl0aW9uYWwgKG9wdGlvbmFsKSBiaW5kaW5ncy9tdXRhdGlvbnMuXG4jIyNcbkJpbmRpbmdJbnRlcmZhY2UgPSAob3B0aW9ucywgaW5oZXJpdGVkU3RhdGUpLT5cblx0aWYgaW5oZXJpdGVkU3RhdGVcblx0XHRleHRlbmRTdGF0ZShALCBpbmhlcml0ZWRTdGF0ZSlcblx0XHRAc3RhZ2UgPSAxXG5cdGVsc2Vcblx0XHRAc3RhZ2UgPSAwXG5cdFx0QHN1YnMgPSBbXVxuXHRcdEBvcHRpb25zUGFzc2VkID0gb3B0aW9ucyB8fD0ge31cblx0XHRAb3B0aW9ucyA9IHt9XG5cdFx0Zm9yIGtleSBvZiBkZWZhdWx0T3B0aW9uc1xuXHRcdFx0QG9wdGlvbnNba2V5XSA9IGlmIG9wdGlvbnNba2V5XT8gdGhlbiBvcHRpb25zW2tleV0gZWxzZSBkZWZhdWx0T3B0aW9uc1trZXldXG5cdFxuXHRyZXR1cm4gQFx0XHRcdFxuXHRcblxuXG5cbmltcG9ydCAnLi9wcm90b3R5cGUtcHJpdmF0ZSdcbmltcG9ydCAnLi9wcm90b3R5cGUtcHVibGljJyIsIkJpbmRpbmdJbnRlcmZhY2VQcml2YXRlID1cblx0c2VsZkNsb25lOiAoKS0+IG5ldyBCaW5kaW5nSW50ZXJmYWNlKG51bGwsIEApXG5cdFxuXHRkZWZpbmVNYWluUHJvcHM6IChiaW5kaW5nKS0+XG5cdFx0QF8gPSBiaW5kaW5nXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMgQCxcblx0XHRcdCd2YWx1ZSc6XHRcdGdldDogKCktPiBiaW5kaW5nLnZhbHVlXG5cdFx0XHQnb3JpZ2luYWwnOlx0XHRnZXQ6ICgpLT4gYmluZGluZy5vYmplY3RzIG9yIGJpbmRpbmcub2JqZWN0XG5cdFx0XHQnc3Vic2NyaWJlcnMnOlx0Z2V0OiAoKS0+IGJpbmRpbmcuc3Vicy5zbGljZSgpLm1hcCAoc3ViKS0+IHN1Yi5vYmplY3RcblxuXG5cblxuXHRjcmVhdGVCaW5kaW5nOiAoc3ViamVjdCwgbmV3T2JqZWN0VHlwZSwgYmluZGluZ0ludGVyZmFjZSwgaXNGdW5jdGlvbiktPlxuXHRcdEBvYmplY3QgPSBzdWJqZWN0XG5cdFx0Y2FjaGVkQmluZGluZyA9IGNhY2hlLmdldChzdWJqZWN0LCBpc0Z1bmN0aW9uLCBAc2VsZWN0b3IsIEBpc011bHRpQ2hvaWNlKVxuXHRcdFxuXHRcdGlmIGNhY2hlZEJpbmRpbmcgIyBFeGl0IGVhcmx5IGJ5IHJldHVybmluZyB0aGUgc3ViamVjdCBmcm9tIGNhY2hlIGlmIGlzIGFscmVhZHkgaW4gdGhlcmVcblx0XHRcdHJldHVybiBAcGF0Y2hDYWNoZWRCaW5kaW5nKGNhY2hlZEJpbmRpbmcpXG5cblx0XHRlbHNlXG5cdFx0XHRuZXdCaW5kaW5nID0gbmV3IEJpbmRpbmcoc3ViamVjdCwgbmV3T2JqZWN0VHlwZSwgYmluZGluZ0ludGVyZmFjZSlcblx0XHRcdGNhY2hlLnNldChuZXdCaW5kaW5nLCBpc0Z1bmN0aW9uKVxuXHRcdFx0cmV0dXJuIG5ld0JpbmRpbmdcblxuXG5cblx0cGF0Y2hDYWNoZWRCaW5kaW5nOiAoY2FjaGVkQmluZGluZyktPlxuXHRcdGlmIGNhY2hlZEJpbmRpbmcudHlwZSBpcyAnT2JqZWN0UHJvcCcgYW5kIEBwcm9wZXJ0eSBub3Qgb2YgQG9iamVjdCAjIFRoaXMgcHJvcGVydHkgd2FzIG1hbnVhbGx5IGRlbGV0ZWQgYW5kIG5lZWRzIGl0cyBwcm9wIHRvIGJlIHJlLWRlZmluZWQgYXMgYSBsaXZlIG9uZVxuXHRcdFx0Y29udmVydFRvTGl2ZShjYWNoZWRCaW5kaW5nLCBAb2JqZWN0KVxuXG5cdFx0aWYgQHNhdmVPcHRpb25zXG5cdFx0XHRjYWNoZWRCaW5kaW5nLm9wdGlvbnNEZWZhdWx0W29wdGlvbl0gPSB2YWx1ZSBmb3Igb3B0aW9uLHZhbHVlIG9mIEBvcHRpb25zUGFzc2VkXG5cblx0XHRmb3Iga2V5LHZhbHVlIG9mIGNhY2hlZEJpbmRpbmcub3B0aW9uc0RlZmF1bHRcblx0XHRcdEBvcHRpb25zW2tleV0gPSBpZiBjaGVja0lmLmlzRGVmaW5lZChAb3B0aW9uc1Bhc3NlZFtrZXldKSB0aGVuIEBvcHRpb25zUGFzc2VkW2tleV0gZWxzZSB2YWx1ZVxuXHRcdFxuXHRcdHJldHVybiBjYWNoZWRCaW5kaW5nXG5cblxuXG5cdHNldFByb3BlcnR5OiAoc3ViamVjdCktPlxuXHRcdHN1YmplY3QgPSBzdWJqZWN0LnRvU3RyaW5nKCkgaWYgY2hlY2tJZi5pc051bWJlcihzdWJqZWN0KVxuXHRcdEBzZWxlY3RvciA9IEBwcm9wZXJ0eSA9IHN1YmplY3RcblxuXHRcdFxuXHRcdHVubGVzcyBAb3B0aW9ucy5zaW1wbGVTZWxlY3RvclxuXHRcdFx0aWYgdGFyZ2V0SW5jbHVkZXMoc3ViamVjdCwgJzonKVxuXHRcdFx0XHRzcGxpdCA9IHN1YmplY3Quc3BsaXQoJzonKVxuXHRcdFx0XHRAZGVzY3JpcHRvciA9IHNwbGl0LnNsaWNlKDAsIC0xKS5qb2luKCc6Jylcblx0XHRcdFx0QHByb3BlcnR5ID0gc3BsaXRbc3BsaXQubGVuZ3RoLTFdXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgdGFyZ2V0SW5jbHVkZXMoc3ViamVjdCwgJy4nKSAjIFBsYWNlaG9sZGVyIGV4dHJhY3Rpb25cblx0XHRcdFx0c3BsaXQgPSBAcHJvcGVydHkuc3BsaXQoJy4nKSAjIFdlIHVzZSAnQHByb3BlcnR5JyBpbnN0ZWFkIG9mICdzdWJqZWN0JyBiZWNhdXNlIGl0IG1heSBoYXZlIGJlZW4gbW9kaWZpZWQgYnkgdGhlIHByZXZpb3VzICc6JyBkZXNjcmlwdG9yIGNoZWNrXG5cdFx0XHRcdEBwcm9wZXJ0eSA9IHNwbGl0WzBdXHRcdFx0XHRcblx0XHRcdFx0QHBob2xkZXIgPSBzcGxpdC5zbGljZSgxKS5qb2luKCcuJylcblxuXG5cblx0XHRcdGlmIHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnZXZlbnQnKVxuXHRcdFx0XHRpZiB0YXJnZXRJbmNsdWRlcyhzdWJqZWN0LCAnIycpXG5cdFx0XHRcdFx0c3BsaXQgPSBAcHJvcGVydHkuc3BsaXQoJyMnKVxuXHRcdFx0XHRcdEBldmVudE5hbWUgPSBzcGxpdFswXVxuXHRcdFx0XHRcdEBwcm9wZXJ0eSA9IHNwbGl0WzFdXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRAZXZlbnROYW1lID0gQHByb3BlcnR5XG5cdFx0XHRcdFx0QHByb3BlcnR5ID0gMFxuXG5cdFx0XHRcdHRocm93V2FybmluZygnYmFkRXZlbnRBcmcnLDEpIGlmIGlzTmFOIHBhcnNlSW50KEBwcm9wZXJ0eSlcblxuXHRcdHJldHVybiBAXG5cblxuXG5cdHNldE9iamVjdDogKHN1YmplY3QsIGlzRnVuY3Rpb24pLT5cblx0XHRAc3RhZ2UgPSAxXG5cdFx0aW1wb3J0ICcuL3Byb3RvdHlwZS1wcml2YXRlLnNldE9iamVjdC1wYXJzZURPTU9iamVjdCdcblx0XHRcblx0XHRzd2l0Y2hcblx0XHRcdHdoZW4gaXNGdW5jdGlvblxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0Z1bmMnXG5cdFx0XHRcblx0XHRcdHdoZW4gQHBob2xkZXJcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdQaG9sZGVyJ1xuXHRcdFx0XG5cdFx0XHR3aGVuIHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnYXJyYXknKSBhbmQgY2hlY2tJZi5pc0FycmF5KHN1YmplY3RbQHByb3BlcnR5XSlcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdBcnJheSdcblx0XHRcdFxuXHRcdFx0d2hlbiB0YXJnZXRJbmNsdWRlcyhAZGVzY3JpcHRvciwgJ2V2ZW50Jylcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdFdmVudCdcblx0XHRcdFx0aW1wb3J0ICcuL3Byb3RvdHlwZS1wcml2YXRlLnNldE9iamVjdC1kZWZpbmVFdmVudE1ldGhvZHMnXG5cblx0XHRcdHdoZW4gdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdmdW5jJylcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdQcm94eSdcblx0XHRcdFxuXHRcdFx0d2hlbiBpc0RvbVJhZGlvIFxuXHRcdFx0XHRuZXdPYmplY3RUeXBlID0gJ0RPTVJhZGlvJ1xuXG5cdFx0XHR3aGVuIGlzRG9tQ2hlY2tib3ggXG5cdFx0XHRcdG5ld09iamVjdFR5cGUgPSAnRE9NQ2hlY2tib3gnXG5cblx0XHRcdHdoZW4gdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdhdHRyJylcblx0XHRcdFx0bmV3T2JqZWN0VHlwZSA9ICdET01BdHRyJ1xuXG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5ld09iamVjdFR5cGUgPSAnT2JqZWN0UHJvcCdcblx0XHRcblxuXHRcdGlmIHRhcmdldEluY2x1ZGVzKEBkZXNjcmlwdG9yLCAnbXVsdGknKVxuXHRcdFx0dGhyb3dFcnJvcignZW1wdHlMaXN0JykgaWYgbm90IHN1YmplY3QubGVuZ3RoXG5cdFx0XHRAZGVmaW5lTWFpblByb3BzIG5ldyBHcm91cEJpbmRpbmcoQCwgc3ViamVjdCwgbmV3T2JqZWN0VHlwZSlcblx0XHRlbHNlXG5cdFx0XHRAZGVmaW5lTWFpblByb3BzIEBjcmVhdGVCaW5kaW5nKHN1YmplY3QsIG5ld09iamVjdFR5cGUsIEAsIGlzRnVuY3Rpb24pXG5cblxuXHRcdGlmIHRhcmdldEluY2x1ZGVzKEBfLnR5cGUsICdFdmVudCcpIG9yIHRhcmdldEluY2x1ZGVzKEBfLnR5cGUsICdQcm94eScpXG5cdFx0XHRAb3B0aW9ucy51cGRhdGVPbkJpbmQgPSBmYWxzZVxuXHRcdGVsc2UgaWYgdGFyZ2V0SW5jbHVkZXMoQF8udHlwZSwgJ0Z1bmMnKVxuXHRcdFx0QG9wdGlvbnMudXBkYXRlT25CaW5kID0gdHJ1ZVxuXG5cblx0XHRpZiBAY29tcGxldGVDYWxsYmFja1xuXHRcdFx0cmV0dXJuIEBjb21wbGV0ZUNhbGxiYWNrKEApXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIEBcblxuXG5cblxuXHRhZGRUb1B1Ymxpc2hlcjogKHB1Ymxpc2hlckludGVyZmFjZSktPlxuXHRcdHB1Ymxpc2hlckludGVyZmFjZS5zdGFnZSA9IDJcblx0XHRwdWJsaXNoZXJJbnRlcmZhY2Uuc3Vicy5wdXNoKEApXG5cdFx0YWxyZWFkeUhhZFN1YiA9IHB1Ymxpc2hlckludGVyZmFjZS5fLmFkZFN1YihAXywgcHVibGlzaGVySW50ZXJmYWNlLm9wdGlvbnMsIHB1Ymxpc2hlckludGVyZmFjZS51cGRhdGVPbmNlKVxuXG5cdFx0aWYgcHVibGlzaGVySW50ZXJmYWNlLnVwZGF0ZU9uY2Vcblx0XHRcdGRlbGV0ZSBwdWJsaXNoZXJJbnRlcmZhY2UudXBkYXRlT25jZVxuXHRcdFxuXHRcdGVsc2UgaWYgcHVibGlzaGVySW50ZXJmYWNlLm9wdGlvbnMudXBkYXRlT25CaW5kIGFuZCBub3QgYWxyZWFkeUhhZFN1YlxuXHRcdFx0aWYgQF8uaXNNdWx0aVxuXHRcdFx0XHRwdWJsaXNoZXJJbnRlcmZhY2UuXy51cGRhdGVTdWIoYmluZGluZywgcHVibGlzaGVySW50ZXJmYWNlLl8pIGZvciBiaW5kaW5nIGluIEBfLmJpbmRpbmdzXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHB1Ymxpc2hlckludGVyZmFjZS5fLnVwZGF0ZVN1YihAXywgcHVibGlzaGVySW50ZXJmYWNlLl8pXG5cblx0XHRyZXR1cm5cblxuXG5cblxuXG4iLCJpc0l0ZXJhYmxlID0gc3ViamVjdCBpc250IHdpbmRvdyBhbmQgY2hlY2tJZi5pc0l0ZXJhYmxlKHN1YmplY3QpIGFuZCBub3Qgc3ViamVjdC5ub2RlVHlwZVxuc2FtcGxlSXRlbSA9IGlmIGlzSXRlcmFibGUgdGhlbiBzdWJqZWN0WzBdIGVsc2Ugc3ViamVjdFxuXG5pZiBub3Qgc2FtcGxlSXRlbVxuXHR0aHJvd0Vycm9yKCdlbXB0eUxpc3QnKSBpZiBpc0l0ZXJhYmxlIGFuZCBjaGVja0lmLmlzRWxDb2xsZWN0aW9uKHN1YmplY3QpXG5cbmVsc2UgaWYgQGlzRG9tID0gY2hlY2tJZi5pc0RvbShzYW1wbGVJdGVtKVxuXG5cdGlmIEBwcm9wZXJ0eSBpcyAnY2hlY2tlZCdcblx0XHRpc0RvbVJhZGlvID0gc2FtcGxlSXRlbSBhbmQgY2hlY2tJZi5pc0RvbVJhZGlvKHNhbXBsZUl0ZW0pXG5cdFx0aXNEb21DaGVja2JveCA9IG5vdCBpc0RvbVJhZGlvIGFuZCBzYW1wbGVJdGVtIGFuZCBjaGVja0lmLmlzRG9tQ2hlY2tib3goc2FtcGxlSXRlbSlcblx0XG5cdGVsc2UgaWYgQHByb3BlcnR5IGlzICd2YWx1ZSdcblx0XHRAaXNEb21JbnB1dCA9IGNoZWNrSWYuaXNEb21JbnB1dChzYW1wbGVJdGVtKVxuXHRcblxuXHRpZiBpc0l0ZXJhYmxlIGFuZCBub3QgdGFyZ2V0SW5jbHVkZXMoQGRlc2NyaXB0b3IsICdtdWx0aScpXG5cdFx0aWYgc3ViamVjdC5sZW5ndGggaXMgMVxuXHRcdFx0c3ViamVjdCA9IHN1YmplY3RbMF1cblxuXHRcdGVsc2Vcblx0XHRcdGlmIChpc0RvbVJhZGlvIG9yIGlzRG9tQ2hlY2tib3gpIGFuZCBub3QgY2hlY2tJZi5kb21FbHNBcmVTYW1lKHN1YmplY3QpXG5cdFx0XHRcdHJldHVybiB0aHJvd1dhcm5pbmcoJ21peGVkRWxMaXN0JywzKVx0XHRcdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpZiBpc0RvbVJhZGlvIG9yIGlzRG9tQ2hlY2tib3hcblx0XHRcdFx0XHRAaXNNdWx0aUNob2ljZSA9IHRydWVcblx0XHRcdFx0XHRzdWJqZWN0ID0gW10uc2xpY2UuY2FsbChzdWJqZWN0KVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c3ViamVjdCA9IHN1YmplY3RbMF1cblx0XHRcdFx0XHR0aHJvd1dhcm5pbmcoJ29ubHlPbmVET01FbGVtZW50JywzKVxuXG5cblxuXG4iLCJAZXZlbnRNZXRob2RzID0gbGlzdGVuOkBvcHRpb25zUGFzc2VkLmxpc3Rlbk1ldGhvZCwgcmVtb3ZlOkBvcHRpb25zUGFzc2VkLnJlbW92ZU1ldGhvZCwgZW1pdDpAb3B0aW9uc1Bhc3NlZC5lbWl0TWV0aG9kXG5cblxuXG5pZiBub3Qgc3ViamVjdFtAZXZlbnRNZXRob2RzLmxpc3Rlbl1cblx0QGV2ZW50TWV0aG9kcy5saXN0ZW4gPSBpZiBjaGVja0lmLmlzRG9tTm9kZShzdWJqZWN0KSB0aGVuICdhZGRFdmVudExpc3RlbmVyJyBlbHNlICdvbidcblxuaWYgbm90IHN1YmplY3RbQGV2ZW50TWV0aG9kcy5yZW1vdmVdXG5cdEBldmVudE1ldGhvZHMucmVtb3ZlID0gaWYgY2hlY2tJZi5pc0RvbU5vZGUoc3ViamVjdCkgdGhlbiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgZWxzZSAncmVtb3ZlTGlzdGVuZXInXG5cbmlmIG5vdCBzdWJqZWN0W0BldmVudE1ldGhvZHMuZW1pdF1cblx0QGV2ZW50TWV0aG9kcy5lbWl0ID0gaWYgY2hlY2tJZi5pc0RvbU5vZGUoc3ViamVjdCkgdGhlbiAnZGlzcGF0Y2hFdmVudCcgZWxzZSAnZW1pdCciLCJCaW5kaW5nSW50ZXJmYWNlOjogPSBPYmplY3QuY3JlYXRlIEJpbmRpbmdJbnRlcmZhY2VQcml2YXRlLFxuXHRvZjpcdFx0XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF9vZiBpZiBub3QgQHN0YWdlXHRcdFx0Iz09PSBpZiBzdGFnZSBpcyAwXG5cdHNldDpcdFx0XHRcdGdldDogKCktPiBNRVRIT0Rfc2V0IGlmIEBzdGFnZVx0XHRcdFx0Iz09PSBpZiBzdGFnZSBpcyAxIG9yIDJcblx0Y2hhaW5UbzpcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX2NoYWluVG8gaWYgQHN0YWdlIGlzIDJcblx0dHJhbnNmb3JtU2VsZjpcdFx0Z2V0OiAoKS0+IE1FVEhPRF90cmFuc2Zvcm1TZWxmIGlmIEBzdGFnZSBpcyAxXG5cdHRyYW5zZm9ybTpcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX3RyYW5zZm9ybSBpZiBAc3RhZ2UgaXMgMlxuXHR0cmFuc2Zvcm1BbGw6XHRcdGdldDogKCktPiBNRVRIT0RfdHJhbnNmb3JtQWxsIGlmIEBzdGFnZSBpcyAyXG5cdGNvbmRpdGlvbjpcdFx0XHRnZXQ6ICgpLT4gTUVUSE9EX2NvbmRpdGlvbiBpZiBAc3RhZ2UgaXMgMlxuXHRjb25kaXRpb25BbGw6XHRcdGdldDogKCktPiBNRVRIT0RfY29uZGl0aW9uQWxsIGlmIEBzdGFnZSBpcyAyXG5cdGJvdGhXYXlzOlx0XHRcdGdldDogKCktPiBNRVRIT0RfYm90aFdheXMgaWYgQHN0YWdlIGlzIDJcblx0dW5CaW5kOlx0XHRcdFx0Z2V0OiAoKS0+IE1FVEhPRF91bkJpbmQgaWYgQHN0YWdlIGlzIDJcblx0cG9sbEV2ZXJ5Olx0XHRcdGdldDogKCktPiBNRVRIT0RfcG9sbEV2ZXJ5IGlmIEBzdGFnZSAjPT09IGlmIHN0YWdlIGlzIDEgb3IgMlxuXHRzdG9wUG9sbGluZzpcdFx0Z2V0OiAoKS0+IE1FVEhPRF9zdG9wUG9sbGluZyBpZiBAc3RhZ2UgIz09PSBpZiBzdGFnZSBpcyAxIG9yIDJcblx0c2V0T3B0aW9uOlx0XHRcdGdldDogKCktPiBNRVRIT0Rfc2V0T3B0aW9uIGlmIEBzdGFnZSBpcyAyXG5cdGRpc2FsbG93RnJvbTpcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBpcyAyIGFuZCAodGhpc0ludGVyZmFjZT1AKVxuXHRcdFx0XHRcdFx0XHRnZW5Qcm94aWVkSW50ZXJmYWNlIGZhbHNlLCAoZGlzYWxsb3dJbnRlcmZhY2UpLT5cblx0XHRcdFx0XHRcdFx0XHRzdWJJbnRlcmZhY2UgPSB0aGlzSW50ZXJmYWNlLnN1YnNbdGhpc0ludGVyZmFjZS5zdWJzLmxlbmd0aC0xXVxuXHRcdFx0XHRcdFx0XHRcdHRoaXNJbnRlcmZhY2UuXy5hZGREaXNhbGxvd1J1bGUoc3ViSW50ZXJmYWNlLl8sIGRpc2FsbG93SW50ZXJmYWNlLl8pXG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpc0ludGVyZmFjZVxuXHRcblx0dXBkYXRlT246XHRcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBhbmQgKHRoaXNJbnRlcmZhY2U9QCkgIz09PSBpZiBzdGFnZSBpcyAxIG9yIDJcblx0XHRcdFx0XHRcdFx0Z2VuUHJveGllZEludGVyZmFjZSBmYWxzZSwgKHN1YkludGVyZmFjZSktPlxuXHRcdFx0XHRcdFx0XHRcdGlmIHN1YkludGVyZmFjZS5fIGlzbnQgdGhpc0ludGVyZmFjZS5fXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzSW50ZXJmYWNlLl8ucHVic01hcFtzdWJJbnRlcmZhY2UuXy5JRF0gPSBzdWJJbnRlcmZhY2UuX1xuXHRcdFx0XHRcdFx0XHRcdFx0c3ViSW50ZXJmYWNlLl8uYWRkU3ViIGdlblNlbGZVcGRhdGVyKHRoaXNJbnRlcmZhY2UuXywgdHJ1ZSksIHN1YkludGVyZmFjZS5vcHRpb25zLCBmYWxzZSwgdHJ1ZVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzSW50ZXJmYWNlXG5cdFxuXG5cdHJlbW92ZVVwZGF0ZXI6XHRcdGdldDogKCktPiBpZiBAc3RhZ2UgYW5kICh0aGlzSW50ZXJmYWNlPUApIGFuZCAoc2VsZlVwZGF0ZXI9QF8uc2VsZlVwZGF0ZXIpICM9PT0gaWYgc3RhZ2UgaXMgMSBvciAyXG5cdFx0XHRcdFx0XHRcdGdlblByb3hpZWRJbnRlcmZhY2UgZmFsc2UsIChzdWJJbnRlcmZhY2UpLT5cblx0XHRcdFx0XHRcdFx0XHRpZiBzdWJJbnRlcmZhY2UuXy5zdWJzTWV0YVtzZWxmVXBkYXRlci5JRF1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzSW50ZXJmYWNlLl8ucHVic01hcFtzdWJJbnRlcmZhY2UuXy5JRF1cblx0XHRcdFx0XHRcdFx0XHRcdHN1YkludGVyZmFjZS5fLnJlbW92ZVN1YihzZWxmVXBkYXRlcilcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVyblxuXG5cblx0dG86XHRcdFx0XHRcdGdldDogKCktPiBpZiBAc3RhZ2UgaXMgMSBhbmQgKHRoaXNJbnRlcmZhY2U9QClcblx0XHRcdFx0XHRcdFx0Z2VuUHJveGllZEludGVyZmFjZSB0cnVlLCAoc3ViSW50ZXJmYWNlKS0+XG5cdFx0XHRcdFx0XHRcdFx0aWYgc3ViSW50ZXJmYWNlLl8gaXNudCB0aGlzSW50ZXJmYWNlLl9cblx0XHRcdFx0XHRcdFx0XHRcdHN1YkludGVyZmFjZS5hZGRUb1B1Ymxpc2hlcih0aGlzSW50ZXJmYWNlKVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzSW50ZXJmYWNlXG5cdFxuXG5cdGFuZDpcdFx0XHRcdGdldDogKCktPlxuXHRcdFx0XHRcdFx0XHRjbG9uZUludGVyZmFjZSA9IEBzZWxmQ2xvbmUoKVxuXHRcdFx0XHRcdFx0XHRpZiBAc3RhZ2UgaXMgMlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBjbG9uZUludGVyZmFjZVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYgQHN0YWdlIGlzIDFcblx0XHRcdFx0XHRcdFx0XHRpZiBub3QgY2xvbmVJbnRlcmZhY2UuXy5pc011bHRpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9uZUJpbmRpbmcgPSBjbG9uZUludGVyZmFjZS5fXG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9uZUludGVyZmFjZS5fID0gY2xvbmVJbnRlcmZhY2UuXyA9IG5ldyBHcm91cEJpbmRpbmcoY2xvbmVJbnRlcmZhY2UpXG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9uZUludGVyZmFjZS5fLmFkZEJpbmRpbmcoY2xvbmVCaW5kaW5nKVxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBnZW5Qcm94aWVkSW50ZXJmYWNlIGZhbHNlLCAoc2libGluZ0ludGVyZmFjZSktPlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xvbmVJbnRlcmZhY2UuXy5hZGRCaW5kaW5nKHNpYmxpbmdJbnRlcmZhY2UuXylcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBjbG9uZUludGVyZmFjZVxuXHRcblxuXHRvbmNlOlx0XHRcdFx0Z2V0OiAoKS0+IGlmIEBzdGFnZSBpcyAxXG5cdFx0XHRcdFx0XHRcdGludGVyZmFjZVRvUmV0dXJuID0gQHNlbGZDbG9uZSgpXG5cdFx0XHRcdFx0XHRcdGludGVyZmFjZVRvUmV0dXJuLnVwZGF0ZU9uY2UgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcmZhY2VUb1JldHVyblxuXG5cdCMgPT09PSBBbGlhc2VzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHR1cGRhdGU6XHRcdFx0XHRnZXQ6ICgpLT4gQHNldFxuXHR0d29XYXk6XHRcdFx0XHRnZXQ6ICgpLT4gQGJvdGhXYXlzXG5cdHBpcGU6XHRcdFx0XHRnZXQ6ICgpLT4gQGNoYWluVG9cblxuXG5cblxuTUVUSE9EX29mID0gKG9iamVjdCktPlxuXHR0aHJvd0Vycm9yQmFkQXJnKG9iamVjdCkgdW5sZXNzIGNoZWNrSWYuaXNPYmplY3Qob2JqZWN0KSBvciBjaGVja0lmLmlzRnVuY3Rpb24ob2JqZWN0KVxuXHRcblx0aWYgY2hlY2tJZi5pc0JpbmRpbmdJbnRlcmZhY2Uob2JqZWN0KVxuXHRcdG9iamVjdCA9IG9iamVjdC5vYmplY3RcblxuXHRAc3RhZ2UgPSAxXG5cdHJldHVybiBAc2V0T2JqZWN0KG9iamVjdClcblxuXG5cblxuXG5NRVRIT0RfY2hhaW5UbyA9IChzdWJqZWN0LCBzcGVjaWZpY09wdGlvbnMsIHNhdmVPcHRpb25zKS0+XG5cdHJldHVybiBTaW1wbHlCaW5kKEBzdWJzW0BzdWJzLmxlbmd0aC0xXSkudG8oc3ViamVjdCwgc3BlY2lmaWNPcHRpb25zLCBzYXZlT3B0aW9ucylcblxuXG5cblxuXG5NRVRIT0Rfc2V0ID0gKG5ld1ZhbHVlKS0+XG5cdEBfLnNldFZhbHVlKG5ld1ZhbHVlKVxuXHRyZXR1cm4gQFxuXG5cblxuXG5cblxuXG5cbk1FVEhPRF90cmFuc2Zvcm1TZWxmID0gKHRyYW5zZm9ybUZuKS0+ICMgQXBwbGllZCBvbmx5IHRvIHRoZSBsYXN0IHN1YlxuXHRpZiBub3QgY2hlY2tJZi5pc0Z1bmN0aW9uKHRyYW5zZm9ybUZuKVxuXHRcdHRocm93V2FybmluZygnZm5Pbmx5JywxKVxuXHRlbHNlXG5cdFx0QF8uc2V0U2VsZlRyYW5zZm9ybSh0cmFuc2Zvcm1GbiwgQG9wdGlvbnMudXBkYXRlT25CaW5kKVxuXHRcdFxuXHRyZXR1cm4gQFxuXG5cbk1FVEhPRF90cmFuc2Zvcm0gPSAodHJhbnNmb3JtRm4pLT4gIyBBcHBsaWVkIG9ubHkgdG8gdGhlIGxhc3Qgc3ViXG5cdEBfLmFkZE1vZGlmaWVyRm4oJ3RyYW5zZm9ybUZuJywgQHN1YnMuc2xpY2UoLTEpLCB0cmFuc2Zvcm1GbiwgQG9wdGlvbnMudXBkYXRlT25CaW5kKVxuXHRyZXR1cm4gQFxuXG5cbk1FVEhPRF90cmFuc2Zvcm1BbGwgPSAodHJhbnNmb3JtRm4pLT4gIyBBcHBsaWVkIHRvIGVudHJpZSBzdWJzIHNldFx0XHRcblx0QF8uYWRkTW9kaWZpZXJGbigndHJhbnNmb3JtRm4nLCBAc3VicywgdHJhbnNmb3JtRm4sIEBvcHRpb25zLnVwZGF0ZU9uQmluZClcblx0cmV0dXJuIEBcblxuXG5cblxuXG5cbk1FVEhPRF9jb25kaXRpb24gPSAoY29uZGl0aW9uRm4pLT4gIyBBcHBsaWVkIG9ubHkgdG8gdGhlIGxhc3Qgc3ViXG5cdEBfLmFkZE1vZGlmaWVyRm4oJ2NvbmRpdGlvbkZuJywgQHN1YnMuc2xpY2UoLTEpLCBjb25kaXRpb25Gbilcblx0cmV0dXJuIEBcblxuXG5NRVRIT0RfY29uZGl0aW9uQWxsID0gKGNvbmRpdGlvbkZuKS0+ICMgQXBwbGllZCB0byBlbnRyaWUgc3VicyBzZXRcblx0QF8uYWRkTW9kaWZpZXJGbignY29uZGl0aW9uRm4nLCBAc3VicywgY29uZGl0aW9uRm4pXG5cdHJldHVybiBAXG5cblxuXG5cblxuXG5cbk1FVEhPRF9ib3RoV2F5cyA9IChhbHRUcmFuc2Zvcm0pLT4gIyBBcHBsaWVkIG9ubHkgdG8gdGhlIGxhc3Qgc3ViXG5cdHN1YiA9IEBzdWJzW0BzdWJzLmxlbmd0aC0xXSAjIExhc3QgUHJveGllZFxuXHRzdWJCaW5kaW5nID0gc3ViLl9cblx0YmluZGluZ3MgPSBpZiBAXy5pc011bHRpIHRoZW4gQF8uYmluZGluZ3MgZWxzZSBbQF9dXG5cblx0c3ViQmluZGluZy5hZGRTdWIoQF8sIHN1Yi5vcHRpb25zKVxuXHRcblx0Zm9yIGJpbmRpbmcgaW4gYmluZGluZ3Ncblx0XHRvcmlnaW5UcmFuc2Zvcm0gPSBiaW5kaW5nLnN1YnNNZXRhW3N1YkJpbmRpbmcuSURdLnRyYW5zZm9ybUZuXG5cdFx0b3JpZ2luQ29uZGl0aW9uID0gYmluZGluZy5zdWJzTWV0YVtzdWJCaW5kaW5nLklEXS5jb25kaXRpb25GblxuXG5cdFx0aWYgb3JpZ2luVHJhbnNmb3JtIG9yIGFsdFRyYW5zZm9ybVxuXHRcdFx0dHJhbnNmb3JtVG9Vc2UgPSBpZiBjaGVja0lmLmlzRnVuY3Rpb24oYWx0VHJhbnNmb3JtKSB0aGVuIGFsdFRyYW5zZm9ybSBlbHNlIG9yaWdpblRyYW5zZm9ybVxuXHRcdFx0c3ViQmluZGluZy5zdWJzTWV0YVtAXy5JRF0udHJhbnNmb3JtRm4gPSB0cmFuc2Zvcm1Ub1VzZSBpZiB0cmFuc2Zvcm1Ub1VzZSBhbmQgYWx0VHJhbnNmb3JtIGlzbnQgZmFsc2VcblxuXHRcdGlmIG9yaWdpbkNvbmRpdGlvblxuXHRcdFx0c3ViQmluZGluZy5zdWJzTWV0YVtAXy5JRF0uY29uZGl0aW9uRm4gPSBvcmlnaW5Db25kaXRpb25cblxuXHRyZXR1cm4gQFxuXG5cblxuTUVUSE9EX3VuQmluZCA9IChib3RoV2F5cyktPiAjIEFwcGxpZWQgdG8gYWxsIHN1YnNcblx0QF8ucmVtb3ZlU3ViKHN1Yi5fLCBib3RoV2F5cykgZm9yIHN1YiBpbiBAc3Vic1xuXHRyZXR1cm4gQFxuXG5cblxuXG5cbk1FVEhPRF9wb2xsRXZlcnkgPSAodGltZSktPlxuXHRAXy5hZGRQb2xsSW50ZXJ2YWwodGltZSlcblx0cmV0dXJuIEBcblxuXG5cbk1FVEhPRF9zdG9wUG9sbGluZyA9ICgpLT5cblx0QF8ucmVtb3ZlUG9sbEludGVydmFsKClcblx0cmV0dXJuIEBcblxuXG5cbk1FVEhPRF9zZXRPcHRpb24gPSAob3B0aW9uTmFtZSwgbmV3VmFsdWUpLT5cblx0QF8uc3Vic01ldGFbQHN1YnNbQHN1YnMubGVuZ3RoLTFdLl8uSURdLm9wdHNbb3B0aW9uTmFtZV0gPSBuZXdWYWx1ZVx0XG5cdHJldHVybiBAXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJHcm91cEJpbmRpbmcgPSAoYmluZGluZ0ludGVyZmFjZSwgb2JqZWN0cywgb2JqZWN0VHlwZSktPlxuXHRiaW5kaW5nSW50ZXJmYWNlLnNlbGVjdG9yID0gYmluZGluZ0ludGVyZmFjZS5zZWxlY3Rvci5zbGljZSg2KSAjIFRha2Ugb3V0IHRoZSAnbXVsdGk6J1xuXHRleHRlbmRTdGF0ZShALCBAaW50ZXJmYWNlID0gYmluZGluZ0ludGVyZmFjZSlcblx0QGlzTXVsdGkgPSB0cnVlXG5cdEBiaW5kaW5ncyA9IGJpbmRpbmdzID0gW11cblxuXHRpZiBvYmplY3RzXG5cdFx0QGFkZEJpbmRpbmcob2JqZWN0LCBvYmplY3RUeXBlKSBmb3Igb2JqZWN0IGluIG9iamVjdHNcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyBALFxuXHRcdCd0eXBlJzpcdFx0XHRcdGdldDogKCktPiBiaW5kaW5ncy5tYXAgKGJpbmRpbmcpLT4gYmluZGluZy50eXBlXG5cdFx0J3ZhbHVlJzogXHRcdFx0Z2V0OiAoKS0+IGJpbmRpbmdzLm1hcCAoYmluZGluZyktPiBiaW5kaW5nLnZhbHVlXG5cblxuXG5cblxuXG5wcm90byA9IEdyb3VwQmluZGluZzo6ID0gT2JqZWN0LmNyZWF0ZShCaW5kaW5nSW50ZXJmYWNlUHJpdmF0ZSlcblxuT2JqZWN0LmtleXMoQmluZGluZzo6KS5mb3JFYWNoIChtZXRob2ROYW1lKS0+XHRcblx0cHJvdG9bbWV0aG9kTmFtZV0gPSAoYSxiLGMsZCktPiAjIEZvdXIgYXJndW1lbnRzIGlzIHRoZSBtb3N0IGV2ZXIgcGFzc2VkIHRvIGFueSBtZXRob2QgZnJvbSBCaW5kaW5nSW50ZXJmYWNlIG1ldGhvZHNcblx0XHRmb3IgYmluZGluZyBpbiBAYmluZGluZ3Ncblx0XHRcdGIgPSBiaW5kaW5nIGlmIG1ldGhvZE5hbWUgaXMgJ3VwZGF0ZVN1Yidcblx0XHRcdGJpbmRpbmdbbWV0aG9kTmFtZV0oYSxiLGMsZClcblx0XHRcblx0XHRyZXR1cm5cblxuXG5wcm90by5hZGRCaW5kaW5nID0gKG9iamVjdCwgb2JqZWN0VHlwZSktPlxuXHRAYmluZGluZ3MucHVzaCBpZiBub3Qgb2JqZWN0VHlwZSB0aGVuIG9iamVjdCBlbHNlIEBjcmVhdGVCaW5kaW5nKG9iamVjdCwgb2JqZWN0VHlwZSwgQGludGVyZmFjZSlcblx0cmV0dXJuIiwiZXh0ZW5kID0gcmVxdWlyZSAnLi9leHRlbmQnXG5cbm5vcm1hbGl6ZUtleXMgPSAoa2V5cyktPiBpZiBrZXlzXG5cdG91dHB1dCA9IHt9XG5cdGlmIHR5cGVvZiBrZXlzIGlzbnQgJ29iamVjdCdcblx0XHRvdXRwdXRba2V5c10gPSB0cnVlXG5cdGVsc2Vcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoa2V5cykgaWYgbm90IEFycmF5LmlzQXJyYXkoa2V5cylcblx0XHRvdXRwdXRba2V5XSA9IHRydWUgZm9yIGtleSBpbiBrZXlzXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cbm5ld0J1aWxkZXIgPSAoaXNCYXNlKS0+XG5cdGJ1aWxkZXIgPSAodGFyZ2V0KS0+XG5cdFx0RVhQQU5EX0FSR1VNRU5UUyhzb3VyY2VzKVxuXHRcdGlmIGJ1aWxkZXIub3B0aW9ucy50YXJnZXRcblx0XHRcdHRoZVRhcmdldCA9IGJ1aWxkZXIub3B0aW9ucy50YXJnZXRcblx0XHRlbHNlXG5cdFx0XHR0aGVUYXJnZXQgPSB0YXJnZXRcblx0XHRcdHNvdXJjZXMuc2hpZnQoKVxuXHRcdFxuXHRcdGV4dGVuZChidWlsZGVyLm9wdGlvbnMsIHRoZVRhcmdldCwgc291cmNlcylcblx0XG5cdGJ1aWxkZXIuaXNCYXNlID0gdHJ1ZSBpZiBpc0Jhc2Vcblx0YnVpbGRlci5vcHRpb25zID0ge31cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYnVpbGRlciwgbW9kaWZpZXJzKVxuXHRyZXR1cm4gYnVpbGRlclxuXG5cbm1vZGlmaWVycyA9IFxuXHQnZGVlcCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5kZWVwID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J293bic6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5vd24gPSB0cnVlXG5cdFx0cmV0dXJuIF9cblxuXHQnYWxsb3dOdWxsJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLmFsbG93TnVsbCA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdudWxsRGVsZXRlcyc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdF8ub3B0aW9ucy5udWxsRGVsZXRlcyA9IHRydWVcblx0XHRyZXR1cm4gX1xuXG5cdCdjb25jYXQnOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRfLm9wdGlvbnMuY29uY2F0ID0gdHJ1ZVxuXHRcdHJldHVybiBfXG5cblx0J2Nsb25lJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0Xy5vcHRpb25zLnRhcmdldCA9IHt9XG5cdFx0cmV0dXJuIF9cblxuXHQnbm90RGVlcCc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLm5vdERlZXAgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdkZWVwT25seSc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLmRlZXBPbmx5ID0gbm9ybWFsaXplS2V5cyhrZXlzKVx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXHQna2V5cyc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAoa2V5cyktPlxuXHRcdFx0Xy5vcHRpb25zLmtleXMgPSBub3JtYWxpemVLZXlzKGtleXMpXHRcdFx0XG5cdFx0XHRyZXR1cm4gX1xuXG5cdCdub3RLZXlzJzogZ2V0OiAoKS0+XG5cdFx0XyA9IGlmIEBpc0Jhc2UgdGhlbiBuZXdCdWlsZGVyKCkgZWxzZSBAXG5cdFx0cmV0dXJuIChrZXlzKS0+XG5cdFx0XHRfLm9wdGlvbnMubm90S2V5cyA9IG5vcm1hbGl6ZUtleXMoa2V5cylcdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblx0J3RyYW5zZm9ybSc6IGdldDogKCktPlxuXHRcdF8gPSBpZiBAaXNCYXNlIHRoZW4gbmV3QnVpbGRlcigpIGVsc2UgQFxuXHRcdHJldHVybiAodHJhbnNmb3JtKS0+XG5cdFx0XHRpZiB0eXBlb2YgdHJhbnNmb3JtIGlzICdmdW5jdGlvbidcblx0XHRcdFx0Xy5vcHRpb25zLmdsb2JhbFRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuXHRcdFx0ZWxzZSBpZiB0cmFuc2Zvcm0gYW5kIHR5cGVvZiB0cmFuc2Zvcm0gaXMgJ29iamVjdCdcblx0XHRcdFx0Xy5vcHRpb25zLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIF9cblxuXG5cdCdmaWx0ZXInOiBnZXQ6ICgpLT5cblx0XHRfID0gaWYgQGlzQmFzZSB0aGVuIG5ld0J1aWxkZXIoKSBlbHNlIEBcblx0XHRyZXR1cm4gKGZpbHRlciktPlxuXHRcdFx0aWYgdHlwZW9mIGZpbHRlciBpcyAnZnVuY3Rpb24nXG5cdFx0XHRcdF8ub3B0aW9ucy5nbG9iYWxGaWx0ZXIgPSBmaWx0ZXJcblx0XHRcdGVsc2UgaWYgZmlsdGVyIGFuZCB0eXBlb2YgZmlsdGVyIGlzICdvYmplY3QnXG5cdFx0XHRcdF8ub3B0aW9ucy5maWx0ZXJzID0gZmlsdGVyXG5cdFx0XHRcblx0XHRcdHJldHVybiBfXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBuZXdCdWlsZGVyKHRydWUpXG5leHBvcnRzLnZlcnNpb24gPSBpbXBvcnQgJy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nIiwie1xuICBcIl9hcmdzXCI6IFtcbiAgICBbXG4gICAgICBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICAgICAgXCIvVXNlcnMvZGFuaWVsa2FsZW4vc2FuZGJveC9kYXRhX3RhYmxlXCJcbiAgICBdXG4gIF0sXG4gIFwiX2Zyb21cIjogXCJzbWFydC1leHRlbmRAMS43LjNcIixcbiAgXCJfaWRcIjogXCJzbWFydC1leHRlbmRAMS43LjNcIixcbiAgXCJfaW5CdW5kbGVcIjogZmFsc2UsXG4gIFwiX2ludGVncml0eVwiOiBcInNoYTUxMi1QVkVFVllERHp5eEtBMEdORkxjV1k2b0pTa1FLZGMxdzcxOGVRcEVIY051VFNXWXhESzM1R3poc0doTWtVVThsQklnU0VEYnQ1eDVwNDZwUnozQXViQT09XCIsXG4gIFwiX2xvY2F0aW9uXCI6IFwiL3NtYXJ0LWV4dGVuZFwiLFxuICBcIl9waGFudG9tQ2hpbGRyZW5cIjoge30sXG4gIFwiX3JlcXVlc3RlZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwidmVyc2lvblwiLFxuICAgIFwicmVnaXN0cnlcIjogdHJ1ZSxcbiAgICBcInJhd1wiOiBcInNtYXJ0LWV4dGVuZEAxLjcuM1wiLFxuICAgIFwibmFtZVwiOiBcInNtYXJ0LWV4dGVuZFwiLFxuICAgIFwiZXNjYXBlZE5hbWVcIjogXCJzbWFydC1leHRlbmRcIixcbiAgICBcInJhd1NwZWNcIjogXCIxLjcuM1wiLFxuICAgIFwic2F2ZVNwZWNcIjogbnVsbCxcbiAgICBcImZldGNoU3BlY1wiOiBcIjEuNy4zXCJcbiAgfSxcbiAgXCJfcmVxdWlyZWRCeVwiOiBbXG4gICAgXCIvXCIsXG4gICAgXCIvc2ltcGx5d2F0Y2hcIlxuICBdLFxuICBcIl9yZXNvbHZlZFwiOiBcImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL3NtYXJ0LWV4dGVuZC8tL3NtYXJ0LWV4dGVuZC0xLjcuMy50Z3pcIixcbiAgXCJfc3BlY1wiOiBcIjEuNy4zXCIsXG4gIFwiX3doZXJlXCI6IFwiL1VzZXJzL2RhbmllbGthbGVuL3NhbmRib3gvZGF0YV90YWJsZVwiLFxuICBcImF1dGhvclwiOiB7XG4gICAgXCJuYW1lXCI6IFwiZGFuaWVsa2FsZW5cIlxuICB9LFxuICBcImJyb3dzZXJcIjoge1xuICAgIFwiLi9kZWJ1Z1wiOiBcImRpc3Qvc21hcnQtZXh0ZW5kLmRlYnVnLmpzXCIsXG4gICAgXCIuL2Rpc3Qvc21hcnQtZXh0ZW5kLmpzXCI6IFwic3JjL2luZGV4LmNvZmZlZVwiXG4gIH0sXG4gIFwiYnJvd3NlcmlmeVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogW1xuICAgICAgXCJzaW1wbHlpbXBvcnQvY29tcGF0XCJcbiAgICBdXG4gIH0sXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc21hcnQtZXh0ZW5kL2lzc3Vlc1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImZhbGFmZWxcIjogXCJeMi4xLjBcIlxuICB9LFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVyZ2UvZXh0ZW5kIG9iamVjdHMgKHNoYWxsb3cvZGVlcCkgd2l0aCBnbG9iYWwvaW5kaXZpZHVhbCBmaWx0ZXJzIGFuZCBtb3JlIGZlYXR1cmVzXCIsXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJhZGdlLWdlblwiOiBcIl4xLjAuMlwiLFxuICAgIFwiYmx1ZWJpcmRcIjogXCJeMy40LjdcIixcbiAgICBcImNoYWlcIjogXCJeMy41LjBcIixcbiAgICBcImNvZmZlZS1yZWdpc3RlclwiOiBcIl4wLjEuMFwiLFxuICAgIFwiY29mZmVlaWZ5LWNhY2hlZFwiOiBcIl4yLjEuMVwiLFxuICAgIFwiZXh0ZW5kXCI6IFwiXjMuMC4xXCIsXG4gICAgXCJnb29nbGUtY2xvc3VyZS1jb21waWxlci1qc1wiOiBcIl4yMDE3MDYyNi4wLjBcIixcbiAgICBcIm1vY2hhXCI6IFwiXjMuMi4wXCIsXG4gICAgXCJzaW1wbHlpbXBvcnRcIjogXCJeNC4wLjAtczIxXCIsXG4gICAgXCJzaW1wbHl3YXRjaFwiOiBcIl4zLjAuMC1sMlwiLFxuICAgIFwidWdsaWZ5LWpzXCI6IFwiXjMuMC4yNFwiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsa2FsZW4vc21hcnQtZXh0ZW5kI3JlYWRtZVwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImV4dGVuZFwiLFxuICAgIFwiY2xvbmVcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwic2VsZWN0aXZlXCIsXG4gICAgXCJtZXJnZVwiLFxuICAgIFwiYXNzaWduXCIsXG4gICAgXCJwcm9wZXJ0aWVzXCJcbiAgXSxcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXG4gIFwibWFpblwiOiBcImRpc3Qvc21hcnQtZXh0ZW5kLmpzXCIsXG4gIFwibW9jaGFfb3B0c1wiOiBcIi11IHRkZCAtLWNvbXBpbGVycyBjb2ZmZWU6Y29mZmVlLXJlZ2lzdGVyIC0tc2xvdyAxMDAwIC0tdGltZW91dCA1MDAwXCIsXG4gIFwibmFtZVwiOiBcInNtYXJ0LWV4dGVuZFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWxrYWxlbi9zbWFydC1leHRlbmQuZ2l0XCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwibWtkaXIgLXAgZGlzdC87IG5wbSBydW4gYnVpbGQ6ZGVidWcgJiYgbnBtIHJ1biBidWlsZDpyZWxlYXNlXCIsXG4gICAgXCJidWlsZDpkZWJ1Z1wiOiBcInNpbXBseWltcG9ydCBidW5kbGUgc3JjL2luZGV4LmNvZmZlZSAtZCAtLXRhcmdldCBub2RlIC0tdW1kIHNtYXJ0LWV4dGVuZCA+IGRpc3Qvc21hcnQtZXh0ZW5kLmRlYnVnLmpzXCIsXG4gICAgXCJidWlsZDpyZWxlYXNlXCI6IFwic2ltcGx5aW1wb3J0IGJ1bmRsZSBzcmMvaW5kZXguY29mZmVlIC0tdGFyZ2V0IG5vZGUgLS11bWQgc21hcnQtZXh0ZW5kID4gZGlzdC9zbWFydC1leHRlbmQuanNcIixcbiAgICBcImNvdmVyYWdlXCI6IFwibnBtIHJ1biBjb3ZlcmFnZTpydW4gJiYgbnBtIHJ1biBjb3ZlcmFnZTpiYWRnZVwiLFxuICAgIFwiY292ZXJhZ2U6YmFkZ2VcIjogXCJiYWRnZS1nZW4gLWQgLmNvbmZpZy9iYWRnZXMvY292ZXJhZ2VcIixcbiAgICBcImNvdmVyYWdlOnJ1blwiOiBcImZvckNvdmVyYWdlPXRydWUgaXN0YW5idWwgY292ZXIgLS1kaXIgY292ZXJhZ2Ugbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gJG5wbV9wYWNrYWdlX21vY2hhX29wdHNcIixcbiAgICBcInBvc3RwdWJsaXNoXCI6IFwiZ2l0IHB1c2hcIixcbiAgICBcInBvc3R2ZXJzaW9uXCI6IFwibnBtIHJ1biBidWlsZCAmJiBnaXQgYWRkIC4gJiYgZ2l0IGNvbW1pdCAtYSAtbSAnW0J1aWxkXSdcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwiQ0k9MSBucG0gcnVuIHRlc3RcIixcbiAgICBcInRlc3RcIjogXCJtb2NoYSAkbnBtX3BhY2thZ2VfbW9jaGFfb3B0c1wiLFxuICAgIFwid2F0Y2hcIjogXCJzaW1wbHl3YXRjaCAtZyAnc3JjLyonIC14ICducG0gcnVuIGJ1aWxkOmRlYnVnIC1zJ1wiXG4gIH0sXG4gIFwic2ltcGx5aW1wb3J0XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBcImNvZmZlZWlmeS1jYWNoZWRcIixcbiAgICAgIFwiLi8uY29uZmlnL3RyYW5zZm9ybXMvbWFjcm9zXCJcbiAgICBdLFxuICAgIFwiZmluYWxUcmFuc2Zvcm1cIjogW1xuICAgICAgXCIuY29uZmlnL3RyYW5zZm9ybXMvbWluaWZ5LXN1cGVyXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktcmVuYW1lXCIsXG4gICAgICBcIi5jb25maWcvdHJhbnNmb3Jtcy9taW5pZnktc2ltcGxlXCJcbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjEuNy4zXCJcbn1cbiIsIi8qIVxuICogZXNjYXBlLWh0bWxcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTMgVEogSG9sb3dheWNodWtcbiAqIENvcHlyaWdodChjKSAyMDE1IEFuZHJlYXMgTHViYmVcbiAqIENvcHlyaWdodChjKSAyMDE1IFRpYW5jaGVuZyBcIlRpbW90aHlcIiBHdVxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBtYXRjaEh0bWxSZWdFeHAgPSAvW1wiJyY8Pl0vO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlSHRtbDtcblxuLyoqXG4gKiBFc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIHRoZSBnaXZlbiBzdHJpbmcgb2YgaHRtbC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGVzY2FwZSBmb3IgaW5zZXJ0aW5nIGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKSB7XG4gIHZhciBzdHIgPSAnJyArIHN0cmluZztcbiAgdmFyIG1hdGNoID0gbWF0Y2hIdG1sUmVnRXhwLmV4ZWMoc3RyKTtcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHZhciBlc2NhcGU7XG4gIHZhciBodG1sID0gJyc7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0SW5kZXggPSAwO1xuXG4gIGZvciAoaW5kZXggPSBtYXRjaC5pbmRleDsgaW5kZXggPCBzdHIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpbmRleCkpIHtcbiAgICAgIGNhc2UgMzQ6IC8vIFwiXG4gICAgICAgIGVzY2FwZSA9ICcmcXVvdDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vICZcbiAgICAgICAgZXNjYXBlID0gJyZhbXA7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyAnXG4gICAgICAgIGVzY2FwZSA9ICcmIzM5Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MDogLy8gPFxuICAgICAgICBlc2NhcGUgPSAnJmx0Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MjogLy8gPlxuICAgICAgICBlc2NhcGUgPSAnJmd0Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIGh0bWwgKz0gc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KTtcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaHRtbCArPSBlc2NhcGU7XG4gIH1cblxuICByZXR1cm4gbGFzdEluZGV4ICE9PSBpbmRleFxuICAgID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleClcbiAgICA6IGh0bWw7XG59XG4iLCIvKipcbiAqIGV2ZW50LWxpdGUuanMgLSBMaWdodC13ZWlnaHQgRXZlbnRFbWl0dGVyIChsZXNzIHRoYW4gMUtCIHdoZW4gZ3ppcHBlZClcbiAqXG4gKiBAY29weXJpZ2h0IFl1c3VrZSBLYXdhc2FraVxuICogQGxpY2Vuc2UgTUlUXG4gKiBAY29uc3RydWN0b3JcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2thd2FuZXQvZXZlbnQtbGl0ZVxuICogQHNlZSBodHRwOi8va2F3YW5ldC5naXRodWIuaW8vZXZlbnQtbGl0ZS9FdmVudExpdGUuaHRtbFxuICogQGV4YW1wbGVcbiAqIHZhciBFdmVudExpdGUgPSByZXF1aXJlKFwiZXZlbnQtbGl0ZVwiKTtcbiAqXG4gKiBmdW5jdGlvbiBNeUNsYXNzKCkgey4uLn0gICAgICAgICAgICAgLy8geW91ciBjbGFzc1xuICpcbiAqIEV2ZW50TGl0ZS5taXhpbihNeUNsYXNzLnByb3RvdHlwZSk7ICAvLyBpbXBvcnQgZXZlbnQgbWV0aG9kc1xuICpcbiAqIHZhciBvYmogPSBuZXcgTXlDbGFzcygpO1xuICogb2JqLm9uKFwiZm9vXCIsIGZ1bmN0aW9uKCkgey4uLn0pOyAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gKiBvYmoub25jZShcImJhclwiLCBmdW5jdGlvbigpIHsuLi59KTsgICAvLyBhZGQgb25lLXRpbWUgZXZlbnQgbGlzdGVuZXJcbiAqIG9iai5lbWl0KFwiZm9vXCIpOyAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGV2ZW50XG4gKiBvYmouZW1pdChcImJhclwiKTsgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCBhbm90aGVyIGV2ZW50XG4gKiBvYmoub2ZmKFwiZm9vXCIpOyAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXJcbiAqL1xuXG5mdW5jdGlvbiBFdmVudExpdGUoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFdmVudExpdGUpKSByZXR1cm4gbmV3IEV2ZW50TGl0ZSgpO1xufVxuXG4oZnVuY3Rpb24oRXZlbnRMaXRlKSB7XG4gIC8vIGV4cG9ydCB0aGUgY2xhc3MgZm9yIG5vZGUuanNcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBtb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gRXZlbnRMaXRlO1xuXG4gIC8vIHByb3BlcnR5IG5hbWUgdG8gaG9sZCBsaXN0ZW5lcnNcbiAgdmFyIExJU1RFTkVSUyA9IFwibGlzdGVuZXJzXCI7XG5cbiAgLy8gbWV0aG9kcyB0byBleHBvcnRcbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgb246IG9uLFxuICAgIG9uY2U6IG9uY2UsXG4gICAgb2ZmOiBvZmYsXG4gICAgZW1pdDogZW1pdFxuICB9O1xuXG4gIC8vIG1peGluIHRvIHNlbGZcbiAgbWl4aW4oRXZlbnRMaXRlLnByb3RvdHlwZSk7XG5cbiAgLy8gZXhwb3J0IG1peGluIGZ1bmN0aW9uXG4gIEV2ZW50TGl0ZS5taXhpbiA9IG1peGluO1xuXG4gIC8qKlxuICAgKiBJbXBvcnQgb24oKSwgb25jZSgpLCBvZmYoKSBhbmQgZW1pdCgpIG1ldGhvZHMgaW50byB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLm1peGluXG4gICAqIEBwYXJhbSB0YXJnZXQge1Byb3RvdHlwZX1cbiAgICovXG5cbiAgZnVuY3Rpb24gbWl4aW4odGFyZ2V0KSB7XG4gICAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHRhcmdldFtrZXldID0gbWV0aG9kc1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUub25cbiAgICogQHBhcmFtIHR5cGUge3N0cmluZ31cbiAgICogQHBhcmFtIGZ1bmMge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXRlfSBTZWxmIGZvciBtZXRob2QgY2hhaW5pbmdcbiAgICovXG5cbiAgZnVuY3Rpb24gb24odHlwZSwgZnVuYykge1xuICAgIGdldExpc3RlbmVycyh0aGlzLCB0eXBlKS5wdXNoKGZ1bmMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUtdGltZSBldmVudCBsaXN0ZW5lci5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUub25jZVxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZnVuYyB7RnVuY3Rpb259XG4gICAqIEByZXR1cm5zIHtFdmVudExpdGV9IFNlbGYgZm9yIG1ldGhvZCBjaGFpbmluZ1xuICAgKi9cblxuICBmdW5jdGlvbiBvbmNlKHR5cGUsIGZ1bmMpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgd3JhcC5vcmlnaW5hbExpc3RlbmVyID0gZnVuYztcbiAgICBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSkucHVzaCh3cmFwKTtcbiAgICByZXR1cm4gdGhhdDtcblxuICAgIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgICBvZmYuY2FsbCh0aGF0LCB0eXBlLCB3cmFwKTtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZnVuY3Rpb24gRXZlbnRMaXRlLnByb3RvdHlwZS5vZmZcbiAgICogQHBhcmFtIFt0eXBlXSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gW2Z1bmNdIHtGdW5jdGlvbn1cbiAgICogQHJldHVybnMge0V2ZW50TGl0ZX0gU2VsZiBmb3IgbWV0aG9kIGNoYWluaW5nXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9mZih0eXBlLCBmdW5jKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBsaXN0bmVycztcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGF0W0xJU1RFTkVSU107XG4gICAgfSBlbHNlIGlmICghZnVuYykge1xuICAgICAgbGlzdG5lcnMgPSB0aGF0W0xJU1RFTkVSU107XG4gICAgICBpZiAobGlzdG5lcnMpIHtcbiAgICAgICAgZGVsZXRlIGxpc3RuZXJzW3R5cGVdO1xuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKGxpc3RuZXJzKS5sZW5ndGgpIHJldHVybiBvZmYuY2FsbCh0aGF0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdG5lcnMgPSBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgdHJ1ZSk7XG4gICAgICBpZiAobGlzdG5lcnMpIHtcbiAgICAgICAgbGlzdG5lcnMgPSBsaXN0bmVycy5maWx0ZXIobmUpO1xuICAgICAgICBpZiAoIWxpc3RuZXJzLmxlbmd0aCkgcmV0dXJuIG9mZi5jYWxsKHRoYXQsIHR5cGUpO1xuICAgICAgICB0aGF0W0xJU1RFTkVSU11bdHlwZV0gPSBsaXN0bmVycztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoYXQ7XG5cbiAgICBmdW5jdGlvbiBuZSh0ZXN0KSB7XG4gICAgICByZXR1cm4gdGVzdCAhPT0gZnVuYyAmJiB0ZXN0Lm9yaWdpbmFsTGlzdGVuZXIgIT09IGZ1bmM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoICh0cmlnZ2VyKSBhbiBldmVudC5cbiAgICpcbiAgICogQGZ1bmN0aW9uIEV2ZW50TGl0ZS5wcm90b3R5cGUuZW1pdFxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gW3ZhbHVlXSB7Kn1cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgd2hlbiBhIGxpc3RlbmVyIHJlY2VpdmVkIHRoZSBldmVudFxuICAgKi9cblxuICBmdW5jdGlvbiBlbWl0KHR5cGUsIHZhbHVlKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgdHJ1ZSk7XG4gICAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgYXJnbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYXJnbGVuID09PSAxKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCh6ZXJvYXJnKTtcbiAgICB9IGVsc2UgaWYgKGFyZ2xlbiA9PT0gMikge1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2gob25lYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2gobW9yZWFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gISFsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gemVyb2FyZyhmdW5jKSB7XG4gICAgICBmdW5jLmNhbGwodGhhdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25lYXJnKGZ1bmMpIHtcbiAgICAgIGZ1bmMuY2FsbCh0aGF0LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9yZWFyZ3MoZnVuYykge1xuICAgICAgZnVuYy5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRMaXN0ZW5lcnModGhhdCwgdHlwZSwgcmVhZG9ubHkpIHtcbiAgICBpZiAocmVhZG9ubHkgJiYgIXRoYXRbTElTVEVORVJTXSkgcmV0dXJuO1xuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGF0W0xJU1RFTkVSU10gfHwgKHRoYXRbTElTVEVORVJTXSA9IHt9KTtcbiAgICByZXR1cm4gbGlzdGVuZXJzW3R5cGVdIHx8IChsaXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG4gIH1cblxufSkoRXZlbnRMaXRlKTtcbiIsImlzQXJyYXkgPSAodGFyZ2V0KS0+XG5cdEFycmF5LmlzQXJyYXkodGFyZ2V0KVxuXG5pc09iamVjdCA9ICh0YXJnZXQpLT5cblx0dGFyZ2V0IGFuZCBPYmplY3Q6OnRvU3RyaW5nLmNhbGwodGFyZ2V0KSBpcyAnW29iamVjdCBPYmplY3RdJyBvciBpc0FycmF5KHRhcmdldClcblxuc2hvdWxkRGVlcEV4dGVuZCA9IChvcHRpb25zLCB0YXJnZXQsIHBhcmVudEtleSktPlxuXHRpZiBvcHRpb25zLmRlZXBcblx0XHRpZiBvcHRpb25zLm5vdERlZXAgdGhlbiBub3Qgb3B0aW9ucy5ub3REZWVwW3RhcmdldF0gZWxzZSB0cnVlXG5cblx0ZWxzZSBpZiBvcHRpb25zLmRlZXBPbmx5XG5cdFx0b3B0aW9ucy5kZWVwT25seVt0YXJnZXRdIG9yIHBhcmVudEtleSBhbmQgc2hvdWxkRGVlcEV4dGVuZChvcHRpb25zLCBwYXJlbnRLZXkpXG5cblx0IyBlbHNlIGZhbHNlXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHRlbmQgPSAob3B0aW9ucywgdGFyZ2V0LCBzb3VyY2VzLCBwYXJlbnRLZXkpLT5cblx0dGFyZ2V0ID0ge30gaWYgbm90IHRhcmdldCBvciB0eXBlb2YgdGFyZ2V0IGlzbnQgJ29iamVjdCcgYW5kIHR5cGVvZiB0YXJnZXQgaXNudCAnZnVuY3Rpb24nXG5cblx0Zm9yIHNvdXJjZSBpbiBzb3VyY2VzIHdoZW4gc291cmNlP1xuXHRcdGZvciBrZXkgb2Ygc291cmNlXG5cdFx0XHRzb3VyY2VWYWx1ZSA9IHNvdXJjZVtrZXldXG5cdFx0XHR0YXJnZXRWYWx1ZSA9IHRhcmdldFtrZXldXG5cdFx0XHRcblx0XHRcdGNvbnRpbnVlIGlmIHNvdXJjZVZhbHVlIGlzIHRhcmdldCBvclxuXHRcdFx0XHRcdFx0c291cmNlVmFsdWUgaXMgdW5kZWZpbmVkIG9yXG5cdFx0XHRcdFx0XHQoc291cmNlVmFsdWUgaXMgbnVsbCBhbmQgbm90IG9wdGlvbnMuYWxsb3dOdWxsIGFuZCBub3Qgb3B0aW9ucy5udWxsRGVsZXRlcykgb3Jcblx0XHRcdFx0XHRcdChvcHRpb25zLmtleXMgYW5kIG5vdCBvcHRpb25zLmtleXNba2V5XSkgb3Jcblx0XHRcdFx0XHRcdChvcHRpb25zLm5vdEtleXMgYW5kIG9wdGlvbnMubm90S2V5c1trZXldKSBvclxuXHRcdFx0XHRcdFx0KG9wdGlvbnMub3duIGFuZCBub3Qgc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIG9yXG5cdFx0XHRcdFx0XHQob3B0aW9ucy5nbG9iYWxGaWx0ZXIgYW5kIG5vdCBvcHRpb25zLmdsb2JhbEZpbHRlcihzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpKSBvclxuXHRcdFx0XHRcdFx0KG9wdGlvbnMuZmlsdGVycyBhbmQgb3B0aW9ucy5maWx0ZXJzW2tleV0gYW5kIG5vdCBvcHRpb25zLmZpbHRlcnNba2V5XShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpKVxuXHRcdFx0XG5cdFx0XHRpZiBzb3VyY2VWYWx1ZSBpcyBudWxsIGFuZCBvcHRpb25zLm51bGxEZWxldGVzXG5cdFx0XHRcdGRlbGV0ZSB0YXJnZXRba2V5XVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0aWYgb3B0aW9ucy5nbG9iYWxUcmFuc2Zvcm1cblx0XHRcdFx0c291cmNlVmFsdWUgPSBvcHRpb25zLmdsb2JhbFRyYW5zZm9ybShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpXG5cdFx0XHRpZiBvcHRpb25zLnRyYW5zZm9ybXMgYW5kIG9wdGlvbnMudHJhbnNmb3Jtc1trZXldXG5cdFx0XHRcdHNvdXJjZVZhbHVlID0gb3B0aW9ucy50cmFuc2Zvcm1zW2tleV0oc291cmNlVmFsdWUsIGtleSwgc291cmNlKVxuXHRcblx0XHRcdHN3aXRjaFxuXHRcdFx0XHR3aGVuIG9wdGlvbnMuY29uY2F0IGFuZCBpc0FycmF5KHNvdXJjZVZhbHVlKSBhbmQgaXNBcnJheSh0YXJnZXRWYWx1ZSlcblx0XHRcdFx0XHR0YXJnZXRba2V5XSA9IHRhcmdldFZhbHVlLmNvbmNhdChzb3VyY2VWYWx1ZSlcblx0XHRcdFx0XG5cdFx0XHRcdHdoZW4gc2hvdWxkRGVlcEV4dGVuZChvcHRpb25zLCBrZXksIHBhcmVudEtleSkgYW5kIGlzT2JqZWN0KHNvdXJjZVZhbHVlKVxuXHRcdFx0XHRcdHN1YlRhcmdldCA9IGlmIGlzT2JqZWN0KHRhcmdldFZhbHVlKSB0aGVuIHRhcmdldFZhbHVlIGVsc2UgaWYgaXNBcnJheShzb3VyY2VWYWx1ZSkgdGhlbiBbXSBlbHNlIHt9XG5cdFx0XHRcdFx0dGFyZ2V0W2tleV0gPSBleHRlbmQob3B0aW9ucywgc3ViVGFyZ2V0LCBbc291cmNlVmFsdWVdLCBrZXkpXG5cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRhcmdldFtrZXldID0gc291cmNlVmFsdWVcblxuXG5cdHJldHVybiB0YXJnZXRcblxuXG5cblxuXG5cblxuIl19