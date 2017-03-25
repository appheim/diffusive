/**
 * Created by Vadym Yatsyuk on 27/11/2016
 */
'use strict';
(function () {
  const diff = require('diff');
  const ACTIVE_CLASS = 'active';
  let $left = document.querySelector('#left');
  let $right = document.querySelector('#right');
  let $form = document.querySelector('#diff-form');
  let $insert = document.querySelector('#diff-insert');
  let $result = document.querySelector('#diff-result');
  let $resultContainer = document.querySelector('#diff-result > section');
  let $backBtn = document.querySelector('.diff-result__btn-back');
  let isInputView = true;

  $form.addEventListener('submit', onSubmit);

  $backBtn.addEventListener('click', onBack);

  /**
   * On diff form submit
   */
  function onSubmit(e) {
    e.preventDefault();

    let changes = diff.diffChars($left.value, $right.value);

    $resultContainer.innerHTML = JSON.stringify(changes);

    toggleView();
  }

  function toggleView() {
    isInputView = !isInputView;

    if (isInputView) {
      $result.classList.remove(ACTIVE_CLASS);
      $insert.classList.add(ACTIVE_CLASS);
    } else {
      $result.classList.add(ACTIVE_CLASS);
      $insert.classList.remove(ACTIVE_CLASS);
    }
  }

  function onBack() {
    toggleView();
  }
})();