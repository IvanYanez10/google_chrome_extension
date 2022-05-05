let changeColor = document.getElementById("scraping");

chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

scraping.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  var message = document.querySelector('#message');

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: ['getPageSource.js'],
    }
  );

});
