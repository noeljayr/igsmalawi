const eventFormTrigger = document.getElementById("events-form-trigger");
const adminOverlay = document.getElementById("admin-overlay");
const eventsForm = document.getElementById("events-form");
const closeEvents = document.getElementById("close-event-form");
const cancelEvents = document.getElementById("cancel-events-form");


const adminsTrigger = document.getElementById("admins-trigger");



const reportTrigger = document.getElementById("reported-trigger");
const reportedIssues = document.getElementById("report-issues");
const repClose = document.getElementById("close-reported");
const navreport = document.getElementById("nav-help-trigger");
const reportBadge = document.getElementById("reported-badge");
const noticBadgeAdmin = document.getElementById("notification-badge");


function openNotifications() {
  notifications.classList.add("dropdown-active");
  noticBadgeAdmin.style.display = "none";
}

eventFormTrigger.addEventListener("click", () => {
  adminOverlay.classList.add("admin-overlay-active");
  eventsForm.style.display = "flex";
});

closeEvents.addEventListener("click", () => {
  adminOverlay.classList.remove("admin-overlay-active");
  eventsForm.style.display = "none";
});





cancelEvents.addEventListener("click", () => {
  adminOverlay.classList.remove("admin-overlay-active");
   eventsForm.style.display = "none";
});

reportTrigger.addEventListener("click", () => {
  adminOverlay.classList.add("admin-overlay-active");
  reportedIssues.style.display = "flex";
  reportBadge.style.display = "none";
})

navreport.addEventListener("click", () => {
  adminOverlay.classList.add("admin-overlay-active");
  reportedIssues.style.display = "flex";
});

repClose.addEventListener("click", () => {
  adminOverlay.classList.remove("admin-overlay-active");
  reportedIssues.style.display = "none";
});





function sortTable(Table, col, dir) {
  var sortClass, i;

  // get previous sort column
  sortTable.sortCol = -1;
  sortClass = Table.className.match(/js-sort-\d+/);
  if (null != sortClass) {
    sortTable.sortCol = sortClass[0].replace(/js-sort-/, "");
    Table.className = Table.className.replace(
      new RegExp(" ?" + sortClass[0] + "\\b"),
      ""
    );
  }
  // If sort column was not passed, use previous
  if ("undefined" === typeof col) {
    col = sortTable.sortCol;
  }

  if ("undefined" !== typeof dir) {
    // Accept -1 or 'desc' for descending.  All else is ascending
    sortTable.sortDir = dir == -1 || dir == "desc" ? -1 : 1;
  } else {
    // sort direction was not passed, use opposite of previous
    sortClass = Table.className.match(/js-sort-(a|de)sc/);
    if (null != sortClass && sortTable.sortCol == col) {
      sortTable.sortDir = "js-sort-asc" == sortClass[0] ? -1 : 1;
    } else {
      sortTable.sortDir = 1;
    }
  }
  Table.className = Table.className.replace(/ ?js-sort-(a|de)sc/g, "");

  // update sort column
  Table.className += " js-sort-" + col;
  sortTable.sortCol = col;

  // update sort direction
  Table.className += " js-sort-" + (sortTable.sortDir == -1 ? "desc" : "asc");

  // get sort type
  if (col < Table.tHead.rows[Table.tHead.rows.length - 1].cells.length) {
    sortClass =
      Table.tHead.rows[Table.tHead.rows.length - 1].cells[col].className.match(
        /js-sort-[-\w]+/
      );
  }
  // Improved support for colspan'd headers
  for (
    i = 0;
    i < Table.tHead.rows[Table.tHead.rows.length - 1].cells.length;
    i++
  ) {
    if (
      col ==
      Table.tHead.rows[Table.tHead.rows.length - 1].cells[i].getAttribute(
        "data-js-sort-colNum"
      )
    ) {
      sortClass =
        Table.tHead.rows[Table.tHead.rows.length - 1].cells[i].className.match(
          /js-sort-[-\w]+/
        );
    }
  }
  if (null != sortClass) {
    sortTable.sortFunc = sortClass[0].replace(/js-sort-/, "");
  } else {
    sortTable.sortFunc = "string";
  }
  // Set the headers for the active column to have the decorative class
  Table.querySelectorAll(".js-sort-active").forEach(function (Node) {
    Node.className = Node.className.replace(/ ?js-sort-active\b/, "");
  });
  Table.querySelectorAll(
    '[data-js-sort-colNum="' + col + '"]:not(:empty)'
  ).forEach(function (Node) {
    Node.className += " js-sort-active";
  });

  // sort!
  var rows = [],
    TBody = Table.tBodies[0];

  for (i = 0; i < TBody.rows.length; i++) {
    rows[i] = TBody.rows[i];
  }
  if ("none" != sortTable.sortFunc) {
    rows.sort(sortTable.compareRow);
  }

  while (TBody.firstChild) {
    TBody.removeChild(TBody.firstChild);
  }
  for (i = 0; i < rows.length; i++) {
    TBody.appendChild(rows[i]);
  }
}

