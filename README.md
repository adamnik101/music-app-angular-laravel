# Praktikum iz objektnog web programiranja - ISPIT
 > Koriscene tehnologije Angular 14 i Laravel 8.1
# Instrukcije

> Otvoriti XAMPP i ukljuciti Apache i MySQL
> 
> Otvoriti ```http://127.0.0.1/phpmyadmin/```

1. Napraviti bazu pod nazivom "ng_music"

3. Importovati ng_music.sql

3. Otvoriti 2 terminala

6. U prvom terminalu 
``cd Backend-Laravel``,
zatim 
``composer install``
i nakon toga 
``php artisan serve --port=8000``

7. U drugom terminalu ``cd Frontend-Angular``, zatim ``npm install`` i nakon toga ``ng serve --open``<br>

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

#Funkcionalnosti

***USER***

> Omoguceno pravljenje novih plejlisti i dodavanje pesama unutar istih, tako i brisanje plejlisti i pesama unutar

***ADMIN***

>Omoguceno dodavanje, izmena i brisanje (pesme i izvodjaci)


