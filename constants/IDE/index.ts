import AppCode from "./app-code"
import TypescriptIcon from "../../public/images/lang-icons/typescript.png";
import RustIcon from "../../public/images/lang-icons/rust.png";
import PythonIcon from "../../public/images/lang-icons/python.png";

import { StaticImageData } from "next/image";
import { Language } from "prism-react-renderer";

interface LanguageProps {
  icon: StaticImageData;
  type: Language;
  name: string;
  abbreviation: string;
}

export interface Languages {
  ts: Readonly<LanguageProps>;
  rs: Readonly<LanguageProps>;
  py: Readonly<LanguageProps>;
}

export const languages: Languages = {
  ts: {
    icon: TypescriptIcon,
    type: "typescript",
    name: "TypeScript",
    abbreviation: "ts",
  },
  rs: {
    icon: RustIcon,
    type: "typescript",
    name: "Rust",
    abbreviation: "rust",
  },
  py: {
    icon: PythonIcon,
    type: "python",
    name: "Python",
    abbreviation: "py",
  },
}

export interface CodeFormats {
  client: string;
  codegen: string;
}

export interface LangProps {
  abbreviation: "ts" | "py" | "rs";
  code: CodeFormats;
}

export interface FrameProps {
  slug: string;
  langs: LangProps[]
}

export const frame: FrameProps = {
  slug: "app",
  langs: [
    {
      abbreviation: "ts",
      code: AppCode.ts,
    },
    {
      abbreviation: "py",
      code: AppCode.py,
    },
    {
      abbreviation: "rs",
      code: AppCode.rust,
    },
  ]
}
