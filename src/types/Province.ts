import type { City } from "./City"

export type Province = {
  en: string
  fa: string
  cities: Record<string, City>
}
