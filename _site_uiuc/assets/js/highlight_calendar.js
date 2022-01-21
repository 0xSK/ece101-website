let year = "2022"
let cutoff_time = "11:55am";
let time_zone = "CST";

function highlight_calendar() {
  $("div.module").map((i, mod) => {
    var dl = mod.children[0];
    var date;
    var entire_module_past = true;
    for (i = 0; i < dl.children.length; i++) {
      child = dl.children[i];
      if (child.tagName == "DT") {
        // update date
        date = child.textContent.trim();
        date += ` ${year} ${cutoff_time} ${time_zone}`;
        date = Date.parse(date);
      }
      if (Date.compare(Date.parse("now"), date) === 1) {
        child.classList.add("date-past");
      } else {
        entire_module_past = false;
      }
    }
    if (entire_module_past) {
      dl.classList.add("date-past");
    }
  });
}

window.addEventListener("load", highlight_calendar);

// also run highlight_calendar() every hour
setInterval(highlight_calendar, 3600000);
