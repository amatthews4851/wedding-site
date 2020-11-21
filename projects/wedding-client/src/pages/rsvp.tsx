import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import BlurView from "../components/BlurView";
import PageWrapper from "../components/PageWrapper";
import Button from "react-bootstrap/Button";

export default function RSVP() {
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    plusOneChecked: false,
    plusOneFirstName: "",
    plusOneLastName: "",
    showValidation: false,
  });

  return (
    <PageWrapper>
      <Container
        style={{
          paddingTop: "5rem",
          maxWidth: 500,
        }}
      >
        <BlurView>
          <div style={{ fontFamily: "serif" }}>
            <Form
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                if (form.checkValidity() === false) {
                  dispatch({ type: ActionTypes.ShowValidation });
                  return;
                }

                alert("SUCCESS");
              }}
            >
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      isInvalid={state.showValidation && !state.firstName}
                      type="text"
                      value={state.firstName}
                      placeholder="John"
                      onChange={(e) =>
                        dispatch({
                          type: ActionTypes.FirstNameChanged,
                          name: e.target.value,
                        })
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      isInvalid={state.showValidation && !state.lastName}
                      type="text"
                      value={state.lastName}
                      placeholder="Doe"
                      onChange={(e) =>
                        dispatch({
                          type: ActionTypes.LastNameChanged,
                          name: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Check
                  label="Plus One?"
                  checked={state.plusOneChecked}
                  onChange={() =>
                    dispatch({ type: ActionTypes.PlusOneChecked })
                  }
                />
              </Form.Group>

              {state.plusOneChecked && (
                <Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Label>Plus One First Name</Form.Label>
                      <Form.Control
                        required={state.plusOneChecked}
                        isInvalid={
                          state.showValidation &&
                          !state.plusOneFirstName &&
                          state.plusOneChecked
                        }
                        type="text"
                        value={state.plusOneFirstName}
                        placeholder="Jane"
                        onChange={(e) =>
                          dispatch({
                            type: ActionTypes.PlusOneFirstNameChanged,
                            name: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col>
                      <Form.Label>Plus One Last Name</Form.Label>
                      <Form.Control
                        required={state.plusOneChecked}
                        isInvalid={
                          state.showValidation &&
                          !state.plusOneLastName &&
                          state.plusOneChecked
                        }
                        type="text"
                        value={state.plusOneLastName}
                        placeholder="Doe"
                        onChange={(e) =>
                          dispatch({
                            type: ActionTypes.PlusOneLastNameChanged,
                            name: e.target.value,
                          })
                        }
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
              )}

              <Form.Group>
                <Button type="submit" style={{ width: "100%" }}>
                  {state.plusOneChecked ? "We" : "I"} will be there!
                </Button>
              </Form.Group>
            </Form>
          </div>
        </BlurView>
      </Container>
    </PageWrapper>
  );
}

type State = {
  firstName: string;
  lastName: string;
  plusOneChecked: boolean;
  plusOneFirstName: string;
  plusOneLastName: string;
  showValidation: boolean;
};

enum ActionTypes {
  FirstNameChanged,
  LastNameChanged,
  PlusOneChecked,
  PlusOneFirstNameChanged,
  PlusOneLastNameChanged,
  ShowValidation,
}

type Action =
  | { type: ActionTypes.FirstNameChanged; name: string }
  | { type: ActionTypes.LastNameChanged; name: string }
  | { type: ActionTypes.PlusOneChecked }
  | { type: ActionTypes.PlusOneFirstNameChanged; name: string }
  | { type: ActionTypes.PlusOneLastNameChanged; name: string }
  | { type: ActionTypes.ShowValidation };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FirstNameChanged: {
      return { ...state, firstName: action.name };
    }
    case ActionTypes.LastNameChanged: {
      return { ...state, lastName: action.name };
    }
    case ActionTypes.PlusOneChecked: {
      return { ...state, plusOneChecked: !state.plusOneChecked };
    }
    case ActionTypes.PlusOneFirstNameChanged: {
      return { ...state, plusOneFirstName: action.name };
    }
    case ActionTypes.PlusOneLastNameChanged: {
      return { ...state, plusOneLastName: action.name };
    }
    case ActionTypes.ShowValidation: {
      return { ...state, showValidation: true };
    }
    default:
      return state;
  }
};
