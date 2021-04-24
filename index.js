// No arguments
// 1, 2, 3

// const PaintWall = function () {
//   console.log("The wall has painted red");
// }; // 4, 5

// PaintWall(); // 5, 6

// Single argument
// 1, 2

// const PaintWall = function (color) {
//   console.log("The wall has painted " + color);
// }; // 3, 4, 5

// PaintWall("yellow"); // 6
// PaintWall("Green"); // 6
// PaintWall(); // it says 'undefined'

// Multiple arguments
// 1

const PaintWall = function (wallname, color) {
  console.log("The " + wallname + "wall has painted " + color);
}; // 2, 3, 4

PaintWall("northern", "yellow"); // 5
PaintWall("Western", "Green"); // 5
PaintWall("Southern"); //

// 6: Yes it does!
// 7: nothing, as the labels are 'connected' correctly in the function
// 8: See 6 and 7.
