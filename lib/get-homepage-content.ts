import fs from "node:fs/promises";
import path from "node:path";
import { defaultHomepageContent } from "@/lib/default-homepage-content";
import {
  homepageContentSchema,
  type HomepageContent,
} from "@/lib/content-schema";

const CONTENT_PATH =
  process.env.HOMEPAGE_CONTENT_PATH ||
  path.join(process.cwd(), "content", "homepage.json");

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const raw = await fs.readFile(CONTENT_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    const validated = homepageContentSchema.safeParse(parsed);
    if (validated.success) {
      return validated.data;
    }
    console.error("Invalid homepage JSON config. Falling back to defaults.");
    return defaultHomepageContent;
  } catch (error) {
    console.error("Unable to load homepage JSON config. Falling back to defaults.", error);
    return defaultHomepageContent;
  }
}
