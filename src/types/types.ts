//Types for reac-hook-form (FirstForm)
export type FormValuesFirst = {
    firstName: string
    lastName: string
  }


//Types for reac-hook-form (SecondForm)
export type FormValuesSecond = {
    email: string
    password: string
    password2: string
}


//Pros for FirstForm
export type Props = {
    next: Function
    notify: Function
  
  }