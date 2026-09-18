# Personal Space — Liquid Glass

Website profil personal statis dengan nuansa Apple Liquid Glass / iOS, dibuat tanpa framework agar mudah diedit dan dipublikasikan lewat GitHub Pages.

## Cara mengisi konten

1. **Nama dan bio:** edit teks di `index.html`.
2. **Musik:** edit daftar lagu dan album art di section `#music`.
3. **Series:** edit judul, genre, rating, lalu ubah background poster di `.poster-one` sampai `.poster-four` pada `styles.css` menjadi URL gambar atau file lokal.
4. **Gallery:** ubah nilai `--gallery-image` pada `.gallery-item` di `styles.css` menjadi `url('assets/foto.jpg')`.
5. **Background video:** ganti URL `<source>` di `index.html` dengan video kamu sendiri. Untuk file lokal, misalnya `assets/background.mp4`.
6. **Musik autoplay:** browser biasanya memblokir autoplay dengan suara. Isi `audio.src` di `script.js`; musik akan mulai saat tombol audio ditekan.

## Menjalankan

Buka `index.html` langsung di browser, atau aktifkan GitHub Pages dari **Settings → Pages → Deploy from branch → main → /(root)**.

Situs ini sudah responsive, memiliki animasi reveal saat scroll, navigasi aktif, menu mobile, theme toggle, floating glass UI, dan preview gallery.
