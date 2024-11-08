#!/usr/bin/env sh

gphoto2 --camera "Sony Alpha-A5100 (Control)" --capture-image-and-download --filename  "Sony-$1"
echo "done"
exit 0
