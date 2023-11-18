import React from 'react';
import PriorityCard from './PriorityCard';
import classes from "./SortByStatus.module.css";

const SortByPriority = props => {
    const displayObj = {
        "0": [],
        "1": [],
        "2": [],
        "3": [],
        "4": []
    };
    for (const ticket of props.tickets) {
        const priority = ticket.priority;
        displayObj[priority].push(ticket);
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
                    <h1>No priority</h1>
                    <span>{displayObj["0"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i className ="fa fa-plus" aria-hidden="true"></i>
                    <i className ="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj["0"].map(element => 
                    <PriorityCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>Low</h1>
                    <span>{displayObj["1"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj["1"].map(element => 
                    <PriorityCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>Medium</h1>
                    <span>{displayObj["2"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj["2"].map(element => 
                    <PriorityCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>High</h1>
                    <span>{displayObj["3"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj["3"].map(element => 
                    <PriorityCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>Urgent</h1>
                    <span>{displayObj["4"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj["4"].map(element => 
                    <PriorityCard data={element} key={element.id}/>
                )}
            </div>
        </div>
    )

};

export default SortByPriority;