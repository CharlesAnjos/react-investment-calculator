export default function UserInput({ onInputChange }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number" required
            name="initialInvestment"
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number" required
            name="annualInvestment"
            onChange={onInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number" required
            name="expectedReturn"
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number" required
            name="duration"
            onChange={onInputChange}
          />
        </p>
      </div>
    </section>
  );
}