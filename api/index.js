module.exports = async (req, res) => {
  try {
    // Hardcoded file list for files in /public
    const files = ['webinfo.ps1', 'newfile.ps1', 'help.txt'];

    // Generate HTML for directory listing
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Index of /</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { font-size: 24px; }
            ul { list-style: none; padding: 0; }
            li { margin: 5px 0; }
            a { text-decoration: none; color: #007bff; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>Index of /</h1>
          <ul>
    `;

    // Add each file as a link
    for (const file of files) {
      html += `<li><a href="/${file}">${file}</a></li>`;
    }

    html += `
          </ul>
        </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send(`Error generating directory listing: ${error.message}`);
  }
};
