export type LoginType = {
  username: string
  password: string
  remember?: boolean
  nickname?: string
}

export type LoginResponseType = {
  username: string
  password: string
  remember?: boolean
  nickname?: string
  token?: string
} & Partial<LoginType>
