/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to play or pause the symbol timeline 
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2013_icon}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("2013");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2005_icon}", "click", function(sym, e) {
         sym.play("2005");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2005}", "click", function(sym, e) {
         sym.play("2005");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2001_icon}", "click", function(sym, e) {
         sym.play("2001");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2001}", "click", function(sym, e) {
         sym.play("2001");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2006_icon}", "click", function(sym, e) {
         sym.play("2006");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2006}", "click", function(sym, e) {
         sym.play("2006");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2009_icon}", "click", function(sym, e) {
         sym.play("2009");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2009}", "click", function(sym, e) {
         sym.play("2009");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2011_icon}", "click", function(sym, e) {
         sym.play("2011");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2011}", "click", function(sym, e) {
         sym.play("2011");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2012_icon}", "click", function(sym, e) {
         sym.play("2012");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2012}", "click", function(sym, e) {
         sym.play("2012");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2013}", "click", function(sym, e) {
         sym.play("2013");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2014_icon}", "click", function(sym, e) {
         sym.play("2014");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2014}", "click", function(sym, e) {
         sym.play("2014");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2015_icon}", "click", function(sym, e) {
         sym.play("2015");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2015}", "click", function(sym, e) {
         sym.play("2015");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2018_icon}", "click", function(sym, e) {
         sym.play("2018");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2018}", "click", function(sym, e) {
         sym.play("2018");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2020_icon}", "click", function(sym, e) {
         sym.play("2020");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2020}", "click", function(sym, e) {
         sym.play("2020");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PLAYPAUSE}", "click", function(sym, e) {
         if (sym.isPlaying()) {
         	sym.stop();
         } else {
         	sym.play();
         }
         

      });
      //Edge binding end
	  
	        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 48000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("2001");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-34774265");