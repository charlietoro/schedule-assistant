import React from 'react';
import {
    ListItem, ListItemIcon,
    ListItemText, Icon,
    Collapse,
} from '@material-ui/core';
import { map } from 'lodash';
import GroupItem from './GroupItem';

export const SubjectItem = ( { listName, icon, subjects, handleKeepPlanner }: any ) => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Icon style={{ color:"#FFFFFF" }}>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={listName} style={{color: "#FFFFFF"}}/>
                {open ? <Icon style={{color: "#FFFFFF"}}>expand_less</Icon> : <Icon style={{color: "#FFFFFF"}}>expand_more</Icon>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit  >
                {
                    map( subjects, (subject: any ) => {
                        return (
                            <GroupItem
                                key={subject.id}
                                subject={subject}
                                handleKeepPlanner={
                                    (item: any, type: string) => handleKeepPlanner(item, type)
                                }
                            />
                        )
                    } )
                }
            </Collapse>
        </div>
    )
}
