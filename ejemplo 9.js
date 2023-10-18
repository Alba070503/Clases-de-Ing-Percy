program Project1;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils;
var
nro,i,fact:integer;
begin
 repeat
   write(' ingrese el numero  :');
   readln(nro);
 until nro>0;
 fact:=1;
 for i  := 1 to nro do
   begin
     fact:=fact*i;
     write(fact, ',');
   end;
   readln;
 end.
