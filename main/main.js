/**
 * Created by Vadym Yatsyuk on 27/11/2016
 */
'use strict';
(function () {
  const diff = require('diff');
  let $left = document.querySelector('#left');
  let $right = document.querySelector('#right');
  let $form = document.querySelector('#diff-form');
  let $result = document.querySelector('#diff-result > div');

  $form.addEventListener('submit', onSubmit);
  
  /**
   * On diff form submit
   */
  function onSubmit(e) {
    e.preventDefault();

    let changes = diff.diffChars($left.value, $right.value);

    $result.innerHTML = JSON.stringify(changes);
  }
})();