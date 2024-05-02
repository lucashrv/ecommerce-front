import InputErrorMessage from '../../InputErrorMessage'
import Separator from '../../Separator'
import { InputStyled, P } from './styled'

export default function Input(props) {

    const {
        label,
        register,
        defaultValue,
        errors,
        type = 'text',
        focus = false
    } = props

    return (<>
        <Separator height='5px' />

        <P>{label}</P>

        <Separator />
        <InputStyled
            autoFocus={focus}
            {...register}
            defaultValue={defaultValue}
            type={type}
        />
        {
            errors &&
            <InputErrorMessage message={errors.message} />
        }
    </>)
}
