program Project1;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils;


  var
  n,i:integer;
begin
repeat
 write('Ingrese hasta que nro natura se mostrara : ');
 read(n);
until n>0;
 for i := 1 to n do
 if i mod 2=0 then
   begin
    write(i)
   end;
   readln;readln;
end.
