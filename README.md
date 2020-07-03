# tokocrypto.com
Repo ini berisikan test untuk posisi backend developer di tokocrypto.com

Dokumentasi dan Penggunaan

Soal ke-1 

Buat sebuah fungsi untuk menjumlahkan bilangan fibonacci prima
dengan parameter maximum fibonacci number, contoh input :
INPUT :
sumFibonanciPrime(20);
OUTPUT:
25

Cara Menjalankan :
1. Silahkan buka folder Test No 1
2. Double Click pada file soal1.html


Soal ke-2

Pada bagian ini diberikan sebuah array yaitu [9,10,11,12,13,14,15]
User akan memasukan inputan berupa angka (misal 1, 2 dan sebagainya)dimana angka yang dimasukan oleh user akan menentukan urutan dari elemen Array Tersebut
Misalkan : Contoh: Variable inputan adalah N.
Jika N = 5 maka hasil array adalah [11,12,13,14,15,9,10].
Jika N = 2 maka hasil array adalah: [14,15,9,10,11,12,13]

Cara menjalankan :
1. Silahkan buka folder Soal Test No 2
2. Double Click pada soal2.html
3. Silahkan masukan inputan berupa angka 
4. Klik Tombol Hasil

Soal ke-3

Pada bagian ini diberikan challenge untuk membuat sebuah API sederhana menggunakan NodeJS untuk merepresentasikan proses penjualan barang. 
Pada soal ini saya menggunakan NodeJS dan framework Express, serta menggunakan MongoDB untuk database 

Berikut End Point 
/api/transaksi :GET :POST
/api/transaksi/:nama :GET :PUT :DELETE

Test API (POSTMAN)
silahkan ketikan url /api/transaksi untuk mendaptkan semua record pesanan (Gunakan method GET)
silahkan ketikan url /api/transaksi untuk melakukan pesanan (Gunakan method POST), silahkan masukan key nama, kode, ukuran, warna, alamat_pengiriman, jumlah
silahkan ketikan url /api/transaksi/:nama untuk mendaptkan record pesanan tertentu (Gunakan method GET)
silahkan ketikan url /api/transaksi/:nama untuk mengupdate pesanan tertentu (Gunakan method PUT)
silahkan ketikan url /api/transaksi/:nama untuk menghapus pesanan tertentu (Gunakan method DELETE)

Cara menjalankan : 
1. Buka cmd pada direktori folder Soal Test No 3
2. Ketikan perintah node server.js
