function DOMtoString(document_root) {
  var html = '',
  node = document_root.firstChild;
  while (node) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        html += node.outerHTML;
        break;
      case Node.TEXT_NODE:
        html += node.nodeValue;
        break;
      case Node.CDATA_SECTION_NODE:
        html += '<![CDATA[' + node.nodeValue + ']]>';
        break;
      case Node.COMMENT_NODE:
        html += '<!--' + node.nodeValue + '-->';
        break;
      case Node.DOCUMENT_TYPE_NODE:
        // (X)HTML documents are identified by public identifiers
        html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
        break;
    }
    node = node.nextSibling;
  }
  var result = html.search("hw dhw") + 8;  // hw dhw">happy</span> retunr int
  var deletingStart = html.substring(result, html.length); // happy</span> return string
  var final = deletingStart.search("span") - 2; // happy retunr int
  var str = deletingStart.substring(0, final); // return string
  
  return " string: " + str;
}

chrome.runtime.sendMessage({
  action: "getSource",
  source: DOMtoString(document)
});