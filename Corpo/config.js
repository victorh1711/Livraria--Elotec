document.addEventListener('DOMContentLoaded', () => {
  const area = document.getElementById('myMultiLineInput');

  area.focus(); // Foca no textarea
  area.setSelectionRange(area.value.length, area.value.length);

  function insertAtCursor(myField, myValue) {t
    if (document.selection) {  
      myField.focus();
      sel = document.selection.createRange();
      sel.text = myValue;
    }
    else if (myField.selectionStart || myField.selectionStart == '0') {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;
      myField.value = myField.value.substring(0, startPos)
        + myValue
        + myField.value.substring(endPos, myField.value.length);
      myField.selectionStart = startPos + myValue.length;
      myField.selectionEnd = startPos + myValue.length;
    } else {
      myField.value += myValue;
    }
  }
});