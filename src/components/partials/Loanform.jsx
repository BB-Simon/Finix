import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Button from "./Button";
import styled from "styled-components";

const Loanform = () => {
  return (
    <Wrapper>
      <Form>
        <FormGroup>
          <Label for="text">Type The Money</Label>
          <Input type="text" name="text" id="text" placeholder="$1000" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select The Month/Years</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1 Month</option>
            <option>2 Months</option>
            <option>3 Months</option>
            <option>4 Months</option>
            <option>5 Months</option>
            <option>6 Months</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="borrow">Borrowing</Label>
          <Input type="text" name="borrow" id="borrow" placeholder="$1000" />
        </FormGroup>
        <FormGroup>
          <Label for="term">Term Of Use</Label>
          <Input type="text" name="term" id="term" placeholder="6 Months" />
        </FormGroup>
        <FormGroup>
          <Label for="total">The Total You Will Pay</Label>
          <Input type="text" name="total" id="total" placeholder="6 Months" />
        </FormGroup>
        <Button width="100%" title="Apply for this loan" />
      </Form>
    </Wrapper>
  );
};

export default Loanform;

const Wrapper = styled.div`
  .form-control {
    border: none;
    border-radius: 0;
    height: calc(2.2em + 0.75rem + 2px);
    &:focus {
      box-shadow: none;
    }
  }
`;
