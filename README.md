⚡ Drizzle Neon Transactions

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-2D3748?style=for-the-badge&logo=drizzle&logoColor=white)](https://orm.drizzle.team/)
[![Neon](https://img.shields.io/badge/Neon-00E599?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDBFNTk5IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48L3N2Zz4=)](https://neon.tech/)

> A minimal Next.js app demonstrating atomic database updates and transactions using Drizzle ORM and Neon Postgres. Includes tRPC for type-safe API routes and React Query for client state management.

---

## 🚀 Features

- **Atomic Counter Updates**: Safely increment multiple columns in a single transaction.
- **Drizzle ORM**: Type-safe, modern SQL ORM for PostgreSQL.
- **Neon Serverless Postgres**: Fast, scalable cloud database.
- **tRPC**: End-to-end typesafe API routes.
- **React Query**: Efficient client-side data fetching and cache management.
- **Modern UI**: Built with Next.js App Router and shadcn/ui components.

---

## 🏗️ Project Structure

```
drizzle-neon-transactions/
├── src/
│   ├── app/            # Next.js app router
│   ├── components/     # UI components
│   ├── db/             # Drizzle ORM schema & migrations
│   ├── lib/            # Utilities
│   ├── server/         # Server logic
│   └── trpc/           # tRPC routers & client
├── public/             # Static assets
├── drizzle.config.ts   # Drizzle ORM config
├── next.config.ts      # Next.js config
├── package.json        # Project dependencies
├── README.md           # This file
└── ...
```

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended)
- Neon Postgres database

### 1. Clone & Install

```bash
git clone https://github.com/GRACENOBLE/drizzle-neon-transactions.git
cd drizzle-neon-transactions
pnpm install
```

### 2. Environment Setup

Create a `.env` file:

```env
DATABASE_URL=postgresql://user:password@neon-host/dbname
```

### 3. Database Setup

Run migrations:

```bash
npx drizzle-kit push
```

### 4. Development

```bash
pnpm dev
# App runs at http://localhost:3000
```

---

## 🗄️ Database Schema

See `src/db/schema.ts` for the table definitions. Example:

```ts
// counts table
export const counts = pgTable('counts', {
	id: uuid('id').primaryKey(),
	count1: integer('count1').default(0),
	count2: integer('count2').default(0),
});
```

---

## 🔄 Transaction Logic

All counter updates are performed in a transaction for atomicity:

```ts
await db.transaction(async (tx) => {
	await tx.update(counts).set({ count1: sql`${counts.count1} + 1` }).where(eq(counts.id, input.id));
	await tx.update(counts).set({ count2: sql`${counts.count2} + 1` }).where(eq(counts.id, input.id));
});
```

If any update fails, all changes are rolled back.

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit and push your changes
4. Open a Pull Request

---

## 📄 License

MIT
