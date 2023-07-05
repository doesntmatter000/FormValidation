import "./FormButton.scss"

type PropValues = {
    text: string
    dirty: boolean
    notify: any
}


export const FormButton = ({text, dirty, notify}:PropValues) => {
    return (
        <button type="submit" onClick={notify === null ? null : notify} disabled={!dirty} className='buttonForm'>{text}</button>
    )
}