import Button from "./Button"
import { useState } from "react"


export default function AddExpense() {
    return <div className="border border-white flex p-3 gap-3 mt-6">
        {/* input for expense name */}
        <input type="text" placeholder="Enter the expense name"/>
        {/* input for expense amount */}
        <input type="number" placeholder="Enter the amount"/>
        {/* add expense button here */}
        <Button>Add Expense</Button>
    </div>
};