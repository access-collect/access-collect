import { FullConfig } from "@playwright/test";
import { cleanAllDatas } from "./functions";

export default async function globalTeardown(config: FullConfig) {
  await cleanAllDatas();
}
