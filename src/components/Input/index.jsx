import TextField from '@mui/material/TextField';
import InputErrorMessage from '../InputErrorMessage';

const Input = (props) => {
    const {
        label = '',
        type = 'text',
        errors = false,
        register,
        focus = false,
        ml = '0px'
    } = props

    return <>
        <TextField
            margin="none"
            fullWidth
            label={label}
            type={type}
            size="small"
            {...register}
            style={{ maxWidth: 320, marginTop: 5, marginLeft: ml }}
            autoFocus={focus}
        />
        {
            errors &&
            <InputErrorMessage message={errors.message} />
        }
    </>
}

export default Input