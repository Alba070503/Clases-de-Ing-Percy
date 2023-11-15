program Project1;
{$APPTYPE CONSOLE}
{$R *.res}
uses
  System.SysUtils,
  Unit1 in 'Unit1.pas';

procedure InverteNros(var x,y:integer);
var
 aux:integer;
begin
  aux:=x;
  x:=y;
  y:=aux;
  {witeln('Dentro del´procedimiento : X=' ,x, ', Y=',y);}
end;

Function Suma2Nros(X,y:integer):integer;
var
 sum:integer;
begin
  sum:=x+y;
  Suma2Nros:=sum;
end;

FUNCTION  exponente(x,y:integer):integer;
 var
  exp:integer;
  i: Integer;
 begin
   exp:=1;
   for i := 1 to y do
     exp:=exp*x;
   exponente:=exp;
 end;

var
   a,b,suma,potencia:integer;
begin
  write('Ingrese el valor para A: ');
  readln(a);
  write('Ingrese el valor para B: ');
  readln(b);
  InverteNros(a,b);
  writeln('A=',a ,' ; B= ',b);
  suma:=Suma2Nros(a,b);
  writeln('La suma de A y B es ',suma);
  potencia:=exponente(a,b);
  writeln(a, '^',b, ' = ',potencia);
  readln
end.
