const ytbRegEx = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tab)
  if (changeInfo.status === 'complete' && tab.active && tab.url.match(ytbRegEx)) {
    chrome.scripting.executeScript({ target: { tabId }, files: ['/main.js'] })
    console.log('Button added!')
  }
})
