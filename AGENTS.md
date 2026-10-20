<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Aturan project

Aturan ini berlaku untuk anggota tim dan untuk Claude Code. Kalau ragu, ikuti contoh di `src/components/atoms/button/`.

## Stack

- Next.js 16 (App Router, folder `src/app`), React 19, TypeScript
- MUI v9 + Emotion untuk UI, TanStack Query untuk data dari API
- Storybook 10 (`@storybook/nextjs-vite`) + Vitest untuk dokumentasi dan test komponen
- Biome untuk lint dan format (bukan ESLint/Prettier)

## Struktur folder

```
src/
  app/          routing Next.js (page, layout). Tipis: susun komponen dari features/components.
  components/   komponen UI reusable, dikelompokkan atomic design:
    atoms/      elemen dasar (Button, Input, Badge)
    molecules/  gabungan atoms (FormField, SearchBar)
    organisms/  bagian besar halaman (DataTable, Navbar)
    templates/  kerangka layout halaman
  features/     kode per fitur: <fitur>/components, <fitur>/services, <fitur>/hooks
  lib/          setup library (query client, http client)
  providers/    provider global (theme, query)
  theme/        design tokens dan theme MUI
```

## Aturan komponen (`src/components`)

1. **Satu komponen satu folder**, nama folder kebab-case, nama file PascalCase:
   ```
   button/
     Button.tsx          komponennya
     Button.types.ts     props
     Button.stories.tsx  wajib ada
     index.ts            export publik
   ```
2. **UI murni.** Komponen di `src/components` tidak boleh fetch API, memakai router (`next/navigation`), atau global store. Data dan aksi masuk lewat props. Logika data ada di `src/features`.
3. **Story wajib** untuk setiap komponen: minimal satu story per variant di Figma. Interaksi penting (klik, submit) diberi `play` function supaya teruji di CI.
4. **Props eksplisit.** Jangan `extends` semua props MUI. Pilih yang memang dipakai (lihat `Button.types.ts`).
5. Import dari luar folder lewat `index.ts`: `import { Button } from "@/components/atoms/button"`.

## Styling

- Warna, spacing, radius, dan font **hanya dari theme** (`src/theme`). Jangan hard-code hex atau px untuk warna/radius.
- Pakai prop `sx` atau `styled()`. **Jangan pakai system props** seperti `<Box display="flex" gap={2}>`; MUI v9 sudah menghapusnya. Tulis `<Box sx={{ display: "flex", gap: 2 }}>`.
- Nilai di `src/theme/tokens.ts` masih **placeholder** sampai style guide Figma siap. Perubahan token hanya oleh admin.

## Import

- Pakai alias `@/` untuk import lintas folder.
- Di `src/app` dan `src/features`, jangan import komponen MUI yang sudah punya versi di `src/components` (Biome akan error). Kalau menambah komponen pembungkus baru, tambahkan juga ke `noRestrictedImports` di `biome.json`.

## Storybook

- Mock App Router Storybook (`parameters.nextjs.appDirectory`) saat ini tidak kompatibel dengan Next 16.4, jadi tidak dipasang. Ini tidak masalah karena komponen di `src/components` memang tidak boleh memakai router.

## Git dan PR

- Jangan push langsung ke `main`. Buat branch dari `main` terbaru:
  `feat/<nama>-<topik>`, `fix/<nama>-<topik>`, `docs/...`, `chore/...`
  dengan `<nama>` salah satu dari: `mamat`, `kay`, `nopal`, `martin`, `nona` (contoh: `feat/kay-login-form`)
- Pesan commit wajib Conventional Commits (dicek otomatis): `feat(button): add loading state`
- Satu PR = satu tugas/issue. PR kecil lebih cepat di-review.
- Sebelum PR, jalankan: `npm run lint`, `npm run typecheck`, `npm test`.
