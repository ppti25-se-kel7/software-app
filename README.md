# Software App

Project mata kuliah Software Engineering, PPTI 25 Kelompok 7.

## Mulai

Butuh Node.js 22 atau lebih baru.

```bash
git clone https://github.com/ppti25-se-kel7/software-app.git
cd software-app
npm install
cp .env.example .env.local
```

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Jalankan app di http://localhost:3000 |
| `npm run storybook` | Jalankan Storybook di http://localhost:6006 |
| `npm run lint` | Cek lint dan format (Biome) |
| `npm run lint:fix` | Perbaiki lint dan format otomatis |
| `npm run typecheck` | Cek TypeScript |
| `npm test` | Jalankan semua story sebagai test |
| `npm run build` | Build production |

## Alur kerja

1. Ambil issue di GitHub Projects dan assign ke diri sendiri.
2. Update `main` lalu buat branch:
   ```bash
   git switch main
   git pull
   git switch -c feat/<nama>-<topik>
   ```
3. Kerjakan, commit dengan format Conventional Commits:
   ```bash
   git commit -m "feat(button): add loading state"
   ```
4. Push dan buka Pull Request ke `main`. Isi template PR dan tulis `Closes #<nomor issue>`.
5. Tunggu CI hijau dan review. Kalau diminta revisi, commit lagi di branch yang sama.
6. Setelah di-merge, branch otomatis terhapus. Kembali ke langkah 1.

Aturan kode lengkap ada di [AGENTS.md](./AGENTS.md).
