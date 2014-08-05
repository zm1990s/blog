#!/bin/bash
let s=0
while [ $s -lt 13000 ]
do
#echo -n "00"; dd bs=1 count=5 if=/dev/random 2>/dev/null |hexdump -v -e '/1 ":%02X"'
#echo ""
echo '00'$(od -An -N5 -t xC /dev/urandom) | sed -e 's/ /:/g'
let s=$s+1
done