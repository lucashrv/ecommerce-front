
import { Select as SelectMui } from '@mui/joy';
import Option from '@mui/joy/Option';

export default function Select(props) {

    const {
        label,
        options = [],
        register
    } = props

    return (
        <SelectMui
            placeholder={label}
            style={{ maxWidth: 320, marginTop: 5 }}
            {...register}
        >
            {options.map((item, i) => (
                <Option
                    key={i}
                    value={item.value}
                >
                    {item.label}
                </Option>
            ))}
        </SelectMui>
    )
}