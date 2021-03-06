/* See license.txt for terms of usage */

define([
],
function() {

// ********************************************************************************************* //
// Constants

var Ci = Components.interfaces;
var Cc = Components.classes;

var System = {};

// ********************************************************************************************* //

System.copyToClipboard = function(string)
{
    var clipboard = Cc["@mozilla.org/widget/clipboardhelper;1"].getService(Ci.nsIClipboardHelper);
    clipboard.copyString(string);
};

// ********************************************************************************************* //

return System;

// ********************************************************************************************* //
});
