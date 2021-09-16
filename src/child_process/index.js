const {
  exec, execFile, fork, spawn,
} = require('child_process');
//
exec('node --version', { encoding: 'utf-8' }, (error, stdout, stderr) => {
  if (error) {
    console.log(error.stack);
    console.log(`Error code: ${error.code}`);
    console.log(`Signal received: ${error.signal}`);
  }
  // console.log(error, stdout, stderr);
  console.log(`stdout : ${stdout}`);
  console.log(`stderr : ${stderr}`);
}).on('exit', (code) => {
  console.log(`子进程已退出, 退出码 ${code}`);
});
//
execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout, stderr);
});
//
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
//
const child = fork('./child.js');
console.log(`fork return pid: ${child.pid}`);
child.on('message', (msg) => {
  console.log(`parent get message: ${JSON.stringify(msg)}`);
});
child.send({ key: 'parent value' });
