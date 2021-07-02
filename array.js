const names = ["jyothika", "kavya", "janu"];
        names.unshift("sam");

        names.push("ram");
        var len = names.length;
       console.log(names);
   
       console.log("len is:" + len);
      
        var sortarr = names.sort();
        console.log("after sorting the array is:" + sortarr);
     
        console.log(names[0]);
       
        console.log(names[len - 1]);
      
        console.log(names);
    
        names.pop();
        console.log(names);
      
        console.log(typeof names);
       
        console.log(Array.isArray(names));
        
        console.log(names.indexOf("jyothika"));
       
        //associative arrays//
        var fruits = [];
        fruits[0] = "strawberry";
        fruits[1] = "litch";
        fruits[2] = "mango";
        fruits[3] = "banana";
        console.log(fruits[2] + fruits.length);
      
        console.log(typeof fruits[2]);
       
        console.log(fruits.splice(1, 0, "kiwi", "orange"));
    
        console.log(fruits.toString());
        
        console.log(fruits.join("*"));
       
        console.log("reverse the string:"+fruits.reverse());
      
        var conarrays = names.concat(fruits);
        console.log("the concatenated array is :" + conarrays);
       
        console.log(fruits.splice(0, 1));
      
        //objects//
        const person = {
            firstname: "jyothika",
            lastname: "puthineedi",
            age: 20

        }
        console.log(person.firstname);

        var txt="";
        var colors=["red","pink","orange","blue"];
        colors.forEach(myFunction);
        function myFunction(value){
            txt+=value;
        }console.log(txt+" ");

        var color_arr=colors.map(display);
        function display(value){
           return txt+=value;
        }console.log("color_arr:"+txt);
        
        var age=[18,22,34,10,8,5,45];
        var eligible_age_for_vote=age.filter(check);
        
        function check(value){
            return  value>18;
        
        }console.log(eligible_age_for_vote);
        var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}console.log(sum);
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);