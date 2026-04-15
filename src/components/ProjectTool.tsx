import { Tooltip, IconButton } from "@mui/material";
import { toolInformation } from "../data/config";

const toolsWithLocalImages: Record<string, boolean> = {
    Mantine: true,
    'Preact.js': true
};

export default ({ name }: { name: string; }) => {
    const thisTool = toolInformation[name];
    if (!thisTool) return;

    return (
        <Tooltip title={name} placement="top" arrow>
            <IconButton href={thisTool.link ?? '#'} target="_blank" aria-label={name}>
                <img
                    width="32"
                    height="32"
                    src={toolsWithLocalImages[name] ? new URL(`../assets/${thisTool.image}`, import.meta.url).href : thisTool.image}
                    alt={name}
                    draggable="false"
                    loading="lazy"
                />
            </IconButton>
        </Tooltip>
    )
}
