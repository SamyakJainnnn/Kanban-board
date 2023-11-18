import React, {useState, useEffect} from 'react';
import './App.css';
import './SortByStatus';
import SortByStatus from './SortByStatus';
import SortByName from './SortByName';
import SortByPriority from './SortByPriority';

function App() {

  const [apidata,setapidata] = React.useState([])
  const [groupingType, setGroupingType] = useState(1);
  const [sortingType, setSortingType] = useState(false);
  useEffect(() => {
  fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
  .then(res => res.json())
  .then(data => {//console.log(data)
    const tickets = [];
    for (let ticket of data.tickets) {
      let index = parseInt(ticket.userId.slice(4))-1;
      ticket.name = data.users[index].name;
      ticket.available = data.users[index].available;
      tickets.push(ticket)
    }
     setapidata(tickets)})
  },[])
  // console.log(apidata)
  // console.log(groupingType);

  const handleDropdownChange = event => {
    if(event.target.value === "status") setGroupingType(1);
    if(event.target.value === "name") setGroupingType(2);
    if(event.target.value === "priority") setGroupingType(3);
  }

  const handleSortingChange = event => {
    if(event.target.value === "title") setSortingType(false);
    else setSortingType(true);
  }

  return (
    <div className="App">
      <div class="dropdown">
        <button class="dropbtn">Display</button>
        <div class="dropdown-content">
          <label>Grouping</label>
          <select onChange={handleDropdownChange}>
            <option value="status" default>Status</option>
            <option value="name">Name</option>
            <option value="priority">Priority</option>
          </select>
          <label>Ordering </label>
          <select onChange={handleSortingChange}>
            <option value="title">Title</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
      
      {groupingType===1 && <SortByStatus tickets={apidata} sortingType={sortingType}/>}
      {groupingType===2 && <SortByName tickets={apidata} sortingType={sortingType}/>}
      {groupingType===3 && <SortByPriority tickets={apidata} sortingType={sortingType}/>}
    </div>
  );
}

export default App;
