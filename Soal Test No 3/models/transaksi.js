var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var transaksiSchema = new Schema({
    nama: String,
    kode:String,
    ukuran:String,
    warna:String,
    alamat_pengiriman:String,
    jumlah:String
});

module.exports = mongoose.model('Transaksi', transaksiSchema);