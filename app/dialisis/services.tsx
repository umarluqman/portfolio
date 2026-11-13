'use client'
import { useState } from 'react'
import { EMAIL } from '../data'

type Lang = 'ms' | 'en'

const CONTENT = {
  ms: {
    hero: {
      title: 'Laman web & aplikasi untuk pusat dialisis.',
      body: 'Setiap pakej ada harga permulaan yang jelas. Starter, Profesional dan Rangkaian adalah skop tetap; pakej lebih besar disebut harga secara bertulis. Anda bayar yuran pembangunan sekali sahaja, ditambah Hosting tahunan. Pelan Penjagaan adalah pilihan.',
      proof:
        'Pembina Dialisis.my — direktori pusat dialisis Malaysia dengan 6,000+ pelawat sebulan.',
      cta: 'Minta sebut harga',
    },
    stepsTitle: 'Bagaimana kos dikira',
    steps: [
      [
        'Yuran pembangunan',
        'Sekali bayar',
        'Reka bentuk, pembinaan dan pelancaran mengikut skop dalam sebut harga bertulis.',
      ],
      [
        'Hosting',
        'Tahunan, wajib',
        'Laman kekal dalam talian, dibuat sandaran dan dikemas kini keselamatannya.',
      ],
      [
        'Pelan Penjagaan',
        'Bulanan, pilihan',
        'Bilangan perubahan kandungan setiap bulan — waktu operasi, syif, harga, gambar.',
      ],
    ],
    packagesTitle: 'Pakej',
    hostingLabel: 'Hosting',
    perYear: '/tahun',
    packages: [
      {
        name: 'Starter',
        tagline: 'Halaman tunggal pusat dialisis',
        target: 'Pusat dialisis swasta satu cawangan, pusat NGO',
        price: 'RM1,500',
        hosting: 'RM480',
        features: [
          'Alamat, Google Maps & waktu operasi',
          'Syif / sesi rawatan',
          'Panel: PERKESO, KKM, insurans',
          'Butang WhatsApp & panggilan',
        ],
      },
      {
        name: 'Profesional',
        tagline: 'Laman web pusat dialisis lengkap',
        target:
          'Pusat dialisis yang ingin menarik pesakit baharu & pesakit transit',
        price: 'RM3,500',
        hosting: 'RM900',
        features: [
          'Sehingga 6 halaman',
          'Profil nefrologis & jururawat',
          'Fasiliti, mesin & galeri',
          'CMS — kemas kini sendiri',
          'SEO tempatan asas',
        ],
      },
      {
        name: 'Rangkaian',
        tagline: 'Laman web korporat pelbagai cawangan',
        target: 'Kumpulan dialisis, rangkaian cawangan, yayasan',
        price: 'RM7,500',
        hosting: 'RM1,800',
        features: [
          'Pencari cawangan berdasarkan negeri',
          'Halaman khas setiap cawangan',
          'Kerjaya & berita',
          'Dwibahasa BM / EN',
        ],
      },
      {
        name: 'Aplikasi Mudah Alih',
        tagline: 'Aplikasi iOS & Android',
        target: 'Pusat & rangkaian dialisis yang mahu aplikasi sendiri',
        price: 'Dari RM20,000',
        hosting: 'Dari RM3,600',
        features: [
          'Jadual sesi & peringatan',
          'Rekod berat & tekanan darah',
          'Notifikasi push',
          'Log masuk pesakit',
        ],
      },
      {
        name: 'Enterprise',
        tagline: 'Transformasi digital berskala besar',
        target: 'Kumpulan dialisis besar, NGO kebangsaan',
        price: 'RM40,000 – 150,000+',
        hosting: 'Melalui cadangan',
        features: [
          'Integrasi sistem sedia ada',
          'Pelbagai peranan pengguna',
          'SLA & sokongan tahunan',
        ],
      },
    ],
    hostingTitle: 'Hosting',
    hostingBody:
      'Setiap laman yang diserahkan membayar Hosting setiap tahun. Hosting tidak termasuk perubahan kandungan. Ia meliputi:',
    hostingItems: [
      'Pelayan',
      'DNS',
      'Sijil SSL',
      'Sandaran harian, disimpan 30 hari',
      'Pemantauan uptime',
      'Tampalan keselamatan',
      'Pembaikan kerja yang diserahkan',
    ],
    careTitle: 'Pelan Penjagaan',
    careBody:
      'Untuk perubahan selepas pelancaran — waktu operasi, syif baharu, gambar.',
    perMonth: '/bulan',
    care: [
      ['Asas', 'RM99', '2 perubahan kandungan sebulan'],
      [
        'Perniagaan',
        'RM199',
        '5 perubahan sebulan, semakan keselamatan suku tahunan',
      ],
      [
        'Profesional',
        'RM399',
        '10 perubahan sebulan, keutamaan giliran, laporan analitik bulanan',
      ],
      [
        'SLA Perusahaan',
        'Dari RM1,000',
        'Skop dan tahap perkhidmatan ditetapkan dalam kontrak',
      ],
    ],
    careNote:
      'Satu perubahan kandungan = satu suntingan teks, gambar atau harga pada halaman sedia ada, maksimum 30 minit. Baki tidak dibawa ke bulan seterusnya.',
    addonsTitle: 'Tambahan',
    addonsNote:
      'Harga indikatif. Angka akhir bergantung pada integrasi, lesen pihak ketiga dan kerumitan.',
    addons: [
      ['Halaman tambahan', 'RM250 – 500'],
      ['Logo & penjenamaan asas', 'RM800 – 2,000'],
      ['Penulisan kandungan', 'RM300 – 1,000'],
      ['Terjemahan BM / EN / 中文 / தமிழ்', 'RM500 – 1,500'],
      ['SEO tempatan & Google Business Profile', 'RM1,000 – 3,000'],
      ['Pembayaran dalam talian', 'RM1,000 – 3,000'],
      ['Log masuk pesakit', 'RM2,500 – 6,000'],
      ['Dashboard admin', 'RM3,000 – 8,000'],
      ['Automasi WhatsApp (peringatan sesi)', 'RM1,000 – 3,000'],
      ['Integrasi API', 'RM2,000 – 8,000'],
      ['Aplikasi mudah alih khas', 'Dari RM20,000'],
    ],
    faqTitle: 'Soalan',
    faq: [
      [
        'Apakah beza Hosting dan Pelan Penjagaan?',
        'Hosting wajib dan tahunan — memastikan laman dalam talian dan selamat, serta membaiki apa yang dibina. Pelan Penjagaan adalah bulanan dan pilihan, untuk perubahan kandungan. Ia tidak menggantikan Hosting.',
      ],
      [
        'Adakah harga ini muktamad?',
        'Starter, Profesional dan Rangkaian adalah yuran tetap untuk skop tetap. Aplikasi Mudah Alih dan Enterprise bergantung pada ciri, peranan pengguna dan integrasi. Sebut harga bertulis menyatakan angka akhir sebelum kerja bermula.',
      ],
      [
        'Bagaimana dengan data pesakit dan PDPA?',
        'Pakej Starter hingga Rangkaian tidak menyimpan rekod perubatan. Untuk Aplikasi Mudah Alih dan Enterprise, keperluan Akta Perlindungan Data Peribadi 2010 dibincang semasa skop dan dinyatakan dalam sebut harga.',
      ],
      [
        'Bagaimana pembayaran dibuat?',
        'Terma dalam sebut harga bertulis. Tiada caj sebelum persetujuan. Projek besar boleh dibahagi mengikut milestone.',
      ],
      [
        'Siapa pemilik laman web?',
        'Anda memiliki domain, kandungan, gambar dan data. Pemilikan reka bentuk dan kod ditetapkan dalam kontrak sebelum kerja bermula.',
      ],
      [
        'Boleh saya kemas kini sendiri tanpa Pelan Penjagaan?',
        'Boleh untuk Profesional dan Rangkaian kerana ada CMS. Untuk Starter, suntingan dibuat oleh saya melalui Pelan Penjagaan dari RM99/bulan atau disebut harga satu per satu.',
      ],
    ],
    closingTitle: 'Beritahu apa yang pusat anda perlukan.',
    closingBody:
      'Hantar ringkasan pendek. Anda akan terima soalan, skop dan sebut harga.',
  },
  en: {
    hero: {
      title: 'Websites & apps for dialysis centres.',
      body: 'Every package has a published starting price. Starter, Professional and Network are fixed scope; larger packages are quoted in writing. You pay a one-time development fee plus yearly Hosting. A Care plan is optional.',
      proof:
        'Builder of Dialisis.my — Malaysia’s dialysis centre directory with 6,000+ monthly visitors.',
      cta: 'Get a quote',
    },
    stepsTitle: 'How it adds up',
    steps: [
      [
        'Development fee',
        'Paid once',
        'Design, build and launch to the scope in your written quote.',
      ],
      [
        'Hosting',
        'Yearly, required',
        'Keeps the site online, backed up and patched.',
      ],
      [
        'Care plan',
        'Monthly, optional',
        'A set number of content changes each month — opening hours, shifts, prices, photos.',
      ],
    ],
    packagesTitle: 'Packages',
    hostingLabel: 'Hosting',
    perYear: '/yr',
    packages: [
      {
        name: 'Starter',
        tagline: 'Single-page dialysis centre site',
        target: 'Single-branch private centres, NGO centres',
        price: 'RM1,500',
        hosting: 'RM480',
        features: [
          'Address, Google Maps & opening hours',
          'Treatment shifts / sessions',
          'Panels: SOCSO, MOH, insurance',
          'WhatsApp & call buttons',
        ],
      },
      {
        name: 'Professional',
        tagline: 'Complete dialysis centre website',
        target: 'Centres wanting new & transient patients',
        price: 'RM3,500',
        hosting: 'RM900',
        features: [
          'Up to 6 pages',
          'Nephrologist & nurse profiles',
          'Facilities, machines & gallery',
          'CMS — edit it yourself',
          'Basic local SEO',
        ],
      },
      {
        name: 'Network',
        tagline: 'Multi-branch corporate website',
        target: 'Dialysis groups, branch networks, foundations',
        price: 'RM7,500',
        hosting: 'RM1,800',
        features: [
          'Branch finder by state',
          'Dedicated page per branch',
          'Careers & news',
          'Bilingual BM / EN',
        ],
      },
      {
        name: 'Mobile App',
        tagline: 'iOS & Android app',
        target: 'Dialysis centres & networks wanting their own app',
        price: 'From RM20,000',
        hosting: 'From RM3,600',
        features: [
          'Session schedule & reminders',
          'Weight & blood pressure log',
          'Push notifications',
          'Patient login',
        ],
      },
      {
        name: 'Enterprise',
        tagline: 'Large-scale digital transformation',
        target: 'Large dialysis groups, national NGOs',
        price: 'RM40,000 – 150,000+',
        hosting: 'Quoted by proposal',
        features: [
          'Integration with existing systems',
          'Multiple user roles',
          'SLA & annual support',
        ],
      },
    ],
    hostingTitle: 'Hosting',
    hostingBody:
      'Every delivered site pays Hosting yearly. Hosting excludes content changes. It covers:',
    hostingItems: [
      'Servers',
      'DNS',
      'SSL certificate',
      'Daily backups, kept 30 days',
      'Uptime monitoring',
      'Security patches',
      'Fixes to delivered work',
    ],
    careTitle: 'Care plans',
    careBody: 'For changes after launch — opening hours, new shifts, photos.',
    perMonth: '/mo',
    care: [
      ['Essential', 'RM99', '2 content changes a month'],
      ['Business', 'RM199', '5 changes a month, quarterly security check'],
      [
        'Professional',
        'RM399',
        '10 changes a month, priority queue, monthly analytics report',
      ],
      [
        'Enterprise SLA',
        'From RM1,000',
        'Scope and service levels set in contract',
      ],
    ],
    careNote:
      'One content change = one edit to text, images or prices on an existing page, up to 30 minutes. Unused changes don’t roll over.',
    addonsTitle: 'Add-ons',
    addonsNote:
      'Indicative prices. Final figure depends on integrations, third-party licensing and complexity.',
    addons: [
      ['Additional page', 'RM250 – 500'],
      ['Logo & basic branding', 'RM800 – 2,000'],
      ['Copywriting', 'RM300 – 1,000'],
      ['Translation BM / EN / 中文 / தமிழ்', 'RM500 – 1,500'],
      ['Local SEO & Google Business Profile', 'RM1,000 – 3,000'],
      ['Online payment', 'RM1,000 – 3,000'],
      ['Patient login', 'RM2,500 – 6,000'],
      ['Admin dashboard', 'RM3,000 – 8,000'],
      ['WhatsApp automation (session reminders)', 'RM1,000 – 3,000'],
      ['API integration', 'RM2,000 – 8,000'],
      ['Custom mobile app', 'From RM20,000'],
    ],
    faqTitle: 'Questions',
    faq: [
      [
        'Hosting vs. Care plan?',
        'Hosting is required and yearly — it keeps the site online and secure, and covers fixes to what was built. A Care plan is monthly and optional, for content changes. It never replaces Hosting.',
      ],
      [
        'Are the prices final?',
        'Starter, Professional and Network are fixed fees for fixed scope. Mobile App and Enterprise depend on features, user roles and integrations. A written quote states the final figure before work starts.',
      ],
      [
        'What about patient data and PDPA?',
        'Starter to Network don’t store medical records. For Mobile App and Enterprise, Personal Data Protection Act 2010 requirements are discussed during scoping and stated in the quote.',
      ],
      [
        'How do payments work?',
        'Terms are in the written quote. Nothing is billed before acceptance. Larger projects can be split into milestones.',
      ],
      [
        'Who owns the website?',
        'You own the domain, content, images and data. Design and code ownership is set in the contract before work starts.',
      ],
      [
        'Can I skip the Care plan and update it myself?',
        'Yes for Professional and Network, which include a CMS. On Starter, edits are made by me through a Care plan from RM99/month or quoted individually.',
      ],
    ],
    closingTitle: 'Tell me what your centre needs.',
    closingBody:
      'Send a short brief. You’ll get questions, a scope and a quote.',
  },
}

