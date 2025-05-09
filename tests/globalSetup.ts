import { FullConfig } from "@playwright/test";

export default async function globalSetup(config: FullConfig) {
    console.log(process.env.DATABASE_URL)
}