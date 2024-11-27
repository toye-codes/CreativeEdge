// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Team Member Interaction Enhancement
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        // Add hover effect with more detailed interaction
        member.addEventListener('mouseenter', (event) => {
            // Subtle scale and shadow enhancement
            event.currentTarget.style.transform = 'scale(1.05)';
            event.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        member.addEventListener('mouseleave', (event) => {
            // Reset to original state
            event.currentTarget.style.transform = 'scale(1)';
            event.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });

        // Optional: Add click interaction to show more details
        member.addEventListener('click', () => {
            const name = member.querySelector('.team-member-name').textContent;
            const role = member.querySelector('.team-member-role').textContent;
            
            // Create a modal or alert with team member details
            showTeamMemberModal(name, role);
        });
    });

    // 2. Values Section Animation
    const valueItems = document.querySelectorAll('.value-item');
    
    // Intersection Observer for scroll-triggered animations
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('value-item-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    // Observe each value item
    valueItems.forEach(item => {
        valueObserver.observe(item);
    });

    // 3. Dynamic Story Section Updates
    function updateCompanyStory() {
        const storyDescription = document.querySelector('.about-story-description');
        const currentYear = new Date().getFullYear();
        const yearsActive = currentYear - 2015;

        // Dynamically update the story text
        storyDescription.innerHTML = `
            Founded in 2015, our company began with a simple mission: to transform innovative ideas into impactful digital solutions. 
            Over the past ${yearsActive} years, we've grown from a small home office into a dynamic team of ${teamMembers.length} creative professionals 
            dedicated to pushing the boundaries of design and technology.
        `;
    }

    // Function to show team member modal (placeholder implementation)
    function showTeamMemberModal(name, role) {
        // Create a simple modal or alert
        const modal = document.createElement('div');
        modal.classList.add('team-member-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${name}</h2>
                <p>${role}</p>
                <p>Additional details would be added here, such as bio, expertise, etc.</p>
                <button class="close-modal">Close</button>
            </div>
        `;

        // Add modal to body
        document.body.appendChild(modal);

        // Close modal functionality
        const closeButton = modal.querySelector('.close-modal');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Basic styling for the modal (you'd typically do this in CSS)
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = 'white';
        modal.style.padding = '20px';
        modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        modal.style.zIndex = '1000';
    }

    // Call the dynamic story update function
    updateCompanyStory();
});