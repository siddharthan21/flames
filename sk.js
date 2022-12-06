
function cal(){
 var youname = document.getElementById('yn').value;
 var crhname = document.getElementById('cn').value;
 var both = youname.length+crhname.length;
 var i=0,k=0;j=0,count=0,q=0;
 var name1=[];
 var name2=[];
 var arr1 =[];
 name1 =youname.split("");
 name2 =crhname.split("");
 console.log(name1 , name2);

 let chars1 = name1;
let afs1 = chars1.filter((a, index) => {
    return chars1.indexOf(a) === index;
});
let chars2 = name2;
let afs2 = chars2.filter((a, index) => {
    return chars2.indexOf(a) === index;
});
var l1 = afs1.length;
var l2 =afs2.length;
console.log(afs1,l1,afs2,l2);

if(l1>l2){
    var big =l1;
    var saml =l2;
 }
 else{
    var big=l2;
    var saml=l1;
 }
 for(i=0;i<=saml;i++){
    for(q=0;q<=big;q++){
        if(l1<=l2){
            if(afs1[i]==afs2[q]){
            j=j+1;
          /*  console.log(afs1[i],i);*/
        }
        else{
           k= k+1;
        }
    }
       else{
        if(afs2[i]==afs1[q]){
            j=j+1;
           /* console.log(afs2[i],j);*/
        }
        else{
            k=k+1;
        }
       }
}
}
var cal1=both-(j-1);
var final=cal1 % 6;
var result;
console.log(j,cal1,both,final);

    switch(final){
        case 1: result="friends";
        break;
        case 2: result="Love";
        break
        case 3: result="Affection";
        break;
        case 4: result="Marrige";
        break
        case 5: result="Enimey";
        break;
        case 6: result="sister" 
        break;
        case 0: result="friend";
        break;
    }
    console.log(result);
}