if (!process.env.WEATHER_API_KEY) {
  console.error("Test Failed: WEATHER_API_KEY is missing!");
  process.exit(1);
}

console.log("All tests passed! WEATHER_API_KEY is set.");
