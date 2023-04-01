var x = 1;
var y = 1;
while (x <= 10) {
y = 0;
while (y <= 10) {
document.write(x + ' x ' + y + ' = ' + x * y + '<hr/>');
y++;
}
document.write("<hr/>");
x++;
}