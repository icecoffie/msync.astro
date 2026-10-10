import type { Locale } from '../i18n/types';

/** One extra NFC review card on top of the bundle. */
export const NFC_EXTRA_CARD_PRICE = 30000;
/** Bundle price: domain + 1 year hosting + business email + simple landing page + 1 NFC review card. */
export const NFC_BUNDLE_PRICE = 3000000;

const formatIdr = (amount: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);

export const nfcBundlePriceLabel = formatIdr(NFC_BUNDLE_PRICE);
export const nfcExtraCardPriceLabel = formatIdr(NFC_EXTRA_CARD_PRICE);

export type NfcCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  stepsLabel: string;
  steps: { title: string; body: string }[];
  offer: {
    badge: string;
    name: string;
    price: string;
    priceNote: string;
    includes: { label: string; detail: string }[];
    addon: string;
    cta: string;
    note: string;
    whatsapp: string;
  };
  benefitsLabel: string;
  benefits: { icon: string; title: string; body: string }[];
  useCasesLabel: string;
  useCases: string[];
  page: {
    seoTitle: string;
    seoDescription: string;
    keywords: string;
    heroEyebrow: string;
    heroTitle: string;
    heroIntro: string;
    faqTitle: string;
    faq: { question: string; answer: string }[];
  };
};

