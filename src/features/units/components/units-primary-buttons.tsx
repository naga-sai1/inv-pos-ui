import { IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useUnits } from '../context/units-context'

export function UnitsPrimaryButtons() {
  const { setOpen } = useUnits()
  return (
    <div className='flex gap-2'>
      {/* <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('import')}
      >
        <span>Import</span> <IconDownload size={18} />
      </Button> */}
      <Button className='space-x-1' onClick={() => setOpen('create')}>
        <span>Create</span> <IconPlus size={18} />
      </Button>
    </div>
  )
}
