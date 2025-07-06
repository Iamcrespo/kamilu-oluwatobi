const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');

      // Hide all content
      contents.forEach(content => content.classList.remove('active'));

      // Show target content
      document.getElementById(targetId).classList.add('active');
      
    });
  });