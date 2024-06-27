export interface GeneratorPropsEvents<T> {
  onChange?: (params: T) => void
  isLocked?: boolean
  disabled?: boolean
}
