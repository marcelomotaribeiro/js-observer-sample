export const loadTabPage = (selectedTab, pageUrl, afterResponse) => {
  fetch(pageUrl)
  .then(response => response.text())
  .then(text => {
    if (!selectedTab.innerHTML) {
      selectedTab.innerHTML = text
      if (afterResponse != null) {
        afterResponse(selectedTab)
      }      
    }

  })
}