<?php

$xml_doc = new DOMDocument();

$xml_doc->load("movies.xml");

$movies = $xml_doc->getElementsByTagName('movie');

$search_key = $_GET['search_key'];

/* look up all movies from the xml file */
if (strlen($search_key) <= 0) {
  die();
}

$hint = '';

echo '<ul>';
for ($i=0; $i<($movies->length); $i++) {

  $name = $movies->item($i)->getElementsByTagName('name');
  $year = $movies->item($i)->getElementsByTagName('year');

  if ($name->item(0)->nodeType == 1) {

    /* find the name matching the search key */
    if (stristr($name->item(0)->childNodes->item(0)->nodeValue, $search_key)) {
      echo '<li>' . $name->item(0)->childNodes->item(0)->nodeValue . '</li>';
    }
  }
}
echo '</ul>';
