// Saves options to chrome.storage
function save_options() {
  var optionsForm = document.getElementById('options');

  chrome.storage.sync.set({
    journalSet: optionsForm.elements['journalSet'].value
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
  }, 2000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Default values
  chrome.storage.sync.get({
    journalSet: 'current'
  }, function(items) {
      var optionsForm = document.getElementById('options');

      optionsForm['journalSet'].value = items.journalSet;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
