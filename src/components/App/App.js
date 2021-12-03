import logo from '../../logo.svg';
import './App.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React from 'react';

function App() {

  const [selectedFirstItem, setselectedFirstItem] = React.useState('');
  const [selectedSecondItem, setselectedSecondItem] = React.useState('');
  const [selectedThirdItem, setselectedThirdItem] = React.useState('');
  const [selectedForthItem, setselectedForthItem] = React.useState('');
  const [newCat, setnewCat] = React.useState('');
  const [selectedFirstCat, setselectedFirstCat] = React.useState('');
  const [navJson, setnavJson] = React.useState([
    {
      Name: 'Home Page',
      SubContent: []
    },
    {
      Name: 'Left dropdown',
      SubContent: [{
        Name: 'Any page',
        SubContent: []
      },
      {
        Name: 'Second level',
        SubContent: [
          {
            Name: 'Another page',
            SubContent: []
          },
          {
            Name: 'Any page',
            SubContent: []
          },
          {
            Name: 'Third level',
            SubContent: [
              {
                Name: 'Any Page',
                SubContent:[]
              },
              {
                Name: 'Another Page',
                SubContent:[]
              }
            ]
          }
        ]
      },
      {
        Name: 'Another page',
        SubContent: []
      }]
    },
    {
      Name: 'Mega Menu',
      SubContent: [{
        Name: 'xxx',
        SubContent: []
      }]
    },
    {
      Name: 'Any page',
      SubContent: []
    },
    {
      Name: 'Right dropdown',
      SubContent: [{
        Name: 'xxx',
        SubContent: []
      }]
    }
  ]);


  const navClick = (text, level) => {
    
    if (level === "first") {
      if (selectedFirstItem === "" || selectedFirstItem !== text ) {
        setselectedForthItem('');
        setselectedThirdItem('');
        setselectedSecondItem('');
        setselectedFirstItem(text);
      } else {
        setselectedForthItem('');
        setselectedThirdItem('');
        setselectedSecondItem('');
        setselectedFirstItem('');
      }
    } else if (level === "second") {
      if (selectedSecondItem === "" || selectedSecondItem !== text ) {
        setselectedForthItem('');
        setselectedThirdItem('');
        setselectedSecondItem(text);
      } else {
        setselectedForthItem('');
        setselectedThirdItem('');
        setselectedSecondItem('');
      }
    } else if (level === "third") {
      if (selectedThirdItem === "" || selectedThirdItem !== text ) {
        setselectedForthItem('');
        setselectedThirdItem(text);
      } else {
        setselectedThirdItem('');
      }
    } else if (level === "forth") {
      if (selectedForthItem === "" || selectedForthItem !== text ) {
        setselectedForthItem(text);
      } else {
        setselectedForthItem('');
      }
    }
  }

  const submitCat = () =>{
    const tempStorage = [...navJson];
    tempStorage.forEach((value, index)=>{
      if( value.Name === selectedFirstCat ){
        value.SubContent.push({Name: newCat, SubContent:[]});
        console.log(newCat);
      }
    })
  }

  return ( 
    <div className="App">
      <div className="App-header">
        <div className="content-wrapper">
          { navJson.map((value)=>{
            return(
              <div className="nav-item">
                {value.Name}
                { value.SubContent.length != 0 ? 
                    selectedFirstItem === value.Name ?
                    <>
                      <span  onClick={(e)=>navClick(value.Name, 'first')}>
                        <ArrowDropUpIcon />
                      </span>
                      <div className="innerContent">
                        { value.SubContent.map((innerValue)=>{
                          return(
                            <div className="inner-navitem">
                              { innerValue.Name }
                              { innerValue.SubContent.length != 0 ? 
                                  selectedSecondItem === innerValue.Name ?
                                  <>
                                    <span onClick={()=>navClick(innerValue.Name, 'second')}>
                                      <ArrowDropUpIcon />
                                    </span>
                                    <div className="secondinnerContent">
                                    { innerValue.SubContent.map((secondinnerValue)=>{
                                      return(
                                        <div className="inner-navitem">
                                          { secondinnerValue.Name }
                                          { secondinnerValue.SubContent.length != 0 ? 
                                              selectedThirdItem === secondinnerValue.Name ?
                                              <>
                                                <span onClick={()=>navClick(secondinnerValue.Name, 'third')}>
                                                  <ArrowDropDownIcon />
                                                </span>
                                                <div className="thirdinnerContent">
                                                  { secondinnerValue.SubContent.map((thirdinnerValue)=>{
                                                      return(
                                                        <div className="inner-navitem">
                                                          { thirdinnerValue.Name }
                                                          { thirdinnerValue.SubContent.length != 0 ? 
                                                              selectedForthItem === thirdinnerValue.Name ?
                                                              <>
                                                                <span onClick={()=>navClick(thirdinnerValue.Name, 'forth')}>
                                                                  <ArrowDropDownIcon />
                                                                </span>
                                                                
                                                              </>
                                                              :
                                                              <span onClick={()=>navClick(thirdinnerValue.Name, 'forth')}>
                                                                <ArrowDropDownIcon />
                                                              </span>
                                                              :
                                                              null
                                                          }
                                                        </div>
                                                      );
                                                    }) }
                                                  </div>
                                              </>
                                              :
                                              <span onClick={()=>navClick(secondinnerValue.Name, 'third')}>
                                                <ArrowDropDownIcon />
                                              </span>
                                              :
                                              null
                                          }
                                        </div>
                                      );
                                    }) }
                                  </div>
                                  </>
                                  :
                                  <span onClick={()=>navClick(innerValue.Name, 'second')}>
                                    <ArrowDropDownIcon />
                                  </span>
                                  :
                                  null
                              }
                            </div>
                          );
                        }) }
                      </div>
                    </>
                    :
                    <span onClick={()=>navClick(value.Name, 'first')}>
                      <ArrowDropDownIcon />
                    </span>
                  :
                  null
                }
              </div>
            );
          })  }
        </div>
        <div className="bodywrapper">
          <div className="Body-head">
            Add a New Category
          </div>
          <div className="Body-Content">
              <div className="Body-title">
                Category Name
              </div>
              <div className="Body-Input">
                <input type="text" className="inputField" onKeyUp={(e)=>{setnewCat(e.currentTarget.value)}}></input>
              </div>
              <div className="Body-title">
                Parent Category
              </div>
              <div className="Body-Input">
                <select className="selectField" onChange={(e)=>setselectedFirstCat(e.currentTarget.value)}>
                  <option disabled>Choose a parent</option>
                  { navJson.map((value)=>{
                    return(
                      <option value={value.Name}>{value.Name}</option>
                    );
                  }) }
                </select>
              </div>
              <button className="buttonClass" onClick={()=>submitCat()}>Add Category</button>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;