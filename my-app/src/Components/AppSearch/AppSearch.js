import React from 'react';
import '../AppHeader';

function AppSearch (props) {
    console.log(props);
    return (
        <div>
            <header>Search:</header>
            <form>
                Topic: <input type="text" name="topic" onChange={(event) => props.handleChange(event)}/><br/>
                Start Year: <input type="text" name="start" onChange={(event) => props.handleChange(event)}/><br/>
                End Year: <input type="text" name="end" onChange={(event) => props.handleChange(event)}/><br/>
                <input type="button" value="submit" name="submit" onClick={(event) => props.selectArticles(event)}/><br />
            </form>
        </div>
    );
}




export default AppSearch;