/**
 * Compare two table rows based on current settings
 *
 * @param RowA A TR DOM object
 * @param RowB A TR DOM object
 * @returns {number} 1 if RowA is greater, -1 if RowB, 0 if equal
 */
sortTable.compareRow = function (RowA, RowB) {
  var valA, valB;
  if ("function" != typeof sortTable[sortTable.sortFunc]) {
    sortTable.sortFunc = "string";
  }
  valA = sortTable[sortTable.sortFunc](RowA.cells[sortTable.sortCol]);
  valB = sortTable[sortTable.sortFunc](RowB.cells[sortTable.sortCol]);

  return valA == valB ? 0 : sortTable.sortDir * (valA > valB ? 1 : -1);
};

/**
 * Strip all HTML, no exceptions
 * @param html
 * @returns {string}
 */
sortTable.stripTags = function (html) {
  return html.replace(/<\/?[a-z][a-z0-9]*\b[^>]*>/gi, "");
};

/**
 * Helper function that converts a table cell (TD) to a comparable value
 * Converts innerHTML to a timestamp, 0 for invalid dates
 *
 * @param Cell A TD DOM object
 * @returns {Number}
 */
sortTable.date = function (Cell) {
  // If okDate library is available, Use it for advanced Date processing
  if (okDate) {
    var Date = okDate(sortTable.stripTags(Cell.innerHTML));
    return Date ? Date.getTime() : 0;
  } else {
    return new Date(sortTable.stripTags(Cell.innerHTML)).getTime() || 0;
  }
};

/**
 * Helper function that converts a table cell (TD) to a comparable value
 * Converts innerHTML to a JS Number object
 *
 * @param Cell A TD DOM object
 * @returns {Number}
 */
sortTable.number = function (Cell) {
  return Number(sortTable.stripTags(Cell.innerHTML).replace(/[^-\d.]/g, ""));
};

/**
 * Helper function that converts a table cell (TD) to a comparable value
 * Converts innerHTML to a lower case string for insensitive compare
 *
 * @param Cell A TD DOM object
 * @returns {String}
 */
sortTable.string = function (Cell) {
  return sortTable.stripTags(Cell.innerHTML).toLowerCase();
};

/**
 * Helper function that converts a table cell (TD) to a comparable value
 *
 * @param Cell A TD DOM object
 * @returns {String}
 */
sortTable.raw = function (Cell) {
  return Cell.innerHTML;
};

/**
 * Helper function that converts a table cell (TD) to a comparable value
 * Captures the last space-delimited token from innerHTML
 *
 * @param Cell A TD DOM object
 * @returns {String}
 */
sortTable.last = function (Cell) {
  return sortTable.stripTags(Cell.innerHTML).split(" ").pop().toLowerCase();
};

/**
 * Helper function that converts a table cell (TD) to a comparable value
 * Captures the value of the first childNode
 *
 * @param Cell A TD DOM object
 * @returns {String}
 */
sortTable.input = function (Cell) {
  for (var i = 0; i < Cell.children.length; i++) {
    if (
      "object" == typeof Cell.children[i] &&
      "undefined" != typeof Cell.children[i].value
    ) {
      return Cell.children[i].value.toLowerCase();
    }
  }

  return sortTable.string(Cell);
};

/**
 * Helper function that prevents sorting by always returning null
 *
 * @param Cell A TD DOM object
 * @returns null
 */
sortTable.none = function (Cell) {
  return null;
};

/**
 * Return the click handler appropriate to the specified Table and column
 *
 * @param Table Table to sort
 * @param col   Column to sort by
 * @returns {Function} Click Handler
 */
sortTable.getClickHandler = function (Table, col) {
  return function () {
    sortTable(Table, col);
  };
};

/**
 * Attach sortTable() calls to table header cells' onclick events
 * If the table(s) do not have a THead node, one will be created around the
 *  first row
 */
