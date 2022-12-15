chrome.browserAction.onClicked.addListener(function(activeTab)
{
  if (activeTab.url.includes("youtube.com")) {
    var videoId = activeTab.url.split('watch?v=')[1].split('&')[0];
    var newURL = "https://www.languageplayer.io/en/zh/youtube/view/" + videoId;
    chrome.tabs.update(activeTab.id, {url: newURL});
  }
});