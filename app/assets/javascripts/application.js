// new Raphael(element, width, height)

window.onload = function() {
  var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);

  var circle = paper.circle(100, 100, 80);

  for(var i = 0; i < 20; i+=1) {
      var multiplier = i*5;
      paper.circle(250 + (2*multiplier), 100 + multiplier, 50 - multiplier)
  }

  var rectangle = paper.rect(200, 200, 250, 100);

  var ellipse = paper.ellipse(200, 400, 100, 50);

  paper.path("M 250 250")

};



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
//= require_tree .


