import React from 'react';
import NameCard from './NameCard';
import classes from "./SortByStatus.module.css";
const SortByName = props => {
    const displayObj = {
        "Anoop sharma": [],
        "Yogesh": [],
        "Shankar Kumar": [],
        "Ramesh": [],
        "Suresh": []
    };
    for (const ticket of props.tickets) {
        const name = ticket.name;
        displayObj[name].push(ticket);
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
                    <h1>Anoop sharma</h1>
                    <span>{displayObj["Anoop sharma"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj["Anoop sharma"].map(element => 
                    <NameCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>Yogesh</h1>
                    <span>{displayObj["Yogesh"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj.Yogesh.map(element => 
                    <NameCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>Shankar Kumar</h1>
                    <span>{displayObj["Shankar Kumar"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj["Shankar Kumar"].map(element => 
                    <NameCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>Ramesh</h1>
                    <span>{displayObj["Ramesh"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj.Ramesh.map(element => 
                    <NameCard data={element} key={element.id}/>
                )}
            </div>
            <div className={classes.column}>
                <div className={classes.header}>
                    <div className={classes.headLeft}>
                    <h1>Suresh</h1>
                    <span>{displayObj["Suresh"].length}</span>
                    </div>
                    <div className={classes.plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                </div>
                {displayObj.Suresh.map(element => 
                    <NameCard data={element} key={element.id}/>
                )}
            </div>
        </div>
    )

};

export default SortByName;