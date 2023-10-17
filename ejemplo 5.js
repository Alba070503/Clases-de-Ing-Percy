program billetes;
uses crt;
 var
cont1,cont2,cont3,cont4,cont5,n,cont,sum:integer;
begin
  cont:=0;
  cont1:=0;
  cont2:=0;
  cont3:=0;
  cont4:=0;
  cont5:=0;
  sum:=0; 
  writeln('ingrese las cantidades');
  repeat
   repeat
   readln(n);
    if ((n=10) or (n=20) 
   or (n=50) or  (n=100) 
   or (n=200)) then
    begin
    {writeln('pasa');}
    end
    else
    begin
    writeln('ingrese cantidad  de la siguiente denominacion 10bs,20bs,50bs,100bs,200bs');
    end;
   until (n=10) or (n=20) 
   or (n=50) or  (n=100) 
   or (n=200);
 cont:=cont+1;
    if n=10 then
    begin
     cont1:=cont1+1;
    end
    else
    begin
     if n=20 then
      begin
      cont2:=cont2+1;
      end
      else
      begin
       if n=50 then
        begin
         cont3:=cont3+1;
        end
        else
        begin
         if n=100 then 
          begin
            cont4:=cont4+1
          end
          else
          begin
           if n=200 then
            begin
             cont5:=cont5+1
            end;
          end
        end
      end;
    
    end; 
   sum:=sum+n; 
  until cont=5;
  writeln('tiene un total de villetea con denominacion de 10bs');
  writeln(cont1);
  writeln('tiene un total de villetea con denominacion de  20bs');
  writeln(cont2);
  writeln('tiene un total de villetea con denominacion de 50bs');
  writeln(cont3);
  writeln('tiene un total de villetea con denominacion de 100bs');
  writeln(cont4);
  writeln('tiene un total de villetea con denominacion de 200bs');
  writeln(cont5);
  writeln('usted tiene un total de  '); 
   write(sum, 'bs');     
   readln;
end.
