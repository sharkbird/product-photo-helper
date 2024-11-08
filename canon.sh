#!/usr/bin/env sh

gphoto2 --camera "Canon EOS 1500D" --capture-image-and-download --filename  "canon-$1"
echo "done"
exit 0
