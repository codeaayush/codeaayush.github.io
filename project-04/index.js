/*var x = 2;
        switch (x) {
            case 1:
                document.write("monday"+"<br>");
                break;
            case 2:
                document.write("Tuesday"+"<br>");
                break;
            default:
                document.write("Invalid Choice"+"<br>");
        }

//For converting into a string
var a = 10,b=6;
var x=prompt("Enter your choice 1.add 2.sub", "")
        switch (x) {
            case '1':
                document.write("ADD : "+(a+b));
                break;
            case '2':
                document.write("SUB : "+(a-b));
                break;
            default:
                document.write("Invalid Choice"+"<br>");
        }

//For converting into a integer If we want to convert in float then we use parsefloat(prompt())
var a = 10,b=6;
var x= parseInt(prompt("Enter your choice 1.add 2.sub", ""));
        switch (x) {
            case 1:
                document.write("<br>"+"ADD : "+(a+b));
                break;
            case 2:
                document.write("SUB : "+(a-b));
                break;
            default:
                document.write("Invalid Choice"+"<br>");
        } 
  */

  document.write('<table border=1px; color:pink>');
  for(var i=0;i<10;i++)
  {
    document.write('<tr>');
    for(var j=0;j<10;j++)
    {
        document.write('<td>');
        document.write('AWM');
        document.write('</td>');
    }
    document.write('<tr>');
  }
