let str = 'madam';
let str_p = '';
for(let i=str.length-1; i>=0; i--){ //should be i--
  str_p +=str[i];
}
if(str == str_p){
  console.log(str,'is Palindrome')
}
else{
  console.log(str,'is not a Palindrome')
}