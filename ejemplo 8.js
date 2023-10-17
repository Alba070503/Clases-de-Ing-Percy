program Project1;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils;
var
nro,i:integer;
fact:LongInt;
begin
 repeat
   write(' ingrese el numero  :');
   readln(nro);
 until nro>0;
 fact:=1;
 for i  := 1 to nro do
   begin
     fact:=fact*i;
   end;
   writeln('el factorial de ',nro, ' es ',fact);
   readln;
 end.
