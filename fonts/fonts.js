
import { Fira_Code, JetBrains_Mono, Source_Code_Pro } from "next/font/google";

export const firecode = Fira_Code({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
})
export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
})


export const sourcecode = Source_Code_Pro  ({
subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dev",
  display: "swap",
});