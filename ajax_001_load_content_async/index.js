function load_doc() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var demo_el = document.getElementById('demo');
      demo_el.innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', 'demo.html', true);
  xhr.send();
}