const idCopy: NfcCopy = {
  eyebrow: '[ FITUR BARU / KARTU NFC REVIEW ]',
  title: 'Satu tap, pelanggan langsung kasih rating bisnis kamu.',
  intro:
    'Sistem aktivasi kartu NFC untuk bisnis: pelanggan cukup menempelkan HP ke kartu, lalu langsung diarahkan ke halaman rating Google Review, katalog, atau kontak bisnis kamu. Tidak perlu aplikasi, tidak perlu ketik link.',
  stepsLabel: 'Cara kerjanya',
  steps: [
    { title: 'Aktivasi kartu', body: 'Kami daftarkan dan program kartu NFC atas nama bisnis kamu lewat dashboard aktivasi Matrix Sync.' },
    { title: 'Arahkan tujuannya', body: 'Tentukan kartu mau membuka Google Review, WhatsApp, katalog produk, atau landing page bisnis kamu.' },
    { title: 'Pelanggan tinggal tap', body: 'Taruh kartu di meja kasir atau meja pelanggan. Sekali tap, halaman rating langsung terbuka di HP mereka.' },
    { title: 'Pantau hasilnya', body: 'Lihat jumlah tap, kartu mana yang paling aktif, dan ganti tujuan kartu kapan saja tanpa cetak ulang.' },
  ],
  offer: {
    badge: 'Paket aktivasi',
    name: 'NFC Review Starter untuk bisnis',
    price: nfcBundlePriceLabel,
    priceNote: 'sekali bayar / tahun pertama',
    includes: [
      { label: 'Domain bisnis', detail: 'pilihan nama domain untuk bisnis kamu' },
      { label: 'Hosting 1 tahun', detail: 'server terkelola, SSL aktif, siap online' },
      { label: 'Email bisnis', detail: 'alamat email dengan domain sendiri' },
      { label: 'Landing page simple', detail: 'halaman profil bisnis yang rapi dan mobile friendly' },
      { label: '1 kartu NFC review', detail: 'kartu fisik, sudah diprogram dan siap dipakai' },
    ],
    addon: `Mau kartu lebih banyak untuk tiap meja atau tiap kasir? Tambah ${nfcExtraCardPriceLabel} per kartu.`,
    cta: 'Aktivasi kartu NFC bisnis',
    note: 'Harga sudah termasuk setup dan pengiriman kartu ke alamat kamu.',
    whatsapp:
      'Halo Matrix Sync, saya tertarik dengan paket aktivasi kartu NFC review untuk bisnis saya. Boleh dijelaskan prosesnya?',
  },
  benefitsLabel: 'Kenapa pakai kartu NFC review',
  benefits: [
    { icon: 'fa-solid fa-star', title: 'Rating naik lebih cepat', body: 'Pelanggan tidak perlu mencari halaman review sendiri. Semakin kecil hambatannya, semakin banyak yang mau memberi rating.' },
    { icon: 'fa-solid fa-mobile-screen-button', title: 'Tanpa aplikasi tambahan', body: 'Berfungsi langsung di HP Android dan iPhone modern lewat NFC bawaan, atau lewat QR cadangan di kartu.' },
    { icon: 'fa-solid fa-rotate', title: 'Tujuan bisa diganti', body: 'Ganti link tujuan kapan saja dari dashboard. Kartu yang sudah tercetak tetap bisa dipakai.' },
    { icon: 'fa-solid fa-chart-line', title: 'Terhubung ke website', body: 'Kartu, landing page, email bisnis, dan domain dipasang jadi satu identitas digital yang konsisten.' },
  ],
  useCasesLabel: 'Cocok untuk',
  useCases: ['Kafe & restoran', 'Barbershop & salon', 'Klinik & apotek', 'Bengkel', 'Toko retail', 'Hotel & homestay', 'Jasa service', 'UMKM'],
  page: {
    seoTitle: 'Kartu NFC Review Bisnis & Sistem Aktivasi | Matrix Sync Tech',
    seoDescription:
      'Jasa pembuatan kartu NFC review bisnis dan sistem aktivasi kartu NFC. Paket Rp 3 juta sudah termasuk domain, hosting 1 tahun, email bisnis, landing page, dan 1 kartu NFC. Tambah kartu Rp 30.000.',
    keywords:
      'kartu nfc review bisnis, jasa kartu nfc google review, sistem aktivasi kartu nfc, kartu nfc rating bisnis, jasa pembuatan website murah, kartu review google murah, nfc tap review umkm',
    heroEyebrow: '[ KARTU NFC REVIEW ]',
    heroTitle: 'Kartu NFC review untuk bisnis, lengkap dengan sistem aktivasinya.',
    heroIntro:
      'Kami menyiapkan kartu, sistem aktivasi, domain, hosting, email bisnis, dan landing page dalam satu paket. Pelanggan cukup tap, rating bisnis kamu jalan.',
    faqTitle: 'Pertanyaan soal kartu NFC',
    faq: [
      { question: 'Kartu NFC ini bisa dipakai di HP apa saja?', answer: 'Hampir semua HP Android keluaran beberapa tahun terakhir dan iPhone 7 ke atas sudah mendukung pembacaan NFC langsung dari layar kunci. Untuk HP yang tidak mendukung, kartu tetap bisa dipindai lewat QR code cadangan yang kami cetak di kartu.' },
      { question: 'Apakah kartunya bisa diarahkan ke Google Review?', answer: 'Bisa. Kartu dapat diarahkan ke halaman ulasan Google Business Profile, WhatsApp, Instagram, katalog produk, atau landing page bisnis kamu. Tujuan kartu dapat diganti kapan saja tanpa mencetak ulang.' },
      { question: 'Apa saja yang saya dapat dengan harga Rp 3 juta?', answer: `Paket ${nfcBundlePriceLabel} sudah termasuk domain, hosting untuk satu tahun, email bisnis dengan domain sendiri, landing page simple untuk bisnis, dan satu kartu NFC review yang sudah diaktivasi.` },
      { question: 'Kalau butuh lebih dari satu kartu?', answer: `Setiap kartu tambahan dikenakan biaya ${nfcExtraCardPriceLabel} per kartu. Banyak bisnis mengambil satu kartu per meja atau per titik kasir supaya pelanggan tidak perlu menunggu giliran.` },
      { question: 'Berapa lama proses pembuatannya?', answer: 'Aktivasi sistem dan landing page biasanya selesai dalam 5 sampai 10 hari kerja setelah brief dan materi lengkap. Pengiriman kartu fisik menyesuaikan lokasi pengiriman.' },
      { question: 'Setelah satu tahun bagaimana?', answer: 'Domain dan hosting diperpanjang tahunan. Kami akan mengingatkan sebelum masa aktif habis dan memberitahukan biaya perpanjangannya lebih dulu, tanpa biaya tersembunyi.' },
    ],
  },
};

