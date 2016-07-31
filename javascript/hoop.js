"use strict";

var announcer = document.getElementById("announcer");
var report = document.getElementById("report");
var midcourt = document.getElementById("midcourt");

function allowDrops(event) {
  console.log("allowing drops");
  event.preventDefault();
};

function dragging(event) {
  console.log("current status: dragging");
  event.dataTransfer.setData("text", event.target.id);
};

/*
  dragging to the hoop: show "swish!", hide "back on the bench" if it's
  visible (previously: added "swish" to the ball which removed the top
  & bottom margins, but now that they're 0, it's not needed)
*/

function dropInTheHoop(event) {
  console.log("dropped in the hoop!");
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  console.log("document.getElementById(data): ", document.getElementById(data));
  event.target.appendChild(document.getElementById(data));
  announcer.classList.remove("not-yet");
  // instead of removing it on the first pass, we'll check for it
  if (!report.classList.contains("not-yet")) {
    report.classList.add("not-yet");
  };
  midcourt.classList.add("empty");
};

/*
  dragging back to the bench: hide "swish!", show "back on the bench"
*/

function dropOnTheBench(event) {
  console.log("dropped back on the bench");
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  announcer.classList.add("not-yet");
  report.classList.remove("not-yet");
  midcourt.classList.remove("empty");
}