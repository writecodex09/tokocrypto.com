//Settingan umum
var express     = require('express');
var bodyParser  = require('body-parser');
var app         = express();
var router      = express.Router();
var port        = process.env.PORT || 3000;

//setting database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apitransaksi', {
    useMongoClient: true
});

var Transaksi = require('./models/transaksi');
const { Router } = require('express');

// melakukan konfigurasi bodyParser
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//midleware
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

//test router
router.get('/', function(req, res){
    res.json({ message: "halaman pembelian"})
});

router.route('/transaksi')

    .post(function(req, res){

    var transaksi               = new Transaksi();
    transaksi.nama              = req.body.nama;
    transaksi.kode              = req.body.kode;
    transaksi.ukuran            = req.body.ukuran;
    transaksi.warna             = req.body.warna;
    transaksi.alamat_pengiriman = req.body.alamat_pengiriman;
    transaksi.jumlah            = req.body.jumlah;

    transaksi.save(function(err){
        if(err) res.send(err);

        res.json({message: "Produk berhasil dipesan"});
     });

     }).get(function(req, res){
        Transaksi.find(function(err, transaksi){
            if(err) res.send(err);
            res.json(transaksi);
        });
    });

router.route('/transaksi/:nama')
.get(function(req, res){
    Transaksi.find({nama:req.params.nama}, function(err, transaksi){
        if(err) res.send(err);
        res.json(transaksi);
    });
}).put(function(req, res){
    Transaksi.update(
        { nama:req.params.nama }, 
        { nama :req.body.nama},
        function(err, transaksi){
            if(err) res.send(err);
            res.json("Pesanan berhasil diupdate");
    });
     }).delete(function(req, res){
        Transaksi.remove(
            { nama: req.params.nama },
            function(err, transaksi){
            if(err) res.send(err);
            res.json({message:"Pesanan anda berhasil dihapus"});
        });
     });

// prefix API
app.use('/api', router);

app.listen(port);
console.log('port berjalan di ' + port);