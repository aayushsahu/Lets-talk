const axios = require('axios');
const fs = require('fs');

const owner = 'aayushsahu'; // Replace with the repository owner's username or organization name
const repo = 'aayushsahu.github.io'; // Replace with the repository name

axios.get(`https://github.com/${owner}/${repo}/graphs/contributors`, {
    responseType: 'arraybuffer' // Specify response type as arraybuffer to handle binary data
})
.then(response => {
    // Write the binary data to a file
    fs.writeFileSync('contributor_graph.png', response.data, 'binary');
    console.log('Contributor graph downloaded successfully.');
})
.catch(error => {
    console.error('Error:', error);
});