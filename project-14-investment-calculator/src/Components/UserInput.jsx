export default function UserInput({ userInput, onChange }) {
  return (
    <section className="bg-emerald-600 max-w-lg mx-auto my-8 rounded p-6 text-white">
      <div className="flex justify-around">
        <p className="flex flex-col p-2 w-48">
          <label className="text-xs">INITIAL INVESTMENT</label>
          <input
            className="border border-white rounded p-2"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p className="flex flex-col p-2 w-48">
          <label className="text-xs">ANNUAL INVESTMENT</label>
          <input
            className="border border-white rounded p-2"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="flex justify-around">
        <p className="flex flex-col p-2 w-48">
          <label className="text-xs">EXPECTED RETURN</label>
          <input
            className="border border-white rounded p-2"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
          />
        </p>

        <p className="flex flex-col p-2 w-48">
          <label className="text-xs">DURATION</label>
          <input
            className="border border-white rounded p-2"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
