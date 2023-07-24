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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 840, function(sym, e) {
         // insert code here
         sym.play(0);
         // Replay from the beginning, regardless of current playing state 
         
         	sym.play(0);
         
         	// Replay from the beginning, regardless of current playing state 
         	

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         // Replay from the beginning, regardless of current playing state 
         if (!sym.isPlaying() ) {
         	sym.play("animation");
         }
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${right_new}", "click", function(sym, e) {
         window.open("../1_4_nucleus/nucleus_test.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${introduction_new}", "click", function(sym, e) {
         window.open("../1_0_introduction/introduction.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left_new}", "click", function(sym, e) {
         window.open("../1_2_quarks/quarks.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-212609867");