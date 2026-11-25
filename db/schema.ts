import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const enquiries = sqliteTable("enquiries", {
  reference: text("reference").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  interest: text("interest").notNull(),
  requirements: text("requirements").notNull(),
  createdAt: text("created_at").notNull(),
});

export const newsletterSubscribers = sqliteTable("newsletter_subscribers", {
  email: text("email").primaryKey(),
  name: text("name").notNull(),
  status: text("status").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});
