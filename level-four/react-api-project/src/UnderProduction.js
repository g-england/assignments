import React from "react"

function UnderProduction() {
    const result = `Based on the specifications you gave us, it looks like your quoted system will not produce enough power for your home's needs.
    To avoid incurring a power bill at the end of each month, consider increasing your system size to meet your power consumption.`

    return (
        <p>{result}</p>
    )
}

export default UnderProduction