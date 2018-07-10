var demo_el = document.getElementById('demo');

function search_movie(search_key) {
  if (search_key.length == 0) {

    demo_el.innerHTML = '';
    demo_el.style.border = '0px';

    return 0;
  }

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4 && xhr.status == 200) {
      demo_el.innerHTML = xhr.responseText;
      demo_el.style.border = '1px solid #A5ACB2';
    }

  };

  xhr.open('GET', 'search.php?search_key=' + search_key, true);
  xhr.send();
}
