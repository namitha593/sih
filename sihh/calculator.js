function calculateWaterFootprint() {
    // Retrieve values from the form
    const evaporatedBlueWater = parseFloat(document.getElementById('evaporated-blue-water').value) || 0;
    const blueWaterIncluded = parseFloat(document.getElementById('blue-water-included').value) || 0;
    const amountOfDrainage = parseFloat(document.getElementById('amount-of-drainage').value) || 0;

    const greenWaterEvaporated = parseFloat(document.getElementById('green-water-evaporated').value) || 0;
    const greenWaterIncluded = parseFloat(document.getElementById('green-water-included').value) || 0;

    const pollutantLoad = parseFloat(document.getElementById('pollutant-load').value) || 0;
    const maxConcentration = parseFloat(document.getElementById('max-concentration').value) || 0;
    const naturalConcentration = parseFloat(document.getElementById('natural-concentration').value) || 0;

    // Calculate footprints
    const blueWaterFootprint = evaporatedBlueWater + blueWaterIncluded + amountOfDrainage;
    const greenWaterFootprint = greenWaterEvaporated + greenWaterIncluded;
    const greyWaterFootprint = pollutantLoad / (maxConcentration - naturalConcentration);

    // Display results
    document.getElementById('blue-water-result').textContent = `Blue Water Footprint: ${blueWaterFootprint.toFixed(2)} m³`;
    document.getElementById('green-water-result').textContent = `Green Water Footprint: ${greenWaterFootprint.toFixed(2)} m³`;
    document.getElementById('grey-water-result').textContent = `Grey Water Footprint: ${greyWaterFootprint.toFixed(2)} m³`;
}
