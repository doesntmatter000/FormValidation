import { SecondFormValidation } from "../../FormsValidation/FormSchemes";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsEye, BsFillEyeSlashFill } from "react-icons/bs";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormButton } from "../FormButton/FormButton"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { sucessOrError } from "../notify/notify";
import { FormValuesSecond } from "../../types/types";

export const SecondForm = () => {

    const form = useForm<FormValuesSecond>({defaultValues:{email: "", password: "", password2: ""}, resolver: yupResolver(SecondFormValidation) })
    const { register, formState, handleSubmit, watch, reset } = form
    const { errors, isDirty, isValid, isSubmitSuccessful } = formState
    const [svgToggle1, setSvgToggle1] = useState(false)
    const [svgToggle2, setSvgToggle2] = useState(false)
    const watchPassword1 = watch("password")
    const watchPassword2 = watch("password2")
    const notify = sucessOrError(isValid)

    const func = (data: FormValuesSecond) => {
        return data
    }

    function toggleIconInput(index:number):void {
        index === 1 
        ? setSvgToggle1(!svgToggle1)
        : setSvgToggle2(!svgToggle2)
    }

    useEffect(() => {
        if (isSubmitSuccessful) reset()
      })

    return (
        <>
            <form onSubmit={handleSubmit(func)} noValidate>
                <div className="formControl">
                    <div className="item__form">
                        <input type="email" id="email" {...register("email")} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <p className='errMessage'>{errors.email?.message}</p>
                </div>

                <div className="formControl">
                    <div className="item__form">
                        <div className="input__wrapper">
                            <input type={svgToggle1 ? "text" : "password"} id="password" {...register("password")} />
                            <div onClick={() => toggleIconInput(1)} style={watchPassword1 === "" || watchPassword1 === undefined ? { visibility: "hidden" } : { visibility: "visible" }}>
                                {svgToggle1 ? <BsFillEyeSlashFill /> : <BsEye />}
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <label htmlFor="password">Password</label>
                            <div className="iconHelper">
                                <div>Password must be at least 8 characters and <br /> include at least one number and one letter</div>
                                <AiOutlineExclamationCircle />
                            </div>
                        </div>
                    </div>
                    <p className='errMessage'>{errors.password?.message}</p>
                </div>

                <div className="formControl">
                    <div className="item__form">
                        <div className="input__wrapper">
                            <input type={svgToggle2 ? "text" : "password"} id="password2" {...register("password2", {disabled: watchPassword1 === "", required: "Enter Password"})} />
                            <div onClick={() => toggleIconInput(2)} style={watchPassword2 === "" || watchPassword2 === undefined ? { visibility: "hidden" } : { visibility: "visible" }}>
                                {svgToggle1 ? <BsFillEyeSlashFill /> : <BsEye />}
                            </div>
                        </div>
                        <label htmlFor="password2">Confirm Password</label>
                    </div>
                    <p className='errMessage'>{errors.password2?.message}</p>
                </div>
                <FormButton text={"Create Account"} dirty={isDirty} notify={notify} />
            </form>
        </>
    )
}