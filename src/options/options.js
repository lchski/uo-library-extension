// Saves options to chrome.storage
function save_options() {
  var journalSet = document.getElementById('journalSet').value;

  chrome.storage.sync.set({
    journalSet: journalSet
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Default values
  chrome.storage.sync.get({
    journalSet: 'current'
  }, function(items) {
    document.getElementById('journalSet').value = items.journalSet;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
