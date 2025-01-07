document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Hide all timelines
      document.querySelectorAll('.timeline').forEach(timeline => {
        timeline.style.display = 'none';
      });
      
      // Show selected timeline
      const timelineId = `${tab.dataset.tab}-timeline`;
      document.getElementById(timelineId).style.display = 'block';
      
      // Trigger animation for visible items
      document.querySelectorAll(`#${timelineId} .timeline-item`).forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
      });
    });
  });