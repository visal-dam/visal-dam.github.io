const $menu = $('#menu');

fetch('/common/menu.html')
  .then(response => response.text())
  .then(html => {
    // Destroy old panel if exists
    if ($menu.data('panel')) $menu.panel('destroy');

    // Inject HTML
    $menu.html(html);

    // Re-initialize panel
    $menu.panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'right',
        target: $('body'),
        visibleClass: 'is-menu-visible'
    });
  });
