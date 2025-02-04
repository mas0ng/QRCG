document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log("Tabs returned:", tabs);
    if (tabs && tabs.length > 0) {
      const currentUrl = tabs[0].url;
      console.log("Current tab URL:", currentUrl);
      if (currentUrl) {
        // Construct the QR code URL using the alternative API
        const qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(currentUrl);
        console.log("QR Code URL:", qrCodeUrl);
        document.getElementById('qrCodeImg').src = qrCodeUrl;
      } else {
        console.error("No URL found in the active tab.");
        document.getElementById('qrCodeImg').alt = 'No URL available';
      }
    } else {
      console.error("No active tab found.");
      document.getElementById('qrCodeImg').alt = 'No active tab found';
    }
  });
});
