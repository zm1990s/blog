cat a|grep ":[0-9]"|awk '{print $3}'|sed 's/\./:/'|sed 's/^/INDEX 01 /'|awk '{print "";print ""; print $0}'>b
cat a|grep -v ":[0-9]"|grep "^[0-9]"|awk -F / '{ print $1}'|awk -F . '{print "TRACK", $1,"AUDIO"; print "TITLE \""$0"\"" ; print ""}'>c
#cat a|grep -v ":[0-9]"|grep "^[0-9]"|awk -F / '{print $1;print ""}'>c
#while [ `cat b|head -"$aaaa"` ]
#do 
#cat b|head -"$aaaa" >>d
#done
#aaaa=1
echo TITLE '"Ultimate Classical Piano"'>a.cue

	paste b c >>a.cue

rm b c 

