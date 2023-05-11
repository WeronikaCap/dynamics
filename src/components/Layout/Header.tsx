import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface HeaderProps {
    title: string;
    description?: string;
    backgroundImage: string;
    paddingSmall?: false;
    placeHolderText: string;
    
}

const Header =(props: HeaderProps) => {
    const {title, description, backgroundImage, paddingSmall, placeHolderText} = props;

    return (
        <header className={`bg-[url("${backgroundImage}")] bg-cover bg-no-repeat ${paddingSmall ? "pt-12 pb-12" : "pt-32 pb-32"}`}>
            <div className={`w-[760px] m-auto flex flex-col items-center`}>
                <h1 className="pb-4 text-neutral-black font-bold">{title}</h1>
                {description && <p className="pb-12">{description}</p>}
                <Paper component="form" sx={{display: 'flex', alignItems: 'center', width: 400 }}>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeHolderText} inputProps={{ 'aria-label': placeHolderText }} />
                    <IconButton type="button" sx={[{ p: '10px', bgcolor:"#437EF7", borderRadius: 1 }, {'&:hover': {backgroundColor: 'red',}},]} aria-label="search" >
                        <FontAwesomeIcon size="xs" icon={faMagnifyingGlass} color="white"/>
                    </IconButton>
                </Paper>
            </div>
        </header>
    )
}

export default Header;