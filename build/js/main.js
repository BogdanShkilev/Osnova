$(document).ready(function() {

	var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });
	// Toggle button
      document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
      });
    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    // $(document).foundation();

});