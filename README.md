# Praktikum iz objektnog web programiranja - ISPIT
 > Koriscene tehnologije Angular 14 i Laravel 8.1
# Instrukcije

***Potrebno je unutar Backend-Laravel foldera pronaci fajl***

>.env.example

nakon toga obrisati ekstenziju ```.example``` tako da ostane samo ```.env```

U tom fajlu podesi potrebne parametre poput portova i naziv baze podataka


> Otvoriti XAMPP i ukljuciti Apache i MySQL
> 
> Otvoriti ```http://127.0.0.1/phpmyadmin/```

1. Napraviti bazu pod nazivom "ng_music"

3. Importovati ng_music.sql

3. Otvoriti 2 terminala

> U prvom terminalu pokrenuti komande

``cd Backend-Laravel``<br>
 
``composer install``<br>

``php artisan key:generate``<br>

``php artisan config:cache``<br>

``php artisan serve --port=8000``

> U drugom terminalu pokrenuti komande

``cd Frontend-Angular``<br>

``npm install``<br>

``ng serve --open``

>***Potrebno je pokrenuti na :4200***<br>

Kredencijali za admin logovanje su :
````
admin@gmail.com
pass
````
Kredencijali za user logovanje su :
````
user@gmail.com
pass
````

# Funkcionalnosti

***USER***

> Omoguceno pravljenje novih plejlisti i dodavanje pesama unutar istih, tako i brisanje plejlisti i pesama unutar

***ADMIN***

>Omoguceno dodavanje, izmena i brisanje (pesme i izvodjaci)


