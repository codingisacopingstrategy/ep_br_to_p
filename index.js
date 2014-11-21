/* 
 * Wrap text in Paragraphs
 * 
 * From: 'Prachtig is het licht dat uit de hemel neerdaalt.<br><br>Geen enkele faktor van dit probleem uit de weg gaan. Zich volledig inzetten.<br>Wij zullen het klaarspelen. De moeilijkheden van de eenzaamheid dienen volledig te worden behandeld.<br><br>Hij sterft zonder een enkele frase, de ogen vol tranen.'
 * To: '<p>Prachtig is het licht dat uit de hemel neerdaalt.</p><p>Geen enkele faktor van dit probleem uit de weg gaan. Zich volledig inzetten.<br>Wij zullen het klaarspelen. De moeilijkheden van de eenzaamheid dienen volledig te worden behandeld.</p><p>Hij sterft zonder een enkele frase, de ogen vol tranen.</p>'
 * 
 * This relies on the fact that we know the specifics of Etherpad’s output:
 * no whitespace, lowercase tags, no slashes in self-closing tags.
 * 
 * For a more general purpose implementation we would probably
 * need to use jsdom and the DOM api.
 * */
var sys = require("sys");

exports.getFullHTMLForExport = function(hook, context) {
    /*var document = jsdom.jsdom('<p>' + context.html + '</p>');
    return [processNodes(document, {}, document).innerHTML];*/
   
   var html = context.html;
   return ['<p>' + html.replace(/<br><br>/g, '</p><p>') + '</p>'];
};

var testString = 'eric<br />eric<br /><br />eric';
var testString = 'eric eric<br />eric<br /><br />eric<br /><br />laatste paragraaf';

sys.puts(exports.getFullHTMLForExport('foo', {
    html : testString,
}), testString);

var cherieSaitFaireLesChoses = function(html) {
   return '<p>' + html.replace(/<br><br>/g, '</p><p>') + '</p>';
};
