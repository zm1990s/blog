#!/bin/bash

pre='www.google.com'

function getImage {
#获取图片函数
echo -e "scan:$@"

allImageURLs=$(cat bufPage|tr ' ' 'n'|grep 'http'|grep "jpg'"|cut -d "'" -f 2)

domain=$(echo "$allImageURLs"|cut -d '/' -f 3|head -1)
if ! ( grep -q "$domain" domainlog );then
    echo "$domain" >> domainlog
    echo "Find New domain!"
fi
for imageURL in $allImageURLs 
do
    imageName=$(echo ${imageURL##*/})
    if [ -e $imageName ];then
        echo -e "t****$imageName is existed!"
    else
        wget -U "$MYAGENT" $imageURL -q
        echo -e "t====$imageName saved!"
    fi
done
}

function getPage {
    curl -A "$MYAGENT" -s $@> bufPage
#获取主页中的超链接，输出到bufpage
    getImage $@
    allPages=$(cat bufPage|tr ' ' 'n'|grep -v 'list'|grep 'html'|grep -v 'http'|grep "/t/"|cut -d '"' -f 2)
    for oneURL in $allPages
    do
#       echo "<<<<<<$oneURL>>>>>>"
        if echo $oneURL|grep -q [[:alnum:]];then
            if !( grep -q "$oneURL" waitting || grep -q "$oneURL" scanHistory );then
           #     echo "$pre$oneURL" >> waitting
                echo "add new page $pre$oneURL^^^^"
            fi
        else
            break;
        fi
    done
}

while args=$(head -1 waitting)
do
    sed -i '1d' waitting
    if ( echo $args|grep -q [[:alnum:]] );then
            getPage $args
    else
        break
    fi
done
