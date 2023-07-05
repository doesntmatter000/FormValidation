import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { FormButton } from "../FormButton/FormButton"
import { yupResolver } from '@hookform/resolvers/yup';
import { FirstFormValidation } from "../../FormsValidation/FormSchemes";
import { Props, FormValuesFirst } from "../../types/types";




export const FirstForm = ({next, notify}:Props) => {

  const form = useForm<FormValuesFirst>({defaultValues: {firstName: "", lastName: ""}, resolver: yupResolver(FirstFormValidation)})
  const { register, handleSubmit, formState, reset } = form
  const { errors, isDirty	, isValid, isSubmitSuccessful } = formState
  const onSubmit = (data:FormValuesFirst) => {
    if (isValid) next()
    return data
  } 

  useEffect(() => {
    if (isSubmitSuccessful) reset()
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='formControl'>
          <div className="item__form">
            <input type="text" id="firstName" {...register("firstName")} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <p className='errMessage'>{errors.firstName?.message}</p>
        </div>

        <div className='formControl'>
          <div className="item__form">
            <input type="text" id="lastName" {...register("lastName")} />
            <label htmlFor="firstName">Last Name</label>
          </div>
          <p className='errMessage'>{errors.lastName?.message}</p>
        </div>
        <p className="termOfUse">By continuing, I understand and agree to LoremAccount <a href="https://www.youtube.com/watch?v=tPiagp9t5is" target="_black">Privacy Notice</a> and <a href="https://www.youtube.com/watch?v=21D7QP9cN9s" target="_blanc">Terms of Use</a> for creating a Lorem Account</p>
        <FormButton text="Next" dirty={ isDirty } notify={!isValid ? notify : null}/>
      </form>
    </>
  )
}