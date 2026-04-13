// Math functions
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero not allowed");
    }
    return a / b;
}

function isEven(num) {
    return num % 2 === 0;
}

function isPositive(num) {
    return num > 0;
}

// Utility function for test execution
function runTest(testId, description, expected, actual) {
    console.log(`\nTest Case ID: ${testId}`);
    console.log(`Description: ${description}`);
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);

    if (expected === actual) {
        console.log("Status: ✅ PASS");
    } else {
        console.log("Status: ❌ FAIL");
        process.exitCode = 1; // mark failure but continue
    }
}

console.log("===== TEST EXECUTION STARTED =====");

// SUM Tests
runTest("TC_01", "Verify sum of 2 and 3", 5, sum(2, 3));
runTest("TC_02", "Verify sum of -5 and 10", 5, sum(-5, 10));
runTest("TC_03", "Verify sum of 0 and 0", 0, sum(0, 0));

// SUBTRACT Tests
runTest("TC_04", "Verify subtract 10 - 5", 5, subtract(10, 5));
runTest("TC_05", "Verify subtract 5 - 10", -5, subtract(5, 10));

// MULTIPLY Tests
runTest("TC_06", "Verify multiply 3 * 4", 12, multiply(3, 4));
runTest("TC_07", "Verify multiply -2 * 5", -10, multiply(-2, 5));
runTest("TC_08", "Verify multiply 0 * 100", 0, multiply(0, 100));

// DIVIDE Tests
runTest("TC_09", "Verify divide 20 / 4", 5, divide(20, 4));
runTest("TC_10", "Verify divide 15 / 3", 5, divide(15, 3));

// IS EVEN Tests
runTest("TC_11", "Verify 4 is even", true, isEven(4));
runTest("TC_12", "Verify 7 is not even", false, isEven(7));
runTest("TC_13", "Verify 0 is even", true, isEven(0));

// IS POSITIVE Tests
runTest("TC_14", "Verify 5 is positive", true, isPositive(5));
runTest("TC_15", "Verify -5 is not positive", false, isPositive(-5));
runTest("TC_16", "Verify 0 is not positive", false, isPositive(0));

// Fail Case for Demo
runTest("TC_17", "Verify incorrect expected result", 10, sum(3, 3));

console.log("\n===== TEST EXECUTION COMPLETED =====");

// Fail pipeline if any test failed
if (process.exitCode) {
    console.error("\nSome test cases FAILED ❌");
    process.exit(1);
} else {
    console.log("\nAll test cases PASSED ✅");
}