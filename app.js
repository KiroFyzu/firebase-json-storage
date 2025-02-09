var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var { storage, ref, uploadBytes, getDownloadURL } = require('./firebaseConfig');

var fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const upload = multer({ dest: 'uploads/' }); // Simpan file sementara di folder 'uploads'

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Tidak ada file yang diunggah' });
    }

    const filePath = req.file.path; // Path file sementara
    const fileName = req.file.originalname; // Nama file asli
    const fileBuffer = fs.readFileSync(filePath); // Baca file sebagai buffer

    const storageRef = ref(storage, `images/${fileName}`);

    const snapshot = await uploadBytes(storageRef, fileBuffer, {
      contentType: req.file.mimetype, // Tipe file (misalnya, image/jpeg)
    });

    console.log('File berhasil diunggah:', snapshot.metadata.fullPath);

    const downloadURL = await getDownloadURL(storageRef);
    console.log('Download URL:', downloadURL);

    try{
    fs.unlinkSync(filePath);
    } catch(err){
      console.log('Gagal Menghapus File Sementara:', err);
    }
    

    res.json({ url: downloadURL });

    fs.appendFile('message.json', downloadURL + '\n', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
  } catch (error) {
    console.error('Error saat mengunggah file:', error);
    res.status(500).json({ error: 'Gagal mengunggah file' });
  }
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
