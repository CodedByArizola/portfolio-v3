import { Box, Container, Typography, Divider, Fade, TextField, Button } from "@mui/material";
import { useState } from "react";

import { SubmitContactForm } from "../controllers/contactform";
import { sectionIconStyle } from "../styles/styles";

import ReactVisibilitySensor from "react-visibility-sensor";
import ContactConfirmationAlert from "./ContactConfirmationAlert";
import ContactSendingEmailLoader from "./ContactSendingEmailLoader";
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Contact.scss';
import Socials from "./Socials";

let onCooldown = false;

export default () => {
    let alertClearingTimeout: NodeJS.Timeout;
    let cooldownAlertClearingTimeout: NodeJS.Timeout;

    // STATES
    const [showContainer, setContainerVisibility] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<Record<string, any>>({});

    const [showCooldownAlert, setCooldownAlertState] = useState(false);
    const [isSendingEmail, setSendingEmailState] = useState(false);

    // ON CLOSE ALERT CLICK
    const onHideAlertClick = () => {
        clearTimeout(alertClearingTimeout);
        setSubmissionStatus({});
    }

    // ON SUBMIT CLICK
    const onSubmitButtonClick = async (event: any) => {
        clearTimeout(alertClearingTimeout);
        clearTimeout(cooldownAlertClearingTimeout);

        // RESET SUBMISSION STATE AND PREVENT DEFAULT 'SUBMIT' BEHAVIOR
        setSubmissionStatus({});
        event.preventDefault();

        // DO NOT PROCEED IF COOLDOWN IS ACTIVE, SHOW A WARNING
        if (onCooldown) {
            setCooldownAlertState(true);
            cooldownAlertClearingTimeout = setTimeout(() => {
                setCooldownAlertState(false);
            }, 5000);

            // DO NOT CONTINUE
            return;
        }

        // START LOADING
        setSendingEmailState(true);

        // SET COOLDOWN
        onCooldown = true;
        setTimeout(() => {
            onCooldown = false;

            // RESET COOLDOWN-RELATED STATES JUST IN CASE
            clearTimeout(cooldownAlertClearingTimeout);
            setCooldownAlertState(false);
        }, 15000);

        // WAIT FOR SUBMISSION
        const resultData = await SubmitContactForm(event.target);
        setSubmissionStatus(resultData);

        // END LOADING
        setSendingEmailState(false);
        alertClearingTimeout = setTimeout(() => {
            setSubmissionStatus({});
        }, 11000);
    }

    // RETURN ELEMENT
    return (
        <Box id="contact" component="section">
            <ReactVisibilitySensor partialVisibility onChange={(isVisible: boolean) => setContainerVisibility(isVisible)}>
                <Fade in={showContainer} timeout={1000}>
                    <Container maxWidth="xl" sx={{ minHeight: '90vh', py: 2 }}>
                        <Typography variant="h4" fontFamily="purista-web" color="white" sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <EmailIcon sx={sectionIconStyle} /> Contact Me
                        </Typography>

                        <Divider sx={{ my: 3 }} />

                        <Typography component="p" variant="body1" fontFamily="purista-web" color="white" sx={{ mb: 2 }}>
                            Have a project in mind? Want to learn more? Let's talk about it. You can contact me through email or any of my platforms and I will get back to you as soon as possible!
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                            <Socials />
                        </Box>

                        {/* ALERTS */}
                        {submissionStatus.success === true &&
                            <ContactConfirmationAlert
                                severity="success"
                                message="Successfully sent an email! I will get to you as soon as possible!"
                                onHideAlertClick={onHideAlertClick}
                            />
                        }

                        {submissionStatus.success === false &&
                            <ContactConfirmationAlert severity="error" message="An error occurred while sending the email!" onHideAlertClick={onHideAlertClick} />
                        }

                        {showCooldownAlert && onCooldown &&
                            <ContactConfirmationAlert severity="warning" message="You are on a cooldown for sending emails!" onHideAlertClick={onHideAlertClick} />
                        }

                        {/* FORM */}
                        <Box component="form" onSubmit={onSubmitButtonClick} sx={{ p: 2, position: 'relative', borderRadius: 3, bgcolor: 'var(--main_color4)' }}>
                            {isSendingEmail && <ContactSendingEmailLoader />}

                            {/* INPUT BOXES */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="email"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="subject"
                                label="Subject"
                                name="subject"
                                autoComplete="subject"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="message"
                                id="message"
                                label="Message"
                                name="message"
                                autoComplete="message"
                                multiline
                                minRows={5}
                            />

                            {/* SUBMIT BUTTON */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '&:hover': {
                                        borderColor: 'var(--main_color2_brighter)',
                                        color: 'var(--main_color2_brighter)'
                                    },
                                    py: 1,
                                    mt: 3,
                                    fontSize: 18,
                                    borderColor: 'var(--main_color2)',
                                    color: 'var(--main_color2)'
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Container>
                </Fade>
            </ReactVisibilitySensor>
        </Box>
    )
}
