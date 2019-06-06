const fs = require('fs-extra');
const path = require('path');
const process = require('process');

const dirs = fs.readdirSync(__dirname)
  .map(dir => path.join(__dirname, dir))
  .filter(dir => fs.statSync(dir).isDirectory());

const copyJobs = dirs.map((dir) => {
  const base = path.basename(dir);
  const next = path.join(__dirname, '..', 'node_modules', base);

  return fs.copy(dir, next);
});

(async () => {
  await Promise.all(copyJobs);
  console.log('done');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
