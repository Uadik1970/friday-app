import React from 'react'
import SuperInputText from './common/SuperInputText/SuperInputText'
import SuperCheckbox from './common/SuperCheckbox/SuperCheckbox'
import SuperButton from './common/SuperButton/SuperButton'

export const Test = () => {
    return (
        <div>
            Test
            <SuperInputText />
            <SuperCheckbox />
            <SuperButton title={'SEND'} />
        </div>
    )
}
