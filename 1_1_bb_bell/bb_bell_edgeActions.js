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
         
         // Replay from the beginning, regardless of current playing state 
         if (!sym.getSymbol("electrons").isPlaying() ) {
         	sym.getSymbol("electrons").play(0);
         }
         
         // Replay from the beginning, regardless of current playing state 
         if (!sym.getSymbol("electrons2").isPlaying() ) {
         	sym.getSymbol("electrons2").play(0);
         }
         
         
         

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

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1040, function(sym, e) {
         sym.play("0");
         
         
         	sym.getSymbol("atom").play(0);

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${right_new}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("../1_2_quarks/quarks.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${introduction_new}", "click", function(sym, e) {
         window.open("../1_0_introduction/introduction.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left_new}", "click", function(sym, e) {
         window.open("../1_0_introduction/introduction.html", "_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'proton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 840, function(sym, e) {
         sym.play("proton");
         

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // insert code to be run at timeline end here
         // Replay from the beginning, regardless of current playing state 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }
         

      });
      //Edge binding end

   })("proton");
   //Edge symbol end:'proton'

   //=========================================================
   
   //Edge symbol: 'netron'
   (function(symbolName) {   
   
   })("netron");
   //Edge symbol end:'netron'

   //=========================================================
   
   //Edge symbol: 'electrons'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 840, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("electrons");
   //Edge symbol end:'electrons'

   //=========================================================
   
   //Edge symbol: 'atom'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1040, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("atom");
   //Edge symbol end:'atom'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-212609867");