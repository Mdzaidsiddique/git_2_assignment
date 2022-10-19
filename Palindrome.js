let str = 'madam';
let str_p = '';
for(let i=0; i<=str.length-1; i++){ //should be i--//both are same
  str_p +=str[i];
}
if(str == str_p){
  console.log(str,'is Palindrome')
}
else{
  console.log(str,'is not a Palindrome')
}