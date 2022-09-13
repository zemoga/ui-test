import { RulingDataTypes } from '../PreviousRulings.types'

export interface RulingItemDataTypes {
  data: RulingDataTypes
  isListMode: boolean
}

export interface localDataTypes {
  positive: number
  negative: number
  lastUpdated: string
}
