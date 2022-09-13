import { RulingsHeadingWrapper, HeadingTitle, HeadingControl } from './RulingsHeading.styles'

interface RulingHeadingTypes {
  onChangeView: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  isListMode: boolean
}

const RulingHeading = ({ onChangeView, isListMode }: RulingHeadingTypes) => {
  return (
    <RulingsHeadingWrapper>
      <HeadingTitle tabIndex={0}>Previous Rulings</HeadingTitle>
      <HeadingControl name='list view' onChange={onChangeView} value={isListMode ? 'list' : 'grid'}>
        <option value='list'>List</option>
        <option value='grid'>Grid</option>
      </HeadingControl>
    </RulingsHeadingWrapper>
  )
}

export default RulingHeading
