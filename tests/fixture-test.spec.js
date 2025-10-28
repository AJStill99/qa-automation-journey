const { test } = require('../test-fixtures.js')

test('Checking...', async ({ testFixture }) => {
    // Placeholder test to ensure test suite runs
    
    console.log("Running fixture...")

    // Fixture will run here, as it uses await use() within the fixture itself, so no additional code is needed. 

    console.log("Finished fixture.")

    // If we look at the textFixture on ./test-fixtures.js,
    // We have a console.log before and after the await.use() call, which simulates a beforeEach and afterEach
});

