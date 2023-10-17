program Project1;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils;
var
 n,ant,act,fib,i:integer;
begin
 repeat
   write(' ingrese la capacidad de elementos a generar  :');
   readln(n);
 until n>0;
 ant:=1;
 act:=0;
 for i  := 1 to n do
   begin
     fib:=ant+act;
     write(fib,';');
     ant:=act;
     act:=fib;
   end;
   readln;
 end.
