/**
 * Hide all tab contents
 * Apply Default style all tabs
 * current tab content show and tab to active style
 * @param {*} evt
 * @param {*} tabIndex
 */
function openTab(evt, tabIndex) {
  hideAllTabContents(evt, tabIndex);
  deactivareAllTablinks(evt, tabIndex);
  showSelectedTabContent(evt, tabIndex);
}

/**
 * Hide all contents
 * @param {*} evt
 * @param {*} tabIndex
 */
function hideAllTabContents(evt, tabIndex) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

/**
 * current tab content show and tab to active style
 * @param {*} evt
 * @param {*} tabIndex
 */
function showSelectedTabContent(evt, tabIndex) {
  document.getElementById(tabIndex).style.display = "block";
  evt.target.className += " active";
}

/**
 * Apply Default style all tabs
 * @param {*} evt
 * @param {*} tabIndex
 */
function deactivareAllTablinks(evt, tabIndex) {
  let i, tablinks;
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
}

/**
 * hide current tab content and  Apply Default style all tabs
 * @param {*} evt
 * @param {*} tabIndex
 */
function closeTab(evt, tabIndex) {
  document.getElementById(tabIndex).style.display = "none";
  deactivareAllTablinks(evt, tabIndex);
}
