import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useTransaction } from "../../../../hooks/useTransaction";
import { SearchFormContainer } from "./styles";

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const {fetchTransactions} = useTransaction()
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: ''
    }
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)

  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}