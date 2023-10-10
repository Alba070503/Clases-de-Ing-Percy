program Project1;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils;
var
n,i,serie:integer;
begin
  repeat
    write (' Ingrese la cantidad de elementos a generar : ') ;
    readln(n);
  until n>0;
  serie:=1;
  for i := 1 to n do
  begin
    write(serie,',');
    serie:=serie+i;
  end;
  readln;
end.
