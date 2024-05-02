import InputErrorMessage from '../../InputErrorMessage'
import Separator from '../../Separator'
import { OptionStyled, P, SelectStyled } from './styled'

export default function Select(props) {

    const {
        label,
        register,
        defaultValue,
        options,
        errors,
    } = props

    return (<>
        <Separator height='5px' />

        <P>{label}</P>

        <Separator />
        <SelectStyled
            id={label}
            {...register}
            defaultValue={defaultValue}
        >
            {options.map((item, i) => (
                <OptionStyled
                    key={i}
                    value={item.value}
                >
                    {item.label}
                </OptionStyled>
            ))}
        </SelectStyled>
        {
            errors &&
            <InputErrorMessage message={errors.message} />
        }
    </>)
}
