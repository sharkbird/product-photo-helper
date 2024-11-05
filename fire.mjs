#!/usr/bin/env zx

// first arg is number of photos, second is wait time between photos in seconds.
//import { $ } from 'zx'

const args=process.argv.slice(2)
const numberofpics = args[1];
const waittime=args[2]*1000;
let orderName = ''

while ( orderName = await question('enter order name: ')) {
  await $`mkdir ${orderName}`
  cd( `${orderName}`)
  for (let i=0;i<numberofpics;i++) {
    await $`gphoto2 --capture-image-and-download --filename "${orderName}-${i}.jpg"`
    await sleep(waittime)
  }
  cd('..')
  await $`gphoto2 --reset`
}
