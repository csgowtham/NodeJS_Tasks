const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const folderPath = path.join(__dirname, 'files');

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// API endpoint to create a file with the current timestamp
app.post('/create-file', (req, res) => {
    const now = new Date();
    const fileName = `${now.toISOString().replace(/:/g, '-')}.txt`; // Replace colons to avoid issues in file names
    const filePath = path.join(folderPath, fileName);
    const fileContent = now.toString();

    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            return res.status(500).send('Error writing file');
        }
        res.send(`File created: ${fileName}`);
    });
});

// API endpoint to retrieve all files in the folder
app.get('/list-files', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading folder');
        }
        res.json(files);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
