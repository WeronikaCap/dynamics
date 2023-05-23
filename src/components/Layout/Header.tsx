import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface HeaderProps {
    title: string;
    description?: string;
    backgroundImage: string;
    variantSmall?: boolean;
    placeHolderText: string;    
}

declare module "react" {
    interface CSSProperties {
      "--image-url"?: string | number;
    }
  }

const Header =(props: HeaderProps) => {
    const {title, description, backgroundImage, variantSmall = false, placeHolderText} = props;

    return (
        <header style={{'--image-url': `url(${backgroundImage})`}} className={`bg-[image:var(--image-url)] bg-cover bg-no-repeat ${variantSmall ? "pt-12 pb-12" : "pt-32 pb-32"}`}>
            <div className={`w-[760px] m-auto flex flex-col items-center`}>
                <h1 className={`pb-4 ${variantSmall && "text-white text-xl"}`}>{title}</h1>
                {description && <p className="pb-12 text-center">{description}</p>}
                <Paper component="form" sx={{display: 'flex', alignItems: 'center', width: 400 }}>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeHolderText} inputProps={{ 'aria-label': placeHolderText }} />
                    <IconButton type="button" sx={[{ p: '10px', bgcolor:"#437EF7", borderRadius: 1 }, {'&:hover': {backgroundColor: 'blue',}},]} aria-label="search" >
                        <FontAwesomeIcon size="xs" icon={faMagnifyingGlass} color="white"/>
                    </IconButton>
                </Paper>
            </div>
        </header>
    )
}

export default Header;