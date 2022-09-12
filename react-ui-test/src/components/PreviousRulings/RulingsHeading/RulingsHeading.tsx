import { RulingsHeadingWrapper, HeadingTitle, HeadingControl } from './RulingsHeading.styles'

interface RulingHeadingTypes {
  onChangeView: (e: any) => void,
  isListMode: boolean
}

const RulingHeading = ({ onChangeView, isListMode }: RulingHeadingTypes) => {
  return (
    <RulingsHeadingWrapper>
      <HeadingTitle>Previous Rulings</HeadingTitle>
      <HeadingControl name='list view' onChange={onChangeView} value={isListMode ? 'list' : 'grid'}>
        <option value='list'>List</option>
        <option value='grid'>Grid</option>
      </HeadingControl>
    </RulingsHeadingWrapper>
  )
}

export default RulingHeading
