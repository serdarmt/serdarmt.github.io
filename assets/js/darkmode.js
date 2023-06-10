document.querySelector('#darkModeCheckbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
  });
  