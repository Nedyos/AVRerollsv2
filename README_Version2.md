# Reroll Counter

A simple React app to count rerolls for rare probability events, e.g. "summoning" in games.

## Features

- Reroll button simulates a rare event (0.005% chance per roll)
- Tracks number of rolls, probability of at least one success, and expected rolls for 50% chance
- Shows when you hit the rare drop
- Reset button

## Usage

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Run locally:**

    ```bash
    npm start
    ```

3. **Build for production:**

    ```bash
    npm run build
    ```

4. **Deploy on Netlify:**
    - Connect your GitHub repo to Netlify.
    - Set the build command: `npm run build`
    - Set publish directory: `build`

## License

MIT