function Cta({ label }: { label: string }) {
  return (
    <a
      href={`mailto:${EMAIL}?subject=Sebut%20harga%20%2F%20Quote%20-%20Pusat%20Dialisis`}
      className="inline-flex rounded-full bg-zinc-950 px-4 py-2 text-sm text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
    >
      {label}
    </a>
  )
}

export function Services() {
  const [lang, setLang] = useState<Lang>('ms')
  const t = CONTENT[lang]

  return (
    <main className="space-y-20">
      <section className="space-y-5">
        <div className="flex gap-1 text-sm">
          {(['ms', 'en'] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`rounded-full px-2.5 py-0.5 ${lang === l ? 'bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950' : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'}`}
            >
              {l === 'ms' ? 'BM' : 'EN'}
            </button>
          ))}
        </div>
        <h1 className="text-2xl font-medium text-zinc-950 dark:text-zinc-50">
          {t.hero.title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t.hero.body}</p>
        <p className="text-sm text-zinc-500">
          <a href="https://dialisis.my/" target="_blank" className="underline">
            {t.hero.proof}
          </a>
        </p>
        <Cta label={t.hero.cta} />
      </section>

      <section>
        <h3 className="mb-5 text-lg font-medium">{t.stepsTitle}</h3>
        <ol className="space-y-4">
          {t.steps.map(([title, when, body], i) => (
            <li key={title} className="flex gap-4">
              <span className="font-mono text-sm text-zinc-400">0{i + 1}</span>
              <div>
                <p className="font-[450] text-zinc-900 dark:text-zinc-50">
                  {title}{' '}
                  <span className="text-sm font-normal text-zinc-500">
                    · {when}
                  </span>
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="mb-5 text-lg font-medium">{t.packagesTitle}</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.packages.map((p, i) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl p-4 ring-1 ring-zinc-200 ring-inset dark:ring-zinc-800"
            >
              <span className="font-mono text-xs text-zinc-400">0{i + 1}</span>
              <h4 className="mt-1 font-medium text-zinc-950 dark:text-zinc-50">
                {p.name}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {p.tagline}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{p.target}</p>
              <ul className="mt-3 flex-1 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {p.features.map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
              <p className="mt-4 text-lg font-medium text-zinc-950 dark:text-zinc-50">
                {p.price}
              </p>
              <p className="text-xs text-zinc-500">
                + {t.hostingLabel} {p.hosting}
                {p.hosting.includes('RM') && t.perYear}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-medium">{t.hostingTitle}</h3>
        <p className="mb-4 text-zinc-600 dark:text-zinc-400">{t.hostingBody}</p>
        <ul className="flex flex-wrap gap-2">
          {t.hostingItems.map((item) => (
            <li
              key={item}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-medium">{t.careTitle}</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">{t.careBody}</p>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {t.care.map(([name, price, desc]) => (
            <div key={name} className="flex justify-between gap-4 py-3">
              <div>
                <p className="font-[450] text-zinc-900 dark:text-zinc-50">
                  {name}
                </p>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
              <p className="shrink-0 text-zinc-900 dark:text-zinc-50">
                {price}
                <span className="text-sm text-zinc-500">{t.perMonth}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-zinc-500">{t.careNote}</p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-medium">{t.addonsTitle}</h3>
        <p className="mb-5 text-sm text-zinc-500">{t.addonsNote}</p>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {t.addons.map(([name, price]) => (
            <div key={name} className="flex justify-between gap-4 py-2.5">
              <p className="text-zinc-700 dark:text-zinc-300">{name}</p>
              <p className="shrink-0 text-zinc-900 dark:text-zinc-50">
                {price}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-medium">{t.faqTitle}</h3>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {t.faq.map(([q, a]) => (
            <details key={q} className="py-3">
              <summary className="cursor-pointer list-none font-[450] text-zinc-900 dark:text-zinc-50">
                {q}
              </summary>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-medium">{t.closingTitle}</h3>
        <p className="text-zinc-600 dark:text-zinc-400">{t.closingBody}</p>
        <Cta label={t.hero.cta} />
      </section>
    </main>
  )
}
