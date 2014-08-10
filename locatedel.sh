#!/bin/bash

my()
{
aa=`zenity --text=输入要搜索的关键字 --entry `
if [ $? = 1 ]
then exit
fi
bb=( `locate $aa |grep -v home|zenity --width=600 --height=400 --list --title "Search Results" --text "Finding all header files.." --multiple  --separator=\  --column "Files"`)
if [ $? = 1 ]
then exit
fi

zenity --question --text="你确定删除下列文件或文件夹？？${bb[*]}"

if [ $? = 0 ]
then 
if [ $USER = root ]
then `rm -rf ${bb[*]}`
else 
# notify-send "$USER"
kdesu rm -rf ${bb[*]}
fi
#如果你不想把文件移入回收站而是直接删除，取消上行的#号，删除下面一行
#then `mv ${bb[*]} ~/.local/share/Trash/files`
else exit
fi



case $? in
0)
notify-send "成功删除${bb[*]}" ;;
*)
notify-send "删除失败，请检查文件是否存在或可读" ;;
esac
}

my




