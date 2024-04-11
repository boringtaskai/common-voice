const fs = require('fs');
const replace = require('replace-in-file');

try {
  fs.copyFileSync('../web/src/components/vars.css', 'css/vars.css');

  fs.copyFileSync('../web/index_template.html', 'index.html');

  const maintenanceFile = fs.readFileSync('index.html');

  // Replace React root with static content from maintenance.html
  replace.sync({
    files: 'index.html',
    from: '<div id="root"></div>',
    to: maintenanceFile.toString(),
  });

  // Change title of maintenance page
  replace.sync({
    files: 'index.html',
    from: '<title>Sumbang Suara</title>',
    to: '<title>Sumbang Suara sedang dalam pemeliharaaan</title>',
  });

  console.info('index.html created');
} catch (e) {
  throw new Error(
    'Error encountered when attempting to copy templates from /web: ' + e.message,
    ''
  );
}
