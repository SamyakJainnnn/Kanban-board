import React from 'react';
import StatusCard from './StatusCard';
import classes from "./SortByStatus.module.css";

const SortByStatus = props => {
    const displayObj = {
        "Backlog": [],
        "Todo": [],
        "In progress": [],
        "Done": [],
        "Canceled": []
    };
    for (const ticket of props.tickets) {
        const status = ticket.status;
        displayObj[status].push(ticket);
    }
    
    for (const prop in displayObj) {
        
        if(props.sortingType === false) { // sort by title
            displayObj[prop] = displayObj[prop].sort((a, b) => {
                if(a.title < b.title) return -1;
                else if(a.title>b.title) return 1;
                return 0;
            });
        } else {
            displayObj[prop].sort((a, b) => {
                if(a.priority < b.priority) return 1;
                else if(a.priority>b.priority) return -1;
                return 0;
            })  
        }
// 
    }

    return(
        <div className={classes.parent}>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>Backlog</h1>
                    <span>{displayObj.Backlog.length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj.Backlog.map(element => 
                    <StatusCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                        <h1>Todo</h1>
                        <span>{displayObj.Todo.length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj.Todo.map(element => 
                    <StatusCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                        <h1>In Progress</h1>
                        <span>{displayObj["In progress"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj["In progress"].map(element => 
                    <StatusCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                        <h1>Done</h1>
                        <span>{displayObj.Done.length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj.Done.map(element => 
                    <StatusCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                        <h1>Canceled</h1>
                        <span>{displayObj.Canceled.length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj.Canceled.map(element => 
                    <StatusCard data={element} key={element.id}/>
                )}
            </div>
        </div>
    )

};

export default SortByStatus;