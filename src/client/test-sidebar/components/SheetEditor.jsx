import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Button, ListGroup } from 'react-bootstrap';
import FormInput from './FormInput.tsx';

// This is a wrapper for google.script.run that lets us use promises.
import server from '../../utils/server';

const { serverFunctions } = server;

const SheetEditor = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    serverFunctions
      .getSheetsData()
      .then(setNames)
      .catch(alert);
  }, []);

  const deleteSheet = sheetIndex => {
    serverFunctions
      .deleteSheet(sheetIndex)
      .then(setNames)
      .catch(alert);
  };

  const setActiveSheet = sheetName => {
    serverFunctions
      .setActiveSheet(sheetName)
      .then(setNames)
      .catch(alert);
  };

  const submitNewSheet = async newSheetName => {
    try {
      const response = await serverFunctions.addSheet(newSheetName);
      setNames(response);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  };

  return (<div>
    <FormInput submitNewSheet={submitNewSheet} />
    <ListGroup>
      <TransitionGroup className="sheet-list">
        {names.length > 0 &&
          names.map(name => (
            <CSSTransition
              classNames="sheetNames"
              timeout={500}
              key={name.name}
            >
              <ListGroup.Item
                className="d-flex"
                key={`${name.index}-${name.name}`}
              >
                <Button
                  className="border-0"
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteSheet(name.index)}
                >
                  &times;
                </Button>
                <Button
                  className="border-0 mx-2"
                  variant={name.isActive ? 'success' : 'outline-success'}
                  onClick={() => setActiveSheet(name.name)}
                >
                  {name.name}
                </Button>
              </ListGroup.Item>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ListGroup>
    </div>
  );
};

export default SheetEditor;
