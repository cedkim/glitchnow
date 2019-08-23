let deployment;
for await (const event of createDeployment(process.env.PUBLICDIR, {token: process.env.TOKEN})) {
  if (event.type === 'ready') {
    deployment = event.payload;
    break;
  }
}
console.log(deployment);
return deployment;
