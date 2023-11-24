document.addEventListener('DOMContentLoaded', function () {
    const websiteUrl = 'your_website_url';

    fetch(websiteUrl)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const hyperlinks = doc.querySelectorAll('a');

            const hyperlinksContainer = document.getElementById('hyperlinks-container');
            hyperlinks.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.href = link.href;
                linkElement.textContent = link.href;
                hyperlinksContainer.appendChild(linkElement);
            });
        })
        .catch(error => {
            console.error('Error fetching website content:', error);
        });
});
