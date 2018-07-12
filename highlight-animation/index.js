var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4) {
    if (this.status == 200) {
      document.getElementById('highlight-animation').innerHTML = this.responseText;
    } else {
      console.log(this.responseText);
    }
  }
};
xhr.open('GET', 'highlight-animation.html', true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.send(JSON.stringify({}));

