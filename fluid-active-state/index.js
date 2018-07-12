var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4) {
    if (this.status == 200) {
      document.getElementById('fluid-active-state').innerHTML = this.responseText;
      fluid_active_state();
    } else {
      console.log(this.responseText);
    }
  }
};
xhr.open('GET', 'fluid-active-state.html', true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.send(JSON.stringify({}));

