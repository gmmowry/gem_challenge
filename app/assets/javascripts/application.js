// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree
//= require raphael.js



window.onload = function() {
  var paper = new Raphael(document.getElementById('canvas_container'), 800, 800);

  // paper.attr({fill: 'grey', stroke: '#ddd', 'stroke-width': 2});

  var circle = paper.circle(100, 100, 80);

  circle.mouseover(function(){
    console.log("NOPE!");
    circle.attr("fill", "red")
  });

  circle.mouseout(function(){
    console.log("YEP!");
    circle.attr("fill", "white");
  });

  var rectangle = paper.rect(200, 200, 250, 100);

  rectangle.attr("fill", "grey");

  rectangle.glow({width: 10, fill: false, opacity: 0.5, offsetx: 0, offsety: 0, color: '#208120'});

  // var ellipse = paper.ellipse(200, 400, 100, 50);

// creating a prototype for a set of objects to call them 'draggable'
// setting variables we'll need let coordinates, moving functionality, etc.
// set the reference 'me' because Raphael will only register the drag event of one element, but we want the whole set moving.
// (lx, ly) are their current location, (ox, oy) were the start location
// (dx, dy) are the differences in the two vector points
// endFnc then resets the start location as the current location for the next time you drag

  Raphael.st.draggable = function() {
    var me = this
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0,
      moveFnc = function(dx, dy) {
        lx = dx + ox;
        ly = dy + oy;
        me.transform('t' + lx + ',' + ly);
      },
      startFnc = function() {},
      endFnc = function() {
        ox = lx;
        oy = ly;
      };

    this.drag(moveFnc, startFnc, endFnc);
  };

  var mySet = paper.set();

  mySet.push(paper.circle(350, 450, 50).attr('fill', 'blue'));
  mySet.push(paper.circle(350, 450, 40).attr('fill', 'white'));
  mySet.push(paper.circle(350, 450, 30).attr('fill', 'blue'));
  mySet.push(paper.circle(350, 450, 20).attr('fill', 'white'));
  mySet.push(paper.circle(350, 450, 10).attr('fill', 'blue'));

  mySet.draggable();
};



  //

  // var newshape = paper.path("M 350 350 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
  // newshape.attr({fill: 'grey', stroke: '#ddd', 'stroke-width': 5, rotation: -90});

  // newshape.animate(function(){ {rotation: 360}}, 2000, 'bounce');

//click on rectangle, make it bigger


