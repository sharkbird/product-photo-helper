#!/usr/bin/env zx

// first arg is number of photos, second is wait time between photos.

const args=process.argv.slice(2)
const numberofpics = args[1];
const waittime=args[2]*1000;
let again
var result = `ls`
var reset = 'gphoto2 --reset'
var shoot = 'gphoto2 -- '
let orderName
while ( orderName = await question('eneter order name: ')) {

  await $`mkdir ${orderName}`
  cd( `${orderName}`)

  for (let i=0;i<numberofpics;i++) {
    const output1 = (await $`ls -al`).stdout;
    console.log(output1)
    await sleep(waittime)
  }
  cd('..')
 const output=(await $`pwd`).stdout;
  console.log(`${output}`);
}
