#!/usr/bin/env zx

// first arg is number of photos, second is wait time between photos in seconds.
//import { $ } from 'zx'

const args=process.argv.slice(2)
const numberofpics = args[1];
const waittime=args[2]*1000;
const sony="Sony Alpha-A5100 (Control)"
const canon="Canon EOS 1500D"
let itemName = ''
let command = ''
let vantage = 'side'
let count = 0

// start image view
$`sxiv capture_preview.jpg`

// if preview, then take a preview picture
while ( command = await question('enter command or item name: ')) {
  if (command == "preview top" || command == "pt") {
    $`./sony-preview.sh`
    continue
  } else
    if (command == "preview side" || command =="ps") {
      $`./canon-preview.sh`
      continue
    }
   else
    // switch vantage to top or side
    if (command == "top" || command == "side")
    {
      vantage = command
      continue
    } else
      if (command == "more")
      {
      }
    else {
      count = 0
      itemName = command
      await $`mkdir ${itemName}`

      cd( `${itemName}`)
      for (let i=0;i<numberofpics;i++) {
        //  await $`gphoto2 --camera "Canon EOS 1500D" --capture-image-and-download --filename "${itemName}-${i}.jpg"`
        //  await $`gphoto2 --camera "Sony Alpha-A5100" --capture-image-and-download --filename "${itemName}-${i}.jpg"`
        //  await $`../sony.sh ${itemName}-${i}.jpg`
        count = count + 1
        if (vantage == "side") {
          await $`../canon.sh ${itemName}-${count}.jpg`
        } else {
          await $`../sony.sh ${itemName}-${count}.jpg`
        }
        await sleep(waittime)
      }
     cd('..')
      await $`gphoto2 --reset`
    }
}
