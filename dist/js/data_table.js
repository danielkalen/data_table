(function(k){var d,l,h;h={tableOuterwrap:function(a){return"<div class='"+d.defaults.baseClass+"-outerwrap {{loading}} {{noResults}} "+(a.minWidth?"_hasMinWidth":"")+" "+(a.hasMobile?"{{mobileVersion}}":"")+" "+(a.cellsHavePadding?"_cellsHavePadding":"")+" '></div>"},table:function(a){return"<div class='"+d.defaults.baseClass+" alignment---"+a.alignment+" sortDirection---{{sortDirection}}'> <div class='"+d.defaults.baseClass+"-heading'> <div class='"+d.defaults.baseClass+"-heading-row'> <div class='"+
d.defaults.baseClass+"-heading-row-cell _expandButton'></div> </div> </div> <div class='"+d.defaults.baseClass+"-body'></div> </div>"},loading:function(){return"<div class='"+d.defaults.baseClass+"-loading {{isVisible}}'> <div class='"+d.defaults.baseClass+"-loading-innerwrap'> <div class='"+d.defaults.baseClass+"-loading-icon'></div> <div class='"+d.defaults.baseClass+"-loading-text'>Loading</div> </div> </div>"},noResults:function(a){var b,c,e;b=null!=(c=a.itemSingleLabel)?c:"Item";a=null!=(e=a.itemPluralLabel)?
e:b+"s";return"<div class='"+d.defaults.baseClass+"-noResults {{isVisible}}'> <div class='"+d.defaults.baseClass+"-noResults-innerwrap'> <div class='"+d.defaults.baseClass+"-noResults-icon'></div> <div class='"+d.defaults.baseClass+"-noResults-text'> <div class='"+d.defaults.baseClass+"-noResults-text-title'>No "+b+"s to Display</div> <div class='"+d.defaults.baseClass+"-noResults-text-subtitle'>There are no matching "+a+" for the search query you've typed.</div> </div> </div> </div>"},pageStatus:function(a){return"<div class='"+
d.defaults.baseClass+"-pageStatus "+(a.showPageStatus?"is_visible":"")+"'> Showing {{rowRange}} of {{totalRows}} </div>"},pagination:function(){return"<div class='"+d.defaults.baseClass+"-pagination {{hasExtra}} {{isVisible}}'> <div class='"+d.defaults.baseClass+"-pagination-item _paginationItem _back'> <div class='"+d.defaults.baseClass+"-pagination-item-text'></div> </div> <div class='"+d.defaults.baseClass+"-pagination-itemswrap _paginationItems'></div> <div class='"+d.defaults.baseClass+"-pagination-item _paginationItem _extraIndicator'> <div class='"+
d.defaults.baseClass+"-pagination-item-text'></div> <select class='"+d.defaults.baseClass+"-pagination-item-select'></select> </div> <div class='"+d.defaults.baseClass+"-pagination-item _paginationItem _next'> <div class='"+d.defaults.baseClass+"-pagination-item-text'></div> </div> </div>"},paginationItem:function(a){return"<div class='"+d.defaults.baseClass+"-pagination-item _paginationItem'> <div class='"+d.defaults.baseClass+"-pagination-item-text'>"+a.value+"</div> </div>"},headingCell:function(a){var b,
c,e,f,g;b=null!=(c=a.extraClasses)?c:"";g=a.slug;c=null!=(e=a.icon)?e:"";e=a.label;a=null!=(f=a.style)?f:"";return"<div class='"+d.defaults.baseClass+"-heading-row-cell "+b+" __"+g+"' data-slug='"+g+"' data-icon='"+c+"' "+a+"> <div class='"+d.defaults.baseClass+"-heading-row-cell-text'>"+e+"</div> </div>"},row:function(a){var b,c,e;e=a.rowID;b=a.cells;a=null!=(c=a.drilldown)?c:"";return"<div class='"+d.defaults.baseClass+"-body-row _tableRow {{drilldownOpen}}' data-row-id='"+e+"'> <div class='"+d.defaults.baseClass+
"-body-row-cell _expandButton'> <div class='"+d.defaults.baseClass+"-body-row-cell-expand'></div> </div> "+b+" <div class='"+d.defaults.baseClass+"-body-row-drilldown _tableRowDrilldown'> "+a+" </div> </div>"},rowCell:function(a){var b,c,e,f,g,m;c=null!=(b=a.extraClasses)?b:"";e=a.label;b=a.column;g=a.slug;m=a.value;a=null!=(f=a.style)?f:"";return"<div class='"+d.defaults.baseClass+"-body-row-cell __"+g+" "+c+"' data-slug='"+g+"' data-column='"+b+"' "+a+"> <div class='"+d.defaults.baseClass+"-body-row-cell-innerwrap' title='"+
e+"'>"+m+"</div> </div>"},searchField:function(a){a=a.search;return"<div class='"+d.defaults.baseClass+"-search "+(null!=a&&a.length?"is_visible":"")+"'> <select class='"+d.defaults.baseClass+"-search-select'></select> <input class='"+d.defaults.baseClass+"-search-input' /> <div class='"+d.defaults.baseClass+"-search-selectTrigger'></div> </div>"},ipDetails:function(a){var b,c;b=a.ipAddress;a=null!=(c=a.extra)?c:"";return"<div class='"+d.defaults.baseClass+"-ipDetails _ipDetails' data-ip='"+b+"'> <div class='"+
d.defaults.baseClass+"-ipDetails-trigger _ipDetails-trigger'></div> <div class='"+d.defaults.baseClass+"-ipDetails-content'>Loading IP Details</div> </div> "+a},ipDetailsItem:function(a){return"<div class='"+d.defaults.baseClass+"-ipDetails-content-item'> <div class='"+d.defaults.baseClass+"-ipDetails-content-item-label'>"+a.label+": </div> <div class='"+d.defaults.baseClass+"-ipDetails-content-item-value'>"+a.value+"</div> </div>"},fields:function(a){return"<div class='"+d.defaults.baseClass+"-fieldGroup'>"+
a.fields+"</div>"},fieldsItem:function(a){return"<div class='"+d.defaults.baseClass+"-fieldGroup-item'> <div class='"+d.defaults.baseClass+"-fieldGroup-item-label'>"+a.label+": </div> <div class='"+d.defaults.baseClass+"-fieldGroup-item-value'>"+a.value+"</div> </div>"},button:function(a){var b,c,e;b=a.action;c=null!=(e=a.icon)?e:"";return"<div class='"+d.defaults.baseClass+"-button _actionButton "+(a.isMulti?"_isMulti":"")+"' data-action='"+b+"'> <div class='"+d.defaults.baseClass+"-button-icon'>"+
c+"</div> </div>"},actions:function(a){return"<div class='"+d.defaults.baseClass+"-actions'> <div class='"+d.defaults.baseClass+"-actions-popup'>"+a.actions+"</div> </div>"},actionsOverlay:function(){return"<div class='"+d.defaults.baseClass+"-actions-overlay'></div>"},actionsItem:function(a){var b,c,e,f;b=a.action;c=a.icon;e=a.label;a=null!=(f=a.customIconStyle)?f:"";return"<div class='"+d.defaults.baseClass+"-actions-popup-item _actionButton _subActionButton' data-action='"+b+"' style='"+a+"'> <div class='"+
d.defaults.baseClass+"-actions-popup-item-icon'>"+c+"</div> <div class='"+d.defaults.baseClass+"-actions-popup-item-text'>"+e+"</div> </div>"}};l={compareValues:function(a,b){switch(!1){case typeof a!==typeof b:return a===b;case "string"!==typeof a:return a===""+b;case "number"!==typeof a:return a===parseFloat(b)}},toggleActionsPopup:function(a){var b,c;(b=a.data("isOpen"))?(a.data("overlay").remove(),a.removeClass("is_visible")):(a.data("overlay",c=k(h.actionsOverlay())),a.addClass("is_visible"),
c.appendTo(document.body).one("click",function(){return l.toggleActionsPopup(a)}));return a.data("isOpen",!b)},getBreakdownTotal:function(a,b){switch(!1){case 0!==b.length:return 0;default:return b.map(function(b){return a[b]}).reduce(function(a,b){return a+b})}},normalizeColumns:function(a){var b,c,e,f,g;if(Array.isArray(a))if(g={},"string"===typeof a[0])for(b=0,c=a.length;b<c;b++)e=a[b],g[e]={label:e};else{if(null!=(b=a[0])&&b.label)for(c=0,f=a.length;c<f;c++)b=a[c],g[b.label]=b}else g=a;for(e in g)b=
g[e],null==b.label&&(b.label=e),null==b.slug&&(b.slug=b.label.toLowerCase().replace(/\W/g,"_")),null==b.type&&(b.type="text");return g},getBreakdownBarWidth:function(a,b){return a.breakdownBarTotal/b*82},genHeaderCellStyle:function(a){var b;b="";a.width&&(b+="max-width: "+a.width+";");0<=a.grow&&(b+="flex-grow: "+a.grow+";");return b?"style='"+b+"'":""},genCellStyle:function(a){var b,c;c="";a.width&&(c+="max-width: "+a.width+";");a.color&&(b=this.colorMapping(a.color,a.colorType),c+="color: "+b+";");
a.customStyle&&(c+=a.customStyle);0<=a.grow&&(c+="flex-grow: "+a.grow+";");return c?"style='"+c+"'":""},genCellClassname:function(a){var b;b="";a.sortable&&(b+=" _isSortable {{currentSort}}");a.noLabel&&(b+=" _noLabel");a.isLink&&(b+=" _isLink");a.noEllipsis&&(b+=" _noEllipsis");a.showOverflow&&(b+=" _showOverflow");a.color&&(b+=" _hasColor");if("button"===a.type||"actions"===a.type)b+=" _isButton",a.alwaysCenter=!0;"breakdownBar"===a.type&&(b+=" _isBreakdownBar");"ipDetails"===a.type&&(b+=" _isIpDetails");
"fields"===a.type&&(b+=" _isFields");a.alwaysCenter&&(b+=" _alwaysCenter");return b},colorMapping:function(a,b){null==b&&(b="name");switch(b){case "browser":switch(!1){case !a.includes("Firefox"):return this.colorMapping("orange");case !a.includes("Chrome"):return this.colorMapping("green");case !a.includes("Safari"):return this.colorMapping("blue");case !a.includes("Mobile Safari"):return this.colorMapping("blue");case !a.includes("IE"):return this.colorMapping("lightblue");case !a.includes("Edge"):return this.colorMapping("lightblue");
case !a.includes("Opera"):return this.colorMapping("red");case !a.includes("Android"):return this.colorMapping("lightgreen");default:return"unknown"}case "platform":switch(a){case "Mac OS X":return this.colorMapping("black");case "Windows":return this.colorMapping("lightblue");case "Windows Phone":return this.colorMapping("purple");case "Linux":return this.colorMapping("darkyellow");case "iOS":return this.colorMapping("black");case "Android":return this.colorMapping("lightgreen");default:return"unknown"}case "satisfaction":switch(a){case "Excellent":return this.colorMapping("green");
case "Normal":return this.colorMapping("yellow");case "Poor":return this.colorMapping("red");default:return"unknown"}case "name":switch(a){case "orange":return"#ee6f0e";case "green":return"#00ad09";case "blue":return"#4788f3";case "yellow":return"#eab71e";case "red":return"#cc4820";case "black":return"#181818";case "purple":return"#a020ba";case "lightblue":return"#0cb3ee";case "lightgreen":return"#78c257";case "darkyellow":return"#e8ac01"}break;default:return a}},iconMapping:function(a,b){switch(b){case "browser":switch(!1){case !a.includes("Firefox"):return"#";
case !a.includes("Chrome"):return"%";case !a.includes("Safari"):return"$";case !a.includes("Mobile Safari"):return"$";case !a.includes("IE"):return"&";case !a.includes("Edge"):return"&";case !a.includes("Opera"):return'"';case !a.includes("Android"):return"&#039;";default:return"4"}case "device":switch(a){case "Desktop":return"!";case "Tablet":return"7";case "Mobile":return"6";default:return"4"}case "platform":switch(a){case "Mac OS X":return"*";case "Windows":return")";case "Windows Phone":return")";
case "Linux":return"+";case "iOS":return"*";case "Android":return"&#039;";default:return"4"}case "satisfaction":switch(a){case "Excellent":return"[";case "Normal":return"@";case "Poor":return"?";default:return"4"}default:return"4"}}};d=function(a,b){this.container=a;null==b&&(b={});this.options=k.extend({},d.defaults,b);this.state={loading:!0,noResults:!1};this.visibleRows=[];this.availableRows=[];this.allRows=[];this.largestBreakdownTotal=0;this.searchParam=this.searchCriteria="";this.sortBy=this.options.sortBy?
this.options.sortBy:"";this.sortDirection=-1;this.currentPage=1;this.els={};this.els.tableOuterwrap=k(h.tableOuterwrap(this.options));this.els.table=k(h.table(this.options)).appendTo(this.els.tableOuterwrap);this.els.tableHeading=this.els.table.children().first().children();this.els.tableBody=this.els.table.children().last();this.els.noResultsMessage=k(h.noResults(this.options)).appendTo(this.els.tableOuterwrap);this.els.loadingMessage=k(h.loading()).appendTo(this.els.tableOuterwrap);this.els.pageStatus=
k(h.pageStatus(this.options)).appendTo(this.els.tableOuterwrap);this.els.pagination=k(h.pagination()).appendTo(this.els.tableOuterwrap);this.els.paginationItems=this.els.pagination.children("._paginationItems");this.els.paginationExtra=this.els.pagination.children("._extraIndicator");this.els.paginationExtraSelect=this.els.paginationExtra.children("select");this.els.paginationExtraText=this.els.paginationExtraSelect.prev();this.els.searchField=k(h.searchField(this.options)).insertBefore(this.els.table);
this.els.searchParam=this.els.searchField.children("select");this.els.searchCriteria=this.els.searchField.children("input");this.els.tableHeading.append(this.generateHeadingColumns());this.els.tableOuterwrap.appendTo(this.container);this.els.table.data("DataTable",this);this.options.minWidth&&(this.els.table[0].style.minWidth=this.options.minWidth+"px");Promise.bind(this).then(this.attachEvents).then(this.attachBindings).then(this.loadData);return this};d.prototype.fetchData=function(){this.state.loading=
!0;return this.options.data().then(function(a){return function(b){a.state.loading=!1;return Promise.resolve(b)}}(this))};d.prototype.setData=function(a){if(Array.isArray(a))return this.allRows=a};d.prototype.loadData=function(){var a,b,c,e;if(this.allRows.length)for(c=this.allRows,a=0,b=c.length;a<b;a++)e=c[a],this.unprocessRow(e);return this.fetchData().then(function(a){return function(b){return a.setData(b)}}(this))};d.prototype.calcPageCount=function(a){this.pageCountReal=Math.ceil(a.length/this.options.perPage);
return this.pageCount=this.pageCountReal>this.options.pageCountMax?this.options.pageCountMax:this.pageCountReal};d.prototype.calcPercentageString=function(a,b,c){var e,f,d;b=this.options.percentage[b];e=b[0];f=b[2];d=b[1];b=function(){switch(d){case "*":return c[e]*c[f];case "/":return c[e]/c[f];case "+":return c[e]+c[f];case "-":return c[e]-c[f]}}();Infinity===b&&(b=0);b=convertToPercent(b);return a+" ("+b+")"};d.prototype.sortRows=function(a,b){var c,e;null==b&&(b=this.options.sortBy);switch(!1){case "+"!==
b:return a;case "-"!==b:return null!=a?a.slice().reverse():void 0;case !this.options.columns[b]:return c=this.options.columns[b].sortFn,e=this.options.columns[b].rawValueFormatter,a.slice().sort(c||function(a){return function(c,d){var f,g;f=e?e(c[b]):c[b];g=e?e(d[b]):d[b];switch(!1){case !(f>g):return a.sortDirection;case !(f<g):return-1*a.sortDirection;default:return 0}}}(this));default:return a}};d.prototype.setVisiblePage=function(a){var b,c,e,d;a--;d=this.availableRows.slice(a*this.options.perPage,
a*this.options.perPage+this.options.perPage);e=this.visibleRows.slice();a=0;for(b=e.length;a<b;a++)c=e[a],c.visible=!1;this.visibleRows.length=0;return this.visibleRows.push.apply(this.visibleRows,d)};d.prototype.setPageIndicator=function(a){var b;"..."===a&&(a=1);a=a>this.options.pageCountMax?this.options.pageCountMax:a-1;b=this.els.pagination.find("._paginationItem").slice(1,-1);a=b.eq(a);a.addClass("current");return b.not(a).removeClass("current")};d.prototype.processRow=function(a){a.processed||
(this.generateRow(a),SimplyBind("visible",{updateEvenIfSame:!0}).of(a).to(function(b){return function(c,e){if(c){if(a.el.appendTo(b.els.tableBody),b.hasBreakdownBar&&!a.updatedBreakdownWidth&&c!==e)return a.breakdownBarWidth=l.getBreakdownBarWidth(a,b.largestBreakdownTotal)}else return a.el.detach()}}(this)),this.hasBreakdownBar&&a.breakdownBarEl.length&&SimplyBind("largestBreakdownTotal").of(this).to("updatedBreakdownWidth").of(a).transform(function(){return a.visible?!0:!1}).and.to("breakdownBarWidth").of(a).transform(function(b){return function(){return l.getBreakdownBarWidth(a,
b.largestBreakdownTotal)}}(this)).chainTo("width").of(a.breakdownBarEl[0].style).transform(function(a){return a+"%"}).and.to(function(b){return function(){var b,e,d,g,m;m=a.drilldownEls;d=e=0;for(g=m.length;e<g;d=++e)b=m[d],d=l.getBreakdownBarWidth(a.drilldown[d],a.drilldown.largestBreakdownTotal),null!=(b=k(b).children(".is_breakdown_bar").children().children()[0])&&(b.style.width=d+"%")}}(this)).conditionAll(function(){return a.visible}),a.processed=!0);return a};d.prototype.unprocessRow=function(a){if(a.processed)return SimplyBind.unBindAll(a,
!0),this.hasBreakdownBar&&a.breakdownBarEl[0]&&SimplyBind.unBindAll(a.breakdownBarEl[0].style),a.el.remove(),delete a.el,delete a.drilldownEls,delete a.visible,delete a.breakdownBarEl,delete a.processed};d.prototype.reRenderRow=function(a){return this.generateRow(a)};d.prototype.generateRow=function(a){var b,c;c=a.el;b=a.el=k(this.generateRowMarkup(a));c&&c.replaceWith(b);a.drilldownEls=a.el.children("._tableRowDrilldown").children();a.breakdownBarEl=this.hasBreakdownBar?a.el.children(".isBreakdownBar").children().children():
void 0;c||(a.visible=!1);a.drilldownOpen=!1;a.el.data("row",a);a.drilldown&&(this.els.table.addClass("isExpandingTable"),this.hasBreakdownBar&&(a.drilldown.largestBreakdownTotal=Math.max.apply(null,a.drilldown.map(function(a){return a.breakdownBarTotal}))));return SimplyBind("drilldownOpen").of(a).to("className.drilldownOpen").of(a.el).transform(function(a){return a?"drilldown_is_open":""})};d.prototype.generateRowMarkup=function(a,b){var c;c=!!b;return h.row({rowID:c?b[this.options.uniqueID]:a[this.options.uniqueID],
drilldown:c?"":a.drilldown?function(b){return function(){var c,e,d,h,k;c="";k=a.drilldown;d=0;for(h=k.length;d<h;d++)e=k[d],c+=b.generateRowMarkup(e,a);return c}}(this)():void 0,cells:function(b){return function(){var c,e,d,k,n;n="";k=b.options.columns;for(d in k)e=k[d],c=a[d],b.options.percentage[d]&&(c=b.calcPercentageString(c,d,a)),n+=h.rowCell({label:"string"===typeof c?c:"",column:d,slug:e.slug,extraClasses:l.genCellClassname(e),style:l.genCellStyle(e),value:function(){switch(!1){case "fields"!==
e.type:return b.generateInlineFields(c,a,e);case "ipDetails"!==e.type:return b.generateIpDetails(c,a,e);case "breakdownBar"!==e.type:return b.generateBreakdownBar(c,a,e);case "button"!==e.type:return b.generateButton(e.action||c,e.buttonIcon||e.icon);case "actions"!==e.type:return b.generateActions(e,a,e);case !e.isLink:return"<a href='"+c+"' target='_blank'>"+c+"</a>";default:return e.formatter?e.formatter(c,a,e):c}}()});return n}}(this)()})};d.prototype.generateHeadingColumns=function(){var a,b;
this.options.columns=l.normalizeColumns(this.options.columns);(function(){var c,e;c=this.options.columns;e=[];for(b in c)a=c[b],e.push("breakdownBar"===a.type);return e}).call(this)&&(this.hasBreakdownBar=!0);return Object.keys(this.options.columns).map(function(b){return function(c){a=b.options.columns[c];return h.headingCell({slug:a.slug,icon:a.icon,label:a.label,style:l.genHeaderCellStyle(a),extraClasses:l.genCellClassname(a)})}}(this)).join("")};d.prototype.generateBreakdownBar=function(a,b,c){var e,
d;e=this.legend||Object.keys(a);return(b.breakdownBarTotal=d=this.getBreakdownTotal(a,e))?h.breakdownBar({total:d,totalFormatted:c.valueFormat?c.valueFormat(d):d,bars:function(){var b,c,f,k;b="";c=0;for(k=e.length;c<k;c++)f=e[c],f=a[f],b+=h.block_table_body_row_cell_breakdown_bar.replace("{{width}}",f/d*100);return b}(),hoverBox:function(){return h.block_table_body_row_cell_breakdown_hoverbox.replace("{{rows}}",function(){var b;b="";e.forEach(function(e,d){return b+=h.block_table_body_row_cell_breakdown_hoverbox_row.replace("{{color}}",
customColors(d)).replace("{{key}}",e).replace("{{value}}",c.valueFormat?c.valueFormat(a[e]):a[e])});return b})}()}):"N/A"};d.prototype.generateInlineFields=function(a){return h.fields({fields:function(){var b,c;if("object"!==typeof a)return"";var e;e=[];for(b in a)c=a[b],e.push(h.fieldsItem({label:b,value:c}));return e.join("")}()})};d.prototype.generateButton=function(a,b,c){return h.button({action:a,icon:b,isMulti:c})};d.prototype.generateActions=function(a){var b;null==a.actions&&(a.actions="multiActions");
b=this.generateButton(a.actions,a.buttonIcon||a.icon,!0);a=h.actions({actions:function(a){return function(){var b;return a.options.actions?function(){var a,c,e,d;e=this.options.actions;d=[];a=0;for(c=e.length;a<c;a++)b=e[a],d.push(h.actionsItem(b));return d}.call(a).join(""):""}}(this)()});return b+a};d.prototype.generateIpDetails=function(a,b,c){return h.ipDetails({ipAddress:a,extra:"function"===typeof c.extraMarkup?c.extraMarkup(a,b):void 0})};d.prototype.attachEvents=function(){this.els.pagination.on("click",
"._paginationItem",function(a){return function(b){var c,e,d;b=k(b.currentTarget);c=b.hasClass("_back");d=b.hasClass("_next");e=b.hasClass("_extraIndicator");if(c){if(1!==a.currentPage)return a.currentPage--}else if(d){if(a.currentPage!==a.pageCountReal)return a.currentPage++}else if(!e)return b=parseFloat(b.children().html()),a.currentPage=b}}(this));this.els.tableHeading.on("click","._isSortable",function(a){return function(b){return a.sortBy=b.currentTarget.children[0].textContent}}(this));this.els.tableBody.on("click",
"._actionButton",function(a){return function(b){var c,e,d;c=k(b.currentTarget);if(c.hasClass("_isMulti"))return l.toggleActionsPopup(c.next().children());e=c.closest("._tableRow");b=c.data("action");d=e.data("row-id");e.data("index");e=d?a.allRows.find(function(b){return l.compareValues(b[a.options.uniqueID],d)}):void 0;null==e&&(e=d);c.hasClass("_subActionButton")&&l.toggleActionsPopup(c.parent());return a.els.table.trigger("action."+b,e)}}(this));this.els.tableBody.on("click","._expandButton",function(a){return function(a){var b;
a=k(a.currentTarget).closest("tr");b=a.data("row-id");a.siblings(".is_sub").filter(function(){return this.dataset.rowId===b}).toggleClass("is_hidden");return a.toggleClass("expanded")}}(this));this.els.tableBody.on("mouseover","._ipDetails-trigger",function(a){return function(b){var c,e,d;e=k(b.currentTarget);d=e.parent();c=e.next();c.next();b=d.data("ip");if(!e.hasClass("_isReady"))return a.options.ipDataFetcher(b).then(function(a){var b,e;if(a){var f;f=[];for(b in a)e=a[b],f.push(h.ipDetailsItem({label:b,
value:e}));c.html(f.join(""));return d.addClass("_isReady")}})}}(this));return Promise.resolve()};d.prototype.attachBindings=function(){SimplyBind.settings.trackArrayChildren=!1;SimplyBind("noResults").of(this.state).to("className.isVisible").of(this.els.noResultsMessage).transform(function(a){return function(b){return b&&!a.state.loading?"is_visible":""}}(this)).and.to("className.noResults").of(this.els.tableOuterwrap).transform(function(a){return function(b){return b&&!a.state.loading?"_noResults":
""}}(this));SimplyBind("loading").of(this.state).to("className.isVisible").of(this.els.loadingMessage).transform(function(a){return a?"is_visible":""}).and.to("className.loading").of(this.els.tableOuterwrap).transform(function(a){return function(a){return a?"_loading":""}}(this)).and.to(function(a){return function(b){return b?a.state.noResults=!1:a.state.noResults=!a.visibleRows.length}}(this));this.options.hasMobile&&(this.windowWidth=window.innerWidth,SimplyBind(0).ofEvent("resize").of(window).to(function(a){return function(){return a.windowWidth=
window.innerWidth}}(this)),SimplyBind("windowWidth").of(this).to("className.mobileVersion").of(this.els.tableOuterwrap).transform(function(a){return function(b){return b<=a.options.mobileWidth?"_mobileVersion":""}}(this)));SimplyBind(this.visibleRows).to(function(a){return function(b,c){var e,d,g;if(null!=c&&c.length)for(e=0,d=c.length;e<d;e++)g=c[e],g.visible=!1;e=0;for(d=b.length;e<d;e++)g=b[e],a.processRow(g),g.visible=!0;return a.state.noResults=!b.length}}(this)).and.to(function(a){return function(b){var c,
e,d,g;if(a.hasBreakdownBar){c=0;for(d=b.length;c<d;c++)if(g=b[c],g.breakdownBarTotal>e||"undefined"===typeof e||null===e)e=g.breakdownBarTotal;return a.largestBreakdownTotal=e||0}}}(this)).and.to("textContent.rowRange").of(this.els.pageStatus).transform(function(a){return function(b){return a.availableRows.indexOf(b[0])+1+"-"+(a.availableRows.indexOf(b.slice(-1)[0])+1)}}(this));SimplyBind("allRows").of(this).to(function(a){return function(b){a.searchCriteria="";a.currentPage=1;a.state.noResults=!b.length;
return a.sortBy===a.options.sortBy?(a.sortBy="",a.sortBy=a.options.sortBy):a.sortBy=""}}(this));SimplyBind("availableRows",{updateOnBind:!1,updateEvenIfSame:!0}).of(this).to(function(a){return function(b){return a.calcPageCount(b)}}(this)).and.to("textContent.totalRows").of(this.els.pageStatus).transform(function(a){return a.length});SimplyBind("pageCount").of(this).to("innerHTML").of(this.els.paginationItems).transform(function(a){var b,c,d;c="";for(d=b=1;1<=a?b<=a:b>=a;d=1<=a?++b:--b)0!==d&&(c+=
h.paginationItem({value:d}));return c}).and.to("className.isVisible").of(this.els.pagination).transform(function(a){return 1<a?"is_visible":""});SimplyBind("pageCountReal").of(this).to("innerHTML").of(this.els.paginationExtraSelect).transform(function(a){return function(b){var c,d,f,g;if(b<=a.options.pageCountMax)return"";f="<option>...</option>";for(d=c=g=a.options.pageCountMax+1;g<=b?c<=b:c>=b;d=g<=b?++c:--c)f+="<option>"+d+"</option>";return f}}(this)).and.to("className.hasExtra").of(this.els.pagination).transform(function(a){return function(b){return b>
a.options.pageCountMax?"has_extra":""}}(this));SimplyBind("value",{updateOnBind:!1}).of(this.els.paginationExtraSelect).to("innerHTML").of(this.els.paginationExtraText).and.to("currentPage").of(this);SimplyBind("currentPage",{updateEvenIfSame:!0}).of(this).transformSelf(function(a){return function(b){b="..."===b?1:parseFloat(b);return b>a.pageCountReal?a.pageCountReal:b}}(this)).to("value").of(this.els.paginationExtraSelect).transform(function(a){return function(b){return b>a.options.pageCountMax?
b:"..."}}(this)).and.to(function(a){return function(b){a.setVisiblePage(b);return a.setPageIndicator(b)}}(this));this.options.search.length&&(this.searchParam=this.options.search[0],SimplyBind("search").of(this.options).to("innerHTML").of(this.els.searchParam).transform(function(a){return a.map(function(a){return"<option>"+a+"</option>"}).join("")}),SimplyBind("value").of(this.els.searchParam).to("searchParam").of(this).pipe("attr:placeholder").of(this.els.searchCriteria).transform(function(a){return"Search by "+
a}));SimplyBind("value").of(this.els.searchCriteria).to("searchCriteria",{updateEvenIfSame:!0}).of(this).bothWays().chainTo(function(a){return function(b){var c,d,f;d=a.allRows;f=a.options.columns[a.searchParam];b&&(f||null!=(null!=(c=a.allRows[0])?c[a.searchParam]:void 0))&&(d=a.allRows.filter(function(c){c=null!=f&&f.rawValueFormatter?f.rawValueFormatter(c[a.searchParam]):c[a.searchParam];return null!=c?c.toString().toLowerCase().includes(b.toLowerCase()):void 0}));a.availableRows=d;return a.currentPage=
1}}(this));SimplyBind("sortBy",{updateEvenIfSame:!0,updateOnBind:!1},!0).of(this).to(function(a){return function(b,c){if(b||c)return a.sortDirection=b===c&&c?-1*a.sortDirection:-1,a.availableRows=a.sortRows(a.availableRows,b?b:null),a.currentPage=1}}(this));this.els.tableHeading.children("._isSortable").length&&SimplyBind("sortBy",{updateOnBind:!0}).of(this).to("multi:className.currentSort").of(this.els.tableHeading.children("._isSortable")).transform(function(a,b,c){return a===c.children[0].textContent?
"_currentSort":""});SimplyBind("sortDirection").of(this).to("className.sortDirection").of(this.els.table).transform(function(a){return-1===a?"desc":"asc"});return Promise.resolve()};d.prototype.sortBy=function(a){};d.version="2.6.1";d.helpers=l;d.markup=h;d.defaults={perPage:20,pageCountMax:10,minWidth:0,mobileWidth:736,cellsHavePadding:!1,hasMobile:!0,columns:[],search:[],percentage:{},baseClass:"DataTable",showPageStatus:!0,sortBy:"",alignment:"left",actions:!1,ipDataFetcher:function(a){return new Promise(function(b){return k.get("http://ipinfo.io/"+
a,b,"JSON")})}};return window.DataTable=d})(jQuery);