const enCopy: NfcCopy = {
  eyebrow: '[ NEW / NFC REVIEW CARDS ]',
  title: 'One tap and your customer leaves a rating.',
  intro:
    'An NFC card activation system for businesses. Customers tap their phone on the card and land straight on your Google review page, catalogue, or contact page. No app to install, no link to type.',
  stepsLabel: 'How it works',
  steps: [
    { title: 'Activate the card', body: 'We register and program each NFC card under your business through the Matrix Sync activation dashboard.' },
    { title: 'Point it somewhere', body: 'Choose what the card opens: a Google review page, WhatsApp, a product catalogue, or your business landing page.' },
    { title: 'Customers tap', body: 'Leave the card at the counter or on the table. A single tap opens the rating page on their phone.' },
    { title: 'Track the results', body: 'See how many taps each card gets and change its destination at any time, without reprinting anything.' },
  ],
  offer: {
    badge: 'Activation bundle',
    name: 'NFC Review Starter for business',
    price: nfcBundlePriceLabel,
    priceNote: 'one-time / first year',
    includes: [
      { label: 'Business domain', detail: 'a domain name registered for your business' },
      { label: '1 year of hosting', detail: 'managed server with SSL, ready to go live' },
      { label: 'Business email', detail: 'an email address on your own domain' },
      { label: 'Simple landing page', detail: 'a clean, mobile-friendly business profile page' },
      { label: '1 NFC review card', detail: 'a physical card, programmed and ready to use' },
    ],
    addon: `Need one card per table or per counter? Each additional card is ${nfcExtraCardPriceLabel}.`,
    cta: 'Activate your NFC cards',
    note: 'The price covers setup and delivery of the card to your address.',
    whatsapp: 'Hello Matrix Sync, I am interested in the NFC review card activation bundle for my business. Could you walk me through it?',
  },
  benefitsLabel: 'Why NFC review cards work',
  benefits: [
    { icon: 'fa-solid fa-star', title: 'Ratings arrive faster', body: 'Customers no longer have to hunt for your review page. The smaller the friction, the more ratings you collect.' },
    { icon: 'fa-solid fa-mobile-screen-button', title: 'No extra app', body: 'Works straight from the NFC reader built into modern Android phones and iPhones, with a printed QR code as a fallback.' },
    { icon: 'fa-solid fa-rotate', title: 'Reprogrammable', body: 'Change the destination link from the dashboard whenever you like. Cards already printed keep working.' },
    { icon: 'fa-solid fa-chart-line', title: 'Connected to your site', body: 'Cards, landing page, business email, and domain are set up as one consistent digital identity.' },
  ],
  useCasesLabel: 'A good fit for',
  useCases: ['Cafés & restaurants', 'Barbershops & salons', 'Clinics & pharmacies', 'Workshops', 'Retail stores', 'Hotels & homestays', 'Service businesses', 'Small businesses'],
  page: {
    seoTitle: 'NFC Review Cards & Activation System for Business | Matrix Sync Tech',
    seoDescription:
      'NFC review cards and an NFC card activation system for businesses. The bundle includes a domain, one year of hosting, business email, a landing page, and one NFC card. Extra cards are IDR 30,000 each.',
    keywords:
      'nfc review card, nfc google review card, nfc card activation system, nfc business card for reviews, tap to review card, affordable web development agency, nfc rating card for business',
    heroEyebrow: '[ NFC REVIEW CARDS ]',
    heroTitle: 'NFC review cards for your business, activation system included.',
    heroIntro:
      'Cards, the activation system, a domain, hosting, business email, and a landing page in one bundle. Your customers tap, your ratings start moving.',
    faqTitle: 'Questions about the NFC cards',
    faq: [
      { question: 'Which phones can read these NFC cards?', answer: 'Nearly every Android phone released in recent years, and iPhone 7 or newer, can read NFC straight from the lock screen. For phones that cannot, the card also carries a printed QR code as a fallback.' },
      { question: 'Can the card point to Google Reviews?', answer: 'Yes. A card can point to your Google Business Profile review page, WhatsApp, Instagram, a product catalogue, or your landing page, and you can change that destination at any time without reprinting the card.' },
      { question: 'What does the bundle include?', answer: `The ${nfcBundlePriceLabel} bundle covers a domain, one year of hosting, a business email on your own domain, a simple business landing page, and one activated NFC review card.` },
      { question: 'What if I need more than one card?', answer: `Every additional card is ${nfcExtraCardPriceLabel}. Most businesses take one card per table or per counter so customers never have to wait their turn.` },
      { question: 'How long does setup take?', answer: 'The activation system and landing page usually take 5 to 10 working days once the brief and assets are complete. Physical card delivery depends on your location.' },
      { question: 'What happens after the first year?', answer: 'The domain and hosting renew yearly. We tell you the renewal cost before your term ends, with no hidden fees.' },
    ],
  },
};

export const getNfcCopy = (locale: Locale): NfcCopy => (locale === 'en' ? enCopy : idCopy);
