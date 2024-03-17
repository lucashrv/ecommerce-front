import { useSnackbar } from 'notistack';

export const useSnackbars = () => {
    const { enqueueSnackbar } = useSnackbar();

    const successSnackbar = (label) => {
        enqueueSnackbar(label, { variant: 'success' });
    }

    const errorSnackbar = (label) => {
        enqueueSnackbar(label, { variant: 'error' });
    }

    const warningSnackbar = (label) => {
        enqueueSnackbar(label, { variant: 'error' });
    }

    const infoSnackbar = (label) => {
        enqueueSnackbar(label, { variant: 'error' });
    }

    return {
        successSnackbar,
        errorSnackbar,
        warningSnackbar,
        infoSnackbar
    }
};