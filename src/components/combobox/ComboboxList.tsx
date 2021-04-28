import { ComboboxList as BaseComboboxList } from '@reach/combobox'

import { styled } from '~/stitches'

export const ComboboxList = styled(BaseComboboxList, {
  '&[data-reach-combobox-list]': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    userSelect: 'none'
  }
})
