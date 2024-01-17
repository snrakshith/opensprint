import {
  ChevronLeft,
  ChevronRight,
  Command,
  File,
  FileText,
  Loader2,
  Settings,
  Trash,
  Image,
  X,
} from "lucide-react";

import { type IconNode as LucidIcon } from "lucide-react";

export type Icon = LucidIcon;

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
};
