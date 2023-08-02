const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
  let content = this.nextElementSibling;
  let activeHeader = document.querySelector('.accordion-header.active');
  let activeContent = document.querySelector('.accordion-content.active');

    if (activeHeader && activeContent) {
      activeHeader.classList.remove('active');
      activeContent.classList.remove('active');
      activeContent.style.display = 'none';
    }

    this.classList.toggle('active');
    content.classList.toggle('active');

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});