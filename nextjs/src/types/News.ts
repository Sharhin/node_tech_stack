export type NewsType = {
  id: number
  name:  string
  description: string | null
  news_category_id: number
  date_add: Date
}

export type NewsCategoryType = {
  id: number
  name:  string
  description: string | null
}

export type NewsListSearchParams = {
  category?: string
} | undefined