sortTable.init = function () {
  var THead, Tables, Handler;
  if (document.querySelectorAll) {
    Tables = document.querySelectorAll("table.user-table");
  } else {
    Tables = document.getElementsByTagName("table");
  }

  for (var i = 0; i < Tables.length; i++) {
    // Because IE<8 doesn't support querySelectorAll, skip unclassed tables
    if (
      !document.querySelectorAll &&
      null === Tables[i].className.match(/\buser-table\b/)
    ) {
      continue;
    }

    // Prevent repeat processing
    if (Tables[i].attributes["data-user-table"]) {
      continue;
    }

    // Ensure table has a tHead element
    if (!Tables[i].tHead) {
      THead = document.createElement("thead");
      THead.appendChild(Tables[i].rows[0]);
      Tables[i].insertBefore(THead, Tables[i].children[0]);
    } else {
      THead = Tables[i].tHead;
    }

    // Attach click events to table header
    for (var rowNum = 0; rowNum < THead.rows.length; rowNum++) {
      for (
        var cellNum = 0, colNum = 0;
        cellNum < THead.rows[rowNum].cells.length;
        cellNum++
      ) {
        // Define which column the header should invoke sorting for
        THead.rows[rowNum].cells[cellNum].setAttribute(
          "data-js-sort-colNum",
          colNum
        );
        Handler = sortTable.getClickHandler(Tables[i], colNum);
        window.addEventListener
          ? THead.rows[rowNum].cells[cellNum].addEventListener("click", Handler)
          : window.attachEvent &&
            THead.rows[rowNum].cells[cellNum].attachEvent("onclick", Handler);
        colNum += THead.rows[rowNum].cells[cellNum].colSpan;
      }
    }

    // Mark table as processed
    Tables[i].setAttribute("data-user-table", "true");
  }

  // Add default styles as the first style in head so they can be easily overwritten by user styles
  var element = document.createElement("style");
  document.head.insertBefore(element, document.head.childNodes[0]);
  var sheet = element.sheet;
  sheet.insertRule(
    'table.js-sort-asc thead tr > .js-sort-active:not(.js-sort-none):after {content: "\\25b2";font-size: 0.7em;padding-left: 3px;line-height: 0.7em;}',
    0
  );
  sheet.insertRule(
    'table.js-sort-desc thead tr > .js-sort-active:not(.js-sort-none):after {content: "\\25bc";font-size: 0.7em;padding-left: 3px;line-height: 0.7em;}',
    0
  );
};

// Run sortTable.init() when the page loads
window.addEventListener
  ? window.addEventListener("load", sortTable.init, false)
  : window.attachEvent && window.attachEvent("onload", sortTable.init);

// Shim for IE11's lack of NodeList.prototype.forEach
if (typeof NodeList.prototype.forEach !== "function") {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* **** PART TWO - automaticaly sort a column on page load  **** */
function automaticallySortTable() {
  // sort the 2nd column in a particular order. (nb column indexes starts @ 0 , not 1)
  sortTable(document.getElementById("demo1"), 1, 1);
}

// when the DOM is ready, sort a table ...
window.addEventListener
  ? window.addEventListener("load", automaticallySortTable, false)
  : window.attachEvent && window.attachEvent("onload", automaticallySortTable);
(function (document) {
  "use strict";

  var LightTableFilter = (function (Arr) {
    var _input;

    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(
        _input.getAttribute("data-table")
      );
      Arr.forEach.call(tables, function (table) {
        Arr.forEach.call(table.tBodies, function (tbody) {
          Arr.forEach.call(tbody.rows, _filter);
        });
      });
    }

    function _filter(row) {
      var text = row.textContent.toLowerCase(),
        val = _input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? "none" : "table-row";
    }

    return {
      init: function () {
        var inputs = document.getElementsByClassName("light-table-filter");
        Arr.forEach.call(inputs, function (input) {
          input.oninput = _onInputEvent;
        });
      },
    };
  })(Array.prototype);

  document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
      LightTableFilter.init();
    }
  });
})(document);

getPagination("#user-table");
//getPagination('.table-class');
//getPagination('table');

/*					PAGINATION 
		  - on change max rows select options fade out all rows gt option value mx = 5
		  - append pagination list as per numbers of rows / max rows option (20row/5= 4pages )
		  - each pagination li on click -> fade out all tr gt max rows * li num and (5*pagenum 2 = 10 rows)
		  - fade out all tr lt max rows * li num - max rows ((5*pagenum 2 = 10) - 5)
		  - fade in all tr between (maxRows*PageNum) and (maxRows*pageNum)- MaxRows 
		  */

