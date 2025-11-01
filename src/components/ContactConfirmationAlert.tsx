import { Alert } from "@mui/material";
import { ContactConfirmationAlertProps } from "../interfaces";

export default (props: ContactConfirmationAlertProps) => {
    return (
        <Alert severity={props.severity as any} sx={{ mb: 3 }} onClose={() => props.onHideAlertClick()}>
            {props.message}
        </Alert>
    )
}
