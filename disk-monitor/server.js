const http = require("http");
const { exec } = require("child_process");

const server = http.createServer((req, res) => {
  exec('df -h | grep -v "tmpfs\|udev\|loop"', (error, stdout) => {
    if (error) {
      res.writeHead(500);
      return res.end("Error retrieving disk stats");
    }

    const lines = stdout.trim().split("\n");
    const headers = lines.shift().split(/\s+/);

    const rows = lines
      .map((line) => {
        const cols = line.split(/\s+/);
        return `<tr>${cols.map((c) => `<td>${c}</td>`).join("")}</tr>`;
      })
      .join("");

    const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: system-ui; padding: 2rem; }
                    table { border-collapse: collapse; width: 100%; max-width: 800px; }
                    th, td { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; }
                    th { background-color: #f4f4f4; }
                    .bar-container { background: #eee; width: 100px; height: 10px; border-radius: 5px; overflow: hidden; }
                    .bar-fill { height: 100%; background: #4caf50; }
                </style>
            </head>
            <body>
                <h2>Server Disk Usage</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Filesystem</th>
                            <th>Size</th>
                            <th>Used</th>
                            <th>Avail</th>
                            <th>Use%</th>
                            <th>Mounted</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </body>
            </html>
        `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
});

const PORT = process.env.DISK_MONITOR_PORT || 3000;
server.listen(PORT, () => console.log(`Disk monitor running on port ${PORT}`));