function getPagination(table) {
  var lastPage = 1;

  $("#maxRows")
    .on("change", function (evt) {
      //$('.paginationprev').html('');						// reset pagination

      lastPage = 1;
      $(".pagination").find("li").slice(1, -1).remove();
      var trnum = 0; // reset tr counter
      var maxRows = parseInt($(this).val()); // get Max Rows from select option

      if (maxRows == 5000) {
        $(".pagination").hide();
      } else {
        $(".pagination").show();
      }

      var totalRows = $(table + " tbody tr").length; // numbers of rows
      $(table + " tr:gt(0)").each(function () {
        // each TR in  table and not the header
        trnum++; // Start Counter
        if (trnum > maxRows) {
          // if tr number gt maxRows

          $(this).hide(); // fade it out
        }
        if (trnum <= maxRows) {
          $(this).show();
        } // else fade in Important in case if it ..
      }); //  was fade out to fade it in
      if (totalRows > maxRows) {
        // if tr total rows gt max rows option
        var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
        //	numbers of pages
        for (var i = 1; i <= pagenum; ) {
          // for each page append pagination li
          $(".pagination #prev")
            .before(
              '<li data-page="' +
                i +
                '">\
								  <span>' +
                i++ +
                '<span class="sr-only">(current)</span></span>\
								</li>'
            )
            .show();
        } // end for i
      } // end if row count > max rows
      $('.pagination [data-page="1"]').addClass("active-page"); // add active class to the first li
      $(".pagination li").on("click", function (evt) {
        // on click each page
        evt.stopImmediatePropagation();
        evt.preventDefault();
        var pageNum = $(this).attr("data-page"); // get it's number

        var maxRows = parseInt($("#maxRows").val()); // get Max Rows from select option

        if (pageNum == "prev") {
          if (lastPage == 1) {
            return;
          }
          pageNum = --lastPage;
        }
        if (pageNum == "next") {
          if (lastPage == $(".pagination li").length - 2) {
            return;
          }
          pageNum = ++lastPage;
        }

        lastPage = pageNum;
        var trIndex = 0; // reset tr counter
        $(".pagination li").removeClass("active-page"); // remove active class from all li
        $('.pagination [data-page="' + lastPage + '"]').addClass("active-page"); // add active class to the clicked
        // $(this).addClass('active');					// add active class to the clicked
        limitPagging();
        $(table + " tr:gt(0)").each(function () {
          // each tr in table not the header
          trIndex++; // tr index counter
          // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
          if (
            trIndex > maxRows * pageNum ||
            trIndex <= maxRows * pageNum - maxRows
          ) {
            $(this).hide();
          } else {
            $(this).show();
          } //else fade in
        }); // end of for each tr in table
      }); // end of on click pagination list
      limitPagging();
    })
    .val(5)
    .change();

  // end of on select change

  // END OF PAGINATION
}

function limitPagging() {
  // alert($('.pagination li').length)

  if ($(".pagination li").length > 7) {
    if ($(".pagination li.active").attr("data-page") <= 3) {
      $(".pagination li:gt(5)").hide();
      $(".pagination li:lt(5)").show();
      $('.pagination [data-page="next"]').show();
    }
    if ($(".pagination li.active").attr("data-page") > 3) {
      $(".pagination li:gt(0)").hide();
      $('.pagination [data-page="next"]').show();
      for (
        let i = parseInt($(".pagination li.active").attr("data-page")) - 2;
        i <= parseInt($(".pagination li.active").attr("data-page")) + 2;
        i++
      ) {
        $('.pagination [data-page="' + i + '"]').show();
      }
    }
  }
}

$(function () {
  // Just to append id number for each row
  $("table tr:eq(0)");

  var id = 0;

  $("table tr:gt(0)").each(function () {
    id++;
    $(this).prepend("<td>" + id + "</td>");
  });
});

//  Developed By Yasser Mas
// yasser.mas2@gmail.com
class TableCSVExporter {
  constructor(table, includeHeaders = true) {
    this.table = table;
    this.rows = Array.from(table.querySelectorAll("tr"));

    if (!includeHeaders && this.rows[0].querySelectorAll("th").length) {
      this.rows.shift();
    }
  }

  convertToCSV() {
    const lines = [];
    const numCols = this._findLongestRowLength();

    for (const row of this.rows) {
      let line = "";

      for (let i = 0; i < numCols; i++) {
        if (row.children[i] !== undefined) {
          line += TableCSVExporter.parseCell(row.children[i]);
        }

        line += i !== numCols - 1 ? "," : "";
      }

      lines.push(line);
    }

    return lines.join("\n");
  }

  _findLongestRowLength() {
    return this.rows.reduce(
      (l, row) => (row.childElementCount > l ? row.childElementCount : l),
      0
    );
  }

  static parseCell(tableCell) {
    let parsedValue = tableCell.textContent;

    // Replace all double quotes with two double quotes
    parsedValue = parsedValue.replace(/"/g, `""`);

    // If value contains comma, new-line or double-quote, enclose in double quotes
    parsedValue = /[",\n]/.test(parsedValue) ? `"${parsedValue}"` : parsedValue;

    return parsedValue;
  }
}

const dataTable = document.getElementById("user-table");
const btnExportToCsv = document.getElementById("btnExportToCsv");

btnExportToCsv.addEventListener("click", () => {
  const exporter = new TableCSVExporter(dataTable);
  const csvOutput = exporter.convertToCSV();
  const csvBlob = new Blob([csvOutput], { type: "text/csv" });
  const blobUrl = URL.createObjectURL(csvBlob);
  const anchorElement = document.createElement("a");

  anchorElement.href = blobUrl;
  anchorElement.download = "table-export.csv";
  anchorElement.click();

  setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
  }, 500);
});
