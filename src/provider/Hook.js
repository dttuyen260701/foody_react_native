import { useContext } from 'react'
import BillContext from './BillContext'

export const useBillState = () => {
  const [state, dispatch] = useContext(BillContext)
  return [state, dispatch]
//   return useContext(Context)
}