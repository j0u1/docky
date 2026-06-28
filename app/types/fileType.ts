import type { PackageManager } from "./pmType";

export interface FileType {
  packageManager: PackageManager;
  tags: string[];
  code: string;
}
