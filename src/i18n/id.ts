import type { SiteCopy } from './types';

export const id = {
  meta: {
    title: 'Matrix Sync Tech | Website, Aplikasi & UI/UX untuk Bisnis',
    description: 'Partner teknologi Indonesia untuk website, aplikasi, UI/UX, dan infrastruktur digital yang membantu bisnis tumbuh lebih cepat.',
    ogTitle: 'Bangun produk digital yang siap tumbuh',
  },
  nav: { about: 'Tentang', services: 'Layanan', work: 'Karya', pricing: 'Harga', faq: 'FAQ', contact: 'Hubungi kami' },
  hero: {
    eyebrow: '>_ DIGITAL PRODUCTS, BUILT TO MOVE',
    title: 'Teknologi yang membuat bisnis Anda bergerak.',
    description: 'Sebagai jasa pembuatan website terpercaya, kami merancang website, aplikasi, dan UI/UX yang jelas bagi pengguna serta siap dipakai tim Anda untuk berkembang.',
    primaryCta: 'Mulai konsultasi',
    secondaryCta: 'Lihat cara kami bekerja',
    tags: ['Website B2B', 'Aplikasi custom', 'UI/UX design'],
  },
  problem: {
    eyebrow: '01 / MASALAH YANG KAMI PECAHKAN',
    title: 'Ide bagus sering terhambat oleh eksekusi yang berantakan.',
    body: 'Website lambat, alur pengguna membingungkan, dan tools yang tidak saling bicara menghabiskan waktu yang seharusnya dipakai untuk melayani pelanggan.',
    points: ['Pesan brand tidak terbaca dalam lima detik pertama.', 'Proses manual membuat tim kehilangan momentum.', 'Produk digital dibuat sekali lalu sulit dikembangkan.'],
  },
  solution: {
    eyebrow: '02 / PENDEKATAN KAMI',
    title: 'Satu tim untuk menyatukan strategi, desain, dan teknologi.',
    body: 'Kami menerjemahkan tujuan bisnis menjadi pengalaman digital yang terukur, lalu membangunnya dengan fondasi yang bisa Anda kembangkan.',
    cards: [
      { title: 'Pahami dulu', body: 'Workshop singkat untuk menemukan prioritas, risiko, dan peluang yang paling bernilai.' },
      { title: 'Rancang dengan jelas', body: 'UI/UX yang mengurangi friksi, bukan sekadar terlihat modern di layar presentasi.' },
      { title: 'Bangun untuk besok', body: 'Codebase, hosting, dan dokumentasi yang siap mengikuti pertumbuhan bisnis Anda.' },
    ],
  },
  proof: { eyebrow: '03 / HASIL YANG TERUKUR', title: 'Kepercayaan dibangun dari pekerjaan yang selesai dengan baik.', body: 'Dari validasi ide sampai deployment, kami menjaga komunikasi tetap terbuka dan keputusan tetap dekat dengan tujuan bisnis.', stat: '1000+', statLabel: 'klien nasional & internasional' },
  services: {
    eyebrow: '04 / LAYANAN INTI',
    title: 'Pilih titik masuk yang paling Anda butuhkan.',
    items: [
      { title: 'Website & platform', body: 'Website company profile, landing page, e-commerce, dan platform web yang cepat serta mudah dikelola.', cta: 'Bangun website' },
      { title: 'Aplikasi custom', body: 'Aplikasi web dan mobile yang menyederhanakan proses internal atau membuka pengalaman baru bagi pelanggan.', cta: 'Bahas aplikasi' },
      { title: 'UI/UX & product design', body: 'Riset, user flow, prototype, dan design system untuk produk yang lebih mudah dipahami dan dipakai.', cta: 'Mulai dari desain' },
    ],
  },
  pricing: {
    eyebrow: '05 / INVESTASI',
    title: 'Mulai dengan ruang lingkup yang masuk akal.',
    body: 'Setiap proyek disesuaikan dengan target, timeline, dan tingkat kompleksitas Anda. Berikut titik awal untuk percakapan.',
    tiers: [
      { name: 'Launch', price: 'Mulai Rp 1,5 jt', detail: 'Landing page atau validasi ide untuk bergerak cepat.' },
      { name: 'Scale', price: 'Mulai Rp 7 jt', detail: 'Website bisnis atau aplikasi dengan fondasi yang siap berkembang.', featured: true },
      { name: 'Partner', price: 'Custom scope', detail: 'Pendampingan produk, sistem internal, dan kebutuhan jangka panjang.' },
    ],
  },
  faq: {
    eyebrow: '06 / PERTANYAAN YANG SERING MUNCUL',
    title: 'Sebelum kita mulai, mari luruskan beberapa hal.',
    items: [
      { question: 'Bagaimana cara memulai proyek?', answer: 'Kirimkan konteks singkat tentang bisnis dan tujuan Anda. Kami akan membalas dengan pertanyaan awal dan rekomendasi langkah berikutnya.' },
      { question: 'Apakah bisa mulai dari desain saja?', answer: 'Bisa. Kami dapat membantu riset, user flow, prototype, dan handoff ke tim development Anda.' },
      { question: 'Berapa lama pengerjaannya?', answer: 'Landing page biasanya 2-4 minggu. Produk yang lebih kompleks kami pecah menjadi milestone supaya progres dan prioritas tetap terlihat.' },
      { question: 'Apakah ada maintenance setelah launch?', answer: 'Ada. Kami menyediakan maintenance, optimasi, hosting, dan dukungan pengembangan sesuai kebutuhan.' },
      { question: 'Bisa bekerja dengan klien di luar Indonesia?', answer: 'Tentu. Kami terbiasa bekerja async dengan brief berbahasa Inggris dan jadwal lintas zona waktu.' },
      { question: 'Kenapa pertanyaannya panjang sekali?', answer: 'Karena proyek yang baik biasanya dimulai dari pertanyaan yang tepat. Tenang, kami tidak akan mengadakan ujian dadakan.' },
    ],
  },
  contact: { eyebrow: '07 / LANGKAH BERIKUTNYA', title: 'Punya masalah digital yang ingin dibereskan?', body: 'Ceritakan konteksnya. Kami akan membantu menemukan bentuk solusi yang paling masuk akal untuk bisnis Anda.', cta: 'Chat via WhatsApp' },
  footer: { description: 'Partner teknologi untuk bisnis yang ingin bergerak dengan lebih jelas.', rights: '© 2026 Matrix Sync Tech. Semua hak dilindungi.' },
} satisfies SiteCopy;
