document.addEventListener('DOMContentLoaded', () => {
    const members = [
        {
            name: 'Ritik',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://media.licdn.com/dms/image/v2/D5603AQF5_6RM7gLRlg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723499126847?e=1730332800&v=beta&t=9Vl9Qx9C18Cui9So5yMbMuFjN0eJmveeJ-qIBqum69A',
            category: 'core'
        },
        {
            name: 'Ankit',
            role: 'Alumni Advisor',
            description: 'Bringing years of experience to the advisory board.',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/005/427/608/small_2x/young-indian-student-holding-diary-file-in-hand-free-photo.JPG',
            category: 'alumni'
        },
        
        {
            name: 'Sunny',
            role: 'Alumni Advisor',
            description: 'Bringing years of experience to the advisory board.',
            image: 'https://www.thestatesman.com/wp-content/uploads/2024/08/Sunny-Leone-jpg.webp',
            category: 'alumni'
        },
        {
            name: 'Gourav',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://static.vecteezy.com/system/resources/previews/002/881/804/large_2x/handsome-male-asian-student-photo.jpg',
            category: 'core'
        },
        {
            name: 'Neha',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://img.freepik.com/premium-photo/young-beautiful-asian-college-student-girls-holding-book_102814-1429.jpg',
            category: 'core'
        },
        {
            name: 'Zara',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://d3nn873nee648n.cloudfront.net/900x600/15392/120-SM618699.jpg',
            category: 'core'
        },
        {
            name: 'Vicky',
            role: 'Alumni Advisor',
            description: 'Bringing years of experience to the advisory board.',
            image: 'https://d3nn873nee648n.cloudfront.net/900x600/20732/300-SM1072287.jpg',
            category: 'alumni'
        },
        
        {
            name: 'Sumi',
            role: 'Alumni Advisor',
            description: 'Bringing years of experience to the advisory board.',
            image: 'https://d3nn873nee648n.cloudfront.net/900x600/20826/300-SM1077344.jpg',
            category: 'alumni'
        },
        {
            name: 'Yusuf',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://d3nn873nee648n.cloudfront.net/900x600/20790/300-SM1075777.jpg',
            category: 'core'
        },
        {
            name: 'Ritik',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://media.licdn.com/dms/image/v2/D5603AQF5_6RM7gLRlg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723499126847?e=1730332800&v=beta&t=9Vl9Qx9C18Cui9So5yMbMuFjN0eJmveeJ-qIBqum69A',
            category: 'core'
        },
        {
            name: 'Ritik',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://media.licdn.com/dms/image/v2/D5603AQF5_6RM7gLRlg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723499126847?e=1730332800&v=beta&t=9Vl9Qx9C18Cui9So5yMbMuFjN0eJmveeJ-qIBqum69A',
            category: 'core'
        },
        {
            name: 'Ankit',
            role: 'Alumni Advisor',
            description: 'Bringing years of experience to the advisory board.',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/005/427/608/small_2x/young-indian-student-holding-diary-file-in-hand-free-photo.JPG',
            category: 'alumni'
        },
        
        {
            name: 'Siri',
            role: 'Alumni Advisor',
            description: 'Bringing years of experience to the advisory board.',
            image: 'https://d3nn873nee648n.cloudfront.net/900x600/18475/120-SM829890.jpg',
            category: 'alumni'
        },
        {
            name: 'Gourav',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://static.vecteezy.com/system/resources/previews/002/881/804/large_2x/handsome-male-asian-student-photo.jpg',
            category: 'core'
        },
        {
            name: 'Neha',
            role: 'Team Lead',
            description: 'Experienced team lead with a passion for innovation.',
            image: 'https://img.freepik.com/premium-photo/young-beautiful-asian-college-student-girls-holding-book_102814-1429.jpg',
            category: 'core'
        },
    ];

    const membersSection = document.getElementById('membersSection');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');

    function displayMembers(filteredMembers) {
        membersSection.innerHTML = '';
        if (filteredMembers.length === 0) {
            membersSection.innerHTML = `<p class="error-message">No members found for the selected category.</p>`;
            return;
        }
        filteredMembers.forEach(member => {
            const template = document.getElementById('memberTemplate').content.cloneNode(true);
            template.querySelector('.profile-img').src = member.image;
            template.querySelector('.member-name').textContent = member.name;
            template.querySelector('.member-role').textContent = member.role;
            template.querySelector('.member-description').textContent = member.description;
            membersSection.appendChild(template);
        });
    }

    function filterMembers() {
        const category = categoryFilter.value;
        let filteredMembers = members;
        if (category !== 'all') {
            filteredMembers = members.filter(member => member.category === category);
        }
        sortMembers(filteredMembers);
    }

    function sortMembers(filteredMembers) {
        const sortBy = sortFilter.value;
        filteredMembers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        displayMembers(filteredMembers);
    }

    categoryFilter.addEventListener('change', filterMembers);
    sortFilter.addEventListener('change', () => sortMembers(members));

    displayMembers(members);
});
