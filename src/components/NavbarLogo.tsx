import { Slide } from "@mui/material";
import Logo from "../assets/logo.png";

export default ({ imageSize }: { imageSize: string; }) => {
    return (
        <Slide direction="down" in={true} timeout={650}>
            <img width={imageSize} height={imageSize} src={Logo} alt="logo" draggable="false" />
        </Slide>
    )
}
