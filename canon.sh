#!/usr/bin/env sh

gphoto2 --camera "Canon EOS 1500D" --capture-image-and-download --filename  "Canon-$1"
cp "Canon-$1" ../capture_preview.jpg
echo "done"
exit 0
