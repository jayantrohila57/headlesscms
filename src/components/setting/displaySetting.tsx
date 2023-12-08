import React from 'react'
import { Separator } from '../ui/separator'
import { DisplayForm } from './displayForm'

const DisplaySetting = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Display</h3>
        <p className='text-sm text-muted-foreground'>
          Turn items on or off to control what&apos;s displayed in the app.
        </p>
      </div>
      <Separator />
      <DisplayForm />
    </div>
  )
}

export default DisplaySetting
