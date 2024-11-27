document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all necessary DOM elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // 2. Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the filter category from the button's data attribute
            const filterCategory = button.getAttribute('data-filter');

            // 3. Filter portfolio items
            portfolioItems.forEach(item => {
                // Get the category of the current portfolio item
                const itemCategory = item.getAttribute('data-category');

                // Determine visibility based on filter
                if (filterCategory === 'all' || itemCategory === filterCategory) {
                    // Show the item with a smooth fade-in effect
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    
                    // Use setTimeout to create a staggered fade-in animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    // Hide items that don't match the filter
                    item.style.display = 'none';
                }
            });
        });
    });
});