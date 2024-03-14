import React, { useState } from "react";

function UserInput({ values, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={values.initialInvestment}
            required
            min={1}
            onChange={event => {
              onChange("initialInvestment", Number(event.target.value));
            }}
          />
        </p>
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={values.annualInvestment}
            required
            min={1}
            onChange={event => {
              onChange("annualInvestment", Number(event.target.value));
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={values.expectedReturn}
            required
            min={1}
            onChange={event => {
              onChange("expectedReturn", Number(event.target.value));
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={values.duration}
            min={1}
            onChange={event => {
              onChange("duration", Number(event.target.value));
            }}
          />
        </p>
      </div>
    </section>
  );
}
export default UserInput;
