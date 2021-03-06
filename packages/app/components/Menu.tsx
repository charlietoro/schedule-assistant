import * as React from "react";
import MenuToggle from "./MenuToggle";
import NavBar from "./NavBar";

export const Menu = ({studentData, handleKeepPlanner}: any) => {

    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <NavBar handleOpen={ () => handleDrawerOpen() } open={ open } />
            <MenuToggle
                handleClose={ () => handleDrawerClose()}
                open={ open }
                studentData={studentData}
                handleKeepPlanner={
                    (item: any, type: string) => handleKeepPlanner(item, type)
                }
            />
        </div>
    );
};
