import { useContext } from 'react'
import { TransactionContext } from '../contexts/Transaction'

export const useTransaction = () => useContext(TransactionContext)
